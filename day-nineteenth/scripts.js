const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const photoButton = document.querySelector('.photo__button');



function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false}) 
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch((err => {
            console.error(`Hey! I've denied Web Cam, maybe you should not do it man 😐`, err)
        }))
}

function paintToCanvas() {
    let width = video.videoWidth;
    let height = video.videoHeight; 
    console.log(width, height);
    canvas.width;
    canvas.height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16)
}

