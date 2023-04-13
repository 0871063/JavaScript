function userGuess(title){

    var entry = window.prompt(title)

     if (isNaN(entry)) 
     {
        alert("Must input numbers");
        userGuess("Enter a number between 0 to 100");
    }else{
        if ( entry == myNumber){
            alert("You Won!!!!!");
            return;
            
        }else if (entry < myNumber){
            userGuess("Please enter a bigger number than " + entry);
        }else{
            userGuess("Please enter a smaller number than " + entry);
        }
    }
}

function rollDice(){

    // var player1Score = 0;
    // var player2Score = 0;

    var randomImage = new Array(); 
    randomImage[0] = "images/dice1.png"
    randomImage[1] = "images/dice2.png"
    randomImage[2] = "images/dice3.png"
    randomImage[3] = "images/dice4.png"
    randomImage[4] = "images/dice5.png"
    randomImage[5] = "images/dice6.png"

    var player1Random = Math.floor(Math.random() * 6) 
    var player2Random = Math.floor(Math.random() * 6) 

    if (player1Score >= 20){
        alert("Player One Won!!!!!");
        player1Score = 0;
        player2Score = 0;
        player1Random = 0;
        player2Random = 0;

    }else if (player2Score >= 20){
        alert("Player Two Won!!!!!");
         player1Score = 0;
        player2Score = 0;
        player1Random = 0;
        player2Random = 0;
    }
    else if (player1Random > player2Random ){
        player1Score =  player1Score + (player1Random - player2Random)

    }else if (player2Random > player1Random ){
        player2Score = player2Score + (player2Random - player1Random)
    }
    document.getElementById("dice1").src = randomImage[player1Random];
    document.getElementById("dice2").src = randomImage[player2Random];
    document.getElementById("player1Score").innerHTML = player1Score
    document.getElementById("player2Score").innerHTML = player2Score
}