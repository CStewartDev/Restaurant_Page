/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/wallpaper.jpg */ \"./src/images/wallpaper.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-size: 14px;\\n    font-family: 'Fredoka One', cursive;\\n}\\n\\nbody{\\n    background:url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") fixed center / cover ;\\n}\\n\\n#content {\\n    height: 100vh;\\n    width: 100vw;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    flex-direction: column;\\n}\\n\\n\\n/* NAV */\\nnav {\\n    height: 5rem;\\n    width: 100vw;\\n    font-size: 2em;\\n    color: #6ee1ef;\\n    display: flex;\\n    justify-content: space-between; \\n    align-items: center;\\n    text-shadow: 2px 2px 2px #d80065;\\n}\\n\\nnav ul {\\n    display: flex;\\n    align-items: center;\\n    list-style: none;\\n}\\n\\n.navSel:hover {\\n    border-color: #6ee1ef;\\n    box-shadow: 2px 2px 1px #d80065;\\n    cursor: pointer;\\n}\\n\\n.navSel {\\n    list-style: none;\\n    font-size: 2em;\\n    text-transform: uppercase;\\n    margin: .5em 1em;\\n    padding: .3em;\\n    border-bottom: 1px solid transparent;\\n    border-right: 1px solid transparent;\\n}\\n\\n\\n.navIcon {\\n    margin: 2em;\\n    transition: all 0.5s cubic-bezier(.68,-0.55,.27,1.55);\\n    cursor: pointer;\\n}\\n\\n.navIcon:hover {\\n    transform: rotate(360deg);\\n}\\n\\n.navName {\\n    font-size: 1.25em;\\n    text-transform: uppercase;\\n    font-family: 'Press Start 2P', cursive;\\n    letter-spacing: 3px;\\n}\\n\\n/* footer */\\nfooter {\\n    color: white;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color:rgba(0,0,0,.7);\\n    width: 100vw;\\n    padding: .2em 0;\\n}\\n\\nfooter a {\\n    padding-left: 1em;\\n}\\n\\n/* Home, About, and Menu */\\n\\nmain {\\n    display: flex;\\n    justify-content: center;\\n    width: 90vw;\\n    align-items: center;\\n    flex-direction: column;\\n    padding-bottom: 5vh;\\n}\\n\\nmain h2 {\\n    font-family: 'Fredoka One', cursive;\\n    font-size: 2em;\\n    color: #6ee1ef;\\n    text-transform: uppercase;\\n    text-shadow: 3px 3px 2px #d80065, 3px 3px 3px #59055b;\\n    margin: .5em 1em;\\n}\\n\\n.h2Two {\\n    font-size: 4em;\\n    font-family: 'Press Start 2P', cursive;;\\n}\\n\\n.icon {\\n    height: 256px;\\n    width: 256px;\\n    padding-left: 1rem;\\n}\\n\\n/* Menu */\\n\\n#menu-ul{\\n    color: #6ee1ef;\\n    text-shadow: 3px 3px 2px #d80065, 3px 3px 3px #59055b;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr; \\n    justify-items: center;\\n    gap: 5rem 5rem;\\n}\\n\\n.flavor {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    align-items: center;\\n    word-wrap: break-word;\\n    padding: 1em;\\n    list-style: none;\\n}\\n\\n.f-desc{\\n    padding-bottom: 1em;\\n}\\n\\n#menu-ul h3{\\n    font-size: 2em;\\n    padding-bottom: 1rem;\\n}\\n\\nli img {\\n    width: 20rem;\\n    height: 20rem;\\n    border-radius: 10px;\\n}\\n\\n#guar {\\n    font-size: .75em;\\n    color: lightsteelblue;\\n    padding-top: 10vh;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAbout\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _createElHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElHelper */ \"./src/createElHelper.js\");\n\n\nconst render = () => {\n    const about = document.createElement('main');\n    const words = `It all started with a mediocre single scoop, on an otherwise brilliant day. I was ready to indulge on my treat, but it didn't slap my tastebuds. That day the vision for The Double Scoop was born.\n\n    The mission: Deliver the most tantilizing flavors of ice cream in a double scoop waffle cone. \n    \n    Misson: Complete.`;\n\n    const h2 = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\",null,null,words);\n    \n    about.append(h2);\n\n\n    return about;\n};\n\n \n\n//# sourceURL=webpack://restaurant_page/./src/about.js?");

/***/ }),

