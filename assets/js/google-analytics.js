window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-113933244-1', {
        'linker': {'domains': ['juji.ai', 'forum.juji.io', 'docs.juji.io', 'juji.io']}
      });

document.addEventListener("click", function (event) {
  var link = event.target.closest && event.target.closest("a[data-track-outgoing]");
  if (link && typeof window.trackOutgoingAndRedirect === "function") {
    event.preventDefault();
    window.trackOutgoingAndRedirect(link);
  }
});
