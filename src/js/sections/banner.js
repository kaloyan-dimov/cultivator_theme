export default () => {
    document.querySelectorAll(".banner").forEach((banner_section, index) =>{
        let sum_width = 0
        banner_section.querySelectorAll(".banner_container .banner_item").forEach(banner_item => {
            sum_width += banner_item.offsetWidth;
        })

        let animation_keyframes = 
            `@keyframes bannermove${index} {
            0% { margin-left: 0px; }
            100% { margin-left: -${sum_width/3}px; }
            }`;
        let banner_animation = document.createElement("style");
        banner_animation.type = "text/css";
    
        if (banner_animation.styleSheet) {
        banner_animation.styleSheet.cssText = animation_keyframes;
        } else {
        banner_animation.appendChild(document.createTextNode(animation_keyframes));
        }
        document.head.appendChild(banner_animation);

        banner_section.querySelector(".banner_container").style.animation = `bannermove${index} ${banner_section.dataset.animation}s linear infinite`;
    })

}