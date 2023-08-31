import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export default () => {
    const video_feed = new Swiper('.video_feed_swiper', {
        modules: [Pagination],
        spaceBetween: 22,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
}