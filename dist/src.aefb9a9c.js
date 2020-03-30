// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Focm":[function(require,module,exports) {
var string = "body {\n    background: #ffe600;\n}\n\n.skin {\n    position: fixed;\n    font-size: 100px;\n    width: 4.2em; \n    height: 2.35em; \n    left: 50%;\n    top: 50%;\n    transform: translateY(-50%) translateX(-50%);\n}\n\n@media(max-width: 500px) and (min-width: 400px){\n    .skin{\n      font-size: 80px;\n    }\n}\n\n@media(max-width: 400px){\n    .skin{\n        font-size: 60px;\n    }\n}\n\n.eye {\n    border: 0.1em solid black; \n    width: 0.57em; \n    height: 0.57em; \n    background: #2e2e2e;\n    border-radius: 100%; \n    position: absolute; \n    margin-left: 0.6em; \n}\n\n.eye::after {\n    width: 0.25em; \n    height: 0.25em;\n    border: 0.03em solid blue;\n    background: #fff;\n    content: \"\"; \n    display: block; \n    position: absolute; \n    border-radius: 100%; \n    margin-left: 0.07em; \n    margin-top: -0.02em;\n}\n\n.eye.right {\n    right: 0.6em;\n}\n\n.nose {\n    position: absolute; \n    margin: 0.3em calc(50% - 0.11em); \n    margin-top: 0.38em; \n    width: 0; \n    height: 0;\n    z-index: 1; \n    border-top: 0.09em solid black;\n    border-left: 0.11em solid transparent; \n    border-right: 0.11em solid transparent;\n    box-shadow: 0 -0.01em 0 black; \n}\n\n.nose::before {\n    content: \"\"; \n    display: block; \n    position: absolute; \n    width: 0.22em;\n    height: 0.05em;\n    background: black;\n    border-top-left-radius: 0.11em 0.05em;\n    border-top-right-radius: 0.11em 0.05em;\n    margin-top: -0.14em;\n    margin-left: -0.11em;\n}\n\n.nose:hover {\n    animation: nose 1.23s infinite linear; \n    cursor: pointer; \n}\n\n/* \u7ED9\u52A8\u753B\u8BBE\u7F6E\u5173\u952E\u5E27 */\n@keyframes nose {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(-15deg);\n    }\n    67% {\n        transform: rotate(15deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.mouth {\n    position: absolute; \n    width: 2.28em; \n    height: 1.8em;\n    margin-top: 0.65em;\n    margin-left: calc(50% - 1.18em); \n    overflow: hidden; \n}\n\n.mouth::after {\n    content: \"\";\n    display: block;\n    position: absolute; \n    width: 0.8em;\n    height: 0.25em;\n    background: #ffe600;\n    border: 0.03em solid black;\n    border-top: none;\n    border-left: none;\n    right: 0.25em;\n    top: -0.05em;\n    transform: rotate(25deg); \n    border-bottom-right-radius: 0.6em 0.3em; \n    box-shadow: 0 -0.1em 0 #ffe600, -0.05em -0.03em 0 #ffe600; \n}\n\n.mouth::before {\n    content: \"\";\n    display: block;\n    position: absolute; \n    width: 0.8em;\n    height: 0.25em;\n    background: #ffe600;\n    border: 0.03em solid black;\n    border-top: none;\n    border-right: none;\n    left: 0.35em;\n    top: -0.05em;\n    transform: rotate(-25deg); \n    border-bottom-left-radius: 0.6em 0.3em; \n    box-shadow: 0 -0.1em 0 #ffe600, 0.05em -0.03em 0 #ffe600; \n    z-index: 1;\n}\n\n.mouth > div {\n    position: absolute; \n    background: #ff485f;\n    width: 2.28em;\n    height: 8em;\n    border: 0.04em solid black;\n    border-bottom-left-radius: 1.18em 8em;\n    border-bottom-right-radius: 1.18em 8em;\n    margin-top: -6.37em; \n    overflow: hidden;\n}\n\n.mouth > div::after {\n    content: \"\";\n    display: block;\n    position: absolute; \n    width: 1.3em;\n    height: 1em;\n    box-shadow: 0 -0.7em 0 #9b000a;\n    bottom: 0.3em;\n    margin-left: 0.49em;\n    border-top-left-radius: 100%;\n    border-top-right-radius: 100%;\n}\n\n.cheek {\n    width: 0.82em;\n    height: 0.82em;\n    border: 0.03em solid black;\n    border-radius: 100%;\n    position: absolute;\n    margin-top: 1.1em;\n    background: #f00;\n}\n\n.cheek.right {\n    right: 0;\n}\n\n.cheek img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display:block;\n}\n\n.cheek.left img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0; \n}\n\n\n\n";
var demo1 = document.querySelector('#demo1');
var demo2 = document.querySelector('#demo2');
var player = {
  timer: undefined,
  n: 1,
  interval: 100,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n === string.length) {
      window.clearInterval(player.timer);
    }

    demo1.innerText = string.substr(0, player.n);
    demo2.innerHTML = string.substr(0, player.n);
    demo1.scrollTo(0, 3951);
  },
  play: function play() {
    player.timer = setInterval(player.run, player.interval);
  },
  pause: function pause() {
    window.clearInterval(player.timer);
  },
  slow: function slow() {
    player.pause();
    player.interval = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.interval = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.interval = 0;
    player.play();
  }
};
player.init();
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.aefb9a9c.js.map