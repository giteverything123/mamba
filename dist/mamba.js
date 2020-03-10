(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mamba"] = factory();
	else
		root["mamba"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _create_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _set_background_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _set_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _set_attribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _set_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _ortho__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _perspective__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _look_at__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15);
/* harmony import */ var _mult__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16);
/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17);

















/*
  initShaders是初始化顶点着色器和片元着色器的,并返回program,如果初始化失败,则返回-1
*/

const mamba = function() {

}
mamba.prototype.initShaders = _init_shaders__WEBPACK_IMPORTED_MODULE_0__["default"];
mamba.prototype.translate = _translate__WEBPACK_IMPORTED_MODULE_1__["default"];
mamba.prototype.createGL = _create_gl__WEBPACK_IMPORTED_MODULE_2__["default"];
mamba.prototype.setBackGroundColor = _set_background_color__WEBPACK_IMPORTED_MODULE_3__["default"];
mamba.prototype.setSize = _set_size__WEBPACK_IMPORTED_MODULE_4__["default"];
mamba.prototype.setAttr = _set_attribute__WEBPACK_IMPORTED_MODULE_5__["default"];
mamba.prototype.setMatrix = _set_matrix__WEBPACK_IMPORTED_MODULE_6__["default"];
mamba.prototype.ortho = _ortho__WEBPACK_IMPORTED_MODULE_7__["default"];
mamba.prototype.createCanvas = _create_canvas__WEBPACK_IMPORTED_MODULE_8__["default"];
mamba.prototype.render = _render__WEBPACK_IMPORTED_MODULE_9__["default"];
mamba.prototype.perspective = _perspective__WEBPACK_IMPORTED_MODULE_10__["default"];
mamba.prototype.normalize = _normalize__WEBPACK_IMPORTED_MODULE_11__["default"];
mamba.prototype.cross = _cross__WEBPACK_IMPORTED_MODULE_12__["default"];
mamba.prototype.dot = _dot__WEBPACK_IMPORTED_MODULE_13__["default"];
mamba.prototype.lookAt = _look_at__WEBPACK_IMPORTED_MODULE_14__["default"];
mamba.prototype.mult = _mult__WEBPACK_IMPORTED_MODULE_15__["default"];
mamba.prototype.rotateY = _rotate__WEBPACK_IMPORTED_MODULE_16__["rotateY"];
/* harmony default export */ __webpack_exports__["default"] = (mamba);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function initShaders(vertexShaderString, fragmentShaderString) {
  var vertShdr;
  var fragShdr;
  gl = this.gl;
  if (!vertexShaderString) {
    alert("未输入顶点着色器代码");
    return -1;
  } else {
    vertShdr = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShdr, vertexShaderString);
    gl.compileShader(vertShdr);
    if (!gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS)) {
      var msg = "顶点着色器编译失败,错误信息如下:" +
        "<pre>" + gl.getShaderInfoLog(vertShdr) + "</pre>";
      alert(msg);
      return -1;
    }
  }

  if (!fragmentShaderString) {
    alert("未输入片元着色器代码");
    return -1;
  } else {
    fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShdr, fragmentShaderString);
    gl.compileShader(fragShdr);
    if (!gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS)) {
      var msg = "片元着色器编译失败,错误信息如下:" +
        "<pre>" + gl.getShaderInfoLog(fragShdr) + "</pre>";
      alert(msg);
      return -1;
    }
  }

  var program = gl.createProgram();
  gl.attachShader(program, vertShdr);
  gl.attachShader(program, fragShdr);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var msg = "着色程序链接失败,错误信息如下:" +
      "<pre>" + gl.getProgramInfoLog(program) + "</pre>";
    alert(msg);
    return -1;
  }
  gl.useProgram(program);
  this.program = program;
  return program;
}

/* harmony default export */ __webpack_exports__["default"] = (initShaders);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function translate(x, y, z) {
  return new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1
  ])
}

/* harmony default export */ __webpack_exports__["default"] = (translate);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var makeFailHTML = function (msg) {
  return '' +
    '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' +
    '<td align="center">' +
    '<div style="display: table-cell; vertical-align: middle;">' +
    '<div style="">' + msg + '</div>' +
    '</div>' +
    '</td></tr></table>';
};

var GET_A_WEBGL_BROWSER = '' +
  'This page requires a browser that supports WebGL.<br/>' +
  '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>';