/***/ "./src/createElHelper.js":
/*!*******************************!*\
  !*** ./src/createElHelper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nfunction createHtmlElement(type, id, arrayClasses, content) {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (arrayClasses)\n      arrayClasses.forEach((myClass) => element.classList.add(myClass));\n  \n    if (content) element.innerText = content;\n  \n    return element;\n  }\n\n  \n\n//# sourceURL=webpack://restaurant_page/./src/createElHelper.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFooter\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _createElHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElHelper */ \"./src/createElHelper.js\");\n/* harmony import */ var _images_GitHub_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/GitHub.png */ \"./src/images/GitHub.png\");\n\n\n\nconst render = () => {\n    const footer = document.createElement('footer');\n    const para = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\",null,null,\"2021 CStewartDev\");\n    const link = document.createElement('a');\n    link.href = \"https://github.com/CStewartDev\";\n    const img = new Image();\n    img.src = _images_GitHub_png__WEBPACK_IMPORTED_MODULE_1__;\n    link.append(img)\n    footer.append(para,link);\n    return footer;\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _images_two_scoop_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/two-scoop.png */ \"./src/images/two-scoop.png\");\n/* harmony import */ var _createElHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElHelper */ \"./src/createElHelper.js\");\n\n\n\nconst render = ()=>{\n    const home = document.createElement('main');\n    \n    let h2One = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2',null,[\"h2One\"],\"When one scoop is not enough, there's:\")\n    let h2Two = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2',null,[\"h2Two\"],\"The Double Scoop\");\n    const myIcon = new Image();\n    myIcon.src = _images_two_scoop_png__WEBPACK_IMPORTED_MODULE_0__;\n    let content = [h2One,h2Two,myIcon]\n    myIcon.className = \"icon\"\n    home.append(...content);\n    return home;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/images/flavors sync \\.(png|jpe?g|svg)$":
/*!******************************************************************!*\
  !*** ./src/images/flavors/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./DbyChoc.jpeg\": \"./src/images/flavors/DbyChoc.jpeg\",\n\t\"./c&c.jpg\": \"./src/images/flavors/c&c.jpg\",\n\t\"./frank.jpeg\": \"./src/images/flavors/frank.jpeg\",\n\t\"./garden.jpeg\": \"./src/images/flavors/garden.jpeg\",\n\t\"./idk.jpeg\": \"./src/images/flavors/idk.jpeg\",\n\t\"./lavender.jpg\": \"./src/images/flavors/lavender.jpg\",\n\t\"./straw.jpg\": \"./src/images/flavors/straw.jpg\",\n\t\"./vanilla.jpeg\": \"./src/images/flavors/vanilla.jpeg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/flavors sync \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElHelper */ \"./src/createElHelper.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\n\n\nconst pageContent = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\",\"content\",null,null)\n\ndocument.body.append(pageContent)\n\nfunction pageRender(target) {\n    if(target === \"home\") {\n        pageContent.innerText = \"\";\n        pageContent.append((0,_nav__WEBPACK_IMPORTED_MODULE_2__.renderNav)(),(0,_home__WEBPACK_IMPORTED_MODULE_4__.renderHome)(),(0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)());\n    }\n    if(target === \"menu\") {\n        pageContent.innerText = \"\";\n        pageContent.append((0,_nav__WEBPACK_IMPORTED_MODULE_2__.renderNav)(),(0,_menu__WEBPACK_IMPORTED_MODULE_5__.renderMenu)(),(0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)())\n    }\n    if(target === \"about\") {\n        pageContent.innerText = \"\";\n        pageContent.append((0,_nav__WEBPACK_IMPORTED_MODULE_2__.renderNav)(),(0,_about__WEBPACK_IMPORTED_MODULE_6__.renderAbout)(),(0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)())\n    }\n}\n\npageContent.addEventListener(\"click\", e=>{\n    if(e.target.textContent === \"home\" || \"about\" || \"menu\") pageRender(e.target.textContent)\n})\npageRender(\"home\")\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _createElHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElHelper */ \"./src/createElHelper.js\");\n\nconst imgCache = {}\n\nfunction importAll(r) {\n    return r.keys().forEach((key) => (imgCache[key] = r(key)));\n  }\n  \nimportAll(__webpack_require__(\"./src/images/flavors sync \\\\.(png|jpe?g|svg)$\"));\n\nconst render = () => {\n    const menu = document.createElement('main');\n    const ul = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul','menu-ul',null,null)\n    const para = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h2',null,null,\"Current flavors of the week:\")\n    menu.append(para);\n    const flavors = [\n        { name: \"Death by Chocolate\", img: imgCache['./DbyChoc.jpeg'], desc:\"Chocolate base with a fudge ripple and chocolate chips\" },\n        { name: \"Vindictive Vanilla\", img: imgCache['./vanilla.jpeg'], desc:\"Madagascar Vanilla churned to a rich smooth finish.\" }, \n        { name: \"Strawberry 'Splosion\", img: imgCache[\"./straw.jpg\"], desc:\"Fresh picked Strawberries with Strawberry ripple.\" },\n        { name: \"Galactic Garden\", img: imgCache[\"./garden.jpeg\"], desc:\"Vanilla with fudge ripple \"},\n        { name: \"Twist and Shout\", img: imgCache[\"./c&c.jpg\"], desc:\"Cookies and Cream. 'Nuff Said\"},\n        { name: \"Lavacious Lavender\", img: imgCache[\"./lavender.jpg\"], desc:\"Lavender from a local farm partner, hand mixed into this delightful flavor.\"}, \n        { name: \"I don't know!!!\", img: imgCache[\"./idk.jpeg\"], desc:\"Let us choose for you! Flavor Guarantee*\"},\n        { name: \"Frankenstein's Monster\", img: imgCache[\"./frank.jpeg\"], desc:\"All the leftover flavors from the day before, handmixed into a daily unique mix.\"},\n    ];\n\n    flavors.map(flavor=> {\n        const li = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li',null,[\"flavor\"],null);\n        const name = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h3',null,[\"f-name\"],flavor.name);\n        const desc = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p',null,[\"f-desc\"],flavor.desc);\n        const img = new Image();\n        img.src = flavor.img;\n        li.append(name,desc,img);\n        ul.append(li);\n        }\n    )\n    const guar = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p',\"guar\",null,\"*Flavor Guarantee- If you dont like a flavor, we will replace it no questions asked. Limit once per customer per visit.\")\n    menu.append(ul);\n    menu.append(guar);\n\n    return menu;\n};\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _createElHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElHelper */ \"./src/createElHelper.js\");\n/* harmony import */ var _images_icecream_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icecream.png */ \"./src/images/icecream.png\");\n\n\n\nconst render = () =>{\n    const navItems = [\"home\", \"menu\", \"about\"];\n    const ul = document.createElement('ul');\n    navItems.map(li=>ul.append((0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"li\",null,[\"navSel\"],li)))\n\n    const nav = document.createElement('nav');\n    nav.appendChild(ul);\n\n    const navName = (0,_createElHelper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\",null,[\"navName\"],\"The Double Scoop\");\n\n    // nav.appendChild(navName);\n\n    const myIcon = new Image();\n    myIcon.src = _images_icecream_png__WEBPACK_IMPORTED_MODULE_1__;\n    myIcon.className = \"navIcon\"\n    nav.appendChild(myIcon)\n\n    return nav\n}\n    \n\n//# sourceURL=webpack://restaurant_page/./src/nav.js?");

