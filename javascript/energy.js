let userEnergy = document.getElementById('userEnergy')
let userMaxEnergy = document.getElementById('#userMaxEnergy');
let energy;

if (localStorage.getItem('energy') === null) {
    localStorage.setItem('energy', 1000);
    energy = 1000;
    userEnergy.innerText = energy 
} else {
    energy = parseInt(localStorage.getItem('energy'));
}

if (localStorage.getItem('max-energy') === null) {
    localStorage.setItem('max-energy', 1000);
} else {
    maxEnergy = parseInt(localStorage.getItem('max-energy'));
}

function Energy() {
    
    energy -= 1;

    localStorage.setItem('energy', energy);

    userEnergy.innerHTML = energy;

    console.log(">>>>" + energy) 
    timer()
}



function timer(){
    if(energy <= 0){
        let intervalId
        console.log(userEnergy.innerText)
        console.log(maxEnergy)
        setTimeout(() => {
            intervalId = setInterval(energyReset, 1000);
        }, 1000)
    }
}

function energyReset() {
    if (energy < maxEnergy) {
        energy += 1;
        localStorage.setItem('energy', energy);
        userEnergy.innerHTML = energy;
    } else {
        location.reload()
        let EnegryToLocal = userEnergy.innerHTML
        localStorage.setItem('energy', Ene);
    }
}