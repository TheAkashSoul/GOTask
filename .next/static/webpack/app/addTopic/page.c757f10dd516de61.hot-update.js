"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addTopic/page",{

/***/ "(app-pages-browser)/./app/addTopic/page.js":
/*!******************************!*\
  !*** ./app/addTopic/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTopic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddTopic() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!title || !description) {\n            alert(\"Title and Description is required\");\n            return;\n        }\n        try {\n            const res = await fetch(\"http://localhost:3000/api/topics\", {\n                method: \"POST\",\n                headers: {\n                    \"content-type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title,\n                    description\n                })\n            });\n            if (res.ok) {\n                router.push(\"/\");\n                router.refresh();\n            } else {\n                throw new error(\"failed to add topic\");\n            }\n        } catch (error1) {\n            console.log(\"Failed to fetch data\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex flex-col gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setTitle(e.target.value),\n                value: title,\n                className: \"border border-slate-500 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Topic Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\app\\\\addTopic\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setDescription(e.target.value),\n                value: description,\n                className: \"border border-slate-500 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Topic Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\app\\\\addTopic\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-green-600 px-6 py-3 font-bold w-fit text-white\",\n                children: \"Add Topic\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\app\\\\addTopic\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\app\\\\addTopic\\\\page.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(AddTopic, \"6qhbAl2v+EEVPVbwkCz27Whrrs0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddTopic;\nvar _c;\n$RefreshReg$(_c, \"AddTopic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGRUb3BpYy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ1k7QUFFN0IsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTU8sU0FBU04sMERBQVNBO0lBRXhCLE1BQU1PLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBRyxDQUFDUCxTQUFTLENBQUNFLGFBQVk7WUFDdEJNLE1BQU07WUFDTjtRQUNKO1FBQ0EsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxvQ0FBb0M7Z0JBQzVEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBQ2Y7b0JBQU9FO2dCQUFXO1lBQzVDO1lBQ0EsSUFBR08sSUFBSU8sRUFBRSxFQUFDO2dCQUNOWixPQUFPYSxJQUFJLENBQUM7Z0JBQ1piLE9BQU9jLE9BQU87WUFDbEIsT0FBSztnQkFDRCxNQUFNLElBQUlDLE1BQU87WUFDckI7UUFDQSxFQUFFLE9BQU9BLFFBQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDO1FBRWhCO0lBSUo7SUFDQSxxQkFDSSw4REFBQ0M7UUFBS0MsVUFBVWxCO1FBQWNtQixXQUFVOzswQkFDcEMsOERBQUNDO2dCQUNEQyxVQUFVLENBQUNwQixJQUFNTCxTQUFTSyxFQUFFcUIsTUFBTSxDQUFDQyxLQUFLO2dCQUN4Q0EsT0FBTzVCO2dCQUNQd0IsV0FBVTtnQkFBb0NLLE1BQUs7Z0JBQU9DLGFBQVk7Ozs7OzswQkFFdEUsOERBQUNMO2dCQUNEQyxVQUFVLENBQUNwQixJQUFNSCxlQUFlRyxFQUFFcUIsTUFBTSxDQUFDQyxLQUFLO2dCQUM5Q0EsT0FBTzFCO2dCQUNQc0IsV0FBVTtnQkFBb0NLLE1BQUs7Z0JBQU9DLGFBQVk7Ozs7OzswQkFFdEUsOERBQUNDO2dCQUNERixNQUFLO2dCQUNMTCxXQUFVOzBCQUFvRDs7Ozs7Ozs7Ozs7O0FBRzFFO0dBbkR3QnpCOztRQUdMRCxzREFBU0E7OztLQUhKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRkVG9waWMvcGFnZS5qcz80ODM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvcGljKCl7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZighdGl0bGUgfHwgIWRlc2NyaXB0aW9uKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJUaXRsZSBhbmQgRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdG9waWNzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0aXRsZSwgZGVzY3JpcHRpb259KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYocmVzLm9rKXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBlcnJvciAoXCJmYWlsZWQgdG8gYWRkIHRvcGljXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTNcIj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCBweC04IHB5LTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVG9waWMgVGl0bGVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtNTAwIHB4LTggcHktMlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi02MDAgcHgtNiBweS0zIGZvbnQtYm9sZCB3LWZpdCB0ZXh0LXdoaXRlXCI+QWRkIFRvcGljPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQWRkVG9waWMiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInB1c2giLCJyZWZyZXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/addTopic/page.js\n"));

/***/ })

});