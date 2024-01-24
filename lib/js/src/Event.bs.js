// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function classify(evt) {
  var match = typeof evt;
  switch (match) {
    case "string" :
        return {
                TAG: "String",
                _0: evt
              };
    case "symbol" :
        return {
                TAG: "Symbol",
                _0: evt
              };
    default:
      return "Unknown";
  }
}

function eq(event1, event2) {
  var match = typeof event1;
  var match$1 = typeof event2;
  switch (match) {
    case "string" :
        if (match$1 === "string") {
          return event1 === event2;
        } else {
          return false;
        }
    case "symbol" :
        if (match$1 === "symbol") {
          return event1 === event2;
        } else {
          return false;
        }
    default:
      return false;
  }
}

exports.classify = classify;
exports.eq = eq;
/* No side effect */