import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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

export default swiper;