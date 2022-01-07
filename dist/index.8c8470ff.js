// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"a0GSk":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "3e7eb63b8c8470ff";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9qWE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexModernJs = require("../dist/index.modern.js");
var _indexModernJsDefault = parcelHelpers.interopDefault(_indexModernJs);
console.log(_indexModernJs.isEmail("naxgmail.com"));
const form = document.querySelector('#form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fullnameEle = document.querySelector('input[name=fullname]');
    const emailEle = document.querySelector('input[name=email]');
    const passwordEle = document.querySelector('input[type=password]');
    const data = {
        fullname: fullnameEle.value,
        email: emailEle.value,
        password: passwordEle.value
    };
    const validator = _indexModernJsDefault.default(data, {
        fullname: {
            required: true,
            min: 4,
            max: 30,
            capitalize: true,
            notAllowedSpecialChars: true
        },
        email: {
            required: true,
            email: true,
            max: 100
        },
        password: {
            required: true,
            strongPassword: true
        }
    });
    const isValid = validator.validate();
    if (!isValid) {
        const errors = validator.getError();
        for(let name in errors){
            const field = document.querySelector(`input[name=${name}]`);
            if (field) {
                // set the error message
                field.nextElementSibling.innerHTML = validator.getError(name);
                // remove Error
                field.onfocus = function() {
                    validator.removeError(name);
                    field.nextElementSibling.innerHTML = '';
                };
            }
        }
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../dist/index.modern.js":"d140S"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d140S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validex", ()=>$42ade68e3adfd77f$export$dc9851424e3aa5dc
);
parcelHelpers.export(exports, "default", ()=>$42ade68e3adfd77f$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isType", ()=>$d40fe8818bab80b4$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isEmail", ()=>$ee722d5ad13edb67$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isEqual", ()=>$cc8c5c9fff9c7024$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isUrl", ()=>$f31b7bb333f8d972$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isHex", ()=>$f3f10de667a8d2b4$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isUpperCase", ()=>$b0e0b22213017a83$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isLowerCase", ()=>$608c0957fecf1924$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isCapitalize", ()=>$c17f96aedde2e5a1$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "minWords", ()=>$a76502ee8434104a$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "maxWords", ()=>$0449e90f88935030$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "minNumberRange", ()=>$7ed7f9ab5b38a73b$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "maxNumberRange", ()=>$609c50c64edd6954$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "notAllowedChars", ()=>$eb15f4cff8b8db8f$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "notAllowedCharacters", ()=>$286056663798c8e7$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "notAllowedSpecialChars", ()=>$a6435590f44aece4$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "notAllowedWords", ()=>$949243f55673e15b$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "notAllowedNumber", ()=>$106513c6fd810d78$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "regex", ()=>$b6e370eb4a1932cf$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "strongPassword", ()=>$c660be645a3c808f$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "mediumPassword", ()=>$95e92dd66272db82$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "oneOf", ()=>$0a25c3f360e017a5$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "oneOfType", ()=>$66d504b5e527ded3$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "exact", ()=>$5fe96ccd9f239608$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "shape", ()=>$ad003b1d8f2f30cb$export$2e2bcd8739ae039
);
parcelHelpers.export(exports, "isFunction", ()=>$fb9ab145a8ccf669$export$f6e2535fb5126e54
);
parcelHelpers.export(exports, "isArray", ()=>$fb9ab145a8ccf669$export$43bee75e5e14138e
);
parcelHelpers.export(exports, "isObject", ()=>$fb9ab145a8ccf669$export$a6cdc56e425d0d0a
);
parcelHelpers.export(exports, "isString", ()=>$fb9ab145a8ccf669$export$844ec244b1367d54
);
parcelHelpers.export(exports, "isNumber", ()=>$fb9ab145a8ccf669$export$7e4aa119212bc614
);
parcelHelpers.export(exports, "isInteger", ()=>$fb9ab145a8ccf669$export$a287f47fed4544b8
);
parcelHelpers.export(exports, "isBool", ()=>$fb9ab145a8ccf669$export$28ac561dc09c20ca
);
parcelHelpers.export(exports, "isEmpty", ()=>$fb9ab145a8ccf669$export$dd1bc94b04021eeb
);
parcelHelpers.export(exports, "parseType", ()=>$fb9ab145a8ccf669$export$28b8f402ccc88182
);
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $fb9ab145a8ccf669$exports = {
};
$parcel$export($fb9ab145a8ccf669$exports, "isFunction", ()=>$fb9ab145a8ccf669$export$f6e2535fb5126e54
);
$parcel$export($fb9ab145a8ccf669$exports, "isArray", ()=>$fb9ab145a8ccf669$export$43bee75e5e14138e
);
$parcel$export($fb9ab145a8ccf669$exports, "isObject", ()=>$fb9ab145a8ccf669$export$a6cdc56e425d0d0a
);
$parcel$export($fb9ab145a8ccf669$exports, "isString", ()=>$fb9ab145a8ccf669$export$844ec244b1367d54
);
$parcel$export($fb9ab145a8ccf669$exports, "isNumber", ()=>$fb9ab145a8ccf669$export$7e4aa119212bc614
);
$parcel$export($fb9ab145a8ccf669$exports, "isInteger", ()=>$fb9ab145a8ccf669$export$a287f47fed4544b8
);
$parcel$export($fb9ab145a8ccf669$exports, "isBool", ()=>$fb9ab145a8ccf669$export$28ac561dc09c20ca
);
$parcel$export($fb9ab145a8ccf669$exports, "isEmpty", ()=>$fb9ab145a8ccf669$export$dd1bc94b04021eeb
);
$parcel$export($fb9ab145a8ccf669$exports, "parseType", ()=>$fb9ab145a8ccf669$export$28b8f402ccc88182
);
const $fb9ab145a8ccf669$export$f6e2535fb5126e54 = (val)=>typeof val === 'function' ? true : false
;
const $fb9ab145a8ccf669$export$43bee75e5e14138e = (val)=>typeof val === 'object' && Array.isArray(val) ? true : false
;
const $fb9ab145a8ccf669$export$a6cdc56e425d0d0a = (val)=>typeof val === 'object' && val !== null && !Array.isArray(val) ? true : false
;
const $fb9ab145a8ccf669$export$844ec244b1367d54 = (val)=>typeof val === 'string' ? true : false
;
const $fb9ab145a8ccf669$export$7e4aa119212bc614 = (val)=>!isNaN(val) ? true : false
;
const $fb9ab145a8ccf669$export$a287f47fed4544b8 = (val)=>typeof val === 'number' ? true : false
;
const $fb9ab145a8ccf669$export$28ac561dc09c20ca = (val)=>typeof val === 'boolean' ? true : false
;
const $fb9ab145a8ccf669$export$dd1bc94b04021eeb = (val)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(val) || $fb9ab145a8ccf669$export$43bee75e5e14138e(val)) return !val.length;
    else if ($fb9ab145a8ccf669$export$a6cdc56e425d0d0a(val)) return !Object.keys(val).length;
    else if (!val) return true;
};
const $fb9ab145a8ccf669$export$28b8f402ccc88182 = (compare)=>{
    let error = null;
    let compareVal = compare;
    if ($fb9ab145a8ccf669$export$43bee75e5e14138e(compare) && compare.length === 2 && compare[1] instanceof Error) {
        compareVal = compare[0];
        error = compare[1];
    }
    return {
        error: error,
        compareVal: compareVal
    };
};
var $96a9202ad74d1574$export$2e2bcd8739ae039 = (TYPES, data, schema)=>{
    const root = {
        data: $fb9ab145a8ccf669$export$a6cdc56e425d0d0a(data) ? data : {
        },
        schema: $fb9ab145a8ccf669$export$a6cdc56e425d0d0a(schema) ? schema : {
        },
        errors: {
        },
        callback: null,
        set: (name, value, _schema)=>{
            root.data[name] = value;
            root.schema[name] = _schema;
        },
        hasError: (name)=>{
            if (name === undefined) return Object.keys(root.errors).length ? true : false;
            if (root.errors[name]) return true;
        },
        getError: (name)=>{
            if (!name) return root.errors;
            return root.errors[name];
        },
        removeError: (name)=>{
            if (root.errors[name]) {
                delete root.errors[name];
                if ($fb9ab145a8ccf669$export$f6e2535fb5126e54(root.callback)) root.callback('removeError', root);
            }
        }
    };
    root.validate = ()=>{
        // comparing
        for(let fieldName in root.data)if (root.schema[fieldName]) {
            let value = root.data[fieldName];
            const schem = root.schema[fieldName];
            if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) value = value.trim();
            if (!$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(schem)) {
                console.error(`You passed wrong format in the schema for this ${fieldName}`);
                break;
            }
            for(let type in schem){
                // avoid some fields
                if (type == 'nameAlias') continue;
                if (TYPES.hasOwnProperty(type)) {
                    if (root.hasError(fieldName)) break;
                    const nameAlias = schem['nameAlias'] || fieldName;
                    let { error: error , compareVal: compareVal  } = $fb9ab145a8ccf669$export$28b8f402ccc88182(schem[type]);
                    const isError = TYPES[type](value, compareVal, {
                        root: root,
                        fieldName: fieldName,
                        type: type,
                        nameAlias: nameAlias,
                        prop: schem[type]
                    });
                    if (isError instanceof Error) {
                        let message = '';
                        if (!(error instanceof Error)) message = isError.message;
                        else message = error.message;
                        message = message.replace(/\$field/g, nameAlias);
                        message = message.replace(/\$compare/g, schem[type]);
                        root.errors[fieldName] = message;
                    }
                } else console.error(`Invalide type ${type}`);
            }
        }
        if ($fb9ab145a8ccf669$export$f6e2535fb5126e54(root.callback)) root.callback('validate', root);
        return !root.hasError();
    };
    return root;
};
var $f87c7917a49f6d4f$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.length >= compare)) return new Error('$field minimum length of $compare');
            else return true;
        }
    }
};
var $a003b563670259c3$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.length <= compare)) return new Error('$field maximum length of $compare');
            else return true;
        }
    }
};
const $d40fe8818bab80b4$var$types = {
    bool: (val)=>typeof val === 'boolean'
    ,
    number: (val)=>!isNaN(val)
    ,
    string: (val)=>$fb9ab145a8ccf669$export$844ec244b1367d54(val)
    ,
    array: (val)=>$fb9ab145a8ccf669$export$43bee75e5e14138e(val)
    ,
    object: (val)=>$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(val)
};
var $d40fe8818bab80b4$export$2e2bcd8739ae039 = (value, compare)=>{
    if (value) {
        if (!$d40fe8818bab80b4$var$types.hasOwnProperty(compare)) {
            message = `Invalide type given`;
            console.error(message, `Available Types are ${Object.keys($d40fe8818bab80b4$var$types).join(', ')}`);
            return new Error(message);
        }
        if (!$d40fe8818bab80b4$var$types[compare](value)) return new Error('$field must be $compare');
        else return true;
    }
};
var $ee722d5ad13edb67$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            const valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (valid == null) return new Error('$field must be an email!');
            else return true;
        }
    }
};
var $9e420da9abb32edf$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if (!$fb9ab145a8ccf669$export$f6e2535fb5126e54(compare)) {
        console.error('compare must be a function');
        return new Error('compare must be a function');
    }
    if (value) return compare(value, root);
};
var $ca40ed7ee58b40a9$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$dd1bc94b04021eeb(value)) return new Error("$field required!");
    else return true;
};
var $cc8c5c9fff9c7024$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value.toLowerCase() !== compare.toLowerCase()) return new Error('$field must be same as $compare');
            else return true;
        }
    }
};
var $f31b7bb333f8d972$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!value.toLowerCase().match(/ /g)) {
                var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if (res == null) return new Error('$field must be a valid URL');
                else return true;
            }
        }
    }
};
var $a76502ee8434104a$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.split(' ').length >= compare)) return new Error('$field minimum words limit $compare');
            else return true;
        }
    }
};
var $0449e90f88935030$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.split(' ').length <= compare)) return new Error('$field maximum words limit $compare');
            else return true;
        }
    }
};
var $b0e0b22213017a83$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value !== value.toUpperCase()) return new Error('$field must be uppercase!');
            else return true;
        }
    }
};
var $608c0957fecf1924$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value !== value.toLowerCase()) return new Error('$field must be lowercase!');
            else return true;
        }
    }
};
var $c17f96aedde2e5a1$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length && value !== value.replace(/(?:^|\s)\S/g, (w)=>w.toUpperCase()
        )) return new Error('$field must be capitalize!');
        else return true;
    }
};
var $7ed7f9ab5b38a73b$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$7e4aa119212bc614(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        if (value.toString().length) {
            if (!(parseInt(value) >= parseInt(compare))) return new Error('$field minimum Range of $compare');
            else return true;
        }
    }
};
var $609c50c64edd6954$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$7e4aa119212bc614(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        if (value.toString().length) {
            if (!(parseInt(value) <= parseInt(compare))) return new Error('$field maximum Range of $compare');
            else return true;
        }
    }
};
var $eb15f4cff8b8db8f$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            const format = new RegExp('[' + compare + ']');
            if (format.test(value)) return new Error('$compare these characters are not allowed in $field');
            else return true;
        }
    }
};
var $286056663798c8e7$var$format = /^([^a-zA-Z]*)$/;
var $286056663798c8e7$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!$286056663798c8e7$var$format.test(value)) return new Error('characters are not allowed in $field');
            else return true;
        }
    }
};
var $a6435590f44aece4$var$format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var $a6435590f44aece4$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if ($a6435590f44aece4$var$format.test(value)) return new Error('special characters are not allowed in $field');
            else return true;
        }
    }
};
var $949243f55673e15b$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            const words = compare.replace(',', "|");
            const pattern = new RegExp(words);
            if (value.match(pattern)) return new Error('$compare these words are not allowed in $field');
            else return true;
        }
    }
};
var $f3f10de667a8d2b4$var$format = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
var $f3f10de667a8d2b4$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!$f3f10de667a8d2b4$var$format.test(value)) return new Error('$field must be a hexadecimal characters');
            else return true;
        }
    }
};
var $106513c6fd810d78$var$format = /^([^0-9]*)$/;
var $106513c6fd810d78$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!$106513c6fd810d78$var$format.test(value)) return new Error('number are not allowed in $field');
            else return true;
        }
    }
};
var $b6e370eb4a1932cf$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!compare.test(value)) return new Error("Invalid value");
            else return true;
        }
    }
};
let $c660be645a3c808f$var$format = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
var $c660be645a3c808f$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        value = value.toString();
        if (value.length) {
            if (!$c660be645a3c808f$var$format.test(value)) return new Error("Use $field 8 or more characters with a mix of letters, numbers & symbols.");
            else return true;
        }
    }
};
let $95e92dd66272db82$var$format = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
var $95e92dd66272db82$export$2e2bcd8739ae039 = (value)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        value = value.toString();
        if (value.length) {
            if (!$95e92dd66272db82$var$format.test(value)) return new Error('use 6 or more characters with a mix of letters, numbers & symbols in $field');
            else return true;
        }
    }
};
var $8dba7b5f48ac81a8$export$2e2bcd8739ae039 = (value, field_name, { root: root  })=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (root.data.hasOwnProperty(field_name)) {
                const fieldValue = root.data[field_name];
                if (value.toLowerCase() === fieldValue.toLowerCase()) return new Error("$field not be equal with $compare");
                else return true;
            } else console.error(`${field_name} is not exists in data object`);
        }
    }
};
var $66d504b5e527ded3$export$2e2bcd8739ae039 = (value, compare)=>{
    if (!$fb9ab145a8ccf669$export$43bee75e5e14138e(compare)) {
        const message = "property must be an array";
        console.error(message);
        return new Error(message);
    }
    if (!$fb9ab145a8ccf669$export$dd1bc94b04021eeb(value)) {
        let perfect = false;
        for (let t of compare){
            const check = $d40fe8818bab80b4$export$2e2bcd8739ae039(value, t);
            if (!(check instanceof Error)) {
                perfect = true;
                break;
            }
        }
        if (!perfect) return new Error("$field must be one of type " + compare.join('|'));
        else return true;
    }
};
var $0a25c3f360e017a5$export$2e2bcd8739ae039 = (value, compare)=>{
    if (!$fb9ab145a8ccf669$export$43bee75e5e14138e(compare)) {
        const message = "property must be an array";
        console.error(message);
        return new Error(message);
    }
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!compare.includes(value)) return new Error("$field must be one of " + compare.join('|'));
            else return true;
        }
    }
};
const $5fe96ccd9f239608$var$TYPES = {
    type: $d40fe8818bab80b4$export$2e2bcd8739ae039,
    email: $ee722d5ad13edb67$export$2e2bcd8739ae039,
    equal: $cc8c5c9fff9c7024$export$2e2bcd8739ae039,
    notEqualWith: $8dba7b5f48ac81a8$export$2e2bcd8739ae039,
    url: $f31b7bb333f8d972$export$2e2bcd8739ae039,
    hex: $f3f10de667a8d2b4$export$2e2bcd8739ae039,
    uppercase: $b0e0b22213017a83$export$2e2bcd8739ae039,
    lowercase: $608c0957fecf1924$export$2e2bcd8739ae039,
    capitalize: $c17f96aedde2e5a1$export$2e2bcd8739ae039,
    min: $f87c7917a49f6d4f$export$2e2bcd8739ae039,
    max: $a003b563670259c3$export$2e2bcd8739ae039,
    compare: $9e420da9abb32edf$export$2e2bcd8739ae039,
    required: $ca40ed7ee58b40a9$export$2e2bcd8739ae039,
    minWords: $a76502ee8434104a$export$2e2bcd8739ae039,
    maxWords: $0449e90f88935030$export$2e2bcd8739ae039,
    minNumberRange: $7ed7f9ab5b38a73b$export$2e2bcd8739ae039,
    maxNumberRange: $609c50c64edd6954$export$2e2bcd8739ae039,
    notAllowedChars: $eb15f4cff8b8db8f$export$2e2bcd8739ae039,
    notAllowedCharacters: $286056663798c8e7$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $a6435590f44aece4$export$2e2bcd8739ae039,
    notAllowedWords: $949243f55673e15b$export$2e2bcd8739ae039,
    notAllowedNumber: $106513c6fd810d78$export$2e2bcd8739ae039,
    regex: $b6e370eb4a1932cf$export$2e2bcd8739ae039,
    strongPassword: $c660be645a3c808f$export$2e2bcd8739ae039,
    mediumPassword: $95e92dd66272db82$export$2e2bcd8739ae039,
    oneOf: $0a25c3f360e017a5$export$2e2bcd8739ae039,
    oneOfType: $66d504b5e527ded3$export$2e2bcd8739ae039
};
var $5fe96ccd9f239608$export$2e2bcd8739ae039 = (data, exactOb)=>{
    if (!$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(exactOb)) {
        const message = "exact property must be an Object";
        console.error(message);
        return new Error(message);
    }
    if ($fb9ab145a8ccf669$export$a6cdc56e425d0d0a(data) && !$fb9ab145a8ccf669$export$dd1bc94b04021eeb(data)) {
        if (Object.keys(data).length != Object.keys(exactOb).length) return new Error('Pass invalid properties for $field');
        let keys = [];
        for(let key in data)if (!exactOb.hasOwnProperty(key)) keys.push(key);
        if (keys.length) return new Error('Pass invalid properties for $field');
        const check = $96a9202ad74d1574$export$2e2bcd8739ae039($5fe96ccd9f239608$var$TYPES, data, exactOb);
        check.validate();
        if (check.hasError()) return new Error("$field " + Object.values(check.errors).join(', $field '));
        else return true;
    }
};
const $ad003b1d8f2f30cb$var$TYPES = {
    type: $d40fe8818bab80b4$export$2e2bcd8739ae039,
    email: $ee722d5ad13edb67$export$2e2bcd8739ae039,
    equal: $cc8c5c9fff9c7024$export$2e2bcd8739ae039,
    notEqualWith: $8dba7b5f48ac81a8$export$2e2bcd8739ae039,
    url: $f31b7bb333f8d972$export$2e2bcd8739ae039,
    hex: $f3f10de667a8d2b4$export$2e2bcd8739ae039,
    uppercase: $b0e0b22213017a83$export$2e2bcd8739ae039,
    lowercase: $608c0957fecf1924$export$2e2bcd8739ae039,
    capitalize: $c17f96aedde2e5a1$export$2e2bcd8739ae039,
    min: $f87c7917a49f6d4f$export$2e2bcd8739ae039,
    max: $a003b563670259c3$export$2e2bcd8739ae039,
    compare: $9e420da9abb32edf$export$2e2bcd8739ae039,
    required: $ca40ed7ee58b40a9$export$2e2bcd8739ae039,
    minWords: $a76502ee8434104a$export$2e2bcd8739ae039,
    maxWords: $0449e90f88935030$export$2e2bcd8739ae039,
    minNumberRange: $7ed7f9ab5b38a73b$export$2e2bcd8739ae039,
    maxNumberRange: $609c50c64edd6954$export$2e2bcd8739ae039,
    notAllowedChars: $eb15f4cff8b8db8f$export$2e2bcd8739ae039,
    notAllowedCharacters: $286056663798c8e7$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $a6435590f44aece4$export$2e2bcd8739ae039,
    notAllowedWords: $949243f55673e15b$export$2e2bcd8739ae039,
    notAllowedNumber: $106513c6fd810d78$export$2e2bcd8739ae039,
    regex: $b6e370eb4a1932cf$export$2e2bcd8739ae039,
    strongPassword: $c660be645a3c808f$export$2e2bcd8739ae039,
    mediumPassword: $95e92dd66272db82$export$2e2bcd8739ae039,
    oneOf: $0a25c3f360e017a5$export$2e2bcd8739ae039,
    oneOfType: $66d504b5e527ded3$export$2e2bcd8739ae039
};
var $ad003b1d8f2f30cb$export$2e2bcd8739ae039 = (data, shapeOb)=>{
    if (!$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(shapeOb)) {
        const message = "shape property must be an Object";
        console.error(message);
        return new Error(message);
    }
    if ($fb9ab145a8ccf669$export$a6cdc56e425d0d0a(data) && !$fb9ab145a8ccf669$export$dd1bc94b04021eeb(data)) {
        const check = $96a9202ad74d1574$export$2e2bcd8739ae039($ad003b1d8f2f30cb$var$TYPES, data, shapeOb);
        check.validate();
        if (check.hasError()) return new Error("$field " + Object.values(check.errors).join(', $field '));
        else return true;
    }
};
const $42ade68e3adfd77f$var$TYPES = {
    type: $d40fe8818bab80b4$export$2e2bcd8739ae039,
    email: $ee722d5ad13edb67$export$2e2bcd8739ae039,
    equal: $cc8c5c9fff9c7024$export$2e2bcd8739ae039,
    notEqualWith: $8dba7b5f48ac81a8$export$2e2bcd8739ae039,
    url: $f31b7bb333f8d972$export$2e2bcd8739ae039,
    hex: $f3f10de667a8d2b4$export$2e2bcd8739ae039,
    uppercase: $b0e0b22213017a83$export$2e2bcd8739ae039,
    lowercase: $608c0957fecf1924$export$2e2bcd8739ae039,
    capitalize: $c17f96aedde2e5a1$export$2e2bcd8739ae039,
    min: $f87c7917a49f6d4f$export$2e2bcd8739ae039,
    max: $a003b563670259c3$export$2e2bcd8739ae039,
    compare: $9e420da9abb32edf$export$2e2bcd8739ae039,
    required: $ca40ed7ee58b40a9$export$2e2bcd8739ae039,
    minWords: $a76502ee8434104a$export$2e2bcd8739ae039,
    maxWords: $0449e90f88935030$export$2e2bcd8739ae039,
    minNumberRange: $7ed7f9ab5b38a73b$export$2e2bcd8739ae039,
    maxNumberRange: $609c50c64edd6954$export$2e2bcd8739ae039,
    notAllowedChars: $eb15f4cff8b8db8f$export$2e2bcd8739ae039,
    notAllowedCharacters: $286056663798c8e7$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $a6435590f44aece4$export$2e2bcd8739ae039,
    notAllowedWords: $949243f55673e15b$export$2e2bcd8739ae039,
    notAllowedNumber: $106513c6fd810d78$export$2e2bcd8739ae039,
    regex: $b6e370eb4a1932cf$export$2e2bcd8739ae039,
    strongPassword: $c660be645a3c808f$export$2e2bcd8739ae039,
    mediumPassword: $95e92dd66272db82$export$2e2bcd8739ae039,
    oneOf: $0a25c3f360e017a5$export$2e2bcd8739ae039,
    oneOfType: $66d504b5e527ded3$export$2e2bcd8739ae039,
    exact: $5fe96ccd9f239608$export$2e2bcd8739ae039,
    shape: $ad003b1d8f2f30cb$export$2e2bcd8739ae039
};
const $42ade68e3adfd77f$export$dc9851424e3aa5dc = (data, schema)=>$96a9202ad74d1574$export$2e2bcd8739ae039($42ade68e3adfd77f$var$TYPES, data, schema)
;
var $42ade68e3adfd77f$export$2e2bcd8739ae039 = $42ade68e3adfd77f$export$dc9851424e3aa5dc;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["a0GSk","9qWE8"], "9qWE8", "parcelRequire7a8e")

//# sourceMappingURL=index.8c8470ff.js.map
