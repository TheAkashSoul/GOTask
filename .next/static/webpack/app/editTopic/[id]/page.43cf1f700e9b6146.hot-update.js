"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/editTopic/[id]/page",{

/***/ "(app-pages-browser)/./components/EditTopicForm.jsx":
/*!**************************************!*\
  !*** ./components/EditTopicForm.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditTopicForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction EditTopicForm(param) {\n    let { id, title, description } = param;\n    _s();\n    const [newTitle, setNewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(title);\n    const [newDescription, setNewDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(description);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border border-slate-500 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Topic Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border border-slate-500 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Topic Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-green-600 px-6 py-3 font-bold w-fit text-white\",\n                children: \"Update Topic\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(EditTopicForm, \"7zAE1EMVmtxIIFT0Ir15FK004e8=\");\n_c = EditTopicForm;\nvar _c;\n$RefreshReg$(_c, \"EditTopicForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRWRpdFRvcGljRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWdDO0FBRWpCLFNBQVNDLGNBQWMsS0FBMEI7UUFBMUIsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRSxHQUExQjs7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDRztJQUN6QyxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdSLCtDQUFRQSxDQUFDSTtJQUVyRCxxQkFDSSw4REFBQ0s7UUFBS0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFNRCxXQUFVO2dCQUFvQ0UsTUFBSztnQkFBT0MsYUFBWTs7Ozs7OzBCQUU3RSw4REFBQ0Y7Z0JBQU1ELFdBQVU7Z0JBQW9DRSxNQUFLO2dCQUFPQyxhQUFZOzs7Ozs7MEJBRTdFLDhEQUFDQztnQkFBT0osV0FBVTswQkFBb0Q7Ozs7Ozs7Ozs7OztBQUdsRjtHQWJ3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0VG9waWNGb3JtLmpzeD84MDY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VG9waWNGb3JtKHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KXtcclxuICAgIGNvbnN0IFtuZXdUaXRsZSwgc2V0TmV3VGl0bGVdID0gdXNlU3RhdGUodGl0bGUpXHJcbiAgICBjb25zdCBbbmV3RGVzY3JpcHRpb24sIHNldE5ld0Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGRlc2NyaXB0aW9uKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS01MDAgcHgtOCBweS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRvcGljIFRpdGxlXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCBweC04IHB5LTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVG9waWMgRGVzY3JpcHRpb25cIiAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi02MDAgcHgtNiBweS0zIGZvbnQtYm9sZCB3LWZpdCB0ZXh0LXdoaXRlXCI+VXBkYXRlIFRvcGljPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRWRpdFRvcGljRm9ybSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5ld1RpdGxlIiwic2V0TmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsInNldE5ld0Rlc2NyaXB0aW9uIiwiZm9ybSIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/EditTopicForm.jsx\n"));

/***/ })

});