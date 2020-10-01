let btn = document.querySelectorAll("button")
let body= document.querySelector("body")
let nav = document.querySelector("nav")

// bouton light mode
btn[1].addEventListener("click", () => {
    body.style.backgroundColor = "white"
    nav.style.backgroundColor = "white"
})

// bouton dark mode
btn[2].addEventListener("click", () => {
    body.style.backgroundColor = "black"
    nav.style.backgroundColor = "black"
})