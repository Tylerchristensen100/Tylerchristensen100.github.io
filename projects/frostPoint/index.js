$(document).ready(function(){
    function searchKeyPress(e)
    {
        // look for window.event in case event isn't passed in
        e = e || window.event;
        if (e.keyCode == 13)
        {
            document.getElementById('#search').click();
            return false;
        }
        return true;
    }
  
})

