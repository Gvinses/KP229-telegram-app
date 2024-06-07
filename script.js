let scoreElement = document.getElementById('Score');
let tapValue = 1;
let score = parseInt(localStorage.getItem('score')) || 0; // Retrieve score from local storage
let tapEquals = document.getElementById('1TapEquals') // Retrieve score from local storage
localStorage.setItem('tapValue', tapValue);

function incrementScore() {
    tapValue = parseInt(localStorage.getItem('tapValue')) 
    score += tapValue;
    scoreElement.innerText = score;
    localStorage.setItem('score', score); // Store score in local storage
    loadIt()
    DBscore()
}

function loadIt(){
    localStorage.getItem('tapValue', tapValue);
    tapEquals.innerText = tapValue + '/1'

    score = parseInt(localStorage.getItem('score')) || 0; // Load score from local storage
    scoreElement.innerText = score; // Update score element with the loaded score
}

setInterval(loadIt, 500)

function saveScoreToLocalStorage() {
    localStorage.setItem('tapValue', tapValue);
    localStorage.setItem('score', score);
}

document.getElementById('Shop').addEventListener('click', function() {
    localStorage.getItem('tapValue', tapValue);
    score = parseInt(localStorage.getItem('score')) || 0; // Load score from local storage
    scoreElement.innerText = score; // Update score element with the loaded score
    DBscore()
});
document.getElementById('Home').addEventListener('click', function() {
    localStorage.getItem('tapValue', tapValue);
    score = parseInt(localStorage.getItem('score')) || 0; // Load score from local storage
    scoreElement.innerText = score; // Update score element with the loaded score
    DBscore()
});



function secondClick() {
    console.log("TwoXclick");
    if (score >= 100) {
        localStorage.getItem('tapValue', tapValue);
        localStorage.getItem('score', score);
        score -= 100;
        localStorage.setItem('score', score);
        scoreElement.innerText = score;
        tapValue = tapValue + 1;
        localStorage.setItem('tapValue', tapValue); // Store tapValue in local storage
    } else {
        document.getElementById('Error').innerText = 'Not enough!';
    }
}
function tenClick() {
    console.log("TwoXclick");
    if (score >= 1000) {
        localStorage.getItem('score', score);
        score -= 1000;
        localStorage.setItem('score', score);
        scoreElement.innerText = score;
        tapValue = tapValue + 10;
        localStorage.setItem('tapValue', tapValue); // Store tapValue in local storage
    } else {
        document.getElementById('Error').innerText = 'Not enough!';
    }
}
function hungretClick() {
    console.log("TwoXclick");
    if (score >= 10000) {
        localStorage.getItem('score', score);
        score -= 10000;
        localStorage.setItem('score', score);
        scoreElement.innerText = score;
        tapValue = tapValue + 100;
        localStorage.setItem('tapValue', tapValue); // Store tapValue in local storage
    } else {
        document.getElementById('Error').innerText = 'Not enough!';
    }
}