let btn = document.querySelectorAll("button")
let body= document.querySelector("body")
let nav = document.getElementsByClassName("navbar")[0]
let header = document.querySelector("header")
let logo1 = document.getElementById("logo1")
let logo2 = document.getElementById("logo2")
let carbtns = document.getElementsByClassName("btns")
// let scrollTop = document.scrollTop()
// bouton light mode
btn[1].addEventListener("click", () => {
    body.style.backgroundColor = "white"
    nav.style.backgroundColor = "white"
    carbtns[0].style.backgroundColor = "white"
    carbtns[0].style.border= "2px solid black"
    carbtns[1].style.backgroundColor = "white"
    carbtns[1].style.border= "2px solid black"
    carbtns[2].style.backgroundColor = "white"
    carbtns[2].style.border= "2px solid black"
    carbtns[3].style.backgroundColor = "white"
    carbtns[3].style.border= "2px solid black"
})

// bouton dark mode
btn[2].addEventListener("click", () => {
    nav.style.backgroundColor = "black"
    body.style.backgroundColor = "black"
    carbtns[0].style.backgroundColor = "black"
    carbtns[0].style.border= "2px solid white"
    carbtns[1].style.backgroundColor = "black"
    carbtns[1].style.border= "2px solid white"
    carbtns[2].style.backgroundColor = "black"
    carbtns[2].style.border= "2px solid white"
    carbtns[3].style.backgroundColor = "black"
    carbtns[3].style.border= "2px solid white"
})

// const getScrollTop = () => {
//       var b = document.body; //IE 'quirks'
//       var d = document.documentElement; //IE with doctype
//       d = (d.clientHeight)? d : b;
//       return d.scrollTop;
// }

// body.addEventListener("scroll", () => {
//     if (d.scrollTop() >= 400) {
//         header.style.position = "fixed"
//         logo1.style.display = "none"
//         logo1.style.display = "block"
//     }   else {        
//         logo1.style.display = "none"
//         logo1.style.display = "block"
//     }
// })

let carImgs = document.getElementsByClassName("carousel_pics")
carImgs[0].style.opacity = "1"
carImgs[1].style.opacity = "1"
carImgs[2].style.opacity = "1"
carImgs[3].style.opacity = "1"
carImgs[4].style.opacity = "1"
carImgs[5].style.opacity = "1"
carbtns[0].addEventListener("click", () => {
    setTimeout(() => {
        carImgs[0].style.opacity = "0"
        carImgs[4].style.opacity = "1"
        // carImgs[0].style.display = "block"
        // carImgs[4].style.display = "none"
    }, 100);
})
carbtns[1].addEventListener("click", () => {
    setInterval(() => {
        carImgs[0].style.opacity -= 0.4
        // carImgs[5].style.opacity += 0.2  
    }, 100)
    setTimeout(() => {
        carImgs[5].style.display = "block"
        carImgs[0].style.display = "none"
    }, 800);
})
// carbtns[2].addEventListener("click", () => {
    setInterval(() => {
        carImgs[0].style.opacity -= 0.4
    // carImgs[5].style.opacity += 0.2  
    }, 100)
    setTimeout(() => {
        carImgs[5].style.display = "block"
        carImgs[0].style.display = "none"
    }, 800);
// } )
// carbtns[3].addEventListener("click", () => {
//     carImgs[2].style.display = "none"
//     carImgs[6].style.display = "block"
// })
