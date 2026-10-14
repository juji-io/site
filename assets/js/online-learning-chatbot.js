(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        if (js.readyState) {
            js.onreadystatechange = function () {
                if (js.readyState == 'loaded' || js.readyState == 'complete') {
                    js.onreadystatechange = null;
                    updateIframe();
                }
            }
        } else {
            js.onload = function () {
                updateIframe();
            }
        }
        js.src = 'https://juji.ai/assets/js/webplugin-popup-2.0.0.js';
       fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'juji-webplugin'));
