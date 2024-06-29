let toComplete = document.getElementById("toComplete");
toComplete.innerHTML = ''


// document.getElementById('forUserBG').addEventListener('change', userBGChange, false)
// function userBGChange() {

//     localStorage.removeItem('betterUserBG')
//     localStorage.removeItem('backgroundImage')

//     let userBG = document.getElementById('forUserBG');
//     let output = document.getElementById('outputOfBG');

//     output.src = userBG.value

//     if (userBG.files && userBG.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             const imageUrl = e.target.result;
//             output.src = imageUrl;

//             // Сохранить ссылку на изображение в локальном хранилище (необязательно)
//             localStorage.setItem('backgroundImage', imageUrl);
//         };
//         reader.readAsDataURL(userBG.files[0]);
//     }
//     // if (localStorage.getItem('backgroundImage')) {
//     //     document.body.style.backgroundImage = `url(${localStorage.getItem('backgroundImage')})`;
//     // }

//     localStorage.setItem('userBG', userBG.value);
//     toComplete.innerHTML = "Установить"
// }

// function userColorChange() {
//     localStorage.setItem('backgroundImage', null)
//     let toUseUserBGColorVarible = document.getElementById('forUserColor')
//     let backgroundColor = toUseUserBGColorVarible.value
//     localStorage.setItem('betterUserBG', toUseUserBGColorVarible.value)
//     $('body').css('background', backgroundColor)
//     localStorage.setItem('backgroundColor', toUseUserBGColorVarible.value)
//     hidePopup2()
// }

//////////////////////////////////////////////////////////////////////////////////////////

function userBGChange() {

    localStorage.removeItem('betterUserBG')
    localStorage.removeItem('backgroundImage')

    let userBG = document.getElementById('forUserBG');
    let output = document.getElementById('outputOfBG');

    output.src = userBG.value

    if (userBG.files && userBG.files[0]) {
        localStorage.removeItem('backgroundColor');
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            output.src = imageUrl;

            // Сохранить ссылку на изображение в локальном хранилище (необязательно)
            localStorage.setItem('backgroundImage', imageUrl);
        };
        reader.readAsDataURL(userBG.files[0]);
    }
    // if (localStorage.getItem('backgroundImage')) {
    //     document.body.style.backgroundImage = `url(${localStorage.getItem('backgroundImage')})`;
    // }

    localStorage.setItem('userBG', userBG.value);
    toComplete.innerHTML = "Установить"
}


function userColorChange() {
    localStorage.removeItem('backgroundImage');
    let toUseUserBGColorVarible = document.getElementById('forUserColor');
    let backgroundColor = toUseUserBGColorVarible.value;
    localStorage.setItem('backgroundColor', backgroundColor);
    $('body').css('background-color', backgroundColor);
    hidePopup2();
}

// ...

// Background.js

// Function to set the background color or image based on user's preference
function setBackground() {
    // Check if user has selected a background color
    if (localStorage.getItem('backgroundColor')) {
        let userColorOfBG = localStorage.getItem('backgroundColor');
        $('body').css('background-color', userColorOfBG);
        localStorage.removeItem('backgroundImage'); // Clear background image if color is selected
    }
  
    // Check if user has uploaded a background image
    if (localStorage.getItem('backgroundImage')) {
        let userBackgroundImage = localStorage.getItem('backgroundImage');
        $('body').css('background-image', `url(${userBackgroundImage})`);
        localStorage.removeItem('backgroundColor'); // Clear background color if image is selected
    }
}

// Call the setBackground function when the window loads
