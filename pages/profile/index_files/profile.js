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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./resources/twuae/js/profile.js":
/*!***************************************!*\
  !*** ./resources/twuae/js/profile.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./resources/twuae/js/helpers.js");

var $form = document.querySelector('#profile-form');

$form.onsubmit = function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  var url = $form.getAttribute('action');
  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["jmgAjax"])({
    url: url,
    method: 'POST',
    data: formData,
    success: function success(data) {
      successPostSubmissionActions(data);
    },
    fail: function fail(data) {
      failedPostSubmissionActions(data);
    }
  });
};

var successPostSubmissionActions = function successPostSubmissionActions(data) {
  if (data.email) {
    console.log('email updated?'); //Popup.emailUpdated.show();
  } else if (data.status) {
    console.log('update success'); //Popup.successUpdate.open(fromWhereWasTriggered);
  } else {
    console.log('a success but a failure?');
  }

  clearFormErrors();
};

var failedPostSubmissionActions = function failedPostSubmissionActions(data) {
  clearFormErrors();
  alert(data);
};

var clearFormErrors = function clearFormErrors() {
  var errorLabels = document.querySelectorAll('.form-helperText');
  errorLabels.forEach(function (label) {
    label.innerHTML = '';
  });
};

window.showDetails = function (anchor) {
  navSwitch(anchor, 'details');
};

window.showSavedArticles = function (anchor) {
  navSwitch(anchor, 'articles');
};

function navSwitch(activeAnchor, targetDiv) {
  var anchors = document.querySelectorAll('.js-accordion');
  anchors.forEach(function (anchor) {
    anchor.classList.remove('active');
  });
  activeAnchor.classList.add('active');
  var tabs = document.querySelectorAll('.js-accordion-tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('show');
  });
  document.querySelector('#' + targetDiv).classList.add('show');
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

/***/ 2:
/*!*********************************************!*\
  !*** multi ./resources/twuae/js/profile.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gmuller/webdev/jacobs/caterer-connections/podium-centre/resources/twuae/js/profile.js */"./resources/twuae/js/profile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY29yZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jb3JlL2pzL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy90d3VhZS9qcy90dy1nbG9iYWwtc3RhdGUuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJydW50aW1lIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwidmFsdWUiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiRnVuY3Rpb24iLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibCIsImlzSUUxMSIsIndpbmRvdyIsImRvY3VtZW50IiwidHJpbU51bWJlclVuaXQiLCJwYXJzZUludCIsInN0ciIsImdldFBhcmFtZXRlckJ5TmFtZSIsInVybCIsImhyZWYiLCJkZWZhdWx0VmFMdWUiLCJyZWdleCIsInJlc3VsdHMiLCJOdW1iZXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGFyTGVuZ3RoIiwic3RvcmFnZSIsIngiLCJlIiwiaW50ZXJ2YWwiLCJzdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsIkRhdGUiLCJwb3B1bGF0ZVN0b3JhZ2UiLCJyZXF1ZXN0IiwicmVzcCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJmZXRjaCIsImRhdGEiLCJmaW5hbERhdGEiLCJsYXN0VXBkYXRlZCIsImltYWdlTGF6eUxvYWRlciIsImRlY29kZVVSSSIsImQiLCJleGRheXMiLCJleHBpcmVzIiwiY25hbWUiLCJjYSIsImMiLCJnZXRDb29raWUiLCIkbm9kZSIsImZvdW5kIiwiZnVuY3Rpb25Ub0NoZWNrIiwiYXR0YWNoRXZlbnRzT25Gb3JtRWxlbWVudHMiLCJmb3JtSW5wdXRzIiwiZm9ybUZpZWxkIiwiZWwiLCJmb3JtTGFiZWwiLCJmaXhGb3JtRmllbGRIZWlnaHQiLCJpc1Jlc2l6aW5nIiwidGltZXIiLCJwcmVsb2FkZWQiLCJibG9ja3MiLCJpc0luVmlld3BvcnQiLCJpbWFnZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJsb2FkQ29tcG9zaXRJbWFnZXMiLCJzdGFydFJlc2l6ZVRyYWNraW5nIiwibG9hZGFibGVJbWFnZXMiLCJsb2FkT25lSW1hZ2UiLCJwcmVMb2FkTG93UXVhbGl0eUltYWdlcyIsInRoZUltYWdlIiwiZ2V0RXhwZWN0ZWRJbWFnZVNpemUiLCJpbWciLCJsb2FkSFFJbWFnZSIsInRoZVNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImltZ0hRIiwicHJlTG9hZExvd1F1YWxpdHlJbWFnZSIsImltZ1RhZyIsInRoZVNyYyIsImJvdW5kaW5nIiwiZWxlbSIsIiRlbGVtZW50IiwiJCIsImNhbGxiYWNrIiwiJG1vZGFsIiwiJG1vZGFscyIsInJlc2V0TW9kYWxGb3JtRXJyb3JNZXNzYWdlcyIsIiRoZWxwZXJzIiwiZXJyb3JGb3JtIiwiYWN0aW9uIiwiJGJ1dHRvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJqbWdBamF4IiwiYWpheCIsInByb3BlcnRpZXMiLCJzdWNjZXNzIiwiZmFpbCIsInhodHRwIiwicCIsIiRidG5Mb2FkTW9yZSIsImxvYWRNb3JlRmluaXNoZWRFdmVudCIsImxhc3RPZmZzZXQiLCJ0b3RhbCIsImN1cnJlbnROdW1iZXIiLCJuZXh0TnVtYmVyIiwiJGFwcGVuZFRhcmdldCIsImdlbmVyYXRlQ2xvbmVkQXJ0aWNsZVdpdGhEYXRhIiwic2Nyb2xsVG9wIiwiZ2xvYmFsU3RhdGUiLCJsYXp5TG9hZEltYWdlcyIsIiR0ZW1wbGF0ZSIsImFydGljbGUiLCIkZm9ybSIsImZvcm1EYXRhIiwic3VjY2Vzc1Bvc3RTdWJtaXNzaW9uQWN0aW9ucyIsImZhaWxlZFBvc3RTdWJtaXNzaW9uQWN0aW9ucyIsImNsZWFyRm9ybUVycm9ycyIsImFsZXJ0IiwiZXJyb3JMYWJlbHMiLCJuYXZTd2l0Y2giLCJhbmNob3JzIiwiYW5jaG9yIiwiYWN0aXZlQW5jaG9yIiwidGFicyIsInRhYiIsInNjcm9sbFBhdXNlIiwic2NyZWVuU2l6ZXMiLCJzbSIsInNtZCIsIm1kIiwieG1kIiwibGciLCJ4bGciLCJ4eGxnIiwibWF4V2lkdGgiLCJleHRlcm5hbE1heFdpZHRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsbUJBQU8sQ0FBQywwRUFBRCxDQUF4QixDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BLElBQUlDLE9BQU8sR0FBSSxVQUFVRixPQUFWLEVBQW1CO0FBQ2hDOztBQUVBLE1BQUlHLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxTQUFoQjtBQUNBLE1BQUlDLE1B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QUVBLE1BQUlDLElBQUksR0FBR3RILFFBQVEsQ0FBUkEsaUJBQVgsbUJBQVdBLENBQVg7QUFDQXNILE1BQUksQ0FBSkEsUUFBYSxlQUFPO0FBQ2xCQyxPQUFHLENBQUhBO0FBREZEO0FBSUF0SCxVQUFRLENBQVJBLGNBQXVCLE1BQXZCQTtBQUNELEM7Ozs7Ozs7Ozs7OztBQ25FRDtBQUFBO0FBQU8sSUFBTXVHLFdBQVcsR0FBRztBQUN6QjVDLGdCQUFjLEVBRFc7QUFFekI2RCxhQUFXLEVBRmM7QUFHekJDLGFBQVcsRUFBRTtBQUNYQyxNQUFFLEVBRFM7QUFFWEMsT0FBRyxFQUZRO0FBR1hDLE1BQUUsRUFIUztBQUlYQyxPQUFHLEVBSlE7QUFLWEMsTUFBRSxFQUxTO0FBTVhDLE9BQUcsRUFOUTtBQU9YQyxRQUFJLEVBUE87QUFRWEMsWUFBUSxFQVJHO0FBU1hDLG9CQUFnQixFQUFFO0FBVFA7QUFIWSxDQUFwQixDIiwiZmlsZSI6Ii90d3VhZS9qcy9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy9BdmFpbGFibGUgZm9yIGFsbCBwcm9qZWN0c1xuaW1wb3J0IHsgaW1hZ2VMYXp5TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUxvYWRlcic7XG5cbmV4cG9ydCBjb25zdCBpc0lFMTEgPSAoKSA9PiAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbmV4cG9ydCBjb25zdCB0cmltTnVtYmVyVW5pdCA9IHMgPT4gcGFyc2VJbnQocyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblRpdGxlKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KCc6ICcpWzFdLnRyaW0oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhcmFtZXRlckJ5TmFtZSA9IChuYW1lLCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiwgZGVmYXVsdFZhTHVlID0gbnVsbCkgPT4ge1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyk7XG4gIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG5cbiAgaWYgKCFyZXN1bHRzKSByZXR1cm4gZGVmYXVsdFZhTHVlO1xuICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcblxuICByZXR1cm4gTnVtYmVyKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc25pcHBldFRleHQoc3RyLCBjaGFyTGVuZ3RoID0gMTIwKSB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZSgvW1xcblxccl0rL2csICcgJylcbiAgICAucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpXG4gICAgLnNsaWNlKDAsIGNoYXJMZW5ndGgpXG4gICAgLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICB2YXIgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cbi8vVE9ETzogd3JpdGUgdGVzdCBmb3IgdGhpc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFGcm9tU3RvcmFnZSh1cmwsIGtleSwgaW50ZXJ2YWwgPSA2MDAwMDApIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgLy8gaWYgZGF0YSBub3Qgb24gc3RvcmFnZSBvciBpZiBkYXRhIG9sZGVyIHRoYW4gdGhlIGxpbWl0IChkZWZhdWx0IDEwbWluIGluIG1zKSBwb3B1bGF0ZSBzdG9yYWdlXG4gICAgaWYgKFxuICAgICAgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHxcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkubGFzdFVwZGF0ZWQgKyBOdW1iZXIoaW50ZXJ2YWwpIDwgRGF0ZS5ub3coKVxuICAgICkge1xuICAgICAgYXdhaXQgcG9wdWxhdGVTdG9yYWdlKHVybCwga2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkuZGF0YSA6IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gTk8gTE9DQUwgU1RPUkFHRSBBVkFJTEFCTEUgc28gaGl0IHRoZSBlbmRwb2ludFxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zdCByZXNwID0gZmV0Y2gocmVxdWVzdCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBmYWlsZWQgdG8gZmV0Y2ggdGhlIHVybDogJywgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSh1cmwsIGtleSkge1xuICB0cnkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2gocmVxdWVzdCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIGZhaWxlZCB0byBmZXRjaCB0aGUgdXJsOiAnLCB1cmwpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLnRleHQoKTtcbiAgICBjb25zdCBmaW5hbERhdGEgPSB7XG4gICAgICBsYXN0VXBkYXRlZDogRGF0ZS5ub3coKSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShmaW5hbERhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZmFpbGVkIHRvIGZldGNoICcgKyBrZXkgKyAnIHVybCA9PiAnICsgdXJsLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VzKGltYWdlcykge1xuICByZXR1cm4gaW1hZ2VMYXp5TG9hZGVyKGltYWdlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW0obmFtZSkge1xuICB2YXIgcmVzdWx0cyA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKS5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgaWYgKHJlc3VsdHMgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBkZWNvZGVVUkkocmVzdWx0c1sxXSkgfHwgMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgdmFyIGV4cGlyZXMgPSAnZXhwaXJlcz0nICsgZC50b1VUQ1N0cmluZygpO1xuICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArICc9JyArIGN2YWx1ZSArICc7JyArIGV4cGlyZXMgKyAnO3BhdGg9Lyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcbiAgdmFyIG5hbWUgPSBjbmFtZSArICc9JztcbiAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYyA9IGNhW2ldO1xuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb29raWUoY25hbWUpIHtcbiAgdmFyIHZhbHVlID0gZ2V0Q29va2llKGNuYW1lKTtcbiAgaWYgKHZhbHVlICE9ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTm9kZSgkbm9kZSwgZGF0YSkge1xuICAkbm9kZS5odG1sKGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNpemVGcm9tVXJsKHVybCkge1xuICBsZXQgZm91bmQgPSAnMHgwJztcbiAgaWYgKHR5cGVvZiB1cmwgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICBsZXQgcmVnZXggPSAvd1xcOihbMC05XSopLGhcXDooWzAtOV0qKS9nO1xuICAgIGZvdW5kID0gdXJsLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgZm91bmQgPSBmb3VuZFswXTtcbiAgICAgIGZvdW5kID0gZm91bmQuc3BsaXQoJywnKTtcbiAgICAgIGZvdW5kID0gZm91bmRbMF0ucmVwbGFjZSgndzonLCAnJykgKyAneCcgKyBmb3VuZFsxXS5yZXBsYWNlKCdoOicsICcnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8vIGltcGxpZXMgaHRtbCBzdHJ1Y3R1cmUgb2YgLmZvcm0tZmllbGQgYXMgYSB3cmFwcGVyIGZvciBhIGxhYmVsICsgaW5wdXRcbmV4cG9ydCBjb25zdCBhdHRhY2hFdmVudHNPbkZvcm1FbGVtZW50cyA9IHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIC8vIGJpbmQgaW5wdXQgZXZlbnRzXG4gIGZvcm1JbnB1dHMuZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gZWwuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICBjb25zdCBmb3JtTGFiZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiBpbnB1dEZvY3VzKCkge1xuICAgICAgaWYgKGZvcm1MYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tbGFiZWwnKSkge1xuICAgICAgICBmb3JtTGFiZWwuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gaW5wdXRCbHVyKCkge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBpZiAoZm9ybUxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1sYWJlbCcpICYmIGZvcm1MYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgZm9ybUxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gdGhpcyBmaXhlcyB0aGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCB3cmFwcGVyIGluIGNhc2UgdGhlIGxhYmVsIGlzIHRvbyBsb25nXG4gICAgLy9UT0RPOiBjaGVjayBNdXRhdGlvbk9ic2VydmVyIHRvIGxpc3RlbiB0byBjc3MgY2hhbmdlcyAoYW5kIGRyb3AgcG9zc2libGUgb24gcmVzaXplIGxpc3RlbmVycylcbiAgICBpZiAoZm9ybUxhYmVsICYmIGZvcm1GaWVsZC5kYXRhc2V0LnN0cmxlbiA+IDM1KSB7XG4gICAgICBmb3JtRmllbGQuc3R5bGUuaGVpZ2h0ID0gYCR7Zm9ybUxhYmVsLm9mZnNldEhlaWdodCArIDV9cHhgO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBpbXBsaWVzIGh0bWwgc3RydWN0dXJlIG9mIC5mb3JtLWZpZWxkIGFzIGEgd3JhcHBlciBmb3IgYSBsYWJlbCArIGlucHV0XG5leHBvcnQgY29uc3QgZml4Rm9ybUZpZWxkSGVpZ2h0ID0gc2VsZWN0b3IgPT4ge1xuICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGZvcm1JbnB1dHMuZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gZWwuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICBjb25zdCBmb3JtTGFiZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgLy8gdGhpcyBmaXhlcyB0aGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCB3cmFwcGVyIGluIGNhc2UgdGhlIGxhYmVsIGlzIHRvbyBsb25nXG4gICAgLy9UT0RPOiBjaGVjayBNdXRhdGlvbk9ic2VydmVyIHRvIGxpc3RlbiB0byBjc3MgY2hhbmdlcyAoYW5kIGRyb3AgcG9zc2libGUgb24gcmVzaXplIGxpc3RlbmVycylcbiAgICBpZiAoZm9ybUxhYmVsICYmIGZvcm1GaWVsZC5kYXRhc2V0LnN0cmxlbiA+IDM1KSB7XG4gICAgICBmb3JtRmllbGQuc3R5bGUuaGVpZ2h0ID0gYCR7Zm9ybUxhYmVsLm9mZnNldEhlaWdodCArIDV9cHhgO1xuICAgIH1cbiAgfSk7XG59O1xuIiwibGV0IGlzUmVzaXppbmcgPSBmYWxzZTtcbmxldCB0aW1lciA9IG51bGw7XG5sZXQgcHJlbG9hZGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHN0YXJ0UmVzaXplVHJhY2tpbmcoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNSZXNpemluZyA9PSBmYWxzZSkge1xuICAgICAgbGV0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJnXScpO1xuICAgICAgYmxvY2tzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICBpZiAoaXNJblZpZXdwb3J0KGltYWdlKSkge1xuICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYyAhPSAnJyAmJiBpbWFnZS5zcmMuaW5kZXhPZignL3RyYW5zcC5wbmcnKSA9PSAtMSkge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1hZ2Uuc3JjICsgJyknO1xuICAgICAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtc2hvdy1iYWNrZ3JvdW5kJykpIHtcbiAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnc3VwcG9ydC1iYWNrZ3JvdW5kLWZvci1yZXNpemUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJy9pbWcvdHJhbnNwLnBuZyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaXNSZXNpemluZyA9IHRydWU7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xuXG4gICAgICAgIGltYWdlTGF6eUxvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iZ10nKSk7XG4gICAgICB9LFxuICAgICAgNDUwLFxuICAgICAgZXZlbnRcbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlTGF6eUxvYWRlcihsb2FkYWJsZUltYWdlcykge1xuICBsb2FkQ29tcG9zaXRJbWFnZXMoKTtcbiAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgc3RhcnRSZXNpemVUcmFja2luZygpO1xuICB9XG4gIGlmIChpc1Jlc2l6aW5nKSB7XG4gICAgcmV0dXJuIGxvYWRhYmxlSW1hZ2VzO1xuICB9XG4gIGxvYWRhYmxlSW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgIGlmIChpc0luVmlld3BvcnQoaW1hZ2UpKSB7XG4gICAgICBsb2FkT25lSW1hZ2UoaW1hZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFwcmVsb2FkZWQpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcHJlTG9hZExvd1F1YWxpdHlJbWFnZXMoKTtcbiAgICB9LCAyNTAwKTtcbiAgICBwcmVsb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRhYmxlSW1hZ2VzO1xufVxuXG5mdW5jdGlvbiBsb2FkT25lSW1hZ2UoaW1hZ2UpIHtcbiAgbGV0IHRoZUltYWdlID0gZ2V0RXhwZWN0ZWRJbWFnZVNpemUoaW1hZ2UpO1xuICBpZiAoXG4gICAgaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXByZVNpemUnKSAhPSB0aGVJbWFnZSB8fFxuICAgIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYy5pbmRleE9mKCd0cmFuc3AucG5nJykgPiAwKVxuICApIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlU2l6ZScsIHRoZUltYWdlKTtcbiAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSkge1xuICAgICAgaWYgKGltYWdlLnNyYyA9PSAnJykge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSB0aGVJbWFnZTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNob3ctYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nLnNyYyArICcpJztcbiAgICAgICAgICBsb2FkSFFJbWFnZShpbWFnZSwgdGhlSW1hZ2UpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PSAnJykge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSB0aGVJbWFnZTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZy5zcmMgKyAnKSc7XG4gICAgICAgICAgbG9hZEhRSW1hZ2UoaW1hZ2UsIHRoZUltYWdlKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEV4cGVjdGVkSW1hZ2VTaXplKGltYWdlKSB7XG4gIGxldCB0aGVJbWFnZSA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZycpO1xuICBsZXQgdGhlU2l6ZSA9ICcnO1xuICAvL05PVFxuICBpZiAoXG4gICAgIWltYWdlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS13cmFwcGVyJykgJiZcbiAgICAhaW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FscGhhLWFydGljbGUnKSAmJlxuICAgICFpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWRvbnQtcmVzaXplJylcbiAgKSB7XG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KGltYWdlLmNsaWVudEhlaWdodCk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQoaW1hZ2UuY2xpZW50V2lkdGgpO1xuICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSB7XG4gICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgICAgdGhlU2l6ZSA9ICd3OicgKyB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaW4gY2FzZSBib3RoIGFyZSB6ZXJvIC0gd2UgYXQgbGVhc3QgdHJ5XG4gICAgICAgIGlmIChoZWlnaHQgPT0gMCkge1xuICAgICAgICAgIGhlaWdodCA9IDMwMDtcbiAgICAgICAgfVxuICAgICAgICB0aGVTaXplID0gJ2g6JyArIGhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhlU2l6ZSA9ICd3OicgKyB3aWR0aCArICcsaDonICsgaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gdGhlSW1hZ2UucmVwbGFjZSgnZHJvaWRzJywgdGhlU2l6ZSk7XG4gIH1cbiAgLy9UQ1xuICBpZiAoaW1hZ2UucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlLXdyYXBwZXInKSB8fCBpbWFnZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnYWxwaGEtYXJ0aWNsZScpKSB7XG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KGltYWdlLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KTtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludChpbWFnZS5wYXJlbnROb2RlLmNsaWVudFdpZHRoKTtcbiAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkge1xuICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2luIGNhc2UgYm90aCBhcmUgemVybyAtIHdlIGF0IGxlYXN0IHRyeVxuICAgICAgICBpZiAoaGVpZ2h0ID09IDApIHtcbiAgICAgICAgICBoZWlnaHQgPSAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhlU2l6ZSA9ICdoOicgKyBoZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZVNpemUgPSAndzonICsgd2lkdGggKyAnLGg6JyArIGhlaWdodDtcbiAgICB9XG4gICAgdGhlSW1hZ2UgPSB0aGVJbWFnZS5yZXBsYWNlKCdkcm9pZHMnLCB0aGVTaXplKTtcbiAgfVxuICByZXR1cm4gdGhlSW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGxvYWRIUUltYWdlKGltYWdlLCB0aGVJbWFnZSkge1xuICBpZiAoXG4gICAgaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWJnJykuaW5kZXhPZigncXVhbGl0eT12YWx1ZToxNScpID4gMCB8fFxuICAgIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYy5pbmRleE9mKCd0cmFuc3AucG5nJykgPiAwKVxuICApIHtcbiAgICB2YXIgaW1nSFEgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdIUS5zcmMgPSB0aGVJbWFnZS5yZXBsYWNlKCdxdWFsaXR5PXZhbHVlOjE1JywgJ3F1YWxpdHk9dmFsdWU6ODUnKTtcbiAgICBpbWdIUS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IGltZ0hRLnNyYztcbiAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucygnanMtc2hvdy1iYWNrZ3JvdW5kJykpIHtcbiAgICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzdXBwb3J0LWJhY2tncm91bmQtZm9yLXJlc2l6ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nSFEuc3JjICsgJyknO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlTG9hZExvd1F1YWxpdHlJbWFnZXMoKSB7XG4gIGlmIChpc1Jlc2l6aW5nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2VzKCk7XG4gICAgfSwgMjAwMCk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGxldCBsb2FkYWJsZUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJnXScpO1xuICBsb2FkYWJsZUltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICBpZiAoaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID09ICcnIHx8IChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWltZycpICYmIGltYWdlLnNyYyA9PSAnJykpIHtcbiAgICAgIHByZUxvYWRMb3dRdWFsaXR5SW1hZ2UoaW1hZ2UpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb21wb3NpdEltYWdlcygpIHtcbiAgaWYgKGlzUmVzaXppbmcpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZENvbXBvc2l0SW1hZ2VzKCk7XG4gICAgfSwgMjAwMCk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGxldCBsb2FkYWJsZUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNyY10nKTtcbiAgbG9hZGFibGVJbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgaWYgKGltYWdlLnNyYyA9PSAnJykge1xuICAgICAgcHJlTG9hZExvd1F1YWxpdHlJbWFnZShpbWFnZSwgdHJ1ZSk7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlTG9hZExvd1F1YWxpdHlJbWFnZShpbWFnZSwgaW1nVGFnKSB7XG4gIGlmIChpbWdUYWcgPT09IHRydWUpIHtcbiAgICBsZXQgdGhlU3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgIHRoZVNyYyA9IHRoZVNyYy5yZXBsYWNlKCdxdWFsaXR5PXZhbHVlOjE1JywgJ3F1YWxpdHk9dmFsdWU6NjAnKTtcbiAgICBpbWFnZS5zcmMgPSB0aGVTcmM7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRoZUltYWdlID0gZ2V0RXhwZWN0ZWRJbWFnZVNpemUoaW1hZ2UpO1xuICAgIGlmIChpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKS5pbmRleE9mKCdxdWFsaXR5PXZhbHVlOjE1JykgPiAwKSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdibHVyVHJhbnNpdGlvbicpO1xuICAgIH1cbiAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pbWcnKSkge1xuICAgICAgaW1hZ2Uuc3JjID0gdGhlSW1hZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHRoZUltYWdlICsgJyknO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbSkge1xuICB2YXIgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gKFxuICAgIGJvdW5kaW5nLnRvcCA+PSAtMzIwICYmXG4gICAgYm91bmRpbmcubGVmdCA+PSAwICYmXG4gICAgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyA0NTAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIDQ1MCkgJiZcbiAgICBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICApO1xufVxuIiwiaW1wb3J0IHsgbGF6eUxvYWRJbWFnZXMgfSBmcm9tICcuLi8uLi9jb3JlL2pzL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2xvYmFsU3RhdGUgfSBmcm9tICcuL3R3LWdsb2JhbC1zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmVXNlckFscmVhZHlMb2dnZWRJbihjYWxsYmFjaywgJGVsZW1lbnQgPSBudWxsKSB7XG4gIGlmICgkZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICRlbGVtZW50LmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XG4gIH1cbiAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW4gYWxyZWFkeVxuICAkLmdldCgnL2F1dGgtY2hlY2snLCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZSAhPT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TW9kYWxGb3JtRXJyb3JNZXNzYWdlcyhtb2RhbCkge1xuICBjb25zdCAkbW9kYWwgPSAkKG1vZGFsKTtcbiAgLy8gUmVjdXJzaXZlIHRvIHRhY2tsZSBhbGwgbW9kYWxzIGlmIHRoZSBtb2RhbCBpcyBraWxsZWQgYnkgY2xpY2tpbmcgb24gdGhlIHVuZGVybGF5IChvciBpZiBubyBtb2RhbCBlbGVtIHByb3ZpZGVkKVxuICBpZiAodHlwZW9mIG1vZGFsID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0ICRtb2RhbHMgPSAkKCcubW9kYWwnKTtcblxuICAgICRtb2RhbHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHJlc2V0TW9kYWxGb3JtRXJyb3JNZXNzYWdlcygkKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBlcnJvcnNcbiAgbGV0ICRoZWxwZXJzID0gJG1vZGFsLmZpbmQoJ2Zvcm0gLmhlbHBlci10ZXh0Jyk7XG5cbiAgaWYgKCRoZWxwZXJzLmxlbmd0aCA+IDApIHtcbiAgICAkaGVscGVycy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKVxuICAgICAgICAuYXR0cignZGF0YS1lcnJvcicsICcnKVxuICAgICAgICAuYXR0cignZGF0YS1zdWNjZXNzJywgJycpXG4gICAgICAgIC5odG1sKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBlcnJvckZvcm0gPSBudWxsO1xuICBpZiAoJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2VDb250YWluZXInKS5sZW5ndGggPiAwKSB7XG4gICAgZXJyb3JGb3JtID0gJG1vZGFsLmZpbmQoJy5lcnJvck1lc3NhZ2VDb250YWluZXInKTtcbiAgfSBlbHNlIGlmICgkbW9kYWwuZmluZCgnLmVycm9yTWVzc2FnZScpLmxlbmd0aCA+IDApIHtcbiAgICBlcnJvckZvcm0gPSAkbW9kYWwuZmluZCgnLmVycm9yTWVzc2FnZScpO1xuICB9XG4gIGlmIChlcnJvckZvcm0gIT09IG51bGwpIHtcbiAgICBlcnJvckZvcm0uaHRtbCgnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJHdGFnRXZlbnQoJGJ1dHRvbikge1xuICBjb25zdCBhY3Rpb24gPSAkYnV0dG9uLmRhdGEoJ2d0YWctYWN0aW9uJyk7XG4gIGNvbnN0IGNhdGVnb3J5ID0gJGJ1dHRvbi5kYXRhKCdndGFnLWNhdGVnb3J5Jyk7XG4gIGNvbnN0IGxhYmVsID0gJGJ1dHRvbi5kYXRhKCdndGFnLWxhYmVsJyk7XG4gIGlmIChhY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBjYXRlZ29yeSAhPT0gdW5kZWZpbmVkICYmIGxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgIC8vICAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgLy8gICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICAvLyAgICAgdmFsdWU6IDFcbiAgICAvLyB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgam1nQWpheCA9IHByb3BlcnRpZXMgPT4ge1xuICBpZiAodHlwZW9mIHByb3BlcnRpZXMgIT0gJ29iamVjdCcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbmNvbW1pbmcgcHJvcGVydGllcyBtdXN0IGJlIGFuIG9iamVjdCBvciBhcnJheScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoISgndXJsJyBpbiBwcm9wZXJ0aWVzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJPaCBjb21lJ29uIG5vdy4uLiB3aXRob3V0IGEgVVJMIHByb3BlcnR5PyB5b3UgY2FuIGRvIGJldHRlciB0aGFuIHRoYXRcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCBhamF4ID0ge1xuICAgIHVybDogcHJvcGVydGllcy51cmwsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogW10sXG4gICAgc3VjY2VzczogbnVsbCxcbiAgICBmYWlsOiBudWxsXG4gIH07XG4gIGlmICgnbWV0aG9kJyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgYWpheC5tZXRob2QgPSBwcm9wZXJ0aWVzLm1ldGhvZDtcbiAgfVxuICBpZiAoJ2RhdGEnIGluIHByb3BlcnRpZXMpIHtcbiAgICBhamF4LmRhdGEgPSBwcm9wZXJ0aWVzLmRhdGE7XG4gIH1cbiAgaWYgKCdzdWNjZXNzJyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgYWpheC5zdWNjZXNzID0gcHJvcGVydGllcy5zdWNjZXNzO1xuICB9XG4gIGlmICgnZmFpbCcgaW4gcHJvcGVydGllcykge1xuICAgIGFqYXguZmFpbCA9IHByb3BlcnRpZXMuZmFpbDtcbiAgfVxuICAvL0B0b2RvIHRoaXMgY2FuIGJlIHJlZmFjdG9yZWQgdG8gdGhhdCBmZXRjaCBvciB3aGF0ZXZlclxuICAvL3RoaXMgbm93IGFsbG93cyB1cyB0byBoYXZlIHRoZSBhamF4IGxvZ2ljIGluIG9uZSBwbGFjZSBhbmQgaGF2ZSB0aGUgc2ltcGxlIGNhbGxpbmdcbiAgdmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBpZiAodHlwZW9mIGFqYXguc3VjY2VzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYWpheC5zdWNjZXNzKHhodHRwLnJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhamF4LmZhaWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGFqYXguZmFpbCh4aHR0cC5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgbGV0IGRhdGEgPSAnJztcbiAgLy9zbyB3ZSBhcmUgY2hlY2tpbmcgd2hldGhlciB3ZSd2ZSBnb3QgYSBzdHJpbmcgb3IgYW4gb2JqZWN0XG4gIGlmICh0eXBlb2YgYWpheC5kYXRhID09ICdzdHJpbmcnKSB7XG4gICAgZGF0YSA9IGFqYXguZGF0YTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCB3ZSBoYXZlIHRvIHBhcnNlIGl0Li4uIGJ1dCBpZiBpdCdzIGEgRm9ybURhdGEgd2UgbmVlZCB0byBkZWFsIHdpdGggaXQgZGlmZmVyZW50bHlcbiAgICBpZiAoYWpheC5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIGZvciAodmFyIHAgb2YgYWpheC5kYXRhKSB7XG4gICAgICAgIGlmIChkYXRhICE9ICcnKSB7XG4gICAgICAgICAgZGF0YSArPSAnJic7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSArPSBwWzBdICsgJz0nICsgcFsxXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9nb29kIG9sZCBvcmRpbmFyeSBvYmplY3QgOilcbiAgICAgIE9iamVjdC5rZXlzKGFqYXguZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPSAnJykge1xuICAgICAgICAgIGRhdGEgKz0gJyYnO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgKz0ga2V5ICsgJz0nICsgYWpheC5kYXRhW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB4aHR0cC5vcGVuKGFqYXgubWV0aG9kLCBhamF4LnVybCwgdHJ1ZSk7XG4gIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgeGh0dHAuc2VuZChkYXRhKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hMb2FkTW9yZUFjdGlvbnMoZ2xvYmFsU3RhdGUpIHtcbiAgY29uc3QgJGJ0bkxvYWRNb3JlID0gJCgnLmpzLWJ0bi1sb2FkLW1vcmUnKTtcbiAgY29uc3QgbG9hZE1vcmVGaW5pc2hlZEV2ZW50ID0gbmV3IEV2ZW50KCdsb2FkTW9yZUZpbmlzaGVkJyk7XG5cbiAgJGJ0bkxvYWRNb3JlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCBsYXN0T2Zmc2V0ID0gJCgnLmpzLWFydGljbGUtdGVtcGxhdGUnKVxuICAgICAgLmxhc3QoKVxuICAgICAgLm9mZnNldCgpLnRvcDtcbiAgICBjb25zdCB0b3RhbCA9ICRidG5Mb2FkTW9yZS5hdHRyKCdkYXRhLWxpbWl0Jyk7XG4gICAgY29uc3QgY3VycmVudE51bWJlciA9ICRidG5Mb2FkTW9yZS5hdHRyKCdkYXRhLXBhZ2UnKTtcbiAgICBjb25zdCBuZXh0TnVtYmVyID0gcGFyc2VJbnQoY3VycmVudE51bWJlcikgKyAxO1xuICAgIGNvbnN0ICRhcHBlbmRUYXJnZXQgPSAkKCcuanMtbG9hZG1vcmUtdGFyZ2V0Jyk7XG5cbiAgICAkYnRuTG9hZE1vcmUuYWRkQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcblxuICAgIGlmIChuZXh0TnVtYmVyID4gdG90YWwpIHtcbiAgICAgICRidG5Mb2FkTW9yZS5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHVybCArICc/cGFnZT0nICsgbmV4dE51bWJlcjtcblxuICAgICAgJC5nZXQodXJsLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmFydGljbGVzICE9PSB1bmRlZmluZWQgJiYgZGF0YS5hcnRpY2xlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICQuZWFjaChkYXRhLmFydGljbGVzLCBmdW5jdGlvbihpbmRleCwgYXJ0aWNsZSkge1xuICAgICAgICAgICAgJGFwcGVuZFRhcmdldC5hcHBlbmQoZ2VuZXJhdGVDbG9uZWRBcnRpY2xlV2l0aERhdGEoYXJ0aWNsZSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICRidG5Mb2FkTW9yZS5hdHRyKCdkYXRhLWxpbWl0JywgZGF0YS5sYXN0X3BhZ2UpO1xuICAgICAgICAkYnRuTG9hZE1vcmUuYXR0cignZGF0YS1wYWdlJywgbmV4dE51bWJlcik7XG4gICAgICAgICRidG5Mb2FkTW9yZS5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChsb2FkTW9yZUZpbmlzaGVkRXZlbnQpO1xuXG4gICAgICAgIGlmIChuZXh0TnVtYmVyICsgMSA+IHRvdGFsKSB7XG4gICAgICAgICAgJGJ0bkxvYWRNb3JlLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBsYXN0T2Zmc2V0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBnbG9iYWxTdGF0ZS5sb2FkYWJsZUltYWdlcyA9IGxhenlMb2FkSW1hZ2VzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJnXScpKTtcbiAgICAgICAgfSwgMzUwKTtcbiAgICAgIH0pLmZhaWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICRidG5Mb2FkTW9yZS5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuICAgICAgICAkYnRuTG9hZE1vcmUuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ2xvbmVkQXJ0aWNsZVdpdGhEYXRhKGFydGljbGUpIHtcbiAgbGV0ICR0ZW1wbGF0ZSA9ICQoJy5qcy1hcnRpY2xlLXRlbXBsYXRlJylcbiAgICAuZmlyc3QoKVxuICAgIC5jbG9uZSgpO1xuXG4gIC8vRklYTUU6IHRoZSBmb2xsb3dpbmcgdGhpbmdzIG5lZWQgdG8gYmUgY2hhbmdlZC4gVGhlIGVuZHBvaW50IHNob3VsZCBvbmx5IHJldHVybiBvbmUgZGVmYXVsdCBzaXplXG5cbiAgJHRlbXBsYXRlXG4gICAgLmZpbmQoJ2EgPiBpbWcnKVxuICAgIC5maXJzdCgpXG4gICAgLmF0dHIoJ3NyYycsIGFydGljbGUudGh1bWJuYWlsKTtcbiAgJHRlbXBsYXRlXG4gICAgLmZpbmQoJy5hcnRpY2xlU25pcHBldC10aXRsZSA+IGEnKVxuICAgIC5maXJzdCgpXG4gICAgLmh0bWwoYXJ0aWNsZS50aXRsZSk7XG5cbiAgJHRlbXBsYXRlLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5hdHRyKCdocmVmJywgYXJ0aWNsZS5mdWxsX3NsdWcpO1xuICB9KTtcblxuICByZXR1cm4gJHRlbXBsYXRlO1xufVxuIiwiaW1wb3J0IHsgam1nQWpheCB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0ICRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtZm9ybScpO1xuXG4kZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gIGxldCB1cmwgPSAkZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBqbWdBamF4KHtcbiAgICB1cmw6IHVybCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBzdWNjZXNzUG9zdFN1Ym1pc3Npb25BY3Rpb25zKGRhdGEpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgZmFpbGVkUG9zdFN1Ym1pc3Npb25BY3Rpb25zKGRhdGEpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzdWNjZXNzUG9zdFN1Ym1pc3Npb25BY3Rpb25zID0gZnVuY3Rpb24oZGF0YSkge1xuICBpZiAoZGF0YS5lbWFpbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbWFpbCB1cGRhdGVkPycpO1xuICAgIC8vUG9wdXAuZW1haWxVcGRhdGVkLnNob3coKTtcbiAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cykge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2VzcycpO1xuICAgIC8vUG9wdXAuc3VjY2Vzc1VwZGF0ZS5vcGVuKGZyb21XaGVyZVdhc1RyaWdnZXJlZCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2Egc3VjY2VzcyBidXQgYSBmYWlsdXJlPycpO1xuICB9XG4gIGNsZWFyRm9ybUVycm9ycygpO1xufTtcblxuY29uc3QgZmFpbGVkUG9zdFN1Ym1pc3Npb25BY3Rpb25zID0gZnVuY3Rpb24oZGF0YSkge1xuICBjbGVhckZvcm1FcnJvcnMoKTtcbiAgYWxlcnQoZGF0YSk7XG59O1xuXG5jb25zdCBjbGVhckZvcm1FcnJvcnMgPSAoKSA9PiB7XG4gIGxldCBlcnJvckxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWhlbHBlclRleHQnKTtcbiAgZXJyb3JMYWJlbHMuZm9yRWFjaChsYWJlbCA9PiB7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufTtcblxud2luZG93LnNob3dEZXRhaWxzID0gYW5jaG9yID0+IHtcbiAgbmF2U3dpdGNoKGFuY2hvciwgJ2RldGFpbHMnKTtcbn07XG5cbndpbmRvdy5zaG93U2F2ZWRBcnRpY2xlcyA9IGFuY2hvciA9PiB7XG4gIG5hdlN3aXRjaChhbmNob3IsICdhcnRpY2xlcycpO1xufTtcblxuZnVuY3Rpb24gbmF2U3dpdGNoKGFjdGl2ZUFuY2hvciwgdGFyZ2V0RGl2KSB7XG4gIGxldCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjY29yZGlvbicpO1xuICBhbmNob3JzLmZvckVhY2goYW5jaG9yID0+IHtcbiAgICBhbmNob3IuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xuICBhY3RpdmVBbmNob3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjb3JkaW9uLXRhYicpO1xuICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhcmdldERpdikuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGdsb2JhbFN0YXRlID0ge1xuICBsb2FkYWJsZUltYWdlczogbnVsbCxcbiAgc2Nyb2xsUGF1c2U6IGZhbHNlLFxuICBzY3JlZW5TaXplczoge1xuICAgIHNtOiAzNzUsXG4gICAgc21kOiA2NjcsXG4gICAgbWQ6IDc2OCxcbiAgICB4bWQ6IDk4MCxcbiAgICBsZzogMTAyNCxcbiAgICB4bGc6IDExNjAsXG4gICAgeHhsZzogMTI2MCxcbiAgICBtYXhXaWR0aDogMTEyMCxcbiAgICBleHRlcm5hbE1heFdpZHRoOiAxNjQ4XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9