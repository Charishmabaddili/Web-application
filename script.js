const sentences = [
    "Practice makes perfect in everything you do.",
    "Typing fast is a skill worth mastering.",
    "The quick brown fox jumps over the lazy dog.",
    "Coding is fun when you understand the logic.",
    "Consistency is the key to improvement."
];

let startTime;
let currentSentence;

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function startTest() {
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceEl.textContent = currentSentence;
    inputEl.value = "";
    resultEl.textContent = "";
    startTime = null;
}

inputEl.addEventListener("input", function() {
    if (!startTime) {
        startTime = new Date();
    }
    if (inputEl.value === currentSentence) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000 / 60; // minutes
        const wordCount = currentSentence.split(" ").length;
        const wpm = Math.round(wordCount / timeTaken);

        const accuracy = calculateAccuracy(inputEl.value, currentSentence);

        resultEl.textContent = `Speed: ${wpm} WPM | Accuracy: ${accuracy}%`;
    }
});

function calculateAccuracy(typed, original) {
    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === original[i]) correctChars++;
    }
    return Math.round((correctChars / original.length) * 100);
}

restartBtn.addEventListener("click", startTest);

// Start test on page load
startTest();
