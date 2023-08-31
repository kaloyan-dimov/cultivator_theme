import hero_swiper from './hero_swiper'
import best_selling_swiper from './best_selling_swiper'
import instagram_feed_swiper from './instagram_feed_swiper'
import video_feed_swiper from './video_feed_swiper'
import single_product_swiper from "./single_product_swiper"
import sustainable_sourcing_swiper from './sustainable_sourcing_swiper'

export default () => {
    if(document.querySelector('.hero_swiper')){hero_swiper()}
    if(document.querySelector('.best_selling_swiper')){best_selling_swiper()}
    if(document.querySelector('.instagram_feed_swiper')){instagram_feed_swiper()}
    if(document.querySelector('.video_feed_swiper')){video_feed_swiper()}
    if(document.querySelector('.single_product_swiper')){single_product_swiper()}
    if(document.querySelector('.sustainable_sourcing_swiper')){sustainable_sourcing_swiper()}
}