// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");


function jsReflectClass(data) {
  let str = Object.prototype.toString.call(data);
  return str.slice(8, -1);
}

;

var Unsafe = { };

function classifyOpt(binaryLike) {
  if (typeof binaryLike === "string") {
    return /* String */Block.__(0, [binaryLike]);
  } else if (Buffer.isBuffer(binaryLike)) {
    return /* Buffer */Block.__(1, [binaryLike]);
  } else {
    var match = jsReflectClass(binaryLike);
    switch (match) {
      case "DataView" :
          return /* DataView */Block.__(11, [binaryLike]);
      case "Float32Array" :
          return /* Float32Array */Block.__(9, [binaryLike]);
      case "Float64Array" :
          return /* Float64Array */Block.__(10, [binaryLike]);
      case "Int16Array" :
          return /* Int16Array */Block.__(6, [binaryLike]);
      case "Int32Array" :
          return /* Int32Array */Block.__(8, [binaryLike]);
      case "Int8Array" :
          return /* Int8Array */Block.__(2, [binaryLike]);
      case "Uint16Array" :
          return /* Uint16Array */Block.__(5, [binaryLike]);
      case "Uint32Array" :
          return /* Uint32Array */Block.__(7, [binaryLike]);
      case "Uint8Array" :
          return /* Uint8Array */Block.__(3, [binaryLike]);
      case "Uint8ClampedArray" :
          return /* Uint8ClampedArray */Block.__(4, [binaryLike]);
      default:
        return ;
    }
  }
}

function classifyExn(binaryLike) {
  var match = classifyOpt(binaryLike);
  if (match !== undefined) {
    return match;
  } else {
    return Pervasives.failwith("Unknown Data Type");
  }
}

function classify(binaryLike) {
  var match = classifyOpt(binaryLike);
  if (match !== undefined) {
    return /* Ok */Block.__(0, [match]);
  } else {
    return /* Error */Block.__(1, [binaryLike]);
  }
}

exports.Unsafe = Unsafe;
exports.classifyOpt = classifyOpt;
exports.classifyExn = classifyExn;
exports.classify = classify;
/*  Not a pure module */