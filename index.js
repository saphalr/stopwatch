let hour1 = document.getElementById("hour1");
let hour2 = document.getElementById("hour2");
let minute1 = document.getElementById("minute1");
let minute2 = document.getElementById("minute2");
let second1 = document.getElementById("second1");
let second2 = document.getElementById("second2");
let mili1 = document.getElementById("mili1");
let mili2 = document.getElementById("mili2");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

function updateStopWatch() {
  miliseconds++;
  if (miliseconds >= 100) {
    miliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  console.log(miliseconds);
  hour1.textContent = Math.floor(hours / 10);
  hour2.textContent = hours % 10;
  minute1.textContent = Math.floor(minutes / 10);
  minute2.textContent = minutes % 10;
  second1.textContent = Math.floor(seconds / 10);
  second2.textContent = seconds % 10;

  mili1.textContent = Math.floor(miliseconds / 10);
  mili2.textContent = miliseconds % 10;

  start.textContent = "Start";
}

start.addEventListener("click", function () {
  timer = setInterval(updateStopWatch, 10);
  stop.disabled = false;
  start.disabled = true;
});
stop.addEventListener("click", function () {
  clearInterval(timer);
  start.disabled = false;
  start.textContent = "Continue";
});
reset.addEventListener("click", function () {
  clearInterval(timer);

  hours = 0;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  updateStopWatch();
  start.disabled = false;
  start.textContent = "Start";
});
stop.disabled = true;
