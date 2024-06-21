window.onload = startTasksChecker()
window.onload = localStorageHaveItemsForTasks()

let button1 = document.getElementById('check1Task');
let button2 = document.getElementById('check2Task');

function localStorageHaveItemsForTasks(){
    if (localStorage.getItem('2TaskCompleated') !== null){
        localStorage.setItem('2TaskCompleated', false)
    } 
    if (localStorage.getItem('1TaskCompleated') !== null){
        localStorage.setItem('1TaskCompleated', false)
    } 
}

function startTasksChecker(){
    if ((localStorage.getItem('1TaskCompleated')) === 'true'){
        button1.style.backgroundColor = '#3E9736';
        button1.textContent = '✅';
    }

    if ((localStorage.getItem('2TaskCompleated')) === 'true'){
        button2.style.backgroundColor = '#3E9736';
        button2.textContent = '✅';
    }
}

function check1Task(){
    let button1 = document.getElementById('check1Task');

    if (localStorage.getItem('1TaskCompleated') === 'false'){
        score = parseInt(localStorage.getItem('score'));
        score = score + 500;
        console.log(score);
        localStorage.setItem('score', score);
    
        button1.style.backgroundColor = '#3E9736';
        button1.textContent = '✅';
        localStorage.setItem('1TaskCompleated', true)
    } else {
        localStorage.setItem('1TaskCompleated', true)
        button1.textContent = '✅Уже забрано!✅';
        console.log("2")
        setTimeout( function() {
            button1.style.backgroundColor = '#3E9736';
            button1.textContent = '✅';
        }, 2500)
    }
}
function check2Task(){
    let button2 = document.getElementById('check2Task');

    if (parseInt(localStorage.getItem('score')) >= 1000 ){
        if (localStorage.getItem('2TaskCompleated') === 'false'){
            score = parseInt(localStorage.getItem('score'));
            score = score + 2000;
            console.log(score);
            localStorage.setItem('score', score);
        
            button2.style.backgroundColor = '#3E9736';
            button2.textContent = '✅';
            localStorage.setItem('2TaskCompleated', true)
        } else {
            localStorage.setItem('2TaskCompleated', true)
            button2.textContent = '✅Уже забрано!✅';
            console.log("2")
            setTimeout( function() {
                button2.style.backgroundColor = '#3E9736';
                button2.textContent = '✅';
            }, 2500)
        }
    } else {
        button2.style.backgroundColor = '#831717';
        button2.textContent = '❌';
    }
}