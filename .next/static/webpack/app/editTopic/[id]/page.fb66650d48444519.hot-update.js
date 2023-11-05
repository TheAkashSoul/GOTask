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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditTopicForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction EditTopicForm(param) {\n    let { id, title, description } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [newTitle, setNewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(title);\n    const [newDescription, setNewDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(description);\n    const handleUpdate = async (e)=>{\n        e.preventDefault();\n        if (!newTitle || !newDescription) {\n            alert(\"Title and Description is required\");\n            return;\n        }\n        try {\n            const res = await fetch(\"http://localhost:3000/api/topics/\".concat(id), {\n                method: \"PUT\",\n                headers: {\n                    \"content-type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    newTitle,\n                    newDescription\n                })\n            });\n            if (res.ok) {\n                router.push(\"/\");\n                router.refresh();\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleUpdate,\n        className: \"flex flex-col gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setNewTitle(e.target.value),\n                value: newTitle,\n                className: \"border border-slate-500 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Topic Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setNewDescription(e.target.value),\n                value: newDescription,\n                className: \"border border-slate-500 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Topic Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-green-600 px-6 py-3 font-bold w-fit text-white\",\n                children: \"Update Topic\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akash\\\\OneDrive\\\\Desktop\\\\mongodbcrud\\\\components\\\\EditTopicForm.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(EditTopicForm, \"BCYRh3weqrTVhkl9WoDvX8HRsWo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditTopicForm;\nvar _c;\n$RefreshReg$(_c, \"EditTopicForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRWRpdFRvcGljRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDWDtBQUVqQixTQUFTRSxjQUFjLEtBQTBCO1FBQTFCLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBMUI7O0lBRWxDLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUN4QixNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUNHO0lBQ3pDLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR1QsK0NBQVFBLENBQUNJO0lBSXJELE1BQU1NLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBRyxDQUFDTixZQUFZLENBQUNFLGdCQUFlO1lBQzVCSyxNQUFNO1lBQ047UUFDSjtRQUVBLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sb0NBQXVDLE9BQUhiLEtBQU07Z0JBQ2xFYyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBQ2Q7b0JBQVVFO2dCQUFjO1lBQ2xEO1lBQ0EsSUFBR00sSUFBSU8sRUFBRSxFQUFDO2dCQUNOaEIsT0FBT2lCLElBQUksQ0FBQztnQkFDWmpCLE9BQU9rQixPQUFPO1lBQ2xCO1FBQ0EsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFaEI7SUFHSjtJQUVBLHFCQUNJLDhEQUFDRztRQUNEQyxVQUFVbEI7UUFDVm1CLFdBQVU7OzBCQUNOLDhEQUFDQztnQkFDREMsVUFBVSxDQUFDcEIsSUFBTUosWUFBWUksRUFBRXFCLE1BQU0sQ0FBQ0MsS0FBSztnQkFDM0NBLE9BQU8zQjtnQkFDUHVCLFdBQVU7Z0JBQW9DSyxNQUFLO2dCQUFPQyxhQUFZOzs7Ozs7MEJBRXRFLDhEQUFDTDtnQkFDREMsVUFBVSxDQUFDcEIsSUFBTUYsa0JBQWtCRSxFQUFFcUIsTUFBTSxDQUFDQyxLQUFLO2dCQUNqREEsT0FBT3pCO2dCQUNQcUIsV0FBVTtnQkFBb0NLLE1BQUs7Z0JBQU9DLGFBQVk7Ozs7OzswQkFFdEUsOERBQUNDO2dCQUNERixNQUFLO2dCQUNMTCxXQUFVOzBCQUFvRDs7Ozs7Ozs7Ozs7O0FBRzFFO0dBdkR3QjVCOztRQUVMRixzREFBU0E7OztLQUZKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0VkaXRUb3BpY0Zvcm0uanN4PzgwNjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VG9waWNGb3JtKHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KXtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtuZXdUaXRsZSwgc2V0TmV3VGl0bGVdID0gdXNlU3RhdGUodGl0bGUpXHJcbiAgICBjb25zdCBbbmV3RGVzY3JpcHRpb24sIHNldE5ld0Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGRlc2NyaXB0aW9uKVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZighbmV3VGl0bGUgfHwgIW5ld0Rlc2NyaXB0aW9uKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJUaXRsZSBhbmQgRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RvcGljcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe25ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbn0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihyZXMub2spe1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBcclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTNcIj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e25ld1RpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCBweC04IHB5LTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVG9waWMgVGl0bGVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0Rlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e25ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTUwMCBweC04IHB5LTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVG9waWMgRGVzY3JpcHRpb25cIiAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCBweC02IHB5LTMgZm9udC1ib2xkIHctZml0IHRleHQtd2hpdGVcIj5VcGRhdGUgVG9waWM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJFZGl0VG9waWNGb3JtIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicm91dGVyIiwibmV3VGl0bGUiLCJzZXROZXdUaXRsZSIsIm5ld0Rlc2NyaXB0aW9uIiwic2V0TmV3RGVzY3JpcHRpb24iLCJoYW5kbGVVcGRhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwdXNoIiwicmVmcmVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/EditTopicForm.jsx\n"));

/***/ })

});