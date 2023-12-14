/* jshint esversion: 11 */

const intro = document.getElementById("intro");
const startBtn = document.getElementById("start-btn");
const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");
const question = document.getElementById("question");
const optionButtons = document.getElementById("opt-btns");
const restartBtn = document.getElementById("restart-btn");

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
    questionsShuffled = questions.sort(() => Math.random() - 0.5);
}

// shuffle the options
function shuffleOptions(options) {
    optionsShuffled = options.sort(() => Math.random() - 0.5);

}

// start the game
function startGame() {
    intro.classList.add("hide");
    startBtn.classList.add("hide");
    shuffleQuestions();
    currentQuestion = 0;
    questionBox.classList.remove("hide");
    getNextQ();
}

//go to next question

function getNextQ() {
    displayQuestion(questionsShuffled[currentQuestion]);
}

// present next question and relating options

function displayQuestion(q) {
    // question
    question.innerHTML = `<small>Question <strong>${currentQuestion + 1}</strong>
    of <strong>${questions.length}</strong></small>;
    <br>${q.question}</br>`;
    shuffleOptions(q.options);
    generateOptions(q);
}

// generate the question's options to choose from 

function generateOptions(q) {
    q.options.forEach(element => {
        const btn = document.createElement("button");

        // create <button> element 
        btn.innerText = element.text;
        btn.classList.add("btn");
        btn.dataset.points = element.points; // add point value to the options
        btn.addEventListener("click", userAnswer); // add click event
        optionButtons.appendChild(btn); // push the new button into the div

    });
}

// calculate user's options

function userAnswer(btn) {
    const selectedButton = btn.target; // add the user's new points to overall total
    totalPoints += parseInt(selectedButton.dataset.points);
    if (questionsShuffled.length > currentQuestion + 1) {
        // game is still active, clear for the next question
        optionButtons.innerHTML = "";
        currentQuestion++;
        getNextQ();
    } else {
        // all questions finished, calculation of results
        calculateResults();
    }
}

// Shuffle result cities
function shuffleCities(cities) {
    return cities.sort(() => Math.random() - 0.5);
}

// calculate points based on the user's choices
function calculateResults() {
    // hide the question box
    console.log("calculate results called");
    questionBox.classList.add("hide");

    let cities = [];

    // calculate total points
    if (totalPoints => 31) {
        // Result: Tourist
        resultType.innerText = results[3].traveler;
        resultText.innerHTML = results[3].text;
        cities = results[3].cities;

    } else if (totalPoints => 21) {
        //Result: Adventurer 
        resultType.innerText = results[2].traveler;
        resultText.innerHTML = results[2].text;
        cities = results[2].cities;

    } else if (totalPoints => 11) {
        // Result: Entertainer
        resultType.innerText = results[1].traveler;
        resultText.innerHTML = results[1].text;
        cities = results[1].cities;

    } else {
        // Result: Wanderer
        resultType.innerText = results[0].traveler;
        resultText.innerHTML = results[0].text;
        cities = results[0].cities;
    }

    // Shuffle cities and select one from relevant list of cities

    let city = shuffleCities(cities);
    resultCity.innerText = city[0];

    // Show "hidden" results

    resultBox.classList.remove("hide");
}

// Adding function to restart button

restartBtn.addEventListener("click", restartGame);

function restartGame() {
    location.reload();
}