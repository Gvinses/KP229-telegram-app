let isBlocked = false;
let clickCount = 0;
let lastClickTime = 0;

function isUserBlocked() {
  console.log("userCheck")
  if (localStorage.getItem('isBlocked') === true){
    goToBlock()
  } else if (localStorage.getItem('isBlocked') === 'false'){
    clearInterval(interval)  
    window.location.href = "../index.html"
  } else if (localStorage.getItem('isBlocked') === null){
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
//https://gvinses.github.io/KP229-telegram-app/antiWare/block.html
  let clickBetweenTime = Number(now - lastClickTime)
  localStorage.setItem('clickBetweenTime', clickBetweenTime)

  // if (now - lastClickTime > 50) {
  //   clickCount = 0;
  //   console.log(now-lastClickTime + ' speed of clicks')
  // } else {
  //   clickCount++;
  // }

  if (clickBetweenTime !== lastTimeBetweenClick){ //
    clickCount = 0;
    // console.log(now-lastClickTime + ' speed of clicks')
    // console.log(clickCount)
  } else {
    clickCount++;
  }

  if (clickCount > 10) {
    localStorage.removeItem('timerTime')
    isBlocked = true;
    localStorage.setItem('isBlocked', true);
    setTimeout(() => {
      isBlocked = false;           
      localStorage.setItem('isBlocked', false);
      clickCount = 0;
    }, 300000);

    // document.body.classList.add('blocked');
    window.location.href = 'https://gvinses.github.io/KP229-telegram-app/antiWare/block.html'
    
  }

  // Выполнить действие кнопки
  lastClickTime = now;
}
function goToBlock() {
  if (localStorage.getItem('isBlocked') === true) {
    window.location.href = 'https://gvinses.github.io/KP229-telegram-app/antiWare/block.html'
  }  
}