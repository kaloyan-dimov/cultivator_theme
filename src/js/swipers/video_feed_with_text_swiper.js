import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export default (video_section_videos) => {
    const video_feed_with_text_swiper = new Swiper('.video_feed_with_text_swiper', {
        modules: [Pagination],
        spaceBetween: 50,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                video_section_videos.forEach(sub_li => {sub_li.classList.remove("active")})
                video_section_videos[video_feed_with_text_swiper.realIndex].classList.add("active")
            }
        }
    })
}