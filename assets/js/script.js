

// start btn
startBtn.addEventListener("click", startGame)

// shuffle the questions
function shuffleQuestions() {
    questionsShuffled = questions.sort(() => Math.random() -0.5); 
}

// shuffle the options
function shuffleOptions(options) {
    optionsShuffled = options.sort(() => Math.random() - 0.5);

}

// start the game
function startGame() {
    welcome.classlist.add("hide");
    startBtn.classlist.add("hide");
    shuffleQuestions()
    currentQuestions = 0;

questionbox.classlist.remove("hide");
    getNextQ();
}

//go to next question

function getNextQ() {
    displayQuestion(questionsShuffle[currentQuestion]);
}

// present next question and relating options

function displayQuestion(q) {
    // question
    
}