// function blackBG() {
//
// }
function userBGChange() {
    let userBG = document.getElementById('forUserBG');
    let output = document.getElementById('outputOfBG');

    output.src = userBG.value

    localStorage.setItem('userBG', userBG.value);
}

let betterUserBG;
function betterUserBGText() {
    let userBG = localStorage.getItem('userBG')
    betterUserBG = 'url("' + userBG + '")';
}
function setUserBG() {
    betterUserBGText()
    // let userBG = localStorage.getItem('userBG')

    $('body').css('background-image', betterUserBG)
    console.log('url(' + betterUserBG + ')');
}

document.onload = setUserBG()

