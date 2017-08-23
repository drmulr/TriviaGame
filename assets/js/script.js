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
		{
			q: "What kind of drink does Marty ask for when he arrives in the old West?",
			a: ["Milk", "IceWater", "Pepsi", "Root Beer"],
			correctA: "1"
		},
		{
			q: "After Marty arrives in 1855, the next train will be leaving town on Monday at what time?",
			a: ["7:00am", "8:00am", "9:00am", "10:00am"],
			correctA: "1"
		},
		{
			q: "What is Buford Tannen's nickname?",
			a: ["Lone Wolf", "Crazy Snake", "Mad Dog", "Wild Bull"],
			correctA: "2"
		},
		{
			q: "Marty is to meet up with Griff Tannen in which cafe in 2015?",
			a: ["Cafe Future", "Cafe 80's", "Giggawatts", "Space Cafe"],
			correctA: "1"
		},
		{
			q: "What does Biff run into after he chases Marty around the Hill Valley square?",
			a: ["Garbage", "Dirt", "Manure", "Tar"],
			correctA: "2"
		},
		{
			q: "What does Doc Brown call his dog in 1955?",
			a: ["Copernicus", "Edison", "Einstein", "Tesla"],
			correctA: "0"
		},
		];

		// q5: ["What kind of drink does Marty ask for when he arrives in the old West?", "Water"],
		// q6: ["After Marty arrives in 1855, the next train will be leaving town on Monday at what time?", "8:00am"],
		// q7: ["What is Buford Tannen's nickname?", "Mad Dog"],
		// q8: ["Marty is to meet up with Griff Tannen in which cafe in 2015?", "Cafe 80's"],
		// q9: ["What does Biff run into after he chases Marty around the Hill Valley square?", "Manure"],
		// q10: ["What does Doc Brown call his dog in 1955?", "Copernicus"]

	// var answerChoices = {
	// 	q1: ["Lone Pine ", "Wild Oak ", "Big Fir ", "Twin Pines "],
	// 	q2: ["Science", "TimeTvl", "OutaTime", "Time4U"],
		// q3: ["Chicago Miami", "NY LA", "San Fran TX", "Seattle Atlanta"],
		// q4: ["September 22, 2015", "November 8, 2015", "December 1, 2015", "October 21, 2015"],
		// q5: ["Milk", "IceWater", "Pepsi", "Root Beer"],
		// q6: ["7:00am", "8:00am", "9:00am", "10:00am"],
		// q7: ["Lone Wolf", "Crazy Snake", "Mad Dog", "Wild Bull"],
		// q8: ["Cafe Future", "Cafe 80's", "Giggawatts", "Space Cafe"],
		// q9: ["Garbage", "Dirt", "Manure", "Tar"],
		// q10: ["Copernicus ", "Edison ", "Einstein ", "Tesla "]
	// }

	// Array of questions.
	// var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5, questions.q6, questions.q7, questions.q8, questions.q9, questions.q10];
	// var answersArray = [answerChoices.q1, answerChoices.q2, answerChoices.q3, answerChoices.q4, answerChoices.q5, answerChoices.q6, answerChoices.q7, answerChoices.q8, answerChoices.q9, answerChoices.q10];
	console.log("Should be Marty Meets Doc: " + questions[0].q);



	var score = 0;
	var questionIndex = 0;
	var answerIndex = 0;
	var currentQ = questions[questionIndex].q;
	var correctAnswer = questions[0].correctA;

	// .click(function(){$(this).slideUp();})


//BEGIN COUNTDOWN WORK
	var number = 100;
	var intervalID

    function run() {
      	intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
	      //  Decrease number by one.
	      number--;
	      //  Show the number in the #timeClock tag.
	      $("#timeClock").html("<h2>" + number + "</h2>");

	      if (number < 1) {
	        stop();
	        console.log("Time's up!");

	      }
    }
    function stop() {
	      //  Clears our intervalId
	      //  We just pass the name of the interval
	      //  to the clearInterval function.
	      clearInterval(intervalId);
	      $("#timeClock").html("<h2>00:00</h2>");
    }
//END COUNTDOWN WORK




//ON-LOAD
	function playLogo(){
		$("#logoDiv").append("<h1>Trivia Time!</h1>").fadeIn("slow");
		//need trivia to just show up after like 2 seconds
		//play music here too maybe
		carStart.play();
	}
	function startButton() {
		$("#startButton").append("Click to Start!");
		$("#startButton").click(function(){
			$("#startButton").hide();
			$("#gameQ").html(bringQuestion);
			themeAudio.play();

		});		
    }

