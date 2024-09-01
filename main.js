const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');

function clock() {
const time = new Date();
const secs = time.getSeconds() / 60;
const mins = time.getMinutes() + secs;
const hrs = (time.getHours() % 12) + mins / 60;

hours.style.setProperty("--rotation", hrs * 30); 
minutes.style.setProperty("--rotation", mins * 6); 
seconds.style.setProperty("--rotation", secs * 360);
}

setInterval(clock, 1000);