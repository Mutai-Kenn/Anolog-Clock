// Call setClock every second
setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minutesHand = document.querySelector("[data-minutes-hand]");
const secondsHand = document.querySelector("[data-seconds-hand]");

function setClock() {
  //Get time from Date object
  const currentDate = new Date();

  //Convert time to Hours, Minutes and seconds
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minutesRatio + currentDate.getHours()) / 12;

  //Rotate clock hands
  setRotation(secondsHand, secondsRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  // Set the position of the clock hands
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
