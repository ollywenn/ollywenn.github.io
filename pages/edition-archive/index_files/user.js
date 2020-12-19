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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/*!******************************************!*\
  !*** multi ./resources/twuae/js/user.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/js/user.js */"./resources/twuae/js/user.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taWNyb21vZGFsL2Rpc3QvbWljcm9tb2RhbC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2NvcmUvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY29yZS9qcy9pbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvanMvdHctZ2xvYmFsLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy91c2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIm8iLCJtaW5MZW4iLCJuIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIk1pY3JvTW9kYWwiLCJGT0NVU0FCTEVfRUxFTUVOVFMiLCJNb2RhbCIsIl9yZWYiLCJ0YXJnZXRNb2RhbCIsIl9yZWYkdHJpZ2dlcnMiLCJ0cmlnZ2VycyIsIl9yZWYkb25TaG93Iiwib25TaG93IiwiX3JlZiRvbkNsb3NlIiwib25DbG9zZSIsIl9yZWYkb3BlblRyaWdnZXIiLCJvcGVuVHJpZ2dlciIsIl9yZWYkY2xvc2VUcmlnZ2VyIiwiY2xvc2VUcmlnZ2VyIiwiX3JlZiRvcGVuQ2xhc3MiLCJvcGVuQ2xhc3MiLCJfcmVmJGRpc2FibGVTY3JvbGwiLCJkaXNhYmxlU2Nyb2xsIiwiX3JlZiRkaXNhYmxlRm9jdXMiLCJkaXNhYmxlRm9jdXMiLCJfcmVmJGF3YWl0Q2xvc2VBbmltYXQiLCJhd2FpdENsb3NlQW5pbWF0aW9uIiwiX3JlZiRhd2FpdE9wZW5BbmltYXRpIiwiYXdhaXRPcGVuQW5pbWF0aW9uIiwiX3JlZiRkZWJ1Z01vZGUiLCJkZWJ1Z01vZGUiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJyZWdpc3RlclRyaWdnZXJzIiwiYXBwbHkiLCJvbkNsaWNrIiwiYmluZCIsIm9uS2V5ZG93biIsInZhbHVlIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwiX2tleSIsImZpbHRlciIsIkJvb2xlYW4iLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNob3dNb2RhbCIsIl90aGlzMiIsInVuZGVmaW5lZCIsImFjdGl2ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxCZWhhdmlvdXIiLCJhZGRFdmVudExpc3RlbmVycyIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0Rm9jdXNUb0ZpcnN0Tm9kZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImZvY3VzIiwicmVtb3ZlIiwiY2xvc2VNb2RhbEJ5SWQiLCJ0b2dnbGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImFzc2lnbiIsInN0eWxlIiwib3ZlcmZsb3ciLCJoYXNBdHRyaWJ1dGUiLCJrZXlDb2RlIiwicmV0YWluRm9jdXMiLCJnZXRGb2N1c2FibGVOb2RlcyIsIm5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIl90aGlzMyIsImZvY3VzYWJsZU5vZGVzIiwibm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyIsIm5vZGUiLCJvZmZzZXRQYXJlbnQiLCJjb250YWlucyIsImZvY3VzZWRJdGVtSW5kZXgiLCJpbmRleE9mIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGl2ZU1vZGFsIiwiZ2VuZXJhdGVUcmlnZ2VyTWFwIiwidHJpZ2dlckF0dHIiLCJ0cmlnZ2VyTWFwIiwiYXR0cmlidXRlcyIsInB1c2giLCJ2YWxpZGF0ZU1vZGFsUHJlc2VuY2UiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uY2F0IiwidmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UiLCJ2YWxpZGF0ZUFyZ3MiLCJpbml0Iiwib3B0aW9ucyIsInNob3ciLCJjbG9zZSIsIndpbmRvdyIsInJ1bnRpbWUiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJlcnIiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiUHJvbWlzZSIsIm5leHQiLCJkb25lIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJpc0lFMTEiLCJ0cmltTnVtYmVyVW5pdCIsInBhcnNlSW50Iiwic3RyIiwiZ2V0UGFyYW1ldGVyQnlOYW1lIiwidXJsIiwiaHJlZiIsImRlZmF1bHRWYUx1ZSIsInJlZ2V4IiwicmVzdWx0cyIsIk51bWJlciIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJMZW5ndGgiLCJzdG9yYWdlIiwieCIsImUiLCJpbnRlcnZhbCIsInN0b3JhZ2VBdmFpbGFibGUiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwiRGF0ZSIsInBvcHVsYXRlU3RvcmFnZSIsInJlcXVlc3QiLCJyZXNwIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwiZmluYWxEYXRhIiwibGFzdFVwZGF0ZWQiLCJpbWFnZUxhenlMb2FkZXIiLCJkZWNvZGVVUkkiLCJkIiwiZXhkYXlzIiwiZXhwaXJlcyIsImNuYW1lIiwiY2EiLCJjIiwiZ2V0Q29va2llIiwiJG5vZGUiLCJmb3VuZCIsImZ1bmN0aW9uVG9DaGVjayIsImF0dGFjaEV2ZW50c09uRm9ybUVsZW1lbnRzIiwiZm9ybUlucHV0cyIsImZvcm1GaWVsZCIsImVsIiwiZm9ybUxhYmVsIiwiZml4Rm9ybUZpZWxkSGVpZ2h0IiwiaXNSZXNpemluZyIsInRpbWVyIiwicHJlbG9hZGVkIiwiYmxvY2tzIiwiaXNJblZpZXdwb3J0IiwiaW1hZ2UiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibG9hZENvbXBvc2l0SW1hZ2VzIiwic3RhcnRSZXNpemVUcmFja2luZyIsImxvYWRhYmxlSW1hZ2VzIiwibG9hZE9uZUltYWdlIiwicHJlTG9hZExvd1F1YWxpdHlJbWFnZXMiLCJ0aGVJbWFnZSIsImdldEV4cGVjdGVkSW1hZ2VTaXplIiwiaW1nIiwibG9hZEhRSW1hZ2UiLCJ0aGVTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWdIUSIsInByZUxvYWRMb3dRdWFsaXR5SW1hZ2UiLCJpbWdUYWciLCJ0aGVTcmMiLCJib3VuZGluZyIsImVsZW0iLCIkZWxlbWVudCIsIiQiLCJjYWxsYmFjayIsIiRtb2RhbCIsIiRtb2RhbHMiLCJyZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMiLCIkaGVscGVycyIsImVycm9yRm9ybSIsImFjdGlvbiIsIiRidXR0b24iLCJjYXRlZ29yeSIsImxhYmVsIiwiam1nQWpheCIsImFqYXgiLCJwcm9wZXJ0aWVzIiwic3VjY2VzcyIsImZhaWwiLCJ4aHR0cCIsInAiLCIkYnRuTG9hZE1vcmUiLCJsb2FkTW9yZUZpbmlzaGVkRXZlbnQiLCJsYXN0T2Zmc2V0IiwidG90YWwiLCJjdXJyZW50TnVtYmVyIiwibmV4dE51bWJlciIsIiRhcHBlbmRUYXJnZXQiLCJnZW5lcmF0ZUNsb25lZEFydGljbGVXaXRoRGF0YSIsInNjcm9sbFRvcCIsImdsb2JhbFN0YXRlIiwibGF6eUxvYWRJbWFnZXMiLCIkdGVtcGxhdGUiLCJhcnRpY2xlIiwic2Nyb2xsUGF1c2UiLCJzY3JlZW5TaXplcyIsInNtIiwic21kIiwibWQiLCJ4bWQiLCJsZyIsInhsZyIsInh4bGciLCJtYXhXaWR0aCIsImV4dGVybmFsTWF4V2lkdGgiLCIkYnRuU3VibWl0TG9naW5Gb3JtIiwiJHJlZ2lzdGVyRm9ybSIsIiRidG5TdWJtaXRSZWdpc3RlckZvcm0iLCIkYnRuTG9nb3V0IiwiJGJ0blByb2ZpbGUiLCJjaGVja0lmVXNlckFscmVhZHlMb2dnZWRJbiIsIm1lbWJlclJlZ2lzdHJhdGlvbiIsIiRsb2dpbkZvcm0iLCJmb3JtRGF0YSIsIiRidG5TdWJtaXQiLCJkYXRhVHlwZSIsInRyaWdnZXJHdGFnRXZlbnQiLCJQb3B1cCIsImZhaWxlZEFqYXgiLCJ0b2tlbiIsInN0YXRlT2JqIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwidmVyaWZpY2F0aW9uQ2hlY2siLCJ1c2VyTG9naW4iLCIkZW1haWwiLCIkcHdkIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hhbmdlIiwiJHB3ZDEiLCIkcHdkMiIsImFsZXJ0IiwiJGZvcm0iLCJwYXNzd29yZF9maWVsZCIsInBhc3N3b3JkX2NvbmZpcm1hdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7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LFNBQUssQ0FBTEEsNkNBQUssQ0FBTEE7QUFDQTtBQUNEOztBQUNELE1BQU1DLEtBQUssR0FBRzdWLFFBQVEsQ0FBUkEsY0FBZCxxQkFBY0EsQ0FBZDtBQUNBLE1BQUlpTixHQUFHLEdBQUc0SSxLQUFLLENBQUxBLGFBQVYsUUFBVUEsQ0FBVjtBQUNBM0QsMERBQU8sQ0FBQztBQUNOakYsT0FBRyxFQURHO0FBRU56RixVQUFNLEVBRkE7QUFHTitHLFFBQUksRUFBRTtBQUFFdUgsb0JBQWMsRUFBaEI7QUFBeUJDLDJCQUFxQixFQUFFSjtBQUFoRCxLQUhBO0FBSU50RCxXQUFPLEVBQUUsbUJBQVc7QUFDbEJ3QyxXQUFLLENBQUxBO0FBTEk7QUFPTnZDLFFBQUksRUFBRSxnQkFBVztBQUNmc0QsV0FBSyxDQUFMQSx5QkFBSyxDQUFMQTtBQUNEO0FBVEssR0FBRCxDQUFQMUQ7QUFUSyxFIiwiZmlsZSI6Ii90d3VhZS9qcy91c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIE1pY3JvTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ107XG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSBfcmVmLnRhcmdldE1vZGFsLFxuICAgICAgICAgIF9yZWYkdHJpZ2dlcnMgPSBfcmVmLnRyaWdnZXJzLFxuICAgICAgICAgIHRyaWdnZXJzID0gX3JlZiR0cmlnZ2VycyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHRyaWdnZXJzLFxuICAgICAgICAgIF9yZWYkb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICAgICAgb25TaG93ID0gX3JlZiRvblNob3cgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvblNob3csXG4gICAgICAgICAgX3JlZiRvbkNsb3NlID0gX3JlZi5vbkNsb3NlLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfcmVmJG9uQ2xvc2UgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkNsb3NlLFxuICAgICAgICAgIF9yZWYkb3BlblRyaWdnZXIgPSBfcmVmLm9wZW5UcmlnZ2VyLFxuICAgICAgICAgIG9wZW5UcmlnZ2VyID0gX3JlZiRvcGVuVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC10cmlnZ2VyJyA6IF9yZWYkb3BlblRyaWdnZXIsXG4gICAgICAgICAgX3JlZiRjbG9zZVRyaWdnZXIgPSBfcmVmLmNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBjbG9zZVRyaWdnZXIgPSBfcmVmJGNsb3NlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ2RhdGEtbWljcm9tb2RhbC1jbG9zZScgOiBfcmVmJGNsb3NlVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJG9wZW5DbGFzcyA9IF9yZWYub3BlbkNsYXNzLFxuICAgICAgICAgIG9wZW5DbGFzcyA9IF9yZWYkb3BlbkNsYXNzID09PSB2b2lkIDAgPyAnaXMtb3BlbicgOiBfcmVmJG9wZW5DbGFzcyxcbiAgICAgICAgICBfcmVmJGRpc2FibGVTY3JvbGwgPSBfcmVmLmRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgZGlzYWJsZVNjcm9sbCA9IF9yZWYkZGlzYWJsZVNjcm9sbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVTY3JvbGwsXG4gICAgICAgICAgX3JlZiRkaXNhYmxlRm9jdXMgPSBfcmVmLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXMgPSBfcmVmJGRpc2FibGVGb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVGb2N1cyxcbiAgICAgICAgICBfcmVmJGF3YWl0Q2xvc2VBbmltYXQgPSBfcmVmLmF3YWl0Q2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF3YWl0Q2xvc2VBbmltYXQsXG4gICAgICAgICAgX3JlZiRhd2FpdE9wZW5BbmltYXRpID0gX3JlZi5hd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gX3JlZiRhd2FpdE9wZW5BbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRPcGVuQW5pbWF0aSxcbiAgICAgICAgICBfcmVmJGRlYnVnTW9kZSA9IF9yZWYuZGVidWdNb2RlLFxuICAgICAgICAgIGRlYnVnTW9kZSA9IF9yZWYkZGVidWdNb2RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWdNb2RlO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBtb2RhbFxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTsgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcGFzc2VkIGNvbmZpZ1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgZGVidWdNb2RlOiBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyOiBvcGVuVHJpZ2dlcixcbiAgICAgICAgY2xvc2VUcmlnZ2VyOiBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9wZW5DbGFzczogb3BlbkNsYXNzLFxuICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbjogYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uOiBhd2FpdE9wZW5BbmltYXRpb24sXG4gICAgICAgIGRpc2FibGVGb2N1czogZGlzYWJsZUZvY3VzXG4gICAgICB9OyAvLyBSZWdpc3RlciBjbGljayBldmVudHMgb25seSBpZiBwcmUgYmluZGluZyBldmVudExpc3RlbmVyc1xuXG4gICAgICBpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkgdGhpcy5yZWdpc3RlclRyaWdnZXJzLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VycykpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwicmVnaXN0ZXJUcmlnZ2Vyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyaWdnZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHRyaWdnZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlcnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd01vZGFsKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYXdhaXRPcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgX3RoaXMyLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHZhciBtb2RhbCA9IHRoaXMubW9kYWw7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2VuYWJsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsIHRoaXMuYWN0aXZlRWxlbWVudCwgZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdENsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5DbGFzcyA9IHRoaXMuY29uZmlnLm9wZW5DbGFzczsgLy8gPC0gb2xkIHNjaG9vbCBmdHdcblxuICAgICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUob3BlbkNsYXNzKTtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlTW9kYWxCeUlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWwpIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxCZWhhdmlvdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvZHkuc3R5bGUsIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTsgLy8gZXNjXG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHRoaXMucmV0YWluRm9jdXMoZXZlbnQpOyAvLyB0YWJcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Rm9jdXNhYmxlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVOb2RlcygpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShub2RlcykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmllcyB0byBzZXQgZm9jdXMgb24gYSBub2RlIHdoaWNoIGlzIG5vdCBhIGNsb3NlIHRyaWdnZXJcbiAgICAgICAqIGlmIG5vIG90aGVyIG5vZGVzIGV4aXN0IHRoZW4gZm9jdXNlcyBvbiBmaXJzdCBjbG9zZSB0cmlnZ2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRGb2N1c1RvRmlyc3ROb2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc2FibGVGb2N1cykgcmV0dXJuO1xuICAgICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7IC8vIG5vIGZvY3VzYWJsZSBub2Rlc1xuXG4gICAgICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gcmVtb3ZlIG5vZGVzIG9uIHdob3NlIGNsaWNrLCB0aGUgbW9kYWwgY2xvc2VzXG4gICAgICAgIC8vIGNvdWxkIG5vdCB0aGluayBvZiBhIGJldHRlciBuYW1lIDooXG5cbiAgICAgICAgdmFyIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKF90aGlzMy5jb25maWcuY2xvc2VUcmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2Rlc1doaWNoQXJlTm90Q2xvc2VUYXJnZXRzLmxlbmd0aCA+IDApIG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHNbMF0uZm9jdXMoKTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID09PSAwKSBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXRhaW5Gb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsdGVycyBub2RlcyB3aGljaCBhcmUgaGlkZGVuIHRvIHByZXZlbnRcbiAgICAgICAgICogZm9jdXMgbGVhayBvdXRzaWRlIG1vZGFsXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9KTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA+IDAgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICB2YXIgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIHZhciBnZW5lcmF0ZVRyaWdnZXJNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZVRyaWdnZXJNYXAodHJpZ2dlcnMsIHRyaWdnZXJBdHRyKSB7XG4gICAgdmFyIHRyaWdnZXJNYXAgPSBbXTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kYWwgPSB0cmlnZ2VyLmF0dHJpYnV0ZXNbdHJpZ2dlckF0dHJdLnZhbHVlO1xuICAgICAgaWYgKHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID09PSB1bmRlZmluZWQpIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdID0gW107XG4gICAgICB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXS5wdXNoKHRyaWdnZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmlnZ2VyTWFwO1xuICB9O1xuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgYSBtb2RhbCBvZiB0aGUgZ2l2ZW4gaWQgZXhpc3RzXG4gICAqIGluIHRoZSBET01cbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCAgVGhlIGlkIG9mIHRoZSBtb2RhbFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBmdW5jdGlvbiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChpZCwgXCInXCIpLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnSUQgc29tZXdoZXJlIGluIHlvdXIgY29kZS4gUmVmZXIgZXhhbXBsZSBiZWxvdyB0byByZXNvbHZlIGl0LicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgYXJlIG1vZGFsIHRyaWdnZXJzIHByZXNlbnRcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgQW4gYXJyYXkgb2YgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIHZhciB2YWxpZGF0ZVRyaWdnZXJQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKSB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3UGxlYXNlIHNwZWNpZnkgYXQgbGVhc3Qgb25lICVjJ21pY3JvbW9kYWwtdHJpZ2dlcidcIiwgJ2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2RhdGEgYXR0cmlidXRlLicpO1xuICAgICAgY29uc29sZS53YXJuKFwiJWNFeGFtcGxlOlwiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBcIjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVxcXCJteS1tb2RhbFxcXCI+PC9hPlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHJpZ2dlcnMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbW9kYWxzXG4gICAqIGFyZSBwcmVzZW50IGluIHRoZSBET01cbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgQXJyYXkgb2YgRE9NIG5vZGVzIHdoaWNoIGhhdmUgZGF0YS10cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlck1hcCBBc3NvY2lhdGl2ZSBhcnJheSBvZiBtb2RhbHMgYW5kIHRoZWlyIHRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIEJpbmRzIGNsaWNrIGhhbmRsZXJzIHRvIGFsbCBtb2RhbCB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChjb25maWcpIHtcbiAgICAvLyBDcmVhdGUgYW4gY29uZmlnIG9iamVjdCB3aXRoIGRlZmF1bHQgb3BlblRyaWdnZXJcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIi5jb25jYXQob3B0aW9ucy5vcGVuVHJpZ2dlciwgXCJdXCIpKSk7IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG5cbiAgICB2YXIgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3codGFyZ2V0TW9kYWwsIGNvbmZpZykge1xuICAgIHZhciBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gY2xlYXIgZXZlbnRzIGluIGNhc2UgcHJldmlvdXMgbW9kYWwgd2Fzbid0IGNsb3NlXG5cbiAgICBpZiAoYWN0aXZlTW9kYWwpIGFjdGl2ZU1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IC8vIHN0b3JlcyByZWZlcmVuY2UgdG8gYWN0aXZlIG1vZGFsXG5cbiAgICBhY3RpdmVNb2RhbCA9IG5ldyBNb2RhbChvcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgIGFjdGl2ZU1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXRNb2RhbCBbVGhlIGlkIG9mIHRoZSBtb2RhbCB0byBjbG9zZV1cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSh0YXJnZXRNb2RhbCkge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzaG93OiBzaG93LFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufSgpO1xud2luZG93Lk1pY3JvTW9kYWwgPSBNaWNyb01vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8vQXZhaWxhYmxlIGZvciBhbGwgcHJvamVjdHNcbmltcG9ydCB7IGltYWdlTGF6eUxvYWRlciB9IGZyb20gJy4vaW1hZ2VMb2FkZXInO1xuXG5leHBvcnQgY29uc3QgaXNJRTExID0gKCkgPT4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5leHBvcnQgY29uc3QgdHJpbU51bWJlclVuaXQgPSBzID0+IHBhcnNlSW50KHMpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5UaXRsZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnOiAnKVsxXS50cmltKCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYXJhbWV0ZXJCeU5hbWUgPSAobmFtZSwgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYsIGRlZmF1bHRWYUx1ZSA9IG51bGwpID0+IHtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpO1xuICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuXG4gIGlmICghcmVzdWx0cykgcmV0dXJuIGRlZmF1bHRWYUx1ZTtcbiAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG5cbiAgcmV0dXJuIE51bWJlcihkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNuaXBwZXRUZXh0KHN0ciwgY2hhckxlbmd0aCA9IDEyMCkge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoL1tcXG5cXHJdKy9nLCAnICcpXG4gICAgLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKVxuICAgIC5zbGljZSgwLCBjaGFyTGVuZ3RoKVxuICAgIC50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG4vL1RPRE86IHdyaXRlIHRlc3QgZm9yIHRoaXNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbVN0b3JhZ2UodXJsLCBrZXksIGludGVydmFsID0gNjAwMDAwKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIC8vIGlmIGRhdGEgbm90IG9uIHN0b3JhZ2Ugb3IgaWYgZGF0YSBvbGRlciB0aGFuIHRoZSBsaW1pdCAoZGVmYXVsdCAxMG1pbiBpbiBtcykgcG9wdWxhdGUgc3RvcmFnZVxuICAgIGlmIChcbiAgICAgICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8XG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpLmxhc3RVcGRhdGVkICsgTnVtYmVyKGludGVydmFsKSA8IERhdGUubm93KClcbiAgICApIHtcbiAgICAgIGF3YWl0IHBvcHVsYXRlU3RvcmFnZSh1cmwsIGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpLmRhdGEgOiBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIE5PIExPQ0FMIFNUT1JBR0UgQVZBSUxBQkxFIHNvIGhpdCB0aGUgZW5kcG9pbnRcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc3QgcmVzcCA9IGZldGNoKHJlcXVlc3QsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZmFpbGVkIHRvIGZldGNoIHRoZSB1cmw6ICcsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UodXJsLCBrZXkpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHJlcXVlc3QsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBmYWlsZWQgdG8gZmV0Y2ggdGhlIHVybDogJywgdXJsKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC50ZXh0KCk7XG4gICAgY29uc3QgZmluYWxEYXRhID0ge1xuICAgICAgbGFzdFVwZGF0ZWQ6IERhdGUubm93KCksXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZmluYWxEYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIGZhaWxlZCB0byBmZXRjaCAnICsga2V5ICsgJyB1cmwgPT4gJyArIHVybCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5TG9hZEltYWdlcyhpbWFnZXMpIHtcbiAgcmV0dXJuIGltYWdlTGF6eUxvYWRlcihpbWFnZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFBhcmFtKG5hbWUpIHtcbiAgdmFyIHJlc3VsdHMgPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJykuZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIGlmIChyZXN1bHRzID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gZGVjb2RlVVJJKHJlc3VsdHNbMV0pIHx8IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUoY25hbWUsIGN2YWx1ZSwgZXhkYXlzKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gIHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JyArIGQudG9VVENTdHJpbmcoKTtcbiAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyAnPScgKyBjdmFsdWUgKyAnOycgKyBleHBpcmVzICsgJztwYXRoPS8nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lKSB7XG4gIHZhciBuYW1lID0gY25hbWUgKyAnPSc7XG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGMgPSBjYVtpXTtcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29va2llKGNuYW1lKSB7XG4gIHZhciB2YWx1ZSA9IGdldENvb2tpZShjbmFtZSk7XG4gIGlmICh2YWx1ZSAhPSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5vZGUoJG5vZGUsIGRhdGEpIHtcbiAgJG5vZGUuaHRtbChkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RTaXplRnJvbVVybCh1cmwpIHtcbiAgbGV0IGZvdW5kID0gJzB4MCc7XG4gIGlmICh0eXBlb2YgdXJsICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgbGV0IHJlZ2V4ID0gL3dcXDooWzAtOV0qKSxoXFw6KFswLTldKikvZztcbiAgICBmb3VuZCA9IHVybC5tYXRjaChyZWdleCk7XG4gICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvdW5kID0gZm91bmRbMF07XG4gICAgICBmb3VuZCA9IGZvdW5kLnNwbGl0KCcsJyk7XG4gICAgICBmb3VuZCA9IGZvdW5kWzBdLnJlcGxhY2UoJ3c6JywgJycpICsgJ3gnICsgZm91bmRbMV0ucmVwbGFjZSgnaDonLCAnJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYge30udG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vLyBpbXBsaWVzIGh0bWwgc3RydWN0dXJlIG9mIC5mb3JtLWZpZWxkIGFzIGEgd3JhcHBlciBmb3IgYSBsYWJlbCArIGlucHV0XG5leHBvcnQgY29uc3QgYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMgPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAvLyBiaW5kIGlucHV0IGV2ZW50c1xuICBmb3JtSW5wdXRzLmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9IGVsLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgY29uc3QgZm9ybUxhYmVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gaW5wdXRGb2N1cygpIHtcbiAgICAgIGlmIChmb3JtTGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWxhYmVsJykpIHtcbiAgICAgICAgZm9ybUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIGlucHV0Qmx1cigpIHtcbiAgICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGZvcm1MYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tbGFiZWwnKSAmJiBmb3JtTGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgIGZvcm1MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHRoaXMgZml4ZXMgdGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgd3JhcHBlciBpbiBjYXNlIHRoZSBsYWJlbCBpcyB0b28gbG9uZ1xuICAgIC8vVE9ETzogY2hlY2sgTXV0YXRpb25PYnNlcnZlciB0byBsaXN0ZW4gdG8gY3NzIGNoYW5nZXMgKGFuZCBkcm9wIHBvc3NpYmxlIG9uIHJlc2l6ZSBsaXN0ZW5lcnMpXG4gICAgaWYgKGZvcm1MYWJlbCAmJiBmb3JtRmllbGQuZGF0YXNldC5zdHJsZW4gPiAzNSkge1xuICAgICAgZm9ybUZpZWxkLnN0eWxlLmhlaWdodCA9IGAke2Zvcm1MYWJlbC5vZmZzZXRIZWlnaHQgKyA1fXB4YDtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gaW1wbGllcyBodG1sIHN0cnVjdHVyZSBvZiAuZm9ybS1maWVsZCBhcyBhIHdyYXBwZXIgZm9yIGEgbGFiZWwgKyBpbnB1dFxuZXhwb3J0IGNvbnN0IGZpeEZvcm1GaWVsZEhlaWdodCA9IHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBmb3JtSW5wdXRzLmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9IGVsLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgY29uc3QgZm9ybUxhYmVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgIC8vIHRoaXMgZml4ZXMgdGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgd3JhcHBlciBpbiBjYXNlIHRoZSBsYWJlbCBpcyB0b28gbG9uZ1xuICAgIC8vVE9ETzogY2hlY2sgTXV0YXRpb25PYnNlcnZlciB0byBsaXN0ZW4gdG8gY3NzIGNoYW5nZXMgKGFuZCBkcm9wIHBvc3NpYmxlIG9uIHJlc2l6ZSBsaXN0ZW5lcnMpXG4gICAgaWYgKGZvcm1MYWJlbCAmJiBmb3JtRmllbGQuZGF0YXNldC5zdHJsZW4gPiAzNSkge1xuICAgICAgZm9ybUZpZWxkLnN0eWxlLmhlaWdodCA9IGAke2Zvcm1MYWJlbC5vZmZzZXRIZWlnaHQgKyA1fXB4YDtcbiAgICB9XG4gIH0pO1xufTtcbiIsImxldCBpc1Jlc2l6aW5nID0gZmFsc2U7XG5sZXQgdGltZXIgPSBudWxsO1xubGV0IHByZWxvYWRlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdGFydFJlc2l6ZVRyYWNraW5nKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGlzUmVzaXppbmcgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKTtcbiAgICAgIGJsb2Nrcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgaWYgKGlzSW5WaWV3cG9ydChpbWFnZSkpIHtcbiAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMgIT0gJycgJiYgaW1hZ2Uuc3JjLmluZGV4T2YoJy90cmFuc3AucG5nJykgPT0gLTEpIHtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltYWdlLnNyYyArICcpJztcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNob3ctYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3N1cHBvcnQtYmFja2dyb3VuZC1mb3ItcmVzaXplJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltYWdlLnNyYyA9ICcvaW1nL3RyYW5zcC5wbmcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlzUmVzaXppbmcgPSB0cnVlO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcblxuICAgICAgICBpbWFnZUxhenlMb2FkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmddJykpO1xuICAgICAgfSxcbiAgICAgIDQ1MCxcbiAgICAgIGV2ZW50XG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUxhenlMb2FkZXIobG9hZGFibGVJbWFnZXMpIHtcbiAgbG9hZENvbXBvc2l0SW1hZ2VzKCk7XG4gIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgIHN0YXJ0UmVzaXplVHJhY2tpbmcoKTtcbiAgfVxuICBpZiAoaXNSZXNpemluZykge1xuICAgIHJldHVybiBsb2FkYWJsZUltYWdlcztcbiAgfVxuICBsb2FkYWJsZUltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICBpZiAoaXNJblZpZXdwb3J0KGltYWdlKSkge1xuICAgICAgbG9hZE9uZUltYWdlKGltYWdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghcHJlbG9hZGVkKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzKCk7XG4gICAgfSwgMjUwMCk7XG4gICAgcHJlbG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBsb2FkYWJsZUltYWdlcztcbn1cblxuZnVuY3Rpb24gbG9hZE9uZUltYWdlKGltYWdlKSB7XG4gIGxldCB0aGVJbWFnZSA9IGdldEV4cGVjdGVkSW1hZ2VTaXplKGltYWdlKTtcbiAgaWYgKFxuICAgIGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVTaXplJykgIT0gdGhlSW1hZ2UgfHxcbiAgICAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMuaW5kZXhPZigndHJhbnNwLnBuZycpID4gMClcbiAgKSB7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXByZVNpemUnLCB0aGVJbWFnZSk7XG4gICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykpIHtcbiAgICAgIGlmIChpbWFnZS5zcmMgPT0gJycpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gdGhlSW1hZ2U7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1zaG93LWJhY2tncm91bmQnKSkge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZy5zcmMgKyAnKSc7XG4gICAgICAgICAgbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPT0gJycpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gdGhlSW1hZ2U7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWcuc3JjICsgJyknO1xuICAgICAgICAgIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFeHBlY3RlZEltYWdlU2l6ZShpbWFnZSkge1xuICBsZXQgdGhlSW1hZ2UgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKTtcbiAgbGV0IHRoZVNpemUgPSAnJztcbiAgLy9OT1RcbiAgaWYgKFxuICAgICFpbWFnZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnaW1hZ2Utd3JhcHBlcicpICYmXG4gICAgIWltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbHBoYS1hcnRpY2xlJykgJiZcbiAgICAhaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1kb250LXJlc2l6ZScpXG4gICkge1xuICAgIGxldCBoZWlnaHQgPSBwYXJzZUludChpbWFnZS5jbGllbnRIZWlnaHQpO1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KGltYWdlLmNsaWVudFdpZHRoKTtcbiAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkge1xuICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2luIGNhc2UgYm90aCBhcmUgemVybyAtIHdlIGF0IGxlYXN0IHRyeVxuICAgICAgICBpZiAoaGVpZ2h0ID09IDApIHtcbiAgICAgICAgICBoZWlnaHQgPSAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhlU2l6ZSA9ICdoOicgKyBoZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGggKyAnLGg6JyArIGhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHRoZUltYWdlLnJlcGxhY2UoJ2Ryb2lkcycsIHRoZVNpemUpO1xuICB9XG4gIC8vVENcbiAgaWYgKGltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS13cmFwcGVyJykgfHwgaW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FscGhhLWFydGljbGUnKSkge1xuICAgIGxldCBoZWlnaHQgPSBwYXJzZUludChpbWFnZS5wYXJlbnROb2RlLmNsaWVudEhlaWdodCk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQoaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRXaWR0aCk7XG4gICAgaWYgKHdpZHRoID09IDAgfHwgaGVpZ2h0ID09IDApIHtcbiAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICB0aGVTaXplID0gJ3c6JyArIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9pbiBjYXNlIGJvdGggYXJlIHplcm8gLSB3ZSBhdCBsZWFzdCB0cnlcbiAgICAgICAgaWYgKGhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gMzAwO1xuICAgICAgICB9XG4gICAgICAgIHRoZVNpemUgPSAnaDonICsgaGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGVTaXplID0gJ3c6JyArIHdpZHRoICsgJyxoOicgKyBoZWlnaHQ7XG4gICAgfVxuICAgIHRoZUltYWdlID0gdGhlSW1hZ2UucmVwbGFjZSgnZHJvaWRzJywgdGhlU2l6ZSk7XG4gIH1cbiAgcmV0dXJuIHRoZUltYWdlO1xufVxuXG5mdW5jdGlvbiBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpIHtcbiAgaWYgKFxuICAgIGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZycpLmluZGV4T2YoJ3F1YWxpdHk9dmFsdWU6MTUnKSA+IDAgfHxcbiAgICAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMuaW5kZXhPZigndHJhbnNwLnBuZycpID4gMClcbiAgKSB7XG4gICAgdmFyIGltZ0hRID0gbmV3IEltYWdlKCk7XG4gICAgaW1nSFEuc3JjID0gdGhlSW1hZ2UucmVwbGFjZSgncXVhbGl0eT12YWx1ZToxNScsICdxdWFsaXR5PXZhbHVlOjg1Jyk7XG4gICAgaW1nSFEub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSkge1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWdIUS5zcmM7XG4gICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNob3ctYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc3VwcG9ydC1iYWNrZ3JvdW5kLWZvci1yZXNpemUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZ0hRLnNyYyArICcpJztcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzKCkge1xuICBpZiAoaXNSZXNpemluZykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwcmVMb2FkTG93UXVhbGl0eUltYWdlcygpO1xuICAgIH0sIDIwMDApO1xuICAgIHJldHVybiAnJztcbiAgfVxuICBsZXQgbG9hZGFibGVJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKTtcbiAgbG9hZGFibGVJbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgaWYgKGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PSAnJyB8fCAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSAmJiBpbWFnZS5zcmMgPT0gJycpKSB7XG4gICAgICBwcmVMb2FkTG93UXVhbGl0eUltYWdlKGltYWdlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29tcG9zaXRJbWFnZXMoKSB7XG4gIGlmIChpc1Jlc2l6aW5nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxvYWRDb21wb3NpdEltYWdlcygpO1xuICAgIH0sIDIwMDApO1xuICAgIHJldHVybiAnJztcbiAgfVxuICBsZXQgbG9hZGFibGVJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zcmNdJyk7XG4gIGxvYWRhYmxlSW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgIGlmIChpbWFnZS5zcmMgPT0gJycpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2UoaW1hZ2UsIHRydWUpO1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2UoaW1hZ2UsIGltZ1RhZykge1xuICBpZiAoaW1nVGFnID09PSB0cnVlKSB7XG4gICAgbGV0IHRoZVNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICB0aGVTcmMgPSB0aGVTcmMucmVwbGFjZSgncXVhbGl0eT12YWx1ZToxNScsICdxdWFsaXR5PXZhbHVlOjYwJyk7XG4gICAgaW1hZ2Uuc3JjID0gdGhlU3JjO1xuICB9IGVsc2Uge1xuICAgIGxldCB0aGVJbWFnZSA9IGdldEV4cGVjdGVkSW1hZ2VTaXplKGltYWdlKTtcbiAgICBpZiAoaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWJnJykuaW5kZXhPZigncXVhbGl0eT12YWx1ZToxNScpID4gMCkge1xuICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmx1clRyYW5zaXRpb24nKTtcbiAgICB9XG4gICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtaW1nJykpIHtcbiAgICAgIGltYWdlLnNyYyA9IHRoZUltYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyB0aGVJbWFnZSArICcpJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJblZpZXdwb3J0KGVsZW0pIHtcbiAgdmFyIGJvdW5kaW5nID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIChcbiAgICBib3VuZGluZy50b3AgPj0gLTMyMCAmJlxuICAgIGJvdW5kaW5nLmxlZnQgPj0gMCAmJlxuICAgIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0ICsgNDUwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyA0NTApICYmXG4gICAgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgKTtcbn1cbiIsImltcG9ydCB7IGxhenlMb2FkSW1hZ2VzIH0gZnJvbSAnLi4vLi4vY29yZS9qcy9oZWxwZXJzJztcbmltcG9ydCB7IGdsb2JhbFN0YXRlIH0gZnJvbSAnLi90dy1nbG9iYWwtc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZlVzZXJBbHJlYWR5TG9nZ2VkSW4oY2FsbGJhY2ssICRlbGVtZW50ID0gbnVsbCkge1xuICBpZiAoJGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAkZWxlbWVudC5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuICB9XG4gIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluIGFscmVhZHlcbiAgJC5nZXQoJy9hdXRoLWNoZWNrJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UgIT09IGZhbHNlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMobW9kYWwpIHtcbiAgY29uc3QgJG1vZGFsID0gJChtb2RhbCk7XG4gIC8vIFJlY3Vyc2l2ZSB0byB0YWNrbGUgYWxsIG1vZGFscyBpZiB0aGUgbW9kYWwgaXMga2lsbGVkIGJ5IGNsaWNraW5nIG9uIHRoZSB1bmRlcmxheSAob3IgaWYgbm8gbW9kYWwgZWxlbSBwcm92aWRlZClcbiAgaWYgKHR5cGVvZiBtb2RhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCAkbW9kYWxzID0gJCgnLm1vZGFsJyk7XG5cbiAgICAkbW9kYWxzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJCh0aGlzKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgZXJyb3JzXG4gIGxldCAkaGVscGVycyA9ICRtb2RhbC5maW5kKCdmb3JtIC5oZWxwZXItdGV4dCcpO1xuXG4gIGlmICgkaGVscGVycy5sZW5ndGggPiAwKSB7XG4gICAgJGhlbHBlcnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLmF0dHIoJ2RhdGEtZXJyb3InLCAnJylcbiAgICAgICAgLmF0dHIoJ2RhdGEtc3VjY2VzcycsICcnKVxuICAgICAgICAuaHRtbCgnJyk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgZXJyb3JGb3JtID0gbnVsbDtcbiAgaWYgKCRtb2RhbC5maW5kKCcuZXJyb3JNZXNzYWdlQ29udGFpbmVyJykubGVuZ3RoID4gMCkge1xuICAgIGVycm9yRm9ybSA9ICRtb2RhbC5maW5kKCcuZXJyb3JNZXNzYWdlQ29udGFpbmVyJyk7XG4gIH0gZWxzZSBpZiAoJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2UnKS5sZW5ndGggPiAwKSB7XG4gICAgZXJyb3JGb3JtID0gJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2UnKTtcbiAgfVxuICBpZiAoZXJyb3JGb3JtICE9PSBudWxsKSB7XG4gICAgZXJyb3JGb3JtLmh0bWwoJycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyR3RhZ0V2ZW50KCRidXR0b24pIHtcbiAgY29uc3QgYWN0aW9uID0gJGJ1dHRvbi5kYXRhKCdndGFnLWFjdGlvbicpO1xuICBjb25zdCBjYXRlZ29yeSA9ICRidXR0b24uZGF0YSgnZ3RhZy1jYXRlZ29yeScpO1xuICBjb25zdCBsYWJlbCA9ICRidXR0b24uZGF0YSgnZ3RhZy1sYWJlbCcpO1xuICBpZiAoYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgY2F0ZWdvcnkgIT09IHVuZGVmaW5lZCAmJiBsYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHtcbiAgICAvLyAgICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIC8vICAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgLy8gICAgIHZhbHVlOiAxXG4gICAgLy8gfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGptZ0FqYXggPSBwcm9wZXJ0aWVzID0+IHtcbiAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzICE9ICdvYmplY3QnKSB7XG4gICAgY29uc29sZS5lcnJvcignSW5jb21taW5nIHByb3BlcnRpZXMgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYXJyYXknKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCEoJ3VybCcgaW4gcHJvcGVydGllcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiT2ggY29tZSdvbiBub3cuLi4gd2l0aG91dCBhIFVSTCBwcm9wZXJ0eT8geW91IGNhbiBkbyBiZXR0ZXIgdGhhbiB0aGF0XCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgYWpheCA9IHtcbiAgICB1cmw6IHByb3BlcnRpZXMudXJsLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IFtdLFxuICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgZmFpbDogbnVsbFxuICB9O1xuICBpZiAoJ21ldGhvZCcgaW4gcHJvcGVydGllcykge1xuICAgIGFqYXgubWV0aG9kID0gcHJvcGVydGllcy5tZXRob2Q7XG4gIH1cbiAgaWYgKCdkYXRhJyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgYWpheC5kYXRhID0gcHJvcGVydGllcy5kYXRhO1xuICB9XG4gIGlmICgnc3VjY2VzcycgaW4gcHJvcGVydGllcykge1xuICAgIGFqYXguc3VjY2VzcyA9IHByb3BlcnRpZXMuc3VjY2VzcztcbiAgfVxuICBpZiAoJ2ZhaWwnIGluIHByb3BlcnRpZXMpIHtcbiAgICBhamF4LmZhaWwgPSBwcm9wZXJ0aWVzLmZhaWw7XG4gIH1cbiAgLy9AdG9kbyB0aGlzIGNhbiBiZSByZWZhY3RvcmVkIHRvIHRoYXQgZmV0Y2ggb3Igd2hhdGV2ZXJcbiAgLy90aGlzIG5vdyBhbGxvd3MgdXMgdG8gaGF2ZSB0aGUgYWpheCBsb2dpYyBpbiBvbmUgcGxhY2UgYW5kIGhhdmUgdGhlIHNpbXBsZSBjYWxsaW5nXG4gIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhamF4LnN1Y2Nlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGFqYXguc3VjY2Vzcyh4aHR0cC5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWpheC5mYWlsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBhamF4LmZhaWwoeGh0dHAucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGxldCBkYXRhID0gJyc7XG4gIC8vc28gd2UgYXJlIGNoZWNraW5nIHdoZXRoZXIgd2UndmUgZ290IGEgc3RyaW5nIG9yIGFuIG9iamVjdFxuICBpZiAodHlwZW9mIGFqYXguZGF0YSA9PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSBhamF4LmRhdGE7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXQncyBhbiBvYmplY3Qgd2UgaGF2ZSB0byBwYXJzZSBpdC4uLiBidXQgaWYgaXQncyBhIEZvcm1EYXRhIHdlIG5lZWQgdG8gZGVhbCB3aXRoIGl0IGRpZmZlcmVudGx5XG4gICAgaWYgKGFqYXguZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICBmb3IgKHZhciBwIG9mIGFqYXguZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAhPSAnJykge1xuICAgICAgICAgIGRhdGEgKz0gJyYnO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgKz0gcFswXSArICc9JyArIHBbMV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vZ29vZCBvbGQgb3JkaW5hcnkgb2JqZWN0IDopXG4gICAgICBPYmplY3Qua2V5cyhhamF4LmRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT0gJycpIHtcbiAgICAgICAgICBkYXRhICs9ICcmJztcbiAgICAgICAgfVxuICAgICAgICBkYXRhICs9IGtleSArICc9JyArIGFqYXguZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgeGh0dHAub3BlbihhamF4Lm1ldGhvZCwgYWpheC51cmwsIHRydWUpO1xuICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIHhodHRwLnNlbmQoZGF0YSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoTG9hZE1vcmVBY3Rpb25zKGdsb2JhbFN0YXRlKSB7XG4gIGNvbnN0ICRidG5Mb2FkTW9yZSA9ICQoJy5qcy1idG4tbG9hZC1tb3JlJyk7XG4gIGNvbnN0IGxvYWRNb3JlRmluaXNoZWRFdmVudCA9IG5ldyBFdmVudCgnbG9hZE1vcmVGaW5pc2hlZCcpO1xuXG4gICRidG5Mb2FkTW9yZS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgbGFzdE9mZnNldCA9ICQoJy5qcy1hcnRpY2xlLXRlbXBsYXRlJylcbiAgICAgIC5sYXN0KClcbiAgICAgIC5vZmZzZXQoKS50b3A7XG4gICAgY29uc3QgdG90YWwgPSAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1saW1pdCcpO1xuICAgIGNvbnN0IGN1cnJlbnROdW1iZXIgPSAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1wYWdlJyk7XG4gICAgY29uc3QgbmV4dE51bWJlciA9IHBhcnNlSW50KGN1cnJlbnROdW1iZXIpICsgMTtcbiAgICBjb25zdCAkYXBwZW5kVGFyZ2V0ID0gJCgnLmpzLWxvYWRtb3JlLXRhcmdldCcpO1xuXG4gICAgJGJ0bkxvYWRNb3JlLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICBpZiAobmV4dE51bWJlciA+IHRvdGFsKSB7XG4gICAgICAkYnRuTG9hZE1vcmUuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSB1cmwgKyAnP3BhZ2U9JyArIG5leHROdW1iZXI7XG5cbiAgICAgICQuZ2V0KHVybCwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5hcnRpY2xlcyAhPT0gdW5kZWZpbmVkICYmIGRhdGEuYXJ0aWNsZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAkLmVhY2goZGF0YS5hcnRpY2xlcywgZnVuY3Rpb24oaW5kZXgsIGFydGljbGUpIHtcbiAgICAgICAgICAgICRhcHBlbmRUYXJnZXQuYXBwZW5kKGdlbmVyYXRlQ2xvbmVkQXJ0aWNsZVdpdGhEYXRhKGFydGljbGUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1saW1pdCcsIGRhdGEubGFzdF9wYWdlKTtcbiAgICAgICAgJGJ0bkxvYWRNb3JlLmF0dHIoJ2RhdGEtcGFnZScsIG5leHROdW1iZXIpO1xuICAgICAgICAkYnRuTG9hZE1vcmUucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobG9hZE1vcmVGaW5pc2hlZEV2ZW50KTtcblxuICAgICAgICBpZiAobmV4dE51bWJlciArIDEgPiB0b3RhbCkge1xuICAgICAgICAgICRidG5Mb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogbGFzdE9mZnNldFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZ2xvYmFsU3RhdGUubG9hZGFibGVJbWFnZXMgPSBsYXp5TG9hZEltYWdlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKSk7XG4gICAgICAgIH0sIDM1MCk7XG4gICAgICB9KS5mYWlsKGZ1bmN0aW9uKCkge1xuICAgICAgICAkYnRuTG9hZE1vcmUucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgJGJ0bkxvYWRNb3JlLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNsb25lZEFydGljbGVXaXRoRGF0YShhcnRpY2xlKSB7XG4gIGxldCAkdGVtcGxhdGUgPSAkKCcuanMtYXJ0aWNsZS10ZW1wbGF0ZScpXG4gICAgLmZpcnN0KClcbiAgICAuY2xvbmUoKTtcblxuICAvL0ZJWE1FOiB0aGUgZm9sbG93aW5nIHRoaW5ncyBuZWVkIHRvIGJlIGNoYW5nZWQuIFRoZSBlbmRwb2ludCBzaG91bGQgb25seSByZXR1cm4gb25lIGRlZmF1bHQgc2l6ZVxuXG4gICR0ZW1wbGF0ZVxuICAgIC5maW5kKCdhID4gaW1nJylcbiAgICAuZmlyc3QoKVxuICAgIC5hdHRyKCdzcmMnLCBhcnRpY2xlLnRodW1ibmFpbCk7XG4gICR0ZW1wbGF0ZVxuICAgIC5maW5kKCcuYXJ0aWNsZVNuaXBwZXQtdGl0bGUgPiBhJylcbiAgICAuZmlyc3QoKVxuICAgIC5odG1sKGFydGljbGUudGl0bGUpO1xuXG4gICR0ZW1wbGF0ZS5maW5kKCdhJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkuYXR0cignaHJlZicsIGFydGljbGUuZnVsbF9zbHVnKTtcbiAgfSk7XG5cbiAgcmV0dXJuICR0ZW1wbGF0ZTtcbn1cbiIsImV4cG9ydCBjb25zdCBnbG9iYWxTdGF0ZSA9IHtcbiAgbG9hZGFibGVJbWFnZXM6IG51bGwsXG4gIHNjcm9sbFBhdXNlOiBmYWxzZSxcbiAgc2NyZWVuU2l6ZXM6IHtcbiAgICBzbTogMzc1LFxuICAgIHNtZDogNjY3LFxuICAgIG1kOiA3NjgsXG4gICAgeG1kOiA5ODAsXG4gICAgbGc6IDEwMjQsXG4gICAgeGxnOiAxMTYwLFxuICAgIHh4bGc6IDEyNjAsXG4gICAgbWF4V2lkdGg6IDExMjAsXG4gICAgZXh0ZXJuYWxNYXhXaWR0aDogMTY0OFxuICB9XG59O1xuIiwiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQgeyBjaGVja0lmVXNlckFscmVhZHlMb2dnZWRJbiwgcmVzZXRNb2RhbEZvcm1FcnJvck1lc3NhZ2VzLCBqbWdBamF4IH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHRyaWdnZXJHdGFnRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4oZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyB0aGUgcG9wdXBzOlxuICAgKlxuICAgKiBHRVQ6IC9wb3B1cC1yZW5kZXIvbG9naW5cbiAgICogR0VUOiAvcG9wdXAtcmVuZGVyL3NpZ24tdXBcbiAgICogR0VUOiAvcG9wdXAtcmVuZGVyL2VtYWlsLXZlcmlmaWVkXG4gICAqIEdFVDogL3BvcHVwLXJlbmRlci92ZXJpZmljYXRpb24tbWFpbC1zZW50XG4gICAqXG4gICAqIEV4cGVjdGVkIHJlc3BvbnNlOlxuICAgKiB7XG4gICAqICAgIFwic3RhdHVzXCI6IHRydWUsXG4gICAqICAgIFwiaHRtbFwiOiBcIjxyYXcgaHRtbCBzdHJpbmc+PGhlcmU+XCJcbiAgICogfVxuICAgKlxuICAgKiAtIE9SIC1cbiAgICpcbiAgICogUmVzcG9uc2Ugc3RhdHVzIDQwNCB3aGVuIGNvdWxkbid0IGZpbmQgdGhlIHRlbXBsYXRlXG4gICAqL1xuXG4gIGNvbnN0ICRidG5TdWJtaXRMb2dpbkZvcm0gPSAkKCcuanMtc3VibWl0LWxvZ2luJyk7XG4gIGNvbnN0ICRyZWdpc3RlckZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJyk7XG4gIGNvbnN0ICRidG5TdWJtaXRSZWdpc3RlckZvcm0gPSAkKCcuanMtc3VibWl0LXJlZ2lzdGVyJyk7XG4gIGNvbnN0ICRidG5Mb2dvdXQgPSAkKCcuanMtYnRuLWxvZ291dCcpO1xuICBjb25zdCAkYnRuUHJvZmlsZSA9ICQoJy5qcy1idG4tcHJvZmlsZScpO1xuXG4gICRidG5TdWJtaXRMb2dpbkZvcm0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNoZWNrSWZVc2VyQWxyZWFkeUxvZ2dlZEluKG1lbWJlckxvZ2luLCAkKHRoaXMpKTtcbiAgfSk7XG5cbiAgJGJ0blN1Ym1pdFJlZ2lzdGVyRm9ybS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1lbWJlclJlZ2lzdHJhdGlvbigpO1xuICB9KTtcblxuICAkYnRuTG9nb3V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ291dCc7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1lbWJlckxvZ2luKCkge1xuICAgIGxldCAkbG9naW5Gb3JtID0gJCgnI2xvZ2luRm9ybScpO1xuICAgIGxldCBmb3JtRGF0YSA9ICRsb2dpbkZvcm0uc2VyaWFsaXplKCk7XG4gICAgY29uc3QgJGJ0blN1Ym1pdCA9ICQoJy5qcy1zdWJtaXQtbG9naW4nKTtcbiAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJGxvZ2luRm9ybS5wYXJlbnRzKCcubW9kYWwnKSk7XG5cbiAgICAkYnRuU3VibWl0LmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAkbG9naW5Gb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgIHRyaWdnZXJHdGFnRXZlbnQoJGJ0blN1Ym1pdCk7XG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdvcGVuJykpIHtcbiAgICAgICAgICBNaWNyb01vZGFsLmNsb3NlKCdwb3B1cC1sb2dpbicpO1xuICAgICAgICAgIHN3aXRjaCAoZGF0YS5vcGVuKSB7XG4gICAgICAgICAgICBjYXNlICdmcHAnOlxuICAgICAgICAgICAgICBQb3B1cC5mb3Jnb3RQYXNzd29yZFByb2JsZW0ub3BlbigpOyAvL1RPRE86IGRvZXMgaXQgYXBwbHkgZm9yIFRXP1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZwZic6XG4gICAgICAgICAgICAgIFBvcHVwLmZvcmdvdHRlblBhc3N3b3JkRmFzdC5vcGVuKCk7IC8vVE9ETzogZG9lcyBpdCBhcHBseSBmb3IgVFc/XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gJGxvZ2luRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibmV4dFwiXScpO1xuXG4gICAgICAgICAgaWYgKG5leHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUG9wdXAuZW1haWxWZXJpZmljYXRpb25TZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAkYnRuU3VibWl0LnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09ICdVbmNvbmZpcm1lZCBlbWFpbCBhZGRyZXNzJykge1xuICAgICAgICAgIFBvcHVwLmVtYWlsVW5jb25maXJtZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gJ1Bhc3N3b3JkIFJlc2V0IFJlcXVpcmVkJykge1xuICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkKCk7XG4gICAgICAgICAgLy9NLk1vZGFsLmdldEluc3RhbmNlKCQoJyNyZXNldC1wYXNzd29yZC1yZXF1aXJlZCcpKS5vcGVuKCk7XG4gICAgICAgICAgLy90ZW1wb3JhcnkgZml4IHVudGlsIHdlIGhhdmUgYSBuZXcgbW9kYWxcbiAgICAgICAgICAkKCcjcGFzc3dvcmQtaG9sZGVyIC5oZWxwZXItdGV4dCcpLmh0bWwoJ1lvdSBuZWVkIHRvIHNldHVwIGEgbmV3IHBhc3N3b3JkIHRvIHVzZSB0aGUgbmV3IENhdGVyZXIgd2Vic2l0ZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsZWRBamF4KGRhdGEsIHN0YXR1cywgJ2xvZ2luRm9ybScpO1xuICAgICAgICAgICRidG5TdWJtaXQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZW1iZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgbGV0ICRyZWdpc3RlckZvcm0gPSAkKCcjcmVnaXN0ZXJGb3JtJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gJHJlZ2lzdGVyRm9ybS5zZXJpYWxpemUoKTtcbiAgICByZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMoJHJlZ2lzdGVyRm9ybS5wYXJlbnRzKCcubW9kYWwnKSk7XG5cbiAgICAkYnRuU3VibWl0UmVnaXN0ZXJGb3JtLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAkcmVnaXN0ZXJGb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICB0cmlnZ2VyR3RhZ0V2ZW50KCRidG5TdWJtaXRSZWdpc3RlckZvcm0pO1xuICAgICAgICAgIE1pY3JvTW9kYWwuc2hvdygncG9wdXAtc2lnbi11cCcpOyAvLz8/P1xuICAgICAgICAgIE1pY3JvTW9kYWwuY2xvc2UoJ3BvcHVwLXNpZ24tdXAnKTsgLy8/Pz9cbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnb3BlbicpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGEub3Blbikge1xuICAgICAgICAgICAgICBjYXNlICdmcHAnOlxuICAgICAgICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkUHJvYmxlbS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2ZwZic6XG4gICAgICAgICAgICAgICAgUG9wdXAuZm9yZ290dGVuUGFzc3dvcmRGYXN0Lm9wZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9ICRyZWdpc3RlckZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm5leHRcIl0nKTtcbiAgICAgICAgICAgIGlmIChuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgUG9wdXAuZW1haWxWZXJpZmljYXRpb25TZW50KCk7XG4gICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRyZWdpc3RlckZvcm0uZmluZCgnLmZvcm0tc3VibWlzc2lvbi1lcnJvciBzcGFuJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAkYnRuU3VibWl0UmVnaXN0ZXJGb3JtLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09ICdVbmNvbmZpcm1lZCBlbWFpbCBhZGRyZXNzJykge1xuICAgICAgICAgIFBvcHVwLmVtYWlsVW5jb25maXJtZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gJ1Bhc3N3b3JkIFJlc2V0IFJlcXVpcmVkJykge1xuICAgICAgICAgIFBvcHVwLmZvcmdvdFBhc3N3b3JkKCk7XG4gICAgICAgICAgLy9NLk1vZGFsLmdldEluc3RhbmNlKCQoJyNyZXNldC1wYXNzd29yZC1yZXF1aXJlZCcpKS5vcGVuKCk7XG4gICAgICAgICAgLy90ZW1wb3JhcnkgZml4IHVudGlsIHdlIGhhdmUgYSBuZXcgbW9kYWxcbiAgICAgICAgICAkKCcjcGFzc3dvcmQtaG9sZGVyIC5oZWxwZXItdGV4dCcpLmh0bWwoJ1lvdSBuZWVkIHRvIHNldHVwIGEgbmV3IHBhc3N3b3JkIHRvIHVzZSB0aGUgbmV3IENhdGVyZXIgd2Vic2l0ZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsZWRBamF4KGRhdGEsIHN0YXR1cywgJ2xvZ2luRm9ybScpO1xuICAgICAgICAgICRidG5TdWJtaXRSZWdpc3RlckZvcm0uYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZmljYXRpb25DaGVjaygpIHtcbiAgICBsZXQgdG9rZW4gPSAnPzcyM2FhODJhODNjMjc4ZDVlN2U3YmU5YjEwOWI0MDZhPSc7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YodG9rZW4pID4gMCkge1xuICAgICAgbGV0IHN0YXRlT2JqID0ge307XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZU9iaiwgZG9jdW1lbnQudGl0bGUsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICBNaWNyb01vZGFsLnNob3coJ3BvcHVwLWVtYWlsLXZlcmlmaWVkJyk7XG4gICAgfVxuICB9XG5cbiAgdmVyaWZpY2F0aW9uQ2hlY2soKTtcbn0pKGpRdWVyeSk7XG5cbi8vVE9ETzogcmVmYWN0b3IgdGhlIGV4aXN0aW5nIHVzZXIuanMgY29kZSBkb3duIGhlcmVcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAoKSA9PiB7XG4gIGxldCAkZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZW1haWwtaW5wdXQnKS52YWx1ZTtcbiAgbGV0ICRwd2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcGFzc3dvcmQtaW5wdXQnKS52YWx1ZTtcbiAgY2hlY2tJZlVzZXJBbHJlYWR5TG9nZ2VkSW4oXG4gICAgam1nQWpheCh7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7IGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcHdkIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW4gZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkQ2hhbmdlID0gKCkgPT4ge1xuICBsZXQgJHB3ZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRfY3JlYXRlJykudmFsdWU7XG4gIGxldCAkcHdkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZF9jb25maXJtYXRpb25fY3JlYXRlJykudmFsdWU7XG4gIGlmICgkcHdkMSAhPSAkcHdkMikge1xuICAgIGFsZXJ0KCdQYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIGRvIG5vdCBub3QgbWF0Y2ghJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0ICRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVBhc3N3b3JkRm9ybScpO1xuICBsZXQgdXJsID0gJGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgam1nQWpheCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeyBwYXNzd29yZF9maWVsZDogJHB3ZDEsIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJHB3ZDIgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIFBvcHVwLnBhc3N3b3JkQ2hhbmdlZCgpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICBhbGVydCgnUGFzc3dvcmQgdXBkYXRlIGZhaWxlZC4nKTtcbiAgICB9XG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=