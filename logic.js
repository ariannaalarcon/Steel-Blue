var playerChoices = [];
var computerChoices = [];
var colors = ["r", "y", "b", "g", "o", "p"];
var currentGuess = "";

function startGame() {
    for (var i = 0; i < 4; i++) {
        computerChoices.push(colors[Math.floor(Math.random() * colors.length)]);
    }
}
startGame();

$(document).keyup(function(key) {
    guess = key.key;
    if (!(playerChoices.length >= 4)) {
        if (guess == 'r'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
        }
        else if(guess == 'b'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
        }
        else if(guess == 'o'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
        }
        else if(guess == 'p'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
        }
        else if(guess == 'y'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
        }
        else if(guess == 'g'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
        }
    }
    if (guess == " ") {
        var pins = [];
        
        if (playerChoices.join('') == computerChoices.join('')) {
            alert("win");
        }
        else {
            for (var i = 0; i < playerChoices.length; i++) {
                if (playerChoices[i] == computerChoices[i]) {
                    pins.push('b');
                }
            }
            for (var i = 0; i < playerChoices.length; i++) {
                if (computerChoices.includes(playerChoices[i]) && !(playerChoices[i] == computerChoices[i])) {
                    pins.push('w');
                }
            }
        }

        $("#playerStuff").append($("<p>").text(playerChoices.join(" ")));
        
        playerChoices = [];
        currentGuess = "";
        $("#current").text(currentGuess);
    }
});