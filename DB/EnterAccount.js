function dontHaveAccount() {
    window.open('https://t.me/KP229tokBot')
}

////same but it is fetch and new
let username
let password
function enterAccount() {
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
        fetch('https://kringeproduction.ru/api/users/?format=json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                clearInterval(waitingInterval)
                // console.log(data);
                let isInDB = false
                for (let obj of data) {
                    // console.log(obj['Telegram_hash'])
                    if (obj['Telegram_hash'] === username) {
                        // console.log(`${obj['Telegram_hash']} = Telegram_Hash ${obj['password']} = Password ${Number(obj['KPСS'])} His Score`)
                        isInDB = true
                        if (obj['password'] === password) {
                            let codedUS = obj['Telegram_hash']
                            localStorage.setItem('username', codedUS)
                            window.location.href = "exportMoney.html"
                        }
                        break
                    }
                }
                if (isInDB === false) {
                    document.getElementById('waiting').innerText = 'Ошибка'
                    setTimeout(() => {
                        document.getElementById('waiting').innerText = 'Ждёт...'
                    }, 3000)
                }
            });
    } catch (error) {
        clearInterval(waitingInterval)
        document.getElementById('waiting').innerText = `Ошибка ${error.message}`
        setTimeout(() => {
            document.getElementById('waiting').innerText = 'Ждёт...'
        }, 3000)
    }
}