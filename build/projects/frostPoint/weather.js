$(document).ready(function() {
    var key = config.API_TOKEN;
    function frost(data) {
        $("#temp").html("<h2>The Low is: " + data.main.temp_min + "</h2>");
        $("#show").append("<p>"+data.main.temp_min+"</p>");
        if(data.main.temp_min <=34) {
            $("#show").html("<h2>There will be frost tomorrow!!</h2>");
        }
        if(data.main.temp_min <=38 && data.main.humidity > 65) {
            $("#show").html("<h2>There will probably be frost tomorrow!</h2>");
        }
        if(data.main.temp_min >=39) {
            $("#show").html("<h2>There won't be frost tomorrow!</h2>");
        }

        
    }
   

    

    $('#search').click(function(){

        //get value from input field
        var city = $("#searchBox").val();

        //check not empty
        if (city != ''){

            $.ajax({
                
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + key,
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(city);
                    console.log(data);
                    console.log(data.main.temp_min);
                    frost(data);
                    
                }
            });

        }else{
            $('#error').html('Field cannot be empty');
        }
    });





})