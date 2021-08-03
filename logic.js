var playerChoices = [];
var computerChoices = [];
var colors = ["r", "y", "b", "g", "o", "p"];

function startGame() {
    for (var i = 0; i < 4; i++) {
        computerChoices.push(colors[Math.floor(Math.random() * colors.length)]);
    }
}
startGame();

$(document).keyup(function(key) {
    guess = key.key;
    if (guess == 'r'){
        playerChoices.push(guess);
    }
    else if(guess == 'b'){
        playerChoices.push(guess);
    }
    else if(guess == 'o'){
        playerChoices.push(guess);
    }
    else if(guess == 'p'){
        playerChoices.push(guess);
    }
    else if(guess == 'y'){
        playerChoices.push(guess);
    }
    else if(guess == 'g'){
        playerChoices.push(guess);
    }
    else if (guess == " ") {
        $("#playerStuff").append($("<p>").text(playerChoices.join(" ")));
        
        if (playerChoices.join('') == computerChoices.join('')) {
            alert("win");
        }

        playerChoices = [];
    }
});