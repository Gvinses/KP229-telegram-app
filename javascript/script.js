let scoreElement = document.getElementById('Score');
let tapValue = 1
let score = parseInt(localStorage.getItem('score') || 1) ; // Retrieve score from local storage
let tapEquals = document.getElementById('1TapEquals') // Retrieve score from local storage

let picToClick = $('#toClick')

function localStorageChecker() {
    if ((localStorage.getItem('score') === null) || (localStorage.getItem('score') === 'NaN')) {
        localStorage.setItem('score', 0);
    }
    if (localStorage.getItem('tapValue') === null || (localStorage.getItem('tapValue') === 'NaN')) {
        localStorage.setItem('tapValue', 1);
    }
    if ((localStorage.getItem('energy') === null) || (localStorage.getItem('energy') === 'NaN')) {
        localStorage.setItem('energy', 1000);
        energy = localStorage.getItem('energy')
        userEnergy.innerText = energy
    }
    if ((localStorage.getItem('haveReactor?') === null) || (localStorage.getItem('haveReactor?') === 'NaN')) {
        localStorage.setItem('haveReactor?', false);
    }
}

window.onload = localStorageChecker()
window.onload = loadIt()
window.onload = parser()
window.onload = numbers()
window.onload = tapValueCorrect()
window.onload = BGsetter()
window.onload = isUserBlocked()
window.onload = setBackground();
window.onload = goToBlock()

function BGsetter() {
    if (localStorage.getItem('backgroundImage')) {
        document.body.style.backgroundImage = `url(${localStorage.getItem('backgroundImage')})`;
    }
    if (localStorage.getItem('backgroundColor')) {
        document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
    }
}


function tapValueCorrect() {
    score = parseInt(localStorage.getItem('score'));
    if (parseInt(localStorage.getItem('tapValue')) <= 0){
        localStorage.setItem('tapValue', 1);
        parser()
        location.reload()
    }
}
// loadItemsFromCloud()
function parser(){
    localStorage.getItem('score');
    scoreElement.innerText = score;

    tapValue = localStorage.getItem('tapValue');
    tapEquals.innerText = String(tapValue) + '/1'

    tapValue = parseInt(localStorage.getItem('tapValue'))
    localStorage.setItem('tapValue', tapValue);
    localStorage.setItem('score', score); // Store score in local storage

    document.getElementById('userEnergy').innerText = parseInt(localStorage.getItem('energy'));
}
function incrementScore() {
    AntiCheat()
    goToBlock()
    numbers()
    clearInterval(intervalId)

    if (Number(localStorage.getItem('energy')) > 0) {
        Energy()
        if (localStorage.getItem('haveReactor?') === 'true') {
            reactor()
        }

        localStorage.getItem('score');

        score += tapValue;
        scoreElement.innerText = score;
        localStorage.setItem('score', score); // Store score in local storage

        loadIt()


        picToClick.css("transform", "scale(1)")
        setTimeout(() => {
            picToClick.css("transform", "scale(0.9)")
        })
        setTimeout(() => {
            picToClick.css("transform", "scale(1)")
        }, 200);

        BGsetter()
        if (IsEnergyReseting === true) {
            setTimeout(() => {
                location.reload()
                IsEnergyReseting = false
            }, 50)
        }
    } else {
        $('#userEnergy').css("color", "red")
        $('#userMaxEnergy').css("color", "red");
        setTimeout(() => {
            $('#userEnergy').css("color", "#fff")
            $('#userMaxEnergy').css("color", "#fff");
        }, 1000)
    }
}

function numbers(){
    score = parseInt(localStorage.getItem('score')); // Retrieve score from local storage
    // console.log(score);
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
            "font-size": "20px"
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