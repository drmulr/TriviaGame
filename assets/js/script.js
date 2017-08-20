$(document).ready(function() {

	var carStart = new Audio("assets/carstart.wav");
	var nextQdiv = document.getElementById("#gameQ");

	var questions = {
		q1: ["Marty meets Doc at which shopping mall in the first Back to the Future film?", "Twin Pines"],
		q2: ["What is printed on the license plate of the time-traveling DeLorean?", "OutaTime"],
		q3: ["Who is playing in the World Series in 2015?", "Chicago vs Miami"],
		q4: ["What date do Marty, Doc, and Jennifer travel to in Back to the Future II?", "October 21, 1985"],
		q5: ["What kind of drink does Marty ask for when he arrives in the old West?", "Water"],
		q6: ["After Marty arrives in 1855, the next train will be leaving town on Monday at what time?", "8:00am"],
		q7: ["What is Buford Tannen's nickname?", "Mad Dog"],
		q8: ["Marty is to meet up with Griff Tannen in which cafe in 2015?", "Cafe 80's"],
		q9: ["What does Biff run into after he chases Marty around the Hill Valley square?", "Manure"],
		q10: ["What does Doc Brown call his dog in 1955?", "Copernicus"]
		};

	// We start the game with a score of 0.
	var score = 0;
	// Variable to hold the index of current question.
	var questionIndex = 0;
	// Array of questions.
	var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5, questions.q6, questions.q7, questions.q8, questions.q9, questions.q10];




//ON-LOAD
	function playLogo(){
		$("#logoDiv").append("<h1>Trivia Time!</h1>").fadeIn("slow");
		//need trivia to just show up after like 2 seconds
		//play music here too maybe
		console.log("trivia after 5 seconds works!")
		carStart.play();
	}
	function startButton() {
		$("#gameQ").append("Ready to Start?");
		$("#gameQ").click( function() {
			$("#gameQ").html(bringQuestion);
		});
    };

//PLAY THE GAME
    function bringQuestion() {
    	// If there are still more questions, render the next one.
        if (questionIndex <= (questionsArray.length - 1)) {
          document.querySelector("#gameQ").innerHTML = questionsArray[questionIndex][0];
        }
        // If there aren't, render the end game screen.
        else {
          document.querySelector("#gameQ").innerHTML = "Game Over!";
          document.querySelector("#scoreDiv").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
    }


    function updateScore() {
    	document.querySelector("#scoreDiv").innerHTML = "Score: " + score;

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




		//start button shows up, and when clicked, to start game

	function playGame() {
		// $("#gameQ").html("<p>" + questionsArray[0] + "</p>");
		// console.log(questionsArray[0]);

		// for (var i = 0; i < questionsArray.length; i++) {
		// 	var newQ = document.createElement("div");
		// 	newQ.innerHTML = questionsArray[i];
		// 	nextQdiv.append(newQ);
		// }

		//load a question
			//start timer
			//on question answer or timer up, go to next question
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



