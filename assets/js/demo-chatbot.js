window.addEventListener("load", (event) => {
    var script = document.createElement('script');
    var minimizedIconWidthAndHeight = 50;
    script.type = 'text/javascript';
    script.src = 'https://juji.ai/assets/js/cookielessParent.js';
    document.head.appendChild(script);
    script.onload = function(){
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            if (js.readyState) {
                js.onreadystatechange = function () {
                    if (js.readyState == 'loaded' || js.readyState == 'complete') {
                        js.onreadystatechange = null;
                        updateIframe('https://juji.ai', null, '');
                        setMinimizedIconSize(minimizedIconWidthAndHeight);
                    }
                }
            } else {
                js.onload = function () {
                    updateIframe('https://juji.ai', null, '');
                    setMinimizedIconSize(minimizedIconWidthAndHeight);
                }
            }
            js.src = 'https://juji.ai/assets/js/webplugin-2.0.0.js';
       fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'juji-webplugin'));
    }});
