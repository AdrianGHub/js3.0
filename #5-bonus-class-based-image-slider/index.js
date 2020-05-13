class Slider {
    constructor(images) {
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;

        this.UISelectors = {
            slide: '[data-slide]',
            prevButton: '[data-button-prev]',
            nextButton: '[data-button-next]'

        }
    }

    initializeSlider() {
        this.slide = document.querySelector(this.UISelectors.slide);
        this.prevBtn = document.querySelector(this.UISelectors.prevButton);
        this.nextBtn = document.querySelector(this.UISelectors.nextButton);

        this.image = document.createElement('img');
        this.image.setAttribute('class', 'slide__image');
        this.image.setAttribute('src', this.images[0]);

        this.slide.appendChild(this.image);
    }

}