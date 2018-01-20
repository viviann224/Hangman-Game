//create a word array
//sceret words
var arrayword = ["bulldog", "corgi", "shiba"];
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

//get array first choose a word randomly and creates dashes
//based on the length of the words
//please look at the getArray() function to see the logic of the method.
getArray();



	

	

//debugging displays the secret word for debugging
console.log(arrayrand);

//gets user to guess when the user presses a key
document.onkeyup = function()
{
	//first checks if there is enough turns to play first
	if(counter>0)
	{	
		//gets the user input and converts the guess to lowercase
		var userguess = String.fromCharCode(event.keyCode).toLowerCase();

//debugging purpose to verify user compare to secret debugging
console.log("userGuess: " +userguess);
console.log("secret: " +arrayrand);
		//calls fillArray() function and passes in the guess, the user'sarray, and the secret array
		//to update the user's blank array
		document.getElementById("game").innerHTML = fillArray(userguess, guessArray, arrayrand).join("");
		//displays how many guesses left for the user
		document.getElementById("guessleft").innerHTML = "<br><br>Guesses Left: "+counter;
		//displays the array of wrong letters
		document.getElementById("wrongguesses").innerHTML = "<br><br>Attempted Letters: "+wrongarray;
		//displays the current score
		document.getElementById("score").innerHTML = "<br><br>Score: "+wins;
		
		//checks if the game is done
		//checks the user's array and the secret array to see if matches
		//if matches user get a point
		//please look at the compare() function to see the logic of the method.
		isDone=compare(guessArray, arrayrand);
			//if the guess and secret array the same display winner, and give a point
			if(isDone&&counter>0)
			{
			document.getElementById("winner").innerHTML = "<br><br><h2>Congrats! YOU WIN!!</h2>";
			wins++;
			removeArray(wrongarray);
			wrongarray.pop();
			getArray();
			}
			//if no more turns, end the game
			else if(counter == 0)
			{
			document.getElementById("guessleft").innerHTML = "<br><br>I'm sorry you ran out of guesses";
			document.getElementById("winner").innerHTML = "<br><br><h2>I'M SORRY YOU LOST.<br>PLEASE TRY AGAIN</h2><br>press any key to y to play again";
				//ask if the user to continue or not
				if(userguess=="y"||"y")
				{
					counter=10;
					removeArray(wrongarray);
					wrongarray.pop();
				getArray();
				


				}
				else
					return;
				
			
			}

	
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
	document.getElementById("game").innerHTML = guessArray.join("");
	//makes the wrongarray empty for each use
	wrongarray.length=0;

}


//function to split a string into an array of chars
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
//else but the guess in the wrong array and take a point away 
//from the guesses.
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

//function to check if the game is over
//if complete || no more guesses
//if over display error msg
//return bool isEnd

//image changes depending on the secretArray
//will look at the subindex of the secretArray and display the matching image associated to the secretArray
function imgchange()
{
	document.getElementById("game").innerHTML="<img src='https://media1.tenor.com/images/cc7c1a94f9697255c66ae7c8eb3f5777/tenor.gif?itemid=5452691'>"
}


//when you want to work on img change
/*
function myimg()
{
document.getElementById("myAnchor").innerHTML="<img src='https://media1.tenor.com/images/cc7c1a94f9697255c66ae7c8eb3f5777/tenor.gif?itemid=5452691'>"

}

myimg();
*/


