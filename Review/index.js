$(document).ready(function() {

$("#Foo").click(Foo);
$("#Bar").click(Bar);


function Bar() {
    Event.preventDefault;
    $('#outPut').append("<h1>BAR</h1>")
    console.log("BAR"); 
    
    //Foo(i);
     }

function Foo(i) {
    Event.preventDefault;
    $('#outPut').append("<h1>FOO</h1>")
    console.log("FOO"); 
}





});

