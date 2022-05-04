//Copying text
$(document).ready(function() {
    $('#chssDVConference1').click(function(event) {
        event.preventDefault();
        navigator.clipboard.writeText('CHSS Conference 1');
        //console.log("copied CHSS Conference 1")
        $('#chssDVConference1 span').attr('tooltip', "Copied!");
        reset('#chssDVConference1 span');
    });


    function reset(tooltip) {
        setTimeout(function() {
            $(tooltip).attr('tooltip', "Copy");
        }, 1500);
    }

});