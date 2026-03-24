const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

// Botão "Sim"
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
});

// Botão "Não" fugindo 😂
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});