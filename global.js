console.log("global.js loaded")

//get page elements
let menubar = document.getElementById("menubar")
let menu = document.getElementsByClassName("menu")[0]
let navbar = document.getElementById("navbar")

//scroll event
window.addEventListener("scroll", function() {
    document.body.style.backgroundPositionY = scrollY*0.5 + "px"
    if (scrollY > 10) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        navbar.style.backdropFilter = "blur(1em)"
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)"
        navbar.style.backdropFilter = "blur(0)"
    }
})

//define animation parameters
let flyIn = [
    { transform: "translateY(-100%)" },
    { transform: "translateY(0%)" }
]
let flyOut = [
    { transform: "translateY(0%)" },
    { transform: "translateY(-100%)" }
]
let flyDuration = {
    duration: 400,
    easing: "cubic-bezier(1, 0.1, 0.1, 1)",
    iteration: 1
}

//add event handler to toggle the menubar when the menu icon is pressed
function eventMenu() {
    if (menubar.style.display == "none") {
        menubar.style.display = "block"
        menubar.animate(flyIn, flyDuration)
    } else {
        menubar.animate(flyOut, flyDuration)
        setTimeout(function() {
            menubar.style.display = "none"
        }, flyDuration.duration*0.9)
    }
}