<?php
    $menu = "contact";
    $hmenu = $menu;
    $title = "Kontakt - Inforbi";
?>
<?php  require_once("head.php"); ?>

    <section class="container-fluid">
        <h1>Inforbi - Kontakt <small>Korbinian Stein</small></h1>
        <article class="container-fluid">
            <div class="row">
            <p class="lead">Kontaktformular</p>
            <form id="contact-form" action="mailer.php" method="post" role="form" class="form-horizontal col-lg-6 col-md-8">
                <div class="messages"></div>
                <div class="controls">
                    <div class="form-group row">
                        <div class="col-md-12 nopadding row">
                            <label for="person">Name (*)</label>
                        </div>

                        <div id="person" class="col-md-2 nopadding person">
                            <select name="anrede" id="anrede" class="form-control">
                              <option>Herr</option>
                              <option>Frau</option>
                              <option>Herr Dr.</option>
                              <option>Frau Dr.</option>
                            </select>
                        </div>
                        <div class="col-md-5 nopadding">
                            <input name="vorname" type="text" class="form-control" id="vorname" placeholder="Vorname" required/>
                        </div>
                        <div class="col-md-5 nopadding">
                            <input name="nachname" type="text" class="form-control" id="nachname" placeholder="Nachname" required/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">E-Mail Adresse (*)</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="E-Mail" required/>
                    </div>
                    <div class="form-group">
                        <label for="telephone">Telefonnummer</label>
                        <input type="tel" pattern='^[0-9\-\+\s\(\)]*$' name="telefon" class="form-control" id="telephone" placeholder="Telefonnummer" />
                    </div>
                    <div class="form-group">
                        <label for="nachricht">Ihre Nachricht (*)</label>
                        <textarea name="nachricht" class="form-control" rows="4" id=nachricht placeholder="Nachricht" required></textarea>

                    </div>
                    <div class="form-group">
                        <div class="g-recaptcha" data-sitekey="6LeQhCUUAAAAADzRvGL7HSNgAzEdb0mtc6817yga"></div>
                    </div>
                    <div class="form-group">
                        <input type=submit class="btn btn-primary">
                    </div>
                </div>
            </form>
            <p class="col-sm-12">
            Telefon:<a href="tel:+ 4917672207211"> + 49 176 72207211</a>
            </p>
            </div>
            <div class="btn-group-vertical" id="social-group" role="group">
            <a class="btn btn-block btn-social btn-github" href="https://github.com/nylser" target="blank" ><span class="fa fa-github"></span>GitHub-Account betrachten</a>
            <a class="btn btn-block btn-social btn-facebook" href="https://facebook.com/korbinian.stein" target="blank"><span class="fa fa-facebook"></span>Auf Facebook kontaktieren</a>
            </div>
        </article>
    </section>
    
    <script src="jquery-3.2.1.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script src="contact.js"></script>

<?php  require_once("footer.php"); ?>
