'use strict'
// start navbar
const navBarEl=document.querySelector('#navbar-sec');
const sliderSecEl=document.querySelector('#slider-sec');

// if(sliderSecEl.getBoundingClientRect().bottom>navBarEl.getBoundingClientRect().height){
// navBarEl.style.position='none'
// }
window.addEventListener('scroll',() => { 
    console.log(sliderSecEl.getBoundingClientRect().bottom)
    console.log(window.innerHeight*0.8)
    sliderSecEl.getBoundingClientRect().bottom>window.innerHeight*0.8?
    navBarEl.classList.add("fixed-top"):navBarEl.classList.remove("fixed-top");
 })
// end navbar
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
        // console.log(sliderNumberEl.getBoundingClientRect().width)
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
        // console.log(sliderNumberEl.getBoundingClientRect().width)
        if (width > sliderNumberEl.getBoundingClientRect().width) {
            clearInterval(autoProgressBar)
        } else {
            width = width + sliderNumberEl.getBoundingClientRect().width / 1000;
            sliderBarEl.style.width = width + '%'
        }
    }
    // end  dynamic progress bar
    // console.log(slideIndex)
    sliderEl[slideIndex].classList.remove('show_slider');
    sliderIndexEl[slideIndex].classList.remove('slider-index-show');
    slideIndex++
    // console.log(slideIndex)
    if (slideIndex >= sliderEl.length) {
        slideIndex = 0
    }
    sliderEl[slideIndex].classList.add('show_slider');
    sliderIndexEl[slideIndex].classList.add('slider-index-show');
}
let play = setInterval(autoSlider, 5000);
// end auto slider
// end slider
// start main
// start shop sec
const prevArrowEl=document.querySelector('#prev-arrow');
const nextArrowEl=document.querySelector('#next-arrow');
const shopSliderEl=document.querySelector('#shop-slider');
const slideEl=document.querySelectorAll('.slide');
const maxScroolLeft=shopSliderEl.scrollWidth-shopSliderEl.clientWidth;

nextArrowEl.addEventListener('click',() => {
    shopSliderEl.scrollLeft +=slideEl[0].clientWidth;
    console.log(shopSliderEl.scrollLeft,'hi')
    console.log(shopSliderEl.clientWidth,'bye')
    console.log(shopSliderEl.scrollWidth,'hh')
    if(shopSliderEl.scrollLeft>=maxScroolLeft-1){
       nextArrowEl.style.display='none';
       prevArrowEl.style.display='inline-block'
    }else{
        nextArrowEl.style.display='inline-block';
        prevArrowEl.style.display='inline-block'
    }
    
 })
 prevArrowEl.addEventListener('click',() => {
    shopSliderEl.scrollLeft -=slideEl[0].clientWidth;
    console.log(shopSliderEl.scrollLeft,'hi')
    console.log(shopSliderEl.clientWidth,'bye')
    console.log(shopSliderEl.scrollWidth,'hh')
    if(shopSliderEl.scrollLeft< 10   ){
       prevArrowEl.style.display='none';
       nextArrowEl.style.display='inline-block';
    }else{
        prevArrowEl.style.display='inline-block';
        nextArrowEl.style.display='inline-block';
    }
    
 })

// end shop sec


// end main
