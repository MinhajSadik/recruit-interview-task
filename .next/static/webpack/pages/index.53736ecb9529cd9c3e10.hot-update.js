"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_minhajsadik_Documents_my_projects_recruit_interview_task_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Snake.module.css */ \"./styles/Snake.module.css\");\n/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/minhajsadik/Documents/my-projects/recruit-interview-task/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Config = {\n  height: 25,\n  width: 25,\n  cellSize: 22\n};\nvar CellType = {\n  Snake: \"snake\",\n  Food: \"food\",\n  Empty: \"empty\"\n};\nvar Direction = {\n  Left: {\n    x: -1,\n    y: 0\n  },\n  Right: {\n    x: 1,\n    y: 0\n  },\n  Top: {\n    x: 0,\n    y: -1\n  },\n  Bottom: {\n    x: 0,\n    y: 1\n  }\n};\n\nvar Cell = function Cell(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      type = _ref.type;\n\n  var getStyles = function getStyles() {\n    switch (type) {\n      case CellType.Snake:\n        return {\n          backgroundColor: \"yellowgreen\",\n          borderRadius: 8,\n          padding: 2\n        };\n\n      case CellType.Food:\n        return {\n          backgroundColor: \"darkorange\",\n          borderRadius: 20,\n          width: 32,\n          height: 32\n        };\n\n      default:\n        return {};\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().cellContainer),\n    style: {\n      left: x * Config.cellSize,\n      top: y * Config.cellSize,\n      width: Config.cellSize,\n      height: Config.cellSize\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().cell),\n      style: getStyles()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Cell;\n\nvar getRandomCell = function getRandomCell() {\n  return {\n    x: Math.floor(Math.random() * Config.width),\n    y: Math.floor(Math.random() * Config.width)\n  };\n};\n\nvar Snake = function Snake() {\n  _s();\n\n  var getDefaultSnake = function getDefaultSnake() {\n    return [{\n      x: 8,\n      y: 12\n    }, {\n      x: 7,\n      y: 12\n    }, {\n      x: 6,\n      y: 12\n    }];\n  };\n\n  var grid = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(); // snake[0] is head and snake[snake.length - 1] is tail\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getDefaultSnake()),\n      snake = _useState[0],\n      setSnake = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Direction.Right),\n      direction = _useState2[0],\n      setDirection = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    x: 4,\n    y: 10\n  }),\n      food = _useState3[0],\n      setFood = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      score = _useState4[0],\n      setScore = _useState4[1]; // move the snake\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var runSingleStep = function runSingleStep() {\n      setSnake(function (snake) {\n        var head = snake[0];\n        var newHead = {\n          x: head.x + direction.x,\n          y: head.y + direction.y\n        }; // make a new snake by extending head\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax\n\n        var newSnake = [newHead].concat((0,_Users_minhajsadik_Documents_my_projects_recruit_interview_task_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(snake)); // remove tail\n\n        newSnake.pop();\n        return newSnake;\n      });\n    };\n\n    runSingleStep();\n    var timer = setInterval(runSingleStep, 500);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, [direction, food]); // incrementTail function\n\n  var incrementTail = function incrementTail() {\n    var head = snake[snake.length - 1];\n    var newTail = snake;\n    newTail.push(head);\n  }; // update score whenever head touches a food\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var head = snake[0];\n\n    if (isFood(head)) {\n      setScore(function (score) {\n        return score + 1;\n      }); //incrementTail function call\n\n      incrementTail();\n      var newFood = getRandomCell();\n\n      while (isSnake(newFood)) {\n        newFood = getRandomCell();\n      }\n\n      setFood(newFood);\n    }\n  }, [snake]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var handleNavigation = function handleNavigation(event) {\n      switch (event.key) {\n        case \"ArrowUp\":\n          setDirection(Direction.Top);\n          break;\n\n        case \"ArrowDown\":\n          setDirection(Direction.Bottom);\n          break;\n\n        case \"ArrowLeft\":\n          setDirection(Direction.Left);\n          break;\n\n        case \"ArrowRight\":\n          setDirection(Direction.Right);\n          break;\n      }\n    };\n\n    window.addEventListener(\"keydown\", handleNavigation);\n    return function () {\n      return window.removeEventListener(\"keydown\", handleNavigation);\n    };\n  }, []); // ?. is called optional chaining\n  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining\n\n  var isFood = function isFood(_ref2) {\n    var x = _ref2.x,\n        y = _ref2.y;\n    return (food === null || food === void 0 ? void 0 : food.x) === x && (food === null || food === void 0 ? void 0 : food.y) === y;\n  };\n\n  var isSnake = function isSnake(_ref3) {\n    var x = _ref3.x,\n        y = _ref3.y;\n    return snake.find(function (position) {\n      return position.x === x && position.y === y;\n    });\n  };\n\n  var cells = [];\n\n  for (var x = 0; x < Config.width; x++) {\n    for (var y = 0; y < Config.height; y++) {\n      var type = CellType.Empty;\n\n      if (isFood({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Food;\n      } else if (isSnake({\n        x: x,\n        y: y\n      })) {\n        type = CellType.Snake;\n      }\n\n      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n        x: x,\n        y: y,\n        type: type\n      }, \"\".concat(x, \"-\").concat(y), false, {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 18\n      }, _this));\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n      style: {\n        width: Config.width * Config.cellSize\n      },\n      children: [\"Score: \", score]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n      style: {\n        height: Config.height * Config.cellSize,\n        width: Config.width * Config.cellSize\n      },\n      children: cells\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 179,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Snake, \"RHHDYRBgFCtzyh1XO+KMVB/vb/g=\");\n\n_c2 = Snake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return Promise.resolve(Snake);\n}, {\n  ssr: false\n}));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Cell\");\n$RefreshReg$(_c2, \"Snake\");\n$RefreshReg$(_c3, \"%default%$dynamic\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Vyw4REFBQyxJQUFEO0FBQXdCLFNBQUMsRUFBRXhDLENBQTNCO0FBQThCLFNBQUMsRUFBRUMsQ0FBakM7QUFBb0MsWUFBSSxFQUFFSztBQUExQyxtQkFBY04sQ0FBZCxjQUFtQkMsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFYO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRVosMkVBQWhCO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVBLHdFQURiO0FBRUUsV0FBSyxFQUFFO0FBQUVHLFFBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxLQUFQLEdBQWVGLE1BQU0sQ0FBQ0c7QUFBL0IsT0FGVDtBQUFBLDRCQUlVa0MsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQ0UsZUFBUyxFQUFFdEMsc0VBRGI7QUFFRSxXQUFLLEVBQUU7QUFDTEUsUUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsR0FBZ0JELE1BQU0sQ0FBQ0csUUFEMUI7QUFFTEQsUUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNFLEtBQVAsR0FBZUYsTUFBTSxDQUFDRztBQUZ4QixPQUZUO0FBQUEsZ0JBT0cyRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQW5JRDs7R0FBTXpEOztNQUFBQTtBQXFJTiwrREFBZSxNQUFBVixtREFBTyxPQUFDO0FBQUEsU0FBTXNFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjdELEtBQWhCLENBQU47QUFBQSxDQUFELEVBQStCO0FBQ25EOEQsRUFBQUEsR0FBRyxFQUFFO0FBRDhDLENBQS9CLENBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDb25maWcgPSB7XG4gIGhlaWdodDogMjUsXG4gIHdpZHRoOiAyNSxcbiAgY2VsbFNpemU6IDIyLFxufTtcblxuY29uc3QgQ2VsbFR5cGUgPSB7XG4gIFNuYWtlOiBcInNuYWtlXCIsXG4gIEZvb2Q6IFwiZm9vZFwiLFxuICBFbXB0eTogXCJlbXB0eVwiLFxufTtcblxuY29uc3QgRGlyZWN0aW9uID0ge1xuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXG4gIFJpZ2h0OiB7IHg6IDEsIHk6IDAgfSxcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXG59O1xuXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgQ2VsbFR5cGUuRm9vZDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgd2lkdGg6IENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUNlbGwgPSAoKSA9PiAoe1xuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxufSk7XG5cbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xuICBjb25zdCBnZXREZWZhdWx0U25ha2UgPSAoKSA9PiBbXG4gICAgeyB4OiA4LCB5OiAxMiB9LFxuICAgIHsgeDogNywgeTogMTIgfSxcbiAgICB7IHg6IDYsIHk6IDEyIH0sXG4gIF07XG4gIGNvbnN0IGdyaWQgPSB1c2VSZWYoKTtcblxuICAvLyBzbmFrZVswXSBpcyBoZWFkIGFuZCBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXSBpcyB0YWlsXG4gIGNvbnN0IFtzbmFrZSwgc2V0U25ha2VdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdFNuYWtlKCkpO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoRGlyZWN0aW9uLlJpZ2h0KTtcblxuICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZSh7IHg6IDQsIHk6IDEwIH0pO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIG1vdmUgdGhlIHNuYWtlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcnVuU2luZ2xlU3RlcCA9ICgpID0+IHtcbiAgICAgIHNldFNuYWtlKChzbmFrZSkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XG4gICAgICAgIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xuXG4gICAgICAgIC8vIG1ha2UgYSBuZXcgc25ha2UgYnkgZXh0ZW5kaW5nIGhlYWRcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXG4gICAgICAgIG5ld1NuYWtlLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBydW5TaW5nbGVTdGVwKCk7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChydW5TaW5nbGVTdGVwLCA1MDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbZGlyZWN0aW9uLCBmb29kXSk7XG5cbiAgLy8gaW5jcmVtZW50VGFpbCBmdW5jdGlvblxuICBjb25zdCBpbmNyZW1lbnRUYWlsID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWQgPSBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBuZXdUYWlsID0gc25ha2U7XG5cbiAgICBuZXdUYWlsLnB1c2goaGVhZCk7XG4gIH07XG5cbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xuICAgICAgc2V0U2NvcmUoKHNjb3JlKSA9PiB7XG4gICAgICAgIHJldHVybiBzY29yZSArIDE7XG4gICAgICB9KTtcblxuICAgICAgLy9pbmNyZW1lbnRUYWlsIGZ1bmN0aW9uIGNhbGxcbiAgICAgIGluY3JlbWVudFRhaWwoKTtcblxuICAgICAgbGV0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XG4gICAgICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xuICAgICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xuICAgICAgfVxuXG4gICAgICBzZXRGb29kKG5ld0Zvb2QpO1xuICAgIH1cbiAgfSwgW3NuYWtlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uVG9wKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Cb3R0b20pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkxlZnQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xuICB9LCBbXSk7XG5cbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXG4gIC8vIHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL09wdGlvbmFsX2NoYWluaW5nXG4gIGNvbnN0IGlzRm9vZCA9ICh7IHgsIHkgfSkgPT4gZm9vZD8ueCA9PT0geCAmJiBmb29kPy55ID09PSB5O1xuXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XG4gICAgc25ha2UuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT09IHggJiYgcG9zaXRpb24ueSA9PT0geSk7XG5cbiAgY29uc3QgY2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBDb25maWcud2lkdGg7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ29uZmlnLmhlaWdodDsgeSsrKSB7XG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xuICAgICAgaWYgKGlzRm9vZCh7IHgsIHkgfSkpIHtcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLkZvb2Q7XG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5TbmFrZTtcbiAgICAgIH1cbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUgfX1cbiAgICAgID5cbiAgICAgICAgU2NvcmU6IHtzY29yZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcbiAgICAgICAgICB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2VsbHN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFNuYWtlKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ29uZmlnIiwiaGVpZ2h0Iiwid2lkdGgiLCJjZWxsU2l6ZSIsIkNlbGxUeXBlIiwiU25ha2UiLCJGb29kIiwiRW1wdHkiLCJEaXJlY3Rpb24iLCJMZWZ0IiwieCIsInkiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsIkNlbGwiLCJ0eXBlIiwiZ2V0U3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImNlbGxDb250YWluZXIiLCJsZWZ0IiwidG9wIiwiY2VsbCIsImdldFJhbmRvbUNlbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXREZWZhdWx0U25ha2UiLCJncmlkIiwic25ha2UiLCJzZXRTbmFrZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsImZvb2QiLCJzZXRGb29kIiwic2NvcmUiLCJzZXRTY29yZSIsInJ1blNpbmdsZVN0ZXAiLCJoZWFkIiwibmV3SGVhZCIsIm5ld1NuYWtlIiwicG9wIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpbmNyZW1lbnRUYWlsIiwibGVuZ3RoIiwibmV3VGFpbCIsInB1c2giLCJpc0Zvb2QiLCJuZXdGb29kIiwiaXNTbmFrZSIsImhhbmRsZU5hdmlnYXRpb24iLCJldmVudCIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmluZCIsInBvc2l0aW9uIiwiY2VsbHMiLCJjb250YWluZXIiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});