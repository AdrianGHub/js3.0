const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
    const method = video.paused ? video.play() : video.pause();
    return method;
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggleButton.textContent = icon;
}

function skipPart() {
    video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggleButton.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skipPart));