function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("div");
        btn.textContent = opt;
        btn.classList.add("option");
        btn.onclick = () => selectOption(index, btn);
        optionsEl.appendChild(btn);
    });
}

function selectOption(index, clickedBtn) {
    // Remove highlight from all options
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));

    // Highlight the selected option
    clickedBtn.classList.add("selected");

    // Record answer
    score[index]++;

    // Enable next button
    nextBtn.disabled = false;
}
