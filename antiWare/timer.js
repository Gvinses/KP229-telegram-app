let timer = document.getElementById("timer")
let timerNum = 300000
let back = document.getElementById("linkToBack")
// console.log(timerNum)

function updateTimer() {

    if (((localStorage.getItem("time")) === null) || (timer.innerHTML === 'NaN') ){
        localStorage.setItem("time", Number(timerNum))
        timer.innerHTML = timerNum
    }
    localStorage.setItem("time",              Number(timerNum))
    timer.innerHTML = timerNum

    timerNum = parseInt(localStorage.getItem("time"))
    timerNum = Number(timerNum - 1)
    // console.log(timer.textContent)
    timer.innerHTML = timerNum 
    localStorage.setItem("time", timerNum)

    if (timerNum == 0){
        localStorage.removeItem("time")
        back.classList.remove("fade")
        clearInterval(interval)  

        window.location.href = "../index.html"
    }

    
}



let interval = setInterval(updateTimer, 1)