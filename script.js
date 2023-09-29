function flipCoin() {
    const coin = document.getElementById("coin");
    const resultText = document.getElementById("result");
    const coinSound = document.getElementById("coinSound");

    // Generate a random result (0 or 1)
    const result = Math.floor(Math.random() * 2);

    // Play the coin flip sound
    coinSound.play();

    // Rotate the coin to simulate a flip
    coin.style.transition = "transform 0.5s";
    coin.style.transform = "rotate(720deg)"; // Rotate twice for a full flip

    // After the flip animation, set the result
    setTimeout(function () {
        if (result === 0) {
            coin.innerText = "Heads";
            coin.style.color = "green";
            resultText.innerText = "You win!";
        } else {
            coin.innerText = "Tails";
            coin.style.color = "red";
            resultText.innerText = "You lose!";
        }
        coin.style.transform = "rotate(0deg)"; // Reset the coin's rotation
    }, 500);
}
