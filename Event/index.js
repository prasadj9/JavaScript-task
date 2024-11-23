//Event propogation, event bubbling, event delegation, e.target vs e.currentTarget

const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")

div.addEventListener("click", () => {
    alert("Div")
})

button.addEventListener("click", () => {
    alert("button")
})

form.addEventListener("click", () => {
    alert("form")
}, {capture : true})