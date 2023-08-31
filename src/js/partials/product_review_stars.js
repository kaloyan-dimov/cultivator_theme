export default () => {
    const review_only_stars = document.querySelector(".review_only_stars")
    review_only_stars.querySelector(".spr-summary-actions-togglereviews").innerHTML = `(${review_only_stars.querySelector(".spr-summary-actions-togglereviews").innerHTML.match(/\d+/g)})`
}