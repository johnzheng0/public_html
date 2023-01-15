console.log("global.js loaded")

//scroll event
window.addEventListener("scroll", function() {
    document.body.style.backgroundPositionY = scrollY*0.2 + "px"
    if (scrollY > 10) {
        document.querySelector("#navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        // document.querySelector("#navbar").style.backdropFilter = "blur(1em)"
    } else {
        document.querySelector("#navbar").style.backgroundColor = "rgba(0, 0, 0, 0)"
        // document.querySelector("#navbar").style.backdropFilter = "blur(0)"
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

//add event handler to toggle the menu when the menu icon is pressed
function eventMenu() {
    console.log("log")
    if (document.querySelector("#menubar").style.display == "block") {
        document.querySelector("#menubar").animate(flyOut, flyDuration)
        setTimeout(function() {
            document.querySelector("#menubar").style.display = "none"
        }, flyDuration.duration*0.9)
    } else {
        document.querySelector("#menubar").style.display = "block"
        document.querySelector("#menubar").animate(flyIn, flyDuration)
    }
}

//get html file and add it to page as element
function include(element) {
    let newelem = document.createElement("div")
    fetch(element.href)
    .then(res => res.text())
    .then(text => {
        newelem.innerHTML = text
        element.parentNode.replaceChild(newelem,element)
    let index = Array.from(newelem.parentNode.children).indexOf(newelem)
    let newelemchildren = newelem.childNodes
    for (let i=0; i<newelemchildren.length; i++) {
        newelem.parentNode.insertBefore(newelemchildren[i],newelem)
    }
    newelem.parentNode.removeChild(newelem)
    })

}

//includes html where include class elements are
window.onload = function() {
    let includes = document.getElementsByClassName("include")
    for (let i=0; i<includes.length; i++) {
        include(includes[i])
    }
}