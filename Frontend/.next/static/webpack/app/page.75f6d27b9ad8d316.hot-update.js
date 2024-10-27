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

/***/ "(app-pages-browser)/./components/shared/checkbox-filters-group.tsx":
/*!******************************************************!*\
  !*** ./components/shared/checkbox-filters-group.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CheckboxFiltersGroup: function() { return /* binding */ CheckboxFiltersGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _filter_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-checkbox */ \"(app-pages-browser)/./components/shared/filter-checkbox.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ CheckboxFiltersGroup auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CheckboxFiltersGroup = (param)=>{\n    let { title, items, defaultItems, limit = 5, searchInputPlaceholder = \"Поиск...\", className, onChange, defaultValue } = param;\n    _s();\n    const [showAll, setShowAll] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const list = showAll ? items : defaultItems === null || defaultItems === void 0 ? void 0 : defaultItems.slice(0, limit);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-bold mb-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            showAll && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                    placeholder: searchInputPlaceholder,\n                    className: \"bg-gray-50 border-none\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n                lineNumber: 28,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar\",\n                children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_filter_checkbox__WEBPACK_IMPORTED_MODULE_2__.FilterCheckbox, {\n                        text: item.text,\n                        value: item.value,\n                        endAdornment: item.endAdornment,\n                        checked: false,\n                        onCheckedChange: (ids)=>console.log(ids)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            items.length > limit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: showAll ? \"border-t border-t-neutral-100 mt-4\" : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setShowAll(!showAll),\n                    className: \"text-primary mt-3\",\n                    children: showAll ? \"Скрыть\" : \"+ Показать всё\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Anton Onuchin\\\\Documents\\\\GitHub\\\\next-pizza\\\\Frontend\\\\components\\\\shared\\\\checkbox-filters-group.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CheckboxFiltersGroup, \"XC0nqMp5RnZIWkiCcJL//MdTvak=\");\n_c = CheckboxFiltersGroup;\nvar _c;\n$RefreshReg$(_c, \"CheckboxFiltersGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL2NoZWNrYm94LWZpbHRlcnMtZ3JvdXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTBCO0FBQzhDO0FBQ3BDO0FBZ0I3QixNQUFNRyx1QkFBd0M7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxRQUFRLENBQUMsRUFBRUMseUJBQXlCLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRTs7SUFDbkssTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdiLHFEQUFjLENBQUM7SUFDN0MsTUFBTWUsT0FBT0gsVUFBVVAsUUFBUUMseUJBQUFBLG1DQUFBQSxhQUFjVSxLQUFLLENBQUMsR0FBR1Q7SUFFdEQscUJBQ0ksOERBQUNVO1FBQUlSLFdBQVdBOzswQkFDWiw4REFBQ1M7Z0JBQUVULFdBQVU7MEJBQWtCTDs7Ozs7O1lBQzlCUSx5QkFBVyw4REFBQ0s7Z0JBQUlSLFdBQVU7MEJBQ3ZCLDRFQUFDUCw0Q0FBS0E7b0JBQUNpQixhQUFhWDtvQkFBd0JDLFdBQVU7Ozs7Ozs7Ozs7OzBCQUkxRCw4REFBQ1E7Z0JBQUlSLFdBQVU7MEJBQ1ZNLEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDYiw4REFBQ3JCLDREQUFjQTt3QkFBYXNCLE1BQU1GLEtBQUtFLElBQUk7d0JBQUVDLE9BQU9ILEtBQUtHLEtBQUs7d0JBQUVDLGNBQWNKLEtBQUtJLFlBQVk7d0JBQUVDLFNBQVM7d0JBQU9DLGlCQUFpQixDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO3VCQUFsSU47Ozs7Ozs7Ozs7WUFJNUJqQixNQUFNMEIsTUFBTSxHQUFHeEIsdUJBQ1osOERBQUNVO2dCQUFJUixXQUFXRyxVQUFVLHVDQUF1QzswQkFDN0QsNEVBQUNvQjtvQkFBT0MsU0FBUyxJQUFLcEIsV0FBVyxDQUFDRDtvQkFBVUgsV0FBVTs4QkFDakRHLFVBQVUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUMsRUFBQztHQTVCWVQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvY2hlY2tib3gtZmlsdGVycy1ncm91cC50c3g/OWNiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlsdGVyQ2hlY2tib3gsIEZpbHRlckNoZWNrYm94UHJvcHMgfSBmcm9tIFwiLi9maWx0ZXItY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCI7XHJcblxyXG50eXBlIEl0ZW0gPSBGaWx0ZXJDaGVja2JveFByb3BzO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpdGVtczogSXRlbVtdO1xyXG4gICAgZGVmYXVsdEl0ZW1zOiBJdGVtW107XHJcbiAgICBsaW1pdD86IG51bWJlcjtcclxuICAgIHNlYXJjaElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xyXG4gICAgZGVmYXVsdFZhbHVlPzogc3RyaW5nW107XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja2JveEZpbHRlcnNHcm91cDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGl0bGUsIGl0ZW1zLCBkZWZhdWx0SXRlbXMsIGxpbWl0ID0gNSwgc2VhcmNoSW5wdXRQbGFjZWhvbGRlciA9ICfQn9C+0LjRgdC6Li4uJywgY2xhc3NOYW1lLCBvbkNoYW5nZSwgZGVmYXVsdFZhbHVlIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93QWxsLCBzZXRTaG93QWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGxpc3QgPSBzaG93QWxsID8gaXRlbXMgOiBkZWZhdWx0SXRlbXM/LnNsaWNlKDAsIGxpbWl0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItM1wiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgIHtzaG93QWxsICYmIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPXtzZWFyY2hJbnB1dFBsYWNlaG9sZGVyfSBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlci1ub25lXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBtYXgtaC05NiBwci0yIG92ZXJmbG93LWF1dG8gc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckNoZWNrYm94IGtleT17aW5kZXh9IHRleHQ9e2l0ZW0udGV4dH0gdmFsdWU9e2l0ZW0udmFsdWV9IGVuZEFkb3JubWVudD17aXRlbS5lbmRBZG9ybm1lbnR9IGNoZWNrZWQ9e2ZhbHNlfSBvbkNoZWNrZWRDaGFuZ2U9eyhpZHMpID0+IGNvbnNvbGUubG9nKGlkcyl9PjwvRmlsdGVyQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gbGltaXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dBbGwgPyAnYm9yZGVyLXQgYm9yZGVyLXQtbmV1dHJhbC0xMDAgbXQtNCcgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHNldFNob3dBbGwoIXNob3dBbGwpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0FsbCA/ICfQodC60YDRi9GC0YwnIDogJysg0J/QvtC60LDQt9Cw0YLRjCDQstGB0ZEnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiRmlsdGVyQ2hlY2tib3giLCJJbnB1dCIsIkNoZWNrYm94RmlsdGVyc0dyb3VwIiwidGl0bGUiLCJpdGVtcyIsImRlZmF1bHRJdGVtcyIsImxpbWl0Iiwic2VhcmNoSW5wdXRQbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwic2hvd0FsbCIsInNldFNob3dBbGwiLCJ1c2VTdGF0ZSIsImxpc3QiLCJzbGljZSIsImRpdiIsInAiLCJwbGFjZWhvbGRlciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRleHQiLCJ2YWx1ZSIsImVuZEFkb3JubWVudCIsImNoZWNrZWQiLCJvbkNoZWNrZWRDaGFuZ2UiLCJpZHMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/checkbox-filters-group.tsx\n"));

/***/ })

});