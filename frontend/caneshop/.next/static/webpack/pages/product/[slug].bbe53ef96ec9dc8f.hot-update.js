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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ productScre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _utils_style_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/style.js */ \"./utils/style.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction productScre() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const classes = (0,_utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { slug  } = router.query;\n    const product = _utils_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].products.find((a)=>a.slug === slug);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Product Not Found\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n            lineNumber: 23,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classes.section,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Link, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                            children: \"back to products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                container: true,\n                spacing: 1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 6,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            src: product.image,\n                            alt: product.name,\n                            className: classes.largeImage,\n                            width: 640,\n                            height: 640,\n                            layout: \"responsive\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Catagory: \",\n                                            product.category\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Brand: \",\n                                            product.brand\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Rating: \",\n                                            product.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                        children: [\n                                            \"Description:\",\n                                            product.description\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                        container: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                item: true,\n                                                xs: 6,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                    children: \"Price\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 70,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                item: true,\n                                                xs: 6,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                    children: [\n                                                        \"$\",\n                                                        product.price\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 73,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                        item: true,\n                        md: 3,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                        container: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                item: true,\n                                                xs: 6,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                    children: \"Statu\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 88,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                                item: true,\n                                                xs: 6,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                    children: [\n                                                        \"$\",\n                                                        product.price\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 91,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 85,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Development\\\\Project 350\\\\CaneShop\\\\frontend\\\\caneshop\\\\pages\\\\product\\\\[slug].js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(productScre, \"udxARlSzUQQ8jg2GSLXYjtUi3ZI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _utils_style_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDdEIseURBQVVBOzhEQUFDOzs7Ozs7Ozs7OzswREFFaEIsOERBQUNKLG1EQUFJQTtnREFBQ3dCLElBQUk7Z0RBQUNFLElBQUk7MERBQ1gsNEVBQUN0Qix5REFBVUE7O3dEQUFDO3dEQUNOTyxRQUFRMkIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXM0QsQ0FBQztHQXZGdUJoQzs7UUFDTFosa0RBQVNBO1FBQ1JHLHVEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vdXRpbHMvZGF0YSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4uLy4uL3V0aWxzL3N0eWxlLmpzJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHtcclxuICAgIEdyaWQsXHJcbiAgICBMaW5rLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgVHlwb2dyYXBoeSxcclxuICAgIENhcmQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdFNjcmUoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGRhdGEucHJvZHVjdHMuZmluZCgoYSkgPT4gYS5zbHVnID09PSBzbHVnKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlByb2R1Y3QgTm90IEZvdW5kPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtwcm9kdWN0Lm5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5iYWNrIHRvIHByb2R1Y3RzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezY0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F0YWdvcnk6IHtwcm9kdWN0LmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5CcmFuZDoge3Byb2R1Y3QuYnJhbmR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5SYXRpbmc6IHtwcm9kdWN0LnJhdGluZ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOntwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5QcmljZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+U3RhdHU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsImRhdGEiLCJMYXlvdXQiLCJ1c2VTdHlsZXMiLCJOZXh0TGluayIsIkltYWdlIiwiR3JpZCIsIkxpbmsiLCJMaXN0IiwiTGlzdEl0ZW0iLCJUeXBvZ3JhcGh5IiwiQ2FyZCIsInByb2R1Y3RTY3JlIiwicm91dGVyIiwiY2xhc3NlcyIsInNsdWciLCJxdWVyeSIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImZpbmQiLCJhIiwiZGl2IiwidGl0bGUiLCJuYW1lIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImhyZWYiLCJwYXNzSHJlZiIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwibWQiLCJ4cyIsInNyYyIsImltYWdlIiwiYWx0IiwibGFyZ2VJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwiY2F0ZWdvcnkiLCJicmFuZCIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});