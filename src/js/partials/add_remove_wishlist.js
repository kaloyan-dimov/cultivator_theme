import update_wishlist from "../api/update_wishlist"

export default () => {
    // update_wishlist("none")
    // console.log("return val", update_wishlist("none"))
    document.querySelectorAll(".add_to_wishlist").forEach(item => {
        item.addEventListener("click", () => {
            console.log(item.dataset.handle)
            update_wishlist(item.dataset.handle, "add")
        })
    })
    document.querySelectorAll(".remove_from_wishlist").forEach(item => {
        item.addEventListener("click", () => {
            console.log(item.dataset.handle)
            update_wishlist(item.dataset.handle, "remove")
        })
    })
}