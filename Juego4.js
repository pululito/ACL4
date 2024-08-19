const sentences = [
    {
        sentence: "El gato __ sobre el tejado.",
        options: ["saltó", "comió", "corrió"],
        correct: "saltó"
    },
    {
        sentence: "El perro __ al gato.",
        options: ["persiguió", "saltó", "ladró"],
        correct: "persiguió"
    },
    {
        sentence: "El sol __ por la mañana.",
        options: ["brilla", "se oculta", "se esconde"],
        correct: "brilla"
    }
];

let currentSentenceIndex = 0;
let score = 0;

function loadGame() {
    const sentenceElement = document.getElementById("sentence");
    const optionsContainer = document.querySelector(".options");
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const nextButton = document.getElementById("next-button");

    const currentSentence = sentences[currentSentenceIndex];
    sentenceElement.innerHTML = currentSentence.sentence.replace("__", `<span class="blank"></span>`);
    
    optionsContainer.innerHTML = "";
    resultElement.textContent = "";
    nextButton.disabled = true;

    currentSentence.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => {
            const blankElement = document.querySelector(".blank");
            blankElement.textContent = option;

            if (option === currentSentence.correct) {
                resultElement.textContent = "¡Correcto!";
                resultElement.style.color = "green";
                score++;
            } else {
                resultElement.textContent = "Incorrecto, inténtalo de nuevo.";
                resultElement.style.color = "red";
            }

            scoreElement.textContent = `Puntaje: ${score}`;
            nextButton.disabled = false;
        };
        optionsContainer.appendChild(button);
    });
}

document.getElementById("next-button").onclick = () => {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    loadGame();
};

loadGame();
