/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
const App = () => {
  return React.createElement("div", null, "Hello world!!!");
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createFragment: () => (/* binding */ createFragment),
/* harmony export */   renderWithHooks: () => (/* binding */ renderWithHooks)
/* harmony export */ });
const createElement = (tag, props, ...children) => {
  if (typeof tag === 'function') {
    return tag(props, ...children);
  }
  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window) {
      const eventName = name.toLowerCase().substring(2);
      const callback = value;
      element.addEventListener(eventName, callback);
    } else {
      element.setAttribute(name, value.toString());
    }
  });
  children.forEach(child => {
    appendChild(element, child);
  });
  return element;
};
const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach(nestedChild => appendChild(parent, nestedChild));
  } else {
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
  }
};
const createFragment = (props, ...children) => {
  return children;
};
const renderWithHooks = hooks => {
  //TODO
  console.log("todo");
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.tsx");
/** @jsx createElement */


document.getElementById("root").appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app__WEBPACK_IMPORTED_MODULE_1__.App, {
  name: "foo"
}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFFLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2Rvci13ZWJzaXRlLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vdGhlb2Rvci13ZWJzaXRlLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3RoZW9kb3Itd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kb3Itd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kb3Itd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kb3Itd2Vic2l0ZS8uL3NyYy9tYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gPGRpdj5IZWxsbyB3b3JsZCEhITwvZGl2PlxufVxuXG5leHBvcnQge1xuICAgIEFwcFxufSIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnOiBhbnksIHByb3BzOiBhbnksIC4uLmNoaWxkcmVuOiBhbnlbXSkgPT4ge1xuICAgIGlmKHR5cGVvZiB0YWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRhZyhwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyBhcyBzdHJpbmcpO1xuXG4gICAgT2JqZWN0LmVudHJpZXMocHJvcHMgfHwge30pLmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aChcIm9uXCIpICYmIG5hbWUudG9Mb3dlckNhc2UoKSBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGFwcGVuZENoaWxkKGVsZW1lbnQsIGNoaWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBhcHBlbmRDaGlsZCA9IChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogYW55KSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2gobmVzdGVkQ2hpbGQgPT4gYXBwZW5kQ2hpbGQocGFyZW50LCBuZXN0ZWRDaGlsZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZC5ub2RlVHlwZSA/IGNoaWxkIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbiAgICB9XG59O1xuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IChwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pID0+IHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG59O1xuY29uc3QgcmVuZGVyV2l0aEhvb2tzID0gKGhvb2tzOiBhbnlbXSkgPT4ge1xuICAgIC8vVE9ET1xuICAgIGNvbnNvbGUubG9nKFwidG9kb1wiKTtcbn1cblxuZXhwb3J0IHtcbiAgICByZW5kZXJXaXRoSG9va3MsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHBcIjtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpLmFwcGVuZENoaWxkKDxBcHAgbmFtZT1cImZvb1wiIC8+KTsiXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwidGFnIiwicHJvcHMiLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwic3RhcnRzV2l0aCIsInRvTG93ZXJDYXNlIiwid2luZG93IiwiZXZlbnROYW1lIiwic3Vic3RyaW5nIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwidG9TdHJpbmciLCJjaGlsZCIsImFwcGVuZENoaWxkIiwicGFyZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibmVzdGVkQ2hpbGQiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRnJhZ21lbnQiLCJyZW5kZXJXaXRoSG9va3MiLCJob29rcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=