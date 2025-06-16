
let currentAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20);
    const num2 = Math.floor(Math.random() * 20);
    const isAddition = Math.random() > 0.5;
    const questionText = isAddition ? `${num1} + ${num2}` : `${num1} - ${num2}`;
    currentAnswer = isAddition ? num1 + num2 : num1 - num2;

    document.getElementById("question").innerText = `Berapa hasil dari: ${questionText} = ?`;

    const choices = generateChoices(currentAnswer);
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.className = "choice-button";
        button.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(button);
    });
}

function generateChoices(correct) {
    const choices = new Set();
    choices.add(correct);
    while (choices.size < 4) {
        const fake = correct + Math.floor(Math.random() * 10 - 5);
        if (fake !== correct) choices.add(fake);
    }
    return Array.from(choices).sort(() => Math.random() - 0.5);
}

function checkAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === currentAnswer) {
        result.innerText = "✅ Benar!";
    } else {
        result.innerText = "❌ Salah. Coba lagi!";
    }
    setTimeout(() => {
        result.innerText = "";
        generateQuestion();
    }, 1000);
}

window.onload = () => {
    generateQuestion();
};
