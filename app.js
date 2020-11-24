// Rotate every 1sec
setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  // Calls the clockRotation function
  clockRotation(hourHand, hoursRatio);
  clockRotation(minuteHand, minutesRatio);
  clockRotation(secondHand, secondsRatio);
}

// Makes the clock hand to rotate
function clockRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
