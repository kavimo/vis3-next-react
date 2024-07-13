"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vis3 = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Vis3 = exports.Vis3 = function Vis3(props) {
  // Ref to store the container ID
  var containerIDRef = (0, _react.useRef)('');
  if (!containerIDRef.current) {
    // Generate a unique ID for the container if it hasn't been generated yet
    containerIDRef.current = Math.random().toString(36).substring(2);
  }
  (0, _react.useEffect)(function () {
    var generatedID = containerIDRef.current;

    // If a callback function is provided, set it on the window object
    if (typeof props.onLoad === 'function') {
      window["vis_callback_".concat(generatedID)] = props.onLoad;
    }

    // Create a script element and set its attributes
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://".concat((props === null || props === void 0 ? void 0 : props.domainName) || '', "/").concat((props === null || props === void 0 ? void 0 : props.ID) || '', "/embed?container=").concat(generatedID, "&callback=vis_callback_").concat(generatedID);

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script element when the component unmounts or props change
    return function () {
      document.body.removeChild(script);
      // Remove the callback function from the window object
      if (typeof props.onLoad === 'function') {
        delete window["vis_callback_".concat(generatedID)];
      }
    };
  }, [props]); // Run this effect whenever props change

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    id: containerIDRef.current
  }));
};