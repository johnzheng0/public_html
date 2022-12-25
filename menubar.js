//get page elements
let menubar = document.getElementById("menubar")
let menu = document.getElementsByClassName("menu")[0]

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
menu.addEventListener("mousedown", function() {
    if (menubar.style.display == "none") {
        menubar.style.display = "block"
        menubar.animate(flyIn, flyDuration)
    } else {
        menubar.animate(flyOut, flyDuration)
        setTimeout(function() {
            menubar.style.display = "none"
        }, flyDuration.duration*0.9)
    }
})