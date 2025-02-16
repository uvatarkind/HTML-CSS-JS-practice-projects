const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date('September 11, 2026 00:00:00').getTime();

function timer(){
    const currentDate= new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance<0){
        Days.innerHTML = '00';
        Hours.innerHTML = '00';
        Minutes.innerHTML = '00';
        Seconds.innerHTML = '00';

    }

    const days = Math.floor(distance /(1000 * 60 * 60 *24));
    const hours = Math.floor(distance /(1000 *60 *60) % 24);
    const minutes = Math.floor(distance /(1000 * 60 ) % 60);
    const seconds = Math.floor(distance /(1000 ) % 60);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

document.addEventListener('DOMContentLoaded',function(){
    timer();
    countdown = setInterval(timer,1000);
});