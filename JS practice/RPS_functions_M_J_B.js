var hands = ['rock', 'paper', 'scissors'];

const getHand = () => {
    var hand = hands[Math.floor(Math.random()*3)];
    return hand;
}



var player1 = {
    name: 'Jeff',
    hand: getHand()
}

var player2 = {
    name: 'Rosa',
    hand: getHand()
}

function playRound(player1, player2) {
    
    
    console.log("Jeff drew " + player1.hand);
    console.log("Rosa drew " + player2.hand);

    if (player1.hand == player2.hand) {
        console.log("It's a tie.");
    } else if (player1.hand == 'rock' && player2.hand == 'paper') {
        console.log("Rosa wins!");
        return player2;
    } else if (player1.hand == 'rock' && player2.hand == 'scissors') {
        console.log('Jeff wins!');
        return player1;
    } else if (player1.hand == 'paper' && player2.hand == 'scissors') {
        console.log('Rosa wins!');
        return player2;
    } else if (player1.hand == 'paper' && player2.hand == 'rock') {
        console.log('Jeff wins!');
        return player1;
    } else if (player1.hand == 'scissors' && player2.hand == 'rock') {
        console.log("Rosa wins!");
        return player2;
    } else if (player1.hand == 'scissors' && player2.hand == 'paper') {
        console.log("Jeff wins!");
        return player1;
    }
}

function playGame(player1, player2, playUntil) {
    var playUntil = 5;
    var playerOneWins = 0;
    var playerTwoWins = 0;
    while (playerOneWins <= playUntil || playerTwoWins <= playUntil) {
        if (playRound() == player1) {
            playerOneWins += 1;
        } else if (playRound() == player2) {
            playerTwoWins += 1;
        }
        playRound();
    };
    if (playerOneWins > playerTwoWins) {
        return player1;
    } else if (playerOneWins < playerTwoWins) {
        return player2;
    }


}
playGame();