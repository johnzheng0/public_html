function loadScript(url)
{    
    let head = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    head.appendChild(script)
}

loadScript("global.js")
loadScript("modules/imageCarousel.js")
loadScript("modules/quoteViewer.js")