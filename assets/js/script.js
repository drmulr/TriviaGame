$(document).ready(function() {

	var carStart = new Audio("assets/carstart.wav");
	var nextQdiv = document.getElementById("#gameQ");


	var questions = [
		{ 	
			q: "Marty meets Doc at which shopping mall in the first Back to the Future film?",
			a: ["Lone Pine", "Wild Oak", "Big Fir", "Twin Pines"],
			correctA: "ans4"
		},
		
		{ 
			q: "What is printed on the license plate of the time-traveling DeLorean?",
			a: ["Science", "TimeTvl", "OutaTime", "Time4U"],
			correctA: "ans3" 
		},
		{ 
			q: "Who is playing in the World Series in 2015?",
			a: ["Chicago vs Miami", "New York vs Los Angeles", "San Francisco vs Texas", "Seattle vs Atlanta"],
			correctA: "ans1" 
		}
		];

		// q3: ["Who is playing in the World Series in 2015?", "Chicago vs Miami"],
		// q4: ["What date do Marty, Doc, and Jennifer travel to in Back to the Future II?", "October 21, 1985"],
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

	var answerA = questions[answerIndex].a[0];
	var answerB = questions[answerIndex].a[1];
	var answerC = questions[answerIndex].a[2];
	var answerD = questions[answerIndex].a[3];	

	var currentQ = questions[questionIndex].q;
	console.log("Current Question: " + currentQ);
	console.log("Next Question: " + questions[1].q);
	var a1 = questions[answerIndex].a;
	var correctAnswer = questions[0].correctA;
	var chosenAnswer = [];

	console.log("This should say Lone Pine: " + answerA);
	console.log(answerB + answerC + answerD);

// <div id="timeClock"></div>
// <div id="gameQ"></div>
// <div id="scoreDiv"></div>


// .click(function(){$(this).slideUp();})


//ON-LOAD
	function playLogo(){
		$("#logoDiv").append("<h1>Trivia Time!</h1>").fadeIn("slow");
		//need trivia to just show up after like 2 seconds
		//play music here too maybe
		console.log("trivia after 5 seconds works!")
		carStart.play();
	}
	function startButton() {
		$("#startButton").append("Ready to Start?");
		$("#startButton").click(function(){
			$("#startButton").hide();
			$("#gameQ").html(bringQuestion);


		});		
    };

//PLAY THE GAME
    function bringQuestion() {
    	$("#gameQ").html(currentQ);				
			$("#ans1").append(answerA + "<br>").hover(function() {$(this).toggleClass("hover")});
			$("#ans2").append(answerB + "<br>").hover(function() {$(this).toggleClass("hover")});
			$("#ans3").append(answerC + "<br>").hover(function() {$(this).toggleClass("hover")});
			$("#ans4").append(answerD + "<br>").hover(function() {$(this).toggleClass("hover")});
	
        // if (questionIndex <= (questionsArray.length - 1)) {
        //   document.querySelector("#gameQ").innerHTML = questionsArray[0][0];
        // }
        // else {
        //   document.querySelector("#gameQ").innerHTML = "Game Over!";
        //   document.querySelector("#scoreDiv").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        // }
    }

    $(".ans").click(function(e) {
    	var chosenAnswer = e.target.id
    	if( chosenAnswer == correctAnswer) {
    		score++;
    		questionIndex++;
    		answerIndex++;
    		alert("Yes");
    		$("#gameQ").html("");
    		updateScore();
    		bringQuestion();
    		
    	} else {
    		alert("No");
    	}
    console.log("Correct Answer should be Twin Pines: " + correctAnswer)
    console.log("What the piece is this? " + e.target.id);
    })

    // function bringQuestion2() {
    // 	for( var question in questions ) {

    // 		console.log(questions[question][0]);

    	// }

    
    // }




    function updateScore() {
    	$("#scoreDiv").html("Total correct: " + score);
    }

		    //this list everything in the array...
			function questionList(arr) {
		        // We then loop through the selected array.
		        for (var i = 0; i < arr.length; i++) {
		          // Each time we print the value inside the array.
		          console.log(arr[i]);
		        }
		        console.log("---------");
		      }
    
	setTimeout(playLogo, 1000*3);
	setTimeout(startButton, 1000*6);

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



