const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title"),
  clockList = clockContainer.querySelector(".js-clock-list");

function appendElem(parent, ...elem) {
  for (let i = 0; i < elem.length; i++) {
    parent.appendChild(elem[i]);
  }
  return parent;
}

function getTime() {
  clockList.innerText = "";
  const date = new Date();
  const hours = paintClock(date.getHours(), "hours");
  const mins = paintClock(date.getMinutes(), "minutes");
  const seconds = paintClock(date.getSeconds(), "seconds");
  appendElem(clockList, hours, mins, seconds);
}

function paintClock(time, text) {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  const span = document.createElement("span");
  h1.innerText = addZero(time);
  span.innerText = text;
  return appendElem(li, h1, span);
}

function addZero(val) {
  return val < 10 ? `0${val}` : val;
}

function init() {
  setInterval(getTime, 1000);
}

// function getTime() {
//   const date = new Date();
//   const minutes = date.getMinutes();
//   const hours = date.getHours();
//   const seconds = date.getSeconds();
//   clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }

// function init() {
//   getTime();
//   setInterval(getTime, 1000);
// }

init();
