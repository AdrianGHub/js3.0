const slides = document.querySelector('.slider__wrapper').children;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let totalSlides = slides.length;
let index = 0;

const changeImageHandler = (direction) => {
    if(direction === "next") {
        index++;
        if(index === totalSlides) {
            index = 0;
        } 
    } else {
        if(index === 0) {
            index = totalSlides - 1;
        } else {
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