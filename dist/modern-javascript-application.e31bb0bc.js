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
})({"getCityTempToday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCityName;
exports.getCityName2 = getCityName2;

// Function that clicks Button2
function getCityName() {
  var weatherToday1 = "https://api.openweathermap.org/data/2.5/weather?q=";
  var weatherToday2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";
  var city = document.getElementById("cityName1").value; // Here we construct the weblink with the proper name

  var url = weatherToday1 + city + weatherToday2; // this is new, so I dont know what I am doing

  console.log(fetch(url));
  fetch(url).then(function (response) {
    if (response.ok) {
      console.log("Success getting the Temperature Today of City1");
    } else {
      console.log("Error getting the Temeprature Today of City1");
    }

    return response.json();
  }).then(function (data) {
    // Work with JSON data here
    var weatherTodayCity1 = data.main.temp + "°C";
    document.getElementById("output1").innerHTML = weatherTodayCity1;
  }).catch(function (err) {
    // Do something for an error here
    console.log("Error getting and working with the Temp for Today of City1");
  });
}

;

function getCityName2() {
  var city2 = document.getElementById("cityName2").value; // Here we construct the weblink with the proper name

  var url2 = weatherToday1 + city2 + weatherToday2; // this is new, so I dont know what I am doing

  console.log(fetch(url2));
  fetch(url2).then(function (res) {
    if (res.ok) {
      console.log("Success getting the Temp of Today for City2");
    } else {
      console.log("Error getting the Temp of Today for City2");
    }

    return res.json();
  }).then(function (data2) {
    // Work with JSON data here
    var WeatherTodayCity2 = data2.main.temp + "°C";
    document.getElementById("output2").innerHTML = WeatherTodayCity2;
  }).catch(function (err) {
    // Do something for an error here
    console.log("Error getting and working with the Temperature for Today for City2");
  });
}

;
},{}],"getFutureTemp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFutureTemp;
var weatherFuture1 = "https://api.openweathermap.org/data/2.5/forecast?q=";
var weatherFuture2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

function getFutureTemp() {
  var city1 = document.getElementById("cityName1").value; // Here we construct the weblink with the proper name

  var url1 = weatherFuture1 + city1 + weatherFuture2; // this is new, so I dont know what I am doing

  console.log(fetch(url1));
  fetch(url1).then(function (response) {
    if (response.ok) {
      console.log("Success getting the Future Temperature for City 1");
    } else {
      console.log("Error getting the Future Temperature of City1");
    }

    return response.json();
  }).then(function (data1) {
    // Work with JSON data here
    workWithData(data1);
  }).catch(function (err) {
    // Do something for an error here
    console.log("Error getting the Future Temperature of City1");
  }, 5000); // the 3000 is the amounts of miliseconds to wait until the data is here, in this case 3 seconds
}

;

function workWithData(data1) {
  console.log("Now processing data1");
  document.getElementById("output11").innerHTML += "The weather for " + data1.city.name + ", " + data1.city.country + " is as follows:";
  document.getElementById("output11").innerHTML += "<br>";
  document.getElementById("output11").innerHTML += data1.list[0].dt_txt + ": " + data1.list[0].main.temp + "°C";
  document.getElementById("output11").innerHTML += "<br>";
  document.getElementById("output11").innerHTML += data1.list[8].dt_txt + ": " + data1.list[8].main.temp + "°C";
  document.getElementById("output11").innerHTML += "<br>";
  document.getElementById("output11").innerHTML += data1.list[16].dt_txt + ": " + data1.list[16].main.temp + "°C";
  document.getElementById("output11").innerHTML += "<br>";
  document.getElementById("output11").innerHTML += data1.list[24].dt_txt + ": " + data1.list[24].main.temp + "°C";
  document.getElementById("output11").innerHTML += "<br>";
  document.getElementById("output11").innerHTML += data1.list[32].dt_txt + ": " + data1.list[32].main.temp + "°C";
  document.getElementById("output11").innerHTML += "<br>";
  document.getElementById("output11").innerHTML += data1.list[40].dt_txt + ": " + data1.list[40].main.temp + "°C";
}

;
},{}],"getFutureTemp2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFutureTemp2;
var weatherFuture1 = "https://api.openweathermap.org/data/2.5/forecast?q=";
var weatherFuture2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

