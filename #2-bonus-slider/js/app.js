import '../sass/style.scss'


document.addEventListener('DOMContentLoaded', () => {

const imagesContainerEl = document.querySelector('.slider__image-container');
const firstImageEl = document.querySelector('.slider__image-container--first img');
const secondImageEl = document.querySelector('.slider__image-container--second img');



function adjustImages() {
    const imagesContainerWidth = imagesContainerEl.offsetWidth;

    firstImageEl.style.width = `${imagesContainerWidth}px`;
    secondImageEl.style.width = `${imagesContainerWidth}px`;
}






window.addEventListener('resize', adjustImages);

adjustImages();



})
