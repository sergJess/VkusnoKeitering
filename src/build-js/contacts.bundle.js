/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/contacts/contacts.js":
/*!*************************************!*\
  !*** ./src/js/contacts/contacts.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_show_or_hide_up_button_show_or_hide_up_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/show-or-hide-up-button/show-or-hide-up-button.js */ \"./src/js/utils/show-or-hide-up-button/show-or-hide-up-button.js\");\n/* harmony import */ var _utils_smooth_scroll_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/smooth-scroll/smooth-scroll.js */ \"./src/js/utils/smooth-scroll/smooth-scroll.js\");\n/* harmony import */ var _utils_show_navigation_submenu_show_navigation_submenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/show-navigation-submenu/show-navigation-submenu.js */ \"./src/js/utils/show-navigation-submenu/show-navigation-submenu.js\");\n/* harmony import */ var _utils_burger_menu_burger_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/burger-menu/burger-menu.js */ \"./src/js/utils/burger-menu/burger-menu.js\");\n\n\n\n\nvar header = document.getElementById(\"header-id\");\n// burger menu\n(0,_utils_burger_menu_burger_menu_js__WEBPACK_IMPORTED_MODULE_3__.burgerMenu)();\n//order-call-form\nvar orderCallButtons = header.querySelectorAll(\".order-call-button_btn\");\nvar crossOrderCallForm = document.getElementById(\"order-call-form-cross-id\");\nvar orderCallForm = document.getElementById(\"order-call-form-block-id\");\ncrossOrderCallForm.onclick = function () {\n  orderCallForm.classList.remove(\"order-call-form-block_show\");\n};\nfor (var i = 0, length = orderCallButtons.length; i < length; i++) {\n  orderCallButtons[i].onclick = function () {\n    orderCallForm.classList.add(\"order-call-form-block_show\");\n  };\n}\n// navigation show submenu\n(0,_utils_show_navigation_submenu_show_navigation_submenu_js__WEBPACK_IMPORTED_MODULE_2__.showNavigationSubmenu)();\n// scroll button up\nwindow.addEventListener(\"scroll\", _utils_show_or_hide_up_button_show_or_hide_up_button_js__WEBPACK_IMPORTED_MODULE_0__.showOrHideUpButton);\n// smooth scroll\ndocument.addEventListener(\"click\", _utils_smooth_scroll_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__.smoothScroll);\n\n//# sourceURL=webpack:///./src/js/contacts/contacts.js?\n}");

/***/ }),

/***/ "./src/js/utils/burger-menu/burger-menu.js":
/*!*************************************************!*\
  !*** ./src/js/utils/burger-menu/burger-menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)\n/* harmony export */ });\n// show burger menu\nfunction burgerMenu() {\n  var header = document.getElementById(\"header-id\");\n  var burger = header.querySelector(\".navigation-burger\");\n  burger.onclick = function () {\n    var mobileMenu = header.querySelector(\".header__block-nav\");\n    mobileMenu.classList.add(\"header__block-nav_open\");\n  };\n  var cross = header.querySelector(\".navigation-cross__click\");\n  cross.onclick = function () {\n    var mobileMenu = header.querySelector(\".header__block-nav\");\n    mobileMenu.classList.remove(\"header__block-nav_open\");\n  };\n}\n\n//# sourceURL=webpack:///./src/js/utils/burger-menu/burger-menu.js?\n}");

/***/ }),

/***/ "./src/js/utils/show-navigation-submenu/show-navigation-submenu.js":
/*!*************************************************************************!*\
  !*** ./src/js/utils/show-navigation-submenu/show-navigation-submenu.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showNavigationSubmenu: () => (/* binding */ showNavigationSubmenu)\n/* harmony export */ });\n// navigation show submenu\nfunction showNavigationSubmenu() {\n  var navigation = document.getElementById(\"navigation-id\");\n  var navigationLists = navigation.querySelectorAll(\".navigation-show__submenu\");\n  var _loop = function _loop(i) {\n    navigationLists[i].onclick = function () {\n      var navigationSubmenu = navigation.querySelectorAll(\".navigation__submenu\");\n      var submenu = navigationLists[i].querySelector(\".navigation__submenu\");\n      var isHaveActiveClass = submenu.classList.contains(\"navigation__submenu_show\");\n      for (var j = 0; j < navigationSubmenu.length; j++) {\n        navigationSubmenu[j].classList.remove(\"navigation__submenu_show\");\n      }\n      if (!isHaveActiveClass) submenu.classList.add(\"navigation__submenu_show\");\n    };\n  };\n  for (var i = 0, length = navigationLists.length; i < length; i++) {\n    _loop(i);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/utils/show-navigation-submenu/show-navigation-submenu.js?\n}");

/***/ }),

/***/ "./src/js/utils/show-or-hide-up-button/show-or-hide-up-button.js":
/*!***********************************************************************!*\
  !*** ./src/js/utils/show-or-hide-up-button/show-or-hide-up-button.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showOrHideUpButton: () => (/* binding */ showOrHideUpButton)\n/* harmony export */ });\n// scroll button up\nfunction showOrHideUpButton() {\n  var buttonUp = this.document.getElementById(\"up-button-id\");\n  if (this.window.scrollY > 500) {\n    buttonUp.classList.add(\"up-button_show\");\n  } else {\n    buttonUp.classList.remove(\"up-button_show\");\n  }\n}\n\n//# sourceURL=webpack:///./src/js/utils/show-or-hide-up-button/show-or-hide-up-button.js?\n}");

/***/ }),

/***/ "./src/js/utils/smooth-scroll/smooth-scroll.js":
/*!*****************************************************!*\
  !*** ./src/js/utils/smooth-scroll/smooth-scroll.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\n//smooth scroll\nfunction isNodeOrParent(target) {\n  var anchor = target;\n  if (target.parentNode.classList.contains(\"scroll-to\")) {\n    anchor = target.parentNode;\n    return anchor;\n  }\n  return anchor;\n}\nfunction smoothScroll(e) {\n  if (e.target.classList.contains(\"scroll-to\") || e.target.parentNode.classList.contains(\"scroll-to\")) {\n    var _step = function step(time) {\n      if (start === null) start = time;\n      var progress = time - start;\n      var windowCoordsToScrollY = topCoordsOftoScrollElelement < 0 ? Math.max(windowOffSetY - progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement) : Math.min(windowOffSetY + progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement);\n      window.scrollTo(0, windowCoordsToScrollY);\n      if (windowCoordsToScrollY != windowOffSetY + topCoordsOftoScrollElelement) {\n        requestAnimationFrame(_step);\n      }\n    };\n    e.preventDefault();\n    var scrollSpeed = 0.35;\n    var windowOffSetY = window.pageYOffset;\n    var anchorElement = isNodeOrParent(e.target).getAttribute(\"href\").replace(\"#\", \"\");\n    var toScrollElelement = document.getElementById(anchorElement);\n    var topCoordsOftoScrollElelement = toScrollElelement.getBoundingClientRect().top;\n    var start = null;\n    requestAnimationFrame(_step);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/utils/smooth-scroll/smooth-scroll.js?\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/contacts/contacts.js");
/******/ 	
/******/ })()
;