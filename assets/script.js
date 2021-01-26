$(document).ready(function() {

    // if (userInput === null || userInput === undefined) 
    
    // $("#firstOne .description").val(localStorage.getItem("firstOne"));
    
    // gettodo();
        //clear button check goes here buttoncheck.innerHTML = "";
        //get stored todo list and render on page
        // function gettodo() {
            //var first1 = localStorage.getItem("first1");
            //console.log(localStorage.getItem("first1"));
            //$("#first1").val(first1);
            //using the code below is dynamic because if the html ids change it will not break our code
            $(".description").each(function( index ) {
                console.log( index + ": " + $( this ).attr("id") );
                var userText = localStorage.getItem($(this).attr("id"));
                $("#" + $(this).attr("id")).val(userText); 
              });
    
    
    //starter code to test for API
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4186ebe167msh5543f6c878fb176p17fd99jsn82889e1748ce",
            "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    
      var inspiration = $("<p>").text("Daily Quote: ' "  + response.text + "'- " + response.author);
    
     $("#apiins").append(inspiration);
    });
    
    
      $("header").append("<h1> Looking for balance </h1>")
    
        // Carousel link
        var instance = M.Carousel.init({
            fullWidth: true,
            indicators: true
          });
        
          // Or with jQuery
        
          $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
          });
    
          var currentDate = new Date();
          
          var weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";
    
          var n = weekday[currentDate.getDay()];
    
          var month = currentDate.getMonth() + 1;
          var day = currentDate.getDate();
          var year = currentDate.getFullYear();
          var hr = currentDate.getHours();
          var mn = currentDate.getMinutes();
          var sec = currentDate.getSeconds();
          var fullDate = n + (" ") + month + "/" + day + "/" + year;
          $(".date").text(fullDate);
    
    
         
    
          $(".description").change(function(evt) {
           var userInput = evt.currentTarget;
           console.log(userInput);
           var value = $(userInput).val().trim();
           var key = $(userInput).attr("id");
           console.log(key);
           localStorage.setItem(key, JSON.stringify(value));  
           
          });
    
          // function checked() {
          //   var ckbutton = document.getElementsByClassName("chckBox").checked;
          //   if (ckbutton === true) {
          //     console.log("button checked worked")
          //     $(".chckbox").addClass(".done");
          //   }
          //   };
    
            // Progress bar
          //   let i = 0;
          // function move() {
          //   if (i == 0) {
          //     i = 1;
          //     var elem = document.getElementById("myBar");
          //     var width = 1;
          //     var full = setInterval(frame, 10);
          //     function frame() {
          //       if (width >= 100) {
          //         clearInterval(full);
          //         i = 0;
          //       } else {
          //         width++;
          //         elem.style.width = width + "%";
          //       }
          //     }
          //   }
          // }
    
          
    
          
    
          const setting = {
            "async": true,
            "crossDomain": true,
            "url": "https://dad-jokes.p.rapidapi.com/random/joke",
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "4186ebe167msh5543f6c878fb176p17fd99jsn82889e1748ce",
              "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
            }
          };
          $.ajax(setting).done(function (response) {
            console.log(response);
            var dadJokeSetUp = $("<p>").text(response.body[0].setup);
            var dadJokePunchLine =$("<p>").text(response.body[0].punchline);
           $("#dadapi").append(dadJokeSetUp, dadJokePunchLine);
          });
    
    
    });
    
    
    
    
    
    