function getFutureTemp2() {
  var city3 = document.getElementById("cityName2").value; // Here we construct the weblink with the proper name

  var url4 = weatherFuture1 + city3 + weatherFuture2;
  console.log(url4); // this is new, so I dont know what I am doing

  console.log(fetch(url4));
  fetch(url4).then(function (response) {
    if (response.ok) {
      console.log("Success getting the Future Temp of City2");
    } else {
      console.log("Error Getting the Future Temp of City2");
    }

    return response.json();
  }).then(function (data3) {
    // Work with JSON data here
    workWithData2(data3);
  }).catch(function (err) {
    // Do something for an error here
    console.log("Error getting and working with the Future Temp for City2");
  }, 3000); // the 3000 is the amounts of miliseconds to wait until the data is here, in this case 3 seconds
}

;

function workWithData2(data3) {
  console.log("Now processing data3");
  document.getElementById("output22").innerHTML += "The weather for " + data3.city.name + ", " + data3.city.country + " is as follows:";
  document.getElementById("output22").innerHTML += "<br>";
  document.getElementById("output22").innerHTML += data3.list[0].dt_txt + ": " + data3.list[0].main.temp + "°C";
  document.getElementById("output22").innerHTML += "<br>";
  document.getElementById("output22").innerHTML += data3.list[8].dt_txt + ": " + data3.list[8].main.temp + "°C";
  document.getElementById("output22").innerHTML += "<br>";
  document.getElementById("output22").innerHTML += data3.list[16].dt_txt + ": " + data3.list[16].main.temp + "°C";
  document.getElementById("output22").innerHTML += "<br>";
  document.getElementById("output22").innerHTML += data3.list[24].dt_txt + ": " + data3.list[24].main.temp + "°C";
  document.getElementById("output22").innerHTML += "<br>";
  document.getElementById("output22").innerHTML += data3.list[32].dt_txt + ": " + data3.list[32].main.temp + "°C";
  document.getElementById("output22").innerHTML += "<br>";
  document.getElementById("output22").innerHTML += data3.list[40].dt_txt + ": " + data3.list[40].main.temp + "°C";
}

;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _getCityTempToday = _interopRequireDefault(require("/getCityTempToday.js"));

var _getFutureTemp = _interopRequireDefault(require("/getFutureTemp.js"));

var _getFutureTemp2 = _interopRequireDefault(require("/getFutureTemp2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
Information on getting the API to work

1- This is my API, must be a const
    50b9caeb9f022d5e06aded241bfda347
2- This is the link to get the information of the last 5 days in Metric (celsius)
    api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid={your api key}
*/
// Now to break the weblink to add the city name
var weatherToday1 = "https://api.openweathermap.org/data/2.5/weather?q=";
var weatherToday2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347"; // now to break up the weblink to add the city name I THNK I AWS SUPPOSE TO USE THIS ONE ALL THE TIME

var weatherFuture1 = "https://api.openweathermap.org/data/2.5/forecast?q=";
var weatherFuture2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347"; // Everything below is for Button1
// Function for Button1

document.getElementById("button1").addEventListener("click", runTwoFunctions1); // Function that gets the Temperature of Today for City 1 and Displays it

// Function to work with the table data1 for Future Temp of City 1
// Function to run two functions at the press of Button1
function runTwoFunctions1() {
  (0, _getCityTempToday.default)();
  (0, _getFutureTemp.default)();
}

; // Function that clicks Button 1

var input = document.getElementById("cityName1");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button1").click();
  }
}); // Everything below is for Button2
// Function for the Button2

document.getElementById("button2").addEventListener("click", runTwoFunctions2); // Function that gets the Temperature of Today for City 1 and Displays it

// Function to work with the table data3 for Future Temp of City 2
// Function to run two functions at the press of Button2
function runTwoFunctions2() {
  (0, _getCityTempToday.default)();
  (0, _getFutureTemp2.default)();
}

; // Function that clicks Button2

var input2 = document.getElementById("cityName2");
input2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button2").click();
  }
});
},{"/getCityTempToday.js":"getCityTempToday.js","/getFutureTemp.js":"getFutureTemp.js","/getFutureTemp2.js":"getFutureTemp2.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64703" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/modern-javascript-application.e31bb0bc.js.map