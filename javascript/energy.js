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

        //console.log(">>>>" + energy)
        timer() 
}

let intervalId

function timer(){
    if(energy <= 0){
        setTimeout(() => {
            intervalId = setInterval(energyReset, 1000);
        }, 700)
    }
}

let IsEnergyReseting = false

function energyReset() {
    if (energy < maxEnergy) {
        energy += 1;
        localStorage.setItem('energy', energy);
        userEnergy.innerHTML = energy;
        IsEnergyReseting = true
    } else {
        location.reload()
        let EnegryToLocal = userEnergy.innerHTML
        localStorage.setItem('energy', EnegryToLocal);
        IsEnergyReseting = false
    }
}

// function stopEnergy() {
//     let EnergyWhenUSClick = energy
//     localStorage.setItem('SavedEnergy', EnergyWhenUSClick);
//     energy = maxEnergy
//     localStorage.setItem('energy', energy);
//     energyReset()
//     energy = parseInt(localStorage.getItem('SavedEnergy'));
//     localStorage.setItem('energy', energy);
// }


