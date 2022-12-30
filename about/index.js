window.onload = function () {
    let includes = document.getElementsByClassName("include")
    while (includes.length > 0) {
        fetch(includes[0].href)
        .then(res => res.text())
        .then(text => {
            let newelem = document.createElement("div")
            newelem.innerHTML = text
            includes[0].parentNode.replaceChild(newelem,includes[0])
        })
    }
}
