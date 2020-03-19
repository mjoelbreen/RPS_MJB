var cupCounter = document.getElementById("cup-counter");
var coffeeButton = document.getElementById("coffee-button");
var cupNum = 0;
var errorMessage = document.getElementById("error-message");

coffeeButton.onclick = function () {
    
    if (cupNum < 3) {
        cupNum += 1;
        cupCounter.innerHTML = "Coffee cups: " + cupNum;
    } else if (cupNum == 3) {
        errorMessage.innerHTML = "I think I've had enough.";
    }
}

