import $ from 'jquery';
import 'lazysizes';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import * as webpFunctions from "./modules/functions.js";


    webpFunctions.isWebp();

//menu
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeBtn = document.querySelector('.menu__close'),
        lis= document.querySelectorAll('.menu__link a'),
        btnTop = document.querySelector('.totop'),
        overlay = document.querySelector('.menu__overlay'),
        linkBtn = document.querySelectorAll('.promo__link');

    let timerId ;

        hamburger.addEventListener('click', function(){
            menu.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.style.display = 'none';
        });

        closeBtn.addEventListener('click', fadeMenu);

        window.addEventListener('keydown', (e)=>{
            if( e.code === 'Escape'){
                fadeMenu();
            }
        })

        window.addEventListener('click', (e)=>{
            if(e.target === overlay){
                fadeMenu();
            }
        })

        function fadeMenu(){
            menu.classList.remove('active');
            document.body.style.overflow = 'visible';
            hamburger.style.display = 'flex';
        }

        lis.forEach(item =>{
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                scrollToY(getPositionBtn(item.hash));
                timerId=setTimeout(fadeMenu, 700);
            })
        })

        linkBtn.forEach(btn =>{
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                scrollToY(getPositionBtn(btn.hash));
            })
        })

//slider
    const swiper = new Swiper(".swiper", {
        autoplay: true,
        modules: [Autoplay, Navigation, Pagination],

        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

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
    function getPositionBtn(elemHash){
        let target = document.querySelector(elemHash),
            paddingTop = parseInt(getComputedStyle(target).paddingTop),
            coords = target.getBoundingClientRect().top + window.pageYOffset;
        let pos = coords + paddingTop;
        return pos;
    }

    function scrollToY(pos){
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }

    btnTop.addEventListener('click', (e)=>{
        e.preventDefault();
        scrollToY(0);
    });

    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > window.innerHeight){
            btnTop.classList.add('showBtn');
        }else{
            btnTop.classList.remove('showBtn');
        }
    })

//mail
    $(function(){
        $('form').submit(function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "files/smart.php",
                data:$(this).serialize()
            }).done(function (){
                $(this).find("input").val("");

                $("form").trigger("reset");
            });
            return  false;
        });
    });
//unload page
window.addEventListener('pagehide', () => {
    console.log('Goodbye');
    alert('By');
})


