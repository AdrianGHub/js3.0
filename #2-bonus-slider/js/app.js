import '../sass/style.scss'

document.addEventListener('DOMContentLoaded', () => {
    
    const imagesContainerEl = document.querySelector('.slider__images-container');
    const firstImageEl = document.querySelector('.slider__image-container--first img');
    const secondImageEl = document.querySelector('.slider__image-container--second img'); 
    const firstImageContainer = document.querySelector('.slider__image-container--first');
    const secondImageContainer = document.querySelector('.slider__image-container--second');
    const handleEl = document.querySelector('.slider__handle');
    const dividerEl = document.querySelector('.slider__divider');
    let imagesContainerWidth;
    let imagesContainerLeftOffset;
    let dragging = false; 


    function getOffset(clientX) {
        const offset = clientX - imagesContainerLeftOffset;
        if (offset < 0) {
            return 0;
        } else if (offset > imagesContainerWidth) {
            return imagesContainerWidth;
        } else {
            return offset;
        }
    }


    function move(clientX) {
        const offset = getOffset(clientX);
        const percent = offset / imagesContainerWidth * 100;
        dividerEl.style.left = `${percent}%`;
        secondImageContainer.style.width = `${percent}%`;
    }


    function initEvents() {
        handleEl.addEventListener('mousedown', () => {
            dragging = true;
        });

        handleEl.addEventListener('mouseup', () => {
            dragging = false;
        })

        handleEl.addEventListener('touchstart', () => {
            dragging = true;
        })

        handleEl.addEventListener('touchend', () => {
            dragging = false;
        })

        window.addEventListener('mousemove', (e) => {
            if(dragging) {
                move(e.clientX);
            }
        })

        window.addEventListener('touchmove', (e) => {
            if (dragging) {
                move(e.touches[0].clientX);
            }
        })
    };


    function adjustImages() {
        imagesContainerWidth = imagesContainerEl.offsetWidth;
        imagesContainerLeftOffset = imagesContainerEl.offsetLeft;

        firstImageEl.style.width = `${imagesContainerWidth}px`;
        secondImageEl.style.width = `${imagesContainerWidth}px`;
    }



    window.addEventListener('resize', adjustImages);

    adjustImages();
    initEvents();


})


