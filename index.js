$(document).ready(function () {
    smoothScroll();
});

function smoothScroll() {
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
}


//mobile navigation closes after item is clicked.
$(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});





//Email Form submition
url = 'https://script.google.com/macros/s/AKfycbw87186_Fo2VC1lZK1WEekJCI-sAI66VpgfLYminwRngcm_Mac/exec';

var name;
var email;

$(document).ready(function() {
    try {
        $('#submit').submit(setTimeout(Input(), 200));
        }
    catch(w) {
console.log();
        }
});

var replaced1;
var replaced2;

function Input() {
    var address = window.location.href;
    var inputs = address.split('?',6);
    var input = inputs[1];
    input = input.split('&', 2);
    var input1= input[0];
    var input2 = input[1];
    input1 = input1.split('=',2);
    input2 = input2.split('=',2);
    var inputs1= input1[1];
    var inputs2= input2[1];
    replaced1= inputs1.replace('+',' ');
    replaced2 = inputs2.replace('%40','@');
    name = replaced1;
    email = replaced2;
    Ajax();
}
var object = {
name:name,
email:email,
};


function Ajax() {
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: {
name:name,
email:email
},
success: success()
});
}
function success() {
    $('#response').text('Thank You');
}