const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelector('[data-skip]');

function togglePlay() {
    const method = video.paused ? video.play() : video.pause();
    return method;
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggleButton.textContent = icon;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);