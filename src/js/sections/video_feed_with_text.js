
import video_feed_with_text_swiper from "../swipers/video_feed_with_text_swiper"

export default () => {
    const video_feed = document.querySelectorAll(".video_feed_with_text")

    video_feed.forEach(video_section => {
    const video_section_list = video_section.querySelectorAll(".video_feed_list ol li")

    const video_section_videos = video_section.querySelectorAll(".video_feed_videos .video_feed_video")
    
    video_section_list[0].classList.add("active")
    video_section_videos[0].classList.add("active")

    video_section_list.forEach((li, index) => {
        li.addEventListener("click", () => {
            video_section_list.forEach(sub_li => {
                sub_li.classList.remove("active")
            })
            video_section_list[index].classList.add("active")
            video_section_videos.forEach(sub_li => {
                sub_li.classList.remove("active")
            })
            video_section_videos[index].classList.add("active")
        })
    })
    window.innerWidth < 1024 ? video_feed_with_text_swiper(video_section_videos) : '';
})

// console.log("video_feed_with_text_swiper()",video_feed_with_text_swiper())

    // Intersection observer to observe if video is in view
    const options = {
        root: null,
        threshold: 0.5
    };
    const callback = function(entries, observer) {
         entries.forEach((entry) => {
            console.log(entry.isIntersecting);
            console.log("is intersecting")
         });
    }
    let observer = new IntersectionObserver(callback, options);

    // const target = document.querySelector("video");
    video_feed.forEach(video_element => {
        observer.observe(video_element);
    })

    // Play video function
    function play_active_video() {
        
    }
}