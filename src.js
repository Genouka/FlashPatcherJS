// ==UserScript==
// @name         Flash播放补丁
// @namespace    https://genouka.top
// @author       Genouka
// @version      0.1
// @run-at       document-start
// @match        *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// ==/UserScript==

(function(){

var loadJS=function(url, callback) {
  var script = document.createElement('script'),
    fn = callback || function() {};
  script.type = 'text/javascript';
  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        fn();
      }
    };
  } else {
    script.onload = function() {
      fn();
    };
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

loadJS("//unpkg.zhimg.com/@ruffle-rs/ruffle", function() {
  
});

})();
