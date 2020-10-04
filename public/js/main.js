let btn = document.querySelectorAll("button")
let body= document.querySelector("body")
let nav = document.getElementsByClassName("navbar")[0]
let header = document.querySelector("header")
let logo1 = document.getElementById("logo1")
let logo2 = document.getElementById("logo2")
let carbtns = document.getElementsByClassName("btns")
let navbar = document.getElementsByTagName("nav")
console.log(navbar);
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

// Boite connect 
let connect = document.getElementsByClassName("box")[0]
let diss1 = document.getElementsByClassName("diss1")[0]
let diss = document.getElementsByClassName("diss")[0]
diss.setAttribute("class", "diss d-none")
diss1.setAttribute("class", "diss1 d-flex flex-column")
btn[3].addEventListener("click", () => {
    if (connect.style.display == "none") {
        connect.style.display = "block"
    } else {
        connect.style.display = "none"
    }
})
btn[4].addEventListener("click", () => {
    diss1.setAttribute("class", "diss1 d-flex flex-column")
    diss.setAttribute("class", "diss d-none")
})
btn[8].addEventListener("click", () => {
    diss1.setAttribute("class", "diss1 d-none")
    diss.setAttribute("class", "diss d-flex flex-column")
})

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


window.addEventListener("scroll", () => {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        nav.setAttribute("class", "navbar navbar-expand-lg navbar-light fixed-top")
        logo1.style.display = "none"
        logo2.setAttribute("class", "d-block")
    } else {
        nav.setAttribute("class", "navbar navbar-expand-lg navbar-light")
        logo2.setAttribute("class", "d-none")
        logo1.style.display = "block" 
    }
})
console.log(btn);