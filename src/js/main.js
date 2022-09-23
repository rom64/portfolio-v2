import $ from 'jquery';
import 'lazysizes';

import * as webpFunctions from "./modules/functions.js";

webpFunctions.isWebp();

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close'),
    lis= document.querySelectorAll('.menu__link'),
     btnTop = document.querySelector('.totop'),
    overlay = document.querySelector('.menu__overlay'),
    linkBtn = document.querySelectorAll('.promo__link');

let timerId ;

    hamburger.addEventListener('click', ()=>{
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
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
    }


    lis.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
           timerId=setTimeout(fadeMenu, 700);
            scrollToY(getPositionLink(item));
        });
    });

    linkBtn.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            scrollToY(getPositionBtn(btn.hash));
        })
    });

    function getPositionLink(element){
       let elemHash = element.childNodes[0].hash;
        return getPositionBtn(elemHash);

    }
    function getPositionBtn(elemHash){
        let target = document.querySelector(elemHash),
            paddingTop = parseInt(getComputedStyle(target).paddingTop),
            coords = target.getBoundingClientRect().top + window.pageYOffset,
            pos = coords + paddingTop;
        return pos;
    }

    function scrollToY(pos){
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }
    //toTop
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



