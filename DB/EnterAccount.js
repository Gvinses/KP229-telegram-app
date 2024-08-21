function dontHaveAccount() {
    window.open('https://t.me/KP229tokBot')
}

////same but it is fetch and new
let username
let password
async function enterAccount() {
    username = document.getElementById('userNameInput').value
    password = document.getElementById('userPasswordInput').value
    document.getElementById('waiting').innerText = 'Ждёт.'

    let waitingInterval = setInterval(() => {
        let currentText = document.getElementById('waiting').innerText
        if (currentText.length >= 7) {
            document.getElementById('waiting').innerText = 'Ждёт'
        } else {
            document.getElementById('waiting').innerText += '.'
        }
    }, 800)
    try {
        setTimeout( function () {
            throw new Error('Error')
        }, 1000)
        await fetch('https://kringeproduction.ru/api/users/?format=json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                clearInterval(waitingInterval);
                let isInDB = false;
                for (let obj of data) {
                    if (obj['Telegram_hash'] === username) {
                        isInDB = true;
                        if (obj['password'] === password) {
                            let codedUS = obj['Telegram_hash'];
                            localStorage.setItem('username', codedUS);
                            window.location.href = "exportMoney.html";
                        }
                        break;
                    }
                }
                if (isInDB === false) {
                    throw new Error('Нет аккаунта');
                }
            });
    } catch (e) {
        let waitingP = document.getElementById('waiting')
        console.log(e.message + ' < ' + waitingP)
        clearInterval(waitingInterval)
        waitingP.innerText = e.message + ' попробуйте открыть сайт '
        let a = document.createElement('a')
        a.href = 'http://kringeproduction.ru/'
        a.textContent = 'KP229'
        a.target = "_blank"
        waitingP.appendChild(a)
    }

}