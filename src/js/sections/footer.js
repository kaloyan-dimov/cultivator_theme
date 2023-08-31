export default () => {
    if(window.innerWidth < 768){
        const footer_nav_entry = document.querySelectorAll(".footer_nav_entry")
        footer_nav_entry.forEach(item => {
            item.querySelector(".footer_entry_title").addEventListener("click", () => {
                item.classList.contains("active") ?
                (item.querySelectorAll("ul li").forEach((subsubitem) => {
                    subsubitem.style.transitionDelay = `0s`;
                })):
                (item.querySelectorAll("ul li").forEach((subsubitem, index) => {
                    subsubitem.style.transitionDelay = `${index * 0.15}s`;
                }));
                item.classList.toggle("active")
            })
        })
    }
}