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
    var play = $("#playerStuff");
    if (guess == 'r'){
        play.append(guess + " ");
        playerChoices.push(guess);
    }
    else if(guess == 'b'){
        play.append(guess + " ");
        playerChoices.push(guess);
    }
    else if(guess == 'o'){
        play.append(guess + " ");
        playerChoices.push(guess);
    }
    else if(guess == 'p'){
        play.append(guess + " ");
        playerChoices.push(guess);
    }
    else if(guess == 'y'){
        play.append(guess + " ");
        playerChoices.push(guess);
    }
    else if(guess == 'g'){
        play.append(guess + " ");
        playerChoices.push(guess);
    }
    else if (guess == " ") {
        if (playerChoices.join('') == computerChoices.join('')) {
            alert("win");
        }
    }
});