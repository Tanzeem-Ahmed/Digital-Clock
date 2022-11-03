let hour = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let day = document.getElementById("day");

function updateTime() {
  let date = new Date();

  let newHours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let newMinutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let newSeconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let newDay = "AM";

  if (newHours > 12) {
    newHours = newHours - 12 < 10 ? "0" + (newHours - 12) : newHours - 12;
    newDay = "PM";
  }

  hour.innerText = newHours;
  minutes.innerText = newMinutes;
  seconds.innerText = newSeconds;
  day.innerText = newDay;

  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();
