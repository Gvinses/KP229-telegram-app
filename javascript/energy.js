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

<<<<<<< HEAD
        // console.log(">>>>" + energy)
        timer()
    } else {
        $('#userEnergy').css("color", "red")
        $('#userMaxEnergy').css("color", "red");
        setTimeout(() => {
            $('#userEnergy').css("color", "#fff")
            $('#userMaxEnergy').css("color", "#fff");
        }, 1000)
    }
=======
        //console.log(">>>>" + energy)
        timer() 
>>>>>>> b086875367d6e5245797453ba762b8303024604a
}

let intervalId

function timer(){
    if(energy <= 0){
<<<<<<< HEAD
        // console.log(userEnergy.innerText)
        // console.log(maxEnergy)
=======
>>>>>>> b086875367d6e5245797453ba762b8303024604a
        setTimeout(() => {
            intervalId = setInterval(energyReset, 1000);
        }, 7000)
    }
}
window.onload = timer() 
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


