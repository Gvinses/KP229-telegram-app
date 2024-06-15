// import supabase from "../DB/supabaseClient";

window.onload = localStorageChecker()

let scoreElement = document.getElementById('Score');
let tapValue = 1
let score = parseInt(localStorage.getItem('score') || 1) ; // Retrieve score from local storage
let tapEquals = document.getElementById('1TapEquals') // Retrieve score from local storage

let picToClick = $('#toClick')


console.log(localStorage.getItem('score'));
console.log(localStorage.getItem('tapValue'));

function localStorageChecker() {
    console.log(localStorage.getItem('score'));
    console.log(localStorage.getItem('tapValue'));
    if ((localStorage.getItem('score') === null) || (localStorage.getItem('score') === NaN)) {
        localStorage.setItem('score', 0);
    }
    if (localStorage.getItem('tapValue') === null || (localStorage.getItem('tapValue') === NaN)) {
        localStorage.setItem('tapValue', 1);
    }
}


window.onload = loadIt()
window.onload = parser()
window.onload = numbers()

// loadItemsFromCloud()
function parser(){
    
    localStorage.getItem('score', score);
    scoreElement.innerText = score;

    localStorage.getItem('tapValue', tapValue);
    tapEquals.innerText = String(tapValue) + '/1'

    tapValue = parseInt(localStorage.getItem('tapValue'))

    localStorage.setItem('tapValue', tapValue); 
    localStorage.setItem('score', score); // Store score in local storage

    document.getElementById('userEnergy').innerText = parseInt(localStorage.getItem('energy'));
}

function incrementScore() {  
    
    if (localStorage.getItem('haveReactor?') === 'true') {
        reactor()
    }

    // console.log(supabase);
    localStorage.setItem('energy', energy);

    if (energy <= 0) {
        $('#userEnergy').css("color", "red")
        $('#userMaxEnergy').css("color", "red");
        setTimeout(() => {
            $('#userEnergy').css("color", "#fff")
            $('#userMaxEnergy').css("color", "#fff");
        }, 1000)

    } else {
        localStorage.getItem('score', score);

        score += tapValue;
        scoreElement.innerText = score;
        localStorage.setItem('score', score); // Store score in local storage
        
        loadIt()
        numbers()
        Energy()
    
        picToClick.css("transform", "scale(1)")
        setTimeout(() => {
            picToClick.css("transform", "scale(0.9)")
        })
        setTimeout(() => {
            picToClick.css("transform", "scale(1)")
        }, 200);
    } 
}

function numbers(){
    score = parseInt(localStorage.getItem('score')); // Retrieve score from local storage
    console.log(score);
    if (score >= 100000000){
        $(".info").css({
            "flex-direction": "column",
        })
        $(".scoreInHTML").css({
            "font-size": "32px"
        })
    }
    if (score >= 10000000000){
        $(".info").css({
            "flex-direction": "column",
        })
        $(".scoreInHTML").css({
            "font-size": "27px"
        })
    }
    if (score >= 1000000000000){
        $(".info").css({
            "flex-direction": "column",
        })
        $(".scoreInHTML").css({
            "font-size": "23px"
        })
    }
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