//PLAY THE GAME
    function bringQuestion() {
    	endTime();
    	run();
    	currentQ = questions[questionIndex].q;
    	// answer0 = questions[answerIndex].a[0];
		// answer1 = questions[answerIndex].a[1];
		// answer2 = questions[answerIndex].a[2];
		// answer3 = questions[answerIndex].a[3];		
		correctAnswer = questions[questionIndex].correctA;

    	$("#gameQ").html(currentQ);	
    		for (var i = 0; i < 4; i++) {
    			var answers = $("<div>").attr("id",i).addClass("ans");
    			answers.append(questions[answerIndex].a[i] + "<br>").hover(function() {$(this).toggleClass("hover")});
    			$("#gameQ").append(answers);
    		}

        // if (questionIndex <= (questionsArray.length - 1)) {
        //   document.querySelector("#gameQ").innerHTML = questionsArray[0][0];
        // }
        // else {
        //   document.querySelector("#gameQ").innerHTML = "Game Over!";
        //   document.querySelector("#scoreDiv").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        // }
    }

    function endTime(){
    	if( questionIndex >= questions.length - 1 ) {
    		$("#gameQ").html("Game over.");
    	} else {
    		
    	}
    }

    $(document).on("click",".ans",function(e) {
    	var chosenAnswer = e.target.id;
    	if( chosenAnswer == correctAnswer ) {   		
    		score++;
    		questionIndex++;
    		answerIndex++;
    		alert("Yes");
    		$("#gameQ").html("");
    		updateScore();

    		if( questionIndex >= questions.length ) {
    			if( score == questions.length ){
    				$("#gameQ").html("A job well done! Perfect! <br> <br> Want to try again?")
    			} else {$("#gameQ").html("Game over. <br> <br> Want to try again?");
    			}   			
    		} else {
    		bringQuestion();
    		}

    		console.log("current question: " + currentQ);
    		console.log("Need answer index 2: " + answerIndex);
    		
    	} else {
    		questionIndex++;
    		answerIndex++;
    		alert("No");
    		$("#gameQ").html("");
    		updateScore();

    		if( questionIndex >= questions.length ) {
    			$("#gameQ").html("Game over.");
    		} else {
    		bringQuestion();
    		}
    		
    		console.log("current question: " + currentQ);
    		console.log("Need answer index : " + answerIndex);
    	}

    })
    console.log("Correct Answer should be Twin Pines: " + correctAnswer)
    
    // function bringQuestion2() {
    // 	for( var question in questions ) {

    // 		console.log(questions[question][0]);

    	// }

    
    // }
    function updateScore() {
    	$("#scoreDiv").html("Total correct: " + score + " of " + questionIndex);
    }

		    //this list everything in the array...
			// function questionList(arr) {
		 //        // We then loop through the selected array.
		 //        for (var i = 0; i < arr.length; i++) {
		 //          // Each time we print the value inside the array.
		 //          console.log(arr[i]);
		 //        }
		 //        console.log("---------");
		 //      }
    


});





// Marty meets Doc at which shopping mall in the first Back to the Future film?
// Lone Pine, Wild Oak, Big Fir, *Twin Pines

// What is printed on the license plate of the time-traveling DeLorean?
// Science, TimeTvl, *OutaTime, Time4U

// Who is playing in the World Series in 2015?
// *Chicago Miami, NY LA, San Fran TX, Seattle Atlanta

// What date do Marty, Doc, and Jennifer travel to in Back to the Future II?
// 9/22/15, 11/8/15, 12/1/15, *10/21/15

// What kind of drink does Marty ask for when he arrives in the old West?
// Milk, *IceWater, Pepsi, Root Beer

// After Marty arrives in 1855, the next train will be leaving town on Monday at what time?
// 7a, *8a, 9a, 10a

// What is Buford Tannen's nickname?
// Lone Wolf, Crazy Snake, *Mad Dog, Wild Bull

// Marty is to meet up with Griff Tannen in which cafe in 2015?
// Cafe Future, *Cafe 80's, Giggawatts, Space Cafe

// What does Biff run into after he chases Marty around the Hill Valley square?
// Garbage, Dirt, *Manure, tar.

// What does Doc Brown call his dog in 1955?
// *Copernicus, Edison, Einstein, Tesla



