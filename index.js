//static constants
const directory = "assets/slideshow/"

//get objects
let imageMain = document.getElementById("imageMain")
let imageMainFader = document.getElementById("imageMainFader")
let viewMain = document.getElementById("viewMain")
let viewMinor = document.getElementById("viewMinor")

//define index bounds and ensure correct on startup
let imageIndex = 1
let imageTotal = 6

//initialize selection view
viewMinor.style.gridTemplateColumns = "repeat("+imageTotal+", 1fr)"

//animations information
let fadeOut = [
    { opacity: "1"},
    { opacity: "0"},
    { opacity: "0"}
]
let fadeDuration = {
    duration: 600,
    iteration: 1
}

//use animations to change out the main image
function changeImage(source) {
    imageMainFader.setAttribute("src", source)
    imageMain.animate(fadeOut, fadeDuration)
    setTimeout(function() {
        imageMain.setAttribute("src", source)
    },fadeDuration.duration*0.9)
}

//generate and give event handlers to each tab of the view select
for (let i=imageIndex; i<=imageTotal; i++) {
    //create img element and append it under the main view image
    let imageMinor = document.createElement("img")
    imageMinor.setAttribute("src", directory+i+".jpg")
    viewMinor.appendChild(imageMinor)

    //assign event actions to subview images
    imageMinor.addEventListener("mouseover", function() {
    changeImage(imageMinor.src)
    })
    imageMinor.addEventListener("mousedown", function() {
    if (event.button == 0) {
        changeImage(imageMinor.src)
    }
    })

    //ensure ends are rounded
    if (i==1) {imageMinor.style.borderRadius="32px 0px 0px 32px"}
    else if (i==imageTotal) {imageMinor.style.borderRadius="0px 32px 32px 0px"}
}

let menubar = document.getElementById("menubar")
let menu = document.getElementsByClassName("menu")[0]

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