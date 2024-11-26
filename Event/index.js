//Event propogation, event bubbling, event delegation, e.target vs e.currentTarget

const div1 = document.querySelector("#div1")
const form1 = document.querySelector("#form1")
const button1 = document.querySelector("#button1")

div1.addEventListener("click", () => {
    alert("Div")
})

button1.addEventListener("click", () => {
    alert("button")
})

form1.addEventListener("click", () => {
    alert("form")
})


const div2 = document.querySelector("#div2")
const form2 = document.querySelector("#form2")
const button2 = document.querySelector("#button2")

div2.addEventListener("click", () => {
    alert("Div 2")
})

button2.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("button 2")
})

form2.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("form 2")
})
const div3 = document.querySelector("#div3")
const form3 = document.querySelector("#form3")
const button3 = document.querySelector("#button3")

div3.addEventListener("click", () => {
    alert("Div 3")
}, {capture : true})

button3.addEventListener("click", (e) => {
    alert("button 3")
}, {capture : true})

form3.addEventListener("click", (e) => {
    alert("form 3")
},  {capture : true})

