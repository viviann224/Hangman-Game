/////////////////////////////////////////////
//Vivian Tuong Nguyen
//Javascript code for Hangman [Bulldog Edition]
///////////////////////////////////////////////

//create a word array of sceret words
var arrayword = ["twins", "hungry", "doughnut", "longhorn", "confused", "snow", "tongue", "music", "yoda", "grumpy", "sleeping", "drink"];
//creates an array of the secret array
var arrayrand;
//creates an array for the user
var guessArray;
//creates an array to store all the wrong values
var wrongarray = [];
//starts the game with 10 guesses
var counter=10;
//sets the game to not done
var isDone=false;
//sets the wins to 0
var wins=0;
//variable for user guess
var userguess;

//getArray() first choose a word randomly and creates dashes
//based on the length of the words
//please look at the getArray() function to see the logic of the method.
getArray();

//gets user to guess when the user presses a key
document.onkeyup = function()
{
	document.getElementById("winner").innerHTML = "<br><br>";
	//waits for user input and checks if there are guesses left
	if(counter>0)
	{
		//gets the user input and converts the guess to lowercase
		userguess = String.fromCharCode(event.keyCode).toLowerCase();

		//calls fillArray() function and passes in the guess, user's array, and the secret array
		//to update the user's blank array
		document.getElementById("dash").innerHTML = fillArray(userguess, guessArray, arrayrand).join("");

		//isDone variable calls the compare() function to check if the game is done
		//compare() function passes user's array and the secret array to see if matches
		//if matches user get a point
		//please look at the compare() function to see the logic of the method.
		isDone=compare(guessArray, arrayrand);
		//if the guess and secret array the same display winner, and give a point
		//empty out the wrong array and call getArray() to start over
		if(isDone&&counter>0)
		{
		document.getElementById("winner").innerHTML = "<br><br><h2>Congrats! YOU WIN!!</h2>";
		wins++;
		removeArray(wrongarray);
		getArray();
		}
		//if no more turns, tell user they lost and reset the game
		else if(counter == 0)
		{
			//display lose 
			document.getElementById("guessleft").innerHTML = "<br><br>I'm sorry you ran out of guesses";
			document.getElementById("winner").innerHTML = "<br><br><h2>I'M SORRY YOU LOST.<br>LETS PLAY AGAIN!!</h2>";
			//resets guesses
			counter=10;
			//set score back to 0
			wins=0;
			//empty out the wrong array
			removeArray(wrongarray);
			//get a new word and blank array
			getArray();
		}
		//displays how many guesses left for the user
		document.getElementById("guessleft").innerHTML = "<br><br>Guesses Left: "+counter;
		//displays the array of wrong letters
		document.getElementById("wrongguesses").innerHTML = "<br><br><strong>Attempted Letters</strong>: "+wrongarray;
		//displays the current score
		document.getElementById("score").innerHTML = "<br><br>Score: "+wins;
	}
}

//get array first choose a word randomly and creates dashes
//based on the length of the words
function getArray()
{
	//chooses a random word
	arrayrand = arrayword[Math.floor(Math.random()*arrayword.length)];
	//creates a blank array based on the random word for the user
	guessArray = blankArray(arrayrand);
	//prints out dashes based on the length of words for the user to see
	document.getElementById("dash").innerHTML = guessArray.join("");
	//makes the wrongarray empty for each use
	wrongarray.length=0;
	imgchange();
}

//passes in a word/string
//function splits a string into an array of chars
//returns the array of chars
function charArray(userword)
{
	var myArray;
	myArray=userword.split("",userword.length);
	for(var x=0; x<userword.length;x++)
	{
	}
	return myArray;	
}

//passes secretword and create a blank array of dashes based
//on the length of the secretword
//returns the blank array of dashes
function blankArray(blankword)
{
	var blankArray;
	blankArray=blankword.split("",blankword.length);

	for(var x=0; x<blankArray.length;x++)
	{
		blankArray[x]="-";
		console.log(blankArray[x]);
	}
	return blankArray;
}

