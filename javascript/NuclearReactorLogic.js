function reactor(){
    let number = Math.floor(Math.random() * 15) + 1;

    console.log(number)
    if (number === 1){
        changerInfo()
        iframeOpen()
    }
}


function iframeOpen() {
    let Boomiframe = document.createElement('iframe');
    Boomiframe.src = '../deadReactorNotification.html';
    Boomiframe.style.position = 'fixed';
    Boomiframe.style.top = '0';
    Boomiframe.style.left = '0';
    Boomiframe.style.width = '100%';
    Boomiframe.style.height = '100%';
    Boomiframe.style.zIndex = '9999';
    Boomiframe.style.border = 'none';
    document.body.appendChild(Boomiframe);
}

function closeIframe() {
    document.body.removeChild(Boomiframe);
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