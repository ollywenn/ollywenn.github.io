/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {
  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal); // Save a reference of the modal


      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();

window.MicroModal = MicroModal;
/* harmony default export */ __webpack_exports__["default"] = (MicroModal);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./resources/core/js/basepopup.lib.js":
/*!********************************************!*\
  !*** ./resources/core/js/basepopup.lib.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./resources/core/js/helpers.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}




var BasePopup = /*#__PURE__*/function () {
  function BasePopup(props) {
    _classCallCheck(this, BasePopup);

    this.id = props.id ? props.id : 'default-popup';
  }

  _createClass(BasePopup, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "show",
    value: function show(props) {
      var popupId = props.id ? props.id : this.id;
      micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show(popupId);
      this.fetch(props);

      if (props.callbackFn) {
        props.callbackFn();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var popupId = props.id ? props.id : this.id;
      var e = window.event;
      e.stopPropagation();
      micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].close(popupId);
      this.removePopupContents(popupId);
    }
  }, {
    key: "replace",
    value: function replace(props) {
      this.hide(props);
      this.show(props);
    } //TODO: implement a localStorage feature to avoid hitting the endpoints repeatedly

  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (props) {
      var url = props.path ? props.path : '/popup-render/login';
      var popupId = props.id ? props.id : this.id;
      var myRequest = new Request(url);
      var submitAction = props.submitAction ? props.submitAction : null;
      fetch(myRequest).then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP error on fetching ".concat(url, "! status: ").concat(response.status));
        }

        return response.json();
      }).then(function attachingPopupContents(response) {
        var popupEl = document.getElementById(popupId).childNodes[1];
        popupEl.innerHTML = response.html;
        document.querySelector('.modal-container').addEventListener('click', function (e) {
          e.stopPropagation();
        });
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["attachEventsOnFormElements"])('.form input, .form textarea'); // if there's a submitAction, attach to the submit button

        if (submitAction && Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(submitAction)) {
          var formSubmit = popupEl.querySelector('[type="submit"]');
          formSubmit.addEventListener('click', function onFormSubmit(e) {
            formSubmit.classList.add('is-loading');
            e.preventDefault();
            submitAction();
          });
        }
      });
    })
  }, {
    key: "removePopupContents",
    value: function removePopupContents(popupId) {
      var popupEl = document.getElementById(popupId).childNodes[1];
      popupEl.innerHTML = '';
    }
  }]);

  return BasePopup;
}();

/* harmony default export */ __webpack_exports__["default"] = (BasePopup);

/***/ }),

/***/ "./resources/core/js/helpers.js":
/*!**************************************!*\
  !*** ./resources/core/js/helpers.js ***!
  \**************************************/
/*! exports provided: isIE11, trimNumberUnit, cleanTitle, getParameterByName, snippetText, storageAvailable, getDataFromStorage, populateStorage, lazyLoadImages, getUrlParam, setCookie, getCookie, checkCookie, renderNode, extractSizeFromUrl, isFunction, attachEventsOnFormElements, fixFormFieldHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return isIE11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimNumberUnit", function() { return trimNumberUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanTitle", function() { return cleanTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snippetText", function() { return snippetText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageAvailable", function() { return storageAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromStorage", function() { return getDataFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateStorage", function() { return populateStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadImages", function() { return lazyLoadImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCookie", function() { return checkCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNode", function() { return renderNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractSizeFromUrl", function() { return extractSizeFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachEventsOnFormElements", function() { return attachEventsOnFormElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixFormFieldHeight", function() { return fixFormFieldHeight; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageLoader */ "./resources/core/js/imageLoader.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
} //Available for all projects



var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
};
var trimNumberUnit = function trimNumberUnit(s) {
  return parseInt(s);
};
function cleanTitle(str) {
  return str.split(': ')[1].trim();
}
var getParameterByName = function getParameterByName(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var defaultVaLue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) return defaultVaLue;
  if (!results[2]) return '';
  return Number(decodeURIComponent(results[2].replace(/\+/g, ' ')));
};
function snippetText(str) {
  var charLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120;
  return str.replace(/[\n\r]+/g, ' ').replace(/\s{2,}/g, ' ').slice(0, charLength).trim();
}
function storageAvailable(type) {
  var storage;

  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && ( // everything except Firefox
    e.code === 22 || // Firefox
    e.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' || // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
} //TODO: write test for this

function getDataFromStorage(_x, _x2) {
  return _getDataFromStorage.apply(this, arguments);
}

function _getDataFromStorage() {
  _getDataFromStorage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, key) {
    var interval,
        request,
        resp,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            interval = _args.length > 2 && _args[2] !== undefined ? _args[2] : 600000;

            if (!storageAvailable('localStorage')) {
              _context.next = 8;
              break;
            }

            if (!(!localStorage.getItem(key) || JSON.parse(localStorage.getItem(key)).lastUpdated + Number(interval) < Date.now())) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return populateStorage(url, key);

          case 5:
            return _context.abrupt("return", localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)).data : null);

          case 8:
            // NO LOCAL STORAGE AVAILABLE so hit the endpoint
            request = new Request(url);
            resp = fetch(request, {
              headers: {
                'X-Requested-With': 'XMLHttpRequest'
              }
            }).then(function (response) {
              if (!response.ok) {
                throw new Error('Network failed to fetch the url: ', url);
              }

              return response.text();
            }).catch(function (error) {
              return console.error(error);
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getDataFromStorage.apply(this, arguments);
}

function populateStorage(_x3, _x4) {
  return _populateStorage.apply(this, arguments);
}

function _populateStorage() {
  _populateStorage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, key) {
    var request, resp, data, finalData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            request = new Request(url);
            _context2.next = 4;
            return fetch(request, {
              headers: {
                'X-Requested-With': 'XMLHttpRequest'
              }
            });

          case 4:
            resp = _context2.sent;

            if (resp.ok) {
              _context2.next = 7;
              break;
            }

            throw new Error('Network failed to fetch the url: ', url);

          case 7:
            _context2.next = 9;
            return resp.text();

          case 9:
            data = _context2.sent;
            finalData = {
              lastUpdated: Date.now(),
              data: data
            };
            localStorage.setItem(key, JSON.stringify(finalData));
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            throw new Error('Network failed to fetch ' + key + ' url => ' + url, _context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return _populateStorage.apply(this, arguments);
}

function lazyLoadImages(images) {
  return Object(_imageLoader__WEBPACK_IMPORTED_MODULE_1__["imageLazyLoader"])(images);
}
function getUrlParam(name) {
  var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href);

  if (results == null) {
    return null;
  }

  return decodeURI(results[1]) || 0;
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function checkCookie(cname) {
  var value = getCookie(cname);

  if (value != '') {
    return true;
  }

  return false;
}
function renderNode($node, data) {
  $node.html(data);
}
function extractSizeFromUrl(url) {
  var found = '0x0';

  if (_typeof(url) !== ( true ? "undefined" : undefined)) {
    var regex = /w\:([0-9]*),h\:([0-9]*)/g;
    found = url.match(regex);

    if (found.length > 0) {
      found = found[0];
      found = found.split(',');
      found = found[0].replace('w:', '') + 'x' + found[1].replace('h:', '');
    }
  }

  return found;
}
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
} // implies html structure of .form-field as a wrapper for a label + input

var attachEventsOnFormElements = function attachEventsOnFormElements(selector) {
  var formInputs = document.querySelectorAll(selector); // bind input events

  formInputs.forEach(function (el) {
    var formField = el.closest('.form-field');
    var formLabel = el.previousElementSibling;
    el.addEventListener('focus', function inputFocus() {
      if (formLabel.classList.contains('form-label')) {
        formLabel.classList.add('is-active');
      }
    });
    el.addEventListener('blur', function inputBlur() {
      if (!this.value.length) {
        if (formLabel.classList.contains('form-label') && formLabel.classList.contains('is-active')) {
          formLabel.classList.remove('is-active');
        }
      }
    }); // this fixes the height of the input wrapper in case the label is too long
    //TODO: check MutationObserver to listen to css changes (and drop possible on resize listeners)

    if (formLabel && formField.dataset.strlen > 35) {
      formField.style.height = "".concat(formLabel.offsetHeight + 5, "px");
    }
  });
}; // implies html structure of .form-field as a wrapper for a label + input

var fixFormFieldHeight = function fixFormFieldHeight(selector) {
  var formInputs = document.querySelectorAll(selector);
  formInputs.forEach(function (el) {
    var formField = el.closest('.form-field');
    var formLabel = el.previousElementSibling; // this fixes the height of the input wrapper in case the label is too long
    //TODO: check MutationObserver to listen to css changes (and drop possible on resize listeners)

    if (formLabel && formField.dataset.strlen > 35) {
      formField.style.height = "".concat(formLabel.offsetHeight + 5, "px");
    }
  });
};

/***/ }),

/***/ "./resources/core/js/imageLoader.js":
/*!******************************************!*\
  !*** ./resources/core/js/imageLoader.js ***!
  \******************************************/
/*! exports provided: imageLazyLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageLazyLoader", function() { return imageLazyLoader; });
var isResizing = false;
var timer = null;
var preloaded = false;

function startResizeTracking() {
  window.addEventListener('resize', function () {
    if (isResizing == false) {
      var blocks = document.querySelectorAll('[data-bg]');
      blocks.forEach(function (image) {
        if (isInViewport(image)) {
          if (image.classList.contains('js-img') && image.src != '' && image.src.indexOf('/transp.png') == -1) {
            image.style.backgroundImage = 'url(' + image.src + ')';

            if (image.classList.contains('js-show-background')) {
              image.classList.add('support-background-for-resize');
            }

            image.src = '/img/transp.png';
          }
        }
      });
    }

    isResizing = true;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      isResizing = false;
      imageLazyLoader(document.querySelectorAll('[data-bg]'));
    }, 450, event);
  });
}

function imageLazyLoader(loadableImages) {
  loadCompositImages();

  if (timer === null) {
    startResizeTracking();
  }

  if (isResizing) {
    return loadableImages;
  }

  loadableImages.forEach(function (image) {
    if (isInViewport(image)) {
      loadOneImage(image);
    }
  });

  if (!preloaded) {
    setTimeout(function () {
      preLoadLowQualityImages();
    }, 2500);
    preloaded = true;
  }

  return loadableImages;
}

function loadOneImage(image) {
  var theImage = getExpectedImageSize(image);

  if (image.getAttribute('data-preSize') != theImage || image.classList.contains('js-img') && image.src.indexOf('transp.png') > 0) {
    image.setAttribute('data-preSize', theImage);

    if (image.classList.contains('js-img')) {
      if (image.src == '') {
        var img = new Image();
        img.src = theImage;

        img.onload = function () {
          if (image.classList.contains('js-show-background')) {
            image.style.display = 'block';
          }

          image.style.backgroundImage = 'url(' + img.src + ')';
          loadHQImage(image, theImage);
        };
      } else {
        loadHQImage(image, theImage);
      }
    } else {
      if (image.style.backgroundImage == '') {
        var img = new Image();
        img.src = theImage;

        img.onload = function () {
          image.style.backgroundImage = 'url(' + img.src + ')';
          loadHQImage(image, theImage);
        };
      } else {
        loadHQImage(image, theImage);
      }
    }
  }
}

function getExpectedImageSize(image) {
  var theImage = image.getAttribute('data-bg');
  var theSize = ''; //NOT

  if (!image.parentNode.classList.contains('image-wrapper') && !image.parentNode.classList.contains('alpha-article') && !image.classList.contains('js-dont-resize')) {
    var height = parseInt(image.clientHeight);
    var width = parseInt(image.clientWidth);

    if (width == 0 || height == 0) {
      if (width > height) {
        theSize = 'w:' + width;
      } else {
        //in case both are zero - we at least try
        if (height == 0) {
          height = 300;
        }

        theSize = 'h:' + height;
      }
    } else {
      theSize = 'w:' + width + ',h:' + height;
    }

    return theImage.replace('droids', theSize);
  } //TC


  if (image.parentNode.classList.contains('image-wrapper') || image.parentNode.classList.contains('alpha-article')) {
    var _height = parseInt(image.parentNode.clientHeight);

    var _width = parseInt(image.parentNode.clientWidth);

    if (_width == 0 || _height == 0) {
      if (_width > _height) {
        theSize = 'w:' + _width;
      } else {
        //in case both are zero - we at least try
        if (_height == 0) {
          _height = 300;
        }

        theSize = 'h:' + _height;
      }
    } else {
      theSize = 'w:' + _width + ',h:' + _height;
    }

    theImage = theImage.replace('droids', theSize);
  }

  return theImage;
}

function loadHQImage(image, theImage) {
  if (image.getAttribute('data-bg').indexOf('quality=value:15') > 0 || image.classList.contains('js-img') && image.src.indexOf('transp.png') > 0) {
    var imgHQ = new Image();
    imgHQ.src = theImage.replace('quality=value:15', 'quality=value:85');

    imgHQ.onload = function () {
      if (image.classList.contains('js-img')) {
        image.src = imgHQ.src;

        if (image.classList.contains('js-show-background')) {
          image.style.display = 'block';
        }

        image.classList.remove('support-background-for-resize');
      } else {
        image.style.backgroundImage = 'url(' + imgHQ.src + ')';
      }
    };
  }
}

function preLoadLowQualityImages() {
  if (isResizing) {
    setTimeout(function () {
      preLoadLowQualityImages();
    }, 2000);
    return '';
  }

  var loadableImages = document.querySelectorAll('[data-bg]');
  loadableImages.forEach(function (image) {
    if (image.style.backgroundImage == '' || image.classList.contains('js-img') && image.src == '') {
      preLoadLowQualityImage(image);
    }
  });
}

function loadCompositImages() {
  if (isResizing) {
    setTimeout(function () {
      loadCompositImages();
    }, 2000);
    return '';
  }

  var loadableImages = document.querySelectorAll('[data-src]');
  loadableImages.forEach(function (image) {
    if (image.src == '') {
      preLoadLowQualityImage(image, true);
      image.removeAttribute('data-src');
    }
  });
}

function preLoadLowQualityImage(image, imgTag) {
  if (imgTag === true) {
    var theSrc = image.getAttribute('data-src');
    theSrc = theSrc.replace('quality=value:15', 'quality=value:60');
    image.src = theSrc;
  } else {
    var theImage = getExpectedImageSize(image);

    if (image.getAttribute('data-bg').indexOf('quality=value:15') > 0) {
      image.classList.add('blurTransition');
    }

    if (image.classList.contains('js-img')) {
      image.src = theImage;
    } else {
      image.style.backgroundImage = 'url(' + theImage + ')';
    }
  }
}

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return bounding.top >= -320 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight + 450 || document.documentElement.clientHeight + 450) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/***/ }),

/***/ "./resources/twuae/js/helpers.js":
/*!***************************************!*\
  !*** ./resources/twuae/js/helpers.js ***!
  \***************************************/
/*! exports provided: checkIfUserAlreadyLoggedIn, resetModalFormErrorMessages, triggerGtagEvent, jmgAjax, attachLoadMoreActions, generateClonedArticleWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfUserAlreadyLoggedIn", function() { return checkIfUserAlreadyLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModalFormErrorMessages", function() { return resetModalFormErrorMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerGtagEvent", function() { return triggerGtagEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jmgAjax", function() { return jmgAjax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachLoadMoreActions", function() { return attachLoadMoreActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateClonedArticleWithData", function() { return generateClonedArticleWithData; });
/* harmony import */ var _core_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/js/helpers */ "./resources/core/js/helpers.js");
/* harmony import */ var _tw_global_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tw-global-state */ "./resources/twuae/js/tw-global-state.js");
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

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

  var normalCompletion = true,
      didErr = false,
      err;
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
      } finally {
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}



