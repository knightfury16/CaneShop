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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ productScre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _utils_style_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/style.js */ \"./utils/style.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction productScre() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const classes = (0,_utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { slug  } = router.query;\n    const product = _utils_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].products.find((a)=>a.slug === slug);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Product Not Found\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n            lineNumber: 24,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classes.section,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Link, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                            children: \"back to products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                container: true,\n                spacing: 1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 6,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            src: product.image,\n                            alt: product.name,\n                            className: classes.largeImage,\n                            width: 640,\n                            height: 640,\n                            layout: \"responsive\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        component: \"h1\",\n                                        children: [\n                                            product.name,\n                                            \" - \",\n                                            product.category\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Brand: \",\n                                            product.brand\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Rating: \",\n                                            product.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Description:\",\n                                            product.description\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                            container: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: \"Price\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: [\n                                                            \"$\",\n                                                            product.price\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                            container: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: \"Status\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: product.countInStock > 0 ? \"In Stock\" : \"Unavailable\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 82,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 81,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                            fullWidth: true,\n                                            variant: \"contained\",\n                                            color: \"primary\",\n                                            children: \"Add to Cart\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 96,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 95,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(productScre, \"udxARlSzUQQ8jg2GSLXYjtUi3ZI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYLDRFQUFDdkIseURBQVVBO2tFQUNOUSxRQUFRNkIsWUFBWSxHQUFHLElBQ2xCLGFBQ0EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFLbkMsOERBQUN0Qyx1REFBUUE7a0RBQ0wsNEVBQUNHLHFEQUFNQTs0Q0FDSG9DLFNBQVM7NENBQ1RDLFNBQVE7NENBQ1JDLE9BQU07c0RBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQyxDQUFDO0dBNUZ1QnJDOztRQUNMYixrREFBU0E7UUFDUkcsdURBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi91dGlscy9kYXRhJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGUuanMnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge1xyXG4gICAgR3JpZCxcclxuICAgIExpbmssXHJcbiAgICBMaXN0LFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgQ2FyZCxcclxuICAgIEJ1dHRvbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0U2NyZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0cy5maW5kKChhKSA9PiBhLnNsdWcgPT09IHNsdWcpO1xyXG4gICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+UHJvZHVjdCBOb3QgRm91bmQ8L2Rpdj47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9e3Byb2R1Y3QubmFtZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PmJhY2sgdG8gcHJvZHVjdHM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezY0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0ge3Byb2R1Y3QuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkJyYW5kOiB7cHJvZHVjdC5icmFuZH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlJhdGluZzoge3Byb2R1Y3QucmF0aW5nfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlByaWNlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3RhdHVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuY291bnRJblN0b2NrID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdJbiBTdG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnVW5hdmFpbGFibGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsImRhdGEiLCJMYXlvdXQiLCJ1c2VTdHlsZXMiLCJOZXh0TGluayIsIkltYWdlIiwiR3JpZCIsIkxpbmsiLCJMaXN0IiwiTGlzdEl0ZW0iLCJUeXBvZ3JhcGh5IiwiQ2FyZCIsIkJ1dHRvbiIsInByb2R1Y3RTY3JlIiwicm91dGVyIiwiY2xhc3NlcyIsInNsdWciLCJxdWVyeSIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImZpbmQiLCJhIiwiZGl2IiwidGl0bGUiLCJuYW1lIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImhyZWYiLCJwYXNzSHJlZiIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwibWQiLCJ4cyIsInNyYyIsImltYWdlIiwiYWx0IiwibGFyZ2VJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwiY29tcG9uZW50IiwiY2F0ZWdvcnkiLCJicmFuZCIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJjb3VudEluU3RvY2siLCJmdWxsV2lkdGgiLCJ2YXJpYW50IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});