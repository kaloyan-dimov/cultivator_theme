import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default () => {
    const hero_swiper = new Swiper('.single_product_swiper', {
        // Optional parameters
        modules: [Navigation],
        // direction: 'horizontal',
        // loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}