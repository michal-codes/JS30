const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".minute-hand");
const hoursHand = document.querySelector(".hour-hand");

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;

  const hands = document.querySelectorAll(".hand");
  if (seconds === 0) {
    hands.forEach(hand => (hand.style.transitionDuration = "0s"));
  } else {
    hands.forEach(hand => (hand.style.transitionDuration = "0.07s"));
  }
}

setInterval(setTime, 1000);
