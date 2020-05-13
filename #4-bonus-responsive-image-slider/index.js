const slides = document.querySelector('.slider__wrapper').children;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let totalSlides = slides.length;
let index = 0;

prevButton.classList.add('unactive');

const changeImageHandler = (direction) => {
    if(direction === "next") {
        prevButton.classList.remove('unactive');
        index++;
        
        if(index === totalSlides - 1) {
            nextButton.classList.add('unactive');
        } 
    } else {
        if(index === 1) {
            prevButton.classList.add('unactive');
            index = 0;
        } else {
            nextButton.classList.remove('unactive');
            index--;
        }
    }

    for(i=0;i<slides.length;i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

prevButton.addEventListener('click', () => changeImageHandler("prev"));
nextButton.addEventListener('click', () => changeImageHandler("next"))