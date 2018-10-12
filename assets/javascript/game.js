var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesDone = "";
var cpuChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


document.onkeyup = function(event) {

    var userChoice = event.key;

   
    var answer = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    
    for (i = 1; i <10; ++i) {
        guessesDone(parseInt(-1));
        

if (answer === userChoice) {
    wins++;
}   else {
    losses++;
}







var html =
"<p>You chose: " + userChoice + "</p>" +
"<p>The computer chose: " + answer + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p> Guesses Left: " +guessesLeft+ "</p>"+
",p> Guesses Done: " + "</p>";

document.querySelector("#game").innerHTML = html;

 }






