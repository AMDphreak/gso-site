(function () {
  function init() {
    if (window.twttr && window.twttr.widgets) {
      twttr.ready(function () {
        twttr.widgets.load();
      });
      return;
    }
    if (document.querySelector('script[src*="platform.twitter.com/widgets.js"]')) {
      var check = setInterval(function () {
        if (window.twttr && window.twttr.widgets) {
          clearInterval(check);
          twttr.ready(function () {
            twttr.widgets.load();
          });
        }
      }, 50);
      setTimeout(function () {
        clearInterval(check);
      }, 10000);
      return;
    }
    var s = document.createElement('script');
    s.async = true;
    s.charset = 'utf-8';
    s.src = 'https://platform.twitter.com/widgets.js';
    s.onload = function () {
      if (window.twttr && window.twttr.ready) {
        twttr.ready(function () {
          twttr.widgets.load();
        });
      }
    };
    document.head.appendChild(s);
  }
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }
})();
