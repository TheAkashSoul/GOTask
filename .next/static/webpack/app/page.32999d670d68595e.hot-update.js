"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Removebtn.jsx":
/*!**********************************!*\
  !*** ./components/Removebtn.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Removebtn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_HiOutlineTrash_react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineTrash!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst RemoveTopic = async ()=>{\n    const confirmed = confirm(\"Are you sure to remove topic?\");\n    if (confirmed) {\n        await fetch(\"http://localhost:3000/api/topics?id=\".concat(id), {\n            method: \"DELETE\"\n        });\n    }\n};\n_c = RemoveTopic;\nfunction Removebtn(param) {\n    let { id: id1 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: RemoveTopic,\n        className: \"text-red-400\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineTrash_react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineTrash, {\n            size: 24\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\Removebtn.jsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\Removebtn.jsx\",\n        lineNumber: 15,\n        columnNumber: 12\n    }, this);\n}\n_c1 = Removebtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"RemoveTopic\");\n$RefreshReg$(_c1, \"Removebtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVtb3ZlYnRuLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWdEO0FBRWhELE1BQU1DLGNBQWM7SUFDaEIsTUFBTUMsWUFBWUMsUUFBUTtJQUMxQixJQUFHRCxXQUFVO1FBQ1QsTUFBTUUsTUFBTSx1Q0FBMEMsT0FBSEMsS0FBTTtZQUNyREMsUUFBUTtRQUNaO0lBQ0o7QUFDSjtLQVBNTDtBQVFTLFNBQVNNLFVBQVUsS0FBSTtRQUFKLEVBQUNGLElBQUFBLEdBQUUsRUFBQyxHQUFKO0lBRTlCLHFCQUFPLDhEQUFDRztRQUFPQyxTQUFTUjtRQUFhUyxXQUFVO2tCQUMzQyw0RUFBQ1YsZ0dBQWNBO1lBQUNXLE1BQU07Ozs7Ozs7Ozs7O0FBRTlCO01BTHdCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlbW92ZWJ0bi5qc3g/MTRlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgSGlPdXRsaW5lVHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuXHJcbmNvbnN0IFJlbW92ZVRvcGljID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB0byByZW1vdmUgdG9waWM/XCIpXHJcbiAgICBpZihjb25maXJtZWQpe1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RvcGljcz9pZD0ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVtb3ZlYnRuKHtpZH0pe1xyXG5cclxuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e1JlbW92ZVRvcGljfSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj5cclxuICAgICAgICA8SGlPdXRsaW5lVHJhc2ggc2l6ZT17MjR9IC8+XHJcbiAgICA8L2J1dHRvbj5cclxufSJdLCJuYW1lcyI6WyJIaU91dGxpbmVUcmFzaCIsIlJlbW92ZVRvcGljIiwiY29uZmlybWVkIiwiY29uZmlybSIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJSZW1vdmVidG4iLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Removebtn.jsx\n"));

/***/ })

});