/**
 * math.js
 * https://github.com/josdejong/mathjs
 *
 * Math.js is an extensive math library for JavaScript and Node.js,
 * It features real and complex numbers, units, matrices, a large set of
 * mathematical functions, and a flexible expression parser.
 *
 * @version 5.10.3
 * @date    2019-05-18
 *
 * @license
 * Copyright (C) 2013-2019 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["math"] = factory();
	else
		root["math"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Create a Matrix. The function creates a new `math.type.Matrix` object from
   * an `Array`. A Matrix has utility functions to manipulate the data in the
   * matrix, like getting the size and getting or setting values in the matrix.
   * Supported storage formats are 'dense' and 'sparse'.
   *
   * Syntax:
   *
   *    math.matrix()                         // creates an empty matrix using default storage format (dense).
   *    math.matrix(data)                     // creates a matrix with initial data using default storage format (dense).
   *    math.matrix('dense')                  // creates an empty matrix using the given storage format.
   *    math.matrix(data, 'dense')            // creates a matrix with initial data using the given storage format.
   *    math.matrix(data, 'sparse')           // creates a sparse matrix with initial data.
   *    math.matrix(data, 'sparse', 'number') // creates a sparse matrix with initial data, number data type.
   *
   * Examples:
   *
   *    let m = math.matrix([[1, 2], [3, 4]])
   *    m.size()                        // Array [2, 2]
   *    m.resize([3, 2], 5)
   *    m.valueOf()                     // Array [[1, 2], [3, 4], [5, 5]]
   *    m.get([1, 0])                    // number 3
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, number, string, unit, sparse
   *
   * @param {Array | Matrix} [data]    A multi dimensional array
   * @param {string} [format]          The Matrix storage format
   *
   * @return {Matrix} The created matrix
   */
  var matrix = typed('matrix', {
    '': function _() {
      return _create([]);
    },
    'string': function string(format) {
      return _create([], format);
    },
    'string, string': function stringString(format, datatype) {
      return _create([], format, datatype);
    },
    'Array': function Array(data) {
      return _create(data);
    },
    'Matrix': function Matrix(data) {
      return _create(data, data.storage());
    },
    'Array | Matrix, string': _create,
    'Array | Matrix, string, string': _create
  });
  matrix.toTex = {
    0: '\\begin{bmatrix}\\end{bmatrix}',
    1: "\\left(${args[0]}\\right)",
    2: "\\left(${args[0]}\\right)"
  };
  return matrix;
  /**
   * Create a new Matrix with given storage format
   * @param {Array} data
   * @param {string} [format]
   * @param {string} [datatype]
   * @returns {Matrix} Returns a new Matrix
   * @private
   */

  function _create(data, format, datatype) {
    // get storage format constructor
    var M = type.Matrix.storage(format || 'default'); // create instance

    return new M(data, datatype);
  }
}

exports.name = 'matrix';
exports.factory = factory;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Execute the callback function element wise for each element in array and any
 * nested array
 * Returns an array with the results
 * @param {Array | Matrix} array
 * @param {Function} callback   The callback is called with two parameters:
 *                              value1 and value2, which contain the current
 *                              element of both arrays.
 * @param {boolean} [skipZeros] Invoke callback function for non-zero values only.
 *
 * @return {Array | Matrix} res
 */

module.exports = function deepMap(array, callback, skipZeros) {
  if (array && typeof array.map === 'function') {
    // TODO: replace array.map with a for loop to improve performance
    return array.map(function (x) {
      return deepMap(x, callback, skipZeros);
    });
  } else {
    return callback(array);
  }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIndex", function() { return validateIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reshape", function() { return reshape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squeeze", function() { return squeeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsqueeze", function() { return unsqueeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRegExp", function() { return filterRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identify", function() { return identify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalize", function() { return generalize; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_number__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_DimensionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_error_DimensionError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_IndexError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _error_IndexError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_error_IndexError__WEBPACK_IMPORTED_MODULE_3__);






/**
 * Calculate the size of a multi dimensional array.
 * This function checks the size of the first entry, it does not validate
 * whether all dimensions match. (use function `validate` for that)
 * @param {Array} x
 * @Return {Number[]} size
 */

function size(x) {
  var s = [];

  while (Array.isArray(x)) {
    s.push(x.length);
    x = x[0];
  }

  return s;
}
/**
 * Recursively validate whether each element in a multi dimensional array
 * has a size corresponding to the provided size array.
 * @param {Array} array    Array to be validated
 * @param {number[]} size  Array with the size of each dimension
 * @param {number} dim   Current dimension
 * @throws DimensionError
 * @private
 */

function _validate(array, size, dim) {
  var i;
  var len = array.length;

  if (len !== size[dim]) {
    throw new _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a(len, size[dim]);
  }

  if (dim < size.length - 1) {
    // recursively validate each child array
    var dimNext = dim + 1;

    for (i = 0; i < len; i++) {
      var child = array[i];

      if (!Array.isArray(child)) {
        throw new _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a(size.length - 1, size.length, '<');
      }

      _validate(array[i], size, dimNext);
    }
  } else {
    // last dimension. none of the childs may be an array
    for (i = 0; i < len; i++) {
      if (Array.isArray(array[i])) {
        throw new _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a(size.length + 1, size.length, '>');
      }
    }
  }
}
/**
 * Validate whether each element in a multi dimensional array has
 * a size corresponding to the provided size array.
 * @param {Array} array    Array to be validated
 * @param {number[]} size  Array with the size of each dimension
 * @throws DimensionError
 */


function validate(array, size) {
  var isScalar = size.length === 0;

  if (isScalar) {
    // scalar
    if (Array.isArray(array)) {
      throw new _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a(array.length, 0);
    }
  } else {
    // array
    _validate(array, size, 0);
  }
}
/**
 * Test whether index is an integer number with index >= 0 and index < length
 * when length is provided
 * @param {number} index    Zero-based index
 * @param {number} [length] Length of the array
 */

function validateIndex(index, length) {
  if (!_number__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(index) || !_number__WEBPACK_IMPORTED_MODULE_0___default.a.isInteger(index)) {
    throw new TypeError('Index must be an integer (value: ' + index + ')');
  }

  if (index < 0 || typeof length === 'number' && index >= length) {
    throw new _error_IndexError__WEBPACK_IMPORTED_MODULE_3___default.a(index, length);
  }
}
/**
 * Resize a multi dimensional array. The resized array is returned.
 * @param {Array} array         Array to be resized
 * @param {Array.<number>} size Array with the size of each dimension
 * @param {*} [defaultValue=0]  Value to be filled in in new entries,
 *                              zero by default. Specify for example `null`,
 *                              to clearly see entries that are not explicitly
 *                              set.
 * @return {Array} array         The resized array
 */

function resize(array, size, defaultValue) {
  // TODO: add support for scalars, having size=[] ?
  // check the type of the arguments
  if (!Array.isArray(array) || !Array.isArray(size)) {
    throw new TypeError('Array expected');
  }

  if (size.length === 0) {
    throw new Error('Resizing to scalar is not supported');
  } // check whether size contains positive integers


  size.forEach(function (value) {
    if (!_number__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(value) || !_number__WEBPACK_IMPORTED_MODULE_0___default.a.isInteger(value) || value < 0) {
      throw new TypeError('Invalid size, must contain positive integers ' + '(size: ' + _string__WEBPACK_IMPORTED_MODULE_1___default.a.format(size) + ')');
    }
  }); // recursively resize the array

  var _defaultValue = defaultValue !== undefined ? defaultValue : 0;

  _resize(array, size, 0, _defaultValue);

  return array;
}
/**
 * Recursively resize a multi dimensional array
 * @param {Array} array         Array to be resized
 * @param {number[]} size       Array with the size of each dimension
 * @param {number} dim          Current dimension
 * @param {*} [defaultValue]    Value to be filled in in new entries,
 *                              undefined by default.
 * @private
 */

function _resize(array, size, dim, defaultValue) {
  var i;
  var elem;
  var oldLen = array.length;
  var newLen = size[dim];
  var minLen = Math.min(oldLen, newLen); // apply new length

  array.length = newLen;

  if (dim < size.length - 1) {
    // non-last dimension
    var dimNext = dim + 1; // resize existing child arrays

    for (i = 0; i < minLen; i++) {
      // resize child array
      elem = array[i];

      if (!Array.isArray(elem)) {
        elem = [elem]; // add a dimension

        array[i] = elem;
      }

      _resize(elem, size, dimNext, defaultValue);
    } // create new child arrays


    for (i = minLen; i < newLen; i++) {
      // get child array
      elem = [];
      array[i] = elem; // resize new child array

      _resize(elem, size, dimNext, defaultValue);
    }
  } else {
    // last dimension
    // remove dimensions of existing values
    for (i = 0; i < minLen; i++) {
      while (Array.isArray(array[i])) {
        array[i] = array[i][0];
      }
    } // fill new elements with the default value


    for (i = minLen; i < newLen; i++) {
      array[i] = defaultValue;
    }
  }
}
/**
 * Re-shape a multi dimensional array to fit the specified dimensions
 * @param {Array} array           Array to be reshaped
 * @param {Array.<number>} sizes  List of sizes for each dimension
 * @returns {Array}               Array whose data has been formatted to fit the
 *                                specified dimensions
 *
 * @throws {DimensionError}       If the product of the new dimension sizes does
 *                                not equal that of the old ones
 */


function reshape(array, sizes) {
  var flatArray = flatten(array);
  var newArray;

  function product(arr) {
    return arr.reduce(function (prev, curr) {
      return prev * curr;
    });
  }

  if (!Array.isArray(array) || !Array.isArray(sizes)) {
    throw new TypeError('Array expected');
  }

  if (sizes.length === 0) {
    throw new _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a(0, product(size(array)), '!=');
  }

  var totalSize = 1;

  for (var sizeIndex = 0; sizeIndex < sizes.length; sizeIndex++) {
    totalSize *= sizes[sizeIndex];
  }

  if (flatArray.length !== totalSize) {
    throw new _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a(product(sizes), product(size(array)), '!=');
  }

  try {
    newArray = _reshape(flatArray, sizes);
  } catch (e) {
    if (e instanceof _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a) {
      throw new _error_DimensionError__WEBPACK_IMPORTED_MODULE_2___default.a(product(sizes), product(size(array)), '!=');
    }

    throw e;
  }

  return newArray;
}
/**
 * Iteratively re-shape a multi dimensional array to fit the specified dimensions
 * @param {Array} array           Array to be reshaped
 * @param {Array.<number>} sizes  List of sizes for each dimension
 * @returns {Array}               Array whose data has been formatted to fit the
 *                                specified dimensions
 */

function _reshape(array, sizes) {
  // testing if there are enough elements for the requested shape
  var tmpArray = array;
  var tmpArray2; // for each dimensions starting by the last one and ignoring the first one

  for (var sizeIndex = sizes.length - 1; sizeIndex > 0; sizeIndex--) {
    var size = sizes[sizeIndex];
    tmpArray2 = []; // aggregate the elements of the current tmpArray in elements of the requested size

    var length = tmpArray.length / size;

    for (var i = 0; i < length; i++) {
      tmpArray2.push(tmpArray.slice(i * size, (i + 1) * size));
    } // set it as the new tmpArray for the next loop turn or for return


    tmpArray = tmpArray2;
  }

  return tmpArray;
}
/**
 * Squeeze a multi dimensional array
 * @param {Array} array
 * @param {Array} [arraySize]
 * @returns {Array} returns the array itself
 */


function squeeze(array, arraySize) {
  var s = arraySize || size(array); // squeeze outer dimensions

  while (Array.isArray(array) && array.length === 1) {
    array = array[0];
    s.shift();
  } // find the first dimension to be squeezed


  var dims = s.length;

  while (s[dims - 1] === 1) {
    dims--;
  } // squeeze inner dimensions


  if (dims < s.length) {
    array = _squeeze(array, dims, 0);
    s.length = dims;
  }

  return array;
}
/**
 * Recursively squeeze a multi dimensional array
 * @param {Array} array
 * @param {number} dims Required number of dimensions
 * @param {number} dim  Current dimension
 * @returns {Array | *} Returns the squeezed array
 * @private
 */

function _squeeze(array, dims, dim) {
  var i, ii;

  if (dim < dims) {
    var next = dim + 1;

    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _squeeze(array[i], dims, next);
    }
  } else {
    while (Array.isArray(array)) {
      array = array[0];
    }
  }

  return array;
}
/**
 * Unsqueeze a multi dimensional array: add dimensions when missing
 *
 * Paramter `size` will be mutated to match the new, unqueezed matrix size.
 *
 * @param {Array} array
 * @param {number} dims       Desired number of dimensions of the array
 * @param {number} [outer]    Number of outer dimensions to be added
 * @param {Array} [arraySize] Current size of array.
 * @returns {Array} returns the array itself
 * @private
 */


function unsqueeze(array, dims, outer, arraySize) {
  var s = arraySize || size(array); // unsqueeze outer dimensions

  if (outer) {
    for (var i = 0; i < outer; i++) {
      array = [array];
      s.unshift(1);
    }
  } // unsqueeze inner dimensions


  array = _unsqueeze(array, dims, 0);

  while (s.length < dims) {
    s.push(1);
  }

  return array;
}
/**
 * Recursively unsqueeze a multi dimensional array
 * @param {Array} array
 * @param {number} dims Required number of dimensions
 * @param {number} dim  Current dimension
 * @returns {Array | *} Returns the squeezed array
 * @private
 */

function _unsqueeze(array, dims, dim) {
  var i, ii;

  if (Array.isArray(array)) {
    var next = dim + 1;

    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _unsqueeze(array[i], dims, next);
    }
  } else {
    for (var d = dim; d < dims; d++) {
      array = [array];
    }
  }

  return array;
}
/**
 * Flatten a multi dimensional array, put all elements in a one dimensional
 * array
 * @param {Array} array   A multi dimensional array
 * @return {Array}        The flattened array (1 dimensional)
 */


function flatten(array) {
  if (!Array.isArray(array)) {
    // if not an array, return as is
    return array;
  }

  var flat = [];
  array.forEach(function callback(value) {
    if (Array.isArray(value)) {
      value.forEach(callback); // traverse through sub-arrays recursively
    } else {
      flat.push(value);
    }
  });
  return flat;
}
/**
 * A safe map
 * @param {Array} array
 * @param {function} callback
 */

function map(array, callback) {
  return Array.prototype.map.call(array, callback);
}
/**
 * A safe forEach
 * @param {Array} array
 * @param {function} callback
 */

function forEach(array, callback) {
  Array.prototype.forEach.call(array, callback);
}
/**
 * A safe filter
 * @param {Array} array
 * @param {function} callback
 */

function filter(array, callback) {
  if (size(array).length !== 1) {
    throw new Error('Only one dimensional matrices supported');
  }

  return Array.prototype.filter.call(array, callback);
}
/**
 * Filter values in a callback given a regular expression
 * @param {Array} array
 * @param {RegExp} regexp
 * @return {Array} Returns the filtered array
 * @private
 */

function filterRegExp(array, regexp) {
  if (size(array).length !== 1) {
    throw new Error('Only one dimensional matrices supported');
  }

  return Array.prototype.filter.call(array, function (entry) {
    return regexp.test(entry);
  });
}
/**
 * A safe join
 * @param {Array} array
 * @param {string} separator
 */

function join(array, separator) {
  return Array.prototype.join.call(array, separator);
}
/**
 * Assign a numeric identifier to every element of a sorted array
 * @param {Array} a  An array
 * @return {Array} An array of objects containing the original value and its identifier
 */

function identify(a) {
  if (!Array.isArray(a)) {
    throw new TypeError('Array input expected');
  }

  if (a.length === 0) {
    return a;
  }

  var b = [];
  var count = 0;
  b[0] = {
    value: a[0],
    identifier: 0
  };

  for (var i = 1; i < a.length; i++) {
    if (a[i] === a[i - 1]) {
      count++;
    } else {
      count = 0;
    }

    b.push({
      value: a[i],
      identifier: count
    });
  }

  return b;
}
/**
 * Remove the numeric identifier from the elements
 * @param {array} a  An array
 * @return {array} An array of values without identifiers
 */

function generalize(a) {
  if (!Array.isArray(a)) {
    throw new TypeError('Array input expected');
  }

  if (a.length === 0) {
    return a;
  }

  var b = [];

  for (var i = 0; i < a.length; i++) {
    b.push(a[i].value);
  }

  return b;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectUtils = __webpack_require__(5);
/**
 * @typedef {{sign: '+' | '-' | '', coefficients: number[], exponent: number}} SplitValue
 */

/**
 * Test whether value is a number
 * @param {*} value
 * @return {boolean} isNumber
 */


exports.isNumber = function (value) {
  return typeof value === 'number';
};
/**
 * Check if a number is integer
 * @param {number | boolean} value
 * @return {boolean} isInteger
 */


exports.isInteger = function (value) {
  if (typeof value === 'boolean') {
    return true;
  }

  return isFinite(value) ? value === Math.round(value) : false; // Note: we use ==, not ===, as we can have Booleans as well
};
/**
 * Calculate the sign of a number
 * @param {number} x
 * @returns {*}
 */


exports.sign = Math.sign || function (x) {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
};
/**
 * Convert a number to a formatted string representation.
 *
 * Syntax:
 *
 *    format(value)
 *    format(value, options)
 *    format(value, precision)
 *    format(value, fn)
 *
 * Where:
 *
 *    {number} value   The value to be formatted
 *    {Object} options An object with formatting options. Available options:
 *                     {string} notation
 *                         Number notation. Choose from:
 *                         'fixed'          Always use regular number notation.
 *                                          For example '123.40' and '14000000'
 *                         'exponential'    Always use exponential notation.
 *                                          For example '1.234e+2' and '1.4e+7'
 *                         'engineering'    Always use engineering notation.
 *                                          For example '123.4e+0' and '14.0e+6'
 *                         'auto' (default) Regular number notation for numbers
 *                                          having an absolute value between
 *                                          `lowerExp` and `upperExp` bounds, and
 *                                          uses exponential notation elsewhere.
 *                                          Lower bound is included, upper bound
 *                                          is excluded.
 *                                          For example '123.4' and '1.4e7'.
 *                     {number} precision   A number between 0 and 16 to round
 *                                          the digits of the number.
 *                                          In case of notations 'exponential',
 *                                          'engineering', and 'auto',
 *                                          `precision` defines the total
 *                                          number of significant digits returned.
 *                                          In case of notation 'fixed',
 *                                          `precision` defines the number of
 *                                          significant digits after the decimal
 *                                          point.
 *                                          `precision` is undefined by default,
 *                                          not rounding any digits.
 *                     {number} lowerExp    Exponent determining the lower boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `-3`.
 *                     {number} upperExp    Exponent determining the upper boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `5`.
 *    {Function} fn    A custom formatting function. Can be used to override the
 *                     built-in notations. Function `fn` is called with `value` as
 *                     parameter and must return a string. Is useful for example to
 *                     format all values inside a matrix in a particular way.
 *
 * Examples:
 *
 *    format(6.4)                                        // '6.4'
 *    format(1240000)                                    // '1.24e6'
 *    format(1/3)                                        // '0.3333333333333333'
 *    format(1/3, 3)                                     // '0.333'
 *    format(21385, 2)                                   // '21000'
 *    format(12.071, {notation: 'fixed'})                // '12'
 *    format(2.3,    {notation: 'fixed', precision: 2})  // '2.30'
 *    format(52.8,   {notation: 'exponential'})          // '5.28e+1'
 *    format(12345678, {notation: 'engineering'})        // '12.345678e+6'
 *
 * @param {number} value
 * @param {Object | Function | number} [options]
 * @return {string} str The formatted value
 */


exports.format = function (value, options) {
  if (typeof options === 'function') {
    // handle format(value, fn)
    return options(value);
  } // handle special cases


  if (value === Infinity) {
    return 'Infinity';
  } else if (value === -Infinity) {
    return '-Infinity';
  } else if (isNaN(value)) {
    return 'NaN';
  } // default values for options


  var notation = 'auto';
  var precision;

  if (options) {
    // determine notation from options
    if (options.notation) {
      notation = options.notation;
    } // determine precision from options


    if (exports.isNumber(options)) {
      precision = options;
    } else if (exports.isNumber(options.precision)) {
      precision = options.precision;
    }
  } // handle the various notations


  switch (notation) {
    case 'fixed':
      return exports.toFixed(value, precision);

    case 'exponential':
      return exports.toExponential(value, precision);

    case 'engineering':
      return exports.toEngineering(value, precision);

    case 'auto':
      // TODO: clean up some day. Deprecated since: 2018-01-24
      // @deprecated upper and lower are replaced with upperExp and lowerExp since v4.0.0
      if (options && options.exponential && (options.exponential.lower !== undefined || options.exponential.upper !== undefined)) {
        var fixedOptions = objectUtils.map(options, function (x) {
          return x;
        });
        fixedOptions.exponential = undefined;

        if (options.exponential.lower !== undefined) {
          fixedOptions.lowerExp = Math.round(Math.log(options.exponential.lower) / Math.LN10);
        }

        if (options.exponential.upper !== undefined) {
          fixedOptions.upperExp = Math.round(Math.log(options.exponential.upper) / Math.LN10);
        }

        console.warn('Deprecation warning: Formatting options exponential.lower and exponential.upper ' + '(minimum and maximum value) ' + 'are replaced with exponential.lowerExp and exponential.upperExp ' + '(minimum and maximum exponent) since version 4.0.0. ' + 'Replace ' + JSON.stringify(options) + ' with ' + JSON.stringify(fixedOptions));
        return exports.toPrecision(value, precision, fixedOptions);
      }

      return exports.toPrecision(value, precision, options && options) // remove trailing zeros after the decimal point
      .replace(/((\.\d*?)(0+))($|e)/, function () {
        var digits = arguments[2];
        var e = arguments[4];
        return digits !== '.' ? digits + e : e;
      });

    default:
      throw new Error('Unknown notation "' + notation + '". ' + 'Choose "auto", "exponential", or "fixed".');
  }
};
/**
 * Split a number into sign, coefficients, and exponent
 * @param {number | string} value
 * @return {SplitValue}
 *              Returns an object containing sign, coefficients, and exponent
 */


exports.splitNumber = function (value) {
  // parse the input value
  var match = String(value).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);

  if (!match) {
    throw new SyntaxError('Invalid number ' + value);
  }

  var sign = match[1];
  var digits = match[2];
  var exponent = parseFloat(match[4] || '0');
  var dot = digits.indexOf('.');
  exponent += dot !== -1 ? dot - 1 : digits.length - 1;
  var coefficients = digits.replace('.', '') // remove the dot (must be removed before removing leading zeros)
  .replace(/^0*/, function (zeros) {
    // remove leading zeros, add their count to the exponent
    exponent -= zeros.length;
    return '';
  }).replace(/0*$/, '') // remove trailing zeros
  .split('').map(function (d) {
    return parseInt(d);
  });

  if (coefficients.length === 0) {
    coefficients.push(0);
    exponent++;
  }

  return {
    sign: sign,
    coefficients: coefficients,
    exponent: exponent
  };
};
/**
 * Format a number in engineering notation. Like '1.23e+6', '2.3e+0', '3.500e-3'
 * @param {number | string} value
 * @param {number} [precision]        Optional number of significant figures to return.
 */


exports.toEngineering = function (value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }

  var rounded = exports.roundDigits(exports.splitNumber(value), precision);
  var e = rounded.exponent;
  var c = rounded.coefficients; // find nearest lower multiple of 3 for exponent

  var newExp = e % 3 === 0 ? e : e < 0 ? e - 3 - e % 3 : e - e % 3;

  if (exports.isNumber(precision)) {
    // add zeroes to give correct sig figs
    while (precision > c.length || e - newExp + 1 > c.length) {
      c.push(0);
    }
  } else {
    // concatenate coefficients with necessary zeros
    var significandsDiff = e >= 0 ? e : Math.abs(newExp); // add zeros if necessary (for ex: 1e+8)

    while (c.length - 1 < significandsDiff) {
      c.push(0);
    }
  } // find difference in exponents


  var expDiff = Math.abs(e - newExp);
  var decimalIdx = 1; // push decimal index over by expDiff times

  while (expDiff > 0) {
    decimalIdx++;
    expDiff--;
  } // if all coefficient values are zero after the decimal point and precision is unset, don't add a decimal value.
  // otherwise concat with the rest of the coefficients


  var decimals = c.slice(decimalIdx).join('');
  var decimalVal = exports.isNumber(precision) && decimals.length || decimals.match(/[1-9]/) ? '.' + decimals : '';
  var str = c.slice(0, decimalIdx).join('') + decimalVal + 'e' + (e >= 0 ? '+' : '') + newExp.toString();
  return rounded.sign + str;
};
/**
 * Format a number with fixed notation.
 * @param {number | string} value
 * @param {number} [precision=undefined]  Optional number of decimals after the
 *                                        decimal point. null by default.
 */


exports.toFixed = function (value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }

  var splitValue = exports.splitNumber(value);
  var rounded = typeof precision === 'number' ? exports.roundDigits(splitValue, splitValue.exponent + 1 + precision) : splitValue;
  var c = rounded.coefficients;
  var p = rounded.exponent + 1; // exponent may have changed
  // append zeros if needed

  var pp = p + (precision || 0);

  if (c.length < pp) {
    c = c.concat(zeros(pp - c.length));
  } // prepend zeros if needed


  if (p < 0) {
    c = zeros(-p + 1).concat(c);
    p = 1;
  } // insert a dot if needed


  if (p < c.length) {
    c.splice(p, 0, p === 0 ? '0.' : '.');
  }

  return rounded.sign + c.join('');
};
/**
 * Format a number in exponential notation. Like '1.23e+5', '2.3e+0', '3.500e-3'
 * @param {number | string} value
 * @param {number} [precision]  Number of digits in formatted output.
 *                              If not provided, the maximum available digits
 *                              is used.
 */


exports.toExponential = function (value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  } // round if needed, else create a clone


  var split = exports.splitNumber(value);
  var rounded = precision ? exports.roundDigits(split, precision) : split;
  var c = rounded.coefficients;
  var e = rounded.exponent; // append zeros if needed

  if (c.length < precision) {
    c = c.concat(zeros(precision - c.length));
  } // format as `C.CCCe+EEE` or `C.CCCe-EEE`


  var first = c.shift();
  return rounded.sign + first + (c.length > 0 ? '.' + c.join('') : '') + 'e' + (e >= 0 ? '+' : '') + e;
};
/**
 * Format a number with a certain precision
 * @param {number | string} value
 * @param {number} [precision=undefined] Optional number of digits.
 * @param {{lowerExp: number | undefined, upperExp: number | undefined}} [options]
 *                                       By default:
 *                                         lowerExp = -3 (incl)
 *                                         upper = +5 (excl)
 * @return {string}
 */


exports.toPrecision = function (value, precision, options) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  } // determine lower and upper bound for exponential notation.


  var lowerExp = options && options.lowerExp !== undefined ? options.lowerExp : -3;
  var upperExp = options && options.upperExp !== undefined ? options.upperExp : 5;
  var split = exports.splitNumber(value);

  if (split.exponent < lowerExp || split.exponent >= upperExp) {
    // exponential notation
    return exports.toExponential(value, precision);
  } else {
    var rounded = precision ? exports.roundDigits(split, precision) : split;
    var c = rounded.coefficients;
    var e = rounded.exponent; // append trailing zeros

    if (c.length < precision) {
      c = c.concat(zeros(precision - c.length));
    } // append trailing zeros
    // TODO: simplify the next statement


    c = c.concat(zeros(e - c.length + 1 + (c.length < precision ? precision - c.length : 0))); // prepend zeros

    c = zeros(-e).concat(c);
    var dot = e > 0 ? e : 0;

    if (dot < c.length - 1) {
      c.splice(dot + 1, 0, '.');
    }

    return rounded.sign + c.join('');
  }
};
/**
 * Round the number of digits of a number *
 * @param {SplitValue} split       A value split with .splitNumber(value)
 * @param {number} precision  A positive integer
 * @return {SplitValue}
 *              Returns an object containing sign, coefficients, and exponent
 *              with rounded digits
 */


exports.roundDigits = function (split, precision) {
  // create a clone
  var rounded = {
    sign: split.sign,
    coefficients: split.coefficients,
    exponent: split.exponent
  };
  var c = rounded.coefficients; // prepend zeros if needed

  while (precision <= 0) {
    c.unshift(0);
    rounded.exponent++;
    precision++;
  }

  if (c.length > precision) {
    var removed = c.splice(precision, c.length - precision);

    if (removed[0] >= 5) {
      var i = precision - 1;
      c[i]++;

      while (c[i] === 10) {
        c.pop();

        if (i === 0) {
          c.unshift(0);
          rounded.exponent++;
          i++;
        }

        i--;
        c[i]++;
      }
    }
  }

  return rounded;
};
/**
 * Create an array filled with zeros.
 * @param {number} length
 * @return {Array}
 */


function zeros(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(0);
  }

  return arr;
}
/**
 * Count the number of significant digits of a number.
 *
 * For example:
 *   2.34 returns 3
 *   0.0034 returns 2
 *   120.5e+30 returns 4
 *
 * @param {number} value
 * @return {number} digits   Number of significant digits
 */


exports.digits = function (value) {
  return value.toExponential().replace(/e.*$/, '') // remove exponential notation
  .replace(/^0\.?0*|\./, '') // remove decimal point and leading zeros
  .length;
};
/**
 * Minimum number added to one that makes the result different than one
 */


exports.DBL_EPSILON = Number.EPSILON || 2.2204460492503130808472633361816E-16;
/**
 * Compares two floating point numbers.
 * @param {number} x          First value to compare
 * @param {number} y          Second value to compare
 * @param {number} [epsilon]  The maximum relative difference between x and y
 *                            If epsilon is undefined or null, the function will
 *                            test whether x and y are exactly equal.
 * @return {boolean} whether the two numbers are nearly equal
*/

exports.nearlyEqual = function (x, y, epsilon) {
  // if epsilon is null or undefined, test whether x and y are exactly equal
  if (epsilon === null || epsilon === undefined) {
    return x === y;
  }

  if (x === y) {
    return true;
  } // NaN


  if (isNaN(x) || isNaN(y)) {
    return false;
  } // at this point x and y should be finite


  if (isFinite(x) && isFinite(y)) {
    // check numbers are very close, needed when comparing numbers near zero
    var diff = Math.abs(x - y);

    if (diff < exports.DBL_EPSILON) {
      return true;
    } else {
      // use relative error
      return diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon;
    }
  } // Infinite and Number or negative Infinite and positive Infinite cases


  return false;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escapeLatex = __webpack_require__(180);

exports.symbols = {
  // GREEK LETTERS
  Alpha: 'A',
  alpha: '\\alpha',
  Beta: 'B',
  beta: '\\beta',
  Gamma: '\\Gamma',
  gamma: '\\gamma',
  Delta: '\\Delta',
  delta: '\\delta',
  Epsilon: 'E',
  epsilon: '\\epsilon',
  varepsilon: '\\varepsilon',
  Zeta: 'Z',
  zeta: '\\zeta',
  Eta: 'H',
  eta: '\\eta',
  Theta: '\\Theta',
  theta: '\\theta',
  vartheta: '\\vartheta',
  Iota: 'I',
  iota: '\\iota',
  Kappa: 'K',
  kappa: '\\kappa',
  varkappa: '\\varkappa',
  Lambda: '\\Lambda',
  lambda: '\\lambda',
  Mu: 'M',
  mu: '\\mu',
  Nu: 'N',
  nu: '\\nu',
  Xi: '\\Xi',
  xi: '\\xi',
  Omicron: 'O',
  omicron: 'o',
  Pi: '\\Pi',
  pi: '\\pi',
  varpi: '\\varpi',
  Rho: 'P',
  rho: '\\rho',
  varrho: '\\varrho',
  Sigma: '\\Sigma',
  sigma: '\\sigma',
  varsigma: '\\varsigma',
  Tau: 'T',
  tau: '\\tau',
  Upsilon: "\\Upsilon",
  upsilon: "\\upsilon",
  Phi: '\\Phi',
  phi: '\\phi',
  varphi: '\\varphi',
  Chi: 'X',
  chi: '\\chi',
  Psi: '\\Psi',
  psi: '\\psi',
  Omega: '\\Omega',
  omega: '\\omega',
  // logic
  'true': '\\mathrm{True}',
  'false': '\\mathrm{False}',
  // other
  i: 'i',
  // TODO use \i ??
  inf: '\\infty',
  Inf: '\\infty',
  infinity: '\\infty',
  Infinity: '\\infty',
  oo: '\\infty',
  lim: '\\lim',
  'undefined': '\\mathbf{?}'
};
exports.operators = {
  'transpose': '^\\top',
  'ctranspose': '^H',
  'factorial': '!',
  'pow': '^',
  'dotPow': '.^\\wedge',
  // TODO find ideal solution
  'unaryPlus': '+',
  'unaryMinus': '-',
  'bitNot': '\\~',
  // TODO find ideal solution
  'not': '\\neg',
  'multiply': '\\cdot',
  'divide': '\\frac',
  // TODO how to handle that properly?
  'dotMultiply': '.\\cdot',
  // TODO find ideal solution
  'dotDivide': '.:',
  // TODO find ideal solution
  'mod': '\\mod',
  'add': '+',
  'subtract': '-',
  'to': '\\rightarrow',
  'leftShift': '<<',
  'rightArithShift': '>>',
  'rightLogShift': '>>>',
  'equal': '=',
  'unequal': '\\neq',
  'smaller': '<',
  'larger': '>',
  'smallerEq': '\\leq',
  'largerEq': '\\geq',
  'bitAnd': '\\&',
  'bitXor': "\\underline{|}",
  'bitOr': '|',
  'and': '\\wedge',
  'xor': '\\veebar',
  'or': '\\vee'
};
exports.defaultTemplate = "\\mathrm{${name}}\\left(${args}\\right)";
var units = {
  deg: '^\\circ'
};

exports.escape = function (string) {
  return escapeLatex(string, {
    'preserveFormatting': true
  });
}; // @param {string} name
// @param {boolean} isUnit


exports.toSymbol = function (name, isUnit) {
  isUnit = typeof isUnit === 'undefined' ? false : isUnit;

  if (isUnit) {
    if (units.hasOwnProperty(name)) {
      return units[name];
    }

    return '\\mathrm{' + exports.escape(name) + '}';
  }

  if (exports.symbols.hasOwnProperty(name)) {
    return exports.symbols[name];
  }

  return exports.escape(name);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isBigNumber = __webpack_require__(81);
/**
 * Clone an object
 *
 *     clone(x)
 *
 * Can clone any primitive type, array, and object.
 * If x has a function clone, this function will be invoked to clone the object.
 *
 * @param {*} x
 * @return {*} clone
 */


exports.clone = function clone(x) {
  var type = _typeof(x); // immutable primitive types


  if (type === 'number' || type === 'string' || type === 'boolean' || x === null || x === undefined) {
    return x;
  } // use clone function of the object when available


  if (typeof x.clone === 'function') {
    return x.clone();
  } // array


  if (Array.isArray(x)) {
    return x.map(function (value) {
      return clone(value);
    });
  }

  if (x instanceof Date) return new Date(x.valueOf());
  if (isBigNumber(x)) return x; // bignumbers are immutable

  if (x instanceof RegExp) throw new TypeError('Cannot clone ' + x); // TODO: clone a RegExp
  // object

  return exports.map(x, clone);
};
/**
 * Apply map to all properties of an object
 * @param {Object} object
 * @param {function} callback
 * @return {Object} Returns a copy of the object with mapped properties
 */


exports.map = function (object, callback) {
  var clone = {};

  for (var key in object) {
    if (exports.hasOwnProperty(object, key)) {
      clone[key] = callback(object[key]);
    }
  }

  return clone;
};
/**
 * Extend object a with the properties of object b
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 */


exports.extend = function (a, b) {
  for (var prop in b) {
    if (exports.hasOwnProperty(b, prop)) {
      a[prop] = b[prop];
    }
  }

  return a;
};
/**
 * Deep extend an object a with the properties of object b
 * @param {Object} a
 * @param {Object} b
 * @returns {Object}
 */


exports.deepExtend = function deepExtend(a, b) {
  // TODO: add support for Arrays to deepExtend
  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  for (var prop in b) {
    if (exports.hasOwnProperty(b, prop)) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }

        if (a[prop].constructor === Object) {
          deepExtend(a[prop], b[prop]);
        } else {
          a[prop] = b[prop];
        }
      } else if (Array.isArray(b[prop])) {
        throw new TypeError('Arrays are not supported by deepExtend');
      } else {
        a[prop] = b[prop];
      }
    }
  }

  return a;
};
/**
 * Deep test equality of all fields in two pairs of arrays or objects.
 * @param {Array | Object} a
 * @param {Array | Object} b
 * @returns {boolean}
 */


exports.deepEqual = function deepEqual(a, b) {
  var prop, i, len;

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (i = 0, len = a.length; i < len; i++) {
      if (!exports.deepEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  } else if (a instanceof Object) {
    if (Array.isArray(b) || !(b instanceof Object)) {
      return false;
    }

    for (prop in a) {
      // noinspection JSUnfilteredForInLoop
      if (!exports.deepEqual(a[prop], b[prop])) {
        return false;
      }
    }

    for (prop in b) {
      // noinspection JSUnfilteredForInLoop
      if (!exports.deepEqual(a[prop], b[prop])) {
        return false;
      }
    }

    return true;
  } else {
    return a === b;
  }
};
/**
 * Test whether the current JavaScript engine supports Object.defineProperty
 * @returns {boolean} returns true if supported
 */


exports.canDefineProperty = function () {
  // test needed for broken IE8 implementation
  try {
    if (Object.defineProperty) {
      Object.defineProperty({}, 'x', {
        get: function get() {}
      });
      return true;
    }
  } catch (e) {}

  return false;
};
/**
 * Attach a lazy loading property to a constant.
 * The given function `fn` is called once when the property is first requested.
 * On older browsers (<IE8), the function will fall back to direct evaluation
 * of the properties value.
 * @param {Object} object   Object where to add the property
 * @param {string} prop     Property name
 * @param {Function} fn     Function returning the property value. Called
 *                          without arguments.
 */


exports.lazy = function (object, prop, fn) {
  if (exports.canDefineProperty()) {
    var _uninitialized = true;

    var _value;

    Object.defineProperty(object, prop, {
      get: function get() {
        if (_uninitialized) {
          _value = fn();
          _uninitialized = false;
        }

        return _value;
      },
      set: function set(value) {
        _value = value;
        _uninitialized = false;
      },
      configurable: true,
      enumerable: true
    });
  } else {
    // fall back to immediate evaluation
    object[prop] = fn();
  }
};
/**
 * Traverse a path into an object.
 * When a namespace is missing, it will be created
 * @param {Object} object
 * @param {string} path   A dot separated string like 'name.space'
 * @return {Object} Returns the object at the end of the path
 */


exports.traverse = function (object, path) {
  var obj = object;

  if (path) {
    var names = path.split('.');

    for (var i = 0; i < names.length; i++) {
      var name = names[i];

      if (!(name in obj)) {
        obj[name] = {};
      }

      obj = obj[name];
    }
  }

  return obj;
};
/**
 * A safe hasOwnProperty
 * @param {Object} object
 * @param {string} property
 */


exports.hasOwnProperty = function (object, property) {
  return object && Object.hasOwnProperty.call(object, property);
};
/**
 * Test whether an object is a factory. a factory has fields:
 *
 * - factory: function (type: Object, config: Object, load: function, typed: function [, math: Object])   (required)
 * - name: string (optional)
 * - path: string    A dot separated path (optional)
 * - math: boolean   If true (false by default), the math namespace is passed
 *                   as fifth argument of the factory function
 *
 * @param {*} object
 * @returns {boolean}
 */


exports.isFactory = function (object) {
  return object && typeof object.factory === 'function';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(5).clone;

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Iterates over DenseMatrix items and invokes the callback function f(Aij..z, b).
   * Callback function invoked MxN times.
   *
   * C(i,j,...z) = f(Aij..z, b)
   *
   * @param {Matrix}   a                 The DenseMatrix instance (A)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij..z,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Aij..z)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97659042
   */

  var algorithm14 = function algorithm14(a, b, callback, inverse) {
    // a arrays
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype; // datatype

    var dt; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string') {
      // datatype
      dt = adt; // convert b to the same datatype

      b = typed.convert(b, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // populate cdata, iterate through dimensions


    var cdata = asize.length > 0 ? _iterate(cf, 0, asize, asize[0], adata, b, inverse) : []; // c matrix

    return new DenseMatrix({
      data: cdata,
      size: clone(asize),
      datatype: dt
    });
  }; // recursive function


  function _iterate(f, level, s, n, av, bv, inverse) {
    // initialize array for this level
    var cv = []; // check we reach the last level

    if (level === s.length - 1) {
      // loop arrays in last level
      for (var i = 0; i < n; i++) {
        // invoke callback and store value
        cv[i] = inverse ? f(bv, av[i]) : f(av[i], bv);
      }
    } else {
      // iterate current level
      for (var j = 0; j < n; j++) {
        // iterate next level
        cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv, inverse);
      }
    }

    return cv;
  }

  return algorithm14;
}

exports.name = 'algorithm14';
exports.factory = factory;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Iterates over DenseMatrix items and invokes the callback function f(Aij..z, Bij..z).
   * Callback function invoked MxN times.
   *
   * C(i,j,...z) = f(Aij..z, Bij..z)
   *
   * @param {Matrix}   a                 The DenseMatrix instance (A)
   * @param {Matrix}   b                 The DenseMatrix instance (B)
   * @param {Function} callback          The f(Aij..z,Bij..z) operation to invoke
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97658658
   */

  var algorithm13 = function algorithm13(a, b, callback) {
    // a arrays
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype; // b arrays

    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype; // c arrays

    var csize = []; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // validate each one of the dimension sizes


    for (var s = 0; s < asize.length; s++) {
      // must match
      if (asize[s] !== bsize[s]) {
        throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
      } // update dimension in c


      csize[s] = asize[s];
    } // datatype


    var dt; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // callback

      cf = typed.find(callback, [dt, dt]);
    } // populate cdata, iterate through dimensions


    var cdata = csize.length > 0 ? _iterate(cf, 0, csize, csize[0], adata, bdata) : []; // c matrix

    return new DenseMatrix({
      data: cdata,
      size: csize,
      datatype: dt
    });
  }; // recursive function


  function _iterate(f, level, s, n, av, bv) {
    // initialize array for this level
    var cv = []; // check we reach the last level

    if (level === s.length - 1) {
      // loop arrays in last level
      for (var i = 0; i < n; i++) {
        // invoke callback and store value
        cv[i] = f(av[i], bv[i]);
      }
    } else {
      // iterate current level
      for (var j = 0; j < n; j++) {
        // iterate next level
        cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv[j]);
      }
    }

    return cv;
  }

  return algorithm13;
}

exports.name = 'algorithm13';
exports.factory = factory;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Create a range error with the message:
 *     'Dimension mismatch (<actual size> != <expected size>)'
 * @param {number | number[]} actual        The actual size
 * @param {number | number[]} expected      The expected size
 * @param {string} [relation='!=']          Optional relation between actual
 *                                          and expected size: '!=', '<', etc.
 * @extends RangeError
 */

function DimensionError(actual, expected, relation) {
  if (!(this instanceof DimensionError)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  this.actual = actual;
  this.expected = expected;
  this.relation = relation;
  this.message = 'Dimension mismatch (' + (Array.isArray(actual) ? '[' + actual.join(', ') + ']' : actual) + ' ' + (this.relation || '!=') + ' ' + (Array.isArray(expected) ? '[' + expected.join(', ') + ']' : expected) + ')';
  this.stack = new Error().stack;
}

DimensionError.prototype = new RangeError();
DimensionError.prototype.constructor = RangeError;
DimensionError.prototype.name = 'DimensionError';
DimensionError.prototype.isDimensionError = true;
module.exports = DimensionError;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var formatNumber = __webpack_require__(3).format;

var formatBigNumber = __webpack_require__(175).format;

var isBigNumber = __webpack_require__(81);
/**
 * Test whether value is a string
 * @param {*} value
 * @return {boolean} isString
 */


exports.isString = function (value) {
  return typeof value === 'string';
};
/**
 * Check if a text ends with a certain string.
 * @param {string} text
 * @param {string} search
 */


exports.endsWith = function (text, search) {
  var start = text.length - search.length;
  var end = text.length;
  return text.substring(start, end) === search;
};
/**
 * Format a value of any type into a string.
 *
 * Usage:
 *     math.format(value)
 *     math.format(value, precision)
 *
 * When value is a function:
 *
 * - When the function has a property `syntax`, it returns this
 *   syntax description.
 * - In other cases, a string `'function'` is returned.
 *
 * When `value` is an Object:
 *
 * - When the object contains a property `format` being a function, this
 *   function is invoked as `value.format(options)` and the result is returned.
 * - When the object has its own `toString` method, this method is invoked
 *   and the result is returned.
 * - In other cases the function will loop over all object properties and
 *   return JSON object notation like '{"a": 2, "b": 3}'.
 *
 * Example usage:
 *     math.format(2/7)                // '0.2857142857142857'
 *     math.format(math.pi, 3)         // '3.14'
 *     math.format(new Complex(2, 3))  // '2 + 3i'
 *     math.format('hello')            // '"hello"'
 *
 * @param {*} value             Value to be stringified
 * @param {Object | number | Function} [options]  Formatting options. See
 *                                                lib/utils/number:format for a
 *                                                description of the available
 *                                                options.
 * @return {string} str
 */


exports.format = function (value, options) {
  if (typeof value === 'number') {
    return formatNumber(value, options);
  }

  if (isBigNumber(value)) {
    return formatBigNumber(value, options);
  } // note: we use unsafe duck-typing here to check for Fractions, this is
  // ok here since we're only invoking toString or concatenating its values


  if (looksLikeFraction(value)) {
    if (!options || options.fraction !== 'decimal') {
      // output as ratio, like '1/3'
      return value.s * value.n + '/' + value.d;
    } else {
      // output as decimal, like '0.(3)'
      return value.toString();
    }
  }

  if (Array.isArray(value)) {
    return formatArray(value, options);
  }

  if (exports.isString(value)) {
    return '"' + value + '"';
  }

  if (typeof value === 'function') {
    return value.syntax ? String(value.syntax) : 'function';
  }

  if (value && _typeof(value) === 'object') {
    if (typeof value.format === 'function') {
      return value.format(options);
    } else if (value && value.toString() !== {}.toString()) {
      // this object has a non-native toString method, use that one
      return value.toString();
    } else {
      var entries = [];

      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          entries.push('"' + key + '": ' + exports.format(value[key], options));
        }
      }

      return '{' + entries.join(', ') + '}';
    }
  }

  return String(value);
};
/**
 * Stringify a value into a string enclosed in double quotes.
 * Unescaped double quotes and backslashes inside the value are escaped.
 * @param {*} value
 * @return {string}
 */


exports.stringify = function (value) {
  var text = String(value);
  var escaped = '';
  var i = 0;

  while (i < text.length) {
    var c = text.charAt(i);

    if (c === '\\') {
      escaped += c;
      i++;
      c = text.charAt(i);

      if (c === '' || '"\\/bfnrtu'.indexOf(c) === -1) {
        escaped += '\\'; // no valid escape character -> escape it
      }

      escaped += c;
    } else if (c === '"') {
      escaped += '\\"';
    } else {
      escaped += c;
    }

    i++;
  }

  return '"' + escaped + '"';
};
/**
 * Escape special HTML characters
 * @param {*} value
 * @return {string}
 */


exports.escape = function (value) {
  var text = String(value);
  text = text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return text;
};
/**
 * Recursively format an n-dimensional matrix
 * Example output: "[[1, 2], [3, 4]]"
 * @param {Array} array
 * @param {Object | number | Function} [options]  Formatting options. See
 *                                                lib/utils/number:format for a
 *                                                description of the available
 *                                                options.
 * @returns {string} str
 */


function formatArray(array, options) {
  if (Array.isArray(array)) {
    var str = '[';
    var len = array.length;

    for (var i = 0; i < len; i++) {
      if (i !== 0) {
        str += ', ';
      }

      str += formatArray(array[i], options);
    }

    str += ']';
    return str;
  } else {
    return exports.format(array, options);
  }
}
/**
 * Check whether a value looks like a Fraction (unsafe duck-type check)
 * @param {*} value
 * @return {boolean}
 */


function looksLikeFraction(value) {
  return value && _typeof(value) === 'object' && typeof value.s === 'number' && typeof value.n === 'number' && typeof value.d === 'number' || false;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(5).extend;

var array = __webpack_require__(2);

function factory(type, config, load, typed) {
  var latex = __webpack_require__(4);

  var matrix = load(__webpack_require__(0));
  var addScalar = load(__webpack_require__(17));
  var multiplyScalar = load(__webpack_require__(21));
  var equalScalar = load(__webpack_require__(11));
  var algorithm11 = load(__webpack_require__(20));
  var algorithm14 = load(__webpack_require__(6));
  var DenseMatrix = type.DenseMatrix;
  var SparseMatrix = type.SparseMatrix;
  /**
   * Multiply two or more values, `x * y`.
   * For matrices, the matrix product is calculated.
   *
   * Syntax:
   *
   *    math.multiply(x, y)
   *    math.multiply(x, y, z, ...)
   *
   * Examples:
   *
   *    math.multiply(4, 5.2)        // returns number 20.8
   *    math.multiply(2, 3, 4)       // returns number 24
   *
   *    const a = math.complex(2, 3)
   *    const b = math.complex(4, 1)
   *    math.multiply(a, b)          // returns Complex 5 + 14i
   *
   *    const c = [[1, 2], [4, 3]]
   *    const d = [[1, 2, 3], [3, -4, 7]]
   *    math.multiply(c, d)          // returns Array [[7, -6, 17], [13, -4, 33]]
   *
   *    const e = math.unit('2.1 km')
   *    math.multiply(3, e)          // returns Unit 6.3 km
   *
   * See also:
   *
   *    divide, prod, cross, dot
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x First value to multiply
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Second value to multiply
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} Multiplication of `x` and `y`
   */

  var multiply = typed('multiply', extend({
    // we extend the signatures of multiplyScalar with signatures dealing with matrices
    'Array, Array': function ArrayArray(x, y) {
      // check dimensions
      _validateMatrixDimensions(array.size(x), array.size(y)); // use dense matrix implementation


      var m = multiply(matrix(x), matrix(y)); // return array or scalar

      return type.isMatrix(m) ? m.valueOf() : m;
    },
    'Matrix, Matrix': function MatrixMatrix(x, y) {
      // dimensions
      var xsize = x.size();
      var ysize = y.size(); // check dimensions

      _validateMatrixDimensions(xsize, ysize); // process dimensions


      if (xsize.length === 1) {
        // process y dimensions
        if (ysize.length === 1) {
          // Vector * Vector
          return _multiplyVectorVector(x, y, xsize[0]);
        } // Vector * Matrix


        return _multiplyVectorMatrix(x, y);
      } // process y dimensions


      if (ysize.length === 1) {
        // Matrix * Vector
        return _multiplyMatrixVector(x, y);
      } // Matrix * Matrix


      return _multiplyMatrixMatrix(x, y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use Matrix * Matrix implementation
      return multiply(x, matrix(y));
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use Matrix * Matrix implementation
      return multiply(matrix(x, y.storage()), y);
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm11(x, y, multiplyScalar, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, multiplyScalar, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm11(y, x, multiplyScalar, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, multiplyScalar, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, multiplyScalar, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, multiplyScalar, true).valueOf();
    },
    'any, any': multiplyScalar,
    'any, any, ...any': function anyAnyAny(x, y, rest) {
      var result = multiply(x, y);

      for (var i = 0; i < rest.length; i++) {
        result = multiply(result, rest[i]);
      }

      return result;
    }
  }, multiplyScalar.signatures));

  function _validateMatrixDimensions(size1, size2) {
    // check left operand dimensions
    switch (size1.length) {
      case 1:
        // check size2
        switch (size2.length) {
          case 1:
            // Vector x Vector
            if (size1[0] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Vectors must have the same length');
            }

            break;

          case 2:
            // Vector x Matrix
            if (size1[0] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Vector length (' + size1[0] + ') must match Matrix rows (' + size2[0] + ')');
            }

            break;

          default:
            throw new Error('Can only multiply a 1 or 2 dimensional matrix (Matrix B has ' + size2.length + ' dimensions)');
        }

        break;

      case 2:
        // check size2
        switch (size2.length) {
          case 1:
            // Matrix x Vector
            if (size1[1] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Matrix columns (' + size1[1] + ') must match Vector length (' + size2[0] + ')');
            }

            break;

          case 2:
            // Matrix x Matrix
            if (size1[1] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Matrix A columns (' + size1[1] + ') must match Matrix B rows (' + size2[0] + ')');
            }

            break;

          default:
            throw new Error('Can only multiply a 1 or 2 dimensional matrix (Matrix B has ' + size2.length + ' dimensions)');
        }

        break;

      default:
        throw new Error('Can only multiply a 1 or 2 dimensional matrix (Matrix A has ' + size1.length + ' dimensions)');
    }
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            Dense Vector   (N)
   * @param {Matrix} b            Dense Vector   (N)
   *
   * @return {number}             Scalar value
   */


  function _multiplyVectorVector(a, b, n) {
    // check empty vector
    if (n === 0) {
      throw new Error('Cannot multiply two empty vectors');
    } // a dense


    var adata = a._data;
    var adt = a._datatype; // b dense

    var bdata = b._data;
    var bdt = b._datatype; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    } // result (do not initialize it with zero)


    var c = mf(adata[0], bdata[0]); // loop data

    for (var i = 1; i < n; i++) {
      // multiply and accumulate
      c = af(c, mf(adata[i], bdata[i]));
    }

    return c;
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            Dense Vector   (M)
   * @param {Matrix} b            Matrix         (MxN)
   *
   * @return {Matrix}             Dense Vector   (N)
   */


  function _multiplyVectorMatrix(a, b) {
    // process storage
    if (b.storage() !== 'dense') {
      throw new Error('Support for SparseMatrix not implemented');
    }

    return _multiplyVectorDenseMatrix(a, b);
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            Dense Vector   (M)
   * @param {Matrix} b            Dense Matrix   (MxN)
   *
   * @return {Matrix}             Dense Vector   (N)
   */


  function _multiplyVectorDenseMatrix(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype; // b dense

    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype; // rows & columns

    var alength = asize[0];
    var bcolumns = bsize[1]; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    } // result


    var c = []; // loop matrix columns

    for (var j = 0; j < bcolumns; j++) {
      // sum (do not initialize it with zero)
      var sum = mf(adata[0], bdata[0][j]); // loop vector

      for (var i = 1; i < alength; i++) {
        // multiply & accumulate
        sum = af(sum, mf(adata[i], bdata[i][j]));
      }

      c[j] = sum;
    } // return matrix


    return new DenseMatrix({
      data: c,
      size: [bcolumns],
      datatype: dt
    });
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            Matrix         (MxN)
   * @param {Matrix} b            Dense Vector   (N)
   *
   * @return {Matrix}             Dense Vector   (M)
   */


  var _multiplyMatrixVector = typed('_multiplyMatrixVector', {
    'DenseMatrix, any': _multiplyDenseMatrixVector,
    'SparseMatrix, any': _multiplySparseMatrixVector
  });
  /**
   * C = A * B
   *
   * @param {Matrix} a            Matrix         (MxN)
   * @param {Matrix} b            Matrix         (NxC)
   *
   * @return {Matrix}             Matrix         (MxC)
   */


  var _multiplyMatrixMatrix = typed('_multiplyMatrixMatrix', {
    'DenseMatrix, DenseMatrix': _multiplyDenseMatrixDenseMatrix,
    'DenseMatrix, SparseMatrix': _multiplyDenseMatrixSparseMatrix,
    'SparseMatrix, DenseMatrix': _multiplySparseMatrixDenseMatrix,
    'SparseMatrix, SparseMatrix': _multiplySparseMatrixSparseMatrix
  });
  /**
   * C = A * B
   *
   * @param {Matrix} a            DenseMatrix  (MxN)
   * @param {Matrix} b            Dense Vector (N)
   *
   * @return {Matrix}             Dense Vector (M)
   */


  function _multiplyDenseMatrixVector(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype; // b dense

    var bdata = b._data;
    var bdt = b._datatype; // rows & columns

    var arows = asize[0];
    var acolumns = asize[1]; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    } // result


    var c = []; // loop matrix a rows

    for (var i = 0; i < arows; i++) {
      // current row
      var row = adata[i]; // sum (do not initialize it with zero)

      var sum = mf(row[0], bdata[0]); // loop matrix a columns

      for (var j = 1; j < acolumns; j++) {
        // multiply & accumulate
        sum = af(sum, mf(row[j], bdata[j]));
      }

      c[i] = sum;
    } // return matrix


    return new DenseMatrix({
      data: c,
      size: [arows],
      datatype: dt
    });
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            DenseMatrix    (MxN)
   * @param {Matrix} b            DenseMatrix    (NxC)
   *
   * @return {Matrix}             DenseMatrix    (MxC)
   */


  function _multiplyDenseMatrixDenseMatrix(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype; // b dense

    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype; // rows & columns

    var arows = asize[0];
    var acolumns = asize[1];
    var bcolumns = bsize[1]; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    } // result


    var c = []; // loop matrix a rows

    for (var i = 0; i < arows; i++) {
      // current row
      var row = adata[i]; // initialize row array

      c[i] = []; // loop matrix b columns

      for (var j = 0; j < bcolumns; j++) {
        // sum (avoid initializing sum to zero)
        var sum = mf(row[0], bdata[0][j]); // loop matrix a columns

        for (var x = 1; x < acolumns; x++) {
          // multiply & accumulate
          sum = af(sum, mf(row[x], bdata[x][j]));
        }

        c[i][j] = sum;
      }
    } // return matrix


    return new DenseMatrix({
      data: c,
      size: [arows, bcolumns],
      datatype: dt
    });
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            DenseMatrix    (MxN)
   * @param {Matrix} b            SparseMatrix   (NxC)
   *
   * @return {Matrix}             SparseMatrix   (MxC)
   */


  function _multiplyDenseMatrixSparseMatrix(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype; // b sparse

    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype; // validate b matrix

    if (!bvalues) {
      throw new Error('Cannot multiply Dense Matrix times Pattern only Matrix');
    } // rows & columns


    var arows = asize[0];
    var bcolumns = bsize[1]; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // equalScalar signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt);
    } // result


    var cvalues = [];
    var cindex = [];
    var cptr = []; // c matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    }); // loop b columns

    for (var jb = 0; jb < bcolumns; jb++) {
      // update ptr
      cptr[jb] = cindex.length; // indeces in column jb

      var kb0 = bptr[jb];
      var kb1 = bptr[jb + 1]; // do not process column jb if no data exists

      if (kb1 > kb0) {
        // last row mark processed
        var last = 0; // loop a rows

        for (var i = 0; i < arows; i++) {
          // column mark
          var mark = i + 1; // C[i, jb]

          var cij = void 0; // values in b column j

          for (var kb = kb0; kb < kb1; kb++) {
            // row
            var ib = bindex[kb]; // check value has been initialized

            if (last !== mark) {
              // first value in column jb
              cij = mf(adata[i][ib], bvalues[kb]); // update mark

              last = mark;
            } else {
              // accumulate value
              cij = af(cij, mf(adata[i][ib], bvalues[kb]));
            }
          } // check column has been processed and value != 0


          if (last === mark && !eq(cij, zero)) {
            // push row & value
            cindex.push(i);
            cvalues.push(cij);
          }
        }
      }
    } // update ptr


    cptr[bcolumns] = cindex.length; // return sparse matrix

    return c;
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            SparseMatrix    (MxN)
   * @param {Matrix} b            Dense Vector (N)
   *
   * @return {Matrix}             SparseMatrix    (M, 1)
   */


  function _multiplySparseMatrixVector(a, b) {
    // a sparse
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype; // validate a matrix

    if (!avalues) {
      throw new Error('Cannot multiply Pattern only Matrix times Dense Matrix');
    } // b dense


    var bdata = b._data;
    var bdt = b._datatype; // rows & columns

    var arows = a._size[0];
    var brows = b._size[0]; // result

    var cvalues = [];
    var cindex = [];
    var cptr = []; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // equalScalar signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt);
    } // workspace


    var x = []; // vector with marks indicating a value x[i] exists in a given column

    var w = []; // update ptr

    cptr[0] = 0; // rows in b

    for (var ib = 0; ib < brows; ib++) {
      // b[ib]
      var vbi = bdata[ib]; // check b[ib] != 0, avoid loops

      if (!eq(vbi, zero)) {
        // A values & index in ib column
        for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
          // a row
          var ia = aindex[ka]; // check value exists in current j

          if (!w[ia]) {
            // ia is new entry in j
            w[ia] = true; // add i to pattern of C

            cindex.push(ia); // x(ia) = A

            x[ia] = mf(vbi, avalues[ka]);
          } else {
            // i exists in C already
            x[ia] = af(x[ia], mf(vbi, avalues[ka]));
          }
        }
      }
    } // copy values from x to column jb of c


    for (var p1 = cindex.length, p = 0; p < p1; p++) {
      // row
      var ic = cindex[p]; // copy value

      cvalues[p] = x[ic];
    } // update ptr


    cptr[1] = cindex.length; // return sparse matrix

    return new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, 1],
      datatype: dt
    });
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            SparseMatrix      (MxN)
   * @param {Matrix} b            DenseMatrix       (NxC)
   *
   * @return {Matrix}             SparseMatrix      (MxC)
   */


  function _multiplySparseMatrixDenseMatrix(a, b) {
    // a sparse
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype; // validate a matrix

    if (!avalues) {
      throw new Error('Cannot multiply Pattern only Matrix times Dense Matrix');
    } // b dense


    var bdata = b._data;
    var bdt = b._datatype; // rows & columns

    var arows = a._size[0];
    var brows = b._size[0];
    var bcolumns = b._size[1]; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // equalScalar signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt);
    } // result


    var cvalues = [];
    var cindex = [];
    var cptr = []; // c matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    }); // workspace

    var x = []; // vector with marks indicating a value x[i] exists in a given column

    var w = []; // loop b columns

    for (var jb = 0; jb < bcolumns; jb++) {
      // update ptr
      cptr[jb] = cindex.length; // mark in workspace for current column

      var mark = jb + 1; // rows in jb

      for (var ib = 0; ib < brows; ib++) {
        // b[ib, jb]
        var vbij = bdata[ib][jb]; // check b[ib, jb] != 0, avoid loops

        if (!eq(vbij, zero)) {
          // A values & index in ib column
          for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            // a row
            var ia = aindex[ka]; // check value exists in current j

            if (w[ia] !== mark) {
              // ia is new entry in j
              w[ia] = mark; // add i to pattern of C

              cindex.push(ia); // x(ia) = A

              x[ia] = mf(vbij, avalues[ka]);
            } else {
              // i exists in C already
              x[ia] = af(x[ia], mf(vbij, avalues[ka]));
            }
          }
        }
      } // copy values from x to column jb of c


      for (var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++) {
        // row
        var ic = cindex[p]; // copy value

        cvalues[p] = x[ic];
      }
    } // update ptr


    cptr[bcolumns] = cindex.length; // return sparse matrix

    return c;
  }
  /**
   * C = A * B
   *
   * @param {Matrix} a            SparseMatrix      (MxN)
   * @param {Matrix} b            SparseMatrix      (NxC)
   *
   * @return {Matrix}             SparseMatrix      (MxC)
   */


  function _multiplySparseMatrixSparseMatrix(a, b) {
    // a sparse
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype; // b sparse

    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bdt = b._datatype; // rows & columns

    var arows = a._size[0];
    var bcolumns = b._size[1]; // flag indicating both matrices (a & b) contain data

    var values = avalues && bvalues; // datatype

    var dt; // addScalar signature to use

    var af = addScalar; // multiplyScalar signature to use

    var mf = multiplyScalar; // process data types

    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt; // find signatures that matches (dt, dt)

      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    } // result


    var cvalues = values ? [] : undefined;
    var cindex = [];
    var cptr = []; // c matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    }); // workspace

    var x = values ? [] : undefined; // vector with marks indicating a value x[i] exists in a given column

    var w = []; // variables

    var ka, ka0, ka1, kb, kb0, kb1, ia, ib; // loop b columns

    for (var jb = 0; jb < bcolumns; jb++) {
      // update ptr
      cptr[jb] = cindex.length; // mark in workspace for current column

      var mark = jb + 1; // B values & index in j

      for (kb0 = bptr[jb], kb1 = bptr[jb + 1], kb = kb0; kb < kb1; kb++) {
        // b row
        ib = bindex[kb]; // check we need to process values

        if (values) {
          // loop values in a[:,ib]
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            // row
            ia = aindex[ka]; // check value exists in current j

            if (w[ia] !== mark) {
              // ia is new entry in j
              w[ia] = mark; // add i to pattern of C

              cindex.push(ia); // x(ia) = A

              x[ia] = mf(bvalues[kb], avalues[ka]);
            } else {
              // i exists in C already
              x[ia] = af(x[ia], mf(bvalues[kb], avalues[ka]));
            }
          }
        } else {
          // loop values in a[:,ib]
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            // row
            ia = aindex[ka]; // check value exists in current j

            if (w[ia] !== mark) {
              // ia is new entry in j
              w[ia] = mark; // add i to pattern of C

              cindex.push(ia);
            }
          }
        }
      } // check we need to process matrix values (pattern matrix)


      if (values) {
        // copy values from x to column jb of c
        for (var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++) {
          // row
          var ic = cindex[p]; // copy value

          cvalues[p] = x[ic];
        }
      }
    } // update ptr


    cptr[bcolumns] = cindex.length; // return sparse matrix

    return c;
  }

  multiply.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['multiply'], "${args[1]}\\right)")
  };
  return multiply;
}

exports.name = 'multiply';
exports.factory = factory;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  /**
   * Test whether two values are equal.
   *
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit} x   First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Complex} y          Second value to compare
   * @return {boolean}                                                  Returns true when the compared values are equal, else returns false
   * @private
   */
  var equalScalar = typed('equalScalar', {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x === y;
    },
    'number, number': function numberNumber(x, y) {
      return x === y || nearlyEqual(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.eq(y) || bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.equals(y);
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.equals(y);
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }

      return equalScalar(x.value, y.value);
    }
  });
  return equalScalar;
}

exports.factory = factory;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var numeric = load(__webpack_require__(65));
  var getTypeOf = load(__webpack_require__(26));
  /**
   * Divide two scalar values, `x / y`.
   * This function is meant for internal use: it is used by the public functions
   * `divide` and `inv`.
   *
   * This function does not support collections (Array or Matrix), and does
   * not validate the number of of inputs.
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   Numerator
   * @param  {number | BigNumber | Fraction | Complex} y          Denominator
   * @return {number | BigNumber | Fraction | Complex | Unit}                      Quotient, `x / y`
   * @private
   */

  var divideScalar = typed('divide', {
    'number, number': function numberNumber(x, y) {
      return x / y;
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.div(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.div(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.div(y);
    },
    'Unit, number | Fraction | BigNumber': function UnitNumberFractionBigNumber(x, y) {
      var res = x.clone(); // TODO: move the divide function to Unit.js, it uses internals of Unit

      var one = numeric(1, getTypeOf(y));
      res.value = divideScalar(res.value === null ? res._normalize(one) : res.value, y);
      return res;
    },
    'number | Fraction | BigNumber, Unit': function numberFractionBigNumberUnit(x, y) {
      var res = y.clone();
      res = res.pow(-1); // TODO: move the divide function to Unit.js, it uses internals of Unit

      var one = numeric(1, getTypeOf(x));
      res.value = divideScalar(x, y.value === null ? y._normalize(one) : y.value);
      return res;
    },
    'Unit, Unit': function UnitUnit(x, y) {
      return x.divide(y);
    }
  });
  return divideScalar;
}

exports.factory = factory;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasOwnProperty = __webpack_require__(5).hasOwnProperty;
/**
 * Get a property of a plain object
 * Throws an error in case the object is not a plain object or the
 * property is not defined on the object itself
 * @param {Object} object
 * @param {string} prop
 * @return {*} Returns the property value when safe
 */


function getSafeProperty(object, prop) {
  // only allow getting safe properties of a plain object
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    return object[prop];
  }

  if (typeof object[prop] === 'function' && isSafeMethod(object, prop)) {
    throw new Error('Cannot access method "' + prop + '" as a property');
  }

  throw new Error('No access to property "' + prop + '"');
}
/**
 * Set a property on a plain object.
 * Throws an error in case the object is not a plain object or the
 * property would override an inherited property like .constructor or .toString
 * @param {Object} object
 * @param {string} prop
 * @param {*} value
 * @return {*} Returns the value
 */
// TODO: merge this function into access.js?


function setSafeProperty(object, prop, value) {
  // only allow setting safe properties of a plain object
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    object[prop] = value;
    return value;
  }

  throw new Error('No access to property "' + prop + '"');
}
/**
 * Test whether a property is safe to use for an object.
 * For example .toString and .constructor are not safe
 * @param {string} prop
 * @return {boolean} Returns true when safe
 */


function isSafeProperty(object, prop) {
  if (!object || _typeof(object) !== 'object') {
    return false;
  } // SAFE: whitelisted
  // e.g length


  if (hasOwnProperty(safeNativeProperties, prop)) {
    return true;
  } // UNSAFE: inherited from Object prototype
  // e.g constructor


  if (prop in Object.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Object.prototype is a root object
    return false;
  } // UNSAFE: inherited from Function prototype
  // e.g call, apply


  if (prop in Function.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Function.prototype is a root object
    return false;
  }

  return true;
}
/**
 * Validate whether a method is safe.
 * Throws an error when that's not the case.
 * @param {Object} object
 * @param {string} method
 */
// TODO: merge this function into assign.js?


function validateSafeMethod(object, method) {
  if (!isSafeMethod(object, method)) {
    throw new Error('No access to method "' + method + '"');
  }
}
/**
 * Check whether a method is safe.
 * Throws an error when that's not the case (for example for `constructor`).
 * @param {Object} object
 * @param {string} method
 * @return {boolean} Returns true when safe, false otherwise
 */


function isSafeMethod(object, method) {
  if (!object || typeof object[method] !== 'function') {
    return false;
  } // UNSAFE: ghosted
  // e.g overridden toString
  // Note that IE10 doesn't support __proto__ and we can't do this check there.


  if (hasOwnProperty(object, method) && Object.getPrototypeOf && method in Object.getPrototypeOf(object)) {
    return false;
  } // SAFE: whitelisted
  // e.g toString


  if (hasOwnProperty(safeNativeMethods, method)) {
    return true;
  } // UNSAFE: inherited from Object prototype
  // e.g constructor


  if (method in Object.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Object.prototype is a root object
    return false;
  } // UNSAFE: inherited from Function prototype
  // e.g call, apply


  if (method in Function.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Function.prototype is a root object
    return false;
  }

  return true;
}

function isPlainObject(object) {
  return _typeof(object) === 'object' && object && object.constructor === Object;
}

var safeNativeProperties = {
  length: true,
  name: true
};
var safeNativeMethods = {
  toString: true,
  valueOf: true,
  toLocaleString: true
};
exports.getSafeProperty = getSafeProperty;
exports.setSafeProperty = setSafeProperty;
exports.isSafeProperty = isSafeProperty;
exports.validateSafeMethod = validateSafeMethod;
exports.isSafeMethod = isSafeMethod;
exports.isPlainObject = isPlainObject;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(5).extend;

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var addScalar = load(__webpack_require__(17));

  var latex = __webpack_require__(4);

  var algorithm01 = load(__webpack_require__(37));
  var algorithm04 = load(__webpack_require__(85));
  var algorithm10 = load(__webpack_require__(41));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));
  /**
   * Add two or more values, `x + y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.add(x, y)
   *    math.add(x, y, z, ...)
   *
   * Examples:
   *
   *    math.add(2, 3)               // returns number 5
   *    math.add(2, 3, 4)            // returns number 9
   *
   *    const a = math.complex(2, 3)
   *    const b = math.complex(-4, 1)
   *    math.add(a, b)               // returns Complex -2 + 4i
   *
   *    math.add([1, 2, 3], 4)       // returns Array [5, 6, 7]
   *
   *    const c = math.unit('5 cm')
   *    const d = math.unit('2.1 mm')
   *    math.add(c, d)               // returns Unit 52.1 mm
   *
   *    math.add("2.3", "4")         // returns number 6.3
   *
   * See also:
   *
   *    subtract, sum
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x First value to add
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Second value to add
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} Sum of `x` and `y`
   */

  var add = typed('add', extend({
    // we extend the signatures of addScalar with signatures dealing with matrices
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, addScalar);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm01(x, y, addScalar, false);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm01(y, x, addScalar, true);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm04(x, y, addScalar);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return add(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return add(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return add(x, matrix(y));
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, addScalar, false);
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm10(x, y, addScalar, false);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, addScalar, true);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm10(y, x, addScalar, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, addScalar, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, addScalar, true).valueOf();
    },
    'any, any': addScalar,
    'any, any, ...any': function anyAnyAny(x, y, rest) {
      var result = add(x, y);

      for (var i = 0; i < rest.length; i++) {
        result = add(result, rest[i]);
      }

      return result;
    }
  }, addScalar.signatures));
  add.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['add'], "${args[1]}\\right)")
  };
  return add;
}

exports.name = 'add';
exports.factory = factory;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var latex = __webpack_require__(4);

  var matrix = load(__webpack_require__(0));
  var addScalar = load(__webpack_require__(17));
  var unaryMinus = load(__webpack_require__(39));
  var algorithm01 = load(__webpack_require__(37));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm05 = load(__webpack_require__(66));
  var algorithm10 = load(__webpack_require__(41));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6)); // TODO: split function subtract in two: subtract and subtractScalar

  /**
   * Subtract two values, `x - y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.subtract(x, y)
   *
   * Examples:
   *
   *    math.subtract(5.3, 2)        // returns number 3.3
   *
   *    const a = math.complex(2, 3)
   *    const b = math.complex(4, 1)
   *    math.subtract(a, b)          // returns Complex -2 + 2i
   *
   *    math.subtract([5, 7, 4], 4)  // returns Array [1, 3, 0]
   *
   *    const c = math.unit('2.1 km')
   *    const d = math.unit('500m')
   *    math.subtract(c, d)          // returns Unit 1.6 km
   *
   * See also:
   *
   *    add
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x
   *            Initial value
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y
   *            Value to subtract from `x`
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}
   *            Subtraction of `x` and `y`
   */

  var subtract = typed('subtract', {
    'number, number': function numberNumber(x, y) {
      return x - y;
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.sub(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.minus(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.sub(y);
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (x.value === null) {
        throw new Error('Parameter x contains a unit with undefined value');
      }

      if (y.value === null) {
        throw new Error('Parameter y contains a unit with undefined value');
      }

      if (!x.equalBase(y)) {
        throw new Error('Units do not match');
      }

      var res = x.clone();
      res.value = subtract(res.value, y.value);
      res.fixPrefix = false;
      return res;
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      checkEqualDimensions(x, y);
      return algorithm05(x, y, subtract);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      checkEqualDimensions(x, y);
      return algorithm03(y, x, subtract, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      checkEqualDimensions(x, y);
      return algorithm01(x, y, subtract, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      checkEqualDimensions(x, y);
      return algorithm13(x, y, subtract);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return subtract(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return subtract(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return subtract(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm10(x, unaryMinus(y), addScalar);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, subtract);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm10(y, x, subtract, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, subtract, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, subtract, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, subtract, true).valueOf();
    }
  });
  subtract.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['subtract'], "${args[1]}\\right)")
  };
  return subtract;
}
/**
 * Check whether matrix x and y have the same number of dimensions.
 * Throws a DimensionError when dimensions are not equal
 * @param {Matrix} x
 * @param {Matrix} y
 */


function checkEqualDimensions(x, y) {
  var xsize = x.size();
  var ysize = y.size();

  if (xsize.length !== ysize.length) {
    throw new DimensionError(xsize.length, ysize.length);
  }
}

exports.name = 'subtract';
exports.factory = factory;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var keywords = __webpack_require__(114);

var deepEqual = __webpack_require__(5).deepEqual;

var hasOwnProperty = __webpack_require__(5).hasOwnProperty;

function factory(type, config, load, typed, math) {
  /**
   * Node
   */
  function Node() {
    if (!(this instanceof Node)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
  }
  /**
   * Evaluate the node
   * @param {Object} [scope]  Scope to read/write variables
   * @return {*}              Returns the result
   */


  Node.prototype.eval = function (scope) {
    return this.compile().eval(scope);
  };

  Node.prototype.type = 'Node';
  Node.prototype.isNode = true;
  Node.prototype.comment = '';
  /**
   * Compile the node into an optimized, evauatable JavaScript function
   * @return {{eval: function([Object])}} expr  Returns an object with a function 'eval',
   *                                  which can be invoked as expr.eval([scope: Object]),
   *                                  where scope is an optional object with
   *                                  variables.
   */

  Node.prototype.compile = function () {
    var expr = this._compile(math.expression.mathWithTransform, {});

    var args = {};
    var context = null;
    return {
      eval: function evalNode(scope) {
        var s = scope || {};

        _validateScope(s);

        return expr(s, args, context);
      }
    };
  };
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */


  Node.prototype._compile = function (math, argNames) {
    throw new Error('Method _compile should be implemented by type ' + this.type);
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  Node.prototype.forEach = function (callback) {
    // must be implemented by each of the Node implementations
    throw new Error('Cannot run forEach on a Node interface');
  };
  /**
   * Create a new Node having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {OperatorNode} Returns a transformed copy of the node
   */


  Node.prototype.map = function (callback) {
    // must be implemented by each of the Node implementations
    throw new Error('Cannot run map on a Node interface');
  };
  /**
   * Validate whether an object is a Node, for use with map
   * @param {Node} node
   * @returns {Node} Returns the input if it's a node, else throws an Error
   * @protected
   */


  Node.prototype._ifNode = function (node) {
    if (!type.isNode(node)) {
      throw new TypeError('Callback function must return a Node');
    }

    return node;
  };
  /**
   * Recursively traverse all nodes in a node tree. Executes given callback for
   * this node and each of its child nodes.
   * @param {function(node: Node, path: string, parent: Node)} callback
   *          A callback called for every node in the node tree.
   */


  Node.prototype.traverse = function (callback) {
    // execute callback for itself
    callback(this, null, null); // eslint-disable-line standard/no-callback-literal
    // recursively traverse over all childs of a node

    function _traverse(node, callback) {
      node.forEach(function (child, path, parent) {
        callback(child, path, parent);

        _traverse(child, callback);
      });
    }

    _traverse(this, callback);
  };
  /**
   * Recursively transform a node tree via a transform function.
   *
   * For example, to replace all nodes of type SymbolNode having name 'x' with a
   * ConstantNode with value 2:
   *
   *     const res = Node.transform(function (node, path, parent) {
   *       if (node && node.isSymbolNode) && (node.name === 'x')) {
   *         return new ConstantNode(2)
   *       }
   *       else {
   *         return node
   *       }
   *     })
   *
   * @param {function(node: Node, path: string, parent: Node) : Node} callback
   *          A mapping function accepting a node, and returning
   *          a replacement for the node or the original node.
   *          Signature: callback(node: Node, index: string, parent: Node) : Node
   * @return {Node} Returns the original node or its replacement
   */


  Node.prototype.transform = function (callback) {
    // traverse over all childs
    function _transform(node, callback) {
      return node.map(function (child, path, parent) {
        var replacement = callback(child, path, parent);
        return _transform(replacement, callback);
      });
    }

    var replacement = callback(this, null, null); // eslint-disable-line standard/no-callback-literal

    return _transform(replacement, callback);
  };
  /**
   * Find any node in the node tree matching given filter function. For example, to
   * find all nodes of type SymbolNode having name 'x':
   *
   *     const results = Node.filter(function (node) {
   *       return (node && node.isSymbolNode) && (node.name === 'x')
   *     })
   *
   * @param {function(node: Node, path: string, parent: Node) : Node} callback
   *            A test function returning true when a node matches, and false
   *            otherwise. Function signature:
   *            callback(node: Node, index: string, parent: Node) : boolean
   * @return {Node[]} nodes       An array with nodes matching given filter criteria
   */


  Node.prototype.filter = function (callback) {
    var nodes = [];
    this.traverse(function (node, path, parent) {
      if (callback(node, path, parent)) {
        nodes.push(node);
      }
    });
    return nodes;
  }; // TODO: deprecated since version 1.1.0, remove this some day


  Node.prototype.find = function () {
    throw new Error('Function Node.find is deprecated. Use Node.filter instead.');
  }; // TODO: deprecated since version 1.1.0, remove this some day


  Node.prototype.match = function () {
    throw new Error('Function Node.match is deprecated. See functions Node.filter, Node.transform, Node.traverse.');
  };
  /**
   * Create a shallow clone of this node
   * @return {Node}
   */


  Node.prototype.clone = function () {
    // must be implemented by each of the Node implementations
    throw new Error('Cannot clone a Node interface');
  };
  /**
   * Create a deep clone of this node
   * @return {Node}
   */


  Node.prototype.cloneDeep = function () {
    return this.map(function (node) {
      return node.cloneDeep();
    });
  };
  /**
   * Deep compare this node with another node.
   * @param {Node} other
   * @return {boolean} Returns true when both nodes are of the same type and
   *                   contain the same values (as do their childs)
   */


  Node.prototype.equals = function (other) {
    return other ? deepEqual(this, other) : false;
  };
  /**
   * Get string representation. (wrapper function)
   *
   * This function can get an object of the following form:
   * {
   *    handler: //This can be a callback function of the form
   *             // "function callback(node, options)"or
   *             // a map that maps function names (used in FunctionNodes)
   *             // to callbacks
   *    parenthesis: "keep" //the parenthesis option (This is optional)
   * }
   *
   * @param {Object} [options]
   * @return {string}
   */


  Node.prototype.toString = function (options) {
    var customString;

    if (options && _typeof(options) === 'object') {
      switch (_typeof(options.handler)) {
        case 'object':
        case 'undefined':
          break;

        case 'function':
          customString = options.handler(this, options);
          break;

        default:
          throw new TypeError('Object or function expected as callback');
      }
    }

    if (typeof customString !== 'undefined') {
      return customString;
    }

    return this._toString(options);
  };
  /**
   * Get a JSON representation of the node
   * Both .toJSON() and the static .fromJSON(json) should be implemented by all
   * implementations of Node
   * @returns {Object}
   */


  Node.prototype.toJSON = function () {
    throw new Error('Cannot serialize object: toJSON not implemented by ' + this.type);
  };
  /**
   * Get HTML representation. (wrapper function)
   *
   * This function can get an object of the following form:
   * {
   *    handler: //This can be a callback function of the form
   *             // "function callback(node, options)" or
   *             // a map that maps function names (used in FunctionNodes)
   *             // to callbacks
   *    parenthesis: "keep" //the parenthesis option (This is optional)
   * }
   *
   * @param {Object} [options]
   * @return {string}
   */


  Node.prototype.toHTML = function (options) {
    var customString;

    if (options && _typeof(options) === 'object') {
      switch (_typeof(options.handler)) {
        case 'object':
        case 'undefined':
          break;

        case 'function':
          customString = options.handler(this, options);
          break;

        default:
          throw new TypeError('Object or function expected as callback');
      }
    }

    if (typeof customString !== 'undefined') {
      return customString;
    }

    return this.toHTML(options);
  };
  /**
   * Internal function to generate the string output.
   * This has to be implemented by every Node
   *
   * @throws {Error}
   */


  Node.prototype._toString = function () {
    // must be implemented by each of the Node implementations
    throw new Error('_toString not implemented for ' + this.type);
  };
  /**
   * Get LaTeX representation. (wrapper function)
   *
   * This function can get an object of the following form:
   * {
   *    handler: //This can be a callback function of the form
   *             // "function callback(node, options)"or
   *             // a map that maps function names (used in FunctionNodes)
   *             // to callbacks
   *    parenthesis: "keep" //the parenthesis option (This is optional)
   * }
   *
   * @param {Object} [options]
   * @return {string}
   */


  Node.prototype.toTex = function (options) {
    var customTex;

    if (options && _typeof(options) === 'object') {
      switch (_typeof(options.handler)) {
        case 'object':
        case 'undefined':
          break;

        case 'function':
          customTex = options.handler(this, options);
          break;

        default:
          throw new TypeError('Object or function expected as callback');
      }
    }

    if (typeof customTex !== 'undefined') {
      return customTex;
    }

    return this._toTex(options);
  };
  /**
   * Internal function to generate the LaTeX output.
   * This has to be implemented by every Node
   *
   * @param {Object} [options]
   * @throws {Error}
   */


  Node.prototype._toTex = function (options) {
    // must be implemented by each of the Node implementations
    throw new Error('_toTex not implemented for ' + this.type);
  };
  /**
   * Get identifier.
   * @return {string}
   */


  Node.prototype.getIdentifier = function () {
    return this.type;
  };
  /**
   * Get the content of the current Node.
   * @return {Node} node
   **/


  Node.prototype.getContent = function () {
    return this;
  };
  /**
   * Validate the symbol names of a scope.
   * Throws an error when the scope contains an illegal symbol.
   * @param {Object} scope
   */


  function _validateScope(scope) {
    for (var symbol in scope) {
      if (hasOwnProperty(scope, symbol)) {
        if (symbol in keywords) {
          throw new Error('Scope contains an illegal symbol, "' + symbol + '" is a reserved keyword');
        }
      }
    }
  }

  return Node;
}

exports.name = 'Node';
exports.path = 'expression.node';
exports.math = true; // request access to the math namespace as 5th argument of the factory function

exports.factory = factory;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Add two scalar values, `x + y`.
   * This function is meant for internal use: it is used by the public function
   * `add`
   *
   * This function does not support collections (Array or Matrix), and does
   * not validate the number of of inputs.
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   First value to add
   * @param  {number | BigNumber | Fraction | Complex} y          Second value to add
   * @return {number | BigNumber | Fraction | Complex | Unit}                      Sum of `x` and `y`
   * @private
   */
  var add = typed('add', {
    'number, number': function numberNumber(x, y) {
      return x + y;
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.add(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.plus(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.add(y);
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (x.value === null || x.value === undefined) throw new Error('Parameter x contains a unit with undefined value');
      if (y.value === null || y.value === undefined) throw new Error('Parameter y contains a unit with undefined value');
      if (!x.equalBase(y)) throw new Error('Units do not match');
      var res = x.clone();
      res.value = add(res.value, y.value);
      res.fixPrefix = false;
      return res;
    }
  });
  return add;
}

exports.factory = factory;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Iterates over SparseMatrix items and invokes the callback function f(Dij, Sij).
   * Callback function invoked M*N times.
   *
   *
   *          ┌  f(Dij, Sij)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  f(Dij, 0)    ; otherwise
   *
   *
   * @param {Matrix}   denseMatrix       The DenseMatrix instance (D)
   * @param {Matrix}   sparseMatrix      The SparseMatrix instance (C)
   * @param {Function} callback          The f(Dij,Sij) operation to invoke, where Dij = DenseMatrix(i,j) and Sij = SparseMatrix(i,j)
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(Sij,Dij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97477571
   */

  var algorithm03 = function algorithm03(denseMatrix, sparseMatrix, callback, inverse) {
    // dense matrix arrays
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype; // sparse matrix arrays

    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // sparse matrix cannot be a Pattern matrix


    if (!bvalues) {
      throw new Error('Cannot perform operation on Dense Matrix and Pattern Sparse Matrix');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result (DenseMatrix)


    var cdata = []; // initialize dense matrix

    for (var z = 0; z < rows; z++) {
      // initialize row
      cdata[z] = [];
    } // workspace


    var x = []; // marks indicating we have a value in x for a given column

    var w = []; // loop columns in b

    for (var j = 0; j < columns; j++) {
      // column mark
      var mark = j + 1; // values in column j

      for (var k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        var i = bindex[k]; // update workspace

        x[i] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]);
        w[i] = mark;
      } // process workspace


      for (var y = 0; y < rows; y++) {
        // check we have a calculated value for current row
        if (w[y] === mark) {
          // use calculated value
          cdata[y][j] = x[y];
        } else {
          // calculate value
          cdata[y][j] = inverse ? cf(zero, adata[y][j]) : cf(adata[y][j], zero);
        }
      }
    } // return dense matrix


    return new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };

  return algorithm03;
}

exports.name = 'algorithm03';
exports.factory = factory;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Iterates over SparseMatrix S nonzero items and invokes the callback function f(Sij, b).
   * Callback function invoked MxN times.
   *
   *
   *          ┌  f(Sij, b)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  f(0, b)    ; otherwise
   *
   *
   * @param {Matrix}   s                 The SparseMatrix instance (S)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Sij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97626813
   */

  var algorithm12 = function algorithm12(s, b, callback, inverse) {
    // sparse matrix arrays
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype; // sparse matrix cannot be a Pattern matrix

    if (!avalues) {
      throw new Error('Cannot perform operation on Pattern Sparse Matrix and Scalar value');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string') {
      // datatype
      dt = adt; // convert b to the same datatype

      b = typed.convert(b, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cdata = []; // matrix

    var c = new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    }); // workspaces

    var x = []; // marks indicating we have a value in x for a given column

    var w = []; // loop columns

    for (var j = 0; j < columns; j++) {
      // columns mark
      var mark = j + 1; // values in j

      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        var r = aindex[k]; // update workspace

        x[r] = avalues[k];
        w[r] = mark;
      } // loop rows


      for (var i = 0; i < rows; i++) {
        // initialize C on first column
        if (j === 0) {
          // create row array
          cdata[i] = [];
        } // check sparse matrix has a value @ i,j


        if (w[i] === mark) {
          // invoke callback, update C
          cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b);
        } else {
          // dense matrix value @ i, j
          cdata[i][j] = inverse ? cf(b, 0) : cf(0, b);
        }
      }
    } // return sparse matrix


    return c;
  };

  return algorithm12;
}

exports.name = 'algorithm12';
exports.factory = factory;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(11));
  var SparseMatrix = type.SparseMatrix;
  /**
   * Iterates over SparseMatrix S nonzero items and invokes the callback function f(Sij, b).
   * Callback function invoked NZ times (number of nonzero items in S).
   *
   *
   *          ┌  f(Sij, b)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  0          ; otherwise
   *
   *
   * @param {Matrix}   s                 The SparseMatrix instance (S)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Sij)
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97626813
   */

  var algorithm11 = function algorithm11(s, b, callback, inverse) {
    // sparse matrix arrays
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype; // sparse matrix cannot be a Pattern matrix

    if (!avalues) {
      throw new Error('Cannot perform operation on Pattern Sparse Matrix and Scalar value');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // equal signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string') {
      // datatype
      dt = adt; // find signature that matches (dt, dt)

      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt); // convert b to the same datatype

      b = typed.convert(b, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cvalues = [];
    var cindex = [];
    var cptr = []; // matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    }); // loop columns

    for (var j = 0; j < columns; j++) {
      // initialize ptr
      cptr[j] = cindex.length; // values in j

      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        var i = aindex[k]; // invoke callback

        var v = inverse ? cf(b, avalues[k]) : cf(avalues[k], b); // check value is zero

        if (!eq(v, zero)) {
          // push index & value
          cindex.push(i);
          cvalues.push(v);
        }
      }
    } // update ptr


    cptr[columns] = cindex.length; // return sparse matrix

    return c;
  };

  return algorithm11;
}

exports.name = 'algorithm11';
exports.factory = factory;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Multiply two scalar values, `x * y`.
   * This function is meant for internal use: it is used by the public function
   * `multiply`
   *
   * This function does not support collections (Array or Matrix), and does
   * not validate the number of of inputs.
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   First value to multiply
   * @param  {number | BigNumber | Fraction | Complex} y          Second value to multiply
   * @return {number | BigNumber | Fraction | Complex | Unit}                      Multiplication of `x` and `y`
   * @private
   */
  var multiplyScalar = typed('multiplyScalar', {
    'number, number': function numberNumber(x, y) {
      return x * y;
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.mul(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.times(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.mul(y);
    },
    'number | Fraction | BigNumber | Complex, Unit': function numberFractionBigNumberComplexUnit(x, y) {
      var res = y.clone();
      res.value = res.value === null ? res._normalize(x) : multiplyScalar(res.value, x);
      return res;
    },
    'Unit, number | Fraction | BigNumber | Complex': function UnitNumberFractionBigNumberComplex(x, y) {
      var res = x.clone();
      res.value = res.value === null ? res._normalize(y) : multiplyScalar(res.value, y);
      return res;
    },
    'Unit, Unit': function UnitUnit(x, y) {
      return x.multiply(y);
    }
  });
  return multiplyScalar;
}

exports.factory = factory;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IndexError = __webpack_require__(48);
/**
 * Transform zero-based indices to one-based indices in errors
 * @param {Error} err
 * @returns {Error} Returns the transformed error
 */


exports.transform = function (err) {
  if (err && err.isIndexError) {
    return new IndexError(err.index + 1, err.min + 1, err.max !== undefined ? err.max + 1 : undefined);
  }

  return err;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(5).clone;

var validateIndex = __webpack_require__(2).validateIndex;

var getSafeProperty = __webpack_require__(13).getSafeProperty;

var setSafeProperty = __webpack_require__(13).setSafeProperty;

var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  /**
   * Get or set a subset of a matrix or string.
   *
   * Syntax:
   *     math.subset(value, index)                                // retrieve a subset
   *     math.subset(value, index, replacement [, defaultValue])  // replace a subset
   *
   * Examples:
   *
   *     // get a subset
   *     const d = [[1, 2], [3, 4]]
   *     math.subset(d, math.index(1, 0))        // returns 3
   *     math.subset(d, math.index([0, 1], 1))   // returns [[2], [4]]
   *
   *     // replace a subset
   *     const e = []
   *     const f = math.subset(e, math.index(0, [0, 2]), [5, 6])  // f = [[5, 6]]
   *     const g = math.subset(f, math.index(1, 1), 7, 0)         // g = [[5, 6], [0, 7]]
   *
   * See also:
   *
   *     size, resize, squeeze, index
   *
   * @param {Array | Matrix | string} matrix  An array, matrix, or string
   * @param {Index} index                     An index containing ranges for each
   *                                          dimension
   * @param {*} [replacement]                 An array, matrix, or scalar.
   *                                          If provided, the subset is replaced with replacement.
   *                                          If not provided, the subset is returned
   * @param {*} [defaultValue=undefined]      Default value, filled in on new entries when
   *                                          the matrix is resized. If not provided,
   *                                          math.matrix elements will be left undefined.
   * @return {Array | Matrix | string} Either the retrieved subset or the updated matrix.
   */

  var subset = typed('subset', {
    // get subset
    'Array, Index': function ArrayIndex(value, index) {
      var m = matrix(value);
      var subset = m.subset(index); // returns a Matrix

      return index.isScalar() ? subset : subset.valueOf(); // return an Array (like the input)
    },
    'Matrix, Index': function MatrixIndex(value, index) {
      return value.subset(index);
    },
    'Object, Index': _getObjectProperty,
    'string, Index': _getSubstring,
    // set subset
    'Array, Index, any': function ArrayIndexAny(value, index, replacement) {
      return matrix(clone(value)).subset(index, replacement, undefined).valueOf();
    },
    'Array, Index, any, any': function ArrayIndexAnyAny(value, index, replacement, defaultValue) {
      return matrix(clone(value)).subset(index, replacement, defaultValue).valueOf();
    },
    'Matrix, Index, any': function MatrixIndexAny(value, index, replacement) {
      return value.clone().subset(index, replacement);
    },
    'Matrix, Index, any, any': function MatrixIndexAnyAny(value, index, replacement, defaultValue) {
      return value.clone().subset(index, replacement, defaultValue);
    },
    'string, Index, string': _setSubstring,
    'string, Index, string, string': _setSubstring,
    'Object, Index, any': _setObjectProperty
  });
  subset.toTex = undefined; // use default template

  return subset;
  /**
   * Retrieve a subset of a string
   * @param {string} str            string from which to get a substring
   * @param {Index} index           An index containing ranges for each dimension
   * @returns {string} substring
   * @private
   */

  function _getSubstring(str, index) {
    if (!type.isIndex(index)) {
      // TODO: better error message
      throw new TypeError('Index expected');
    }

    if (index.size().length !== 1) {
      throw new DimensionError(index.size().length, 1);
    } // validate whether the range is out of range


    var strLen = str.length;
    validateIndex(index.min()[0], strLen);
    validateIndex(index.max()[0], strLen);
    var range = index.dimension(0);
    var substr = '';
    range.forEach(function (v) {
      substr += str.charAt(v);
    });
    return substr;
  }
  /**
   * Replace a substring in a string
   * @param {string} str            string to be replaced
   * @param {Index} index           An index containing ranges for each dimension
   * @param {string} replacement    Replacement string
   * @param {string} [defaultValue] Default value to be uses when resizing
   *                                the string. is ' ' by default
   * @returns {string} result
   * @private
   */


  function _setSubstring(str, index, replacement, defaultValue) {
    if (!index || index.isIndex !== true) {
      // TODO: better error message
      throw new TypeError('Index expected');
    }

    if (index.size().length !== 1) {
      throw new DimensionError(index.size().length, 1);
    }

    if (defaultValue !== undefined) {
      if (typeof defaultValue !== 'string' || defaultValue.length !== 1) {
        throw new TypeError('Single character expected as defaultValue');
      }
    } else {
      defaultValue = ' ';
    }

    var range = index.dimension(0);
    var len = range.size()[0];

    if (len !== replacement.length) {
      throw new DimensionError(range.size()[0], replacement.length);
    } // validate whether the range is out of range


    var strLen = str.length;
    validateIndex(index.min()[0]);
    validateIndex(index.max()[0]); // copy the string into an array with characters

    var chars = [];

    for (var i = 0; i < strLen; i++) {
      chars[i] = str.charAt(i);
    }

    range.forEach(function (v, i) {
      chars[v] = replacement.charAt(i[0]);
    }); // initialize undefined characters with a space

    if (chars.length > strLen) {
      for (var _i = strLen - 1, _len = chars.length; _i < _len; _i++) {
        if (!chars[_i]) {
          chars[_i] = defaultValue;
        }
      }
    }

    return chars.join('');
  }
}
/**
 * Retrieve a property from an object
 * @param {Object} object
 * @param {Index} index
 * @return {*} Returns the value of the property
 * @private
 */


function _getObjectProperty(object, index) {
  if (index.size().length !== 1) {
    throw new DimensionError(index.size(), 1);
  }

  var key = index.dimension(0);

  if (typeof key !== 'string') {
    throw new TypeError('String expected as index to retrieve an object property');
  }

  return getSafeProperty(object, key);
}
/**
 * Set a property on an object
 * @param {Object} object
 * @param {Index} index
 * @param {*} replacement
 * @return {*} Returns the updated object
 * @private
 */


function _setObjectProperty(object, index, replacement) {
  if (index.size().length !== 1) {
    throw new DimensionError(index.size(), 1);
  }

  var key = index.dimension(0);

  if (typeof key !== 'string') {
    throw new TypeError('String expected as index to retrieve an object property');
  } // clone the object, and apply the property to the clone


  var updated = clone(object);
  setSafeProperty(updated, key, replacement);
  return updated;
}

exports.name = 'subset';
exports.factory = factory;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(5).clone;

var isInteger = __webpack_require__(3).isInteger;

function factory(type) {
  /**
   * Create an index. An Index can store ranges and sets for multiple dimensions.
   * Matrix.get, Matrix.set, and math.subset accept an Index as input.
   *
   * Usage:
   *     const index = new Index(range1, range2, matrix1, array1, ...)
   *
   * Where each parameter can be any of:
   *     A number
   *     A string (containing a name of an object property)
   *     An instance of Range
   *     An Array with the Set values
   *     A Matrix with the Set values
   *
   * The parameters start, end, and step must be integer numbers.
   *
   * @class Index
   * @Constructor Index
   * @param {...*} ranges
   */
  function Index(ranges) {
    if (!(this instanceof Index)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this._dimensions = [];
    this._isScalar = true;

    for (var i = 0, ii = arguments.length; i < ii; i++) {
      var arg = arguments[i];

      if (type.isRange(arg)) {
        this._dimensions.push(arg);

        this._isScalar = false;
      } else if (Array.isArray(arg) || type.isMatrix(arg)) {
        // create matrix
        var m = _createImmutableMatrix(arg.valueOf());

        this._dimensions.push(m); // size


        var size = m.size(); // scalar

        if (size.length !== 1 || size[0] !== 1) {
          this._isScalar = false;
        }
      } else if (typeof arg === 'number') {
        this._dimensions.push(_createImmutableMatrix([arg]));
      } else if (typeof arg === 'string') {
        // object property (arguments.count should be 1)
        this._dimensions.push(arg);
      } else {
        throw new TypeError('Dimension must be an Array, Matrix, number, string, or Range');
      } // TODO: implement support for wildcard '*'

    }
  }
  /**
   * Attach type information
   */


  Index.prototype.type = 'Index';
  Index.prototype.isIndex = true;

  function _createImmutableMatrix(arg) {
    // loop array elements
    for (var i = 0, l = arg.length; i < l; i++) {
      if (typeof arg[i] !== 'number' || !isInteger(arg[i])) {
        throw new TypeError('Index parameters must be positive integer numbers');
      }
    } // create matrix


    return new type.ImmutableDenseMatrix(arg);
  }
  /**
   * Create a clone of the index
   * @memberof Index
   * @return {Index} clone
   */


  Index.prototype.clone = function () {
    var index = new Index();
    index._dimensions = clone(this._dimensions);
    index._isScalar = this._isScalar;
    return index;
  };
  /**
   * Create an index from an array with ranges/numbers
   * @memberof Index
   * @param {Array.<Array | number>} ranges
   * @return {Index} index
   * @private
   */


  Index.create = function (ranges) {
    var index = new Index();
    Index.apply(index, ranges);
    return index;
  };
  /**
   * Retrieve the size of the index, the number of elements for each dimension.
   * @memberof Index
   * @returns {number[]} size
   */


  Index.prototype.size = function () {
    var size = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var d = this._dimensions[i];
      size[i] = typeof d === 'string' ? 1 : d.size()[0];
    }

    return size;
  };
  /**
   * Get the maximum value for each of the indexes ranges.
   * @memberof Index
   * @returns {number[]} max
   */


  Index.prototype.max = function () {
    var values = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var range = this._dimensions[i];
      values[i] = typeof range === 'string' ? range : range.max();
    }

    return values;
  };
  /**
   * Get the minimum value for each of the indexes ranges.
   * @memberof Index
   * @returns {number[]} min
   */


  Index.prototype.min = function () {
    var values = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var range = this._dimensions[i];
      values[i] = typeof range === 'string' ? range : range.min();
    }

    return values;
  };
  /**
   * Loop over each of the ranges of the index
   * @memberof Index
   * @param {Function} callback   Called for each range with a Range as first
   *                              argument, the dimension as second, and the
   *                              index object as third.
   */


  Index.prototype.forEach = function (callback) {
    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      callback(this._dimensions[i], i, this);
    }
  };
  /**
   * Retrieve the dimension for the given index
   * @memberof Index
   * @param {Number} dim                  Number of the dimension
   * @returns {Range | null} range
   */


  Index.prototype.dimension = function (dim) {
    return this._dimensions[dim] || null;
  };
  /**
   * Test whether this index contains an object property
   * @returns {boolean} Returns true if the index is an object property
   */


  Index.prototype.isObjectProperty = function () {
    return this._dimensions.length === 1 && typeof this._dimensions[0] === 'string';
  };
  /**
   * Returns the object property name when the Index holds a single object property,
   * else returns null
   * @returns {string | null}
   */


  Index.prototype.getObjectProperty = function () {
    return this.isObjectProperty() ? this._dimensions[0] : null;
  };
  /**
   * Test whether this index contains only a single value.
   *
   * This is the case when the index is created with only scalar values as ranges,
   * not for ranges resolving into a single value.
   * @memberof Index
   * @return {boolean} isScalar
   */


  Index.prototype.isScalar = function () {
    return this._isScalar;
  };
  /**
   * Expand the Index into an array.
   * For example new Index([0,3], [2,7]) returns [[0,1,2], [2,3,4,5,6]]
   * @memberof Index
   * @returns {Array} array
   */


  Index.prototype.toArray = function () {
    var array = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var dimension = this._dimensions[i];
      array.push(typeof dimension === 'string' ? dimension : dimension.toArray());
    }

    return array;
  };
  /**
   * Get the primitive value of the Index, a two dimensional array.
   * Equivalent to Index.toArray().
   * @memberof Index
   * @returns {Array} array
   */


  Index.prototype.valueOf = Index.prototype.toArray;
  /**
   * Get the string representation of the index, for example '[2:6]' or '[0:2:10, 4:7, [1,2,3]]'
   * @memberof Index
   * @returns {String} str
   */

  Index.prototype.toString = function () {
    var strings = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var dimension = this._dimensions[i];

      if (typeof dimension === 'string') {
        strings.push(JSON.stringify(dimension));
      } else {
        strings.push(dimension.toString());
      }
    }

    return '[' + strings.join(', ') + ']';
  };
  /**
   * Get a JSON representation of the Index
   * @memberof Index
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Index", "ranges": [{"mathjs": "Range", start: 0, end: 10, step:1}, ...]}`
   */


  Index.prototype.toJSON = function () {
    return {
      mathjs: 'Index',
      dimensions: this._dimensions
    };
  };
  /**
   * Instantiate an Index from a JSON object
   * @memberof Index
   * @param {Object} json A JSON object structured as:
   *                     `{"mathjs": "Index", "dimensions": [{"mathjs": "Range", start: 0, end: 10, step:1}, ...]}`
   * @return {Index}
   */


  Index.fromJSON = function (json) {
    return Index.create(json.dimensions);
  };

  return Index;
}

exports.name = 'Index';
exports.path = 'type';
exports.factory = factory;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Calculate the absolute value of a number. For matrices, the function is
   * evaluated element wise.
   *
   * Syntax:
   *
   *    math.abs(x)
   *
   * Examples:
   *
   *    math.abs(3.5)                // returns number 3.5
   *    math.abs(-4.2)               // returns number 4.2
   *
   *    math.abs([3, -5, -1, 0, 2])  // returns Array [3, 5, 1, 0, 2]
   *
   * See also:
   *
   *    sign
   *
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix | Unit} x
   *            A number or matrix for which to get the absolute value
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix | Unit}
   *            Absolute value of `x`
   */
  var abs = typed('abs', {
    'number': Math.abs,
    'Complex': function Complex(x) {
      return x.abs();
    },
    'BigNumber': function BigNumber(x) {
      return x.abs();
    },
    'Fraction': function Fraction(x) {
      return x.abs();
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since abs(0) = 0
      return deepMap(x, abs, true);
    },
    'Unit': function Unit(x) {
      return x.abs();
    }
  });
  abs.toTex = {
    1: "\\left|${args[0]}\\right|"
  };
  return abs;
}

exports.name = 'abs';
exports.factory = factory;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function factory(type, config, load, typed) {
  /**
   * Determine the type of a variable.
   *
   * Function `typeof` recognizes the following types of objects:
   *
   * Object                 | Returns       | Example
   * ---------------------- | ------------- | ------------------------------------------
   * null                   | `'null'`      | `math.typeof(null)`
   * number                 | `'number'`    | `math.typeof(3.5)`
   * boolean                | `'boolean'`   | `math.typeof(true)`
   * string                 | `'string'`    | `math.typeof('hello world')`
   * Array                  | `'Array'`     | `math.typeof([1, 2, 3])`
   * Date                   | `'Date'`      | `math.typeof(new Date())`
   * Function               | `'Function'`  | `math.typeof(function () {})`
   * Object                 | `'Object'`    | `math.typeof({a: 2, b: 3})`
   * RegExp                 | `'RegExp'`    | `math.typeof(/a regexp/)`
   * undefined              | `'undefined'` | `math.typeof(undefined)`
   * math.type.BigNumber    | `'BigNumber'` | `math.typeof(math.bignumber('2.3e500'))`
   * math.type.Chain        | `'Chain'`     | `math.typeof(math.chain(2))`
   * math.type.Complex      | `'Complex'`   | `math.typeof(math.complex(2, 3))`
   * math.type.Fraction     | `'Fraction'`  | `math.typeof(math.fraction(1, 3))`
   * math.type.Help         | `'Help'`      | `math.typeof(math.help('sqrt'))`
   * math.type.Help         | `'Help'`      | `math.typeof(math.help('sqrt'))`
   * math.type.Index        | `'Index'`     | `math.typeof(math.index(1, 3))`
   * math.type.Matrix       | `'Matrix'`    | `math.typeof(math.matrix([[1,2], [3, 4]]))`
   * math.type.Range        | `'Range'`     | `math.typeof(math.range(0, 10))`
   * math.type.ResultSet    | `'ResultSet'` | `math.typeof(math.eval('a=2\nb=3'))`
   * math.type.Unit         | `'Unit'`      | `math.typeof(math.unit('45 deg'))`
   * math.expression.node&#8203;.AccessorNode            | `'AccessorNode'`            | `math.typeof(math.parse('A[2]'))`
   * math.expression.node&#8203;.ArrayNode               | `'ArrayNode'`               | `math.typeof(math.parse('[1,2,3]'))`
   * math.expression.node&#8203;.AssignmentNode          | `'AssignmentNode'`          | `math.typeof(math.parse('x=2'))`
   * math.expression.node&#8203;.BlockNode               | `'BlockNode'`               | `math.typeof(math.parse('a=2; b=3'))`
   * math.expression.node&#8203;.ConditionalNode         | `'ConditionalNode'`         | `math.typeof(math.parse('x<0 ? -x : x'))`
   * math.expression.node&#8203;.ConstantNode            | `'ConstantNode'`            | `math.typeof(math.parse('2.3'))`
   * math.expression.node&#8203;.FunctionAssignmentNode  | `'FunctionAssignmentNode'`  | `math.typeof(math.parse('f(x)=x^2'))`
   * math.expression.node&#8203;.FunctionNode            | `'FunctionNode'`            | `math.typeof(math.parse('sqrt(4)'))`
   * math.expression.node&#8203;.IndexNode               | `'IndexNode'`               | `math.typeof(math.parse('A[2]').index)`
   * math.expression.node&#8203;.ObjectNode              | `'ObjectNode'`              | `math.typeof(math.parse('{a:2}'))`
   * math.expression.node&#8203;.ParenthesisNode         | `'ParenthesisNode'`         | `math.typeof(math.parse('(2+3)'))`
   * math.expression.node&#8203;.RangeNode               | `'RangeNode'`               | `math.typeof(math.parse('1:10'))`
   * math.expression.node&#8203;.SymbolNode              | `'SymbolNode'`              | `math.typeof(math.parse('x'))`
   *
   * Syntax:
   *
   *    math.typeof(x)
   *
   * Examples:
   *
   *    math.typeof(3.5)                     // returns 'number'
   *    math.typeof(math.complex('2-4i'))    // returns 'Complex'
   *    math.typeof(math.unit('45 deg'))     // returns 'Unit'
   *    math.typeof('hello world')           // returns 'string'
   *
   * @param {*} x     The variable for which to test the type.
   * @return {string} Returns the name of the type. Primitive types are lower case,
   *                  non-primitive types are upper-camel-case.
   *                  For example 'number', 'string', 'Array', 'Date'.
   */
  var _typeof = typed('_typeof', {
    'any': function any(x) {
      var t = _typeof2(x);

      if (t === 'object') {
        // JavaScript types
        if (x === null) return 'null';
        if (Array.isArray(x)) return 'Array';
        if (x instanceof Date) return 'Date';
        if (x instanceof RegExp) return 'RegExp'; // math.js types

        if (type.isBigNumber(x)) return 'BigNumber';
        if (type.isComplex(x)) return 'Complex';
        if (type.isFraction(x)) return 'Fraction';
        if (type.isMatrix(x)) return 'Matrix';
        if (type.isUnit(x)) return 'Unit';
        if (type.isIndex(x)) return 'Index';
        if (type.isRange(x)) return 'Range';
        if (type.isResultSet(x)) return 'ResultSet';
        if (type.isNode(x)) return x.type;
        if (type.isChain(x)) return 'Chain';
        if (type.isHelp(x)) return 'Help';
        return 'Object';
      }

      if (t === 'function') return 'Function';
      return t; // can be 'string', 'number', 'boolean', ...
    }
  });

  _typeof.toTex = undefined; // use default template

  return _typeof;
}

exports.name = 'typeof';
exports.factory = factory;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(11));
  var SparseMatrix = type.SparseMatrix;
  /**
   * Iterates over SparseMatrix nonzero items and invokes the callback function f(Dij, Sij).
   * Callback function invoked NNZ times (number of nonzero items in SparseMatrix).
   *
   *
   *          ┌  f(Dij, Sij)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  0            ; otherwise
   *
   *
   * @param {Matrix}   denseMatrix       The DenseMatrix instance (D)
   * @param {Matrix}   sparseMatrix      The SparseMatrix instance (S)
   * @param {Function} callback          The f(Dij,Sij) operation to invoke, where Dij = DenseMatrix(i,j) and Sij = SparseMatrix(i,j)
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(Sij,Dij)
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97477571
   */

  var algorithm02 = function algorithm02(denseMatrix, sparseMatrix, callback, inverse) {
    // dense matrix arrays
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype; // sparse matrix arrays

    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // sparse matrix cannot be a Pattern matrix


    if (!bvalues) {
      throw new Error('Cannot perform operation on Dense Matrix and Pattern Sparse Matrix');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // equal signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // find signature that matches (dt, dt)

      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result (SparseMatrix)


    var cvalues = [];
    var cindex = [];
    var cptr = []; // loop columns in b

    for (var j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length; // values in column j

      for (var k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        var i = bindex[k]; // update C(i,j)

        var cij = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]); // check for nonzero

        if (!eq(cij, zero)) {
          // push i & v
          cindex.push(i);
          cvalues.push(cij);
        }
      }
    } // update cptr


    cptr[columns] = cindex.length; // return sparse matrix

    return new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });
  };

  return algorithm02;
}

exports.name = 'algorithm02';
exports.factory = factory;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var array = __webpack_require__(2);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  /**
   * Calculate the size of a matrix or scalar.
   *
   * Syntax:
   *
   *     math.size(x)
   *
   * Examples:
   *
   *     math.size(2.3)                  // returns []
   *     math.size('hello world')        // returns [11]
   *
   *     const A = [[1, 2, 3], [4, 5, 6]]
   *     math.size(A)                    // returns [2, 3]
   *     math.size(math.range(1,6))      // returns [5]
   *
   * See also:
   *
   *     resize, squeeze, subset
   *
   * @param {boolean | number | Complex | Unit | string | Array | Matrix} x  A matrix
   * @return {Array | Matrix} A vector with size of `x`.
   */

  var size = typed('size', {
    'Matrix': function Matrix(x) {
      // TODO: return the same matrix type as the input
      return matrix(x.size());
    },
    'Array': array.size,
    'string': function string(x) {
      return config.matrix === 'Array' ? [x.length] : matrix([x.length]);
    },
    'number | Complex | BigNumber | Unit | boolean | null': function numberComplexBigNumberUnitBooleanNull(x) {
      // scalar
      return config.matrix === 'Array' ? [] : matrix([]);
    }
  });
  size.toTex = undefined; // use default template

  return size;
}

exports.name = 'size';
exports.factory = factory;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Iterates over SparseMatrix A and SparseMatrix B items (zero and nonzero) and invokes the callback function f(Aij, Bij).
   * Callback function invoked MxN times.
   *
   * C(i,j) = f(Aij, Bij)
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */

  var algorithm07 = function algorithm07(a, b, callback) {
    // sparse matrix arrays
    var asize = a._size;
    var adt = a._datatype; // sparse matrix arrays

    var bsize = b._size;
    var bdt = b._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // vars


    var i, j; // result arrays

    var cdata = []; // initialize c

    for (i = 0; i < rows; i++) {
      cdata[i] = [];
    } // matrix


    var c = new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    }); // workspaces

    var xa = [];
    var xb = []; // marks indicating we have a value in x for a given column

    var wa = [];
    var wb = []; // loop columns

    for (j = 0; j < columns; j++) {
      // columns mark
      var mark = j + 1; // scatter the values of A(:,j) into workspace

      _scatter(a, j, wa, xa, mark); // scatter the values of B(:,j) into workspace


      _scatter(b, j, wb, xb, mark); // loop rows


      for (i = 0; i < rows; i++) {
        // matrix values @ i,j
        var va = wa[i] === mark ? xa[i] : zero;
        var vb = wb[i] === mark ? xb[i] : zero; // invoke callback

        cdata[i][j] = cf(va, vb);
      }
    } // return sparse matrix


    return c;
  };

  function _scatter(m, j, w, x, mark) {
    // a arrays
    var values = m._values;
    var index = m._index;
    var ptr = m._ptr; // loop values in column j

    for (var k = ptr[j], k1 = ptr[j + 1]; k < k1; k++) {
      // row
      var i = index[k]; // update workspace

      w[i] = mark;
      x[i] = values[k];
    }
  }

  return algorithm07;
}

exports.name = 'algorithm07';
exports.factory = factory;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var naturalSort = __webpack_require__(288);

function factory(type, config, load, typed) {
  var getTypeOf = load(__webpack_require__(26));
  var compare = load(__webpack_require__(55));
  var compareBooleans = compare.signatures['boolean,boolean'];
  /**
   * Compare two values of any type in a deterministic, natural way.
   *
   * For numeric values, the function works the same as `math.compare`.
   * For types of values that can't be compared mathematically,
   * the function compares in a natural way.
   *
   * For numeric values, x and y are considered equal when the relative
   * difference between x and y is smaller than the configured epsilon.
   * The function cannot be used to compare values smaller than
   * approximately 2.22e-16.
   *
   * For Complex numbers, first the real parts are compared. If equal,
   * the imaginary parts are compared.
   *
   * Strings are compared with a natural sorting algorithm, which
   * orders strings in a "logic" way following some heuristics.
   * This differs from the function `compare`, which converts the string
   * into a numeric value and compares that. The function `compareText`
   * on the other hand compares text lexically.
   *
   * Arrays and Matrices are compared value by value until there is an
   * unequal pair of values encountered. Objects are compared by sorted
   * keys until the keys or their values are unequal.
   *
   * Syntax:
   *
   *    math.compareNatural(x, y)
   *
   * Examples:
   *
   *    math.compareNatural(6, 1)              // returns 1
   *    math.compareNatural(2, 3)              // returns -1
   *    math.compareNatural(7, 7)              // returns 0
   *
   *    math.compareNatural('10', '2')         // returns 1
   *    math.compareText('10', '2')            // returns -1
   *    math.compare('10', '2')                // returns 1
   *
   *    math.compareNatural('Answer: 10', 'Answer: 2') // returns 1
   *    math.compareText('Answer: 10', 'Answer: 2')    // returns -1
   *    math.compare('Answer: 10', 'Answer: 2')
   *        // Error: Cannot convert "Answer: 10" to a number
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('40 mm')
   *    math.compareNatural(a, b)              // returns 1
   *
   *    const c = math.complex('2 + 3i')
   *    const d = math.complex('2 + 4i')
   *    math.compareNatural(c, d)              // returns -1
   *
   *    math.compareNatural([1, 2, 4], [1, 2, 3]) // returns 1
   *    math.compareNatural([1, 2, 3], [1, 2])    // returns 1
   *    math.compareNatural([1, 5], [1, 2, 3])    // returns 1
   *    math.compareNatural([1, 2], [1, 2])       // returns 0
   *
   *    math.compareNatural({a: 2}, {a: 4})       // returns -1
   *
   * See also:
   *
   *    compare, compareText
   *
   * @param  {*} x First value to compare
   * @param  {*} y Second value to compare
   * @return {number} Returns the result of the comparison:
   *                  1 when x > y, -1 when x < y, and 0 when x == y.
   */

  var compareNatural = typed('compareNatural', {
    'any, any': function anyAny(x, y) {
      var typeX = getTypeOf(x);
      var typeY = getTypeOf(y);
      var c; // numeric types

      if ((typeX === 'number' || typeX === 'BigNumber' || typeX === 'Fraction') && (typeY === 'number' || typeY === 'BigNumber' || typeY === 'Fraction')) {
        c = compare(x, y);

        if (c.toString() !== '0') {
          // c can be number, BigNumber, or Fraction
          return c > 0 ? 1 : -1; // return a number
        } else {
          return naturalSort(typeX, typeY);
        }
      } // matrix types


      if (typeX === 'Array' || typeX === 'Matrix' || typeY === 'Array' || typeY === 'Matrix') {
        c = compareMatricesAndArrays(x, y);

        if (c !== 0) {
          return c;
        } else {
          return naturalSort(typeX, typeY);
        }
      } // in case of different types, order by name of type, i.e. 'BigNumber' < 'Complex'


      if (typeX !== typeY) {
        return naturalSort(typeX, typeY);
      }

      if (typeX === 'Complex') {
        return compareComplexNumbers(x, y);
      }

      if (typeX === 'Unit') {
        if (x.equalBase(y)) {
          return compareNatural(x.value, y.value);
        } // compare by units


        return compareArrays(x.formatUnits(), y.formatUnits());
      }

      if (typeX === 'boolean') {
        return compareBooleans(x, y);
      }

      if (typeX === 'string') {
        return naturalSort(x, y);
      }

      if (typeX === 'Object') {
        return compareObjects(x, y);
      }

      if (typeX === 'null') {
        return 0;
      }

      if (typeX === 'undefined') {
        return 0;
      } // this should not occur...


      throw new TypeError('Unsupported type of value "' + typeX + '"');
    }
  });
  compareNatural.toTex = undefined; // use default template

  /**
   * Compare mixed matrix/array types, by converting to same-shaped array.
   * This comparator is non-deterministic regarding input types.
   * @param {Array | SparseMatrix | DenseMatrix | *} x
   * @param {Array | SparseMatrix | DenseMatrix | *} y
   * @returns {number} Returns the comparison result: -1, 0, or 1
   */

  function compareMatricesAndArrays(x, y) {
    if (type.isSparseMatrix(x) && type.isSparseMatrix(y)) {
      return compareArrays(x.toJSON().values, y.toJSON().values);
    }

    if (type.isSparseMatrix(x)) {
      // note: convert to array is expensive
      return compareMatricesAndArrays(x.toArray(), y);
    }

    if (type.isSparseMatrix(y)) {
      // note: convert to array is expensive
      return compareMatricesAndArrays(x, y.toArray());
    } // convert DenseArray into Array


    if (type.isDenseMatrix(x)) {
      return compareMatricesAndArrays(x.toJSON().data, y);
    }

    if (type.isDenseMatrix(y)) {
      return compareMatricesAndArrays(x, y.toJSON().data);
    } // convert scalars to array


    if (!Array.isArray(x)) {
      return compareMatricesAndArrays([x], y);
    }

    if (!Array.isArray(y)) {
      return compareMatricesAndArrays(x, [y]);
    }

    return compareArrays(x, y);
  }
  /**
   * Compare two Arrays
   *
   * - First, compares value by value
   * - Next, if all corresponding values are equal,
   *   look at the length: longest array will be considered largest
   *
   * @param {Array} x
   * @param {Array} y
   * @returns {number} Returns the comparison result: -1, 0, or 1
   */


  function compareArrays(x, y) {
    // compare each value
    for (var i = 0, ii = Math.min(x.length, y.length); i < ii; i++) {
      var v = compareNatural(x[i], y[i]);

      if (v !== 0) {
        return v;
      }
    } // compare the size of the arrays


    if (x.length > y.length) {
      return 1;
    }

    if (x.length < y.length) {
      return -1;
    } // both Arrays have equal size and content


    return 0;
  }
  /**
   * Compare two objects
   *
   * - First, compare sorted property names
   * - Next, compare the property values
   *
   * @param {Object} x
   * @param {Object} y
   * @returns {number} Returns the comparison result: -1, 0, or 1
   */


  function compareObjects(x, y) {
    var keysX = Object.keys(x);
    var keysY = Object.keys(y); // compare keys

    keysX.sort(naturalSort);
    keysY.sort(naturalSort);
    var c = compareArrays(keysX, keysY);

    if (c !== 0) {
      return c;
    } // compare values


    for (var i = 0; i < keysX.length; i++) {
      var v = compareNatural(x[keysX[i]], y[keysY[i]]);

      if (v !== 0) {
        return v;
      }
    }

    return 0;
  }

  return compareNatural;
}
/**
 * Compare two complex numbers, `x` and `y`:
 *
 * - First, compare the real values of `x` and `y`
 * - If equal, compare the imaginary values of `x` and `y`
 *
 * @params {Complex} x
 * @params {Complex} y
 * @returns {number} Returns the comparison result: -1, 0, or 1
 */


function compareComplexNumbers(x, y) {
  if (x.re > y.re) {
    return 1;
  }

  if (x.re < y.re) {
    return -1;
  }

  if (x.im > y.im) {
    return 1;
  }

  if (x.im < y.im) {
    return -1;
  }

  return 0;
}

exports.name = 'compareNatural';
exports.factory = factory;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.array = __webpack_require__(2);
exports['boolean'] = __webpack_require__(185);
exports['function'] = __webpack_require__(36);
exports.number = __webpack_require__(3);
exports.object = __webpack_require__(5);
exports.string = __webpack_require__(9);
exports.emitter = __webpack_require__(104);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Compares two BigNumbers.
 * @param {BigNumber} x       First value to compare
 * @param {BigNumber} y       Second value to compare
 * @param {number} [epsilon]  The maximum relative difference between x and y
 *                            If epsilon is undefined or null, the function will
 *                            test whether x and y are exactly equal.
 * @return {boolean} whether the two numbers are nearly equal
 */

module.exports = function nearlyEqual(x, y, epsilon) {
  // if epsilon is null or undefined, test whether x and y are exactly equal
  if (epsilon === null || epsilon === undefined) {
    return x.eq(y);
  } // use "==" operator, handles infinities


  if (x.eq(y)) {
    return true;
  } // NaN


  if (x.isNaN() || y.isNaN()) {
    return false;
  } // at this point x and y should be finite


  if (x.isFinite() && y.isFinite()) {
    // check numbers are very close, needed when comparing numbers near zero
    var diff = x.minus(y).abs();

    if (diff.isZero()) {
      return true;
    } else {
      // use relative error
      var max = x.constructor.max(x.abs(), y.abs());
      return diff.lte(max.times(epsilon));
    }
  } // Infinite and Number or negative Infinite and positive Infinite cases


  return false;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm07 = load(__webpack_require__(29));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));

  var latex = __webpack_require__(4);
  /**
   * Test whether value x is larger than y.
   *
   * The function returns true when x is larger than y and the relative
   * difference between x and y is larger than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.larger(x, y)
   *
   * Examples:
   *
   *    math.larger(2, 3)             // returns false
   *    math.larger(5, 2 + 2)         // returns true
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('2 inch')
   *    math.larger(a, b)             // returns false
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, largerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is larger than y, else returns false
   */


  var larger = typed('larger', {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x > y;
    },
    'number, number': function numberNumber(x, y) {
      return x > y && !nearlyEqual(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.gt(y) && !bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.compare(y) === 1;
    },
    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }

      return larger(x.value, y.value);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, larger);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, larger, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, larger, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, larger);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return larger(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return larger(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return larger(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, larger, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, larger, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, larger, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, larger, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, larger, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, larger, true).valueOf();
    }
  });
  larger.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['larger'], "${args[1]}\\right)")
  };
  return larger;
}

exports.name = 'larger';
exports.factory = factory;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

var number = __webpack_require__(3);

function factory(type, config, load, typed) {
  /**
   * Test whether a value is an integer number.
   * The function supports `number`, `BigNumber`, and `Fraction`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isInteger(x)
   *
   * Examples:
   *
   *    math.isInteger(2)                     // returns true
   *    math.isInteger(0)                     // returns true
   *    math.isInteger(0.5)                   // returns false
   *    math.isInteger(math.bignumber(500))   // returns true
   *    math.isInteger(math.fraction(4))      // returns true
   *    math.isInteger('3')                   // returns true
   *    math.isInteger([3, 0.5, -2])          // returns [true, false, true]
   *    math.isInteger(math.complex('2-4i')   // throws an error
   *
   * See also:
   *
   *    isNumeric, isPositive, isNegative, isZero
   *
   * @param {number | BigNumber | Fraction | Array | Matrix} x   Value to be tested
   * @return {boolean}  Returns true when `x` contains a numeric, integer value.
   *                    Throws an error in case of an unknown data type.
   */
  var isInteger = typed('isInteger', {
    'number': number.isInteger,
    // TODO: what to do with isInteger(add(0.1, 0.2))  ?
    'BigNumber': function BigNumber(x) {
      return x.isInt();
    },
    'Fraction': function Fraction(x) {
      return x.d === 1 && isFinite(x.n);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, isInteger);
    }
  });
  return isInteger;
}

exports.name = 'isInteger';
exports.factory = factory;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMatrix = __webpack_require__(56);
/**
 * Test whether a value is a collection: an Array or Matrix
 * @param {*} x
 * @returns {boolean} isCollection
 */


module.exports = function isCollection(x) {
  return Array.isArray(x) || isMatrix(x);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // function utils

/**
 * Memoize a given function by caching the computed result.
 * The cache of a memoized function can be cleared by deleting the `cache`
 * property of the function.
 *
 * @param {function} fn                     The function to be memoized.
 *                                          Must be a pure function.
 * @param {function(args: Array)} [hasher]  A custom hash builder.
 *                                          Is JSON.stringify by default.
 * @return {function}                       Returns the memoized function
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.memoize = function (fn, hasher) {
  return function memoize() {
    if (_typeof(memoize.cache) !== 'object') {
      memoize.cache = {};
    }

    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    var hash = hasher ? hasher(args) : JSON.stringify(args);

    if (!(hash in memoize.cache)) {
      memoize.cache[hash] = fn.apply(fn, args);
    }

    return memoize.cache[hash];
  };
};
/**
 * Find the maximum number of arguments expected by a typed function.
 * @param {function} fn   A typed function
 * @return {number} Returns the maximum number of expected arguments.
 *                  Returns -1 when no signatures where found on the function.
 */


exports.maxArgumentCount = function (fn) {
  return Object.keys(fn.signatures || {}).reduce(function (args, signature) {
    var count = (signature.match(/,/g) || []).length + 1;
    return Math.max(args, count);
  }, -1);
};
/**
 * Call a typed function with the
 * @param {function} fn   A function or typed function
 * @return {number} Returns the maximum number of expected arguments.
 *                  Returns -1 when no signatures where found on the function.
 */


exports.callWithRightArgumentCount = function (fn, args, argCount) {
  return Object.keys(fn.signatures || {}).reduce(function (args, signature) {
    var count = (signature.match(/,/g) || []).length + 1;
    return Math.max(args, count);
  }, -1);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Iterates over SparseMatrix nonzero items and invokes the callback function f(Dij, Sij).
   * Callback function invoked NNZ times (number of nonzero items in SparseMatrix).
   *
   *
   *          ┌  f(Dij, Sij)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  Dij          ; otherwise
   *
   *
   * @param {Matrix}   denseMatrix       The DenseMatrix instance (D)
   * @param {Matrix}   sparseMatrix      The SparseMatrix instance (S)
   * @param {Function} callback          The f(Dij,Sij) operation to invoke, where Dij = DenseMatrix(i,j) and Sij = SparseMatrix(i,j)
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(Sij,Dij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97477571
   */

  var algorithm01 = function algorithm01(denseMatrix, sparseMatrix, callback, inverse) {
    // dense matrix arrays
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype; // sparse matrix arrays

    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // sparse matrix cannot be a Pattern matrix


    if (!bvalues) {
      throw new Error('Cannot perform operation on Dense Matrix and Pattern Sparse Matrix');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // process data types

    var dt = typeof adt === 'string' && adt === bdt ? adt : undefined; // callback function

    var cf = dt ? typed.find(callback, [dt, dt]) : callback; // vars

    var i, j; // result (DenseMatrix)

    var cdata = []; // initialize c

    for (i = 0; i < rows; i++) {
      cdata[i] = [];
    } // workspace


    var x = []; // marks indicating we have a value in x for a given column

    var w = []; // loop columns in b

    for (j = 0; j < columns; j++) {
      // column mark
      var mark = j + 1; // values in column j

      for (var k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = bindex[k]; // update workspace

        x[i] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]); // mark i as updated

        w[i] = mark;
      } // loop rows


      for (i = 0; i < rows; i++) {
        // check row is in workspace
        if (w[i] === mark) {
          // c[i][j] was already calculated
          cdata[i][j] = x[i];
        } else {
          // item does not exist in S
          cdata[i][j] = adata[i][j];
        }
      }
    } // return dense matrix


    return new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };

  return algorithm01;
}

exports.name = 'algorithm01';
exports.factory = factory;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm07 = load(__webpack_require__(29));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));

  var latex = __webpack_require__(4);
  /**
   * Test whether value x is smaller than y.
   *
   * The function returns true when x is smaller than y and the relative
   * difference between x and y is smaller than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.smaller(x, y)
   *
   * Examples:
   *
   *    math.smaller(2, 3)            // returns true
   *    math.smaller(5, 2 * 2)        // returns false
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('2 inch')
   *    math.smaller(a, b)            // returns true
   *
   * See also:
   *
   *    equal, unequal, smallerEq, smaller, smallerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is smaller than y, else returns false
   */


  var smaller = typed('smaller', {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x < y;
    },
    'number, number': function numberNumber(x, y) {
      return x < y && !nearlyEqual(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.lt(y) && !bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.compare(y) === -1;
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      throw new TypeError('No ordering relation is defined for complex numbers');
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }

      return smaller(x.value, y.value);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, smaller);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, smaller, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, smaller, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, smaller);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return smaller(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return smaller(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return smaller(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, smaller, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, smaller, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, smaller, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, smaller, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, smaller, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, smaller, true).valueOf();
    }
  });
  smaller.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['smaller'], "${args[1]}\\right)")
  };
  return smaller;
}

exports.name = 'smaller';
exports.factory = factory;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  var latex = __webpack_require__(4);
  /**
   * Inverse the sign of a value, apply a unary minus operation.
   *
   * For matrices, the function is evaluated element wise. Boolean values and
   * strings will be converted to a number. For complex numbers, both real and
   * complex value are inverted.
   *
   * Syntax:
   *
   *    math.unaryMinus(x)
   *
   * Examples:
   *
   *    math.unaryMinus(3.5)      // returns -3.5
   *    math.unaryMinus(-4.2)     // returns 4.2
   *
   * See also:
   *
   *    add, subtract, unaryPlus
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x Number to be inverted.
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} Returns the value with inverted sign.
   */


  var unaryMinus = typed('unaryMinus', {
    'number': function number(x) {
      return -x;
    },
    'Complex': function Complex(x) {
      return x.neg();
    },
    'BigNumber': function BigNumber(x) {
      return x.neg();
    },
    'Fraction': function Fraction(x) {
      return x.neg();
    },
    'Unit': function Unit(x) {
      var res = x.clone();
      res.value = unaryMinus(x.value);
      return res;
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since unaryMinus(0) = 0
      return deepMap(x, unaryMinus, true);
    } // TODO: add support for string

  });
  unaryMinus.toTex = {
    1: "".concat(latex.operators['unaryMinus'], "\\left(${args[0]}\\right)")
  };
  return unaryMinus;
}

exports.name = 'unaryMinus';
exports.factory = factory;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var getType = load(__webpack_require__(26));
  /**
   * Improve error messages for statistics functions. Errors are typically
   * thrown in an internally used function like larger, causing the error
   * not to mention the function (like max) which is actually used by the user.
   *
   * @param {Error} err
   * @param {String} fnName
   * @param {*} [value]
   * @return {Error}
   */

  return function improveErrorMessage(err, fnName, value) {
    // TODO: add information with the index (also needs transform in expression parser)
    var details;

    if (String(err).indexOf('Unexpected type') !== -1) {
      details = arguments.length > 2 ? ' (type: ' + getType(value) + ', value: ' + JSON.stringify(value) + ')' : ' (type: ' + err.data.actual + ')';
      return new TypeError('Cannot calculate ' + fnName + ', unexpected type of argument' + details);
    }

    if (String(err).indexOf('complex numbers') !== -1) {
      details = arguments.length > 2 ? ' (type: ' + getType(value) + ', value: ' + JSON.stringify(value) + ')' : '';
      return new TypeError('Cannot calculate ' + fnName + ', no ordering relation is defined for complex numbers' + details);
    }

    return err;
  };
}

exports.factory = factory;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Iterates over SparseMatrix S nonzero items and invokes the callback function f(Sij, b).
   * Callback function invoked NZ times (number of nonzero items in S).
   *
   *
   *          ┌  f(Sij, b)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  b          ; otherwise
   *
   *
   * @param {Matrix}   s                 The SparseMatrix instance (S)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Sij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97626813
   */

  var algorithm10 = function algorithm10(s, b, callback, inverse) {
    // sparse matrix arrays
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype; // sparse matrix cannot be a Pattern matrix

    if (!avalues) {
      throw new Error('Cannot perform operation on Pattern Sparse Matrix and Scalar value');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string') {
      // datatype
      dt = adt; // convert b to the same datatype

      b = typed.convert(b, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cdata = []; // matrix

    var c = new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    }); // workspaces

    var x = []; // marks indicating we have a value in x for a given column

    var w = []; // loop columns

    for (var j = 0; j < columns; j++) {
      // columns mark
      var mark = j + 1; // values in j

      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        var r = aindex[k]; // update workspace

        x[r] = avalues[k];
        w[r] = mark;
      } // loop rows


      for (var i = 0; i < rows; i++) {
        // initialize C on first column
        if (j === 0) {
          // create row array
          cdata[i] = [];
        } // check sparse matrix has a value @ i,j


        if (w[i] === mark) {
          // invoke callback, update C
          cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b);
        } else {
          // dense matrix value @ i, j
          cdata[i][j] = b;
        }
      }
    } // return sparse matrix


    return c;
  };

  return algorithm10;
}

exports.name = 'algorithm10';
exports.factory = factory;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(3).isInteger;

var size = __webpack_require__(2).size;

function factory(type, config, load, typed) {
  var latex = __webpack_require__(4);

  var identity = load(__webpack_require__(50));
  var multiply = load(__webpack_require__(10));
  var matrix = load(__webpack_require__(0));
  var fraction = load(__webpack_require__(83));
  var number = load(__webpack_require__(64));
  /**
   * Calculates the power of x to y, `x ^ y`.
   * Matrix exponentiation is supported for square matrices `x`, and positive
   * integer exponents `y`.
   *
   * For cubic roots of negative numbers, the function returns the principal
   * root by default. In order to let the function return the real root,
   * math.js can be configured with `math.config({predictable: true})`.
   * To retrieve all cubic roots of a value, use `math.cbrt(x, true)`.
   *
   * Syntax:
   *
   *    math.pow(x, y)
   *
   * Examples:
   *
   *    math.pow(2, 3)               // returns number 8
   *
   *    const a = math.complex(2, 3)
   *    math.pow(a, 2)                // returns Complex -5 + 12i
   *
   *    const b = [[1, 2], [4, 3]]
   *    math.pow(b, 2)               // returns Array [[9, 8], [16, 17]]
   *
   * See also:
   *
   *    multiply, sqrt, cbrt, nthRoot
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x  The base
   * @param  {number | BigNumber | Complex} y                          The exponent
   * @return {number | BigNumber | Complex | Array | Matrix} The value of `x` to the power `y`
   */

  var pow = typed('pow', {
    'number, number': _pow,
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.pow(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      if (y.isInteger() || x >= 0 || config.predictable) {
        return x.pow(y);
      } else {
        return new type.Complex(x.toNumber(), 0).pow(y.toNumber(), 0);
      }
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      if (y.d !== 1) {
        if (config.predictable) {
          throw new Error('Function pow does not support non-integer exponents for fractions.');
        } else {
          return _pow(x.valueOf(), y.valueOf());
        }
      } else {
        return x.pow(y);
      }
    },
    'Array, number': _powArray,
    'Array, BigNumber': function ArrayBigNumber(x, y) {
      return _powArray(x, y.toNumber());
    },
    'Matrix, number': _powMatrix,
    'Matrix, BigNumber': function MatrixBigNumber(x, y) {
      return _powMatrix(x, y.toNumber());
    },
    'Unit, number | BigNumber': function UnitNumberBigNumber(x, y) {
      return x.pow(y);
    }
  });
  /**
   * Calculates the power of x to y, x^y, for two numbers.
   * @param {number} x
   * @param {number} y
   * @return {number | Complex} res
   * @private
   */

  function _pow(x, y) {
    // Alternatively could define a 'realmode' config option or something, but
    // 'predictable' will work for now
    if (config.predictable && !isInteger(y) && x < 0) {
      // Check to see if y can be represented as a fraction
      try {
        var yFrac = fraction(y);
        var yNum = number(yFrac);

        if (y === yNum || Math.abs((y - yNum) / y) < 1e-14) {
          if (yFrac.d % 2 === 1) {
            return (yFrac.n % 2 === 0 ? 1 : -1) * Math.pow(-x, y);
          }
        }
      } catch (ex) {} // fraction() throws an error if y is Infinity, etc.
      // Unable to express y as a fraction, so continue on

    } // x^Infinity === 0 if -1 < x < 1
    // A real number 0 is returned instead of complex(0)


    if (x * x < 1 && y === Infinity || x * x > 1 && y === -Infinity) {
      return 0;
    } // **for predictable mode** x^Infinity === NaN if x < -1
    // N.B. this behavour is different from `Math.pow` which gives
    // (-2)^Infinity === Infinity


    if (config.predictable && (x < -1 && y === Infinity || x > -1 && x < 0 && y === -Infinity)) {
      return NaN;
    }

    if (isInteger(y) || x >= 0 || config.predictable) {
      return Math.pow(x, y);
    } else {
      return new type.Complex(x, 0).pow(y, 0);
    }
  }
  /**
   * Calculate the power of a 2d array
   * @param {Array} x     must be a 2 dimensional, square matrix
   * @param {number} y    a positive, integer value
   * @returns {Array}
   * @private
   */


  function _powArray(x, y) {
    if (!isInteger(y) || y < 0) {
      throw new TypeError('For A^b, b must be a positive integer (value is ' + y + ')');
    } // verify that A is a 2 dimensional square matrix


    var s = size(x);

    if (s.length !== 2) {
      throw new Error('For A^b, A must be 2 dimensional (A has ' + s.length + ' dimensions)');
    }

    if (s[0] !== s[1]) {
      throw new Error('For A^b, A must be square (size is ' + s[0] + 'x' + s[1] + ')');
    }

    var res = identity(s[0]).valueOf();
    var px = x;

    while (y >= 1) {
      if ((y & 1) === 1) {
        res = multiply(px, res);
      }

      y >>= 1;
      px = multiply(px, px);
    }

    return res;
  }
  /**
   * Calculate the power of a 2d matrix
   * @param {Matrix} x     must be a 2 dimensional, square matrix
   * @param {number} y    a positive, integer value
   * @returns {Matrix}
   * @private
   */


  function _powMatrix(x, y) {
    return matrix(_powArray(x.valueOf(), y));
  }

  pow.toTex = {
    2: "\\left(${args[0]}\\right)".concat(latex.operators['pow'], "{${args[1]}}")
  };
  return pow;
}

exports.name = 'pow';
exports.factory = factory;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(3).isInteger;

var resize = __webpack_require__(2).resize;

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  /**
   * Create a matrix filled with zeros. The created matrix can have one or
   * multiple dimensions.
   *
   * Syntax:
   *
   *    math.zeros(m)
   *    math.zeros(m, format)
   *    math.zeros(m, n)
   *    math.zeros(m, n, format)
   *    math.zeros([m, n])
   *    math.zeros([m, n], format)
   *
   * Examples:
   *
   *    math.zeros(3)                  // returns [0, 0, 0]
   *    math.zeros(3, 2)               // returns [[0, 0], [0, 0], [0, 0]]
   *    math.zeros(3, 'dense')         // returns [0, 0, 0]
   *
   *    const A = [[1, 2, 3], [4, 5, 6]]
   *    math.zeros(math.size(A))       // returns [[0, 0, 0], [0, 0, 0]]
   *
   * See also:
   *
   *    ones, identity, size, range
   *
   * @param {...number | Array} size    The size of each dimension of the matrix
   * @param {string} [format]           The Matrix storage format
   *
   * @return {Array | Matrix}           A matrix filled with zeros
   */

  var zeros = typed('zeros', {
    '': function _() {
      return config.matrix === 'Array' ? _zeros([]) : _zeros([], 'default');
    },
    // math.zeros(m, n, p, ..., format)
    // TODO: more accurate signature '...number | BigNumber, string' as soon as typed-function supports this
    '...number | BigNumber | string': function numberBigNumberString(size) {
      var last = size[size.length - 1];

      if (typeof last === 'string') {
        var format = size.pop();
        return _zeros(size, format);
      } else if (config.matrix === 'Array') {
        return _zeros(size);
      } else {
        return _zeros(size, 'default');
      }
    },
    'Array': _zeros,
    'Matrix': function Matrix(size) {
      var format = size.storage();
      return _zeros(size.valueOf(), format);
    },
    'Array | Matrix, string': function ArrayMatrixString(size, format) {
      return _zeros(size.valueOf(), format);
    }
  });
  zeros.toTex = undefined; // use default template

  return zeros;
  /**
   * Create an Array or Matrix with zeros
   * @param {Array} size
   * @param {string} [format='default']
   * @return {Array | Matrix}
   * @private
   */

  function _zeros(size, format) {
    var hasBigNumbers = _normalize(size);

    var defaultValue = hasBigNumbers ? new type.BigNumber(0) : 0;

    _validate(size);

    if (format) {
      // return a matrix
      var m = matrix(format);

      if (size.length > 0) {
        return m.resize(size, defaultValue);
      }

      return m;
    } else {
      // return an Array
      var arr = [];

      if (size.length > 0) {
        return resize(arr, size, defaultValue);
      }

      return arr;
    }
  } // replace BigNumbers with numbers, returns true if size contained BigNumbers


  function _normalize(size) {
    var hasBigNumbers = false;
    size.forEach(function (value, index, arr) {
      if (type.isBigNumber(value)) {
        hasBigNumbers = true;
        arr[index] = value.toNumber();
      }
    });
    return hasBigNumbers;
  } // validate arguments


  function _validate(size) {
    size.forEach(function (value) {
      if (typeof value !== 'number' || !isInteger(value) || value < 0) {
        throw new Error('Parameters in function zeros must be positive integers');
      }
    });
  }
} // TODO: zeros contains almost the same code as ones. Reuse this?


exports.name = 'zeros';
exports.factory = factory;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ArgumentsError = __webpack_require__(57);

var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  var numeric = load(__webpack_require__(65));
  var AccessorNode = load(__webpack_require__(113));
  var ArrayNode = load(__webpack_require__(116));
  var AssignmentNode = load(__webpack_require__(117));
  var BlockNode = load(__webpack_require__(118));
  var ConditionalNode = load(__webpack_require__(119));
  var ConstantNode = load(__webpack_require__(58));
  var FunctionAssignmentNode = load(__webpack_require__(120));
  var IndexNode = load(__webpack_require__(121));
  var ObjectNode = load(__webpack_require__(122));
  var OperatorNode = load(__webpack_require__(59));
  var ParenthesisNode = load(__webpack_require__(68));
  var FunctionNode = load(__webpack_require__(69));
  var RangeNode = load(__webpack_require__(123));
  var RelationalNode = load(__webpack_require__(124));
  var SymbolNode = load(__webpack_require__(54));
  /**
   * Parse an expression. Returns a node tree, which can be evaluated by
   * invoking node.eval().
   *
   * Syntax:
   *
   *     parse(expr)
   *     parse(expr, options)
   *     parse([expr1, expr2, expr3, ...])
   *     parse([expr1, expr2, expr3, ...], options)
   *
   * Example:
   *
   *     const node = parse('sqrt(3^2 + 4^2)')
   *     node.compile(math).eval() // 5
   *
   *     let scope = {a:3, b:4}
   *     const node = parse('a * b') // 12
   *     const code = node.compile(math)
   *     code.eval(scope) // 12
   *     scope.a = 5
   *     code.eval(scope) // 20
   *
   *     const nodes = math.parse(['a = 3', 'b = 4', 'a * b'])
   *     nodes[2].compile(math).eval() // 12
   *
   * @param {string | string[] | Matrix} expr
   * @param {{nodes: Object<string, Node>}} [options]  Available options:
   *                                                   - `nodes` a set of custom nodes
   * @return {Node | Node[]} node
   * @throws {Error}
   */

  function parse(expr, options) {
    if (arguments.length !== 1 && arguments.length !== 2) {
      throw new ArgumentsError('parse', arguments.length, 1, 2);
    } // pass extra nodes


    var extraNodes = options && options.nodes ? options.nodes : {};

    if (typeof expr === 'string') {
      // parse a single expression
      return parseStart(expr, extraNodes);
    } else if (Array.isArray(expr) || expr instanceof type.Matrix) {
      // parse an array or matrix with expressions
      return deepMap(expr, function (elem) {
        if (typeof elem !== 'string') throw new TypeError('String expected');
        return parseStart(elem, extraNodes);
      });
    } else {
      // oops
      throw new TypeError('String or matrix expected');
    }
  } // token types enumeration


  var TOKENTYPE = {
    NULL: 0,
    DELIMITER: 1,
    NUMBER: 2,
    SYMBOL: 3,
    UNKNOWN: 4 // map with all delimiters

  };
  var DELIMITERS = {
    ',': true,
    '(': true,
    ')': true,
    '[': true,
    ']': true,
    '{': true,
    '}': true,
    '"': true,
    '\'': true,
    ';': true,
    '+': true,
    '-': true,
    '*': true,
    '.*': true,
    '/': true,
    './': true,
    '%': true,
    '^': true,
    '.^': true,
    '~': true,
    '!': true,
    '&': true,
    '|': true,
    '^|': true,
    '=': true,
    ':': true,
    '?': true,
    '==': true,
    '!=': true,
    '<': true,
    '>': true,
    '<=': true,
    '>=': true,
    '<<': true,
    '>>': true,
    '>>>': true // map with all named delimiters

  };
  var NAMED_DELIMITERS = {
    'mod': true,
    'to': true,
    'in': true,
    'and': true,
    'xor': true,
    'or': true,
    'not': true
  };
  var CONSTANTS = {
    'true': true,
    'false': false,
    'null': null,
    'undefined': undefined
  };
  var NUMERIC_CONSTANTS = ['NaN', 'Infinity'];

  function initialState() {
    return {
      extraNodes: {},
      // current extra nodes, must be careful not to mutate
      expression: '',
      // current expression
      comment: '',
      // last parsed comment
      index: 0,
      // current index in expr
      token: '',
      // current token
      tokenType: TOKENTYPE.NULL,
      // type of the token
      nestingLevel: 0,
      // level of nesting inside parameters, used to ignore newline characters
      conditionalLevel: null // when a conditional is being parsed, the level of the conditional is stored here

    };
  }
  /**
   * View upto `length` characters of the expression starting at the current character.
   *
   * @param {State} state
   * @param {number} [length=1] Number of characters to view
   * @returns {string}
   * @private
   */


  function currentString(state, length) {
    return state.expression.substr(state.index, length);
  }
  /**
   * View the current character. Returns '' if end of expression is reached.
   *
   * @param {State} state
   * @returns {string}
   * @private
   */


  function currentCharacter(state) {
    return currentString(state, 1);
  }
  /**
   * Get the next character from the expression.
   * The character is stored into the char c. If the end of the expression is
   * reached, the function puts an empty string in c.
   * @private
   */


  function next(state) {
    state.index++;
  }
  /**
   * Preview the previous character from the expression.
   * @return {string} cNext
   * @private
   */


  function prevCharacter(state) {
    return state.expression.charAt(state.index - 1);
  }
  /**
   * Preview the next character from the expression.
   * @return {string} cNext
   * @private
   */


  function nextCharacter(state) {
    return state.expression.charAt(state.index + 1);
  }
  /**
   * Get next token in the current string expr.
   * The token and token type are available as token and tokenType
   * @private
   */


  function getToken(state) {
    state.tokenType = TOKENTYPE.NULL;
    state.token = '';
    state.comment = ''; // skip over whitespaces
    // space, tab, and newline when inside parameters

    while (parse.isWhitespace(currentCharacter(state), state.nestingLevel)) {
      next(state);
    } // skip comment


    if (currentCharacter(state) === '#') {
      while (currentCharacter(state) !== '\n' && currentCharacter(state) !== '') {
        state.comment += currentCharacter(state);
        next(state);
      }
    } // check for end of expression


    if (currentCharacter(state) === '') {
      // token is still empty
      state.tokenType = TOKENTYPE.DELIMITER;
      return;
    } // check for new line character


    if (currentCharacter(state) === '\n' && !state.nestingLevel) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = currentCharacter(state);
      next(state);
      return;
    }

    var c1 = currentCharacter(state);
    var c2 = currentString(state, 2);
    var c3 = currentString(state, 3);

    if (c3.length === 3 && DELIMITERS[c3]) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = c3;
      next(state);
      next(state);
      next(state);
      return;
    } // check for delimiters consisting of 2 characters


    if (c2.length === 2 && DELIMITERS[c2]) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = c2;
      next(state);
      next(state);
      return;
    } // check for delimiters consisting of 1 character


    if (DELIMITERS[c1]) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = c1;
      next(state);
      return;
    } // check for a number


    if (parse.isDigitDot(c1)) {
      state.tokenType = TOKENTYPE.NUMBER; // get number, can have a single dot

      if (currentCharacter(state) === '.') {
        state.token += currentCharacter(state);
        next(state);

        if (!parse.isDigit(currentCharacter(state))) {
          // this is no number, it is just a dot (can be dot notation)
          state.tokenType = TOKENTYPE.DELIMITER;
        }
      } else {
        while (parse.isDigit(currentCharacter(state))) {
          state.token += currentCharacter(state);
          next(state);
        }

        if (parse.isDecimalMark(currentCharacter(state), nextCharacter(state))) {
          state.token += currentCharacter(state);
          next(state);
        }
      }

      while (parse.isDigit(currentCharacter(state))) {
        state.token += currentCharacter(state);
        next(state);
      } // check for exponential notation like "2.3e-4", "1.23e50" or "2e+4"


      if (currentCharacter(state) === 'E' || currentCharacter(state) === 'e') {
        if (parse.isDigit(nextCharacter(state)) || nextCharacter(state) === '-' || nextCharacter(state) === '+') {
          state.token += currentCharacter(state);
          next(state);

          if (currentCharacter(state) === '+' || currentCharacter(state) === '-') {
            state.token += currentCharacter(state);
            next(state);
          } // Scientific notation MUST be followed by an exponent


          if (!parse.isDigit(currentCharacter(state))) {
            throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
          }

          while (parse.isDigit(currentCharacter(state))) {
            state.token += currentCharacter(state);
            next(state);
          }

          if (parse.isDecimalMark(currentCharacter(state), nextCharacter(state))) {
            throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
          }
        } else if (nextCharacter(state) === '.') {
          next(state);
          throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
        }
      }

      return;
    } // check for variables, functions, named operators


    if (parse.isAlpha(currentCharacter(state), prevCharacter(state), nextCharacter(state))) {
      while (parse.isAlpha(currentCharacter(state), prevCharacter(state), nextCharacter(state)) || parse.isDigit(currentCharacter(state))) {
        state.token += currentCharacter(state);
        next(state);
      }

      if (NAMED_DELIMITERS.hasOwnProperty(state.token)) {
        state.tokenType = TOKENTYPE.DELIMITER;
      } else {
        state.tokenType = TOKENTYPE.SYMBOL;
      }

      return;
    } // something unknown is found, wrong characters -> a syntax error


    state.tokenType = TOKENTYPE.UNKNOWN;

    while (currentCharacter(state) !== '') {
      state.token += currentCharacter(state);
      next(state);
    }

    throw createSyntaxError(state, 'Syntax error in part "' + state.token + '"');
  }
  /**
   * Get next token and skip newline tokens
   */


  function getTokenSkipNewline(state) {
    do {
      getToken(state);
    } while (state.token === '\n'); // eslint-disable-line no-unmodified-loop-condition

  }
  /**
   * Open parameters.
   * New line characters will be ignored until closeParams(state) is called
   */


  function openParams(state) {
    state.nestingLevel++;
  }
  /**
   * Close parameters.
   * New line characters will no longer be ignored
   */


  function closeParams(state) {
    state.nestingLevel--;
  }
  /**
   * Checks whether the current character `c` is a valid alpha character:
   *
   * - A latin letter (upper or lower case) Ascii: a-z, A-Z
   * - An underscore                        Ascii: _
   * - A dollar sign                        Ascii: $
   * - A latin letter with accents          Unicode: \u00C0 - \u02AF
   * - A greek letter                       Unicode: \u0370 - \u03FF
   * - A mathematical alphanumeric symbol   Unicode: \u{1D400} - \u{1D7FF} excluding invalid code points
   *
   * The previous and next characters are needed to determine whether
   * this character is part of a unicode surrogate pair.
   *
   * @param {string} c      Current character in the expression
   * @param {string} cPrev  Previous character
   * @param {string} cNext  Next character
   * @return {boolean}
   */


  parse.isAlpha = function isAlpha(c, cPrev, cNext) {
    return parse.isValidLatinOrGreek(c) || parse.isValidMathSymbol(c, cNext) || parse.isValidMathSymbol(cPrev, c);
  };
  /**
   * Test whether a character is a valid latin, greek, or letter-like character
   * @param {string} c
   * @return {boolean}
   */


  parse.isValidLatinOrGreek = function isValidLatinOrGreek(c) {
    return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(c);
  };
  /**
   * Test whether two given 16 bit characters form a surrogate pair of a
   * unicode math symbol.
   *
   * https://unicode-table.com/en/
   * https://www.wikiwand.com/en/Mathematical_operators_and_symbols_in_Unicode
   *
   * Note: In ES6 will be unicode aware:
   * https://stackoverflow.com/questions/280712/javascript-unicode-regexes
   * https://mathiasbynens.be/notes/es6-unicode-regex
   *
   * @param {string} high
   * @param {string} low
   * @return {boolean}
   */


  parse.isValidMathSymbol = function isValidMathSymbol(high, low) {
    return /^[\uD835]$/.test(high) && /^[\uDC00-\uDFFF]$/.test(low) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(low);
  };
  /**
   * Check whether given character c is a white space character: space, tab, or enter
   * @param {string} c
   * @param {number} nestingLevel
   * @return {boolean}
   */


  parse.isWhitespace = function isWhitespace(c, nestingLevel) {
    // TODO: also take '\r' carriage return as newline? Or does that give problems on mac?
    return c === ' ' || c === '\t' || c === '\n' && nestingLevel > 0;
  };
  /**
   * Test whether the character c is a decimal mark (dot).
   * This is the case when it's not the start of a delimiter '.*', './', or '.^'
   * @param {string} c
   * @param {string} cNext
   * @return {boolean}
   */


  parse.isDecimalMark = function isDecimalMark(c, cNext) {
    return c === '.' && cNext !== '/' && cNext !== '*' && cNext !== '^';
  };
  /**
   * checks if the given char c is a digit or dot
   * @param {string} c   a string with one character
   * @return {boolean}
   */


  parse.isDigitDot = function isDigitDot(c) {
    return c >= '0' && c <= '9' || c === '.';
  };
  /**
   * checks if the given char c is a digit
   * @param {string} c   a string with one character
   * @return {boolean}
   */


  parse.isDigit = function isDigit(c) {
    return c >= '0' && c <= '9';
  };
  /**
   * Start of the parse levels below, in order of precedence
   * @return {Node} node
   * @private
   */


  function parseStart(expression, extraNodes) {
    var state = initialState();

    _extends(state, {
      expression: expression,
      extraNodes: extraNodes
    });

    getToken(state);
    var node = parseBlock(state); // check for garbage at the end of the expression
    // an expression ends with a empty character '' and tokenType DELIMITER

    if (state.token !== '') {
      if (state.tokenType === TOKENTYPE.DELIMITER) {
        // user entered a not existing operator like "//"
        // TODO: give hints for aliases, for example with "<>" give as hint " did you mean !== ?"
        throw createError(state, 'Unexpected operator ' + state.token);
      } else {
        throw createSyntaxError(state, 'Unexpected part "' + state.token + '"');
      }
    }

    return node;
  }
  /**
   * Parse a block with expressions. Expressions can be separated by a newline
   * character '\n', or by a semicolon ';'. In case of a semicolon, no output
   * of the preceding line is returned.
   * @return {Node} node
   * @private
   */


  function parseBlock(state) {
    var node;
    var blocks = [];
    var visible;

    if (state.token !== '' && state.token !== '\n' && state.token !== ';') {
      node = parseAssignment(state);
      node.comment = state.comment;
    } // TODO: simplify this loop


    while (state.token === '\n' || state.token === ';') {
      // eslint-disable-line no-unmodified-loop-condition
      if (blocks.length === 0 && node) {
        visible = state.token !== ';';
        blocks.push({
          node: node,
          visible: visible
        });
      }

      getToken(state);

      if (state.token !== '\n' && state.token !== ';' && state.token !== '') {
        node = parseAssignment(state);
        node.comment = state.comment;
        visible = state.token !== ';';
        blocks.push({
          node: node,
          visible: visible
        });
      }
    }

    if (blocks.length > 0) {
      return new BlockNode(blocks);
    } else {
      if (!node) {
        node = new ConstantNode(undefined);
        node.comment = state.comment;
      }

      return node;
    }
  }
  /**
   * Assignment of a function or variable,
   * - can be a variable like 'a=2.3'
   * - or a updating an existing variable like 'matrix(2,3:5)=[6,7,8]'
   * - defining a function like 'f(x) = x^2'
   * @return {Node} node
   * @private
   */


  function parseAssignment(state) {
    var name, args, value, valid;
    var node = parseConditional(state);

    if (state.token === '=') {
      if (type.isSymbolNode(node)) {
        // parse a variable assignment like 'a = 2/3'
        name = node.name;
        getTokenSkipNewline(state);
        value = parseAssignment(state);
        return new AssignmentNode(new SymbolNode(name), value);
      } else if (type.isAccessorNode(node)) {
        // parse a matrix subset assignment like 'A[1,2] = 4'
        getTokenSkipNewline(state);
        value = parseAssignment(state);
        return new AssignmentNode(node.object, node.index, value);
      } else if (type.isFunctionNode(node) && type.isSymbolNode(node.fn)) {
        // parse function assignment like 'f(x) = x^2'
        valid = true;
        args = [];
        name = node.name;
        node.args.forEach(function (arg, index) {
          if (type.isSymbolNode(arg)) {
            args[index] = arg.name;
          } else {
            valid = false;
          }
        });

        if (valid) {
          getTokenSkipNewline(state);
          value = parseAssignment(state);
          return new FunctionAssignmentNode(name, args, value);
        }
      }

      throw createSyntaxError(state, 'Invalid left hand side of assignment operator =');
    }

    return node;
  }
  /**
   * conditional operation
   *
   *     condition ? truePart : falsePart
   *
   * Note: conditional operator is right-associative
   *
   * @return {Node} node
   * @private
   */


  function parseConditional(state) {
    var node = parseLogicalOr(state);

    while (state.token === '?') {
      // eslint-disable-line no-unmodified-loop-condition
      // set a conditional level, the range operator will be ignored as long
      // as conditionalLevel === state.nestingLevel.
      var prev = state.conditionalLevel;
      state.conditionalLevel = state.nestingLevel;
      getTokenSkipNewline(state);
      var condition = node;
      var trueExpr = parseAssignment(state);
      if (state.token !== ':') throw createSyntaxError(state, 'False part of conditional expression expected');
      state.conditionalLevel = null;
      getTokenSkipNewline(state);
      var falseExpr = parseAssignment(state); // Note: check for conditional operator again, right associativity

      node = new ConditionalNode(condition, trueExpr, falseExpr); // restore the previous conditional level

      state.conditionalLevel = prev;
    }

    return node;
  }
  /**
   * logical or, 'x or y'
   * @return {Node} node
   * @private
   */


  function parseLogicalOr(state) {
    var node = parseLogicalXor(state);

    while (state.token === 'or') {
      // eslint-disable-line no-unmodified-loop-condition
      getTokenSkipNewline(state);
      node = new OperatorNode('or', 'or', [node, parseLogicalXor(state)]);
    }

    return node;
  }
  /**
   * logical exclusive or, 'x xor y'
   * @return {Node} node
   * @private
   */


  function parseLogicalXor(state) {
    var node = parseLogicalAnd(state);

    while (state.token === 'xor') {
      // eslint-disable-line no-unmodified-loop-condition
      getTokenSkipNewline(state);
      node = new OperatorNode('xor', 'xor', [node, parseLogicalAnd(state)]);
    }

    return node;
  }
  /**
   * logical and, 'x and y'
   * @return {Node} node
   * @private
   */


  function parseLogicalAnd(state) {
    var node = parseBitwiseOr(state);

    while (state.token === 'and') {
      // eslint-disable-line no-unmodified-loop-condition
      getTokenSkipNewline(state);
      node = new OperatorNode('and', 'and', [node, parseBitwiseOr(state)]);
    }

    return node;
  }
  /**
   * bitwise or, 'x | y'
   * @return {Node} node
   * @private
   */


  function parseBitwiseOr(state) {
    var node = parseBitwiseXor(state);

    while (state.token === '|') {
      // eslint-disable-line no-unmodified-loop-condition
      getTokenSkipNewline(state);
      node = new OperatorNode('|', 'bitOr', [node, parseBitwiseXor(state)]);
    }

    return node;
  }
  /**
   * bitwise exclusive or (xor), 'x ^| y'
   * @return {Node} node
   * @private
   */


  function parseBitwiseXor(state) {
    var node = parseBitwiseAnd(state);

    while (state.token === '^|') {
      // eslint-disable-line no-unmodified-loop-condition
      getTokenSkipNewline(state);
      node = new OperatorNode('^|', 'bitXor', [node, parseBitwiseAnd(state)]);
    }

    return node;
  }
  /**
   * bitwise and, 'x & y'
   * @return {Node} node
   * @private
   */


  function parseBitwiseAnd(state) {
    var node = parseRelational(state);

    while (state.token === '&') {
      // eslint-disable-line no-unmodified-loop-condition
      getTokenSkipNewline(state);
      node = new OperatorNode('&', 'bitAnd', [node, parseRelational(state)]);
    }

    return node;
  }
  /**
   * Parse a chained conditional, like 'a > b >= c'
   * @return {Node} node
   */


  function parseRelational(state) {
    var params = [parseShift(state)];
    var conditionals = [];
    var operators = {
      '==': 'equal',
      '!=': 'unequal',
      '<': 'smaller',
      '>': 'larger',
      '<=': 'smallerEq',
      '>=': 'largerEq'
    };

    while (operators.hasOwnProperty(state.token)) {
      // eslint-disable-line no-unmodified-loop-condition
      var cond = {
        name: state.token,
        fn: operators[state.token]
      };
      conditionals.push(cond);
      getTokenSkipNewline(state);
      params.push(parseShift(state));
    }

    if (params.length === 1) {
      return params[0];
    } else if (params.length === 2) {
      return new OperatorNode(conditionals[0].name, conditionals[0].fn, params);
    } else {
      return new RelationalNode(conditionals.map(function (c) {
        return c.fn;
      }), params);
    }
  }
  /**
   * Bitwise left shift, bitwise right arithmetic shift, bitwise right logical shift
   * @return {Node} node
   * @private
   */


  function parseShift(state) {
    var node, operators, name, fn, params;
    node = parseConversion(state);
    operators = {
      '<<': 'leftShift',
      '>>': 'rightArithShift',
      '>>>': 'rightLogShift'
    };

    while (operators.hasOwnProperty(state.token)) {
      name = state.token;
      fn = operators[name];
      getTokenSkipNewline(state);
      params = [node, parseConversion(state)];
      node = new OperatorNode(name, fn, params);
    }

    return node;
  }
  /**
   * conversion operators 'to' and 'in'
   * @return {Node} node
   * @private
   */


  function parseConversion(state) {
    var node, operators, name, fn, params;
    node = parseRange(state);
    operators = {
      'to': 'to',
      'in': 'to' // alias of 'to'

    };

    while (operators.hasOwnProperty(state.token)) {
      name = state.token;
      fn = operators[name];
      getTokenSkipNewline(state);

      if (name === 'in' && state.token === '') {
        // end of expression -> this is the unit 'in' ('inch')
        node = new OperatorNode('*', 'multiply', [node, new SymbolNode('in')], true);
      } else {
        // operator 'a to b' or 'a in b'
        params = [node, parseRange(state)];
        node = new OperatorNode(name, fn, params);
      }
    }

    return node;
  }
  /**
   * parse range, "start:end", "start:step:end", ":", "start:", ":end", etc
   * @return {Node} node
   * @private
   */


  function parseRange(state) {
    var node;
    var params = [];

    if (state.token === ':') {
      // implicit start=1 (one-based)
      node = new ConstantNode(1);
    } else {
      // explicit start
      node = parseAddSubtract(state);
    }

    if (state.token === ':' && state.conditionalLevel !== state.nestingLevel) {
      // we ignore the range operator when a conditional operator is being processed on the same level
      params.push(node); // parse step and end

      while (state.token === ':' && params.length < 3) {
        // eslint-disable-line no-unmodified-loop-condition
        getTokenSkipNewline(state);

        if (state.token === ')' || state.token === ']' || state.token === ',' || state.token === '') {
          // implicit end
          params.push(new SymbolNode('end'));
        } else {
          // explicit end
          params.push(parseAddSubtract(state));
        }
      }

      if (params.length === 3) {
        // params = [start, step, end]
        node = new RangeNode(params[0], params[2], params[1]); // start, end, step
      } else {
        // length === 2
        // params = [start, end]
        node = new RangeNode(params[0], params[1]); // start, end
      }
    }

    return node;
  }
  /**
   * add or subtract
   * @return {Node} node
   * @private
   */


  function parseAddSubtract(state) {
    var node, operators, name, fn, params;
    node = parseMultiplyDivide(state);
    operators = {
      '+': 'add',
      '-': 'subtract'
    };

    while (operators.hasOwnProperty(state.token)) {
      name = state.token;
      fn = operators[name];
      getTokenSkipNewline(state);
      params = [node, parseMultiplyDivide(state)];
      node = new OperatorNode(name, fn, params);
    }

    return node;
  }
  /**
   * multiply, divide, modulus
   * @return {Node} node
   * @private
   */


  function parseMultiplyDivide(state) {
    var node, last, operators, name, fn;
    node = parseImplicitMultiplication(state);
    last = node;
    operators = {
      '*': 'multiply',
      '.*': 'dotMultiply',
      '/': 'divide',
      './': 'dotDivide',
      '%': 'mod',
      'mod': 'mod'
    };

    while (true) {
      if (operators.hasOwnProperty(state.token)) {
        // explicit operators
        name = state.token;
        fn = operators[name];
        getTokenSkipNewline(state);
        last = parseImplicitMultiplication(state);
        node = new OperatorNode(name, fn, [node, last]);
      } else {
        break;
      }
    }

    return node;
  }
  /**
   * implicit multiplication
   * @return {Node} node
   * @private
   */


  function parseImplicitMultiplication(state) {
    var node, last;
    node = parseRule2(state);
    last = node;

    while (true) {
      if (state.tokenType === TOKENTYPE.SYMBOL || state.token === 'in' && type.isConstantNode(node) || state.tokenType === TOKENTYPE.NUMBER && !type.isConstantNode(last) && (!type.isOperatorNode(last) || last.op === '!') || state.token === '(') {
        // parse implicit multiplication
        //
        // symbol:      implicit multiplication like '2a', '(2+3)a', 'a b'
        // number:      implicit multiplication like '(2+3)2'
        // parenthesis: implicit multiplication like '2(3+4)', '(3+4)(1+2)'
        last = parseRule2(state);
        node = new OperatorNode('*', 'multiply', [node, last], true
        /* implicit */
        );
      } else {
        break;
      }
    }

    return node;
  }
  /**
   * Infamous "rule 2" as described in https://github.com/josdejong/mathjs/issues/792#issuecomment-361065370
   * Explicit division gets higher precedence than implicit multiplication
   * when the division matches this pattern: [number] / [number] [symbol]
   * @return {Node} node
   * @private
   */


  function parseRule2(state) {
    var node = parseUnary(state);
    var last = node;
    var tokenStates = [];

    while (true) {
      // Match the "number /" part of the pattern "number / number symbol"
      if (state.token === '/' && type.isConstantNode(last)) {
        // Look ahead to see if the next token is a number
        tokenStates.push(_extends({}, state));
        getTokenSkipNewline(state); // Match the "number / number" part of the pattern

        if (state.tokenType === TOKENTYPE.NUMBER) {
          // Look ahead again
          tokenStates.push(_extends({}, state));
          getTokenSkipNewline(state); // Match the "symbol" part of the pattern, or a left parenthesis

          if (state.tokenType === TOKENTYPE.SYMBOL || state.token === '(') {
            // We've matched the pattern "number / number symbol".
            // Rewind once and build the "number / number" node; the symbol will be consumed later
            _extends(state, tokenStates.pop());

            tokenStates.pop();
            last = parseUnary(state);
            node = new OperatorNode('/', 'divide', [node, last]);
          } else {
            // Not a match, so rewind
            tokenStates.pop();

            _extends(state, tokenStates.pop());

            break;
          }
        } else {
          // Not a match, so rewind
          _extends(state, tokenStates.pop());

          break;
        }
      } else {
        break;
      }
    }

    return node;
  }
  /**
   * Unary plus and minus, and logical and bitwise not
   * @return {Node} node
   * @private
   */


  function parseUnary(state) {
    var name, params, fn;
    var operators = {
      '-': 'unaryMinus',
      '+': 'unaryPlus',
      '~': 'bitNot',
      'not': 'not'
    };

    if (operators.hasOwnProperty(state.token)) {
      fn = operators[state.token];
      name = state.token;
      getTokenSkipNewline(state);
      params = [parseUnary(state)];
      return new OperatorNode(name, fn, params);
    }

    return parsePow(state);
  }
  /**
   * power
   * Note: power operator is right associative
   * @return {Node} node
   * @private
   */


  function parsePow(state) {
    var node, name, fn, params;
    node = parseLeftHandOperators(state);

    if (state.token === '^' || state.token === '.^') {
      name = state.token;
      fn = name === '^' ? 'pow' : 'dotPow';
      getTokenSkipNewline(state);
      params = [node, parseUnary(state)]; // Go back to unary, we can have '2^-3'

      node = new OperatorNode(name, fn, params);
    }

    return node;
  }
  /**
   * Left hand operators: factorial x!, ctranspose x'
   * @return {Node} node
   * @private
   */


  function parseLeftHandOperators(state) {
    var node, operators, name, fn, params;
    node = parseCustomNodes(state);
    operators = {
      '!': 'factorial',
      '\'': 'ctranspose'
    };

    while (operators.hasOwnProperty(state.token)) {
      name = state.token;
      fn = operators[name];
      getToken(state);
      params = [node];
      node = new OperatorNode(name, fn, params);
      node = parseAccessors(state, node);
    }

    return node;
  }
  /**
   * Parse a custom node handler. A node handler can be used to process
   * nodes in a custom way, for example for handling a plot.
   *
   * A handler must be passed as second argument of the parse function.
   * - must extend math.expression.node.Node
   * - must contain a function _compile(defs: Object) : string
   * - must contain a function find(filter: Object) : Node[]
   * - must contain a function toString() : string
   * - the constructor is called with a single argument containing all parameters
   *
   * For example:
   *
   *     nodes = {
   *       'plot': PlotHandler
   *     }
   *
   * The constructor of the handler is called as:
   *
   *     node = new PlotHandler(params)
   *
   * The handler will be invoked when evaluating an expression like:
   *
   *     node = math.parse('plot(sin(x), x)', nodes)
   *
   * @return {Node} node
   * @private
   */


  function parseCustomNodes(state) {
    var params = [];

    if (state.tokenType === TOKENTYPE.SYMBOL && state.extraNodes.hasOwnProperty(state.token)) {
      var CustomNode = state.extraNodes[state.token];
      getToken(state); // parse parameters

      if (state.token === '(') {
        params = [];
        openParams(state);
        getToken(state);

        if (state.token !== ')') {
          params.push(parseAssignment(state)); // parse a list with parameters

          while (state.token === ',') {
            // eslint-disable-line no-unmodified-loop-condition
            getToken(state);
            params.push(parseAssignment(state));
          }
        }

        if (state.token !== ')') {
          throw createSyntaxError(state, 'Parenthesis ) expected');
        }

        closeParams(state);
        getToken(state);
      } // create a new custom node
      // noinspection JSValidateTypes


      return new CustomNode(params);
    }

    return parseSymbol(state);
  }
  /**
   * parse symbols: functions, variables, constants, units
   * @return {Node} node
   * @private
   */


  function parseSymbol(state) {
    var node, name;

    if (state.tokenType === TOKENTYPE.SYMBOL || state.tokenType === TOKENTYPE.DELIMITER && state.token in NAMED_DELIMITERS) {
      name = state.token;
      getToken(state);

      if (CONSTANTS.hasOwnProperty(name)) {
        // true, false, null, ...
        node = new ConstantNode(CONSTANTS[name]);
      } else if (NUMERIC_CONSTANTS.indexOf(name) !== -1) {
        // NaN, Infinity
        node = new ConstantNode(numeric(name, 'number'));
      } else {
        node = new SymbolNode(name);
      } // parse function parameters and matrix index


      node = parseAccessors(state, node);
      return node;
    }

    return parseDoubleQuotesString(state);
  }
  /**
   * parse accessors:
   * - function invocation in round brackets (...), for example sqrt(2)
   * - index enclosed in square brackets [...], for example A[2,3]
   * - dot notation for properties, like foo.bar
   * @param {Node} node    Node on which to apply the parameters. If there
   *                       are no parameters in the expression, the node
   *                       itself is returned
   * @param {string[]} [types]  Filter the types of notations
   *                            can be ['(', '[', '.']
   * @return {Node} node
   * @private
   */


  function parseAccessors(state, node, types) {
    var params;

    while ((state.token === '(' || state.token === '[' || state.token === '.') && (!types || types.indexOf(state.token) !== -1)) {
      // eslint-disable-line no-unmodified-loop-condition
      params = [];

      if (state.token === '(') {
        if (type.isSymbolNode(node) || type.isAccessorNode(node)) {
          // function invocation like fn(2, 3) or obj.fn(2, 3)
          openParams(state);
          getToken(state);

          if (state.token !== ')') {
            params.push(parseAssignment(state)); // parse a list with parameters

            while (state.token === ',') {
              // eslint-disable-line no-unmodified-loop-condition
              getToken(state);
              params.push(parseAssignment(state));
            }
          }

          if (state.token !== ')') {
            throw createSyntaxError(state, 'Parenthesis ) expected');
          }

          closeParams(state);
          getToken(state);
          node = new FunctionNode(node, params);
        } else {
          // implicit multiplication like (2+3)(4+5) or sqrt(2)(1+2)
          // don't parse it here but let it be handled by parseImplicitMultiplication
          // with correct precedence
          return node;
        }
      } else if (state.token === '[') {
        // index notation like variable[2, 3]
        openParams(state);
        getToken(state);

        if (state.token !== ']') {
          params.push(parseAssignment(state)); // parse a list with parameters

          while (state.token === ',') {
            // eslint-disable-line no-unmodified-loop-condition
            getToken(state);
            params.push(parseAssignment(state));
          }
        }

        if (state.token !== ']') {
          throw createSyntaxError(state, 'Parenthesis ] expected');
        }

        closeParams(state);
        getToken(state);
        node = new AccessorNode(node, new IndexNode(params));
      } else {
        // dot notation like variable.prop
        getToken(state);

        if (state.tokenType !== TOKENTYPE.SYMBOL) {
          throw createSyntaxError(state, 'Property name expected after dot');
        }

        params.push(new ConstantNode(state.token));
        getToken(state);
        var dotNotation = true;
        node = new AccessorNode(node, new IndexNode(params, dotNotation));
      }
    }

    return node;
  }
  /**
   * Parse a double quotes string.
   * @return {Node} node
   * @private
   */


  function parseDoubleQuotesString(state) {
    var node, str;

    if (state.token === '"') {
      str = parseDoubleQuotesStringToken(state); // create constant

      node = new ConstantNode(str); // parse index parameters

      node = parseAccessors(state, node);
      return node;
    }

    return parseSingleQuotesString(state);
  }
  /**
   * Parse a string surrounded by double quotes "..."
   * @return {string}
   */


  function parseDoubleQuotesStringToken(state) {
    var str = '';

    while (currentCharacter(state) !== '' && currentCharacter(state) !== '"') {
      if (currentCharacter(state) === '\\') {
        // escape character, immediately process the next
        // character to prevent stopping at a next '\"'
        str += currentCharacter(state);
        next(state);
      }

      str += currentCharacter(state);
      next(state);
    }

    getToken(state);

    if (state.token !== '"') {
      throw createSyntaxError(state, 'End of string " expected');
    }

    getToken(state);
    return JSON.parse('"' + str + '"'); // unescape escaped characters
  }
  /**
   * Parse a single quotes string.
   * @return {Node} node
   * @private
   */


  function parseSingleQuotesString(state) {
    var node, str;

    if (state.token === '\'') {
      str = parseSingleQuotesStringToken(state); // create constant

      node = new ConstantNode(str); // parse index parameters

      node = parseAccessors(state, node);
      return node;
    }

    return parseMatrix(state);
  }
  /**
   * Parse a string surrounded by single quotes '...'
   * @return {string}
   */


  function parseSingleQuotesStringToken(state) {
    var str = '';

    while (currentCharacter(state) !== '' && currentCharacter(state) !== '\'') {
      if (currentCharacter(state) === '\\') {
        // escape character, immediately process the next
        // character to prevent stopping at a next '\''
        str += currentCharacter(state);
        next(state);
      }

      str += currentCharacter(state);
      next(state);
    }

    getToken(state);

    if (state.token !== '\'') {
      throw createSyntaxError(state, 'End of string \' expected');
    }

    getToken(state);
    return JSON.parse('"' + str + '"'); // unescape escaped characters
  }
  /**
   * parse the matrix
   * @return {Node} node
   * @private
   */


  function parseMatrix(state) {
    var array, params, rows, cols;

    if (state.token === '[') {
      // matrix [...]
      openParams(state);
      getToken(state);

      if (state.token !== ']') {
        // this is a non-empty matrix
        var row = parseRow(state);

        if (state.token === ';') {
          // 2 dimensional array
          rows = 1;
          params = [row]; // the rows of the matrix are separated by dot-comma's

          while (state.token === ';') {
            // eslint-disable-line no-unmodified-loop-condition
            getToken(state);
            params[rows] = parseRow(state);
            rows++;
          }

          if (state.token !== ']') {
            throw createSyntaxError(state, 'End of matrix ] expected');
          }

          closeParams(state);
          getToken(state); // check if the number of columns matches in all rows

          cols = params[0].items.length;

          for (var r = 1; r < rows; r++) {
            if (params[r].items.length !== cols) {
              throw createError(state, 'Column dimensions mismatch ' + '(' + params[r].items.length + ' !== ' + cols + ')');
            }
          }

          array = new ArrayNode(params);
        } else {
          // 1 dimensional vector
          if (state.token !== ']') {
            throw createSyntaxError(state, 'End of matrix ] expected');
          }

          closeParams(state);
          getToken(state);
          array = row;
        }
      } else {
        // this is an empty matrix "[ ]"
        closeParams(state);
        getToken(state);
        array = new ArrayNode([]);
      }

      return parseAccessors(state, array);
    }

    return parseObject(state);
  }
  /**
   * Parse a single comma-separated row from a matrix, like 'a, b, c'
   * @return {ArrayNode} node
   */


  function parseRow(state) {
    var params = [parseAssignment(state)];
    var len = 1;

    while (state.token === ',') {
      // eslint-disable-line no-unmodified-loop-condition
      getToken(state); // parse expression

      params[len] = parseAssignment(state);
      len++;
    }

    return new ArrayNode(params);
  }
  /**
   * parse an object, enclosed in angle brackets{...}, for example {value: 2}
   * @return {Node} node
   * @private
   */


  function parseObject(state) {
    if (state.token === '{') {
      openParams(state);
      var key;
      var properties = {};

      do {
        getToken(state);

        if (state.token !== '}') {
          // parse key
          if (state.token === '"') {
            key = parseDoubleQuotesStringToken(state);
          } else if (state.token === '\'') {
            key = parseSingleQuotesStringToken(state);
          } else if (state.tokenType === TOKENTYPE.SYMBOL) {
            key = state.token;
            getToken(state);
          } else {
            throw createSyntaxError(state, 'Symbol or string expected as object key');
          } // parse key/value separator


          if (state.token !== ':') {
            throw createSyntaxError(state, 'Colon : expected after object key');
          }

          getToken(state); // parse key

          properties[key] = parseAssignment(state);
        }
      } while (state.token === ','); // eslint-disable-line no-unmodified-loop-condition


      if (state.token !== '}') {
        throw createSyntaxError(state, 'Comma , or bracket } expected after object value');
      }

      closeParams(state);
      getToken(state);
      var node = new ObjectNode(properties); // parse index parameters

      node = parseAccessors(state, node);
      return node;
    }

    return parseNumber(state);
  }
  /**
   * parse a number
   * @return {Node} node
   * @private
   */


  function parseNumber(state) {
    var numberStr;

    if (state.tokenType === TOKENTYPE.NUMBER) {
      // this is a number
      numberStr = state.token;
      getToken(state);
      return new ConstantNode(numeric(numberStr, config.number));
    }

    return parseParentheses(state);
  }
  /**
   * parentheses
   * @return {Node} node
   * @private
   */


  function parseParentheses(state) {
    var node; // check if it is a parenthesized expression

    if (state.token === '(') {
      // parentheses (...)
      openParams(state);
      getToken(state);
      node = parseAssignment(state); // start again

      if (state.token !== ')') {
        throw createSyntaxError(state, 'Parenthesis ) expected');
      }

      closeParams(state);
      getToken(state);
      node = new ParenthesisNode(node);
      node = parseAccessors(state, node);
      return node;
    }

    return parseEnd(state);
  }
  /**
   * Evaluated when the expression is not yet ended but expected to end
   * @return {Node} res
   * @private
   */


  function parseEnd(state) {
    if (state.token === '') {
      // syntax error or unexpected end of expression
      throw createSyntaxError(state, 'Unexpected end of expression');
    } else {
      throw createSyntaxError(state, 'Value expected');
    }
  }
  /**
   * Shortcut for getting the current row value (one based)
   * Returns the line of the currently handled expression
   * @private
   */

  /* TODO: implement keeping track on the row number
  function row () {
    return null
  }
  */

  /**
   * Shortcut for getting the current col value (one based)
   * Returns the column (position) where the last state.token starts
   * @private
   */


  function col(state) {
    return state.index - state.token.length + 1;
  }
  /**
   * Create an error
   * @param {string} message
   * @return {SyntaxError} instantiated error
   * @private
   */


  function createSyntaxError(state, message) {
    var c = col(state);
    var error = new SyntaxError(message + ' (char ' + c + ')');
    error['char'] = c;
    return error;
  }
  /**
   * Create an error
   * @param {string} message
   * @return {Error} instantiated error
   * @private
   */


  function createError(state, message) {
    var c = col(state);
    var error = new SyntaxError(message + ' (char ' + c + ')');
    error['char'] = c;
    return error;
  }

  return parse;
}

exports.name = 'parse';
exports.path = 'expression';
exports.factory = factory;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(5).extend;

function factory(type, config, load, typed) {
  var divideScalar = load(__webpack_require__(12));
  var multiply = load(__webpack_require__(10));
  var inv = load(__webpack_require__(70));
  var matrix = load(__webpack_require__(0));
  var algorithm11 = load(__webpack_require__(20));
  var algorithm14 = load(__webpack_require__(6));
  /**
   * Divide two values, `x / y`.
   * To divide matrices, `x` is multiplied with the inverse of `y`: `x * inv(y)`.
   *
   * Syntax:
   *
   *    math.divide(x, y)
   *
   * Examples:
   *
   *    math.divide(2, 3)            // returns number 0.6666666666666666
   *
   *    const a = math.complex(5, 14)
   *    const b = math.complex(4, 1)
   *    math.divide(a, b)            // returns Complex 2 + 3i
   *
   *    const c = [[7, -6], [13, -4]]
   *    const d = [[1, 2], [4, 3]]
   *    math.divide(c, d)            // returns Array [[-9, 4], [-11, 6]]
   *
   *    const e = math.unit('18 km')
   *    math.divide(e, 4.5)          // returns Unit 4 km
   *
   * See also:
   *
   *    multiply
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x   Numerator
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix} y          Denominator
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}                      Quotient, `x / y`
   */

  var divide = typed('divide', extend({
    // we extend the signatures of divideScalar with signatures dealing with matrices
    'Array | Matrix, Array | Matrix': function ArrayMatrixArrayMatrix(x, y) {
      // TODO: implement matrix right division using pseudo inverse
      // https://www.mathworks.nl/help/matlab/ref/mrdivide.html
      // https://www.gnu.org/software/octave/doc/interpreter/Arithmetic-Ops.html
      // https://stackoverflow.com/questions/12263932/how-does-gnu-octave-matrix-division-work-getting-unexpected-behaviour
      return multiply(x, inv(y));
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, divideScalar, false);
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm11(x, y, divideScalar, false);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, divideScalar, false).valueOf();
    },
    'any, Array | Matrix': function anyArrayMatrix(x, y) {
      return multiply(x, inv(y));
    }
  }, divideScalar.signatures));
  divide.toTex = {
    2: "\\frac{${args[0]}}{${args[1]}}"
  };
  return divide;
}

exports.name = 'divide';
exports.factory = factory;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Calculate the square root of a value.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.sqrt(x)
   *
   * Examples:
   *
   *    math.sqrt(25)                // returns 5
   *    math.square(5)               // returns 25
   *    math.sqrt(-4)                // returns Complex 2i
   *
   * See also:
   *
   *    square, multiply, cube, cbrt, sqrtm
   *
   * @param {number | BigNumber | Complex | Array | Matrix | Unit} x
   *            Value for which to calculate the square root.
   * @return {number | BigNumber | Complex | Array | Matrix | Unit}
   *            Returns the square root of `x`
   */
  var sqrt = typed('sqrt', {
    'number': _sqrtNumber,
    'Complex': function Complex(x) {
      return x.sqrt();
    },
    'BigNumber': function BigNumber(x) {
      if (!x.isNegative() || config.predictable) {
        return x.sqrt();
      } else {
        // negative value -> downgrade to number to do complex value computation
        return _sqrtNumber(x.toNumber());
      }
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since sqrt(0) = 0
      return deepMap(x, sqrt, true);
    },
    'Unit': function Unit(x) {
      // Someday will work for complex units when they are implemented
      return x.pow(0.5);
    }
  });
  /**
   * Calculate sqrt for a number
   * @param {number} x
   * @returns {number | Complex} Returns the square root of x
   * @private
   */

  function _sqrtNumber(x) {
    if (isNaN(x)) {
      return NaN;
    } else if (x >= 0 || config.predictable) {
      return Math.sqrt(x);
    } else {
      return new type.Complex(x, 0).sqrt();
    }
  }

  sqrt.toTex = {
    1: "\\sqrt{${args[0]}}"
  };
  return sqrt;
}

exports.name = 'sqrt';
exports.factory = factory;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMatrix = __webpack_require__(56);
/**
 * Recursively loop over all elements in a given multi dimensional array
 * and invoke the callback on each of the elements.
 * @param {Array | Matrix} array
 * @param {Function} callback     The callback method is invoked with one
 *                                parameter: the current element in the array
 */


module.exports = function deepForEach(array, callback) {
  if (isMatrix(array)) {
    array = array.valueOf();
  }

  for (var i = 0, ii = array.length; i < ii; i++) {
    var value = array[i];

    if (Array.isArray(value)) {
      deepForEach(value, callback);
    } else {
      callback(value);
    }
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Create a range error with the message:
 *     'Index out of range (index < min)'
 *     'Index out of range (index < max)'
 *
 * @param {number} index     The actual index
 * @param {number} [min=0]   Minimum index (included)
 * @param {number} [max]     Maximum index (excluded)
 * @extends RangeError
 */

function IndexError(index, min, max) {
  if (!(this instanceof IndexError)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  this.index = index;

  if (arguments.length < 3) {
    this.min = 0;
    this.max = min;
  } else {
    this.min = min;
    this.max = max;
  }

  if (this.min !== undefined && this.index < this.min) {
    this.message = 'Index out of range (' + this.index + ' < ' + this.min + ')';
  } else if (this.max !== undefined && this.index >= this.max) {
    this.message = 'Index out of range (' + this.index + ' > ' + (this.max - 1) + ')';
  } else {
    this.message = 'Index out of range (' + this.index + ')';
  }

  this.stack = new Error().stack;
}

IndexError.prototype = new RangeError();
IndexError.prototype.constructor = RangeError;
IndexError.prototype.name = 'IndexError';
IndexError.prototype.isIndexError = true;
module.exports = IndexError;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(31);

var DimensionError = __webpack_require__(8);

var string = util.string;
var array = util.array;
var object = util.object;
var number = util.number;
var isArray = Array.isArray;
var isNumber = number.isNumber;
var isInteger = number.isInteger;
var isString = string.isString;
var validateIndex = array.validateIndex;

function factory(type, config, load, typed) {
  var getArrayDataType = load(__webpack_require__(63));
  var Matrix = load(__webpack_require__(84)); // force loading Matrix (do not use via type.Matrix)

  /**
   * Dense Matrix implementation. A regular, dense matrix, supporting multi-dimensional matrices. This is the default matrix type.
   * @class DenseMatrix
   */

  function DenseMatrix(data, datatype) {
    if (!(this instanceof DenseMatrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    if (datatype && !isString(datatype)) {
      throw new Error('Invalid datatype: ' + datatype);
    }

    if (type.isMatrix(data)) {
      // check data is a DenseMatrix
      if (data.type === 'DenseMatrix') {
        // clone data & size
        this._data = object.clone(data._data);
        this._size = object.clone(data._size);
        this._datatype = datatype || data._datatype;
      } else {
        // build data from existing matrix
        this._data = data.toArray();
        this._size = data.size();
        this._datatype = datatype || data._datatype;
      }
    } else if (data && isArray(data.data) && isArray(data.size)) {
      // initialize fields from JSON representation
      this._data = data.data;
      this._size = data.size;
      this._datatype = datatype || data.datatype;
    } else if (isArray(data)) {
      // replace nested Matrices with Arrays
      this._data = preprocess(data); // get the dimensions of the array

      this._size = array.size(this._data); // verify the dimensions of the array, TODO: compute size while processing array

      array.validate(this._data, this._size); // data type unknown

      this._datatype = datatype;
    } else if (data) {
      // unsupported type
      throw new TypeError('Unsupported type of data (' + util.types.type(data) + ')');
    } else {
      // nothing provided
      this._data = [];
      this._size = [0];
      this._datatype = datatype;
    }
  }

  DenseMatrix.prototype = new Matrix();
  /**
   * Attach type information
   */

  DenseMatrix.prototype.type = 'DenseMatrix';
  DenseMatrix.prototype.isDenseMatrix = true;
  /**
   * Get the matrix type
   *
   * Usage:
   *    const matrixType = matrix.getDataType()  // retrieves the matrix type
   *
   * @memberOf DenseMatrix
   * @return {string}   type information; if multiple types are found from the Matrix, it will return "mixed"
   */

  DenseMatrix.prototype.getDataType = function () {
    return getArrayDataType(this._data);
  };
  /**
   * Get the storage format used by the matrix.
   *
   * Usage:
   *     const format = matrix.storage()  // retrieve storage format
   *
   * @memberof DenseMatrix
   * @return {string}           The storage format.
   */


  DenseMatrix.prototype.storage = function () {
    return 'dense';
  };
  /**
   * Get the datatype of the data stored in the matrix.
   *
   * Usage:
   *     const format = matrix.datatype()   // retrieve matrix datatype
   *
   * @memberof DenseMatrix
   * @return {string}           The datatype.
   */


  DenseMatrix.prototype.datatype = function () {
    return this._datatype;
  };
  /**
   * Create a new DenseMatrix
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {string} [datatype]
   */


  DenseMatrix.prototype.create = function (data, datatype) {
    return new DenseMatrix(data, datatype);
  };
  /**
   * Get a subset of the matrix, or replace a subset of the matrix.
   *
   * Usage:
   *     const subset = matrix.subset(index)               // retrieve subset
   *     const value = matrix.subset(index, replacement)   // replace subset
   *
   * @memberof DenseMatrix
   * @param {Index} index
   * @param {Array | Matrix | *} [replacement]
   * @param {*} [defaultValue=0]      Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be filled with zeros.
   */


  DenseMatrix.prototype.subset = function (index, replacement, defaultValue) {
    switch (arguments.length) {
      case 1:
        return _get(this, index);
      // intentional fall through

      case 2:
      case 3:
        return _set(this, index, replacement, defaultValue);

      default:
        throw new SyntaxError('Wrong number of arguments');
    }
  };
  /**
   * Get a single element from the matrix.
   * @memberof DenseMatrix
   * @param {number[]} index   Zero-based index
   * @return {*} value
   */


  DenseMatrix.prototype.get = function (index) {
    if (!isArray(index)) {
      throw new TypeError('Array expected');
    }

    if (index.length !== this._size.length) {
      throw new DimensionError(index.length, this._size.length);
    } // check index


    for (var x = 0; x < index.length; x++) {
      validateIndex(index[x], this._size[x]);
    }

    var data = this._data;

    for (var i = 0, ii = index.length; i < ii; i++) {
      var indexI = index[i];
      validateIndex(indexI, data.length);
      data = data[indexI];
    }

    return data;
  };
  /**
   * Replace a single element in the matrix.
   * @memberof DenseMatrix
   * @param {number[]} index   Zero-based index
   * @param {*} value
   * @param {*} [defaultValue]        Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be left undefined.
   * @return {DenseMatrix} self
   */


  DenseMatrix.prototype.set = function (index, value, defaultValue) {
    if (!isArray(index)) {
      throw new TypeError('Array expected');
    }

    if (index.length < this._size.length) {
      throw new DimensionError(index.length, this._size.length, '<');
    }

    var i, ii, indexI; // enlarge matrix when needed

    var size = index.map(function (i) {
      return i + 1;
    });

    _fit(this, size, defaultValue); // traverse over the dimensions


    var data = this._data;

    for (i = 0, ii = index.length - 1; i < ii; i++) {
      indexI = index[i];
      validateIndex(indexI, data.length);
      data = data[indexI];
    } // set new value


    indexI = index[index.length - 1];
    validateIndex(indexI, data.length);
    data[indexI] = value;
    return this;
  };
  /**
   * Get a submatrix of this matrix
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix
   * @param {Index} index   Zero-based index
   * @private
   */


  function _get(matrix, index) {
    if (!type.isIndex(index)) {
      throw new TypeError('Invalid index');
    }

    var isScalar = index.isScalar();

    if (isScalar) {
      // return a scalar
      return matrix.get(index.min());
    } else {
      // validate dimensions
      var size = index.size();

      if (size.length !== matrix._size.length) {
        throw new DimensionError(size.length, matrix._size.length);
      } // validate if any of the ranges in the index is out of range


      var min = index.min();
      var max = index.max();

      for (var i = 0, ii = matrix._size.length; i < ii; i++) {
        validateIndex(min[i], matrix._size[i]);
        validateIndex(max[i], matrix._size[i]);
      } // retrieve submatrix
      // TODO: more efficient when creating an empty matrix and setting _data and _size manually


      return new DenseMatrix(_getSubmatrix(matrix._data, index, size.length, 0), matrix._datatype);
    }
  }
  /**
   * Recursively get a submatrix of a multi dimensional matrix.
   * Index is not checked for correct number or length of dimensions.
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {Index} index
   * @param {number} dims   Total number of dimensions
   * @param {number} dim    Current dimension
   * @return {Array} submatrix
   * @private
   */


  function _getSubmatrix(data, index, dims, dim) {
    var last = dim === dims - 1;
    var range = index.dimension(dim);

    if (last) {
      return range.map(function (i) {
        validateIndex(i, data.length);
        return data[i];
      }).valueOf();
    } else {
      return range.map(function (i) {
        validateIndex(i, data.length);
        var child = data[i];
        return _getSubmatrix(child, index, dims, dim + 1);
      }).valueOf();
    }
  }
  /**
   * Replace a submatrix in this matrix
   * Indexes are zero-based.
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix
   * @param {Index} index
   * @param {DenseMatrix | Array | *} submatrix
   * @param {*} defaultValue          Default value, filled in on new entries when
   *                                  the matrix is resized.
   * @return {DenseMatrix} matrix
   * @private
   */


  function _set(matrix, index, submatrix, defaultValue) {
    if (!index || index.isIndex !== true) {
      throw new TypeError('Invalid index');
    } // get index size and check whether the index contains a single value


    var iSize = index.size();
    var isScalar = index.isScalar(); // calculate the size of the submatrix, and convert it into an Array if needed

    var sSize;

    if (type.isMatrix(submatrix)) {
      sSize = submatrix.size();
      submatrix = submatrix.valueOf();
    } else {
      sSize = array.size(submatrix);
    }

    if (isScalar) {
      // set a scalar
      // check whether submatrix is a scalar
      if (sSize.length !== 0) {
        throw new TypeError('Scalar expected');
      }

      matrix.set(index.min(), submatrix, defaultValue);
    } else {
      // set a submatrix
      // validate dimensions
      if (iSize.length < matrix._size.length) {
        throw new DimensionError(iSize.length, matrix._size.length, '<');
      }

      if (sSize.length < iSize.length) {
        // calculate number of missing outer dimensions
        var i = 0;
        var outer = 0;

        while (iSize[i] === 1 && sSize[i] === 1) {
          i++;
        }

        while (iSize[i] === 1) {
          outer++;
          i++;
        } // unsqueeze both outer and inner dimensions


        submatrix = array.unsqueeze(submatrix, iSize.length, outer, sSize);
      } // check whether the size of the submatrix matches the index size


      if (!object.deepEqual(iSize, sSize)) {
        throw new DimensionError(iSize, sSize, '>');
      } // enlarge matrix when needed


      var size = index.max().map(function (i) {
        return i + 1;
      });

      _fit(matrix, size, defaultValue); // insert the sub matrix


      var dims = iSize.length;
      var dim = 0;

      _setSubmatrix(matrix._data, index, submatrix, dims, dim);
    }

    return matrix;
  }
  /**
   * Replace a submatrix of a multi dimensional matrix.
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {Index} index
   * @param {Array} submatrix
   * @param {number} dims   Total number of dimensions
   * @param {number} dim
   * @private
   */


  function _setSubmatrix(data, index, submatrix, dims, dim) {
    var last = dim === dims - 1;
    var range = index.dimension(dim);

    if (last) {
      range.forEach(function (dataIndex, subIndex) {
        validateIndex(dataIndex);
        data[dataIndex] = submatrix[subIndex[0]];
      });
    } else {
      range.forEach(function (dataIndex, subIndex) {
        validateIndex(dataIndex);

        _setSubmatrix(data[dataIndex], index, submatrix[subIndex[0]], dims, dim + 1);
      });
    }
  }
  /**
   * Resize the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (resize in place).
   *
   * @memberof DenseMatrix
   * @param {number[]} size           The new size the matrix should have.
   * @param {*} [defaultValue=0]      Default value, filled in on new entries.
   *                                  If not provided, the matrix elements will
   *                                  be filled with zeros.
   * @param {boolean} [copy]          Return a resized copy of the matrix
   *
   * @return {Matrix}                 The resized matrix
   */


  DenseMatrix.prototype.resize = function (size, defaultValue, copy) {
    // validate arguments
    if (!isArray(size)) {
      throw new TypeError('Array expected');
    } // matrix to resize


    var m = copy ? this.clone() : this; // resize matrix

    return _resize(m, size, defaultValue);
  };

  function _resize(matrix, size, defaultValue) {
    // check size
    if (size.length === 0) {
      // first value in matrix
      var v = matrix._data; // go deep

      while (isArray(v)) {
        v = v[0];
      }

      return v;
    } // resize matrix


    matrix._size = size.slice(0); // copy the array

    matrix._data = array.resize(matrix._data, matrix._size, defaultValue); // return matrix

    return matrix;
  }
  /**
   * Reshape the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (reshape in place).
   *
   * NOTE: This might be better suited to copy by default, instead of modifying
   *       in place. For now, it operates in place to remain consistent with
   *       resize().
   *
   * @memberof DenseMatrix
   * @param {number[]} size           The new size the matrix should have.
   * @param {boolean} [copy]          Return a reshaped copy of the matrix
   *
   * @return {Matrix}                 The reshaped matrix
   */


  DenseMatrix.prototype.reshape = function (size, copy) {
    var m = copy ? this.clone() : this;
    m._data = array.reshape(m._data, size);
    m._size = size.slice(0);
    return m;
  };
  /**
   * Enlarge the matrix when it is smaller than given size.
   * If the matrix is larger or equal sized, nothing is done.
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix           The matrix to be resized
   * @param {number[]} size
   * @param {*} defaultValue          Default value, filled in on new entries.
   * @private
   */


  function _fit(matrix, size, defaultValue) {
    var // copy the array
    newSize = matrix._size.slice(0);

    var changed = false; // add dimensions when needed

    while (newSize.length < size.length) {
      newSize.push(0);
      changed = true;
    } // enlarge size when needed


    for (var i = 0, ii = size.length; i < ii; i++) {
      if (size[i] > newSize[i]) {
        newSize[i] = size[i];
        changed = true;
      }
    }

    if (changed) {
      // resize only when size is changed
      _resize(matrix, newSize, defaultValue);
    }
  }
  /**
   * Create a clone of the matrix
   * @memberof DenseMatrix
   * @return {DenseMatrix} clone
   */


  DenseMatrix.prototype.clone = function () {
    var m = new DenseMatrix({
      data: object.clone(this._data),
      size: object.clone(this._size),
      datatype: this._datatype
    });
    return m;
  };
  /**
   * Retrieve the size of the matrix.
   * @memberof DenseMatrix
   * @returns {number[]} size
   */


  DenseMatrix.prototype.size = function () {
    return this._size.slice(0); // return a clone of _size
  };
  /**
   * Create a new matrix with the results of the callback function executed on
   * each entry of the matrix.
   * @memberof DenseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   *
   * @return {DenseMatrix} matrix
   */


  DenseMatrix.prototype.map = function (callback) {
    // matrix instance
    var me = this;

    var recurse = function recurse(value, index) {
      if (isArray(value)) {
        return value.map(function (child, i) {
          return recurse(child, index.concat(i));
        });
      } else {
        return callback(value, index, me);
      }
    }; // return dense format


    return new DenseMatrix({
      data: recurse(this._data, []),
      size: object.clone(this._size),
      datatype: this._datatype
    });
  };
  /**
   * Execute a callback function on each entry of the matrix.
   * @memberof DenseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   */


  DenseMatrix.prototype.forEach = function (callback) {
    // matrix instance
    var me = this;

    var recurse = function recurse(value, index) {
      if (isArray(value)) {
        value.forEach(function (child, i) {
          recurse(child, index.concat(i));
        });
      } else {
        callback(value, index, me);
      }
    };

    recurse(this._data, []);
  };
  /**
   * Create an Array with a copy of the data of the DenseMatrix
   * @memberof DenseMatrix
   * @returns {Array} array
   */


  DenseMatrix.prototype.toArray = function () {
    return object.clone(this._data);
  };
  /**
   * Get the primitive value of the DenseMatrix: a multidimensional array
   * @memberof DenseMatrix
   * @returns {Array} array
   */


  DenseMatrix.prototype.valueOf = function () {
    return this._data;
  };
  /**
   * Get a string representation of the matrix, with optional formatting options.
   * @memberof DenseMatrix
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */


  DenseMatrix.prototype.format = function (options) {
    return string.format(this._data, options);
  };
  /**
   * Get a string representation of the matrix
   * @memberof DenseMatrix
   * @returns {string} str
   */


  DenseMatrix.prototype.toString = function () {
    return string.format(this._data);
  };
  /**
   * Get a JSON representation of the matrix
   * @memberof DenseMatrix
   * @returns {Object}
   */


  DenseMatrix.prototype.toJSON = function () {
    return {
      mathjs: 'DenseMatrix',
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  };
  /**
   * Get the kth Matrix diagonal.
   *
   * @memberof DenseMatrix
   * @param {number | BigNumber} [k=0]     The kth diagonal where the vector will retrieved.
   *
   * @returns {Matrix}                     The matrix with the diagonal values.
   */


  DenseMatrix.prototype.diagonal = function (k) {
    // validate k if any
    if (k) {
      // convert BigNumber to a number
      if (type.isBigNumber(k)) {
        k = k.toNumber();
      } // is must be an integer


      if (!isNumber(k) || !isInteger(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }

    var kSuper = k > 0 ? k : 0;
    var kSub = k < 0 ? -k : 0; // rows & columns

    var rows = this._size[0];
    var columns = this._size[1]; // number diagonal values

    var n = Math.min(rows - kSub, columns - kSuper); // x is a matrix get diagonal from matrix

    var data = []; // loop rows

    for (var i = 0; i < n; i++) {
      data[i] = this._data[i + kSub][i + kSuper];
    } // create DenseMatrix


    return new DenseMatrix({
      data: data,
      size: [n],
      datatype: this._datatype
    });
  };
  /**
   * Create a diagonal matrix.
   *
   * @memberof DenseMatrix
   * @param {Array} size                     The matrix size.
   * @param {number | Matrix | Array } value The values for the diagonal.
   * @param {number | BigNumber} [k=0]       The kth diagonal where the vector will be filled in.
   * @param {number} [defaultValue]          The default value for non-diagonal
   * @param {string} [datatype]              The datatype for the diagonal
   *
   * @returns {DenseMatrix}
   */


  DenseMatrix.diagonal = function (size, value, k, defaultValue, datatype) {
    if (!isArray(size)) {
      throw new TypeError('Array expected, size parameter');
    }

    if (size.length !== 2) {
      throw new Error('Only two dimensions matrix are supported');
    } // map size & validate


    size = size.map(function (s) {
      // check it is a big number
      if (type.isBigNumber(s)) {
        // convert it
        s = s.toNumber();
      } // validate arguments


      if (!isNumber(s) || !isInteger(s) || s < 1) {
        throw new Error('Size values must be positive integers');
      }

      return s;
    }); // validate k if any

    if (k) {
      // convert BigNumber to a number
      if (type.isBigNumber(k)) {
        k = k.toNumber();
      } // is must be an integer


      if (!isNumber(k) || !isInteger(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }

    if (defaultValue && isString(datatype)) {
      // convert defaultValue to the same datatype
      defaultValue = typed.convert(defaultValue, datatype);
    }

    var kSuper = k > 0 ? k : 0;
    var kSub = k < 0 ? -k : 0; // rows and columns

    var rows = size[0];
    var columns = size[1]; // number of non-zero items

    var n = Math.min(rows - kSub, columns - kSuper); // value extraction function

    var _value; // check value


    if (isArray(value)) {
      // validate array
      if (value.length !== n) {
        // number of values in array must be n
        throw new Error('Invalid value array length');
      } // define function


      _value = function _value(i) {
        // return value @ i
        return value[i];
      };
    } else if (type.isMatrix(value)) {
      // matrix size
      var ms = value.size(); // validate matrix

      if (ms.length !== 1 || ms[0] !== n) {
        // number of values in array must be n
        throw new Error('Invalid matrix length');
      } // define function


      _value = function _value(i) {
        // return value @ i
        return value.get([i]);
      };
    } else {
      // define function
      _value = function _value() {
        // return value
        return value;
      };
    } // discover default value if needed


    if (!defaultValue) {
      // check first value in array
      defaultValue = type.isBigNumber(_value(0)) ? new type.BigNumber(0) : 0;
    } // empty array


    var data = []; // check we need to resize array

    if (size.length > 0) {
      // resize array
      data = array.resize(data, size, defaultValue); // fill diagonal

      for (var d = 0; d < n; d++) {
        data[d + kSub][d + kSuper] = _value(d);
      }
    } // create DenseMatrix


    return new DenseMatrix({
      data: data,
      size: [rows, columns]
    });
  };
  /**
   * Generate a matrix from a JSON object
   * @memberof DenseMatrix
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "DenseMatrix", data: [], size: []}`,
   *                       where mathjs is optional
   * @returns {DenseMatrix}
   */


  DenseMatrix.fromJSON = function (json) {
    return new DenseMatrix(json);
  };
  /**
   * Swap rows i and j in Matrix.
   *
   * @memberof DenseMatrix
   * @param {number} i       Matrix row index 1
   * @param {number} j       Matrix row index 2
   *
   * @return {Matrix}        The matrix reference
   */


  DenseMatrix.prototype.swapRows = function (i, j) {
    // check index
    if (!isNumber(i) || !isInteger(i) || !isNumber(j) || !isInteger(j)) {
      throw new Error('Row index must be positive integers');
    } // check dimensions


    if (this._size.length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    } // validate index


    validateIndex(i, this._size[0]);
    validateIndex(j, this._size[0]); // swap rows

    DenseMatrix._swapRows(i, j, this._data); // return current instance


    return this;
  };
  /**
   * Swap rows i and j in Dense Matrix data structure.
   *
   * @param {number} i       Matrix row index 1
   * @param {number} j       Matrix row index 2
   * @param {Array} data     Matrix data
   */


  DenseMatrix._swapRows = function (i, j, data) {
    // swap values i <-> j
    var vi = data[i];
    data[i] = data[j];
    data[j] = vi;
  };
  /**
   * Preprocess data, which can be an Array or DenseMatrix with nested Arrays and
   * Matrices. Replaces all nested Matrices with Arrays
   * @memberof DenseMatrix
   * @param {Array} data
   * @return {Array} data
   */


  function preprocess(data) {
    for (var i = 0, ii = data.length; i < ii; i++) {
      var elem = data[i];

      if (isArray(elem)) {
        data[i] = preprocess(elem);
      } else if (elem && elem.isMatrix === true) {
        data[i] = preprocess(elem.valueOf());
      }
    }

    return data;
  } // register this type in the base class Matrix


  type.Matrix._storage.dense = DenseMatrix;
  type.Matrix._storage['default'] = DenseMatrix; // exports

  return DenseMatrix;
}

exports.name = 'DenseMatrix';
exports.path = 'type';
exports.factory = factory;
exports.lazy = false; // no lazy loading, as we alter type.Matrix._storage

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var array = __webpack_require__(2);

var isInteger = __webpack_require__(3).isInteger;

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  /**
   * Create a 2-dimensional identity matrix with size m x n or n x n.
   * The matrix has ones on the diagonal and zeros elsewhere.
   *
   * Syntax:
   *
   *    math.identity(n)
   *    math.identity(n, format)
   *    math.identity(m, n)
   *    math.identity(m, n, format)
   *    math.identity([m, n])
   *    math.identity([m, n], format)
   *
   * Examples:
   *
   *    math.identity(3)                    // returns [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
   *    math.identity(3, 2)                 // returns [[1, 0], [0, 1], [0, 0]]
   *
   *    const A = [[1, 2, 3], [4, 5, 6]]
   *    math.identity(math.size(A))         // returns [[1, 0, 0], [0, 1, 0]]
   *
   * See also:
   *
   *    diag, ones, zeros, size, range
   *
   * @param {...number | Matrix | Array} size   The size for the matrix
   * @param {string} [format]                   The Matrix storage format
   *
   * @return {Matrix | Array | number} A matrix with ones on the diagonal.
   */

  var identity = typed('identity', {
    '': function _() {
      return config.matrix === 'Matrix' ? matrix([]) : [];
    },
    'string': function string(format) {
      return matrix(format);
    },
    'number | BigNumber': function numberBigNumber(rows) {
      return _identity(rows, rows, config.matrix === 'Matrix' ? 'default' : undefined);
    },
    'number | BigNumber, string': function numberBigNumberString(rows, format) {
      return _identity(rows, rows, format);
    },
    'number | BigNumber, number | BigNumber': function numberBigNumberNumberBigNumber(rows, cols) {
      return _identity(rows, cols, config.matrix === 'Matrix' ? 'default' : undefined);
    },
    'number | BigNumber, number | BigNumber, string': function numberBigNumberNumberBigNumberString(rows, cols, format) {
      return _identity(rows, cols, format);
    },
    'Array': function Array(size) {
      return _identityVector(size);
    },
    'Array, string': function ArrayString(size, format) {
      return _identityVector(size, format);
    },
    'Matrix': function Matrix(size) {
      return _identityVector(size.valueOf(), size.storage());
    },
    'Matrix, string': function MatrixString(size, format) {
      return _identityVector(size.valueOf(), format);
    }
  });
  identity.toTex = undefined; // use default template

  return identity;

  function _identityVector(size, format) {
    switch (size.length) {
      case 0:
        return format ? matrix(format) : [];

      case 1:
        return _identity(size[0], size[0], format);

      case 2:
        return _identity(size[0], size[1], format);

      default:
        throw new Error('Vector containing two values expected');
    }
  }
  /**
   * Create an identity matrix
   * @param {number | BigNumber} rows
   * @param {number | BigNumber} cols
   * @param {string} [format]
   * @returns {Matrix}
   * @private
   */


  function _identity(rows, cols, format) {
    // BigNumber constructor with the right precision
    var Big = type.isBigNumber(rows) || type.isBigNumber(cols) ? type.BigNumber : null;
    if (type.isBigNumber(rows)) rows = rows.toNumber();
    if (type.isBigNumber(cols)) cols = cols.toNumber();

    if (!isInteger(rows) || rows < 1) {
      throw new Error('Parameters in function identity must be positive integers');
    }

    if (!isInteger(cols) || cols < 1) {
      throw new Error('Parameters in function identity must be positive integers');
    }

    var one = Big ? new type.BigNumber(1) : 1;
    var defaultValue = Big ? new Big(0) : 0;
    var size = [rows, cols]; // check we need to return a matrix

    if (format) {
      // get matrix storage constructor
      var F = type.Matrix.storage(format); // create diagonal matrix (use optimized implementation for storage format)

      return F.diagonal(size, one, 0, defaultValue);
    } // create and resize array


    var res = array.resize([], size, defaultValue); // fill in ones on the diagonal

    var minimum = rows < cols ? rows : cols; // fill diagonal

    for (var d = 0; d < minimum; d++) {
      res[d][d] = one;
    }

    return res;
  }
}

exports.name = 'identity';
exports.factory = factory;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var equalScalar = load(__webpack_require__(11));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm07 = load(__webpack_require__(29));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));

  var latex = __webpack_require__(4);
  /**
   * Test whether two values are equal.
   *
   * The function tests whether the relative difference between x and y is
   * smaller than the configured epsilon. The function cannot be used to
   * compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * In case of complex numbers, x.re must equal y.re, and x.im must equal y.im.
   *
   * Values `null` and `undefined` are compared strictly, thus `null` is only
   * equal to `null` and nothing else, and `undefined` is only equal to
   * `undefined` and nothing else. Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.equal(x, y)
   *
   * Examples:
   *
   *    math.equal(2 + 2, 3)         // returns false
   *    math.equal(2 + 2, 4)         // returns true
   *
   *    const a = math.unit('50 cm')
   *    const b = math.unit('5 m')
   *    math.equal(a, b)             // returns true
   *
   *    const c = [2, 5, 1]
   *    const d = [2, 7, 1]
   *
   *    math.equal(c, d)             // returns [true, false, true]
   *    math.deepEqual(c, d)         // returns false
   *
   *    math.equal("1000", "1e3")    // returns true
   *    math.equal(0, null)          // returns false
   *
   * See also:
   *
   *    unequal, smaller, smallerEq, larger, largerEq, compare, deepEqual, equalText
   *
   * @param  {number | BigNumber | boolean | Complex | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | boolean | Complex | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the compared values are equal, else returns false
   */


  var equal = typed('equal', {
    'any, any': function anyAny(x, y) {
      // strict equality for null and undefined?
      if (x === null) {
        return y === null;
      }

      if (y === null) {
        return x === null;
      }

      if (x === undefined) {
        return y === undefined;
      }

      if (y === undefined) {
        return x === undefined;
      }

      return equalScalar(x, y);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, equalScalar);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, equalScalar, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, equalScalar, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, equalScalar);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return equal(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return equal(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return equal(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, equalScalar, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, equalScalar, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, equalScalar, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, equalScalar, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, equalScalar, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, equalScalar, true).valueOf();
    }
  });
  equal.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['equal'], "${args[1]}\\right)")
  };
  return equal;
}

exports.name = 'equal';
exports.factory = factory;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Test whether a value is an numeric value.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isNumeric(x)
   *
   * Examples:
   *
   *    math.isNumeric(2)                     // returns true
   *    math.isNumeric('2')                   // returns true
   *    math.hasNumericValue('2')             // returns true
   *    math.isNumeric(0)                     // returns true
   *    math.isNumeric(math.bignumber(500))   // returns true
   *    math.isNumeric(math.fraction(4))      // returns true
   *    math.isNumeric(math.complex('2-4i')   // returns false
   *    math.isNumeric([2.3, 'foo', false])   // returns [true, false, true]
   *
   * See also:
   *
   *    isZero, isPositive, isNegative, isInteger, hasNumericValue
   *
   * @param {*} x       Value to be tested
   * @return {boolean}  Returns true when `x` is a `number`, `BigNumber`,
   *                    `Fraction`, or `boolean`. Returns false for other types.
   *                    Throws an error in case of unknown types.
   */
  var isNumeric = typed('isNumeric', {
    'number | BigNumber | Fraction | boolean': function numberBigNumberFractionBoolean() {
      return true;
    },
    'Complex | Unit | string | null | undefined | Node': function ComplexUnitStringNullUndefinedNode() {
      return false;
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, isNumeric);
    }
  });
  return isNumeric;
}

exports.name = 'isNumeric';
exports.factory = factory;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // list of identifiers of nodes in order of their precedence
// also contains information about left/right associativity
// and which other operator the operator is associative with
// Example:
// addition is associative with addition and subtraction, because:
// (a+b)+c=a+(b+c)
// (a+b)-c=a+(b-c)
//
// postfix operators are left associative, prefix operators
// are right associative
//
// It's also possible to set the following properties:
// latexParens: if set to false, this node doesn't need to be enclosed
//              in parentheses when using LaTeX
// latexLeftParens: if set to false, this !OperatorNode's!
//                  left argument doesn't need to be enclosed
//                  in parentheses
// latexRightParens: the same for the right argument

var properties = [{
  // assignment
  'AssignmentNode': {},
  'FunctionAssignmentNode': {}
}, {
  // conditional expression
  'ConditionalNode': {
    latexLeftParens: false,
    latexRightParens: false,
    latexParens: false // conditionals don't need parentheses in LaTeX because
    // they are 2 dimensional

  }
}, {
  // logical or
  'OperatorNode:or': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // logical xor
  'OperatorNode:xor': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // logical and
  'OperatorNode:and': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitwise or
  'OperatorNode:bitOr': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitwise xor
  'OperatorNode:bitXor': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitwise and
  'OperatorNode:bitAnd': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // relational operators
  'OperatorNode:equal': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:unequal': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:smaller': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:larger': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:smallerEq': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:largerEq': {
    associativity: 'left',
    associativeWith: []
  },
  'RelationalNode': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitshift operators
  'OperatorNode:leftShift': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:rightArithShift': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:rightLogShift': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // unit conversion
  'OperatorNode:to': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // range
  'RangeNode': {}
}, {
  // addition, subtraction
  'OperatorNode:add': {
    associativity: 'left',
    associativeWith: ['OperatorNode:add', 'OperatorNode:subtract']
  },
  'OperatorNode:subtract': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // multiply, divide, modulus
  'OperatorNode:multiply': {
    associativity: 'left',
    associativeWith: ['OperatorNode:multiply', 'OperatorNode:divide', 'Operator:dotMultiply', 'Operator:dotDivide']
  },
  'OperatorNode:divide': {
    associativity: 'left',
    associativeWith: [],
    latexLeftParens: false,
    latexRightParens: false,
    latexParens: false // fractions don't require parentheses because
    // they're 2 dimensional, so parens aren't needed
    // in LaTeX

  },
  'OperatorNode:dotMultiply': {
    associativity: 'left',
    associativeWith: ['OperatorNode:multiply', 'OperatorNode:divide', 'OperatorNode:dotMultiply', 'OperatorNode:doDivide']
  },
  'OperatorNode:dotDivide': {
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:mod': {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // unary prefix operators
  'OperatorNode:unaryPlus': {
    associativity: 'right'
  },
  'OperatorNode:unaryMinus': {
    associativity: 'right'
  },
  'OperatorNode:bitNot': {
    associativity: 'right'
  },
  'OperatorNode:not': {
    associativity: 'right'
  }
}, {
  // exponentiation
  'OperatorNode:pow': {
    associativity: 'right',
    associativeWith: [],
    latexRightParens: false // the exponent doesn't need parentheses in
    // LaTeX because it's 2 dimensional
    // (it's on top)

  },
  'OperatorNode:dotPow': {
    associativity: 'right',
    associativeWith: []
  }
}, {
  // factorial
  'OperatorNode:factorial': {
    associativity: 'left'
  }
}, {
  // matrix transpose
  'OperatorNode:transpose': {
    associativity: 'left'
  }
}];
/**
 * Get the precedence of a Node.
 * Higher number for higher precedence, starting with 0.
 * Returns null if the precedence is undefined.
 *
 * @param {Node}
 * @param {string} parenthesis
 * @return {number|null}
 */

function getPrecedence(_node, parenthesis) {
  var node = _node;

  if (parenthesis !== 'keep') {
    // ParenthesisNodes are only ignored when not in 'keep' mode
    node = _node.getContent();
  }

  var identifier = node.getIdentifier();

  for (var i = 0; i < properties.length; i++) {
    if (identifier in properties[i]) {
      return i;
    }
  }

  return null;
}
/**
 * Get the associativity of an operator (left or right).
 * Returns a string containing 'left' or 'right' or null if
 * the associativity is not defined.
 *
 * @param {Node}
 * @param {string} parenthesis
 * @return {string|null}
 * @throws {Error}
 */


function getAssociativity(_node, parenthesis) {
  var node = _node;

  if (parenthesis !== 'keep') {
    // ParenthesisNodes are only ignored when not in 'keep' mode
    node = _node.getContent();
  }

  var identifier = node.getIdentifier();
  var index = getPrecedence(node, parenthesis);

  if (index === null) {
    // node isn't in the list
    return null;
  }

  var property = properties[index][identifier];

  if (property.hasOwnProperty('associativity')) {
    if (property.associativity === 'left') {
      return 'left';
    }

    if (property.associativity === 'right') {
      return 'right';
    } // associativity is invalid


    throw Error('\'' + identifier + '\' has the invalid associativity \'' + property.associativity + '\'.');
  } // associativity is undefined


  return null;
}
/**
 * Check if an operator is associative with another operator.
 * Returns either true or false or null if not defined.
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @param {string} parenthesis
 * @return {bool|null}
 */


function isAssociativeWith(nodeA, nodeB, parenthesis) {
  // ParenthesisNodes are only ignored when not in 'keep' mode
  var a = parenthesis !== 'keep' ? nodeA.getContent() : nodeA;
  var b = parenthesis !== 'keep' ? nodeA.getContent() : nodeB;
  var identifierA = a.getIdentifier();
  var identifierB = b.getIdentifier();
  var index = getPrecedence(a, parenthesis);

  if (index === null) {
    // node isn't in the list
    return null;
  }

  var property = properties[index][identifierA];

  if (property.hasOwnProperty('associativeWith') && property.associativeWith instanceof Array) {
    for (var i = 0; i < property.associativeWith.length; i++) {
      if (property.associativeWith[i] === identifierB) {
        return true;
      }
    }

    return false;
  } // associativeWith is not defined


  return null;
}

module.exports.properties = properties;
module.exports.getPrecedence = getPrecedence;
module.exports.getAssociativity = getAssociativity;
module.exports.isAssociativeWith = isAssociativeWith;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var latex = __webpack_require__(4);

var escape = __webpack_require__(9).escape;

var hasOwnProperty = __webpack_require__(5).hasOwnProperty;

var getSafeProperty = __webpack_require__(13).getSafeProperty;

function factory(type, config, load, typed, math) {
  var Node = load(__webpack_require__(16));
  /**
   * Check whether some name is a valueless unit like "inch".
   * @param {string} name
   * @return {boolean}
   */

  function isValuelessUnit(name) {
    return type.Unit ? type.Unit.isValuelessUnit(name) : false;
  }
  /**
   * @constructor SymbolNode
   * @extends {Node}
   * A symbol node can hold and resolve a symbol
   * @param {string} name
   * @extends {Node}
   */


  function SymbolNode(name) {
    if (!(this instanceof SymbolNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    } // validate input


    if (typeof name !== 'string') throw new TypeError('String expected for parameter "name"');
    this.name = name;
  }

  SymbolNode.prototype = new Node();
  SymbolNode.prototype.type = 'SymbolNode';
  SymbolNode.prototype.isSymbolNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  SymbolNode.prototype._compile = function (math, argNames) {
    var name = this.name;

    if (hasOwnProperty(argNames, name)) {
      // this is a FunctionAssignment argument
      // (like an x when inside the expression of a function assignment `f(x) = ...`)
      return function (scope, args, context) {
        return args[name];
      };
    } else if (name in math) {
      return function (scope, args, context) {
        return name in scope ? getSafeProperty(scope, name) : getSafeProperty(math, name);
      };
    } else {
      var isUnit = isValuelessUnit(name);
      return function (scope, args, context) {
        return name in scope ? getSafeProperty(scope, name) : isUnit ? new type.Unit(null, name) : undef(name);
      };
    }
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  SymbolNode.prototype.forEach = function (callback) {} // nothing to do, we don't have childs

  /**
   * Create a new SymbolNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node) : Node} callback
   * @returns {SymbolNode} Returns a clone of the node
   */
  ;

  SymbolNode.prototype.map = function (callback) {
    return this.clone();
  };
  /**
   * Throws an error 'Undefined symbol {name}'
   * @param {string} name
   */


  function undef(name) {
    throw new Error('Undefined symbol ' + name);
  }
  /**
   * Create a clone of this node, a shallow copy
   * @return {SymbolNode}
   */


  SymbolNode.prototype.clone = function () {
    return new SymbolNode(this.name);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  SymbolNode.prototype._toString = function (options) {
    return this.name;
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  SymbolNode.prototype.toHTML = function (options) {
    var name = escape(this.name);

    if (name === 'true' || name === 'false') {
      return '<span class="math-symbol math-boolean">' + name + '</span>';
    } else if (name === 'i') {
      return '<span class="math-symbol math-imaginary-symbol">' + name + '</span>';
    } else if (name === 'Infinity') {
      return '<span class="math-symbol math-infinity-symbol">' + name + '</span>';
    } else if (name === 'NaN') {
      return '<span class="math-symbol math-nan-symbol">' + name + '</span>';
    } else if (name === 'null') {
      return '<span class="math-symbol math-null-symbol">' + name + '</span>';
    } else if (name === 'undefined') {
      return '<span class="math-symbol math-undefined-symbol">' + name + '</span>';
    }

    return '<span class="math-symbol">' + name + '</span>';
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  SymbolNode.prototype.toJSON = function () {
    return {
      mathjs: 'SymbolNode',
      name: this.name
    };
  };
  /**
   * Instantiate a SymbolNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "SymbolNode", name: "x"}`,
   *                       where mathjs is optional
   * @returns {SymbolNode}
   */


  SymbolNode.fromJSON = function (json) {
    return new SymbolNode(json.name);
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  SymbolNode.prototype._toTex = function (options) {
    var isUnit = false;

    if (typeof math[this.name] === 'undefined' && isValuelessUnit(this.name)) {
      isUnit = true;
    }

    var symbol = latex.toSymbol(this.name, isUnit);

    if (symbol[0] === '\\') {
      // no space needed if the symbol starts with '\'
      return symbol;
    } // the space prevents symbols from breaking stuff like '\cdot' if it's written right before the symbol


    return ' ' + symbol;
  };

  return SymbolNode;
}

exports.name = 'SymbolNode';
exports.path = 'expression.node';
exports.math = true; // request access to the math namespace as 5th argument of the factory function

exports.factory = factory;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm05 = load(__webpack_require__(66));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));
  /**
   * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.
   *
   * x and y are considered equal when the relative difference between x and y
   * is smaller than the configured epsilon. The function cannot be used to
   * compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.compare(x, y)
   *
   * Examples:
   *
   *    math.compare(6, 1)           // returns 1
   *    math.compare(2, 3)           // returns -1
   *    math.compare(7, 7)           // returns 0
   *    math.compare('10', '2')      // returns 1
   *    math.compare('1000', '1e3')  // returns 0
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('40 mm')
   *    math.compare(a, b)           // returns 1
   *
   *    math.compare(2, [1, 2, 3])   // returns [1, 0, -1]
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, larger, largerEq, compareNatural, compareText
   *
   * @param  {number | BigNumber | Fraction | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | Unit | string | Array | Matrix} y Second value to compare
   * @return {number | BigNumber | Fraction | Array | Matrix} Returns the result of the comparison:
   *                                                          1 when x > y, -1 when x < y, and 0 when x == y.
   */

  var compare = typed('compare', {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x === y ? 0 : x > y ? 1 : -1;
    },
    'number, number': function numberNumber(x, y) {
      return x === y || nearlyEqual(x, y, config.epsilon) ? 0 : x > y ? 1 : -1;
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.eq(y) || bigNearlyEqual(x, y, config.epsilon) ? new type.BigNumber(0) : new type.BigNumber(x.cmp(y));
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return new type.Fraction(x.compare(y));
    },
    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }

      return compare(x.value, y.value);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm05(x, y, compare);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, compare, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, compare, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, compare);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return compare(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return compare(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return compare(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, compare, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, compare, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, compare, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, compare, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, compare, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, compare, true).valueOf();
    }
  });
  compare.toTex = undefined; // use default template

  return compare;
}

exports.name = 'compare';
exports.factory = factory;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Test whether a value is a Matrix
 * @param {*} x
 * @returns {boolean} returns true with input is a Matrix
 *                    (like a DenseMatrix or SparseMatrix)
 */

module.exports = function isMatrix(x) {
  return x && x.constructor.prototype.isMatrix || false;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Create a syntax error with the message:
 *     'Wrong number of arguments in function <fn> (<count> provided, <min>-<max> expected)'
 * @param {string} fn     Function name
 * @param {number} count  Actual argument count
 * @param {number} min    Minimum required argument count
 * @param {number} [max]  Maximum required argument count
 * @extends Error
 */

function ArgumentsError(fn, count, min, max) {
  if (!(this instanceof ArgumentsError)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  this.fn = fn;
  this.count = count;
  this.min = min;
  this.max = max;
  this.message = 'Wrong number of arguments in function ' + fn + ' (' + count + ' provided, ' + min + (max !== undefined && max !== null ? '-' + max : '') + ' expected)';
  this.stack = new Error().stack;
}

ArgumentsError.prototype = new Error();
ArgumentsError.prototype.constructor = Error;
ArgumentsError.prototype.name = 'ArgumentsError';
ArgumentsError.prototype.isArgumentsError = true;
module.exports = ArgumentsError;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var format = __webpack_require__(9).format;

var escapeLatex = __webpack_require__(4).escape;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  var getType = load(__webpack_require__(26));
  /**
   * A ConstantNode holds a constant value like a number or string.
   *
   * Usage:
   *
   *     new ConstantNode(2.3)
   *     new ConstantNode('hello')
   *
   * @param {*} value    Value can be any type (number, BigNumber, string, ...)
   * @constructor ConstantNode
   * @extends {Node}
   */

  function ConstantNode(value) {
    if (!(this instanceof ConstantNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    if (arguments.length === 2) {
      // TODO: remove deprecation error some day (created 2018-01-23)
      throw new SyntaxError('new ConstantNode(valueStr, valueType) is not supported anymore since math v4.0.0. Use new ConstantNode(value) instead, where value is a non-stringified value.');
    }

    this.value = value;
  }

  ConstantNode.prototype = new Node();
  ConstantNode.prototype.type = 'ConstantNode';
  ConstantNode.prototype.isConstantNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  ConstantNode.prototype._compile = function (math, argNames) {
    var value = this.value;
    return function evalConstantNode() {
      return value;
    };
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  ConstantNode.prototype.forEach = function (callback) {} // nothing to do, we don't have childs

  /**
   * Create a new ConstantNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node) : Node} callback
   * @returns {ConstantNode} Returns a clone of the node
   */
  ;

  ConstantNode.prototype.map = function (callback) {
    return this.clone();
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {ConstantNode}
   */


  ConstantNode.prototype.clone = function () {
    return new ConstantNode(this.value);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   */


  ConstantNode.prototype._toString = function (options) {
    return format(this.value, options);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   */


  ConstantNode.prototype.toHTML = function (options) {
    var value = this._toString(options);

    switch (getType(this.value)) {
      case 'number':
      case 'BigNumber':
      case 'Fraction':
        return '<span class="math-number">' + value + '</span>';

      case 'string':
        return '<span class="math-string">' + value + '</span>';

      case 'boolean':
        return '<span class="math-boolean">' + value + '</span>';

      case 'null':
        return '<span class="math-null-symbol">' + value + '</span>';

      case 'undefined':
        return '<span class="math-undefined">' + value + '</span>';

      default:
        return '<span class="math-symbol">' + value + '</span>';
    }
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  ConstantNode.prototype.toJSON = function () {
    return {
      mathjs: 'ConstantNode',
      value: this.value
    };
  };
  /**
   * Instantiate a ConstantNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "SymbolNode", value: 2.3}`,
   *                       where mathjs is optional
   * @returns {ConstantNode}
   */


  ConstantNode.fromJSON = function (json) {
    return new ConstantNode(json.value);
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  ConstantNode.prototype._toTex = function (options) {
    var value = this._toString(options);

    switch (getType(this.value)) {
      case 'string':
        return '\\mathtt{' + escapeLatex(value) + '}';

      case 'number':
      case 'BigNumber':
        var index = value.toLowerCase().indexOf('e');

        if (index !== -1) {
          return value.substring(0, index) + '\\cdot10^{' + value.substring(index + 1) + '}';
        }

        return value;

      case 'Fraction':
        return this.value.toLatex();

      default:
        return value;
    }
  };

  return ConstantNode;
}

exports.name = 'ConstantNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var latex = __webpack_require__(4);

var map = __webpack_require__(2).map;

var escape = __webpack_require__(9).escape;

var isSafeMethod = __webpack_require__(13).isSafeMethod;

var getSafeProperty = __webpack_require__(13).getSafeProperty;

var operators = __webpack_require__(53);

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  /**
   * @constructor OperatorNode
   * @extends {Node}
   * An operator with two arguments, like 2+3
   *
   * @param {string} op           Operator name, for example '+'
   * @param {string} fn           Function name, for example 'add'
   * @param {Node[]} args         Operator arguments
   * @param {boolean} [implicit]  Is this an implicit multiplication?
   */

  function OperatorNode(op, fn, args, implicit) {
    if (!(this instanceof OperatorNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    } // validate input


    if (typeof op !== 'string') {
      throw new TypeError('string expected for parameter "op"');
    }

    if (typeof fn !== 'string') {
      throw new TypeError('string expected for parameter "fn"');
    }

    if (!Array.isArray(args) || !args.every(type.isNode)) {
      throw new TypeError('Array containing Nodes expected for parameter "args"');
    }

    this.implicit = implicit === true;
    this.op = op;
    this.fn = fn;
    this.args = args || [];
  }

  OperatorNode.prototype = new Node();
  OperatorNode.prototype.type = 'OperatorNode';
  OperatorNode.prototype.isOperatorNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  OperatorNode.prototype._compile = function (math, argNames) {
    // validate fn
    if (typeof this.fn !== 'string' || !isSafeMethod(math, this.fn)) {
      if (!math[this.fn]) {
        throw new Error('Function ' + this.fn + ' missing in provided namespace "math"');
      } else {
        throw new Error('No access to function "' + this.fn + '"');
      }
    }

    var fn = getSafeProperty(math, this.fn);
    var evalArgs = map(this.args, function (arg) {
      return arg._compile(math, argNames);
    });

    if (evalArgs.length === 1) {
      var evalArg0 = evalArgs[0];
      return function evalOperatorNode(scope, args, context) {
        return fn(evalArg0(scope, args, context));
      };
    } else if (evalArgs.length === 2) {
      var _evalArg = evalArgs[0];
      var evalArg1 = evalArgs[1];
      return function evalOperatorNode(scope, args, context) {
        return fn(_evalArg(scope, args, context), evalArg1(scope, args, context));
      };
    } else {
      return function evalOperatorNode(scope, args, context) {
        return fn.apply(null, map(evalArgs, function (evalArg) {
          return evalArg(scope, args, context);
        }));
      };
    }
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  OperatorNode.prototype.forEach = function (callback) {
    for (var i = 0; i < this.args.length; i++) {
      callback(this.args[i], 'args[' + i + ']', this);
    }
  };
  /**
   * Create a new OperatorNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {OperatorNode} Returns a transformed copy of the node
   */


  OperatorNode.prototype.map = function (callback) {
    var args = [];

    for (var i = 0; i < this.args.length; i++) {
      args[i] = this._ifNode(callback(this.args[i], 'args[' + i + ']', this));
    }

    return new OperatorNode(this.op, this.fn, args, this.implicit);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {OperatorNode}
   */


  OperatorNode.prototype.clone = function () {
    return new OperatorNode(this.op, this.fn, this.args.slice(0), this.implicit);
  };
  /**
   * Check whether this is an unary OperatorNode:
   * has exactly one argument, like `-a`.
   * @return {boolean} Returns true when an unary operator node, false otherwise.
   */


  OperatorNode.prototype.isUnary = function () {
    return this.args.length === 1;
  };
  /**
   * Check whether this is a binary OperatorNode:
   * has exactly two arguments, like `a + b`.
   * @return {boolean} Returns true when a binary operator node, false otherwise.
   */


  OperatorNode.prototype.isBinary = function () {
    return this.args.length === 2;
  };
  /**
   * Calculate which parentheses are necessary. Gets an OperatorNode
   * (which is the root of the tree) and an Array of Nodes
   * (this.args) and returns an array where 'true' means that an argument
   * has to be enclosed in parentheses whereas 'false' means the opposite.
   *
   * @param {OperatorNode} root
   * @param {string} parenthesis
   * @param {Node[]} args
   * @param {boolean} latex
   * @return {boolean[]}
   * @private
   */


  function calculateNecessaryParentheses(root, parenthesis, implicit, args, latex) {
    // precedence of the root OperatorNode
    var precedence = operators.getPrecedence(root, parenthesis);
    var associativity = operators.getAssociativity(root, parenthesis);

    if (parenthesis === 'all' || args.length > 2 && root.getIdentifier() !== 'OperatorNode:add' && root.getIdentifier() !== 'OperatorNode:multiply') {
      var parens = args.map(function (arg) {
        switch (arg.getContent().type) {
          // Nodes that don't need extra parentheses
          case 'ArrayNode':
          case 'ConstantNode':
          case 'SymbolNode':
          case 'ParenthesisNode':
            return false;

          default:
            return true;
        }
      });
      return parens;
    }

    var result;

    switch (args.length) {
      case 0:
        result = [];
        break;

      case 1:
        // unary operators
        // precedence of the operand
        var operandPrecedence = operators.getPrecedence(args[0], parenthesis); // handle special cases for LaTeX, where some of the parentheses aren't needed

        if (latex && operandPrecedence !== null) {
          var operandIdentifier;
          var rootIdentifier;

          if (parenthesis === 'keep') {
            operandIdentifier = args[0].getIdentifier();
            rootIdentifier = root.getIdentifier();
          } else {
            // Ignore Parenthesis Nodes when not in 'keep' mode
            operandIdentifier = args[0].getContent().getIdentifier();
            rootIdentifier = root.getContent().getIdentifier();
          }

          if (operators.properties[precedence][rootIdentifier].latexLeftParens === false) {
            result = [false];
            break;
          }

          if (operators.properties[operandPrecedence][operandIdentifier].latexParens === false) {
            result = [false];
            break;
          }
        }

        if (operandPrecedence === null) {
          // if the operand has no defined precedence, no parens are needed
          result = [false];
          break;
        }

        if (operandPrecedence <= precedence) {
          // if the operands precedence is lower, parens are needed
          result = [true];
          break;
        } // otherwise, no parens needed


        result = [false];
        break;

      case 2:
        // binary operators
        var lhsParens; // left hand side needs parenthesis?
        // precedence of the left hand side

        var lhsPrecedence = operators.getPrecedence(args[0], parenthesis); // is the root node associative with the left hand side

        var assocWithLhs = operators.isAssociativeWith(root, args[0], parenthesis);

        if (lhsPrecedence === null) {
          // if the left hand side has no defined precedence, no parens are needed
          // FunctionNode for example
          lhsParens = false;
        } else if (lhsPrecedence === precedence && associativity === 'right' && !assocWithLhs) {
          // In case of equal precedence, if the root node is left associative
          // parens are **never** necessary for the left hand side.
          // If it is right associative however, parens are necessary
          // if the root node isn't associative with the left hand side
          lhsParens = true;
        } else if (lhsPrecedence < precedence) {
          lhsParens = true;
        } else {
          lhsParens = false;
        }

        var rhsParens; // right hand side needs parenthesis?
        // precedence of the right hand side

        var rhsPrecedence = operators.getPrecedence(args[1], parenthesis); // is the root node associative with the right hand side?

        var assocWithRhs = operators.isAssociativeWith(root, args[1], parenthesis);

        if (rhsPrecedence === null) {
          // if the right hand side has no defined precedence, no parens are needed
          // FunctionNode for example
          rhsParens = false;
        } else if (rhsPrecedence === precedence && associativity === 'left' && !assocWithRhs) {
          // In case of equal precedence, if the root node is right associative
          // parens are **never** necessary for the right hand side.
          // If it is left associative however, parens are necessary
          // if the root node isn't associative with the right hand side
          rhsParens = true;
        } else if (rhsPrecedence < precedence) {
          rhsParens = true;
        } else {
          rhsParens = false;
        } // handle special cases for LaTeX, where some of the parentheses aren't needed


        if (latex) {
          var _rootIdentifier;

          var lhsIdentifier;
          var rhsIdentifier;

          if (parenthesis === 'keep') {
            _rootIdentifier = root.getIdentifier();
            lhsIdentifier = root.args[0].getIdentifier();
            rhsIdentifier = root.args[1].getIdentifier();
          } else {
            // Ignore ParenthesisNodes when not in 'keep' mode
            _rootIdentifier = root.getContent().getIdentifier();
            lhsIdentifier = root.args[0].getContent().getIdentifier();
            rhsIdentifier = root.args[1].getContent().getIdentifier();
          }

          if (lhsPrecedence !== null) {
            if (operators.properties[precedence][_rootIdentifier].latexLeftParens === false) {
              lhsParens = false;
            }

            if (operators.properties[lhsPrecedence][lhsIdentifier].latexParens === false) {
              lhsParens = false;
            }
          }

          if (rhsPrecedence !== null) {
            if (operators.properties[precedence][_rootIdentifier].latexRightParens === false) {
              rhsParens = false;
            }

            if (operators.properties[rhsPrecedence][rhsIdentifier].latexParens === false) {
              rhsParens = false;
            }
          }
        }

        result = [lhsParens, rhsParens];
        break;

      default:
        if (root.getIdentifier() === 'OperatorNode:add' || root.getIdentifier() === 'OperatorNode:multiply') {
          result = args.map(function (arg) {
            var argPrecedence = operators.getPrecedence(arg, parenthesis);
            var assocWithArg = operators.isAssociativeWith(root, arg, parenthesis);
            var argAssociativity = operators.getAssociativity(arg, parenthesis);

            if (argPrecedence === null) {
              // if the argument has no defined precedence, no parens are needed
              return false;
            } else if (precedence === argPrecedence && associativity === argAssociativity && !assocWithArg) {
              return true;
            } else if (argPrecedence < precedence) {
              return true;
            }

            return false;
          });
        }

        break;
    } // handles an edge case of 'auto' parentheses with implicit multiplication of ConstantNode
    // In that case print parentheses for ParenthesisNodes even though they normally wouldn't be
    // printed.


    if (args.length >= 2 && root.getIdentifier() === 'OperatorNode:multiply' && root.implicit && parenthesis === 'auto' && implicit === 'hide') {
      result = args.map(function (arg, index) {
        var isParenthesisNode = arg.getIdentifier() === 'ParenthesisNode';

        if (result[index] || isParenthesisNode) {
          // put in parenthesis?
          return true;
        }

        return false;
      });
    }

    return result;
  }
  /**
   * Get string representation.
   * @param {Object} options
   * @return {string} str
   */


  OperatorNode.prototype._toString = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var implicit = options && options.implicit ? options.implicit : 'hide';
    var args = this.args;
    var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, false);

    if (args.length === 1) {
      // unary operators
      var assoc = operators.getAssociativity(this, parenthesis);
      var operand = args[0].toString(options);

      if (parens[0]) {
        operand = '(' + operand + ')';
      } // for example for "not", we want a space between operand and argument


      var opIsNamed = /[a-zA-Z]+/.test(this.op);

      if (assoc === 'right') {
        // prefix operator
        return this.op + (opIsNamed ? ' ' : '') + operand;
      } else if (assoc === 'left') {
        // postfix
        return operand + (opIsNamed ? ' ' : '') + this.op;
      } // fall back to postfix


      return operand + this.op;
    } else if (args.length === 2) {
      var lhs = args[0].toString(options); // left hand side

      var rhs = args[1].toString(options); // right hand side

      if (parens[0]) {
        // left hand side in parenthesis?
        lhs = '(' + lhs + ')';
      }

      if (parens[1]) {
        // right hand side in parenthesis?
        rhs = '(' + rhs + ')';
      }

      if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
        return lhs + ' ' + rhs;
      }

      return lhs + ' ' + this.op + ' ' + rhs;
    } else if (args.length > 2 && (this.getIdentifier() === 'OperatorNode:add' || this.getIdentifier() === 'OperatorNode:multiply')) {
      var stringifiedArgs = args.map(function (arg, index) {
        arg = arg.toString(options);

        if (parens[index]) {
          // put in parenthesis?
          arg = '(' + arg + ')';
        }

        return arg;
      });

      if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
        return stringifiedArgs.join(' ');
      }

      return stringifiedArgs.join(' ' + this.op + ' ');
    } else {
      // fallback to formatting as a function call
      return this.fn + '(' + this.args.join(', ') + ')';
    }
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  OperatorNode.prototype.toJSON = function () {
    return {
      mathjs: 'OperatorNode',
      op: this.op,
      fn: this.fn,
      args: this.args,
      implicit: this.implicit
    };
  };
  /**
   * Instantiate an OperatorNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "OperatorNode", "op": "+", "fn": "add", "args": [...], "implicit": false}`,
   *                       where mathjs is optional
   * @returns {OperatorNode}
   */


  OperatorNode.fromJSON = function (json) {
    return new OperatorNode(json.op, json.fn, json.args, json.implicit);
  };
  /**
   * Get HTML representation.
   * @param {Object} options
   * @return {string} str
   */


  OperatorNode.prototype.toHTML = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var implicit = options && options.implicit ? options.implicit : 'hide';
    var args = this.args;
    var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, false);

    if (args.length === 1) {
      // unary operators
      var assoc = operators.getAssociativity(this, parenthesis);
      var operand = args[0].toHTML(options);

      if (parens[0]) {
        operand = '<span class="math-parenthesis math-round-parenthesis">(</span>' + operand + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }

      if (assoc === 'right') {
        // prefix operator
        return '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + escape(this.op) + '</span>' + operand;
      } else {
        // postfix when assoc === 'left' or undefined
        return operand + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + escape(this.op) + '</span>';
      }
    } else if (args.length === 2) {
      // binary operatoes
      var lhs = args[0].toHTML(options); // left hand side

      var rhs = args[1].toHTML(options); // right hand side

      if (parens[0]) {
        // left hand side in parenthesis?
        lhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + lhs + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }

      if (parens[1]) {
        // right hand side in parenthesis?
        rhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + rhs + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }

      if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
        return lhs + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + rhs;
      }

      return lhs + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + escape(this.op) + '</span>' + rhs;
    } else {
      var stringifiedArgs = args.map(function (arg, index) {
        arg = arg.toHTML(options);

        if (parens[index]) {
          // put in parenthesis?
          arg = '<span class="math-parenthesis math-round-parenthesis">(</span>' + arg + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }

        return arg;
      });

      if (args.length > 2 && (this.getIdentifier() === 'OperatorNode:add' || this.getIdentifier() === 'OperatorNode:multiply')) {
        if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
          return stringifiedArgs.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>');
        }

        return stringifiedArgs.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + escape(this.op) + '</span>');
      } else {
        // fallback to formatting as a function call
        return '<span class="math-function">' + escape(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + stringifiedArgs.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
      }
    }
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  OperatorNode.prototype._toTex = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var implicit = options && options.implicit ? options.implicit : 'hide';
    var args = this.args;
    var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, true);
    var op = latex.operators[this.fn];
    op = typeof op === 'undefined' ? this.op : op; // fall back to using this.op

    if (args.length === 1) {
      // unary operators
      var assoc = operators.getAssociativity(this, parenthesis);
      var operand = args[0].toTex(options);

      if (parens[0]) {
        operand = "\\left(".concat(operand, "\\right)");
      }

      if (assoc === 'right') {
        // prefix operator
        return op + operand;
      } else if (assoc === 'left') {
        // postfix operator
        return operand + op;
      } // fall back to postfix


      return operand + op;
    } else if (args.length === 2) {
      // binary operators
      var lhs = args[0]; // left hand side

      var lhsTex = lhs.toTex(options);

      if (parens[0]) {
        lhsTex = "\\left(".concat(lhsTex, "\\right)");
      }

      var rhs = args[1]; // right hand side

      var rhsTex = rhs.toTex(options);

      if (parens[1]) {
        rhsTex = "\\left(".concat(rhsTex, "\\right)");
      } // handle some exceptions (due to the way LaTeX works)


      var lhsIdentifier;

      if (parenthesis === 'keep') {
        lhsIdentifier = lhs.getIdentifier();
      } else {
        // Ignore ParenthesisNodes if in 'keep' mode
        lhsIdentifier = lhs.getContent().getIdentifier();
      }

      switch (this.getIdentifier()) {
        case 'OperatorNode:divide':
          // op contains '\\frac' at this point
          return op + '{' + lhsTex + '}' + '{' + rhsTex + '}';

        case 'OperatorNode:pow':
          lhsTex = '{' + lhsTex + '}';
          rhsTex = '{' + rhsTex + '}';

          switch (lhsIdentifier) {
            case 'ConditionalNode': //

            case 'OperatorNode:divide':
              lhsTex = "\\left(".concat(lhsTex, "\\right)");
          }

          break;

        case 'OperatorNode:multiply':
          if (this.implicit && implicit === 'hide') {
            return lhsTex + '~' + rhsTex;
          }

      }

      return lhsTex + op + rhsTex;
    } else if (args.length > 2 && (this.getIdentifier() === 'OperatorNode:add' || this.getIdentifier() === 'OperatorNode:multiply')) {
      var texifiedArgs = args.map(function (arg, index) {
        arg = arg.toTex(options);

        if (parens[index]) {
          arg = "\\left(".concat(arg, "\\right)");
        }

        return arg;
      });

      if (this.getIdentifier() === 'OperatorNode:multiply' && this.implicit) {
        return texifiedArgs.join('~');
      }

      return texifiedArgs.join(op);
    } else {
      // fall back to formatting as a function call
      // as this is a fallback, it doesn't use
      // fancy function names
      return '\\mathrm{' + this.fn + '}\\left(' + args.map(function (arg) {
        return arg.toTex(options);
      }).join(',') + '\\right)';
    }
  };
  /**
   * Get identifier.
   * @return {string}
   */


  OperatorNode.prototype.getIdentifier = function () {
    return this.type + ':' + this.fn;
  };

  return OperatorNode;
}

exports.name = 'OperatorNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Test whether a value is zero.
   * The function can check for zero for types `number`, `BigNumber`, `Fraction`,
   * `Complex`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isZero(x)
   *
   * Examples:
   *
   *    math.isZero(0)                     // returns true
   *    math.isZero(2)                     // returns false
   *    math.isZero(0.5)                   // returns false
   *    math.isZero(math.bignumber(0))     // returns true
   *    math.isZero(math.fraction(0))      // returns true
   *    math.isZero(math.fraction(1,3))    // returns false
   *    math.isZero(math.complex('2 - 4i') // returns false
   *    math.isZero(math.complex('0i')     // returns true
   *    math.isZero('0')                   // returns true
   *    math.isZero('2')                   // returns false
   *    math.isZero([2, 0, -3]')           // returns [false, true, false]
   *
   * See also:
   *
   *    isNumeric, isPositive, isNegative, isInteger
   *
   * @param {number | BigNumber | Complex | Fraction | Unit | Array | Matrix} x       Value to be tested
   * @return {boolean}  Returns true when `x` is zero.
   *                    Throws an error in case of an unknown data type.
   */
  var isZero = typed('isZero', {
    'number': function number(x) {
      return x === 0;
    },
    'BigNumber': function BigNumber(x) {
      return x.isZero();
    },
    'Complex': function Complex(x) {
      return x.re === 0 && x.im === 0;
    },
    'Fraction': function Fraction(x) {
      return x.d === 1 && x.n === 0;
    },
    'Unit': function Unit(x) {
      return isZero(x.value);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, isZero);
    }
  });
  return isZero;
}

exports.name = 'isZero';
exports.factory = factory;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Test whether a value is negative: smaller than zero.
   * The function supports types `number`, `BigNumber`, `Fraction`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isNegative(x)
   *
   * Examples:
   *
   *    math.isNegative(3)                     // returns false
   *    math.isNegative(-2)                    // returns true
   *    math.isNegative(0)                     // returns false
   *    math.isNegative(-0)                    // returns false
   *    math.isNegative(math.bignumber(2))     // returns false
   *    math.isNegative(math.fraction(-2, 5))  // returns true
   *    math.isNegative('-2')                  // returns true
   *    math.isNegative([2, 0, -3]')           // returns [false, false, true]
   *
   * See also:
   *
   *    isNumeric, isPositive, isZero, isInteger
   *
   * @param {number | BigNumber | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is larger than zero.
   *                    Throws an error in case of an unknown data type.
   */
  var isNegative = typed('isNegative', {
    'number': function number(x) {
      return x < 0;
    },
    'BigNumber': function BigNumber(x) {
      return x.isNeg() && !x.isZero() && !x.isNaN();
    },
    'Fraction': function Fraction(x) {
      return x.s < 0; // It's enough to decide on the sign
    },
    'Unit': function Unit(x) {
      return isNegative(x.value);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, isNegative);
    }
  });
  return isNegative;
}

exports.name = 'isNegative';
exports.factory = factory;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isCollection = __webpack_require__(35);
/**
 * Test whether an array contains collections
 * @param {Array} array
 * @returns {boolean} Returns true when the array contains one or multiple
 *                    collections (Arrays or Matrices). Returns false otherwise.
 */


module.exports = function containsCollections(array) {
  for (var i = 0; i < array.length; i++) {
    if (isCollection(array[i])) {
      return true;
    }
  }

  return false;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var _typeof = load(__webpack_require__(26));

  function getArrayDataType(array) {
    var _type; // to hold type info


    var _length = 0; // to hold length value to ensure it has consistent sizes

    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var isArray = Array.isArray(item); // Saving the target matrix row size

      if (i === 0 && isArray) {
        _length = item.length;
      } // If the current item is an array but the length does not equal the targetVectorSize


      if (isArray && item.length !== _length) {
        return undefined;
      }

      var itemType = isArray ? getArrayDataType(item) // recurse into a nested array
      : _typeof(item);

      if (_type === undefined) {
        _type = itemType; // first item
      } else if (_type !== itemType) {
        return 'mixed';
      } else {// we're good, everything has the same type so far
      }
    }

    return _type;
  }

  return getArrayDataType;
}
/**
 * Check the datatype of a given object
 * This is a low level implementation that should only be used by
 * parent Matrix classes such as SparseMatrix or DenseMatrix
 * This method does not validate Array Matrix shape
 * @param array
 * @return string
 */


exports.factory = factory;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Create a number or convert a string, boolean, or unit to a number.
   * When value is a matrix, all elements will be converted to number.
   *
   * Syntax:
   *
   *    math.number(value)
   *    math.number(unit, valuelessUnit)
   *
   * Examples:
   *
   *    math.number(2)                         // returns number 2
   *    math.number('7.2')                     // returns number 7.2
   *    math.number(true)                      // returns number 1
   *    math.number([true, false, true, true]) // returns [1, 0, 1, 1]
   *    math.number(math.unit('52cm'), 'm')    // returns 0.52
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, matrix, string, unit
   *
   * @param {string | number | BigNumber | Fraction | boolean | Array | Matrix | Unit | null} [value]  Value to be converted
   * @param {Unit | string} [valuelessUnit] A valueless unit, used to convert a unit to a number
   * @return {number | Array | Matrix} The created number
   */
  var number = typed('number', {
    '': function _() {
      return 0;
    },
    'number': function number(x) {
      return x;
    },
    'string': function string(x) {
      if (x === 'NaN') return NaN;
      var num = Number(x);

      if (isNaN(num)) {
        throw new SyntaxError('String "' + x + '" is no valid number');
      }

      return num;
    },
    'BigNumber': function BigNumber(x) {
      return x.toNumber();
    },
    'Fraction': function Fraction(x) {
      return x.valueOf();
    },
    'Unit': function Unit(x) {
      throw new Error('Second argument with valueless unit expected');
    },
    'null': function _null(x) {
      return 0;
    },
    'Unit, string | Unit': function UnitStringUnit(unit, valuelessUnit) {
      return unit.toNumber(valuelessUnit);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, number);
    }
  });
  number.toTex = {
    0: "0",
    1: "\\left(${args[0]}\\right)",
    2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
  };
  return number;
}

exports.name = 'number';
exports.factory = factory;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var getTypeOf = load(__webpack_require__(26));
  var validInputTypes = {
    'string': true,
    'number': true,
    'BigNumber': true,
    'Fraction': true // Load the conversion functions for each output type

  };
  var validOutputTypes = {
    'number': load(__webpack_require__(64)),
    'BigNumber': load(__webpack_require__(105)),
    'Fraction': load(__webpack_require__(83))
    /**
     * Convert a numeric value to a specific type: number, BigNumber, or Fraction
     *
     * @param {string | number | BigNumber | Fraction } value
     * @param {'number' | 'BigNumber' | 'Fraction'} outputType
     * @return {number | BigNumber | Fraction} Returns an instance of the
     *                                         numeric in the requested type
     */

  };

  var numeric = function numeric(value, outputType) {
    var inputType = getTypeOf(value);

    if (!(inputType in validInputTypes)) {
      throw new TypeError('Cannot convert ' + value + ' of type "' + inputType + '"; valid input types are ' + Object.keys(validInputTypes).join(', '));
    }

    if (!(outputType in validOutputTypes)) {
      throw new TypeError('Cannot convert ' + value + ' to type "' + outputType + '"; valid output types are ' + Object.keys(validOutputTypes).join(', '));
    }

    if (outputType === inputType) {
      return value;
    } else {
      return validOutputTypes[outputType](value);
    }
  };

  numeric.toTex = function (node, options) {
    // Not sure if this is strictly right but should work correctly for the vast majority of use cases.
    return node.args[0].toTex();
  };

  return numeric;
} // FIXME: expose numeric in the math namespace after we've decided on a name and have written proper docs for this function. See https://github.com/josdejong/mathjs/pull/1270
// exports.name = 'type._numeric'


exports.path = 'type';
exports.name = '_numeric';
exports.factory = factory;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(11));
  var SparseMatrix = type.SparseMatrix;
  /**
   * Iterates over SparseMatrix A and SparseMatrix B nonzero items and invokes the callback function f(Aij, Bij).
   * Callback function invoked MAX(NNZA, NNZB) times
   *
   *
   *          ┌  f(Aij, Bij)  ; A(i,j) !== 0 || B(i,j) !== 0
   * C(i,j) = ┤
   *          └  0            ; otherwise
   *
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */

  var algorithm05 = function algorithm05(a, b, callback) {
    // sparse matrix arrays
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype; // sparse matrix arrays

    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // equal signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // find signature that matches (dt, dt)

      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cvalues = avalues && bvalues ? [] : undefined;
    var cindex = [];
    var cptr = []; // matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    }); // workspaces

    var xa = cvalues ? [] : undefined;
    var xb = cvalues ? [] : undefined; // marks indicating we have a value in x for a given column

    var wa = [];
    var wb = []; // vars

    var i, j, k, k1; // loop columns

    for (j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length; // columns mark

      var mark = j + 1; // loop values A(:,j)

      for (k = aptr[j], k1 = aptr[j + 1]; k < k1; k++) {
        // row
        i = aindex[k]; // push index

        cindex.push(i); // update workspace

        wa[i] = mark; // check we need to process values

        if (xa) {
          xa[i] = avalues[k];
        }
      } // loop values B(:,j)


      for (k = bptr[j], k1 = bptr[j + 1]; k < k1; k++) {
        // row
        i = bindex[k]; // check row existed in A

        if (wa[i] !== mark) {
          // push index
          cindex.push(i);
        } // update workspace


        wb[i] = mark; // check we need to process values

        if (xb) {
          xb[i] = bvalues[k];
        }
      } // check we need to process values (non pattern matrix)


      if (cvalues) {
        // initialize first index in j
        k = cptr[j]; // loop index in j

        while (k < cindex.length) {
          // row
          i = cindex[k]; // marks

          var wai = wa[i];
          var wbi = wb[i]; // check Aij or Bij are nonzero

          if (wai === mark || wbi === mark) {
            // matrix values @ i,j
            var va = wai === mark ? xa[i] : zero;
            var vb = wbi === mark ? xb[i] : zero; // Cij

            var vc = cf(va, vb); // check for zero

            if (!eq(vc, zero)) {
              // push value
              cvalues.push(vc); // increment pointer

              k++;
            } else {
              // remove value @ i, do not increment pointer
              cindex.splice(k, 1);
            }
          }
        }
      }
    } // update cptr


    cptr[columns] = cindex.length; // return sparse matrix

    return c;
  };

  return algorithm05;
}

exports.name = 'algorithm05';
exports.factory = factory;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(3).isInteger;

var toFixed = __webpack_require__(3).toFixed;

var deepMap = __webpack_require__(1);

var NO_INT = 'Number of decimals in function round must be an integer';

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var equalScalar = load(__webpack_require__(11));
  var zeros = load(__webpack_require__(43));
  var algorithm11 = load(__webpack_require__(20));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm14 = load(__webpack_require__(6));
  /**
   * Round a value towards the nearest integer.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.round(x)
   *    math.round(x, n)
   *
   * Examples:
   *
   *    math.round(3.2)              // returns number 3
   *    math.round(3.8)              // returns number 4
   *    math.round(-4.2)             // returns number -4
   *    math.round(-4.7)             // returns number -5
   *    math.round(math.pi, 3)       // returns number 3.142
   *    math.round(123.45678, 2)     // returns number 123.46
   *
   *    const c = math.complex(3.2, -2.7)
   *    math.round(c)                // returns Complex 3 - 3i
   *
   *    math.round([3.2, 3.8, -4.7]) // returns Array [3, 4, -5]
   *
   * See also:
   *
   *    ceil, fix, floor
   *
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix} x  Number to be rounded
   * @param  {number | BigNumber | Array} [n=0]                            Number of decimals
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix} Rounded value
   */

  var round = typed('round', {
    'number': function number(x) {
      return _round(x, 0);
    },
    'number, number': function numberNumber(x, n) {
      if (!isInteger(n)) {
        throw new TypeError(NO_INT);
      }

      if (n < 0 || n > 15) {
        throw new Error('Number of decimals in function round must be in te range of 0-15');
      }

      return _round(x, n);
    },
    'Complex': function Complex(x) {
      return x.round();
    },
    'Complex, number': function ComplexNumber(x, n) {
      if (n % 1) {
        throw new TypeError(NO_INT);
      }

      return x.round(n);
    },
    'Complex, BigNumber': function ComplexBigNumber(x, n) {
      if (!n.isInteger()) {
        throw new TypeError(NO_INT);
      }

      var _n = n.toNumber();

      return x.round(_n);
    },
    'number, BigNumber': function numberBigNumber(x, n) {
      if (!n.isInteger()) {
        throw new TypeError(NO_INT);
      }

      return new type.BigNumber(x).toDecimalPlaces(n.toNumber());
    },
    'BigNumber': function BigNumber(x) {
      return x.toDecimalPlaces(0);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, n) {
      if (!n.isInteger()) {
        throw new TypeError(NO_INT);
      }

      return x.toDecimalPlaces(n.toNumber());
    },
    'Fraction': function Fraction(x) {
      return x.round();
    },
    'Fraction, number': function FractionNumber(x, n) {
      if (n % 1) {
        throw new TypeError(NO_INT);
      }

      return x.round(n);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since round(0) = 0
      return deepMap(x, round, true);
    },
    'SparseMatrix, number | BigNumber': function SparseMatrixNumberBigNumber(x, y) {
      return algorithm11(x, y, round, false);
    },
    'DenseMatrix, number | BigNumber': function DenseMatrixNumberBigNumber(x, y) {
      return algorithm14(x, y, round, false);
    },
    'number | Complex | BigNumber, SparseMatrix': function numberComplexBigNumberSparseMatrix(x, y) {
      // check scalar is zero
      if (equalScalar(x, 0)) {
        // do not execute algorithm, result will be a zero matrix
        return zeros(y.size(), y.storage());
      }

      return algorithm12(y, x, round, true);
    },
    'number | Complex | BigNumber, DenseMatrix': function numberComplexBigNumberDenseMatrix(x, y) {
      // check scalar is zero
      if (equalScalar(x, 0)) {
        // do not execute algorithm, result will be a zero matrix
        return zeros(y.size(), y.storage());
      }

      return algorithm14(y, x, round, true);
    },
    'Array, number | BigNumber': function ArrayNumberBigNumber(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, round, false).valueOf();
    },
    'number | Complex | BigNumber, Array': function numberComplexBigNumberArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, round, true).valueOf();
    }
  });
  round.toTex = {
    1: "\\left\\lfloor${args[0]}\\right\\rceil",
    2: undefined // use default template

  };
  return round;
}
/**
 * round a number to the given number of decimals, or to zero if decimals is
 * not provided
 * @param {number} value
 * @param {number} decimals       number of decimals, between 0 and 15 (0 by default)
 * @return {number} roundedValue
 * @private
 */


function _round(value, decimals) {
  return parseFloat(toFixed(value, decimals));
}

exports.name = 'round';
exports.factory = factory;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  /**
   * @constructor ParenthesisNode
   * @extends {Node}
   * A parenthesis node describes manual parenthesis from the user input
   * @param {Node} content
   * @extends {Node}
   */

  function ParenthesisNode(content) {
    if (!(this instanceof ParenthesisNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    } // validate input


    if (!type.isNode(content)) {
      throw new TypeError('Node expected for parameter "content"');
    }

    this.content = content;
  }

  ParenthesisNode.prototype = new Node();
  ParenthesisNode.prototype.type = 'ParenthesisNode';
  ParenthesisNode.prototype.isParenthesisNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  ParenthesisNode.prototype._compile = function (math, argNames) {
    return this.content._compile(math, argNames);
  };
  /**
   * Get the content of the current Node.
   * @return {Node} content
   * @override
   **/


  ParenthesisNode.prototype.getContent = function () {
    return this.content.getContent();
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  ParenthesisNode.prototype.forEach = function (callback) {
    callback(this.content, 'content', this);
  };
  /**
   * Create a new ParenthesisNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node) : Node} callback
   * @returns {ParenthesisNode} Returns a clone of the node
   */


  ParenthesisNode.prototype.map = function (callback) {
    var content = callback(this.content, 'content', this);
    return new ParenthesisNode(content);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {ParenthesisNode}
   */


  ParenthesisNode.prototype.clone = function () {
    return new ParenthesisNode(this.content);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  ParenthesisNode.prototype._toString = function (options) {
    if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
      return '(' + this.content.toString(options) + ')';
    }

    return this.content.toString(options);
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  ParenthesisNode.prototype.toJSON = function () {
    return {
      mathjs: 'ParenthesisNode',
      content: this.content
    };
  };
  /**
   * Instantiate an ParenthesisNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "ParenthesisNode", "content": ...}`,
   *                       where mathjs is optional
   * @returns {ParenthesisNode}
   */


  ParenthesisNode.fromJSON = function (json) {
    return new ParenthesisNode(json.content);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  ParenthesisNode.prototype.toHTML = function (options) {
    if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
      return '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    return this.content.toHTML(options);
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  ParenthesisNode.prototype._toTex = function (options) {
    if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
      return "\\left(".concat(this.content.toTex(options), "\\right)");
    }

    return this.content.toTex(options);
  };

  return ParenthesisNode;
}

exports.name = 'ParenthesisNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var latex = __webpack_require__(4);

var escape = __webpack_require__(9).escape;

var hasOwnProperty = __webpack_require__(5).hasOwnProperty;

var map = __webpack_require__(2).map;

var validateSafeMethod = __webpack_require__(13).validateSafeMethod;

var getSafeProperty = __webpack_require__(13).getSafeProperty;

function factory(type, config, load, typed, math) {
  var Node = load(__webpack_require__(16));
  var SymbolNode = load(__webpack_require__(54));
  /**
   * @constructor FunctionNode
   * @extends {./Node}
   * invoke a list with arguments on a node
   * @param {./Node | string} fn Node resolving with a function on which to invoke
   *                             the arguments, typically a SymboNode or AccessorNode
   * @param {./Node[]} args
   */

  function FunctionNode(fn, args) {
    if (!(this instanceof FunctionNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    if (typeof fn === 'string') {
      fn = new SymbolNode(fn);
    } // validate input


    if (!type.isNode(fn)) throw new TypeError('Node expected as parameter "fn"');

    if (!Array.isArray(args) || !args.every(type.isNode)) {
      throw new TypeError('Array containing Nodes expected for parameter "args"');
    }

    this.fn = fn;
    this.args = args || []; // readonly property name

    Object.defineProperty(this, 'name', {
      get: function () {
        return this.fn.name || '';
      }.bind(this),
      set: function set() {
        throw new Error('Cannot assign a new name, name is read-only');
      }
    }); // TODO: deprecated since v3, remove some day

    var deprecated = function deprecated() {
      throw new Error('Property `FunctionNode.object` is deprecated, use `FunctionNode.fn` instead');
    };

    Object.defineProperty(this, 'object', {
      get: deprecated,
      set: deprecated
    });
  }

  FunctionNode.prototype = new Node();
  FunctionNode.prototype.type = 'FunctionNode';
  FunctionNode.prototype.isFunctionNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  FunctionNode.prototype._compile = function (math, argNames) {
    if (!(this instanceof FunctionNode)) {
      throw new TypeError('No valid FunctionNode');
    } // compile arguments


    var evalArgs = map(this.args, function (arg) {
      return arg._compile(math, argNames);
    });

    if (type.isSymbolNode(this.fn)) {
      // we can statically determine whether the function has an rawArgs property
      var name = this.fn.name;
      var fn = name in math ? getSafeProperty(math, name) : undefined;
      var isRaw = typeof fn === 'function' && fn.rawArgs === true;

      if (isRaw) {
        // pass unevaluated parameters (nodes) to the function
        // "raw" evaluation
        var rawArgs = this.args;
        return function evalFunctionNode(scope, args, context) {
          return (name in scope ? getSafeProperty(scope, name) : fn)(rawArgs, math, _extends({}, scope, args));
        };
      } else {
        // "regular" evaluation
        if (evalArgs.length === 1) {
          var evalArg0 = evalArgs[0];
          return function evalFunctionNode(scope, args, context) {
            return (name in scope ? getSafeProperty(scope, name) : fn)(evalArg0(scope, args, context));
          };
        } else if (evalArgs.length === 2) {
          var _evalArg = evalArgs[0];
          var evalArg1 = evalArgs[1];
          return function evalFunctionNode(scope, args, context) {
            return (name in scope ? getSafeProperty(scope, name) : fn)(_evalArg(scope, args, context), evalArg1(scope, args, context));
          };
        } else {
          return function evalFunctionNode(scope, args, context) {
            return (name in scope ? getSafeProperty(scope, name) : fn).apply(null, map(evalArgs, function (evalArg) {
              return evalArg(scope, args, context);
            }));
          };
        }
      }
    } else if (type.isAccessorNode(this.fn) && type.isIndexNode(this.fn.index) && this.fn.index.isObjectProperty()) {
      // execute the function with the right context: the object of the AccessorNode
      var evalObject = this.fn.object._compile(math, argNames);

      var prop = this.fn.index.getObjectProperty();
      var _rawArgs = this.args;
      return function evalFunctionNode(scope, args, context) {
        var object = evalObject(scope, args, context);
        validateSafeMethod(object, prop);
        var isRaw = object[prop] && object[prop].rawArgs;
        return isRaw ? object[prop](_rawArgs, math, _extends({}, scope, args)) // "raw" evaluation
        : object[prop].apply(object, map(evalArgs, function (evalArg) {
          // "regular" evaluation
          return evalArg(scope, args, context);
        }));
      };
    } else {
      // node.fn.isAccessorNode && !node.fn.index.isObjectProperty()
      // we have to dynamically determine whether the function has a rawArgs property
      var evalFn = this.fn._compile(math, argNames);

      var _rawArgs2 = this.args;
      return function evalFunctionNode(scope, args, context) {
        var fn = evalFn(scope, args, context);
        var isRaw = fn && fn.rawArgs;
        return isRaw ? fn(_rawArgs2, math, _extends({}, scope, args)) // "raw" evaluation
        : fn.apply(fn, map(evalArgs, function (evalArg) {
          // "regular" evaluation
          return evalArg(scope, args, context);
        }));
      };
    }
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  FunctionNode.prototype.forEach = function (callback) {
    callback(this.fn, 'fn', this);

    for (var i = 0; i < this.args.length; i++) {
      callback(this.args[i], 'args[' + i + ']', this);
    }
  };
  /**
   * Create a new FunctionNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {FunctionNode} Returns a transformed copy of the node
   */


  FunctionNode.prototype.map = function (callback) {
    var fn = this._ifNode(callback(this.fn, 'fn', this));

    var args = [];

    for (var i = 0; i < this.args.length; i++) {
      args[i] = this._ifNode(callback(this.args[i], 'args[' + i + ']', this));
    }

    return new FunctionNode(fn, args);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {FunctionNode}
   */


  FunctionNode.prototype.clone = function () {
    return new FunctionNode(this.fn, this.args.slice(0));
  }; // backup Node's toString function
  // @private


  var nodeToString = FunctionNode.prototype.toString;
  /**
   * Get string representation. (wrapper function)
   * This overrides parts of Node's toString function.
   * If callback is an object containing callbacks, it
   * calls the correct callback for the current node,
   * otherwise it falls back to calling Node's toString
   * function.
   *
   * @param {Object} options
   * @return {string} str
   * @override
   */

  FunctionNode.prototype.toString = function (options) {
    var customString;
    var name = this.fn.toString(options);

    if (options && _typeof(options.handler) === 'object' && hasOwnProperty(options.handler, name)) {
      // callback is a map of callback functions
      customString = options.handler[name](this, options);
    }

    if (typeof customString !== 'undefined') {
      return customString;
    } // fall back to Node's toString


    return nodeToString.call(this, options);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   */


  FunctionNode.prototype._toString = function (options) {
    var args = this.args.map(function (arg) {
      return arg.toString(options);
    });
    var fn = type.isFunctionAssignmentNode(this.fn) ? '(' + this.fn.toString(options) + ')' : this.fn.toString(options); // format the arguments like "add(2, 4.2)"

    return fn + '(' + args.join(', ') + ')';
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  FunctionNode.prototype.toJSON = function () {
    return {
      mathjs: 'FunctionNode',
      fn: this.fn,
      args: this.args
    };
  };
  /**
   * Instantiate an AssignmentNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "FunctionNode", fn: ..., args: ...}`,
   *                       where mathjs is optional
   * @returns {FunctionNode}
   */


  FunctionNode.fromJSON = function (json) {
    return new FunctionNode(json.fn, json.args);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   */


  FunctionNode.prototype.toHTML = function (options) {
    var args = this.args.map(function (arg) {
      return arg.toHTML(options);
    }); // format the arguments like "add(2, 4.2)"

    return '<span class="math-function">' + escape(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + args.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
  };
  /*
   * Expand a LaTeX template
   *
   * @param {string} template
   * @param {Node} node
   * @param {Object} options
   * @private
   **/


  function expandTemplate(template, node, options) {
    var latex = ''; // Match everything of the form ${identifier} or ${identifier[2]} or $$
    // while submatching identifier and 2 (in the second case)

    var regex = new RegExp('\\$(?:\\{([a-z_][a-z_0-9]*)(?:\\[([0-9]+)\\])?\\}|\\$)', 'ig');
    var inputPos = 0; // position in the input string

    var match;

    while ((match = regex.exec(template)) !== null) {
      // go through all matches
      // add everything in front of the match to the LaTeX string
      latex += template.substring(inputPos, match.index);
      inputPos = match.index;

      if (match[0] === '$$') {
        // escaped dollar sign
        latex += '$';
        inputPos++;
      } else {
        // template parameter
        inputPos += match[0].length;
        var property = node[match[1]];

        if (!property) {
          throw new ReferenceError('Template: Property ' + match[1] + ' does not exist.');
        }

        if (match[2] === undefined) {
          // no square brackets
          switch (_typeof(property)) {
            case 'string':
              latex += property;
              break;

            case 'object':
              if (type.isNode(property)) {
                latex += property.toTex(options);
              } else if (Array.isArray(property)) {
                // make array of Nodes into comma separated list
                latex += property.map(function (arg, index) {
                  if (type.isNode(arg)) {
                    return arg.toTex(options);
                  }

                  throw new TypeError('Template: ' + match[1] + '[' + index + '] is not a Node.');
                }).join(',');
              } else {
                throw new TypeError('Template: ' + match[1] + ' has to be a Node, String or array of Nodes');
              }

              break;

            default:
              throw new TypeError('Template: ' + match[1] + ' has to be a Node, String or array of Nodes');
          }
        } else {
          // with square brackets
          if (type.isNode(property[match[2]] && property[match[2]])) {
            latex += property[match[2]].toTex(options);
          } else {
            throw new TypeError('Template: ' + match[1] + '[' + match[2] + '] is not a Node.');
          }
        }
      }
    }

    latex += template.slice(inputPos); // append rest of the template

    return latex;
  } // backup Node's toTex function
  // @private


  var nodeToTex = FunctionNode.prototype.toTex;
  /**
   * Get LaTeX representation. (wrapper function)
   * This overrides parts of Node's toTex function.
   * If callback is an object containing callbacks, it
   * calls the correct callback for the current node,
   * otherwise it falls back to calling Node's toTex
   * function.
   *
   * @param {Object} options
   * @return {string}
   */

  FunctionNode.prototype.toTex = function (options) {
    var customTex;

    if (options && _typeof(options.handler) === 'object' && hasOwnProperty(options.handler, this.name)) {
      // callback is a map of callback functions
      customTex = options.handler[this.name](this, options);
    }

    if (typeof customTex !== 'undefined') {
      return customTex;
    } // fall back to Node's toTex


    return nodeToTex.call(this, options);
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  FunctionNode.prototype._toTex = function (options) {
    var args = this.args.map(function (arg) {
      // get LaTeX of the arguments
      return arg.toTex(options);
    });
    var latexConverter;

    if (math[this.name] && (typeof math[this.name].toTex === 'function' || _typeof(math[this.name].toTex) === 'object' || typeof math[this.name].toTex === 'string')) {
      // .toTex is a callback function
      latexConverter = math[this.name].toTex;
    }

    var customToTex;

    switch (_typeof(latexConverter)) {
      case 'function':
        // a callback function
        customToTex = latexConverter(this, options);
        break;

      case 'string':
        // a template string
        customToTex = expandTemplate(latexConverter, this, options);
        break;

      case 'object':
        // an object with different "converters" for different numbers of arguments
        switch (_typeof(latexConverter[args.length])) {
          case 'function':
            customToTex = latexConverter[args.length](this, options);
            break;

          case 'string':
            customToTex = expandTemplate(latexConverter[args.length], this, options);
            break;
        }

    }

    if (typeof customToTex !== 'undefined') {
      return customToTex;
    }

    return expandTemplate(latex.defaultTemplate, this, options);
  };
  /**
   * Get identifier.
   * @return {string}
   */


  FunctionNode.prototype.getIdentifier = function () {
    return this.type + ':' + this.name;
  };

  return FunctionNode;
}

exports.name = 'FunctionNode';
exports.path = 'expression.node';
exports.math = true; // request access to the math namespace as 5th argument of the factory function

exports.factory = factory;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(31);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var divideScalar = load(__webpack_require__(12));
  var addScalar = load(__webpack_require__(17));
  var multiply = load(__webpack_require__(10));
  var unaryMinus = load(__webpack_require__(39));
  var det = load(__webpack_require__(128));
  var identity = load(__webpack_require__(50));
  var abs = load(__webpack_require__(25));
  /**
   * Calculate the inverse of a square matrix.
   *
   * Syntax:
   *
   *     math.inv(x)
   *
   * Examples:
   *
   *     math.inv([[1, 2], [3, 4]])  // returns [[-2, 1], [1.5, -0.5]]
   *     math.inv(4)                 // returns 0.25
   *     1 / 4                       // returns 0.25
   *
   * See also:
   *
   *     det, transpose
   *
   * @param {number | Complex | Array | Matrix} x     Matrix to be inversed
   * @return {number | Complex | Array | Matrix} The inverse of `x`.
   */

  var inv = typed('inv', {
    'Array | Matrix': function ArrayMatrix(x) {
      var size = type.isMatrix(x) ? x.size() : util.array.size(x);

      switch (size.length) {
        case 1:
          // vector
          if (size[0] === 1) {
            if (type.isMatrix(x)) {
              return matrix([divideScalar(1, x.valueOf()[0])]);
            } else {
              return [divideScalar(1, x[0])];
            }
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + util.string.format(size) + ')');
          }

        case 2:
          // two dimensional array
          var rows = size[0];
          var cols = size[1];

          if (rows === cols) {
            if (type.isMatrix(x)) {
              return matrix(_inv(x.valueOf(), rows, cols), x.storage());
            } else {
              // return an Array
              return _inv(x, rows, cols);
            }
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + util.string.format(size) + ')');
          }

        default:
          // multi dimensional array
          throw new RangeError('Matrix must be two dimensional ' + '(size: ' + util.string.format(size) + ')');
      }
    },
    'any': function any(x) {
      // scalar
      return divideScalar(1, x); // FIXME: create a BigNumber one when configured for bignumbers
    }
  });
  /**
   * Calculate the inverse of a square matrix
   * @param {Array[]} mat     A square matrix
   * @param {number} rows     Number of rows
   * @param {number} cols     Number of columns, must equal rows
   * @return {Array[]} inv    Inverse matrix
   * @private
   */

  function _inv(mat, rows, cols) {
    var r, s, f, value, temp;

    if (rows === 1) {
      // this is a 1 x 1 matrix
      value = mat[0][0];

      if (value === 0) {
        throw Error('Cannot calculate inverse, determinant is zero');
      }

      return [[divideScalar(1, value)]];
    } else if (rows === 2) {
      // this is a 2 x 2 matrix
      var d = det(mat);

      if (d === 0) {
        throw Error('Cannot calculate inverse, determinant is zero');
      }

      return [[divideScalar(mat[1][1], d), divideScalar(unaryMinus(mat[0][1]), d)], [divideScalar(unaryMinus(mat[1][0]), d), divideScalar(mat[0][0], d)]];
    } else {
      // this is a matrix of 3 x 3 or larger
      // calculate inverse using gauss-jordan elimination
      //      https://en.wikipedia.org/wiki/Gaussian_elimination
      //      http://mathworld.wolfram.com/MatrixInverse.html
      //      http://math.uww.edu/~mcfarlat/inverse.htm
      // make a copy of the matrix (only the arrays, not of the elements)
      var A = mat.concat();

      for (r = 0; r < rows; r++) {
        A[r] = A[r].concat();
      } // create an identity matrix which in the end will contain the
      // matrix inverse


      var B = identity(rows).valueOf(); // loop over all columns, and perform row reductions

      for (var c = 0; c < cols; c++) {
        // Pivoting: Swap row c with row r, where row r contains the largest element A[r][c]
        var ABig = abs(A[c][c]);
        var rBig = c;
        r = c + 1;

        while (r < rows) {
          if (abs(A[r][c]) > ABig) {
            ABig = abs(A[r][c]);
            rBig = r;
          }

          r++;
        }

        if (ABig === 0) {
          throw Error('Cannot calculate inverse, determinant is zero');
        }

        r = rBig;

        if (r !== c) {
          temp = A[c];
          A[c] = A[r];
          A[r] = temp;
          temp = B[c];
          B[c] = B[r];
          B[r] = temp;
        } // eliminate non-zero values on the other rows at column c


        var Ac = A[c];
        var Bc = B[c];

        for (r = 0; r < rows; r++) {
          var Ar = A[r];
          var Br = B[r];

          if (r !== c) {
            // eliminate value at column c and row r
            if (Ar[c] !== 0) {
              f = divideScalar(unaryMinus(Ar[c]), Ac[c]); // add (f * row c) to row r to eliminate the value
              // at column c

              for (s = c; s < cols; s++) {
                Ar[s] = addScalar(Ar[s], multiply(f, Ac[s]));
              }

              for (s = 0; s < cols; s++) {
                Br[s] = addScalar(Br[s], multiply(f, Bc[s]));
              }
            }
          } else {
            // normalize value at Acc to 1,
            // divide each value on row r with the value at Acc
            f = Ac[c];

            for (s = c; s < cols; s++) {
              Ar[s] = divideScalar(Ar[s], f);
            }

            for (s = 0; s < cols; s++) {
              Br[s] = divideScalar(Br[s], f);
            }
          }
        }
      }

      return B;
    }
  }

  inv.toTex = {
    1: "\\left(${args[0]}\\right)^{-1}"
  };
  return inv;
}

exports.name = 'inv';
exports.factory = factory;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Compute the complex conjugate of a complex value.
   * If `x = a+bi`, the complex conjugate of `x` is `a - bi`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.conj(x)
   *
   * Examples:
   *
   *    math.conj(math.complex('2 + 3i'))  // returns Complex 2 - 3i
   *    math.conj(math.complex('2 - 3i'))  // returns Complex 2 + 3i
   *    math.conj(math.complex('-5.2i'))  // returns Complex 5.2i
   *
   * See also:
   *
   *    re, im, arg, abs
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            A complex number or array with complex numbers
   * @return {number | BigNumber | Complex | Array | Matrix}
   *            The complex conjugate of x
   */
  var conj = typed('conj', {
    'number': function number(x) {
      return x;
    },
    'BigNumber': function BigNumber(x) {
      return x;
    },
    'Complex': function Complex(x) {
      return x.conjugate();
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, conj);
    }
  });
  conj.toTex = {
    1: "\\left(${args[0]}\\right)^*"
  };
  return conj;
}

exports.name = 'conj';
exports.factory = factory;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(5).clone;

var format = __webpack_require__(9).format;

function factory(type, config, load, typed) {
  var latex = __webpack_require__(4);

  var matrix = load(__webpack_require__(0));
  var DenseMatrix = type.DenseMatrix;
  var SparseMatrix = type.SparseMatrix;
  /**
   * Transpose a matrix. All values of the matrix are reflected over its
   * main diagonal. Only applicable to two dimensional matrices containing
   * a vector (i.e. having size `[1,n]` or `[n,1]`). One dimensional
   * vectors and scalars return the input unchanged.
   *
   * Syntax:
   *
   *     math.transpose(x)
   *
   * Examples:
   *
   *     const A = [[1, 2, 3], [4, 5, 6]]
   *     math.transpose(A)               // returns [[1, 4], [2, 5], [3, 6]]
   *
   * See also:
   *
   *     diag, inv, subset, squeeze
   *
   * @param {Array | Matrix} x  Matrix to be transposed
   * @return {Array | Matrix}   The transposed matrix
   */

  var transpose = typed('transpose', {
    'Array': function Array(x) {
      // use dense matrix implementation
      return transpose(matrix(x)).valueOf();
    },
    'Matrix': function Matrix(x) {
      // matrix size
      var size = x.size(); // result

      var c; // process dimensions

      switch (size.length) {
        case 1:
          // vector
          c = x.clone();
          break;

        case 2:
          // rows and columns
          var rows = size[0];
          var columns = size[1]; // check columns

          if (columns === 0) {
            // throw exception
            throw new RangeError('Cannot transpose a 2D matrix with no columns (size: ' + format(size) + ')');
          } // process storage format


          switch (x.storage()) {
            case 'dense':
              c = _denseTranspose(x, rows, columns);
              break;

            case 'sparse':
              c = _sparseTranspose(x, rows, columns);
              break;
          }

          break;

        default:
          // multi dimensional
          throw new RangeError('Matrix must be a vector or two dimensional (size: ' + format(this._size) + ')');
      }

      return c;
    },
    // scalars
    'any': function any(x) {
      return clone(x);
    }
  });

  function _denseTranspose(m, rows, columns) {
    // matrix array
    var data = m._data; // transposed matrix data

    var transposed = [];
    var transposedRow; // loop columns

    for (var j = 0; j < columns; j++) {
      // initialize row
      transposedRow = transposed[j] = []; // loop rows

      for (var i = 0; i < rows; i++) {
        // set data
        transposedRow[i] = clone(data[i][j]);
      }
    } // return matrix


    return new DenseMatrix({
      data: transposed,
      size: [columns, rows],
      datatype: m._datatype
    });
  }

  function _sparseTranspose(m, rows, columns) {
    // matrix arrays
    var values = m._values;
    var index = m._index;
    var ptr = m._ptr; // result matrices

    var cvalues = values ? [] : undefined;
    var cindex = [];
    var cptr = []; // row counts

    var w = [];

    for (var x = 0; x < rows; x++) {
      w[x] = 0;
    } // vars


    var p, l, j; // loop values in matrix

    for (p = 0, l = index.length; p < l; p++) {
      // number of values in row
      w[index[p]]++;
    } // cumulative sum


    var sum = 0; // initialize cptr with the cummulative sum of row counts

    for (var i = 0; i < rows; i++) {
      // update cptr
      cptr.push(sum); // update sum

      sum += w[i]; // update w

      w[i] = cptr[i];
    } // update cptr


    cptr.push(sum); // loop columns

    for (j = 0; j < columns; j++) {
      // values & index in column
      for (var k0 = ptr[j], k1 = ptr[j + 1], k = k0; k < k1; k++) {
        // C values & index
        var q = w[index[k]]++; // C[j, i] = A[i, j]

        cindex[q] = j; // check we need to process values (pattern matrix)

        if (values) {
          cvalues[q] = clone(values[k]);
        }
      }
    } // return matrix


    return new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [columns, rows],
      datatype: m._datatype
    });
  }

  transpose.toTex = {
    1: "\\left(${args[0]}\\right)".concat(latex.operators['transpose'])
  };
  return transpose;
}

exports.name = 'transpose';
exports.factory = factory;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Test whether a value is positive: larger than zero.
   * The function supports types `number`, `BigNumber`, `Fraction`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isPositive(x)
   *
   * Examples:
   *
   *    math.isPositive(3)                     // returns true
   *    math.isPositive(-2)                    // returns false
   *    math.isPositive(0)                     // returns false
   *    math.isPositive(-0)                    // returns false
   *    math.isPositive(0.5)                   // returns true
   *    math.isPositive(math.bignumber(2))     // returns true
   *    math.isPositive(math.fraction(-2, 5))  // returns false
   *    math.isPositive(math.fraction(1,3))    // returns false
   *    math.isPositive('2')                   // returns true
   *    math.isPositive([2, 0, -3])            // returns [true, false, false]
   *
   * See also:
   *
   *    isNumeric, isZero, isNegative, isInteger
   *
   * @param {number | BigNumber | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is larger than zero.
   *                    Throws an error in case of an unknown data type.
   */
  var isPositive = typed('isPositive', {
    'number': function number(x) {
      return x > 0;
    },
    'BigNumber': function BigNumber(x) {
      return !x.isNeg() && !x.isZero() && !x.isNaN();
    },
    'Fraction': function Fraction(x) {
      return x.s > 0 && x.n > 0;
    },
    'Unit': function Unit(x) {
      return isPositive(x.value);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, isPositive);
    }
  });
  return isPositive;
}

exports.name = 'isPositive';
exports.factory = factory;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scatter = __webpack_require__(234);

var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(11));
  var SparseMatrix = type.SparseMatrix;
  /**
   * Iterates over SparseMatrix A and SparseMatrix B nonzero items and invokes the callback function f(Aij, Bij).
   * Callback function invoked (Anz U Bnz) times, where Anz and Bnz are the nonzero elements in both matrices.
   *
   *
   *          ┌  f(Aij, Bij)  ; A(i,j) !== 0 && B(i,j) !== 0
   * C(i,j) = ┤
   *          └  0            ; otherwise
   *
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */

  var algorithm06 = function algorithm06(a, b, callback) {
    // sparse matrix arrays
    var avalues = a._values;
    var asize = a._size;
    var adt = a._datatype; // sparse matrix arrays

    var bvalues = b._values;
    var bsize = b._size;
    var bdt = b._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // equal signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // find signature that matches (dt, dt)

      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cvalues = avalues && bvalues ? [] : undefined;
    var cindex = [];
    var cptr = []; // matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    }); // workspaces

    var x = cvalues ? [] : undefined; // marks indicating we have a value in x for a given column

    var w = []; // marks indicating value in a given row has been updated

    var u = []; // loop columns

    for (var j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length; // columns mark

      var mark = j + 1; // scatter the values of A(:,j) into workspace

      scatter(a, j, w, x, u, mark, c, cf); // scatter the values of B(:,j) into workspace

      scatter(b, j, w, x, u, mark, c, cf); // check we need to process values (non pattern matrix)

      if (x) {
        // initialize first index in j
        var k = cptr[j]; // loop index in j

        while (k < cindex.length) {
          // row
          var i = cindex[k]; // check function was invoked on current row (Aij !=0 && Bij != 0)

          if (u[i] === mark) {
            // value @ i
            var v = x[i]; // check for zero value

            if (!eq(v, zero)) {
              // push value
              cvalues.push(v); // increment pointer

              k++;
            } else {
              // remove value @ i, do not increment pointer
              cindex.splice(k, 1);
            }
          } else {
            // remove value @ i, do not increment pointer
            cindex.splice(k, 1);
          }
        }
      } else {
        // initialize first index in j
        var p = cptr[j]; // loop index in j

        while (p < cindex.length) {
          // row
          var r = cindex[p]; // check function was invoked on current row (Aij !=0 && Bij != 0)

          if (u[r] !== mark) {
            // remove value @ i, do not increment pointer
            cindex.splice(p, 1);
          } else {
            // increment pointer
            p++;
          }
        }
      }
    } // update cptr


    cptr[columns] = cindex.length; // return sparse matrix

    return c;
  };

  return algorithm06;
}

exports.name = 'algorithm06';
exports.factory = factory;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  var gamma = load(__webpack_require__(141));

  var latex = __webpack_require__(4);
  /**
   * Compute the factorial of a value
   *
   * Factorial only supports an integer value as argument.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.factorial(n)
   *
   * Examples:
   *
   *    math.factorial(5)    // returns 120
   *    math.factorial(3)    // returns 6
   *
   * See also:
   *
   *    combinations, gamma, permutations
   *
   * @param {number | BigNumber | Array | Matrix} n   An integer number
   * @return {number | BigNumber | Array | Matrix}    The factorial of `n`
   */


  var factorial = typed('factorial', {
    'number': function number(n) {
      if (n < 0) {
        throw new Error('Value must be non-negative');
      }

      return gamma(n + 1);
    },
    'BigNumber': function BigNumber(n) {
      if (n.isNegative()) {
        throw new Error('Value must be non-negative');
      }

      return gamma(n.plus(1));
    },
    'Array | Matrix': function ArrayMatrix(n) {
      return deepMap(n, factorial);
    }
  });
  factorial.toTex = {
    1: "\\left(${args[0]}\\right)".concat(latex.operators['factorial'])
  };
  return factorial;
}

exports.name = 'factorial';
exports.factory = factory;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(3).isInteger;

var product = __webpack_require__(95);

function factory(type, config, load, typed) {
  /**
   * Compute the number of ways of picking `k` unordered outcomes from `n`
   * possibilities.
   *
   * Combinations only takes integer arguments.
   * The following condition must be enforced: k <= n.
   *
   * Syntax:
   *
   *     math.combinations(n, k)
   *
   * Examples:
   *
   *    math.combinations(7, 5) // returns 21
   *
   * See also:
   *
   *    permutations, factorial
   *
   * @param {number | BigNumber} n    Total number of objects in the set
   * @param {number | BigNumber} k    Number of objects in the subset
   * @return {number | BigNumber}     Number of possible combinations.
   */
  var combinations = typed('combinations', {
    'number, number': function numberNumber(n, k) {
      var prodrange, nMinusk;

      if (!isInteger(n) || n < 0) {
        throw new TypeError('Positive integer value expected in function combinations');
      }

      if (!isInteger(k) || k < 0) {
        throw new TypeError('Positive integer value expected in function combinations');
      }

      if (k > n) {
        throw new TypeError('k must be less than or equal to n');
      }

      nMinusk = n - k;

      if (k < nMinusk) {
        prodrange = product(nMinusk + 1, n);
        return prodrange / product(1, k);
      }

      prodrange = product(k + 1, n);
      return prodrange / product(1, nMinusk);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(n, k) {
      var max, result, i, ii;
      var one = new type.BigNumber(1);

      if (!isPositiveInteger(n) || !isPositiveInteger(k)) {
        throw new TypeError('Positive integer value expected in function combinations');
      }

      if (k.gt(n)) {
        throw new TypeError('k must be less than n in function combinations');
      }

      max = n.minus(k);
      if (k.lt(max)) max = k;
      result = one;

      for (i = one, ii = n.minus(max); i.lte(ii); i = i.plus(1)) {
        result = result.times(max.plus(i)).dividedBy(i);
      }

      return result;
    } // TODO: implement support for collection in combinations

  });
  combinations.toTex = {
    2: "\\binom{${args[0]}}{${args[1]}}"
  };
  return combinations;
}
/**
 * Test whether BigNumber n is a positive integer
 * @param {BigNumber} n
 * @returns {boolean} isPositiveInteger
 */


function isPositiveInteger(n) {
  return n.isInteger() && n.gte(0);
}

exports.name = 'combinations';
exports.factory = factory;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var smaller = load(__webpack_require__(38));
  var larger = load(__webpack_require__(33));
  var smallerEq = load(__webpack_require__(144));
  var largerEq = load(__webpack_require__(89));
  var ZERO = new type.BigNumber(0);
  var ONE = new type.BigNumber(1);
  /**
   * Create an array from a range.
   * By default, the range end is excluded. This can be customized by providing
   * an extra parameter `includeEnd`.
   *
   * Syntax:
   *
   *     math.range(str [, includeEnd])               // Create a range from a string,
   *                                                  // where the string contains the
   *                                                  // start, optional step, and end,
   *                                                  // separated by a colon.
   *     math.range(start, end [, includeEnd])        // Create a range with start and
   *                                                  // end and a step size of 1.
   *     math.range(start, end, step [, includeEnd])  // Create a range with start, step,
   *                                                  // and end.
   *
   * Where:
   *
   * - `str: string`
   *   A string 'start:end' or 'start:step:end'
   * - `start: {number | BigNumber}`
   *   Start of the range
   * - `end: number | BigNumber`
   *   End of the range, excluded by default, included when parameter includeEnd=true
   * - `step: number | BigNumber`
   *   Step size. Default value is 1.
   * - `includeEnd: boolean`
   *   Option to specify whether to include the end or not. False by default.
   *
   * Examples:
   *
   *     math.range(2, 6)        // [2, 3, 4, 5]
   *     math.range(2, -3, -1)   // [2, 1, 0, -1, -2]
   *     math.range('2:1:6')     // [2, 3, 4, 5]
   *     math.range(2, 6, true)  // [2, 3, 4, 5, 6]
   *
   * See also:
   *
   *     ones, zeros, size, subset
   *
   * @param {*} args   Parameters describing the ranges `start`, `end`, and optional `step`.
   * @return {Array | Matrix} range
   */

  var range = typed('range', {
    // TODO: simplify signatures when typed-function supports default values and optional arguments
    // TODO: a number or boolean should not be converted to string here
    'string': _strRange,
    'string, boolean': _strRange,
    'number, number': function numberNumber(start, end) {
      return _out(_rangeEx(start, end, 1));
    },
    'number, number, number': function numberNumberNumber(start, end, step) {
      return _out(_rangeEx(start, end, step));
    },
    'number, number, boolean': function numberNumberBoolean(start, end, includeEnd) {
      return includeEnd ? _out(_rangeInc(start, end, 1)) : _out(_rangeEx(start, end, 1));
    },
    'number, number, number, boolean': function numberNumberNumberBoolean(start, end, step, includeEnd) {
      return includeEnd ? _out(_rangeInc(start, end, step)) : _out(_rangeEx(start, end, step));
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(start, end) {
      return _out(_bigRangeEx(start, end, ONE));
    },
    'BigNumber, BigNumber, BigNumber': function BigNumberBigNumberBigNumber(start, end, step) {
      return _out(_bigRangeEx(start, end, step));
    },
    'BigNumber, BigNumber, boolean': function BigNumberBigNumberBoolean(start, end, includeEnd) {
      return includeEnd ? _out(_bigRangeInc(start, end, ONE)) : _out(_bigRangeEx(start, end, ONE));
    },
    'BigNumber, BigNumber, BigNumber, boolean': function BigNumberBigNumberBigNumberBoolean(start, end, step, includeEnd) {
      return includeEnd ? _out(_bigRangeInc(start, end, step)) : _out(_bigRangeEx(start, end, step));
    }
  });
  range.toTex = undefined; // use default template

  return range;

  function _out(arr) {
    return config.matrix === 'Array' ? arr : matrix(arr);
  }

  function _strRange(str, includeEnd) {
    var r = _parse(str);

    if (!r) {
      throw new SyntaxError('String "' + str + '" is no valid range');
    }

    var fn;

    if (config.number === 'BigNumber') {
      fn = includeEnd ? _bigRangeInc : _bigRangeEx;
      return _out(fn(new type.BigNumber(r.start), new type.BigNumber(r.end), new type.BigNumber(r.step)));
    } else {
      fn = includeEnd ? _rangeInc : _rangeEx;
      return _out(fn(r.start, r.end, r.step));
    }
  }
  /**
   * Create a range with numbers. End is excluded
   * @param {number} start
   * @param {number} end
   * @param {number} step
   * @returns {Array} range
   * @private
   */


  function _rangeEx(start, end, step) {
    var array = [];
    var x = start;

    if (step > 0) {
      while (smaller(x, end)) {
        array.push(x);
        x += step;
      }
    } else if (step < 0) {
      while (larger(x, end)) {
        array.push(x);
        x += step;
      }
    }

    return array;
  }
  /**
   * Create a range with numbers. End is included
   * @param {number} start
   * @param {number} end
   * @param {number} step
   * @returns {Array} range
   * @private
   */


  function _rangeInc(start, end, step) {
    var array = [];
    var x = start;

    if (step > 0) {
      while (smallerEq(x, end)) {
        array.push(x);
        x += step;
      }
    } else if (step < 0) {
      while (largerEq(x, end)) {
        array.push(x);
        x += step;
      }
    }

    return array;
  }
  /**
   * Create a range with big numbers. End is excluded
   * @param {BigNumber} start
   * @param {BigNumber} end
   * @param {BigNumber} step
   * @returns {Array} range
   * @private
   */


  function _bigRangeEx(start, end, step) {
    var array = [];
    var x = start;

    if (step.gt(ZERO)) {
      while (smaller(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    } else if (step.lt(ZERO)) {
      while (larger(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    }

    return array;
  }
  /**
   * Create a range with big numbers. End is included
   * @param {BigNumber} start
   * @param {BigNumber} end
   * @param {BigNumber} step
   * @returns {Array} range
   * @private
   */


  function _bigRangeInc(start, end, step) {
    var array = [];
    var x = start;

    if (step.gt(ZERO)) {
      while (smallerEq(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    } else if (step.lt(ZERO)) {
      while (largerEq(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    }

    return array;
  }
  /**
   * Parse a string into a range,
   * The string contains the start, optional step, and end, separated by a colon.
   * If the string does not contain a valid range, null is returned.
   * For example str='0:2:11'.
   * @param {string} str
   * @return {{start: number, end: number, step: number} | null} range Object containing properties start, end, step
   * @private
   */


  function _parse(str) {
    var args = str.split(':'); // number

    var nums = args.map(function (arg) {
      // use Number and not parseFloat as Number returns NaN on invalid garbage in the string
      return Number(arg);
    });
    var invalid = nums.some(function (num) {
      return isNaN(num);
    });

    if (invalid) {
      return null;
    }

    switch (nums.length) {
      case 2:
        return {
          start: nums[0],
          end: nums[1],
          step: 1
        };

      case 3:
        return {
          start: nums[0],
          end: nums[2],
          step: nums[1]
        };

      default:
        return null;
    }
  }
}

exports.name = 'range';
exports.factory = factory;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(5).clone;

var array = __webpack_require__(2);

var IndexError = __webpack_require__(48);

var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var isInteger = load(__webpack_require__(34));
  /**
   * Concatenate two or more matrices.
   *
   * Syntax:
   *
   *     math.concat(A, B, C, ...)
   *     math.concat(A, B, C, ..., dim)
   *
   * Where:
   *
   * - `dim: number` is a zero-based dimension over which to concatenate the matrices.
   *   By default the last dimension of the matrices.
   *
   * Examples:
   *
   *    const A = [[1, 2], [5, 6]]
   *    const B = [[3, 4], [7, 8]]
   *
   *    math.concat(A, B)                  // returns [[1, 2, 3, 4], [5, 6, 7, 8]]
   *    math.concat(A, B, 0)               // returns [[1, 2], [5, 6], [3, 4], [7, 8]]
   *    math.concat('hello', ' ', 'world') // returns 'hello world'
   *
   * See also:
   *
   *    size, squeeze, subset, transpose
   *
   * @param {... Array | Matrix} args     Two or more matrices
   * @return {Array | Matrix} Concatenated matrix
   */

  var concat = typed('concat', {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    '...Array | Matrix | number | BigNumber': function ArrayMatrixNumberBigNumber(args) {
      var i;
      var len = args.length;
      var dim = -1; // zero-based dimension

      var prevDim;
      var asMatrix = false;
      var matrices = []; // contains multi dimensional arrays

      for (i = 0; i < len; i++) {
        var arg = args[i]; // test whether we need to return a Matrix (if not we return an Array)

        if (type.isMatrix(arg)) {
          asMatrix = true;
        }

        if (type.isNumber(arg) || type.isBigNumber(arg)) {
          if (i !== len - 1) {
            throw new Error('Dimension must be specified as last argument');
          } // last argument contains the dimension on which to concatenate


          prevDim = dim;
          dim = arg.valueOf(); // change BigNumber to number

          if (!isInteger(dim)) {
            throw new TypeError('Integer number expected for dimension');
          }

          if (dim < 0 || i > 0 && dim > prevDim) {
            // TODO: would be more clear when throwing a DimensionError here
            throw new IndexError(dim, prevDim + 1);
          }
        } else {
          // this is a matrix or array
          var m = clone(arg).valueOf();
          var size = array.size(m);
          matrices[i] = m;
          prevDim = dim;
          dim = size.length - 1; // verify whether each of the matrices has the same number of dimensions

          if (i > 0 && dim !== prevDim) {
            throw new DimensionError(prevDim + 1, dim + 1);
          }
        }
      }

      if (matrices.length === 0) {
        throw new SyntaxError('At least one matrix expected');
      }

      var res = matrices.shift();

      while (matrices.length) {
        res = _concat(res, matrices.shift(), dim, 0);
      }

      return asMatrix ? matrix(res) : res;
    },
    '...string': function string(args) {
      return args.join('');
    }
  });
  concat.toTex = undefined; // use default template

  return concat;
}
/**
 * Recursively concatenate two matrices.
 * The contents of the matrices is not cloned.
 * @param {Array} a             Multi dimensional array
 * @param {Array} b             Multi dimensional array
 * @param {number} concatDim    The dimension on which to concatenate (zero-based)
 * @param {number} dim          The current dim (zero-based)
 * @return {Array} c            The concatenated matrix
 * @private
 */


function _concat(a, b, concatDim, dim) {
  if (dim < concatDim) {
    // recurse into next dimension
    if (a.length !== b.length) {
      throw new DimensionError(a.length, b.length);
    }

    var c = [];

    for (var i = 0; i < a.length; i++) {
      c[i] = _concat(a[i], b[i], concatDim, dim + 1);
    }

    return c;
  } else {
    // concatenate this dimension
    return a.concat(b);
  }
}

exports.name = 'concat';
exports.factory = factory;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Test whether a value is NaN (not a number).
   * The function supports types `number`, `BigNumber`, `Fraction`, `Unit` and `Complex`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isNaN(x)
   *
   * Examples:
   *
   *    math.isNaN(3)                     // returns false
   *    math.isNaN(NaN)                   // returns true
   *    math.isNaN(0)                     // returns false
   *    math.isNaN(math.bignumber(NaN))   // returns true
   *    math.isNaN(math.bignumber(0))     // returns false
   *    math.isNaN(math.fraction(-2, 5))  // returns false
   *    math.isNaN('-2')                  // returns false
   *    math.isNaN([2, 0, -3, NaN]')      // returns [false, false, false, true]
   *
   * See also:
   *
   *    isNumeric, isNegative, isPositive, isZero, isInteger
   *
   * @param {number | BigNumber | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is NaN.
   *                    Throws an error in case of an unknown data type.
   */
  var isNaN = typed('isNaN', {
    'number': function number(x) {
      return Number.isNaN(x);
    },
    'BigNumber': function BigNumber(x) {
      return x.isNaN();
    },
    'Fraction': function Fraction(x) {
      return false;
    },
    'Complex': function Complex(x) {
      return x.isNaN();
    },
    'Unit': function Unit(x) {
      return Number.isNaN(x.value);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, Number.isNaN);
    }
  });
  return isNaN;
}

exports.name = 'isNaN';
exports.factory = factory;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arraySize = __webpack_require__(2).size;

var isMatrix = __webpack_require__(56);

var IndexError = __webpack_require__(48);
/**
 * Reduce a given matrix or array to a new matrix or
 * array with one less dimension, applying the given
 * callback in the selected dimension.
 * @param {Array | Matrix} mat
 * @param {number} dim
 * @param {Function} callback
 * @return {Array | Matrix} res
 */


module.exports = function (mat, dim, callback) {
  var size = Array.isArray(mat) ? arraySize(mat) : mat.size();

  if (dim < 0 || dim >= size.length) {
    // TODO: would be more clear when throwing a DimensionError here
    throw new IndexError(dim, size.length);
  }

  if (isMatrix(mat)) {
    return mat.create(_reduce(mat.valueOf(), dim, callback));
  } else {
    return _reduce(mat, dim, callback);
  }
};
/**
 * Recursively reduce a matrix
 * @param {Array} mat
 * @param {number} dim
 * @param {Function} callback
 * @returns {Array} ret
 * @private
 */


function _reduce(mat, dim, callback) {
  var i, ret, val, tran;

  if (dim <= 0) {
    if (!Array.isArray(mat[0])) {
      val = mat[0];

      for (i = 1; i < mat.length; i++) {
        val = callback(val, mat[i]);
      }

      return val;
    } else {
      tran = _switch(mat);
      ret = [];

      for (i = 0; i < tran.length; i++) {
        ret[i] = _reduce(tran[i], dim - 1, callback);
      }

      return ret;
    }
  } else {
    ret = [];

    for (i = 0; i < mat.length; i++) {
      ret[i] = _reduce(mat[i], dim - 1, callback);
    }

    return ret;
  }
}
/**
 * Transpose a matrix
 * @param {Array} mat
 * @returns {Array} ret
 * @private
 */


function _switch(mat) {
  var I = mat.length;
  var J = mat[0].length;
  var i, j;
  var ret = [];

  for (j = 0; j < J; j++) {
    var tmp = [];

    for (i = 0; i < I; i++) {
      tmp.push(mat[i][j]);
    }

    ret.push(tmp);
  }

  return ret;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Test whether a value is a BigNumber
 * @param {*} x
 * @return {boolean}
 */

module.exports = function isBigNumber(x) {
  return x && x.constructor.prototype.isBigNumber || false;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Complex = __webpack_require__(178);

var format = __webpack_require__(3).format;

var isNumber = __webpack_require__(3).isNumber;

function factory(type, config, load, typed, math) {
  /**
   * Attach type information
   */
  Complex.prototype.type = 'Complex';
  Complex.prototype.isComplex = true;
  /**
   * Get a JSON representation of the complex number
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Complex", "re": 2, "im": 3}`
   */

  Complex.prototype.toJSON = function () {
    return {
      mathjs: 'Complex',
      re: this.re,
      im: this.im
    };
  };
  /*
   * Return the value of the complex number in polar notation
   * The angle phi will be set in the interval of [-pi, pi].
   * @return {{r: number, phi: number}} Returns and object with properties r and phi.
   */


  Complex.prototype.toPolar = function () {
    return {
      r: this.abs(),
      phi: this.arg()
    };
  };
  /**
   * Get a string representation of the complex number,
   * with optional formatting options.
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @return {string} str
   */


  Complex.prototype.format = function (options) {
    var str = '';
    var im = this.im;
    var re = this.re;
    var strRe = format(this.re, options);
    var strIm = format(this.im, options); // round either re or im when smaller than the configured precision

    var precision = isNumber(options) ? options : options ? options.precision : null;

    if (precision !== null) {
      var epsilon = Math.pow(10, -precision);

      if (Math.abs(re / im) < epsilon) {
        re = 0;
      }

      if (Math.abs(im / re) < epsilon) {
        im = 0;
      }
    }

    if (im === 0) {
      // real value
      str = strRe;
    } else if (re === 0) {
      // purely complex value
      if (im === 1) {
        str = 'i';
      } else if (im === -1) {
        str = '-i';
      } else {
        str = strIm + 'i';
      }
    } else {
      // complex value
      if (im < 0) {
        if (im === -1) {
          str = strRe + ' - i';
        } else {
          str = strRe + ' - ' + strIm.substring(1) + 'i';
        }
      } else {
        if (im === 1) {
          str = strRe + ' + i';
        } else {
          str = strRe + ' + ' + strIm + 'i';
        }
      }
    }

    return str;
  };
  /**
   * Create a complex number from polar coordinates
   *
   * Usage:
   *
   *     Complex.fromPolar(r: number, phi: number) : Complex
   *     Complex.fromPolar({r: number, phi: number}) : Complex
   *
   * @param {*} args...
   * @return {Complex}
   */


  Complex.fromPolar = function (args) {
    switch (arguments.length) {
      case 1:
        var arg = arguments[0];

        if (_typeof(arg) === 'object') {
          return Complex(arg);
        }

        throw new TypeError('Input has to be an object with r and phi keys.');

      case 2:
        var r = arguments[0];
        var phi = arguments[1];

        if (isNumber(r)) {
          if (type.isUnit(phi) && phi.hasBase('ANGLE')) {
            // convert unit to a number in radians
            phi = phi.toNumber('rad');
          }

          if (isNumber(phi)) {
            return new Complex({
              r: r,
              phi: phi
            });
          }

          throw new TypeError('Phi is not a number nor an angle unit.');
        } else {
          throw new TypeError('Radius r is not a number.');
        }

      default:
        throw new SyntaxError('Wrong number of arguments in function fromPolar');
    }
  };

  Complex.prototype.valueOf = Complex.prototype.toString;
  /**
   * Create a Complex number from a JSON object
   * @param {Object} json  A JSON Object structured as
   *                       {"mathjs": "Complex", "re": 2, "im": 3}
   *                       All properties are optional, default values
   *                       for `re` and `im` are 0.
   * @return {Complex} Returns a new Complex number
   */

  Complex.fromJSON = function (json) {
    return new Complex(json);
  }; // apply the current epsilon


  Complex.EPSILON = config.epsilon; // listen for changed in the configuration, automatically apply changed epsilon

  math.on('config', function (curr, prev) {
    if (curr.epsilon !== prev.epsilon) {
      Complex.EPSILON = curr.epsilon;
    }
  });
  /**
   * Compare two complex numbers, `a` and `b`:
   *
   * - Returns 1 when the real part of `a` is larger than the real part of `b`
   * - Returns -1 when the real part of `a` is smaller than the real part of `b`
   * - Returns 1 when the real parts are equal
   *   and the imaginary part of `a` is larger than the imaginary part of `b`
   * - Returns -1 when the real parts are equal
   *   and the imaginary part of `a` is smaller than the imaginary part of `b`
   * - Returns 0 when both real and imaginary parts are equal.
   *
   * @params {Complex} a
   * @params {Complex} b
   * @returns {number} Returns the comparison result: -1, 0, or 1
   */

  Complex.compare = function (a, b) {
    if (a.re > b.re) {
      return 1;
    }

    if (a.re < b.re) {
      return -1;
    }

    if (a.im > b.im) {
      return 1;
    }

    if (a.im < b.im) {
      return -1;
    }

    return 0;
  };

  return Complex;
}

exports.name = 'Complex';
exports.path = 'type';
exports.factory = factory;
exports.math = true; // request access to the math namespace

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Create a fraction convert a value to a fraction.
   *
   * Syntax:
   *     math.fraction(numerator, denominator)
   *     math.fraction({n: numerator, d: denominator})
   *     math.fraction(matrix: Array | Matrix)         Turn all matrix entries
   *                                                   into fractions
   *
   * Examples:
   *
   *     math.fraction(1, 3)
   *     math.fraction('2/3')
   *     math.fraction({n: 2, d: 3})
   *     math.fraction([0.2, 0.25, 1.25])
   *
   * See also:
   *
   *    bignumber, number, string, unit
   *
   * @param {number | string | Fraction | BigNumber | Array | Matrix} [args]
   *            Arguments specifying the numerator and denominator of
   *            the fraction
   * @return {Fraction | Array | Matrix} Returns a fraction
   */
  var fraction = typed('fraction', {
    'number': function number(x) {
      if (!isFinite(x) || isNaN(x)) {
        throw new Error(x + ' cannot be represented as a fraction');
      }

      return new type.Fraction(x);
    },
    'string': function string(x) {
      return new type.Fraction(x);
    },
    'number, number': function numberNumber(numerator, denominator) {
      return new type.Fraction(numerator, denominator);
    },
    'null': function _null(x) {
      return new type.Fraction(0);
    },
    'BigNumber': function BigNumber(x) {
      return new type.Fraction(x.toString());
    },
    'Fraction': function Fraction(x) {
      return x; // fractions are immutable
    },
    'Object': function Object(x) {
      return new type.Fraction(x);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, fraction);
    }
  });
  return fraction;
}

exports.name = 'fraction';
exports.factory = factory;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(31);

var string = util.string;
var isString = string.isString;

function factory(type, config, load, typed) {
  /**
   * @constructor Matrix
   *
   * A Matrix is a wrapper around an Array. A matrix can hold a multi dimensional
   * array. A matrix can be constructed as:
   *
   *     let matrix = math.matrix(data)
   *
   * Matrix contains the functions to resize, get and set values, get the size,
   * clone the matrix and to convert the matrix to a vector, array, or scalar.
   * Furthermore, one can iterate over the matrix using map and forEach.
   * The internal Array of the Matrix can be accessed using the function valueOf.
   *
   * Example usage:
   *
   *     let matrix = math.matrix([[1, 2], [3, 4]])
   *     matix.size()              // [2, 2]
   *     matrix.resize([3, 2], 5)
   *     matrix.valueOf()          // [[1, 2], [3, 4], [5, 5]]
   *     matrix.subset([1,2])       // 3 (indexes are zero-based)
   *
   */
  function Matrix() {
    if (!(this instanceof Matrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
  }
  /**
   * Attach type information
   */


  Matrix.prototype.type = 'Matrix';
  Matrix.prototype.isMatrix = true;
  /**
   * Get the Matrix storage constructor for the given format.
   *
   * @param {string} format       The Matrix storage format.
   *
   * @return {Function}           The Matrix storage constructor.
   */

  Matrix.storage = function (format) {
    // check storage format is a string
    if (!isString(format)) {
      throw new TypeError('format must be a string value');
    } // get storage format constructor


    var constructor = Matrix._storage[format];

    if (!constructor) {
      throw new SyntaxError('Unsupported matrix storage format: ' + format);
    } // return storage constructor


    return constructor;
  }; // a map with all constructors for all storage types


  Matrix._storage = {};
  /**
   * Get the storage format used by the matrix.
   *
   * Usage:
   *     const format = matrix.storage()   // retrieve storage format
   *
   * @return {string}           The storage format.
   */

  Matrix.prototype.storage = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke storage on a Matrix interface');
  };
  /**
   * Get the datatype of the data stored in the matrix.
   *
   * Usage:
   *     const format = matrix.datatype()    // retrieve matrix datatype
   *
   * @return {string}           The datatype.
   */


  Matrix.prototype.datatype = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke datatype on a Matrix interface');
  };
  /**
   * Create a new Matrix With the type of the current matrix instance
   * @param {Array | Object} data
   * @param {string} [datatype]
   */


  Matrix.prototype.create = function (data, datatype) {
    throw new Error('Cannot invoke create on a Matrix interface');
  };
  /**
   * Get a subset of the matrix, or replace a subset of the matrix.
   *
   * Usage:
   *     const subset = matrix.subset(index)               // retrieve subset
   *     const value = matrix.subset(index, replacement)   // replace subset
   *
   * @param {Index} index
   * @param {Array | Matrix | *} [replacement]
   * @param {*} [defaultValue=0]      Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be filled with zeros.
   */


  Matrix.prototype.subset = function (index, replacement, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke subset on a Matrix interface');
  };
  /**
   * Get a single element from the matrix.
   * @param {number[]} index   Zero-based index
   * @return {*} value
   */


  Matrix.prototype.get = function (index) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke get on a Matrix interface');
  };
  /**
   * Replace a single element in the matrix.
   * @param {number[]} index   Zero-based index
   * @param {*} value
   * @param {*} [defaultValue]        Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be left undefined.
   * @return {Matrix} self
   */


  Matrix.prototype.set = function (index, value, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke set on a Matrix interface');
  };
  /**
   * Resize the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (resize in place).
   *
   * @param {number[]} size           The new size the matrix should have.
   * @param {*} [defaultValue=0]      Default value, filled in on new entries.
   *                                  If not provided, the matrix elements will
   *                                  be filled with zeros.
   * @param {boolean} [copy]          Return a resized copy of the matrix
   *
   * @return {Matrix}                 The resized matrix
   */


  Matrix.prototype.resize = function (size, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke resize on a Matrix interface');
  };
  /**
   * Reshape the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (reshape in place).
   *
   * @param {number[]} size           The new size the matrix should have.
   * @param {boolean} [copy]          Return a reshaped copy of the matrix
   *
   * @return {Matrix}                 The reshaped matrix
   */


  Matrix.prototype.reshape = function (size, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke reshape on a Matrix interface');
  };
  /**
   * Create a clone of the matrix
   * @return {Matrix} clone
   */


  Matrix.prototype.clone = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke clone on a Matrix interface');
  };
  /**
   * Retrieve the size of the matrix.
   * @returns {number[]} size
   */


  Matrix.prototype.size = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke size on a Matrix interface');
  };
  /**
   * Create a new matrix with the results of the callback function executed on
   * each entry of the matrix.
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @param {boolean} [skipZeros] Invoke callback function for non-zero values only.
   *
   * @return {Matrix} matrix
   */


  Matrix.prototype.map = function (callback, skipZeros) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke map on a Matrix interface');
  };
  /**
   * Execute a callback function on each entry of the matrix.
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   */


  Matrix.prototype.forEach = function (callback) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke forEach on a Matrix interface');
  };
  /**
   * Create an Array with a copy of the data of the Matrix
   * @returns {Array} array
   */


  Matrix.prototype.toArray = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke toArray on a Matrix interface');
  };
  /**
   * Get the primitive value of the Matrix: a multidimensional array
   * @returns {Array} array
   */


  Matrix.prototype.valueOf = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke valueOf on a Matrix interface');
  };
  /**
   * Get a string representation of the matrix, with optional formatting options.
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */


  Matrix.prototype.format = function (options) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke format on a Matrix interface');
  };
  /**
   * Get a string representation of the matrix
   * @returns {string} str
   */


  Matrix.prototype.toString = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke toString on a Matrix interface');
  }; // exports


  return Matrix;
}

exports.name = 'Matrix';
exports.path = 'type';
exports.factory = factory;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(11));
  var SparseMatrix = type.SparseMatrix;
  /**
   * Iterates over SparseMatrix A and SparseMatrix B nonzero items and invokes the callback function f(Aij, Bij).
   * Callback function invoked MAX(NNZA, NNZB) times
   *
   *
   *          ┌  f(Aij, Bij)  ; A(i,j) !== 0 && B(i,j) !== 0
   * C(i,j) = ┤  A(i,j)       ; A(i,j) !== 0
   *          └  B(i,j)       ; B(i,j) !== 0
   *
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */

  var algorithm04 = function algorithm04(a, b, callback) {
    // sparse matrix arrays
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype; // sparse matrix arrays

    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // equal signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // find signature that matches (dt, dt)

      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cvalues = avalues && bvalues ? [] : undefined;
    var cindex = [];
    var cptr = []; // matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    }); // workspace

    var xa = avalues && bvalues ? [] : undefined;
    var xb = avalues && bvalues ? [] : undefined; // marks indicating we have a value in x for a given column

    var wa = [];
    var wb = []; // vars

    var i, j, k, k0, k1; // loop columns

    for (j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length; // columns mark

      var mark = j + 1; // loop A(:,j)

      for (k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = aindex[k]; // update c

        cindex.push(i); // update workspace

        wa[i] = mark; // check we need to process values

        if (xa) {
          xa[i] = avalues[k];
        }
      } // loop B(:,j)


      for (k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = bindex[k]; // check row exists in A

        if (wa[i] === mark) {
          // update record in xa @ i
          if (xa) {
            // invoke callback
            var v = cf(xa[i], bvalues[k]); // check for zero

            if (!eq(v, zero)) {
              // update workspace
              xa[i] = v;
            } else {
              // remove mark (index will be removed later)
              wa[i] = null;
            }
          }
        } else {
          // update c
          cindex.push(i); // update workspace

          wb[i] = mark; // check we need to process values

          if (xb) {
            xb[i] = bvalues[k];
          }
        }
      } // check we need to process values (non pattern matrix)


      if (xa && xb) {
        // initialize first index in j
        k = cptr[j]; // loop index in j

        while (k < cindex.length) {
          // row
          i = cindex[k]; // check workspace has value @ i

          if (wa[i] === mark) {
            // push value (Aij != 0 || (Aij != 0 && Bij != 0))
            cvalues[k] = xa[i]; // increment pointer

            k++;
          } else if (wb[i] === mark) {
            // push value (bij != 0)
            cvalues[k] = xb[i]; // increment pointer

            k++;
          } else {
            // remove index @ k
            cindex.splice(k, 1);
          }
        }
      }
    } // update cptr


    cptr[columns] = cindex.length; // return sparse matrix

    return c;
  };

  return algorithm04;
}

exports.name = 'algorithm04';
exports.factory = factory;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function factory(type, config, load, typed, math) {
  var parse = load(__webpack_require__(44));
  var equal = load(__webpack_require__(51));
  var ConstantNode = load(__webpack_require__(58));
  var FunctionNode = load(__webpack_require__(69));
  var OperatorNode = load(__webpack_require__(59));
  var ParenthesisNode = load(__webpack_require__(68));
  var SymbolNode = load(__webpack_require__(54));
  var simplifyConstant = load(__webpack_require__(125));
  var simplifyCore = load(__webpack_require__(127));
  var resolve = load(__webpack_require__(206));
  var util = load(__webpack_require__(126));
  var isCommutative = util.isCommutative;
  var isAssociative = util.isAssociative;
  var flatten = util.flatten;
  var unflattenr = util.unflattenr;
  var unflattenl = util.unflattenl;
  var createMakeNodeFunction = util.createMakeNodeFunction;
  /**
   * Simplify an expression tree.
   *
   * A list of rules are applied to an expression, repeating over the list until
   * no further changes are made.
   * It's possible to pass a custom set of rules to the function as second
   * argument. A rule can be specified as an object, string, or function:
   *
   *     const rules = [
   *       { l: 'n1*n3 + n2*n3', r: '(n1+n2)*n3' },
   *       'n1*n3 + n2*n3 -> (n1+n2)*n3',
   *       function (node) {
   *         // ... return a new node or return the node unchanged
   *         return node
   *       }
   *     ]
   *
   * String and object rules consist of a left and right pattern. The left is
   * used to match against the expression and the right determines what matches
   * are replaced with. The main difference between a pattern and a normal
   * expression is that variables starting with the following characters are
   * interpreted as wildcards:
   *
   * - 'n' - matches any Node
   * - 'c' - matches any ConstantNode
   * - 'v' - matches any Node that is not a ConstantNode
   *
   * The default list of rules is exposed on the function as `simplify.rules`
   * and can be used as a basis to built a set of custom rules.
   *
   * For more details on the theory, see:
   *
   * - [Strategies for simplifying math expressions (Stackoverflow)](https://stackoverflow.com/questions/7540227/strategies-for-simplifying-math-expressions)
   * - [Symbolic computation - Simplification (Wikipedia)](https://en.wikipedia.org/wiki/Symbolic_computation#Simplification)
   *
   *  An optional `options` argument can be passed as last argument of `simplify`.
   *  There is currently one option available: `exactFractions`, a boolean which
   *  is `true` by default.
   *
   * Syntax:
   *
   *     simplify(expr)
   *     simplify(expr, rules)
   *     simplify(expr, rules)
   *     simplify(expr, rules, scope)
   *     simplify(expr, rules, scope, options)
   *     simplify(expr, scope)
   *     simplify(expr, scope, options)
   *
   * Examples:
   *
   *     math.simplify('2 * 1 * x ^ (2 - 1)')      // Node "2 * x"
   *     math.simplify('2 * 3 * x', {x: 4})        // Node "24"
   *     const f = math.parse('2 * 1 * x ^ (2 - 1)')
   *     math.simplify(f)                          // Node "2 * x"
   *     math.simplify('0.4 * x', {}, {exactFractions: true})  // Node "x * 2 / 5"
   *     math.simplify('0.4 * x', {}, {exactFractions: false}) // Node "0.4 * x"
   *
   * See also:
   *
   *     derivative, parse, eval, rationalize
   *
   * @param {Node | string} expr
   *            The expression to be simplified
   * @param {Array<{l:string, r: string} | string | function>} [rules]
   *            Optional list with custom rules
   * @return {Node} Returns the simplified form of `expr`
   */

  var simplify = typed('simplify', {
    'string': function string(expr) {
      return simplify(parse(expr), simplify.rules, {}, {});
    },
    'string, Object': function stringObject(expr, scope) {
      return simplify(parse(expr), simplify.rules, scope, {});
    },
    'string, Object, Object': function stringObjectObject(expr, scope, options) {
      return simplify(parse(expr), simplify.rules, scope, options);
    },
    'string, Array': function stringArray(expr, rules) {
      return simplify(parse(expr), rules, {}, {});
    },
    'string, Array, Object': function stringArrayObject(expr, rules, scope) {
      return simplify(parse(expr), rules, scope, {});
    },
    'string, Array, Object, Object': function stringArrayObjectObject(expr, rules, scope, options) {
      return simplify(parse(expr), rules, scope, options);
    },
    'Node, Object': function NodeObject(expr, scope) {
      return simplify(expr, simplify.rules, scope, {});
    },
    'Node, Object, Object': function NodeObjectObject(expr, scope, options) {
      return simplify(expr, simplify.rules, scope, options);
    },
    'Node': function Node(expr) {
      return simplify(expr, simplify.rules, {}, {});
    },
    'Node, Array': function NodeArray(expr, rules) {
      return simplify(expr, rules, {}, {});
    },
    'Node, Array, Object': function NodeArrayObject(expr, rules, scope) {
      return simplify(expr, rules, scope, {});
    },
    'Node, Array, Object, Object': function NodeArrayObjectObject(expr, rules, scope, options) {
      rules = _buildRules(rules);
      var res = resolve(expr, scope);
      res = removeParens(res);
      var visited = {};
      var str = res.toString({
        parenthesis: 'all'
      });

      while (!visited[str]) {
        visited[str] = true;
        _lastsym = 0; // counter for placeholder symbols

        for (var i = 0; i < rules.length; i++) {
          if (typeof rules[i] === 'function') {
            res = rules[i](res, options);
          } else {
            flatten(res);
            res = applyRule(res, rules[i]);
          }

          unflattenl(res); // using left-heavy binary tree here since custom rule functions may expect it
        }

        str = res.toString({
          parenthesis: 'all'
        });
      }

      return res;
    }
  });
  simplify.simplifyCore = simplifyCore;
  simplify.resolve = resolve;

  function removeParens(node) {
    return node.transform(function (node, path, parent) {
      return type.isParenthesisNode(node) ? node.content : node;
    });
  } // All constants that are allowed in rules


  var SUPPORTED_CONSTANTS = {
    "true": true,
    "false": true,
    e: true,
    i: true,
    Infinity: true,
    LN2: true,
    LN10: true,
    LOG2E: true,
    LOG10E: true,
    NaN: true,
    phi: true,
    pi: true,
    SQRT1_2: true,
    SQRT2: true,
    tau: true // null: false,
    // undefined: false,
    // version: false,
    // Array of strings, used to build the ruleSet.
    // Each l (left side) and r (right side) are parsed by
    // the expression parser into a node tree.
    // Left hand sides are matched to subtrees within the
    // expression to be parsed and replaced with the right
    // hand side.
    // TODO: Add support for constraints on constants (either in the form of a '=' expression or a callback [callback allows things like comparing symbols alphabetically])
    // To evaluate lhs constants for rhs constants, use: { l: 'c1+c2', r: 'c3', evaluate: 'c3 = c1 + c2' }. Multiple assignments are separated by ';' in block format.
    // It is possible to get into an infinite loop with conflicting rules

  };
  simplify.rules = [simplifyCore, // { l: 'n+0', r: 'n' },     // simplifyCore
  // { l: 'n^0', r: '1' },     // simplifyCore
  // { l: '0*n', r: '0' },     // simplifyCore
  // { l: 'n/n', r: '1'},      // simplifyCore
  // { l: 'n^1', r: 'n' },     // simplifyCore
  // { l: '+n1', r:'n1' },     // simplifyCore
  // { l: 'n--n1', r:'n+n1' }, // simplifyCore
  {
    l: 'log(e)',
    r: '1'
  }, // temporary rules
  {
    l: 'n-n1',
    r: 'n+-n1'
  }, // temporarily replace 'subtract' so we can further flatten the 'add' operator
  {
    l: '-(c*v)',
    r: '(-c) * v'
  }, // make non-constant terms positive
  {
    l: '-v',
    r: '(-1) * v'
  }, {
    l: 'n/n1^n2',
    r: 'n*n1^-n2'
  }, // temporarily replace 'divide' so we can further flatten the 'multiply' operator
  {
    l: 'n/n1',
    r: 'n*n1^-1'
  }, // expand nested exponentiation
  {
    l: '(n ^ n1) ^ n2',
    r: 'n ^ (n1 * n2)'
  }, // collect like factors
  {
    l: 'n*n',
    r: 'n^2'
  }, {
    l: 'n * n^n1',
    r: 'n^(n1+1)'
  }, {
    l: 'n^n1 * n^n2',
    r: 'n^(n1+n2)'
  }, // collect like terms
  {
    l: 'n+n',
    r: '2*n'
  }, {
    l: 'n+-n',
    r: '0'
  }, {
    l: 'n1*n2 + n2',
    r: '(n1+1)*n2'
  }, {
    l: 'n1*n3 + n2*n3',
    r: '(n1+n2)*n3'
  }, // remove parenthesis in the case of negating a quantitiy
  {
    l: 'n1 + -1 * (n2 + n3)',
    r: 'n1 + -1 * n2 + -1 * n3'
  }, simplifyConstant, {
    l: '(-n)*n1',
    r: '-(n*n1)'
  }, // make factors positive (and undo 'make non-constant terms positive')
  // ordering of constants
  {
    l: 'c+v',
    r: 'v+c',
    context: {
      'add': {
        commutative: false
      }
    }
  }, {
    l: 'v*c',
    r: 'c*v',
    context: {
      'multiply': {
        commutative: false
      }
    }
  }, // undo temporary rules
  // { l: '(-1) * n', r: '-n' }, // #811 added test which proved this is redundant
  {
    l: 'n+-n1',
    r: 'n-n1'
  }, // undo replace 'subtract'
  {
    l: 'n*(n1^-1)',
    r: 'n/n1'
  }, // undo replace 'divide'
  {
    l: 'n*n1^-n2',
    r: 'n/n1^n2'
  }, {
    l: 'n1^-1',
    r: '1/n1'
  }, {
    l: 'n*(n1/n2)',
    r: '(n*n1)/n2'
  }, // '*' before '/'
  {
    l: 'n-(n1+n2)',
    r: 'n-n1-n2'
  }, // '-' before '+'
  // { l: '(n1/n2)/n3', r: 'n1/(n2*n3)' },
  // { l: '(n*n1)/(n*n2)', r: 'n1/n2' },
  {
    l: '1*n',
    r: 'n' // this pattern can be produced by simplifyConstant

  }];
  /**
   * Parse the string array of rules into nodes
   *
   * Example syntax for rules:
   *
   * Position constants to the left in a product:
   * { l: 'n1 * c1', r: 'c1 * n1' }
   * n1 is any Node, and c1 is a ConstantNode.
   *
   * Apply difference of squares formula:
   * { l: '(n1 - n2) * (n1 + n2)', r: 'n1^2 - n2^2' }
   * n1, n2 mean any Node.
   *
   * Short hand notation:
   * 'n1 * c1 -> c1 * n1'
   */

  function _buildRules(rules) {
    // Array of rules to be used to simplify expressions
    var ruleSet = [];

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      var newRule = void 0;

      var ruleType = _typeof(rule);

      switch (ruleType) {
        case 'string':
          var lr = rule.split('->');

          if (lr.length === 2) {
            rule = {
              l: lr[0],
              r: lr[1]
            };
          } else {
            throw SyntaxError('Could not parse rule: ' + rule);
          }

        /* falls through */

        case 'object':
          newRule = {
            l: removeParens(parse(rule.l)),
            r: removeParens(parse(rule.r))
          };

          if (rule.context) {
            newRule.evaluate = rule.context;
          }

          if (rule.evaluate) {
            newRule.evaluate = parse(rule.evaluate);
          }

          if (isAssociative(newRule.l)) {
            var makeNode = createMakeNodeFunction(newRule.l);

            var expandsym = _getExpandPlaceholderSymbol();

            newRule.expanded = {};
            newRule.expanded.l = makeNode([newRule.l.clone(), expandsym]); // Push the expandsym into the deepest possible branch.
            // This helps to match the newRule against nodes returned from getSplits() later on.

            flatten(newRule.expanded.l);
            unflattenr(newRule.expanded.l);
            newRule.expanded.r = makeNode([newRule.r, expandsym]);
          }

          break;

        case 'function':
          newRule = rule;
          break;

        default:
          throw TypeError('Unsupported type of rule: ' + ruleType);
      } // console.log('Adding rule: ' + rules[i])
      // console.log(newRule)


      ruleSet.push(newRule);
    }

    return ruleSet;
  }

  var _lastsym = 0;

  function _getExpandPlaceholderSymbol() {
    return new SymbolNode('_p' + _lastsym++);
  }
  /**
   * Returns a simplfied form of node, or the original node if no simplification was possible.
   *
   * @param  {ConstantNode | SymbolNode | ParenthesisNode | FunctionNode | OperatorNode} node
   * @return {ConstantNode | SymbolNode | ParenthesisNode | FunctionNode | OperatorNode} The simplified form of `expr`, or the original node if no simplification was possible.
   */


  var applyRule = typed('applyRule', {
    'Node, Object': function NodeObject(node, rule) {
      // console.log('Entering applyRule(' + node.toString() + ')')
      // Do not clone node unless we find a match
      var res = node; // First replace our child nodes with their simplified versions
      // If a child could not be simplified, the assignments will have
      // no effect since the node is returned unchanged

      if (res instanceof OperatorNode || res instanceof FunctionNode) {
        if (res.args) {
          for (var i = 0; i < res.args.length; i++) {
            res.args[i] = applyRule(res.args[i], rule);
          }
        }
      } else if (res instanceof ParenthesisNode) {
        if (res.content) {
          res.content = applyRule(res.content, rule);
        }
      } // Try to match a rule against this node


      var repl = rule.r;

      var matches = _ruleMatch(rule.l, res)[0]; // If the rule is associative operator, we can try matching it while allowing additional terms.
      // This allows us to match rules like 'n+n' to the expression '(1+x)+x' or even 'x+1+x' if the operator is commutative.


      if (!matches && rule.expanded) {
        repl = rule.expanded.r;
        matches = _ruleMatch(rule.expanded.l, res)[0];
      }

      if (matches) {
        // const before = res.toString({parenthesis: 'all'})
        // Create a new node by cloning the rhs of the matched rule
        // we keep any implicit multiplication state if relevant
        var implicit = res.implicit;
        res = repl.clone();

        if (implicit && 'implicit' in repl) {
          res.implicit = true;
        } // Replace placeholders with their respective nodes without traversing deeper into the replaced nodes


        var _transform = function _transform(node) {
          if (node.isSymbolNode && matches.placeholders.hasOwnProperty(node.name)) {
            return matches.placeholders[node.name].clone();
          } else {
            return node.map(_transform);
          }
        };

        res = _transform(res); // const after = res.toString({parenthesis: 'all'})
        // console.log('Simplified ' + before + ' to ' + after)
      }

      return res;
    }
  });
  /**
   * Get (binary) combinations of a flattened binary node
   * e.g. +(node1, node2, node3) -> [
   *        +(node1,  +(node2, node3)),
   *        +(node2,  +(node1, node3)),
   *        +(node3,  +(node1, node2))]
   *
   */

  function getSplits(node, context) {
    var res = [];
    var right, rightArgs;
    var makeNode = createMakeNodeFunction(node);

    if (isCommutative(node, context)) {
      for (var i = 0; i < node.args.length; i++) {
        rightArgs = node.args.slice(0);
        rightArgs.splice(i, 1);
        right = rightArgs.length === 1 ? rightArgs[0] : makeNode(rightArgs);
        res.push(makeNode([node.args[i], right]));
      }
    } else {
      rightArgs = node.args.slice(1);
      right = rightArgs.length === 1 ? rightArgs[0] : makeNode(rightArgs);
      res.push(makeNode([node.args[0], right]));
    }

    return res;
  }
  /**
   * Returns the set union of two match-placeholders or null if there is a conflict.
   */


  function mergeMatch(match1, match2) {
    var res = {
      placeholders: {} // Some matches may not have placeholders; this is OK

    };

    if (!match1.placeholders && !match2.placeholders) {
      return res;
    } else if (!match1.placeholders) {
      return match2;
    } else if (!match2.placeholders) {
      return match1;
    } // Placeholders with the same key must match exactly


    for (var key in match1.placeholders) {
      res.placeholders[key] = match1.placeholders[key];

      if (match2.placeholders.hasOwnProperty(key)) {
        if (!_exactMatch(match1.placeholders[key], match2.placeholders[key])) {
          return null;
        }
      }
    }

    for (var _key in match2.placeholders) {
      res.placeholders[_key] = match2.placeholders[_key];
    }

    return res;
  }
  /**
   * Combine two lists of matches by applying mergeMatch to the cartesian product of two lists of matches.
   * Each list represents matches found in one child of a node.
   */


  function combineChildMatches(list1, list2) {
    var res = [];

    if (list1.length === 0 || list2.length === 0) {
      return res;
    }

    var merged;

    for (var i1 = 0; i1 < list1.length; i1++) {
      for (var i2 = 0; i2 < list2.length; i2++) {
        merged = mergeMatch(list1[i1], list2[i2]);

        if (merged) {
          res.push(merged);
        }
      }
    }

    return res;
  }
  /**
   * Combine multiple lists of matches by applying mergeMatch to the cartesian product of two lists of matches.
   * Each list represents matches found in one child of a node.
   * Returns a list of unique matches.
   */


  function mergeChildMatches(childMatches) {
    if (childMatches.length === 0) {
      return childMatches;
    }

    var sets = childMatches.reduce(combineChildMatches);
    var uniqueSets = [];
    var unique = {};

    for (var i = 0; i < sets.length; i++) {
      var s = JSON.stringify(sets[i]);

      if (!unique[s]) {
        unique[s] = true;
        uniqueSets.push(sets[i]);
      }
    }

    return uniqueSets;
  }
  /**
   * Determines whether node matches rule.
   *
   * @param {ConstantNode | SymbolNode | ParenthesisNode | FunctionNode | OperatorNode} rule
   * @param {ConstantNode | SymbolNode | ParenthesisNode | FunctionNode | OperatorNode} node
   * @return {Object} Information about the match, if it exists.
   */


  function _ruleMatch(rule, node, isSplit) {
    //    console.log('Entering _ruleMatch(' + JSON.stringify(rule) + ', ' + JSON.stringify(node) + ')')
    //    console.log('rule = ' + rule)
    //    console.log('node = ' + node)
    //    console.log('Entering _ruleMatch(' + rule.toString() + ', ' + node.toString() + ')')
    var res = [{
      placeholders: {}
    }];

    if (rule instanceof OperatorNode && node instanceof OperatorNode || rule instanceof FunctionNode && node instanceof FunctionNode) {
      // If the rule is an OperatorNode or a FunctionNode, then node must match exactly
      if (rule instanceof OperatorNode) {
        if (rule.op !== node.op || rule.fn !== node.fn) {
          return [];
        }
      } else if (rule instanceof FunctionNode) {
        if (rule.name !== node.name) {
          return [];
        }
      } // rule and node match. Search the children of rule and node.


      if (node.args.length === 1 && rule.args.length === 1 || !isAssociative(node) || isSplit) {
        // Expect non-associative operators to match exactly
        var childMatches = [];

        for (var i = 0; i < rule.args.length; i++) {
          var childMatch = _ruleMatch(rule.args[i], node.args[i]);

          if (childMatch.length === 0) {
            // Child did not match, so stop searching immediately
            return [];
          } // The child matched, so add the information returned from the child to our result


          childMatches.push(childMatch);
        }

        res = mergeChildMatches(childMatches);
      } else if (node.args.length >= 2 && rule.args.length === 2) {
        // node is flattened, rule is not
        // Associative operators/functions can be split in different ways so we check if the rule matches each
        // them and return their union.
        var splits = getSplits(node, rule.context);
        var splitMatches = [];

        for (var _i = 0; _i < splits.length; _i++) {
          var matchSet = _ruleMatch(rule, splits[_i], true); // recursing at the same tree depth here


          splitMatches = splitMatches.concat(matchSet);
        }

        return splitMatches;
      } else if (rule.args.length > 2) {
        throw Error('Unexpected non-binary associative function: ' + rule.toString());
      } else {
        // Incorrect number of arguments in rule and node, so no match
        return [];
      }
    } else if (rule instanceof SymbolNode) {
      // If the rule is a SymbolNode, then it carries a special meaning
      // according to the first character of the symbol node name.
      // c.* matches a ConstantNode
      // n.* matches any node
      if (rule.name.length === 0) {
        throw new Error('Symbol in rule has 0 length...!?');
      }

      if (math.hasOwnProperty(rule.name)) {
        if (!SUPPORTED_CONSTANTS[rule.name]) {
          throw new Error('Built in constant: ' + rule.name + ' is not supported by simplify.');
        } // built-in constant must match exactly


        if (rule.name !== node.name) {
          return [];
        }
      } else if (rule.name[0] === 'n' || rule.name.substring(0, 2) === '_p') {
        // rule matches _anything_, so assign this node to the rule.name placeholder
        // Assign node to the rule.name placeholder.
        // Our parent will check for matches among placeholders.
        res[0].placeholders[rule.name] = node;
      } else if (rule.name[0] === 'v') {
        // rule matches any variable thing (not a ConstantNode)
        if (!type.isConstantNode(node)) {
          res[0].placeholders[rule.name] = node;
        } else {
          // Mis-match: rule was expecting something other than a ConstantNode
          return [];
        }
      } else if (rule.name[0] === 'c') {
        // rule matches any ConstantNode
        if (node instanceof ConstantNode) {
          res[0].placeholders[rule.name] = node;
        } else {
          // Mis-match: rule was expecting a ConstantNode
          return [];
        }
      } else {
        throw new Error('Invalid symbol in rule: ' + rule.name);
      }
    } else if (rule instanceof ConstantNode) {
      // Literal constant must match exactly
      if (!equal(rule.value, node.value)) {
        return [];
      }
    } else {
      // Some other node was encountered which we aren't prepared for, so no match
      return [];
    } // It's a match!
    // console.log('_ruleMatch(' + rule.toString() + ', ' + node.toString() + ') found a match')


    return res;
  }
  /**
   * Determines whether p and q (and all their children nodes) are identical.
   *
   * @param {ConstantNode | SymbolNode | ParenthesisNode | FunctionNode | OperatorNode} p
   * @param {ConstantNode | SymbolNode | ParenthesisNode | FunctionNode | OperatorNode} q
   * @return {Object} Information about the match, if it exists.
   */


  function _exactMatch(p, q) {
    if (p instanceof ConstantNode && q instanceof ConstantNode) {
      if (!equal(p.value, q.value)) {
        return false;
      }
    } else if (p instanceof SymbolNode && q instanceof SymbolNode) {
      if (p.name !== q.name) {
        return false;
      }
    } else if (p instanceof OperatorNode && q instanceof OperatorNode || p instanceof FunctionNode && q instanceof FunctionNode) {
      if (p instanceof OperatorNode) {
        if (p.op !== q.op || p.fn !== q.fn) {
          return false;
        }
      } else if (p instanceof FunctionNode) {
        if (p.name !== q.name) {
          return false;
        }
      }

      if (p.args.length !== q.args.length) {
        return false;
      }

      for (var i = 0; i < p.args.length; i++) {
        if (!_exactMatch(p.args[i], q.args[i])) {
          return false;
        }
      }
    } else {
      return false;
    }

    return true;
  }

  return simplify;
}

exports.math = true;
exports.name = 'simplify';
exports.factory = factory;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(31);

var object = util.object;

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var abs = load(__webpack_require__(25));
  var addScalar = load(__webpack_require__(17));
  var divideScalar = load(__webpack_require__(12));
  var multiplyScalar = load(__webpack_require__(21));
  var subtract = load(__webpack_require__(15));
  var larger = load(__webpack_require__(33));
  var equalScalar = load(__webpack_require__(11));
  var unaryMinus = load(__webpack_require__(39));
  var SparseMatrix = type.SparseMatrix;
  var DenseMatrix = type.DenseMatrix;
  var Spa = type.Spa;
  /**
   * Calculate the Matrix LU decomposition with partial pivoting. Matrix `A` is decomposed in two matrices (`L`, `U`) and a
   * row permutation vector `p` where `A[p,:] = L * U`
   *
   * Syntax:
   *
   *    math.lup(A)
   *
   * Example:
   *
   *    const m = [[2, 1], [1, 4]]
   *    const r = math.lup(m)
   *    // r = {
   *    //   L: [[1, 0], [0.5, 1]],
   *    //   U: [[2, 1], [0, 3.5]],
   *    //   P: [0, 1]
   *    // }
   *
   * See also:
   *
   *    slu, lsolve, lusolve, usolve
   *
   * @param {Matrix | Array} A    A two dimensional matrix or array for which to get the LUP decomposition.
   *
   * @return {{L: Array | Matrix, U: Array | Matrix, P: Array.<number>}} The lower triangular matrix, the upper triangular matrix and the permutation matrix.
   */

  var lup = typed('lup', {
    'DenseMatrix': function DenseMatrix(m) {
      return _denseLUP(m);
    },
    'SparseMatrix': function SparseMatrix(m) {
      return _sparseLUP(m);
    },
    'Array': function Array(a) {
      // create dense matrix from array
      var m = matrix(a); // lup, use matrix implementation

      var r = _denseLUP(m); // result


      return {
        L: r.L.valueOf(),
        U: r.U.valueOf(),
        p: r.p
      };
    }
  });

  function _denseLUP(m) {
    // rows & columns
    var rows = m._size[0];
    var columns = m._size[1]; // minimum rows and columns

    var n = Math.min(rows, columns); // matrix array, clone original data

    var data = object.clone(m._data); // l matrix arrays

    var ldata = [];
    var lsize = [rows, n]; // u matrix arrays

    var udata = [];
    var usize = [n, columns]; // vars

    var i, j, k; // permutation vector

    var p = [];

    for (i = 0; i < rows; i++) {
      p[i] = i;
    } // loop columns


    for (j = 0; j < columns; j++) {
      // skip first column in upper triangular matrix
      if (j > 0) {
        // loop rows
        for (i = 0; i < rows; i++) {
          // min i,j
          var min = Math.min(i, j); // v[i, j]

          var s = 0; // loop up to min

          for (k = 0; k < min; k++) {
            // s = l[i, k] - data[k, j]
            s = addScalar(s, multiplyScalar(data[i][k], data[k][j]));
          }

          data[i][j] = subtract(data[i][j], s);
        }
      } // row with larger value in cvector, row >= j


      var pi = j;
      var pabsv = 0;
      var vjj = 0; // loop rows

      for (i = j; i < rows; i++) {
        // data @ i, j
        var v = data[i][j]; // absolute value

        var absv = abs(v); // value is greater than pivote value

        if (larger(absv, pabsv)) {
          // store row
          pi = i; // update max value

          pabsv = absv; // value @ [j, j]

          vjj = v;
        }
      } // swap rows (j <-> pi)


      if (j !== pi) {
        // swap values j <-> pi in p
        p[j] = [p[pi], p[pi] = p[j]][0]; // swap j <-> pi in data

        DenseMatrix._swapRows(j, pi, data);
      } // check column is in lower triangular matrix


      if (j < rows) {
        // loop rows (lower triangular matrix)
        for (i = j + 1; i < rows; i++) {
          // value @ i, j
          var vij = data[i][j];

          if (!equalScalar(vij, 0)) {
            // update data
            data[i][j] = divideScalar(data[i][j], vjj);
          }
        }
      }
    } // loop columns


    for (j = 0; j < columns; j++) {
      // loop rows
      for (i = 0; i < rows; i++) {
        // initialize row in arrays
        if (j === 0) {
          // check row exists in upper triangular matrix
          if (i < columns) {
            // U
            udata[i] = [];
          } // L


          ldata[i] = [];
        } // check we are in the upper triangular matrix


        if (i < j) {
          // check row exists in upper triangular matrix
          if (i < columns) {
            // U
            udata[i][j] = data[i][j];
          } // check column exists in lower triangular matrix


          if (j < rows) {
            // L
            ldata[i][j] = 0;
          }

          continue;
        } // diagonal value


        if (i === j) {
          // check row exists in upper triangular matrix
          if (i < columns) {
            // U
            udata[i][j] = data[i][j];
          } // check column exists in lower triangular matrix


          if (j < rows) {
            // L
            ldata[i][j] = 1;
          }

          continue;
        } // check row exists in upper triangular matrix


        if (i < columns) {
          // U
          udata[i][j] = 0;
        } // check column exists in lower triangular matrix


        if (j < rows) {
          // L
          ldata[i][j] = data[i][j];
        }
      }
    } // l matrix


    var l = new DenseMatrix({
      data: ldata,
      size: lsize
    }); // u matrix

    var u = new DenseMatrix({
      data: udata,
      size: usize
    }); // p vector

    var pv = [];

    for (i = 0, n = p.length; i < n; i++) {
      pv[p[i]] = i;
    } // return matrices


    return {
      L: l,
      U: u,
      p: pv,
      toString: function toString() {
        return 'L: ' + this.L.toString() + '\nU: ' + this.U.toString() + '\nP: ' + this.p;
      }
    };
  }

  function _sparseLUP(m) {
    // rows & columns
    var rows = m._size[0];
    var columns = m._size[1]; // minimum rows and columns

    var n = Math.min(rows, columns); // matrix arrays (will not be modified, thanks to permutation vector)

    var values = m._values;
    var index = m._index;
    var ptr = m._ptr; // l matrix arrays

    var lvalues = [];
    var lindex = [];
    var lptr = [];
    var lsize = [rows, n]; // u matrix arrays

    var uvalues = [];
    var uindex = [];
    var uptr = [];
    var usize = [n, columns]; // vars

    var i, j, k; // permutation vectors, (current index -> original index) and (original index -> current index)

    var pvCo = [];
    var pvOc = [];

    for (i = 0; i < rows; i++) {
      pvCo[i] = i;
      pvOc[i] = i;
    } // swap indices in permutation vectors (condition x < y)!


    var swapIndeces = function swapIndeces(x, y) {
      // find pv indeces getting data from x and y
      var kx = pvOc[x];
      var ky = pvOc[y]; // update permutation vector current -> original

      pvCo[kx] = y;
      pvCo[ky] = x; // update permutation vector original -> current

      pvOc[x] = ky;
      pvOc[y] = kx;
    }; // loop columns


    var _loop = function _loop() {
      // sparse accumulator
      var spa = new Spa(); // check lower triangular matrix has a value @ column j

      if (j < rows) {
        // update ptr
        lptr.push(lvalues.length); // first value in j column for lower triangular matrix

        lvalues.push(1);
        lindex.push(j);
      } // update ptr


      uptr.push(uvalues.length); // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]

      var k0 = ptr[j];
      var k1 = ptr[j + 1]; // copy column j into sparse accumulator

      for (k = k0; k < k1; k++) {
        // row
        i = index[k]; // copy column values into sparse accumulator (use permutation vector)

        spa.set(pvCo[i], values[k]);
      } // skip first column in upper triangular matrix


      if (j > 0) {
        // loop rows in column j (above diagonal)
        spa.forEach(0, j - 1, function (k, vkj) {
          // loop rows in column k (L)
          SparseMatrix._forEachRow(k, lvalues, lindex, lptr, function (i, vik) {
            // check row is below k
            if (i > k) {
              // update spa value
              spa.accumulate(i, unaryMinus(multiplyScalar(vik, vkj)));
            }
          });
        });
      } // row with larger value in spa, row >= j


      var pi = j;
      var vjj = spa.get(j);
      var pabsv = abs(vjj); // loop values in spa (order by row, below diagonal)

      spa.forEach(j + 1, rows - 1, function (x, v) {
        // absolute value
        var absv = abs(v); // value is greater than pivote value

        if (larger(absv, pabsv)) {
          // store row
          pi = x; // update max value

          pabsv = absv; // value @ [j, j]

          vjj = v;
        }
      }); // swap rows (j <-> pi)

      if (j !== pi) {
        // swap values j <-> pi in L
        SparseMatrix._swapRows(j, pi, lsize[1], lvalues, lindex, lptr); // swap values j <-> pi in U


        SparseMatrix._swapRows(j, pi, usize[1], uvalues, uindex, uptr); // swap values in spa


        spa.swap(j, pi); // update permutation vector (swap values @ j, pi)

        swapIndeces(j, pi);
      } // loop values in spa (order by row)


      spa.forEach(0, rows - 1, function (x, v) {
        // check we are above diagonal
        if (x <= j) {
          // update upper triangular matrix
          uvalues.push(v);
          uindex.push(x);
        } else {
          // update value
          v = divideScalar(v, vjj); // check value is non zero

          if (!equalScalar(v, 0)) {
            // update lower triangular matrix
            lvalues.push(v);
            lindex.push(x);
          }
        }
      });
    };

    for (j = 0; j < columns; j++) {
      _loop();
    } // update ptrs


    uptr.push(uvalues.length);
    lptr.push(lvalues.length); // return matrices

    return {
      L: new SparseMatrix({
        values: lvalues,
        index: lindex,
        ptr: lptr,
        size: lsize
      }),
      U: new SparseMatrix({
        values: uvalues,
        index: uindex,
        ptr: uptr,
        size: usize
      }),
      p: pvCo,
      toString: function toString() {
        return 'L: ' + this.L.toString() + '\nU: ' + this.U.toString() + '\nP: ' + this.p;
      }
    };
  }

  return lup;
}

exports.name = 'lup';
exports.factory = factory;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory() {
  /**
   * This function "flips" its input about the integer -1.
   *
   * @param {Number}  i               The value to flip
   *
   * Reference: http://faculty.cse.tamu.edu/davis/publications.html
   */
  var csFlip = function csFlip(i) {
    // flip the value
    return -i - 2;
  };

  return csFlip;
}

exports.name = 'csFlip';
exports.path = 'algebra.sparse';
exports.factory = factory;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm07 = load(__webpack_require__(29));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));

  var latex = __webpack_require__(4);
  /**
   * Test whether value x is larger or equal to y.
   *
   * The function returns true when x is larger than y or the relative
   * difference between x and y is smaller than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.largerEq(x, y)
   *
   * Examples:
   *
   *    math.larger(2, 1 + 1)         // returns false
   *    math.largerEq(2, 1 + 1)       // returns true
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, larger, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is larger or equal to y, else returns false
   */


  var largerEq = typed('largerEq', {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x >= y;
    },
    'number, number': function numberNumber(x, y) {
      return x >= y || nearlyEqual(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.gte(y) || bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.compare(y) !== -1;
    },
    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }

      return largerEq(x.value, y.value);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, largerEq);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, largerEq, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, largerEq, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, largerEq);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return largerEq(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return largerEq(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return largerEq(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, largerEq, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, largerEq, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, largerEq, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, largerEq, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, largerEq, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, largerEq, true).valueOf();
    }
  });
  largerEq.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['largerEq'], "${args[1]}\\right)")
  };
  return largerEq;
}

exports.name = 'largerEq';
exports.factory = factory;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(31);

var string = util.string;
var array = util.array;
var isArray = Array.isArray;

function factory(type) {
  var DenseMatrix = type.DenseMatrix;
  /**
   * Validates matrix and column vector b for backward/forward substitution algorithms.
   *
   * @param {Matrix} m            An N x N matrix
   * @param {Array | Matrix} b    A column vector
   * @param {Boolean} copy        Return a copy of vector b
   *
   * @return {DenseMatrix}        Dense column vector b
   */

  var solveValidation = function solveValidation(m, b, copy) {
    // matrix size
    var size = m.size(); // validate matrix dimensions

    if (size.length !== 2) {
      throw new RangeError('Matrix must be two dimensional (size: ' + string.format(size) + ')');
    } // rows & columns


    var rows = size[0];
    var columns = size[1]; // validate rows & columns

    if (rows !== columns) {
      throw new RangeError('Matrix must be square (size: ' + string.format(size) + ')');
    } // vars


    var data, i, bdata; // check b is matrix

    if (type.isMatrix(b)) {
      // matrix size
      var msize = b.size(); // vector

      if (msize.length === 1) {
        // check vector length
        if (msize[0] !== rows) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        } // create data array


        data = []; // matrix data (DenseMatrix)

        bdata = b._data; // loop b data

        for (i = 0; i < rows; i++) {
          // row array
          data[i] = [bdata[i]];
        } // return Dense Matrix


        return new DenseMatrix({
          data: data,
          size: [rows, 1],
          datatype: b._datatype
        });
      } // two dimensions


      if (msize.length === 2) {
        // array must be a column vector
        if (msize[0] !== rows || msize[1] !== 1) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        } // check matrix type


        if (type.isDenseMatrix(b)) {
          // check a copy is needed
          if (copy) {
            // create data array
            data = []; // matrix data (DenseMatrix)

            bdata = b._data; // loop b data

            for (i = 0; i < rows; i++) {
              // row array
              data[i] = [bdata[i][0]];
            } // return Dense Matrix


            return new DenseMatrix({
              data: data,
              size: [rows, 1],
              datatype: b._datatype
            });
          } // b is already a column vector


          return b;
        } // create data array


        data = [];

        for (i = 0; i < rows; i++) {
          data[i] = [0];
        } // sparse matrix arrays


        var values = b._values;
        var index = b._index;
        var ptr = b._ptr; // loop values in column 0

        for (var k1 = ptr[1], k = ptr[0]; k < k1; k++) {
          // row
          i = index[k]; // add to data

          data[i][0] = values[k];
        } // return Dense Matrix


        return new DenseMatrix({
          data: data,
          size: [rows, 1],
          datatype: b._datatype
        });
      } // throw error


      throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
    } // check b is array


    if (isArray(b)) {
      // size
      var asize = array.size(b); // check matrix dimensions, vector

      if (asize.length === 1) {
        // check vector length
        if (asize[0] !== rows) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        } // create data array


        data = []; // loop b

        for (i = 0; i < rows; i++) {
          // row array
          data[i] = [b[i]];
        } // return Dense Matrix


        return new DenseMatrix({
          data: data,
          size: [rows, 1]
        });
      }

      if (asize.length === 2) {
        // array must be a column vector
        if (asize[0] !== rows || asize[1] !== 1) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        } // create data array


        data = []; // loop b data

        for (i = 0; i < rows; i++) {
          // row array
          data[i] = [b[i][0]];
        } // return Dense Matrix


        return new DenseMatrix({
          data: data,
          size: [rows, 1]
        });
      } // throw error


      throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
    }
  };

  return solveValidation;
}

exports.factory = factory;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  var divideScalar = load(__webpack_require__(12));
  /**
   * Calculate the logarithm of a value.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.log(x)
   *    math.log(x, base)
   *
   * Examples:
   *
   *    math.log(3.5)                  // returns 1.252762968495368
   *    math.exp(math.log(2.4))        // returns 2.4
   *
   *    math.pow(10, 4)                // returns 10000
   *    math.log(10000, 10)            // returns 4
   *    math.log(10000) / math.log(10) // returns 4
   *
   *    math.log(1024, 2)              // returns 10
   *    math.pow(2, 10)                // returns 1024
   *
   * See also:
   *
   *    exp, log2, log10, log1p
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            Value for which to calculate the logarithm.
   * @param {number | BigNumber | Complex} [base=e]
   *            Optional base for the logarithm. If not provided, the natural
   *            logarithm of `x` is calculated.
   * @return {number | BigNumber | Complex | Array | Matrix}
   *            Returns the logarithm of `x`
   */

  var log = typed('log', {
    'number': function number(x) {
      if (x >= 0 || config.predictable) {
        return Math.log(x);
      } else {
        // negative value -> complex value computation
        return new type.Complex(x, 0).log();
      }
    },
    'Complex': function Complex(x) {
      return x.log();
    },
    'BigNumber': function BigNumber(x) {
      if (!x.isNegative() || config.predictable) {
        return x.ln();
      } else {
        // downgrade to number, return Complex valued result
        return new type.Complex(x.toNumber(), 0).log();
      }
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, log);
    },
    'any, any': function anyAny(x, base) {
      // calculate logarithm for a specified base, log(x, base)
      return divideScalar(log(x), log(base));
    }
  });
  log.toTex = {
    1: "\\ln\\left(${args[0]}\\right)",
    2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
  };
  return log;
}

exports.name = 'log';
exports.factory = factory;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitNot = __webpack_require__(93);
/**
 * Applies bitwise function to numbers
 * @param {BigNumber} x
 * @param {BigNumber} y
 * @param {function (a, b)} func
 * @return {BigNumber}
 */


module.exports = function bitwise(x, y, func) {
  var BigNumber = x.constructor;
  var xBits, yBits;
  var xSign = +(x.s < 0);
  var ySign = +(y.s < 0);

  if (xSign) {
    xBits = decCoefficientToBinaryString(bitNot(x));

    for (var i = 0; i < xBits.length; ++i) {
      xBits[i] ^= 1;
    }
  } else {
    xBits = decCoefficientToBinaryString(x);
  }

  if (ySign) {
    yBits = decCoefficientToBinaryString(bitNot(y));

    for (var _i = 0; _i < yBits.length; ++_i) {
      yBits[_i] ^= 1;
    }
  } else {
    yBits = decCoefficientToBinaryString(y);
  }

  var minBits, maxBits, minSign;

  if (xBits.length <= yBits.length) {
    minBits = xBits;
    maxBits = yBits;
    minSign = xSign;
  } else {
    minBits = yBits;
    maxBits = xBits;
    minSign = ySign;
  }

  var shortLen = minBits.length;
  var longLen = maxBits.length;
  var expFuncVal = func(xSign, ySign) ^ 1;
  var outVal = new BigNumber(expFuncVal ^ 1);
  var twoPower = new BigNumber(1);
  var two = new BigNumber(2);
  var prevPrec = BigNumber.precision;
  BigNumber.config({
    precision: 1E9
  });

  while (shortLen > 0) {
    if (func(minBits[--shortLen], maxBits[--longLen]) === expFuncVal) {
      outVal = outVal.plus(twoPower);
    }

    twoPower = twoPower.times(two);
  }

  while (longLen > 0) {
    if (func(minSign, maxBits[--longLen]) === expFuncVal) {
      outVal = outVal.plus(twoPower);
    }

    twoPower = twoPower.times(two);
  }

  BigNumber.config({
    precision: prevPrec
  });

  if (expFuncVal === 0) {
    outVal.s = -outVal.s;
  }

  return outVal;
};
/* Extracted from decimal.js, and edited to specialize. */


function decCoefficientToBinaryString(x) {
  // Convert to string
  var a = x.d; // array with digits

  var r = a[0] + '';

  for (var i = 1; i < a.length; ++i) {
    var s = a[i] + '';

    for (var z = 7 - s.length; z--;) {
      s = '0' + s;
    }

    r += s;
  }

  var j = r.length;

  while (r.charAt(j) === '0') {
    j--;
  }

  var xe = x.e;
  var str = r.slice(0, j + 1 || 1);
  var strL = str.length;

  if (xe > 0) {
    if (++xe > strL) {
      // Append zeros.
      xe -= strL;

      while (xe--) {
        str += '0';
      }
    } else if (xe < strL) {
      str = str.slice(0, xe) + '.' + str.slice(xe);
    }
  } // Convert from base 10 (decimal) to base 2


  var arr = [0];

  for (var _i2 = 0; _i2 < str.length;) {
    var arrL = arr.length;

    while (arrL--) {
      arr[arrL] *= 10;
    }

    arr[0] += parseInt(str.charAt(_i2++)); // convert to int

    for (var _j = 0; _j < arr.length; ++_j) {
      if (arr[_j] > 1) {
        if (arr[_j + 1] === null || arr[_j + 1] === undefined) {
          arr[_j + 1] = 0;
        }

        arr[_j + 1] += arr[_j] >> 1;
        arr[_j] &= 1;
      }
    }
  }

  return arr.reverse();
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Bitwise not
 * @param {BigNumber} x
 * @return {BigNumber} Result of ~`x`, fully precise
 *
 */

module.exports = function bitNot(x) {
  if (x.isFinite() && !x.isInteger()) {
    throw new Error('Integer expected in function bitNot');
  }

  var BigNumber = x.constructor;
  var prevPrec = BigNumber.precision;
  BigNumber.config({
    precision: 1E9
  });
  var result = x.plus(new BigNumber(1));
  result.s = -result.s || null;
  BigNumber.config({
    precision: prevPrec
  });
  return result;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(11));
  var SparseMatrix = type.SparseMatrix;
  /**
   * Iterates over SparseMatrix A and SparseMatrix B nonzero items and invokes the callback function f(Aij, Bij).
   * Callback function invoked MAX(NNZA, NNZB) times
   *
   *
   *          ┌  f(Aij, Bij)  ; A(i,j) !== 0 && B(i,j) !== 0
   * C(i,j) = ┤  A(i,j)       ; A(i,j) !== 0
   *          └  0            ; otherwise
   *
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */

  var algorithm08 = function algorithm08(a, b, callback) {
    // sparse matrix arrays
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype; // sparse matrix arrays

    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // sparse matrix cannot be a Pattern matrix


    if (!avalues || !bvalues) {
      throw new Error('Cannot perform operation on Pattern Sparse Matrices');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // equal signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // find signature that matches (dt, dt)

      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cvalues = [];
    var cindex = [];
    var cptr = []; // matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    }); // workspace

    var x = []; // marks indicating we have a value in x for a given column

    var w = []; // vars

    var k, k0, k1, i; // loop columns

    for (var j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length; // columns mark

      var mark = j + 1; // loop values in a

      for (k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = aindex[k]; // mark workspace

        w[i] = mark; // set value

        x[i] = avalues[k]; // add index

        cindex.push(i);
      } // loop values in b


      for (k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = bindex[k]; // check value exists in workspace

        if (w[i] === mark) {
          // evaluate callback
          x[i] = cf(x[i], bvalues[k]);
        }
      } // initialize first index in j


      k = cptr[j]; // loop index in j

      while (k < cindex.length) {
        // row
        i = cindex[k]; // value @ i

        var v = x[i]; // check for zero value

        if (!eq(v, zero)) {
          // push value
          cvalues.push(v); // increment pointer

          k++;
        } else {
          // remove value @ i, do not increment pointer
          cindex.splice(k, 1);
        }
      }
    } // update cptr


    cptr[columns] = cindex.length; // return sparse matrix

    return c;
  };

  return algorithm08;
}

exports.name = 'algorithm08';
exports.factory = factory;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

/** @param {integer} i
 *  @param {integer} n
 *  @returns : product of i to n
 */
function product(i, n) {
  var half;

  if (n < i) {
    return 1;
  }

  if (n === i) {
    return n;
  }

  half = n + i >> 1; // divide (n + i) by 2 and truncate to integer

  return product(i, half) * product(half + 1, n);
}

module.exports = product;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arraySize = __webpack_require__(2).size;

var isMatrix = __webpack_require__(56);

var IndexError = __webpack_require__(48);

function factory(type, config, load, typed) {
  var isInteger = load(__webpack_require__(34));
  /**
   * Apply a function that maps an array to a scalar
   * along a given axis of a matrix or array.
   * Returns a new matrix or array with one less dimension than the input.
   *
   * Syntax:
   *
   *     math.apply(A, dim, callback)
   *
   * Where:
   *
   * - `dim: number` is a zero-based dimension over which to concatenate the matrices.
   *
   * Examples:
   *
   *    const A = [[1, 2], [3, 4]]
   *    const sum = math.sum
   *
   *    math.apply(A, 0, sum)             // returns [4, 6]
   *    math.apply(A, 1, sum)             // returns [3, 7]
   *
   * See also:
   *
   *    map, filter, forEach
   *
   * @param {Array | Matrix} array   The input Matrix
   * @param {number} dim             The dimension along which the callback is applied
   * @param {Function} callback      The callback function that is applied. This Function
   *                                 should take an array or 1-d matrix as an input and
   *                                 return a number.
   * @return {Array | Matrix} res    The residual matrix with the function applied over some dimension.
   */

  var apply = typed('apply', {
    'Array | Matrix, number | BigNumber, function': function ArrayMatrixNumberBigNumberFunction(mat, dim, callback) {
      if (!isInteger(dim)) {
        throw new TypeError('Integer number expected for dimension');
      }

      var size = Array.isArray(mat) ? arraySize(mat) : mat.size();

      if (dim < 0 || dim >= size.length) {
        throw new IndexError(dim, size.length);
      }

      if (isMatrix(mat)) {
        return mat.create(_apply(mat.valueOf(), dim, callback));
      } else {
        return _apply(mat, dim, callback);
      }
    }
  });
  apply.toTex = undefined; // use default template

  return apply;
}
/**
 * Recursively reduce a matrix
 * @param {Array} mat
 * @param {number} dim
 * @param {Function} callback
 * @returns {Array} ret
 * @private
 */


function _apply(mat, dim, callback) {
  var i, ret, tran;

  if (dim <= 0) {
    if (!Array.isArray(mat[0])) {
      return callback(mat);
    } else {
      tran = _switch(mat);
      ret = [];

      for (i = 0; i < tran.length; i++) {
        ret[i] = _apply(tran[i], dim - 1, callback);
      }

      return ret;
    }
  } else {
    ret = [];

    for (i = 0; i < mat.length; i++) {
      ret[i] = _apply(mat[i], dim - 1, callback);
    }

    return ret;
  }
}
/**
 * Transpose a matrix
 * @param {Array} mat
 * @returns {Array} ret
 * @private
 */


function _switch(mat) {
  var I = mat.length;
  var J = mat[0].length;
  var i, j;
  var ret = [];

  for (j = 0; j < J; j++) {
    var tmp = [];

    for (i = 0; i < I; i++) {
      tmp.push(mat[i][j]);
    }

    ret.push(tmp);
  }

  return ret;
}

exports.name = 'apply';
exports.factory = factory;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(3).isInteger;

function factory(type, config, load, typed) {
  var isNumeric = load(__webpack_require__(52));
  var isNaN = load(__webpack_require__(79));
  var asc = load(__webpack_require__(55));

  function desc(a, b) {
    return -asc(a, b);
  }
  /**
   * Partition-based selection of an array or 1D matrix.
   * Will find the kth smallest value, and mutates the input array.
   * Uses Quickselect.
   *
   * Syntax:
   *
   *    math.partitionSelect(x, k)
   *    math.partitionSelect(x, k, compare)
   *
   * Examples:
   *
   *    math.partitionSelect([5, 10, 1], 2)           // returns 10
   *    math.partitionSelect(['C', 'B', 'A', 'D'], 1) // returns 'B'
   *
   *    function sortByLength (a, b) {
   *      return a.length - b.length
   *    }
   *    math.partitionSelect(['Langdon', 'Tom', 'Sara'], 2, sortByLength) // returns 'Langdon'
   *
   * See also:
   *
   *    sort
   *
   * @param {Matrix | Array} x    A one dimensional matrix or array to sort
   * @param {Number} k            The kth smallest value to be retrieved zero-based index
   * @param {Function | 'asc' | 'desc'} [compare='asc']
   *        An optional comparator function. The function is called as
   *        `compare(a, b)`, and must return 1 when a > b, -1 when a < b,
   *        and 0 when a == b.
   * @return {*} Returns the kth lowest value.
   */


  return typed('partitionSelect', {
    'Array | Matrix, number': function ArrayMatrixNumber(x, k) {
      return _partitionSelect(x, k, asc);
    },
    'Array | Matrix, number, string': function ArrayMatrixNumberString(x, k, compare) {
      if (compare === 'asc') {
        return _partitionSelect(x, k, asc);
      } else if (compare === 'desc') {
        return _partitionSelect(x, k, desc);
      } else {
        throw new Error('Compare string must be "asc" or "desc"');
      }
    },
    'Array | Matrix, number, function': _partitionSelect
  });

  function _partitionSelect(x, k, compare) {
    if (!isInteger(k) || k < 0) {
      throw new Error('k must be a non-negative integer');
    }

    if (type.isMatrix(x)) {
      var size = x.size();

      if (size.length > 1) {
        throw new Error('Only one dimensional matrices supported');
      }

      return quickSelect(x.valueOf(), k, compare);
    }

    if (Array.isArray(x)) {
      return quickSelect(x, k, compare);
    }
  }
  /**
   * Quickselect algorithm.
   * Code adapted from:
   * https://blog.teamleadnet.com/2012/07/quick-select-algorithm-find-kth-element.html
   *
   * @param {Array} arr
   * @param {Number} k
   * @param {Function} compare
   * @private
   */


  function quickSelect(arr, k, compare) {
    if (k >= arr.length) {
      throw new Error('k out of bounds');
    } // check for NaN values since these can cause an infinite while loop


    for (var i = 0; i < arr.length; i++) {
      if (isNumeric(arr[i]) && isNaN(arr[i])) {
        return arr[i]; // return NaN
      }
    }

    var from = 0;
    var to = arr.length - 1; // if from == to we reached the kth element

    while (from < to) {
      var r = from;
      var w = to;
      var pivot = arr[Math.floor(Math.random() * (to - from + 1)) + from]; // stop if the reader and writer meets

      while (r < w) {
        // arr[r] >= pivot
        if (compare(arr[r], pivot) >= 0) {
          // put the large values at the end
          var tmp = arr[w];
          arr[w] = arr[r];
          arr[r] = tmp;
          --w;
        } else {
          // the value is smaller than the pivot, skip
          ++r;
        }
      } // if we stepped up (r++) we need to step one down (arr[r] > pivot)


      if (compare(arr[r], pivot) > 0) {
        --r;
      } // the r pointer is on the end of the first k elements


      if (k <= r) {
        to = r;
      } else {
        from = r + 1;
      }
    }

    return arr[k];
  }
}

exports.name = 'partitionSelect';
exports.factory = factory;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepForEach = __webpack_require__(47);

var reduce = __webpack_require__(80);

var containsCollections = __webpack_require__(62);

function factory(type, config, load, typed) {
  var larger = load(__webpack_require__(33));
  var improveErrorMessage = load(__webpack_require__(40));
  /**
   * Compute the maximum value of a matrix or a  list with values.
   * In case of a multi dimensional array, the maximum of the flattened array
   * will be calculated. When `dim` is provided, the maximum over the selected
   * dimension will be calculated. Parameter `dim` is zero-based.
   *
   * Syntax:
   *
   *     math.max(a, b, c, ...)
   *     math.max(A)
   *     math.max(A, dim)
   *
   * Examples:
   *
   *     math.max(2, 1, 4, 3)                  // returns 4
   *     math.max([2, 1, 4, 3])                // returns 4
   *
   *     // maximum over a specified dimension (zero-based)
   *     math.max([[2, 5], [4, 3], [1, 7]], 0) // returns [4, 7]
   *     math.max([[2, 5], [4, 3]], [1, 7], 1) // returns [5, 4, 7]
   *
   *     math.max(2.7, 7.1, -4.5, 2.0, 4.1)    // returns 7.1
   *     math.min(2.7, 7.1, -4.5, 2.0, 4.1)    // returns -4.5
   *
   * See also:
   *
   *    mean, median, min, prod, std, sum, var
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The maximum value
   */

  var max = typed('max', {
    // max([a, b, c, d, ...])
    'Array | Matrix': _max,
    // max([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': function ArrayMatrixNumberBigNumber(array, dim) {
      return reduce(array, dim.valueOf(), _largest);
    },
    // max(a, b, c, d, ...)
    '...': function _(args) {
      if (containsCollections(args)) {
        throw new TypeError('Scalar values expected in function max');
      }

      return _max(args);
    }
  });
  max.toTex = "\\max\\left(${args}\\right)";
  return max;
  /**
   * Return the largest of two values
   * @param {*} x
   * @param {*} y
   * @returns {*} Returns x when x is largest, or y when y is largest
   * @private
   */

  function _largest(x, y) {
    try {
      return larger(x, y) ? x : y;
    } catch (err) {
      throw improveErrorMessage(err, 'max', y);
    }
  }
  /**
   * Recursively calculate the maximum value in an n-dimensional array
   * @param {Array} array
   * @return {number} max
   * @private
   */


  function _max(array) {
    var max;
    deepForEach(array, function (value) {
      try {
        if (isNaN(value) && typeof value === 'number') {
          max = NaN;
        } else if (max === undefined || larger(value, max)) {
          max = value;
        }
      } catch (err) {
        throw improveErrorMessage(err, 'max', value);
      }
    });

    if (max === undefined) {
      throw new Error('Cannot calculate max of an empty array');
    }

    return max;
  }
}

exports.name = 'max';
exports.factory = factory;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepForEach = __webpack_require__(47);

var reduce = __webpack_require__(80);

var containsCollections = __webpack_require__(62);

function factory(type, config, load, typed) {
  var add = load(__webpack_require__(17));
  var improveErrorMessage = load(__webpack_require__(40));
  /**
   * Compute the sum of a matrix or a list with values.
   * In case of a (multi dimensional) array or matrix, the sum of all
   * elements will be calculated.
   *
   * Syntax:
   *
   *     math.sum(a, b, c, ...)
   *     math.sum(A)
   *
   * Examples:
   *
   *     math.sum(2, 1, 4, 3)               // returns 10
   *     math.sum([2, 1, 4, 3])             // returns 10
   *     math.sum([[2, 5], [4, 3], [1, 7]]) // returns 22
   *
   * See also:
   *
   *    mean, median, min, max, prod, std, var
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The sum of all values
   */

  var sum = typed('sum', {
    // sum([a, b, c, d, ...])
    'Array | Matrix': _sum,
    // sum([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': _nsumDim,
    // sum(a, b, c, d, ...)
    '...': function _(args) {
      if (containsCollections(args)) {
        throw new TypeError('Scalar values expected in function sum');
      }

      return _sum(args);
    }
  });
  sum.toTex = undefined; // use default template

  return sum;
  /**
   * Recursively calculate the sum of an n-dimensional array
   * @param {Array} array
   * @return {number} sum
   * @private
   */

  function _sum(array) {
    var sum;
    deepForEach(array, function (value) {
      try {
        sum = sum === undefined ? value : add(sum, value);
      } catch (err) {
        throw improveErrorMessage(err, 'sum', value);
      }
    });

    if (sum === undefined) {
      switch (config.number) {
        case 'number':
          return 0;

        case 'BigNumber':
          return new type.BigNumber(0);

        case 'Fraction':
          return new type.Fraction(0);

        default:
          return 0;
      }
    }

    return sum;
  }

  function _nsumDim(array, dim) {
    try {
      var _sum2 = reduce(array, dim, add);

      return _sum2;
    } catch (err) {
      throw improveErrorMessage(err, 'sum');
    }
  }
}

exports.name = 'sum';
exports.factory = factory;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArgumentsError = __webpack_require__(57);

var isCollection = __webpack_require__(35);

var isNumber = __webpack_require__(3).isNumber; // TODO: rethink math.distribution
// TODO: rework to a typed function


function factory(type, config, load, typed, math) {
  var matrix = load(__webpack_require__(0));

  var array = __webpack_require__(2); // seeded pseudo random number generator


  var rng = load(__webpack_require__(298));
  /**
   * Create a distribution object with a set of random functions for given
   * random distribution.
   *
   * Syntax:
   *
   *     math.distribution(name)
   *
   * Examples:
   *
   *     const normalDist = math.distribution('normal') // create a normal distribution
   *     normalDist.random(0, 10)                     // get a random value between 0 and 10
   *
   * See also:
   *
   *     random, randomInt, pickRandom
   *
   * @param {string} name   Name of a distribution. Choose from 'uniform', 'normal'.
   * @return {Object}       Returns a distribution object containing functions:
   *                        `random([size] [, min] [, max])`,
   *                        `randomInt([min] [, max])`,
   *                        `pickRandom(array)`
   */

  function distribution(name) {
    if (!distributions.hasOwnProperty(name)) {
      throw new Error('Unknown distribution ' + name);
    }

    var args = Array.prototype.slice.call(arguments, 1);
    var distribution = distributions[name].apply(this, args);
    return function (distribution) {
      // This is the public API for all distributions
      var randFunctions = {
        random: function random(arg1, arg2, arg3) {
          var size, min, max;

          if (arguments.length > 3) {
            throw new ArgumentsError('random', arguments.length, 0, 3);
          } else if (arguments.length === 1) {
            // `random(max)` or `random(size)`
            if (isCollection(arg1)) {
              size = arg1;
            } else {
              max = arg1;
            }
          } else if (arguments.length === 2) {
            // `random(min, max)` or `random(size, max)`
            if (isCollection(arg1)) {
              size = arg1;
              max = arg2;
            } else {
              min = arg1;
              max = arg2;
            }
          } else {
            // `random(size, min, max)`
            size = arg1;
            min = arg2;
            max = arg3;
          } // TODO: validate type of size


          if (min !== undefined && !isNumber(min) || max !== undefined && !isNumber(max)) {
            throw new TypeError('Invalid argument in function random');
          }

          if (max === undefined) max = 1;
          if (min === undefined) min = 0;

          if (size !== undefined) {
            var res = _randomDataForMatrix(size.valueOf(), min, max, _random);

            return type.isMatrix(size) ? matrix(res) : res;
          }

          return _random(min, max);
        },
        randomInt: typed({
          'number | Array': function numberArray(arg) {
            var min = 0;

            if (isCollection(arg)) {
              var size = arg;
              var max = 1;

              var res = _randomDataForMatrix(size.valueOf(), min, max, _randomInt);

              return type.isMatrix(size) ? matrix(res) : res;
            } else {
              var _max = arg;
              return _randomInt(min, _max);
            }
          },
          'number | Array, number': function numberArrayNumber(arg1, arg2) {
            if (isCollection(arg1)) {
              var size = arg1;
              var max = arg2;
              var min = 0;

              var res = _randomDataForMatrix(size.valueOf(), min, max, _randomInt);

              return type.isMatrix(size) ? matrix(res) : res;
            } else {
              var _min = arg1;
              var _max2 = arg2;
              return _randomInt(_min, _max2);
            }
          },
          'Array, number, number': function ArrayNumberNumber(size, min, max) {
            var res = _randomDataForMatrix(size.valueOf(), min, max, _randomInt);

            return size && size.isMatrix === true ? matrix(res) : res;
          }
        }),
        pickRandom: typed({
          'Array': function Array(possibles) {
            return _pickRandom(possibles);
          },
          'Array, number | Array': function ArrayNumberArray(possibles, arg2) {
            var number, weights;

            if (Array.isArray(arg2)) {
              weights = arg2;
            } else if (isNumber(arg2)) {
              number = arg2;
            } else {
              throw new TypeError('Invalid argument in function pickRandom');
            }

            return _pickRandom(possibles, number, weights);
          },
          'Array, number | Array, Array | number': function ArrayNumberArrayArrayNumber(possibles, arg2, arg3) {
            var number, weights;

            if (Array.isArray(arg2)) {
              weights = arg2;
              number = arg3;
            } else {
              weights = arg3;
              number = arg2;
            }

            if (!Array.isArray(weights) || !isNumber(number)) {
              throw new TypeError('Invalid argument in function pickRandom');
            }

            return _pickRandom(possibles, number, weights);
          }
        })
      };

      function _pickRandom(possibles, number, weights) {
        var single = typeof number === 'undefined';

        if (single) {
          number = 1;
        }

        if (type.isMatrix(possibles)) {
          possibles = possibles.valueOf(); // get Array
        } else if (!Array.isArray(possibles)) {
          throw new TypeError('Unsupported type of value in function pickRandom');
        }

        if (array.size(possibles).length > 1) {
          throw new Error('Only one dimensional vectors supported');
        }

        var totalWeights = 0;

        if (typeof weights !== 'undefined') {
          if (weights.length !== possibles.length) {
            throw new Error('Weights must have the same length as possibles');
          }

          for (var i = 0, len = weights.length; i < len; i++) {
            if (!isNumber(weights[i]) || weights[i] < 0) {
              throw new Error('Weights must be an array of positive numbers');
            }

            totalWeights += weights[i];
          }
        }

        var length = possibles.length;

        if (length === 0) {
          return [];
        } else if (number >= length) {
          return number > 1 ? possibles : possibles[0];
        }

        var result = [];
        var pick;

        while (result.length < number) {
          if (typeof weights === 'undefined') {
            pick = possibles[Math.floor(rng() * length)];
          } else {
            var randKey = rng() * totalWeights;

            for (var _i = 0, _len = possibles.length; _i < _len; _i++) {
              randKey -= weights[_i];

              if (randKey < 0) {
                pick = possibles[_i];
                break;
              }
            }
          }

          if (result.indexOf(pick) === -1) {
            result.push(pick);
          }
        }

        return single ? result[0] : result; // TODO: add support for multi dimensional matrices
      }

      function _random(min, max) {
        return min + distribution() * (max - min);
      }

      function _randomInt(min, max) {
        return Math.floor(min + distribution() * (max - min));
      } // This is a function for generating a random matrix recursively.


      function _randomDataForMatrix(size, min, max, randFunc) {
        var data = [];
        size = size.slice(0);

        if (size.length > 1) {
          for (var i = 0, length = size.shift(); i < length; i++) {
            data.push(_randomDataForMatrix(size, min, max, randFunc));
          }
        } else {
          for (var _i2 = 0, _length = size.shift(); _i2 < _length; _i2++) {
            data.push(randFunc(min, max));
          }
        }

        return data;
      }

      return randFunctions;
    }(distribution);
  } // Each distribution is a function that takes no argument and when called returns
  // a number between 0 and 1.


  var distributions = {
    uniform: function uniform() {
      return rng;
    },
    // Implementation of normal distribution using Box-Muller transform
    // ref : https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
    // We take : mean = 0.5, standard deviation = 1/6
    // so that 99.7% values are in [0, 1].
    normal: function normal() {
      return function () {
        var u1;
        var u2;
        var picked = -1; // We reject values outside of the interval [0, 1]
        // TODO: check if it is ok to do that?

        while (picked < 0 || picked > 1) {
          u1 = rng();
          u2 = rng();
          picked = 1 / 6 * Math.pow(-2 * Math.log(u1), 0.5) * Math.cos(2 * Math.PI * u2) + 0.5;
        }

        return picked;
      };
    }
  };
  distribution.toTex = undefined; // use default template

  return distribution;
}

exports.name = 'distribution';
exports.factory = factory;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DEFAULT_NORMALIZATION = 'unbiased';

var deepForEach = __webpack_require__(47);

function factory(type, config, load, typed) {
  var apply = load(__webpack_require__(96));
  var add = load(__webpack_require__(17));
  var subtract = load(__webpack_require__(15));
  var multiply = load(__webpack_require__(21));
  var divide = load(__webpack_require__(12));
  var isNaN = load(__webpack_require__(79));
  var improveErrorMessage = load(__webpack_require__(40));
  /**
   * Compute the variance of a matrix or a  list with values.
   * In case of a (multi dimensional) array or matrix, the variance over all
   * elements will be calculated.
   *
   * Additionally, it is possible to compute the variance along the rows
   * or columns of a matrix by specifying the dimension as the second argument.
   *
   * Optionally, the type of normalization can be specified as the final
   * parameter. The parameter `normalization` can be one of the following values:
   *
   * - 'unbiased' (default) The sum of squared errors is divided by (n - 1)
   * - 'uncorrected'        The sum of squared errors is divided by n
   * - 'biased'             The sum of squared errors is divided by (n + 1)
   *
   *
   * Note that older browser may not like the variable name `var`. In that
   * case, the function can be called as `math['var'](...)` instead of
   * `math.var(...)`.
   *
   * Syntax:
   *
   *     math.var(a, b, c, ...)
   *     math.var(A)
   *     math.var(A, normalization)
   *     math.var(A, dimension)
   *     math.var(A, dimension, normalization)
   *
   * Examples:
   *
   *     math.var(2, 4, 6)                     // returns 4
   *     math.var([2, 4, 6, 8])                // returns 6.666666666666667
   *     math.var([2, 4, 6, 8], 'uncorrected') // returns 5
   *     math.var([2, 4, 6, 8], 'biased')      // returns 4
   *
   *     math.var([[1, 2, 3], [4, 5, 6]])      // returns 3.5
   *     math.var([[1, 2, 3], [4, 6, 8]], 0)    // returns [4.5, 8, 12.5]
   *     math.var([[1, 2, 3], [4, 6, 8]], 1)    // returns [1, 4]
   *     math.var([[1, 2, 3], [4, 6, 8]], 1, 'biased') // returns [0.5, 2]
   *
   * See also:
   *
   *    mean, median, max, min, prod, std, sum
   *
   * @param {Array | Matrix} array
   *                        A single matrix or or multiple scalar values
   * @param {string} [normalization='unbiased']
   *                        Determines how to normalize the variance.
   *                        Choose 'unbiased' (default), 'uncorrected', or 'biased'.
   * @param dimension {number | BigNumber}
   *                        Determines the axis to compute the variance for a matrix
   * @return {*} The variance
   */

  var variance = typed('variance', {
    // var([a, b, c, d, ...])
    'Array | Matrix': function ArrayMatrix(array) {
      return _var(array, DEFAULT_NORMALIZATION);
    },
    // var([a, b, c, d, ...], normalization)
    'Array | Matrix, string': _var,
    // var([a, b, c, c, ...], dim)
    'Array | Matrix, number | BigNumber': function ArrayMatrixNumberBigNumber(array, dim) {
      return _varDim(array, dim, DEFAULT_NORMALIZATION);
    },
    // var([a, b, c, c, ...], dim, normalization)
    'Array | Matrix, number | BigNumber, string': _varDim,
    // var(a, b, c, d, ...)
    '...': function _(args) {
      return _var(args, DEFAULT_NORMALIZATION);
    }
  });
  variance.toTex = "\\mathrm{Var}\\left(${args}\\right)";
  return variance;
  /**
   * Recursively calculate the variance of an n-dimensional array
   * @param {Array} array
   * @param {string} normalization
   *                        Determines how to normalize the variance:
   *                        - 'unbiased'    The sum of squared errors is divided by (n - 1)
   *                        - 'uncorrected' The sum of squared errors is divided by n
   *                        - 'biased'      The sum of squared errors is divided by (n + 1)
   * @return {number | BigNumber} variance
   * @private
   */

  function _var(array, normalization) {
    var sum = 0;
    var num = 0;

    if (array.length === 0) {
      throw new SyntaxError('Function var requires one or more parameters (0 provided)');
    } // calculate the mean and number of elements


    deepForEach(array, function (value) {
      try {
        sum = add(sum, value);
        num++;
      } catch (err) {
        throw improveErrorMessage(err, 'var', value);
      }
    });
    if (num === 0) throw new Error('Cannot calculate var of an empty array');
    var mean = divide(sum, num); // calculate the variance

    sum = 0;
    deepForEach(array, function (value) {
      var diff = subtract(value, mean);
      sum = add(sum, multiply(diff, diff));
    });

    if (isNaN(sum)) {
      return sum;
    }

    switch (normalization) {
      case 'uncorrected':
        return divide(sum, num);

      case 'biased':
        return divide(sum, num + 1);

      case 'unbiased':
        var zero = type.isBigNumber(sum) ? new type.BigNumber(0) : 0;
        return num === 1 ? zero : divide(sum, num - 1);

      default:
        throw new Error('Unknown normalization "' + normalization + '". ' + 'Choose "unbiased" (default), "uncorrected", or "biased".');
    }
  }

  function _varDim(array, dim, normalization) {
    try {
      if (array.length === 0) {
        throw new SyntaxError('Function var requires one or more parameters (0 provided)');
      }

      return apply(array, dim, function (x) {
        return _var(x, normalization);
      });
    } catch (err) {
      throw improveErrorMessage(err, 'var');
    }
  }
}

exports.name = 'var';
exports.factory = factory;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Compile an inline expression like "x > 0"
   * @param {Node} expression
   * @param {Object} math
   * @param {Object} scope
   * @return {function} Returns a function with one argument which fills in the
   *                    undefined variable (like "x") and evaluates the expression
   */
  return function compileInlineExpression(expression, math, scope) {
    // find an undefined symbol
    var symbol = expression.filter(function (node) {
      return type.isSymbolNode(node) && !(node.name in math) && !(node.name in scope);
    })[0];

    if (!symbol) {
      throw new Error('No undefined variable found in inline expression "' + expression + '"');
    } // create a test function for this equation


    var name = symbol.name; // variable name

    var subScope = Object.create(scope);
    var eq = expression.compile();
    return function inlineExpression(x) {
      subScope[name] = x;
      return eq.eval(subScope);
    };
  };
}

exports.factory = factory;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var typedFunction = __webpack_require__(164);

var digits = __webpack_require__(3).digits;

var isBigNumber = __webpack_require__(81);

var isMatrix = __webpack_require__(56); // returns a new instance of typed-function


var _createTyped = function createTyped() {
  // initially, return the original instance of typed-function
  // consecutively, return a new instance from typed.create.
  _createTyped = typedFunction.create;
  return typedFunction;
};
/**
 * Factory function for creating a new typed instance
 * @param {Object} type   Object with data types like Complex and BigNumber
 * @returns {Function}
 */


exports.create = function create(type) {
  // TODO: typed-function must be able to silently ignore signatures with unknown data types
  // type checks for all known types
  //
  // note that:
  //
  // - check by duck-typing on a property like `isUnit`, instead of checking instanceof.
  //   instanceof cannot be used because that would not allow to pass data from
  //   one instance of math.js to another since each has it's own instance of Unit.
  // - check the `isUnit` property via the constructor, so there will be no
  //   matches for "fake" instances like plain objects with a property `isUnit`.
  //   That is important for security reasons.
  // - It must not be possible to override the type checks used internally,
  //   for security reasons, so these functions are not exposed in the expression
  //   parser.
  type.isNumber = function (x) {
    return typeof x === 'number';
  };

  type.isComplex = function (x) {
    return type.Complex && x instanceof type.Complex || false;
  };

  type.isBigNumber = isBigNumber;

  type.isFraction = function (x) {
    return type.Fraction && x instanceof type.Fraction || false;
  };

  type.isUnit = function (x) {
    return x && x.constructor.prototype.isUnit || false;
  };

  type.isString = function (x) {
    return typeof x === 'string';
  };

  type.isArray = Array.isArray;
  type.isMatrix = isMatrix;

  type.isDenseMatrix = function (x) {
    return x && x.isDenseMatrix && x.constructor.prototype.isMatrix || false;
  };

  type.isSparseMatrix = function (x) {
    return x && x.isSparseMatrix && x.constructor.prototype.isMatrix || false;
  };

  type.isRange = function (x) {
    return x && x.constructor.prototype.isRange || false;
  };

  type.isIndex = function (x) {
    return x && x.constructor.prototype.isIndex || false;
  };

  type.isBoolean = function (x) {
    return typeof x === 'boolean';
  };

  type.isResultSet = function (x) {
    return x && x.constructor.prototype.isResultSet || false;
  };

  type.isHelp = function (x) {
    return x && x.constructor.prototype.isHelp || false;
  };

  type.isFunction = function (x) {
    return typeof x === 'function';
  };

  type.isDate = function (x) {
    return x instanceof Date;
  };

  type.isRegExp = function (x) {
    return x instanceof RegExp;
  };

  type.isObject = function (x) {
    return _typeof(x) === 'object' && x.constructor === Object && !type.isComplex(x) && !type.isFraction(x);
  };

  type.isNull = function (x) {
    return x === null;
  };

  type.isUndefined = function (x) {
    return x === undefined;
  };

  type.isAccessorNode = function (x) {
    return x && x.isAccessorNode && x.constructor.prototype.isNode || false;
  };

  type.isArrayNode = function (x) {
    return x && x.isArrayNode && x.constructor.prototype.isNode || false;
  };

  type.isAssignmentNode = function (x) {
    return x && x.isAssignmentNode && x.constructor.prototype.isNode || false;
  };

  type.isBlockNode = function (x) {
    return x && x.isBlockNode && x.constructor.prototype.isNode || false;
  };

  type.isConditionalNode = function (x) {
    return x && x.isConditionalNode && x.constructor.prototype.isNode || false;
  };

  type.isConstantNode = function (x) {
    return x && x.isConstantNode && x.constructor.prototype.isNode || false;
  };

  type.isFunctionAssignmentNode = function (x) {
    return x && x.isFunctionAssignmentNode && x.constructor.prototype.isNode || false;
  };

  type.isFunctionNode = function (x) {
    return x && x.isFunctionNode && x.constructor.prototype.isNode || false;
  };

  type.isIndexNode = function (x) {
    return x && x.isIndexNode && x.constructor.prototype.isNode || false;
  };

  type.isNode = function (x) {
    return x && x.isNode && x.constructor.prototype.isNode || false;
  };

  type.isObjectNode = function (x) {
    return x && x.isObjectNode && x.constructor.prototype.isNode || false;
  };

  type.isOperatorNode = function (x) {
    return x && x.isOperatorNode && x.constructor.prototype.isNode || false;
  };

  type.isParenthesisNode = function (x) {
    return x && x.isParenthesisNode && x.constructor.prototype.isNode || false;
  };

  type.isRangeNode = function (x) {
    return x && x.isRangeNode && x.constructor.prototype.isNode || false;
  };

  type.isSymbolNode = function (x) {
    return x && x.isSymbolNode && x.constructor.prototype.isNode || false;
  };

  type.isChain = function (x) {
    return x && x.constructor.prototype.isChain || false;
  }; // get a new instance of typed-function


  var typed = _createTyped(); // define all types. The order of the types determines in which order function
  // arguments are type-checked (so for performance it's important to put the
  // most used types first).


  typed.types = [{
    name: 'number',
    test: type.isNumber
  }, {
    name: 'Complex',
    test: type.isComplex
  }, {
    name: 'BigNumber',
    test: type.isBigNumber
  }, {
    name: 'Fraction',
    test: type.isFraction
  }, {
    name: 'Unit',
    test: type.isUnit
  }, {
    name: 'string',
    test: type.isString
  }, {
    name: 'Array',
    test: type.isArray
  }, {
    name: 'Matrix',
    test: type.isMatrix
  }, {
    name: 'DenseMatrix',
    test: type.isDenseMatrix
  }, {
    name: 'SparseMatrix',
    test: type.isSparseMatrix
  }, {
    name: 'Range',
    test: type.isRange
  }, {
    name: 'Index',
    test: type.isIndex
  }, {
    name: 'boolean',
    test: type.isBoolean
  }, {
    name: 'ResultSet',
    test: type.isResultSet
  }, {
    name: 'Help',
    test: type.isHelp
  }, {
    name: 'function',
    test: type.isFunction
  }, {
    name: 'Date',
    test: type.isDate
  }, {
    name: 'RegExp',
    test: type.isRegExp
  }, {
    name: 'null',
    test: type.isNull
  }, {
    name: 'undefined',
    test: type.isUndefined
  }, {
    name: 'OperatorNode',
    test: type.isOperatorNode
  }, {
    name: 'ConstantNode',
    test: type.isConstantNode
  }, {
    name: 'SymbolNode',
    test: type.isSymbolNode
  }, {
    name: 'ParenthesisNode',
    test: type.isParenthesisNode
  }, {
    name: 'FunctionNode',
    test: type.isFunctionNode
  }, {
    name: 'FunctionAssignmentNode',
    test: type.isFunctionAssignmentNode
  }, {
    name: 'ArrayNode',
    test: type.isArrayNode
  }, {
    name: 'AssignmentNode',
    test: type.isAssignmentNode
  }, {
    name: 'BlockNode',
    test: type.isBlockNode
  }, {
    name: 'ConditionalNode',
    test: type.isConditionalNode
  }, {
    name: 'IndexNode',
    test: type.isIndexNode
  }, {
    name: 'RangeNode',
    test: type.isRangeNode
  }, {
    name: 'Node',
    test: type.isNode
  }, {
    name: 'Object',
    test: type.isObject // order 'Object' last, it matches on other classes too

  }]; // TODO: add conversion from BigNumber to number?

  typed.conversions = [{
    from: 'number',
    to: 'BigNumber',
    convert: function convert(x) {
      // note: conversion from number to BigNumber can fail if x has >15 digits
      if (digits(x) > 15) {
        throw new TypeError('Cannot implicitly convert a number with >15 significant digits to BigNumber ' + '(value: ' + x + '). ' + 'Use function bignumber(x) to convert to BigNumber.');
      }

      return new type.BigNumber(x);
    }
  }, {
    from: 'number',
    to: 'Complex',
    convert: function convert(x) {
      return new type.Complex(x, 0);
    }
  }, {
    from: 'number',
    to: 'string',
    convert: function convert(x) {
      return x + '';
    }
  }, {
    from: 'BigNumber',
    to: 'Complex',
    convert: function convert(x) {
      return new type.Complex(x.toNumber(), 0);
    }
  }, {
    from: 'Fraction',
    to: 'BigNumber',
    convert: function convert(x) {
      throw new TypeError('Cannot implicitly convert a Fraction to BigNumber or vice versa. ' + 'Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.');
    }
  }, {
    from: 'Fraction',
    to: 'Complex',
    convert: function convert(x) {
      return new type.Complex(x.valueOf(), 0);
    }
  }, {
    from: 'number',
    to: 'Fraction',
    convert: function convert(x) {
      var f = new type.Fraction(x);

      if (f.valueOf() !== x) {
        throw new TypeError('Cannot implicitly convert a number to a Fraction when there will be a loss of precision ' + '(value: ' + x + '). ' + 'Use function fraction(x) to convert to Fraction.');
      }

      return new type.Fraction(x);
    }
  }, {
    // FIXME: add conversion from Fraction to number, for example for `sqrt(fraction(1,3))`
    //  from: 'Fraction',
    //  to: 'number',
    //  convert: function (x) {
    //    return x.valueOf()
    //  }
    // }, {
    from: 'string',
    to: 'number',
    convert: function convert(x) {
      var n = Number(x);

      if (isNaN(n)) {
        throw new Error('Cannot convert "' + x + '" to a number');
      }

      return n;
    }
  }, {
    from: 'string',
    to: 'BigNumber',
    convert: function convert(x) {
      try {
        return new type.BigNumber(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to BigNumber');
      }
    }
  }, {
    from: 'string',
    to: 'Fraction',
    convert: function convert(x) {
      try {
        return new type.Fraction(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Fraction');
      }
    }
  }, {
    from: 'string',
    to: 'Complex',
    convert: function convert(x) {
      try {
        return new type.Complex(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Complex');
      }
    }
  }, {
    from: 'boolean',
    to: 'number',
    convert: function convert(x) {
      return +x;
    }
  }, {
    from: 'boolean',
    to: 'BigNumber',
    convert: function convert(x) {
      return new type.BigNumber(+x);
    }
  }, {
    from: 'boolean',
    to: 'Fraction',
    convert: function convert(x) {
      return new type.Fraction(+x);
    }
  }, {
    from: 'boolean',
    to: 'string',
    convert: function convert(x) {
      return +x;
    }
  }, {
    from: 'Array',
    to: 'Matrix',
    convert: function convert(array) {
      return new type.DenseMatrix(array);
    }
  }, {
    from: 'Matrix',
    to: 'Array',
    convert: function convert(matrix) {
      return matrix.valueOf();
    }
  }];
  return typed;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Emitter = __webpack_require__(165);
/**
 * Extend given object with emitter functions `on`, `off`, `once`, `emit`
 * @param {Object} obj
 * @return {Object} obj
 */


exports.mixin = function (obj) {
  // create event emitter
  var emitter = new Emitter(); // bind methods to obj (we don't want to expose the emitter.e Array...)

  obj.on = emitter.on.bind(emitter);
  obj.off = emitter.off.bind(emitter);
  obj.once = emitter.once.bind(emitter);
  obj.emit = emitter.emit.bind(emitter);
  return obj;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Create a BigNumber, which can store numbers with arbitrary precision.
   * When a matrix is provided, all elements will be converted to BigNumber.
   *
   * Syntax:
   *
   *    math.bignumber(x)
   *
   * Examples:
   *
   *    0.1 + 0.2                                  // returns number 0.30000000000000004
   *    math.bignumber(0.1) + math.bignumber(0.2)  // returns BigNumber 0.3
   *
   *
   *    7.2e500                                    // returns number Infinity
   *    math.bignumber('7.2e500')                  // returns BigNumber 7.2e500
   *
   * See also:
   *
   *    boolean, complex, index, matrix, string, unit
   *
   * @param {number | string | Fraction | BigNumber | Array | Matrix | boolean | null} [value]  Value for the big number,
   *                                                    0 by default.
   * @returns {BigNumber} The created bignumber
   */
  var bignumber = typed('bignumber', {
    '': function _() {
      return new type.BigNumber(0);
    },
    'number': function number(x) {
      // convert to string to prevent errors in case of >15 digits
      return new type.BigNumber(x + '');
    },
    'string': function string(x) {
      return new type.BigNumber(x);
    },
    'BigNumber': function BigNumber(x) {
      // we assume a BigNumber is immutable
      return x;
    },
    'Fraction': function Fraction(x) {
      return new type.BigNumber(x.n).div(x.d).times(x.s);
    },
    'null': function _null(x) {
      return new type.BigNumber(0);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, bignumber);
    }
  });
  bignumber.toTex = {
    0: '0',
    1: "\\left(${args[0]}\\right)"
  };
  return bignumber;
}

exports.name = 'bignumber';
exports.factory = factory;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var number = __webpack_require__(3);

function factory(type, config, load, typed) {
  /**
   * Create a range. A range has a start, step, and end, and contains functions
   * to iterate over the range.
   *
   * A range can be constructed as:
   *
   *     const range = new Range(start, end)
   *     const range = new Range(start, end, step)
   *
   * To get the result of the range:
   *     range.forEach(function (x) {
   *         console.log(x)
   *     })
   *     range.map(function (x) {
   *         return math.sin(x)
   *     })
   *     range.toArray()
   *
   * Example usage:
   *
   *     const c = new Range(2, 6)       // 2:1:5
   *     c.toArray()                     // [2, 3, 4, 5]
   *     const d = new Range(2, -3, -1)  // 2:-1:-2
   *     d.toArray()                     // [2, 1, 0, -1, -2]
   *
   * @class Range
   * @constructor Range
   * @param {number} start  included lower bound
   * @param {number} end    excluded upper bound
   * @param {number} [step] step size, default value is 1
   */
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    var hasStart = start !== null && start !== undefined;
    var hasEnd = end !== null && end !== undefined;
    var hasStep = step !== null && step !== undefined;

    if (hasStart) {
      if (type.isBigNumber(start)) {
        start = start.toNumber();
      } else if (typeof start !== 'number') {
        throw new TypeError('Parameter start must be a number');
      }
    }

    if (hasEnd) {
      if (type.isBigNumber(end)) {
        end = end.toNumber();
      } else if (typeof end !== 'number') {
        throw new TypeError('Parameter end must be a number');
      }
    }

    if (hasStep) {
      if (type.isBigNumber(step)) {
        step = step.toNumber();
      } else if (typeof step !== 'number') {
        throw new TypeError('Parameter step must be a number');
      }
    }

    this.start = hasStart ? parseFloat(start) : 0;
    this.end = hasEnd ? parseFloat(end) : 0;
    this.step = hasStep ? parseFloat(step) : 1;
  }
  /**
   * Attach type information
   */


  Range.prototype.type = 'Range';
  Range.prototype.isRange = true;
  /**
   * Parse a string into a range,
   * The string contains the start, optional step, and end, separated by a colon.
   * If the string does not contain a valid range, null is returned.
   * For example str='0:2:11'.
   * @memberof Range
   * @param {string} str
   * @return {Range | null} range
   */

  Range.parse = function (str) {
    if (typeof str !== 'string') {
      return null;
    }

    var args = str.split(':');
    var nums = args.map(function (arg) {
      return parseFloat(arg);
    });
    var invalid = nums.some(function (num) {
      return isNaN(num);
    });

    if (invalid) {
      return null;
    }

    switch (nums.length) {
      case 2:
        return new Range(nums[0], nums[1]);

      case 3:
        return new Range(nums[0], nums[2], nums[1]);

      default:
        return null;
    }
  };
  /**
   * Create a clone of the range
   * @return {Range} clone
   */


  Range.prototype.clone = function () {
    return new Range(this.start, this.end, this.step);
  };
  /**
   * Retrieve the size of the range.
   * Returns an array containing one number, the number of elements in the range.
   * @memberof Range
   * @returns {number[]} size
   */


  Range.prototype.size = function () {
    var len = 0;
    var start = this.start;
    var step = this.step;
    var end = this.end;
    var diff = end - start;

    if (number.sign(step) === number.sign(diff)) {
      len = Math.ceil(diff / step);
    } else if (diff === 0) {
      len = 0;
    }

    if (isNaN(len)) {
      len = 0;
    }

    return [len];
  };
  /**
   * Calculate the minimum value in the range
   * @memberof Range
   * @return {number | undefined} min
   */


  Range.prototype.min = function () {
    var size = this.size()[0];

    if (size > 0) {
      if (this.step > 0) {
        // positive step
        return this.start;
      } else {
        // negative step
        return this.start + (size - 1) * this.step;
      }
    } else {
      return undefined;
    }
  };
  /**
   * Calculate the maximum value in the range
   * @memberof Range
   * @return {number | undefined} max
   */


  Range.prototype.max = function () {
    var size = this.size()[0];

    if (size > 0) {
      if (this.step > 0) {
        // positive step
        return this.start + (size - 1) * this.step;
      } else {
        // negative step
        return this.start;
      }
    } else {
      return undefined;
    }
  };
  /**
   * Execute a callback function for each value in the range.
   * @memberof Range
   * @param {function} callback   The callback method is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Range being traversed.
   */


  Range.prototype.forEach = function (callback) {
    var x = this.start;
    var step = this.step;
    var end = this.end;
    var i = 0;

    if (step > 0) {
      while (x < end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    } else if (step < 0) {
      while (x > end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    }
  };
  /**
   * Execute a callback function for each value in the Range, and return the
   * results as an array
   * @memberof Range
   * @param {function} callback   The callback method is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @returns {Array} array
   */


  Range.prototype.map = function (callback) {
    var array = [];
    this.forEach(function (value, index, obj) {
      array[index[0]] = callback(value, index, obj);
    });
    return array;
  };
  /**
   * Create an Array with a copy of the Ranges data
   * @memberof Range
   * @returns {Array} array
   */


  Range.prototype.toArray = function () {
    var array = [];
    this.forEach(function (value, index) {
      array[index[0]] = value;
    });
    return array;
  };
  /**
   * Get the primitive value of the Range, a one dimensional array
   * @memberof Range
   * @returns {Array} array
   */


  Range.prototype.valueOf = function () {
    // TODO: implement a caching mechanism for range.valueOf()
    return this.toArray();
  };
  /**
   * Get a string representation of the range, with optional formatting options.
   * Output is formatted as 'start:step:end', for example '2:6' or '0:0.2:11'
   * @memberof Range
   * @param {Object | number | function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */


  Range.prototype.format = function (options) {
    var str = number.format(this.start, options);

    if (this.step !== 1) {
      str += ':' + number.format(this.step, options);
    }

    str += ':' + number.format(this.end, options);
    return str;
  };
  /**
   * Get a string representation of the range.
   * @memberof Range
   * @returns {string}
   */


  Range.prototype.toString = function () {
    return this.format();
  };
  /**
   * Get a JSON representation of the range
   * @memberof Range
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Range", "start": 2, "end": 4, "step": 1}`
   */


  Range.prototype.toJSON = function () {
    return {
      mathjs: 'Range',
      start: this.start,
      end: this.end,
      step: this.step
    };
  };
  /**
   * Instantiate a Range from a JSON object
   * @memberof Range
   * @param {Object} json A JSON object structured as:
   *                      `{"mathjs": "Range", "start": 2, "end": 4, "step": 1}`
   * @return {Range}
   */


  Range.fromJSON = function (json) {
    return new Range(json.start, json.end, json.step);
  };

  return Range;
}

exports.name = 'Range';
exports.path = 'type';
exports.factory = factory;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * A ResultSet contains a list or results
   * @class ResultSet
   * @param {Array} entries
   * @constructor ResultSet
   */
  function ResultSet(entries) {
    if (!(this instanceof ResultSet)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this.entries = entries || [];
  }
  /**
   * Attach type information
   */


  ResultSet.prototype.type = 'ResultSet';
  ResultSet.prototype.isResultSet = true;
  /**
   * Returns the array with results hold by this ResultSet
   * @memberof ResultSet
   * @returns {Array} entries
   */

  ResultSet.prototype.valueOf = function () {
    return this.entries;
  };
  /**
   * Returns the stringified results of the ResultSet
   * @memberof ResultSet
   * @returns {string} string
   */


  ResultSet.prototype.toString = function () {
    return '[' + this.entries.join(', ') + ']';
  };
  /**
   * Get a JSON representation of the ResultSet
   * @memberof ResultSet
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "ResultSet", "entries": [...]}`
   */


  ResultSet.prototype.toJSON = function () {
    return {
      mathjs: 'ResultSet',
      entries: this.entries
    };
  };
  /**
   * Instantiate a ResultSet from a JSON object
   * @memberof ResultSet
   * @param {Object} json  A JSON object structured as:
   *                       `{"mathjs": "ResultSet", "entries": [...]}`
   * @return {ResultSet}
   */


  ResultSet.fromJSON = function (json) {
    return new ResultSet(json.entries);
  };

  return ResultSet;
}

exports.name = 'ResultSet';
exports.path = 'type';
exports.factory = factory;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__(36).memoize;
/**
 * Calculate BigNumber e
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns e
 */


exports.e = memoize(function (BigNumber) {
  return new BigNumber(1).exp();
}, hasher);
/**
 * Calculate BigNumber golden ratio, phi = (1+sqrt(5))/2
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns phi
 */

exports.phi = memoize(function (BigNumber) {
  return new BigNumber(1).plus(new BigNumber(5).sqrt()).div(2);
}, hasher);
/**
 * Calculate BigNumber pi.
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns pi
 */

exports.pi = memoize(function (BigNumber) {
  return BigNumber.acos(-1);
}, hasher);
/**
 * Calculate BigNumber tau, tau = 2 * pi
 * @param {function} BigNumber   BigNumber constructor
 * @returns {BigNumber} Returns tau
 */

exports.tau = memoize(function (BigNumber) {
  return exports.pi(BigNumber).times(2);
}, hasher);
/**
 * Create a hash for a BigNumber constructor function. The created has is
 * the configured precision
 * @param {Array} args         Supposed to contain a single entry with
 *                             a BigNumber constructor
 * @return {number} precision
 * @private
 */

function hasher(args) {
  return args[0].precision;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  var ceil = load(__webpack_require__(110));
  var floor = load(__webpack_require__(111));
  /**
   * Round a value towards zero.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.fix(x)
   *
   * Examples:
   *
   *    math.fix(3.2)                // returns number 3
   *    math.fix(3.8)                // returns number 3
   *    math.fix(-4.2)               // returns number -4
   *    math.fix(-4.7)               // returns number -4
   *
   *    const c = math.complex(3.2, -2.7)
   *    math.fix(c)                  // returns Complex 3 - 2i
   *
   *    math.fix([3.2, 3.8, -4.7])   // returns Array [3, 3, -4]
   *
   * See also:
   *
   *    ceil, floor, round
   *
   * @param {number | BigNumber | Fraction | Complex | Array | Matrix} x Number to be rounded
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix}            Rounded value
   */

  var fix = typed('fix', {
    'number': function number(x) {
      return x > 0 ? floor(x) : ceil(x);
    },
    'Complex': function Complex(x) {
      return new type.Complex(x.re > 0 ? Math.floor(x.re) : Math.ceil(x.re), x.im > 0 ? Math.floor(x.im) : Math.ceil(x.im));
    },
    'BigNumber': function BigNumber(x) {
      return x.isNegative() ? ceil(x) : floor(x);
    },
    'Fraction': function Fraction(x) {
      return x.s < 0 ? x.ceil() : x.floor();
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since fix(0) = 0
      return deepMap(x, fix, true);
    }
  });
  fix.toTex = {
    1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
  };
  return fix;
}

exports.name = 'fix';
exports.factory = factory;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var round = load(__webpack_require__(67));
  /**
   * Round a value towards plus infinity
   * If `x` is complex, both real and imaginary part are rounded towards plus infinity.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.ceil(x)
   *
   * Examples:
   *
   *    math.ceil(3.2)               // returns number 4
   *    math.ceil(3.8)               // returns number 4
   *    math.ceil(-4.2)              // returns number -4
   *    math.ceil(-4.7)              // returns number -4
   *
   *    const c = math.complex(3.2, -2.7)
   *    math.ceil(c)                 // returns Complex 4 - 2i
   *
   *    math.ceil([3.2, 3.8, -4.7])  // returns Array [4, 4, -4]
   *
   * See also:
   *
   *    floor, fix, round
   *
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix} x  Number to be rounded
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix} Rounded value
   */

  var ceil = typed('ceil', {
    'number': function number(x) {
      if (nearlyEqual(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return Math.ceil(x);
      }
    },
    'Complex': function Complex(x) {
      return x.ceil();
    },
    'BigNumber': function BigNumber(x) {
      if (bigNearlyEqual(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return x.ceil();
      }
    },
    'Fraction': function Fraction(x) {
      return x.ceil();
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since ceil(0) = 0
      return deepMap(x, ceil, true);
    }
  });
  ceil.toTex = {
    1: "\\left\\lceil${args[0]}\\right\\rceil"
  };
  return ceil;
}

exports.name = 'ceil';
exports.factory = factory;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var round = load(__webpack_require__(67));
  /**
   * Round a value towards minus infinity.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.floor(x)
   *
   * Examples:
   *
   *    math.floor(3.2)              // returns number 3
   *    math.floor(3.8)              // returns number 3
   *    math.floor(-4.2)             // returns number -5
   *    math.floor(-4.7)             // returns number -5
   *
   *    const c = math.complex(3.2, -2.7)
   *    math.floor(c)                // returns Complex 3 - 3i
   *
   *    math.floor([3.2, 3.8, -4.7]) // returns Array [3, 3, -5]
   *
   * See also:
   *
   *    ceil, fix, round
   *
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix} x  Number to be rounded
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix} Rounded value
   */

  var floor = typed('floor', {
    'number': function number(x) {
      if (nearlyEqual(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return Math.floor(x);
      }
    },
    'Complex': function Complex(x) {
      return x.floor();
    },
    'BigNumber': function BigNumber(x) {
      if (bigNearlyEqual(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return x.floor();
      }
    },
    'Fraction': function Fraction(x) {
      return x.floor();
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since floor(0) = 0
      return deepMap(x, floor, true);
    }
  });
  floor.toTex = {
    1: "\\left\\lfloor${args[0]}\\right\\rfloor"
  };
  return floor;
}

exports.name = 'floor';
exports.factory = factory;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string = __webpack_require__(9);

function factory(type, config, load, typed) {
  /**
   * Format a value of any type into a string.
   *
   * Syntax:
   *
   *    math.format(value)
   *    math.format(value, options)
   *    math.format(value, precision)
   *    math.format(value, callback)
   *
   * Where:
   *
   *  - `value: *`
   *    The value to be formatted
   *  - `options: Object`
   *    An object with formatting options. Available options:
   *    - `notation: string`
   *      Number notation. Choose from:
   *      - 'fixed'
   *        Always use regular number notation.
   *        For example '123.40' and '14000000'
   *      - 'exponential'
   *        Always use exponential notation.
   *        For example '1.234e+2' and '1.4e+7'
   *      - 'engineering'
   *        Always use engineering notation.
   *        For example '123.4e+0' and '14.0e+6'
   *      - 'auto' (default)
   *        Regular number notation for numbers having an absolute value between
   *        `lower` and `upper` bounds, and uses exponential notation elsewhere.
   *        Lower bound is included, upper bound is excluded.
   *        For example '123.4' and '1.4e7'.
   *    - `precision: number`
   *      A number between 0 and 16 to round the digits of the number. In case
   *      of notations 'exponential', 'engineering', and 'auto', `precision`
   *      defines the total number of significant digits returned.
   *      In case of notation 'fixed', `precision` defines the number of
   *      significant digits after the decimal point.
   *      `precision` is undefined by default.
   *    - `lowerExp: number`
   *      Exponent determining the lower boundary for formatting a value with
   *      an exponent when `notation='auto`. Default value is `-3`.
   *    - `upperExp: number`
   *      Exponent determining the upper boundary for formatting a value with
   *      an exponent when `notation='auto`. Default value is `5`.
   *    - `fraction: string`. Available values: 'ratio' (default) or 'decimal'.
   *      For example `format(fraction(1, 3))` will output '1/3' when 'ratio' is
   *      configured, and will output `0.(3)` when 'decimal' is configured.
   * - `callback: function`
   *   A custom formatting function, invoked for all numeric elements in `value`,
   *   for example all elements of a matrix, or the real and imaginary
   *   parts of a complex number. This callback can be used to override the
   *   built-in numeric notation with any type of formatting. Function `callback`
   *   is called with `value` as parameter and must return a string.
   *
   * When `value` is an Object:
   *
   * - When the object contains a property `format` being a function, this function
   *   is invoked as `value.format(options)` and the result is returned.
   * - When the object has its own `toString` method, this method is invoked
   *   and the result is returned.
   * - In other cases the function will loop over all object properties and
   *   return JSON object notation like '{"a": 2, "b": 3}'.
   *
   * When value is a function:
   *
   * - When the function has a property `syntax`, it returns this
   *   syntax description.
   * - In other cases, a string `'function'` is returned.
   *
   * Examples:
   *
   *    math.format(6.4)                                        // returns '6.4'
   *    math.format(1240000)                                    // returns '1.24e6'
   *    math.format(1/3)                                        // returns '0.3333333333333333'
   *    math.format(1/3, 3)                                     // returns '0.333'
   *    math.format(21385, 2)                                   // returns '21000'
   *    math.format(12e8, {notation: 'fixed'})                  // returns '1200000000'
   *    math.format(2.3,  {notation: 'fixed', precision: 4})    // returns '2.3000'
   *    math.format(52.8, {notation: 'exponential'})            // returns '5.28e+1'
   *    math.format(12400,{notation: 'engineering'})            // returns '12.400e+3'
   *    math.format(2000, {lowerExp: -2, upperExp: 2})          // returns '2e+3'
   *
   *    function formatCurrency(value) {
   *      // return currency notation with two digits:
   *      return '$' + value.toFixed(2)
   *
   *      // you could also use math.format inside the callback:
   *      // return '$' + math.format(value, {notation: 'fixed', precision: 2})
   *    }
   *    math.format([2.1, 3, 0.016], formatCurrency}            // returns '[$2.10, $3.00, $0.02]'
   *
   * See also:
   *
   *    print
   *
   * @param {*} value                               Value to be stringified
   * @param {Object | Function | number} [options]  Formatting options
   * @return {string} The formatted value
   */
  var format = typed('format', {
    'any': string.format,
    'any, Object | function | number': string.format
  });
  format.toTex = undefined; // use default template

  return format;
}

exports.name = 'format';
exports.factory = factory;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getSafeProperty = __webpack_require__(13).getSafeProperty;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  var access = load(__webpack_require__(115));
  /**
   * @constructor AccessorNode
   * @extends {Node}
   * Access an object property or get a matrix subset
   *
   * @param {Node} object                 The object from which to retrieve
   *                                      a property or subset.
   * @param {IndexNode} index             IndexNode containing ranges
   */

  function AccessorNode(object, index) {
    if (!(this instanceof AccessorNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    if (!type.isNode(object)) {
      throw new TypeError('Node expected for parameter "object"');
    }

    if (!type.isIndexNode(index)) {
      throw new TypeError('IndexNode expected for parameter "index"');
    }

    this.object = object || null;
    this.index = index; // readonly property name

    Object.defineProperty(this, 'name', {
      get: function () {
        if (this.index) {
          return this.index.isObjectProperty() ? this.index.getObjectProperty() : '';
        } else {
          return this.object.name || '';
        }
      }.bind(this),
      set: function set() {
        throw new Error('Cannot assign a new name, name is read-only');
      }
    });
  }

  AccessorNode.prototype = new Node();
  AccessorNode.prototype.type = 'AccessorNode';
  AccessorNode.prototype.isAccessorNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  AccessorNode.prototype._compile = function (math, argNames) {
    var evalObject = this.object._compile(math, argNames);

    var evalIndex = this.index._compile(math, argNames);

    if (this.index.isObjectProperty()) {
      var prop = this.index.getObjectProperty();
      return function evalAccessorNode(scope, args, context) {
        return getSafeProperty(evalObject(scope, args, context), prop);
      };
    } else {
      return function evalAccessorNode(scope, args, context) {
        var object = evalObject(scope, args, context);
        var index = evalIndex(scope, args, object); // we pass object here instead of context

        return access(object, index);
      };
    }
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  AccessorNode.prototype.forEach = function (callback) {
    callback(this.object, 'object', this);
    callback(this.index, 'index', this);
  };
  /**
   * Create a new AccessorNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {AccessorNode} Returns a transformed copy of the node
   */


  AccessorNode.prototype.map = function (callback) {
    return new AccessorNode(this._ifNode(callback(this.object, 'object', this)), this._ifNode(callback(this.index, 'index', this)));
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {AccessorNode}
   */


  AccessorNode.prototype.clone = function () {
    return new AccessorNode(this.object, this.index);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string}
   */


  AccessorNode.prototype._toString = function (options) {
    var object = this.object.toString(options);

    if (needParenthesis(this.object)) {
      object = '(' + object + ')';
    }

    return object + this.index.toString(options);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string}
   */


  AccessorNode.prototype.toHTML = function (options) {
    var object = this.object.toHTML(options);

    if (needParenthesis(this.object)) {
      object = '<span class="math-parenthesis math-round-parenthesis">(</span>' + object + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    return object + this.index.toHTML(options);
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string}
   */


  AccessorNode.prototype._toTex = function (options) {
    var object = this.object.toTex(options);

    if (needParenthesis(this.object)) {
      object = "\\left(' + object + '\\right)";
    }

    return object + this.index.toTex(options);
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  AccessorNode.prototype.toJSON = function () {
    return {
      mathjs: 'AccessorNode',
      object: this.object,
      index: this.index
    };
  };
  /**
   * Instantiate an AccessorNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "AccessorNode", object: ..., index: ...}`,
   *                       where mathjs is optional
   * @returns {AccessorNode}
   */


  AccessorNode.fromJSON = function (json) {
    return new AccessorNode(json.object, json.index);
  };
  /**
   * Are parenthesis needed?
   * @private
   */


  function needParenthesis(node) {
    // TODO: maybe make a method on the nodes which tells whether they need parenthesis?
    return !(type.isAccessorNode(node) || type.isArrayNode(node) || type.isConstantNode(node) || type.isFunctionNode(node) || type.isObjectNode(node) || type.isParenthesisNode(node) || type.isSymbolNode(node));
  }

  return AccessorNode;
}

exports.name = 'AccessorNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Reserved keywords not allowed to use in the parser

module.exports = {
  end: true
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var errorTransform = __webpack_require__(22).transform;

var getSafeProperty = __webpack_require__(13).getSafeProperty;

function factory(type, config, load, typed) {
  var subset = load(__webpack_require__(23));
  /**
   * Retrieve part of an object:
   *
   * - Retrieve a property from an object
   * - Retrieve a part of a string
   * - Retrieve a matrix subset
   *
   * @param {Object | Array | Matrix | string} object
   * @param {Index} index
   * @return {Object | Array | Matrix | string} Returns the subset
   */

  return function access(object, index) {
    try {
      if (Array.isArray(object)) {
        return subset(object, index);
      } else if (object && typeof object.subset === 'function') {
        // Matrix
        return object.subset(index);
      } else if (typeof object === 'string') {
        // TODO: move getStringSubset into a separate util file, use that
        return subset(object, index);
      } else if (_typeof(object) === 'object') {
        if (!index.isObjectProperty()) {
          throw new TypeError('Cannot apply a numeric index as object property');
        }

        return getSafeProperty(object, index.getObjectProperty());
      } else {
        throw new TypeError('Cannot apply index: unsupported type of object');
      }
    } catch (err) {
      throw errorTransform(err);
    }
  };
}

exports.factory = factory;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var map = __webpack_require__(2).map;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  /**
   * @constructor ArrayNode
   * @extends {Node}
   * Holds an 1-dimensional array with items
   * @param {Node[]} [items]   1 dimensional array with items
   */

  function ArrayNode(items) {
    if (!(this instanceof ArrayNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this.items = items || []; // validate input

    if (!Array.isArray(this.items) || !this.items.every(type.isNode)) {
      throw new TypeError('Array containing Nodes expected');
    } // TODO: deprecated since v3, remove some day


    var deprecated = function deprecated() {
      throw new Error('Property `ArrayNode.nodes` is deprecated, use `ArrayNode.items` instead');
    };

    Object.defineProperty(this, 'nodes', {
      get: deprecated,
      set: deprecated
    });
  }

  ArrayNode.prototype = new Node();
  ArrayNode.prototype.type = 'ArrayNode';
  ArrayNode.prototype.isArrayNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  ArrayNode.prototype._compile = function (math, argNames) {
    var evalItems = map(this.items, function (item) {
      return item._compile(math, argNames);
    });
    var asMatrix = math.config().matrix !== 'Array';

    if (asMatrix) {
      var matrix = math.matrix;
      return function evalArrayNode(scope, args, context) {
        return matrix(map(evalItems, function (evalItem) {
          return evalItem(scope, args, context);
        }));
      };
    } else {
      return function evalArrayNode(scope, args, context) {
        return map(evalItems, function (evalItem) {
          return evalItem(scope, args, context);
        });
      };
    }
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  ArrayNode.prototype.forEach = function (callback) {
    for (var i = 0; i < this.items.length; i++) {
      var node = this.items[i];
      callback(node, 'items[' + i + ']', this);
    }
  };
  /**
   * Create a new ArrayNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {ArrayNode} Returns a transformed copy of the node
   */


  ArrayNode.prototype.map = function (callback) {
    var items = [];

    for (var i = 0; i < this.items.length; i++) {
      items[i] = this._ifNode(callback(this.items[i], 'items[' + i + ']', this));
    }

    return new ArrayNode(items);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {ArrayNode}
   */


  ArrayNode.prototype.clone = function () {
    return new ArrayNode(this.items.slice(0));
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  ArrayNode.prototype._toString = function (options) {
    var items = this.items.map(function (node) {
      return node.toString(options);
    });
    return '[' + items.join(', ') + ']';
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  ArrayNode.prototype.toJSON = function () {
    return {
      mathjs: 'ArrayNode',
      items: this.items
    };
  };
  /**
   * Instantiate an ArrayNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "ArrayNode", items: [...]}`,
   *                       where mathjs is optional
   * @returns {ArrayNode}
   */


  ArrayNode.fromJSON = function (json) {
    return new ArrayNode(json.items);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  ArrayNode.prototype.toHTML = function (options) {
    var items = this.items.map(function (node) {
      return node.toHTML(options);
    });
    return '<span class="math-parenthesis math-square-parenthesis">[</span>' + items.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  ArrayNode.prototype._toTex = function (options) {
    var s = '\\begin{bmatrix}';
    this.items.forEach(function (node) {
      if (node.items) {
        s += node.items.map(function (childNode) {
          return childNode.toTex(options);
        }).join('&');
      } else {
        s += node.toTex(options);
      } // new line


      s += '\\\\';
    });
    s += '\\end{bmatrix}';
    return s;
  };

  return ArrayNode;
}

exports.name = 'ArrayNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getSafeProperty = __webpack_require__(13).getSafeProperty;

var setSafeProperty = __webpack_require__(13).setSafeProperty;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  var assign = load(__webpack_require__(205));
  var access = load(__webpack_require__(115));

  var operators = __webpack_require__(53);
  /**
   * @constructor AssignmentNode
   * @extends {Node}
   *
   * Define a symbol, like `a=3.2`, update a property like `a.b=3.2`, or
   * replace a subset of a matrix like `A[2,2]=42`.
   *
   * Syntax:
   *
   *     new AssignmentNode(symbol, value)
   *     new AssignmentNode(object, index, value)
   *
   * Usage:
   *
   *    new AssignmentNode(new SymbolNode('a'), new ConstantNode(2))                       // a=2
   *    new AssignmentNode(new SymbolNode('a'), new IndexNode('b'), new ConstantNode(2))   // a.b=2
   *    new AssignmentNode(new SymbolNode('a'), new IndexNode(1, 2), new ConstantNode(3))  // a[1,2]=3
   *
   * @param {SymbolNode | AccessorNode} object  Object on which to assign a value
   * @param {IndexNode} [index=null]            Index, property name or matrix
   *                                            index. Optional. If not provided
   *                                            and `object` is a SymbolNode,
   *                                            the property is assigned to the
   *                                            global scope.
   * @param {Node} value                        The value to be assigned
   */


  function AssignmentNode(object, index, value) {
    if (!(this instanceof AssignmentNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this.object = object;
    this.index = value ? index : null;
    this.value = value || index; // validate input

    if (!type.isSymbolNode(object) && !type.isAccessorNode(object)) {
      throw new TypeError('SymbolNode or AccessorNode expected as "object"');
    }

    if (type.isSymbolNode(object) && object.name === 'end') {
      throw new Error('Cannot assign to symbol "end"');
    }

    if (this.index && !type.isIndexNode(this.index)) {
      // index is optional
      throw new TypeError('IndexNode expected as "index"');
    }

    if (!type.isNode(this.value)) {
      throw new TypeError('Node expected as "value"');
    } // readonly property name


    Object.defineProperty(this, 'name', {
      get: function () {
        if (this.index) {
          return this.index.isObjectProperty() ? this.index.getObjectProperty() : '';
        } else {
          return this.object.name || '';
        }
      }.bind(this),
      set: function set() {
        throw new Error('Cannot assign a new name, name is read-only');
      }
    });
  }

  AssignmentNode.prototype = new Node();
  AssignmentNode.prototype.type = 'AssignmentNode';
  AssignmentNode.prototype.isAssignmentNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  AssignmentNode.prototype._compile = function (math, argNames) {
    var evalObject = this.object._compile(math, argNames);

    var evalIndex = this.index ? this.index._compile(math, argNames) : null;

    var evalValue = this.value._compile(math, argNames);

    var name = this.object.name;

    if (!this.index) {
      // apply a variable to the scope, for example `a=2`
      if (!type.isSymbolNode(this.object)) {
        throw new TypeError('SymbolNode expected as object');
      }

      return function evalAssignmentNode(scope, args, context) {
        return setSafeProperty(scope, name, evalValue(scope, args, context));
      };
    } else if (this.index.isObjectProperty()) {
      // apply an object property for example `a.b=2`
      var prop = this.index.getObjectProperty();
      return function evalAssignmentNode(scope, args, context) {
        var object = evalObject(scope, args, context);
        var value = evalValue(scope, args, context);
        return setSafeProperty(object, prop, value);
      };
    } else if (type.isSymbolNode(this.object)) {
      // update a matrix subset, for example `a[2]=3`
      return function evalAssignmentNode(scope, args, context) {
        var childObject = evalObject(scope, args, context);
        var value = evalValue(scope, args, context);
        var index = evalIndex(scope, args, childObject); // Important:  we pass childObject instead of context

        setSafeProperty(scope, name, assign(childObject, index, value));
        return value;
      };
    } else {
      // type.isAccessorNode(node.object) === true
      // update a matrix subset, for example `a.b[2]=3`
      // we will not use the compile function of the AccessorNode, but compile it
      // ourselves here as we need the parent object of the AccessorNode:
      // wee need to apply the updated object to parent object
      var evalParentObject = this.object.object._compile(math, argNames);

      if (this.object.index.isObjectProperty()) {
        var parentProp = this.object.index.getObjectProperty();
        return function evalAssignmentNode(scope, args, context) {
          var parent = evalParentObject(scope, args, context);
          var childObject = getSafeProperty(parent, parentProp);
          var index = evalIndex(scope, args, childObject); // Important: we pass childObject instead of context

          var value = evalValue(scope, args, context);
          setSafeProperty(parent, parentProp, assign(childObject, index, value));
          return value;
        };
      } else {
        // if some parameters use the 'end' parameter, we need to calculate the size
        var evalParentIndex = this.object.index._compile(math, argNames);

        return function evalAssignmentNode(scope, args, context) {
          var parent = evalParentObject(scope, args, context);
          var parentIndex = evalParentIndex(scope, args, parent); // Important: we pass parent instead of context

          var childObject = access(parent, parentIndex);
          var index = evalIndex(scope, args, childObject); // Important:  we pass childObject instead of context

          var value = evalValue(scope, args, context);
          assign(parent, parentIndex, assign(childObject, index, value));
          return value;
        };
      }
    }
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  AssignmentNode.prototype.forEach = function (callback) {
    callback(this.object, 'object', this);

    if (this.index) {
      callback(this.index, 'index', this);
    }

    callback(this.value, 'value', this);
  };
  /**
   * Create a new AssignmentNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {AssignmentNode} Returns a transformed copy of the node
   */


  AssignmentNode.prototype.map = function (callback) {
    var object = this._ifNode(callback(this.object, 'object', this));

    var index = this.index ? this._ifNode(callback(this.index, 'index', this)) : null;

    var value = this._ifNode(callback(this.value, 'value', this));

    return new AssignmentNode(object, index, value);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {AssignmentNode}
   */


  AssignmentNode.prototype.clone = function () {
    return new AssignmentNode(this.object, this.index, this.value);
  };
  /*
   * Is parenthesis needed?
   * @param {node} node
   * @param {string} [parenthesis='keep']
   * @private
   */


  function needParenthesis(node, parenthesis) {
    if (!parenthesis) {
      parenthesis = 'keep';
    }

    var precedence = operators.getPrecedence(node, parenthesis);
    var exprPrecedence = operators.getPrecedence(node.value, parenthesis);
    return parenthesis === 'all' || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  /**
   * Get string representation
   * @param {Object} options
   * @return {string}
   */


  AssignmentNode.prototype._toString = function (options) {
    var object = this.object.toString(options);
    var index = this.index ? this.index.toString(options) : '';
    var value = this.value.toString(options);

    if (needParenthesis(this, options && options.parenthesis)) {
      value = '(' + value + ')';
    }

    return object + index + ' = ' + value;
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  AssignmentNode.prototype.toJSON = function () {
    return {
      mathjs: 'AssignmentNode',
      object: this.object,
      index: this.index,
      value: this.value
    };
  };
  /**
   * Instantiate an AssignmentNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "AssignmentNode", object: ..., index: ..., value: ...}`,
   *                       where mathjs is optional
   * @returns {AssignmentNode}
   */


  AssignmentNode.fromJSON = function (json) {
    return new AssignmentNode(json.object, json.index, json.value);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string}
   */


  AssignmentNode.prototype.toHTML = function (options) {
    var object = this.object.toHTML(options);
    var index = this.index ? this.index.toHTML(options) : '';
    var value = this.value.toHTML(options);

    if (needParenthesis(this, options && options.parenthesis)) {
      value = '<span class="math-paranthesis math-round-parenthesis">(</span>' + value + '<span class="math-paranthesis math-round-parenthesis">)</span>';
    }

    return object + index + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + value;
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string}
   */


  AssignmentNode.prototype._toTex = function (options) {
    var object = this.object.toTex(options);
    var index = this.index ? this.index.toTex(options) : '';
    var value = this.value.toTex(options);

    if (needParenthesis(this, options && options.parenthesis)) {
      value = "\\left(".concat(value, "\\right)");
    }

    return object + index + ':=' + value;
  };

  return AssignmentNode;
}

exports.name = 'AssignmentNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(2).forEach;

var map = __webpack_require__(2).map;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  var ResultSet = load(__webpack_require__(107));
  /**
   * @constructor BlockNode
   * @extends {Node}
   * Holds a set with blocks
   * @param {Array.<{node: Node} | {node: Node, visible: boolean}>} blocks
   *            An array with blocks, where a block is constructed as an Object
   *            with properties block, which is a Node, and visible, which is
   *            a boolean. The property visible is optional and is true by default
   */

  function BlockNode(blocks) {
    if (!(this instanceof BlockNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    } // validate input, copy blocks


    if (!Array.isArray(blocks)) throw new Error('Array expected');
    this.blocks = blocks.map(function (block) {
      var node = block && block.node;
      var visible = block && block.visible !== undefined ? block.visible : true;
      if (!type.isNode(node)) throw new TypeError('Property "node" must be a Node');
      if (typeof visible !== 'boolean') throw new TypeError('Property "visible" must be a boolean');
      return {
        node: node,
        visible: visible
      };
    });
  }

  BlockNode.prototype = new Node();
  BlockNode.prototype.type = 'BlockNode';
  BlockNode.prototype.isBlockNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  BlockNode.prototype._compile = function (math, argNames) {
    var evalBlocks = map(this.blocks, function (block) {
      return {
        eval: block.node._compile(math, argNames),
        visible: block.visible
      };
    });
    return function evalBlockNodes(scope, args, context) {
      var results = [];
      forEach(evalBlocks, function evalBlockNode(block) {
        var result = block.eval(scope, args, context);

        if (block.visible) {
          results.push(result);
        }
      });
      return new ResultSet(results);
    };
  };
  /**
   * Execute a callback for each of the child blocks of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  BlockNode.prototype.forEach = function (callback) {
    for (var i = 0; i < this.blocks.length; i++) {
      callback(this.blocks[i].node, 'blocks[' + i + '].node', this);
    }
  };
  /**
   * Create a new BlockNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {BlockNode} Returns a transformed copy of the node
   */


  BlockNode.prototype.map = function (callback) {
    var blocks = [];

    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];

      var node = this._ifNode(callback(block.node, 'blocks[' + i + '].node', this));

      blocks[i] = {
        node: node,
        visible: block.visible
      };
    }

    return new BlockNode(blocks);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {BlockNode}
   */


  BlockNode.prototype.clone = function () {
    var blocks = this.blocks.map(function (block) {
      return {
        node: block.node,
        visible: block.visible
      };
    });
    return new BlockNode(blocks);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  BlockNode.prototype._toString = function (options) {
    return this.blocks.map(function (param) {
      return param.node.toString(options) + (param.visible ? '' : ';');
    }).join('\n');
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  BlockNode.prototype.toJSON = function () {
    return {
      mathjs: 'BlockNode',
      blocks: this.blocks
    };
  };
  /**
   * Instantiate an BlockNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "BlockNode", blocks: [{node: ..., visible: false}, ...]}`,
   *                       where mathjs is optional
   * @returns {BlockNode}
   */


  BlockNode.fromJSON = function (json) {
    return new BlockNode(json.blocks);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  BlockNode.prototype.toHTML = function (options) {
    return this.blocks.map(function (param) {
      return param.node.toHTML(options) + (param.visible ? '' : '<span class="math-separator">;</span>');
    }).join('<span class="math-separator"><br /></span>');
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  BlockNode.prototype._toTex = function (options) {
    return this.blocks.map(function (param) {
      return param.node.toTex(options) + (param.visible ? '' : ';');
    }).join('\\;\\;\n');
  };

  return BlockNode;
}

exports.name = 'BlockNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var operators = __webpack_require__(53);

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  var mathTypeOf = load(__webpack_require__(26));
  /**
   * A lazy evaluating conditional operator: 'condition ? trueExpr : falseExpr'
   *
   * @param {Node} condition   Condition, must result in a boolean
   * @param {Node} trueExpr    Expression evaluated when condition is true
   * @param {Node} falseExpr   Expression evaluated when condition is true
   *
   * @constructor ConditionalNode
   * @extends {Node}
   */

  function ConditionalNode(condition, trueExpr, falseExpr) {
    if (!(this instanceof ConditionalNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    if (!type.isNode(condition)) throw new TypeError('Parameter condition must be a Node');
    if (!type.isNode(trueExpr)) throw new TypeError('Parameter trueExpr must be a Node');
    if (!type.isNode(falseExpr)) throw new TypeError('Parameter falseExpr must be a Node');
    this.condition = condition;
    this.trueExpr = trueExpr;
    this.falseExpr = falseExpr;
  }

  ConditionalNode.prototype = new Node();
  ConditionalNode.prototype.type = 'ConditionalNode';
  ConditionalNode.prototype.isConditionalNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  ConditionalNode.prototype._compile = function (math, argNames) {
    var evalCondition = this.condition._compile(math, argNames);

    var evalTrueExpr = this.trueExpr._compile(math, argNames);

    var evalFalseExpr = this.falseExpr._compile(math, argNames);

    return function evalConditionalNode(scope, args, context) {
      return testCondition(evalCondition(scope, args, context)) ? evalTrueExpr(scope, args, context) : evalFalseExpr(scope, args, context);
    };
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  ConditionalNode.prototype.forEach = function (callback) {
    callback(this.condition, 'condition', this);
    callback(this.trueExpr, 'trueExpr', this);
    callback(this.falseExpr, 'falseExpr', this);
  };
  /**
   * Create a new ConditionalNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {ConditionalNode} Returns a transformed copy of the node
   */


  ConditionalNode.prototype.map = function (callback) {
    return new ConditionalNode(this._ifNode(callback(this.condition, 'condition', this)), this._ifNode(callback(this.trueExpr, 'trueExpr', this)), this._ifNode(callback(this.falseExpr, 'falseExpr', this)));
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {ConditionalNode}
   */


  ConditionalNode.prototype.clone = function () {
    return new ConditionalNode(this.condition, this.trueExpr, this.falseExpr);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   */


  ConditionalNode.prototype._toString = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var precedence = operators.getPrecedence(this, parenthesis); // Enclose Arguments in parentheses if they are an OperatorNode
    // or have lower or equal precedence
    // NOTE: enclosing all OperatorNodes in parentheses is a decision
    // purely based on aesthetics and readability

    var condition = this.condition.toString(options);
    var conditionPrecedence = operators.getPrecedence(this.condition, parenthesis);

    if (parenthesis === 'all' || this.condition.type === 'OperatorNode' || conditionPrecedence !== null && conditionPrecedence <= precedence) {
      condition = '(' + condition + ')';
    }

    var trueExpr = this.trueExpr.toString(options);
    var truePrecedence = operators.getPrecedence(this.trueExpr, parenthesis);

    if (parenthesis === 'all' || this.trueExpr.type === 'OperatorNode' || truePrecedence !== null && truePrecedence <= precedence) {
      trueExpr = '(' + trueExpr + ')';
    }

    var falseExpr = this.falseExpr.toString(options);
    var falsePrecedence = operators.getPrecedence(this.falseExpr, parenthesis);

    if (parenthesis === 'all' || this.falseExpr.type === 'OperatorNode' || falsePrecedence !== null && falsePrecedence <= precedence) {
      falseExpr = '(' + falseExpr + ')';
    }

    return condition + ' ? ' + trueExpr + ' : ' + falseExpr;
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  ConditionalNode.prototype.toJSON = function () {
    return {
      mathjs: 'ConditionalNode',
      condition: this.condition,
      trueExpr: this.trueExpr,
      falseExpr: this.falseExpr
    };
  };
  /**
   * Instantiate an ConditionalNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "ConditionalNode", "condition": ..., "trueExpr": ..., "falseExpr": ...}`,
   *                       where mathjs is optional
   * @returns {ConditionalNode}
   */


  ConditionalNode.fromJSON = function (json) {
    return new ConditionalNode(json.condition, json.trueExpr, json.falseExpr);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   */


  ConditionalNode.prototype.toHTML = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var precedence = operators.getPrecedence(this, parenthesis); // Enclose Arguments in parentheses if they are an OperatorNode
    // or have lower or equal precedence
    // NOTE: enclosing all OperatorNodes in parentheses is a decision
    // purely based on aesthetics and readability

    var condition = this.condition.toHTML(options);
    var conditionPrecedence = operators.getPrecedence(this.condition, parenthesis);

    if (parenthesis === 'all' || this.condition.type === 'OperatorNode' || conditionPrecedence !== null && conditionPrecedence <= precedence) {
      condition = '<span class="math-parenthesis math-round-parenthesis">(</span>' + condition + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    var trueExpr = this.trueExpr.toHTML(options);
    var truePrecedence = operators.getPrecedence(this.trueExpr, parenthesis);

    if (parenthesis === 'all' || this.trueExpr.type === 'OperatorNode' || truePrecedence !== null && truePrecedence <= precedence) {
      trueExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + trueExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    var falseExpr = this.falseExpr.toHTML(options);
    var falsePrecedence = operators.getPrecedence(this.falseExpr, parenthesis);

    if (parenthesis === 'all' || this.falseExpr.type === 'OperatorNode' || falsePrecedence !== null && falsePrecedence <= precedence) {
      falseExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + falseExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    return condition + '<span class="math-operator math-conditional-operator">?</span>' + trueExpr + '<span class="math-operator math-conditional-operator">:</span>' + falseExpr;
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  ConditionalNode.prototype._toTex = function (options) {
    return '\\begin{cases} {' + this.trueExpr.toTex(options) + '}, &\\quad{\\text{if }\\;' + this.condition.toTex(options) + '}\\\\{' + this.falseExpr.toTex(options) + '}, &\\quad{\\text{otherwise}}\\end{cases}';
  };
  /**
   * Test whether a condition is met
   * @param {*} condition
   * @returns {boolean} true if condition is true or non-zero, else false
   */


  function testCondition(condition) {
    if (typeof condition === 'number' || typeof condition === 'boolean' || typeof condition === 'string') {
      return !!condition;
    }

    if (condition) {
      if (type.isBigNumber(condition)) {
        return !condition.isZero();
      }

      if (type.isComplex(condition)) {
        return !!(condition.re || condition.im);
      }

      if (type.isUnit(condition)) {
        return !!condition.value;
      }
    }

    if (condition === null || condition === undefined) {
      return false;
    }

    throw new TypeError('Unsupported type of condition "' + mathTypeOf(condition) + '"');
  }

  return ConditionalNode;
}

exports.name = 'ConditionalNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keywords = __webpack_require__(114);

var escape = __webpack_require__(9).escape;

var forEach = __webpack_require__(2).forEach;

var join = __webpack_require__(2).join;

var latex = __webpack_require__(4);

var operators = __webpack_require__(53);

var setSafeProperty = __webpack_require__(13).setSafeProperty;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  /**
   * @constructor FunctionAssignmentNode
   * @extends {Node}
   * Function assignment
   *
   * @param {string} name           Function name
   * @param {string[] | Array.<{name: string, type: string}>} params
   *                                Array with function parameter names, or an
   *                                array with objects containing the name
   *                                and type of the parameter
   * @param {Node} expr             The function expression
   */

  function FunctionAssignmentNode(name, params, expr) {
    if (!(this instanceof FunctionAssignmentNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    } // validate input


    if (typeof name !== 'string') throw new TypeError('String expected for parameter "name"');
    if (!Array.isArray(params)) throw new TypeError('Array containing strings or objects expected for parameter "params"');
    if (!type.isNode(expr)) throw new TypeError('Node expected for parameter "expr"');
    if (name in keywords) throw new Error('Illegal function name, "' + name + '" is a reserved keyword');
    this.name = name;
    this.params = params.map(function (param) {
      return param && param.name || param;
    });
    this.types = params.map(function (param) {
      return param && param.type || 'any';
    });
    this.expr = expr;
  }

  FunctionAssignmentNode.prototype = new Node();
  FunctionAssignmentNode.prototype.type = 'FunctionAssignmentNode';
  FunctionAssignmentNode.prototype.isFunctionAssignmentNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  FunctionAssignmentNode.prototype._compile = function (math, argNames) {
    var childArgNames = Object.create(argNames);
    forEach(this.params, function (param) {
      childArgNames[param] = true;
    }); // compile the function expression with the child args

    var evalExpr = this.expr._compile(math, childArgNames);

    var name = this.name;
    var params = this.params;
    var signature = join(this.types, ',');
    var syntax = name + '(' + join(this.params, ', ') + ')';
    return function evalFunctionAssignmentNode(scope, args, context) {
      var signatures = {};

      signatures[signature] = function () {
        var childArgs = Object.create(args);

        for (var i = 0; i < params.length; i++) {
          childArgs[params[i]] = arguments[i];
        }

        return evalExpr(scope, childArgs, context);
      };

      var fn = typed(name, signatures);
      fn.syntax = syntax;
      setSafeProperty(scope, name, fn);
      return fn;
    };
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  FunctionAssignmentNode.prototype.forEach = function (callback) {
    callback(this.expr, 'expr', this);
  };
  /**
   * Create a new FunctionAssignmentNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {FunctionAssignmentNode} Returns a transformed copy of the node
   */


  FunctionAssignmentNode.prototype.map = function (callback) {
    var expr = this._ifNode(callback(this.expr, 'expr', this));

    return new FunctionAssignmentNode(this.name, this.params.slice(0), expr);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {FunctionAssignmentNode}
   */


  FunctionAssignmentNode.prototype.clone = function () {
    return new FunctionAssignmentNode(this.name, this.params.slice(0), this.expr);
  };
  /**
   * Is parenthesis needed?
   * @param {Node} node
   * @param {Object} parenthesis
   * @private
   */


  function needParenthesis(node, parenthesis) {
    var precedence = operators.getPrecedence(node, parenthesis);
    var exprPrecedence = operators.getPrecedence(node.expr, parenthesis);
    return parenthesis === 'all' || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  /**
   * get string representation
   * @param {Object} options
   * @return {string} str
   */


  FunctionAssignmentNode.prototype._toString = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var expr = this.expr.toString(options);

    if (needParenthesis(this, parenthesis)) {
      expr = '(' + expr + ')';
    }

    return this.name + '(' + this.params.join(', ') + ') = ' + expr;
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  FunctionAssignmentNode.prototype.toJSON = function () {
    var types = this.types;
    return {
      mathjs: 'FunctionAssignmentNode',
      name: this.name,
      params: this.params.map(function (param, index) {
        return {
          name: param,
          type: types[index]
        };
      }),
      expr: this.expr
    };
  };
  /**
   * Instantiate an FunctionAssignmentNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "FunctionAssignmentNode", name: ..., params: ..., expr: ...}`,
   *                       where mathjs is optional
   * @returns {FunctionAssignmentNode}
   */


  FunctionAssignmentNode.fromJSON = function (json) {
    return new FunctionAssignmentNode(json.name, json.params, json.expr);
  };
  /**
   * get HTML representation
   * @param {Object} options
   * @return {string} str
   */


  FunctionAssignmentNode.prototype.toHTML = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var params = [];

    for (var i = 0; i < this.params.length; i++) {
      params.push('<span class="math-symbol math-parameter">' + escape(this.params[i]) + '</span>');
    }

    var expr = this.expr.toHTML(options);

    if (needParenthesis(this, parenthesis)) {
      expr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + expr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    return '<span class="math-function">' + escape(this.name) + '</span>' + '<span class="math-parenthesis math-round-parenthesis">(</span>' + params.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + expr;
  };
  /**
   * get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  FunctionAssignmentNode.prototype._toTex = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var expr = this.expr.toTex(options);

    if (needParenthesis(this, parenthesis)) {
      expr = "\\left(".concat(expr, "\\right)");
    }

    return '\\mathrm{' + this.name + '}\\left(' + this.params.map(latex.toSymbol).join(',') + '\\right):=' + expr;
  };

  return FunctionAssignmentNode;
}

exports.name = 'FunctionAssignmentNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var map = __webpack_require__(2).map;

var escape = __webpack_require__(9).escape;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  var Range = load(__webpack_require__(106));
  var isArray = Array.isArray;
  /**
   * @constructor IndexNode
   * @extends Node
   *
   * Describes a subset of a matrix or an object property.
   * Cannot be used on its own, needs to be used within an AccessorNode or
   * AssignmentNode.
   *
   * @param {Node[]} dimensions
   * @param {boolean} [dotNotation=false]  Optional property describing whether
   *                                       this index was written using dot
   *                                       notation like `a.b`, or using bracket
   *                                       notation like `a["b"]` (default).
   *                                       Used to stringify an IndexNode.
   */

  function IndexNode(dimensions, dotNotation) {
    if (!(this instanceof IndexNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this.dimensions = dimensions;
    this.dotNotation = dotNotation || false; // validate input

    if (!isArray(dimensions) || !dimensions.every(type.isNode)) {
      throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
    }

    if (this.dotNotation && !this.isObjectProperty()) {
      throw new Error('dotNotation only applicable for object properties');
    } // TODO: deprecated since v3, remove some day


    var deprecated = function deprecated() {
      throw new Error('Property `IndexNode.object` is deprecated, use `IndexNode.fn` instead');
    };

    Object.defineProperty(this, 'object', {
      get: deprecated,
      set: deprecated
    });
  }

  IndexNode.prototype = new Node();
  IndexNode.prototype.type = 'IndexNode';
  IndexNode.prototype.isIndexNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  IndexNode.prototype._compile = function (math, argNames) {
    // TODO: implement support for bignumber (currently bignumbers are silently
    //       reduced to numbers when changing the value to zero-based)
    // TODO: Optimization: when the range values are ConstantNodes,
    //       we can beforehand resolve the zero-based value
    // optimization for a simple object property
    var evalDimensions = map(this.dimensions, function (range, i) {
      if (type.isRangeNode(range)) {
        if (range.needsEnd()) {
          // create a range containing end (like '4:end')
          var childArgNames = Object.create(argNames);
          childArgNames['end'] = true;

          var evalStart = range.start._compile(math, childArgNames);

          var evalEnd = range.end._compile(math, childArgNames);

          var evalStep = range.step ? range.step._compile(math, childArgNames) : function () {
            return 1;
          };
          return function evalDimension(scope, args, context) {
            var size = math.size(context).valueOf();
            var childArgs = Object.create(args);
            childArgs['end'] = size[i];
            return createRange(evalStart(scope, childArgs, context), evalEnd(scope, childArgs, context), evalStep(scope, childArgs, context));
          };
        } else {
          // create range
          var _evalStart = range.start._compile(math, argNames);

          var _evalEnd = range.end._compile(math, argNames);

          var _evalStep = range.step ? range.step._compile(math, argNames) : function () {
            return 1;
          };

          return function evalDimension(scope, args, context) {
            return createRange(_evalStart(scope, args, context), _evalEnd(scope, args, context), _evalStep(scope, args, context));
          };
        }
      } else if (type.isSymbolNode(range) && range.name === 'end') {
        // SymbolNode 'end'
        var _childArgNames = Object.create(argNames);

        _childArgNames['end'] = true;

        var evalRange = range._compile(math, _childArgNames);

        return function evalDimension(scope, args, context) {
          var size = math.size(context).valueOf();
          var childArgs = Object.create(args);
          childArgs['end'] = size[i];
          return evalRange(scope, childArgs, context);
        };
      } else {
        // ConstantNode
        var _evalRange = range._compile(math, argNames);

        return function evalDimension(scope, args, context) {
          return _evalRange(scope, args, context);
        };
      }
    });
    return function evalIndexNode(scope, args, context) {
      var dimensions = map(evalDimensions, function (evalDimension) {
        return evalDimension(scope, args, context);
      });
      return math.index.apply(math, dimensions);
    };
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  IndexNode.prototype.forEach = function (callback) {
    for (var i = 0; i < this.dimensions.length; i++) {
      callback(this.dimensions[i], 'dimensions[' + i + ']', this);
    }
  };
  /**
   * Create a new IndexNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {IndexNode} Returns a transformed copy of the node
   */


  IndexNode.prototype.map = function (callback) {
    var dimensions = [];

    for (var i = 0; i < this.dimensions.length; i++) {
      dimensions[i] = this._ifNode(callback(this.dimensions[i], 'dimensions[' + i + ']', this));
    }

    return new IndexNode(dimensions);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {IndexNode}
   */


  IndexNode.prototype.clone = function () {
    return new IndexNode(this.dimensions.slice(0));
  };
  /**
   * Test whether this IndexNode contains a single property name
   * @return {boolean}
   */


  IndexNode.prototype.isObjectProperty = function () {
    return this.dimensions.length === 1 && type.isConstantNode(this.dimensions[0]) && typeof this.dimensions[0].value === 'string';
  };
  /**
   * Returns the property name if IndexNode contains a property.
   * If not, returns null.
   * @return {string | null}
   */


  IndexNode.prototype.getObjectProperty = function () {
    return this.isObjectProperty() ? this.dimensions[0].value : null;
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   */


  IndexNode.prototype._toString = function (options) {
    // format the parameters like "[1, 0:5]"
    return this.dotNotation ? '.' + this.getObjectProperty() : '[' + this.dimensions.join(', ') + ']';
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  IndexNode.prototype.toJSON = function () {
    return {
      mathjs: 'IndexNode',
      dimensions: this.dimensions,
      dotNotation: this.dotNotation
    };
  };
  /**
   * Instantiate an IndexNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "IndexNode", dimensions: [...], dotNotation: false}`,
   *                       where mathjs is optional
   * @returns {IndexNode}
   */


  IndexNode.fromJSON = function (json) {
    return new IndexNode(json.dimensions, json.dotNotation);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   */


  IndexNode.prototype.toHTML = function (options) {
    // format the parameters like "[1, 0:5]"
    var dimensions = [];

    for (var i = 0; i < this.dimensions.length; i++) {
      dimensions[i] = this.dimensions[i].toHTML();
    }

    if (this.dotNotation) {
      return '<span class="math-operator math-accessor-operator">.</span>' + '<span class="math-symbol math-property">' + escape(this.getObjectProperty()) + '</span>';
    } else {
      return '<span class="math-parenthesis math-square-parenthesis">[</span>' + dimensions.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
    }
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  IndexNode.prototype._toTex = function (options) {
    var dimensions = this.dimensions.map(function (range) {
      return range.toTex(options);
    });
    return this.dotNotation ? '.' + this.getObjectProperty() + '' : '_{' + dimensions.join(',') + '}';
  }; // helper function to create a Range from start, step and end


  function createRange(start, end, step) {
    return new Range(type.isBigNumber(start) ? start.toNumber() : start, type.isBigNumber(end) ? end.toNumber() : end, type.isBigNumber(step) ? step.toNumber() : step);
  }

  return IndexNode;
}

exports.name = 'IndexNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var stringify = __webpack_require__(9).stringify;

var escape = __webpack_require__(9).escape;

var isSafeProperty = __webpack_require__(13).isSafeProperty;

var hasOwnProperty = __webpack_require__(5).hasOwnProperty;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  /**
   * @constructor ObjectNode
   * @extends {Node}
   * Holds an object with keys/values
   * @param {Object.<string, Node>} [properties]   object with key/value pairs
   */

  function ObjectNode(properties) {
    if (!(this instanceof ObjectNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this.properties = properties || {}; // validate input

    if (properties) {
      if (!(_typeof(properties) === 'object') || !Object.keys(properties).every(function (key) {
        return type.isNode(properties[key]);
      })) {
        throw new TypeError('Object containing Nodes expected');
      }
    }
  }

  ObjectNode.prototype = new Node();
  ObjectNode.prototype.type = 'ObjectNode';
  ObjectNode.prototype.isObjectNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  ObjectNode.prototype._compile = function (math, argNames) {
    var evalEntries = {};

    for (var key in this.properties) {
      if (hasOwnProperty(this.properties, key)) {
        // we stringify/parse the key here to resolve unicode characters,
        // so you cannot create a key like {"co\\u006Estructor": null}
        var stringifiedKey = stringify(key);
        var parsedKey = JSON.parse(stringifiedKey);

        if (!isSafeProperty(this.properties, parsedKey)) {
          throw new Error('No access to property "' + parsedKey + '"');
        }

        evalEntries[parsedKey] = this.properties[key]._compile(math, argNames);
      }
    }

    return function evalObjectNode(scope, args, context) {
      var obj = {};

      for (var _key in evalEntries) {
        if (hasOwnProperty(evalEntries, _key)) {
          obj[_key] = evalEntries[_key](scope, args, context);
        }
      }

      return obj;
    };
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  ObjectNode.prototype.forEach = function (callback) {
    for (var key in this.properties) {
      if (this.properties.hasOwnProperty(key)) {
        callback(this.properties[key], 'properties[' + stringify(key) + ']', this);
      }
    }
  };
  /**
   * Create a new ObjectNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {ObjectNode} Returns a transformed copy of the node
   */


  ObjectNode.prototype.map = function (callback) {
    var properties = {};

    for (var key in this.properties) {
      if (this.properties.hasOwnProperty(key)) {
        properties[key] = this._ifNode(callback(this.properties[key], 'properties[' + stringify(key) + ']', this));
      }
    }

    return new ObjectNode(properties);
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {ObjectNode}
   */


  ObjectNode.prototype.clone = function () {
    var properties = {};

    for (var key in this.properties) {
      if (this.properties.hasOwnProperty(key)) {
        properties[key] = this.properties[key];
      }
    }

    return new ObjectNode(properties);
  };
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  ObjectNode.prototype._toString = function (options) {
    var entries = [];

    for (var key in this.properties) {
      if (this.properties.hasOwnProperty(key)) {
        entries.push(stringify(key) + ': ' + this.properties[key].toString(options));
      }
    }

    return '{' + entries.join(', ') + '}';
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  ObjectNode.prototype.toJSON = function () {
    return {
      mathjs: 'ObjectNode',
      properties: this.properties
    };
  };
  /**
   * Instantiate an OperatorNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "ObjectNode", "properties": {...}}`,
   *                       where mathjs is optional
   * @returns {ObjectNode}
   */


  ObjectNode.fromJSON = function (json) {
    return new ObjectNode(json.properties);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   * @override
   */


  ObjectNode.prototype.toHTML = function (options) {
    var entries = [];

    for (var key in this.properties) {
      if (this.properties.hasOwnProperty(key)) {
        entries.push('<span class="math-symbol math-property">' + escape(key) + '</span>' + '<span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[key].toHTML(options));
      }
    }

    return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + entries.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  ObjectNode.prototype._toTex = function (options) {
    var entries = [];

    for (var key in this.properties) {
      if (this.properties.hasOwnProperty(key)) {
        entries.push('\\mathbf{' + key + ':} & ' + this.properties[key].toTex(options) + '\\\\');
      }
    }

    return "\\left\\{\\begin{array}{ll}".concat(entries.join('\n'), "\\end{array}\\right\\}");
  };

  return ObjectNode;
}

exports.name = 'ObjectNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var operators = __webpack_require__(53);

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));
  /**
   * @constructor RangeNode
   * @extends {Node}
   * create a range
   * @param {Node} start  included lower-bound
   * @param {Node} end    included upper-bound
   * @param {Node} [step] optional step
   */

  function RangeNode(start, end, step) {
    if (!(this instanceof RangeNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    } // validate inputs


    if (!type.isNode(start)) throw new TypeError('Node expected');
    if (!type.isNode(end)) throw new TypeError('Node expected');
    if (step && !type.isNode(step)) throw new TypeError('Node expected');
    if (arguments.length > 3) throw new Error('Too many arguments');
    this.start = start; // included lower-bound

    this.end = end; // included upper-bound

    this.step = step || null; // optional step
  }

  RangeNode.prototype = new Node();
  RangeNode.prototype.type = 'RangeNode';
  RangeNode.prototype.isRangeNode = true;
  /**
   * Check whether the RangeNode needs the `end` symbol to be defined.
   * This end is the size of the Matrix in current dimension.
   * @return {boolean}
   */

  RangeNode.prototype.needsEnd = function () {
    // find all `end` symbols in this RangeNode
    var endSymbols = this.filter(function (node) {
      return type.isSymbolNode(node) && node.name === 'end';
    });
    return endSymbols.length > 0;
  };
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */


  RangeNode.prototype._compile = function (math, argNames) {
    var range = math.range;

    var evalStart = this.start._compile(math, argNames);

    var evalEnd = this.end._compile(math, argNames);

    if (this.step) {
      var evalStep = this.step._compile(math, argNames);

      return function evalRangeNode(scope, args, context) {
        return range(evalStart(scope, args, context), evalEnd(scope, args, context), evalStep(scope, args, context));
      };
    } else {
      return function evalRangeNode(scope, args, context) {
        return range(evalStart(scope, args, context), evalEnd(scope, args, context));
      };
    }
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  RangeNode.prototype.forEach = function (callback) {
    callback(this.start, 'start', this);
    callback(this.end, 'end', this);

    if (this.step) {
      callback(this.step, 'step', this);
    }
  };
  /**
   * Create a new RangeNode having it's childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {RangeNode} Returns a transformed copy of the node
   */


  RangeNode.prototype.map = function (callback) {
    return new RangeNode(this._ifNode(callback(this.start, 'start', this)), this._ifNode(callback(this.end, 'end', this)), this.step && this._ifNode(callback(this.step, 'step', this)));
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {RangeNode}
   */


  RangeNode.prototype.clone = function () {
    return new RangeNode(this.start, this.end, this.step && this.step);
  };
  /**
   * Calculate the necessary parentheses
   * @param {Node} node
   * @param {string} parenthesis
   * @return {Object} parentheses
   * @private
   */


  function calculateNecessaryParentheses(node, parenthesis) {
    var precedence = operators.getPrecedence(node, parenthesis);
    var parens = {};
    var startPrecedence = operators.getPrecedence(node.start, parenthesis);
    parens.start = startPrecedence !== null && startPrecedence <= precedence || parenthesis === 'all';

    if (node.step) {
      var stepPrecedence = operators.getPrecedence(node.step, parenthesis);
      parens.step = stepPrecedence !== null && stepPrecedence <= precedence || parenthesis === 'all';
    }

    var endPrecedence = operators.getPrecedence(node.end, parenthesis);
    parens.end = endPrecedence !== null && endPrecedence <= precedence || parenthesis === 'all';
    return parens;
  }
  /**
   * Get string representation
   * @param {Object} options
   * @return {string} str
   */


  RangeNode.prototype._toString = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var parens = calculateNecessaryParentheses(this, parenthesis); // format string as start:step:stop

    var str;
    var start = this.start.toString(options);

    if (parens.start) {
      start = '(' + start + ')';
    }

    str = start;

    if (this.step) {
      var step = this.step.toString(options);

      if (parens.step) {
        step = '(' + step + ')';
      }

      str += ':' + step;
    }

    var end = this.end.toString(options);

    if (parens.end) {
      end = '(' + end + ')';
    }

    str += ':' + end;
    return str;
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  RangeNode.prototype.toJSON = function () {
    return {
      mathjs: 'RangeNode',
      start: this.start,
      end: this.end,
      step: this.step
    };
  };
  /**
   * Instantiate an RangeNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "RangeNode", "start": ..., "end": ..., "step": ...}`,
   *                       where mathjs is optional
   * @returns {RangeNode}
   */


  RangeNode.fromJSON = function (json) {
    return new RangeNode(json.start, json.end, json.step);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   */


  RangeNode.prototype.toHTML = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var parens = calculateNecessaryParentheses(this, parenthesis); // format string as start:step:stop

    var str;
    var start = this.start.toHTML(options);

    if (parens.start) {
      start = '<span class="math-parenthesis math-round-parenthesis">(</span>' + start + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    str = start;

    if (this.step) {
      var step = this.step.toHTML(options);

      if (parens.step) {
        step = '<span class="math-parenthesis math-round-parenthesis">(</span>' + step + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }

      str += '<span class="math-operator math-range-operator">:</span>' + step;
    }

    var end = this.end.toHTML(options);

    if (parens.end) {
      end = '<span class="math-parenthesis math-round-parenthesis">(</span>' + end + '<span class="math-parenthesis math-round-parenthesis">)</span>';
    }

    str += '<span class="math-operator math-range-operator">:</span>' + end;
    return str;
  };
  /**
   * Get LaTeX representation
   * @params {Object} options
   * @return {string} str
   */


  RangeNode.prototype._toTex = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var parens = calculateNecessaryParentheses(this, parenthesis);
    var str = this.start.toTex(options);

    if (parens.start) {
      str = "\\left(".concat(str, "\\right)");
    }

    if (this.step) {
      var step = this.step.toTex(options);

      if (parens.step) {
        step = "\\left(".concat(step, "\\right)");
      }

      str += ':' + step;
    }

    var end = this.end.toTex(options);

    if (parens.end) {
      end = "\\left(".concat(end, "\\right)");
    }

    str += ':' + end;
    return str;
  };

  return RangeNode;
}

exports.name = 'RangeNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var operators = __webpack_require__(53);

var latex = __webpack_require__(4);

var escape = __webpack_require__(9).escape;

function factory(type, config, load, typed) {
  var Node = load(__webpack_require__(16));

  var getSafeProperty = __webpack_require__(13).getSafeProperty;
  /**
   * A node representing a chained conditional expression, such as 'x > y > z'
   *
   * @param {String[]} conditionals   An array of conditional operators used to compare the parameters
   * @param {Node[]} params   The parameters that will be compared
   *
   * @constructor RelationalNode
   * @extends {Node}
   */


  function RelationalNode(conditionals, params) {
    if (!(this instanceof RelationalNode)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    if (!Array.isArray(conditionals)) throw new TypeError('Parameter conditionals must be an array');
    if (!Array.isArray(params)) throw new TypeError('Parameter params must be an array');
    if (conditionals.length !== params.length - 1) throw new TypeError('Parameter params must contain exactly one more element than parameter conditionals');
    this.conditionals = conditionals;
    this.params = params;
  }

  RelationalNode.prototype = new Node();
  RelationalNode.prototype.type = 'RelationalNode';
  RelationalNode.prototype.isRelationalNode = true;
  /**
   * Compile a node into a JavaScript function.
   * This basically pre-calculates as much as possible and only leaves open
   * calculations which depend on a dynamic scope with variables.
   * @param {Object} math     Math.js namespace with functions and constants.
   * @param {Object} argNames An object with argument names as key and `true`
   *                          as value. Used in the SymbolNode to optimize
   *                          for arguments from user assigned functions
   *                          (see FunctionAssignmentNode) or special symbols
   *                          like `end` (see IndexNode).
   * @return {function} Returns a function which can be called like:
   *                        evalNode(scope: Object, args: Object, context: *)
   */

  RelationalNode.prototype._compile = function (math, argNames) {
    var self = this;
    var compiled = this.params.map(function (p) {
      return p._compile(math, argNames);
    });
    return function evalRelationalNode(scope, args, context) {
      var evalLhs;
      var evalRhs = compiled[0](scope, args, context);

      for (var i = 0; i < self.conditionals.length; i++) {
        evalLhs = evalRhs;
        evalRhs = compiled[i + 1](scope, args, context);
        var condFn = getSafeProperty(math, self.conditionals[i]);

        if (!condFn(evalLhs, evalRhs)) {
          return false;
        }
      }

      return true;
    };
  };
  /**
   * Execute a callback for each of the child nodes of this node
   * @param {function(child: Node, path: string, parent: Node)} callback
   */


  RelationalNode.prototype.forEach = function (callback) {
    var _this = this;

    this.params.forEach(function (n, i) {
      return callback(n, 'params[' + i + ']', _this);
    }, this);
  };
  /**
   * Create a new RelationalNode having its childs be the results of calling
   * the provided callback function for each of the childs of the original node.
   * @param {function(child: Node, path: string, parent: Node): Node} callback
   * @returns {RelationalNode} Returns a transformed copy of the node
   */


  RelationalNode.prototype.map = function (callback) {
    var _this2 = this;

    return new RelationalNode(this.conditionals.slice(), this.params.map(function (n, i) {
      return _this2._ifNode(callback(n, 'params[' + i + ']', _this2));
    }, this));
  };
  /**
   * Create a clone of this node, a shallow copy
   * @return {RelationalNode}
   */


  RelationalNode.prototype.clone = function () {
    return new RelationalNode(this.conditionals, this.params);
  };
  /**
   * Get string representation.
   * @param {Object} options
   * @return {string} str
   */


  RelationalNode.prototype._toString = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var precedence = operators.getPrecedence(this, parenthesis);
    var paramStrings = this.params.map(function (p, index) {
      var paramPrecedence = operators.getPrecedence(p, parenthesis);
      return parenthesis === 'all' || paramPrecedence !== null && paramPrecedence <= precedence ? '(' + p.toString(options) + ')' : p.toString(options);
    });
    var operatorMap = {
      'equal': '==',
      'unequal': '!=',
      'smaller': '<',
      'larger': '>',
      'smallerEq': '<=',
      'largerEq': '>='
    };
    var ret = paramStrings[0];

    for (var i = 0; i < this.conditionals.length; i++) {
      ret += ' ' + operatorMap[this.conditionals[i]] + ' ' + paramStrings[i + 1];
    }

    return ret;
  };
  /**
   * Get a JSON representation of the node
   * @returns {Object}
   */


  RelationalNode.prototype.toJSON = function () {
    return {
      mathjs: 'RelationalNode',
      conditionals: this.conditionals,
      params: this.params
    };
  };
  /**
   * Instantiate a RelationalNode from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "RelationalNode", "condition": ..., "trueExpr": ..., "falseExpr": ...}`,
   *                       where mathjs is optional
   * @returns {RelationalNode}
   */


  RelationalNode.fromJSON = function (json) {
    return new RelationalNode(json.conditionals, json.params);
  };
  /**
   * Get HTML representation
   * @param {Object} options
   * @return {string} str
   */


  RelationalNode.prototype.toHTML = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var precedence = operators.getPrecedence(this, parenthesis);
    var paramStrings = this.params.map(function (p, index) {
      var paramPrecedence = operators.getPrecedence(p, parenthesis);
      return parenthesis === 'all' || paramPrecedence !== null && paramPrecedence <= precedence ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + p.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : p.toHTML(options);
    });
    var operatorMap = {
      'equal': '==',
      'unequal': '!=',
      'smaller': '<',
      'larger': '>',
      'smallerEq': '<=',
      'largerEq': '>='
    };
    var ret = paramStrings[0];

    for (var i = 0; i < this.conditionals.length; i++) {
      ret += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + escape(operatorMap[this.conditionals[i]]) + '</span>' + paramStrings[i + 1];
    }

    return ret;
  };
  /**
   * Get LaTeX representation
   * @param {Object} options
   * @return {string} str
   */


  RelationalNode.prototype._toTex = function (options) {
    var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
    var precedence = operators.getPrecedence(this, parenthesis);
    var paramStrings = this.params.map(function (p, index) {
      var paramPrecedence = operators.getPrecedence(p, parenthesis);
      return parenthesis === 'all' || paramPrecedence !== null && paramPrecedence <= precedence ? '\\left(' + p.toTex(options) + '\right)' : p.toTex(options);
    });
    var ret = paramStrings[0];

    for (var i = 0; i < this.conditionals.length; i++) {
      ret += latex.operators[this.conditionals[i]] + paramStrings[i + 1];
    }

    return ret;
  };

  return RelationalNode;
}

exports.name = 'RelationalNode';
exports.path = 'expression.node';
exports.factory = factory;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // TODO this could be improved by simplifying seperated constants under associative and commutative operators

function factory(type, config, load, typed, math) {
  var util = load(__webpack_require__(126));
  var isCommutative = util.isCommutative;
  var isAssociative = util.isAssociative;
  var allChildren = util.allChildren;
  var createMakeNodeFunction = util.createMakeNodeFunction;
  var ConstantNode = math.expression.node.ConstantNode;
  var OperatorNode = math.expression.node.OperatorNode;
  var FunctionNode = math.expression.node.FunctionNode;

  function simplifyConstant(expr, options) {
    var res = foldFraction(expr, options);
    return type.isNode(res) ? res : _toNode(res);
  }

  function _eval(fnname, args, options) {
    try {
      return _toNumber(math[fnname].apply(null, args), options);
    } catch (ignore) {
      // sometimes the implicit type conversion causes the evaluation to fail, so we'll try again after removing Fractions
      args = args.map(function (x) {
        if (type.isFraction(x)) {
          return x.valueOf();
        }

        return x;
      });
      return _toNumber(math[fnname].apply(null, args), options);
    }
  }

  var _toNode = typed({
    'Fraction': _fractionToNode,
    'number': function number(n) {
      if (n < 0) {
        return unaryMinusNode(new ConstantNode(-n));
      }

      return new ConstantNode(n);
    },
    'BigNumber': function BigNumber(n) {
      if (n < 0) {
        return unaryMinusNode(new ConstantNode(-n));
      }

      return new ConstantNode(n); // old parameters: (n.toString(), 'number')
    },
    'Complex': function Complex(s) {
      throw new Error('Cannot convert Complex number to Node');
    }
  }); // convert a number to a fraction only if it can be expressed exactly


  function _exactFraction(n, options) {
    var exactFractions = options && options.exactFractions !== false;

    if (exactFractions && isFinite(n)) {
      var f = math.fraction(n);

      if (f.valueOf() === n) {
        return f;
      }
    }

    return n;
  } // Convert numbers to a preferred number type in preference order: Fraction, number, Complex
  // BigNumbers are left alone


  var _toNumber = typed({
    'string, Object': function stringObject(s, options) {
      if (config.number === 'BigNumber') {
        return math.bignumber(s);
      } else if (config.number === 'Fraction') {
        return math.fraction(s);
      } else {
        var n = parseFloat(s);
        return _exactFraction(n, options);
      }
    },
    'Fraction, Object': function FractionObject(s, options) {
      return s;
    },
    // we don't need options here
    'BigNumber, Object': function BigNumberObject(s, options) {
      return s;
    },
    // we don't need options here
    'number, Object': function numberObject(s, options) {
      return _exactFraction(s, options);
    },
    'Complex, Object': function ComplexObject(s, options) {
      if (s.im !== 0) {
        return s;
      }

      return _exactFraction(s.re, options);
    }
  });

  function unaryMinusNode(n) {
    return new OperatorNode('-', 'unaryMinus', [n]);
  }

  function _fractionToNode(f) {
    var n;
    var vn = f.s * f.n;

    if (vn < 0) {
      n = new OperatorNode('-', 'unaryMinus', [new ConstantNode(-vn)]);
    } else {
      n = new ConstantNode(vn);
    }

    if (f.d === 1) {
      return n;
    }

    return new OperatorNode('/', 'divide', [n, new ConstantNode(f.d)]);
  }
  /*
   * Create a binary tree from a list of Fractions and Nodes.
   * Tries to fold Fractions by evaluating them until the first Node in the list is hit, so
   * `args` should be sorted to have the Fractions at the start (if the operator is commutative).
   * @param args - list of Fractions and Nodes
   * @param fn - evaluator for the binary operation evaluator that accepts two Fractions
   * @param makeNode - creates a binary OperatorNode/FunctionNode from a list of child Nodes
   * if args.length is 1, returns args[0]
   * @return - Either a Node representing a binary expression or Fraction
   */


  function foldOp(fn, args, makeNode, options) {
    return args.reduce(function (a, b) {
      if (!type.isNode(a) && !type.isNode(b)) {
        try {
          return _eval(fn, [a, b], options);
        } catch (ignoreandcontinue) {}

        a = _toNode(a);
        b = _toNode(b);
      } else if (!type.isNode(a)) {
        a = _toNode(a);
      } else if (!type.isNode(b)) {
        b = _toNode(b);
      }

      return makeNode([a, b]);
    });
  } // destroys the original node and returns a folded one


  function foldFraction(node, options) {
    switch (node.type) {
      case 'SymbolNode':
        return node;

      case 'ConstantNode':
        if (typeof node.value === 'number' || !isNaN(node.value)) {
          return _toNumber(node.value, options);
        }

        return node;

      case 'FunctionNode':
        if (math[node.name] && math[node.name].rawArgs) {
          return node;
        } // Process operators as OperatorNode


        var operatorFunctions = ['add', 'multiply'];

        if (operatorFunctions.indexOf(node.name) === -1) {
          var _args = node.args.map(function (arg) {
            return foldFraction(arg, options);
          }); // If all args are numbers


          if (!_args.some(type.isNode)) {
            try {
              return _eval(node.name, _args, options);
            } catch (ignoreandcontine) {}
          } // Convert all args to nodes and construct a symbolic function call


          _args = _args.map(function (arg) {
            return type.isNode(arg) ? arg : _toNode(arg);
          });
          return new FunctionNode(node.name, _args);
        } else {} // treat as operator

        /* falls through */


      case 'OperatorNode':
        var fn = node.fn.toString();
        var args;
        var res;
        var makeNode = createMakeNodeFunction(node);

        if (node.isUnary()) {
          args = [foldFraction(node.args[0], options)];

          if (!type.isNode(args[0])) {
            res = _eval(fn, args, options);
          } else {
            res = makeNode(args);
          }
        } else if (isAssociative(node)) {
          args = allChildren(node);
          args = args.map(function (arg) {
            return foldFraction(arg, options);
          });

          if (isCommutative(fn)) {
            // commutative binary operator
            var consts = [];
            var vars = [];

            for (var i = 0; i < args.length; i++) {
              if (!type.isNode(args[i])) {
                consts.push(args[i]);
              } else {
                vars.push(args[i]);
              }
            }

            if (consts.length > 1) {
              res = foldOp(fn, consts, makeNode, options);
              vars.unshift(res);
              res = foldOp(fn, vars, makeNode, options);
            } else {
              // we won't change the children order since it's not neccessary
              res = foldOp(fn, args, makeNode, options);
            }
          } else {
            // non-commutative binary operator
            res = foldOp(fn, args, makeNode, options);
          }
        } else {
          // non-associative binary operator
          args = node.args.map(function (arg) {
            return foldFraction(arg, options);
          });
          res = foldOp(fn, args, makeNode, options);
        }

        return res;

      case 'ParenthesisNode':
        // remove the uneccessary parenthesis
        return foldFraction(node.content, options);

      case 'AccessorNode':
      /* falls through */

      case 'ArrayNode':
      /* falls through */

      case 'AssignmentNode':
      /* falls through */

      case 'BlockNode':
      /* falls through */

      case 'FunctionAssignmentNode':
      /* falls through */

      case 'IndexNode':
      /* falls through */

      case 'ObjectNode':
      /* falls through */

      case 'RangeNode':
      /* falls through */

      case 'UpdateNode':
      /* falls through */

      case 'ConditionalNode':
      /* falls through */

      default:
        throw new Error("Unimplemented node type in simplifyConstant: ".concat(node.type));
    }
  }

  return simplifyConstant;
}

exports.math = true;
exports.name = 'simplifyConstant';
exports.path = 'algebra.simplify';
exports.factory = factory;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed, math) {
  var FunctionNode = math.expression.node.FunctionNode;
  var OperatorNode = math.expression.node.OperatorNode;
  var SymbolNode = math.expression.node.SymbolNode; // TODO commutative/associative properties rely on the arguments
  // e.g. multiply is not commutative for matrices
  // The properties should be calculated from an argument to simplify, or possibly something in math.config
  // the other option is for typed() to specify a return type so that we can evaluate the type of arguments

  var commutative = {
    'add': true,
    'multiply': true
  };
  var associative = {
    'add': true,
    'multiply': true
  };

  function isCommutative(node, context) {
    if (!type.isOperatorNode(node)) {
      return true;
    }

    var name = node.fn.toString();

    if (context && context.hasOwnProperty(name) && context[name].hasOwnProperty('commutative')) {
      return context[name].commutative;
    }

    return commutative[name] || false;
  }

  function isAssociative(node, context) {
    if (!type.isOperatorNode(node)) {
      return false;
    }

    var name = node.fn.toString();

    if (context && context.hasOwnProperty(name) && context[name].hasOwnProperty('associative')) {
      return context[name].associative;
    }

    return associative[name] || false;
  }
  /**
   * Flatten all associative operators in an expression tree.
   * Assumes parentheses have already been removed.
   */


  function flatten(node) {
    if (!node.args || node.args.length === 0) {
      return node;
    }

    node.args = allChildren(node);

    for (var i = 0; i < node.args.length; i++) {
      flatten(node.args[i]);
    }
  }
  /**
   * Get the children of a node as if it has been flattened.
   * TODO implement for FunctionNodes
   */


  function allChildren(node) {
    var op;
    var children = [];

    var findChildren = function findChildren(node) {
      for (var i = 0; i < node.args.length; i++) {
        var child = node.args[i];

        if (type.isOperatorNode(child) && op === child.op) {
          findChildren(child);
        } else {
          children.push(child);
        }
      }
    };

    if (isAssociative(node)) {
      op = node.op;
      findChildren(node);
      return children;
    } else {
      return node.args;
    }
  }
  /**
   *  Unflatten all flattened operators to a right-heavy binary tree.
   */


  function unflattenr(node) {
    if (!node.args || node.args.length === 0) {
      return;
    }

    var makeNode = createMakeNodeFunction(node);
    var l = node.args.length;

    for (var i = 0; i < l; i++) {
      unflattenr(node.args[i]);
    }

    if (l > 2 && isAssociative(node)) {
      var curnode = node.args.pop();

      while (node.args.length > 0) {
        curnode = makeNode([node.args.pop(), curnode]);
      }

      node.args = curnode.args;
    }
  }
  /**
   *  Unflatten all flattened operators to a left-heavy binary tree.
   */


  function unflattenl(node) {
    if (!node.args || node.args.length === 0) {
      return;
    }

    var makeNode = createMakeNodeFunction(node);
    var l = node.args.length;

    for (var i = 0; i < l; i++) {
      unflattenl(node.args[i]);
    }

    if (l > 2 && isAssociative(node)) {
      var curnode = node.args.shift();

      while (node.args.length > 0) {
        curnode = makeNode([curnode, node.args.shift()]);
      }

      node.args = curnode.args;
    }
  }

  function createMakeNodeFunction(node) {
    if (type.isOperatorNode(node)) {
      return function (args) {
        try {
          return new OperatorNode(node.op, node.fn, args, node.implicit);
        } catch (err) {
          console.error(err);
          return [];
        }
      };
    } else {
      return function (args) {
        return new FunctionNode(new SymbolNode(node.name), args);
      };
    }
  }

  return {
    createMakeNodeFunction: createMakeNodeFunction,
    isCommutative: isCommutative,
    isAssociative: isAssociative,
    flatten: flatten,
    allChildren: allChildren,
    unflattenr: unflattenr,
    unflattenl: unflattenl
  };
}

exports.factory = factory;
exports.math = true;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed, math) {
  var equal = load(__webpack_require__(51));
  var isZero = load(__webpack_require__(60));
  var add = load(__webpack_require__(14));
  var subtract = load(__webpack_require__(15));
  var multiply = load(__webpack_require__(10));
  var divide = load(__webpack_require__(45));
  var pow = load(__webpack_require__(42));
  var ConstantNode = math.expression.node.ConstantNode;
  var OperatorNode = math.expression.node.OperatorNode;
  var FunctionNode = math.expression.node.FunctionNode;
  var ParenthesisNode = math.expression.node.ParenthesisNode;
  var node0 = new ConstantNode(0);
  var node1 = new ConstantNode(1);
  /**
   * simplifyCore() performs single pass simplification suitable for
   * applications requiring ultimate performance. In contrast, simplify()
   * extends simplifyCore() with additional passes to provide deeper
   * simplification.
   *
   * Syntax:
   *
   *     simplify.simplifyCore(expr)
   *
   * Examples:
   *
   *     const f = math.parse('2 * 1 * x ^ (2 - 1)')
   *     math.simplify.simpifyCore(f)                          // Node {2 * x}
   *     math.simplify('2 * 1 * x ^ (2 - 1)', [math.simplify.simpifyCore]) // Node {2 * x}
   *
   * See also:
   *
   *     derivative
   *
   * @param {Node} node
   *     The expression to be simplified
   */

  function simplifyCore(node) {
    if (type.isOperatorNode(node) && node.isUnary()) {
      var a0 = simplifyCore(node.args[0]);

      if (node.op === '+') {
        // unary plus
        return a0;
      }

      if (node.op === '-') {
        // unary minus
        if (type.isOperatorNode(a0)) {
          if (a0.isUnary() && a0.op === '-') {
            return a0.args[0];
          } else if (a0.isBinary() && a0.fn === 'subtract') {
            return new OperatorNode('-', 'subtract', [a0.args[1], a0.args[0]]);
          }
        }

        return new OperatorNode(node.op, node.fn, [a0]);
      }
    } else if (type.isOperatorNode(node) && node.isBinary()) {
      var _a = simplifyCore(node.args[0]);

      var a1 = simplifyCore(node.args[1]);

      if (node.op === '+') {
        if (type.isConstantNode(_a)) {
          if (isZero(_a.value)) {
            return a1;
          } else if (type.isConstantNode(a1)) {
            return new ConstantNode(add(_a.value, a1.value));
          }
        }

        if (type.isConstantNode(a1) && isZero(a1.value)) {
          return _a;
        }

        if (type.isOperatorNode(a1) && a1.isUnary() && a1.op === '-') {
          return new OperatorNode('-', 'subtract', [_a, a1.args[0]]);
        }

        return new OperatorNode(node.op, node.fn, a1 ? [_a, a1] : [_a]);
      } else if (node.op === '-') {
        if (type.isConstantNode(_a) && a1) {
          if (type.isConstantNode(a1)) {
            return new ConstantNode(subtract(_a.value, a1.value));
          } else if (isZero(_a.value)) {
            return new OperatorNode('-', 'unaryMinus', [a1]);
          }
        } // if (node.fn === "subtract" && node.args.length === 2) {


        if (node.fn === 'subtract') {
          if (type.isConstantNode(a1) && isZero(a1.value)) {
            return _a;
          }

          if (type.isOperatorNode(a1) && a1.isUnary() && a1.op === '-') {
            return simplifyCore(new OperatorNode('+', 'add', [_a, a1.args[0]]));
          }

          return new OperatorNode(node.op, node.fn, [_a, a1]);
        }
      } else if (node.op === '*') {
        if (type.isConstantNode(_a)) {
          if (isZero(_a.value)) {
            return node0;
          } else if (equal(_a.value, 1)) {
            return a1;
          } else if (type.isConstantNode(a1)) {
            return new ConstantNode(multiply(_a.value, a1.value));
          }
        }

        if (type.isConstantNode(a1)) {
          if (isZero(a1.value)) {
            return node0;
          } else if (equal(a1.value, 1)) {
            return _a;
          } else if (type.isOperatorNode(_a) && _a.isBinary() && _a.op === node.op) {
            var a00 = _a.args[0];

            if (type.isConstantNode(a00)) {
              var a00a1 = new ConstantNode(multiply(a00.value, a1.value));
              return new OperatorNode(node.op, node.fn, [a00a1, _a.args[1]], node.implicit); // constants on left
            }
          }

          return new OperatorNode(node.op, node.fn, [a1, _a], node.implicit); // constants on left
        }

        return new OperatorNode(node.op, node.fn, [_a, a1], node.implicit);
      } else if (node.op === '/') {
        if (type.isConstantNode(_a)) {
          if (isZero(_a.value)) {
            return node0;
          } else if (type.isConstantNode(a1) && (equal(a1.value, 1) || equal(a1.value, 2) || equal(a1.value, 4))) {
            return new ConstantNode(divide(_a.value, a1.value));
          }
        }

        return new OperatorNode(node.op, node.fn, [_a, a1]);
      } else if (node.op === '^') {
        if (type.isConstantNode(a1)) {
          if (isZero(a1.value)) {
            return node1;
          } else if (equal(a1.value, 1)) {
            return _a;
          } else {
            if (type.isConstantNode(_a)) {
              // fold constant
              return new ConstantNode(pow(_a.value, a1.value));
            } else if (type.isOperatorNode(_a) && _a.isBinary() && _a.op === '^') {
              var a01 = _a.args[1];

              if (type.isConstantNode(a01)) {
                return new OperatorNode(node.op, node.fn, [_a.args[0], new ConstantNode(multiply(a01.value, a1.value))]);
              }
            }
          }
        }

        return new OperatorNode(node.op, node.fn, [_a, a1]);
      }
    } else if (type.isParenthesisNode(node)) {
      var c = simplifyCore(node.content);

      if (type.isParenthesisNode(c) || type.isSymbolNode(c) || type.isConstantNode(c)) {
        return c;
      }

      return new ParenthesisNode(c);
    } else if (type.isFunctionNode(node)) {
      var args = node.args.map(simplifyCore).map(function (arg) {
        return type.isParenthesisNode(arg) ? arg.content : arg;
      });
      return new FunctionNode(simplifyCore(node.fn), args);
    } else {// cannot simplify
    }

    return node;
  }

  return simplifyCore;
}

exports.math = true;
exports.name = 'simplifyCore';
exports.path = 'algebra.simplify';
exports.factory = factory;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(31);

var object = util.object;
var string = util.string;

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var subtract = load(__webpack_require__(15));
  var multiply = load(__webpack_require__(10));
  var unaryMinus = load(__webpack_require__(39));
  var lup = load(__webpack_require__(87));
  /**
   * Calculate the determinant of a matrix.
   *
   * Syntax:
   *
   *    math.det(x)
   *
   * Examples:
   *
   *    math.det([[1, 2], [3, 4]]) // returns -2
   *
   *    const A = [
   *      [-2, 2, 3],
   *      [-1, 1, 3],
   *      [2, 0, -1]
   *    ]
   *    math.det(A) // returns 6
   *
   * See also:
   *
   *    inv
   *
   * @param {Array | Matrix} x  A matrix
   * @return {number} The determinant of `x`
   */

  var det = typed('det', {
    'any': function any(x) {
      return object.clone(x);
    },
    'Array | Matrix': function det(x) {
      var size;

      if (type.isMatrix(x)) {
        size = x.size();
      } else if (Array.isArray(x)) {
        x = matrix(x);
        size = x.size();
      } else {
        // a scalar
        size = [];
      }

      switch (size.length) {
        case 0:
          // scalar
          return object.clone(x);

        case 1:
          // vector
          if (size[0] === 1) {
            return object.clone(x.valueOf()[0]);
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + string.format(size) + ')');
          }

        case 2:
          // two dimensional array
          var rows = size[0];
          var cols = size[1];

          if (rows === cols) {
            return _det(x.clone().valueOf(), rows, cols);
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + string.format(size) + ')');
          }

        default:
          // multi dimensional array
          throw new RangeError('Matrix must be two dimensional ' + '(size: ' + string.format(size) + ')');
      }
    }
  });
  det.toTex = {
    1: "\\det\\left(${args[0]}\\right)"
  };
  return det;
  /**
   * Calculate the determinant of a matrix
   * @param {Array[]} matrix  A square, two dimensional matrix
   * @param {number} rows     Number of rows of the matrix (zero-based)
   * @param {number} cols     Number of columns of the matrix (zero-based)
   * @returns {number} det
   * @private
   */

  function _det(matrix, rows, cols) {
    if (rows === 1) {
      // this is a 1 x 1 matrix
      return object.clone(matrix[0][0]);
    } else if (rows === 2) {
      // this is a 2 x 2 matrix
      // the determinant of [a11,a12;a21,a22] is det = a11*a22-a21*a12
      return subtract(multiply(matrix[0][0], matrix[1][1]), multiply(matrix[1][0], matrix[0][1]));
    } else {
      // Compute the LU decomposition
      var decomp = lup(matrix); // The determinant is the product of the diagonal entries of U (and those of L, but they are all 1)

      var _det2 = decomp.U[0][0];

      for (var _i = 1; _i < rows; _i++) {
        _det2 = multiply(_det2, decomp.U[_i][_i]);
      } // The determinant will be multiplied by 1 or -1 depending on the parity of the permutation matrix.
      // This can be determined by counting the cycles. This is roughly a linear time algorithm.


      var evenCycles = 0;
      var i = 0;
      var visited = [];

      while (true) {
        while (visited[i]) {
          i++;
        }

        if (i >= rows) break;
        var j = i;
        var cycleLen = 0;

        while (!visited[decomp.p[j]]) {
          visited[decomp.p[j]] = true;
          j = decomp.p[j];
          cycleLen++;
        }

        if (cycleLen % 2 === 0) {
          evenCycles++;
        }
      }

      return evenCycles % 2 === 0 ? _det2 : unaryMinus(_det2);
    }
  }
}

exports.name = 'det';
exports.factory = factory;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var parse = load(__webpack_require__(44));
  /**
   * Parse an expression. Returns a node tree, which can be evaluated by
   * invoking node.eval().
   *
   * Note the evaluating arbitrary expressions may involve security risks,
   * see [https://mathjs.org/docs/expressions/security.html](https://mathjs.org/docs/expressions/security.html) for more information.
   *
   * Syntax:
   *
   *     math.parse(expr)
   *     math.parse(expr, options)
   *     math.parse([expr1, expr2, expr3, ...])
   *     math.parse([expr1, expr2, expr3, ...], options)
   *
   * Example:
   *
   *     const node1 = math.parse('sqrt(3^2 + 4^2)')
   *     node1.compile().eval() // 5
   *
   *     let scope = {a:3, b:4}
   *     const node2 = math.parse('a * b') // 12
   *     const code2 = node2.compile()
   *     code2.eval(scope) // 12
   *     scope.a = 5
   *     code2.eval(scope) // 20
   *
   *     const nodes = math.parse(['a = 3', 'b = 4', 'a * b'])
   *     nodes[2].compile().eval() // 12
   *
   * See also:
   *
   *     eval, compile
   *
   * @param {string | string[] | Matrix} expr          Expression to be parsed
   * @param {{nodes: Object<string, Node>}} [options]  Available options:
   *                                                   - `nodes` a set of custom nodes
   * @return {Node | Node[]} node
   * @throws {Error}
   */

  return typed('parse', {
    'string | Array | Matrix': parse,
    'string | Array | Matrix, Object': parse
  });
}

exports.name = 'parse';
exports.factory = factory;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm07 = load(__webpack_require__(29));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));

  var latex = __webpack_require__(4);
  /**
   * Test whether two values are unequal.
   *
   * The function tests whether the relative difference between x and y is
   * larger than the configured epsilon. The function cannot be used to compare
   * values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * In case of complex numbers, x.re must unequal y.re, or x.im must unequal y.im.
   * Strings are compared by their numerical value.
   *
   * Values `null` and `undefined` are compared strictly, thus `null` is unequal
   * with everything except `null`, and `undefined` is unequal with everything
   * except `undefined`.
   *
   * Syntax:
   *
   *    math.unequal(x, y)
   *
   * Examples:
   *
   *    math.unequal(2 + 2, 3)       // returns true
   *    math.unequal(2 + 2, 4)       // returns false
   *
   *    const a = math.unit('50 cm')
   *    const b = math.unit('5 m')
   *    math.unequal(a, b)           // returns false
   *
   *    const c = [2, 5, 1]
   *    const d = [2, 7, 1]
   *
   *    math.unequal(c, d)           // returns [false, true, false]
   *    math.deepEqual(c, d)         // returns false
   *
   *    math.unequal(0, null)        // returns true
   * See also:
   *
   *    equal, deepEqual, smaller, smallerEq, larger, largerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit | string | Array | Matrix | undefined} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit | string | Array | Matrix | undefined} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the compared values are unequal, else returns false
   */


  var unequal = typed('unequal', {
    'any, any': function anyAny(x, y) {
      // strict equality for null and undefined?
      if (x === null) {
        return y !== null;
      }

      if (y === null) {
        return x !== null;
      }

      if (x === undefined) {
        return y !== undefined;
      }

      if (y === undefined) {
        return x !== undefined;
      }

      return _unequal(x, y);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, _unequal);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, _unequal, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, _unequal, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, _unequal);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return unequal(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return unequal(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return unequal(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, _unequal, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, _unequal, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, _unequal, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, _unequal, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, _unequal, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, _unequal, true).valueOf();
    }
  });

  var _unequal = typed('_unequal', {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x !== y;
    },
    'number, number': function numberNumber(x, y) {
      return !nearlyEqual(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return !bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return !x.equals(y);
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return !x.equals(y);
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }

      return unequal(x.value, y.value);
    }
  });

  unequal.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['unequal'], "${args[1]}\\right)")
  };
  return unequal;
}

exports.name = 'unequal';
exports.factory = factory;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var number = __webpack_require__(3);

var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Compute the sign of a value. The sign of a value x is:
   *
   * -  1 when x > 0
   * - -1 when x < 0
   * -  0 when x == 0
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.sign(x)
   *
   * Examples:
   *
   *    math.sign(3.5)               // returns 1
   *    math.sign(-4.2)              // returns -1
   *    math.sign(0)                 // returns 0
   *
   *    math.sign([3, 5, -2, 0, 2])  // returns [1, 1, -1, 0, 1]
   *
   * See also:
   *
   *    abs
   *
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix | Unit} x
   *            The number for which to determine the sign
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix | Unit}e
   *            The sign of `x`
   */
  var sign = typed('sign', {
    'number': number.sign,
    'Complex': function Complex(x) {
      return x.sign();
    },
    'BigNumber': function BigNumber(x) {
      return new type.BigNumber(x.cmp(0));
    },
    'Fraction': function Fraction(x) {
      return new type.Fraction(x.s, 1);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since sign(0) = 0
      return deepMap(x, sign, true);
    },
    'Unit': function Unit(x) {
      return sign(x.value);
    }
  });
  sign.toTex = {
    1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
  };
  return sign;
}

exports.name = 'sign';
exports.factory = factory;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(31);

var number = util.number;
var isInteger = number.isInteger;

function factory(type, config, load, typed) {
  var csSqr = load(__webpack_require__(209));
  var csLu = load(__webpack_require__(217));
  /**
   * Calculate the Sparse Matrix LU decomposition with full pivoting. Sparse Matrix `A` is decomposed in two matrices (`L`, `U`) and two permutation vectors (`pinv`, `q`) where
   *
   * `P * A * Q = L * U`
   *
   * Syntax:
   *
   *    math.slu(A, order, threshold)
   *
   * Examples:
   *
   *    const A = math.sparse([[4,3], [6, 3]])
   *    math.slu(A, 1, 0.001)
   *    // returns:
   *    // {
   *    //   L: [[1, 0], [1.5, 1]]
   *    //   U: [[4, 3], [0, -1.5]]
   *    //   p: [0, 1]
   *    //   q: [0, 1]
   *    // }
   *
   * See also:
   *
   *    lup, lsolve, usolve, lusolve
   *
   * @param {SparseMatrix} A              A two dimensional sparse matrix for which to get the LU decomposition.
   * @param {Number}       order          The Symbolic Ordering and Analysis order:
   *                                       0 - Natural ordering, no permutation vector q is returned
   *                                       1 - Matrix must be square, symbolic ordering and analisis is performed on M = A + A'
   *                                       2 - Symbolic ordering and analisis is performed on M = A' * A. Dense columns from A' are dropped, A recreated from A'.
   *                                           This is appropriatefor LU factorization of unsymmetric matrices.
   *                                       3 - Symbolic ordering and analisis is performed on M = A' * A. This is best used for LU factorization is matrix M has no dense rows.
   *                                           A dense row is a row with more than 10*sqr(columns) entries.
   * @param {Number}       threshold       Partial pivoting threshold (1 for partial pivoting)
   *
   * @return {Object} The lower triangular matrix, the upper triangular matrix and the permutation vectors.
   */

  var slu = typed('slu', {
    'SparseMatrix, number, number': function SparseMatrixNumberNumber(a, order, threshold) {
      // verify order
      if (!isInteger(order) || order < 0 || order > 3) {
        throw new Error('Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]');
      } // verify threshold


      if (threshold < 0 || threshold > 1) {
        throw new Error('Partial pivoting threshold must be a number from 0 to 1');
      } // perform symbolic ordering and analysis


      var s = csSqr(order, a, false); // perform lu decomposition

      var f = csLu(a, s, threshold); // return decomposition

      return {
        L: f.L,
        U: f.U,
        p: f.pinv,
        q: s.q,
        toString: function toString() {
          return 'L: ' + this.L.toString() + '\nU: ' + this.U.toString() + '\np: ' + this.p.toString() + (this.q ? '\nq: ' + this.q.toString() : '') + '\n';
        }
      };
    }
  });
  return slu;
}

exports.name = 'slu';
exports.factory = factory;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory() {
  /**
   * Depth-first search and postorder of a tree rooted at node j
   *
   * @param {Number}  j               The tree node
   * @param {Number}  k
   * @param {Array}   w               The workspace array
   * @param {Number}  head            The index offset within the workspace for the head array
   * @param {Number}  next            The index offset within the workspace for the next array
   * @param {Array}   post            The post ordering array
   * @param {Number}  stack           The index offset within the workspace for the stack array
   *
   * Reference: http://faculty.cse.tamu.edu/davis/publications.html
   */
  var csTdfs = function csTdfs(j, k, w, head, next, post, stack) {
    // variables
    var top = 0; // place j on the stack

    w[stack] = j; // while (stack is not empty)

    while (top >= 0) {
      // p = top of stack
      var p = w[stack + top]; // i = youngest child of p

      var i = w[head + p];

      if (i === -1) {
        // p has no unordered children left
        top--; // node p is the kth postordered node

        post[k++] = p;
      } else {
        // remove i from children of p
        w[head + p] = w[next + i]; // increment top

        ++top; // start dfs on child node i

        w[stack + top] = i;
      }
    }

    return k;
  };

  return csTdfs;
}

exports.name = 'csTdfs';
exports.path = 'algebra.sparse';
exports.factory = factory;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory() {
  /**
   * Checks if the node at w[j] is marked
   *
   * @param {Array}   w               The array
   * @param {Number}  j               The array index
   *
   * Reference: http://faculty.cse.tamu.edu/davis/publications.html
   */
  var csMarked = function csMarked(w, j) {
    // check node is marked
    return w[j] < 0;
  };

  return csMarked;
}

exports.name = 'csMarked';
exports.path = 'algebra.sparse';
exports.factory = factory;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load) {
  var csFlip = load(__webpack_require__(88));
  /**
   * Marks the node at w[j]
   *
   * @param {Array}   w               The array
   * @param {Number}  j               The array index
   *
   * Reference: http://faculty.cse.tamu.edu/davis/publications.html
   */

  var csMark = function csMark(w, j) {
    // mark w[j]
    w[j] = csFlip(w[j]);
  };

  return csMark;
}

exports.name = 'csMark';
exports.path = 'algebra.sparse';
exports.factory = factory;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var divideScalar = load(__webpack_require__(12));
  var multiplyScalar = load(__webpack_require__(21));
  var subtract = load(__webpack_require__(15));
  var equalScalar = load(__webpack_require__(11));
  var solveValidation = load(__webpack_require__(90));
  var DenseMatrix = type.DenseMatrix;
  /**
   * Solves the linear equation system by forwards substitution. Matrix must be a lower triangular matrix.
   *
   * `L * x = b`
   *
   * Syntax:
   *
   *    math.lsolve(L, b)
   *
   * Examples:
   *
   *    const a = [[-2, 3], [2, 1]]
   *    const b = [11, 9]
   *    const x = lsolve(a, b)  // [[-5.5], [20]]
   *
   * See also:
   *
   *    lup, slu, usolve, lusolve
   *
   * @param {Matrix, Array} L       A N x N matrix or array (L)
   * @param {Matrix, Array} b       A column vector with the b values
   *
   * @return {DenseMatrix | Array}  A column vector with the linear system solution (x)
   */

  var lsolve = typed('lsolve', {
    'SparseMatrix, Array | Matrix': function SparseMatrixArrayMatrix(m, b) {
      // process matrix
      return _sparseForwardSubstitution(m, b);
    },
    'DenseMatrix, Array | Matrix': function DenseMatrixArrayMatrix(m, b) {
      // process matrix
      return _denseForwardSubstitution(m, b);
    },
    'Array, Array | Matrix': function ArrayArrayMatrix(a, b) {
      // create dense matrix from array
      var m = matrix(a); // use matrix implementation

      var r = _denseForwardSubstitution(m, b); // result


      return r.valueOf();
    }
  });

  function _denseForwardSubstitution(m, b) {
    // validate matrix and vector, return copy of column vector b
    b = solveValidation(m, b, true); // column vector data

    var bdata = b._data; // rows & columns

    var rows = m._size[0];
    var columns = m._size[1]; // result

    var x = []; // data

    var data = m._data; // forward solve m * x = b, loop columns

    for (var j = 0; j < columns; j++) {
      // b[j]
      var bj = bdata[j][0] || 0; // x[j]

      var xj = void 0; // forward substitution (outer product) avoids inner looping when bj === 0

      if (!equalScalar(bj, 0)) {
        // value @ [j, j]
        var vjj = data[j][j]; // check vjj

        if (equalScalar(vjj, 0)) {
          // system cannot be solved
          throw new Error('Linear system cannot be solved since matrix is singular');
        } // calculate xj


        xj = divideScalar(bj, vjj); // loop rows

        for (var i = j + 1; i < rows; i++) {
          // update copy of b
          bdata[i] = [subtract(bdata[i][0] || 0, multiplyScalar(xj, data[i][j]))];
        }
      } else {
        // zero @ j
        xj = 0;
      } // update x


      x[j] = [xj];
    } // return vector


    return new DenseMatrix({
      data: x,
      size: [rows, 1]
    });
  }

  function _sparseForwardSubstitution(m, b) {
    // validate matrix and vector, return copy of column vector b
    b = solveValidation(m, b, true); // column vector data

    var bdata = b._data; // rows & columns

    var rows = m._size[0];
    var columns = m._size[1]; // matrix arrays

    var values = m._values;
    var index = m._index;
    var ptr = m._ptr; // vars

    var i, k; // result

    var x = []; // forward solve m * x = b, loop columns

    for (var j = 0; j < columns; j++) {
      // b[j]
      var bj = bdata[j][0] || 0; // forward substitution (outer product) avoids inner looping when bj === 0

      if (!equalScalar(bj, 0)) {
        // value @ [j, j]
        var vjj = 0; // lower triangular matrix values & index (column j)

        var jvalues = [];
        var jindex = []; // last index in column

        var l = ptr[j + 1]; // values in column, find value @ [j, j]

        for (k = ptr[j]; k < l; k++) {
          // row
          i = index[k]; // check row (rows are not sorted!)

          if (i === j) {
            // update vjj
            vjj = values[k];
          } else if (i > j) {
            // store lower triangular
            jvalues.push(values[k]);
            jindex.push(i);
          }
        } // at this point we must have a value @ [j, j]


        if (equalScalar(vjj, 0)) {
          // system cannot be solved, there is no value @ [j, j]
          throw new Error('Linear system cannot be solved since matrix is singular');
        } // calculate xj


        var xj = divideScalar(bj, vjj); // loop lower triangular

        for (k = 0, l = jindex.length; k < l; k++) {
          // row
          i = jindex[k]; // update copy of b

          bdata[i] = [subtract(bdata[i][0] || 0, multiplyScalar(xj, jvalues[k]))];
        } // update x


        x[j] = [xj];
      } else {
        // update x
        x[j] = [0];
      }
    } // return vector


    return new DenseMatrix({
      data: x,
      size: [rows, 1]
    });
  }

  return lsolve;
}

exports.name = 'lsolve';
exports.factory = factory;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var divideScalar = load(__webpack_require__(12));
  var multiplyScalar = load(__webpack_require__(21));
  var subtract = load(__webpack_require__(15));
  var equalScalar = load(__webpack_require__(11));
  var solveValidation = load(__webpack_require__(90));
  var DenseMatrix = type.DenseMatrix;
  /**
   * Solves the linear equation system by backward substitution. Matrix must be an upper triangular matrix.
   *
   * `U * x = b`
   *
   * Syntax:
   *
   *    math.usolve(U, b)
   *
   * Examples:
   *
   *    const a = [[-2, 3], [2, 1]]
   *    const b = [11, 9]
   *    const x = usolve(a, b)  // [[8], [9]]
   *
   * See also:
   *
   *    lup, slu, usolve, lusolve
   *
   * @param {Matrix, Array} U       A N x N matrix or array (U)
   * @param {Matrix, Array} b       A column vector with the b values
   *
   * @return {DenseMatrix | Array}  A column vector with the linear system solution (x)
   */

  var usolve = typed('usolve', {
    'SparseMatrix, Array | Matrix': function SparseMatrixArrayMatrix(m, b) {
      // process matrix
      return _sparseBackwardSubstitution(m, b);
    },
    'DenseMatrix, Array | Matrix': function DenseMatrixArrayMatrix(m, b) {
      // process matrix
      return _denseBackwardSubstitution(m, b);
    },
    'Array, Array | Matrix': function ArrayArrayMatrix(a, b) {
      // create dense matrix from array
      var m = matrix(a); // use matrix implementation

      var r = _denseBackwardSubstitution(m, b); // result


      return r.valueOf();
    }
  });

  function _denseBackwardSubstitution(m, b) {
    // validate matrix and vector, return copy of column vector b
    b = solveValidation(m, b, true); // column vector data

    var bdata = b._data; // rows & columns

    var rows = m._size[0];
    var columns = m._size[1]; // result

    var x = []; // arrays

    var data = m._data; // backward solve m * x = b, loop columns (backwards)

    for (var j = columns - 1; j >= 0; j--) {
      // b[j]
      var bj = bdata[j][0] || 0; // x[j]

      var xj = void 0; // backward substitution (outer product) avoids inner looping when bj === 0

      if (!equalScalar(bj, 0)) {
        // value @ [j, j]
        var vjj = data[j][j]; // check vjj

        if (equalScalar(vjj, 0)) {
          // system cannot be solved
          throw new Error('Linear system cannot be solved since matrix is singular');
        } // calculate xj


        xj = divideScalar(bj, vjj); // loop rows

        for (var i = j - 1; i >= 0; i--) {
          // update copy of b
          bdata[i] = [subtract(bdata[i][0] || 0, multiplyScalar(xj, data[i][j]))];
        }
      } else {
        // zero value @ j
        xj = 0;
      } // update x


      x[j] = [xj];
    } // return column vector


    return new DenseMatrix({
      data: x,
      size: [rows, 1]
    });
  }

  function _sparseBackwardSubstitution(m, b) {
    // validate matrix and vector, return copy of column vector b
    b = solveValidation(m, b, true); // column vector data

    var bdata = b._data; // rows & columns

    var rows = m._size[0];
    var columns = m._size[1]; // matrix arrays

    var values = m._values;
    var index = m._index;
    var ptr = m._ptr; // vars

    var i, k; // result

    var x = []; // backward solve m * x = b, loop columns (backwards)

    for (var j = columns - 1; j >= 0; j--) {
      // b[j]
      var bj = bdata[j][0] || 0; // backward substitution (outer product) avoids inner looping when bj === 0

      if (!equalScalar(bj, 0)) {
        // value @ [j, j]
        var vjj = 0; // upper triangular matrix values & index (column j)

        var jvalues = [];
        var jindex = []; // first & last indeces in column

        var f = ptr[j];
        var l = ptr[j + 1]; // values in column, find value @ [j, j], loop backwards

        for (k = l - 1; k >= f; k--) {
          // row
          i = index[k]; // check row

          if (i === j) {
            // update vjj
            vjj = values[k];
          } else if (i < j) {
            // store upper triangular
            jvalues.push(values[k]);
            jindex.push(i);
          }
        } // at this point we must have a value @ [j, j]


        if (equalScalar(vjj, 0)) {
          // system cannot be solved, there is no value @ [j, j]
          throw new Error('Linear system cannot be solved since matrix is singular');
        } // calculate xj


        var xj = divideScalar(bj, vjj); // loop upper triangular

        for (k = 0, l = jindex.length; k < l; k++) {
          // row
          i = jindex[k]; // update copy of b

          bdata[i] = [subtract(bdata[i][0], multiplyScalar(xj, jvalues[k]))];
        } // update x


        x[j] = [xj];
      } else {
        // update x
        x[j] = [0];
      }
    } // return vector


    return new DenseMatrix({
      data: x,
      size: [rows, 1]
    });
  }

  return usolve;
}

exports.name = 'usolve';
exports.factory = factory;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var divideScalar = load(__webpack_require__(12));

  var latex = __webpack_require__(4);

  var algorithm02 = load(__webpack_require__(27));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm07 = load(__webpack_require__(29));
  var algorithm11 = load(__webpack_require__(20));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));
  /**
   * Divide two matrices element wise. The function accepts both matrices and
   * scalar values.
   *
   * Syntax:
   *
   *    math.dotDivide(x, y)
   *
   * Examples:
   *
   *    math.dotDivide(2, 4)   // returns 0.5
   *
   *    a = [[9, 5], [6, 1]]
   *    b = [[3, 2], [5, 2]]
   *
   *    math.dotDivide(a, b)   // returns [[3, 2.5], [1.2, 0.5]]
   *    math.divide(a, b)      // returns [[1.75, 0.75], [-1.75, 2.25]]
   *
   * See also:
   *
   *    divide, multiply, dotMultiply
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x Numerator
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Denominator
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}                    Quotient, `x ./ y`
   */

  var dotDivide = typed('dotDivide', {
    'any, any': divideScalar,
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, divideScalar, false);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm02(y, x, divideScalar, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, divideScalar, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, divideScalar);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return dotDivide(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return dotDivide(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return dotDivide(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm11(x, y, divideScalar, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, divideScalar, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, divideScalar, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, divideScalar, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, divideScalar, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, divideScalar, true).valueOf();
    }
  });
  dotDivide.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['dotDivide'], "${args[1]}\\right)")
  };
  return dotDivide;
}

exports.name = 'dotDivide';
exports.factory = factory;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(8);

function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(11));
  var SparseMatrix = type.SparseMatrix;
  /**
   * Iterates over SparseMatrix A and invokes the callback function f(Aij, Bij).
   * Callback function invoked NZA times, number of nonzero elements in A.
   *
   *
   *          ┌  f(Aij, Bij)  ; A(i,j) !== 0
   * C(i,j) = ┤
   *          └  0            ; otherwise
   *
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */

  var algorithm09 = function algorithm09(a, b, callback) {
    // sparse matrix arrays
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype; // sparse matrix arrays

    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype; // validate dimensions

    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    } // check rows & columns


    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    } // rows & columns


    var rows = asize[0];
    var columns = asize[1]; // datatype

    var dt; // equal signature to use

    var eq = equalScalar; // zero value

    var zero = 0; // callback signature to use

    var cf = callback; // process data types

    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt; // find signature that matches (dt, dt)

      eq = typed.find(equalScalar, [dt, dt]); // convert 0 to the same datatype

      zero = typed.convert(0, dt); // callback

      cf = typed.find(callback, [dt, dt]);
    } // result arrays


    var cvalues = avalues && bvalues ? [] : undefined;
    var cindex = [];
    var cptr = []; // matrix

    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    }); // workspaces

    var x = cvalues ? [] : undefined; // marks indicating we have a value in x for a given column

    var w = []; // vars

    var i, j, k, k0, k1; // loop columns

    for (j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length; // column mark

      var mark = j + 1; // check we need to process values

      if (x) {
        // loop B(:,j)
        for (k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
          // row
          i = bindex[k]; // update workspace

          w[i] = mark;
          x[i] = bvalues[k];
        }
      } // loop A(:,j)


      for (k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = aindex[k]; // check we need to process values

        if (x) {
          // b value @ i,j
          var vb = w[i] === mark ? x[i] : zero; // invoke f

          var vc = cf(avalues[k], vb); // check zero value

          if (!eq(vc, zero)) {
            // push index
            cindex.push(i); // push value

            cvalues.push(vc);
          }
        } else {
          // push index
          cindex.push(i);
        }
      }
    } // update cptr


    cptr[columns] = cindex.length; // return sparse matrix

    return c;
  };

  return algorithm09;
}

exports.name = 'algorithm09';
exports.factory = factory;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var add = load(__webpack_require__(14));
  var subtract = load(__webpack_require__(15));
  var multiply = load(__webpack_require__(10));
  var divide = load(__webpack_require__(45));
  var pow = load(__webpack_require__(42));
  var factorial = load(__webpack_require__(75));
  var combinations = load(__webpack_require__(76));
  var isNegative = load(__webpack_require__(61));
  var isInteger = load(__webpack_require__(34));
  var larger = load(__webpack_require__(33));
  /**
   * The Stirling numbers of the second kind, counts the number of ways to partition
   * a set of n labelled objects into k nonempty unlabelled subsets.
   * stirlingS2 only takes integer arguments.
   * The following condition must be enforced: k <= n.
   *
   *  If n = k or k = 1, then s(n,k) = 1
   *
   * Syntax:
   *
   *   math.stirlingS2(n, k)
   *
   * Examples:
   *
   *    math.stirlingS2(5, 3) //returns 25
   *
   * See also:
   *
   *    bellNumbers
   *
   * @param {Number | BigNumber} n    Total number of objects in the set
   * @param {Number | BigNumber} k    Number of objects in the subset
   * @return {Number | BigNumber}     S(n,k)
   */

  var stirlingS2 = typed('stirlingS2', {
    'number | BigNumber, number | BigNumber': function numberBigNumberNumberBigNumber(n, k) {
      if (!isInteger(n) || isNegative(n) || !isInteger(k) || isNegative(k)) {
        throw new TypeError('Non-negative integer value expected in function stirlingS2');
      } else if (larger(k, n)) {
        throw new TypeError('k must be less than or equal to n in function stirlingS2');
      } // 1/k! Sum(i=0 -> k) [(-1)^(k-i)*C(k,j)* i^n]


      var kFactorial = factorial(k);
      var result = 0;

      for (var i = 0; i <= k; i++) {
        var negativeOne = pow(-1, subtract(k, i));
        var kChooseI = combinations(k, i);
        var iPower = pow(i, n);
        result = add(result, multiply(multiply(kChooseI, iPower), negativeOne));
      }

      return divide(result, kFactorial);
    }
  });
  stirlingS2.toTex = {
    2: "\\mathrm{S}\\left(${args}\\right)"
  };
  return stirlingS2;
}

exports.name = 'stirlingS2';
exports.factory = factory;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

var isInteger = __webpack_require__(3).isInteger;

function factory(type, config, load, typed) {
  var multiply = load(__webpack_require__(10));
  var pow = load(__webpack_require__(42));

  var product = __webpack_require__(95);
  /**
   * Compute the gamma function of a value using Lanczos approximation for
   * small values, and an extended Stirling approximation for large values.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.gamma(n)
   *
   * Examples:
   *
   *    math.gamma(5)       // returns 24
   *    math.gamma(-0.5)    // returns -3.5449077018110335
   *    math.gamma(math.i)  // returns -0.15494982830180973 - 0.49801566811835596i
   *
   * See also:
   *
   *    combinations, factorial, permutations
   *
   * @param {number | Array | Matrix} n   A real or complex number
   * @return {number | Array | Matrix}    The gamma of `n`
   */


  var gamma = typed('gamma', {
    'number': function number(n) {
      var t, x;

      if (isInteger(n)) {
        if (n <= 0) {
          return isFinite(n) ? Infinity : NaN;
        }

        if (n > 171) {
          return Infinity; // Will overflow
        }

        return product(1, n - 1);
      }

      if (n < 0.5) {
        return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
      }

      if (n >= 171.35) {
        return Infinity; // will overflow
      }

      if (n > 85.0) {
        // Extended Stirling Approx
        var twoN = n * n;
        var threeN = twoN * n;
        var fourN = threeN * n;
        var fiveN = fourN * n;
        return Math.sqrt(2 * Math.PI / n) * Math.pow(n / Math.E, n) * (1 + 1 / (12 * n) + 1 / (288 * twoN) - 139 / (51840 * threeN) - 571 / (2488320 * fourN) + 163879 / (209018880 * fiveN) + 5246819 / (75246796800 * fiveN * n));
      }

      --n;
      x = p[0];

      for (var i = 1; i < p.length; ++i) {
        x += p[i] / (n + i);
      }

      t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
    },
    'Complex': function Complex(n) {
      var t, x;

      if (n.im === 0) {
        return gamma(n.re);
      }

      n = new type.Complex(n.re - 1, n.im);
      x = new type.Complex(p[0], 0);

      for (var i = 1; i < p.length; ++i) {
        var real = n.re + i; // x += p[i]/(n+i)

        var den = real * real + n.im * n.im;

        if (den !== 0) {
          x.re += p[i] * real / den;
          x.im += -(p[i] * n.im) / den;
        } else {
          x.re = p[i] < 0 ? -Infinity : Infinity;
        }
      }

      t = new type.Complex(n.re + g + 0.5, n.im);
      var twoPiSqrt = Math.sqrt(2 * Math.PI);
      n.re += 0.5;
      var result = pow(t, n);

      if (result.im === 0) {
        // sqrt(2*PI)*result
        result.re *= twoPiSqrt;
      } else if (result.re === 0) {
        result.im *= twoPiSqrt;
      } else {
        result.re *= twoPiSqrt;
        result.im *= twoPiSqrt;
      }

      var r = Math.exp(-t.re); // exp(-t)

      t.re = r * Math.cos(-t.im);
      t.im = r * Math.sin(-t.im);
      return multiply(multiply(result, t), x);
    },
    'BigNumber': function BigNumber(n) {
      if (n.isInteger()) {
        return n.isNegative() || n.isZero() ? new type.BigNumber(Infinity) : bigFactorial(n.minus(1));
      }

      if (!n.isFinite()) {
        return new type.BigNumber(n.isNegative() ? NaN : Infinity);
      }

      throw new Error('Integer BigNumber expected');
    },
    'Array | Matrix': function ArrayMatrix(n) {
      return deepMap(n, gamma);
    }
  });
  /**
   * Calculate factorial for a BigNumber
   * @param {BigNumber} n
   * @returns {BigNumber} Returns the factorial of n
   */

  function bigFactorial(n) {
    if (n.isZero()) {
      return new type.BigNumber(1); // 0! is per definition 1
    }

    var precision = config.precision + (Math.log(n.toNumber()) | 0);
    var Big = type.BigNumber.clone({
      precision: precision
    });
    var res = new Big(n);
    var value = n.toNumber() - 1; // number

    while (value > 1) {
      res = res.times(value);
      value--;
    }

    return new type.BigNumber(res.toPrecision(type.BigNumber.precision));
  }

  gamma.toTex = {
    1: "\\Gamma\\left(${args[0]}\\right)"
  };
  return gamma;
} // TODO: comment on the variables g and p


var g = 4.7421875;
var p = [0.99999999999999709182, 57.156235665862923517, -59.597960355475491248, 14.136097974741747174, -0.49191381609762019978, 0.33994649984811888699e-4, 0.46523628927048575665e-4, -0.98374475304879564677e-4, 0.15808870322491248884e-3, -0.21026444172410488319e-3, 0.21743961811521264320e-3, -0.16431810653676389022e-3, 0.84418223983852743293e-4, -0.26190838401581408670e-4, 0.36899182659531622704e-5];
exports.name = 'gamma';
exports.factory = factory;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  var latex = __webpack_require__(4);
  /**
   * Logical `not`. Flips boolean value of a given parameter.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.not(x)
   *
   * Examples:
   *
   *    math.not(2)      // returns false
   *    math.not(0)      // returns true
   *    math.not(true)   // returns false
   *
   *    a = [2, -7, 0]
   *    math.not(a)      // returns [false, false, true]
   *
   * See also:
   *
   *    and, or, xor
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x First value to check
   * @return {boolean | Array | Matrix}
   *            Returns true when input is a zero or empty value.
   */


  var not = typed('not', {
    'number': function number(x) {
      return !x;
    },
    'Complex': function Complex(x) {
      return x.re === 0 && x.im === 0;
    },
    'BigNumber': function BigNumber(x) {
      return x.isZero() || x.isNaN();
    },
    'Unit': function Unit(x) {
      return x.value !== null ? not(x.value) : true;
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, not);
    }
  });
  not.toTex = {
    1: latex.operators['not'] + "\\left(${args[0]}\\right)"
  };
  return not;
}

exports.name = 'not';
exports.factory = factory;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(5).clone;

var validateIndex = __webpack_require__(2).validateIndex;

function factory(type, config, load, typed) {
  var MatrixIndex = load(__webpack_require__(24));
  var matrix = load(__webpack_require__(0));
  var range = load(__webpack_require__(77));
  /**
   * Return a column from a Matrix.
   *
   * Syntax:
   *
   *     math.column(value, index)
   *
   * Example:
   *
   *     // get a column
   *     const d = [[1, 2], [3, 4]]
   *     math.column(d, 1) // returns [2, 4]
   *
   * See also:
   *
   *     row
   *
   * @param {Array | Matrix } value   An array or matrix
   * @param {number} column           The index of the column
   * @return {Array | Matrix}         The retrieved column
   */

  var column = typed('column', {
    'Matrix, number': _column,
    'Array, number': function ArrayNumber(value, column) {
      return _column(matrix(clone(value)), column).valueOf();
    }
  });
  column.toTex = undefined; // use default template

  return column;
  /**
   * Retrieve a column of a matrix
   * @param {Matrix } value  A matrix
   * @param {number} column  The index of the column
   * @return {Matrix}        The retrieved column
   */

  function _column(value, column) {
    // check dimensions
    if (value.size().length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    }

    validateIndex(column, value.size()[1]);
    var rowRange = range(0, value.size()[0]);
    var index = new MatrixIndex(rowRange, column);
    return value.subset(index);
  }
}

exports.name = 'column';
exports.factory = factory;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(3).nearlyEqual;

var bigNearlyEqual = __webpack_require__(32);

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));
  var algorithm03 = load(__webpack_require__(18));
  var algorithm07 = load(__webpack_require__(29));
  var algorithm12 = load(__webpack_require__(19));
  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));

  var latex = __webpack_require__(4);
  /**
   * Test whether value x is smaller or equal to y.
   *
   * The function returns true when x is smaller than y or the relative
   * difference between x and y is smaller than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.smallerEq(x, y)
   *
   * Examples:
   *
   *    math.smaller(1 + 2, 3)        // returns false
   *    math.smallerEq(1 + 2, 3)      // returns true
   *
   * See also:
   *
   *    equal, unequal, smaller, larger, largerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is smaller than y, else returns false
   */


  var smallerEq = typed('smallerEq', {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x <= y;
    },
    'number, number': function numberNumber(x, y) {
      return x <= y || nearlyEqual(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.lte(y) || bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.compare(y) !== 1;
    },
    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    },
    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }

      return smallerEq(x.value, y.value);
    },
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, smallerEq);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, smallerEq, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, smallerEq, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, smallerEq);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return smallerEq(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return smallerEq(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return smallerEq(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, smallerEq, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, smallerEq, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, smallerEq, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, smallerEq, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, smallerEq, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, smallerEq, true).valueOf();
    }
  });
  smallerEq.toTex = {
    2: "\\left(${args[0]}".concat(latex.operators['smallerEq'], "${args[1]}\\right)")
  };
  return smallerEq;
}

exports.name = 'smallerEq';
exports.factory = factory;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var maxArgumentCount = __webpack_require__(36).maxArgumentCount;

function factory(type, config, load, typed) {
  /**
   * Create a new matrix or array with the results of the callback function executed on
   * each entry of the matrix/array.
   *
   * Syntax:
   *
   *    math.map(x, callback)
   *
   * Examples:
   *
   *    math.map([1, 2, 3], function(value) {
   *      return value * value
   *    })  // returns [1, 4, 9]
   *
   * See also:
   *
   *    filter, forEach, sort
   *
   * @param {Matrix | Array} x    The matrix to iterate on.
   * @param {Function} callback   The callback method is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the matrix being traversed.
   * @return {Matrix | array}     Transformed map of x
   */
  var map = typed('map', {
    'Array, function': _map,
    'Matrix, function': function MatrixFunction(x, callback) {
      return x.map(callback);
    }
  });
  map.toTex = undefined; // use default template

  return map;
}
/**
 * Map for a multi dimensional array
 * @param {Array} array
 * @param {Function} callback
 * @return {Array}
 * @private
 */


function _map(array, callback) {
  // figure out what number of arguments the callback function expects
  var args = maxArgumentCount(callback);

  var recurse = function recurse(value, index) {
    if (Array.isArray(value)) {
      return value.map(function (child, i) {
        // we create a copy of the index array and append the new index value
        return recurse(child, index.concat(i));
      });
    } else {
      // invoke the callback function with the right number of arguments
      if (args === 1) {
        return callback(value);
      } else if (args === 2) {
        return callback(value, index);
      } else {
        // 3 or -1
        return callback(value, index, array);
      }
    }
  };

  return recurse(array, []);
}

exports.name = 'map';
exports.factory = factory;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(5).clone;

var validateIndex = __webpack_require__(2).validateIndex;

function factory(type, config, load, typed) {
  var MatrixIndex = load(__webpack_require__(24));
  var matrix = load(__webpack_require__(0));
  var range = load(__webpack_require__(77));
  /**
   * Return a row from a Matrix.
   *
   * Syntax:
   *
   *     math.row(value, index)
   *
   * Example:
   *
   *     // get a row
   *     const d = [[1, 2], [3, 4]]
   *     math.row(d, 1) // returns [3, 4]
   *
   * See also:
   *
   *     column
   *
   * @param {Array | Matrix } value   An array or matrix
   * @param {number} row              The index of the row
   * @return {Array | Matrix}         The retrieved row
   */

  var row = typed('row', {
    'Matrix, number': _row,
    'Array, number': function ArrayNumber(value, row) {
      return _row(matrix(clone(value)), row).valueOf();
    }
  });
  row.toTex = undefined; // use default template

  return row;
  /**
   * Retrieve a row of a matrix
   * @param {Matrix } value  A matrix
   * @param {number} row     The index of the row
   * @return {Matrix}        The retrieved row
   */

  function _row(value, row) {
    // check dimensions
    if (value.size().length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    }

    validateIndex(row, value.size()[0]);
    var columnRange = range(0, value.size()[1]);
    var index = new MatrixIndex(row, columnRange);
    return value.subset(index);
  }
}

exports.name = 'row';
exports.factory = factory;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(0));

  var _typeof = load(__webpack_require__(26));

  var algorithm13 = load(__webpack_require__(7));
  var algorithm14 = load(__webpack_require__(6));
  /**
   * Compare two strings lexically. Comparison is case sensitive.
   * Returns 1 when x > y, -1 when x < y, and 0 when x == y.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.compareText(x, y)
   *
   * Examples:
   *
   *    math.compareText('B', 'A')     // returns 1
   *    math.compareText('2', '10')    // returns 1
   *    math.compare('2', '10')        // returns -1
   *    math.compareNatural('2', '10') // returns -1
   *
   *    math.compareText('B', ['A', 'B', 'C']) // returns [1, 0, -1]
   *
   * See also:
   *
   *    equal, equalText, compare, compareNatural
   *
   * @param  {string | Array | DenseMatrix} x First string to compare
   * @param  {string | Array | DenseMatrix} y Second string to compare
   * @return {number | Array | DenseMatrix} Returns the result of the comparison:
   *                                        1 when x > y, -1 when x < y, and 0 when x == y.
   */

  var compareText = typed('compareText', {
    'any, any': _compareText,
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, _compareText);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return compareText(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return compareText(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return compareText(x, matrix(y));
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, _compareText, false);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, _compareText, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, _compareText, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, _compareText, true).valueOf();
    }
  });
  /**
   * Compare two strings
   * @param {string} x
   * @param {string} y
   * @returns {number}
   * @private
   */

  function _compareText(x, y) {
    // we don't want to convert numbers to string, only accept string input
    if (!type.isString(x)) {
      throw new TypeError('Unexpected type of argument in function compareText ' + '(expected: string or Array or Matrix, actual: ' + _typeof(x) + ', index: 0)');
    }

    if (!type.isString(y)) {
      throw new TypeError('Unexpected type of argument in function compareText ' + '(expected: string or Array or Matrix, actual: ' + _typeof(y) + ', index: 1)');
    }

    return x === y ? 0 : x > y ? 1 : -1;
  }

  compareText.toTex = undefined; // use default template

  return compareText;
}

exports.name = 'compareText';
exports.factory = factory;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flatten = __webpack_require__(2).flatten;

var identify = __webpack_require__(2).identify;

var generalize = __webpack_require__(2).generalize;

function factory(type, config, load, typed) {
  var MatrixIndex = load(__webpack_require__(24));
  var DenseMatrix = load(__webpack_require__(49));
  var size = load(__webpack_require__(28));
  var subset = load(__webpack_require__(23));
  var compareNatural = load(__webpack_require__(30));
  /**
   * Create the difference of two (multi)sets: every element of set1, that is not the element of set2.
   * Multi-dimension arrays will be converted to single-dimension arrays before the operation.
   *
   * Syntax:
   *
   *    math.setDifference(set1, set2)
   *
   * Examples:
   *
   *    math.setDifference([1, 2, 3, 4], [3, 4, 5, 6])            // returns [1, 2]
   *    math.setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])    // returns [1, 2]
   *
   * See also:
   *
   *    setUnion, setIntersect, setSymDifference
   *
   * @param {Array | Matrix}    a1  A (multi)set
   * @param {Array | Matrix}    a2  A (multi)set
   * @return {Array | Matrix}    The difference of two (multi)sets
   */

  var setDifference = typed('setDifference', {
    'Array | Matrix, Array | Matrix': function ArrayMatrixArrayMatrix(a1, a2) {
      var result;

      if (subset(size(a1), new MatrixIndex(0)) === 0) {
        // empty-anything=empty
        result = [];
      } else if (subset(size(a2), new MatrixIndex(0)) === 0) {
        // anything-empty=anything
        return flatten(a1.toArray());
      } else {
        var b1 = identify(flatten(Array.isArray(a1) ? a1 : a1.toArray()).sort(compareNatural));
        var b2 = identify(flatten(Array.isArray(a2) ? a2 : a2.toArray()).sort(compareNatural));
        result = [];
        var inb2;

        for (var i = 0; i < b1.length; i++) {
          inb2 = false;

          for (var j = 0; j < b2.length; j++) {
            if (compareNatural(b1[i].value, b2[j].value) === 0 && b1[i].identifier === b2[j].identifier) {
              // the identifier is always a decimal int
              inb2 = true;
              break;
            }
          }

          if (!inb2) {
            result.push(b1[i]);
          }
        }
      } // return an array, if both inputs were arrays


      if (Array.isArray(a1) && Array.isArray(a2)) {
        return generalize(result);
      } // return a matrix otherwise


      return new DenseMatrix(generalize(result));
    }
  });
  return setDifference;
}

exports.name = 'setDifference';
exports.factory = factory;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flatten = __webpack_require__(2).flatten;

var identify = __webpack_require__(2).identify;

var generalize = __webpack_require__(2).generalize;

function factory(type, config, load, typed) {
  var MatrixIndex = load(__webpack_require__(24));
  var DenseMatrix = load(__webpack_require__(49));
  var size = load(__webpack_require__(28));
  var subset = load(__webpack_require__(23));
  var compareNatural = load(__webpack_require__(30));
  /**
   * Create the intersection of two (multi)sets.
   * Multi-dimension arrays will be converted to single-dimension arrays before the operation.
   *
   * Syntax:
   *
   *    math.setIntersect(set1, set2)
   *
   * Examples:
   *
   *    math.setIntersect([1, 2, 3, 4], [3, 4, 5, 6])            // returns [3, 4]
   *    math.setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])    // returns [3, 4]
   *
   * See also:
   *
   *    setUnion, setDifference
   *
   * @param {Array | Matrix}    a1  A (multi)set
   * @param {Array | Matrix}    a2  A (multi)set
   * @return {Array | Matrix}    The intersection of two (multi)sets
   */

  var setIntersect = typed('setIntersect', {
    'Array | Matrix, Array | Matrix': function ArrayMatrixArrayMatrix(a1, a2) {
      var result;

      if (subset(size(a1), new MatrixIndex(0)) === 0 || subset(size(a2), new MatrixIndex(0)) === 0) {
        // of any of them is empty, return empty
        result = [];
      } else {
        var b1 = identify(flatten(Array.isArray(a1) ? a1 : a1.toArray()).sort(compareNatural));
        var b2 = identify(flatten(Array.isArray(a2) ? a2 : a2.toArray()).sort(compareNatural));
        result = [];

        for (var i = 0; i < b1.length; i++) {
          for (var j = 0; j < b2.length; j++) {
            if (compareNatural(b1[i].value, b2[j].value) === 0 && b1[i].identifier === b2[j].identifier) {
              // the identifier is always a decimal int
              result.push(b1[i]);
              break;
            }
          }
        }
      } // return an array, if both inputs were arrays


      if (Array.isArray(a1) && Array.isArray(a2)) {
        return generalize(result);
      } // return a matrix otherwise


      return new DenseMatrix(generalize(result));
    }
  });
  return setIntersect;
}

exports.name = 'setIntersect';
exports.factory = factory;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flatten = __webpack_require__(2).flatten;

function factory(type, config, load, typed) {
  var MatrixIndex = load(__webpack_require__(24));
  var concat = load(__webpack_require__(78));
  var size = load(__webpack_require__(28));
  var subset = load(__webpack_require__(23));
  var setDifference = load(__webpack_require__(148));
  /**
   * Create the symmetric difference of two (multi)sets.
   * Multi-dimension arrays will be converted to single-dimension arrays before the operation.
   *
   * Syntax:
   *
   *    math.setSymDifference(set1, set2)
   *
   * Examples:
   *
   *    math.setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])            // returns [1, 2, 5, 6]
   *    math.setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])    // returns [1, 2, 5, 6]
   *
   * See also:
   *
   *    setUnion, setIntersect, setDifference
   *
   * @param {Array | Matrix}    a1  A (multi)set
   * @param {Array | Matrix}    a2  A (multi)set
   * @return {Array | Matrix}    The symmetric difference of two (multi)sets
   */

  var setSymDifference = typed('setSymDifference', {
    'Array | Matrix, Array | Matrix': function ArrayMatrixArrayMatrix(a1, a2) {
      if (subset(size(a1), new MatrixIndex(0)) === 0) {
        // if any of them is empty, return the other one
        return flatten(a2);
      } else if (subset(size(a2), new MatrixIndex(0)) === 0) {
        return flatten(a1);
      }

      var b1 = flatten(a1);
      var b2 = flatten(a2);
      return concat(setDifference(b1, b2), setDifference(b2, b1));
    }
  });
  return setSymDifference;
}

exports.name = 'setSymDifference';
exports.factory = factory;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flatten = __webpack_require__(2).flatten;

var containsCollections = __webpack_require__(62);

function factory(type, config, load, typed) {
  var add = load(__webpack_require__(17));
  var divide = load(__webpack_require__(12));
  var compare = load(__webpack_require__(55));
  var partitionSelect = load(__webpack_require__(97));
  var improveErrorMessage = load(__webpack_require__(40));
  /**
   * Compute the median of a matrix or a list with values. The values are
   * sorted and the middle value is returned. In case of an even number of
   * values, the average of the two middle values is returned.
   * Supported types of values are: Number, BigNumber, Unit
   *
   * In case of a (multi dimensional) array or matrix, the median of all
   * elements will be calculated.
   *
   * Syntax:
   *
   *     math.median(a, b, c, ...)
   *     math.median(A)
   *
   * Examples:
   *
   *     math.median(5, 2, 7)        // returns 5
   *     math.median([3, -1, 5, 7])  // returns 4
   *
   * See also:
   *
   *     mean, min, max, sum, prod, std, var, quantileSeq
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The median
   */

  var median = typed('median', {
    // median([a, b, c, d, ...])
    'Array | Matrix': _median,
    // median([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': function ArrayMatrixNumberBigNumber(array, dim) {
      // TODO: implement median(A, dim)
      throw new Error('median(A, dim) is not yet supported'); // return reduce(arguments[0], arguments[1], ...)
    },
    // median(a, b, c, d, ...)
    '...': function _(args) {
      if (containsCollections(args)) {
        throw new TypeError('Scalar values expected in function median');
      }

      return _median(args);
    }
  });
  /**
   * Recursively calculate the median of an n-dimensional array
   * @param {Array} array
   * @return {Number} median
   * @private
   */

  function _median(array) {
    try {
      array = flatten(array.valueOf());
      var num = array.length;

      if (num === 0) {
        throw new Error('Cannot calculate median of an empty array');
      }

      if (num % 2 === 0) {
        // even: return the average of the two middle values
        var mid = num / 2 - 1;
        var right = partitionSelect(array, mid + 1); // array now partitioned at mid + 1, take max of left part

        var left = array[mid];

        for (var i = 0; i < mid; ++i) {
          if (compare(array[i], left) > 0) {
            left = array[i];
          }
        }

        return middle2(left, right);
      } else {
        // odd: return the middle value
        var m = partitionSelect(array, (num - 1) / 2);
        return middle(m);
      }
    } catch (err) {
      throw improveErrorMessage(err, 'median');
    }
  } // helper function to type check the middle value of the array


  var middle = typed({
    'number | BigNumber | Complex | Unit': function numberBigNumberComplexUnit(value) {
      return value;
    }
  }); // helper function to type check the two middle value of the array

  var middle2 = typed({
    'number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit': function numberBigNumberComplexUnitNumberBigNumberComplexUnit(left, right) {
      return divide(add(left, right), 2);
    }
  });
  median.toTex = undefined; // use default template

  return median;
}

exports.name = 'median';
exports.factory = factory;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var size = __webpack_require__(2).size;

var deepForEach = __webpack_require__(47);

var reduce = __webpack_require__(80);

var containsCollections = __webpack_require__(62);

function factory(type, config, load, typed) {
  var add = load(__webpack_require__(14));
  var divide = load(__webpack_require__(45));
  var improveErrorMessage = load(__webpack_require__(40));
  /**
   * Compute the mean value of matrix or a list with values.
   * In case of a multi dimensional array, the mean of the flattened array
   * will be calculated. When `dim` is provided, the maximum over the selected
   * dimension will be calculated. Parameter `dim` is zero-based.
   *
   * Syntax:
   *
   *     math.mean(a, b, c, ...)
   *     math.mean(A)
   *     math.mean(A, dim)
   *
   * Examples:
   *
   *     math.mean(2, 1, 4, 3)                     // returns 2.5
   *     math.mean([1, 2.7, 3.2, 4])               // returns 2.725
   *
   *     math.mean([[2, 5], [6, 3], [1, 7]], 0)    // returns [3, 5]
   *     math.mean([[2, 5], [6, 3], [1, 7]], 1)    // returns [3.5, 4.5, 4]
   *
   * See also:
   *
   *     median, min, max, sum, prod, std, var
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The mean of all values
   */

  var mean = typed('mean', {
    // mean([a, b, c, d, ...])
    'Array | Matrix': _mean,
    // mean([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': _nmeanDim,
    // mean(a, b, c, d, ...)
    '...': function _(args) {
      if (containsCollections(args)) {
        throw new TypeError('Scalar values expected in function mean');
      }

      return _mean(args);
    }
  });
  mean.toTex = undefined; // use default template

  return mean;
  /**
   * Calculate the mean value in an n-dimensional array, returning a
   * n-1 dimensional array
   * @param {Array} array
   * @param {number} dim
   * @return {number} mean
   * @private
   */

  function _nmeanDim(array, dim) {
    try {
      var sum = reduce(array, dim, add);
      var s = Array.isArray(array) ? size(array) : array.size();
      return divide(sum, s[dim]);
    } catch (err) {
      throw improveErrorMessage(err, 'mean');
    }
  }
  /**
   * Recursively calculate the mean value in an n-dimensional array
   * @param {Array} array
   * @return {number} mean
   * @private
   */


  function _mean(array) {
    var sum = 0;
    var num = 0;
    deepForEach(array, function (value) {
      try {
        sum = add(sum, value);
        num++;
      } catch (err) {
        throw improveErrorMessage(err, 'mean', value);
      }
    });

    if (num === 0) {
      throw new Error('Cannot calculate mean of an empty array');
    }

    return divide(sum, num);
  }
}

exports.name = 'mean';
exports.factory = factory;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepForEach = __webpack_require__(47);

var reduce = __webpack_require__(80);

var containsCollections = __webpack_require__(62);

function factory(type, config, load, typed) {
  var smaller = load(__webpack_require__(38));
  var improveErrorMessage = load(__webpack_require__(40));
  /**
   * Compute the minimum value of a matrix or a  list of values.
   * In case of a multi dimensional array, the minimum of the flattened array
   * will be calculated. When `dim` is provided, the minimum over the selected
   * dimension will be calculated. Parameter `dim` is zero-based.
   *
   * Syntax:
   *
   *     math.min(a, b, c, ...)
   *     math.min(A)
   *     math.min(A, dim)
   *
   * Examples:
   *
   *     math.min(2, 1, 4, 3)                  // returns 1
   *     math.min([2, 1, 4, 3])                // returns 1
   *
   *     // minimum over a specified dimension (zero-based)
   *     math.min([[2, 5], [4, 3], [1, 7]], 0) // returns [1, 3]
   *     math.min([[2, 5], [4, 3], [1, 7]], 1) // returns [2, 3, 1]
   *
   *     math.max(2.7, 7.1, -4.5, 2.0, 4.1)    // returns 7.1
   *     math.min(2.7, 7.1, -4.5, 2.0, 4.1)    // returns -4.5
   *
   * See also:
   *
   *    mean, median, max, prod, std, sum, var
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The minimum value
   */

  var min = typed('min', {
    // min([a, b, c, d, ...])
    'Array | Matrix': _min,
    // min([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': function ArrayMatrixNumberBigNumber(array, dim) {
      return reduce(array, dim.valueOf(), _smallest);
    },
    // min(a, b, c, d, ...)
    '...': function _(args) {
      if (containsCollections(args)) {
        throw new TypeError('Scalar values expected in function min');
      }

      return _min(args);
    }
  });
  min.toTex = "\\min\\left(${args}\\right)";
  return min;
  /**
   * Return the smallest of two values
   * @param {*} x
   * @param {*} y
   * @returns {*} Returns x when x is smallest, or y when y is smallest
   * @private
   */

  function _smallest(x, y) {
    try {
      return smaller(x, y) ? x : y;
    } catch (err) {
      throw improveErrorMessage(err, 'min', y);
    }
  }
  /**
   * Recursively calculate the minimum value in an n-dimensional array
   * @param {Array} array
   * @return {number} min
   * @private
   */


  function _min(array) {
    var min;
    deepForEach(array, function (value) {
      try {
        if (isNaN(value) && typeof value === 'number') {
          min = NaN;
        } else if (min === undefined || smaller(value, min)) {
          min = value;
        }
      } catch (err) {
        throw improveErrorMessage(err, 'min', value);
      }
    });

    if (min === undefined) {
      throw new Error('Cannot calculate min of an empty array');
    }

    return min;
  }
}

exports.name = 'min';
exports.factory = factory;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var sqrt = load(__webpack_require__(46));
  var variance = load(__webpack_require__(101));
  /**
   * Compute the standard deviation of a matrix or a  list with values.
   * The standard deviations is defined as the square root of the variance:
   * `std(A) = sqrt(var(A))`.
   * In case of a (multi dimensional) array or matrix, the standard deviation
   * over all elements will be calculated by default, unless an axis is specified
   * in which case the standard deviation will be computed along that axis.
   *
   * Additionally, it is possible to compute the standard deviation along the rows
   * or columns of a matrix by specifying the dimension as the second argument.
   *
   * Optionally, the type of normalization can be specified as the final
   * parameter. The parameter `normalization` can be one of the following values:
   *
   * - 'unbiased' (default) The sum of squared errors is divided by (n - 1)
   * - 'uncorrected'        The sum of squared errors is divided by n
   * - 'biased'             The sum of squared errors is divided by (n + 1)
   *
   *
   * Syntax:
   *
   *     math.std(a, b, c, ...)
   *     math.std(A)
   *     math.std(A, normalization)
   *     math.std(A, dimension)
   *     math.std(A, dimension, normalization)
   *
   * Examples:
   *
   *     math.std(2, 4, 6)                     // returns 2
   *     math.std([2, 4, 6, 8])                // returns 2.581988897471611
   *     math.std([2, 4, 6, 8], 'uncorrected') // returns 2.23606797749979
   *     math.std([2, 4, 6, 8], 'biased')      // returns 2
   *
   *     math.std([[1, 2, 3], [4, 5, 6]])      // returns 1.8708286933869707
   *     math.std([[1, 2, 3], [4, 6, 8]], 0)    // returns [2.1213203435596424, 2.8284271247461903, 3.5355339059327378]
   *     math.std([[1, 2, 3], [4, 6, 8]], 1)    // returns [1, 2]
   *     math.std([[1, 2, 3], [4, 6, 8]], 1, 'biased') // returns [0.7071067811865476, 1.4142135623730951]
   *
   * See also:
   *
   *    mean, median, max, min, prod, sum, var
   *
   * @param {Array | Matrix} array
   *                        A single matrix or or multiple scalar values
   * @param {string} [normalization='unbiased']
   *                        Determines how to normalize the variance.
   *                        Choose 'unbiased' (default), 'uncorrected', or 'biased'.
   * @param dimension {number | BigNumber}
   *                        Determines the axis to compute the standard deviation for a matrix
   * @return {*} The standard deviation
   */

  var std = typed('std', {
    // std([a, b, c, d, ...])
    'Array | Matrix': _std,
    // std([a, b, c, d, ...], normalization)
    'Array | Matrix, string': _std,
    // std([a, b, c, c, ...], dim)
    'Array | Matrix, number | BigNumber': _std,
    // std([a, b, c, c, ...], dim, normalization)
    'Array | Matrix, number | BigNumber, string': _std,
    // std(a, b, c, d, ...)
    '...': function _(args) {
      return _std(args);
    }
  });
  std.toTex = undefined; // use default template

  return std;

  function _std(array, normalization) {
    if (array.length === 0) {
      throw new SyntaxError('Function std requires one or more parameters (0 provided)');
    }

    try {
      return sqrt(variance.apply(null, arguments));
    } catch (err) {
      if (err instanceof TypeError && err.message.indexOf(' var') !== -1) {
        throw new TypeError(err.message.replace(' var', ' std'));
      } else {
        throw err;
      }
    }
  }
}

exports.name = 'std';
exports.factory = factory;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

function factory(construction, config, load, typed) {
  var docs = {}; // construction functions

  docs.bignumber = __webpack_require__(356);
  docs['boolean'] = __webpack_require__(357);
  docs.complex = __webpack_require__(358);
  docs.createUnit = __webpack_require__(359);
  docs.fraction = __webpack_require__(360);
  docs.index = __webpack_require__(361);
  docs.matrix = __webpack_require__(362);
  docs.number = __webpack_require__(363);
  docs.sparse = __webpack_require__(364);
  docs.splitUnit = __webpack_require__(365);
  docs.string = __webpack_require__(366);
  docs.unit = __webpack_require__(367); // constants

  docs.e = __webpack_require__(156);
  docs.E = __webpack_require__(156);
  docs['false'] = __webpack_require__(368);
  docs.i = __webpack_require__(369);
  docs['Infinity'] = __webpack_require__(370);
  docs.LN2 = __webpack_require__(371);
  docs.LN10 = __webpack_require__(372);
  docs.LOG2E = __webpack_require__(373);
  docs.LOG10E = __webpack_require__(374);
  docs.NaN = __webpack_require__(375);
  docs['null'] = __webpack_require__(376);
  docs.pi = __webpack_require__(157);
  docs.PI = __webpack_require__(157);
  docs.phi = __webpack_require__(377);
  docs.SQRT1_2 = __webpack_require__(378);
  docs.SQRT2 = __webpack_require__(379);
  docs.tau = __webpack_require__(380);
  docs['true'] = __webpack_require__(381);
  docs.version = __webpack_require__(382); // physical constants
  // TODO: more detailed docs for physical constants

  docs.speedOfLight = {
    description: 'Speed of light in vacuum',
    examples: ['speedOfLight']
  };
  docs.gravitationConstant = {
    description: 'Newtonian constant of gravitation',
    examples: ['gravitationConstant']
  };
  docs.planckConstant = {
    description: 'Planck constant',
    examples: ['planckConstant']
  };
  docs.reducedPlanckConstant = {
    description: 'Reduced Planck constant',
    examples: ['reducedPlanckConstant']
  };
  docs.magneticConstant = {
    description: 'Magnetic constant (vacuum permeability)',
    examples: ['magneticConstant']
  };
  docs.electricConstant = {
    description: 'Electric constant (vacuum permeability)',
    examples: ['electricConstant']
  };
  docs.vacuumImpedance = {
    description: 'Characteristic impedance of vacuum',
    examples: ['vacuumImpedance']
  };
  docs.coulomb = {
    description: 'Coulomb\'s constant',
    examples: ['coulomb']
  };
  docs.elementaryCharge = {
    description: 'Elementary charge',
    examples: ['elementaryCharge']
  };
  docs.bohrMagneton = {
    description: 'Borh magneton',
    examples: ['bohrMagneton']
  };
  docs.conductanceQuantum = {
    description: 'Conductance quantum',
    examples: ['conductanceQuantum']
  };
  docs.inverseConductanceQuantum = {
    description: 'Inverse conductance quantum',
    examples: ['inverseConductanceQuantum'] // docs.josephson = {description: 'Josephson constant', examples: ['josephson']}

  };
  docs.magneticFluxQuantum = {
    description: 'Magnetic flux quantum',
    examples: ['magneticFluxQuantum']
  };
  docs.nuclearMagneton = {
    description: 'Nuclear magneton',
    examples: ['nuclearMagneton']
  };
  docs.klitzing = {
    description: 'Von Klitzing constant',
    examples: ['klitzing']
  };
  docs.bohrRadius = {
    description: 'Borh radius',
    examples: ['bohrRadius']
  };
  docs.classicalElectronRadius = {
    description: 'Classical electron radius',
    examples: ['classicalElectronRadius']
  };
  docs.electronMass = {
    description: 'Electron mass',
    examples: ['electronMass']
  };
  docs.fermiCoupling = {
    description: 'Fermi coupling constant',
    examples: ['fermiCoupling']
  };
  docs.fineStructure = {
    description: 'Fine-structure constant',
    examples: ['fineStructure']
  };
  docs.hartreeEnergy = {
    description: 'Hartree energy',
    examples: ['hartreeEnergy']
  };
  docs.protonMass = {
    description: 'Proton mass',
    examples: ['protonMass']
  };
  docs.deuteronMass = {
    description: 'Deuteron Mass',
    examples: ['deuteronMass']
  };
  docs.neutronMass = {
    description: 'Neutron mass',
    examples: ['neutronMass']
  };
  docs.quantumOfCirculation = {
    description: 'Quantum of circulation',
    examples: ['quantumOfCirculation']
  };
  docs.rydberg = {
    description: 'Rydberg constant',
    examples: ['rydberg']
  };
  docs.thomsonCrossSection = {
    description: 'Thomson cross section',
    examples: ['thomsonCrossSection']
  };
  docs.weakMixingAngle = {
    description: 'Weak mixing angle',
    examples: ['weakMixingAngle']
  };
  docs.efimovFactor = {
    description: 'Efimov factor',
    examples: ['efimovFactor']
  };
  docs.atomicMass = {
    description: 'Atomic mass constant',
    examples: ['atomicMass']
  };
  docs.avogadro = {
    description: 'Avogadro\'s number',
    examples: ['avogadro']
  };
  docs.boltzmann = {
    description: 'Boltzmann constant',
    examples: ['boltzmann']
  };
  docs.faraday = {
    description: 'Faraday constant',
    examples: ['faraday']
  };
  docs.firstRadiation = {
    description: 'First radiation constant',
    examples: ['firstRadiation']
  };
  docs.loschmidt = {
    description: 'Loschmidt constant at T=273.15 K and p=101.325 kPa',
    examples: ['loschmidt']
  };
  docs.gasConstant = {
    description: 'Gas constant',
    examples: ['gasConstant']
  };
  docs.molarPlanckConstant = {
    description: 'Molar Planck constant',
    examples: ['molarPlanckConstant']
  };
  docs.molarVolume = {
    description: 'Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa',
    examples: ['molarVolume']
  };
  docs.sackurTetrode = {
    description: 'Sackur-Tetrode constant at T=1 K and p=101.325 kPa',
    examples: ['sackurTetrode']
  };
  docs.secondRadiation = {
    description: 'Second radiation constant',
    examples: ['secondRadiation']
  };
  docs.stefanBoltzmann = {
    description: 'Stefan-Boltzmann constant',
    examples: ['stefanBoltzmann']
  };
  docs.wienDisplacement = {
    description: 'Wien displacement law constant',
    examples: ['wienDisplacement'] // docs.spectralRadiance = {description: 'First radiation constant for spectral radiance', examples: ['spectralRadiance']}

  };
  docs.molarMass = {
    description: 'Molar mass constant',
    examples: ['molarMass']
  };
  docs.molarMassC12 = {
    description: 'Molar mass constant of carbon-12',
    examples: ['molarMassC12']
  };
  docs.gravity = {
    description: 'Standard acceleration of gravity (standard acceleration of free-fall on Earth)',
    examples: ['gravity']
  };
  docs.planckLength = {
    description: 'Planck length',
    examples: ['planckLength']
  };
  docs.planckMass = {
    description: 'Planck mass',
    examples: ['planckMass']
  };
  docs.planckTime = {
    description: 'Planck time',
    examples: ['planckTime']
  };
  docs.planckCharge = {
    description: 'Planck charge',
    examples: ['planckCharge']
  };
  docs.planckTemperature = {
    description: 'Planck temperature',
    examples: ['planckTemperature'] // functions - algebra

  };
  docs.derivative = __webpack_require__(383);
  docs.lsolve = __webpack_require__(384);
  docs.lup = __webpack_require__(385);
  docs.lusolve = __webpack_require__(386);
  docs.simplify = __webpack_require__(387);
  docs.rationalize = __webpack_require__(388);
  docs.slu = __webpack_require__(389);
  docs.usolve = __webpack_require__(390);
  docs.qr = __webpack_require__(391); // functions - arithmetic

  docs.abs = __webpack_require__(392);
  docs.add = __webpack_require__(393);
  docs.cbrt = __webpack_require__(394);
  docs.ceil = __webpack_require__(395);
  docs.cube = __webpack_require__(396);
  docs.divide = __webpack_require__(397);
  docs.dotDivide = __webpack_require__(398);
  docs.dotMultiply = __webpack_require__(399);
  docs.dotPow = __webpack_require__(400);
  docs.exp = __webpack_require__(401);
  docs.expm = __webpack_require__(402);
  docs.expm1 = __webpack_require__(403);
  docs.fix = __webpack_require__(404);
  docs.floor = __webpack_require__(405);
  docs.gcd = __webpack_require__(406);
  docs.hypot = __webpack_require__(407);
  docs.lcm = __webpack_require__(408);
  docs.log = __webpack_require__(409);
  docs.log2 = __webpack_require__(410);
  docs.log1p = __webpack_require__(411);
  docs.log10 = __webpack_require__(412);
  docs.mod = __webpack_require__(413);
  docs.multiply = __webpack_require__(414);
  docs.norm = __webpack_require__(415);
  docs.nthRoot = __webpack_require__(416);
  docs.nthRoots = __webpack_require__(417);
  docs.pow = __webpack_require__(418);
  docs.round = __webpack_require__(419);
  docs.sign = __webpack_require__(420);
  docs.sqrt = __webpack_require__(421);
  docs.sqrtm = __webpack_require__(422);
  docs.square = __webpack_require__(423);
  docs.subtract = __webpack_require__(424);
  docs.unaryMinus = __webpack_require__(425);
  docs.unaryPlus = __webpack_require__(426);
  docs.xgcd = __webpack_require__(427); // functions - bitwise

  docs.bitAnd = __webpack_require__(428);
  docs.bitNot = __webpack_require__(429);
  docs.bitOr = __webpack_require__(430);
  docs.bitXor = __webpack_require__(431);
  docs.leftShift = __webpack_require__(432);
  docs.rightArithShift = __webpack_require__(433);
  docs.rightLogShift = __webpack_require__(434); // functions - combinatorics

  docs.bellNumbers = __webpack_require__(435);
  docs.catalan = __webpack_require__(436);
  docs.composition = __webpack_require__(437);
  docs.stirlingS2 = __webpack_require__(438); // functions - core

  docs['config'] = __webpack_require__(439);
  docs['import'] = __webpack_require__(440);
  docs['typed'] = __webpack_require__(441); // functions - complex

  docs.arg = __webpack_require__(442);
  docs.conj = __webpack_require__(443);
  docs.re = __webpack_require__(444);
  docs.im = __webpack_require__(445); // functions - expression

  docs['eval'] = __webpack_require__(446);
  docs.help = __webpack_require__(447); // functions - geometry

  docs.distance = __webpack_require__(448);
  docs.intersect = __webpack_require__(449); // functions - logical

  docs['and'] = __webpack_require__(450);
  docs['not'] = __webpack_require__(451);
  docs['or'] = __webpack_require__(452);
  docs['xor'] = __webpack_require__(453); // functions - matrix

  docs.column = __webpack_require__(454);
  docs['concat'] = __webpack_require__(455);
  docs.cross = __webpack_require__(456);
  docs.ctranspose = __webpack_require__(457);
  docs.det = __webpack_require__(458);
  docs.diag = __webpack_require__(459);
  docs.dot = __webpack_require__(460);
  docs.getMatrixDataType = __webpack_require__(461);
  docs.identity = __webpack_require__(462);
  docs.filter = __webpack_require__(463);
  docs.flatten = __webpack_require__(464);
  docs.forEach = __webpack_require__(465);
  docs.inv = __webpack_require__(466);
  docs.kron = __webpack_require__(467);
  docs.map = __webpack_require__(468);
  docs.ones = __webpack_require__(469);
  docs.partitionSelect = __webpack_require__(470);
  docs.range = __webpack_require__(471);
  docs.resize = __webpack_require__(472);
  docs.reshape = __webpack_require__(473);
  docs.row = __webpack_require__(474);
  docs.size = __webpack_require__(475);
  docs.sort = __webpack_require__(476);
  docs.squeeze = __webpack_require__(477);
  docs.subset = __webpack_require__(478);
  docs.trace = __webpack_require__(479);
  docs.transpose = __webpack_require__(480);
  docs.zeros = __webpack_require__(481); // functions - probability

  docs.combinations = __webpack_require__(482); // docs.distribution = require('./function/probability/distribution')

  docs.factorial = __webpack_require__(483);
  docs.gamma = __webpack_require__(484);
  docs.kldivergence = __webpack_require__(485);
  docs.multinomial = __webpack_require__(486);
  docs.permutations = __webpack_require__(487);
  docs.pickRandom = __webpack_require__(488);
  docs.random = __webpack_require__(489);
  docs.randomInt = __webpack_require__(490); // functions - relational

  docs.compare = __webpack_require__(491);
  docs.compareNatural = __webpack_require__(492);
  docs.compareText = __webpack_require__(493);
  docs.deepEqual = __webpack_require__(494);
  docs['equal'] = __webpack_require__(495);
  docs.equalText = __webpack_require__(496);
  docs.larger = __webpack_require__(497);
  docs.largerEq = __webpack_require__(498);
  docs.smaller = __webpack_require__(499);
  docs.smallerEq = __webpack_require__(500);
  docs.unequal = __webpack_require__(501); // functions - set

  docs.setCartesian = __webpack_require__(502);
  docs.setDifference = __webpack_require__(503);
  docs.setDistinct = __webpack_require__(504);
  docs.setIntersect = __webpack_require__(505);
  docs.setIsSubset = __webpack_require__(506);
  docs.setMultiplicity = __webpack_require__(507);
  docs.setPowerset = __webpack_require__(508);
  docs.setSize = __webpack_require__(509);
  docs.setSymDifference = __webpack_require__(510);
  docs.setUnion = __webpack_require__(511); // functions - special

  docs.erf = __webpack_require__(512); // functions - statistics

  docs.mad = __webpack_require__(513);
  docs.max = __webpack_require__(514);
  docs.mean = __webpack_require__(515);
  docs.median = __webpack_require__(516);
  docs.min = __webpack_require__(517);
  docs.mode = __webpack_require__(518);
  docs.prod = __webpack_require__(519);
  docs.quantileSeq = __webpack_require__(520);
  docs.std = __webpack_require__(521);
  docs.sum = __webpack_require__(522);
  docs['var'] = __webpack_require__(523); // functions - trigonometry

  docs.acos = __webpack_require__(524);
  docs.acosh = __webpack_require__(525);
  docs.acot = __webpack_require__(526);
  docs.acoth = __webpack_require__(527);
  docs.acsc = __webpack_require__(528);
  docs.acsch = __webpack_require__(529);
  docs.asec = __webpack_require__(530);
  docs.asech = __webpack_require__(531);
  docs.asin = __webpack_require__(532);
  docs.asinh = __webpack_require__(533);
  docs.atan = __webpack_require__(534);
  docs.atanh = __webpack_require__(535);
  docs.atan2 = __webpack_require__(536);
  docs.cos = __webpack_require__(537);
  docs.cosh = __webpack_require__(538);
  docs.cot = __webpack_require__(539);
  docs.coth = __webpack_require__(540);
  docs.csc = __webpack_require__(541);
  docs.csch = __webpack_require__(542);
  docs.sec = __webpack_require__(543);
  docs.sech = __webpack_require__(544);
  docs.sin = __webpack_require__(545);
  docs.sinh = __webpack_require__(546);
  docs.tan = __webpack_require__(547);
  docs.tanh = __webpack_require__(548); // functions - units

  docs.to = __webpack_require__(549); // functions - utils

  docs.clone = __webpack_require__(550);
  docs.format = __webpack_require__(551);
  docs.isNaN = __webpack_require__(552);
  docs.isInteger = __webpack_require__(553);
  docs.isNegative = __webpack_require__(554);
  docs.isNumeric = __webpack_require__(555);
  docs.hasNumericValue = __webpack_require__(556);
  docs.isPositive = __webpack_require__(557);
  docs.isPrime = __webpack_require__(558);
  docs.isZero = __webpack_require__(559); // docs.print = require('./function/utils/print') // TODO: add documentation for print as soon as the parser supports objects.

  docs['typeof'] = __webpack_require__(560);
  return docs;
}

exports.name = 'docs';
exports.path = 'expression';
exports.factory = factory;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = {
  'name': 'e',
  'category': 'Constants',
  'syntax': ['e'],
  'description': 'Euler\'s number, the base of the natural logarithm. Approximately equal to 2.71828',
  'examples': ['e', 'e ^ 2', 'exp(2)', 'log(e)'],
  'seealso': ['exp']
};

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = {
  'name': 'pi',
  'category': 'Constants',
  'syntax': ['pi'],
  'description': 'The number pi is a mathematical constant that is the ratio of a circle\'s circumference to its diameter, and is approximately equal to 3.14159',
  'examples': ['pi', 'sin(pi/2)'],
  'seealso': ['tau']
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed, math) {
  var Parser = load(__webpack_require__(159));
  /**
   * Create a parser. The function creates a new `math.expression.Parser` object.
   *
   * Syntax:
   *
   *    math.parser()
   *
   * Examples:
   *
   *     const parser = new math.parser()
   *
   *     // evaluate expressions
   *     const a = parser.eval('sqrt(3^2 + 4^2)') // 5
   *     const b = parser.eval('sqrt(-4)')        // 2i
   *     const c = parser.eval('2 inch in cm')    // 5.08 cm
   *     const d = parser.eval('cos(45 deg)')     // 0.7071067811865476
   *
   *     // define variables and functions
   *     parser.eval('x = 7 / 2')                 // 3.5
   *     parser.eval('x + 3')                     // 6.5
   *     parser.eval('function f(x, y) = x^y')    // f(x, y)
   *     parser.eval('f(2, 3)')                   // 8
   *
   *     // get and set variables and functions
   *     const x = parser.get('x')                // 7
   *     const f = parser.get('f')                // function
   *     const g = f(3, 2)                        // 9
   *     parser.set('h', 500)
   *     const i = parser.eval('h / 2')           // 250
   *     parser.set('hello', function (name) {
   *       return 'hello, ' + name + '!'
   *     })
   *     parser.eval('hello("user")')           // "hello, user!"
   *
   *     // clear defined functions and variables
   *     parser.clear()
   *
   * See also:
   *
   *    eval, compile, parse
   *
   * @return {Parser} Parser
   */

  return typed('parser', {
    '': function _() {
      return new Parser(math);
    }
  });
}

exports.name = 'parser';
exports.factory = factory;
exports.math = true; // requires the math namespace as 5th argument

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(5).extend;

var customs = __webpack_require__(13);

function factory(type, config, load, typed, math) {
  var _parse = load(__webpack_require__(44));
  /**
   * @constructor Parser
   * Parser contains methods to evaluate or parse expressions, and has a number
   * of convenience methods to get, set, and remove variables from memory. Parser
   * keeps a scope containing variables in memory, which is used for all
   * evaluations.
   *
   * Methods:
   *    const result = parser.eval(expr)  // evaluate an expression
   *    const value = parser.get(name)    // retrieve a variable from the parser
   *    const values = parser.getAll()    // retrieve all defined variables
   *    parser.set(name, value)           // set a variable in the parser
   *    parser.remove(name)               // clear a variable from the
   *                                      // parsers scope
   *    parser.clear()                    // clear the parsers scope
   *
   * Example usage:
   *    const parser = new Parser()
   *    // Note: there is a convenience method which can be used instead:
   *    // const parser = new math.parser()
   *
   *    // evaluate expressions
   *    parser.eval('sqrt(3^2 + 4^2)')         // 5
   *    parser.eval('sqrt(-4)')                // 2i
   *    parser.eval('2 inch in cm')            // 5.08 cm
   *    parser.eval('cos(45 deg)')             // 0.7071067811865476
   *
   *    // define variables and functions
   *    parser.eval('x = 7 / 2')               // 3.5
   *    parser.eval('x + 3')                   // 6.5
   *    parser.eval('function f(x, y) = x^y')  // f(x, y)
   *    parser.eval('f(2, 3)')                 // 8
   *
   *    // get and set variables and functions
   *    const x = parser.get('x')              // 7
   *    const f = parser.get('f')              // function
   *    const g = f(3, 2)                      // 9
   *    parser.set('h', 500)
   *    const i = parser.eval('h / 2')         // 250
   *    parser.set('hello', function (name) {
   *        return 'hello, ' + name + '!'
   *    })
   *    parser.eval('hello("user")')           // "hello, user!"
   *
   *    // clear defined functions and variables
   *    parser.clear()
   *
   */


  function Parser() {
    if (!(this instanceof Parser)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this.scope = {};
  }
  /**
   * Attach type information
   */


  Parser.prototype.type = 'Parser';
  Parser.prototype.isParser = true;
  /**
   * Parse an expression and return the parsed function node.
   * The node tree can be compiled via `code = node.compile(math)`,
   * and the compiled code can be executed as `code.eval([scope])`
   * @param {string} expr
   * @return {Node} node
   * @throws {Error}
   */

  Parser.prototype.parse = function (expr) {
    throw new Error('Parser.parse is deprecated. Use math.parse instead.');
  };
  /**
   * Parse and compile an expression, return the compiled javascript code.
   * The node can be evaluated via code.eval([scope])
   * @param {string} expr
   * @return {{eval: function}} code
   * @throws {Error}
   */


  Parser.prototype.compile = function (expr) {
    throw new Error('Parser.compile is deprecated. Use math.compile instead.');
  };
  /**
   * Parse and evaluate the given expression
   * @param {string} expr   A string containing an expression, for example "2+3"
   * @return {*} result     The result, or undefined when the expression was empty
   * @throws {Error}
   */


  Parser.prototype.eval = function (expr) {
    // TODO: validate arguments
    return _parse(expr).compile().eval(this.scope);
  };
  /**
   * Get a variable (a function or variable) by name from the parsers scope.
   * Returns undefined when not found
   * @param {string} name
   * @return {* | undefined} value
   */


  Parser.prototype.get = function (name) {
    // TODO: validate arguments
    return name in this.scope ? customs.getSafeProperty(this.scope, name) : undefined;
  };
  /**
   * Get a map with all defined variables
   * @return {Object} values
   */


  Parser.prototype.getAll = function () {
    return extend({}, this.scope);
  };
  /**
   * Set a symbol (a function or variable) by name from the parsers scope.
   * @param {string} name
   * @param {* | undefined} value
   */


  Parser.prototype.set = function (name, value) {
    // TODO: validate arguments
    return customs.setSafeProperty(this.scope, name, value);
  };
  /**
   * Remove a variable from the parsers scope
   * @param {string} name
   */


  Parser.prototype.remove = function (name) {
    // TODO: validate arguments
    delete this.scope[name];
  };
  /**
   * Clear the scope with variables and functions
   */


  Parser.prototype.clear = function () {
    for (var name in this.scope) {
      if (this.scope.hasOwnProperty(name)) {
        delete this.scope[name];
      }
    }
  };

  return Parser;
}

exports.name = 'Parser';
exports.path = 'expression';
exports.factory = factory;
exports.math = true; // requires the math namespace as 5th argument

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalScope) {
  'use strict';


  /*
   *  decimal.js v10.2.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   */


  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


    // The maximum exponent magnitude.
    // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
  var EXP_LIMIT = 9e15,                      // 0 to 9e15

    // The limit on the value of `precision`, and on the value of the first argument to
    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
    MAX_DIGITS = 1e9,                        // 0 to 1e9

    // Base conversion alphabet.
    NUMERALS = '0123456789abcdef',

    // The natural logarithm of 10 (1025 digits).
    LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',

    // Pi (1025 digits).
    PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',


    // The initial configuration properties of the Decimal constructor.
    DEFAULTS = {

      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.

      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,                         // 1 to MAX_DIGITS

      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,                           // 0 to 8

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,                             // 0 to 9

      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,                          // 0 to -EXP_LIMIT

      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos:  21,                         // 0 to EXP_LIMIT

      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT

      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT

      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false                          // true/false
    },


  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


    Decimal, inexact, noConflict, quadrant,
    external = true,

    decimalError = '[DecimalError] ',
    invalidArgument = decimalError + 'Invalid argument: ',
    precisionLimitExceeded = decimalError + 'Precision limit exceeded',
    cryptoUnavailable = decimalError + 'crypto unavailable',

    mathfloor = Math.floor,
    mathpow = Math.pow,

    isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

    BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,

    LN10_PRECISION = LN10.length - 1,
    PI_PRECISION = PI.length - 1,

    // Decimal.prototype object
    P = { name: '[object Decimal]' };


  // Decimal prototype methods


  /*
   *  absoluteValue             abs
   *  ceil
   *  comparedTo                cmp
   *  cosine                    cos
   *  cubeRoot                  cbrt
   *  decimalPlaces             dp
   *  dividedBy                 div
   *  dividedToIntegerBy        divToInt
   *  equals                    eq
   *  floor
   *  greaterThan               gt
   *  greaterThanOrEqualTo      gte
   *  hyperbolicCosine          cosh
   *  hyperbolicSine            sinh
   *  hyperbolicTangent         tanh
   *  inverseCosine             acos
   *  inverseHyperbolicCosine   acosh
   *  inverseHyperbolicSine     asinh
   *  inverseHyperbolicTangent  atanh
   *  inverseSine               asin
   *  inverseTangent            atan
   *  isFinite
   *  isInteger                 isInt
   *  isNaN
   *  isNegative                isNeg
   *  isPositive                isPos
   *  isZero
   *  lessThan                  lt
   *  lessThanOrEqualTo         lte
   *  logarithm                 log
   *  [maximum]                 [max]
   *  [minimum]                 [min]
   *  minus                     sub
   *  modulo                    mod
   *  naturalExponential        exp
   *  naturalLogarithm          ln
   *  negated                   neg
   *  plus                      add
   *  precision                 sd
   *  round
   *  sine                      sin
   *  squareRoot                sqrt
   *  tangent                   tan
   *  times                     mul
   *  toBinary
   *  toDecimalPlaces           toDP
   *  toExponential
   *  toFixed
   *  toFraction
   *  toHexadecimal             toHex
   *  toNearest
   *  toNumber
   *  toOctal
   *  toPower                   pow
   *  toPrecision
   *  toSignificantDigits       toSD
   *  toString
   *  truncated                 trunc
   *  valueOf                   toJSON
   */


  /*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */
  P.absoluteValue = P.abs = function () {
    var x = new this.constructor(this);
    if (x.s < 0) x.s = 1;
    return finalise(x);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of positive Infinity.
   *
   */
  P.ceil = function () {
    return finalise(new this.constructor(this), this.e + 1, 2);
  };


  /*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value,
   *   NaN  if the value of either Decimal is NaN.
   *
   */
  P.comparedTo = P.cmp = function (y) {
    var i, j, xdL, ydL,
      x = this,
      xd = x.d,
      yd = (y = new x.constructor(y)).d,
      xs = x.s,
      ys = y.s;

    // Either NaN or ±Infinity?
    if (!xd || !yd) {
      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }

    // Either zero?
    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;

    // Signs differ?
    if (xs !== ys) return xs;

    // Compare exponents.
    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;

    xdL = xd.length;
    ydL = yd.length;

    // Compare digit by digit.
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }

    // Compare lengths.
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
  };


  /*
   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * cos(0)         = 1
   * cos(-0)        = 1
   * cos(Infinity)  = NaN
   * cos(-Infinity) = NaN
   * cos(NaN)       = NaN
   *
   */
  P.cosine = P.cos = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.d) return new Ctor(NaN);

    // cos(0) = cos(-0) = 1
    if (!x.d[0]) return new Ctor(1);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
  };


  /*
   *
   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   *  cbrt(0)  =  0
   *  cbrt(-0) = -0
   *  cbrt(1)  =  1
   *  cbrt(-1) = -1
   *  cbrt(N)  =  N
   *  cbrt(-I) = -I
   *  cbrt(I)  =  I
   *
   * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
   *
   */
  P.cubeRoot = P.cbrt = function () {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    external = false;

    // Initial estimate.
    s = x.s * mathpow(x.s * x, 1 / 3);

     // Math.cbrt underflow/overflow?
     // Pass x to Math.pow as integer, then adjust the exponent of the result.
    if (!s || Math.abs(s) == 1 / 0) {
      n = digitsToString(x.d);
      e = x.e;

      // Adjust n exponent so it is a multiple of 3 away from x exponent.
      if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');
      s = mathpow(n, 1 / 3);

      // Rarely, e may be one less than the result exponent value.
      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
      r.s = x.s;
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Halley's method.
    // TODO? Compare Newton's method.
    for (;;) {
      t = r;
      t3 = t.times(t).times(t);
      t3plusx = t3.plus(x);
      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
        // , i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return the number of decimal places of the value of this Decimal.
   *
   */
  P.decimalPlaces = P.dp = function () {
    var w,
      d = this.d,
      n = NaN;

    if (d) {
      w = d.length - 1;
      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last word.
      w = d[w];
      if (w) for (; w % 10 == 0; w /= 10) n--;
      if (n < 0) n = 0;
    }

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedBy = P.div = function (y) {
    return divide(this, new this.constructor(y));
  };


  /*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedToIntegerBy = P.divToInt = function (y) {
    var x = this,
      Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
  };


  /*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */
  P.equals = P.eq = function (y) {
    return this.cmp(y) === 0;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of negative Infinity.
   *
   */
  P.floor = function () {
    return finalise(new this.constructor(this), this.e + 1, 3);
  };


  /*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */
  P.greaterThan = P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */
  P.greaterThanOrEqualTo = P.gte = function (y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
  };


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [1, Infinity]
   *
   * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
   *
   * cosh(0)         = 1
   * cosh(-0)        = 1
   * cosh(Infinity)  = Infinity
   * cosh(-Infinity) = Infinity
   * cosh(NaN)       = NaN
   *
   *  x        time taken (ms)   result
   * 1000      9                 9.8503555700852349694e+433
   * 10000     25                4.4034091128314607936e+4342
   * 100000    171               1.4033316802130615897e+43429
   * 1000000   3817              1.5166076984010437725e+434294
   * 10000000  abandoned after 2 minute wait
   *
   * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
   *
   */
  P.hyperbolicCosine = P.cosh = function () {
    var k, n, pr, rm, len,
      x = this,
      Ctor = x.constructor,
      one = new Ctor(1);

    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero()) return one;

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
    // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))

    // Estimate the optimum number of times to use the argument reduction.
    // TODO? Estimation reused from cosine() and may not be optimal here.
    if (len < 32) {
      k = Math.ceil(len / 3);
      n = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      n = '2.3283064365386962890625e-10';
    }

    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);

    // Reverse argument reduction
    var cosh2_x,
      i = k,
      d8 = new Ctor(8);
    for (; i--;) {
      cosh2_x = x.times(x);
      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }

    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
   *
   * sinh(0)         = 0
   * sinh(-0)        = -0
   * sinh(Infinity)  = Infinity
   * sinh(-Infinity) = -Infinity
   * sinh(NaN)       = NaN
   *
   * x        time taken (ms)
   * 10       2 ms
   * 100      5 ms
   * 1000     14 ms
   * 10000    82 ms
   * 100000   886 ms            1.4033316802130615897e+43429
   * 200000   2613 ms
   * 300000   5407 ms
   * 400000   8824 ms
   * 500000   13026 ms          8.7080643612718084129e+217146
   * 1000000  48543 ms
   *
   * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
   *
   */
  P.hyperbolicSine = P.sinh = function () {
    var k, pr, rm, len,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    if (len < 3) {
      x = taylorSeries(Ctor, 2, x, x, true);
    } else {

      // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
      // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
      // 3 multiplications and 1 addition

      // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
      // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
      // 4 multiplications and 2 additions

      // Estimate the optimum number of times to use the argument reduction.
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;

      x = x.times(1 / tinyPow(5, k));
      x = taylorSeries(Ctor, 2, x, x, true);

      // Reverse argument reduction
      var sinh2_x,
        d5 = new Ctor(5),
        d16 = new Ctor(16),
        d20 = new Ctor(20);
      for (; k--;) {
        sinh2_x = x.times(x);
        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
      }
    }

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * tanh(x) = sinh(x) / cosh(x)
   *
   * tanh(0)         = 0
   * tanh(-0)        = -0
   * tanh(Infinity)  = 1
   * tanh(-Infinity) = -1
   * tanh(NaN)       = NaN
   *
   */
  P.hyperbolicTangent = P.tanh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(x.s);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;

    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
  };


  /*
   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
   * this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [0, pi]
   *
   * acos(x) = pi/2 - asin(x)
   *
   * acos(0)       = pi/2
   * acos(-0)      = pi/2
   * acos(1)       = 0
   * acos(-1)      = pi
   * acos(1/2)     = pi/3
   * acos(-1/2)    = 2*pi/3
   * acos(|x| > 1) = NaN
   * acos(NaN)     = NaN
   *
   */
  P.inverseCosine = P.acos = function () {
    var halfPi,
      x = this,
      Ctor = x.constructor,
      k = x.abs().cmp(1),
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (k !== -1) {
      return k === 0
        // |x| is 1
        ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)
        // |x| > 1 or x is NaN
        : new Ctor(NaN);
    }

    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);

    // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.asin();
    halfPi = getPi(Ctor, pr + 4, rm).times(0.5);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return halfPi.minus(x);
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
   * value of this Decimal.
   *
   * Domain: [1, Infinity]
   * Range: [0, Infinity]
   *
   * acosh(x) = ln(x + sqrt(x^2 - 1))
   *
   * acosh(x < 1)     = NaN
   * acosh(NaN)       = NaN
   * acosh(Infinity)  = Infinity
   * acosh(-Infinity) = NaN
   * acosh(0)         = NaN
   * acosh(-0)        = NaN
   * acosh(1)         = 0
   * acosh(-1)        = NaN
   *
   */
  P.inverseHyperbolicCosine = P.acosh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).minus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * asinh(x) = ln(x + sqrt(x^2 + 1))
   *
   * asinh(NaN)       = NaN
   * asinh(Infinity)  = Infinity
   * asinh(-Infinity) = -Infinity
   * asinh(0)         = 0
   * asinh(-0)        = -0
   *
   */
  P.inverseHyperbolicSine = P.asinh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).plus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
   * value of this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [-Infinity, Infinity]
   *
   * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
   *
   * atanh(|x| > 1)   = NaN
   * atanh(NaN)       = NaN
   * atanh(Infinity)  = NaN
   * atanh(-Infinity) = NaN
   * atanh(0)         = 0
   * atanh(-0)        = -0
   * atanh(1)         = Infinity
   * atanh(-1)        = -Infinity
   *
   */
  P.inverseHyperbolicTangent = P.atanh = function () {
    var pr, rm, wpr, xsd,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();

    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);

    Ctor.precision = wpr = xsd - x.e;

    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);

    Ctor.precision = pr + 4;
    Ctor.rounding = 1;

    x = x.ln();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(0.5);
  };


  /*
   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
   *
   * asin(0)       = 0
   * asin(-0)      = -0
   * asin(1/2)     = pi/6
   * asin(-1/2)    = -pi/6
   * asin(1)       = pi/2
   * asin(-1)      = -pi/2
   * asin(|x| > 1) = NaN
   * asin(NaN)     = NaN
   *
   * TODO? Compare performance of Taylor series.
   *
   */
  P.inverseSine = P.asin = function () {
    var halfPi, k,
      pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.isZero()) return new Ctor(x);

    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (k !== -1) {

      // |x| is 1
      if (k === 0) {
        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
        halfPi.s = x.s;
        return halfPi;
      }

      // |x| > 1 or x is NaN
      return new Ctor(NaN);
    }

    // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(2);
  };


  /*
   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
   *
   * atan(0)         = 0
   * atan(-0)        = -0
   * atan(1)         = pi/4
   * atan(-1)        = -pi/4
   * atan(Infinity)  = pi/2
   * atan(-Infinity) = -pi/2
   * atan(NaN)       = NaN
   *
   */
  P.inverseTangent = P.atan = function () {
    var i, j, k, n, px, t, r, wpr, x2,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (!x.isFinite()) {
      if (!x.s) return new Ctor(NaN);
      if (pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.5);
        r.s = x.s;
        return r;
      }
    } else if (x.isZero()) {
      return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.25);
      r.s = x.s;
      return r;
    }

    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;

    // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);

    // Argument reduction
    // Ensure |x| < 0.42
    // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))

    k = Math.min(28, wpr / LOG_BASE + 2 | 0);

    for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));

    external = false;

    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;

    // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
    for (; i !== -1;) {
      px = px.times(x2);
      t = r.minus(px.div(n += 2));

      px = px.times(x2);
      r = t.plus(px.div(n += 2));

      if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
    }

    if (k) r = r.times(2 << (k - 1));

    external = true;

    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return true if the value of this Decimal is a finite number, otherwise return false.
   *
   */
  P.isFinite = function () {
    return !!this.d;
  };


  /*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */
  P.isInteger = P.isInt = function () {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
  };


  /*
   * Return true if the value of this Decimal is NaN, otherwise return false.
   *
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */
  P.isNegative = P.isNeg = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */
  P.isPositive = P.isPos = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
   *
   */
  P.isZero = function () {
    return !!this.d && this.d[0] === 0;
  };


  /*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */
  P.lessThan = P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */
  P.lessThanOrEqualTo = P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * If no base is specified, return log[10](arg).
   *
   * log[base](arg) = ln(arg) / ln(base)
   *
   * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
   * otherwise:
   *
   * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
   * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
   * between the result and the correctly rounded result will be one ulp (unit in the last place).
   *
   * log[-b](a)       = NaN
   * log[0](a)        = NaN
   * log[1](a)        = NaN
   * log[NaN](a)      = NaN
   * log[Infinity](a) = NaN
   * log[b](0)        = -Infinity
   * log[b](-0)       = -Infinity
   * log[b](-a)       = NaN
   * log[b](1)        = 0
   * log[b](Infinity) = Infinity
   * log[b](NaN)      = NaN
   *
   * [base] {number|string|Decimal} The base of the logarithm.
   *
   */
  P.logarithm = P.log = function (base) {
    var isBase10, d, denominator, k, inf, num, sd, r,
      arg = this,
      Ctor = arg.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding,
      guard = 5;

    // Default base is 10.
    if (base == null) {
      base = new Ctor(10);
      isBase10 = true;
    } else {
      base = new Ctor(base);
      d = base.d;

      // Return NaN if base is negative, or non-finite, or is 0 or 1.
      if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);

      isBase10 = base.eq(10);
    }

    d = arg.d;

    // Is arg negative, non-finite, 0 or 1?
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }

    // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
    // integer power of 10.
    if (isBase10) {
      if (d.length > 1) {
        inf = true;
      } else {
        for (k = d[0]; k % 10 === 0;) k /= 10;
        inf = k !== 1;
      }
    }

    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);

    // The result will have 5 rounding digits.
    r = divide(num, denominator, sd, 1);

    // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
    // calculate 10 further digits.
    //
    // If the result is known to have an infinite decimal expansion, repeat this until it is clear
    // that the result is above or below the boundary. Otherwise, if after calculating the 10
    // further digits, the last 14 are nines, round up and assume the result is exact.
    // Also assume the result is exact if the last 14 are zero.
    //
    // Example of a result that will be incorrectly rounded:
    // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
    // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
    // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
    // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
    // place is still 2.6.
    if (checkRoundingDigits(r.d, k = pr, rm)) {

      do {
        sd += 10;
        num = naturalLogarithm(arg, sd);
        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
        r = divide(num, denominator, sd, 1);

        if (!inf) {

          // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }

          break;
        }
      } while (checkRoundingDigits(r.d, k += 10, rm));
    }

    external = true;

    return finalise(r, pr, rm);
  };


  /*
   * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.max = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'lt');
  };
   */


  /*
   * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.min = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'gt');
  };
   */


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.minus = P.sub = function (y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return y negated if x is finite and y is ±Infinity.
      else if (x.d) y.s = -y.s;

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with different signs.
      // Return NaN if both are ±Infinity with the same sign.
      else y = new Ctor(y.d || x.s !== y.s ? x : NaN);

      return y;
    }

    // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.plus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return y negated if x is zero and y is non-zero.
      if (yd[0]) y.s = -y.s;

      // Return x if y is zero and x is non-zero.
      else if (xd[0]) y = new Ctor(x);

      // Return zero if both are zero.
      // From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.
      else return new Ctor(rm === 3 ? -0 : 0);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);

    xd = xd.slice();
    k = xe - e;

    // If base 1e7 exponents differ...
    if (k) {
      xLTy = k < 0;

      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }

      // Numbers with massively different exponents would result in a very high number of
      // zeros needing to be prepended, but this can be avoided while still ensuring correct
      // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

      if (k > i) {
        k = i;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents.
      d.reverse();
      for (i = k; i--;) d.push(0);
      d.reverse();

    // Base 1e7 exponents equal.
    } else {

      // Check digits to determine which is the bigger number.

      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy) len = i;

      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }

      k = 0;
    }

    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }

    len = xd.length;

    // Append zeros to `xd` if shorter.
    // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

    // Subtract yd from xd.
    for (i = yd.length; i > k;) {

      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }

      xd[i] -= yd[i];
    }

    // Remove trailing zeros.
    for (; xd[--len] === 0;) xd.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xd[0] === 0; xd.shift()) --e;

    // Zero?
    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * The result depends on the modulo mode.
   *
   */
  P.modulo = P.mod = function (y) {
    var q,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);

    // Return x if y is ±Infinity or x is ±0.
    if (!y.d || x.d && !x.d[0]) {
      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }

    // Prevent rounding of intermediate calculations.
    external = false;

    if (Ctor.modulo == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // result = x - q * y    where  0 <= result < abs(y)
      q = divide(x, y.abs(), 0, 3, 1);
      q.s *= y.s;
    } else {
      q = divide(x, y, 0, Ctor.modulo, 1);
    }

    q = q.times(y);

    external = true;

    return x.minus(q);
  };


  /*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.naturalExponential = P.exp = function () {
    return naturalExponential(this);
  };


  /*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.naturalLogarithm = P.ln = function () {
    return naturalLogarithm(this);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */
  P.negated = P.neg = function () {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.plus = P.add = function (y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with the same sign.
      // Return NaN if both are ±Infinity with different signs.
      // Return y if x is finite and y is ±Infinity.
      else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);

      return y;
    }

     // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.minus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return x if y is zero.
      // Return y if y is non-zero.
      if (!yd[0]) y = new Ctor(x);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);

    xd = xd.slice();
    i = k - e;

    // If base 1e7 exponents differ...
    if (i) {

      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }

      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;

      if (i > len) {
        i = len;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
      d.reverse();
      for (; i--;) d.push(0);
      d.reverse();
    }

    len = xd.length;
    i = yd.length;

    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }

    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
    for (carry = 0; i;) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }

    if (carry) {
      xd.unshift(carry);
      ++e;
    }

    // Remove trailing zeros.
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    for (len = xd.length; xd[--len] == 0;) xd.pop();

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */
  P.precision = P.sd = function (z) {
    var k,
      x = this;

    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

    if (x.d) {
      k = getPrecision(x.d);
      if (z && x.e + 1 > k) k = x.e + 1;
    } else {
      k = NaN;
    }

    return k;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */
  P.round = function () {
    var x = this,
      Ctor = x.constructor;

    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
  };


  /*
   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * sin(x) = x - x^3/3! + x^5/5! - ...
   *
   * sin(0)         = 0
   * sin(-0)        = -0
   * sin(Infinity)  = NaN
   * sin(-Infinity) = NaN
   * sin(NaN)       = NaN
   *
   */
  P.sine = P.sin = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = sine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   *  sqrt(-n) =  N
   *  sqrt(N)  =  N
   *  sqrt(-I) =  N
   *  sqrt(I)  =  I
   *  sqrt(0)  =  0
   *  sqrt(-0) = -0
   *
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, sd, r, rep, t,
      x = this,
      d = x.d,
      e = x.e,
      s = x.s,
      Ctor = x.constructor;

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !d || !d[0]) {
      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }

    external = false;

    // Initial estimate.
    s = Math.sqrt(+x);

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(d);

      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '1e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Newton-Raphson iteration.
    for (;;) {
      t = r;
      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
        // 4999, i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * tan(0)         = 0
   * tan(-0)        = -0
   * tan(Infinity)  = NaN
   * tan(-Infinity) = NaN
   * tan(NaN)       = NaN
   *
   */
  P.tangent = P.tan = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;

    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   */
  P.times = P.mul = function (y) {
    var carry, e, i, k, r, rL, t, xdL, ydL,
      x = this,
      Ctor = x.constructor,
      xd = x.d,
      yd = (y = new Ctor(y)).d;

    y.s *= x.s;

     // If either is NaN, ±Infinity or ±0...
    if (!xd || !xd[0] || !yd || !yd[0]) {

      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd

        // Return NaN if either is NaN.
        // Return NaN if x is ±0 and y is ±Infinity, or y is ±0 and x is ±Infinity.
        ? NaN

        // Return ±Infinity if either is ±Infinity.
        // Return ±0 if either is ±0.
        : !xd || !yd ? y.s / 0 : y.s * 0);
    }

    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;

    // Ensure xd points to the longer array.
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }

    // Initialise the result array with zeros.
    r = [];
    rL = xdL + ydL;
    for (i = rL; i--;) r.push(0);

    // Multiply!
    for (i = ydL; --i >= 0;) {
      carry = 0;
      for (k = xdL + i; k > i;) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }

      r[k] = (r[k] + carry) % BASE | 0;
    }

    // Remove trailing zeros.
    for (; !r[--rL];) r.pop();

    if (carry) ++e;
    else r.shift();

    y.d = r;
    y.e = getBase10Exponent(r, e);

    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
  };


  /*
   * Return a string representing the value of this Decimal in base 2, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toBinary = function (sd, rm) {
    return toStringBinary(this, 2, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toDecimalPlaces = P.toDP = function (dp, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);
    if (dp === void 0) return x;

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    return finalise(x, dp + x.e + 1, rm);
  };


  /*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toExponential = function (dp, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), dp + 1, rm);
      str = finiteToString(x, true, dp + 1);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */
  P.toFixed = function (dp, rm) {
    var str, y,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      y = finalise(new Ctor(x), dp + x.e + 1, rm);
      str = finiteToString(y, false, dp + y.e + 1);
    }

    // To determine whether to add the minus sign look at the value before it was rounded,
    // i.e. look at `x` rather than `y`.
    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator.
   *
   * The denominator will be a positive non-zero value less than or equal to the specified maximum
   * denominator. If a maximum denominator is not specified, the denominator will be the lowest
   * value necessary to represent the number exactly.
   *
   * [maxD] {number|string|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
   *
   */
  P.toFraction = function (maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,
      x = this,
      xd = x.d,
      Ctor = x.constructor;

    if (!xd) return new Ctor(x);

    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);

    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);

    if (maxD == null) {

      // d is 10**e, the minimum max-denominator needed.
      maxD = e > 0 ? d : n1;
    } else {
      n = new Ctor(maxD);
      if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
      maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
    }

    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;

    for (;;)  {
      q = divide(n, d, 0, 1, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.cmp(maxD) == 1) break;
      d0 = d1;
      d1 = d2;
      d2 = n1;
      n1 = n0.plus(q.times(d2));
      n0 = d2;
      d2 = d;
      d = n.minus(q.times(d2));
      n = d2;
    }

    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;

    // Determine which fraction is closer to x, n0/d0 or n1/d1?
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1
        ? [n1, d1] : [n0, d0];

    Ctor.precision = pr;
    external = true;

    return r;
  };


  /*
   * Return a string representing the value of this Decimal in base 16, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toHexadecimal = P.toHex = function (sd, rm) {
    return toStringBinary(this, 16, sd, rm);
  };


  /*
   * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
   * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
   *
   * The return value will always have the same sign as this Decimal, unless either this Decimal
   * or `y` is NaN, in which case the return value will be also be NaN.
   *
   * The return value is not affected by the value of `precision`.
   *
   * y {number|string|Decimal} The magnitude to round to a multiple of.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toNearest() rounding mode not an integer: {rm}'
   * 'toNearest() rounding mode out of range: {rm}'
   *
   */
  P.toNearest = function (y, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);

    if (y == null) {

      // If x is not finite, return x.
      if (!x.d) return x;

      y = new Ctor(1);
      rm = Ctor.rounding;
    } else {
      y = new Ctor(y);
      if (rm === void 0) {
        rm = Ctor.rounding;
      } else {
        checkInt32(rm, 0, 8);
      }

      // If x is not finite, return x if y is not NaN, else NaN.
      if (!x.d) return y.s ? x : y;

      // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
      if (!y.d) {
        if (y.s) y.s = x.s;
        return y;
      }
    }

    // If y is not zero, calculate the nearest multiple of y to x.
    if (y.d[0]) {
      external = false;
      x = divide(x, y, 0, rm, 1).times(y);
      external = true;
      finalise(x);

    // If y is zero, return zero with the sign of x.
    } else {
      y.s = x.s;
      x = y;
    }

    return x;
  };


  /*
   * Return the value of this Decimal converted to a number primitive.
   * Zero keeps its sign.
   *
   */
  P.toNumber = function () {
    return +this;
  };


  /*
   * Return a string representing the value of this Decimal in base 8, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toOctal = function (sd, rm) {
    return toStringBinary(this, 8, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
   * to `precision` significant digits using rounding mode `rounding`.
   *
   * ECMAScript compliant.
   *
   *   pow(x, NaN)                           = NaN
   *   pow(x, ±0)                            = 1

   *   pow(NaN, non-zero)                    = NaN
   *   pow(abs(x) > 1, +Infinity)            = +Infinity
   *   pow(abs(x) > 1, -Infinity)            = +0
   *   pow(abs(x) == 1, ±Infinity)           = NaN
   *   pow(abs(x) < 1, +Infinity)            = +0
   *   pow(abs(x) < 1, -Infinity)            = +Infinity
   *   pow(+Infinity, y > 0)                 = +Infinity
   *   pow(+Infinity, y < 0)                 = +0
   *   pow(-Infinity, odd integer > 0)       = -Infinity
   *   pow(-Infinity, even integer > 0)      = +Infinity
   *   pow(-Infinity, odd integer < 0)       = -0
   *   pow(-Infinity, even integer < 0)      = +0
   *   pow(+0, y > 0)                        = +0
   *   pow(+0, y < 0)                        = +Infinity
   *   pow(-0, odd integer > 0)              = -0
   *   pow(-0, even integer > 0)             = +0
   *   pow(-0, odd integer < 0)              = -Infinity
   *   pow(-0, even integer < 0)             = +Infinity
   *   pow(finite x < 0, finite non-integer) = NaN
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
   * probability of an incorrectly rounded result
   * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
   * i.e. 1 in 250,000,000,000,000
   *
   * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
   *
   * y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */
  P.toPower = P.pow = function (y) {
    var e, k, pr, r, rm, s,
      x = this,
      Ctor = x.constructor,
      yn = +(y = new Ctor(y));

    // Either ±Infinity, NaN or ±0?
    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));

    x = new Ctor(x);

    if (x.eq(1)) return x;

    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (y.eq(1)) return finalise(x, pr, rm);

    // y exponent
    e = mathfloor(y.e / LOG_BASE);

    // If y is a small integer use the 'exponentiation by squaring' algorithm.
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = intPow(Ctor, x, k, pr);
      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }

    s = x.s;

    // if x is negative
    if (s < 0) {

      // if y is not an integer
      if (e < y.d.length - 1) return new Ctor(NaN);

      // Result is positive if x is negative and the last digit of integer y is even.
      if ((y.d[e] & 1) == 0) s = 1;

      // if x.eq(-1)
      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
        x.s = s;
        return x;
      }
    }

    // Estimate result exponent.
    // x^y = 10^e,  where e = y * log10(x)
    // log10(x) = log10(x_significand) + x_exponent
    // log10(x_significand) = ln(x_significand) / ln(10)
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k)
      ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))
      : new Ctor(k + '').e;

    // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.

    // Overflow/underflow?
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);

    external = false;
    Ctor.rounding = x.s = 1;

    // Estimate the extra guard digits needed to ensure five correct rounding digits from
    // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
    // new Decimal(2.32456).pow('2087987436534566.46411')
    // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
    k = Math.min(12, (e + '').length);

    // r = x^y = exp(y*ln(x))
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);

    // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
    if (r.d) {

      // Truncate to the required precision plus five rounding digits.
      r = finalise(r, pr + 5, 1);

      // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
      // the result.
      if (checkRoundingDigits(r.d, pr, rm)) {
        e = pr + 10;

        // Truncate to the increased precision plus five rounding digits.
        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);

        // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
      }
    }

    r.s = s;
    external = true;
    Ctor.rounding = rm;

    return finalise(r, pr, rm);
  };


  /*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toPrecision = function (sd, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), sd, rm);
      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toSD() digits out of range: {sd}'
   * 'toSD() digits not an integer: {sd}'
   * 'toSD() rounding mode not an integer: {rm}'
   * 'toSD() rounding mode out of range: {rm}'
   *
   */
  P.toSignificantDigits = P.toSD = function (sd, rm) {
    var x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    }

    return finalise(new Ctor(x), sd, rm);
  };


  /*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  P.toString = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
   *
   */
  P.truncated = P.trunc = function () {
    return finalise(new this.constructor(this), this.e + 1, 1);
  };


  /*
   * Return a string representing the value of this Decimal.
   * Unlike `toString`, negative zero will include the minus sign.
   *
   */
  P.valueOf = P.toJSON = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() ? '-' + str : str;
  };


  /*
  // Add aliases to match BigDecimal method names.
  // P.add = P.plus;
  P.subtract = P.minus;
  P.multiply = P.times;
  P.divide = P.div;
  P.remainder = P.mod;
  P.compareTo = P.cmp;
  P.negate = P.neg;
   */


  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


  /*
   *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
   *                           finiteToString, naturalExponential, naturalLogarithm
   *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
   *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
   *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
   *  convertBase              toStringBinary, parseOther
   *  cos                      P.cos
   *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
   *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
   *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
   *                           taylorSeries, atan2, parseOther
   *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
   *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
   *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
   *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
   *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
   *                           P.truncated, divide, getLn10, getPi, naturalExponential,
   *                           naturalLogarithm, ceil, floor, round, trunc
   *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
   *                           toStringBinary
   *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
   *  getLn10                  P.logarithm, naturalLogarithm
   *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
   *  getPrecision             P.precision, P.toFraction
   *  getZeroString            digitsToString, finiteToString
   *  intPow                   P.toPower, parseOther
   *  isOdd                    toLessThanHalfPi
   *  maxOrMin                 max, min
   *  naturalExponential       P.naturalExponential, P.toPower
   *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
   *                           P.toPower, naturalExponential
   *  nonFiniteToString        finiteToString, toStringBinary
   *  parseDecimal             Decimal
   *  parseOther               Decimal
   *  sin                      P.sin
   *  taylorSeries             P.cosh, P.sinh, cos, sin
   *  toLessThanHalfPi         P.cos, P.sin
   *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
   *  truncate                 intPow
   *
   *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
   *                           naturalLogarithm, config, parseOther, random, Decimal
   */


  function digitsToString(d) {
    var i, k, ws,
      indexOfLastWord = d.length - 1,
      str = '',
      w = d[0];

    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + '';
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
        str += ws;
      }

      w = d[i];
      ws = w + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
    } else if (w === 0) {
      return '0';
    }

    // Remove trailing zeros of last w.
    for (; w % 10 === 0;) w /= 10;

    return str + w;
  }


  function checkInt32(i, min, max) {
    if (i !== ~~i || i < min || i > max) {
      throw Error(invalidArgument + i);
    }
  }


  /*
   * Check 5 rounding digits if `repeating` is null, 4 otherwise.
   * `repeating == null` if caller is `log` or `pow`,
   * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
   */
  function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;

    // Get the length of the first word of the array d.
    for (k = d[0]; k >= 10; k /= 10) --i;

    // Is the rounding digit in the first word of d?
    if (--i < 0) {
      i += LOG_BASE;
      di = 0;
    } else {
      di = Math.ceil((i + 1) / LOG_BASE);
      i %= LOG_BASE;
    }

    // i is the index (0 - 6) of the rounding digit.
    // E.g. if within the word 3487563 the first rounding digit is 5,
    // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;

    if (repeating == null) {
      if (i < 3) {
        if (i == 0) rd = rd / 100 | 0;
        else if (i == 1) rd = rd / 10 | 0;
        r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
      } else {
        r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&
          (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||
            (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
      }
    } else {
      if (i < 4) {
        if (i == 0) rd = rd / 1000 | 0;
        else if (i == 1) rd = rd / 100 | 0;
        else if (i == 2) rd = rd / 10 | 0;
        r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
      } else {
        r = ((repeating || rm < 4) && rd + 1 == k ||
        (!repeating && rm > 3) && rd + 1 == k / 2) &&
          (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
      }
    }

    return r;
  }


  // Convert string of `baseIn` to an array of numbers of `baseOut`.
  // Eg. convertBase('255', 10, 16) returns [15, 15].
  // Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
  function convertBase(str, baseIn, baseOut) {
    var j,
      arr = [0],
      arrL,
      i = 0,
      strL = str.length;

    for (; i < strL;) {
      for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
      arr[0] += NUMERALS.indexOf(str.charAt(i++));
      for (j = 0; j < arr.length; j++) {
        if (arr[j] > baseOut - 1) {
          if (arr[j + 1] === void 0) arr[j + 1] = 0;
          arr[j + 1] += arr[j] / baseOut | 0;
          arr[j] %= baseOut;
        }
      }
    }

    return arr.reverse();
  }


  /*
   * cos(x) = 1 - x^2/2! + x^4/4! - ...
   * |x| < pi/2
   *
   */
  function cosine(Ctor, x) {
    var k, y,
      len = x.d.length;

    // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
    // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1

    // Estimate the optimum number of times to use the argument reduction.
    if (len < 32) {
      k = Math.ceil(len / 3);
      y = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      y = '2.3283064365386962890625e-10';
    }

    Ctor.precision += k;

    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));

    // Reverse argument reduction
    for (var i = k; i--;) {
      var cos2x = x.times(x);
      x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }

    Ctor.precision -= k;

    return x;
  }


  /*
   * Perform division in the specified base.
   */
  var divide = (function () {

    // Assumes non-zero x and k, and hence non-zero result.
    function multiplyInteger(x, k, base) {
      var temp,
        carry = 0,
        i = x.length;

      for (x = x.slice(); i--;) {
        temp = x[i] * k + carry;
        x[i] = temp % base | 0;
        carry = temp / base | 0;
      }

      if (carry) x.unshift(carry);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, r;

      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return r;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1;) a.shift();
    }

    return function (x, y, pr, rm, dp, base) {
      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,
        yL, yz,
        Ctor = x.constructor,
        sign = x.s == y.s ? 1 : -1,
        xd = x.d,
        yd = y.d;

      // Either NaN, Infinity or 0?
      if (!xd || !xd[0] || !yd || !yd[0]) {

        return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :

          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
      }

      if (base) {
        logBase = 1;
        e = x.e - y.e;
      } else {
        base = BASE;
        logBase = LOG_BASE;
        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
      }

      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign);
      qd = q.d = [];

      // Result exponent may be one less than e.
      // The digit array of a Decimal from toStringBinary may have trailing zeros.
      for (i = 0; yd[i] == (xd[i] || 0); i++);

      if (yd[i] > (xd[i] || 0)) e--;

      if (pr == null) {
        sd = pr = Ctor.precision;
        rm = Ctor.rounding;
      } else if (dp) {
        sd = pr + (x.e - y.e) + 1;
      } else {
        sd = pr;
      }

      if (sd < 0) {
        qd.push(1);
        more = true;
      } else {

        // Convert precision in number of base 10 digits to base 1e7 digits.
        sd = sd / logBase + 2 | 0;
        i = 0;

        // divisor < 1e7
        if (yL == 1) {
          k = 0;
          yd = yd[0];
          sd++;

          // k is the carry.
          for (; (i < xL || k) && sd--; i++) {
            t = k * base + (xd[i] || 0);
            qd[i] = t / yd | 0;
            k = t % yd | 0;
          }

          more = k || i < xL;

        // divisor >= 1e7
        } else {

          // Normalise xd and yd so highest order digit of yd is >= base/2
          k = base / (yd[0] + 1) | 0;

          if (k > 1) {
            yd = multiplyInteger(yd, k, base);
            xd = multiplyInteger(xd, k, base);
            yL = yd.length;
            xL = xd.length;
          }

          xi = yL;
          rem = xd.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL;) rem[remL++] = 0;

          yz = yd.slice();
          yz.unshift(0);
          yd0 = yd[0];

          if (yd[1] >= base / 2) ++yd0;

          do {
            k = 0;

            // Compare divisor and remainder.
            cmp = compare(yd, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, k.
              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // k will be how many times the divisor goes into the current remainder.
              k = rem0 / yd0 | 0;

              //  Algorithm:
              //  1. product = divisor * trial digit (k)
              //  2. if product > remainder: product -= divisor, k--
              //  3. remainder -= product
              //  4. if product was < remainder at 2:
              //    5. compare new remainder and divisor
              //    6. If remainder > divisor: remainder -= divisor, k++

              if (k > 1) {
                if (k >= base) k = base - 1;

                // product = divisor * trial digit.
                prod = multiplyInteger(yd, k, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                cmp = compare(prod, rem, prodL, remL);

                // product > remainder.
                if (cmp == 1) {
                  k--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yd, prodL, base);
                }
              } else {

                // cmp is -1.
                // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
                // to avoid it. If k is 1 there is a need to compare yd and rem again below.
                if (k == 0) cmp = k = 1;
                prod = yd.slice();
              }

              prodL = prod.length;
              if (prodL < remL) prod.unshift(0);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);

              // If product was < previous remainder.
              if (cmp == -1) {
                remL = rem.length;

                // Compare divisor and new remainder.
                cmp = compare(yd, rem, yL, remL);

                // If divisor < new remainder, subtract divisor from remainder.
                if (cmp < 1) {
                  k++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yd, remL, base);
                }
              }

              remL = rem.length;
            } else if (cmp === 0) {
              k++;
              rem = [0];
            }    // if cmp === 1, k will be 0

            // Add the next digit, k, to the result array.
            qd[i++] = k;

            // Update the remainder.
            if (cmp && rem[0]) {
              rem[remL++] = xd[xi] || 0;
            } else {
              rem = [xd[xi]];
              remL = 1;
            }

          } while ((xi++ < xL || rem[0] !== void 0) && sd--);

          more = rem[0] !== void 0;
        }

        // Leading zero?
        if (!qd[0]) qd.shift();
      }

      // logBase is 1 when divide is being used for base conversion.
      if (logBase == 1) {
        q.e = e;
        inexact = more;
      } else {

        // To calculate q.e, first get the number of digits of qd[0].
        for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
        q.e = i + e * logBase - 1;

        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
      }

      return q;
    };
  })();


  /*
   * Round `x` to `sd` significant digits using rounding mode `rm`.
   * Check for over/under-flow.
   */
   function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi,
      Ctor = x.constructor;

    // Don't round if sd is null or undefined.
    out: if (sd != null) {
      xd = x.d;

      // Infinity/NaN.
      if (!xd) return x;

      // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
      // w: the word of xd containing rd, a base 1e7 number.
      // xdi: the index of w within xd.
      // digits: the number of digits of w.
      // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
      // they had leading zeros)
      // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

      // Get the length of the first word of the digits array xd.
      for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
      i = sd - digits;

      // Is the rounding digit in the first word of xd?
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];

        // Get the rounding digit at index j of w.
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {

            // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
            for (; k++ <= xdi;) xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];

          // Get the number of digits of w.
          for (digits = 1; k >= 10; k /= 10) digits++;

          // Get the index of rd within w.
          i %= LOG_BASE;

          // Get the index of rd within w, adjusted for leading zeros.
          // The number of leading zeros of w is given by LOG_BASE - digits.
          j = i - LOG_BASE + digits;

          // Get the rounding digit at index j of w.
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }

      // Are there any non-zero digits after the rounding digit?
      isTruncated = isTruncated || sd < 0 ||
        xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));

      // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
      // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
      // will give 714.

      roundUp = rm < 4
        ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
        : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
            rm == (x.s < 0 ? 8 : 7));

      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {

          // Convert sd to decimal places.
          sd -= x.e + 1;

          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {

          // Zero.
          xd[0] = x.e = 0;
        }

        return x;
      }

      // Remove excess digits.
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);

        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
        // j > 0 means i > number of leading zeros of w.
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }

      if (roundUp) {
        for (;;) {

          // Is the digit to be rounded up in the first word of xd?
          if (xdi == 0) {

            // i will be the length of xd[0] before k is added.
            for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10) k++;

            // if i != k the length has increased.
            if (i != k) {
              x.e++;
              if (xd[0] == BASE) xd[0] = 1;
            }

            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE) break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }

      // Remove trailing zeros.
      for (i = xd.length; xd[--i] === 0;) xd.pop();
    }

    if (external) {

      // Overflow?
      if (x.e > Ctor.maxE) {

        // Infinity.
        x.d = null;
        x.e = NaN;

      // Underflow?
      } else if (x.e < Ctor.minE) {

        // Zero.
        x.e = 0;
        x.d = [0];
        // Ctor.underflow = true;
      } // else Ctor.underflow = false;
    }

    return x;
  }


  function finiteToString(x, isExp, sd) {
    if (!x.isFinite()) return nonFiniteToString(x);
    var k,
      e = x.e,
      str = digitsToString(x.d),
      len = str.length;

    if (isExp) {
      if (sd && (k = sd - len) > 0) {
        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
      } else if (len > 1) {
        str = str.charAt(0) + '.' + str.slice(1);
      }

      str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
    } else if (e < 0) {
      str = '0.' + getZeroString(-e - 1) + str;
      if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
    } else {
      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
      if (sd && (k = sd - len) > 0) {
        if (e + 1 === len) str += '.';
        str += getZeroString(k);
      }
    }

    return str;
  }


  // Calculate the base 10 exponent from the base 1e7 exponent.
  function getBase10Exponent(digits, e) {
    var w = digits[0];

    // Add the number of digits of the first word of the digits array.
    for ( e *= LOG_BASE; w >= 10; w /= 10) e++;
    return e;
  }


  function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {

      // Reset global state in case the exception is caught.
      external = true;
      if (pr) Ctor.precision = pr;
      throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
  }


  function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
  }


  function getPrecision(digits) {
    var w = digits.length - 1,
      len = w * LOG_BASE + 1;

    w = digits[w];

    // If non-zero...
    if (w) {

      // Subtract the number of trailing zeros of the last word.
      for (; w % 10 == 0; w /= 10) len--;

      // Add the number of digits of the first word.
      for (w = digits[0]; w >= 10; w /= 10) len++;
    }

    return len;
  }


  function getZeroString(k) {
    var zs = '';
    for (; k--;) zs += '0';
    return zs;
  }


  /*
   * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
   * integer of type number.
   *
   * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
   *
   */
  function intPow(Ctor, x, n, pr) {
    var isTruncated,
      r = new Ctor(1),

      // Max n of 9007199254740991 takes 53 loop iterations.
      // Maximum digits array length; leaves [28, 34] guard digits.
      k = Math.ceil(pr / LOG_BASE + 4);

    external = false;

    for (;;) {
      if (n % 2) {
        r = r.times(x);
        if (truncate(r.d, k)) isTruncated = true;
      }

      n = mathfloor(n / 2);
      if (n === 0) {

        // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
        n = r.d.length - 1;
        if (isTruncated && r.d[n] === 0) ++r.d[n];
        break;
      }

      x = x.times(x);
      truncate(x.d, k);
    }

    external = true;

    return r;
  }


  function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
  }


  /*
   * Handle `max` and `min`. `ltgt` is 'lt' or 'gt'.
   */
  function maxOrMin(Ctor, args, ltgt) {
    var y,
      x = new Ctor(args[0]),
      i = 0;

    for (; ++i < args.length;) {
      y = new Ctor(args[i]);
      if (!y.s) {
        x = y;
        break;
      } else if (x[ltgt](y)) {
        x = y;
      }
    }

    return x;
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
   * digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
   * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(Infinity)  = Infinity
   *  exp(-Infinity) = 0
   *  exp(NaN)       = NaN
   *  exp(±0)        = 1
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   *  The result will always be correctly rounded.
   *
   */
  function naturalExponential(x, sd) {
    var denominator, guard, j, pow, sum, t, wpr,
      rep = 0,
      i = 0,
      k = 0,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // 0/NaN/Infinity?
    if (!x.d || !x.d[0] || x.e > 17) {

      return new Ctor(x.d
        ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0
        : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    t = new Ctor(0.03125);

    // while abs(x) >= 0.1
    while (x.e > -2) {

      // x = x / 2^5
      x = x.times(t);
      k += 5;
    }

    // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
    // necessary to ensure the first 4 rounding digits are correct.
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow = sum = new Ctor(1);
    Ctor.precision = wpr;

    for (;;) {
      pow = finalise(pow.times(x), wpr, 1);
      denominator = denominator.times(++i);
      t = sum.plus(divide(pow, denominator, wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        j = k;
        while (j--) sum = finalise(sum.times(sum), wpr, 1);

        // Check to see if the first 4 rounding digits are [49]999.
        // If so, repeat the summation with a higher precision, otherwise
        // e.g. with precision: 18, rounding: 1
        // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {

          if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += 10;
            denominator = pow = t = new Ctor(1);
            i = 0;
            rep++;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
    }
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
   * digits.
   *
   *  ln(-n)        = NaN
   *  ln(0)         = -Infinity
   *  ln(-0)        = -Infinity
   *  ln(1)         = 0
   *  ln(Infinity)  = Infinity
   *  ln(-Infinity) = NaN
   *  ln(NaN)       = NaN
   *
   *  ln(n) (n != 1) is non-terminating.
   *
   */
  function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,
      n = 1,
      guard = 10,
      x = y,
      xd = x.d,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // Is x negative or Infinity, NaN, 0 or 1?
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
      return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);

    if (Math.abs(e = x.e) < 1.5e15) {

      // Argument reduction.
      // The series converges faster the closer the argument is to 1, so using
      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
      // later be divided by this number, then separate out the power of 10 using
      // ln(a*10^b) = ln(a) + b*ln(10).

      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
      // max n is 6 (gives 0.7 - 1.3)
      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
        x = x.times(y);
        c = digitsToString(x.d);
        c0 = c.charAt(0);
        n++;
      }

      e = x.e;

      if (c0 > 1) {
        x = new Ctor('0.' + c);
        e++;
      } else {
        x = new Ctor(c0 + '.' + c.slice(1));
      }
    } else {

      // The argument reduction method above may result in overflow if the argument y is a massive
      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
      // function using ln(x*10^e) = ln(x) + e*ln(10).
      t = getLn10(Ctor, wpr + 2, pr).times(e + '');
      x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
      Ctor.precision = pr;

      return sd == null ? finalise(x, pr, rm, external = true) : x;
    }

    // x1 is x reduced to a value near 1.
    x1 = x;

    // Taylor series.
    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
    // where x = (y - 1)/(y + 1)    (|x| < 1)
    sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;

    for (;;) {
      numerator = finalise(numerator.times(x2), wpr, 1);
      t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        sum = sum.times(2);

        // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
        // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
        sum = divide(sum, new Ctor(n), wpr, 1);

        // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
        // been repeated previously) and the first 4 rounding digits 9999?
        // If so, restart the summation with a higher precision, otherwise
        // e.g. with precision: 12, rounding: 1
        // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {
          if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += guard;
            t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
            x2 = finalise(x.times(x), wpr, 1);
            denominator = rep = 1;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
      denominator += 2;
    }
  }


  // ±Infinity, NaN.
  function nonFiniteToString(x) {
    // Unsigned.
    return String(x.s * x.s / 0);
  }


  /*
   * Parse the value of a new Decimal `x` from string `str`.
   */
  function parseDecimal(x, str) {
    var e, i, len;

    // Decimal point?
    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

    // Exponential form?
    if ((i = str.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
    str = str.slice(i, len);

    if (str) {
      len -= i;
      x.e = e = e - i - 1;
      x.d = [];

      // Transform base

      // e is the base 10 exponent.
      // i is where to slice str to get the first word of the digits array.
      i = (e + 1) % LOG_BASE;
      if (e < 0) i += LOG_BASE;

      if (i < len) {
        if (i) x.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }

      for (; i--;) str += '0';
      x.d.push(+str);

      if (external) {

        // Overflow?
        if (x.e > x.constructor.maxE) {

          // Infinity.
          x.d = null;
          x.e = NaN;

        // Underflow?
        } else if (x.e < x.constructor.minE) {

          // Zero.
          x.e = 0;
          x.d = [0];
          // x.constructor.underflow = true;
        } // else x.constructor.underflow = false;
      }
    } else {

      // Zero.
      x.e = 0;
      x.d = [0];
    }

    return x;
  }


  /*
   * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
   */
  function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;

    if (str === 'Infinity' || str === 'NaN') {
      if (!+str) x.s = NaN;
      x.e = NaN;
      x.d = null;
      return x;
    }

    if (isHex.test(str))  {
      base = 16;
      str = str.toLowerCase();
    } else if (isBinary.test(str))  {
      base = 2;
    } else if (isOctal.test(str))  {
      base = 8;
    } else {
      throw Error(invalidArgument + str);
    }

    // Is there a binary exponent part?
    i = str.search(/p/i);

    if (i > 0) {
      p = +str.slice(i + 1);
      str = str.substring(2, i);
    } else {
      str = str.slice(2);
    }

    // Convert `str` as an integer then divide the result by `base` raised to a power such that the
    // fraction part will be restored.
    i = str.indexOf('.');
    isFloat = i >= 0;
    Ctor = x.constructor;

    if (isFloat) {
      str = str.replace('.', '');
      len = str.length;
      i = len - i;

      // log[10](16) = 1.2041... , log[10](88) = 1.9444....
      divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }

    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;

    // Remove trailing zeros.
    for (i = xe; xd[i] === 0; --i) xd.pop();
    if (i < 0) return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;

    // At what precision to perform the division to ensure exact conversion?
    // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
    // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
    // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
    // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
    // Therefore using 4 * the number of digits of str will always be enough.
    if (isFloat) x = divide(x, divisor, len * 4);

    // Multiply by the binary exponent part if present.
    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
    external = true;

    return x;
  }


  /*
   * sin(x) = x - x^3/3! + x^5/5! - ...
   * |x| < pi/2
   *
   */
  function sine(Ctor, x) {
    var k,
      len = x.d.length;

    if (len < 3) return taylorSeries(Ctor, 2, x, x);

    // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
    // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
    // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))

    // Estimate the optimum number of times to use the argument reduction.
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;

    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x);

    // Reverse argument reduction
    var sin2_x,
      d5 = new Ctor(5),
      d16 = new Ctor(16),
      d20 = new Ctor(20);
    for (; k--;) {
      sin2_x = x.times(x);
      x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }

    return x;
  }


  // Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
  function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2,
      i = 1,
      pr = Ctor.precision,
      k = Math.ceil(pr / LOG_BASE);

    external = false;
    x2 = x.times(x);
    u = new Ctor(y);

    for (;;) {
      t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
      u = isHyperbolic ? y.plus(t) : y.minus(t);
      y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
      t = u.plus(y);

      if (t.d[k] !== void 0) {
        for (j = k; t.d[j] === u.d[j] && j--;);
        if (j == -1) break;
      }

      j = u;
      u = y;
      y = t;
      t = j;
      i++;
    }

    external = true;
    t.d.length = k + 1;

    return t;
  }


  // Exponent e must be positive and non-zero.
  function tinyPow(b, e) {
    var n = b;
    while (--e) n *= b;
    return n;
  }


  // Return the absolute value of `x` reduced to less than or equal to half pi.
  function toLessThanHalfPi(Ctor, x) {
    var t,
      isNeg = x.s < 0,
      pi = getPi(Ctor, Ctor.precision, 1),
      halfPi = pi.times(0.5);

    x = x.abs();

    if (x.lte(halfPi)) {
      quadrant = isNeg ? 4 : 1;
      return x;
    }

    t = x.divToInt(pi);

    if (t.isZero()) {
      quadrant = isNeg ? 3 : 2;
    } else {
      x = x.minus(t.times(pi));

      // 0 <= x < pi
      if (x.lte(halfPi)) {
        quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
        return x;
      }

      quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
    }

    return x.minus(pi).abs();
  }


  /*
   * Return the value of Decimal `x` as a string in base `baseOut`.
   *
   * If the optional `sd` argument is present include a binary exponent suffix.
   */
  function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y,
      Ctor = x.constructor,
      isExp = sd !== void 0;

    if (isExp) {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    } else {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    }

    if (!x.isFinite()) {
      str = nonFiniteToString(x);
    } else {
      str = finiteToString(x);
      i = str.indexOf('.');

      // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
      // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
      // minBinaryExponent = floor(decimalExponent * log[2](10))
      // log[2](10) = 3.321928094887362347870319429489390175864

      if (isExp) {
        base = 2;
        if (baseOut == 16) {
          sd = sd * 4 - 3;
        } else if (baseOut == 8) {
          sd = sd * 3 - 2;
        }
      } else {
        base = baseOut;
      }

      // Convert the number as an integer then divide the result by its base raised to a power such
      // that the fraction part will be restored.

      // Non-integer.
      if (i >= 0) {
        str = str.replace('.', '');
        y = new Ctor(1);
        y.e = str.length - i;
        y.d = convertBase(finiteToString(y), 10, base);
        y.e = y.d.length;
      }

      xd = convertBase(str, 10, base);
      e = len = xd.length;

      // Remove trailing zeros.
      for (; xd[--len] == 0;) xd.pop();

      if (!xd[0]) {
        str = isExp ? '0p+0' : '0';
      } else {
        if (i < 0) {
          e--;
        } else {
          x = new Ctor(x);
          x.d = xd;
          x.e = e;
          x = divide(x, y, sd, rm, 0, base);
          xd = x.d;
          e = x.e;
          roundUp = inexact;
        }

        // The rounding digit, i.e. the digit after the digit that may be rounded up.
        i = xd[sd];
        k = base / 2;
        roundUp = roundUp || xd[sd + 1] !== void 0;

        roundUp = rm < 4
          ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))
          : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||
            rm === (x.s < 0 ? 8 : 7));

        xd.length = sd;

        if (roundUp) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (; ++xd[--sd] > base - 1;) {
            xd[sd] = 0;
            if (!sd) {
              ++e;
              xd.unshift(1);
            }
          }
        }

        // Determine trailing zeros.
        for (len = xd.length; !xd[len - 1]; --len);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);

        // Add binary exponent suffix?
        if (isExp) {
          if (len > 1) {
            if (baseOut == 16 || baseOut == 8) {
              i = baseOut == 16 ? 4 : 3;
              for (--len; len % i; len++) str += '0';
              xd = convertBase(str, base, baseOut);
              for (len = xd.length; !xd[len - 1]; --len);

              // xd[0] will always be be 1
              for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);
            } else {
              str = str.charAt(0) + '.' + str.slice(1);
            }
          }

          str =  str + (e < 0 ? 'p' : 'p+') + e;
        } else if (e < 0) {
          for (; ++e;) str = '0' + str;
          str = '0.' + str;
        } else {
          if (++e > len) for (e -= len; e-- ;) str += '0';
          else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
        }
      }

      str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
    }

    return x.s < 0 ? '-' + str : str;
  }


  // Does not strip trailing zeros.
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }


  // Decimal methods


  /*
   *  abs
   *  acos
   *  acosh
   *  add
   *  asin
   *  asinh
   *  atan
   *  atanh
   *  atan2
   *  cbrt
   *  ceil
   *  clone
   *  config
   *  cos
   *  cosh
   *  div
   *  exp
   *  floor
   *  hypot
   *  ln
   *  log
   *  log2
   *  log10
   *  max
   *  min
   *  mod
   *  mul
   *  pow
   *  random
   *  round
   *  set
   *  sign
   *  sin
   *  sinh
   *  sqrt
   *  sub
   *  tan
   *  tanh
   *  trunc
   */


  /*
   * Return a new Decimal whose value is the absolute value of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function abs(x) {
    return new this(x).abs();
  }


  /*
   * Return a new Decimal whose value is the arccosine in radians of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function acos(x) {
    return new this(x).acos();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function acosh(x) {
    return new this(x).acosh();
  }


  /*
   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function add(x, y) {
    return new this(x).plus(y);
  }


  /*
   * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function asin(x) {
    return new this(x).asin();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function asinh(x) {
    return new this(x).asinh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function atan(x) {
    return new this(x).atan();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function atanh(x) {
    return new this(x).atanh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi, pi]
   *
   * y {number|string|Decimal} The y-coordinate.
   * x {number|string|Decimal} The x-coordinate.
   *
   * atan2(±0, -0)               = ±pi
   * atan2(±0, +0)               = ±0
   * atan2(±0, -x)               = ±pi for x > 0
   * atan2(±0, x)                = ±0 for x > 0
   * atan2(-y, ±0)               = -pi/2 for y > 0
   * atan2(y, ±0)                = pi/2 for y > 0
   * atan2(±y, -Infinity)        = ±pi for finite y > 0
   * atan2(±y, +Infinity)        = ±0 for finite y > 0
   * atan2(±Infinity, x)         = ±pi/2 for finite x
   * atan2(±Infinity, -Infinity) = ±3*pi/4
   * atan2(±Infinity, +Infinity) = ±pi/4
   * atan2(NaN, x) = NaN
   * atan2(y, NaN) = NaN
   *
   */
  function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r,
      pr = this.precision,
      rm = this.rounding,
      wpr = pr + 4;

    // Either NaN
    if (!y.s || !x.s) {
      r = new this(NaN);

    // Both ±Infinity
    } else if (!y.d && !x.d) {
      r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
      r.s = y.s;

    // x is ±Infinity or y is ±0
    } else if (!x.d || y.isZero()) {
      r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
      r.s = y.s;

    // y is ±Infinity or x is ±0
    } else if (!y.d || x.isZero()) {
      r = getPi(this, wpr, 1).times(0.5);
      r.s = y.s;

    // Both non-zero and finite
    } else if (x.s < 0) {
      this.precision = wpr;
      this.rounding = 1;
      r = this.atan(divide(y, x, wpr, 1));
      x = getPi(this, wpr, 1);
      this.precision = pr;
      this.rounding = rm;
      r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
      r = this.atan(divide(y, x, wpr, 1));
    }

    return r;
  }


  /*
   * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function cbrt(x) {
    return new this(x).cbrt();
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
   *
   * x {number|string|Decimal}
   *
   */
  function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
  }


  /*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *   maxE       {number}
   *   minE       {number}
   *   modulo     {number}
   *   crypto     {boolean|number}
   *   defaults   {true}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */
  function config(obj) {
    if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
    var i, p, v,
      useDefaults = obj.defaults === true,
      ps = [
        'precision', 1, MAX_DIGITS,
        'rounding', 0, 8,
        'toExpNeg', -EXP_LIMIT, 0,
        'toExpPos', 0, EXP_LIMIT,
        'maxE', 0, EXP_LIMIT,
        'minE', -EXP_LIMIT, 0,
        'modulo', 0, 9
      ];

    for (i = 0; i < ps.length; i += 3) {
      if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
      if ((v = obj[p]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
        else throw Error(invalidArgument + p + ': ' + v);
      }
    }

    if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (v === true || v === false || v === 0 || v === 1) {
        if (v) {
          if (typeof crypto != 'undefined' && crypto &&
            (crypto.getRandomValues || crypto.randomBytes)) {
            this[p] = true;
          } else {
            throw Error(cryptoUnavailable);
          }
        } else {
          this[p] = false;
        }
      } else {
        throw Error(invalidArgument + p + ': ' + v);
      }
    }

    return this;
  }


  /*
   * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cos(x) {
    return new this(x).cos();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cosh(x) {
    return new this(x).cosh();
  }


  /*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */
  function clone(obj) {
    var i, p, ps;

    /*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * v {number|string|Decimal} A numeric value.
     *
     */
    function Decimal(v) {
      var e, i, t,
        x = this;

      // Decimal called without new.
      if (!(x instanceof Decimal)) return new Decimal(v);

      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
      // which points to Object.
      x.constructor = Decimal;

      // Duplicate.
      if (v instanceof Decimal) {
        x.s = v.s;

        if (external) {
          if (!v.d || v.e > Decimal.maxE) {

            // Infinity.
            x.e = NaN;
            x.d = null;
          } else if (v.e < Decimal.minE) {

            // Zero.
            x.e = 0;
            x.d = [0];
          } else {
            x.e = v.e;
            x.d = v.d.slice();
          }
        } else {
          x.e = v.e;
          x.d = v.d ? v.d.slice() : v.d;
        }

        return;
      }

      t = typeof v;

      if (t === 'number') {
        if (v === 0) {
          x.s = 1 / v < 0 ? -1 : 1;
          x.e = 0;
          x.d = [0];
          return;
        }

        if (v < 0) {
          v = -v;
          x.s = -1;
        } else {
          x.s = 1;
        }

        // Fast path for small integers.
        if (v === ~~v && v < 1e7) {
          for (e = 0, i = v; i >= 10; i /= 10) e++;

          if (external) {
            if (e > Decimal.maxE) {
              x.e = NaN;
              x.d = null;
            } else if (e < Decimal.minE) {
              x.e = 0;
              x.d = [0];
            } else {
              x.e = e;
              x.d = [v];
            }
          } else {
            x.e = e;
            x.d = [v];
          }

          return;

        // Infinity, NaN.
        } else if (v * 0 !== 0) {
          if (!v) x.s = NaN;
          x.e = NaN;
          x.d = null;
          return;
        }

        return parseDecimal(x, v.toString());

      } else if (t !== 'string') {
        throw Error(invalidArgument + v);
      }

      // Minus sign?
      if ((i = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        // Plus sign?
        if (i === 43) v = v.slice(1);
        x.s = 1;
      }

      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }

    Decimal.prototype = P;

    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;
    Decimal.EUCLID = 9;

    Decimal.config = Decimal.set = config;
    Decimal.clone = clone;
    Decimal.isDecimal = isDecimalInstance;

    Decimal.abs = abs;
    Decimal.acos = acos;
    Decimal.acosh = acosh;        // ES6
    Decimal.add = add;
    Decimal.asin = asin;
    Decimal.asinh = asinh;        // ES6
    Decimal.atan = atan;
    Decimal.atanh = atanh;        // ES6
    Decimal.atan2 = atan2;
    Decimal.cbrt = cbrt;          // ES6
    Decimal.ceil = ceil;
    Decimal.cos = cos;
    Decimal.cosh = cosh;          // ES6
    Decimal.div = div;
    Decimal.exp = exp;
    Decimal.floor = floor;
    Decimal.hypot = hypot;        // ES6
    Decimal.ln = ln;
    Decimal.log = log;
    Decimal.log10 = log10;        // ES6
    Decimal.log2 = log2;          // ES6
    Decimal.max = max;
    Decimal.min = min;
    Decimal.mod = mod;
    Decimal.mul = mul;
    Decimal.pow = pow;
    Decimal.random = random;
    Decimal.round = round;
    Decimal.sign = sign;          // ES6
    Decimal.sin = sin;
    Decimal.sinh = sinh;          // ES6
    Decimal.sqrt = sqrt;
    Decimal.sub = sub;
    Decimal.tan = tan;
    Decimal.tanh = tanh;          // ES6
    Decimal.trunc = trunc;        // ES6

    if (obj === void 0) obj = {};
    if (obj) {
      if (obj.defaults !== true) {
        ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
        for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
      }
    }

    Decimal.config(obj);

    return Decimal;
  }


  /*
   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function div(x, y) {
    return new this(x).div(y);
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The power to which to raise the base of the natural log.
   *
   */
  function exp(x) {
    return new this(x).exp();
  }


  /*
   * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
   *
   * x {number|string|Decimal}
   *
   */
  function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
  }


  /*
   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
   *
   * arguments {number|string|Decimal}
   *
   */
  function hypot() {
    var i, n,
      t = new this(0);

    external = false;

    for (i = 0; i < arguments.length;) {
      n = new this(arguments[i++]);
      if (!n.d) {
        if (n.s) {
          external = true;
          return new this(1 / 0);
        }
        t = n;
      } else if (t.d) {
        t = t.plus(n.times(n));
      }
    }

    external = true;

    return t.sqrt();
  }


  /*
   * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
   * otherwise return false.
   *
   */
  function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.name === '[object Decimal]' || false;
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function ln(x) {
    return new this(x).ln();
  }


  /*
   * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
   * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * log[y](x)
   *
   * x {number|string|Decimal} The argument of the logarithm.
   * y {number|string|Decimal} The base of the logarithm.
   *
   */
  function log(x, y) {
    return new this(x).log(y);
  }


  /*
   * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log2(x) {
    return new this(x).log(2);
  }


  /*
   * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log10(x) {
    return new this(x).log(10);
  }


  /*
   * Return a new Decimal whose value is the maximum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function max() {
    return maxOrMin(this, arguments, 'lt');
  }


  /*
   * Return a new Decimal whose value is the minimum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function min() {
    return maxOrMin(this, arguments, 'gt');
  }


  /*
   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mod(x, y) {
    return new this(x).mod(y);
  }


  /*
   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mul(x, y) {
    return new this(x).mul(y);
  }


  /*
   * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The base.
   * y {number|string|Decimal} The exponent.
   *
   */
  function pow(x, y) {
    return new this(x).pow(y);
  }


  /*
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
   * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
   * are produced).
   *
   * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
   *
   */
  function random(sd) {
    var d, e, k, n,
      i = 0,
      r = new this(1),
      rd = [];

    if (sd === void 0) sd = this.precision;
    else checkInt32(sd, 1, MAX_DIGITS);

    k = Math.ceil(sd / LOG_BASE);

    if (!this.crypto) {
      for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;

    // Browsers supporting crypto.getRandomValues.
    } else if (crypto.getRandomValues) {
      d = crypto.getRandomValues(new Uint32Array(k));

      for (; i < k;) {
        n = d[i];

        // 0 <= n < 4294967296
        // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
        if (n >= 4.29e9) {
          d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
        } else {

          // 0 <= n <= 4289999999
          // 0 <= (n % 1e7) <= 9999999
          rd[i++] = n % 1e7;
        }
      }

    // Node.js supporting crypto.randomBytes.
    } else if (crypto.randomBytes) {

      // buffer
      d = crypto.randomBytes(k *= 4);

      for (; i < k;) {

        // 0 <= n < 2147483648
        n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);

        // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
        if (n >= 2.14e9) {
          crypto.randomBytes(4).copy(d, i);
        } else {

          // 0 <= n <= 2139999999
          // 0 <= (n % 1e7) <= 9999999
          rd.push(n % 1e7);
          i += 4;
        }
      }

      i = k / 4;
    } else {
      throw Error(cryptoUnavailable);
    }

    k = rd[--i];
    sd %= LOG_BASE;

    // Convert trailing digits to zeros according to sd.
    if (k && sd) {
      n = mathpow(10, LOG_BASE - sd);
      rd[i] = (k / n | 0) * n;
    }

    // Remove trailing words which are zero.
    for (; rd[i] === 0; i--) rd.pop();

    // Zero?
    if (i < 0) {
      e = 0;
      rd = [0];
    } else {
      e = -1;

      // Remove leading words which are zero and adjust exponent accordingly.
      for (; rd[0] === 0; e -= LOG_BASE) rd.shift();

      // Count the digits of the first word of rd to determine leading zeros.
      for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;

      // Adjust the exponent for leading zeros of the first word of rd.
      if (k < LOG_BASE) e -= LOG_BASE - k;
    }

    r.e = e;
    r.d = rd;

    return r;
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
   *
   * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
   *
   * x {number|string|Decimal}
   *
   */
  function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
  }


  /*
   * Return
   *   1    if x > 0,
   *  -1    if x < 0,
   *   0    if x is 0,
   *  -0    if x is -0,
   *   NaN  otherwise
   *
   * x {number|string|Decimal}
   *
   */
  function sign(x) {
    x = new this(x);
    return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
  }


  /*
   * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sin(x) {
    return new this(x).sin();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sinh(x) {
    return new this(x).sinh();
  }


  /*
   * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function sqrt(x) {
    return new this(x).sqrt();
  }


  /*
   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function sub(x, y) {
    return new this(x).sub(y);
  }


  /*
   * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tan(x) {
    return new this(x).tan();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tanh(x) {
    return new this(x).tanh();
  }


  /*
   * Return a new Decimal whose value is `x` truncated to an integer.
   *
   * x {number|string|Decimal}
   *
   */
  function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
  }


  // Create and configure initial Decimal constructor.
  Decimal = clone(DEFAULTS);

  Decimal['default'] = Decimal.Decimal = Decimal;

  // Create the internal constants from their string values.
  LN10 = new Decimal(LN10);
  PI = new Decimal(PI);


  // Export.


  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Decimal;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other environments that support module.exports.
  } else {}
})(this);


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = __webpack_require__(162);
/**
 * math.js factory function. Creates a new instance of math.js
 *
 * @param {Object} [config] Available configuration options:
 *                            {number} epsilon
 *                              Minimum relative difference between two
 *                              compared values, used by all comparison functions.
 *                            {string} matrix
 *                              A string 'matrix' (default) or 'array'.
 *                            {string} number
 *                              A string 'number' (default), 'bignumber', or
 *                              'fraction'
 *                            {number} precision
 *                              The number of significant digits for BigNumbers.
 *                              Not applicable for Numbers.
 *                            {boolean} predictable
 *                              Predictable output type of functions. When true,
 *                              output type depends only on the input types. When
 *                              false (default), output type can vary depending
 *                              on input values. For example `math.sqrt(-4)`
 *                              returns `complex('2i')` when predictable is false, and
 *                              returns `NaN` when true.
 */


function create(config) {
  // create a new math.js instance
  var math = core.create(config);
  math.create = create; // import data types, functions, constants, expression parser, etc.

  math['import'](__webpack_require__(168));
  return math;
} // return a new instance of math.js


module.exports = create();

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(163);

var isFactory = __webpack_require__(5).isFactory;

var typedFactory = __webpack_require__(103);

var emitter = __webpack_require__(104);

var importFactory = __webpack_require__(166);

var configFactory = __webpack_require__(167);
/**
 * Math.js core. Creates a new, empty math.js instance
 * @param {Object} [options] Available options:
 *                            {number} epsilon
 *                              Minimum relative difference between two
 *                              compared values, used by all comparison functions.
 *                            {string} matrix
 *                              A string 'Matrix' (default) or 'Array'.
 *                            {string} number
 *                              A string 'number' (default), 'BigNumber', or 'Fraction'
 *                            {number} precision
 *                              The number of significant digits for BigNumbers.
 *                              Not applicable for Numbers.
 *                            {boolean} predictable
 *                              Predictable output type of functions. When true,
 *                              output type depends only on the input types. When
 *                              false (default), output type can vary depending
 *                              on input values. For example `math.sqrt(-4)`
 *                              returns `complex('2i')` when predictable is false, and
 *                              returns `NaN` when true.
 *                            {string} randomSeed
 *                              Random seed for seeded pseudo random number generator.
 *                              Set to null to randomly seed.
 * @returns {Object} Returns a bare-bone math.js instance containing
 *                   functions:
 *                   - `import` to add new functions
 *                   - `config` to change configuration
 *                   - `on`, `off`, `once`, `emit` for events
 */


exports.create = function create(options) {
  // simple test for ES5 support
  if (typeof Object.create !== 'function') {
    throw new Error('ES5 not supported by this JavaScript engine. ' + 'Please load the es5-shim and es5-sham library for compatibility.');
  } // cached factories and instances


  var factories = [];
  var instances = []; // create a namespace for the mathjs instance, and attach emitter functions

  var math = emitter.mixin({});
  math.type = {};
  math.expression = {
    transform: {},
    mathWithTransform: {} // create a new typed instance

  };
  math.typed = typedFactory.create(math.type); // create configuration options. These are private

  var _config = {
    // minimum relative difference between two compared values,
    // used by all comparison functions
    epsilon: 1e-12,
    // type of default matrix output. Choose 'matrix' (default) or 'array'
    matrix: 'Matrix',
    // type of default number output. Choose 'number' (default) 'BigNumber', or 'Fraction
    number: 'number',
    // number of significant digits in BigNumbers
    precision: 64,
    // predictable output type of functions. When true, output type depends only
    // on the input types. When false (default), output type can vary depending
    // on input values. For example `math.sqrt(-4)` returns `complex('2i')` when
    // predictable is false, and returns `NaN` when true.
    predictable: false,
    // random seed for seeded pseudo random number generation
    // null = randomly seed
    randomSeed: null
    /**
     * Load a function or data type from a factory.
     * If the function or data type already exists, the existing instance is
     * returned.
     * @param {{type: string, name: string, factory: Function}} factory
     * @returns {*}
     */

  };

  function load(factory) {
    if (!isFactory(factory)) {
      throw new Error('Factory object with properties `type`, `name`, and `factory` expected');
    }

    var index = factories.indexOf(factory);
    var instance;

    if (index === -1) {
      // doesn't yet exist
      if (factory.math === true) {
        // pass with math namespace
        instance = factory.factory(math.type, _config, load, math.typed, math);
      } else {
        instance = factory.factory(math.type, _config, load, math.typed);
      } // append to the cache


      factories.push(factory);
      instances.push(instance);
    } else {
      // already existing function, return the cached instance
      instance = instances[index];
    }

    return instance;
  } // load the import and config functions


  math['import'] = load(importFactory);
  math['config'] = load(configFactory);
  math.expression.mathWithTransform['config'] = math['config']; // apply options

  if (options) {
    math.config(options);
  }

  return math;
};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

// TODO: remove these polyfills as soon as we have a build process that transpiles the code to ES5
// Polyfill for IE 11 (Number.isFinite is used in `complex.js`)
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
Number.isFinite = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value);
}; // Polyfill for IE 11
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN


Number.isNaN = Number.isNaN || function (value) {
  return value !== value; // eslint-disable-line no-self-compare
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * typed-function
 *
 * Type checking for JavaScript functions
 *
 * https://github.com/josdejong/typed-function
 */


(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  function ok () {
    return true;
  }

  function notOk () {
    return false;
  }

  function undef () {
    return undefined;
  }

  /**
   * @typedef {{
   *   params: Param[],
   *   fn: function
   * }} Signature
   *
   * @typedef {{
   *   types: Type[],
   *   restParam: boolean
   * }} Param
   *
   * @typedef {{
   *   name: string,
   *   typeIndex: number,
   *   test: function,
   *   conversion?: ConversionDef,
   *   conversionIndex: number,
   * }} Type
   *
   * @typedef {{
   *   from: string,
   *   to: string,
   *   convert: function (*) : *
   * }} ConversionDef
   *
   * @typedef {{
   *   name: string,
   *   test: function(*) : boolean
   * }} TypeDef
   */

  // create a new instance of typed-function
  function create () {
    // data type tests
    var _types = [
      { name: 'number',    test: function (x) { return typeof x === 'number' } },
      { name: 'string',    test: function (x) { return typeof x === 'string' } },
      { name: 'boolean',   test: function (x) { return typeof x === 'boolean' } },
      { name: 'Function',  test: function (x) { return typeof x === 'function'} },
      { name: 'Array',     test: Array.isArray },
      { name: 'Date',      test: function (x) { return x instanceof Date } },
      { name: 'RegExp',    test: function (x) { return x instanceof RegExp } },
      { name: 'Object',    test: function (x) {
        return typeof x === 'object' && x.constructor === Object
      }},
      { name: 'null',      test: function (x) { return x === null } },
      { name: 'undefined', test: function (x) { return x === undefined } }
    ];

    var anyType = {
      name: 'any',
      test: ok
    }

    // types which need to be ignored
    var _ignore = [];

    // type conversions
    var _conversions = [];

    // This is a temporary object, will be replaced with a typed function at the end
    var typed = {
      types: _types,
      conversions: _conversions,
      ignore: _ignore
    };

    /**
     * Find the test function for a type
     * @param {String} typeName
     * @return {TypeDef} Returns the type definition when found,
     *                    Throws a TypeError otherwise
     */
    function findTypeByName (typeName) {
      var entry = findInArray(typed.types, function (entry) {
        return entry.name === typeName;
      });

      if (entry) {
        return entry;
      }

      if (typeName === 'any') { // special baked-in case 'any'
        return anyType;
      }

      var hint = findInArray(typed.types, function (entry) {
        return entry.name.toLowerCase() === typeName.toLowerCase();
      });

      throw new TypeError('Unknown type "' + typeName + '"' +
          (hint ? ('. Did you mean "' + hint.name + '"?') : ''));
    }

    /**
     * Find the index of a type definition. Handles special case 'any'
     * @param {TypeDef} type
     * @return {number}
     */
    function findTypeIndex(type) {
      if (type === anyType) {
        return 999;
      }

      return typed.types.indexOf(type);
    }

    /**
     * Find a type that matches a value.
     * @param {*} value
     * @return {string} Returns the name of the first type for which
     *                  the type test matches the value.
     */
    function findTypeName(value) {
      var entry = findInArray(typed.types, function (entry) {
        return entry.test(value);
      });

      if (entry) {
        return entry.name;
      }

      throw new TypeError('Value has unknown type. Value: ' + value);
    }

    /**
     * Find a specific signature from a (composed) typed function, for example:
     *
     *   typed.find(fn, ['number', 'string'])
     *   typed.find(fn, 'number, string')
     *
     * Function find only only works for exact matches.
     *
     * @param {Function} fn                   A typed-function
     * @param {string | string[]} signature   Signature to be found, can be
     *                                        an array or a comma separated string.
     * @return {Function}                     Returns the matching signature, or
     *                                        throws an error when no signature
     *                                        is found.
     */
    function find (fn, signature) {
      if (!fn.signatures) {
        throw new TypeError('Function is no typed-function');
      }

      // normalize input
      var arr;
      if (typeof signature === 'string') {
        arr = signature.split(',');
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].trim();
        }
      }
      else if (Array.isArray(signature)) {
        arr = signature;
      }
      else {
        throw new TypeError('String array or a comma separated string expected');
      }

      var str = arr.join(',');

      // find an exact match
      var match = fn.signatures[str];
      if (match) {
        return match;
      }

      // TODO: extend find to match non-exact signatures

      throw new TypeError('Signature not found (signature: ' + (fn.name || 'unnamed') + '(' + arr.join(', ') + '))');
    }

    /**
     * Convert a given value to another data type.
     * @param {*} value
     * @param {string} type
     */
    function convert (value, type) {
      var from = findTypeName(value);

      // check conversion is needed
      if (type === from) {
        return value;
      }

      for (var i = 0; i < typed.conversions.length; i++) {
        var conversion = typed.conversions[i];
        if (conversion.from === from && conversion.to === type) {
          return conversion.convert(value);
        }
      }

      throw new Error('Cannot convert from ' + from + ' to ' + type);
    }
    
    /**
     * Stringify parameters in a normalized way
     * @param {Param[]} params
     * @return {string}
     */
    function stringifyParams (params) {
      return params
          .map(function (param) {
            var typeNames = param.types.map(getTypeName);

            return (param.restParam ? '...' : '') + typeNames.join('|');
          })
          .join(',');
    }

    /**
     * Parse a parameter, like "...number | boolean"
     * @param {string} param
     * @param {ConversionDef[]} conversions
     * @return {Param} param
     */
    function parseParam (param, conversions) {
      var restParam = param.indexOf('...') === 0;
      var types = (!restParam)
          ? param
          : (param.length > 3)
              ? param.slice(3)
              : 'any';

      var typeNames = types.split('|').map(trim)
          .filter(notEmpty)
          .filter(notIgnore);

      var matchingConversions = filterConversions(conversions, typeNames);

      var exactTypes = typeNames.map(function (typeName) {
        var type = findTypeByName(typeName);

        return {
          name: typeName,
          typeIndex: findTypeIndex(type),
          test: type.test,
          conversion: null,
          conversionIndex: -1
        };
      });

      var convertibleTypes = matchingConversions.map(function (conversion) {
        var type = findTypeByName(conversion.from);

        return {
          name: conversion.from,
          typeIndex: findTypeIndex(type),
          test: type.test,
          conversion: conversion,
          conversionIndex: conversions.indexOf(conversion)
        };
      });

      return {
        types: exactTypes.concat(convertibleTypes),
        restParam: restParam
      };
    }

    /**
     * Parse a signature with comma separated parameters,
     * like "number | boolean, ...string"
     * @param {string} signature
     * @param {function} fn
     * @param {ConversionDef[]} conversions
     * @return {Signature | null} signature
     */
    function parseSignature (signature, fn, conversions) {
      var params = [];

      if (signature.trim() !== '') {
        params = signature
            .split(',')
            .map(trim)
            .map(function (param, index, array) {
              var parsedParam = parseParam(param, conversions);

              if (parsedParam.restParam && (index !== array.length - 1)) {
                throw new SyntaxError('Unexpected rest parameter "' + param + '": ' +
                    'only allowed for the last parameter');
              }

              return parsedParam;
          });
      }

      if (params.some(isInvalidParam)) {
        // invalid signature: at least one parameter has no types
        // (they may have been filtered)
        return null;
      }

      return {
        params: params,
        fn: fn
      };
    }

    /**
     * Test whether a set of params contains a restParam
     * @param {Param[]} params
     * @return {boolean} Returns true when the last parameter is a restParam
     */
    function hasRestParam(params) {
      var param = last(params)
      return param ? param.restParam : false;
    }

    /**
     * Test whether a parameter contains conversions
     * @param {Param} param
     * @return {boolean} Returns true when at least one of the parameters
     *                   contains a conversion.
     */
    function hasConversions(param) {
      return param.types.some(function (type) {
        return type.conversion != null;
      });
    }

    /**
     * Create a type test for a single parameter, which can have one or multiple
     * types.
     * @param {Param} param
     * @return {function(x: *) : boolean} Returns a test function
     */
    function compileTest(param) {
      if (!param || param.types.length === 0) {
        // nothing to do
        return ok;
      }
      else if (param.types.length === 1) {
        return findTypeByName(param.types[0].name).test;
      }
      else if (param.types.length === 2) {
        var test0 = findTypeByName(param.types[0].name).test;
        var test1 = findTypeByName(param.types[1].name).test;
        return function or(x) {
          return test0(x) || test1(x);
        }
      }
      else { // param.types.length > 2
        var tests = param.types.map(function (type) {
          return findTypeByName(type.name).test;
        })
        return function or(x) {
          for (var i = 0; i < tests.length; i++) {
            if (tests[i](x)) {
              return true;
            }
          }
          return false;
        }
      }
    }

    /**
     * Create a test for all parameters of a signature
     * @param {Param[]} params
     * @return {function(args: Array<*>) : boolean}
     */
    function compileTests(params) {
      var tests, test0, test1;

      if (hasRestParam(params)) {
        // variable arguments like '...number'
        tests = initial(params).map(compileTest);
        var varIndex = tests.length;
        var lastTest = compileTest(last(params));
        var testRestParam = function (args) {
          for (var i = varIndex; i < args.length; i++) {
            if (!lastTest(args[i])) {
              return false;
            }
          }
          return true;
        }

        return function testArgs(args) {
          for (var i = 0; i < tests.length; i++) {
            if (!tests[i](args[i])) {
              return false;
            }
          }
          return testRestParam(args) && (args.length >= varIndex + 1);
        };
      }
      else {
        // no variable arguments
        if (params.length === 0) {
          return function testArgs(args) {
            return args.length === 0;
          };
        }
        else if (params.length === 1) {
          test0 = compileTest(params[0]);
          return function testArgs(args) {
            return test0(args[0]) && args.length === 1;
          };
        }
        else if (params.length === 2) {
          test0 = compileTest(params[0]);
          test1 = compileTest(params[1]);
          return function testArgs(args) {
            return test0(args[0]) && test1(args[1]) && args.length === 2;
          };
        }
        else { // arguments.length > 2
          tests = params.map(compileTest);
          return function testArgs(args) {
            for (var i = 0; i < tests.length; i++) {
              if (!tests[i](args[i])) {
                return false;
              }
            }
            return args.length === tests.length;
          };
        }
      }
    }

    /**
     * Find the parameter at a specific index of a signature.
     * Handles rest parameters.
     * @param {Signature} signature
     * @param {number} index
     * @return {Param | null} Returns the matching parameter when found,
     *                        null otherwise.
     */
    function getParamAtIndex(signature, index) {
      return index < signature.params.length
          ? signature.params[index]
          : hasRestParam(signature.params)
              ? last(signature.params)
              : null
    }

    /**
     * Get all type names of a parameter
     * @param {Signature} signature
     * @param {number} index
     * @param {boolean} excludeConversions
     * @return {string[]} Returns an array with type names
     */
    function getExpectedTypeNames (signature, index, excludeConversions) {
      var param = getParamAtIndex(signature, index);
      var types = param
          ? excludeConversions
                  ? param.types.filter(isExactType)
                  : param.types
          : [];

      return types.map(getTypeName);
    }

    /**
     * Returns the name of a type
     * @param {Type} type
     * @return {string} Returns the type name
     */
    function getTypeName(type) {
      return type.name;
    }

    /**
     * Test whether a type is an exact type or conversion
     * @param {Type} type
     * @return {boolean} Returns true when
     */
    function isExactType(type) {
      return type.conversion === null || type.conversion === undefined;
    }

    /**
     * Helper function for creating error messages: create an array with
     * all available types on a specific argument index.
     * @param {Signature[]} signatures
     * @param {number} index
     * @return {string[]} Returns an array with available types
     */
    function mergeExpectedParams(signatures, index) {
      var typeNames = uniq(flatMap(signatures, function (signature) {
        return getExpectedTypeNames(signature, index, false);
      }));

      return (typeNames.indexOf('any') !== -1) ? ['any'] : typeNames;
    }

    /**
     * Create
     * @param {string} name             The name of the function
     * @param {array.<*>} args          The actual arguments passed to the function
     * @param {Signature[]} signatures  A list with available signatures
     * @return {TypeError} Returns a type error with additional data
     *                     attached to it in the property `data`
     */
    function createError(name, args, signatures) {
      var err, expected;
      var _name = name || 'unnamed';

      // test for wrong type at some index
      var matchingSignatures = signatures;
      var index;
      for (index = 0; index < args.length; index++) {
        var nextMatchingDefs = matchingSignatures.filter(function (signature) {
          var test = compileTest(getParamAtIndex(signature, index));
          return (index < signature.params.length || hasRestParam(signature.params)) &&
              test(args[index]);
        });

        if (nextMatchingDefs.length === 0) {
          // no matching signatures anymore, throw error "wrong type"
          expected = mergeExpectedParams(matchingSignatures, index);
          if (expected.length > 0) {
            var actualType = findTypeName(args[index]);

            err = new TypeError('Unexpected type of argument in function ' + _name +
                ' (expected: ' + expected.join(' or ') +
                ', actual: ' + actualType + ', index: ' + index + ')');
            err.data = {
              category: 'wrongType',
              fn: _name,
              index: index,
              actual: actualType,
              expected: expected
            }
            return err;
          }
        }
        else {
          matchingSignatures = nextMatchingDefs;
        }
      }

      // test for too few arguments
      var lengths = matchingSignatures.map(function (signature) {
        return hasRestParam(signature.params) ? Infinity : signature.params.length;
      });
      if (args.length < Math.min.apply(null, lengths)) {
        expected = mergeExpectedParams(matchingSignatures, index);
        err = new TypeError('Too few arguments in function ' + _name +
            ' (expected: ' + expected.join(' or ') +
            ', index: ' + args.length + ')');
        err.data = {
          category: 'tooFewArgs',
          fn: _name,
          index: args.length,
          expected: expected
        }
        return err;
      }

      // test for too many arguments
      var maxLength = Math.max.apply(null, lengths);
      if (args.length > maxLength) {
        err = new TypeError('Too many arguments in function ' + _name +
            ' (expected: ' + maxLength + ', actual: ' + args.length + ')');
        err.data = {
          category: 'tooManyArgs',
          fn: _name,
          index: args.length,
          expectedLength: maxLength
        }
        return err;
      }

      err = new TypeError('Arguments of type "' + args.join(', ') +
          '" do not match any of the defined signatures of function ' + _name + '.');
      err.data = {
        category: 'mismatch',
        actual: args.map(findTypeName)
      }
      return err;
    }

    /**
     * Find the lowest index of all exact types of a parameter (no conversions)
     * @param {Param} param
     * @return {number} Returns the index of the lowest type in typed.types
     */
    function getLowestTypeIndex (param) {
      var min = 999;

      for (var i = 0; i < param.types.length; i++) {
        if (isExactType(param.types[i])) {
          min = Math.min(min, param.types[i].typeIndex);
        }
      }

      return min;
    }

    /**
     * Find the lowest index of the conversion of all types of the parameter
     * having a conversion
     * @param {Param} param
     * @return {number} Returns the lowest index of the conversions of this type
     */
    function getLowestConversionIndex (param) {
      var min = 999;

      for (var i = 0; i < param.types.length; i++) {
        if (!isExactType(param.types[i])) {
          min = Math.min(min, param.types[i].conversionIndex);
        }
      }

      return min;
    }

    /**
     * Compare two params
     * @param {Param} param1
     * @param {Param} param2
     * @return {number} returns a negative number when param1 must get a lower
     *                  index than param2, a positive number when the opposite,
     *                  or zero when both are equal
     */
    function compareParams (param1, param2) {
      var c;

      // compare having a rest parameter or not
      c = param1.restParam - param2.restParam;
      if (c !== 0) {
        return c;
      }

      // compare having conversions or not
      c = hasConversions(param1) - hasConversions(param2);
      if (c !== 0) {
        return c;
      }

      // compare the index of the types
      c = getLowestTypeIndex(param1) - getLowestTypeIndex(param2);
      if (c !== 0) {
        return c;
      }

      // compare the index of any conversion
      return getLowestConversionIndex(param1) - getLowestConversionIndex(param2);
    }

    /**
     * Compare two signatures
     * @param {Signature} signature1
     * @param {Signature} signature2
     * @return {number} returns a negative number when param1 must get a lower
     *                  index than param2, a positive number when the opposite,
     *                  or zero when both are equal
     */
    function compareSignatures (signature1, signature2) {
      var len = Math.min(signature1.params.length, signature2.params.length);
      var i;
      var c;

      // compare whether the params have conversions at all or not
      c = signature1.params.some(hasConversions) - signature2.params.some(hasConversions)
      if (c !== 0) {
        return c;
      }

      // next compare whether the params have conversions one by one
      for (i = 0; i < len; i++) {
        c = hasConversions(signature1.params[i]) - hasConversions(signature2.params[i]);
        if (c !== 0) {
          return c;
        }
      }

      // compare the types of the params one by one
      for (i = 0; i < len; i++) {
        c = compareParams(signature1.params[i], signature2.params[i]);
        if (c !== 0) {
          return c;
        }
      }

      // compare the number of params
      return signature1.params.length - signature2.params.length;
    }

    /**
     * Get params containing all types that can be converted to the defined types.
     *
     * @param {ConversionDef[]} conversions
     * @param {string[]} typeNames
     * @return {ConversionDef[]} Returns the conversions that are available
     *                        for every type (if any)
     */
    function filterConversions(conversions, typeNames) {
      var matches = {};

      conversions.forEach(function (conversion) {
        if (typeNames.indexOf(conversion.from) === -1 &&
            typeNames.indexOf(conversion.to) !== -1 &&
            !matches[conversion.from]) {
          matches[conversion.from] = conversion;
        }
      });

      return Object.keys(matches).map(function (from) {
        return matches[from];
      });
    }

    /**
     * Preprocess arguments before calling the original function:
     * - if needed convert the parameters
     * - in case of rest parameters, move the rest parameters into an Array
     * @param {Param[]} params
     * @param {function} fn
     * @return {function} Returns a wrapped function
     */
    function compileArgsPreprocessing(params, fn) {
      var fnConvert = fn;

      // TODO: can we make this wrapper function smarter/simpler?

      if (params.some(hasConversions)) {
        var restParam = hasRestParam(params);
        var compiledConversions = params.map(compileArgConversion)

        fnConvert = function convertArgs() {
          var args = [];
          var last = restParam ? arguments.length - 1 : arguments.length;
          for (var i = 0; i < last; i++) {
            args[i] = compiledConversions[i](arguments[i]);
          }
          if (restParam) {
            args[last] = arguments[last].map(compiledConversions[last]);
          }

          return fn.apply(null, args);
        }
      }

      var fnPreprocess = fnConvert;
      if (hasRestParam(params)) {
        var offset = params.length - 1;

        fnPreprocess = function preprocessRestParams () {
          return fnConvert.apply(null,
              slice(arguments, 0, offset).concat([slice(arguments, offset)]));
        }
      }

      return fnPreprocess;
    }

    /**
     * Compile conversion for a parameter to the right type
     * @param {Param} param
     * @return {function} Returns the wrapped function that will convert arguments
     *
     */
    function compileArgConversion(param) {
      var test0, test1, conversion0, conversion1;
      var tests = [];
      var conversions = [];

      param.types.forEach(function (type) {
        if (type.conversion) {
          tests.push(findTypeByName(type.conversion.from).test);
          conversions.push(type.conversion.convert);
        }
      });

      // create optimized conversion functions depending on the number of conversions
      switch (conversions.length) {
        case 0:
          return function convertArg(arg) {
            return arg;
          }

        case 1:
          test0 = tests[0]
          conversion0 = conversions[0];
          return function convertArg(arg) {
            if (test0(arg)) {
              return conversion0(arg)
            }
            return arg;
          }

        case 2:
          test0 = tests[0]
          test1 = tests[1]
          conversion0 = conversions[0];
          conversion1 = conversions[1];
          return function convertArg(arg) {
            if (test0(arg)) {
              return conversion0(arg)
            }
            if (test1(arg)) {
              return conversion1(arg)
            }
            return arg;
          }

        default:
          return function convertArg(arg) {
            for (var i = 0; i < conversions.length; i++) {
              if (tests[i](arg)) {
                return conversions[i](arg);
              }
            }
            return arg;
          }
      }
    }

    /**
     * Convert an array with signatures into a map with signatures,
     * where signatures with union types are split into separate signatures
     *
     * Throws an error when there are conflicting types
     *
     * @param {Signature[]} signatures
     * @return {Object.<string, function>}  Returns a map with signatures
     *                                      as key and the original function
     *                                      of this signature as value.
     */
    function createSignaturesMap(signatures) {
      var signaturesMap = {};
      signatures.forEach(function (signature) {
        if (!signature.params.some(hasConversions)) {
          splitParams(signature.params, true).forEach(function (params) {
            signaturesMap[stringifyParams(params)] = signature.fn;
          });
        }
      });

      return signaturesMap;
    }

    /**
     * Split params with union types in to separate params.
     *
     * For example:
     *
     *     splitParams([['Array', 'Object'], ['string', 'RegExp'])
     *     // returns:
     *     // [
     *     //   ['Array', 'string'],
     *     //   ['Array', 'RegExp'],
     *     //   ['Object', 'string'],
     *     //   ['Object', 'RegExp']
     *     // ]
     *
     * @param {Param[]} params
     * @param {boolean} ignoreConversionTypes
     * @return {Param[]}
     */
    function splitParams(params, ignoreConversionTypes) {
      function _splitParams(params, index, types) {
        if (index < params.length) {
          var param = params[index]
          var filteredTypes = ignoreConversionTypes
              ? param.types.filter(isExactType)
              : param.types;
          var typeGroups

          if (param.restParam) {
            // split the types of a rest parameter in two:
            // one with only exact types, and one with exact types and conversions
            var exactTypes = filteredTypes.filter(isExactType)
            typeGroups = exactTypes.length < filteredTypes.length
                ? [exactTypes, filteredTypes]
                : [filteredTypes]

          }
          else {
            // split all the types of a regular parameter into one type per group
            typeGroups = filteredTypes.map(function (type) {
              return [type]
            })
          }

          // recurse over the groups with types
          return flatMap(typeGroups, function (typeGroup) {
            return _splitParams(params, index + 1, types.concat([typeGroup]));
          });

        }
        else {
          // we've reached the end of the parameters. Now build a new Param
          var splittedParams = types.map(function (type, typeIndex) {
            return {
              types: type,
              restParam: (typeIndex === params.length - 1) && hasRestParam(params)
            }
          });

          return [splittedParams];
        }
      }

      return _splitParams(params, 0, []);
    }

    /**
     * Test whether two signatures have a conflicting signature
     * @param {Signature} signature1
     * @param {Signature} signature2
     * @return {boolean} Returns true when the signatures conflict, false otherwise.
     */
    function hasConflictingParams(signature1, signature2) {
      var ii = Math.max(signature1.params.length, signature2.params.length);

      for (var i = 0; i < ii; i++) {
        var typesNames1 = getExpectedTypeNames(signature1, i, true);
        var typesNames2 = getExpectedTypeNames(signature2, i, true);

        if (!hasOverlap(typesNames1, typesNames2)) {
          return false;
        }
      }

      var len1 = signature1.params.length;
      var len2 = signature2.params.length;
      var restParam1 = hasRestParam(signature1.params);
      var restParam2 = hasRestParam(signature2.params);

      return restParam1
          ? restParam2 ? (len1 === len2) : (len2 >= len1)
          : restParam2 ? (len1 >= len2)  : (len1 === len2)
    }

    /**
     * Create a typed function
     * @param {String} name               The name for the typed function
     * @param {Object.<string, function>} signaturesMap
     *                                    An object with one or
     *                                    multiple signatures as key, and the
     *                                    function corresponding to the
     *                                    signature as value.
     * @return {function}  Returns the created typed function.
     */
    function createTypedFunction(name, signaturesMap) {
      if (Object.keys(signaturesMap).length === 0) {
        throw new SyntaxError('No signatures provided');
      }

      // parse the signatures, and check for conflicts
      var parsedSignatures = [];
      Object.keys(signaturesMap)
          .map(function (signature) {
            return parseSignature(signature, signaturesMap[signature], typed.conversions);
          })
          .filter(notNull)
          .forEach(function (parsedSignature) {
            // check whether this parameter conflicts with already parsed signatures
            var conflictingSignature = findInArray(parsedSignatures, function (s) {
              return hasConflictingParams(s, parsedSignature)
            });
            if (conflictingSignature) {
              throw new TypeError('Conflicting signatures "' +
                  stringifyParams(conflictingSignature.params) + '" and "' +
                  stringifyParams(parsedSignature.params) + '".');
            }

            parsedSignatures.push(parsedSignature);
          });

      // split and filter the types of the signatures, and then order them
      var signatures = flatMap(parsedSignatures, function (parsedSignature) {
        var params = parsedSignature ? splitParams(parsedSignature.params, false) : []

        return params.map(function (params) {
          return {
            params: params,
            fn: parsedSignature.fn
          };
        });
      }).filter(notNull);

      signatures.sort(compareSignatures);

      // we create a highly optimized checks for the first couple of signatures with max 2 arguments
      var ok0 = signatures[0] && signatures[0].params.length <= 2 && !hasRestParam(signatures[0].params);
      var ok1 = signatures[1] && signatures[1].params.length <= 2 && !hasRestParam(signatures[1].params);
      var ok2 = signatures[2] && signatures[2].params.length <= 2 && !hasRestParam(signatures[2].params);
      var ok3 = signatures[3] && signatures[3].params.length <= 2 && !hasRestParam(signatures[3].params);
      var ok4 = signatures[4] && signatures[4].params.length <= 2 && !hasRestParam(signatures[4].params);
      var ok5 = signatures[5] && signatures[5].params.length <= 2 && !hasRestParam(signatures[5].params);
      var allOk = ok0 && ok1 && ok2 && ok3 && ok4 && ok5;

      // compile the tests
      var tests = signatures.map(function (signature) {
        return compileTests(signature.params);
      });

      var test00 = ok0 ? compileTest(signatures[0].params[0]) : notOk;
      var test10 = ok1 ? compileTest(signatures[1].params[0]) : notOk;
      var test20 = ok2 ? compileTest(signatures[2].params[0]) : notOk;
      var test30 = ok3 ? compileTest(signatures[3].params[0]) : notOk;
      var test40 = ok4 ? compileTest(signatures[4].params[0]) : notOk;
      var test50 = ok5 ? compileTest(signatures[5].params[0]) : notOk;

      var test01 = ok0 ? compileTest(signatures[0].params[1]) : notOk;
      var test11 = ok1 ? compileTest(signatures[1].params[1]) : notOk;
      var test21 = ok2 ? compileTest(signatures[2].params[1]) : notOk;
      var test31 = ok3 ? compileTest(signatures[3].params[1]) : notOk;
      var test41 = ok4 ? compileTest(signatures[4].params[1]) : notOk;
      var test51 = ok5 ? compileTest(signatures[5].params[1]) : notOk;

      // compile the functions
      var fns = signatures.map(function(signature) {
        return compileArgsPreprocessing(signature.params, signature.fn)
      });

      var fn0 = ok0 ? fns[0] : undef;
      var fn1 = ok1 ? fns[1] : undef;
      var fn2 = ok2 ? fns[2] : undef;
      var fn3 = ok3 ? fns[3] : undef;
      var fn4 = ok4 ? fns[4] : undef;
      var fn5 = ok5 ? fns[5] : undef;

      var len0 = ok0 ? signatures[0].params.length : -1;
      var len1 = ok1 ? signatures[1].params.length : -1;
      var len2 = ok2 ? signatures[2].params.length : -1;
      var len3 = ok3 ? signatures[3].params.length : -1;
      var len4 = ok4 ? signatures[4].params.length : -1;
      var len5 = ok5 ? signatures[5].params.length : -1;

      // simple and generic, but also slow
      var iStart = allOk ? 6 : 0;
      var iEnd = signatures.length;
      var generic = function generic() {
        'use strict';

        for (var i = iStart; i < iEnd; i++) {
          if (tests[i](arguments)) {
            return fns[i].apply(null, arguments);
          }
        }

        throw createError(name, arguments, signatures);
      }

      // create the typed function
      // fast, specialized version. Falls back to the slower, generic one if needed
      var fn = function fn(arg0, arg1) {
        'use strict';

        if (arguments.length === len0 && test00(arg0) && test01(arg1)) { return fn0.apply(null, arguments); }
        if (arguments.length === len1 && test10(arg0) && test11(arg1)) { return fn1.apply(null, arguments); }
        if (arguments.length === len2 && test20(arg0) && test21(arg1)) { return fn2.apply(null, arguments); }
        if (arguments.length === len3 && test30(arg0) && test31(arg1)) { return fn3.apply(null, arguments); }
        if (arguments.length === len4 && test40(arg0) && test41(arg1)) { return fn4.apply(null, arguments); }
        if (arguments.length === len5 && test50(arg0) && test51(arg1)) { return fn5.apply(null, arguments); }

        return generic.apply(null, arguments);
      }

      // attach name the typed function
      try {
        Object.defineProperty(fn, 'name', {value: name});
      }
      catch (err) {
        // old browsers do not support Object.defineProperty and some don't support setting the name property
        // the function name is not essential for the functioning, it's mostly useful for debugging,
        // so it's fine to have unnamed functions.
      }

      // attach signatures to the function
      fn.signatures = createSignaturesMap(signatures);

      return fn;
    }

    /**
     * Test whether a type should be NOT be ignored
     * @param {string} typeName
     * @return {boolean}
     */
    function notIgnore(typeName) {
      return typed.ignore.indexOf(typeName) === -1;
    }

    /**
     * trim a string
     * @param {string} str
     * @return {string}
     */
    function trim(str) {
      return str.trim();
    }

    /**
     * Test whether a string is not empty
     * @param {string} str
     * @return {boolean}
     */
    function notEmpty(str) {
      return !!str;
    }

    /**
     * test whether a value is not strict equal to null
     * @param {*} value
     * @return {boolean}
     */
    function notNull(value) {
      return value !== null;
    }

    /**
     * Test whether a parameter has no types defined
     * @param {Param} param
     * @return {boolean}
     */
    function isInvalidParam (param) {
      return param.types.length === 0;
    }

    /**
     * Return all but the last items of an array
     * @param {Array} arr
     * @return {Array}
     */
    function initial(arr) {
      return arr.slice(0, arr.length - 1);
    }

    /**
     * return the last item of an array
     * @param {Array} arr
     * @return {*}
     */
    function last(arr) {
      return arr[arr.length - 1];
    }

    /**
     * Slice an array or function Arguments
     * @param {Array | Arguments | IArguments} arr
     * @param {number} start
     * @param {number} [end]
     * @return {Array}
     */
    function slice(arr, start, end) {
      return Array.prototype.slice.call(arr, start, end);
    }

    /**
     * Test whether an array contains some item
     * @param {Array} array
     * @param {*} item
     * @return {boolean} Returns true if array contains item, false if not.
     */
    function contains(array, item) {
      return array.indexOf(item) !== -1;
    }

    /**
     * Test whether two arrays have overlapping items
     * @param {Array} array1
     * @param {Array} array2
     * @return {boolean} Returns true when at least one item exists in both arrays
     */
    function hasOverlap(array1, array2) {
      for (var i = 0; i < array1.length; i++) {
        if (contains(array2, array1[i])) {
          return true;
        }
      }

      return false;
    }

    /**
     * Return the first item from an array for which test(arr[i]) returns true
     * @param {Array} arr
     * @param {function} test
     * @return {* | undefined} Returns the first matching item
     *                         or undefined when there is no match
     */
    function findInArray(arr, test) {
      for (var i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
          return arr[i];
        }
      }
      return undefined;
    }

    /**
     * Filter unique items of an array with strings
     * @param {string[]} arr
     * @return {string[]}
     */
    function uniq(arr) {
      var entries = {}
      for (var i = 0; i < arr.length; i++) {
        entries[arr[i]] = true;
      }
      return Object.keys(entries);
    }

    /**
     * Flat map the result invoking a callback for every item in an array.
     * https://gist.github.com/samgiles/762ee337dff48623e729
     * @param {Array} arr
     * @param {function} callback
     * @return {Array}
     */
    function flatMap(arr, callback) {
      return Array.prototype.concat.apply([], arr.map(callback));
    }

    /**
     * Retrieve the function name from a set of typed functions,
     * and check whether the name of all functions match (if given)
     * @param {function[]} fns
     */
    function getName (fns) {
      var name = '';

      for (var i = 0; i < fns.length; i++) {
        var fn = fns[i];

        // check whether the names are the same when defined
        if ((typeof fn.signatures === 'object' || typeof fn.signature === 'string') && fn.name !== '') {
          if (name === '') {
            name = fn.name;
          }
          else if (name !== fn.name) {
            var err = new Error('Function names do not match (expected: ' + name + ', actual: ' + fn.name + ')');
            err.data = {
              actual: fn.name,
              expected: name
            };
            throw err;
          }
        }
      }

      return name;
    }

    // extract and merge all signatures of a list with typed functions
    function extractSignatures(fns) {
      var err;
      var signaturesMap = {};

      function validateUnique(_signature, _fn) {
        if (signaturesMap.hasOwnProperty(_signature) && _fn !== signaturesMap[_signature]) {
          err = new Error('Signature "' + _signature + '" is defined twice');
          err.data = {signature: _signature};
          throw err;
          // else: both signatures point to the same function, that's fine
        }
      }

      for (var i = 0; i < fns.length; i++) {
        var fn = fns[i];

        // test whether this is a typed-function
        if (typeof fn.signatures === 'object') {
          // merge the signatures
          for (var signature in fn.signatures) {
            if (fn.signatures.hasOwnProperty(signature)) {
              validateUnique(signature, fn.signatures[signature]);
              signaturesMap[signature] = fn.signatures[signature];
            }
          }
        }
        else if (typeof fn.signature === 'string') {
          validateUnique(fn.signature, fn);
          signaturesMap[fn.signature] = fn;
        }
        else {
          err = new TypeError('Function is no typed-function (index: ' + i + ')');
          err.data = {index: i};
          throw err;
        }
      }

      return signaturesMap;
    }

    typed = createTypedFunction('typed', {
      'string, Object': createTypedFunction,
      'Object': function (signaturesMap) {
        // find existing name
        var fns = [];
        for (var signature in signaturesMap) {
          if (signaturesMap.hasOwnProperty(signature)) {
            fns.push(signaturesMap[signature]);
          }
        }
        var name = getName(fns);
        return createTypedFunction(name, signaturesMap);
      },
      '...Function': function (fns) {
        return createTypedFunction(getName(fns), extractSignatures(fns));
      },
      'string, ...Function': function (name, fns) {
        return createTypedFunction(name, extractSignatures(fns));
      }
    });

    typed.create = create;
    typed.types = _types;
    typed.conversions = _conversions;
    typed.ignore = _ignore;
    typed.convert = convert;
    typed.find = find;

    /**
     * add a type
     * @param {{name: string, test: function}} type
     * @param {boolean} [beforeObjectTest=true]
     *                          If true, the new test will be inserted before
     *                          the test with name 'Object' (if any), since
     *                          tests for Object match Array and classes too.
     */
    typed.addType = function (type, beforeObjectTest) {
      if (!type || typeof type.name !== 'string' || typeof type.test !== 'function') {
        throw new TypeError('Object with properties {name: string, test: function} expected');
      }

      if (beforeObjectTest !== false) {
        for (var i = 0; i < typed.types.length; i++) {
          if (typed.types[i].name === 'Object') {
            typed.types.splice(i, 0, type);
            return
          }
        }
      }

      typed.types.push(type);
    };

    // add a conversion
    typed.addConversion = function (conversion) {
      if (!conversion
          || typeof conversion.from !== 'string'
          || typeof conversion.to !== 'string'
          || typeof conversion.convert !== 'function') {
        throw new TypeError('Object with properties {from: string, to: string, convert: function} expected');
      }

      typed.conversions.push(conversion);
    };

    return typed;
  }

  return create();
}));

/***/ }),
/* 165 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var lazy = __webpack_require__(5).lazy;

var isFactory = __webpack_require__(5).isFactory;

var traverse = __webpack_require__(5).traverse;

var ArgumentsError = __webpack_require__(57);

function factory(type, config, load, typed, math) {
  /**
   * Import functions from an object or a module
   *
   * Syntax:
   *
   *    math.import(object)
   *    math.import(object, options)
   *
   * Where:
   *
   * - `object: Object`
   *   An object with functions to be imported.
   * - `options: Object` An object with import options. Available options:
   *   - `override: boolean`
   *     If true, existing functions will be overwritten. False by default.
   *   - `silent: boolean`
   *     If true, the function will not throw errors on duplicates or invalid
   *     types. False by default.
   *   - `wrap: boolean`
   *     If true, the functions will be wrapped in a wrapper function
   *     which converts data types like Matrix to primitive data types like Array.
   *     The wrapper is needed when extending math.js with libraries which do not
   *     support these data type. False by default.
   *
   * Examples:
   *
   *    // define new functions and variables
   *    math.import({
   *      myvalue: 42,
   *      hello: function (name) {
   *        return 'hello, ' + name + '!'
   *      }
   *    })
   *
   *    // use the imported function and variable
   *    math.myvalue * 2               // 84
   *    math.hello('user')             // 'hello, user!'
   *
   *    // import the npm module 'numbers'
   *    // (must be installed first with `npm install numbers`)
   *    math.import(require('numbers'), {wrap: true})
   *
   *    math.fibonacci(7) // returns 13
   *
   * @param {Object | Array} object   Object with functions to be imported.
   * @param {Object} [options]        Import options.
   */
  function mathImport(object, options) {
    var num = arguments.length;

    if (num !== 1 && num !== 2) {
      throw new ArgumentsError('import', num, 1, 2);
    }

    if (!options) {
      options = {};
    } // TODO: allow a typed-function with name too


    if (isFactory(object)) {
      _importFactory(object, options);
    } else if (Array.isArray(object)) {
      object.forEach(function (entry) {
        mathImport(entry, options);
      });
    } else if (_typeof(object) === 'object') {
      // a map with functions
      for (var name in object) {
        if (object.hasOwnProperty(name)) {
          var value = object[name];

          if (isSupportedType(value)) {
            _import(name, value, options);
          } else if (isFactory(object)) {
            _importFactory(object, options);
          } else {
            mathImport(value, options);
          }
        }
      }
    } else {
      if (!options.silent) {
        throw new TypeError('Factory, Object, or Array expected');
      }
    }
  }
  /**
   * Add a property to the math namespace and create a chain proxy for it.
   * @param {string} name
   * @param {*} value
   * @param {Object} options  See import for a description of the options
   * @private
   */


  function _import(name, value, options) {
    // TODO: refactor this function, it's to complicated and contains duplicate code
    if (options.wrap && typeof value === 'function') {
      // create a wrapper around the function
      value = _wrap(value);
    }

    if (isTypedFunction(math[name]) && isTypedFunction(value)) {
      if (options.override) {
        // give the typed function the right name
        value = typed(name, value.signatures);
      } else {
        // merge the existing and typed function
        value = typed(math[name], value);
      }

      math[name] = value;

      _importTransform(name, value);

      math.emit('import', name, function resolver() {
        return value;
      });
      return;
    }

    if (math[name] === undefined || options.override) {
      math[name] = value;

      _importTransform(name, value);

      math.emit('import', name, function resolver() {
        return value;
      });
      return;
    }

    if (!options.silent) {
      throw new Error('Cannot import "' + name + '": already exists');
    }
  }

  function _importTransform(name, value) {
    if (value && typeof value.transform === 'function') {
      math.expression.transform[name] = value.transform;

      if (allowedInExpressions(name)) {
        math.expression.mathWithTransform[name] = value.transform;
      }
    } else {
      // remove existing transform
      delete math.expression.transform[name];

      if (allowedInExpressions(name)) {
        math.expression.mathWithTransform[name] = value;
      }
    }
  }

  function _deleteTransform(name) {
    delete math.expression.transform[name];

    if (allowedInExpressions(name)) {
      math.expression.mathWithTransform[name] = math[name];
    } else {
      delete math.expression.mathWithTransform[name];
    }
  }
  /**
   * Create a wrapper a round an function which converts the arguments
   * to their primitive values (like convert a Matrix to Array)
   * @param {Function} fn
   * @return {Function} Returns the wrapped function
   * @private
   */


  function _wrap(fn) {
    var wrapper = function wrapper() {
      var args = [];

      for (var i = 0, len = arguments.length; i < len; i++) {
        var arg = arguments[i];
        args[i] = arg && arg.valueOf();
      }

      return fn.apply(math, args);
    };

    if (fn.transform) {
      wrapper.transform = fn.transform;
    }

    return wrapper;
  }
  /**
   * Import an instance of a factory into math.js
   * @param {{factory: Function, name: string, path: string, math: boolean}} factory
   * @param {Object} options  See import for a description of the options
   * @private
   */


  function _importFactory(factory, options) {
    if (typeof factory.name === 'string') {
      var name = factory.name;
      var existingTransform = name in math.expression.transform;
      var namespace = factory.path ? traverse(math, factory.path) : math;
      var existing = namespace.hasOwnProperty(name) ? namespace[name] : undefined;

      var resolver = function resolver() {
        var instance = load(factory);

        if (instance && typeof instance.transform === 'function') {
          throw new Error('Transforms cannot be attached to factory functions. ' + 'Please create a separate function for it with exports.path="expression.transform"');
        }

        if (isTypedFunction(existing) && isTypedFunction(instance)) {
          if (options.override) {// replace the existing typed function (nothing to do)
          } else {
            // merge the existing and new typed function
            instance = typed(existing, instance);
          }

          return instance;
        }

        if (existing === undefined || options.override) {
          return instance;
        }

        if (!options.silent) {
          throw new Error('Cannot import "' + name + '": already exists');
        }
      };

      if (factory.lazy !== false) {
        lazy(namespace, name, resolver);

        if (existingTransform) {
          _deleteTransform(name);
        } else {
          if (factory.path === 'expression.transform' || factoryAllowedInExpressions(factory)) {
            lazy(math.expression.mathWithTransform, name, resolver);
          }
        }
      } else {
        namespace[name] = resolver();

        if (existingTransform) {
          _deleteTransform(name);
        } else {
          if (factory.path === 'expression.transform' || factoryAllowedInExpressions(factory)) {
            math.expression.mathWithTransform[name] = resolver();
          }
        }
      }

      math.emit('import', name, resolver, factory.path);
    } else {
      // unnamed factory.
      // no lazy loading
      load(factory);
    }
  }
  /**
   * Check whether given object is a type which can be imported
   * @param {Function | number | string | boolean | null | Unit | Complex} object
   * @return {boolean}
   * @private
   */


  function isSupportedType(object) {
    return typeof object === 'function' || typeof object === 'number' || typeof object === 'string' || typeof object === 'boolean' || object === null || object && type.isUnit(object) || object && type.isComplex(object) || object && type.isBigNumber(object) || object && type.isFraction(object) || object && type.isMatrix(object) || object && Array.isArray(object);
  }
  /**
   * Test whether a given thing is a typed-function
   * @param {*} fn
   * @return {boolean} Returns true when `fn` is a typed-function
   */


  function isTypedFunction(fn) {
    return typeof fn === 'function' && _typeof(fn.signatures) === 'object';
  }

  function allowedInExpressions(name) {
    return !unsafe.hasOwnProperty(name);
  }

  function factoryAllowedInExpressions(factory) {
    return factory.path === undefined && !unsafe.hasOwnProperty(factory.name);
  } // namespaces and functions not available in the parser for safety reasons


  var unsafe = {
    'expression': true,
    'type': true,
    'docs': true,
    'error': true,
    'json': true,
    'chain': true // chain method not supported. Note that there is a unit chain too.

  };
  return mathImport;
}

exports.math = true; // request access to the math namespace as 5th argument of the factory function

exports.name = 'import';
exports.factory = factory;
exports.lazy = true;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var object = __webpack_require__(5);

function factory(type, config, load, typed, math) {
  var MATRIX = ['Matrix', 'Array']; // valid values for option matrix

  var NUMBER = ['number', 'BigNumber', 'Fraction']; // valid values for option number

  /**
   * Set configuration options for math.js, and get current options.
   * Will emit a 'config' event, with arguments (curr, prev, changes).
   *
   * Syntax:
   *
   *     math.config(config: Object): Object
   *
   * Examples:
   *
   *     math.config().number                // outputs 'number'
   *     math.eval('0.4')                    // outputs number 0.4
   *     math.config({number: 'Fraction'})
   *     math.eval('0.4')                    // outputs Fraction 2/5
   *
   * @param {Object} [options] Available options:
   *                            {number} epsilon
   *                              Minimum relative difference between two
   *                              compared values, used by all comparison functions.
   *                            {string} matrix
   *                              A string 'Matrix' (default) or 'Array'.
   *                            {string} number
   *                              A string 'number' (default), 'BigNumber', or 'Fraction'
   *                            {number} precision
   *                              The number of significant digits for BigNumbers.
   *                              Not applicable for Numbers.
   *                            {string} parenthesis
   *                              How to display parentheses in LaTeX and string
   *                              output.
   *                            {string} randomSeed
   *                              Random seed for seeded pseudo random number generator.
   *                              Set to null to randomly seed.
   * @return {Object} Returns the current configuration
   */

  function _config(options) {
    if (options) {
      var prev = object.map(config, object.clone); // validate some of the options

      validateOption(options, 'matrix', MATRIX);
      validateOption(options, 'number', NUMBER); // merge options

      object.deepExtend(config, options);
      var curr = object.map(config, object.clone);
      var changes = object.map(options, object.clone); // emit 'config' event

      math.emit('config', curr, prev, changes);
      return curr;
    } else {
      return object.map(config, object.clone);
    }
  } // attach the valid options to the function so they can be extended


  _config.MATRIX = MATRIX;
  _config.NUMBER = NUMBER;
  return _config;
}
/**
 * Test whether an Array contains a specific item.
 * @param {Array.<string>} array
 * @param {string} item
 * @return {boolean}
 */


function contains(array, item) {
  return array.indexOf(item) !== -1;
}
/**
 * Find a string in an array. Case insensitive search
 * @param {Array.<string>} array
 * @param {string} item
 * @return {number} Returns the index when found. Returns -1 when not found
 */


function findIndex(array, item) {
  return array.map(function (i) {
    return i.toLowerCase();
  }).indexOf(item.toLowerCase());
}
/**
 * Validate an option
 * @param {Object} options         Object with options
 * @param {string} name            Name of the option to validate
 * @param {Array.<string>} values  Array with valid values for this option
 */


function validateOption(options, name, values) {
  if (options[name] !== undefined && !contains(values, options[name])) {
    var index = findIndex(values, options[name]);

    if (index !== -1) {
      // right value, wrong casing
      // TODO: lower case values are deprecated since v3, remove this warning some day.
      console.warn('Warning: Wrong casing for configuration option "' + name + '", should be "' + values[index] + '" instead of "' + options[name] + '".');
      options[name] = values[index]; // change the option to the right casing
    } else {
      // unknown value
      console.warn('Warning: Unknown value "' + options[name] + '" for configuration option "' + name + '". Available options: ' + values.map(JSON.stringify).join(', ') + '.');
    }
  }
}

exports.name = 'config';
exports.math = true; // request the math namespace as fifth argument

exports.factory = factory;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// This file contains all factory functions of math.js
module.exports = [__webpack_require__(169), // data types (Matrix, Complex, Unit, ...)
__webpack_require__(200), // constants
__webpack_require__(202), // functions
// load ./expression *after* ./function since we need to
// attach transforms to functions that are imported there
__webpack_require__(355), // expression parsing
__webpack_require__(585), // serialization utility (math.json.reviver)
__webpack_require__(587) // errors
];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [__webpack_require__(170), __webpack_require__(172), __webpack_require__(173), __webpack_require__(177), __webpack_require__(181), __webpack_require__(184), __webpack_require__(64), __webpack_require__(65), __webpack_require__(192), __webpack_require__(193), __webpack_require__(194)];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [// type
__webpack_require__(171), // construction function
__webpack_require__(105)];

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "math", function() { return math; });
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_0__);



function factory(type, config, load, typed, math) {
  var BigNumber = decimal_js__WEBPACK_IMPORTED_MODULE_0___default.a.clone({
    precision: config.precision
  });
  /**
   * Attach type information
   */

  BigNumber.prototype.type = 'BigNumber';
  BigNumber.prototype.isBigNumber = true;
  /**
   * Get a JSON representation of a BigNumber containing
   * type information
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "BigNumber", "value": "0.2"}`
   */

  BigNumber.prototype.toJSON = function () {
    return {
      mathjs: 'BigNumber',
      value: this.toString()
    };
  };
  /**
   * Instantiate a BigNumber from a JSON object
   * @param {Object} json  a JSON object structured as:
   *                       `{"mathjs": "BigNumber", "value": "0.2"}`
   * @return {BigNumber}
   */


  BigNumber.fromJSON = function (json) {
    return new BigNumber(json.value);
  }; // listen for changed in the configuration, automatically apply changed precision


  math.on('config', function (curr, prev) {
    if (curr.precision !== prev.precision) {
      BigNumber.config({
        precision: curr.precision
      });
    }
  });
  return BigNumber;
}
var name = 'BigNumber';
var path = 'type';
var math = true; // request access to the math namespace

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(1);

function factory(type, config, load, typed) {
  /**
   * Create a boolean or convert a string or number to a boolean.
   * In case of a number, `true` is returned for non-zero numbers, and `false` in
   * case of zero.
   * Strings can be `'true'` or `'false'`, or can contain a number.
   * When value is a matrix, all elements will be converted to boolean.
   *
   * Syntax:
   *
   *    math.boolean(x)
   *
   * Examples:
   *
   *    math.boolean(0)     // returns false
   *    math.boolean(1)     // returns true
   *    math.boolean(-3)     // returns true
   *    math.boolean('true')     // returns true
   *    math.boolean('false')     // returns false
   *    math.boolean([1, 0, 1, 1])     // returns [true, false, true, true]
   *
   * See also:
   *
   *    bignumber, complex, index, matrix, string, unit
   *
   * @param {string | number | boolean | Array | Matrix | null} value  A value of any type
   * @return {boolean | Array | Matrix} The boolean value
   */
  var bool = typed('bool', {
    '': function _() {
      return false;
    },
    'boolean': function boolean(x) {
      return x;
    },
    'number': function number(x) {
      return !!x;
    },
    'null': function _null(x) {
      return false;
    },
    'BigNumber': function BigNumber(x) {
      return !x.isZero();
    },
    'string': function string(x) {
      // try case insensitive
      var lcase = x.toLowerCase();

      if (lcase === 'true') {
        return true;
      } else if (lcase === 'false') {
        return false;
      } // test whether value is a valid number


      var num = Number(x);

      if (x !== '' && !isNaN(num)) {
        return !!num;
      }

      throw new Error('Cannot convert "' + x + '" to a boolean');
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, bool);
    }
  });
  return bool;
}

exports.name = 'boolean';
exports.factory = factory;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [// type
__webpack_require__(174), // construction function
__webpack_require__(176)];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var format = __webpack_require__(9).format;

var lazy = __webpack_require__(5).lazy;

function factory(type, config, load, typed, math) {
  /**
   * @constructor Chain
   * Wrap any value in a chain, allowing to perform chained operations on
   * the value.
   *
   * All methods available in the math.js library can be called upon the chain,
   * and then will be evaluated with the value itself as first argument.
   * The chain can be closed by executing chain.done(), which will return
   * the final value.
   *
   * The Chain has a number of special functions:
   * - done()             Finalize the chained operation and return the
   *                      chain's value.
   * - valueOf()          The same as done()
   * - toString()         Returns a string representation of the chain's value.
   *
   * @param {*} [value]
   */
  function Chain(value) {
    if (!(this instanceof Chain)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    if (type.isChain(value)) {
      this.value = value.value;
    } else {
      this.value = value;
    }
  }
  /**
   * Attach type information
   */


  Chain.prototype.type = 'Chain';
  Chain.prototype.isChain = true;
  /**
   * Close the chain. Returns the final value.
   * Does the same as method valueOf()
   * @returns {*} value
   */

  Chain.prototype.done = function () {
    return this.value;
  };
  /**
   * Close the chain. Returns the final value.
   * Does the same as method done()
   * @returns {*} value
   */


  Chain.prototype.valueOf = function () {
    return this.value;
  };
  /**
   * Get a string representation of the value in the chain
   * @returns {string}
   */


  Chain.prototype.toString = function () {
    return format(this.value);
  };
  /**
   * Get a JSON representation of the chain
   * @returns {Object}
   */


  Chain.prototype.toJSON = function () {
    return {
      mathjs: 'Chain',
      value: this.value
    };
  };
  /**
   * Instantiate a Chain from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "Chain", value: ...}`,
   *                       where mathjs is optional
   * @returns {Chain}
   */


  Chain.fromJSON = function (json) {
    return new Chain(json.value);
  };
  /**
   * Create a proxy method for the chain
   * @param {string} name
   * @param {Function} fn      The function to be proxied
   *                           If fn is no function, it is silently ignored.
   * @private
   */


  function createProxy(name, fn) {
    if (typeof fn === 'function') {
      Chain.prototype[name] = chainify(fn);
    }
  }
  /**
   * Create a proxy method for the chain
   * @param {string} name
   * @param {function} resolver   The function resolving with the
   *                              function to be proxied
   * @private
   */


  function createLazyProxy(name, resolver) {
    lazy(Chain.prototype, name, function outerResolver() {
      var fn = resolver();

      if (typeof fn === 'function') {
        return chainify(fn);
      }

      return undefined; // if not a function, ignore
    });
  }
  /**
   * Make a function chainable
   * @param {function} fn
   * @return {Function} chain function
   * @private
   */


  function chainify(fn) {
    return function () {
      var args = [this.value]; // `this` will be the context of a Chain instance

      for (var i = 0; i < arguments.length; i++) {
        args[i + 1] = arguments[i];
      }

      return new Chain(fn.apply(fn, args));
    };
  }
  /**
   * Create a proxy for a single method, or an object with multiple methods.
   * Example usage:
   *
   *   Chain.createProxy('add', function add (x, y) {...})
   *   Chain.createProxy({
   *     add:      function add (x, y) {...},
   *     subtract: function subtract (x, y) {...}
   *   }
   *
   * @param {string | Object} arg0   A name (string), or an object with
   *                                 functions
   * @param {*} [arg1]               A function, when arg0 is a name
   */


  Chain.createProxy = function (arg0, arg1) {
    if (typeof arg0 === 'string') {
      // createProxy(name, value)
      createProxy(arg0, arg1);
    } else {
      // createProxy(values)
      for (var prop in arg0) {
        if (arg0.hasOwnProperty(prop)) {
          createProxy(prop, arg0[prop]);
        }
      }
    }
  }; // create proxy for everything that is in math.js


  Chain.createProxy(math); // register on the import event, automatically add a proxy for every imported function.

  math.on('import', function (name, resolver, path) {
    if (path === undefined) {
      // an imported function (not a data type or something special)
      createLazyProxy(name, resolver);
    }
  });
  return Chain;
}

exports.name = 'Chain';
exports.path = 'type';
exports.factory = factory;
exports.math = true; // require providing the math namespace as 5th argument

exports.lazy = false; // we need to register a listener on the import events, so no lazy loading

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectUtils = __webpack_require__(5);
/**
 * Convert a BigNumber to a formatted string representation.
 *
 * Syntax:
 *
 *    format(value)
 *    format(value, options)
 *    format(value, precision)
 *    format(value, fn)
 *
 * Where:
 *
 *    {number} value   The value to be formatted
 *    {Object} options An object with formatting options. Available options:
 *                     {string} notation
 *                         Number notation. Choose from:
 *                         'fixed'          Always use regular number notation.
 *                                          For example '123.40' and '14000000'
 *                         'exponential'    Always use exponential notation.
 *                                          For example '1.234e+2' and '1.4e+7'
 *                         'auto' (default) Regular number notation for numbers
 *                                          having an absolute value between
 *                                          `lower` and `upper` bounds, and uses
 *                                          exponential notation elsewhere.
 *                                          Lower bound is included, upper bound
 *                                          is excluded.
 *                                          For example '123.4' and '1.4e7'.
 *                     {number} precision   A number between 0 and 16 to round
 *                                          the digits of the number.
 *                                          In case of notations 'exponential',
 *                                          'engineering', and 'auto',
 *                                          `precision` defines the total
 *                                          number of significant digits returned.
 *                                          In case of notation 'fixed',
 *                                          `precision` defines the number of
 *                                          significant digits after the decimal
 *                                          point.
 *                                          `precision` is undefined by default.
 *                     {number} lowerExp    Exponent determining the lower boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `-3`.
 *                     {number} upperExp    Exponent determining the upper boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `5`.
 *    {Function} fn    A custom formatting function. Can be used to override the
 *                     built-in notations. Function `fn` is called with `value` as
 *                     parameter and must return a string. Is useful for example to
 *                     format all values inside a matrix in a particular way.
 *
 * Examples:
 *
 *    format(6.4)                                        // '6.4'
 *    format(1240000)                                    // '1.24e6'
 *    format(1/3)                                        // '0.3333333333333333'
 *    format(1/3, 3)                                     // '0.333'
 *    format(21385, 2)                                   // '21000'
 *    format(12e8, {notation: 'fixed'})                  // returns '1200000000'
 *    format(2.3,    {notation: 'fixed', precision: 4})  // returns '2.3000'
 *    format(52.8,   {notation: 'exponential'})          // returns '5.28e+1'
 *    format(12400,  {notation: 'engineering'})          // returns '12.400e+3'
 *
 * @param {BigNumber} value
 * @param {Object | Function | number} [options]
 * @return {string} str The formatted value
 */


exports.format = function (value, options) {
  if (typeof options === 'function') {
    // handle format(value, fn)
    return options(value);
  } // handle special cases


  if (!value.isFinite()) {
    return value.isNaN() ? 'NaN' : value.gt(0) ? 'Infinity' : '-Infinity';
  } // default values for options


  var notation = 'auto';
  var precision;

  if (options !== undefined) {
    // determine notation from options
    if (options.notation) {
      notation = options.notation;
    } // determine precision from options


    if (typeof options === 'number') {
      precision = options;
    } else if (options.precision) {
      precision = options.precision;
    }
  } // handle the various notations


  switch (notation) {
    case 'fixed':
      return exports.toFixed(value, precision);

    case 'exponential':
      return exports.toExponential(value, precision);

    case 'engineering':
      return exports.toEngineering(value, precision);

    case 'auto':
      // TODO: clean up some day. Deprecated since: 2018-01-24
      // @deprecated upper and lower are replaced with upperExp and lowerExp since v4.0.0
      if (options && options.exponential && (options.exponential.lower !== undefined || options.exponential.upper !== undefined)) {
        var fixedOptions = objectUtils.map(options, function (x) {
          return x;
        });
        fixedOptions.exponential = undefined;

        if (options.exponential.lower !== undefined) {
          fixedOptions.lowerExp = Math.round(Math.log(options.exponential.lower) / Math.LN10);
        }

        if (options.exponential.upper !== undefined) {
          fixedOptions.upperExp = Math.round(Math.log(options.exponential.upper) / Math.LN10);
        }

        console.warn('Deprecation warning: Formatting options exponential.lower and exponential.upper ' + '(minimum and maximum value) ' + 'are replaced with exponential.lowerExp and exponential.upperExp ' + '(minimum and maximum exponent) since version 4.0.0. ' + 'Replace ' + JSON.stringify(options) + ' with ' + JSON.stringify(fixedOptions));
        return exports.format(value, fixedOptions);
      } // determine lower and upper bound 