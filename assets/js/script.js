$(document).ready(function() {
	var carStart = new Audio("assets/audio/carstart.wav");
	var themeAudio = new Audio("assets/audio/theme.mp3")
	var nextQdiv = document.getElementById("#gameQ");

	setTimeout(playLogo, 1000*2);
	setTimeout(startButton, 1000*5);

	// Song Button
        $(".theme-button").on("click", function() {
          themeAudio.play();
        });
        // Pause Button
        $(".pause-button").on("click", function() {
          themeAudio.pause();
        });
        //Restart Button - hides at beginning
        $(".btnPlayAgain").hide();

	var questions = [
		{
			q: "Marty meets Doc at which shopping mall in the first Back to the Future film?",
			a: ["Lone Pine", "Wild Oak", "Big Fir", "Twin Pines"],
			correctA: "3"
		},
		{
			q: "What is printed on the license plate of the time-traveling DeLorean?",
			a: ["Science", "TimeTvl", "OutaTime", "Time4U"],
			correctA: "2"
		},
		{
			q: "Who is playing in the World Series in 2015?",
			a: ["Chicago vs Miami", "New York vs Los Angeles", "San Francisco vs Texas", "Seattle vs Atlanta"],
			correctA: "0"
		},
		{
			q: "What date do Marty, Doc, and Jennifer travel to in Back to the Future II?",
			a: ["September 22, 2015", "November 8, 2015", "December 1, 2015", "October 21, 2015"],
			correctA: "3"
		},
		// {
		// 	q: "What kind of drink does Marty ask for when he arrives in the old West?",
		// 	a: ["Milk", "IceWater", "Pepsi", "Root Beer"],
		// 	correctA: "1"
		// },
		// {
		// 	q: "After Marty arrives in 1855, the next train will be leaving town on Monday at what time?",
		// 	a: ["7:00am", "8:00am", "9:00am", "10:00am"],
		// 	correctA: "1"
		// },
		// {
		// 	q: "What is Buford Tannen's nickname?",
		// 	a: ["Lone Wolf", "Crazy Snake", "Mad Dog", "Wild Bull"],
		// 	correctA: "2"
		// },
		// {
		// 	q: "Marty is to meet up with Griff Tannen in which cafe in 2015?",
		// 	a: ["Cafe Future", "Cafe 80's", "Giggawatts", "Space Cafe"],
		// 	correctA: "1"
		// },
		// {
		// 	q: "What does Biff run into after he chases Marty around the Hill Valley square?",
		// 	a: ["Garbage", "Dirt", "Manure", "Tar"],
		// 	correctA: "2"
		// },
		// {
		// 	q: "What does Doc Brown call his dog in 1955?",
		// 	a: ["Copernicus", "Edison", "Einstein", "Tesla"],
		// 	correctA: "0"
		// },
		];

	var score = 0;
	var questionIndex = 0;
	var answerIndex = 0;
	var currentQ = questions[questionIndex].q;
	var correctAnswer = questions[0].correctA;

	// .click(function(){$(this).slideUp();})
//BEGIN COUNTDOWN WORK
	var number = 10;
	var intervalID;

    function run() {
    	number = 10;
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
	      //  Decrease number by one.
	      number--;
	      //  Show the number in the #timeClock tag.
	      $("#timeClock").html("<h2>Time left: " + number + "</h2>");
	      if (number < 1) {
	        stop();
	        console.log("Time's up!");
					questionIndex++;
					answerIndex++;
					updateScore();
					bringQuestion();
	      }
    }
    function stop() {
	      clearInterval(intervalId);
    }
//END COUNTDOWN WORK


//ON-LOAD
	function playLogo(){
		$("#gameTitle").append("<h1>Trivia Time!</h1>").fadeIn("slow");
		carStart.play();
	}
	function startButton() {
		$("#startButton").append("Click to Start!");
		$("#startButton").click(function(){
			$("#startButton").slideUp();
			$("#gameTitle").slideUp();
			$("#gameQ").html(bringQuestion);
			themeAudio.play();
		});
    }

//PLAY THE GAME
    function bringQuestion() {
    	// endTime();
    	run();
    	currentQ = questions[questionIndex].q;
			correctAnswer = questions[questionIndex].correctA;
    	$("#gameQ").html(currentQ);
    		for (var i = 0; i < 4; i++) {
    			var answers = $("<div>").attr("id",i).addClass("ans");
    			answers.append(questions[answerIndex].a[i] + "<br>").hover(function() {$(this).toggleClass("hover")});
    			$("#gameQ").append(answers);
    		}
    }

    function updateScore() {
    	$("#scoreDiv").html("Total correct: " + score + " of " + questionIndex);
    }
    //Apparently I didn't need this function below...
    // function endTime(){
    // 	if( questionIndex >= questions.length - 1 ) {
    // 		$("#gameQ").html("Game over.");
    // 		$("#timeClock").html("");
    // 	} else {}
    // }

    $(document).on("click",".ans",function(e) {
    	var chosenAnswer = e.target.id; //Chosen answer = HTML ID
			if( chosenAnswer == correctAnswer ) {
	    		score++;
	    		questionIndex++;
	    		answerIndex++;
	    		$("#gameQ").html("");
	    		updateScore();
	    		if( questionIndex >= questions.length ) { //Reach end of questions - end game
		    			if( score == questions.length ){ //If player played a perfect game
			    				$("#gameQ").html("A job well done! Perfect! <br> <br> Want to try again?")
			    				$(".btnPlayAgain").show();
		    			} else { //If player missed any questions
			    				$("#gameQ").html("Game over. <br> <br> Want to try again?");
			    				$(".btnPlayAgain").show();
		    			}
	    		} else {
	    		clearInterval(intervalId);
	    		bringQuestion();
	    		}
    	} else {
    		questionIndex++;
    		answerIndex++;
    		$("#gameQ").html("");
    		updateScore();
    		if( questionIndex >= questions.length ) {
	    			$("#gameQ").html("Game over.");
	    			$(".btnPlayAgain").show();
    		} else {
    		clearInterval(intervalId);
    		bringQuestion();
    		}
    	}
    })
});
