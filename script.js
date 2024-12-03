const questions = [
    { question: "What does 'var' stand for in JavaScript?", options: ["Variable", "Variance", "Variant"], answer: "Variable" },
    { question: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Google"], answer: "Netscape" },
    { question: "What is used to declare a constant in JavaScript?", options: ["const", "let", "var"], answer: "const" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "##", "--"], answer: "//" },
    { question: "What does '===' mean in JavaScript?", options: ["Assignment", "Equality", "Strict Equality"], answer: "Strict Equality" },
];

let current = 0, score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    if (current >= questions.length) {
        questionEl.textContent = `Quiz Completed!`;
        optionsEl.innerHTML = `Score: ${score}/${questions.length}`;
        nextBtn.style.display = "none";
        return;
    }
    questionEl.textContent = questions[current].question;
    optionsEl.innerHTML = questions[current].options
        .map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`)
        .join("");
}

function checkAnswer(selected) {
    if (selected === questions[current].answer) score++;
    current++;
    loadQuestion();
}

loadQuestion();
