export default () => {
    const search_buttons = document.querySelectorAll(".search_icon")
    search_buttons.forEach(search_button => {
        search_button.addEventListener("click", () => {
            console.log("clicked on search button")
            document.querySelector(".search_container").style.display = "block";
            document.querySelector("body").classList.add("no-scroll")
        })
    })
    const search_close = document.querySelector(".search_close")
    search_close.addEventListener("click", () => {
        document.querySelector(".search_container").style.display = "none";
        document.querySelector("body").classList.remove("no-scroll")
    })
}