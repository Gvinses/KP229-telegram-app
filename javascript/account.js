const button = document.getElementById('deleteButt');
let lastClickTime = 0;

button.addEventListener('click', function(event) {
    let currentTime = Date.now();
    let timeDiff = currentTime - lastClickTime;

if (timeDiff < 250) {
// Двойное нажатие! Выполнить функцию
    console.log('Двойное нажатие!');
    deleteAccount(); // Замените на свою функцию
} else {
// Одинарное нажатие
    console.log('Одинарное нажатие');
}

    lastClickTime = currentTime;
});

function deleteAccount() {
    localStorage.clear()
    window.open("https://gvinses.github.io/KP229-telegram-app/", '_parent');
}

function reborn() {
    console.log("Reborn!");
    if (score >= 1000000) {
        localStorage.getItem('tapValue', tapValue);
        localStorage.getItem('score', score);
        score -= 10000;
        localStorage.setItem('score', score);
        tapValue = tapValue * 1.2;
        localStorage.setItem('tapValue', tapValue); // Store tapValue in local storage
        console.log("1.1")
    } else {
        document.getElementById('ReError').innerText = 'Не хватает!';
        console.log("!!!!!1!!!!!")

        setTimeout(function () {
            document.getElementById('ReError').innerText = '';
        }, 2500)
    }
}