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

/***/ "./pages/contents/table/main.tsx":
/*!***************************************!*\
  !*** ./pages/contents/table/main.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TableData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst TableList = (props)=>{\n    if (!props.data) {\n        props.data = [];\n    }\n    const filteredData = props.data.filter(props.filterFunction);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tbody, {\n        children: filteredData.map((param, index)=>{\n            let { nama_barang = \"\", satuan = \"\", harga = \"\" } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            children: nama_barang\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            children: satuan\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            isNumeric: true,\n                            children: Number(harga.replace(/\\D/g, \"\")).toLocaleString(undefined, {\n                                maximumFractionDigits: 2\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false);\n        })\n    }, void 0, false, {\n        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TableList;\nfunction TableData(props) {\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((item)=>item.nama_barang.toLowerCase().includes(selectedValue.toLowerCase()), [\n        searchValue,\n        selectedValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                paddingTop: \"2\",\n                paddingLeft: \"5\",\n                paddingRight: \"5\",\n                paddingBottom: \"5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Cari Barang\",\n                        type: \"text\",\n                        value: searchValue,\n                        onChange: (event)=>setSearchValue(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        paddingTop: \"3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                            placeholder: \"Pilih Kateogri\",\n                            onChange: (event)=>setSelectedValue(event.target.value),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"rokok\",\n                                    children: \"rokok\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"sembako\",\n                                    children: \"sembako\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                overflowY: \"auto\",\n                maxHeight: \"300px\",\n                minHeight: \"calc(60vh)\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Thead, {\n                            position: \"sticky\",\n                            top: \"0px\",\n                            bgColor: \"#161A30\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        textColor: \"white\",\n                                        children: \"nama barang\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        textColor: \"white\",\n                                        children: \"satuan\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        isNumeric: true,\n                                        textColor: \"white\",\n                                        children: \"harga\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableList, {\n                            data: props.data,\n                            filterFunction: filterFunction\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TableData, \"frb7n+hYnn7G1QciJEWptOiD95Q=\");\n_c1 = TableData;\nvar _c, _c1;\n$RefreshReg$(_c, \"TableList\");\n$RefreshReg$(_c1, \"TableData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250ZW50cy90YWJsZS9tYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVzRztBQUN4RDtBQUU5QyxNQUFNWSxZQUFZLENBQUNDO0lBQ2pCLElBQUcsQ0FBQ0EsTUFBTUMsSUFBSSxFQUFFO1FBQ2RELE1BQU1DLElBQUksR0FBRyxFQUFFO0lBQ2pCO0lBQ0EsTUFBTUMsZUFBZUYsTUFBTUMsSUFBSSxDQUFDRSxNQUFNLENBQUNILE1BQU1JLGNBQWM7SUFDM0QscUJBQ0UsOERBQUNaLG1EQUFLQTtrQkFDSFUsYUFBYUcsR0FBRyxDQUFDLFFBQWdEQztnQkFBL0MsRUFBRUMsY0FBYyxFQUFFLEVBQUVDLFNBQVMsRUFBRSxFQUFFQyxRQUFRLEVBQUUsRUFBRTtZQUM5RCxxQkFDRTswQkFDRSw0RUFBQ3BCLGdEQUFFQTs7c0NBQ0QsOERBQUNFLGdEQUFFQTtzQ0FBRWdCOzs7Ozs7c0NBQ0wsOERBQUNoQixnREFBRUE7c0NBQUVpQjs7Ozs7O3NDQUNMLDhEQUFDakIsZ0RBQUVBOzRCQUFDbUIsU0FBUztzQ0FBR0MsT0FBT0YsTUFBTUcsT0FBTyxDQUFDLE9BQU8sS0FDdkNDLGNBQWMsQ0FBQ0MsV0FBVztnQ0FBRUMsdUJBQXVCOzRCQUFFOzs7Ozs7O21CQUpuRFQ7Ozs7OztRQVFmOzs7Ozs7QUFHTjtLQXJCTVA7QUF1QlMsU0FBU2lCLFVBQVVoQixLQUFVOztJQUMxQyxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNxQixlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1NLGlCQUFpQlAsa0RBQVdBLENBQ2hDLENBQUN3QixPQUFTQSxLQUFLZCxXQUFXLENBQUNlLFdBQVcsR0FBR0MsUUFBUSxDQUFDSixjQUFjRyxXQUFXLEtBQzNFO1FBQUNMO1FBQWFFO0tBQWM7SUFHOUIscUJBQ0U7OzBCQUNFLDhEQUFDeEIsaURBQUdBO2dCQUFDNkIsWUFBYTtnQkFBTUMsYUFBYztnQkFBTUMsY0FBZTtnQkFBTUMsZUFBZ0I7O2tDQUMvRSw4REFBQ2pDLG1EQUFLQTt3QkFBQ2tDLGFBQVk7d0JBQWNDLE1BQUs7d0JBQU9DLE9BQU9iO3dCQUFhYyxVQUFVLENBQUNDLFFBQVVkLGVBQWVjLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUN2SCw4REFBQ25DLGlEQUFHQTt3QkFBQzZCLFlBQWE7a0NBQ2hCLDRFQUFDNUIsb0RBQU1BOzRCQUFDZ0MsYUFBWTs0QkFBaUJHLFVBQVUsQ0FBQ0MsUUFBVVosaUJBQWlCWSxNQUFNQyxNQUFNLENBQUNILEtBQUs7OzhDQUMzRiw4REFBQ0k7b0NBQU9KLE9BQVE7OENBQVU7Ozs7Ozs4Q0FDMUIsOERBQUNJO29DQUFPSixPQUFROzhDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEMsOERBQUMzQyw0REFBY0E7Z0JBQUNnRCxXQUFXO2dCQUFRQyxXQUFXO2dCQUFTQyxXQUFXOzBCQUNoRSw0RUFBQzVDLG1EQUFLQTtvQkFBQzZDLFNBQVM7O3NDQUNkLDhEQUFDbEQsbURBQUtBOzRCQUFDbUQsVUFBVTs0QkFBVUMsS0FBSzs0QkFBT0MsU0FBUztzQ0FDOUMsNEVBQUNwRCxnREFBRUE7O2tEQUNELDhEQUFDQyxnREFBRUE7d0NBQUNvRCxXQUFXO2tEQUFTOzs7Ozs7a0RBQ3hCLDhEQUFDcEQsZ0RBQUVBO3dDQUFDb0QsV0FBVztrREFBUzs7Ozs7O2tEQUN4Qiw4REFBQ3BELGdEQUFFQTt3Q0FBQ29CLFNBQVM7d0NBQUNnQyxXQUFXO2tEQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHdEMsOERBQUMzQzs0QkFBVUUsTUFBUUQsTUFBTUMsSUFBSTs0QkFBR0csZ0JBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRDtHQWxDd0JZO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRlbnRzL3RhYmxlL21haW4udHN4PzkyNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUNvbnRhaW5lciwgVGhlYWQsIFRyLCBUaCwgVGQsIFRib2R5LCBUYWJsZSwgSW5wdXQsIEJveCwgU2VsZWN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhYmxlTGlzdCA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgaWYoIXByb3BzLmRhdGEpIHtcclxuICAgIHByb3BzLmRhdGEgPSBbXTtcclxuICB9XHJcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gcHJvcHMuZGF0YS5maWx0ZXIocHJvcHMuZmlsdGVyRnVuY3Rpb24pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGJvZHk+XHJcbiAgICAgIHtmaWx0ZXJlZERhdGEubWFwKCh7IG5hbWFfYmFyYW5nID0gJycsIHNhdHVhbiA9ICcnLCBoYXJnYSA9ICcnIH0sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxUZD57bmFtYV9iYXJhbmd9PC9UZD5cclxuICAgICAgICAgICAgICA8VGQ+e3NhdHVhbn08L1RkPlxyXG4gICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+eyBOdW1iZXIoaGFyZ2EucmVwbGFjZSgvXFxEL2csIFwiXCIpKVxyXG4gICAgICAgICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSB9PC9UZD5cclxuICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L1Rib2R5PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlRGF0YShwcm9wczogYW55KSB7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0ZWRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyRnVuY3Rpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChpdGVtKSA9PiBpdGVtLm5hbWFfYmFyYW5nLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VsZWN0ZWRWYWx1ZS50b0xvd2VyQ2FzZSgpKSxcclxuICAgIFtzZWFyY2hWYWx1ZSwgc2VsZWN0ZWRWYWx1ZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBwYWRkaW5nVG9wPXsgJzInIH0gcGFkZGluZ0xlZnQ9eyAnNScgfSBwYWRkaW5nUmlnaHQ9eyAnNScgfSBwYWRkaW5nQm90dG9tPXsgJzUnIH0+XHJcbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPSdDYXJpIEJhcmFuZycgdHlwZT0ndGV4dCcgdmFsdWU9e3NlYXJjaFZhbHVlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxCb3ggcGFkZGluZ1RvcD17ICczJyB9PlxyXG4gICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlBpbGloIEthdGVvZ3JpXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VsZWN0ZWRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17ICdyb2tvaycgfT5yb2tvazwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsgJ3NlbWJha28nIH0+c2VtYmFrbzwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8VGFibGVDb250YWluZXIgb3ZlcmZsb3dZPXsnYXV0byd9IG1heEhlaWdodD17JzMwMHB4J30gbWluSGVpZ2h0PXsnY2FsYyg2MHZoKSd9PlxyXG4gICAgICAgIDxUYWJsZSB2YXJpYW50PXsnc2ltcGxlJ30+XHJcbiAgICAgICAgICA8VGhlYWQgcG9zaXRpb249eydzdGlja3knfSB0b3A9eycwcHgnfSBiZ0NvbG9yPXsnIzE2MUEzMCd9PlxyXG4gICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgPFRoIHRleHRDb2xvcj17J3doaXRlJ30+bmFtYSBiYXJhbmc8L1RoPlxyXG4gICAgICAgICAgICAgIDxUaCB0ZXh0Q29sb3I9eyd3aGl0ZSd9PnNhdHVhbjwvVGg+XHJcbiAgICAgICAgICAgICAgPFRoIGlzTnVtZXJpYyB0ZXh0Q29sb3I9eyd3aGl0ZSd9PmhhcmdhPC9UaD5cclxuICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVMaXN0IGRhdGE9eyAgcHJvcHMuZGF0YSB9IGZpbHRlckZ1bmN0aW9uPXsgZmlsdGVyRnVuY3Rpb24gfS8+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJUYWJsZUNvbnRhaW5lciIsIlRoZWFkIiwiVHIiLCJUaCIsIlRkIiwiVGJvZHkiLCJUYWJsZSIsIklucHV0IiwiQm94IiwiU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIlRhYmxlTGlzdCIsInByb3BzIiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsImZpbHRlckZ1bmN0aW9uIiwibWFwIiwiaW5kZXgiLCJuYW1hX2JhcmFuZyIsInNhdHVhbiIsImhhcmdhIiwiaXNOdW1lcmljIiwiTnVtYmVyIiwicmVwbGFjZSIsInRvTG9jYWxlU3RyaW5nIiwidW5kZWZpbmVkIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiVGFibGVEYXRhIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwib3B0aW9uIiwib3ZlcmZsb3dZIiwibWF4SGVpZ2h0IiwibWluSGVpZ2h0IiwidmFyaWFudCIsInBvc2l0aW9uIiwidG9wIiwiYmdDb2xvciIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contents/table/main.tsx\n"));

/***/ })

});