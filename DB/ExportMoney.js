// let howMuchMoney = document.getElementById('howMuchMoney')
//
// let scoreToExport = parseInt(localStorage.getItem('score'));
// howMuchMoney.innerText = `У вас ${scoreToExport} KPC`
//
// let howMuchMoneyLabel = 'Введите, сколько хотите вывести:'
// let currentScoreInDB = 0
// let scoreToPost = 0
// function exportMoney() {
//     let MoneyInputHTMLOBJ = document.getElementById('MoneyInput')
//     howMuchMoneyLabel = document.getElementById('howMuchMoneyLabel')
//     let MoneyInput = parseInt(MoneyInputHTMLOBJ.value)
//     if (MoneyInput !== null && MoneyInput <= scoreToExport) {
//         let userNameFromLS = String(localStorage.getItem('username'));
//         fetch('http://kringeproduction.ru/api/users/?format=json')
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 for (let obj of data) {
//                     if (obj['Telegram_hash'] === userNameFromLS) {
//                         currentScoreInDB = Number(obj['KPСS'])
//                         scoreToPost = currentScoreInDB + MoneyInput
//                         console.log(scoreToPost)
//                         setScore(MoneyInput)
//                         postData()
//                         break
//                     }
//                 }
//             });
//         // postData()
//     } else {
//        setError()
//     }
// }
// function setError() {
//     howMuchMoney.innerText = `Ошибка!`
//     howMuchMoney.style.color = 'red'
//     howMuchMoneyLabel.innerText = 'Вы ввели что-то не так, или у нас ошибка сервера'
//     setTimeout(() => {
//         howMuchMoney.innerText = `У вас ${scoreToExport} KPC`
//         howMuchMoney.style.color = 'white'
//         howMuchMoneyLabel.innerText = 'Введите, сколько хотите вывести:'
//     }, 5000)
// }
//
// function setScore(MoneyInput) {
//     let score = parseInt(localStorage.getItem('score'))
//     score -= MoneyInput
//     localStorage.setItem('score', score)
//     scoreToExport = parseInt(localStorage.getItem('score'));
//     howMuchMoney.innerText = `У вас ${scoreToExport} KPC`
// }
//
// let usernameToPost = localStorage.getItem('username')
//
// let xhr = new XMLHttpRequest();
//
// function postData() {
//     let urlForPost = `http://kringeproduction.ru/user_data_send/?username=${usernameToPost}&moneys=${scoreToPost}`
//
//     xhr.open('GET', urlForPost);
//     xhr.send();
//
//     //Сделать загрузку, пока не загрузится
//
//     xhr.onload = function() {
//         let responseObj = xhr.response;
//         console.log(responseObj);
//     };
//
//     //http://kringeproduction.ru/user_data_send/?username=JustGVINS&moneys=7889999999
// }