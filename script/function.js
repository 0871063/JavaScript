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