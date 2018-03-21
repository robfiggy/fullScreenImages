let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}


// Starts the slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

// Shows the previous image
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// Shows the next image
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current ++;
}

// Event Listener for left arrow
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

// Event Listener for right arrow
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length -1) {
        current = -1
    }
    slideRight();
});



startSlide();