const button = document.getElementById('deleteButt');
let lastClickTime = 0;

function deleteAccount() {
    localStorage.clear()
    window.open("https://gvinses.github.io/KP229-telegram-app/", '_parent');
}
function deleteAccountToLia() {
    localStorage.setItem('IsRegister', '1')
    window.open("https://gvinses.github.io/KP229-telegram-app/", '_parent');
}


function deleteAccountBefore() {
    let currentTime = Date.now();
    let timeDiffer = currentTime - lastClickTime;

    if (timeDiffer < 250) {
        // console.log('Двойное нажатие!');
        deleteAccount();
    } else {
        // console.log("Одиночное нажатие")
        lastClickTime = currentTime;
    }
}