import 'lazysizes';

import swiper from "./modules/slider.js";
import * as webpFunctions from "./modules/functions.js";
import scrollToY from "./modules/toTop.js";
import menu from "./modules/menu.js";
import animate from "./modules/canvas.js";

//webp
    webpFunctions.isWebp();
//menu
   menu();
//slider
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(slide =>{
        slide.addEventListener('mouseover', ()=>{
            swiper.autoplay.stop();
            slide.style.zIndex += '1';
            slide.style.transform = 'scale(1.2)';
        });
        slide.addEventListener('mouseout', () => {
            slide.style.zIndex -= '1';
            slide.style.transform = 'none';
            swiper.autoplay.start();
        })
    })

//scroll toTop
const btnTop = document.querySelector('.toTop');

    btnTop.addEventListener('click', (e)=>{
        e.preventDefault();
        scrollToY(0);
    });

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > window.innerHeight){
            btnTop.classList.add('showBtn');
        }else{
            btnTop.classList.remove('showBtn');
        }
    })

//unload page
window.addEventListener('pagehide', () => {
    console.log('Goodbye');
    alert('By');
})

//canvas
animate();