function checkIfUserAlreadyLoggedIn(callback) {
  var $element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if ($element !== null) {
    $element.addClass('is-loading');
  } // Check if user is logged in already


  $.get('/auth-check', function (response) {
    if (response !== false) {
      window.location = window.location.origin + window.location.pathname;
    } else {
      if (callback !== undefined) {
        callback();
      }
    }
  });
}
function resetModalFormErrorMessages(modal) {
  var $modal = $(modal); // Recursive to tackle all modals if the modal is killed by clicking on the underlay (or if no modal elem provided)

  if (typeof modal === 'undefined') {
    var $modals = $('.modal');
    $modals.each(function () {
      resetModalFormErrorMessages($(this));
    });
  } // Remove errors


  var $helpers = $modal.find('form .helper-text');

  if ($helpers.length > 0) {
    $helpers.each(function () {
      $(this).attr('data-error', '').attr('data-success', '').html('');
    });
  }

  var errorForm = null;

  if ($modal.find('.errorMessageContainer').length > 0) {
    errorForm = $modal.find('.errorMessageContainer');
  } else if ($modal.find('.errorMessage').length > 0) {
    errorForm = $modal.find('.errorMessage');
  }

  if (errorForm !== null) {
    errorForm.html('');
  }
}
function triggerGtagEvent($button) {
  var action = $button.data('gtag-action');
  var category = $button.data('gtag-category');
  var label = $button.data('gtag-label');

  if (action !== undefined && category !== undefined && label !== undefined) {// gtag('event', action, {
    //     event_category: category,
    //     event_label: label,
    //     value: 1
    // });
  }
}
var jmgAjax = function jmgAjax(properties) {
  if (_typeof(properties) != 'object') {
    console.error('Incomming properties must be an object or array');
    return false;
  }

  if (!('url' in properties)) {
    console.error("Oh come'on now... without a URL property? you can do better than that");
    return false;
  }

  var ajax = {
    url: properties.url,
    method: 'POST',
    data: [],
    success: null,
    fail: null
  };

  if ('method' in properties) {
    ajax.method = properties.method;
  }

  if ('data' in properties) {
    ajax.data = properties.data;
  }

  if ('success' in properties) {
    ajax.success = properties.success;
  }

  if ('fail' in properties) {
    ajax.fail = properties.fail;
  } //@todo this can be refactored to that fetch or whatever
  //this now allows us to have the ajax logic in one place and have the simple calling


  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        if (typeof ajax.success == 'function') {
          ajax.success(xhttp.response);
        }

        return true;
      } else if (this.status > 300) {
        if (typeof ajax.fail == 'function') {
          ajax.fail(xhttp.response);
        }

        return false;
      }
    }
  };

  var data = ''; //so we are checking whether we've got a string or an object

  if (typeof ajax.data == 'string') {
    data = ajax.data;
  } else {
    // if it's an object we have to parse it... but if it's a FormData we need to deal with it differently
    if (ajax.data instanceof FormData) {
      var _iterator = _createForOfIteratorHelper(ajax.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;

          if (data != '') {
            data += '&';
          }

          data += p[0] + '=' + p[1];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      //good old ordinary object :)
      Object.keys(ajax.data).forEach(function (key) {
        if (data != '') {
          data += '&';
        }

        data += key + '=' + ajax.data[key];
      });
    }
  }

  xhttp.open(ajax.method, ajax.url, true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(data);
};
function attachLoadMoreActions(globalState) {
  var $btnLoadMore = $('.js-btn-load-more');
  var loadMoreFinishedEvent = new Event('loadMoreFinished');
  $btnLoadMore.on('click', function () {
    var url = window.location.href;
    var lastOffset = $('.js-article-template').last().offset().top;
    var total = $btnLoadMore.attr('data-limit');
    var currentNumber = $btnLoadMore.attr('data-page');
    var nextNumber = parseInt(currentNumber) + 1;
    var $appendTarget = $('.js-loadmore-target');
    $btnLoadMore.addClass('is-loading');

    if (nextNumber > total) {
      $btnLoadMore.hide();
    } else {
      url = url + '?page=' + nextNumber;
      $.get(url, function (data) {
        if (data.articles !== undefined && data.articles !== null) {
          $.each(data.articles, function (index, article) {
            $appendTarget.append(generateClonedArticleWithData(article));
          });
        }

        $btnLoadMore.attr('data-limit', data.last_page);
        $btnLoadMore.attr('data-page', nextNumber);
        $btnLoadMore.removeClass('is-loading');
        window.dispatchEvent(loadMoreFinishedEvent);

        if (nextNumber + 1 > total) {
          $btnLoadMore.hide();
        }

        $([document.documentElement, document.body]).animate({
          scrollTop: lastOffset
        }, 0);
        setTimeout(function () {
          globalState.loadableImages = Object(_core_js_helpers__WEBPACK_IMPORTED_MODULE_0__["lazyLoadImages"])(document.querySelectorAll('[data-bg]'));
        }, 350);
      }).fail(function () {
        $btnLoadMore.removeClass('is-loading');
        $btnLoadMore.hide();
      });
    }
  });
}
function generateClonedArticleWithData(article) {
  var $template = $('.js-article-template').first().clone(); //FIXME: the following things need to be changed. The endpoint should only return one default size

  $template.find('a > img').first().attr('src', article.thumbnail);
  $template.find('.articleSnippet-title > a').first().html(article.title);
  $template.find('a').each(function (index, element) {
    $(element).attr('href', article.full_slug);
  });
  return $template;
}

/***/ }),

/***/ "./resources/twuae/js/jmg-popup.lib.js":
/*!*********************************************!*\
  !*** ./resources/twuae/js/jmg-popup.lib.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js_basepopup_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/js/basepopup.lib */ "./resources/core/js/basepopup.lib.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./resources/twuae/js/user.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}


 //TODO: maybe change this class name to TWPopop (if/when it gets too specific)

var JmgPopup = /*#__PURE__*/function (_BasePopup) {
  _inherits(JmgPopup, _BasePopup);

  var _super = _createSuper(JmgPopup);

  function JmgPopup(props) {
    _classCallCheck(this, JmgPopup);

    return _super.call(this, props);
  }

  _createClass(JmgPopup, [{
    key: "login",
    value: function login() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/login',
        submitAction: _user__WEBPACK_IMPORTED_MODULE_1__["userLogin"]
      });
    }
  }, {
    key: "signUp",
    value: function signUp() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/sign-up'
      });
    }
  }, {
    key: "createPassword",
    value: function createPassword() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/create-password',
        submitAction: _user__WEBPACK_IMPORTED_MODULE_1__["passwordChange"]
      });
    }
  }, {
    key: "forgotPassword",
    value: function forgotPassword() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/forgot-password'
      });
    }
  }, {
    key: "passwordChanged",
    value: function passwordChanged() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/password-changed'
      });
    }
  }, {
    key: "resetPasswordRequired",
    value: function resetPasswordRequired() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/reset-password-required'
      });
    }
  }, {
    key: "emailVerificationSent",
    value: function emailVerificationSent() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/verification-mail-sent'
      });
    }
  }, {
    key: "emailVerified",
    value: function emailVerified() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/email-verified'
      });
    }
  }, {
    key: "emailVerificationFailed",
    value: function emailVerificationFailed() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/email-verified-failed'
      });
    }
  }, {
    key: "emailUnconfirmed",
    value: function emailUnconfirmed() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/email-unconfirmed'
      });
    }
  }, {
    key: "updateSuccessful",
    value: function updateSuccessful() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/update-successful'
      });
    } // fastSignUp() {
    //   super.show({ path: '/popup-render/fast-sign-up' });
    // }
    // fastSubscribe() {
    //   super.show({ path: '/popup-render/fast-subscribe' });
    // }

  }, {
    key: "paywall",
    value: function paywall() {
      _get(_getPrototypeOf(JmgPopup.prototype), "show", this).call(this, {
        path: '/popup-render/paywall'
      });
    }
  }]);

  return JmgPopup;
}(_core_js_basepopup_lib__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (JmgPopup);

/***/ }),

/***/ "./resources/twuae/js/main-nav.js":
/*!****************************************!*\
  !*** ./resources/twuae/js/main-nav.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tw_global_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tw-global-state */ "./resources/twuae/js/tw-global-state.js");


(function ($) {
  'use strict';

  var $window = $(window);
  var $body = $('body');
  var $mainHeader = $('.js-main-header');
  var $mainNav = $mainHeader.find('.js-main-nav');
  var $btnToggleNav = $('.js-btn-toggle-menu');
  var $menuParent = $mainNav.find('.js-menu-parent');
  var $mainNavParentLink = $mainNav.find('.js-menu-parent > a, .js-menu-parent > button');
  var $btnProfile = $('.js-btn-profile');
  var $extraMenu = $('.js-extra-menu');
  var mainHeaderOffsetTop = $mainHeader.offset().top;
  var mainHeaderHeight = $mainHeader.outerHeight();
  var mainNavOffsetTop = $mainNav.offset().top;

  if ($window.width() < 980) {
    $menuParent.each(function () {
      var $this = $(this);

      if ($this.hasClass('is-current')) {
        $this.addClass('is-active');
      }
    });
  }

  $window.on('scroll', fixHeaderPos); // FIXME: this behaves terribly 🤦🏻‍♂️. Refactor

  function fixHeaderPos() {
    if ($window.scrollTop() >= mainHeaderOffsetTop && !$body.hasClass('no-scroll')) {
      $body.addClass('sticky-nav');

      if ($window.width() < _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.lg) {
        $body.css('padding-top', mainHeaderHeight);
      } else {
        //FIXME: refactor this to only show sticky menu on lg if you scroll up some pixels otherwise hidden
        var headerNavDiff = mainNavOffsetTop - mainHeaderOffsetTop;
        var windowNavDiff = mainNavOffsetTop - $window.scrollTop() - headerNavDiff;
        var translateValue = 0;

        if ($window.scrollTop() >= mainNavOffsetTop) {
          translateValue = -windowNavDiff;

          if (windowNavDiff < headerNavDiff) {
            translateValue = -headerNavDiff;
          }
        } else {
          translateValue = windowNavDiff;
        }

        $body.css('padding-top', mainHeaderHeight);
        $mainHeader.css('transform', "translate(-50%, ".concat(translateValue, "px)"));
      }
    } else {
      $body.removeClass('sticky-nav').css('padding-top', 0);
      $mainHeader.css('transform', "translate(-50%, 0)");
    }
  }

  $window.on('resize', function () {
    mainNavOffsetTop = $mainNav.offset().top;
    mainHeaderHeight = $mainHeader.outerHeight();

    if ($window.width() > _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.lg) {
      $menuParent.each(function () {
        $(this).removeClass('is-active');
      });
    }
  });
  $btnToggleNav.on('click', function () {
    if ($window.width() <= _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.lg) {
      $(this).toggleClass('is-active');
      $mainNav.toggleClass('is-active');
      $body.toggleClass('no-scroll');
      $extraMenu.removeClass('is-active');
    }
  });
  $mainNavParentLink.on('click', function () {
    var windowWidth = $window.width();

    if (windowWidth <= _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.lg) {
      var _$menuParent = $(this).parent('.js-menu-parent');

      if (windowWidth < _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.smd) {
        if (_$menuParent.hasClass('is-active')) {
          _$menuParent.removeClass('is-active');
        } else {
          _$menuParent.addClass('is-active');
        }
      } else if (windowWidth >= _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.smd && windowWidth < _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.xmd) {
        $('.js-menu-parent.is-active').removeClass('is-active');

        _$menuParent.addClass('is-active');
      } else if (windowWidth >= _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.xmd && windowWidth <= _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.lg) {
        _$menuParent.siblings('.is-active').removeClass('is-active');

        _$menuParent.toggleClass('is-active');
      }
    }
  });
  $btnProfile.on('click', function (e) {
    if ($window.width() < _tw_global_state__WEBPACK_IMPORTED_MODULE_0__["globalState"].screenSizes.xmd) {
      e.preventDefault();
      $extraMenu.toggleClass('is-active');
      $mainNav.removeClass('is-active');
      $btnToggleNav.removeClass('is-active');
      $body.toggleClass('no-scroll');
    }
  });
  $extraMenu.on('click', 'button', function () {
    $extraMenu.removeClass('is-active');
  });
})(jQuery);

/***/ }),

/***/ "./resources/twuae/js/main.js":
/*!************************************!*\
  !*** ./resources/twuae/js/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* harmony import */ var _jmg_popup_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jmg-popup.lib */ "./resources/twuae/js/jmg-popup.lib.js");
/* harmony import */ var _core_js_imageLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/js/imageLoader.js */ "./resources/core/js/imageLoader.js");
/* harmony import */ var _core_js_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/js/helpers.js */ "./resources/core/js/helpers.js");
/* harmony import */ var _tw_global_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tw-global-state */ "./resources/twuae/js/tw-global-state.js");






(function ($) {
  'use strict';

  __webpack_require__(/*! ./main-nav */ "./resources/twuae/js/main-nav.js");

  __webpack_require__(/*! ./searchbar */ "./resources/twuae/js/searchbar.js");

  $('.js-btn-latest-articles').on('click', function btnLatestArticles() {
    var $this = $(this);
    var target = $this.attr('data-target'); // debugger;

    $this.addClass('is-active').siblings('.btn').removeClass('is-active');
    $('.' + target).addClass('is-active').siblings('.js-latest-articles-list.is-active').removeClass('is-active');
  });
  micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
    onShow: function onShow() {
      $('body').addClass('no-scroll');
    },
    onClose: function onClose() {
      $('body').removeClass('no-scroll');
    },
    disableScroll: true
  });

  if (document.querySelector('.form')) {
    Object(_core_js_helpers_js__WEBPACK_IMPORTED_MODULE_3__["attachEventsOnFormElements"])('.form input, .form textarea');
  }

  $(window).on('resize', function resizeWindowHappening() {
    //TODO: revisit this, maybe use rxjs or MutationObserver?
    Object(_core_js_helpers_js__WEBPACK_IMPORTED_MODULE_3__["fixFormFieldHeight"])('.form input, .form textarea');
  });
  window.Popup = new _jmg_popup_lib__WEBPACK_IMPORTED_MODULE_1__["default"]({
    id: 'global-popup'
  });
  $(window).on('scroll', function () {
    if (!_tw_global_state__WEBPACK_IMPORTED_MODULE_4__["globalState"].scrollPause) {
      _tw_global_state__WEBPACK_IMPORTED_MODULE_4__["globalState"].scrollPause = true;
      setTimeout(function () {
        _tw_global_state__WEBPACK_IMPORTED_MODULE_4__["globalState"].loadableImages = Object(_core_js_imageLoader_js__WEBPACK_IMPORTED_MODULE_2__["imageLazyLoader"])(_tw_global_state__WEBPACK_IMPORTED_MODULE_4__["globalState"].loadableImages);
        _tw_global_state__WEBPACK_IMPORTED_MODULE_4__["globalState"].scrollPause = false;
      }, 125);
    }
  });
  _tw_global_state__WEBPACK_IMPORTED_MODULE_4__["globalState"].loadableImages = Object(_core_js_imageLoader_js__WEBPACK_IMPORTED_MODULE_2__["imageLazyLoader"])(document.querySelectorAll('[data-bg]'));
})(jQuery);

/***/ }),

/***/ "./resources/twuae/js/searchbar.js":
/*!*****************************************!*\
  !*** ./resources/twuae/js/searchbar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
  var searchBarTimeout = null;
  var searchBarValue = '';
  var scriptAdded = false;
  var searchClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var $body = document.querySelector('body');
  var $searchToggleButton = $body.querySelector('.js-btn-search-toggle');
  var $searchContainer = $body.querySelector('.js-search-container');
  var $topSearch = $searchContainer.querySelector('.js-search-input');
  var $btnCloseSearch = $searchContainer.querySelector('.js-close-search');
  var $performSearch = $searchContainer.querySelector('.js-btn-search');
  var $googleSearchDiv = null;

  var toggleSearch = function toggleSearch() {
    $searchContainer.classList.toggle('is-active');

    if ($searchContainer.classList.contains('is-active')) {
      $body.classList.add('search-is-active');

      if (!scriptAdded) {
        var scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.setAttribute('src', 'https://cse.google.com/cse.js?cx=56abede68cb5f08b5');
        $searchContainer.appendChild(scriptTag);
        scriptAdded = true;
      }
    } else {
      $body.classList.remove('search-is-active');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  $searchToggleButton.addEventListener('click', toggleSearch);
  $btnCloseSearch.addEventListener('click', toggleSearch); // Attache quick search functionality to the top search bar

  $topSearch.addEventListener('focus', function () {
    $googleSearchDiv = $googleSearchDiv || $searchContainer.querySelector('#___gcse_0');
  });

  $topSearch.onkeydown = function () {
    searchBarValue = $(this).val();
  };

  $topSearch.onkeyup = function (e) {
    var searchVal = $(this).val();
    clearTimeout(searchBarTimeout);

    if (e.key === 'Enter') {
      e.preventDefault();
      window.location = '#gsc.tab=0&gsc.q=' + toSnakeCase(searchVal) + '&gsc.page=1';
      $googleSearchDiv.classList.remove('is-active');
    } else {
      searchBarTimeout = setTimeout(function () {
        window.location = '#gsc.tab=0&gsc.q=' + toSnakeCase(searchVal) + '&gsc.page=1';
        doTagSearch();
      }, 850);
      $googleSearchDiv.classList.add('is-active');

      if (!searchVal) {
        $googleSearchDiv.classList.remove('is-active');
      }
    }
  };

  $performSearch.addEventListener('click', function () {
    window.location = '#gsc.tab=0&gsc.q=' + toSnakeCase($topSearch.value) + '&gsc.page=1';
  });

  document.onkeyup = function (e) {
    if (e.key === 'Escape' && $searchContainer.classList.contains('is-active')) {
      $searchToggleButton.dispatchEvent(searchClickEvent);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  var doTagSearch = function doTagSearch() {
    var element = $('#top-search');
    var searchTarget = $('.js-quick-search-target');
    var searchTerm = element.val();

    if (searchTerm === '') {
      searchTarget.html('');
    } else {
      searchTarget.html('<img src="/img/loading.gif" class="loading">');
      fetch('/quick-search/' + searchTerm).then(function (response) {
        return response.text();
      }).then(function (data) {
        searchTarget.html(data);
      });
    }
  };

  var toSnakeCase = function toSnakeCase(str) {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
      return x.toLowerCase();
    }).join('+');
  };
})();

/***/ }),

/***/ "./resources/twuae/js/tw-global-state.js":
/*!***********************************************!*\
  !*** ./resources/twuae/js/tw-global-state.js ***!
  \***********************************************/
