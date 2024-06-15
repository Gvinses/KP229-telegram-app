
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
        document.getElementById('Error').innerText = 'Не хватает!';
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
        document.getElementById('Error').innerText = 'Не хватает!';
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
        document.getElementById('Error').innerText = 'Не хватает!';
    }
}

function Click1500() {
    console.log("1500Xclick");
    if (score >= 100000) {
        if ((localStorage.getItem('haveReactor?')) == 'false') {
            localStorage.getItem('tapValue', tapValue);
            localStorage.getItem('score', score);
            score -= 100000;
            localStorage.setItem('score', score);
            scoreElement.innerText = score;
            tapValue = tapValue + 1500;
            localStorage.setItem('tapValue', tapValue); // Store tapValue in local storage
    
            let isHaveReactor = true
            localStorage.setItem('haveReactor?', isHaveReactor)
        } else {
            console.log(localStorage.getItem('haveReactor?'))
            document.getElementById('Error').innerText = 'Нельзя купить больше 1 реактора!';
        }
    } else {
        document.getElementById('Error').innerText = 'Не хватает!';
    }
}