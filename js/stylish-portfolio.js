/*!
 * Start Bootstrap - Stylish Portfolio (http://startbootstrap.com/)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

var content = null;

function LoadFile() {
  var oFrame = document.getElementById("frmFile");
  var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
  while (strRawContents.indexOf("\r") >= 0)
    strRawContents = strRawContents.replace("\r", "");
  var arrLines = strRawContents.split("\n");
  content = arrLines;
}


function progress(percent, width) {
    var size = Math.round(width*percent/100);
    var left = '', taken = '', i;
    for (i=size; i--;) {
        taken += '=';
    }
    if (taken.length > 0) {
        taken = taken.replace(/=$/, '>');
    }
    for (i=width-size; i--;) {
        left += ' ';
    }
    return '[' + taken + left + '] ' + percent + '%';
}

var animation = false;
var timer;
var prompt;
var string;

var anim = false;
function typed(finish_typing, prompt_alt) {
    return function(term, message, delay, finish) {
        anim = true;
        var prompt = term.get_prompt();
        var c = 0;
        if(!prompt_alt) {
          prompt_alt = '';
        }
        if (message.length > 0) {
            term.set_prompt(prompt_alt);
            var interval = setInterval(function() {
                term.insert(message[c++]);
                if (c == message.length) {
                    clearInterval(interval);
                    // execute in next interval
                    setTimeout(function() {
                        // swap command with prompt
                        finish_typing(term, message, prompt);
                        anim = false
                        finish && finish();
                    }, delay);
                }
            }, delay);
        }
    };
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function print_delay (term, message, delay) {
  await sleep(delay);
  term.echo(message);
}


var typed_prompt = typed(function(term, message, prompt) {
    // swap command with prompt
    term.set_command('');
    term.set_prompt(message + ' ');
});
var typed_message = typed(function(term, message, prompt) {
    term.set_command('');
    term.echo(message);
    term.set_prompt(prompt);
});

var typed_command = typed(function(term, message, prompt){
    term.set_command('');
    term.echo("inforbi> " + message);
    term.set_prompt(prompt);
}, 'inforbi> ');



jQuery(function($, undefined) {
$('#background-terminal').terminal(function(command, term) {
    if (command !== '') {
        try {
            var result = window.eval(command);
            if (result !== undefined) {
                this.echo(new String(result));
            }
        } catch(e) {
            this.error(new String(e));
        }
    } else {
       this.echo('');
    }
    typed_message(term, msg, 200, function() {
      finish = true;
  });
    typed_command(term, msg, 200, function() {
    finish = true;
});
}, {
    greetings: 'willkommen bei inforbi.de',
    name: 'js_demo',
    height: "100%",
    width: "100%",
    outputLimit: 0,
    scrollOnEcho: false,
    enable: true,
    //focus: false,
    prompt: 'inforbi> ',
    onInit: function(term) {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      // first question
      var msg = "init 0";
      typed_command(term, msg, 50, async function() {
        prompt = term.get_prompt();
        term.set_prompt("");
        await sleep(500);
        term.echo("loading korbi-kernel v20...");
        await sleep(1000);
        if(window.mobileAndTabletcheck)
          var i = content.length / 2;
        else
          var i = 0;
        for(var i = i; i < content.length - 1 ; i=i+2 ){
          await sleep(Math.random()*1);
          term.echo(content[i])
        }

        var i = 0, size = 30;
        string = progress(0, size);
        term.set_prompt(progress);
        animation = true;
        await sleep(500);
        (async function loop() {
            string = progress(i++, size);
            term.set_prompt(string);
            if (i < 100) {
                timer = setTimeout(loop, 10);
            } else {
                term.echo(progress(i, size) + ' [[b;green;]OK]')
                term.set_prompt('');
                term.clear();
                animation = false
                await sleep(Math.random()*1000);
                term.echo("- details -");
                await sleep(Math.random()*1000);
                term.echo("alter: 20");
                await sleep(Math.random()*1000);
                term.echo("name: korbinian stein");
                await sleep(Math.random()*1000);
                term.echo("beschäftigung: informatik-studium an der tum");
                await sleep(Math.random()*2000);
                term.echo("faszination: computer | philosophie | programmier- | sprachen")
                term.set_prompt(prompt);
            }
        })();

      });
    },
    keydown: function(e) {
        //disable keyboard when animating
        if (anim) {
            return false;
        }
    }

});
});
