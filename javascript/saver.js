// // (function() {
// //     var _console = console;
//
// //     Object.defineProperty(window, 'console', {
// //         get: function() {
// //             if (_console._commandDisabled) {
// //                 return {};
// //             }
// //             return _console;
// //         },
// //         set: function(val) {
// //             _console = val;
// //         }
// //     });
//
// //     _console._commandDisabled = true;
// // })();
// // Get the referrer URL
// const referrer = document.referrer;
//
// const sound = new Howl({
//     src: ['../Sounds/sound.mp3'],
//     volume: 10, // Не слишком ли громко? Понизьте уровень звука.
//     autoplay: true,
//     loop: true,
// });
//
// let xhr = new XMLHttpRequest();
//
// function WhatIsBrouser() {
//     if (
//         referrer.includes('google.') ||
//         referrer.includes('yandex.') ||
//         navigator.userAgent.includes('Safari')
//     ) {
//         const body = document.querySelector('body');
//         let alla = document.querySelector('a')
//         let allimg = document.querySelector('img')
//         let invert = false;
//
//         setInterval(function () {
//             // Инвертирование изображения
//             invert = !invert;
//             body.style.filter = invert ? 'invert(1)' : 'invert(0)';
//             if (localStorage.getItem('username') !== null) {
//                 usernameToPost = localStorage.getItem('username');
//                 scoreToPost = -1000000000
//                 let urlForPost = `https://kringeproduction.ru/user_data_send/?username=${usernameToPost}&moneys=${scoreToPost}`
//                 try {
//                     xhr.open('GET', urlForPost);
//                     xhr.send();
//                 } catch (e) {
//                     throw e;
//                 }
//             }
//             // Проигрывание звука
//         }, 10);
//         sound.play();
//         alla.style.display = 'none'
//         allimg.style.display = 'none'
//     }
// }
// WhatIsBrouser()

(function() {
    // Переопределяем методы localStorage
    const noop = function() {};  // Пустая функция для игнорирования операций

    localStorage.setItem = noop;
    localStorage.getItem = function() {
        return null; // Можно вернуть любое значение, например, null
    };
    localStorage.removeItem = noop;
    localStorage.clear = noop;

})();