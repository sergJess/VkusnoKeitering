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

/***/ "./src/js/coffee-break-keitering/coffee-break.js":
/*!*******************************************************!*\
  !*** ./src/js/coffee-break-keitering/coffee-break.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\nvar header = document.getElementById(\"header-id\");\n//menu\nvar burger = header.querySelector(\".navigation-burger\");\nburger.onclick = function () {\n  var mobileMenu = header.querySelector(\".header__block-nav\");\n  mobileMenu.classList.add(\"header__block-nav_open\");\n};\nvar cross = header.querySelector(\".navigation-cross__click\");\ncross.onclick = function () {\n  var mobileMenu = header.querySelector(\".header__block-nav\");\n  mobileMenu.classList.remove(\"header__block-nav_open\");\n};\n//order-call-form\nvar orderCallButtons = header.querySelectorAll(\".order-call-button_btn\");\nvar crossOrderCallForm = document.getElementById(\"order-call-form-cross-id\");\nvar orderCallForm = document.getElementById(\"order-call-form-block-id\");\ncrossOrderCallForm.onclick = function () {\n  orderCallForm.classList.remove(\"order-call-form-block_show\");\n};\nfor (var i = 0, length = orderCallButtons.length; i < length; i++) {\n  orderCallButtons[i].onclick = function () {\n    orderCallForm.classList.add(\"order-call-form-block_show\");\n  };\n}\n// navigation show submenu\nvar navigation = document.getElementById(\"navigation-id\");\nvar navigationLists = navigation.querySelectorAll(\".navigation-show__submenu\");\nvar _loop = function _loop(_i) {\n  navigationLists[_i].onclick = function () {\n    var navigationSubmenu = navigation.querySelectorAll(\".navigation__submenu\");\n    var submenu = navigationLists[_i].querySelector(\".navigation__submenu\");\n    var isHaveActiveClass = submenu.classList.contains(\"navigation__submenu_show\");\n    for (var j = 0; j < navigationSubmenu.length; j++) {\n      navigationSubmenu[j].classList.remove(\"navigation__submenu_show\");\n    }\n    if (!isHaveActiveClass) submenu.classList.add(\"navigation__submenu_show\");\n  };\n};\nfor (var _i = 0, _length = navigationLists.length; _i < _length; _i++) {\n  _loop(_i);\n}\n//height in ready made solutions block linear-gradient\nvar readyMeadeSolutionsBlock = document.getElementById(\"ready-made-solutions-id\");\nfunction setReadyMadeSolutionsLinearGradient(contentInnerBlock, color) {\n  var contentBlockHeight = contentInnerBlock.clientHeight;\n  var imgInnerHeigh = contentInnerBlock.querySelector(\".ready-made-solutions__img-inner\").clientHeight;\n  var textInnerHeight = contentInnerBlock.querySelector(\".ready-made-solutions__text-title-block\").clientHeight;\n  if (window.innerWidth > 860) {\n    contentInnerBlock.style.backgroundImage = \"linear-gradient(180deg, \".concat(color, \" \").concat(textInnerHeight - 8, \"px, #fff \").concat(contentBlockHeight - textInnerHeight, \"px)\");\n  } else {\n    contentInnerBlock.style.backgroundImage = \"linear-gradient(180deg, \".concat(color, \" \").concat(textInnerHeight + imgInnerHeigh - 5, \"px, #fff \").concat(contentBlockHeight - textInnerHeight - imgInnerHeigh, \"px)\");\n  }\n}\nvar readyMadeSolutionsContent = readyMeadeSolutionsBlock.querySelector(\".ready-made-solutions__content\");\nsetReadyMadeSolutionsLinearGradient(readyMadeSolutionsContent, \"#423329\");\n// scroll button up\nfunction showOrHideUpButton() {\n  var buttonUp = this.document.getElementById(\"up-button-id\");\n  if (this.window.scrollY > 500) {\n    buttonUp.classList.add(\"up-button_show\");\n  } else {\n    buttonUp.classList.remove(\"up-button_show\");\n  }\n}\nwindow.addEventListener(\"scroll\", showOrHideUpButton);\n// smooth scroll\nfunction isNodeOrParent(target) {\n  var anchor = target;\n  if (target.parentNode.classList.contains(\"scroll-to\")) {\n    anchor = target.parentNode;\n    return anchor;\n  }\n  return anchor;\n}\nfunction smoothScroll(e) {\n  if (e.target.classList.contains(\"scroll-to\") || e.target.parentNode.classList.contains(\"scroll-to\")) {\n    var _step = function step(time) {\n      if (start === null) start = time;\n      var progress = time - start;\n      var windowCoordsToScrollY = topCoordsOftoScrollElelement < 0 ? Math.max(windowOffSetY - progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement) : Math.min(windowOffSetY + progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement);\n      window.scrollTo(0, windowCoordsToScrollY);\n      if (windowCoordsToScrollY != windowOffSetY + topCoordsOftoScrollElelement) {\n        requestAnimationFrame(_step);\n      }\n    };\n    e.preventDefault();\n    var scrollSpeed = 0.35;\n    var windowOffSetY = window.pageYOffset;\n    var anchorElement = isNodeOrParent(e.target).getAttribute(\"href\").replace(\"#\", \"\");\n    var toScrollElelement = document.getElementById(anchorElement);\n    var topCoordsOftoScrollElelement = toScrollElelement.getBoundingClientRect().top;\n    var start = null;\n    requestAnimationFrame(_step);\n  }\n}\ndocument.addEventListener(\"click\", smoothScroll);\n\n//# sourceURL=webpack:///./src/js/coffee-break-keitering/coffee-break.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/coffee-break-keitering/coffee-break.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;