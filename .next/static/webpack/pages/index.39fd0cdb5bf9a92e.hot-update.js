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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TableData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst TableList = (props)=>{\n    if (!props.data) {\n        props.data = [];\n    }\n    const filteredData = props.data.filter(props.filterFunction);\n    console.log(props.filterSelectedFunction());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tbody, {\n        children: filteredData.map((param, index)=>{\n            let { nama_barang = \"\", satuan = \"\", harga = \"\" } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            children: nama_barang\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            children: satuan\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                            isNumeric: true,\n                            children: Number(harga.replace(/\\D/g, \"\")).toLocaleString(undefined, {\n                                maximumFractionDigits: 2\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false);\n        })\n    }, void 0, false, {\n        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TableList;\nfunction TableData(props) {\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((item)=>item.nama_barang.toLowerCase().includes(searchValue.toLowerCase()), [\n        searchValue\n    ]);\n    const filterSelectedFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>selectedValue, [\n        selectedValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                paddingTop: \"2\",\n                paddingLeft: \"5\",\n                paddingRight: \"5\",\n                paddingBottom: \"5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Cari Barang\",\n                        type: \"text\",\n                        value: searchValue,\n                        onChange: (event)=>setSearchValue(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        paddingTop: \"3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                            placeholder: \"Pilih Kateogri\",\n                            onChange: (event)=>setSelectedValue(event.target.value),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"rokok\",\n                                    children: \"rokok\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"sembako\",\n                                    children: \"sembako\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                overflowY: \"auto\",\n                maxHeight: \"300px\",\n                minHeight: \"calc(60vh)\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Thead, {\n                            position: \"sticky\",\n                            top: \"0px\",\n                            bgColor: \"#161A30\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        textColor: \"white\",\n                                        children: \"nama barang\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        textColor: \"white\",\n                                        children: \"satuan\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                                        isNumeric: true,\n                                        textColor: \"white\",\n                                        children: \"harga\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableList, {\n                            data: props.data,\n                            filterFunction: filterFunction,\n                            filterSelectedFunction: filterSelectedFunction\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Programming\\\\Web Development\\\\warungv3\\\\pages\\\\contents\\\\table\\\\main.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TableData, \"kBK1+EhucAOzIaNCgzWVar0D7ps=\");\n_c1 = TableData;\nvar _c, _c1;\n$RefreshReg$(_c, \"TableList\");\n$RefreshReg$(_c1, \"TableData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRlbnRzL3RhYmxlL21haW4udHN4PzkyNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUNvbnRhaW5lciwgVGhlYWQsIFRyLCBUaCwgVGQsIFRib2R5LCBUYWJsZSwgSW5wdXQsIEJveCwgU2VsZWN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhYmxlTGlzdCA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgaWYoIXByb3BzLmRhdGEpIHtcclxuICAgIHByb3BzLmRhdGEgPSBbXTtcclxuICB9XHJcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gcHJvcHMuZGF0YS5maWx0ZXIocHJvcHMuZmlsdGVyRnVuY3Rpb24pO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmZpbHRlclNlbGVjdGVkRnVuY3Rpb24oKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUYm9keT5cclxuICAgICAge2ZpbHRlcmVkRGF0YS5tYXAoKHsgbmFtYV9iYXJhbmcgPSAnJywgc2F0dWFuID0gJycsIGhhcmdhID0gJycgfSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPFRkPntuYW1hX2JhcmFuZ308L1RkPlxyXG4gICAgICAgICAgICAgIDxUZD57c2F0dWFufTwvVGQ+XHJcbiAgICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57IE51bWJlcihoYXJnYS5yZXBsYWNlKC9cXEQvZywgXCJcIikpXHJcbiAgICAgICAgICAgICAgICAgIC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pIH08L1RkPlxyXG4gICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvVGJvZHk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVEYXRhKHByb3BzOiBhbnkpIHtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJGdW5jdGlvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtYV9iYXJhbmcudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSxcclxuICAgIFtzZWFyY2hWYWx1ZV1cclxuICApO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTZWxlY3RlZEZ1bmN0aW9uID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiBzZWxlY3RlZFZhbHVlLCBcclxuICAgIFtzZWxlY3RlZFZhbHVlXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94IHBhZGRpbmdUb3A9eyAnMicgfSBwYWRkaW5nTGVmdD17ICc1JyB9IHBhZGRpbmdSaWdodD17ICc1JyB9IHBhZGRpbmdCb3R0b209eyAnNScgfT5cclxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9J0NhcmkgQmFyYW5nJyB0eXBlPSd0ZXh0JyB2YWx1ZT17c2VhcmNoVmFsdWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPEJveCBwYWRkaW5nVG9wPXsgJzMnIH0+XHJcbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiUGlsaWggS2F0ZW9ncmlcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWxlY3RlZFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsgJ3Jva29rJyB9PnJva29rPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyAnc2VtYmFrbycgfT5zZW1iYWtvPC9vcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBvdmVyZmxvd1k9eydhdXRvJ30gbWF4SGVpZ2h0PXsnMzAwcHgnfSBtaW5IZWlnaHQ9eydjYWxjKDYwdmgpJ30+XHJcbiAgICAgICAgPFRhYmxlIHZhcmlhbnQ9eydzaW1wbGUnfT5cclxuICAgICAgICAgIDxUaGVhZCBwb3NpdGlvbj17J3N0aWNreSd9IHRvcD17JzBweCd9IGJnQ29sb3I9eycjMTYxQTMwJ30+XHJcbiAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICA8VGggdGV4dENvbG9yPXsnd2hpdGUnfT5uYW1hIGJhcmFuZzwvVGg+XHJcbiAgICAgICAgICAgICAgPFRoIHRleHRDb2xvcj17J3doaXRlJ30+c2F0dWFuPC9UaD5cclxuICAgICAgICAgICAgICA8VGggaXNOdW1lcmljIHRleHRDb2xvcj17J3doaXRlJ30+aGFyZ2E8L1RoPlxyXG4gICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICAgIDxUYWJsZUxpc3QgZGF0YT17IHByb3BzLmRhdGEgfSBmaWx0ZXJGdW5jdGlvbj17IGZpbHRlckZ1bmN0aW9uIH0gZmlsdGVyU2VsZWN0ZWRGdW5jdGlvbj17IGZpbHRlclNlbGVjdGVkRnVuY3Rpb24gfS8+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJUYWJsZUNvbnRhaW5lciIsIlRoZWFkIiwiVHIiLCJUaCIsIlRkIiwiVGJvZHkiLCJUYWJsZSIsIklucHV0IiwiQm94IiwiU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIlRhYmxlTGlzdCIsInByb3BzIiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsImZpbHRlckZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImZpbHRlclNlbGVjdGVkRnVuY3Rpb24iLCJtYXAiLCJpbmRleCIsIm5hbWFfYmFyYW5nIiwic2F0dWFuIiwiaGFyZ2EiLCJpc051bWVyaWMiLCJOdW1iZXIiLCJyZXBsYWNlIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJUYWJsZURhdGEiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb24iLCJvdmVyZmxvd1kiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJ2YXJpYW50IiwicG9zaXRpb24iLCJ0b3AiLCJiZ0NvbG9yIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contents/table/main.tsx\n"));

/***/ })

});