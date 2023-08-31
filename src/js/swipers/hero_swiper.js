import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export default () => {
    const hero_swiper = new Swiper('.hero_swiper', {
        // Optional parameters
        modules: [Pagination],
        // direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return `<span class="${className}"> ${index < 10 ? '0' : ''}${(index + 1)}</span>`
            }
        },
    });
}