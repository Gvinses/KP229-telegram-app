window.onload = localStorageChecker()
window.onload = isUserRegistrate()

let scoreElement = document.getElementById('Score');
let tapValue = 1
let score = parseInt(localStorage.getItem('score') || 1) ; // Retrieve score from local storage
let tapEquals = document.getElementById('1TapEquals') // Retrieve score from local storage

let picToClick = $('#toClick')

function localStorageChecker() {
    if ((localStorage.getItem('score') === null) || (localStorage.getItem('score') === NaN)) {
        localStorage.setItem('score', 0);
    }
    if (localStorage.getItem('tapValue') === null || (localStorage.getItem('tapValue') === NaN)) {
        localStorage.setItem('tapValue', 1);
    }
    if ((localStorage.getItem('energy') === null) || (localStorage.getItem('energy') === 'NaN')) {
        localStorage.setItem('energy', 1000);
        energy = localStorage.getItem('energy')
        userEnergy.innerText = energy
    }
    if ((localStorage.getItem('haveReactor?') === null) || (localStorage.getItem('haveReactor?') === NaN)) {
        localStorage.setItem('haveReactor?', false);
    }
}

function isUserRegistrate() {
    if (localStorage.getItem('username') === null) {
        let helper = document.getElementById('helper')
        helper.style.position = 'relative'
        helper.innerText = '⬅️Нужно войти в аккаунт!!!!!'
        setTimeout(() => {
            helper.innerText = ''
            helper.style.position = 'absolute'
        }, 5000)

        score = 0
        tapValue = 0
        energy = 1000

        localStorage.setItem('score', score)
        localStorage.setItem('tapValue', tapValue)
        localStorage.setItem('energy', energy)
        localStorage.setItem('haveReactor?', false)
    }
}

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
    AntiCheat()
    goToBlock()
    Energy()
         // console.log(supabase);
    localStorage.setItem('energy', energy);

        if (localStorage.getItem('haveReactor?') === 'true') {
            reactor()
        }

        score = localStorage.getItem('score');

        score += tapValue;
        scoreElement.innerText = score;
        localStorage.setItem('score', score); // Store score in local storage
        
        loadIt()
        numbers()
    
        picToClick.css("transform", "scale(1)")
        setTimeout(() => {
            picToClick.css("transform", "scale(0.9)")
        })
        setTimeout(() => {
            picToClick.css("transform", "scale(1)")
        }, 200);

    BGsetter()
        if (IsEnergyReseting === true){
            setTimeout(() => {
                location.reload()
                IsEnergyReseting = false
            }, 50)
    } if (energy <= 0) {
                $('#userEnergy').css("color", "red")
                $('#userMaxEnergy').css("color", "red");
            setTimeout(() => {
                $('#userEnergy').css("color",   "#fff")
                $      ('#userMaxEnergy').css("color", "#fff");
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


