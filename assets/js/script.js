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
    question.innerHTML = <small>Question<strong>${currentQuestion + 1}</strong>
    of<strong>${question.length}</strong></small>;
    <br>${q.question}</br>;
}

// shuffle the options for each new round

    shuffleOptions(q.options);

    // generate the buttons

    generateOption(q);

// generate the question's options to choose from 
    
    function generateOption(q);
    q.options.forEach(element => {
        const btn = document.createElement ("button"); 
        
        // create <button> element 
        btn.innerText = option.text; 
        btn.classList.add("btn"); 
        btn.dataset.option.points; // add point value to the options
        btn.addEventListener("click", userAnswer); // add click event
        optionButtons.appendChild(btn); // push the new button into the div
    });

