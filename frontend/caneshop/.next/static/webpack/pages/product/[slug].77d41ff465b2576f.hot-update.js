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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ productScre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _utils_style_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/style.js */ \"./utils/style.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction productScre() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const classes = (0,_utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { slug  } = router.query;\n    const product = _utils_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].products.find((a)=>a.slug === slug);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Product Not Found\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n            lineNumber: 23,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classes.section,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Link, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                            children: \"back to products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                container: true,\n                spacing: 1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 6,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            src: product.image,\n                            alt: product.name,\n                            className: classes.largeImage,\n                            width: 640,\n                            height: 640,\n                            layout: \"responsive\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Catagory: \",\n                                            product.category\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Brand: \",\n                                            product.brand\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Rating: \",\n                                            product.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Description:\",\n                                            product.description\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                            container: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: \"Price\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: [\n                                                            \"$\",\n                                                            product.price\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 69,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                            container: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: \"Status\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                        children: product.countInStock > 0 ? \"In Stock\" : \"Unavailable\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 81,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                            fullWidth: true,\n                                            variant: \"co\",\n                                            children: \"Add to Cart\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 95,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 94,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(productScre, \"udxARlSzUQQ8jg2GSLXYjtUi3ZI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxHQUFHLElBQ2xCLGFBQ0EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFLbkMsOERBQUNwQyx1REFBUUE7a0RBQ0wsNEVBQUNxQzs0Q0FBT0MsU0FBUzs0Q0FBQ0MsU0FBUTtzREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVS9ELENBQUM7R0F4RnVCcEM7O1FBQ0xaLGtEQUFTQTtRQUNSRyx1REFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL3V0aWxzL2RhdGEnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuLi8uLi91dGlscy9zdHlsZS5qcyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7XHJcbiAgICBHcmlkLFxyXG4gICAgTGluayxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBDYXJkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RTY3JlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLnByb2R1Y3RzLmZpbmQoKGEpID0+IGEuc2x1ZyA9PT0gc2x1Zyk7XHJcbiAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Qcm9kdWN0IE5vdCBGb3VuZDwvZGl2PjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT17cHJvZHVjdC5uYW1lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+YmFjayB0byBwcm9kdWN0czwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NjQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdGFnb3J5OiB7cHJvZHVjdC5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+QnJhbmQ6IHtwcm9kdWN0LmJyYW5kfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UmF0aW5nOiB7cHJvZHVjdC5yYXRpbmd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjp7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UHJpY2U8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5TdGF0dXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb3VudEluU3RvY2sgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ0luIFN0b2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdVbmF2YWlsYWJsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJjb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwiTGF5b3V0IiwidXNlU3R5bGVzIiwiTmV4dExpbmsiLCJJbWFnZSIsIkdyaWQiLCJMaW5rIiwiTGlzdCIsIkxpc3RJdGVtIiwiVHlwb2dyYXBoeSIsIkNhcmQiLCJwcm9kdWN0U2NyZSIsInJvdXRlciIsImNsYXNzZXMiLCJzbHVnIiwicXVlcnkiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiYSIsImRpdiIsInRpdGxlIiwibmFtZSIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJocmVmIiwicGFzc0hyZWYiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsIm1kIiwieHMiLCJzcmMiLCJpbWFnZSIsImFsdCIsImxhcmdlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImNhdGVnb3J5IiwiYnJhbmQiLCJyYXRpbmciLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY291bnRJblN0b2NrIiwiQnV0dG9uIiwiZnVsbFdpZHRoIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});