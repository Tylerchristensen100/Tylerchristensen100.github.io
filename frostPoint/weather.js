$(document).ready(function() {


    // $('#search').click(function() {
    //     var city = $('#searchBox').val();

    //     if(city != '') {
    //         $.ajax({
    //             url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&appid=c3b171ee77a6e4656cd3a217eeb54ccc',
    //             type:'GET',
    //             dataType: 'jsonp',
    //             success: function(data) {
    //                 console.log(data.weather);
    //             }
    //         })

    //     } else {
    //         $('#error').html('Field cannot be empty');
    //     }
    // })



    $('#search').click(function(){

        //get value from input field
        var city = $("#searchBox").val();

        //check not empty
        if (city != ''){

            $.ajax({
                
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=c3b171ee77a6e4656cd3a217eeb54ccc",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    
                    console.log(city);
                    console.log(data);
                    console.log(data.main.temp_min);
                    

                    $("#show").html(data.main.temp_min);
                }
            });

        }else{
            $('#error').html('Field cannot be empty');
        }

    });





})