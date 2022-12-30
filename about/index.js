window.onload = function () {
    let includes = document.getElementsByClassName("include")
    for (let i=includes.length-1; i>=0; i--) {
        fetch(includes[0].href)
        .then(res => res.text())
        .then(text => {
            let newelem = document.createElement("div")
            newelem.innerHTML = text
            includes[0].parentNode.replaceChild(newelem,includes[0])
        })
    }
}
