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
    if ($window.scrollTop() >= mainHeaderOffsetTop) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taWNyb21vZGFsL2Rpc3QvbWljcm9tb2RhbC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2NvcmUvanMvYmFzZXBvcHVwLmxpYi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY29yZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jb3JlL2pzL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9qbWctcG9wdXAubGliLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9tYWluLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvanMvc2VhcmNoYmFyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy90dy1nbG9iYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL2pzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvY3JpdGljYWwuc2Nzcz9hMjBmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL21haW4uc2Nzcz9mYjRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtYXJ0aWNsZS5zY3NzPzVmOWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1hdXRob3Itc2luZ2xlLnNjc3M/NzAzYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWNhc3RzLXNpbmdsZS5zY3NzP2U3NmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1jYXRlZ29yeS5zY3NzPzJjNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1jb21wZXRpdGlvbi1zaW5nbGUuc2Nzcz8zNTVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtY29tcGV0aXRpb25zLnNjc3M/NDcxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWNvbnRhY3Quc2Nzcz84OTJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtZGVzdGluYXRpb24tc2luZ2xlLnNjc3M/NDNkZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWRlc3RpbmF0aW9ucy5zY3NzP2JmNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1lZGl0aW9ucy1hcmNoaXZlLnNjc3M/NDEyYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWV2ZW50cy5zY3NzP2NhYzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1mZWF0dXJlcy1saXN0LnNjc3M/MTA5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWhvbWUuc2Nzcz9kY2ZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtaHViLnNjc3M/NDk4ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLWluY2VudGl2ZS1zaW5nbGUuc2Nzcz9mY2U2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtaW5jZW50aXZlcy5zY3NzPzYwODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1sYXRlc3QtZWRpdGlvbi5zY3NzPzk3OGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1tZWRpYS5zY3NzP2U3YTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1vdXItdGVhbS5zY3NzPzhhYzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1wcm9maWxlLnNjc3M/NTNhOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLXJlcG9ydC1zaW5nbGUuc2Nzcz9mNzQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2UtcmVwb3J0cy5zY3NzPzIyYjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3R3dWFlL3Njc3MvcGFnZXMvcGFnZS1zdGF0aWMuc2Nzcz85ZjA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9zY3NzL3BhZ2VzL3BhZ2Utc3Vic2NyaWJlLnNjc3M/ZmQ2NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvc2Nzcy9wYWdlcy9wYWdlLXN1cHBsZW1lbnQtZWRpdGlvbnMuc2Nzcz83N2Q0Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIm8iLCJtaW5MZW4iLCJuIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIk1pY3JvTW9kYWwiLCJGT0NVU0FCTEVfRUxFTUVOVFMiLCJNb2RhbCIsIl9yZWYiLCJ0YXJnZXRNb2RhbCIsIl9yZWYkdHJpZ2dlcnMiLCJ0cmlnZ2VycyIsIl9yZWYkb25TaG93Iiwib25TaG93IiwiX3JlZiRvbkNsb3NlIiwib25DbG9zZSIsIl9yZWYkb3BlblRyaWdnZXIiLCJvcGVuVHJpZ2dlciIsIl9yZWYkY2xvc2VUcmlnZ2VyIiwiY2xvc2VUcmlnZ2VyIiwiX3JlZiRvcGVuQ2xhc3MiLCJvcGVuQ2xhc3MiLCJfcmVmJGRpc2FibGVTY3JvbGwiLCJkaXNhYmxlU2Nyb2xsIiwiX3JlZiRkaXNhYmxlRm9jdXMiLCJkaXNhYmxlRm9jdXMiLCJfcmVmJGF3YWl0Q2xvc2VBbmltYXQiLCJhd2FpdENsb3NlQW5pbWF0aW9uIiwiX3JlZiRhd2FpdE9wZW5BbmltYXRpIiwiYXdhaXRPcGVuQW5pbWF0aW9uIiwiX3JlZiRkZWJ1Z01vZGUiLCJkZWJ1Z01vZGUiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJyZWdpc3RlclRyaWdnZXJzIiwiYXBwbHkiLCJvbkNsaWNrIiwiYmluZCIsIm9uS2V5ZG93biIsInZhbHVlIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNob3dNb2RhbCIsIl90aGlzMiIsInVuZGVmaW5lZCIsImFjdGl2ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxCZWhhdmlvdXIiLCJhZGRFdmVudExpc3RlbmVycyIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0Rm9jdXNUb0ZpcnN0Tm9kZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImZvY3VzIiwicmVtb3ZlIiwiY2xvc2VNb2RhbEJ5SWQiLCJ0b2dnbGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImFzc2lnbiIsInN0eWxlIiwib3ZlcmZsb3ciLCJoYXNBdHRyaWJ1dGUiLCJrZXlDb2RlIiwicmV0YWluRm9jdXMiLCJnZXRGb2N1c2FibGVOb2RlcyIsIm5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJjb250YWlucyIsImZvY3VzZWRJdGVtSW5kZXgiLCJpbmRleE9mIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGl2ZU1vZGFsIiwiZ2VuZXJhdGVUcmlnZ2VyTWFwIiwidHJpZ2dlckF0dHIiLCJ0cmlnZ2VyTWFwIiwiYXR0cmlidXRlcyIsInB1c2giLCJ2YWxpZGF0ZU1vZGFsUHJlc2VuY2UiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uY2F0IiwidmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UiLCJ2YWxpZGF0ZUFyZ3MiLCJpbml0Iiwib3B0aW9ucyIsInNob3ciLCJjbG9zZSIsIndpbmRvdyIsInJ1bnRpbWUiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJlcnIiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiUHJvbWlzZSIsIm5leHQiLCJkb25lIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJCYXNlUG9wdXAiLCJwb3B1cElkIiwiZSIsInVybCIsIm15UmVxdWVzdCIsInN1Ym1pdEFjdGlvbiIsImZldGNoIiwicmVzcG9uc2UiLCJwb3B1cEVsIiwiYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMiLCJpc0Z1bmN0aW9uIiwiZm9ybVN1Ym1pdCIsImlzSUUxMSIsInRyaW1OdW1iZXJVbml0IiwicGFyc2VJbnQiLCJzdHIiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJocmVmIiwiZGVmYXVsdFZhTHVlIiwicmVnZXgiLCJyZXN1bHRzIiwiTnVtYmVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckxlbmd0aCIsInN0b3JhZ2UiLCJ4IiwiaW50ZXJ2YWwiLCJzdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsIkRhdGUiLCJwb3B1bGF0ZVN0b3JhZ2UiLCJyZXF1ZXN0IiwicmVzcCIsImhlYWRlcnMiLCJkYXRhIiwiZmluYWxEYXRhIiwibGFzdFVwZGF0ZWQiLCJpbWFnZUxhenlMb2FkZXIiLCJkZWNvZGVVUkkiLCJkIiwiZXhkYXlzIiwiZXhwaXJlcyIsImNuYW1lIiwiY2EiLCJjIiwiZ2V0Q29va2llIiwiJG5vZGUiLCJmb3VuZCIsImZ1bmN0aW9uVG9DaGVjayIsImZvcm1JbnB1dHMiLCJmb3JtRmllbGQiLCJlbCIsImZvcm1MYWJlbCIsImZpeEZvcm1GaWVsZEhlaWdodCIsImlzUmVzaXppbmciLCJ0aW1lciIsInByZWxvYWRlZCIsImJsb2NrcyIsImlzSW5WaWV3cG9ydCIsImltYWdlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImxvYWRDb21wb3NpdEltYWdlcyIsInN0YXJ0UmVzaXplVHJhY2tpbmciLCJsb2FkYWJsZUltYWdlcyIsImxvYWRPbmVJbWFnZSIsInByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzIiwidGhlSW1hZ2UiLCJnZXRFeHBlY3RlZEltYWdlU2l6ZSIsImltZyIsImxvYWRIUUltYWdlIiwidGhlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiaW1nSFEiLCJwcmVMb2FkTG93UXVhbGl0eUltYWdlIiwiaW1nVGFnIiwidGhlU3JjIiwiYm91bmRpbmciLCJlbGVtIiwiJGVsZW1lbnQiLCIkIiwiY2FsbGJhY2siLCIkbW9kYWwiLCIkbW9kYWxzIiwicmVzZXRNb2RhbEZvcm1FcnJvck1lc3NhZ2VzIiwiJGhlbHBlcnMiLCJlcnJvckZvcm0iLCJhY3Rpb24iLCIkYnV0dG9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImptZ0FqYXgiLCJhamF4IiwicHJvcGVydGllcyIsInN1Y2Nlc3MiLCJmYWlsIiwieGh0dHAiLCJwIiwiJGJ0bkxvYWRNb3JlIiwibG9hZE1vcmVGaW5pc2hlZEV2ZW50IiwibGFzdE9mZnNldCIsInRvdGFsIiwiY3VycmVudE51bWJlciIsIm5leHROdW1iZXIiLCIkYXBwZW5kVGFyZ2V0IiwiZ2VuZXJhdGVDbG9uZWRBcnRpY2xlV2l0aERhdGEiLCJzY3JvbGxUb3AiLCJnbG9iYWxTdGF0ZSIsImxhenlMb2FkSW1hZ2VzIiwiJHRlbXBsYXRlIiwiYXJ0aWNsZSIsIkptZ1BvcHVwIiwicGF0aCIsInVzZXJMb2dpbiIsInBhc3N3b3JkQ2hhbmdlIiwiJHdpbmRvdyIsIiRib2R5IiwiJG1haW5IZWFkZXIiLCIkbWFpbk5hdiIsIiRidG5Ub2dnbGVOYXYiLCIkbWVudVBhcmVudCIsIiRtYWluTmF2UGFyZW50TGluayIsIiRidG5Qcm9maWxlIiwiJGV4dHJhTWVudSIsIm1haW5IZWFkZXJPZmZzZXRUb3AiLCJtYWluSGVhZGVySGVpZ2h0IiwibWFpbk5hdk9mZnNldFRvcCIsIiR0aGlzIiwiaGVhZGVyTmF2RGlmZiIsIndpbmRvd05hdkRpZmYiLCJ0cmFuc2xhdGVWYWx1ZSIsIndpbmRvd1dpZHRoIiwic2VhcmNoQmFyVGltZW91dCIsInNlYXJjaEJhclZhbHVlIiwic2NyaXB0QWRkZWQiLCJzZWFyY2hDbGlja0V2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJ2aWV3IiwiJHNlYXJjaFRvZ2dsZUJ1dHRvbiIsIiRzZWFyY2hDb250YWluZXIiLCIkdG9wU2VhcmNoIiwiJGJ0bkNsb3NlU2VhcmNoIiwiJHBlcmZvcm1TZWFyY2giLCIkZ29vZ2xlU2VhcmNoRGl2IiwidG9nZ2xlU2VhcmNoIiwic2NyaXB0VGFnIiwic2VhcmNoVmFsIiwidG9TbmFrZUNhc2UiLCJkb1RhZ1NlYXJjaCIsImVsZW1lbnQiLCJzZWFyY2hUYXJnZXQiLCJzZWFyY2hUZXJtIiwic2Nyb2xsUGF1c2UiLCJzY3JlZW5TaXplcyIsInNtIiwic21kIiwibWQiLCJ4bWQiLCJsZyIsInhsZyIsInh4bGciLCJtYXhXaWR0aCIsImV4dGVybmFsTWF4V2lkdGgiLCIkYnRuU3VibWl0TG9naW5Gb3JtIiwiJHJlZ2lzdGVyRm9ybSIsIiRidG5TdWJtaXRSZWdpc3RlckZvcm0iLCIkYnRuTG9nb3V0IiwiY2hlY2tJZlVzZXJBbHJlYWR5TG9nZ2VkSW4iLCJtZW1iZXJSZWdpc3RyYXRpb24iLCIkbG9naW5Gb3JtIiwiZm9ybURhdGEiLCIkYnRuU3VibWl0IiwiZGF0YVR5cGUiLCJ0cmlnZ2VyR3RhZ0V2ZW50IiwiUG9wdXAiLCJmYWlsZWRBamF4IiwidG9rZW4iLCJzdGF0ZU9iaiIsImhpc3RvcnkiLCJsb2NhdGlvbiIsInZlcmlmaWNhdGlvbkNoZWNrIiwiJGVtYWlsIiwiJHB3ZCIsImVtYWlsIiwicGFzc3dvcmQiLCIkcHdkMSIsIiRwd2QyIiwiYWxlcnQiLCIkZm9ybSIsInBhc3N3b3JkX2ZpZWxkIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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QURHO0FBRU52RixVQUFNLEVBRkE7QUFHTnVILFFBQUksRUFBRTtBQUFFNkosb0JBQWMsRUFBaEI7QUFBeUJDLDJCQUFxQixFQUFFSjtBQUFoRCxLQUhBO0FBSU43RixXQUFPLEVBQUUsbUJBQVc7QUFDbEJpRixXQUFLLENBQUxBO0FBTEk7QUFPTmhGLFFBQUksRUFBRSxnQkFBVztBQUNmNkYsV0FBSyxDQUFMQSx5QkFBSyxDQUFMQTtBQUNEO0FBVEssR0FBRCxDQUFQakc7QUFUSyxFOzs7Ozs7Ozs7OztBQy9MUCx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvdHd1YWUvanMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBNaWNyb01vZGFsID0gZnVuY3Rpb24gKCkge1xuXG4gIHZhciBGT0NVU0FCTEVfRUxFTUVOVFMgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJywgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKSddO1xuXG4gIHZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9kYWwoX3JlZikge1xuICAgICAgdmFyIHRhcmdldE1vZGFsID0gX3JlZi50YXJnZXRNb2RhbCxcbiAgICAgICAgICBfcmVmJHRyaWdnZXJzID0gX3JlZi50cmlnZ2VycyxcbiAgICAgICAgICB0cmlnZ2VycyA9IF9yZWYkdHJpZ2dlcnMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiR0cmlnZ2VycyxcbiAgICAgICAgICBfcmVmJG9uU2hvdyA9IF9yZWYub25TaG93LFxuICAgICAgICAgIG9uU2hvdyA9IF9yZWYkb25TaG93ID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9yZWYkb25TaG93LFxuICAgICAgICAgIF9yZWYkb25DbG9zZSA9IF9yZWYub25DbG9zZSxcbiAgICAgICAgICBvbkNsb3NlID0gX3JlZiRvbkNsb3NlID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9yZWYkb25DbG9zZSxcbiAgICAgICAgICBfcmVmJG9wZW5UcmlnZ2VyID0gX3JlZi5vcGVuVHJpZ2dlcixcbiAgICAgICAgICBvcGVuVHJpZ2dlciA9IF9yZWYkb3BlblRyaWdnZXIgPT09IHZvaWQgMCA/ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcicgOiBfcmVmJG9wZW5UcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkY2xvc2VUcmlnZ2VyID0gX3JlZi5jbG9zZVRyaWdnZXIsXG4gICAgICAgICAgY2xvc2VUcmlnZ2VyID0gX3JlZiRjbG9zZVRyaWdnZXIgPT09IHZvaWQgMCA/ICdkYXRhLW1pY3JvbW9kYWwtY2xvc2UnIDogX3JlZiRjbG9zZVRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRvcGVuQ2xhc3MgPSBfcmVmLm9wZW5DbGFzcyxcbiAgICAgICAgICBvcGVuQ2xhc3MgPSBfcmVmJG9wZW5DbGFzcyA9PT0gdm9pZCAwID8gJ2lzLW9wZW4nIDogX3JlZiRvcGVuQ2xhc3MsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlU2Nyb2xsID0gX3JlZi5kaXNhYmxlU2Nyb2xsLFxuICAgICAgICAgIGRpc2FibGVTY3JvbGwgPSBfcmVmJGRpc2FibGVTY3JvbGwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkaXNhYmxlU2Nyb2xsLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZUZvY3VzID0gX3JlZi5kaXNhYmxlRm9jdXMsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzID0gX3JlZiRkaXNhYmxlRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkaXNhYmxlRm9jdXMsXG4gICAgICAgICAgX3JlZiRhd2FpdENsb3NlQW5pbWF0ID0gX3JlZi5hd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICAgIGF3YWl0Q2xvc2VBbmltYXRpb24gPSBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdENsb3NlQW5pbWF0LFxuICAgICAgICAgIF9yZWYkYXdhaXRPcGVuQW5pbWF0aSA9IF9yZWYuYXdhaXRPcGVuQW5pbWF0aW9uLFxuICAgICAgICAgIGF3YWl0T3BlbkFuaW1hdGlvbiA9IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0T3BlbkFuaW1hdGksXG4gICAgICAgICAgX3JlZiRkZWJ1Z01vZGUgPSBfcmVmLmRlYnVnTW9kZSxcbiAgICAgICAgICBkZWJ1Z01vZGUgPSBfcmVmJGRlYnVnTW9kZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlYnVnTW9kZTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgICAgLy8gU2F2ZSBhIHJlZmVyZW5jZSBvZiB0aGUgbW9kYWxcbiAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRNb2RhbCk7IC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHBhc3NlZCBjb25maWdcblxuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIGRlYnVnTW9kZTogZGVidWdNb2RlLFxuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBkaXNhYmxlU2Nyb2xsLFxuICAgICAgICBvcGVuVHJpZ2dlcjogb3BlblRyaWdnZXIsXG4gICAgICAgIGNsb3NlVHJpZ2dlcjogY2xvc2VUcmlnZ2VyLFxuICAgICAgICBvcGVuQ2xhc3M6IG9wZW5DbGFzcyxcbiAgICAgICAgb25TaG93OiBvblNob3csXG4gICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgICAgIGF3YWl0Q2xvc2VBbmltYXRpb246IGF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgIGF3YWl0T3BlbkFuaW1hdGlvbjogYXdhaXRPcGVuQW5pbWF0aW9uLFxuICAgICAgICBkaXNhYmxlRm9jdXM6IGRpc2FibGVGb2N1c1xuICAgICAgfTsgLy8gUmVnaXN0ZXIgY2xpY2sgZXZlbnRzIG9ubHkgaWYgcHJlIGJpbmRpbmcgZXZlbnRMaXN0ZW5lcnNcblxuICAgICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA+IDApIHRoaXMucmVnaXN0ZXJUcmlnZ2Vycy5hcHBseSh0aGlzLCBfdG9Db25zdW1hYmxlQXJyYXkodHJpZ2dlcnMpKTsgLy8gcHJlIGJpbmQgZnVuY3Rpb25zIGZvciBldmVudCBsaXN0ZW5lcnNcblxuICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm9uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvb3BzIHRocm91Z2ggYWxsIG9wZW5UcmlnZ2VycyBhbmQgYmluZHMgY2xpY2sgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgW0FycmF5IG9mIG5vZGUgZWxlbWVudHNdXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgICAga2V5OiBcInJlZ2lzdGVyVHJpZ2dlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclRyaWdnZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmlnZ2VycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICB0cmlnZ2Vyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJzLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNob3dNb2RhbChldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaG93TW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZGlzYWJsZScpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0T3BlbkFuaW1hdGlvbikge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIF90aGlzMi5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIF90aGlzMi5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcub25TaG93KHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZU1vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB2YXIgbW9kYWwgPSB0aGlzLm1vZGFsO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdlbmFibGUnKTtcblxuICAgICAgICBpZiAodGhpcy5hY3RpdmVFbGVtZW50ICYmIHRoaXMuYWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcub25DbG9zZSh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRDbG9zZUFuaW1hdGlvbikge1xuICAgICAgICAgIHZhciBvcGVuQ2xhc3MgPSB0aGlzLmNvbmZpZy5vcGVuQ2xhc3M7IC8vIDwtIG9sZCBzY2hvb2wgZnR3XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKG9wZW5DbGFzcyk7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZU1vZGFsQnlJZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWxCeUlkKHRhcmdldE1vZGFsKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRNb2RhbCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGFsKSB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2Nyb2xsQmVoYXZpb3VyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQmVoYXZpb3VyKHRvZ2dsZSkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVTY3JvbGwpIHJldHVybjtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAgICAgc3dpdGNoICh0b2dnbGUpIHtcbiAgICAgICAgICBjYXNlICdlbmFibGUnOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2Rpc2FibGUnOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVtb3ZlRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKHRoaXMuY29uZmlnLmNsb3NlVHJpZ2dlcikpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uS2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHRoaXMuY2xvc2VNb2RhbChldmVudCk7IC8vIGVzY1xuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB0aGlzLnJldGFpbkZvY3VzKGV2ZW50KTsgLy8gdGFiXG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEZvY3VzYWJsZU5vZGVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvckFsbChGT0NVU0FCTEVfRUxFTUVOVFMpO1xuICAgICAgICByZXR1cm4gQXJyYXkuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkobm9kZXMpKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVHJpZXMgdG8gc2V0IGZvY3VzIG9uIGEgbm9kZSB3aGljaCBpcyBub3QgYSBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKiBpZiBubyBvdGhlciBub2RlcyBleGlzdCB0aGVuIGZvY3VzZXMgb24gZmlyc3QgY2xvc2UgdHJpZ2dlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0Rm9jdXNUb0ZpcnN0Tm9kZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZvY3VzVG9GaXJzdE5vZGUoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kaXNhYmxlRm9jdXMpIHJldHVybjtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIHJlbW92ZSBub2RlcyBvbiB3aG9zZSBjbGljaywgdGhlIG1vZGFsIGNsb3Nlc1xuICAgICAgICAvLyBjb3VsZCBub3QgdGhpbmsgb2YgYSBiZXR0ZXIgbmFtZSA6KFxuXG4gICAgICAgIHZhciBub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZShfdGhpczMuY29uZmlnLmNsb3NlVHJpZ2dlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPiAwKSBub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzWzBdLmZvY3VzKCk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA9PT0gMCkgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmV0YWluRm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXRhaW5Gb2N1cyhldmVudCkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbHRlcnMgbm9kZXMgd2hpY2ggYXJlIGhpZGRlbiB0byBwcmV2ZW50XG4gICAgICAgICAqIGZvY3VzIGxlYWsgb3V0c2lkZSBtb2RhbFxuICAgICAgICAgKi9cblxuICAgICAgICBmb2N1c2FibGVOb2RlcyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBub2RlLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICAgICAgfSk7IC8vIGlmIGRpc2FibGVGb2N1cyBpcyB0cnVlXG5cbiAgICAgICAgaWYgKCF0aGlzLm1vZGFsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZm9jdXNlZEl0ZW1JbmRleCA9IGZvY3VzYWJsZU5vZGVzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSAmJiBmb2N1c2FibGVOb2Rlcy5sZW5ndGggPiAwICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IGZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNb2RhbDtcbiAgfSgpO1xuICAvKipcbiAgICogTW9kYWwgcHJvdG90eXBlIGVuZHMuXG4gICAqIEhlcmUgb24gY29kZSBpcyByZXNwb25zaWJsZSBmb3IgZGV0ZWN0aW5nIGFuZFxuICAgKiBhdXRvIGJpbmRpbmcgZXZlbnQgaGFuZGxlcnMgb24gbW9kYWwgdHJpZ2dlcnNcbiAgICovXG4gIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9wZW5lZCBtb2RhbFxuXG5cbiAgdmFyIGFjdGl2ZU1vZGFsID0gbnVsbDtcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbiBhc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIGl0J3NcbiAgICogcmVzcGVjdGl2ZSB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICAgIEFuIGFycmF5IG9mIGFsbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRyaWdnZXJBdHRyIFRoZSBkYXRhLWF0dHJpYnV0ZSB3aGljaCB0cmlnZ2VycyB0aGUgbW9kdWxlXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cblxuICB2YXIgZ2VuZXJhdGVUcmlnZ2VyTWFwID0gZnVuY3Rpb24gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCB0cmlnZ2VyQXR0cikge1xuICAgIHZhciB0cmlnZ2VyTWFwID0gW107XG4gICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgdmFyIHRhcmdldE1vZGFsID0gdHJpZ2dlci5hdHRyaWJ1dGVzW3RyaWdnZXJBdHRyXS52YWx1ZTtcbiAgICAgIGlmICh0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9PT0gdW5kZWZpbmVkKSB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9IFtdO1xuICAgICAgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0ucHVzaCh0cmlnZ2VyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJpZ2dlck1hcDtcbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbW9kYWwgb2YgdGhlIGdpdmVuIGlkIGV4aXN0c1xuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge251bWJlcn0gaWQgIFRoZSBpZCBvZiB0aGUgbW9kYWxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVNb2RhbFByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKSB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdTZWVtcyBsaWtlIHlvdSBoYXZlIG1pc3NlZCAlYydcIi5jb25jYXQoaWQsIFwiJ1wiKSwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ0lEIHNvbWV3aGVyZSBpbiB5b3VyIGNvZGUuIFJlZmVyIGV4YW1wbGUgYmVsb3cgdG8gcmVzb2x2ZSBpdC4nKTtcbiAgICAgIGNvbnNvbGUud2FybihcIiVjRXhhbXBsZTpcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCIgaWQ9XFxcIlwiLmNvbmNhdChpZCwgXCJcXFwiPjwvZGl2PlwiKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIGlmIHRoZXJlIGFyZSBtb2RhbCB0cmlnZ2VycyBwcmVzZW50XG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIEFuIGFycmF5IG9mIGRhdGEtdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSh0cmlnZ2Vycykge1xuICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1BsZWFzZSBzcGVjaWZ5IGF0IGxlYXN0IG9uZSAlYydtaWNyb21vZGFsLXRyaWdnZXInXCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdkYXRhIGF0dHJpYnV0ZS4nKTtcbiAgICAgIGNvbnNvbGUud2FybihcIiVjRXhhbXBsZTpcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgXCI8YSBocmVmPVxcXCIjXFxcIiBkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcj1cXFwibXktbW9kYWxcXFwiPjwvYT5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRyaWdnZXJzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG1vZGFsc1xuICAgKiBhcmUgcHJlc2VudCBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgIEFycmF5IG9mIERPTSBub2RlcyB3aGljaCBoYXZlIGRhdGEtdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJNYXAgQXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCB0aGVpciB0cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZUFyZ3MgPSBmdW5jdGlvbiB2YWxpZGF0ZUFyZ3ModHJpZ2dlcnMsIHRyaWdnZXJNYXApIHtcbiAgICB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSh0cmlnZ2Vycyk7XG4gICAgaWYgKCF0cmlnZ2VyTWFwKSByZXR1cm4gdHJ1ZTtcblxuICAgIGZvciAodmFyIGlkIGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIC8qKlxuICAgKiBCaW5kcyBjbGljayBoYW5kbGVycyB0byBhbGwgbW9kYWwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG5cblxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XG4gICAgLy8gQ3JlYXRlIGFuIGNvbmZpZyBvYmplY3Qgd2l0aCBkZWZhdWx0IG9wZW5UcmlnZ2VyXG4gICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICBvcGVuVHJpZ2dlcjogJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJ1xuICAgIH0sIGNvbmZpZyk7IC8vIENvbGxlY3RzIGFsbCB0aGUgbm9kZXMgd2l0aCB0aGUgdHJpZ2dlclxuXG4gICAgdmFyIHRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIuY29uY2F0KG9wdGlvbnMub3BlblRyaWdnZXIsIFwiXVwiKSkpOyAvLyBNYWtlcyBhIG1hcHBpbmdzIG9mIG1vZGFscyB3aXRoIHRoZWlyIHRyaWdnZXIgbm9kZXNcblxuXG4gICAgdmFyIHRyaWdnZXJNYXAgPSBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIG9wdGlvbnMub3BlblRyaWdnZXIpOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZUFyZ3ModHJpZ2dlcnMsIHRyaWdnZXJNYXApID09PSBmYWxzZSkgcmV0dXJuOyAvLyBGb3IgZXZlcnkgdGFyZ2V0IG1vZGFsIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2VcblxuICAgIGZvciAodmFyIGtleSBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0cmlnZ2VyTWFwW2tleV07XG4gICAgICBvcHRpb25zLnRhcmdldE1vZGFsID0ga2V5O1xuICAgICAgb3B0aW9ucy50cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZSk7XG4gICAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBTaG93cyBhIHBhcnRpY3VsYXIgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBkaXNwbGF5XVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIHBhc3NdXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgdmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KHRhcmdldE1vZGFsLCBjb25maWcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGNvbmZpZyB8fCB7fTtcbiAgICBvcHRpb25zLnRhcmdldE1vZGFsID0gdGFyZ2V0TW9kYWw7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSh0YXJnZXRNb2RhbCkgPT09IGZhbHNlKSByZXR1cm47IC8vIGNsZWFyIGV2ZW50cyBpbiBjYXNlIHByZXZpb3VzIG1vZGFsIHdhc24ndCBjbG9zZVxuXG4gICAgaWYgKGFjdGl2ZU1vZGFsKSBhY3RpdmVNb2RhbC5yZW1vdmVFdmVudExpc3RlbmVycygpOyAvLyBzdG9yZXMgcmVmZXJlbmNlIHRvIGFjdGl2ZSBtb2RhbFxuXG4gICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cbiAgICBhY3RpdmVNb2RhbC5zaG93TW9kYWwoKTtcbiAgfTtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgYWN0aXZlIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gY2xvc2VdXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UodGFyZ2V0TW9kYWwpIHtcbiAgICB0YXJnZXRNb2RhbCA/IGFjdGl2ZU1vZGFsLmNsb3NlTW9kYWxCeUlkKHRhcmdldE1vZGFsKSA6IGFjdGl2ZU1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgc2hvdzogc2hvdyxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn0oKTtcbndpbmRvdy5NaWNyb01vZGFsID0gTWljcm9Nb2RhbDtcblxuZXhwb3J0IGRlZmF1bHQgTWljcm9Nb2RhbDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGF0dGFjaEV2ZW50c09uRm9ybUVsZW1lbnRzIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgQmFzZVBvcHVwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmlkID0gcHJvcHMuaWQgPyBwcm9wcy5pZCA6ICdkZWZhdWx0LXBvcHVwJztcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgc2hvdyhwcm9wcykge1xuICAgIGNvbnN0IHBvcHVwSWQgPSBwcm9wcy5pZCA/IHByb3BzLmlkIDogdGhpcy5pZDtcblxuICAgIE1pY3JvTW9kYWwuc2hvdyhwb3B1cElkKTtcbiAgICB0aGlzLmZldGNoKHByb3BzKTtcblxuICAgIGlmIChwcm9wcy5jYWxsYmFja0ZuKSB7XG4gICAgICBwcm9wcy5jYWxsYmFja0ZuKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZShwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgcG9wdXBJZCA9IHByb3BzLmlkID8gcHJvcHMuaWQgOiB0aGlzLmlkO1xuICAgIGNvbnN0IGUgPSB3aW5kb3cuZXZlbnQ7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIE1pY3JvTW9kYWwuY2xvc2UocG9wdXBJZCk7XG4gICAgdGhpcy5yZW1vdmVQb3B1cENvbnRlbnRzKHBvcHVwSWQpO1xuICB9XG5cbiAgcmVwbGFjZShwcm9wcykge1xuICAgIHRoaXMuaGlkZShwcm9wcyk7XG4gICAgdGhpcy5zaG93KHByb3BzKTtcbiAgfVxuXG4gIC8vVE9ETzogaW1wbGVtZW50IGEgbG9jYWxTdG9yYWdlIGZlYXR1cmUgdG8gYXZvaWQgaGl0dGluZyB0aGUgZW5kcG9pbnRzIHJlcGVhdGVkbHlcbiAgZmV0Y2gocHJvcHMpIHtcbiAgICBjb25zdCB1cmwgPSBwcm9wcy5wYXRoID8gcHJvcHMucGF0aCA6ICcvcG9wdXAtcmVuZGVyL2xvZ2luJztcbiAgICBjb25zdCBwb3B1cElkID0gcHJvcHMuaWQgPyBwcm9wcy5pZCA6IHRoaXMuaWQ7XG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zdCBzdWJtaXRBY3Rpb24gPSBwcm9wcy5zdWJtaXRBY3Rpb24gPyBwcm9wcy5zdWJtaXRBY3Rpb24gOiBudWxsO1xuXG4gICAgZmV0Y2gobXlSZXF1ZXN0KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciBvbiBmZXRjaGluZyAke3VybH0hIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiBhdHRhY2hpbmdQb3B1cENvbnRlbnRzKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3B1cElkKS5jaGlsZE5vZGVzWzFdO1xuXG4gICAgICAgIHBvcHVwRWwuaW5uZXJIVE1MID0gcmVzcG9uc2UuaHRtbDtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMoJy5mb3JtIGlucHV0LCAuZm9ybSB0ZXh0YXJlYScpO1xuXG4gICAgICAgIC8vIGlmIHRoZXJlJ3MgYSBzdWJtaXRBY3Rpb24sIGF0dGFjaCB0byB0aGUgc3VibWl0IGJ1dHRvblxuICAgICAgICBpZiAoc3VibWl0QWN0aW9uICYmIGlzRnVuY3Rpb24oc3VibWl0QWN0aW9uKSkge1xuICAgICAgICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBwb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG5cbiAgICAgICAgICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gb25Gb3JtU3VibWl0KGUpIHtcbiAgICAgICAgICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3VibWl0QWN0aW9uKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUG9wdXBDb250ZW50cyhwb3B1cElkKSB7XG4gICAgY29uc3QgcG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcHVwSWQpLmNoaWxkTm9kZXNbMV07XG5cbiAgICBwb3B1cEVsLmlubmVySFRNTCA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQb3B1cDtcbiIsIi8vQXZhaWxhYmxlIGZvciBhbGwgcHJvamVjdHNcbmltcG9ydCB7IGltYWdlTGF6eUxvYWRlciB9IGZyb20gJy4vaW1hZ2VMb2FkZXInO1xuXG5leHBvcnQgY29uc3QgaXNJRTExID0gKCkgPT4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5leHBvcnQgY29uc3QgdHJpbU51bWJlclVuaXQgPSBzID0+IHBhcnNlSW50KHMpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5UaXRsZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnOiAnKVsxXS50cmltKCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYXJhbWV0ZXJCeU5hbWUgPSAobmFtZSwgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYsIGRlZmF1bHRWYUx1ZSA9IG51bGwpID0+IHtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpO1xuICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuXG4gIGlmICghcmVzdWx0cykgcmV0dXJuIGRlZmF1bHRWYUx1ZTtcbiAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG5cbiAgcmV0dXJuIE51bWJlcihkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNuaXBwZXRUZXh0KHN0ciwgY2hhckxlbmd0aCA9IDEyMCkge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoL1tcXG5cXHJdKy9nLCAnICcpXG4gICAgLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKVxuICAgIC5zbGljZSgwLCBjaGFyTGVuZ3RoKVxuICAgIC50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG4vL1RPRE86IHdyaXRlIHRlc3QgZm9yIHRoaXNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbVN0b3JhZ2UodXJsLCBrZXksIGludGVydmFsID0gNjAwMDAwKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIC8vIGlmIGRhdGEgbm90IG9uIHN0b3JhZ2Ugb3IgaWYgZGF0YSBvbGRlciB0aGFuIHRoZSBsaW1pdCAoZGVmYXVsdCAxMG1pbiBpbiBtcykgcG9wdWxhdGUgc3RvcmFnZVxuICAgIGlmIChcbiAgICAgICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8XG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpLmxhc3RVcGRhdGVkICsgTnVtYmVyKGludGVydmFsKSA8IERhdGUubm93KClcbiAgICApIHtcbiAgICAgIGF3YWl0IHBvcHVsYXRlU3RvcmFnZSh1cmwsIGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpLmRhdGEgOiBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIE5PIExPQ0FMIFNUT1JBR0UgQVZBSUxBQkxFIHNvIGhpdCB0aGUgZW5kcG9pbnRcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc3QgcmVzcCA9IGZldGNoKHJlcXVlc3QsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZmFpbGVkIHRvIGZldGNoIHRoZSB1cmw6ICcsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UodXJsLCBrZXkpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHJlcXVlc3QsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBmYWlsZWQgdG8gZmV0Y2ggdGhlIHVybDogJywgdXJsKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC50ZXh0KCk7XG4gICAgY29uc3QgZmluYWxEYXRhID0ge1xuICAgICAgbGFzdFVwZGF0ZWQ6IERhdGUubm93KCksXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZmluYWxEYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIGZhaWxlZCB0byBmZXRjaCAnICsga2V5ICsgJyB1cmwgPT4gJyArIHVybCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5TG9hZEltYWdlcyhpbWFnZXMpIHtcbiAgcmV0dXJuIGltYWdlTGF6eUxvYWRlcihpbWFnZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFBhcmFtKG5hbWUpIHtcbiAgdmFyIHJlc3VsdHMgPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJykuZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIGlmIChyZXN1bHRzID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gZGVjb2RlVVJJKHJlc3VsdHNbMV0pIHx8IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUoY25hbWUsIGN2YWx1ZSwgZXhkYXlzKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gIHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JyArIGQudG9VVENTdHJpbmcoKTtcbiAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyAnPScgKyBjdmFsdWUgKyAnOycgKyBleHBpcmVzICsgJztwYXRoPS8nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lKSB7XG4gIHZhciBuYW1lID0gY25hbWUgKyAnPSc7XG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGMgPSBjYVtpXTtcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29va2llKGNuYW1lKSB7XG4gIHZhciB2YWx1ZSA9IGdldENvb2tpZShjbmFtZSk7XG4gIGlmICh2YWx1ZSAhPSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5vZGUoJG5vZGUsIGRhdGEpIHtcbiAgJG5vZGUuaHRtbChkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RTaXplRnJvbVVybCh1cmwpIHtcbiAgbGV0IGZvdW5kID0gJzB4MCc7XG4gIGlmICh0eXBlb2YgdXJsICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgbGV0IHJlZ2V4ID0gL3dcXDooWzAtOV0qKSxoXFw6KFswLTldKikvZztcbiAgICBmb3VuZCA9IHVybC5tYXRjaChyZWdleCk7XG4gICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvdW5kID0gZm91bmRbMF07XG4gICAgICBmb3VuZCA9IGZvdW5kLnNwbGl0KCcsJyk7XG4gICAgICBmb3VuZCA9IGZvdW5kWzBdLnJlcGxhY2UoJ3c6JywgJycpICsgJ3gnICsgZm91bmRbMV0ucmVwbGFjZSgnaDonLCAnJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYge30udG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vLyBpbXBsaWVzIGh0bWwgc3RydWN0dXJlIG9mIC5mb3JtLWZpZWxkIGFzIGEgd3JhcHBlciBmb3IgYSBsYWJlbCArIGlucHV0XG5leHBvcnQgY29uc3QgYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMgPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAvLyBiaW5kIGlucHV0IGV2ZW50c1xuICBmb3JtSW5wdXRzLmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9IGVsLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgY29uc3QgZm9ybUxhYmVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gaW5wdXRGb2N1cygpIHtcbiAgICAgIGlmIChmb3JtTGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWxhYmVsJykpIHtcbiAgICAgICAgZm9ybUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIGlucHV0Qmx1cigpIHtcbiAgICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGZvcm1MYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tbGFiZWwnKSAmJiBmb3JtTGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgIGZvcm1MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHRoaXMgZml4ZXMgdGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgd3JhcHBlciBpbiBjYXNlIHRoZSBsYWJlbCBpcyB0b28gbG9uZ1xuICAgIC8vVE9ETzogY2hlY2sgTXV0YXRpb25PYnNlcnZlciB0byBsaXN0ZW4gdG8gY3NzIGNoYW5nZXMgKGFuZCBkcm9wIHBvc3NpYmxlIG9uIHJlc2l6ZSBsaXN0ZW5lcnMpXG4gICAgaWYgKGZvcm1MYWJlbCAmJiBmb3JtRmllbGQuZGF0YXNldC5zdHJsZW4gPiAzNSkge1xuICAgICAgZm9ybUZpZWxkLnN0eWxlLmhlaWdodCA9IGAke2Zvcm1MYWJlbC5vZmZzZXRIZWlnaHQgKyA1fXB4YDtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gaW1wbGllcyBodG1sIHN0cnVjdHVyZSBvZiAuZm9ybS1maWVsZCBhcyBhIHdyYXBwZXIgZm9yIGEgbGFiZWwgKyBpbnB1dFxuZXhwb3J0IGNvbnN0IGZpeEZvcm1GaWVsZEhlaWdodCA9IHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBmb3JtSW5wdXRzLmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9IGVsLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgY29uc3QgZm9ybUxhYmVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgIC8vIHRoaXMgZml4ZXMgdGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgd3JhcHBlciBpbiBjYXNlIHRoZSBsYWJlbCBpcyB0b28gbG9uZ1xuICAgIC8vVE9ETzogY2hlY2sgTXV0YXRpb25PYnNlcnZlciB0byBsaXN0ZW4gdG8gY3NzIGNoYW5nZXMgKGFuZCBkcm9wIHBvc3NpYmxlIG9uIHJlc2l6ZSBsaXN0ZW5lcnMpXG4gICAgaWYgKGZvcm1MYWJlbCAmJiBmb3JtRmllbGQuZGF0YXNldC5zdHJsZW4gPiAzNSkge1xuICAgICAgZm9ybUZpZWxkLnN0eWxlLmhlaWdodCA9IGAke2Zvcm1MYWJlbC5vZmZzZXRIZWlnaHQgKyA1fXB4YDtcbiAgICB9XG4gIH0pO1xufTtcbiIsImxldCBpc1Jlc2l6aW5nID0gZmFsc2U7XG5sZXQgdGltZXIgPSBudWxsO1xubGV0IHByZWxvYWRlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdGFydFJlc2l6ZVRyYWNraW5nKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGlzUmVzaXppbmcgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKTtcbiAgICAgIGJsb2Nrcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgaWYgKGlzSW5WaWV3cG9ydChpbWFnZSkpIHtcbiAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMgIT0gJycgJiYgaW1hZ2Uuc3JjLmluZGV4T2YoJy90cmFuc3AucG5nJykgPT0gLTEpIHtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltYWdlLnNyYyArICcpJztcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNob3ctYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3N1cHBvcnQtYmFja2dyb3VuZC1mb3ItcmVzaXplJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltYWdlLnNyYyA9ICcvaW1nL3RyYW5zcC5wbmcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlzUmVzaXppbmcgPSB0cnVlO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcblxuICAgICAgICBpbWFnZUxhenlMb2FkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmddJykpO1xuICAgICAgfSxcbiAgICAgIDQ1MCxcbiAgICAgIGV2ZW50XG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUxhenlMb2FkZXIobG9hZGFibGVJbWFnZXMpIHtcbiAgbG9hZENvbXBvc2l0SW1hZ2VzKCk7XG4gIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgIHN0YXJ0UmVzaXplVHJhY2tpbmcoKTtcbiAgfVxuICBpZiAoaXNSZXNpemluZykge1xuICAgIHJldHVybiBsb2FkYWJsZUltYWdlcztcbiAgfVxuICBsb2FkYWJsZUltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICBpZiAoaXNJblZpZXdwb3J0KGltYWdlKSkge1xuICAgICAgbG9hZE9uZUltYWdlKGltYWdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghcHJlbG9hZGVkKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzKCk7XG4gICAgfSwgMjUwMCk7XG4gICAgcHJlbG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBsb2FkYWJsZUltYWdlcztcbn1cblxuZnVuY3Rpb24gbG9hZE9uZUltYWdlKGltYWdlKSB7XG4gIGxldCB0aGVJbWFnZSA9IGdldEV4cGVjdGVkSW1hZ2VTaXplKGltYWdlKTtcbiAgaWYgKFxuICAgIGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVTaXplJykgIT0gdGhlSW1hZ2UgfHxcbiAgICAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMuaW5kZXhPZigndHJhbnNwLnBuZycpID4gMClcbiAgKSB7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByZVNpemUnLCB0aGVJbWFnZSk7XG4gICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykpIHtcbiAgICAgIGlmIChpbWFnZS5zcmMgPT0gJycpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gdGhlSW1hZ2U7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1zaG93LWJhY2tncm91bmQnKSkge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZy5zcmMgKyAnKSc7XG4gICAgICAgICAgbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPT0gJycpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gdGhlSW1hZ2U7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWcuc3JjICsgJyknO1xuICAgICAgICAgIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFeHBlY3RlZEltYWdlU2l6ZShpbWFnZSkge1xuICBsZXQgdGhlSW1hZ2UgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKTtcbiAgbGV0IHRoZVNpemUgPSAnJztcbiAgLy9OT1RcbiAgaWYgKFxuICAgICFpbWFnZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnaW1hZ2Utd3JhcHBlcicpICYmXG4gICAgIWltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbHBoYS1hcnRpY2xlJykgJiZcbiAgICAhaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1kb250LXJlc2l6ZScpXG4gICkge1xuICAgIGxldCBoZWlnaHQgPSBwYXJzZUludChpbWFnZS5jbGllbnRIZWlnaHQpO1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KGltYWdlLmNsaWVudFdpZHRoKTtcbiAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkge1xuICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2luIGNhc2UgYm90aCBhcmUgemVybyAtIHdlIGF0IGxlYXN0IHRyeVxuICAgICAgICBpZiAoaGVpZ2h0ID09IDApIHtcbiAgICAgICAgICBoZWlnaHQgPSAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhlU2l6ZSA9ICdoOicgKyBoZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGggKyAnLGg6JyArIGhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHRoZUltYWdlLnJlcGxhY2UoJ2Ryb2lkcycsIHRoZVNpemUpO1xuICB9XG4gIC8vVENcbiAgaWYgKGltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS13cmFwcGVyJykgfHwgaW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FscGhhLWFydGljbGUnKSkge1xuICAgIGxldCBoZWlnaHQgPSBwYXJzZUludChpbWFnZS5wYXJlbnROb2RlLmNsaWVudEhlaWdodCk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQoaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRXaWR0aCk7XG4gICAgaWYgKHdpZHRoID09IDAgfHwgaGVpZ2h0ID09IDApIHtcbiAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICB0aGVTaXplID0gJ3c6JyArIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9pbiBjYXNlIGJvdGggYXJlIHplcm8gLSB3ZSBhdCBsZWFzdCB0cnlcbiAgICAgICAgaWYgKGhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gMzAwO1xuICAgICAgICB9XG4gICAgICAgIHRoZVNpemUgPSAnaDonICsgaGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGVTaXplID0gJ3c6JyArIHdpZHRoICsgJyxoOicgKyBoZWlnaHQ7XG4gICAgfVxuICAgIHRoZUltYWdlID0gdGhlSW1hZ2UucmVwbGFjZSgnZHJvaWRzJywgdGhlU2l6ZSk7XG4gIH1cbiAgcmV0dXJuIHRoZUltYWdlO1xufVxuXG5mdW5jdGlvbiBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpIHtcbiAgaWYgKFxuICAgIGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZycpLmluZGV4T2YoJ3F1YWxpdHk9dmFsdWU6MTUnKSA+IDAgfHxcbiAgICAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMuaW5kZXhPZigndHJhbnNwLnBuZycpID4gMClcbiAgKSB7XG4gICAgdmFyIGltZ0hRID0gbmV3IEltYWdlKCk7XG4gICAgaW1nSFEuc3JjID0gdGhlSW1hZ2UucmVwbGFjZSgncXVhbGl0eT12YWx1ZToxNScsICdxdWFsaXR5PXZhbHVlOjg1Jyk7XG4gICAgaW1nSFEub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSkge1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWdIUS5zcmM7XG4gICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNob3ctYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc3VwcG9ydC1iYWNrZ3JvdW5kLWZvci1yZXNpemUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZ0hRLnNyYyArICcpJztcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzKCkge1xuICBpZiAoaXNSZXNpemluZykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwcmVMb2FkTG93UXVhbGl0eUltYWdlcygpO1xuICAgIH0sIDIwMDApO1xuICAgIHJldHVybiAnJztcbiAgfVxuICBsZXQgbG9hZGFibGVJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKTtcbiAgbG9hZGFibGVJbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgaWYgKGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PSAnJyB8fCAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMgPT0gJycpKSB7XG4gICAgICBwcmVMb2FkTG93UXVhbGl0eUltYWdlKGltYWdlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29tcG9zaXRJbWFnZXMoKSB7XG4gIGlmIChpc1Jlc2l6aW5nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxvYWRDb21wb3NpdEltYWdlcygpO1xuICAgIH0sIDIwMDApO1xuICAgIHJldHVybiAnJztcbiAgfVxuICBsZXQgbG9hZGFibGVJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zcmNdJyk7XG4gIGxvYWRhYmxlSW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgIGlmIChpbWFnZS5zcmMgPT0gJycpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2UoaW1hZ2UsIHRydWUpO1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2UoaW1hZ2UsIGltZ1RhZykge1xuICBpZiAoaW1nVGFnID09PSB0cnVlKSB7XG4gICAgbGV0IHRoZVNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICB0aGVTcmMgPSB0aGVTcmMucmVwbGFjZSgncXVhbGl0eT12YWx1ZToxNScsICdxdWFsaXR5PXZhbHVlOjYwJyk7XG4gICAgaW1hZ2Uuc3JjID0gdGhlU3JjO1xuICB9IGVsc2Uge1xuICAgIGxldCB0aGVJbWFnZSA9IGdldEV4cGVjdGVkSW1hZ2VTaXplKGltYWdlKTtcbiAgICBpZiAoaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWJnJykuaW5kZXhPZigncXVhbGl0eT12YWx1ZToxNScpID4gMCkge1xuICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmx1clRyYW5zaXRpb24nKTtcbiAgICB9XG4gICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykpIHtcbiAgICAgIGltYWdlLnNyYyA9IHRoZUltYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyB0aGVJbWFnZSArICcpJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJblZpZXdwb3J0KGVsZW0pIHtcbiAgdmFyIGJvdW5kaW5nID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIChcbiAgICBib3VuZGluZy50b3AgPj0gLTMyMCAmJlxuICAgIGJvdW5kaW5nLmxlZnQgPj0gMCAmJlxuICAgIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0ICsgNDUwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyA0NTApICYmXG4gICAgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgKTtcbn1cbiIsImltcG9ydCB7IGxhenlMb2FkSW1hZ2VzIH0gZnJvbSAnLi4vLi4vY29yZS9qcy9oZWxwZXJzJztcbmltcG9ydCB7IGdsb2JhbFN0YXRlIH0gZnJvbSAnLi90dy1nbG9iYWwtc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZlVzZXJBbHJlYWR5TG9nZ2VkSW4oY2FsbGJhY2ssICRlbGVtZW50ID0gbnVsbCkge1xuICBpZiAoJGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAkZWxlbWVudC5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuICB9XG4gIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluIGFscmVhZHlcbiAgJC5nZXQoJy9hdXRoLWNoZWNrJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UgIT09IGZhbHNlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMobW9kYWwpIHtcbiAgY29uc3QgJG1vZGFsID0gJChtb2RhbCk7XG4gIC8vIFJlY3Vyc2l2ZSB0byB0YWNrbGUgYWxsIG1vZGFscyBpZiB0aGUgbW9kYWwgaXMga2lsbGVkIGJ5IGNsaWNraW5nIG9uIHRoZSB1bmRlcmxheSAob3IgaWYgbm8gbW9kYWwgZWxlbSBwcm92aWRlZClcbiAgaWYgKHR5cGVvZiBtb2RhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCAkbW9kYWxzID0gJCgnLm1vZGFsJyk7XG5cbiAgICAkbW9kYWxzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJCh0aGlzKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgZXJyb3JzXG4gIGxldCAkaGVscGVycyA9ICRtb2RhbC5maW5kKCdmb3JtIC5oZWxwZXItdGV4dCcpO1xuXG4gIGlmICgkaGVscGVycy5sZW5ndGggPiAwKSB7XG4gICAgJGhlbHBlcnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLmF0dHIoJ2RhdGEtZXJyb3InLCAnJylcbiAgICAgICAgLmF0dHIoJ2RhdGEtc3VjY2VzcycsICcnKVxuICAgICAgICAuaHRtbCgnJyk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgZXJyb3JGb3JtID0gbnVsbDtcbiAgaWYgKCRtb2RhbC5maW5kKCcuZXJyb3JNZXNzYWdlQ29udGFpbmVyJykubGVuZ3RoID4gMCkge1xuICAgIGVycm9yRm9ybSA9ICRtb2RhbC5maW5kKCcuZXJyb3JNZXNzYWdlQ29udGFpbmVyJyk7XG4gIH0gZWxzZSBpZiAoJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2UnKS5sZW5ndGggPiAwKSB7XG4gICAgZXJyb3JGb3JtID0gJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2UnKTtcbiAgfVxuICBpZiAoZXJyb3JGb3JtICE9PSBudWxsKSB7XG4gICAgZXJyb3JGb3JtLmh0bWwoJycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyR3RhZ0V2ZW50KCRidXR0b24pIHtcbiAgY29uc3QgYWN0aW9uID0gJGJ1dHRvbi5kYXRhKCdndGFnLWFjdGlvbicpO1xuICBjb25zdCBjYXRlZ29yeSA9ICRidXR0b24uZGF0YSgnZ3RhZy1jYXRlZ29yeScpO1xuICBjb25zdCBsYWJlbCA9ICRidXR0b24uZGF0YSgnZ3RhZy1sYWJlbCcpO1xuICBpZiAoYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgY2F0ZWdvcnkgIT09IHVuZGVmaW5lZCAmJiBsYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHtcbiAgICAvLyAgICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIC8vICAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgLy8gICAgIHZhbHVlOiAxXG4gICAgLy8gfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGptZ0FqYXggPSBwcm9wZXJ0aWVzID0+IHtcbiAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzICE9ICdvYmplY3QnKSB7XG4gICAgY29uc29sZS5lcnJvcignSW5jb21taW5nIHByb3BlcnRpZXMgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYXJyYXknKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCEoJ3VybCcgaW4gcHJvcGVydGllcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiT2ggY29tZSdvbiBub3cuLi4gd2l0aG91dCBhIFVSTCBwcm9wZXJ0eT8geW91IGNhbiBkbyBiZXR0ZXIgdGhhbiB0aGF0XCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgYWpheCA9IHtcbiAgICB1cmw6IHByb3BlcnRpZXMudXJsLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IFtdLFxuICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgZmFpbDogbnVsbFxuICB9O1xuICBpZiAoJ21ldGhvZCcgaW4gcHJvcGVydGllcykge1xuICAgIGFqYXgubWV0aG9kID0gcHJvcGVydGllcy5tZXRob2Q7XG4gIH1cbiAgaWYgKCdkYXRhJyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgYWpheC5kYXRhID0gcHJvcGVydGllcy5kYXRhO1xuICB9XG4gIGlmICgnc3VjY2VzcycgaW4gcHJvcGVydGllcykge1xuICAgIGFqYXguc3VjY2VzcyA9IHByb3BlcnRpZXMuc3VjY2VzcztcbiAgfVxuICBpZiAoJ2ZhaWwnIGluIHByb3BlcnRpZXMpIHtcbiAgICBhamF4LmZhaWwgPSBwcm9wZXJ0aWVzLmZhaWw7XG4gIH1cbiAgLy9AdG9kbyB0aGlzIGNhbiBiZSByZWZhY3RvcmVkIHRvIHRoYXQgZmV0Y2ggb3Igd2hhdGV2ZXJcbiAgLy90aGlzIG5vdyBhbGxvd3MgdXMgdG8gaGF2ZSB0aGUgYWpheCBsb2dpYyBpbiBvbmUgcGxhY2UgYW5kIGhhdmUgdGhlIHNpbXBsZSBjYWxsaW5nXG4gIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhamF4LnN1Y2Nlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGFqYXguc3VjY2Vzcyh4aHR0cC5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWpheC5mYWlsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBhamF4LmZhaWwoeGh0dHAucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGxldCBkYXRhID0gJyc7XG4gIC8vc28gd2UgYXJlIGNoZWNraW5nIHdoZXRoZXIgd2UndmUgZ290IGEgc3RyaW5nIG9yIGFuIG9iamVjdFxuICBpZiAodHlwZW9mIGFqYXguZGF0YSA9PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSBhamF4LmRhdGE7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXQncyBhbiBvYmplY3Qgd2UgaGF2ZSB0byBwYXJzZSBpdC4uLiBidXQgaWYgaXQncyBhIEZvcm1EYXRhIHdlIG5lZWQgdG8gZGVhbCB3aXRoIGl0IGRpZmZlcmVudGx5XG4gICAgaWYgKGFqYXguZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICBmb3IgKHZhciBwIG9mIGFqYXguZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAhPSAnJykge1xuICAgICAgICAgIGRhdGEgKz0gJyYnO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgKz0gcFswXSArICc9JyArIHBbMV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vZ29vZCBvbGQgb3JkaW5hcnkgb2JqZWN0IDopXG4gICAgICBPYmplY3Qua2V5cyhhamF4LmRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT0gJycpIHtcbiAgICAgICAgICBkYXRhICs9ICcmJztcbiAgICAgICAgfVxuICAgICAgICBkYXRhICs9IGtleSArICc9JyArIGFqYXguZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgeGh0dHAub3BlbihhamF4Lm1ldGhvZCwgYWpheC51cmwsIHRydWUpO1xuICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIHhodHRwLnNlbmQoZGF0YSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoTG9hZE1vcmVBY3Rpb25zKGdsb2JhbFN0YXRlKSB7XG4gIGNvbnN0ICRidG5Mb2FkTW9yZSA9ICQoJy5qcy1idG4tbG9hZC1tb3JlJyk7XG4gIGNvbnN0IGxvYWRNb3JlRmluaXNoZWRFdmVudCA9IG5ldyBFdmVudCgnbG9hZE1vcmVGaW5pc2hlZCcpO1xuXG4gICRidG5Mb2FkTW9yZS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgbGFzdE9mZnNldCA9ICQoJy5qcy1hcnRpY2xlLXRlbXBsYXRlJylcbiAgICAgIC5sYXN0KClcbiAgICAgIC5vZmZzZXQoKS50b3A7XG4gICAgY29uc3QgdG90YWwgPSAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1saW1pdCcpO1xuICAgIGNvbnN0IGN1cnJlbnROdW1iZXIgPSAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1wYWdlJyk7XG4gICAgY29uc3QgbmV4dE51bWJlciA9IHBhcnNlSW50KGN1cnJlbnROdW1iZXIpICsgMTtcbiAgICBjb25zdCAkYXBwZW5kVGFyZ2V0ID0gJCgnLmpzLWxvYWRtb3JlLXRhcmdldCcpO1xuXG4gICAgJGJ0bkxvYWRNb3JlLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICBpZiAobmV4dE51bWJlciA+IHRvdGFsKSB7XG4gICAgICAkYnRuTG9hZE1vcmUuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSB1cmwgKyAnP3BhZ2U9JyArIG5leHROdW1iZXI7XG5cbiAgICAgICQuZ2V0KHVybCwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5hcnRpY2xlcyAhPT0gdW5kZWZpbmVkICYmIGRhdGEuYXJ0aWNsZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAkLmVhY2goZGF0YS5hcnRpY2xlcywgZnVuY3Rpb24oaW5kZXgsIGFydGljbGUpIHtcbiAgICAgICAgICAgICRhcHBlbmRUYXJnZXQuYXBwZW5kKGdlbmVyYXRlQ2xvbmVkQXJ0aWNsZVdpdGhEYXRhKGFydGljbGUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1saW1pdCcsIGRhdGEubGFzdF9wYWdlKTtcbiAgICAgICAgJGJ0bkxvYWRNb3JlLmF0dHIoJ2RhdGEtcGFnZScsIG5leHROdW1iZXIpO1xuICAgICAgICAkYnRuTG9hZE1vcmUucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobG9hZE1vcmVGaW5pc2hlZEV2ZW50KTtcblxuICAgICAgICBpZiAobmV4dE51bWJlciArIDEgPiB0b3RhbCkge1xuICAgICAgICAgICRidG5Mb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogbGFzdE9mZnNldFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZ2xvYmFsU3RhdGUubG9hZGFibGVJbWFnZXMgPSBsYXp5TG9hZEltYWdlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKSk7XG4gICAgICAgIH0sIDM1MCk7XG4gICAgICB9KS5mYWlsKGZ1bmN0aW9uKCkge1xuICAgICAgICAkYnRuTG9hZE1vcmUucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgJGJ0bkxvYWRNb3JlLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNsb25lZEFydGljbGVXaXRoRGF0YShhcnRpY2xlKSB7XG4gIGxldCAkdGVtcGxhdGUgPSAkKCcuanMtYXJ0aWNsZS10ZW1wbGF0ZScpXG4gICAgLmZpcnN0KClcbiAgICAuY2xvbmUoKTtcblxuICAvL0ZJWE1FOiB0aGUgZm9sbG93aW5nIHRoaW5ncyBuZWVkIHRvIGJlIGNoYW5nZWQuIFRoZSBlbmRwb2ludCBzaG91bGQgb25seSByZXR1cm4gb25lIGRlZmF1bHQgc2l6ZVxuXG4gICR0ZW1wbGF0ZVxuICAgIC5maW5kKCdhID4gaW1nJylcbiAgICAuZmlyc3QoKVxuICAgIC5hdHRyKCdzcmMnLCBhcnRpY2xlLnRodW1ibmFpbCk7XG4gICR0ZW1wbGF0ZVxuICAgIC5maW5kKCcuYXJ0aWNsZVNuaXBwZXQtdGl0bGUgPiBhJylcbiAgICAuZmlyc3QoKVxuICAgIC5odG1sKGFydGljbGUudGl0bGUpO1xuXG4gICR0ZW1wbGF0ZS5maW5kKCdhJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkuYXR0cignaHJlZicsIGFydGljbGUuZnVsbF9zbHVnKTtcbiAgfSk7XG5cbiAgcmV0dXJuICR0ZW1wbGF0ZTtcbn1cbiIsImltcG9ydCBCYXNlUG9wdXAgZnJvbSAnLi4vLi4vY29yZS9qcy9iYXNlcG9wdXAubGliJztcbmltcG9ydCB7IHVzZXJMb2dpbiwgcGFzc3dvcmRDaGFuZ2UgfSBmcm9tICcuL3VzZXInO1xuXG4vL1RPRE86IG1heWJlIGNoYW5nZSB0aGlzIGNsYXNzIG5hbWUgdG8gVFdQb3BvcCAoaWYvd2hlbiBpdCBnZXRzIHRvbyBzcGVjaWZpYylcbmNsYXNzIEptZ1BvcHVwIGV4dGVuZHMgQmFzZVBvcHVwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvbG9naW4nLCBzdWJtaXRBY3Rpb246IHVzZXJMb2dpbiB9KTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvc2lnbi11cCcgfSk7XG4gIH1cblxuICBjcmVhdGVQYXNzd29yZCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvY3JlYXRlLXBhc3N3b3JkJywgc3VibWl0QWN0aW9uOiBwYXNzd29yZENoYW5nZSB9KTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHN1cGVyLnNob3coeyBwYXRoOiAnL3BvcHVwLXJlbmRlci9mb3Jnb3QtcGFzc3dvcmQnIH0pO1xuICB9XG5cbiAgcGFzc3dvcmRDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnNob3coeyBwYXRoOiAnL3BvcHVwLXJlbmRlci9wYXNzd29yZC1jaGFuZ2VkJyB9KTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmRSZXF1aXJlZCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvcmVzZXQtcGFzc3dvcmQtcmVxdWlyZWQnIH0pO1xuICB9XG5cbiAgZW1haWxWZXJpZmljYXRpb25TZW50KCkge1xuICAgIHN1cGVyLnNob3coeyBwYXRoOiAnL3BvcHVwLXJlbmRlci92ZXJpZmljYXRpb24tbWFpbC1zZW50JyB9KTtcbiAgfVxuXG4gIGVtYWlsVmVyaWZpZWQoKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL2VtYWlsLXZlcmlmaWVkJyB9KTtcbiAgfVxuXG4gIGVtYWlsVmVyaWZpY2F0aW9uRmFpbGVkKCkge1xuICAgIHN1cGVyLnNob3coeyBwYXRoOiAnL3BvcHVwLXJlbmRlci9lbWFpbC12ZXJpZmllZC1mYWlsZWQnIH0pO1xuICB9XG5cbiAgZW1haWxVbmNvbmZpcm1lZCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvZW1haWwtdW5jb25maXJtZWQnIH0pO1xuICB9XG5cbiAgdXBkYXRlU3VjY2Vzc2Z1bCgpIHtcbiAgICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvdXBkYXRlLXN1Y2Nlc3NmdWwnIH0pO1xuICB9XG5cbiAgLy8gZmFzdFNpZ25VcCgpIHtcbiAgLy8gICBzdXBlci5zaG93KHsgcGF0aDogJy9wb3B1cC1yZW5kZXIvZmFzdC1zaWduLXVwJyB9KTtcbiAgLy8gfVxuXG4gIC8vIGZhc3RTdWJzY3JpYmUoKSB7XG4gIC8vICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL2Zhc3Qtc3Vic2NyaWJlJyB9KTtcbiAgLy8gfVxuXG4gIHBheXdhbGwoKSB7XG4gICAgc3VwZXIuc2hvdyh7IHBhdGg6ICcvcG9wdXAtcmVuZGVyL3BheXdhbGwnIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEptZ1BvcHVwO1xuIiwiaW1wb3J0IHsgZ2xvYmFsU3RhdGUgfSBmcm9tICcuL3R3LWdsb2JhbC1zdGF0ZSc7XG5cbihmdW5jdGlvbigkKSB7XG4gICgndXNlIHN0cmljdCcpO1xuXG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICBjb25zdCAkbWFpbkhlYWRlciA9ICQoJy5qcy1tYWluLWhlYWRlcicpO1xuICBjb25zdCAkbWFpbk5hdiA9ICRtYWluSGVhZGVyLmZpbmQoJy5qcy1tYWluLW5hdicpO1xuICBjb25zdCAkYnRuVG9nZ2xlTmF2ID0gJCgnLmpzLWJ0bi10b2dnbGUtbWVudScpO1xuICBjb25zdCAkbWVudVBhcmVudCA9ICRtYWluTmF2LmZpbmQoJy5qcy1tZW51LXBhcmVudCcpO1xuICBjb25zdCAkbWFpbk5hdlBhcmVudExpbmsgPSAkbWFpbk5hdi5maW5kKCcuanMtbWVudS1wYXJlbnQgPiBhLCAuanMtbWVudS1wYXJlbnQgPiBidXR0b24nKTtcbiAgY29uc3QgJGJ0blByb2ZpbGUgPSAkKCcuanMtYnRuLXByb2ZpbGUnKTtcbiAgY29uc3QgJGV4dHJhTWVudSA9ICQoJy5qcy1leHRyYS1tZW51Jyk7XG4gIGxldCBtYWluSGVhZGVyT2Zmc2V0VG9wID0gJG1haW5IZWFkZXIub2Zmc2V0KCkudG9wO1xuICBsZXQgbWFpbkhlYWRlckhlaWdodCA9ICRtYWluSGVhZGVyLm91dGVySGVpZ2h0KCk7XG4gIGxldCBtYWluTmF2T2Zmc2V0VG9wID0gJG1haW5OYXYub2Zmc2V0KCkudG9wO1xuXG4gIGlmICgkd2luZG93LndpZHRoKCkgPCA5ODApIHtcbiAgICAkbWVudVBhcmVudC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdpcy1jdXJyZW50JykpIHtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgJHdpbmRvdy5vbignc2Nyb2xsJywgZml4SGVhZGVyUG9zKTtcblxuICAvLyBGSVhNRTogdGhpcyBiZWhhdmVzIHRlcnJpYmx5IPCfpKbwn4+74oCN4pmC77iPLiBSZWZhY3RvclxuICBmdW5jdGlvbiBmaXhIZWFkZXJQb3MoKSB7XG4gICAgaWYgKCR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gbWFpbkhlYWRlck9mZnNldFRvcCkge1xuICAgICAgJGJvZHkuYWRkQ2xhc3MoJ3N0aWNreS1uYXYnKTtcbiAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPCBnbG9iYWxTdGF0ZS5zY3JlZW5TaXplcy5sZykge1xuICAgICAgICAkYm9keS5jc3MoJ3BhZGRpbmctdG9wJywgbWFpbkhlYWRlckhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0ZJWE1FOiByZWZhY3RvciB0aGlzIHRvIG9ubHkgc2hvdyBzdGlja3kgbWVudSBvbiBsZyBpZiB5b3Ugc2Nyb2xsIHVwIHNvbWUgcGl4ZWxzIG90aGVyd2lzZSBoaWRkZW5cbiAgICAgICAgbGV0IGhlYWRlck5hdkRpZmYgPSBtYWluTmF2T2Zmc2V0VG9wIC0gbWFpbkhlYWRlck9mZnNldFRvcDtcbiAgICAgICAgbGV0IHdpbmRvd05hdkRpZmYgPSBtYWluTmF2T2Zmc2V0VG9wIC0gJHdpbmRvdy5zY3JvbGxUb3AoKSAtIGhlYWRlck5hdkRpZmY7XG4gICAgICAgIGxldCB0cmFuc2xhdGVWYWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKCR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gbWFpbk5hdk9mZnNldFRvcCkge1xuICAgICAgICAgIHRyYW5zbGF0ZVZhbHVlID0gLXdpbmRvd05hdkRpZmY7XG4gICAgICAgICAgaWYgKHdpbmRvd05hdkRpZmYgPCBoZWFkZXJOYXZEaWZmKSB7XG4gICAgICAgICAgICB0cmFuc2xhdGVWYWx1ZSA9IC1oZWFkZXJOYXZEaWZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmFuc2xhdGVWYWx1ZSA9IHdpbmRvd05hdkRpZmY7XG4gICAgICAgIH1cblxuICAgICAgICAkYm9keS5jc3MoJ3BhZGRpbmctdG9wJywgbWFpbkhlYWRlckhlaWdodCk7XG4gICAgICAgICRtYWluSGVhZGVyLmNzcygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtNTAlLCAke3RyYW5zbGF0ZVZhbHVlfXB4KWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcygnc3RpY2t5LW5hdicpLmNzcygncGFkZGluZy10b3AnLCAwKTtcbiAgICAgICRtYWluSGVhZGVyLmNzcygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtNTAlLCAwKWApO1xuICAgIH1cbiAgfVxuXG4gICR3aW5kb3cub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIG1haW5OYXZPZmZzZXRUb3AgPSAkbWFpbk5hdi5vZmZzZXQoKS50b3A7XG4gICAgbWFpbkhlYWRlckhlaWdodCA9ICRtYWluSGVhZGVyLm91dGVySGVpZ2h0KCk7XG5cbiAgICBpZiAoJHdpbmRvdy53aWR0aCgpID4gZ2xvYmFsU3RhdGUuc2NyZWVuU2l6ZXMubGcpIHtcbiAgICAgICRtZW51UGFyZW50LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkYnRuVG9nZ2xlTmF2Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkd2luZG93LndpZHRoKCkgPD0gZ2xvYmFsU3RhdGUuc2NyZWVuU2l6ZXMubGcpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJG1haW5OYXYudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgJGV4dHJhTWVudS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICAkbWFpbk5hdlBhcmVudExpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkd2luZG93LndpZHRoKCk7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLmxnKSB7XG4gICAgICBjb25zdCAkbWVudVBhcmVudCA9ICQodGhpcykucGFyZW50KCcuanMtbWVudS1wYXJlbnQnKTtcblxuICAgICAgaWYgKHdpbmRvd1dpZHRoIDwgZ2xvYmFsU3RhdGUuc2NyZWVuU2l6ZXMuc21kKSB7XG4gICAgICAgIGlmICgkbWVudVBhcmVudC5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAkbWVudVBhcmVudC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG1lbnVQYXJlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID49IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLnNtZCAmJiB3aW5kb3dXaWR0aCA8IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLnhtZCkge1xuICAgICAgICAkKCcuanMtbWVudS1wYXJlbnQuaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkbWVudVBhcmVudC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID49IGdsb2JhbFN0YXRlLnNjcmVlblNpemVzLnhtZCAmJiB3aW5kb3dXaWR0aCA8PSBnbG9iYWxTdGF0ZS5zY3JlZW5TaXplcy5sZykge1xuICAgICAgICAkbWVudVBhcmVudC5zaWJsaW5ncygnLmlzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJG1lbnVQYXJlbnQudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJGJ0blByb2ZpbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkd2luZG93LndpZHRoKCkgPCBnbG9iYWxTdGF0ZS5zY3JlZW5TaXplcy54bWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICRleHRyYU1lbnUudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJG1haW5OYXYucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJGJ0blRvZ2dsZU5hdi5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkYm9keS50b2dnbGVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgfVxuICB9KTtcblxuICAkZXh0cmFNZW51Lm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbigpIHtcbiAgICAkZXh0cmFNZW51LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG59KShqUXVlcnkpO1xuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQgSm1nUG9wdXAgZnJvbSAnLi9qbWctcG9wdXAubGliJztcbmltcG9ydCB7IGltYWdlTGF6eUxvYWRlciB9IGZyb20gJy4vLi4vLi4vY29yZS9qcy9pbWFnZUxvYWRlci5qcyc7XG5pbXBvcnQgeyBhdHRhY2hFdmVudHNPbkZvcm1FbGVtZW50cywgZml4Rm9ybUZpZWxkSGVpZ2h0IH0gZnJvbSAnLi8uLi8uLi9jb3JlL2pzL2hlbHBlcnMuanMnO1xuaW1wb3J0IHsgZ2xvYmFsU3RhdGUgfSBmcm9tICcuL3R3LWdsb2JhbC1zdGF0ZSc7XG5cbihmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICByZXF1aXJlKCcuL21haW4tbmF2Jyk7XG4gIHJlcXVpcmUoJy4vc2VhcmNoYmFyJyk7XG5cbiAgJCgnLmpzLWJ0bi1sYXRlc3QtYXJ0aWNsZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiBidG5MYXRlc3RBcnRpY2xlcygpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAkdGhpc1xuICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgLnNpYmxpbmdzKCcuYnRuJylcbiAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAkKCcuJyArIHRhcmdldClcbiAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgIC5zaWJsaW5ncygnLmpzLWxhdGVzdC1hcnRpY2xlcy1saXN0LmlzLWFjdGl2ZScpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICB9KTtcblxuICBNaWNyb01vZGFsLmluaXQoe1xuICAgIG9uU2hvdzogKCkgPT4ge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcbiAgICB9LFxuICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgfSxcbiAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlXG4gIH0pO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpKSB7XG4gICAgYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMoJy5mb3JtIGlucHV0LCAuZm9ybSB0ZXh0YXJlYScpO1xuICB9XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiByZXNpemVXaW5kb3dIYXBwZW5pbmcoKSB7XG4gICAgLy9UT0RPOiByZXZpc2l0IHRoaXMsIG1heWJlIHVzZSByeGpzIG9yIE11dGF0aW9uT2JzZXJ2ZXI/XG4gICAgZml4Rm9ybUZpZWxkSGVpZ2h0KCcuZm9ybSBpbnB1dCwgLmZvcm0gdGV4dGFyZWEnKTtcbiAgfSk7XG5cbiAgd2luZG93LlBvcHVwID0gbmV3IEptZ1BvcHVwKHsgaWQ6ICdnbG9iYWwtcG9wdXAnIH0pO1xuXG4gICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zY3JvbGxQYXVzZSkge1xuICAgICAgZ2xvYmFsU3RhdGUuc2Nyb2xsUGF1c2UgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUubG9hZGFibGVJbWFnZXMgPSBpbWFnZUxhenlMb2FkZXIoZ2xvYmFsU3RhdGUubG9hZGFibGVJbWFnZXMpO1xuICAgICAgICBnbG9iYWxTdGF0ZS5zY3JvbGxQYXVzZSA9IGZhbHNlO1xuICAgICAgfSwgMTI1KTtcbiAgICB9XG4gIH0pO1xuICBnbG9iYWxTdGF0ZS5sb2FkYWJsZUltYWdlcyA9IGltYWdlTGF6eUxvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKSk7XG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICBsZXQgc2VhcmNoQmFyVGltZW91dCA9IG51bGw7XG4gIGxldCBzZWFyY2hCYXJWYWx1ZSA9ICcnO1xuICBsZXQgc2NyaXB0QWRkZWQgPSBmYWxzZTtcbiAgbGV0IHNlYXJjaENsaWNrRXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgIHZpZXc6IHdpbmRvd1xuICB9KTtcbiAgY29uc3QgJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0ICRzZWFyY2hUb2dnbGVCdXR0b24gPSAkYm9keS5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLXNlYXJjaC10b2dnbGUnKTtcbiAgY29uc3QgJHNlYXJjaENvbnRhaW5lciA9ICRib2R5LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtY29udGFpbmVyJyk7XG4gIGNvbnN0ICR0b3BTZWFyY2ggPSAkc2VhcmNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgJGJ0bkNsb3NlU2VhcmNoID0gJHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtY2xvc2Utc2VhcmNoJyk7XG4gIGNvbnN0ICRwZXJmb3JtU2VhcmNoID0gJHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLXNlYXJjaCcpO1xuICBsZXQgJGdvb2dsZVNlYXJjaERpdiA9IG51bGw7XG5cbiAgY29uc3QgdG9nZ2xlU2VhcmNoID0gKCkgPT4ge1xuICAgICRzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG5cbiAgICBpZiAoJHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAkYm9keS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaXMtYWN0aXZlJyk7XG4gICAgICBpZiAoIXNjcmlwdEFkZGVkKSB7XG4gICAgICAgIGxldCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vY3NlLmdvb2dsZS5jb20vY3NlLmpzP2N4PTU2YWJlZGU2OGNiNWYwOGI1Jyk7XG4gICAgICAgICRzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcbiAgICAgICAgc2NyaXB0QWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtaXMtYWN0aXZlJyk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfTtcblxuICAkc2VhcmNoVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoKTtcbiAgJGJ0bkNsb3NlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoKTtcblxuICAvLyBBdHRhY2hlIHF1aWNrIHNlYXJjaCBmdW5jdGlvbmFsaXR5IHRvIHRoZSB0b3Agc2VhcmNoIGJhclxuICAkdG9wU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgJGdvb2dsZVNlYXJjaERpdiA9ICRnb29nbGVTZWFyY2hEaXYgfHwgJHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjX19fZ2NzZV8wJyk7XG4gIH0pO1xuICAkdG9wU2VhcmNoLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkge1xuICAgIHNlYXJjaEJhclZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgfTtcbiAgJHRvcFNlYXJjaC5vbmtleXVwID0gZnVuY3Rpb24oZSkge1xuICAgIGxldCBzZWFyY2hWYWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHNlYXJjaEJhclRpbWVvdXQpO1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gJyNnc2MudGFiPTAmZ3NjLnE9JyArIHRvU25ha2VDYXNlKHNlYXJjaFZhbCkgKyAnJmdzYy5wYWdlPTEnO1xuICAgICAgJGdvb2dsZVNlYXJjaERpdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoQmFyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnI2dzYy50YWI9MCZnc2MucT0nICsgdG9TbmFrZUNhc2Uoc2VhcmNoVmFsKSArICcmZ3NjLnBhZ2U9MSc7XG4gICAgICAgIGRvVGFnU2VhcmNoKCk7XG4gICAgICB9LCA4NTApO1xuICAgICAgJGdvb2dsZVNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgIGlmICghc2VhcmNoVmFsKSB7XG4gICAgICAgICRnb29nbGVTZWFyY2hEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gICRwZXJmb3JtU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gJyNnc2MudGFiPTAmZ3NjLnE9JyArIHRvU25ha2VDYXNlKCR0b3BTZWFyY2gudmFsdWUpICsgJyZnc2MucGFnZT0xJztcbiAgfSk7XG5cbiAgZG9jdW1lbnQub25rZXl1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiAkc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICRzZWFyY2hUb2dnbGVCdXR0b24uZGlzcGF0Y2hFdmVudChzZWFyY2hDbGlja0V2ZW50KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRvVGFnU2VhcmNoID0gKCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gJCgnI3RvcC1zZWFyY2gnKTtcbiAgICBsZXQgc2VhcmNoVGFyZ2V0ID0gJCgnLmpzLXF1aWNrLXNlYXJjaC10YXJnZXQnKTtcbiAgICBsZXQgc2VhcmNoVGVybSA9IGVsZW1lbnQudmFsKCk7XG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XG4gICAgICBzZWFyY2hUYXJnZXQuaHRtbCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaFRhcmdldC5odG1sKCc8aW1nIHNyYz1cIi9pbWcvbG9hZGluZy5naWZcIiBjbGFzcz1cImxvYWRpbmdcIj4nKTtcbiAgICAgIGZldGNoKCcvcXVpY2stc2VhcmNoLycgKyBzZWFyY2hUZXJtKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNlYXJjaFRhcmdldC5odG1sKGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvU25ha2VDYXNlID0gc3RyID0+XG4gICAgICBzdHIgJiZcbiAgICAgIHN0clxuICAgICAgICAgIC5tYXRjaCgvW0EtWl17Mix9KD89W0EtWl1bYS16XStbMC05XSp8XFxiKXxbQS1aXT9bYS16XStbMC05XSp8W0EtWl18WzAtOV0rL2cpXG4gICAgICAgICAgLm1hcCh4ID0+IHgudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAuam9pbignKycpO1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBnbG9iYWxTdGF0ZSA9IHtcbiAgbG9hZGFibGVJbWFnZXM6IG51bGwsXG4gIHNjcm9sbFBhdXNlOiBmYWxzZSxcbiAgc2NyZWVuU2l6ZXM6IHtcbiAgICBzbTogMzc1LFxuICAgIHNtZDogNjY3LFxuICAgIG1kOiA3NjgsXG4gICAgeG1kOiA5ODAsXG4gICAgbGc6IDEwMjQsXG4gICAgeGxnOiAxMTYwLFxuICAgIHh4bGc6IDEyNjAsXG4gICAgbWF4V2lkdGg6IDExMjAsXG4gICAgZXh0ZXJuYWxNYXhXaWR0aDogMTY0OFxuICB9XG59O1xuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQgeyBjaGVja0lmVXNlckFscmVhZHlMb2dnZWRJbiwgcmVzZXRNb2RhbEZvcm1FcnJvck1lc3NhZ2VzLCBqbWdBamF4IH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHRyaWdnZXJHdGFnRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4oZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyB0aGUgcG9wdXBzOlxuICAgKlxuICAgKiBHRVQ6IC9wb3B1cC1yZW5kZXIvbG9naW5cbiAgICogR0VUOiAvcG9wdXAtcmVuZGVyL3NpZ24tdXBcbiAgICogR0VUOiAvcG9wdXAtcmVuZGVyL2VtYWlsLXZlcmlmaWVkXG4gICAqIEdFVDogL3BvcHVwLXJlbmRlci92ZXJpZmljYXRpb24tbWFpbC1zZW50XG4gICAqXG4gICAqIEV4cGVjdGVkIHJlc3BvbnNlOlxuICAgKiB7XG4gICAqICAgIFwic3RhdHVzXCI6IHRydWUsXG4gICAqICAgIFwiaHRtbFwiOiBcIjxyYXcgaHRtbCBzdHJpbmc+PGhlcmU+XCJcbiAgICogfVxuICAgKlxuICAgKiAtIE9SIC1cbiAgICpcbiAgICogUmVzcG9uc2Ugc3RhdHVzIDQwNCB3aGVuIGNvdWxkbid0IGZpbmQgdGhlIHRlbXBsYXRlXG4gICAqL1xuXG4gIGNvbnN0ICRidG5TdWJtaXRMb2dpbkZvcm0gPSAkKCcuanMtc3VibWl0LWxvZ2luJyk7XG4gIGNvbnN0ICRyZWdpc3RlckZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJyk7XG4gIGNvbnN0ICRidG5TdWJtaXRSZWdpc3RlckZvcm0gPSAkKCcuanMtc3VibWl0LXJlZ2lzdGVyJyk7XG4gIGNvbnN0ICRidG5Mb2dvdXQgPSAkKCcuanMtYnRuLWxvZ291dCcpO1xuICBjb25zdCAkYnRuUHJvZmlsZSA9ICQoJy5qcy1idG4tcHJvZmlsZScpO1xuXG4gICRidG5TdWJtaXRMb2dpbkZvcm0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNoZWNrSWZVc2VyQWxyZWFkeUxvZ2dlZEluKG1lbWJlckxvZ2luLCAkKHRoaXMpKTtcbiAgfSk7XG5cbiAgJGJ0blN1Ym1pdFJlZ2lzdGVyRm9ybS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1lbWJlclJlZ2lzdHJhdGlvbigpO1xuICB9KTtcblxuICAkYnRuTG9nb3V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ291dCc7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1lbWJlckxvZ2luKCkge1xuICAgIGxldCAkbG9naW5Gb3JtID0gJCgnI2xvZ2luRm9ybScpO1xuICAgIGxldCBmb3JtRGF0YSA9ICRsb2dpbkZvcm0uc2VyaWFsaXplKCk7XG4gICAgY29uc3QgJGJ0blN1Ym1pdCA9ICQoJy5qcy1zdWJtaXQtbG9naW4nKTtcbiAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJGxvZ2luRm9ybS5wYXJlbnRzKCcubW9kYWwnKSk7XG5cbiAgICAkYnRuU3VibWl0LmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAkbG9naW5Gb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgIHRyaWdnZXJHdGFnRXZlbnQoJGJ0blN1Ym1pdCk7XG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdvcGVuJykpIHtcbiAgICAgICAgICBNaWNyb01vZGFsLmNsb3NlKCdwb3B1cC1sb2dpbicpO1xuICAgICAgICAgIHN3aXRjaCAoZGF0YS5vcGVuKSB7XG4gICAgICAgICAgICBjYXNlICdmcHAnOlxuICAgICAgICAgICAgICBQb3B1cC5mb3Jnb3RQYXNzd29yZFByb2JsZW0ub3BlbigpOyAvL1RPRE86IGRvZXMgaXQgYXBwbHkgZm9yIFRXP1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZwZic6XG4gICAgICAgICAgICAgIFBvcHVwLmZvcmdvdHRlblBhc3N3b3JkRmFzdC5vcGVuKCk7IC8vVE9ETzogZG9lcyBpdCBhcHBseSBmb3IgVFc/XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gJGxvZ2luRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibmV4dFwiXScpO1xuXG4gICAgICAgICAgaWYgKG5leHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUG9wdXAuZW1haWxWZXJpZmljYXRpb25TZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAkYnRuU3VibWl0LnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09ICdVbmNvbmZpcm1lZCBlbWFpbCBhZGRyZXNzJykge1xuICAgICAgICAgIFBvcHVwLmVtYWlsVW5jb25maXJtZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gJ1Bhc3N3b3JkIFJlc2V0IFJlcXVpcmVkJykge1xuICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkKCk7XG4gICAgICAgICAgLy9NLk1vZGFsLmdldEluc3RhbmNlKCQoJyNyZXNldC1wYXNzd29yZC1yZXF1aXJlZCcpKS5vcGVuKCk7XG4gICAgICAgICAgLy90ZW1wb3JhcnkgZml4IHVudGlsIHdlIGhhdmUgYSBuZXcgbW9kYWxcbiAgICAgICAgICAkKCcjcGFzc3dvcmQtaG9sZGVyIC5oZWxwZXItdGV4dCcpLmh0bWwoJ1lvdSBuZWVkIHRvIHNldHVwIGEgbmV3IHBhc3N3b3JkIHRvIHVzZSB0aGUgbmV3IENhdGVyZXIgd2Vic2l0ZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsZWRBamF4KGRhdGEsIHN0YXR1cywgJ2xvZ2luRm9ybScpO1xuICAgICAgICAgICRidG5TdWJtaXQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZW1iZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgbGV0ICRyZWdpc3RlckZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gJHJlZ2lzdGVyRm9ybS5zZXJpYWxpemUoKTtcbiAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJHJlZ2lzdGVyRm9ybS5wYXJlbnRzKCcubW9kYWwnKSk7XG5cbiAgICAkYnRuU3VibWl0UmVnaXN0ZXJGb3JtLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAkcmVnaXN0ZXJGb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICB0cmlnZ2VyR3RhZ0V2ZW50KCRidG5TdWJtaXRSZWdpc3RlckZvcm0pO1xuICAgICAgICAgIE1pY3JvTW9kYWwuc2hvdygncG9wdXAtc2lnbi11cCcpOyAvLz8/P1xuICAgICAgICAgIE1pY3JvTW9kYWwuY2xvc2UoJ3BvcHVwLXNpZ24tdXAnKTsgLy8/Pz9cbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnb3BlbicpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGEub3Blbikge1xuICAgICAgICAgICAgICBjYXNlICdmcHAnOlxuICAgICAgICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkUHJvYmxlbS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2ZwZic6XG4gICAgICAgICAgICAgICAgUG9wdXAuZm9yZ290dGVuUGFzc3dvcmRGYXN0Lm9wZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9ICRyZWdpc3RlckZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm5leHRcIl0nKTtcbiAgICAgICAgICAgIGlmIChuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgUG9wdXAuZW1haWxWZXJpZmljYXRpb25TZW50KCk7XG4gICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRyZWdpc3RlckZvcm0uZmluZCgnLmZvcm0tc3VibWlzc2lvbi1lcnJvciBzcGFuJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAkYnRuU3VibWl0UmVnaXN0ZXJGb3JtLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09ICdVbmNvbmZpcm1lZCBlbWFpbCBhZGRyZXNzJykge1xuICAgICAgICAgIFBvcHVwLmVtYWlsVW5jb25maXJtZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gJ1Bhc3N3b3JkIFJlc2V0IFJlcXVpcmVkJykge1xuICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkKCk7XG4gICAgICAgICAgLy9NLk1vZGFsLmdldEluc3RhbmNlKCQoJyNyZXNldC1wYXNzd29yZC1yZXF1aXJlZCcpKS5vcGVuKCk7XG4gICAgICAgICAgLy90ZW1wb3JhcnkgZml4IHVudGlsIHdlIGhhdmUgYSBuZXcgbW9kYWxcbiAgICAgICAgICAkKCcjcGFzc3dvcmQtaG9sZGVyIC5oZWxwZXItdGV4dCcpLmh0bWwoJ1lvdSBuZWVkIHRvIHNldHVwIGEgbmV3IHBhc3N3b3JkIHRvIHVzZSB0aGUgbmV3IENhdGVyZXIgd2Vic2l0ZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsZWRBamF4KGRhdGEsIHN0YXR1cywgJ2xvZ2luRm9ybScpO1xuICAgICAgICAgICRidG5TdWJtaXRSZWdpc3RlckZvcm0uYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZmljYXRpb25DaGVjaygpIHtcbiAgICBsZXQgdG9rZW4gPSAnPzcyM2FhODJhODNjMjc4ZDVlN2U3YmU5YjEwOWI0MDZhPSc7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YodG9rZW4pID4gMCkge1xuICAgICAgbGV0IHN0YXRlT2JqID0ge307XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZU9iaiwgZG9jdW1lbnQudGl0bGUsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICBNaWNyb01vZGFsLnNob3coJ3BvcHVwLWVtYWlsLXZlcmlmaWVkJyk7XG4gICAgfVxuICB9XG5cbiAgdmVyaWZpY2F0aW9uQ2hlY2soKTtcbn0pKGpRdWVyeSk7XG5cbi8vVE9ETzogcmVmYWN0b3IgdGhlIGV4aXN0aW5nIHVzZXIuanMgY29kZSBkb3duIGhlcmVcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAoKSA9PiB7XG4gIGxldCAkZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZW1haWwtaW5wdXQnKS52YWx1ZTtcbiAgbGV0ICRwd2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcGFzc3dvcmQtaW5wdXQnKS52YWx1ZTtcbiAgY2hlY2tJZlVzZXJBbHJlYWR5TG9nZ2VkSW4oXG4gICAgam1nQWpheCh7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7IGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcHdkIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW4gZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkQ2hhbmdlID0gKCkgPT4ge1xuICBsZXQgJHB3ZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRfY3JlYXRlJykudmFsdWU7XG4gIGxldCAkcHdkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZF9jb25maXJtYXRpb25fY3JlYXRlJykudmFsdWU7XG4gIGlmICgkcHdkMSAhPSAkcHdkMikge1xuICAgIGFsZXJ0KCdQYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIGRvIG5vdCBub3QgbWF0Y2ghJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0ICRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVBhc3N3b3JkRm9ybScpO1xuICBsZXQgdXJsID0gJGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgam1nQWpheCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeyBwYXNzd29yZF9maWVsZDogJHB3ZDEsIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJHB3ZDIgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIFBvcHVwLnBhc3N3b3JkQ2hhbmdlZCgpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICBhbGVydCgnUGFzc3dvcmQgdXBkYXRlIGZhaWxlZC4nKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=