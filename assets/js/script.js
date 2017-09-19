  $(document).ready(function() {

    var carStart = new Audio("assets/audio/carstart.wav");
  	var themeAudio = new Audio("assets/audio/theme.mp3");
  	var nextQdiv = document.getElementById("#gameQ");
    //WORK ON CAR START AND THEME PLAY
  	// setTimeout(carStart.play(), 1000*3);
  	// setTimeout(startButton, 1000*5);
    $(".theme-button").on("click", function() {
      themeAudio.play();
    });
    // Pause Button
    $(".pause-button").on("click", function() {
      themeAudio.pause();
    });


    $("#start").on("click", function(){
        $("#start").remove();
        game.loadQuestion();
        $(".triviaText").hide();
    })
    $(document).on("click", ".answer-button", function(e){
        game.clicked(e);
    })
    $(document).on("click", "#reset", function(e){
        game.reset();
    })

    var questions = [
      {
        q: "Marty meets Doc at which shopping mall in the first Back to the Future film?",
        a: ["Lone Pine", "Wild Oak", "Big Fir", "Twin Pines"],
        correctA: "Twin Pines",
        image: "gif"},
        {
        q: "What is printed on the license plate of the time-traveling DeLorean?",
        a: ["Science", "TimeTvl", "OutaTime", "Time4U"],
        correctA: "OutaTime",
        image: "gif"},
        {
        q: "Who is playing in the World Series in 2015?",
        a: ["Chicago vs Miami", "New York vs Los Angeles", "San Francisco vs Texas", "Seattle vs Atlanta"],
        correctA: "Chicago vs Miami",
        image: "gif"},
        {
        	q: "What kind of drink does Marty ask for when he arrives in the old West?",
        	a: ["Milk", "Icewater", "Pepsi", "Root Beer"],
        	correctA: "Icewater"
        },
        {
        	q: "After Marty arrives in 1855, the next train will be leaving town on Monday at what time?",
        	a: ["7:00am", "8:00am", "9:00am", "10:00am"],
        	correctA: "8:00am"
        },
        {
        	q: "What is Buford Tannen's nickname?",
        	a: ["Lone Wolf", "Crazy Snake", "Mad Dog", "Wild Bull"],
        	correctA: "Mad Dog"
        },
        {
        	q: "Marty is to meet up with Griff Tannen in which cafe in 2015?",
        	a: ["Cafe Future", "Cafe 80's", "Giggawatts", "Space Cafe"],
        	correctA: "Cafe 80's"
        },
        {
        	q: "What does Biff run into after he chases Marty around the Hill Valley square?",
        	a: ["Garbage", "Dirt", "Manure", "Tar"],
        	correctA: "Manure"
        },
        {
        	q: "What does Doc Brown call his dog in 1955?",
        	a: ["Copernicus", "Edison", "Einstein", "Tesla"],
        	correctA: "Copernicus"
        }

      ];
    var game = {
        questions:questions,
        currentQ:0,
        counter:10,
        correct:0,
        incorrect:0,
        unanswered:0,

        countdown: function(){
            game.counter--;
            $("#counter").html(game.counter);
            if(game.counter<=0){
              console.log("Time Up!");
              game.timeUp();
            }
        },
        loadQuestion: function(){
            timer = setInterval(game.countdown,1000);
            $("#subwrapper").html("<h4>Next question in: <span id='counter'>10</span> seconds!</h4>");
            $("#subwrapper").append("<h2>"+questions[game.currentQ].q+"</h2>");
            for(var i = 0; i < questions[game.currentQ].a.length; i++){
              $("#subwrapper").append('<button class="answer-button btn-lg btn-group-vertical" id="button-' + i + '"data-name="'+ questions[game.currentQ].a[i]+ '">' + questions[game.currentQ].a[i] + '</button>');
            }
        },
        nextQuestion: function(){
            game.counter = 10;
            $("#counter").html(game.counter);
            game.currentQ++;
            game.loadQuestion();
        },
        timeUp: function(){
          clearInterval(timer);
          game.unanswered++;
          var gifOutTime = $("<img>");
          gifOutTime.attr("src", "assets/images/outTime.gif");
          $("#subwrapper").html("<h2>Out of time!</h2>");
          $("#subwrapper").append(gifOutTime);
          $("#subwrapper").append("<h3>The Correct Answer Was: " + questions[game.currentQ].correctA + "</h3>");
          if(game.currentQ == questions.length-1){
            setTimeout(game.results,2*1000);
          } else {
            setTimeout(game.nextQuestion,2*1000);
          }
        },
        results: function(){
            clearInterval(timer);
            $("#subwrapper").html("<h3>GAME OVER!</h3>");
            $("#subwrapper").append("<h4>Correct: " +  game.correct + "</h4>");
            $("#subwrapper").append("<h4>Incorrect: " +  game.incorrect + "</h4>");
            $("#subwrapper").append("<h4>Unanswered: " +  game.unanswered + "</h4>");
            $("#subwrapper").append("<button id='reset'>Play again?</button>");

        },
        clicked: function(e){
            clearInterval(timer);
            //if correct answer is clicked:
            if($(e.target).data("name") == questions[game.currentQ].correctA){
                game.answeredCorrectly();
            } else {
                game.answeredIncorrectly();
            }
        },
        answeredCorrectly: function(){
            console.log("Right!");
            clearInterval(timer);
            game.correct++;
            var gifCorrect = $("<img>");
            gifCorrect.attr("src", "assets/images/correctQ.gif");
            $("#subwrapper").html("<h2>You got it right!</h2>");
            $("#subwrapper").append(gifCorrect);
            if(game.currentQ == questions.length-1){
              setTimeout(game.results,2*1000);
            } else {
              setTimeout(game.nextQuestion,2*1000);
            }
        },
        answeredIncorrectly: function(){
            console.log("wrong!");
            clearInterval(timer);
            game.incorrect++;
            var gifIncorrect = $("<img>");
            gifIncorrect.attr("src", "assets/images/wrongQ.gif");
            $("#subwrapper").html("<h2>You got it wrong!</h2>");
            $("#subwrapper").append(gifIncorrect);
            $("#subwrapper").append("<h3>The Correct Answer Was: " + questions[game.currentQ].correctA + "</h3>");
            if(game.currentQ == questions.length-1){
              setTimeout(game.results,2*1000);
            } else {
              setTimeout(game.nextQuestion,2*1000);
            }
        },
        reset: function(){
            game.currentQ = 0;
            game.counter = 10;
            game.correct = 0;
            game.incorrect = 0;
            game.unanswered = 0;
            game.loadQuestion();
        }
    }
  })
