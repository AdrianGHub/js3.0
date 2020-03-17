const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');
const fullScreen = document.querySelector('.fullscreen__button');


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

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function moveProgress(e) {
    const moveTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = moveTime;
}

function toggleFullScreen() {
    if(video.requestFullscreen) {
        return video.requestFullscreen();
    }
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggleButton.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skipPart));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let = mousedown = false;
progress.addEventListener('click', moveProgress);
progress.addEventListener('mousemove', (e) => mousedown && moveProgress(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click',toggleFullScreen);