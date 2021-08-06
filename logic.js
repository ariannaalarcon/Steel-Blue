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
            if (playerChoices.length == 1){
                $(".circle1").css("background-color", "red")
            }
            else if (playerChoices.length == 2) {
                $(".circle2").css("background-color", "red")
            }
            else if (playerChoices.length == 3) {
                $(".circle3").css("background-color", "red")
            }
            else if (playerChoices.length == 4) {
                $(".circle4").css("background-color", "red")
            }
        }
        else if(guess == 'b'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
            if (playerChoices.length == 1){
                $(".circle1").css("background-color", "blue")
            }
            else if (playerChoices.length == 2) {
                $(".circle2").css("background-color", "blue")
            }
            else if (playerChoices.length == 3) {
                $(".circle3").css("background-color", "blue")
            }
            else if (playerChoices.length == 4) {
                $(".circle4").css("background-color", "blue")
            }
        }
        else if(guess == 'o'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
            if (playerChoices.length == 1){
                $(".circle1").css("background-color", "orange")
            }
            else if (playerChoices.length == 2) {
                $(".circle2").css("background-color", "orange")
            }
            else if (playerChoices.length == 3) {
                $(".circle3").css("background-color", "orange")
            }
            else if (playerChoices.length == 4) {
                $(".circle4").css("background-color", "orange")
            }
        }
        else if(guess == 'p'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
            if (playerChoices.length == 1){
                $(".circle1").css("background-color", "purple")
            }
            else if (playerChoices.length == 2) {
                $(".circle2").css("background-color", "purple")
            }
            else if (playerChoices.length == 3) {
                $(".circle3").css("background-color", "purple")
            }
            else if (playerChoices.length == 4) {
                $(".circle4").css("background-color", "purple")
            }
        }
        else if(guess == 'y'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
            if (playerChoices.length == 1){
                $(".circle1").css("background-color", "yellow")
            }
            else if (playerChoices.length == 2) {
                $(".circle2").css("background-color", "yellow")
            }
            else if (playerChoices.length == 3) {
                $(".circle3").css("background-color", "yellow")
            }
            else if (playerChoices.length == 4) {
                $(".circle4").css("background-color", "yellow")
            }
        }
        else if(guess == 'g'){
            playerChoices.push(guess);
            currentGuess += guess + " ";
            $("#current").text(currentGuess);
            if (playerChoices.length == 1){
                $(".circle1").css("background-color", "green")
            }
            else if (playerChoices.length == 2) {
                $(".circle2").css("background-color", "green")
            }
            else if (playerChoices.length == 3) {
                $(".circle3").css("background-color", "green")
            }
            else if (playerChoices.length == 4) {
                $(".circle4").css("background-color", "green")
            }
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
        for (var i = 4; i < pins.length; i++) {
            if (pins[i] == "b") {
                $(i.toString()).css("background-color", "black")
            }
            else if(pins[i] == "w") {
                $(i.toString()).css("background-color", "white")
            }
            else {
                $(i.toString()).css("background-color", "grey")
            }
        }
        

        $("#playerStuff").append($("<p>").text(playerChoices.join(" ")));
        console.log(pins.join(" "))
        playerChoices = [];
        currentGuess = "";
        $("#current").text(currentGuess);
    }
});