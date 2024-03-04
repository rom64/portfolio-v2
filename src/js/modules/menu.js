import scrollToY from "./toTop.js";

function menu() {

    const menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.hamburger'),
        closeBtn = document.querySelector('.menu__close'),
        lis= document.querySelectorAll('.menu__link a'),
        overlay = document.querySelector('.menu__overlay'),
        linkBtn = document.querySelectorAll('.promo__link');
    let timerId ;

    function getPositionBtn(elemHash){
        let target = document.querySelector(elemHash),
            paddingTop = parseInt(getComputedStyle(target).paddingTop),
            coords = target.getBoundingClientRect().top + window.scrollY;
        let pos = coords + paddingTop;
        return pos;
    }
    function fadeMenu(){
        menu.classList.remove('active');
        document.body.style.overflow = 'visible';
        hamburger.style.display = 'flex';
    }
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



    lis.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log(typeof(item.hash))
            if(item.hash === '#about') {
                scrollToY(getPositionBtn(item.hash) + 50);
            }else {
                scrollToY(getPositionBtn(item.hash) - 50);
            }

            timerId=setTimeout(fadeMenu, 700);
        })
    })

    linkBtn.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            if(btn.hash === '#about' && window.innerWidth < 769) {
                scrollToY(getPositionBtn(btn.hash) + 50);
            }else {
                scrollToY(getPositionBtn(btn.hash) - 50);
            }
        })
    })
}
export default menu;