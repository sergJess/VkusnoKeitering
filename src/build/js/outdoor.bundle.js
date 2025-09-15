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

/***/ "./src/js/outdoor-bars-keitering/outdoor-bars-keitering.js":
/*!*****************************************************************!*\
  !*** ./src/js/outdoor-bars-keitering/outdoor-bars-keitering.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\nconst header = document.getElementById(\"header-id\");\r\n//menu\r\nconst burger = header.querySelector(\".navigation-burger\");\r\nburger.onclick = () => {\r\n  const mobileMenu = header.querySelector(\".header__block-nav\");\r\n  mobileMenu.classList.add(\"header__block-nav_open\");\r\n};\r\nconst cross = header.querySelector(\".navigation-cross__click\");\r\ncross.onclick = () => {\r\n  const mobileMenu = header.querySelector(\".header__block-nav\");\r\n  mobileMenu.classList.remove(\"header__block-nav_open\");\r\n};\r\n//order-call-form\r\nconst orderCallButtons = header.querySelectorAll(\".order-call-button_btn\");\r\nconst crossOrderCallForm = document.getElementById(\"order-call-form-cross-id\");\r\nconst orderCallForm = document.getElementById(\"order-call-form-block-id\");\r\ncrossOrderCallForm.onclick = () => {\r\n  orderCallForm.classList.remove(\"order-call-form-block_show\");\r\n};\r\nfor (let i = 0, length = orderCallButtons.length; i < length; i++) {\r\n  orderCallButtons[i].onclick = () => {\r\n    orderCallForm.classList.add(\"order-call-form-block_show\");\r\n  };\r\n}\r\n// navigation show submenu\r\nconst navigation = document.getElementById(\"navigation-id\");\r\nconst navigationLists = navigation.querySelectorAll(\r\n  \".navigation-show__submenu\"\r\n);\r\nfor (let i = 0, length = navigationLists.length; i < length; i++) {\r\n  navigationLists[i].onclick = () => {\r\n    const navigationSubmenu = navigation.querySelectorAll(\r\n      \".navigation__submenu\"\r\n    );\r\n    const submenu = navigationLists[i].querySelector(\".navigation__submenu\");\r\n    const isHaveActiveClass = submenu.classList.contains(\r\n      \"navigation__submenu_show\"\r\n    );\r\n    for (let j = 0; j < navigationSubmenu.length; j++) {\r\n      navigationSubmenu[j].classList.remove(\"navigation__submenu_show\");\r\n    }\r\n    if (!isHaveActiveClass) submenu.classList.add(\"navigation__submenu_show\");\r\n  };\r\n}\r\n//height in ready made solutions block linear-gradient\r\nconst readyMeadeSolutionsBlock = document.getElementById(\r\n  \"ready-made-solutions-id\"\r\n);\r\nfunction setReadyMadeSolutionsLinearGradient(contentInnerBlock, color) {\r\n  const contentBlockHeight = contentInnerBlock.clientHeight;\r\n  const imgInnerHeigh = contentInnerBlock.querySelector(\r\n    \".ready-made-solutions__img-inner\"\r\n  ).clientHeight;\r\n  const textInnerHeight = contentInnerBlock.querySelector(\r\n    \".ready-made-solutions__text-title-block\"\r\n  ).clientHeight;\r\n  if (window.innerWidth > 860) {\r\n    contentInnerBlock.style.backgroundImage = `linear-gradient(180deg, ${color} ${\r\n      textInnerHeight - 8\r\n    }px, #fff ${contentBlockHeight - textInnerHeight}px)`;\r\n  } else {\r\n    contentInnerBlock.style.backgroundImage = `linear-gradient(180deg, ${color} ${\r\n      textInnerHeight + imgInnerHeigh - 5\r\n    }px, #fff ${contentBlockHeight - textInnerHeight - imgInnerHeigh}px)`;\r\n  }\r\n}\r\nconst readyMadeSolutionsContent = readyMeadeSolutionsBlock.querySelector(\r\n  \".ready-made-solutions__content\"\r\n);\r\nsetReadyMadeSolutionsLinearGradient(readyMadeSolutionsContent, \"#292E42\");\r\n// scroll button up\r\nfunction showOrHideUpButton() {\r\n  const buttonUp = this.document.getElementById(\"up-button-id\");\r\n  if (this.window.scrollY > 500) {\r\n    buttonUp.classList.add(\"up-button_show\");\r\n  } else {\r\n    buttonUp.classList.remove(\"up-button_show\");\r\n  }\r\n}\r\nwindow.addEventListener(\"scroll\", showOrHideUpButton);\r\n// smooth scroll\r\nfunction isNodeOrParent(target) {\r\n  let anchor = target;\r\n  if (target.parentNode.classList.contains(\"scroll-to\")) {\r\n    anchor = target.parentNode;\r\n    return anchor;\r\n  }\r\n  return anchor;\r\n}\r\nfunction smoothScroll(e) {\r\n  if (\r\n    e.target.classList.contains(\"scroll-to\") ||\r\n    e.target.parentNode.classList.contains(\"scroll-to\")\r\n  ) {\r\n    e.preventDefault();\r\n    const scrollSpeed = 0.35;\r\n    let windowOffSetY = window.pageYOffset;\r\n    let anchorElement = isNodeOrParent(e.target)\r\n      .getAttribute(\"href\")\r\n      .replace(\"#\", \"\");\r\n    let toScrollElelement = document.getElementById(anchorElement);\r\n    let topCoordsOftoScrollElelement =\r\n      toScrollElelement.getBoundingClientRect().top;\r\n    let start = null;\r\n    requestAnimationFrame(step);\r\n    function step(time) {\r\n      if (start === null) start = time;\r\n      let progress = time - start;\r\n      let windowCoordsToScrollY =\r\n        topCoordsOftoScrollElelement < 0\r\n          ? Math.max(\r\n              windowOffSetY - progress / scrollSpeed,\r\n              windowOffSetY + topCoordsOftoScrollElelement\r\n            )\r\n          : Math.min(\r\n              windowOffSetY + progress / scrollSpeed,\r\n              windowOffSetY + topCoordsOftoScrollElelement\r\n            );\r\n      window.scrollTo(0, windowCoordsToScrollY);\r\n      if (\r\n        windowCoordsToScrollY !=\r\n        windowOffSetY + topCoordsOftoScrollElelement\r\n      ) {\r\n        requestAnimationFrame(step);\r\n      }\r\n    }\r\n  }\r\n}\r\ndocument.addEventListener(\"click\", smoothScroll);\r\n\n\n//# sourceURL=webpack:///./src/js/outdoor-bars-keitering/outdoor-bars-keitering.js?\n}");

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
/******/ 	__webpack_modules__["./src/js/outdoor-bars-keitering/outdoor-bars-keitering.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;