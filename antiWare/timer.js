// let timer = document.getElementById("timer");
// let back = document.getElementById("linkToBack");
// let timerNum;

// // Check if the timer value is already stored in localStorage
// if (localStorage.getItem("time") !== null) {
//   timerNum = parseInt(localStorage.getItem("time"));
// } else {
//   timerNum = 0; // Set initial timer value
// }

// function updateTimer() {
//   // Update the timer display
//   timer.innerHTML = timerNum;

//   // Decrement the timer value
//   timerNum--;

//   // Store the updated timer value in localStorage
//   localStorage.setItem("time", timerNum);

//   // Check if the timer has reached 0
//   if (timerNum < 0) {
//     localStorage.removeItem("time");
//     back.classList.remove("fade");
//     clearInterval(interval);

//     window.location.href = "../index.html";
//   }
// }

// // Check if the timer value is already stored in localStorage
// if (localStorage.getItem("time") !== null) {
//   // Start the timer with the stored value
//   let interval = setInterval(updateTimer, 1000); // Update every second
// }




let timerId;
let remainingTime = 300; // 3000 секунд = 50 минут

// Загрузка сохраненного времени из LocalStorage
loadTimeFromStorage();

function loadTimeFromStorage() {
    let storedTime = localStorage.getItem('timerTime');
    if (storedTime) {
        remainingTime = parseInt(storedTime);
    }
    updateTimer();
}

function updateTimer() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;

    if (remainingTime <= 0) {
        clearInterval(timerId);
        // alert('Таймер завершен!');
        window.location.href = '../index.html'        
        localStorage.setItem('isBlocked', true)
    }

    remainingTime--;

    // Сохранение времени в LocalStorage
    localStorage.setItem('timerTime', remainingTime);
}

timerId = setInterval(updateTimer, 1000); // Обновлять таймер каждую секунду