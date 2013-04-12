// https://developer.mozilla.org/de/docs/DOM/window.requestAnimationFrame
(function() {

    'use strict';

    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
})();