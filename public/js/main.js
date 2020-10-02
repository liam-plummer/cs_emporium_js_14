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

console.log(btn);
// Carousel
// let carImage = document.querySelectorAll(".carousel_pic")
// let carousel = document.getElementById("images")
// btn[9].addEventListener("click", () => {
//     carImage[0].style.opacity = "0"
//     carImage[0].style.transition = "opacity 1s"

//     setTimeout(() => {
//         carImage[0].remove()
//         carImage[1].style.opacity = "1"
//         carImage[1].style.transition = "opacity 1s"
//     }, 1000);
// })