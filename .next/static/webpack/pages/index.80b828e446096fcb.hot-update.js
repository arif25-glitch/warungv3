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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TableData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst TableList = (props)=>{\n    if (!props.data) {\n        props.data = [];\n    }\n    const filteredData = props.data.filter(props.filterFunction);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tbody, {\n        children: filteredData.map((param, index)=>{\n            let { nama_barang = \"\", satuan = \"\", harga = \"\" } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            children: nama_barang\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            children: satuan\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            isNumeric: true,\n                            children: Number(harga.replace(/\\D/g, \"\")).toLocaleString(undefined, {\n                                maximumFractionDigits: 2\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false);\n        })\n    }, void 0, false, {\n        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TableList;\nfunction TableData(props) {\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((item)=>item.nama_barang.toLowerCase().includes(searchValue.toLowerCase()), [\n        searchValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                p: \"5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Cari Barang\",\n                        type: \"text\",\n                        value: searchValue,\n                        onChange: (event)=>setSearchValue(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        paddingTop: \"3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                            placeholder: \"Pilih Kateogri\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"rokok\",\n                                    children: \"rokok\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"sembako\",\n                                    children: \"sembako\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                overflowY: \"auto\",\n                maxHeight: \"300px\",\n                minHeight: \"calc(60vh)\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Thead, {\n                            position: \"sticky\",\n                            top: \"0px\",\n                            bgColor: \"#161A30\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        textColor: \"white\",\n                                        children: \"nama barang\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        textColor: \"white\",\n                                        children: \"satuan\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        isNumeric: true,\n                                        textColor: \"white\",\n                                        children: \"harga\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableList, {\n                            data: props.data,\n                            filterFunction: filterFunction\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TableData, \"05+pYGtfNUSBnFxxI2kIVz1LquQ=\");\n_c1 = TableData;\nvar _c, _c1;\n$RefreshReg$(_c, \"TableList\");\n$RefreshReg$(_c1, \"TableData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250ZW50cy90YWJsZS9tYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVzRztBQUN4RDtBQUU5QyxNQUFNWSxZQUFZLENBQUNDO0lBQ2pCLElBQUcsQ0FBQ0EsTUFBTUMsSUFBSSxFQUFFO1FBQ2RELE1BQU1DLElBQUksR0FBRyxFQUFFO0lBQ2pCO0lBQ0EsTUFBTUMsZUFBZUYsTUFBTUMsSUFBSSxDQUFDRSxNQUFNLENBQUNILE1BQU1JLGNBQWM7SUFDM0QscUJBQ0UsOERBQUNaLG1EQUFLQTtrQkFDSFUsYUFBYUcsR0FBRyxDQUFDLFFBQWdEQztnQkFBL0MsRUFBRUMsY0FBYyxFQUFFLEVBQUVDLFNBQVMsRUFBRSxFQUFFQyxRQUFRLEVBQUUsRUFBRTtZQUM5RCxxQkFDRTswQkFDRSw0RUFBQ3BCLGdEQUFFQTs7c0NBQ0QsOERBQUNFLGdEQUFFQTtzQ0FBRWdCOzs7Ozs7c0NBQ0wsOERBQUNoQixnREFBRUE7c0NBQUVpQjs7Ozs7O3NDQUNMLDhEQUFDakIsZ0RBQUVBOzRCQUFDbUIsU0FBUztzQ0FBR0MsT0FBT0YsTUFBTUcsT0FBTyxDQUFDLE9BQU8sS0FDdkNDLGNBQWMsQ0FBQ0MsV0FBVztnQ0FBRUMsdUJBQXVCOzRCQUFFOzs7Ozs7O21CQUpuRFQ7Ozs7OztRQVFmOzs7Ozs7QUFHTjtLQXJCTVA7QUF1QlMsU0FBU2lCLFVBQVVoQixLQUFVOztJQUMxQyxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTSxpQkFBaUJQLGtEQUFXQSxDQUNoQyxDQUFDc0IsT0FBU0EsS0FBS1osV0FBVyxDQUFDYSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0osWUFBWUcsV0FBVyxLQUN6RTtRQUFDSDtLQUFZO0lBR2YscUJBQ0U7OzBCQUNFLDhEQUFDdEIsaURBQUdBO2dCQUFDMkIsR0FBSTs7a0NBQ1AsOERBQUM1QixtREFBS0E7d0JBQUM2QixhQUFZO3dCQUFjQyxNQUFLO3dCQUFPQyxPQUFPUjt3QkFBYVMsVUFBVSxDQUFDQyxRQUFVVCxlQUFlUyxNQUFNQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDdkgsOERBQUM5QixpREFBR0E7d0JBQUNrQyxZQUFhO2tDQUNoQiw0RUFBQ2pDLG9EQUFNQTs0QkFBQzJCLGFBQVk7OzhDQUNsQiw4REFBQ087b0NBQU9MLE9BQVE7OENBQVU7Ozs7Ozs4Q0FDMUIsOERBQUNLO29DQUFPTCxPQUFROzhDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEMsOERBQUN0Qyw0REFBY0E7Z0JBQUM0QyxXQUFXO2dCQUFRQyxXQUFXO2dCQUFTQyxXQUFXOzBCQUNoRSw0RUFBQ3hDLG1EQUFLQTtvQkFBQ3lDLFNBQVM7O3NDQUNkLDhEQUFDOUMsbURBQUtBOzRCQUFDK0MsVUFBVTs0QkFBVUMsS0FBSzs0QkFBT0MsU0FBUztzQ0FDOUMsNEVBQUNoRCxnREFBRUE7O2tEQUNELDhEQUFDQyxnREFBRUE7d0NBQUNnRCxXQUFXO2tEQUFTOzs7Ozs7a0RBQ3hCLDhEQUFDaEQsZ0RBQUVBO3dDQUFDZ0QsV0FBVztrREFBUzs7Ozs7O2tEQUN4Qiw4REFBQ2hELGdEQUFFQTt3Q0FBQ29CLFNBQVM7d0NBQUM0QixXQUFXO2tEQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHdEMsOERBQUN2Qzs0QkFBVUUsTUFBUUQsTUFBTUMsSUFBSTs0QkFBR0csZ0JBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRDtHQWpDd0JZO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRlbnRzL3RhYmxlL21haW4udHN4PzkyNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUNvbnRhaW5lciwgVGhlYWQsIFRyLCBUaCwgVGQsIFRib2R5LCBUYWJsZSwgSW5wdXQsIEJveCwgU2VsZWN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhYmxlTGlzdCA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgaWYoIXByb3BzLmRhdGEpIHtcclxuICAgIHByb3BzLmRhdGEgPSBbXTtcclxuICB9XHJcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gcHJvcHMuZGF0YS5maWx0ZXIocHJvcHMuZmlsdGVyRnVuY3Rpb24pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGJvZHk+XHJcbiAgICAgIHtmaWx0ZXJlZERhdGEubWFwKCh7IG5hbWFfYmFyYW5nID0gJycsIHNhdHVhbiA9ICcnLCBoYXJnYSA9ICcnIH0sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxUZD57bmFtYV9iYXJhbmd9PC9UZD5cclxuICAgICAgICAgICAgICA8VGQ+e3NhdHVhbn08L1RkPlxyXG4gICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+eyBOdW1iZXIoaGFyZ2EucmVwbGFjZSgvXFxEL2csIFwiXCIpKVxyXG4gICAgICAgICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSB9PC9UZD5cclxuICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L1Rib2R5PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlRGF0YShwcm9wczogYW55KSB7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyRnVuY3Rpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChpdGVtKSA9PiBpdGVtLm5hbWFfYmFyYW5nLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSksXHJcbiAgICBbc2VhcmNoVmFsdWVdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3ggcD17ICc1JyB9PlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj0nQ2FyaSBCYXJhbmcnIHR5cGU9J3RleHQnIHZhbHVlPXtzZWFyY2hWYWx1ZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8Qm94IHBhZGRpbmdUb3A9eyAnMycgfT5cclxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJQaWxpaCBLYXRlb2dyaVwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsgJ3Jva29rJyB9PnJva29rPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyAnc2VtYmFrbycgfT5zZW1iYWtvPC9vcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBvdmVyZmxvd1k9eydhdXRvJ30gbWF4SGVpZ2h0PXsnMzAwcHgnfSBtaW5IZWlnaHQ9eydjYWxjKDYwdmgpJ30+XHJcbiAgICAgICAgPFRhYmxlIHZhcmlhbnQ9eydzaW1wbGUnfT5cclxuICAgICAgICAgIDxUaGVhZCBwb3NpdGlvbj17J3N0aWNreSd9IHRvcD17JzBweCd9IGJnQ29sb3I9eycjMTYxQTMwJ30+XHJcbiAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICA8VGggdGV4dENvbG9yPXsnd2hpdGUnfT5uYW1hIGJhcmFuZzwvVGg+XHJcbiAgICAgICAgICAgICAgPFRoIHRleHRDb2xvcj17J3doaXRlJ30+c2F0dWFuPC9UaD5cclxuICAgICAgICAgICAgICA8VGggaXNOdW1lcmljIHRleHRDb2xvcj17J3doaXRlJ30+aGFyZ2E8L1RoPlxyXG4gICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICAgIDxUYWJsZUxpc3QgZGF0YT17ICBwcm9wcy5kYXRhIH0gZmlsdGVyRnVuY3Rpb249eyBmaWx0ZXJGdW5jdGlvbiB9Lz5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlRhYmxlQ29udGFpbmVyIiwiVGhlYWQiLCJUciIsIlRoIiwiVGQiLCJUYm9keSIsIlRhYmxlIiwiSW5wdXQiLCJCb3giLCJTZWxlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiVGFibGVMaXN0IiwicHJvcHMiLCJkYXRhIiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiZmlsdGVyRnVuY3Rpb24iLCJtYXAiLCJpbmRleCIsIm5hbWFfYmFyYW5nIiwic2F0dWFuIiwiaGFyZ2EiLCJpc051bWVyaWMiLCJOdW1iZXIiLCJyZXBsYWNlIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJUYWJsZURhdGEiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwicGFkZGluZ1RvcCIsIm9wdGlvbiIsIm92ZXJmbG93WSIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsInZhcmlhbnQiLCJwb3NpdGlvbiIsInRvcCIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contents/table/main.tsx\n"));

/***/ })

});