"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ productScre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _utils_style_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/style.js */ \"./utils/style.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction productScre() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const classes = (0,_utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { slug  } = router.query;\n    const product = _utils_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].products.find((a)=>a.slug === slug);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Product Not Found\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n            lineNumber: 16,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classes.section,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Link, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                            children: \"back to products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                container: true,\n                spacing: 1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 6,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            src: product.image,\n                            alt: product.name,\n                            className: classes.largeImage,\n                            width: 640,\n                            height: 640,\n                            layout: \"responsive\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Catagory: \",\n                                            product.category\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Brand: \",\n                                            product.brand\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Rating: \",\n                                            product.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Description:\",\n                                            product.description\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        x: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(productScre, \"udxARlSzUQQ8jg2GSLXYjtUi3ZI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDYztBQUNKO0FBQ1M7QUFDQTtBQUNaO0FBQ0Y7QUFDNEM7QUFFNUQsU0FBU1ksY0FBYzs7SUFDbEMsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU1hLFVBQVVWLDJEQUFTQTtJQUN6QixNQUFNLEVBQUVXLEtBQUksRUFBRSxHQUFHRixPQUFPRyxLQUFLO0lBQzdCLE1BQU1DLFVBQVVmLGlFQUFrQixDQUFDLENBQUNrQixJQUFNQSxFQUFFTCxJQUFJLEtBQUtBO0lBQ3JELElBQUksQ0FBQ0UsU0FBUztRQUNWLHFCQUFPLDhEQUFDSTtzQkFBSTs7Ozs7O0lBQ2hCLENBQUM7SUFDRCxxQkFDSSw4REFBQ2xCLDBEQUFNQTtRQUFDbUIsT0FBT0wsUUFBUU0sSUFBSTs7MEJBQ3ZCLDhEQUFDRjtnQkFBSUcsV0FBV1YsUUFBUVcsT0FBTzswQkFDM0IsNEVBQUNwQixrREFBUUE7b0JBQUNxQixNQUFLO29CQUFJQyxRQUFROzhCQUN2Qiw0RUFBQ25CLG1EQUFJQTtrQ0FDRCw0RUFBQ0cseURBQVVBO3NDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDSixtREFBSUE7Z0JBQUNxQixTQUFTO2dCQUFDQyxTQUFTOztrQ0FDckIsOERBQUN0QixtREFBSUE7d0JBQUN1QixJQUFJO3dCQUFDQyxJQUFJO3dCQUFHQyxJQUFJO2tDQUNsQiw0RUFBQzFCLG1EQUFLQTs0QkFDRjJCLEtBQUtoQixRQUFRaUIsS0FBSzs0QkFDbEJDLEtBQUtsQixRQUFRTSxJQUFJOzRCQUNqQkMsV0FBV1YsUUFBUXNCLFVBQVU7NEJBQzdCQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxRQUFPOzs7Ozs7Ozs7OztrQ0FHZiw4REFBQ2hDLG1EQUFJQTt3QkFBQ3VCLElBQUk7d0JBQUNDLElBQUk7d0JBQUdDLElBQUk7a0NBQ2xCLDRFQUFDdkIsbURBQUlBOzs4Q0FDRCw4REFBQ0MsdURBQVFBOzhDQUNMLDRFQUFDQyx5REFBVUE7OzRDQUFDOzRDQUNHTSxRQUFRdUIsUUFBUTs7Ozs7Ozs7Ozs7OzhDQUduQyw4REFBQzlCLHVEQUFRQTs4Q0FDTCw0RUFBQ0MseURBQVVBOzs0Q0FBQzs0Q0FBUU0sUUFBUXdCLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FFckMsOERBQUMvQix1REFBUUE7OENBQ0wsNEVBQUNDLHlEQUFVQTs7NENBQUM7NENBQVNNLFFBQVF5QixNQUFNOzs7Ozs7Ozs7Ozs7OENBRXZDLDhEQUFDaEMsdURBQVFBOzhDQUNMLDRFQUFDQyx5REFBVUE7OzRDQUFDOzRDQUNLTSxRQUFRMEIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS2hELDhEQUFDcEMsbURBQUlBO3dCQUFDdUIsSUFBSTt3QkFBQ0MsSUFBSTt3QkFBR2EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5DLENBQUM7R0F0RHVCaEM7O1FBQ0xYLGtEQUFTQTtRQUNSRyx1REFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL3V0aWxzL2RhdGEnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuLi8uLi91dGlscy9zdHlsZS5qcyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEdyaWQsIExpbmssIExpc3QsIExpc3RJdGVtLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdFNjcmUoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGRhdGEucHJvZHVjdHMuZmluZCgoYSkgPT4gYS5zbHVnID09PSBzbHVnKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlByb2R1Y3QgTm90IEZvdW5kPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtwcm9kdWN0Lm5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5iYWNrIHRvIHByb2R1Y3RzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezY0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F0YWdvcnk6IHtwcm9kdWN0LmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5CcmFuZDoge3Byb2R1Y3QuYnJhbmR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5SYXRpbmc6IHtwcm9kdWN0LnJhdGluZ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOntwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHg+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsImRhdGEiLCJMYXlvdXQiLCJ1c2VTdHlsZXMiLCJOZXh0TGluayIsIkltYWdlIiwiR3JpZCIsIkxpbmsiLCJMaXN0IiwiTGlzdEl0ZW0iLCJUeXBvZ3JhcGh5IiwicHJvZHVjdFNjcmUiLCJyb3V0ZXIiLCJjbGFzc2VzIiwic2x1ZyIsInF1ZXJ5IiwicHJvZHVjdCIsInByb2R1Y3RzIiwiZmluZCIsImEiLCJkaXYiLCJ0aXRsZSIsIm5hbWUiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaHJlZiIsInBhc3NIcmVmIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJtZCIsInhzIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJsYXJnZUltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJjYXRlZ29yeSIsImJyYW5kIiwicmF0aW5nIiwiZGVzY3JpcHRpb24iLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});