function reactor(){
    let number = Math.floor(Math.random() * 15) + 1;

    console.log(number)
    if (number === 1){
        changerInfo()
        iframeOpen()
    }
}


function iframeOpen() {
    window.open(deadReactorNotification.html)
}
function changerInfo(){
    localStorage.getItem('tapValue', tapValue);
    localStorage.getItem('score', score);
    score = 1000;
    localStorage.setItem('score', score);
    scoreElement.innerText = score;
    tapValue = tapValue - 1500;
    localStorage.setItem('tapValue', tapValue); // Store tapValue in local storage

    let isHaveReactor = false
    localStorage.setItem('haveReactor?', isHaveReactor)
}