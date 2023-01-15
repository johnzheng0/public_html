<!DOCTYPE php>
<html>
    <head> 
        <link href="/favicon.io"
        rel="icon"
        type="image/x-icon">
        <link href="/global.css" 
        rel="stylesheet" 
        type="text/css"/>
        <link href="/error/style.css" 
        rel="stylesheet" 
        type="text/css"/>
        <script type="text/javascript" src="/error/script.js"></script>
    </head>

    <body>
        <link class="include" href="/navbar.html"/>
        <div id="error">
            <div class="errorMessage">
                <label>
                    <?php echo $_SERVER['REDIRECT_STATUS'] ?>
                </label>
                <img src="/error/thinker.png">
            </div>
        </div>
        <link class="include" href="/footer.html"/>
    </body>
</html>