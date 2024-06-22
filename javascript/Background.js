let toComplete = document.getElementById("toComplete");
toComplete.innerHTML = ''

function userBGChange() {
    let userBG = document.getElementById('forUserBG');
    let output = document.getElementById('outputOfBG');

    output.src = userBG.value

    localStorage.setItem('userBG', userBG.value);
    toComplete.innerHTML = "Установить"
}

function textChecker(){
    let userBG = document.getElementById('forUserBG');
    if (userBG.value !== ''){
        showPopup()
    } else {
        userBG.placeholder = "ВВЕДИТЕ ССЫЛКУ"
        setTimeout( function () {
            userBG.placeholder = 'ссылка'
        }, 2500)
    }
}

let betterUserBG;
function betterUserBGText() {
    let userBG = localStorage.getItem('userBG')
    betterUserBG = 'url("' + userBG + '")';
    console.log(betterUserBG)
    localStorage.setItem('betterUserBG', betterUserBG)
}
function setUserBG() {
    betterUserBGText()

    betterUserBG = localStorage.getItem('betterUserBG')

    if (betterUserBG.includes('#')){
        let userColor = localStorage.getItem('betterUserBG');
        $('body').css('background-color', userColor)
        console.log(userColor);
        console.log('ffff')
    } else {
        $('body').css('background-image', betterUserBG)
        console.log(betterUserBG);
        console.log('Color')
    }

    if (isPopUp === true) hidePopup()
}

// document.onload = betterUserBGText()
function blackBG() {
    localStorage.setItem('betterUserBG', 'black')
    let backgroundColor = 'black'
    $('body').css('background-image', backgroundColor)
}




function userColorChange() {
    let userColor = document.getElementById('forUserColor')
    $('body').css('background-image', userColor.value)
    localStorage.setItem('betterUserBG', userColor.value);
    console.log(userColor.value);
    if (isPopUp === true) hidePopup2()
}
