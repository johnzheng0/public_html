window.onload = function () {
    let includes = document.getElementsByClassName("include")
    while (includes.length > 0) {
        fetch(includes[i].href)
        .then(res => res.text())
        .then(text => {
            newelem.innerHTML = text;
            includes[0].parentNode.replaceChild(newelem,includes[0]);
        })
    }
}
