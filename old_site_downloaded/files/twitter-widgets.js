(function () {
  var style = document.createElement('style');
  style.textContent =
    'iframe[id^="twitter-widget-"],iframe.twitter-follow-button{' +
    'display:block!important;margin-left:auto!important;margin-right:auto!important}' +
    '.twitter-follow-button-rendered{display:block!important;margin-left:auto!important;margin-right:auto!important;text-align:center!important}' +
    '.platform-element-contents .twitter-follow-button-rendered,.platform-element-contents iframe[id^="twitter-widget-"]{' +
    'margin-left:auto!important;margin-right:auto!important}';
  document.head.appendChild(style);

  function centerTwitterWidgets() {
    document.querySelectorAll('iframe[id^="twitter-widget"]').forEach(function (ifr) {
      ifr.style.display = 'block';
      ifr.style.marginLeft = 'auto';
      ifr.style.marginRight = 'auto';
    });
    document.querySelectorAll('.twitter-follow-button-rendered').forEach(function (el) {
      el.style.display = 'block';
      el.style.marginLeft = 'auto';
      el.style.marginRight = 'auto';
      el.style.textAlign = 'center';
    });
    document.querySelectorAll('.platform-element-contents').forEach(function (box) {
      if (!box.querySelector || !box.querySelector('iframe[id^="twitter-widget"]')) {
        return;
      }
      var inner = box.querySelector('div[style*="text-align"]');
      if (inner) {
        inner.style.display = 'flex';
        inner.style.flexDirection = 'column';
        inner.style.alignItems = 'center';
        inner.style.justifyContent = 'center';
        inner.style.width = '100%';
      }
    });
  }

  function onWidgetsLoaded() {
    if (!window.twttr || !window.twttr.ready) {
      return;
    }
    window.twttr.ready(function () {
      if (window.twttr.widgets && window.twttr.widgets.load) {
        window.twttr.widgets.load();
      }
      [0, 80, 300, 800].forEach(function (ms) {
        setTimeout(centerTwitterWidgets, ms);
      });
    });
  }

  function localWidgetsUrl() {
    var scripts = document.getElementsByTagName('script');
    var i;
    for (i = 0; i < scripts.length; i++) {
      var src = scripts[i].src || '';
      if (src.indexOf('twitter-widgets.js') !== -1) {
        try {
          return new URL('../external/platform.twitter.com/widgets.js', src).href;
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  }

  function loadScript(src, onload, onerror) {
    var s = document.createElement('script');
    s.async = true;
    s.charset = 'utf-8';
    s.src = src;
    s.onload = onload;
    s.onerror = onerror;
    document.head.appendChild(s);
  }

  function init() {
    if (window.twttr && window.twttr.widgets) {
      onWidgetsLoaded();
      return;
    }
    if (document.querySelector('script[src*="platform.twitter.com/widgets.js"]')) {
      var check = setInterval(function () {
        if (window.twttr && window.twttr.widgets) {
          clearInterval(check);
          onWidgetsLoaded();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(check);
      }, 10000);
      return;
    }
    var local = localWidgetsUrl();
    if (local) {
      loadScript(
        local,
        onWidgetsLoaded,
        function () {
          loadScript('https://platform.twitter.com/widgets.js', onWidgetsLoaded);
        }
      );
    } else {
      loadScript('https://platform.twitter.com/widgets.js', onWidgetsLoaded);
    }
  }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }
})();