/*! exports provided: globalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalState", function() { return globalState; });
var globalState = {
  loadableImages: null,
  scrollPause: false,
  screenSizes: {
    sm: 375,
    smd: 667,
    md: 768,
    xmd: 980,
    lg: 1024,
    xlg: 1160,
    xxlg: 1260,
    maxWidth: 1120,
    externalMaxWidth: 1648
  }
};

/***/ }),

/***/ "./resources/twuae/js/user.js":
/*!************************************!*\
  !*** ./resources/twuae/js/user.js ***!
  \************************************/
/*! exports provided: userLogin, passwordChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordChange", function() { return passwordChange; });
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./resources/twuae/js/helpers.js");




(function ($) {
  'use strict';
  /**
   * Rendering the popups:
   *
   * GET: /popup-render/login
   * GET: /popup-render/sign-up
   * GET: /popup-render/email-verified
   * GET: /popup-render/verification-mail-sent
   *
   * Expected response:
   * {
   *    "status": true,
   *    "html": "<raw html string><here>"
   * }
   *
   * - OR -
   *
   * Response status 404 when couldn't find the template
   */

  var $btnSubmitLoginForm = $('.js-submit-login');
  var $registerForm = $('#registerForm');
  var $btnSubmitRegisterForm = $('.js-submit-register');
  var $btnLogout = $('.js-btn-logout');
  var $btnProfile = $('.js-btn-profile');
  $btnSubmitLoginForm.on('click', function (e) {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["checkIfUserAlreadyLoggedIn"])(memberLogin, $(this));
  });
  $btnSubmitRegisterForm.on('click', function (e) {
    e.preventDefault();
    memberRegistration();
  });
  $btnLogout.on('click', function (e) {
    window.location = '/logout';
  });

  function memberLogin() {
    var $loginForm = $('#loginForm');
    var formData = $loginForm.serialize();
    var $btnSubmit = $('.js-submit-login');
    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["resetModalFormErrorMessages"])($loginForm.parents('.modal'));
    $btnSubmit.addClass('is-loading');
    $.ajax({
      url: $loginForm.attr('action'),
      type: 'POST',
      data: formData,
      dataType: 'json',
      success: function success(data, status) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["triggerGtagEvent"])($btnSubmit);

        if (data.hasOwnProperty('open')) {
          micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].close('popup-login');

          switch (data.open) {
            case 'fpp':
              Popup.forgotPasswordProblem.open(); //TODO: does it apply for TW?

              break;

            case 'fpf':
              Popup.forgottenPasswordFast.open(); //TODO: does it apply for TW?

              break;
          }
        } else {
          var next = $loginForm.find('input[name="next"]');

          if (next.length > 0) {
            window.location = window.location.origin + window.location.pathname;
          } else {
            Popup.emailVerificationSent();
          }
        }
      },
      error: function error(data, status) {
        $btnSubmit.removeClass('is-loading');
        console.error(data.responseText);

        if (data.responseText === 'Unconfirmed email address') {
          Popup.emailUnconfirmed();
        } else if (data.responseText === 'Password Reset Required') {
          Popup.forgotPassword(); //M.Modal.getInstance($('#reset-password-required')).open();
          //temporary fix until we have a new modal

          $('#password-holder .helper-text').html('You need to setup a new password to use the new Caterer website.');
        } else {
          failedAjax(data, status, 'loginForm');
          $btnSubmit.blur();
        }
      }
    });
    return false;
  }

  function memberRegistration() {
    var $registerForm = $('#registerForm');
    var formData = $registerForm.serialize();
    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["resetModalFormErrorMessages"])($registerForm.parents('.modal'));
    $btnSubmitRegisterForm.addClass('is-loading');
    $.ajax({
      url: $registerForm.attr('action'),
      type: 'POST',
      data: formData,
      dataType: 'json',
      success: function success(data) {
        if (data.status) {
          Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["triggerGtagEvent"])($btnSubmitRegisterForm);
          micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show('popup-sign-up'); //???

          micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].close('popup-sign-up'); //???

          if (data.hasOwnProperty('open')) {
            switch (data.open) {
              case 'fpp':
                Popup.forgotPasswordProblem.open();
                break;

              case 'fpf':
                Popup.forgottenPasswordFast.open();
                break;
            }
          } else {
            var next = $registerForm.find('input[name="next"]');

            if (next.length > 0) {
              window.location = window.location.origin + window.location.pathname;
            } else {
              setTimeout(function () {
                Popup.emailVerificationSent();
              }, 250);
            }
          }
        } else {
          $registerForm.find('.form-submission-error span').html(data.message);
        }
      },
      error: function error(data, status) {
        $btnSubmitRegisterForm.removeClass('is-loading');
        console.error(data.responseText);

        if (data.responseText === 'Unconfirmed email address') {
          Popup.emailUnconfirmed();
        } else if (data.responseText === 'Password Reset Required') {
          Popup.forgotPassword(); //M.Modal.getInstance($('#reset-password-required')).open();
          //temporary fix until we have a new modal

          $('#password-holder .helper-text').html('You need to setup a new password to use the new Caterer website.');
        } else {
          failedAjax(data, status, 'loginForm');
          $btnSubmitRegisterForm.blur();
        }
      }
    });
    return false;
  }

  function verificationCheck() {
    var token = '?723aa82a83c278d5e7e7be9b109b406a=';

    if (window.location.href.indexOf(token) > 0) {
      var stateObj = {};
      history.replaceState(stateObj, document.title, location.protocol + '//' + location.host + location.pathname);
      micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show('popup-email-verified');
    }
  }

  verificationCheck();
})(jQuery); //TODO: refactor the existing user.js code down here


var userLogin = function userLogin() {
  var $email = document.getElementById('login-email-input').value;
  var $pwd = document.getElementById('login-password-input').value;
  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["checkIfUserAlreadyLoggedIn"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["jmgAjax"])({
    url: '/login',
    method: 'POST',
    data: {
      email: $email,
      password: $pwd
    },
    success: function success() {
      location.href = location.href;
    },
    fail: function fail() {
      console.log('loggin error');
    }
  }));
};
var passwordChange = function passwordChange() {
  var $pwd1 = document.getElementById('password_create').value;
  var $pwd2 = document.getElementById('password_confirmation_create').value;

  if ($pwd1 != $pwd2) {
    alert('Password and confirmation do not not match!');
    return false;
  }

  var $form = document.querySelector('#createPasswordForm');
  var url = $form.getAttribute('action');
  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["jmgAjax"])({
    url: url,
    method: 'POST',
    data: {
      password_field: $pwd1,
      password_confirmation: $pwd2
    },
    success: function success() {
      Popup.passwordChanged();
    },
    fail: function fail() {
      alert('Password update failed.');
    }
  });
};

/***/ }),

/***/ "./resources/twuae/scss/critical.scss":
/*!********************************************!*\
  !*** ./resources/twuae/scss/critical.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/main.scss":
/*!****************************************!*\
  !*** ./resources/twuae/scss/main.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-article.scss":
/*!******************************************************!*\
  !*** ./resources/twuae/scss/pages/page-article.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-author-single.scss":
/*!************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-author-single.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-casts-single.scss":
/*!***********************************************************!*\
  !*** ./resources/twuae/scss/pages/page-casts-single.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-category.scss":
/*!*******************************************************!*\
  !*** ./resources/twuae/scss/pages/page-category.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-competition-single.scss":
/*!*****************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-competition-single.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-competitions.scss":
/*!***********************************************************!*\
  !*** ./resources/twuae/scss/pages/page-competitions.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-contact.scss":
/*!******************************************************!*\
  !*** ./resources/twuae/scss/pages/page-contact.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-destination-single.scss":
/*!*****************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-destination-single.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-destinations.scss":
/*!***********************************************************!*\
  !*** ./resources/twuae/scss/pages/page-destinations.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-editions-archive.scss":
/*!***************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-editions-archive.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-events.scss":
/*!*****************************************************!*\
  !*** ./resources/twuae/scss/pages/page-events.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-features-list.scss":
/*!************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-features-list.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-home.scss":
/*!***************************************************!*\
  !*** ./resources/twuae/scss/pages/page-home.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-hub.scss":
/*!**************************************************!*\
  !*** ./resources/twuae/scss/pages/page-hub.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-incentive-single.scss":
/*!***************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-incentive-single.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-incentives.scss":
/*!*********************************************************!*\
  !*** ./resources/twuae/scss/pages/page-incentives.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-latest-edition.scss":
/*!*************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-latest-edition.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-media.scss":
/*!****************************************************!*\
  !*** ./resources/twuae/scss/pages/page-media.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-our-team.scss":
/*!*******************************************************!*\
  !*** ./resources/twuae/scss/pages/page-our-team.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-profile.scss":
/*!******************************************************!*\
  !*** ./resources/twuae/scss/pages/page-profile.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-report-single.scss":
/*!************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-report-single.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-reports.scss":
/*!******************************************************!*\
  !*** ./resources/twuae/scss/pages/page-reports.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-static.scss":
/*!*****************************************************!*\
  !*** ./resources/twuae/scss/pages/page-static.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-subscribe.scss":
/*!********************************************************!*\
  !*** ./resources/twuae/scss/pages/page-subscribe.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/twuae/scss/pages/page-supplement-editions.scss":
/*!******************************************************************!*\
  !*** ./resources/twuae/scss/pages/page-supplement-editions.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/twuae/js/main.js ./resources/twuae/scss/critical.scss ./resources/twuae/scss/main.scss ./resources/twuae/scss/pages/page-home.scss ./resources/twuae/scss/pages/page-category.scss ./resources/twuae/scss/pages/page-destinations.scss ./resources/twuae/scss/pages/page-destination-single.scss ./resources/twuae/scss/pages/page-events.scss ./resources/twuae/scss/pages/page-static.scss ./resources/twuae/scss/pages/page-article.scss ./resources/twuae/scss/pages/page-our-team.scss ./resources/twuae/scss/pages/page-author-single.scss ./resources/twuae/scss/pages/page-competitions.scss ./resources/twuae/scss/pages/page-competition-single.scss ./resources/twuae/scss/pages/page-contact.scss ./resources/twuae/scss/pages/page-latest-edition.scss ./resources/twuae/scss/pages/page-editions-archive.scss ./resources/twuae/scss/pages/page-supplement-editions.scss ./resources/twuae/scss/pages/page-subscribe.scss ./resources/twuae/scss/pages/page-profile.scss ./resources/twuae/scss/pages/page-media.scss ./resources/twuae/scss/pages/page-casts-single.scss ./resources/twuae/scss/pages/page-hub.scss ./resources/twuae/scss/pages/page-reports.scss ./resources/twuae/scss/pages/page-report-single.scss ./resources/twuae/scss/pages/page-features-list.scss ./resources/twuae/scss/pages/page-incentives.scss ./resources/twuae/scss/pages/page-incentive-single.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/js/main.js */"./resources/twuae/js/main.js");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/critical.scss */"./resources/twuae/scss/critical.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/main.scss */"./resources/twuae/scss/main.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-home.scss */"./resources/twuae/scss/pages/page-home.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-category.scss */"./resources/twuae/scss/pages/page-category.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-destinations.scss */"./resources/twuae/scss/pages/page-destinations.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-destination-single.scss */"./resources/twuae/scss/pages/page-destination-single.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-events.scss */"./resources/twuae/scss/pages/page-events.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-static.scss */"./resources/twuae/scss/pages/page-static.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-article.scss */"./resources/twuae/scss/pages/page-article.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-our-team.scss */"./resources/twuae/scss/pages/page-our-team.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-author-single.scss */"./resources/twuae/scss/pages/page-author-single.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-competitions.scss */"./resources/twuae/scss/pages/page-competitions.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-competition-single.scss */"./resources/twuae/scss/pages/page-competition-single.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-contact.scss */"./resources/twuae/scss/pages/page-contact.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-latest-edition.scss */"./resources/twuae/scss/pages/page-latest-edition.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-editions-archive.scss */"./resources/twuae/scss/pages/page-editions-archive.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-supplement-editions.scss */"./resources/twuae/scss/pages/page-supplement-editions.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-subscribe.scss */"./resources/twuae/scss/pages/page-subscribe.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-profile.scss */"./resources/twuae/scss/pages/page-profile.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-media.scss */"./resources/twuae/scss/pages/page-media.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-casts-single.scss */"./resources/twuae/scss/pages/page-casts-single.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-hub.scss */"./resources/twuae/scss/pages/page-hub.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-reports.scss */"./resources/twuae/scss/pages/page-reports.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-report-single.scss */"./resources/twuae/scss/pages/page-report-single.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-features-list.scss */"./resources/twuae/scss/pages/page-features-list.scss");
__webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-incentives.scss */"./resources/twuae/scss/pages/page-incentives.scss");
module.exports = __webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/scss/pages/page-incentive-single.scss */"./resources/twuae/scss/pages/page-incentive-single.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taWNyb21vZGFsL2Rpc3QvbWljcm9tb2RhbC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2NvcmUvanMvYmFzZXBvcHVwLmxpYi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY29yZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jb3JlL2pzL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9qbWctcG9wdXAubGliLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9tYWluLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvanMvc2VhcmNoYmFyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy90dy1nbG9iYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL2pzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvY3JpdGljYWwuc2Nzcz9hMjBmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL21haW4uc2Nzcz9mYjRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtYXJ0aWNsZS5zY3NzPzVmOWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1hdXRob3Itc2luZ2xlLnNjc3M/NzAzYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWNhc3RzLXNpbmdsZS5zY3NzP2U3NmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1jYXRlZ29yeS5zY3NzPzJjNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1jb21wZXRpdGlvbi1zaW5nbGUuc2Nzcz8zNTVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtY29tcGV0aXRpb25zLnNjc3M/NDcxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWNvbnRhY3Quc2Nzcz84OTJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtZGVzdGluYXRpb24tc2luZ2xlLnNjc3M/NDNkZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWRlc3RpbmF0aW9ucy5zY3NzP2JmNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1lZGl0aW9ucy1hcmNoaXZlLnNjc3M/NDEyYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWV2ZW50cy5zY3NzP2NhYzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1mZWF0dXJlcy1saXN0LnNjc3M/MTA5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWhvbWUuc2Nzcz9kY2ZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtaHViLnNjc3M/NDk4ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWluY2VudGl2ZS1zaW5nbGUuc2Nzcz9mY2U2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtaW5jZW50aXZlcy5zY3NzPzYwODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1sYXRlc3QtZWRpdGlvbi5zY3NzPzk3OGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1tZWRpYS5zY3NzP2U3YTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1vdXItdGVhbS5zY3NzPzhhYzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1wcm9maWxlLnNjc3M/NTNhOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLXJlcG9ydC1zaW5nbGUuc2Nzcz9mNzQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtcmVwb3J0cy5zY3NzPzIyYjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1zdGF0aWMuc2Nzcz85ZjA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2Utc3Vic2NyaWJlLnNjc3M/ZmQ2NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLXN1cHBsZW1lbnQtZWRpdGlvbnMuc2Nzcz83N2Q0Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIm8iLCJtaW5MZW4iLCJuIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIk1pY3JvTW9kYWwiLCJGT0NVU0FCTEVfRUxFTUVOVFMiLCJNb2RhbCIsIl9yZWYiLCJ0YXJnZXRNb2RhbCIsIl9yZWYkdHJpZ2dlcnMiLCJ0cmlnZ2VycyIsIl9yZWYkb25TaG93Iiwib25TaG93IiwiX3JlZiRvbkNsb3NlIiwib25DbG9zZSIsIl9yZWYkb3BlblRyaWdnZXIiLCJvcGVuVHJpZ2dlciIsIl9yZWYkY2xvc2VUcmlnZ2VyIiwiY2xvc2VUcmlnZ2VyIiwiX3JlZiRvcGVuQ2xhc3MiLCJvcGVuQ2xhc3MiLCJfcmVmJGRpc2FibGVTY3JvbGwiLCJkaXNhYmxlU2Nyb2xsIiwiX3JlZiRkaXNhYmxlRm9jdXMiLCJkaXNhYmxlRm9jdXMiLCJfcmVmJGF3YWl0Q2xvc2VBbmltYXQiLCJhd2FpdENsb3NlQW5pbWF0aW9uIiwiX3JlZiRhd2FpdE9wZW5BbmltYXRpIiwiYXdhaXRPcGVuQW5pbWF0aW9uIiwiX3JlZiRkZWJ1Z01vZGUiLCJkZWJ1Z01vZGUiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJyZWdpc3RlclRyaWdnZXJzIiwiYXBwbHkiLCJvbkNsaWNrIiwiYmluZCIsIm9uS2V5ZG93biIsInZhbHVlIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNob3dNb2RhbCIsIl90aGlzMiIsInVuZGVmaW5lZCIsImFjdGl2ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxCZWhhdmlvdXIiLCJhZGRFdmVudExpc3RlbmVycyIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0Rm9jdXNUb0ZpcnN0Tm9kZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImZvY3VzIiwicmVtb3ZlIiwiY2xvc2VNb2RhbEJ5SWQiLCJ0b2dnbGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImFzc2lnbiIsInN0eWxlIiwib3ZlcmZsb3ciLCJoYXNBdHRyaWJ1dGUiLCJrZXlDb2RlIiwicmV0YWluRm9jdXMiLCJnZXRGb2N1c2FibGVOb2RlcyIsIm5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJjb250YWlucyIsImZvY3VzZWRJdGVtSW5kZXgiLCJpbmRleE9mIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGl2ZU1vZGFsIiwiZ2VuZXJhdGVUcmlnZ2VyTWFwIiwidHJpZ2dlckF0dHIiLCJ0cmlnZ2VyTWFwIiwiYXR0cmlidXRlcyIsInB1c2giLCJ2YWxpZGF0ZU1vZGFsUHJlc2VuY2UiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uY2F0IiwidmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UiLCJ2YWxpZGF0ZUFyZ3MiLCJpbml0Iiwib3B0aW9ucyIsInNob3ciLCJjbG9zZSIsIndpbmRvdyIsInJ1bnRpbWUiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJlcnIiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiUHJvbWlzZSIsIm5leHQiLCJkb25lIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJCYXNlUG9wdXAiLCJwb3B1cElkIiwiZSIsInVybCIsIm15UmVxdWVzdCIsInN1Ym1pdEFjdGlvbiIsImZldGNoIiwicmVzcG9uc2UiLCJwb3B1cEVsIiwiYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMiLCJpc0Z1bmN0aW9uIiwiZm9ybVN1Ym1pdCIsImlzSUUxMSIsInRyaW1OdW1iZXJVbml0IiwicGFyc2VJbnQiLCJzdHIiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJocmVmIiwiZGVmYXVsdFZhTHVlIiwicmVnZXgiLCJyZXN1bHRzIiwiTnVtYmVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckxlbmd0aCIsInN0b3JhZ2UiLCJ4IiwiaW50ZXJ2YWwiLCJzdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsIkRhdGUiLCJwb3B1bGF0ZVN0b3JhZ2UiLCJyZXF1ZXN0IiwicmVzcCIsImhlYWRlcnMiLCJkYXRhIiwiZmluYWxEYXRhIiwibGFzdFVwZGF0ZWQiLCJpbWFnZUxhenlMb2FkZXIiLCJkZWNvZGVVUkkiLCJkIiwiZXhkYXlzIiwiZXhwaXJlcyIsImNuYW1lIiwiY2EiLCJjIiwiZ2V0Q29va2llIiwiJG5vZGUiLCJmb3VuZCIsImZ1bmN0aW9uVG9DaGVjayIsImZvcm1JbnB1dHMiLCJmb3JtRmllbGQiLCJlbCIsImZvcm1MYWJlbCIsImZpeEZvcm1GaWVsZEhlaWdodCIsImlzUmVzaXppbmciLCJ0aW1lciIsInByZWxvYWRlZCIsImJsb2NrcyIsImlzSW5WaWV3cG9ydCIsImltYWdlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImxvYWRDb21wb3NpdEltYWdlcyIsInN0YXJ0UmVzaXplVHJhY2tpbmciLCJsb2FkYWJsZUltYWdlcyIsImxvYWRPbmVJbWFnZSIsInByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzIiwidGhlSW1hZ2UiLCJnZXRFeHBlY3RlZEltYWdlU2l6ZSIsImltZyIsImxvYWRIUUltYWdlIiwidGhlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiaW1nSFEiLCJwcmVMb2FkTG93UXVhbGl0eUltYWdlIiwiaW1nVGFnIiwidGhlU3JjIiwiYm91bmRpbmciLCJlbGVtIiwiJGVsZW1lbnQiLCIkIiwiY2FsbGJhY2siLCIkbW9kYWwiLCIkbW9kYWxzIiwicmVzZXRNb2RhbEZvcm1FcnJvck1lc3NhZ2VzIiwiJGhlbHBlcnMiLCJlcnJvckZvcm0iLCJhY3Rpb24iLCIkYnV0dG9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImptZ0FqYXgiLCJhamF4IiwicHJvcGVydGllcyIsInN1Y2Nlc3MiLCJmYWlsIiwieGh0dHAiLCJwIiwiJGJ0bkxvYWRNb3JlIiwibG9hZE1vcmVGaW5pc2hlZEV2ZW50IiwibGFzdE9mZnNldCIsInRvdGFsIiwiY3VycmVudE51bWJlciIsIm5leHROdW1iZXIiLCIkYXBwZW5kVGFyZ2V0IiwiZ2VuZXJhdGVDbG9uZWRBcnRpY2xlV2l0aERhdGEiLCJzY3JvbGxUb3AiLCJnbG9iYWxTdGF0ZSIsImxhenlMb2FkSW1hZ2VzIiwiJHRlbXBsYXRlIiwiYXJ0aWNsZSIsIkptZ1BvcHVwIiwicGF0aCIsInVzZXJMb2dpbiIsInBhc3N3b3JkQ2hhbmdlIiwiJHdpbmRvdyIsIiRib2R5IiwiJG1haW5IZWFkZXIiLCIkbWFpbk5hdiIsIiRidG5Ub2dnbGVOYXYiLCIkbWVudVBhcmVudCIsIiRtYWluTmF2UGFyZW50TGluayIsIiRidG5Qcm9maWxlIiwiJGV4dHJhTWVudSIsIm1haW5IZWFkZXJPZmZzZXRUb3AiLCJtYWluSGVhZGVySGVpZ2h0IiwibWFpbk5hdk9mZnNldFRvcCIsIiR0aGlzIiwiaGVhZGVyTmF2RGlmZiIsIndpbmRvd05hdkRpZmYiLCJ0cmFuc2xhdGVWYWx1ZSIsIndpbmRvd1dpZHRoIiwic2VhcmNoQmFyVGltZW91dCIsInNlYXJjaEJhclZhbHVlIiwic2NyaXB0QWRkZWQiLCJzZWFyY2hDbGlja0V2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJ2aWV3IiwiJHNlYXJjaFRvZ2dsZUJ1dHRvbiIsIiRzZWFyY2hDb250YWluZXIiLCIkdG9wU2VhcmNoIiwiJGJ0bkNsb3NlU2VhcmNoIiwiJHBlcmZvcm1TZWFyY2giLCIkZ29vZ2xlU2VhcmNoRGl2IiwidG9nZ2xlU2VhcmNoIiwic2NyaXB0VGFnIiwic2VhcmNoVmFsIiwidG9TbmFrZUNhc2UiLCJkb1RhZ1NlYXJjaCIsImVsZW1lbnQiLCJzZWFyY2hUYXJnZXQiLCJzZWFyY2hUZXJtIiwic2Nyb2xsUGF1c2UiLCJzY3JlZW5TaXplcyIsInNtIiwic21kIiwibWQiLCJ4bWQiLCJsZyIsInhsZyIsInh4bGciLCJtYXhXaWR0aCIsImV4dGVybmFsTWF4V2lkdGgiLCIkYnRuU3VibWl0TG9naW5Gb3JtIiwiJHJlZ2lzdGVyRm9ybSIsIiRidG5TdWJtaXRSZWdpc3RlckZvcm0iLCIkYnRuTG9nb3V0IiwiY2hlY2tJZlVzZXJBbHJlYWR5TG9nZ2VkSW4iLCJtZW1iZXJSZWdpc3RyYXRpb24iLCIkbG9naW5Gb3JtIiwiZm9ybURhdGEiLCIkYnRuU3VibWl0IiwiZGF0YVR5cGUiLCJ0cmlnZ2VyR3RhZ0V2ZW50IiwiUG9wdXAiLCJmYWlsZWRBamF4IiwidG9rZW4iLCJzdGF0ZU9iaiIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInZlcmlmaWNhdGlvbkNoZWNrIiwiJGVtYWlsIiwiJHB3ZCIsImVtYWlsIiwicGFzc3dvcmQiLCIkcHdkMSIsIiRwd2QyIiwiYWxlcnQiLCIkZm9ybSIsInBhc3N3b3JkX2ZpZWxkIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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LENBQVY7QUFDQWxHLDBEQUFPLENBQUM7QUFDTjFGLE9BQUcsRUFERztBQUVOdkYsVUFBTSxFQUZBO0FBR051SCxRQUFJLEVBQUU7QUFBRTZKLG9CQUFjLEVBQWhCO0FBQXlCQywyQkFBcUIsRUFBRUo7QUFBaEQsS0FIQTtBQUlON0YsV0FBTyxFQUFFLG1CQUFXO0FBQ2xCaUYsV0FBSyxDQUFMQTtBQUxJO0FBT05oRixRQUFJLEVBQUUsZ0JBQVc7QUFDZjZGLFdBQUssQ0FBTEEseUJBQUssQ0FBTEE7QUFDRDtBQVRLLEdBQUQsQ0FBUGpHO0FBVEssRTs7Ozs7Ozs7Ozs7QUMvTFAseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL3R3dWFlL2pzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgTWljcm9Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXTtcblxuICB2YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGFsKF9yZWYpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IF9yZWYudGFyZ2V0TW9kYWwsXG4gICAgICAgICAgX3JlZiR0cmlnZ2VycyA9IF9yZWYudHJpZ2dlcnMsXG4gICAgICAgICAgdHJpZ2dlcnMgPSBfcmVmJHRyaWdnZXJzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkdHJpZ2dlcnMsXG4gICAgICAgICAgX3JlZiRvblNob3cgPSBfcmVmLm9uU2hvdyxcbiAgICAgICAgICBvblNob3cgPSBfcmVmJG9uU2hvdyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uU2hvdyxcbiAgICAgICAgICBfcmVmJG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2UsXG4gICAgICAgICAgb25DbG9zZSA9IF9yZWYkb25DbG9zZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uQ2xvc2UsXG4gICAgICAgICAgX3JlZiRvcGVuVHJpZ2dlciA9IF9yZWYub3BlblRyaWdnZXIsXG4gICAgICAgICAgb3BlblRyaWdnZXIgPSBfcmVmJG9wZW5UcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInIDogX3JlZiRvcGVuVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJGNsb3NlVHJpZ2dlciA9IF9yZWYuY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIGNsb3NlVHJpZ2dlciA9IF9yZWYkY2xvc2VUcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLWNsb3NlJyA6IF9yZWYkY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkb3BlbkNsYXNzID0gX3JlZi5vcGVuQ2xhc3MsXG4gICAgICAgICAgb3BlbkNsYXNzID0gX3JlZiRvcGVuQ2xhc3MgPT09IHZvaWQgMCA/ICdpcy1vcGVuJyA6IF9yZWYkb3BlbkNsYXNzLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZVNjcm9sbCA9IF9yZWYuZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gX3JlZiRkaXNhYmxlU2Nyb2xsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBfcmVmJGRpc2FibGVGb2N1cyA9IF9yZWYuZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIGRpc2FibGVGb2N1cyA9IF9yZWYkZGlzYWJsZUZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9IF9yZWYuYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uID0gX3JlZiRhd2FpdENsb3NlQW5pbWF0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCxcbiAgICAgICAgICBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPSBfcmVmLmF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdE9wZW5BbmltYXRpb24gPSBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdE9wZW5BbmltYXRpLFxuICAgICAgICAgIF9yZWYkZGVidWdNb2RlID0gX3JlZi5kZWJ1Z01vZGUsXG4gICAgICAgICAgZGVidWdNb2RlID0gX3JlZiRkZWJ1Z01vZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1Z01vZGU7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIG1vZGFsXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpOyAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXNzZWQgY29uZmlnXG5cbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBkZWJ1Z01vZGU6IGRlYnVnTW9kZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgb3BlblRyaWdnZXI6IG9wZW5UcmlnZ2VyLFxuICAgICAgICBjbG9zZVRyaWdnZXI6IGNsb3NlVHJpZ2dlcixcbiAgICAgICAgb3BlbkNsYXNzOiBvcGVuQ2xhc3MsXG4gICAgICAgIG9uU2hvdzogb25TaG93LFxuICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBhd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICBhd2FpdE9wZW5BbmltYXRpb246IGF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgZGlzYWJsZUZvY3VzOiBkaXNhYmxlRm9jdXNcbiAgICAgIH07IC8vIFJlZ2lzdGVyIGNsaWNrIGV2ZW50cyBvbmx5IGlmIHByZSBiaW5kaW5nIGV2ZW50TGlzdGVuZXJzXG5cbiAgICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMuYXBwbHkodGhpcywgX3RvQ29uc3VtYWJsZUFycmF5KHRyaWdnZXJzKSk7IC8vIHByZSBiaW5kIGZ1bmN0aW9ucyBmb3IgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb29wcyB0aHJvdWdoIGFsbCBvcGVuVHJpZ2dlcnMgYW5kIGJpbmRzIGNsaWNrIGV2ZW50XG4gICAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIFtBcnJheSBvZiBub2RlIGVsZW1lbnRzXVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgIGtleTogXCJyZWdpc3RlclRyaWdnZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJUcmlnZ2VycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJpZ2dlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgdHJpZ2dlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2Vycy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93TW9kYWwoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hvd01vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBfdGhpczIubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICBfdGhpczIuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uU2hvdyh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdmFyIG1vZGFsID0gdGhpcy5tb2RhbDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZW5hYmxlJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UodGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgb3BlbkNsYXNzID0gdGhpcy5jb25maWcub3BlbkNsYXNzOyAvLyA8LSBvbGQgc2Nob29sIGZ0d1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbEJ5SWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpO1xuICAgICAgICBpZiAodGhpcy5tb2RhbCkgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbEJlaGF2aW91clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbEJlaGF2aW91cih0b2dnbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlU2Nyb2xsKSByZXR1cm47XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgICAgIHN3aXRjaCAodG9nZ2xlKSB7XG4gICAgICAgICAgY2FzZSAnZW5hYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkaXNhYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZUV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSh0aGlzLmNvbmZpZy5jbG9zZVRyaWdnZXIpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpOyAvLyBlc2NcblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkgdGhpcy5yZXRhaW5Gb2N1cyhldmVudCk7IC8vIHRhYlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRGb2N1c2FibGVOb2Rlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzKSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRyaWVzIHRvIHNldCBmb2N1cyBvbiBhIG5vZGUgd2hpY2ggaXMgbm90IGEgY2xvc2UgdHJpZ2dlclxuICAgICAgICogaWYgbm8gb3RoZXIgbm9kZXMgZXhpc3QgdGhlbiBmb2N1c2VzIG9uIGZpcnN0IGNsb3NlIHRyaWdnZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEZvY3VzVG9GaXJzdE5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c1RvRmlyc3ROb2RlKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGlzYWJsZUZvY3VzKSByZXR1cm47XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyByZW1vdmUgbm9kZXMgb24gd2hvc2UgY2xpY2ssIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgICAgLy8gY291bGQgbm90IHRoaW5rIG9mIGEgYmV0dGVyIG5hbWUgOihcblxuICAgICAgICB2YXIgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoX3RoaXMzLmNvbmZpZy5jbG9zZVRyaWdnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID4gMCkgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0c1swXS5mb2N1cygpO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPT09IDApIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJldGFpbkZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmV0YWluRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWx0ZXJzIG5vZGVzIHdoaWNoIGFyZSBoaWRkZW4gdG8gcHJldmVudFxuICAgICAgICAgKiBmb2N1cyBsZWFrIG91dHNpZGUgbW9kYWxcbiAgICAgICAgICovXG5cbiAgICAgICAgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgICAgIH0pOyAvLyBpZiBkaXNhYmxlRm9jdXMgaXMgdHJ1ZVxuXG4gICAgICAgIGlmICghdGhpcy5tb2RhbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNhYmxlTm9kZXMubGVuZ3RoID4gMCAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIE1vZGFsIHByb3RvdHlwZSBlbmRzLlxuICAgKiBIZXJlIG9uIGNvZGUgaXMgcmVzcG9uc2libGUgZm9yIGRldGVjdGluZyBhbmRcbiAgICogYXV0byBiaW5kaW5nIGV2ZW50IGhhbmRsZXJzIG9uIG1vZGFsIHRyaWdnZXJzXG4gICAqL1xuICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcGVuZWQgbW9kYWxcblxuXG4gIHZhciBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCBpdCdzXG4gICAqIHJlc3BlY3RpdmUgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgICBBbiBhcnJheSBvZiBhbGwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0cmlnZ2VyQXR0ciBUaGUgZGF0YS1hdHRyaWJ1dGUgd2hpY2ggdHJpZ2dlcnMgdGhlIG1vZHVsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG5cbiAgdmFyIGdlbmVyYXRlVHJpZ2dlck1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2VycywgdHJpZ2dlckF0dHIpIHtcbiAgICB2YXIgdHJpZ2dlck1hcCA9IFtdO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IHRyaWdnZXIuYXR0cmlidXRlc1t0cmlnZ2VyQXR0cl0udmFsdWU7XG4gICAgICBpZiAodHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPT09IHVuZGVmaW5lZCkgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPSBbXTtcbiAgICAgIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdLnB1c2godHJpZ2dlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyaWdnZXJNYXA7XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgd2hldGhlciBhIG1vZGFsIG9mIHRoZSBnaXZlbiBpZCBleGlzdHNcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkICBUaGUgaWQgb2YgdGhlIG1vZGFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3U2VlbXMgbGlrZSB5b3UgaGF2ZSBtaXNzZWQgJWMnXCIuY29uY2F0KGlkLCBcIidcIiksICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGlkPVxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBhcmUgbW9kYWwgdHJpZ2dlcnMgcHJlc2VudFxuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBBbiBhcnJheSBvZiBkYXRhLXRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpIHtcbiAgICBpZiAodHJpZ2dlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ1wiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnZGF0YSBhdHRyaWJ1dGUuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1taWNyb21vZGFsLXRyaWdnZXI9XFxcIm15LW1vZGFsXFxcIj48L2E+XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0cmlnZ2VycyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBtb2RhbHNcbiAgICogYXJlIHByZXNlbnQgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICBBcnJheSBvZiBET00gbm9kZXMgd2hpY2ggaGF2ZSBkYXRhLXRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VyTWFwIEFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgdGhlaXIgdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVBcmdzID0gZnVuY3Rpb24gdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSB7XG4gICAgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpO1xuICAgIGlmICghdHJpZ2dlck1hcCkgcmV0dXJuIHRydWU7XG5cbiAgICBmb3IgKHZhciBpZCBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogQmluZHMgY2xpY2sgaGFuZGxlcnMgdG8gYWxsIG1vZGFsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KGNvbmZpZykge1xuICAgIC8vIENyZWF0ZSBhbiBjb25maWcgb2JqZWN0IHdpdGggZGVmYXVsdCBvcGVuVHJpZ2dlclxuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgb3BlblRyaWdnZXI6ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcidcbiAgICB9LCBjb25maWcpOyAvLyBDb2xsZWN0cyBhbGwgdGhlIG5vZGVzIHdpdGggdGhlIHRyaWdnZXJcblxuICAgIHZhciB0cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiLmNvbmNhdChvcHRpb25zLm9wZW5UcmlnZ2VyLCBcIl1cIikpKTsgLy8gTWFrZXMgYSBtYXBwaW5ncyBvZiBtb2RhbHMgd2l0aCB0aGVpciB0cmlnZ2VyIG5vZGVzXG5cblxuICAgIHZhciB0cmlnZ2VyTWFwID0gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCBvcHRpb25zLm9wZW5UcmlnZ2VyKTsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gRm9yIGV2ZXJ5IHRhcmdldCBtb2RhbCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHZhbHVlID0gdHJpZ2dlck1hcFtrZXldO1xuICAgICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IGtleTtcbiAgICAgIG9wdGlvbnMudHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWUpO1xuICAgICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvd3MgYSBwYXJ0aWN1bGFyIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gZGlzcGxheV1cbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW1RoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBwYXNzXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyh0YXJnZXRNb2RhbCwgY29uZmlnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBjb25maWcgfHwge307XG4gICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IHRhcmdldE1vZGFsOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UodGFyZ2V0TW9kYWwpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBjbGVhciBldmVudHMgaW4gY2FzZSBwcmV2aW91cyBtb2RhbCB3YXNuJ3QgY2xvc2VcblxuICAgIGlmIChhY3RpdmVNb2RhbCkgYWN0aXZlTW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTsgLy8gc3RvcmVzIHJlZmVyZW5jZSB0byBhY3RpdmUgbW9kYWxcblxuICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgYWN0aXZlTW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGNsb3NlXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKHRhcmdldE1vZGFsKSB7XG4gICAgdGFyZ2V0TW9kYWwgPyBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkgOiBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIHNob3c6IHNob3csXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59KCk7XG53aW5kb3cuTWljcm9Nb2RhbCA9IE1pY3JvTW9kYWw7XG5cbmV4cG9ydCBkZWZhdWx0IE1pY3JvTW9kYWw7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBhdHRhY2hFdmVudHNPbkZvcm1FbGVtZW50cyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIEJhc2VQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5pZCA9IHByb3BzLmlkID8gcHJvcHMuaWQgOiAnZGVmYXVsdC1wb3B1cCc7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIHNob3cocHJvcHMpIHtcbiAgICBjb25zdCBwb3B1cElkID0gcHJvcHMuaWQgPyBwcm9wcy5pZCA6IHRoaXMuaWQ7XG5cbiAgICBNaWNyb01vZGFsLnNob3cocG9wdXBJZCk7XG4gICAgdGhpcy5mZXRjaChwcm9wcyk7XG5cbiAgICBpZiAocHJvcHMuY2FsbGJhY2tGbikge1xuICAgICAgcHJvcHMuY2FsbGJhY2tGbigpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUocHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHBvcHVwSWQgPSBwcm9wcy5pZCA/IHByb3BzLmlkIDogdGhpcy5pZDtcbiAgICBjb25zdCBlID0gd2luZG93LmV2ZW50O1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBNaWNyb01vZGFsLmNsb3NlKHBvcHVwSWQpO1xuICAgIHRoaXMucmVtb3ZlUG9wdXBDb250ZW50cyhwb3B1cElkKTtcbiAgfVxuXG4gIHJlcGxhY2UocHJvcHMpIHtcbiAgICB0aGlzLmhpZGUocHJvcHMpO1xuICAgIHRoaXMuc2hvdyhwcm9wcyk7XG4gIH1cblxuICAvL1RPRE86IGltcGxlbWVudCBhIGxvY2FsU3RvcmFnZSBmZWF0dXJlIHRvIGF2b2lkIGhpdHRpbmcgdGhlIGVuZHBvaW50cyByZXBlYXRlZGx5XG4gIGZldGNoKHByb3BzKSB7XG4gICAgY29uc3QgdXJsID0gcHJvcHMucGF0aCA/IHByb3BzLnBhdGggOiAnL3BvcHVwLXJlbmRlci9sb2dpbic7XG4gICAgY29uc3QgcG9wdXBJZCA9IHByb3BzLmlkID8gcHJvcHMuaWQgOiB0aGlzLmlkO1xuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc3Qgc3VibWl0QWN0aW9uID0gcHJvcHMuc3VibWl0QWN0aW9uID8gcHJvcHMuc3VibWl0QWN0aW9uIDogbnVsbDtcblxuICAgIGZldGNoKG15UmVxdWVzdClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3Igb24gZmV0Y2hpbmcgJHt1cmx9ISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gYXR0YWNoaW5nUG9wdXBDb250ZW50cyhyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBwb3B1cEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9wdXBJZCkuY2hpbGROb2Rlc1sxXTtcblxuICAgICAgICBwb3B1cEVsLmlubmVySFRNTCA9IHJlc3BvbnNlLmh0bWw7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF0dGFjaEV2ZW50c09uRm9ybUVsZW1lbnRzKCcuZm9ybSBpbnB1dCwgLmZvcm0gdGV4dGFyZWEnKTtcblxuICAgICAgICAvLyBpZiB0aGVyZSdzIGEgc3VibWl0QWN0aW9uLCBhdHRhY2ggdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgaWYgKHN1Ym1pdEFjdGlvbiAmJiBpc0Z1bmN0aW9uKHN1Ym1pdEFjdGlvbikpIHtcbiAgICAgICAgICBjb25zdCBmb3JtU3VibWl0ID0gcG9wdXBFbC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuXG4gICAgICAgICAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIG9uRm9ybVN1Ym1pdChlKSB7XG4gICAgICAgICAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN1Ym1pdEFjdGlvbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVBvcHVwQ29udGVudHMocG9wdXBJZCkge1xuICAgIGNvbnN0IHBvcHVwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3B1cElkKS5jaGlsZE5vZGVzWzFdO1xuXG4gICAgcG9wdXBFbC5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUG9wdXA7XG4iLCIvL0F2YWlsYWJsZSBmb3IgYWxsIHByb2plY3RzXG5pbXBvcnQgeyBpbWFnZUxhenlMb2FkZXIgfSBmcm9tICcuL2ltYWdlTG9hZGVyJztcblxuZXhwb3J0IGNvbnN0IGlzSUUxMSA9ICgpID0+ICEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuZXhwb3J0IGNvbnN0IHRyaW1OdW1iZXJVbml0ID0gcyA9PiBwYXJzZUludChzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVGl0bGUoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJzogJylbMV0udHJpbSgpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UGFyYW1ldGVyQnlOYW1lID0gKG5hbWUsIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBkZWZhdWx0VmFMdWUgPSBudWxsKSA9PiB7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKTtcbiAgY29uc3QgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcblxuICBpZiAoIXJlc3VsdHMpIHJldHVybiBkZWZhdWx0VmFMdWU7XG4gIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xuXG4gIHJldHVybiBOdW1iZXIoZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzbmlwcGV0VGV4dChzdHIsIGNoYXJMZW5ndGggPSAxMjApIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKC9bXFxuXFxyXSsvZywgJyAnKVxuICAgIC5yZXBsYWNlKC9cXHN7Mix9L2csICcgJylcbiAgICAuc2xpY2UoMCwgY2hhckxlbmd0aClcbiAgICAudHJpbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIHZhciBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuLy9UT0RPOiB3cml0ZSB0ZXN0IGZvciB0aGlzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUZyb21TdG9yYWdlKHVybCwga2V5LCBpbnRlcnZhbCA9IDYwMDAwMCkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAvLyBpZiBkYXRhIG5vdCBvbiBzdG9yYWdlIG9yIGlmIGRhdGEgb2xkZXIgdGhhbiB0aGUgbGltaXQgKGRlZmF1bHQgMTBtaW4gaW4gbXMpIHBvcHVsYXRlIHN0b3JhZ2VcbiAgICBpZiAoXG4gICAgICAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKS5sYXN0VXBkYXRlZCArIE51bWJlcihpbnRlcnZhbCkgPCBEYXRlLm5vdygpXG4gICAgKSB7XG4gICAgICBhd2FpdCBwb3B1bGF0ZVN0b3JhZ2UodXJsLCBrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKS5kYXRhIDogbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBOTyBMT0NBTCBTVE9SQUdFIEFWQUlMQUJMRSBzbyBoaXQgdGhlIGVuZHBvaW50XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgIGNvbnN0IHJlc3AgPSBmZXRjaChyZXF1ZXN0LCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIGZhaWxlZCB0byBmZXRjaCB0aGUgdXJsOiAnLCB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKHVybCwga2V5KSB7XG4gIHRyeSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChyZXF1ZXN0LCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZmFpbGVkIHRvIGZldGNoIHRoZSB1cmw6ICcsIHVybCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AudGV4dCgpO1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IHtcbiAgICAgIGxhc3RVcGRhdGVkOiBEYXRlLm5vdygpLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGZpbmFsRGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBmYWlsZWQgdG8gZmV0Y2ggJyArIGtleSArICcgdXJsID0+ICcgKyB1cmwsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF6eUxvYWRJbWFnZXMoaW1hZ2VzKSB7XG4gIHJldHVybiBpbWFnZUxhenlMb2FkZXIoaW1hZ2VzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbShuYW1lKSB7XG4gIHZhciByZXN1bHRzID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJz0oW14mI10qKScpLmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBpZiAocmVzdWx0cyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGRlY29kZVVSSShyZXN1bHRzWzFdKSB8fCAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4ZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICB2YXIgZXhwaXJlcyA9ICdleHBpcmVzPScgKyBkLnRvVVRDU3RyaW5nKCk7XG4gIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgJz0nICsgY3ZhbHVlICsgJzsnICsgZXhwaXJlcyArICc7cGF0aD0vJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjbmFtZSkge1xuICB2YXIgbmFtZSA9IGNuYW1lICsgJz0nO1xuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjID0gY2FbaV07XG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Nvb2tpZShjbmFtZSkge1xuICB2YXIgdmFsdWUgPSBnZXRDb29raWUoY25hbWUpO1xuICBpZiAodmFsdWUgIT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOb2RlKCRub2RlLCBkYXRhKSB7XG4gICRub2RlLmh0bWwoZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U2l6ZUZyb21VcmwodXJsKSB7XG4gIGxldCBmb3VuZCA9ICcweDAnO1xuICBpZiAodHlwZW9mIHVybCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgIGxldCByZWdleCA9IC93XFw6KFswLTldKiksaFxcOihbMC05XSopL2c7XG4gICAgZm91bmQgPSB1cmwubWF0Y2gocmVnZXgpO1xuICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICBmb3VuZCA9IGZvdW5kWzBdO1xuICAgICAgZm91bmQgPSBmb3VuZC5zcGxpdCgnLCcpO1xuICAgICAgZm91bmQgPSBmb3VuZFswXS5yZXBsYWNlKCd3OicsICcnKSArICd4JyArIGZvdW5kWzFdLnJlcGxhY2UoJ2g6JywgJycpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLy8gaW1wbGllcyBodG1sIHN0cnVjdHVyZSBvZiAuZm9ybS1maWVsZCBhcyBhIHdyYXBwZXIgZm9yIGEgbGFiZWwgKyBpbnB1dFxuZXhwb3J0IGNvbnN0IGF0dGFjaEV2ZW50c09uRm9ybUVsZW1lbnRzID0gc2VsZWN0b3IgPT4ge1xuICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgLy8gYmluZCBpbnB1dCBldmVudHNcbiAgZm9ybUlucHV0cy5mb3JFYWNoKGVsID0+IHtcbiAgICBjb25zdCBmb3JtRmllbGQgPSBlbC5jbG9zZXN0KCcuZm9ybS1maWVsZCcpO1xuICAgIGNvbnN0IGZvcm1MYWJlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIGlucHV0Rm9jdXMoKSB7XG4gICAgICBpZiAoZm9ybUxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1sYWJlbCcpKSB7XG4gICAgICAgIGZvcm1MYWJlbC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiBpbnB1dEJsdXIoKSB7XG4gICAgICBpZiAoIXRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGlmIChmb3JtTGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWxhYmVsJykgJiYgZm9ybUxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICBmb3JtTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB0aGlzIGZpeGVzIHRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHdyYXBwZXIgaW4gY2FzZSB0aGUgbGFiZWwgaXMgdG9vIGxvbmdcbiAgICAvL1RPRE86IGNoZWNrIE11dGF0aW9uT2JzZXJ2ZXIgdG8gbGlzdGVuIHRvIGNzcyBjaGFuZ2VzIChhbmQgZHJvcCBwb3NzaWJsZSBvbiByZXNpemUgbGlzdGVuZXJzKVxuICAgIGlmIChmb3JtTGFiZWwgJiYgZm9ybUZpZWxkLmRhdGFzZXQuc3RybGVuID4gMzUpIHtcbiAgICAgIGZvcm1GaWVsZC5zdHlsZS5oZWlnaHQgPSBgJHtmb3JtTGFiZWwub2Zmc2V0SGVpZ2h0ICsgNX1weGA7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIGltcGxpZXMgaHRtbCBzdHJ1Y3R1cmUgb2YgLmZvcm0tZmllbGQgYXMgYSB3cmFwcGVyIGZvciBhIGxhYmVsICsgaW5wdXRcbmV4cG9ydCBjb25zdCBmaXhGb3JtRmllbGRIZWlnaHQgPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZm9ybUlucHV0cy5mb3JFYWNoKGVsID0+IHtcbiAgICBjb25zdCBmb3JtRmllbGQgPSBlbC5jbG9zZXN0KCcuZm9ybS1maWVsZCcpO1xuICAgIGNvbnN0IGZvcm1MYWJlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAvLyB0aGlzIGZpeGVzIHRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHdyYXBwZXIgaW4gY2FzZSB0aGUgbGFiZWwgaXMgdG9vIGxvbmdcbiAgICAvL1RPRE86IGNoZWNrIE11dGF0aW9uT2JzZXJ2ZXIgdG8gbGlzdGVuIHRvIGNzcyBjaGFuZ2VzIChhbmQgZHJvcCBwb3NzaWJsZSBvbiByZXNpemUgbGlzdGVuZXJzKVxuICAgIGlmIChmb3JtTGFiZWwgJiYgZm9ybUZpZWxkLmRhdGFzZXQuc3RybGVuID4gMzUpIHtcbiAgICAgIGZvcm1GaWVsZC5zdHlsZS5oZWlnaHQgPSBgJHtmb3JtTGFiZWwub2Zmc2V0SGVpZ2h0ICsgNX1weGA7XG4gICAgfVxuICB9KTtcbn07XG4iLCJsZXQgaXNSZXNpemluZyA9IGZhbHNlO1xubGV0IHRpbWVyID0gbnVsbDtcbmxldCBwcmVsb2FkZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc3RhcnRSZXNpemVUcmFja2luZygpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc1Jlc2l6aW5nID09IGZhbHNlKSB7XG4gICAgICBsZXQgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmddJyk7XG4gICAgICBibG9ja3MuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgIGlmIChpc0luVmlld3BvcnQoaW1hZ2UpKSB7XG4gICAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykgJiYgaW1hZ2Uuc3JjICE9ICcnICYmIGltYWdlLnNyYy5pbmRleE9mKCcvdHJhbnNwLnBuZycpID09IC0xKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWFnZS5zcmMgKyAnKSc7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1zaG93LWJhY2tncm91bmQnKSkge1xuICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdzdXBwb3J0LWJhY2tncm91bmQtZm9yLXJlc2l6ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSAnL2ltZy90cmFuc3AucG5nJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpc1Jlc2l6aW5nID0gdHJ1ZTtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dChcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpc1Jlc2l6aW5nID0gZmFsc2U7XG5cbiAgICAgICAgaW1hZ2VMYXp5TG9hZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJnXScpKTtcbiAgICAgIH0sXG4gICAgICA0NTAsXG4gICAgICBldmVudFxuICAgICk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VMYXp5TG9hZGVyKGxvYWRhYmxlSW1hZ2VzKSB7XG4gIGxvYWRDb21wb3NpdEltYWdlcygpO1xuICBpZiAodGltZXIgPT09IG51bGwpIHtcbiAgICBzdGFydFJlc2l6ZVRyYWNraW5nKCk7XG4gIH1cbiAgaWYgKGlzUmVzaXppbmcpIHtcbiAgICByZXR1cm4gbG9hZGFibGVJbWFnZXM7XG4gIH1cbiAgbG9hZGFibGVJbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgaWYgKGlzSW5WaWV3cG9ydChpbWFnZSkpIHtcbiAgICAgIGxvYWRPbmVJbWFnZShpbWFnZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoIXByZWxvYWRlZCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwcmVMb2FkTG93UXVhbGl0eUltYWdlcygpO1xuICAgIH0sIDI1MDApO1xuICAgIHByZWxvYWRlZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbG9hZGFibGVJbWFnZXM7XG59XG5cbmZ1bmN0aW9uIGxvYWRPbmVJbWFnZShpbWFnZSkge1xuICBsZXQgdGhlSW1hZ2UgPSBnZXRFeHBlY3RlZEltYWdlU2l6ZShpbWFnZSk7XG4gIGlmIChcbiAgICBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlU2l6ZScpICE9IHRoZUltYWdlIHx8XG4gICAgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykgJiYgaW1hZ2Uuc3JjLmluZGV4T2YoJ3RyYW5zcC5wbmcnKSA+IDApXG4gICkge1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVTaXplJywgdGhlSW1hZ2UpO1xuICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpKSB7XG4gICAgICBpZiAoaW1hZ2Uuc3JjID09ICcnKSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IHRoZUltYWdlO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtc2hvdy1iYWNrZ3JvdW5kJykpIHtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWcuc3JjICsgJyknO1xuICAgICAgICAgIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID09ICcnKSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IHRoZUltYWdlO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nLnNyYyArICcpJztcbiAgICAgICAgICBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXhwZWN0ZWRJbWFnZVNpemUoaW1hZ2UpIHtcbiAgbGV0IHRoZUltYWdlID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWJnJyk7XG4gIGxldCB0aGVTaXplID0gJyc7XG4gIC8vTk9UXG4gIGlmIChcbiAgICAhaW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlLXdyYXBwZXInKSAmJlxuICAgICFpbWFnZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnYWxwaGEtYXJ0aWNsZScpICYmXG4gICAgIWltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtZG9udC1yZXNpemUnKVxuICApIHtcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQoaW1hZ2UuY2xpZW50SGVpZ2h0KTtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludChpbWFnZS5jbGllbnRXaWR0aCk7XG4gICAgaWYgKHdpZHRoID09IDAgfHwgaGVpZ2h0ID09IDApIHtcbiAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICB0aGVTaXplID0gJ3c6JyArIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9pbiBjYXNlIGJvdGggYXJlIHplcm8gLSB3ZSBhdCBsZWFzdCB0cnlcbiAgICAgICAgaWYgKGhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gMzAwO1xuICAgICAgICB9XG4gICAgICAgIHRoZVNpemUgPSAnaDonICsgaGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGVTaXplID0gJ3c6JyArIHdpZHRoICsgJyxoOicgKyBoZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGVJbWFnZS5yZXBsYWNlKCdkcm9pZHMnLCB0aGVTaXplKTtcbiAgfVxuICAvL1RDXG4gIGlmIChpbWFnZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnaW1hZ2Utd3JhcHBlcicpIHx8IGltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbHBoYS1hcnRpY2xlJykpIHtcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQoaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQpO1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KGltYWdlLnBhcmVudE5vZGUuY2xpZW50V2lkdGgpO1xuICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSB7XG4gICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgICAgdGhlU2l6ZSA9ICd3OicgKyB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaW4gY2FzZSBib3RoIGFyZSB6ZXJvIC0gd2UgYXQgbGVhc3QgdHJ5XG4gICAgICAgIGlmIChoZWlnaHQgPT0gMCkge1xuICAgICAgICAgIGhlaWdodCA9IDMwMDtcbiAgICAgICAgfVxuICAgICAgICB0aGVTaXplID0gJ2g6JyArIGhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhlU2l6ZSA9ICd3OicgKyB3aWR0aCArICcsaDonICsgaGVpZ2h0O1xuICAgIH1cbiAgICB0aGVJbWFnZSA9IHRoZUltYWdlLnJlcGxhY2UoJ2Ryb2lkcycsIHRoZVNpemUpO1xuICB9XG4gIHJldHVybiB0aGVJbWFnZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKSB7XG4gIGlmIChcbiAgICBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKS5pbmRleE9mKCdxdWFsaXR5PXZhbHVlOjE1JykgPiAwIHx8XG4gICAgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykgJiYgaW1hZ2Uuc3JjLmluZGV4T2YoJ3RyYW5zcC5wbmcnKSA+IDApXG4gICkge1xuICAgIHZhciBpbWdIUSA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ0hRLnNyYyA9IHRoZUltYWdlLnJlcGxhY2UoJ3F1YWxpdHk9dmFsdWU6MTUnLCAncXVhbGl0eT12YWx1ZTo4NScpO1xuICAgIGltZ0hRLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1nSFEuc3JjO1xuICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1zaG93LWJhY2tncm91bmQnKSkge1xuICAgICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1cHBvcnQtYmFja2dyb3VuZC1mb3ItcmVzaXplJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWdIUS5zcmMgKyAnKSc7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVMb2FkTG93UXVhbGl0eUltYWdlcygpIHtcbiAgaWYgKGlzUmVzaXppbmcpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcHJlTG9hZExvd1F1YWxpdHlJbWFnZXMoKTtcbiAgICB9LCAyMDAwKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgbGV0IGxvYWRhYmxlSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmddJyk7XG4gIGxvYWRhYmxlSW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgIGlmIChpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPT0gJycgfHwgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykgJiYgaW1hZ2Uuc3JjID09ICcnKSkge1xuICAgICAgcHJlTG9hZExvd1F1YWxpdHlJbWFnZShpbWFnZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbXBvc2l0SW1hZ2VzKCkge1xuICBpZiAoaXNSZXNpemluZykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsb2FkQ29tcG9zaXRJbWFnZXMoKTtcbiAgICB9LCAyMDAwKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgbGV0IGxvYWRhYmxlSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3JjXScpO1xuICBsb2FkYWJsZUltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICBpZiAoaW1hZ2Uuc3JjID09ICcnKSB7XG4gICAgICBwcmVMb2FkTG93UXVhbGl0eUltYWdlKGltYWdlLCB0cnVlKTtcbiAgICAgIGltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVMb2FkTG93UXVhbGl0eUltYWdlKGltYWdlLCBpbWdUYWcpIHtcbiAgaWYgKGltZ1RhZyA9PT0gdHJ1ZSkge1xuICAgIGxldCB0aGVTcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgdGhlU3JjID0gdGhlU3JjLnJlcGxhY2UoJ3F1YWxpdHk9dmFsdWU6MTUnLCAncXVhbGl0eT12YWx1ZTo2MCcpO1xuICAgIGltYWdlLnNyYyA9IHRoZVNyYztcbiAgfSBlbHNlIHtcbiAgICBsZXQgdGhlSW1hZ2UgPSBnZXRFeHBlY3RlZEltYWdlU2l6ZShpbWFnZSk7XG4gICAgaWYgKGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZycpLmluZGV4T2YoJ3F1YWxpdHk9dmFsdWU6MTUnKSA+IDApIHtcbiAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2JsdXJUcmFuc2l0aW9uJyk7XG4gICAgfVxuICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpKSB7XG4gICAgICBpbWFnZS5zcmMgPSB0aGVJbWFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgdGhlSW1hZ2UgKyAnKSc7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5WaWV3cG9ydChlbGVtKSB7XG4gIHZhciBib3VuZGluZyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiAoXG4gICAgYm91bmRpbmcudG9wID49IC0zMjAgJiZcbiAgICBib3VuZGluZy5sZWZ0ID49IDAgJiZcbiAgICBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCArIDQ1MCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgNDUwKSAmJlxuICAgIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICk7XG59XG4iLCJpbXBvcnQgeyBsYXp5TG9hZEltYWdlcyB9IGZyb20gJy4uLy4uL2NvcmUvanMvaGVscGVycyc7XG5pbXBvcnQgeyBnbG9iYWxTdGF0ZSB9IGZyb20gJy4vdHctZ2xvYmFsLXN0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZVc2VyQWxyZWFkeUxvZ2dlZEluKGNhbGxiYWNrLCAkZWxlbWVudCA9IG51bGwpIHtcbiAgaWYgKCRlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgfVxuICAvLyBDaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpbiBhbHJlYWR5XG4gICQuZ2V0KCcvYXV0aC1jaGVjaycsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlICE9PSBmYWxzZSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRNb2RhbEZvcm1FcnJvck1lc3NhZ2VzKG1vZGFsKSB7XG4gIGNvbnN0ICRtb2RhbCA9ICQobW9kYWwpO1xuICAvLyBSZWN1cnNpdmUgdG8gdGFja2xlIGFsbCBtb2RhbHMgaWYgdGhlIG1vZGFsIGlzIGtpbGxlZCBieSBjbGlja2luZyBvbiB0aGUgdW5kZXJsYXkgKG9yIGlmIG5vIG1vZGFsIGVsZW0gcHJvdmlkZWQpXG4gIGlmICh0eXBlb2YgbW9kYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgJG1vZGFscyA9ICQoJy5tb2RhbCcpO1xuXG4gICAgJG1vZGFscy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgcmVzZXRNb2RhbEZvcm1FcnJvck1lc3NhZ2VzKCQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGVycm9yc1xuICBsZXQgJGhlbHBlcnMgPSAkbW9kYWwuZmluZCgnZm9ybSAuaGVscGVyLXRleHQnKTtcblxuICBpZiAoJGhlbHBlcnMubGVuZ3RoID4gMCkge1xuICAgICRoZWxwZXJzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5hdHRyKCdkYXRhLWVycm9yJywgJycpXG4gICAgICAgIC5hdHRyKCdkYXRhLXN1Y2Nlc3MnLCAnJylcbiAgICAgICAgLmh0bWwoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IGVycm9yRm9ybSA9IG51bGw7XG4gIGlmICgkbW9kYWwuZmluZCgnLmVycm9yTWVzc2FnZUNvbnRhaW5lcicpLmxlbmd0aCA+IDApIHtcbiAgICBlcnJvckZvcm0gPSAkbW9kYWwuZmluZCgnLmVycm9yTWVzc2FnZUNvbnRhaW5lcicpO1xuICB9IGVsc2UgaWYgKCRtb2RhbC5maW5kKCcuZXJyb3JNZXNzYWdlJykubGVuZ3RoID4gMCkge1xuICAgIGVycm9yRm9ybSA9ICRtb2RhbC5maW5kKCcuZXJyb3JNZXNzYWdlJyk7XG4gIH1cbiAgaWYgKGVycm9yRm9ybSAhPT0gbnVsbCkge1xuICAgIGVycm9yRm9ybS5odG1sKCcnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckd0YWdFdmVudCgkYnV0dG9uKSB7XG4gIGNvbnN0IGFjdGlvbiA9ICRidXR0b24uZGF0YSgnZ3RhZy1hY3Rpb24nKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSAkYnV0dG9uLmRhdGEoJ2d0YWctY2F0ZWdvcnknKTtcbiAgY29uc3QgbGFiZWwgPSAkYnV0dG9uLmRhdGEoJ2d0YWctbGFiZWwnKTtcbiAgaWYgKGFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIGNhdGVnb3J5ICE9PSB1bmRlZmluZWQgJiYgbGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgLy8gICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAvLyAgICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgIC8vICAgICB2YWx1ZTogMVxuICAgIC8vIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBqbWdBamF4ID0gcHJvcGVydGllcyA9PiB7XG4gIGlmICh0eXBlb2YgcHJvcGVydGllcyAhPSAnb2JqZWN0Jykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0luY29tbWluZyBwcm9wZXJ0aWVzIG11c3QgYmUgYW4gb2JqZWN0IG9yIGFycmF5Jyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghKCd1cmwnIGluIHByb3BlcnRpZXMpKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk9oIGNvbWUnb24gbm93Li4uIHdpdGhvdXQgYSBVUkwgcHJvcGVydHk/IHlvdSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbGV0IGFqYXggPSB7XG4gICAgdXJsOiBwcm9wZXJ0aWVzLnVybCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiBbXSxcbiAgICBzdWNjZXNzOiBudWxsLFxuICAgIGZhaWw6IG51bGxcbiAgfTtcbiAgaWYgKCdtZXRob2QnIGluIHByb3BlcnRpZXMpIHtcbiAgICBhamF4Lm1ldGhvZCA9IHByb3BlcnRpZXMubWV0aG9kO1xuICB9XG4gIGlmICgnZGF0YScgaW4gcHJvcGVydGllcykge1xuICAgIGFqYXguZGF0YSA9IHByb3BlcnRpZXMuZGF0YTtcbiAgfVxuICBpZiAoJ3N1Y2Nlc3MnIGluIHByb3BlcnRpZXMpIHtcbiAgICBhamF4LnN1Y2Nlc3MgPSBwcm9wZXJ0aWVzLnN1Y2Nlc3M7XG4gIH1cbiAgaWYgKCdmYWlsJyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgYWpheC5mYWlsID0gcHJvcGVydGllcy5mYWlsO1xuICB9XG4gIC8vQHRvZG8gdGhpcyBjYW4gYmUgcmVmYWN0b3JlZCB0byB0aGF0IGZldGNoIG9yIHdoYXRldmVyXG4gIC8vdGhpcyBub3cgYWxsb3dzIHVzIHRvIGhhdmUgdGhlIGFqYXggbG9naWMgaW4gb25lIHBsYWNlIGFuZCBoYXZlIHRoZSBzaW1wbGUgY2FsbGluZ1xuICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWpheC5zdWNjZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBhamF4LnN1Y2Nlc3MoeGh0dHAucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA+IDMwMCkge1xuICAgICAgICBpZiAodHlwZW9mIGFqYXguZmFpbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYWpheC5mYWlsKHhodHRwLnJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBsZXQgZGF0YSA9ICcnO1xuICAvL3NvIHdlIGFyZSBjaGVja2luZyB3aGV0aGVyIHdlJ3ZlIGdvdCBhIHN0cmluZyBvciBhbiBvYmplY3RcbiAgaWYgKHR5cGVvZiBhamF4LmRhdGEgPT0gJ3N0cmluZycpIHtcbiAgICBkYXRhID0gYWpheC5kYXRhO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGl0J3MgYW4gb2JqZWN0IHdlIGhhdmUgdG8gcGFyc2UgaXQuLi4gYnV0IGlmIGl0J3MgYSBGb3JtRGF0YSB3ZSBuZWVkIHRvIGRlYWwgd2l0aCBpdCBkaWZmZXJlbnRseVxuICAgIGlmIChhamF4LmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgZm9yICh2YXIgcCBvZiBhamF4LmRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgIT0gJycpIHtcbiAgICAgICAgICBkYXRhICs9ICcmJztcbiAgICAgICAgfVxuICAgICAgICBkYXRhICs9IHBbMF0gKyAnPScgKyBwWzFdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2dvb2Qgb2xkIG9yZGluYXJ5IG9iamVjdCA6KVxuICAgICAgT2JqZWN0LmtleXMoYWpheC5kYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9ICcnKSB7XG4gICAgICAgICAgZGF0YSArPSAnJic7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSArPSBrZXkgKyAnPScgKyBhamF4LmRhdGFba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHhodHRwLm9wZW4oYWpheC5tZXRob2QsIGFqYXgudXJsLCB0cnVlKTtcbiAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICB4aHR0cC5zZW5kKGRhdGEpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaExvYWRNb3JlQWN0aW9ucyhnbG9iYWxTdGF0ZSkge1xuICBjb25zdCAkYnRuTG9hZE1vcmUgPSAkKCcuanMtYnRuLWxvYWQtbW9yZScpO1xuICBjb25zdCBsb2FkTW9yZUZpbmlzaGVkRXZlbnQgPSBuZXcgRXZlbnQoJ2xvYWRNb3JlRmluaXNoZWQnKTtcblxuICAkYnRuTG9hZE1vcmUub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IGxhc3RPZmZzZXQgPSAkKCcuanMtYXJ0aWNsZS10ZW1wbGF0ZScpXG4gICAgICAubGFzdCgpXG4gICAgICAub2Zmc2V0KCkudG9wO1xuICAgIGNvbnN0IHRvdGFsID0gJGJ0bkxvYWRNb3JlLmF0dHIoJ2RhdGEtbGltaXQnKTtcbiAgICBjb25zdCBjdXJyZW50TnVtYmVyID0gJGJ0bkxvYWRNb3JlLmF0dHIoJ2RhdGEtcGFnZScpO1xuICAgIGNvbnN0IG5leHROdW1iZXIgPSBwYXJzZUludChjdXJyZW50TnVtYmVyKSArIDE7XG4gICAgY29uc3QgJGFwcGVuZFRhcmdldCA9ICQoJy5qcy1sb2FkbW9yZS10YXJnZXQnKTtcblxuICAgICRidG5Mb2FkTW9yZS5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuXG4gICAgaWYgKG5leHROdW1iZXIgPiB0b3RhbCkge1xuICAgICAgJGJ0bkxvYWRNb3JlLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gdXJsICsgJz9wYWdlPScgKyBuZXh0TnVtYmVyO1xuXG4gICAgICAkLmdldCh1cmwsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuYXJ0aWNsZXMgIT09IHVuZGVmaW5lZCAmJiBkYXRhLmFydGljbGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgJC5lYWNoKGRhdGEuYXJ0aWNsZXMsIGZ1bmN0aW9uKGluZGV4LCBhcnRpY2xlKSB7XG4gICAgICAgICAgICAkYXBwZW5kVGFyZ2V0LmFwcGVuZChnZW5lcmF0ZUNsb25lZEFydGljbGVXaXRoRGF0YShhcnRpY2xlKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJGJ0bkxvYWRNb3JlLmF0dHIoJ2RhdGEtbGltaXQnLCBkYXRhLmxhc3RfcGFnZSk7XG4gICAgICAgICRidG5Mb2FkTW9yZS5hdHRyKCdkYXRhLXBhZ2UnLCBuZXh0TnVtYmVyKTtcbiAgICAgICAgJGJ0bkxvYWRNb3JlLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGxvYWRNb3JlRmluaXNoZWRFdmVudCk7XG5cbiAgICAgICAgaWYgKG5leHROdW1iZXIgKyAxID4gdG90YWwpIHtcbiAgICAgICAgICAkYnRuTG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IGxhc3RPZmZzZXRcbiAgICAgICAgICB9LFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGdsb2JhbFN0YXRlLmxvYWRhYmxlSW1hZ2VzID0gbGF6eUxvYWRJbWFnZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmddJykpO1xuICAgICAgICB9LCAzNTApO1xuICAgICAgfSkuZmFpbChmdW5jdGlvbigpIHtcbiAgICAgICAgJGJ0bkxvYWRNb3JlLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgICRidG5Mb2FkTW9yZS5oaWRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDbG9uZWRBcnRpY2xlV2l0aERhdGEoYXJ0aWNsZSkge1xuICBsZXQgJHRlbXBsYXRlID0gJCgnLmpzLWFydGljbGUtdGVtcGxhdGUnKVxuICAgIC5maXJzdCgpXG4gICAgLmNsb25lKCk7XG5cbiAgLy9GSVhNRTogdGhlIGZvbGxvd2luZyB0aGluZ3MgbmVlZCB0byBiZSBjaGFuZ2VkLiBUaGUgZW5kcG9pbnQgc2hvdWxkIG9ubHkgcmV0dXJuIG9uZSBkZWZhdWx0IHNpemVcblxuICAkdGVtcGxhdGVcbiAgICAuZmluZCgnYSA+IGltZycpXG4gICAgLmZpcnN0KClcbiAgICAuYXR0cignc3JjJywgYXJ0aWNsZS50aHVtYm5haWwpO1xuICAkdGVtcGxhdGVcbiAgICAuZmluZCgnLmFydGljbGVTbmlwcGV0LXRpdGxlID4gYScpXG4gICAgLmZpcnN0KClcbiAgICAuaHRtbChhcnRpY2xlLnRpdGxlKTtcblxuICAkdGVtcGxhdGUuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLmF0dHIoJ2hyZWYnLCBhcnRpY2xlLmZ1bGxfc2x1Zyk7XG4gIH0pO1xuXG4gIHJldHVybiAkdGVtcGxhdGU7XG59XG4iLCJpbXBvcnQgQmFzZVBvcHVwIGZyb20gJy4uLy4uL2NvcmUvanMvYmFzZXBvcHVwLmxpYic7XG5pbXBvcnQgeyB1c2VyTG9naW4sIHBhc3N3b3JkQ2hhbmdlIH0gZnJvbSAnLi91c2VyJztcblxuLy9UT0RPOiBtYXliZSBjaGFuZ2UgdGhpcyBjbGFzcyBuYW1lIHRvIFRXUG9wb3AgKGlmL3doZW4gaXQgZ2V0cyB0b28gc3BlY2lmaWMpXG5jbGFzcyBKbWdQb3B1cCBleHRlbmRzIEJhc2VQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL2xvZ2luJywgc3VibWl0QWN0aW9uOiB1c2VyTG9naW4gfSk7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL3NpZ24tdXAnIH0pO1xuICB9XG5cbiAgY3JlYXRlUGFzc3dvcmQoKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL2NyZWF0ZS1wYXNzd29yZCcsIHN1Ym1pdEFjdGlvbjogcGFzc3dvcmRDaGFuZ2UgfSk7XG4gIH1cblxuICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvZm9yZ290LXBhc3N3b3JkJyB9KTtcbiAgfVxuXG4gIHBhc3N3b3JkQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvcGFzc3dvcmQtY2hhbmdlZCcgfSk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkUmVxdWlyZWQoKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL3Jlc2V0LXBhc3N3b3JkLXJlcXVpcmVkJyB9KTtcbiAgfVxuXG4gIGVtYWlsVmVyaWZpY2F0aW9uU2VudCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvdmVyaWZpY2F0aW9uLW1haWwtc2VudCcgfSk7XG4gIH1cblxuICBlbWFpbFZlcmlmaWVkKCkge1xuICAgIHN1cGVyLnNob3coeyBwYXRoOiAnL3BvcHVwLXJlbmRlci9lbWFpbC12ZXJpZmllZCcgfSk7XG4gIH1cblxuICBlbWFpbFZlcmlmaWNhdGlvbkZhaWxlZCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvZW1haWwtdmVyaWZpZWQtZmFpbGVkJyB9KTtcbiAgfVxuXG4gIGVtYWlsVW5jb25maXJtZWQoKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL2VtYWlsLXVuY29uZmlybWVkJyB9KTtcbiAgfVxuXG4gIHVwZGF0ZVN1Y2Nlc3NmdWwoKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL3VwZGF0ZS1zdWNjZXNzZnVsJyB9KTtcbiAgfVxuXG4gIC8vIGZhc3RTaWduVXAoKSB7XG4gIC8vICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL2Zhc3Qtc2lnbi11cCcgfSk7XG4gIC8vIH1cblxuICAvLyBmYXN0U3Vic2NyaWJlKCkge1xuICAvLyAgIHN1cGVyLnNob3coeyBwYXRoOiAnL3BvcHVwLXJlbmRlci9mYXN0LXN1YnNjcmliZScgfSk7XG4gIC8vIH1cblxuICBwYXl3YWxsKCkge1xuICAgIHN1cGVyLnNob3coeyBwYXRoOiAnL3BvcHVwLXJlbmRlci9wYXl3YWxsJyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKbWdQb3B1cDtcbiIsImltcG9ydCB7IGdsb2JhbFN0YXRlIH0gZnJvbSAnLi90dy1nbG9iYWwtc3RhdGUnO1xuXG4oZnVuY3Rpb24oJCkge1xuICAoJ3VzZSBzdHJpY3QnKTtcblxuICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgY29uc3QgJG1haW5IZWFkZXIgPSAkKCcuanMtbWFpbi1oZWFkZXInKTtcbiAgY29uc3QgJG1haW5OYXYgPSAkbWFpbkhlYWRlci5maW5kKCcuanMtbWFpbi1uYXYnKTtcbiAgY29uc3QgJGJ0blRvZ2dsZU5hdiA9ICQoJy5qcy1idG4tdG9nZ2xlLW1lbnUnKTtcbiAgY29uc3QgJG1lbnVQYXJlbnQgPSAkbWFpbk5hdi5maW5kKCcuanMtbWVudS1wYXJlbnQnKTtcbiAgY29uc3QgJG1haW5OYXZQYXJlbnRMaW5rID0gJG1haW5OYXYuZmluZCgnLmpzLW1lbnUtcGFyZW50ID4gYSwgLmpzLW1lbnUtcGFyZW50ID4gYnV0dG9uJyk7XG4gIGNvbnN0ICRidG5Qcm9maWxlID0gJCgnLmpzLWJ0bi1wcm9maWxlJyk7XG4gIGNvbnN0ICRleHRyYU1lbnUgPSAkKCcuanMtZXh0cmEtbWVudScpO1xuICBsZXQgbWFpbkhlYWRlck9mZnNldFRvcCA9ICRtYWluSGVhZGVyLm9mZnNldCgpLnRvcDtcbiAgbGV0IG1haW5IZWFkZXJIZWlnaHQgPSAkbWFpbkhlYWRlci5vdXRlckhlaWdodCgpO1xuICBsZXQgbWFpbk5hdk9mZnNldFRvcCA9ICRtYWluTmF2Lm9mZnNldCgpLnRvcDtcblxuICBpZiAoJHdpbmRvdy53aWR0aCgpIDwgOTgwKSB7XG4gICAgJG1lbnVQYXJlbnQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnaXMtY3VycmVudCcpKSB7XG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICR3aW5kb3cub24oJ3Njcm9sbCcsIGZpeEhlYWRlclBvcyk7XG5cbiAgLy8gRklYTUU6IHRoaXMgYmVoYXZlcyB0ZXJyaWJseSDwn6Sm8J+Pu+KAjeKZgu+4jy4gUmVmYWN0b3JcbiAgZnVuY3Rpb24gZml4SGVhZGVyUG9zKCkge1xuICAgIGlmICgkd2luZG93LnNjcm9sbFRvcCgpID49IG1haW5IZWFkZXJPZmZzZXRUb3AgJiYgISRib2R5Lmhhc0NsYXNzKCduby1zY3JvbGwnKSkge1xuICAgICAgJGJvZHkuYWRkQ2xhc3MoJ3N0aWNreS1uYXYnKTtcbiAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPCBnbG9iYWxTdGF0ZS5zY3JlZW5TaXplcy5sZykge1xuICAgICAgICAkYm9keS5jc3MoJ3BhZGRpbmctdG9wJywgbWFpbkhlYWRlckhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0ZJWE1FOiByZWZhY3RvciB0aGlzIHRvIG9ubHkgc2hvdyBzdGlja3kgbWVudSBvbiBsZyBpZiB5b3Ugc2Nyb2xsIHVwIHNvbWUgcGl4ZWxzIG90aGVyd2lzZSBoaWRkZW5cbiAgICAgICAgbGV0IGhlYWRlck5hdkRpZmYgPSBtYWluTmF2T2Zmc2V0VG9wIC0gbWFpbkhlYWRlck9mZnNldFRvcDtcbiAgICAgICAgbGV0IHdpbmRvd05hdkRpZmYgPSBtYWluTmF2T2Zmc2V0VG9wIC0gJHdpbmRvdy5zY3JvbGxUb3AoKSAtIGhlYWRlck5hdkRpZmY7XG4gICAgICAgIGxldCB0cmFuc2xhdGVWYWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKCR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gbWFpbk5hdk9mZnNldFRvcCkge1xuICAgICAgICAgIHRyYW5zbGF0ZVZhbHVlID0gLXdpbmRvd05hdkRpZmY7XG4gICAgICAgICAgaWYgKHdpbmRvd05hdkRpZmYgPCBoZWFkZXJOYXZEaWZmKSB7XG4gICAgICAgICAgICB0cmFuc2xhdGVWYWx1ZSA9IC1oZWFkZXJOYXZEaWZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmFuc2xhdGVWYWx1ZSA9IHdpbmRvd05hdkRpZmY7XG4gICAgICAgIH1cblxuICAgICAgICAkYm9keS5jc3MoJ3BhZGRpbmctdG9wJywgbWFpbkhlYWRlckhlaWdodCk7XG4gICAgICAgICRtYWluSGVhZGVyLmNzcygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtNTAlLCAke3RyYW5zbGF0ZVZhbHVlfXB4KWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcygnc3RpY2t5LW5hdicpLmNzcygncGFkZGluZy10b3AnLCAwKTtcbiAgICAgICRtYWluSGVhZGVyLmNzcygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtNTAlLCAwKWApO1xuICAgIH1cbiAgfVxuXG4gICR3aW5kb3cub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIG1haW5OYXZPZmZzZXRUb3AgPSAkbWFpbk5hdi5vZmZzZXQoKS50b3A7XG4gICAgbWFpbkhlYWRlckhlaWdodCA9ICRtYWluSGVhZGVyLm91dGVySGVpZ2h0KCk7XG5cbiAgICBpZiAoJHdpbmRvdy53aWR0aCgpID4gZ2xvYmFsU3RhdGUuc2NyZWVuU2l6ZXMubGcpIHtcbiAgICAgICRtZW51UGFyZW50LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkYnRuVG9nZ2xlTmF2Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkd2luZG93LndpZHRoKCkgPD0gZ2xvYmFsU3RhdGUuc2NyZWVuU2l6ZXMubGcpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJG1haW5OYXYudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgJGV4dHJhTWVudS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICAkbWFpbk5hdlBhcmVudExpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkd2luZG93LndpZHRoKCk7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLmxnKSB7XG4gICAgICBjb25zdCAkbWVudVBhcmVudCA9ICQodGhpcykucGFyZW50KCcuanMtbWVudS1wYXJlbnQnKTtcblxuICAgICAgaWYgKHdpbmRvd1dpZHRoIDwgZ2xvYmFsU3RhdGUuc2NyZWVuU2l6ZXMuc21kKSB7XG4gICAgICAgIGlmICgkbWVudVBhcmVudC5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAkbWVudVBhcmVudC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG1lbnVQYXJlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID49IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLnNtZCAmJiB3aW5kb3dXaWR0aCA8IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLnhtZCkge1xuICAgICAgICAkKCcuanMtbWVudS1wYXJlbnQuaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkbWVudVBhcmVudC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID49IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLnhtZCAmJiB3aW5kb3dXaWR0aCA8PSBnbG9iYWxTdGF0ZS5zY3JlZW5TaXplcy5sZykge1xuICAgICAgICAkbWVudVBhcmVudC5zaWJsaW5ncygnLmlzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJG1lbnVQYXJlbnQudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJGJ0blByb2ZpbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkd2luZG93LndpZHRoKCkgPCBnbG9iYWxTdGF0ZS5zY3JlZW5TaXplcy54bWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICRleHRyYU1lbnUudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJG1haW5OYXYucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJGJ0blRvZ2dsZU5hdi5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkYm9keS50b2dnbGVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgfVxuICB9KTtcblxuICAkZXh0cmFNZW51Lm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbigpIHtcbiAgICAkZXh0cmFNZW51LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG59KShqUXVlcnkpO1xuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQgSm1nUG9wdXAgZnJvbSAnLi9qbWctcG9wdXAubGliJztcbmltcG9ydCB7IGltYWdlTGF6eUxvYWRlciB9IGZyb20gJy4vLi4vLi4vY29yZS9qcy9pbWFnZUxvYWRlci5qcyc7XG5pbXBvcnQgeyBhdHRhY2hFdmVudHNPbkZvcm1FbGVtZW50cywgZml4Rm9ybUZpZWxkSGVpZ2h0IH0gZnJvbSAnLi8uLi8uLi9jb3JlL2pzL2hlbHBlcnMuanMnO1xuaW1wb3J0IHsgZ2xvYmFsU3RhdGUgfSBmcm9tICcuL3R3LWdsb2JhbC1zdGF0ZSc7XG5cbihmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICByZXF1aXJlKCcuL21haW4tbmF2Jyk7XG4gIHJlcXVpcmUoJy4vc2VhcmNoYmFyJyk7XG5cbiAgJCgnLmpzLWJ0bi1sYXRlc3QtYXJ0aWNsZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiBidG5MYXRlc3RBcnRpY2xlcygpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAkdGhpc1xuICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgLnNpYmxpbmdzKCcuYnRuJylcbiAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAkKCcuJyArIHRhcmdldClcbiAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgIC5zaWJsaW5ncygnLmpzLWxhdGVzdC1hcnRpY2xlcy1saXN0LmlzLWFjdGl2ZScpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICB9KTtcblxuICBNaWNyb01vZGFsLmluaXQoe1xuICAgIG9uU2hvdzogKCkgPT4ge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcbiAgICB9LFxuICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgfSxcbiAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlXG4gIH0pO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpKSB7XG4gICAgYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMoJy5mb3JtIGlucHV0LCAuZm9ybSB0ZXh0YXJlYScpO1xuICB9XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiByZXNpemVXaW5kb3dIYXBwZW5pbmcoKSB7XG4gICAgLy9UT0RPOiByZXZpc2l0IHRoaXMsIG1heWJlIHVzZSByeGpzIG9yIE11dGF0aW9uT2JzZXJ2ZXI/XG4gICAgZml4Rm9ybUZpZWxkSGVpZ2h0KCcuZm9ybSBpbnB1dCwgLmZvcm0gdGV4dGFyZWEnKTtcbiAgfSk7XG5cbiAgd2luZG93LlBvcHVwID0gbmV3IEptZ1BvcHVwKHsgaWQ6ICdnbG9iYWwtcG9wdXAnIH0pO1xuXG4gICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zY3JvbGxQYXVzZSkge1xuICAgICAgZ2xvYmFsU3RhdGUuc2Nyb2xsUGF1c2UgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUubG9hZGFibGVJbWFnZXMgPSBpbWFnZUxhenlMb2FkZXIoZ2xvYmFsU3RhdGUubG9hZGFibGVJbWFnZXMpO1xuICAgICAgICBnbG9iYWxTdGF0ZS5zY3JvbGxQYXVzZSA9IGZhbHNlO1xuICAgICAgfSwgMTI1KTtcbiAgICB9XG4gIH0pO1xuICBnbG9iYWxTdGF0ZS5sb2FkYWJsZUltYWdlcyA9IGltYWdlTGF6eUxvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKSk7XG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICBsZXQgc2VhcmNoQmFyVGltZW91dCA9IG51bGw7XG4gIGxldCBzZWFyY2hCYXJWYWx1ZSA9ICcnO1xuICBsZXQgc2NyaXB0QWRkZWQgPSBmYWxzZTtcbiAgbGV0IHNlYXJjaENsaWNrRXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgIHZpZXc6IHdpbmRvd1xuICB9KTtcbiAgY29uc3QgJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0ICRzZWFyY2hUb2dnbGVCdXR0b24gPSAkYm9keS5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLXNlYXJjaC10b2dnbGUnKTtcbiAgY29uc3QgJHNlYXJjaENvbnRhaW5lciA9ICRib2R5LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtY29udGFpbmVyJyk7XG4gIGNvbnN0ICR0b3BTZWFyY2ggPSAkc2VhcmNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgJGJ0bkNsb3NlU2VhcmNoID0gJHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtY2xvc2Utc2VhcmNoJyk7XG4gIGNvbnN0ICRwZXJmb3JtU2VhcmNoID0gJHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLXNlYXJjaCcpO1xuICBsZXQgJGdvb2dsZVNlYXJjaERpdiA9IG51bGw7XG5cbiAgY29uc3QgdG9nZ2xlU2VhcmNoID0gKCkgPT4ge1xuICAgICRzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG5cbiAgICBpZiAoJHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAkYm9keS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaXMtYWN0aXZlJyk7XG4gICAgICBpZiAoIXNjcmlwdEFkZGVkKSB7XG4gICAgICAgIGxldCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vY3NlLmdvb2dsZS5jb20vY3NlLmpzP2N4PTU2YWJlZGU2OGNiNWYwOGI1Jyk7XG4gICAgICAgICRzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcbiAgICAgICAgc2NyaXB0QWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtaXMtYWN0aXZlJyk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfTtcblxuICAkc2VhcmNoVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoKTtcbiAgJGJ0bkNsb3NlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoKTtcblxuICAvLyBBdHRhY2hlIHF1aWNrIHNlYXJjaCBmdW5jdGlvbmFsaXR5IHRvIHRoZSB0b3Agc2VhcmNoIGJhclxuICAkdG9wU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgJGdvb2dsZVNlYXJjaERpdiA9ICRnb29nbGVTZWFyY2hEaXYgfHwgJHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjX19fZ2NzZV8wJyk7XG4gIH0pO1xuICAkdG9wU2VhcmNoLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkge1xuICAgIHNlYXJjaEJhclZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgfTtcbiAgJHRvcFNlYXJjaC5vbmtleXVwID0gZnVuY3Rpb24oZSkge1xuICAgIGxldCBzZWFyY2hWYWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHNlYXJjaEJhclRpbWVvdXQpO1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gJyNnc2MudGFiPTAmZ3NjLnE9JyArIHRvU25ha2VDYXNlKHNlYXJjaFZhbCkgKyAnJmdzYy5wYWdlPTEnO1xuICAgICAgJGdvb2dsZVNlYXJjaERpdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoQmFyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnI2dzYy50YWI9MCZnc2MucT0nICsgdG9TbmFrZUNhc2Uoc2VhcmNoVmFsKSArICcmZ3NjLnBhZ2U9MSc7XG4gICAgICAgIGRvVGFnU2VhcmNoKCk7XG4gICAgICB9LCA4NTApO1xuICAgICAgJGdvb2dsZVNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgIGlmICghc2VhcmNoVmFsKSB7XG4gICAgICAgICRnb29nbGVTZWFyY2hEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gICRwZXJmb3JtU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gJyNnc2MudGFiPTAmZ3NjLnE9JyArIHRvU25ha2VDYXNlKCR0b3BTZWFyY2gudmFsdWUpICsgJyZnc2MucGFnZT0xJztcbiAgfSk7XG5cbiAgZG9jdW1lbnQub25rZXl1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiAkc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICRzZWFyY2hUb2dnbGVCdXR0b24uZGlzcGF0Y2hFdmVudChzZWFyY2hDbGlja0V2ZW50KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRvVGFnU2VhcmNoID0gKCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gJCgnI3RvcC1zZWFyY2gnKTtcbiAgICBsZXQgc2VhcmNoVGFyZ2V0ID0gJCgnLmpzLXF1aWNrLXNlYXJjaC10YXJnZXQnKTtcbiAgICBsZXQgc2VhcmNoVGVybSA9IGVsZW1lbnQudmFsKCk7XG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XG4gICAgICBzZWFyY2hUYXJnZXQuaHRtbCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaFRhcmdldC5odG1sKCc8aW1nIHNyYz1cIi9pbWcvbG9hZGluZy5naWZcIiBjbGFzcz1cImxvYWRpbmdcIj4nKTtcbiAgICAgIGZldGNoKCcvcXVpY2stc2VhcmNoLycgKyBzZWFyY2hUZXJtKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNlYXJjaFRhcmdldC5odG1sKGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvU25ha2VDYXNlID0gc3RyID0+XG4gICAgICBzdHIgJiZcbiAgICAgIHN0clxuICAgICAgICAgIC5tYXRjaCgvW0EtWl17Mix9KD89W0EtWl1bYS16XStbMC05XSp8XFxiKXxbQS1aXT9bYS16XStbMC05XSp8W0EtWl18WzAtOV0rL2cpXG4gICAgICAgICAgLm1hcCh4ID0+IHgudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAuam9pbignKycpO1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBnbG9iYWxTdGF0ZSA9IHtcbiAgbG9hZGFibGVJbWFnZXM6IG51bGwsXG4gIHNjcm9sbFBhdXNlOiBmYWxzZSxcbiAgc2NyZWVuU2l6ZXM6IHtcbiAgICBzbTogMzc1LFxuICAgIHNtZDogNjY3LFxuICAgIG1kOiA3NjgsXG4gICAgeG1kOiA5ODAsXG4gICAgbGc6IDEwMjQsXG4gICAgeGxnOiAxMTYwLFxuICAgIHh4bGc6IDEyNjAsXG4gICAgbWF4V2lkdGg6IDExMjAsXG4gICAgZXh0ZXJuYWxNYXhXaWR0aDogMTY0OFxuICB9XG59O1xuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQgeyBjaGVja0lmVXNlckFscmVhZHlMb2dnZWRJbiwgcmVzZXRNb2RhbEZvcm1FcnJvck1lc3NhZ2VzLCBqbWdBamF4IH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHRyaWdnZXJHdGFnRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4oZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyB0aGUgcG9wdXBzOlxuICAgKlxuICAgKiBHRVQ6IC9wb3B1cC1yZW5kZXIvbG9naW5cbiAgICogR0VUOiAvcG9wdXAtcmVuZGVyL3NpZ24tdXBcbiAgICogR0VUOiAvcG9wdXAtcmVuZGVyL2VtYWlsLXZlcmlmaWVkXG4gICAqIEdFVDogL3BvcHVwLXJlbmRlci92ZXJpZmljYXRpb24tbWFpbC1zZW50XG4gICAqXG4gICAqIEV4cGVjdGVkIHJlc3BvbnNlOlxuICAgKiB7XG4gICAqICAgIFwic3RhdHVzXCI6IHRydWUsXG4gICAqICAgIFwiaHRtbFwiOiBcIjxyYXcgaHRtbCBzdHJpbmc+PGhlcmU+XCJcbiAgICogfVxuICAgKlxuICAgKiAtIE9SIC1cbiAgICpcbiAgICogUmVzcG9uc2Ugc3RhdHVzIDQwNCB3aGVuIGNvdWxkbid0IGZpbmQgdGhlIHRlbXBsYXRlXG4gICAqL1xuXG4gIGNvbnN0ICRidG5TdWJtaXRMb2dpbkZvcm0gPSAkKCcuanMtc3VibWl0LWxvZ2luJyk7XG4gIGNvbnN0ICRyZWdpc3RlckZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJyk7XG4gIGNvbnN0ICRidG5TdWJtaXRSZWdpc3RlckZvcm0gPSAkKCcuanMtc3VibWl0LXJlZ2lzdGVyJyk7XG4gIGNvbnN0ICRidG5Mb2dvdXQgPSAkKCcuanMtYnRuLWxvZ291dCcpO1xuICBjb25zdCAkYnRuUHJvZmlsZSA9ICQoJy5qcy1idG4tcHJvZmlsZScpO1xuXG4gICRidG5TdWJtaXRMb2dpbkZvcm0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNoZWNrSWZVc2VyQWxyZWFkeUxvZ2dlZEluKG1lbWJlckxvZ2luLCAkKHRoaXMpKTtcbiAgfSk7XG5cbiAgJGJ0blN1Ym1pdFJlZ2lzdGVyRm9ybS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1lbWJlclJlZ2lzdHJhdGlvbigpO1xuICB9KTtcblxuICAkYnRuTG9nb3V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ291dCc7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1lbWJlckxvZ2luKCkge1xuICAgIGxldCAkbG9naW5Gb3JtID0gJCgnI2xvZ2luRm9ybScpO1xuICAgIGxldCBmb3JtRGF0YSA9ICRsb2dpbkZvcm0uc2VyaWFsaXplKCk7XG4gICAgY29uc3QgJGJ0blN1Ym1pdCA9ICQoJy5qcy1zdWJtaXQtbG9naW4nKTtcbiAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJGxvZ2luRm9ybS5wYXJlbnRzKCcubW9kYWwnKSk7XG5cbiAgICAkYnRuU3VibWl0LmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAkbG9naW5Gb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgIHRyaWdnZXJHdGFnRXZlbnQoJGJ0blN1Ym1pdCk7XG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdvcGVuJykpIHtcbiAgICAgICAgICBNaWNyb01vZGFsLmNsb3NlKCdwb3B1cC1sb2dpbicpO1xuICAgICAgICAgIHN3aXRjaCAoZGF0YS5vcGVuKSB7XG4gICAgICAgICAgICBjYXNlICdmcHAnOlxuICAgICAgICAgICAgICBQb3B1cC5mb3Jnb3RQYXNzd29yZFByb2JsZW0ub3BlbigpOyAvL1RPRE86IGRvZXMgaXQgYXBwbHkgZm9yIFRXP1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZwZic6XG4gICAgICAgICAgICAgIFBvcHVwLmZvcmdvdHRlblBhc3N3b3JkRmFzdC5vcGVuKCk7IC8vVE9ETzogZG9lcyBpdCBhcHBseSBmb3IgVFc/XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gJGxvZ2luRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibmV4dFwiXScpO1xuXG4gICAgICAgICAgaWYgKG5leHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUG9wdXAuZW1haWxWZXJpZmljYXRpb25TZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAkYnRuU3VibWl0LnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09ICdVbmNvbmZpcm1lZCBlbWFpbCBhZGRyZXNzJykge1xuICAgICAgICAgIFBvcHVwLmVtYWlsVW5jb25maXJtZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gJ1Bhc3N3b3JkIFJlc2V0IFJlcXVpcmVkJykge1xuICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkKCk7XG4gICAgICAgICAgLy9NLk1vZGFsLmdldEluc3RhbmNlKCQoJyNyZXNldC1wYXNzd29yZC1yZXF1aXJlZCcpKS5vcGVuKCk7XG4gICAgICAgICAgLy90ZW1wb3JhcnkgZml4IHVudGlsIHdlIGhhdmUgYSBuZXcgbW9kYWxcbiAgICAgICAgICAkKCcjcGFzc3dvcmQtaG9sZGVyIC5oZWxwZXItdGV4dCcpLmh0bWwoJ1lvdSBuZWVkIHRvIHNldHVwIGEgbmV3IHBhc3N3b3JkIHRvIHVzZSB0aGUgbmV3IENhdGVyZXIgd2Vic2l0ZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsZWRBamF4KGRhdGEsIHN0YXR1cywgJ2xvZ2luRm9ybScpO1xuICAgICAgICAgICRidG5TdWJtaXQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZW1iZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgbGV0ICRyZWdpc3RlckZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gJHJlZ2lzdGVyRm9ybS5zZXJpYWxpemUoKTtcbiAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJHJlZ2lzdGVyRm9ybS5wYXJlbnRzKCcubW9kYWwnKSk7XG5cbiAgICAkYnRuU3VibWl0UmVnaXN0ZXJGb3JtLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAkcmVnaXN0ZXJGb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICB0cmlnZ2VyR3RhZ0V2ZW50KCRidG5TdWJtaXRSZWdpc3RlckZvcm0pO1xuICAgICAgICAgIE1pY3JvTW9kYWwuc2hvdygncG9wdXAtc2lnbi11cCcpOyAvLz8/P1xuICAgICAgICAgIE1pY3JvTW9kYWwuY2xvc2UoJ3BvcHVwLXNpZ24tdXAnKTsgLy8/Pz9cbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnb3BlbicpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGEub3Blbikge1xuICAgICAgICAgICAgICBjYXNlICdmcHAnOlxuICAgICAgICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkUHJvYmxlbS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2ZwZic6XG4gICAgICAgICAgICAgICAgUG9wdXAuZm9yZ290dGVuUGFzc3dvcmRGYXN0Lm9wZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9ICRyZWdpc3RlckZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm5leHRcIl0nKTtcbiAgICAgICAgICAgIGlmIChuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgUG9wdXAuZW1haWxWZXJpZmljYXRpb25TZW50KCk7XG4gICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRyZWdpc3RlckZvcm0uZmluZCgnLmZvcm0tc3VibWlzc2lvbi1lcnJvciBzcGFuJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAkYnRuU3VibWl0UmVnaXN0ZXJGb3JtLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09ICdVbmNvbmZpcm1lZCBlbWFpbCBhZGRyZXNzJykge1xuICAgICAgICAgIFBvcHVwLmVtYWlsVW5jb25maXJtZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gJ1Bhc3N3b3JkIFJlc2V0IFJlcXVpcmVkJykge1xuICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkKCk7XG4gICAgICAgICAgLy9NLk1vZGFsLmdldEluc3RhbmNlKCQoJyNyZXNldC1wYXNzd29yZC1yZXF1aXJlZCcpKS5vcGVuKCk7XG4gICAgICAgICAgLy90ZW1wb3JhcnkgZml4IHVudGlsIHdlIGhhdmUgYSBuZXcgbW9kYWxcbiAgICAgICAgICAkKCcjcGFzc3dvcmQtaG9sZGVyIC5oZWxwZXItdGV4dCcpLmh0bWwoJ1lvdSBuZWVkIHRvIHNldHVwIGEgbmV3IHBhc3N3b3JkIHRvIHVzZSB0aGUgbmV3IENhdGVyZXIgd2Vic2l0ZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsZWRBamF4KGRhdGEsIHN0YXR1cywgJ2xvZ2luRm9ybScpO1xuICAgICAgICAgICRidG5TdWJtaXRSZWdpc3RlckZvcm0uYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZmljYXRpb25DaGVjaygpIHtcbiAgICBsZXQgdG9rZW4gPSAnPzcyM2FhODJhODNjMjc4ZDVlN2U3YmU5YjEwOWI0MDZhPSc7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YodG9rZW4pID4gMCkge1xuICAgICAgbGV0IHN0YXRlT2JqID0ge307XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZU9iaiwgZG9jdW1lbnQudGl0bGUsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICBNaWNyb01vZGFsLnNob3coJ3BvcHVwLWVtYWlsLXZlcmlmaWVkJyk7XG4gICAgfVxuICB9XG5cbiAgdmVyaWZpY2F0aW9uQ2hlY2soKTtcbn0pKGpRdWVyeSk7XG5cbi8vVE9ETzogcmVmYWN0b3IgdGhlIGV4aXN0aW5nIHVzZXIuanMgY29kZSBkb3duIGhlcmVcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAoKSA9PiB7XG4gIGxldCAkZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZW1haWwtaW5wdXQnKS52YWx1ZTtcbiAgbGV0ICRwd2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcGFzc3dvcmQtaW5wdXQnKS52YWx1ZTtcbiAgY2hlY2tJZlVzZXJBbHJlYWR5TG9nZ2VkSW4oXG4gICAgam1nQWpheCh7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7IGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcHdkIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW4gZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkQ2hhbmdlID0gKCkgPT4ge1xuICBsZXQgJHB3ZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRfY3JlYXRlJykudmFsdWU7XG4gIGxldCAkcHdkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZF9jb25maXJtYXRpb25fY3JlYXRlJykudmFsdWU7XG4gIGlmICgkcHdkMSAhPSAkcHdkMikge1xuICAgIGFsZXJ0KCdQYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIGRvIG5vdCBub3QgbWF0Y2ghJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0ICRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVBhc3N3b3JkRm9ybScpO1xuICBsZXQgdXJsID0gJGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgam1nQWpheCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeyBwYXNzd29yZF9maWVsZDogJHB3ZDEsIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJHB3ZDIgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIFBvcHVwLnBhc3N3b3JkQ2hhbmdlZCgpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICBhbGVydCgnUGFzc3dvcmQgdXBkYXRlIGZhaWxlZC4nKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=