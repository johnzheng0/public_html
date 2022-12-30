function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    head.appendChild(script)
}

loadScript("../global.js")

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

window.onload = function() {
    let includes = document.getElementsByClassName("include")
    for (let i=0; i<includes.length; i++) {
            include(includes[i])
    }
}

