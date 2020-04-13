const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let countdown;

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);
    now = Date.now();
    then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then);



    countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if it should stop
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        // display timer
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? 0 : ''}${minutes}`;
}

function startTimer() {
    timer(this.dataset.time);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
e.preventDefault();
const mins = this.minutes.value;
timer(mins * 60);
this.reset();
});