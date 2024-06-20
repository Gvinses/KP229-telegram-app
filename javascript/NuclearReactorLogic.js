function reactor(){
    let number = Math.floor(Math.random() * 15) + 1;

    console.log(number)
    if (number === 1){
        window.open("https://gvinses.github.io/KP229-telegram-app/deadReactorNotification.html", "_self")
        changerInfo()
    }
}
function changerInfo(){
    score = parseInt(localStorage.getItem('score'));
    score = score % 20;
    console.log(score)
    localStorage.setItem('score', score);
    // scoreElement.innerText = score;

    localStorage.getItem('tapValue', tapValue);
    tapValue = tapValue - 1500;
    localStorage.setItem('tapValue', tapValue); // Store tapValue in local storage

    let isHaveReactor = false
    localStorage.setItem('haveReactor?', isHaveReactor)
}