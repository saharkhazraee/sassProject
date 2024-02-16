'use strict'
// start slider
// start auto slider
const sliderEl = [...document.querySelectorAll('.slider')];
const sliderBarEl = document.querySelector('#line-slider');
const sliderNumberEl = document.querySelector('#slider-number');
const sliderIndexEl=[...document.querySelectorAll('.slider-index')];
let slideIndex = 0;
let width = 0;
    let autoProgressBar = setInterval(progressBar, sliderNumberEl.getBoundingClientRect().width / 5000);
    function progressBar() {
        console.log(sliderNumberEl.getBoundingClientRect().width)
        if (width > sliderNumberEl.getBoundingClientRect().width) {
            clearInterval(autoProgressBar)
        } else {
            width = width + sliderNumberEl.getBoundingClientRect().width / 800;
            sliderBarEl.style.width = width + '%'
        }
    }
function autoSlider() {
    // start dynamic progress bar
    let width = 1;
    let autoProgressBar = setInterval(progressBar, sliderNumberEl.getBoundingClientRect().width / 5000);
    function progressBar() {
        console.log(sliderNumberEl.getBoundingClientRect().width)
        if (width > sliderNumberEl.getBoundingClientRect().width) {
            clearInterval(autoProgressBar)
        } else {
            width = width + sliderNumberEl.getBoundingClientRect().width / 1000;
            sliderBarEl.style.width = width + '%'
        }
    }
    // end  dynamic progress bar
    console.log(slideIndex)
    sliderEl[slideIndex].classList.remove('show_slider');
    sliderIndexEl[slideIndex].classList.remove('slider-index-show');
    slideIndex++
    console.log(slideIndex)
    if (slideIndex >= sliderEl.length) {
        slideIndex = 0
    }
    sliderEl[slideIndex].classList.add('show_slider');
    sliderIndexEl[slideIndex].classList.add('slider-index-show');
}
let play = setInterval(autoSlider, 5000);
// end auto slider
// end slider
