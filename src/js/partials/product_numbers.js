export default () => {
    const number = document.querySelector('#quantity')
    const plus = document.querySelector('#input_plus')
    const minus = document.querySelector('#input_minus')

    plus.addEventListener("click", () => {
        number.value = Number(number.value) + 1 
    })
    minus.addEventListener("click", () => {
        Number(number.value > 1) ? number.value = Number(number.value) - 1 : ''; 
    })
}