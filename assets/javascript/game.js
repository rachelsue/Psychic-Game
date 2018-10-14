var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesDone =[];
var cpuChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



document.onkeyup = function(event) {

    var userChoice = event.key;
    
    
    guessesDone.push(" " + userChoice);
   
    var answer = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    

if (answer === userChoice.toLowerCase()) {
    wins++; guessesDone = [];
}   if (answer !== userChoice) {
    guessesLeft = guessesLeft-1;
}   
if  (guessesLeft <0) {
    guessesLeft =10; losses++; guessesDone = [];
}









var html =
"<h1>The Psychic Game</h1>" +
"<h3>Guess which letter I'm thinking of...</h3>" +
"<p>You chose: " + userChoice + "</p>" +
"<p>The computer chose: " + answer + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p> Guesses Left: " +guessesLeft+ "</p>"+
"<p> Guesses Done: " +guessesDone+"</p>";

document.querySelector("#game").innerHTML = html;

}