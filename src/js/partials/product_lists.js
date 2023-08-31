export default () => {
    // const product_main_list = document.querySelector(".product_main_list")

    document.querySelectorAll(".list_item").forEach(item => {
        console.log(item)
        item.querySelector(".list_title").addEventListener("click", () => {
            item.classList.toggle("active")
        })
    })
}