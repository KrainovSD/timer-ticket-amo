const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let timer;
  let start;
  const stop = 0;
  return (seconds) => {
    clearInterval(timer);
    start = seconds;
    timerEl.textContent = secondsToHMS(start);
    timer = setInterval(() => {
      if (start > stop) {
        start--;
        timerEl.textContent = secondsToHMS(start);
      } else {
        clearInterval(timer);
        timerEl.textContent = `Введите значение для старта`;
      }
    }, 1000);
  };
};
const secondsToHMS = (sec) => {
  let h = Math.floor(sec / 3600);
  var m = Math.floor((sec % 3600) / 60);
  var s = Math.floor((sec % 3600) % 60);
  if (h < 10) h = `0${h}`;
  if (m < 10) m = `0${m}`;
  if (s < 10) s = `0${s}`;
  return `${h}:${m}:${s}`;
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  const regNumber = /[^\d]/g;
  e.target.value = e.target.value.replace(regNumber, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
