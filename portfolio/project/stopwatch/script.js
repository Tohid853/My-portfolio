let display = document.getElementById('display');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay(){
  let h = hours < 10 ? "0"+hours : hours;
  let m = minutes < 10 ? "0"+minutes : minutes;
  let s = seconds < 10 ? "0"+seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch(){
  seconds++;
  if(seconds == 60){
    seconds = 0;
    minutes++;
    if(minutes == 60){
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if(timer !== null) return; // double start rokne ke liye
  timer = setInterval(stopwatch, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
});