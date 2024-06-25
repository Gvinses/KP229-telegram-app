let isBlocked = false;
let clickCount = 0;
let lastClickTime = 0;


window.onload = function isUserBlocked() {
  if (localStorage.getItem('isBlocked') === 'true'){
    goToBlock()
  } else if (localStorage.getItem('isBlocked') === 'false'){
    clearInterval(interval)  
    window.location.href = "../index.html"
  };
  if (localStorage.getItem('isBlocked') === null){
    localStorage.setItem('isBlocked', 'false')
  }
  
}
function AntiCheat() {
  const now = Date.now();
  if (isBlocked) return;

  let lastTimeBetweenClick;
  if (localStorage.getItem('clickBetweenTime') !== null) {
    lastTimeBetweenClick = localStorage.getItem('clickBetweenTime')
  }

  let clickBetweenTime = now - lastClickTime;
  localStorage.setItem('clickBetweenTime', clickBetweenTime)

  // if (now - lastClickTime > 50) {
  //   clickCount = 0;
  //   console.log(now-lastClickTime + ' speed of clicks')
  // } else {
  //   clickCount++;
  // }

  if ((clickBetweenTime !== lastTimeBetweenClick) || ((now - lastClickTime) < 50)) {
    clickCount = 0;
    console.log(now-lastClickTime + ' speed of clicks')
  } else {
    clickCount++;
  }

  if (clickCount > 10) {
    isBlocked = true;
    localStorage.setItem('isBlocked', true);
    setTimeout(() => {
      isBlocked = false;
      localStorage.setItem('isBlocked', false);
      clickCount = 0;
    }, 300000);

    // document.body.classList.add('blocked');

    localStorage.setItem("time", 300000)
    window.open = 'https://gvinses.github.io/KP229-telegram-app/antiWare/block.html'
  }

  // Выполнить действие кнопки
  lastClickTime = now;
};

function goToBlock() {
  window.open = 'https://gvinses.github.io/KP229-telegram-app/antiWare/block.html'
}