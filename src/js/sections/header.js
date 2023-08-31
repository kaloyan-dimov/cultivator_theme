export default () => {
    const hamburger = document.querySelector(".hamburger")
    const mobile_header_items = document.querySelector(".mobile_header_items")
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobile_header_items.classList.toggle("active");
        document.querySelector("body").classList.toggle("no-scroll");
    })
    document.querySelector(".mobile_header_background_filler").addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobile_header_items.classList.remove("active");
        document.querySelector("body").classList.remove("no-scroll");
    })

    if(window.innerWidth <= 1024){
        const header_nav_entry = document.querySelectorAll(".header_nav_entry")
        header_nav_entry.forEach(item => {
            item.querySelector(".header_title").addEventListener("click", () => {
                item.classList.contains("active") ?
                (item.querySelectorAll("ul li").forEach((subsubitem) => {
                    subsubitem.style.transitionDelay = "0s";
                })):
                (item.querySelectorAll("ul li").forEach((subsubitem, index) => {
                    subsubitem.style.transitionDelay = `${index * 0.15}s`;
                }));
                item.classList.toggle("active")
            })
        })
    }
}