let date;
let Anotherdate;

window.onunload = function () {
    date = new Date();
    localStorage.setItem('oldDate', date);
}

setTimeout(saveDate, 1000)

function saveDate() {
    date = new Date();
    localStorage.setItem('oldDate', date);
}

window.onload = function () {
    date = localStorage.getItem('oldDate');
    Anotherdate = new Date();
    checker();
}

function checker() {
    Anotherdate = new Date();
    date = localStorage.getItem('oldDate');

    if (date) {
        date = new Date(date);
        let energy = localStorage.getItem('energy');
        let maxEnergy = localStorage.getItem('max-energy');

        let timeDiff = Math.abs(Anotherdate.getTime() - date.getTime());
        let diffMinutes = Math.ceil(timeDiff / (1000 * 60));

        if (diffMinutes >= 16) {
            energy = maxEnergy;
        } else {
            let howMuchToGiveEnergy = diffMinutes % 0.9;
            energy = Math.min(parseInt(energy) + howMuchToGiveEnergy);
        }

        localStorage.setItem('energy', energy);
        console.log(energy);
    }

    console.log(date)
    console.log(Anotherdate);
}