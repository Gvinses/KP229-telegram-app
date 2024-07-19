const button = document.getElementById('deleteButt');
let lastClickTime = 0;

function deleteAccount() {
    localStorage.clear()
    window.open("https://gvinses.github.io/KP229-telegram-app/", '_parent');
    localStorage.setItem('IsRegister', '1')
}

function deleteAccountBefore() {
    let currentTime = Date.now();
    let timeDiffer = currentTime - lastClickTime;

    if (timeDiffer > 250) {
        //console.log("Одиночное нажатие")
    } else {
        //console.log('Двойное нажатие!');
        deleteAccount();

        lastClickTime = currentTime;
    }
}