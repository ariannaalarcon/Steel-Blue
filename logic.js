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
        var tempPlayerChoices = playerChoices.join('').split('');
        var tempComputerChoices = computerChoices.join('').split('');
        
        if (playerChoices.join('') == computerChoices.join('')) {
            alert("win");
            computerChoices = [];
            startGame();
        }
        else {
            for (var i = 0; i < tempPlayerChoices.length; i++) {
                if (tempPlayerChoices[i] == tempComputerChoices[i]) {
                    pins.push('b');
                    tempPlayerChoices.splice(i, 1);
                    tempComputerChoices.splice(i, 1);
                    i--;
                }
            }
            for (var i = 0; i < tempPlayerChoices.length; i++) {
                if (tempComputerChoices.includes(tempPlayerChoices[i])) {
                    pins.push('w');
                    tempComputerChoices.splice(tempComputerChoices.indexOf(tempPlayerChoices[i]), 1);
                    tempPlayerChoices.splice(i, 1);
                    i--;
                }
            }
        }

        $("#playerStuff").append($("<p>").text(playerChoices.join(" ") + "         " + pins.join(" ")));

        playerChoices = [];
        currentGuess = "";
        $("#current").text(currentGuess);
    }
});