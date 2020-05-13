class Slider {
    constructor(images) {
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;

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

    }
}