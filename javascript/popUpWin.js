const popupOverlay = document.getElementById("popup-overlay");
const linkToBack = document.getElementById("linkToBack");
const linkToMain = document.getElementById("linkToMain");
let isPopUp = false;

function showPopup() {
    popupOverlay.style.display = "block";
    linkToMain.style.opacity = "0";
    linkToBack.style.opacity = "0";
    isPopUp = true
}

function hidePopup() {
    popupOverlay.style.display = "none";
    linkToMain.style.opacity = "1";
    linkToBack.style.opacity = "1";
    isPopUp = false
}


const popupOverlay2 = document.getElementById("popup-overlay2");

function showPopup2() {
    popupOverlay2.style.display = "block";
    linkToMain.style.opacity = "0";
    linkToBack.style.opacity = "0";
    isPopUp = true
}

function hidePopup2() {
    popupOverlay2.style.display = "none";
    linkToMain.style.opacity = "1";
    linkToBack.style.opacity = "1";
    isPopUp = false
}