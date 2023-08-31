import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export default () => {
    const sustainable_sourcing_swiper = new Swiper('.sustainable_sourcing_swiper', {
        modules: [Pagination],
        spaceBetween: 22,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    }
)
}