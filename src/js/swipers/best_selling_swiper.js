import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export default () => {
    const best_selling_swiper = new Swiper('.best_selling_swiper', {
        // Optional parameters
        modules: [Pagination],
        // direction: 'horizontal',
        // slidesPerView: 4,
        // centeredSlides: true,
        // spaceBetween: 16,
        // loop: true,
        // loopedSlides: 2,
        // spaceBetween: 16,
        slidesPerView: 'auto',
        // centeredSlides: true,
        // loop: true,
        // loopAdditionalSlides: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
}
)
}