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