<?php

    require "PHPMailerAutoload.php";
    require('recaptcha-master/src/autoload.php');
    
    
    $okMessage = 'Die Nachricht wurde erfolgreich gesendet!';
    $errorMessage = 'Die Nachricht konnte nicht gesendet werden, bitte versuchen Sie es später erneut.';
    $recaptchaSecret = '6LeQhCUUAAAAAApZBUuHZg_0FELth1FvxKtA3cmh';

    function convert_encoding($target){
        $encoding = mb_detect_encoding($target);
        $target = mb_convert_encoding($target, "UTF-8", $encoding);
    }

    function setup_mail(){
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'mail.mineguild.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'root@mineguild.net';
        $mail->Password = 'H:E854G-89BG';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 25;
        $mail->CharSet = 'UTF-8';
        return $mail;
    }
    
    try {
        if(!empty($_POST)) {
            if(!isset($_POST['g-recaptcha-response'])) {
                throw new \Exception('ReCaptcha is not set.');
            }

            $recaptcha = new \ReCaptcha\ReCaptcha($recaptchaSecret, new \ReCaptcha\RequestMethod\CurlPost());
             
            $response = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
             
            if (!$response->isSuccess()) {
                throw new \Exception('ReCaptcha was not validated.');
            }
            
            setup_mail();
            
            setlocale(LC_TIME, "de_DE.utf8");
            $email = htmlspecialchars($_POST["email"]);
            $anrede = htmlspecialchars($_POST["anrede"]);
            $vorname = htmlspecialchars($_POST["vorname"]);
            $nachname = htmlspecialchars($_POST["nachname"]);
            $name = $anrede . " " . $vorname . " " . $nachname;
            $nachricht = "Nachricht von: " . $name . "\n";
            if(isset($_POST['telefon']) && !empty($_POST['telefon'])){
                $nachricht = $nachricht . "Telefonnummer: " . $_POST['telefon'] . "\n";
            }
            $nachricht = $nachricht . "Nachricht:\n";
            $separator = "\r\n";
            $line = strtok($_POST["nachricht"], $separator);
            while($line !== false) {
                $nachricht = $nachricht . "\t" . $line . "\n";
                $line = strtok($separator);
            }
            $nachricht = $nachricht . "Ende der Nachricht.";
            $empfaenger = "kstein@inforbi.de";
            $betreff = "Websitenachricht: " . date("d M Y H:i") . " - " . $anrede . " " . $nachname;


            convert_encoding($name);
            convert_encoding($nachricht);
            convert_encoding($betreff);

            $mail = setup_mail();
            $mail->setFrom("web@inforbi.de", "Inforbi Mailer");
            $mail->addAddress($empfaenger);
            $mail->addReplyTo($email);
            $mail->Subject = $betreff;
            $mail->Body = $nachricht;
            if(!$mail->send()) {
                throw new \Exception('Message was not sent.');
            }
            $mail = setup_mail();
            $mail->setFrom("web@inforbi.de", "Inforbi Mailer");
            $mail->addAddress($email);
            $mail->addReplyTo("kstein@inforbi.de", "Korbinian Stein");
            $mail->Subject = "Kopie - " . $betreff;
            $mail->Body = "Kopie Ihrer Nachricht an mich:\n" . $nachricht;
            $mail->send();

            $responseArray = array('type' => 'success', 'message' => $okMessage);
        }
    }
    catch (\Exception $e)
    {
        $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    }
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        $encoded = json_encode($responseArray);

        header('Content-Type: application/json');

        echo $encoded;
    }
    else {
        echo $responseArray['message'];
    }
?>
