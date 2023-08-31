import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export default () => {
    const instagram_feed_swiper = new Swiper('.instagram_feed_swiper', {
        // Optional parameters
        modules: [Pagination],
        // direction: 'horizontal',
        // slidesPerView: 4,
        // centeredSlides: true,
        spaceBetween: 22,
        // loop: true,
        // loopedSlides: 2,
        // spaceBetween: 16,
        // slidesPerGroup: 1,
        slidesPerView: 'auto',
        // centeredSlides: true,
        // loop: true,
        // loopAdditionalSlides: 30,
        // centerInsufficientSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    }
)
}