//fillArray method takes in a guess, the user's array, and the secretarray.
//the function compares the guess to the secret array
//if there is a match, update the guessarray
//else but the guess in the wrong array and take a point away from the guesses.
//returns the updated guessarray
function fillArray(guess, guessArray,secretArray)
{
	var isFound=false;
	//for loop to check all comparison
	for(var x=0; x<guessArray.length; x++)
	{
		if(guess==secretArray[x])
		{
			guessArray[x]=guess;
			isFound=true;
		}
	}
	//if there are no matches update the counter (take a point away)
	if(!isFound)
	{
		counter--;
		wrongarray.push(guess);
	}
	return guessArray;
}

//function removes the data inside of the wrongarray 
//based on the length of the current array length
function removeArray(wrongarray)
{
	for(var x=0; x<wrongarray.length;x++)
	{
		wrongarray.pop();
	}
}

//function passes the guess array and secret array
//the function compares the guess array to the secret array
//sets isSame is true and checks when the array does not match
//if the guessArray is not equal to the secretArray then you are 
//not done playing
//returns the boolean logic of done or not done
function compare(guessArray, secretArray)
{
	var isSame=true;
	for( var x=0; x<secretArray.length;x++)
	{
		if(guessArray[x]!=secretArray[x])
		{
			isSame=false;
		}
	}
	return isSame;
}

//image changes depending on the secretArray
//will look at the subindex of the secretArray and display the matching image
// associated to the secretArray
function imgchange()
{
	//the index of
	if(arrayword.indexOf(arrayrand)==0)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> Are you seeing double?<br><img src='assets/images/hint1.png' alt='hint1' id='hint1'>";
	}
	else if(arrayword.indexOf(arrayrand)==1)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> I love TacoDeli, if I'm not Hangry, I am.. what?<br><img src='assets/images/hint2.png' alt='hint2' id='hint2'>";
	}
	else if(arrayword.indexOf(arrayrand)==2)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> My human says this is a google mini and not a.. what?<br><img src='assets/images/hint3.png' alt='hint3' id='hint3'>";
	}
	else if(arrayword.indexOf(arrayrand)==3)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> What am I if I bleed burnt orange?<br><img src='assets/images/hint4.png' alt='hint4' id='hint4'>";
	}
	else if (arrayword.indexOf(arrayrand)==4)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> I'm what..? Some people call it deer stuck in the headlights.<br><img src='assets/images/hint5.png' alt='hint5' id='hint5'>";
	}
	else if (arrayword.indexOf(arrayrand)==5)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> What is in this picture that rarely happens in Austin?<br><img src='assets/images/hint6.png' alt='hint6' id='hint6'>";
	}
	else if (arrayword.indexOf(arrayrand)==6)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> I LOVE TOT, but you can barely see it<br><img src='assets/images/hint7.png' alt='hint7' id='hint7'>";
	}
	else if (arrayword.indexOf(arrayrand)==7)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> Austin is the capital for what?<br><img src='assets/images/hint8.png' alt='hint8' id='hint8'>";
	}
	else if (arrayword.indexOf(arrayrand)==8)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> Do you like my Halloween costume? <br>Guess who I am (may the force be with you)?<br><img src='assets/images/hint9.png' alt='hint9' id='hint9'>";
	}
	else if (arrayword.indexOf(arrayrand)==9)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> Guess my mood? There is a cat I would love to meet!<br><img src='assets/images/hint10.png' alt='hint10' id='hint10'>";
	}
	else if (arrayword.indexOf(arrayrand)==10)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> If I am not awake, then what am I doing?<br><img src='assets/images/hint11.png' alt='hint11' id='hint11'>";
	}
	else if (arrayword.indexOf(arrayrand)==11)
	{
		document.getElementById("hint").innerHTML="<h3>HINT:</h3> I want to play, but what is my mom holding?<br><img src='assets/images/hint12.png' alt='hint12' id='hint12'>";
	}
}