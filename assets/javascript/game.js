var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];


var wins = 0;
var losses = 0;
var lettersguessed = [];
var guessesleft = 9;

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computerGuess);



document.onkeyup = function(event) {
    var userGuess =   String.fromCharCode(event.keyCode).toLowerCase();
    lettersguessed.push(userGuess);
    console.log(userGuess);
    guessesleft --;


    
    
    var letterArray = document.getElementById("guessesSoFar");
    letterArray.textContent = "Your guesses so far: " + lettersguessed;
    console.log(lettersguessed)
  

    var guessesleft1 = document.getElementById("guesses");
    guessesleft1.textContent = "Guesses left: " + guessesleft;

    
    if (userGuess == computerGuess) {
        wins++;
    var wins1 = document.getElementById("winner");
    alert("Winner, Congratulations")
    console.log(wins);
    
  
    }

    else if (guessesleft == 0) { 
        losses++;
    var losses1 = document.getElementById("losses");
    losses1.textContent = "Losses: " + losses;
    alert("wahhh, wahhh, wahhhh.")
    console.log(losses)
    }
    
}





// if else statement for if userGuess === computerGuess





    



