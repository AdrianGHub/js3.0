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
    canvas.width;
    canvas.height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);

        // add red effect 
        // pixels = redEffect(pixels);

        // add split rgb effect 
        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.05;

        // add green screen effect
        // pixels = greenScreen(pixels);

        // put pixels back
        ctx.putImageData(pixels, 0, 0)
    }, 16)
}

function takePhoto() {
    snap.currentTIme = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'bolek');
    link.innerHTML = `<img src="${data}" alt="Pobierz Bolka"/>`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
      pixels.data[i + 1] = pixels.data[i + 1] - 250; // GREEN
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
  }
  
  function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 550] = pixels.data[i + 0]; // RED
      pixels.data[i - 300] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 350] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }
  
  function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
    return pixels;
  }

getVideo();
video.addEventListener("canplay", paintToCanvas);
photoButton.addEventListener("click", takePhoto);