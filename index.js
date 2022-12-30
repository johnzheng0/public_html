function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    head.appendChild(script)
}


window.addEventListener("scroll", function() {
    document.body.style.backgroundPositionY = scrollY*0.6 + "px"
    if (scrollY > 10) {
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        document.getElementById("navbar").style.backdropFilter = "blur(1em)"
    } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)"
        document.getElementById("navbar").style.backdropFilter = "blur(0)"
    }
})

loadScript("imageCarousel.js")
loadScript("menubar.js")