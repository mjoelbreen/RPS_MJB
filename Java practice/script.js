var playerOneScore = 0;
var playerTwoScore = 0;
 
while (playerOneScore < 3 && playerTwoScore < 3) {
    
    function shoot() {
            var turn = Math.floor(Math.random()*3);
        
            switch (turn) {
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
        
            return turn;
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
        console.log("Player One drew " + hand1 + ", Player Two drew " + hand2);
        console.log("Player One: " + playerOneScore + ", Player Two: " + playerTwoScore);
    }
 
    if (playerOneScore == 3) {
        console.log("Player One wins!");
    } else if (playerTwoScore == 3) {
        console.log("Player Two wins!");
    }


    



    


    
    