/***/ }),

/***/ "./src/images/GitHub.png":
/*!*******************************!*\
  !*** ./src/images/GitHub.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"266ca63177bca6f330a7.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/GitHub.png?");

/***/ }),

/***/ "./src/images/flavors/DbyChoc.jpeg":
/*!*****************************************!*\
  !*** ./src/images/flavors/DbyChoc.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f61d31687c66a7b80065.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/DbyChoc.jpeg?");

/***/ }),

/***/ "./src/images/flavors/c&c.jpg":
/*!************************************!*\
  !*** ./src/images/flavors/c&c.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cadf108a1817459ab75f.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/c&c.jpg?");

/***/ }),

/***/ "./src/images/flavors/frank.jpeg":
/*!***************************************!*\
  !*** ./src/images/flavors/frank.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ddd80855fdb9ab87e35a.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/frank.jpeg?");

/***/ }),

/***/ "./src/images/flavors/garden.jpeg":
/*!****************************************!*\
  !*** ./src/images/flavors/garden.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0cad8bff5f2116b45ae2.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/garden.jpeg?");

/***/ }),

/***/ "./src/images/flavors/idk.jpeg":
/*!*************************************!*\
  !*** ./src/images/flavors/idk.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"080322afc0be450bca06.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/idk.jpeg?");

/***/ }),

/***/ "./src/images/flavors/lavender.jpg":
/*!*****************************************!*\
  !*** ./src/images/flavors/lavender.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4bb8a982f2e429eb9e80.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/lavender.jpg?");

/***/ }),

/***/ "./src/images/flavors/straw.jpg":
/*!**************************************!*\
  !*** ./src/images/flavors/straw.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"aacb712c6cedb5c74e2c.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/straw.jpg?");

/***/ }),

/***/ "./src/images/flavors/vanilla.jpeg":
/*!*****************************************!*\
  !*** ./src/images/flavors/vanilla.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bddd3069ee4eba486851.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/flavors/vanilla.jpeg?");

/***/ }),

/***/ "./src/images/icecream.png":
/*!*********************************!*\
  !*** ./src/images/icecream.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0afb981b52732d4e8db3.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/icecream.png?");

/***/ }),

/***/ "./src/images/two-scoop.png":
/*!**********************************!*\
  !*** ./src/images/two-scoop.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"489ffa28a38eb56aebb1.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/two-scoop.png?");

/***/ }),

/***/ "./src/images/wallpaper.jpg":
/*!**********************************!*\
  !*** ./src/images/wallpaper.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"398aff10e96a15116557.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/wallpaper.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;