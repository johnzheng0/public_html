function include(element) {
    console.log(element)
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
    console.log(includes)
    for (let i=0; i<includes.length; i++) {
            include(includes[i])
    }
}

