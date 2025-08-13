let sequence = "";
let score = 0;
let maxLength = 5; // maximum sequence length

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("submitBtn").addEventListener("click", checkAnswer);

function startGame() {
    let length = Math.min(score + 3, maxLength); // grows until maxLength
    sequence = generateSequence(length);

    document.getElementById("sequence").textContent = sequence;
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("message").textContent = "";

    setTimeout(() => {
        document.getElementById("sequence").textContent = "Now type it!";
        document.getElementById("userInput").disabled = false;
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("userInput").focus();
    }, 2000);
}

function generateSequence(length) {
    let seq = "";
    for (let i = 0; i < length; i++) {
        seq += Math.floor(Math.random() * 10);
    }
    return seq;
}

function checkAnswer() {
    const userAnswer = document.getElementById("userInput").value;
    if (userAnswer === sequence) {
        score++;
        document.getElementById("message").textContent = "✅ Correct!";
    } else {
        score = 0;
        document.getElementById("message").textContent = "❌ Wrong! Try again.";
    }
    document.getElementById("score").textContent = score;
}
