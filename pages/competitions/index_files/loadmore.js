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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./resources/twuae/js/loadmore.js":
/*!****************************************!*\
  !*** ./resources/twuae/js/loadmore.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./resources/twuae/js/helpers.js");
/* harmony import */ var _tw_global_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tw-global-state */ "./resources/twuae/js/tw-global-state.js");



(function () {
  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["attachLoadMoreActions"])(_tw_global_state__WEBPACK_IMPORTED_MODULE_1__["globalState"]);
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

/***/ 6:
/*!**********************************************!*\
  !*** multi ./resources/twuae/js/loadmore.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/js/loadmore.js */"./resources/twuae/js/loadmore.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY29yZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jb3JlL2pzL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9sb2FkbW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHd1YWUvanMvdHctZ2xvYmFsLXN0YXRlLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwicnVudGltZSIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJvYmoiLCJhcmciLCJ0eXBlIiwiY2FsbCIsImVyciIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsIm5leHQiLCJkb25lIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwidG9TdHJpbmciLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJrZXkiLCJyZXZlcnNlIiwibGVuZ3RoIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImwiLCJpc0lFMTEiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRyaW1OdW1iZXJVbml0IiwicGFyc2VJbnQiLCJzdHIiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJ1cmwiLCJocmVmIiwiZGVmYXVsdFZhTHVlIiwicmVnZXgiLCJyZXN1bHRzIiwiTnVtYmVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckxlbmd0aCIsInN0b3JhZ2UiLCJ4IiwiZSIsImludGVydmFsIiwic3RvcmFnZUF2YWlsYWJsZSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJEYXRlIiwicG9wdWxhdGVTdG9yYWdlIiwicmVxdWVzdCIsInJlc3AiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwiZmV0Y2giLCJkYXRhIiwiZmluYWxEYXRhIiwibGFzdFVwZGF0ZWQiLCJpbWFnZUxhenlMb2FkZXIiLCJkZWNvZGVVUkkiLCJkIiwiZXhkYXlzIiwiZXhwaXJlcyIsImNuYW1lIiwiY2EiLCJjIiwiZ2V0Q29va2llIiwiJG5vZGUiLCJmb3VuZCIsImZ1bmN0aW9uVG9DaGVjayIsImF0dGFjaEV2ZW50c09uRm9ybUVsZW1lbnRzIiwiZm9ybUlucHV0cyIsImZvcm1GaWVsZCIsImVsIiwiZm9ybUxhYmVsIiwiZml4Rm9ybUZpZWxkSGVpZ2h0IiwiaXNSZXNpemluZyIsInRpbWVyIiwicHJlbG9hZGVkIiwiYmxvY2tzIiwiaXNJblZpZXdwb3J0IiwiaW1hZ2UiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibG9hZENvbXBvc2l0SW1hZ2VzIiwic3RhcnRSZXNpemVUcmFja2luZyIsImxvYWRhYmxlSW1hZ2VzIiwibG9hZE9uZUltYWdlIiwicHJlTG9hZExvd1F1YWxpdHlJbWFnZXMiLCJ0aGVJbWFnZSIsImdldEV4cGVjdGVkSW1hZ2VTaXplIiwiaW1nIiwibG9hZEhRSW1hZ2UiLCJ0aGVTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWdIUSIsInByZUxvYWRMb3dRdWFsaXR5SW1hZ2UiLCJpbWdUYWciLCJ0aGVTcmMiLCJib3VuZGluZyIsImVsZW0iLCIkZWxlbWVudCIsIiQiLCJjYWxsYmFjayIsIiRtb2RhbCIsIiRtb2RhbHMiLCJyZXNldE1vZGFsRm9ybUVycm9yTWVzc2FnZXMiLCIkaGVscGVycyIsImVycm9yRm9ybSIsImFjdGlvbiIsIiRidXR0b24iLCJjYXRlZ29yeSIsImxhYmVsIiwiam1nQWpheCIsImFqYXgiLCJwcm9wZXJ0aWVzIiwic3VjY2VzcyIsImZhaWwiLCJ4aHR0cCIsInAiLCIkYnRuTG9hZE1vcmUiLCJsb2FkTW9yZUZpbmlzaGVkRXZlbnQiLCJsYXN0T2Zmc2V0IiwidG90YWwiLCJjdXJyZW50TnVtYmVyIiwibmV4dE51bWJlciIsIiRhcHBlbmRUYXJnZXQiLCJnZW5lcmF0ZUNsb25lZEFydGljbGVXaXRoRGF0YSIsInNjcm9sbFRvcCIsImdsb2JhbFN0YXRlIiwibGF6eUxvYWRJbWFnZXMiLCIkdGVtcGxhdGUiLCJhcnRpY2xlIiwiYXR0YWNoTG9hZE1vcmVBY3Rpb25zIiwic2Nyb2xsUGF1c2UiLCJzY3JlZW5TaXplcyIsInNtIiwic21kIiwibWQiLCJ4bWQiLCJsZyIsInhsZyIsInh4bGciLCJtYXhXaWR0aCIsImV4dGVybmFsTWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxtQkFBTyxDQUFDLDBFQUFELENBQXhCLEM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBT0EsSUFBSUMsT0FBTyxHQUFJLFVBQVVGLE9BQVYsRUFBbUI7QUFDaEM7O0FBRUEsTUFBSUcsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFNBQWhCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxFQUFFLENBQUNJLGNBQWhCO0FBQ0EsTUFBSUMsU0FBSixDQUxnQyxDQUtqQjs7QUFDZixNQUFJQyxPQUFPLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixHQUErQkEsTUFBL0IsR0FBd0MsRUFBdEQ7QUFDQSxNQUFJQyxjQUFjLEdBQUdGLE9BQU8sQ0FB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QUFDcEIrQyxxQkFBVyxDQUFYQSxpQkFBNkJDLHVFQUFjLENBQUN4RyxRQUFRLENBQVJBLGlCQUE1Q3VHLFdBQTRDdkcsQ0FBRCxDQUEzQ3VHO0FBRFEsV0FBVi9DLEdBQVUsQ0FBVkE7QUF0QkZvQixjQXlCUSxZQUFXO0FBQ2pCa0Isb0JBQVksQ0FBWkE7QUFDQUEsb0JBQVksQ0FBWkE7QUEzQkZsQjtBQTZCRDtBQTlDSGtCO0FBZ0REO0FBRU0sZ0RBQWdEO0FBQ3JELE1BQUlXLFNBQVMsR0FBRzdCLENBQUMsQ0FBREEsc0JBQUMsQ0FBREEsU0FEcUMsS0FDckNBLEVBQWhCLENBRHFELENBS3JEOztBQUVBNkIsV0FBUyxDQUFUQSxvQ0FHZUMsT0FBTyxDQUh0QkQ7QUFJQUEsV0FBUyxDQUFUQSwrQ0FHUUMsT0FBTyxDQUhmRDtBQUtBQSxXQUFTLENBQVRBLGVBQXlCLDBCQUF5QjtBQUNoRDdCLEtBQUMsQ0FBREEsT0FBQyxDQUFEQSxjQUF3QjhCLE9BQU8sQ0FBL0I5QjtBQURGNkI7QUFJQTtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3hORDtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLENBQUMsWUFBVztBQUNWRSx3RUFBcUIsQ0FBckJBLDREQUFxQixDQUFyQkE7QUFERixLOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQU8sSUFBTUosV0FBVyxHQUFHO0FBQ3pCNUMsZ0JBQWMsRUFEVztBQUV6QmlELGFBQVcsRUFGYztBQUd6QkMsYUFBVyxFQUFFO0FBQ1hDLE1BQUUsRUFEUztBQUVYQyxPQUFHLEVBRlE7QUFHWEMsTUFBRSxFQUhTO0FBSVhDLE9BQUcsRUFKUTtBQUtYQyxNQUFFLEVBTFM7QUFNWEMsT0FBRyxFQU5RO0FBT1hDLFFBQUksRUFQTztBQVFYQyxZQUFRLEVBUkc7QUFTWEMsb0JBQWdCLEVBQUU7QUFUUDtBQUhZLENBQXBCLEMiLCJmaWxlIjoiL3R3dWFlL2pzL2xvYWRtb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy9BdmFpbGFibGUgZm9yIGFsbCBwcm9qZWN0c1xuaW1wb3J0IHsgaW1hZ2VMYXp5TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUxvYWRlcic7XG5cbmV4cG9ydCBjb25zdCBpc0lFMTEgPSAoKSA9PiAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbmV4cG9ydCBjb25zdCB0cmltTnVtYmVyVW5pdCA9IHMgPT4gcGFyc2VJbnQocyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblRpdGxlKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KCc6ICcpWzFdLnRyaW0oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhcmFtZXRlckJ5TmFtZSA9IChuYW1lLCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiwgZGVmYXVsdFZhTHVlID0gbnVsbCkgPT4ge1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyk7XG4gIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG5cbiAgaWYgKCFyZXN1bHRzKSByZXR1cm4gZGVmYXVsdFZhTHVlO1xuICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcblxuICByZXR1cm4gTnVtYmVyKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc25pcHBldFRleHQoc3RyLCBjaGFyTGVuZ3RoID0gMTIwKSB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZSgvW1xcblxccl0rL2csICcgJylcbiAgICAucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpXG4gICAgLnNsaWNlKDAsIGNoYXJMZW5ndGgpXG4gICAgLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICB2YXIgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cbi8vVE9ETzogd3JpdGUgdGVzdCBmb3IgdGhpc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFGcm9tU3RvcmFnZSh1cmwsIGtleSwgaW50ZXJ2YWwgPSA2MDAwMDApIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgLy8gaWYgZGF0YSBub3Qgb24gc3RvcmFnZSBvciBpZiBkYXRhIG9sZGVyIHRoYW4gdGhlIGxpbWl0IChkZWZhdWx0IDEwbWluIGluIG1zKSBwb3B1bGF0ZSBzdG9yYWdlXG4gICAgaWYgKFxuICAgICAgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHxcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkubGFzdFVwZGF0ZWQgKyBOdW1iZXIoaW50ZXJ2YWwpIDwgRGF0ZS5ub3coKVxuICAgICkge1xuICAgICAgYXdhaXQgcG9wdWxhdGVTdG9yYWdlKHVybCwga2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkuZGF0YSA6IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gTk8gTE9DQUwgU1RPUkFHRSBBVkFJTEFCTEUgc28gaGl0IHRoZSBlbmRwb2ludFxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zdCByZXNwID0gZmV0Y2gocmVxdWVzdCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBmYWlsZWQgdG8gZmV0Y2ggdGhlIHVybDogJywgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSh1cmwsIGtleSkge1xuICB0cnkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2gocmVxdWVzdCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIGZhaWxlZCB0byBmZXRjaCB0aGUgdXJsOiAnLCB1cmwpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLnRleHQoKTtcbiAgICBjb25zdCBmaW5hbERhdGEgPSB7XG4gICAgICBsYXN0VXBkYXRlZDogRGF0ZS5ub3coKSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShmaW5hbERhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZmFpbGVkIHRvIGZldGNoICcgKyBrZXkgKyAnIHVybCA9PiAnICsgdXJsLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VzKGltYWdlcykge1xuICByZXR1cm4gaW1hZ2VMYXp5TG9hZGVyKGltYWdlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW0obmFtZSkge1xuICB2YXIgcmVzdWx0cyA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKS5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgaWYgKHJlc3VsdHMgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBkZWNvZGVVUkkocmVzdWx0c1sxXSkgfHwgMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgdmFyIGV4cGlyZXMgPSAnZXhwaXJlcz0nICsgZC50b1VUQ1N0cmluZygpO1xuICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArICc9JyArIGN2YWx1ZSArICc7JyArIGV4cGlyZXMgKyAnO3BhdGg9Lyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcbiAgdmFyIG5hbWUgPSBjbmFtZSArICc9JztcbiAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYyA9IGNhW2ldO1xuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb29raWUoY25hbWUpIHtcbiAgdmFyIHZhbHVlID0gZ2V0Q29va2llKGNuYW1lKTtcbiAgaWYgKHZhbHVlICE9ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTm9kZSgkbm9kZSwgZGF0YSkge1xuICAkbm9kZS5odG1sKGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNpemVGcm9tVXJsKHVybCkge1xuICBsZXQgZm91bmQgPSAnMHgwJztcbiAgaWYgKHR5cGVvZiB1cmwgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICBsZXQgcmVnZXggPSAvd1xcOihbMC05XSopLGhcXDooWzAtOV0qKS9nO1xuICAgIGZvdW5kID0gdXJsLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgZm91bmQgPSBmb3VuZFswXTtcbiAgICAgIGZvdW5kID0gZm91bmQuc3BsaXQoJywnKTtcbiAgICAgIGZvdW5kID0gZm91bmRbMF0ucmVwbGFjZSgndzonLCAnJykgKyAneCcgKyBmb3VuZFsxXS5yZXBsYWNlKCdoOicsICcnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8vIGltcGxpZXMgaHRtbCBzdHJ1Y3R1cmUgb2YgLmZvcm0tZmllbGQgYXMgYSB3cmFwcGVyIGZvciBhIGxhYmVsICsgaW5wdXRcbmV4cG9ydCBjb25zdCBhdHRhY2hFdmVudHNPbkZvcm1FbGVtZW50cyA9IHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIC8vIGJpbmQgaW5wdXQgZXZlbnRzXG4gIGZvcm1JbnB1dHMuZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gZWwuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICBjb25zdCBmb3JtTGFiZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiBpbnB1dEZvY3VzKCkge1xuICAgICAgaWYgKGZvcm1MYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tbGFiZWwnKSkge1xuICAgICAgICBmb3JtTGFiZWwuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gaW5wdXRCbHVyKCkge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBpZiAoZm9ybUxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1sYWJlbCcpICYmIGZvcm1MYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgZm9ybUxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gdGhpcyBmaXhlcyB0aGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCB3cmFwcGVyIGluIGNhc2UgdGhlIGxhYmVsIGlzIHRvbyBsb25nXG4gICAgLy9UT0RPOiBjaGVjayBNdXRhdGlvbk9ic2VydmVyIHRvIGxpc3RlbiB0byBjc3MgY2hhbmdlcyAoYW5kIGRyb3AgcG9zc2libGUgb24gcmVzaXplIGxpc3RlbmVycylcbiAgICBpZiAoZm9ybUxhYmVsICYmIGZvcm1GaWVsZC5kYXRhc2V0LnN0cmxlbiA+IDM1KSB7XG4gICAgICBmb3JtRmllbGQuc3R5bGUuaGVpZ2h0ID0gYCR7Zm9ybUxhYmVsLm9mZnNldEhlaWdodCArIDV9cHhgO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBpbXBsaWVzIGh0bWwgc3RydWN0dXJlIG9mIC5mb3JtLWZpZWxkIGFzIGEgd3JhcHBlciBmb3IgYSBsYWJlbCArIGlucHV0XG5leHBvcnQgY29uc3QgZml4Rm9ybUZpZWxkSGVpZ2h0ID0gc2VsZWN0b3IgPT4ge1xuICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGZvcm1JbnB1dHMuZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gZWwuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICBjb25zdCBmb3JtTGFiZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgLy8gdGhpcyBmaXhlcyB0aGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCB3cmFwcGVyIGluIGNhc2UgdGhlIGxhYmVsIGlzIHRvbyBsb25nXG4gICAgLy9UT0RPOiBjaGVjayBNdXRhdGlvbk9ic2VydmVyIHRvIGxpc3RlbiB0byBjc3MgY2hhbmdlcyAoYW5kIGRyb3AgcG9zc2libGUgb24gcmVzaXplIGxpc3RlbmVycylcbiAgICBpZiAoZm9ybUxhYmVsICYmIGZvcm1GaWVsZC5kYXRhc2V0LnN0cmxlbiA+IDM1KSB7XG4gICAgICBmb3JtRmllbGQuc3R5bGUuaGVpZ2h0ID0gYCR7Zm9ybUxhYmVsLm9mZnNldEhlaWdodCArIDV9cHhgO1xuICAgIH1cbiAgfSk7XG59O1xuIiwibGV0IGlzUmVzaXppbmcgPSBmYWxzZTtcbmxldCB0aW1lciA9IG51bGw7XG5sZXQgcHJlbG9hZGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHN0YXJ0UmVzaXplVHJhY2tpbmcoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNSZXNpemluZyA9PSBmYWxzZSkge1xuICAgICAgbGV0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJnXScpO1xuICAgICAgYmxvY2tzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICBpZiAoaXNJblZpZXdwb3J0KGltYWdlKSkge1xuICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYyAhPSAnJyAmJiBpbWFnZS5zcmMuaW5kZXhPZignL3RyYW5zcC5wbmcnKSA9PSAtMSkge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1hZ2Uuc3JjICsgJyknO1xuICAgICAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtc2hvdy1iYWNrZ3JvdW5kJykpIHtcbiAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnc3VwcG9ydC1iYWNrZ3JvdW5kLWZvci1yZXNpemUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJy9pbWcvdHJhbnNwLnBuZyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaXNSZXNpemluZyA9IHRydWU7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xuXG4gICAgICAgIGltYWdlTGF6eUxvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKSk7XG4gICAgICB9LFxuICAgICAgNDUwLFxuICAgICAgZXZlbnRcbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlTGF6eUxvYWRlcihsb2FkYWJsZUltYWdlcykge1xuICBsb2FkQ29tcG9zaXRJbWFnZXMoKTtcbiAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgc3RhcnRSZXNpemVUcmFja2luZygpO1xuICB9XG4gIGlmIChpc1Jlc2l6aW5nKSB7XG4gICAgcmV0dXJuIGxvYWRhYmxlSW1hZ2VzO1xuICB9XG4gIGxvYWRhYmxlSW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgIGlmIChpc0luVmlld3BvcnQoaW1hZ2UpKSB7XG4gICAgICBsb2FkT25lSW1hZ2UoaW1hZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFwcmVsb2FkZWQpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcHJlTG9hZExvd1F1YWxpdHlJbWFnZXMoKTtcbiAgICB9LCAyNTAwKTtcbiAgICBwcmVsb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRhYmxlSW1hZ2VzO1xufVxuXG5mdW5jdGlvbiBsb2FkT25lSW1hZ2UoaW1hZ2UpIHtcbiAgbGV0IHRoZUltYWdlID0gZ2V0RXhwZWN0ZWRJbWFnZVNpemUoaW1hZ2UpO1xuICBpZiAoXG4gICAgaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXByZVNpemUnKSAhPSB0aGVJbWFnZSB8fFxuICAgIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYy5pbmRleE9mKCd0cmFuc3AucG5nJykgPiAwKVxuICApIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlU2l6ZScsIHRoZUltYWdlKTtcbiAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSkge1xuICAgICAgaWYgKGltYWdlLnNyYyA9PSAnJykge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSB0aGVJbWFnZTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNob3ctYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nLnNyYyArICcpJztcbiAgICAgICAgICBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PSAnJykge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSB0aGVJbWFnZTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZy5zcmMgKyAnKSc7XG4gICAgICAgICAgbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEV4cGVjdGVkSW1hZ2VTaXplKGltYWdlKSB7XG4gIGxldCB0aGVJbWFnZSA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZycpO1xuICBsZXQgdGhlU2l6ZSA9ICcnO1xuICAvL05PVFxuICBpZiAoXG4gICAgIWltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS13cmFwcGVyJykgJiZcbiAgICAhaW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FscGhhLWFydGljbGUnKSAmJlxuICAgICFpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWRvbnQtcmVzaXplJylcbiAgKSB7XG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KGltYWdlLmNsaWVudEhlaWdodCk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQoaW1hZ2UuY2xpZW50V2lkdGgpO1xuICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSB7XG4gICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgICAgdGhlU2l6ZSA9ICd3OicgKyB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaW4gY2FzZSBib3RoIGFyZSB6ZXJvIC0gd2UgYXQgbGVhc3QgdHJ5XG4gICAgICAgIGlmIChoZWlnaHQgPT0gMCkge1xuICAgICAgICAgIGhlaWdodCA9IDMwMDtcbiAgICAgICAgfVxuICAgICAgICB0aGVTaXplID0gJ2g6JyArIGhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhlU2l6ZSA9ICd3OicgKyB3aWR0aCArICcsaDonICsgaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gdGhlSW1hZ2UucmVwbGFjZSgnZHJvaWRzJywgdGhlU2l6ZSk7XG4gIH1cbiAgLy9UQ1xuICBpZiAoaW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlLXdyYXBwZXInKSB8fCBpbWFnZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnYWxwaGEtYXJ0aWNsZScpKSB7XG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KGltYWdlLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KTtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludChpbWFnZS5wYXJlbnROb2RlLmNsaWVudFdpZHRoKTtcbiAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkge1xuICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2luIGNhc2UgYm90aCBhcmUgemVybyAtIHdlIGF0IGxlYXN0IHRyeVxuICAgICAgICBpZiAoaGVpZ2h0ID09IDApIHtcbiAgICAgICAgICBoZWlnaHQgPSAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhlU2l6ZSA9ICdoOicgKyBoZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGggKyAnLGg6JyArIGhlaWdodDtcbiAgICB9XG4gICAgdGhlSW1hZ2UgPSB0aGVJbWFnZS5yZXBsYWNlKCdkcm9pZHMnLCB0aGVTaXplKTtcbiAgfVxuICByZXR1cm4gdGhlSW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSkge1xuICBpZiAoXG4gICAgaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWJnJykuaW5kZXhPZigncXVhbGl0eT12YWx1ZToxNScpID4gMCB8fFxuICAgIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYy5pbmRleE9mKCd0cmFuc3AucG5nJykgPiAwKVxuICApIHtcbiAgICB2YXIgaW1nSFEgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdIUS5zcmMgPSB0aGVJbWFnZS5yZXBsYWNlKCdxdWFsaXR5PXZhbHVlOjE1JywgJ3F1YWxpdHk9dmFsdWU6ODUnKTtcbiAgICBpbWdIUS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IGltZ0hRLnNyYztcbiAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtc2hvdy1iYWNrZ3JvdW5kJykpIHtcbiAgICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzdXBwb3J0LWJhY2tncm91bmQtZm9yLXJlc2l6ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nSFEuc3JjICsgJyknO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlTG9hZExvd1F1YWxpdHlJbWFnZXMoKSB7XG4gIGlmIChpc1Jlc2l6aW5nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzKCk7XG4gICAgfSwgMjAwMCk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGxldCBsb2FkYWJsZUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJnXScpO1xuICBsb2FkYWJsZUltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICBpZiAoaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID09ICcnIHx8IChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYyA9PSAnJykpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2UoaW1hZ2UpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb21wb3NpdEltYWdlcygpIHtcbiAgaWYgKGlzUmVzaXppbmcpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZENvbXBvc2l0SW1hZ2VzKCk7XG4gICAgfSwgMjAwMCk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGxldCBsb2FkYWJsZUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNyY10nKTtcbiAgbG9hZGFibGVJbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgaWYgKGltYWdlLnNyYyA9PSAnJykge1xuICAgICAgcHJlTG9hZExvd1F1YWxpdHlJbWFnZShpbWFnZSwgdHJ1ZSk7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlTG9hZExvd1F1YWxpdHlJbWFnZShpbWFnZSwgaW1nVGFnKSB7XG4gIGlmIChpbWdUYWcgPT09IHRydWUpIHtcbiAgICBsZXQgdGhlU3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgIHRoZVNyYyA9IHRoZVNyYy5yZXBsYWNlKCdxdWFsaXR5PXZhbHVlOjE1JywgJ3F1YWxpdHk9dmFsdWU6NjAnKTtcbiAgICBpbWFnZS5zcmMgPSB0aGVTcmM7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRoZUltYWdlID0gZ2V0RXhwZWN0ZWRJbWFnZVNpemUoaW1hZ2UpO1xuICAgIGlmIChpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKS5pbmRleE9mKCdxdWFsaXR5PXZhbHVlOjE1JykgPiAwKSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdibHVyVHJhbnNpdGlvbicpO1xuICAgIH1cbiAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSkge1xuICAgICAgaW1hZ2Uuc3JjID0gdGhlSW1hZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHRoZUltYWdlICsgJyknO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbSkge1xuICB2YXIgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gKFxuICAgIGJvdW5kaW5nLnRvcCA+PSAtMzIwICYmXG4gICAgYm91bmRpbmcubGVmdCA+PSAwICYmXG4gICAgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyA0NTAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIDQ1MCkgJiZcbiAgICBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICApO1xufVxuIiwiaW1wb3J0IHsgbGF6eUxvYWRJbWFnZXMgfSBmcm9tICcuLi8uLi9jb3JlL2pzL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2xvYmFsU3RhdGUgfSBmcm9tICcuL3R3LWdsb2JhbC1zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmVXNlckFscmVhZHlMb2dnZWRJbihjYWxsYmFjaywgJGVsZW1lbnQgPSBudWxsKSB7XG4gIGlmICgkZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICRlbGVtZW50LmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG4gIH1cbiAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW4gYWxyZWFkeVxuICAkLmdldCgnL2F1dGgtY2hlY2snLCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZSAhPT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TW9kYWxGb3JtRXJyb3JNZXNzYWdlcyhtb2RhbCkge1xuICBjb25zdCAkbW9kYWwgPSAkKG1vZGFsKTtcbiAgLy8gUmVjdXJzaXZlIHRvIHRhY2tsZSBhbGwgbW9kYWxzIGlmIHRoZSBtb2RhbCBpcyBraWxsZWQgYnkgY2xpY2tpbmcgb24gdGhlIHVuZGVybGF5IChvciBpZiBubyBtb2RhbCBlbGVtIHByb3ZpZGVkKVxuICBpZiAodHlwZW9mIG1vZGFsID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0ICRtb2RhbHMgPSAkKCcubW9kYWwnKTtcblxuICAgICRtb2RhbHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHJlc2V0TW9kYWxGb3JtRXJyb3JNZXNzYWdlcygkKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBlcnJvcnNcbiAgbGV0ICRoZWxwZXJzID0gJG1vZGFsLmZpbmQoJ2Zvcm0gLmhlbHBlci10ZXh0Jyk7XG5cbiAgaWYgKCRoZWxwZXJzLmxlbmd0aCA+IDApIHtcbiAgICAkaGVscGVycy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKVxuICAgICAgICAuYXR0cignZGF0YS1lcnJvcicsICcnKVxuICAgICAgICAuYXR0cignZGF0YS1zdWNjZXNzJywgJycpXG4gICAgICAgIC5odG1sKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBlcnJvckZvcm0gPSBudWxsO1xuICBpZiAoJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2VDb250YWluZXInKS5sZW5ndGggPiAwKSB7XG4gICAgZXJyb3JGb3JtID0gJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2VDb250YWluZXInKTtcbiAgfSBlbHNlIGlmICgkbW9kYWwuZmluZCgnLmVycm9yTWVzc2FnZScpLmxlbmd0aCA+IDApIHtcbiAgICBlcnJvckZvcm0gPSAkbW9kYWwuZmluZCgnLmVycm9yTWVzc2FnZScpO1xuICB9XG4gIGlmIChlcnJvckZvcm0gIT09IG51bGwpIHtcbiAgICBlcnJvckZvcm0uaHRtbCgnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJHdGFnRXZlbnQoJGJ1dHRvbikge1xuICBjb25zdCBhY3Rpb24gPSAkYnV0dG9uLmRhdGEoJ2d0YWctYWN0aW9uJyk7XG4gIGNvbnN0IGNhdGVnb3J5ID0gJGJ1dHRvbi5kYXRhKCdndGFnLWNhdGVnb3J5Jyk7XG4gIGNvbnN0IGxhYmVsID0gJGJ1dHRvbi5kYXRhKCdndGFnLWxhYmVsJyk7XG4gIGlmIChhY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBjYXRlZ29yeSAhPT0gdW5kZWZpbmVkICYmIGxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgIC8vICAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgLy8gICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICAvLyAgICAgdmFsdWU6IDFcbiAgICAvLyB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgam1nQWpheCA9IHByb3BlcnRpZXMgPT4ge1xuICBpZiAodHlwZW9mIHByb3BlcnRpZXMgIT0gJ29iamVjdCcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbmNvbW1pbmcgcHJvcGVydGllcyBtdXN0IGJlIGFuIG9iamVjdCBvciBhcnJheScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoISgndXJsJyBpbiBwcm9wZXJ0aWVzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJPaCBjb21lJ29uIG5vdy4uLiB3aXRob3V0IGEgVVJMIHByb3BlcnR5PyB5b3UgY2FuIGRvIGJldHRlciB0aGFuIHRoYXRcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCBhamF4ID0ge1xuICAgIHVybDogcHJvcGVydGllcy51cmwsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogW10sXG4gICAgc3VjY2VzczogbnVsbCxcbiAgICBmYWlsOiBudWxsXG4gIH07XG4gIGlmICgnbWV0aG9kJyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgYWpheC5tZXRob2QgPSBwcm9wZXJ0aWVzLm1ldGhvZDtcbiAgfVxuICBpZiAoJ2RhdGEnIGluIHByb3BlcnRpZXMpIHtcbiAgICBhamF4LmRhdGEgPSBwcm9wZXJ0aWVzLmRhdGE7XG4gIH1cbiAgaWYgKCdzdWNjZXNzJyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgYWpheC5zdWNjZXNzID0gcHJvcGVydGllcy5zdWNjZXNzO1xuICB9XG4gIGlmICgnZmFpbCcgaW4gcHJvcGVydGllcykge1xuICAgIGFqYXguZmFpbCA9IHByb3BlcnRpZXMuZmFpbDtcbiAgfVxuICAvL0B0b2RvIHRoaXMgY2FuIGJlIHJlZmFjdG9yZWQgdG8gdGhhdCBmZXRjaCBvciB3aGF0ZXZlclxuICAvL3RoaXMgbm93IGFsbG93cyB1cyB0byBoYXZlIHRoZSBhamF4IGxvZ2ljIGluIG9uZSBwbGFjZSBhbmQgaGF2ZSB0aGUgc2ltcGxlIGNhbGxpbmdcbiAgdmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBpZiAodHlwZW9mIGFqYXguc3VjY2VzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYWpheC5zdWNjZXNzKHhodHRwLnJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhamF4LmZhaWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGFqYXguZmFpbCh4aHR0cC5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgbGV0IGRhdGEgPSAnJztcbiAgLy9zbyB3ZSBhcmUgY2hlY2tpbmcgd2hldGhlciB3ZSd2ZSBnb3QgYSBzdHJpbmcgb3IgYW4gb2JqZWN0XG4gIGlmICh0eXBlb2YgYWpheC5kYXRhID09ICdzdHJpbmcnKSB7XG4gICAgZGF0YSA9IGFqYXguZGF0YTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCB3ZSBoYXZlIHRvIHBhcnNlIGl0Li4uIGJ1dCBpZiBpdCdzIGEgRm9ybURhdGEgd2UgbmVlZCB0byBkZWFsIHdpdGggaXQgZGlmZmVyZW50bHlcbiAgICBpZiAoYWpheC5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIGZvciAodmFyIHAgb2YgYWpheC5kYXRhKSB7XG4gICAgICAgIGlmIChkYXRhICE9ICcnKSB7XG4gICAgICAgICAgZGF0YSArPSAnJic7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSArPSBwWzBdICsgJz0nICsgcFsxXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9nb29kIG9sZCBvcmRpbmFyeSBvYmplY3QgOilcbiAgICAgIE9iamVjdC5rZXlzKGFqYXguZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPSAnJykge1xuICAgICAgICAgIGRhdGEgKz0gJyYnO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgKz0ga2V5ICsgJz0nICsgYWpheC5kYXRhW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB4aHR0cC5vcGVuKGFqYXgubWV0aG9kLCBhamF4LnVybCwgdHJ1ZSk7XG4gIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgeGh0dHAuc2VuZChkYXRhKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hMb2FkTW9yZUFjdGlvbnMoZ2xvYmFsU3RhdGUpIHtcbiAgY29uc3QgJGJ0bkxvYWRNb3JlID0gJCgnLmpzLWJ0bi1sb2FkLW1vcmUnKTtcbiAgY29uc3QgbG9hZE1vcmVGaW5pc2hlZEV2ZW50ID0gbmV3IEV2ZW50KCdsb2FkTW9yZUZpbmlzaGVkJyk7XG5cbiAgJGJ0bkxvYWRNb3JlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCBsYXN0T2Zmc2V0ID0gJCgnLmpzLWFydGljbGUtdGVtcGxhdGUnKVxuICAgICAgLmxhc3QoKVxuICAgICAgLm9mZnNldCgpLnRvcDtcbiAgICBjb25zdCB0b3RhbCA9ICRidG5Mb2FkTW9yZS5hdHRyKCdkYXRhLWxpbWl0Jyk7XG4gICAgY29uc3QgY3VycmVudE51bWJlciA9ICRidG5Mb2FkTW9yZS5hdHRyKCdkYXRhLXBhZ2UnKTtcbiAgICBjb25zdCBuZXh0TnVtYmVyID0gcGFyc2VJbnQoY3VycmVudE51bWJlcikgKyAxO1xuICAgIGNvbnN0ICRhcHBlbmRUYXJnZXQgPSAkKCcuanMtbG9hZG1vcmUtdGFyZ2V0Jyk7XG5cbiAgICAkYnRuTG9hZE1vcmUuYWRkQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcblxuICAgIGlmIChuZXh0TnVtYmVyID4gdG90YWwpIHtcbiAgICAgICRidG5Mb2FkTW9yZS5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHVybCArICc/cGFnZT0nICsgbmV4dE51bWJlcjtcblxuICAgICAgJC5nZXQodXJsLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmFydGljbGVzICE9PSB1bmRlZmluZWQgJiYgZGF0YS5hcnRpY2xlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICQuZWFjaChkYXRhLmFydGljbGVzLCBmdW5jdGlvbihpbmRleCwgYXJ0aWNsZSkge1xuICAgICAgICAgICAgJGFwcGVuZFRhcmdldC5hcHBlbmQoZ2VuZXJhdGVDbG9uZWRBcnRpY2xlV2l0aERhdGEoYXJ0aWNsZSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICRidG5Mb2FkTW9yZS5hdHRyKCdkYXRhLWxpbWl0JywgZGF0YS5sYXN0X3BhZ2UpO1xuICAgICAgICAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1wYWdlJywgbmV4dE51bWJlcik7XG4gICAgICAgICRidG5Mb2FkTW9yZS5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChsb2FkTW9yZUZpbmlzaGVkRXZlbnQpO1xuXG4gICAgICAgIGlmIChuZXh0TnVtYmVyICsgMSA+IHRvdGFsKSB7XG4gICAgICAgICAgJGJ0bkxvYWRNb3JlLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBsYXN0T2Zmc2V0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBnbG9iYWxTdGF0ZS5sb2FkYWJsZUltYWdlcyA9IGxhenlMb2FkSW1hZ2VzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJnXScpKTtcbiAgICAgICAgfSwgMzUwKTtcbiAgICAgIH0pLmZhaWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICRidG5Mb2FkTW9yZS5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuICAgICAgICAkYnRuTG9hZE1vcmUuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ2xvbmVkQXJ0aWNsZVdpdGhEYXRhKGFydGljbGUpIHtcbiAgbGV0ICR0ZW1wbGF0ZSA9ICQoJy5qcy1hcnRpY2xlLXRlbXBsYXRlJylcbiAgICAuZmlyc3QoKVxuICAgIC5jbG9uZSgpO1xuXG4gIC8vRklYTUU6IHRoZSBmb2xsb3dpbmcgdGhpbmdzIG5lZWQgdG8gYmUgY2hhbmdlZC4gVGhlIGVuZHBvaW50IHNob3VsZCBvbmx5IHJldHVybiBvbmUgZGVmYXVsdCBzaXplXG5cbiAgJHRlbXBsYXRlXG4gICAgLmZpbmQoJ2EgPiBpbWcnKVxuICAgIC5maXJzdCgpXG4gICAgLmF0dHIoJ3NyYycsIGFydGljbGUudGh1bWJuYWlsKTtcbiAgJHRlbXBsYXRlXG4gICAgLmZpbmQoJy5hcnRpY2xlU25pcHBldC10aXRsZSA+IGEnKVxuICAgIC5maXJzdCgpXG4gICAgLmh0bWwoYXJ0aWNsZS50aXRsZSk7XG5cbiAgJHRlbXBsYXRlLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5hdHRyKCdocmVmJywgYXJ0aWNsZS5mdWxsX3NsdWcpO1xuICB9KTtcblxuICByZXR1cm4gJHRlbXBsYXRlO1xufVxuIiwiaW1wb3J0IHsgbGF6eUxvYWRJbWFnZXMsIGF0dGFjaExvYWRNb3JlQWN0aW9ucyB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBnbG9iYWxTdGF0ZSB9IGZyb20gJy4vdHctZ2xvYmFsLXN0YXRlJztcblxuKGZ1bmN0aW9uKCkge1xuICBhdHRhY2hMb2FkTW9yZUFjdGlvbnMoZ2xvYmFsU3RhdGUpO1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBnbG9iYWxTdGF0ZSA9IHtcbiAgbG9hZGFibGVJbWFnZXM6IG51bGwsXG4gIHNjcm9sbFBhdXNlOiBmYWxzZSxcbiAgc2NyZWVuU2l6ZXM6IHtcbiAgICBzbTogMzc1LFxuICAgIHNtZDogNjY3LFxuICAgIG1kOiA3NjgsXG4gICAgeG1kOiA5ODAsXG4gICAgbGc6IDEwMjQsXG4gICAgeGxnOiAxMTYwLFxuICAgIHh4bGc6IDEyNjAsXG4gICAgbWF4V2lkdGg6IDExMjAsXG4gICAgZXh0ZXJuYWxNYXhXaWR0aDogMTY0OFxuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==