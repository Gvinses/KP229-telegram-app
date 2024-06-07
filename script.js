let scoreElement = document.getElementById('Score');
let tapValue = 1
let score = parseInt(localStorage.getItem('score')) || 0; // Retrieve score from local storage
let tapEquals = document.getElementById('1TapEquals') // Retrieve score from local storage



window.onload = loadIt
function incrementScore() {
    
    localStorage.getItem('score', score);
    score += tapValue;
    scoreElement.innerText = score;
    localStorage.setItem('score', score); // Store score in local storage
    loadIt()
}

function loadIt(){
    tapValue = parseInt(localStorage.getItem('tapValue'))
    
    score = parseInt(localStorage.getItem('score')); // Load score from local storage
    scoreElement.innerText = score; // Update score element with the loaded score

    localStorage.getItem('tapValue', tapValue);
    tapEquals.innerText = String(tapValue) + '/1'
}


function saveScoreToLocalStorage() {
    localStorage.setItem('tapValue', tapValue);
    localStorage.setItem('score', score);
}

document.getElementById('Shop').addEventListener('click', function() {
    score = parseInt(localStorage.getItem('score')); // Load score from local storage
    scoreElement.innerText = score; // Update score element with the loaded score

    tapValue = localStorage.getItem('tapValue', tapValue);
});
document.getElementById('Home').addEventListener('click', function() {
    score = parseInt(localStorage.getItem('score')); // Load score from local storage
    scoreElement.innerText = score; // Update score element with the loaded score

    localStorage.getItem('tapValue', tapValue);
    loadIt()
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
    console.log("TenXclick");
    if (score >= 1000) {
        localStorage.getItem('tapValue', tapValue);
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
    console.log("HunretXclick");
    if (score >= 10000) {
        localStorage.getItem('tapValue', tapValue);
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