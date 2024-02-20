'use strict'
// start navbar
const navBarEl=document.querySelector('#navbar-sec');
const sliderSecEl=document.querySelector('#slider-sec');
let lastScrollTop = 0;
window.addEventListener("scroll", ()=> {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        // navBarEl.style.position='sticky';
        navBarEl.classList.remove('fixed-top')

        console.log("Scrolling down");
    } else {
        // Scrolling up
        // navBarEl.style.position='fixed'
        navBarEl.classList.add('fixed-top');
        if(currentScroll==0){
            navBarEl.classList.remove('fixed-top')
        }
        console.log("Scrolling up");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
// end navbar
// start dropdown
const dropdownSecEl=document.querySelector('.dropdown');
const dropdownLinkEl=document.querySelector('.dropdown-link');
const closeBtnEl=document.querySelector('.close-btn');
dropdownLinkEl.addEventListener('click',() => {
    dropdownSecEl.classList.toggle('show-dropdown')
 })
closeBtnEl.addEventListener('click',() => {
    dropdownSecEl.classList.remove('show-dropdown')
 })
// end dropdown
// start dropdown-hamburger-menu
const dropdownHamburgerMenuEl=document.querySelector('#dropdown-hamburger-menu');
const menuBtnEl=document.querySelector('#menu');
const closeMenuBtnEl=document.querySelector('#close-menu-btn');
menuBtnEl.addEventListener('click',() => {
    dropdownHamburgerMenuEl.style.display='flex';
    menuBtnEl.style.display='none';
    closeMenuBtnEl.style.display='inline-block'
 })
 closeMenuBtnEl.addEventListener('click',()=>{
    dropdownHamburgerMenuEl.style.display='none';
    menuBtnEl.style.display='inline-block';
    closeMenuBtnEl.style.display='none'

 })

// end dropdown-hamburger-menu
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
// start Tribune Tower sec
let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// const swiperSlide=document.querySelectorAll('.swiper-slide');
// const buttonNext=document.querySelector('#next-btn');
// const buttonPrev=document.querySelector('#prev-btn');
//   let swiperIndexSlide=0;
//   swiperSlide[0].addEventListener('mouseover',() => {
//     console.log('hi')
//     buttonNext.style.transform='translateX(150%)';
    
    // buttonPrev.style.display='none';
//   })
  
//   swiperSlide[0].addEventListener('mouseleave',() => {
//     buttonNext.style.transform='translateX(150%)';
//     buttonPrev.style.display='none';
//   })
//   swiperSlide[1].addEventListener('mouseenter',() => {
//     // buttonNext.style.transform='translateX(-100%)';
//     buttonPrev.style.transform='translateX(100%)';

//   })
//   swiperSlide[1].addEventListener('mouseleave',() => {
//     buttonNext.style.display='none';
//     buttonPrev.style.display='none';
//   })
//   swiperSlide[2].addEventListener('mouseenter',() => {
//     buttonNext.style.display='none';
//     buttonPrev.style.display='inline-block';
//   })
//   swiperSlide[2].addEventListener('mouseleave',() => {
//     buttonNext.style.display='none';
//     buttonPrev.style.display='none';
//   })

// end Tribune Tower sec
// end main
// start modal
const modalSecEl=document.querySelector('#modal');
const modalCloseBtnEl=document.querySelector('#modal-close-btn');
const bodyEl=document.querySelector('body')
let showModal=setTimeout(() => {
    modalSecEl.style.display='inline-block';
    bodyEl.style.overflow='hidden';
    
    
}, 2000);
modalCloseBtnEl.addEventListener('click',() => { 
    modalSecEl.style.display='none';
    
 })

// end modal