var OTHER_PROBLEM = '' +
  "It doesn't appear your computer can support WebGL.<br/>" +
  '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';

var createGL = function (opt_attribs) {
  var canvas = this.canvas;
  function showLink(str) {
    var container = canvas.parentNode;
    if (container) {
      container.innerHTML = makeFailHTML(str);
    }
  };

  if (!window.WebGLRenderingContext) {
    showLink(GET_A_WEBGL_BROWSER);
    return null;
  }

  var context = create3DContext(canvas, opt_attribs);
  if (!context) {
    showLink(OTHER_PROBLEM);
  }
  this.gl = context;
  context.enable(context.DEPTH_TEST);
  if (!context) {
		alert('您当前的浏览器不支持webgl');
  }
  return context;
};

/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
var create3DContext = function (canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  var context = null;
  for (var ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch (e) {}
    if (context) {
      break;
    }
  }
  return context;
}

/* harmony default export */ __webpack_exports__["default"] = (createGL);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setBackGroundColor = function(r, g, b, a = 1.0) {
  this.gl.clearColor(...arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (setBackGroundColor);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setSize(width, height) {
  this.gl.viewport(0, 0, ...arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (setSize);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setAttr(attrName, attrArr, number, format, stride, offset) {
  var gl = this.gl;
  var attr = gl.getAttribLocation(this.program, attrName);
  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, attrArr, gl.STATIC_DRAW);
  gl.vertexAttribPointer(attr, number, format, false, stride, offset);
  gl.enableVertexAttribArray(attr);
}

/* harmony default export */ __webpack_exports__["default"] = (setAttr);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setMatrix(matrixName, setFormat, matrix) {
  var gl = this.gl;
  var program = this.program;
  var m = gl.getUniformLocation(program, matrixName);
  switch(setFormat) {
    case 3:
      gl.uniformMatrix3fv(m, false, matrix);
      break;
    case 4:
      gl.uniformMatrix4fv(m, false, matrix);
      break;
    default:
      console.log('setFormat这个参数应该传3或者4')
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setMatrix);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ortho(left, right, bottom, top, near, far) {
  return new Float32Array([
    2 / (right - left), 0, 0, 0,
    0, 2 / (top - bottom), 0, 0,
    0, 0, 2 / (near - far), 0,
    (right + left) / (left - right), (top + bottom) / (bottom - top), (far + near) / (near - far), 1.0 
  ]);
}

/* harmony default export */ __webpack_exports__["default"] = (ortho);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// var cvs = document.createElement('canvas');
// cvs.width = 300;
// cvs.height = 200;
// document.body.appendChild(cvs);
// var Mamba = new mamba();
var canvasId = 0;
function createCanvas(width, height) {
  var cvs = document.createElement('canvas');
  cvs.width = width;
  cvs.height = height;
  document.body.appendChild(cvs);
  this.canvas = cvs;
  this.canvas.id = 'manba-' + canvasId;
  canvasId++;
  return cvs;
}

/* harmony default export */ __webpack_exports__["default"] = (createCanvas);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function render(num) {
  var gl = this.gl;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER);
  gl.drawArrays( gl.TRIANGLES, 0, num);
}

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function perspective(fovy, aspect, near, far) {
  var top = near * Math.tan(Math.PI * fovy / 180);
  var right = top * aspect;
  return new Float32Array([
    near / right, 0, 0, 0,
    0, near / top, 0, 0,
    0, 0, (near-far) / (far - near), -1,
    0, 0, 2 * far * near / (near - far), 0
  ]);
}

/* harmony default export */ __webpack_exports__["default"] = (perspective);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function normalize(arr) {
  var a = arr[0], b = arr[1], c = arr[2], d = arr[3];
  var abc = Math.sqrt(a * a + b * b + c * c, 0.5);
  var aa = a / abc, bb = b / abc, cc = c / abc;
  if (d) {
    return [aa, bb, cc, d];
  } else {
    return [aa, bb, cc];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (normalize);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cross(arr1, arr2) {
  var a1 = arr1[0], a2 = arr1[1], a3 = arr1[2],
      b1 = arr2[0], b2 = arr2[1], b3 = arr2[2];
  return [
    a2 * b3 - a3 * b2,
    a3 * b1 - a1 * b3,
    a1 * b2 - a2 * b1
  ]
}

/* harmony default export */ __webpack_exports__["default"] = (cross);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dot(arr1, arr2) {
  return arr1[0] * arr2[0] + arr1[1] * arr2[1] + arr1[2] * arr2[2]
}

/* harmony default export */ __webpack_exports__["default"] = (dot);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


function lookAt(eye, at, up) {
  //var vpn = [at[0] - eye[0], at[1] - eye[1], at[2] -eye[2]];
  var vpn = [eye[0] - at[0], eye[1] - at[1], eye[2] -at[2]];
  var n = Object(_normalize__WEBPACK_IMPORTED_MODULE_0__["default"])(vpn);
  var u = Object(_normalize__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_cross__WEBPACK_IMPORTED_MODULE_1__["default"])(up, n));
  var v = Object(_normalize__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_cross__WEBPACK_IMPORTED_MODULE_1__["default"])(n, u));
  var x = eye[0], y = eye[1], z = eye[2];
  return new Float32Array([
    u[0], v[0], n[0], 0,
    u[1], v[1], n[1], 0,
    u[2], v[2], n[2], 0,
    -x * u[0] - y * u[1] - z * u[2],
    -x * v[0] - y * v[1] - z * v[2],
    -x * n[0] - y * n[1] - z * n[2],
    1.0
  ]);
}

/* harmony default export */ __webpack_exports__["default"] = (lookAt);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mult(mat1, mat2) {
  var x0 = mat1[0], y0 = mat2[0],
      x1 = mat1[1], y1 = mat2[1],
      x2 = mat1[2], y2 = mat2[2],
      x3 = mat1[3], y3 = mat2[3],
      x4 = mat1[4], y4 = mat2[4],
      x5 = mat1[5], y5 = mat2[5],
      x6 = mat1[6], y6 = mat2[6],
      x7 = mat1[7], y7 = mat2[7],
      x8 = mat1[8], y8 = mat2[8],
      x9 = mat1[9], y9 = mat2[9],
      x10 = mat1[10], y10 = mat2[10],
      x11 = mat1[11], y11 = mat2[11],
      x12 = mat1[12], y12 = mat2[12],
      x13 = mat1[13], y13 = mat2[13],
      x14 = mat1[14], y14 = mat2[14],
      x15 = mat1[15], y15 = mat2[15];
  var m0 = x0 * y0 + x1 * y4 + x2 * y8 + x3 * y12,
      m1 = x4 * y0 + x5 * y4 + x6 * y8 + x7 * y12,
      m2 = x8 * y0 + x9 * y4 + x10 * y8 + x11 * y12,
      m3 = x12 * y0 + x13 * y4 + x14 * y8 + x15 * y12,
      m4 = x0 * y1 + x1 * y5 + x2 * y9 + x3 * y13,
      m5 = x4 * y1 + x5 * y5 + x6 * y9 + x7 * y13,
      m6 = x8 * y1 + x9 * y5 + x10 * y9 + x11 * y13,
      m7 = x12 * y1 + x13 * y5 + x14 * y9 + x15 * y13,
      m8 = x0 * y2 + x1 * y6 + x2 * y10 + x3 * y14,
      m9 = x4 * y2 + x5 * y6 + x6 * y10 + x7 * y14,
      m10 = x8 * y2 + x9 * y6 + x10 * y10 + x11 * y14,
      m11 = x12 * y2 + x13 * y6 + x14 * y10 + x15 * y14,
      m12 = x0 * y3 + x1 * y7 + x2 * y11 + x3 * y15,
      m13 = x4 * y3 + x5 * y7 + x6 * y11 + x7 * y15,
      m14 = x8 * y3 + x9 * y7 + x10 * y11 + x11 * y15,
      m15 = x12 * y3 + x13 * y7 + x14 * y11 + x15 * y15;
  return new Float32Array([
    m0, m4, m8, m12,
    m1, m5, m9, m13,
    m2, m6, m10, m14,
    m3, m7, m11, m15
  ]);
}

/* harmony default export */ __webpack_exports__["default"] = (mult);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
function rotateY(theta) {
  theta = Math.PI * theta / 180;
  var cos = Math.cos(theta);
  var sin = Math.sin(theta);
  return new Float32Array([
    cos, 0, -sin, 0,
    0, 1, 0, 0,
    sin, 0, cos, 0,
    0, 0, 0, 1
  ])
}



/***/ })
/******/ ])["default"];
});