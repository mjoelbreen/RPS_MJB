var playerOneScore = 0;
var playerTwoScore = 0;
var turnCount = 1;
var gameOver = false;


 
while (turnCount <= 3) {
    
    function shoot() {
            var cast = Math.floor(Math.random()*3);
        
            switch (cast) {
                case 0:
                    return "rock";
                    break;
                case 1:
                    return "paper";
                    break;
                case 2:
                    return "scissors";
                    break;
                
            } 
        
            return cast;
        };
 
        var hand1 = shoot();
        var hand2 = shoot();
 
        if (hand1 == hand2) {
          
 
        } else if (hand1 == "rock" && hand2 == "paper") {
            playerTwoScore += 1;
              
 
        } else if (hand1 == "rock" && hand2 == "scissors") {
            playerOneScore += 1;
           
        } else if (hand1 == "paper" && hand2 == "scissors") {
            playerTwoScore += 1;
        
        } else if (hand1 == "paper" && hand2 == "rock") {
            playerOneScore += 1;
           
        } else if (hand1 == "scissors" && hand2 == "paper") {
            playerOneScore += 1;
                
        } else if (hand1 == "scissors" && hand2 == "rock") {
            playerTwoScore += 1;
                
        }
        turnCount += 1;
        if (turnCount == 3) {
            gameOver = true;
        }
        console.log("Player One drew " + hand1 + ", Player Two drew " + hand2);
        console.log("Player One: " + playerOneScore + ", Player Two: " + playerTwoScore);
    }
 
    if (gameOver && playerOneScore > playerTwoScore) {
        console.log("Player One wins!");
    } else if (gameOver && playerTwoScore > playerOneScore) {
        console.log("Player Two wins!");
    } else {
        console.log("It's a draw.");
    }


    



    


    
    












