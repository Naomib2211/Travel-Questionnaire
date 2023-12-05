const intro = document.getElementById("intro");
const startBtn = document.getElementById("start-btn");
const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");
const question = document.getElementById("question");
const optionButtons = document.getElementById("opt-btns");

let currentQuestion = 0;
let totalPoints = 0;
let questionsShuffled = [];
let optionsShuffled = [];
let resultType = document.getElementById("result-type");
let resultCity = document.getElementById("result-city");
let resultText = document.getElementById("result-text");

// start button
startBtn.addEventListener("click", startGame)

// shuffle the questions
function shuffleQuestions() {
    questionsShuffled = question.sort(() => Math.random() -0.5); 
}

// shuffle the options
function shuffleOptions(options) {
    optionsShuffled = options.sort(() => Math.random() - 0.5);

}

// start the game
function startGame() {
    intro.classlist.add("hide");
    startBtn.classlist.add("hide");
    shuffleQuestions()
    currentQuestion = 0;
    questionBox.classlist.remove("hide");
    getNextQ();
}

//go to next question

function getNextQ() {
    displayQuestion(questionsShuffled[currentQuestion]);
}

// present next question and relating options

function displayQuestion(q) {
    // question
    
}