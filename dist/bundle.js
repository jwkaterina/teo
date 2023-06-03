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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _reactish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactish */ "./src/reactish.ts");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_mobile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/mobile.css */ "./src/css/mobile.css");
/** @jsx createElement */
/** @jsxFrag createFragment */




const App = props => {
  const [count, setCount] = _reactish__WEBPACK_IMPORTED_MODULE_1__.Reactish.useState(1);
  console.log(props);
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)(Header, null), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)(Main, null), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContactForm, null), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)(Footer, null));

  // return <div id="comp1">
  //     <h1>Hello world!!!</h1>
  //     <h2>Test</h2>
  //     {
  //         [1,2,3].map(element => {
  //             return <p>{element}</p>
  //         })
  //     }
  //     <p>Count:</p>
  //     {/* <p>{count}</p> */}
  //     <button onclick={()=>{
  //         // setCount(count + 1);
  //         Reactish.render(<App name="foo" />, "#comp1");
  //     }}>Click</button>
  // </div>

  // Reactish.render(<Header name="foo1"/>);
  // Reactish.render(<Main/>);
  // Reactish.render(<ContactForm/>);
  // Reactish.render(<Footer/>);
};

const Header = props => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "header"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "header-content"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    id: "Heading"
  }, "Theodor"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    "class": "lead"
  }, "I am ", (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "class": "txt-type",
    "data-wait": "3000",
    "data-words": '["a cat.", "an adventurer.", "a meat lover."]'
  })), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    "class": "btn-start"
  }))));
};
const Main = props => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    id: "home"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "home-main"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "home-a",
    "class": "home-flex"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "home-content"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "fas fa-cat fa-2x"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "about me"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    "class": "btn upper",
    disabled: true
  }, "View more"))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "home-b",
    "class": "home-flex"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "home-content"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "fas fa-id-card fa-2x"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "resume"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    "class": "btn upper"
  }, "View more"))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "home-c",
    "class": "home-flex"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "home-content"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "fas fa-briefcase fa-2x"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "portfolio"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    "class": "btn upper"
  }, "View more"))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "home-d",
    "class": "home-flex"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "home-content"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "fas fa-book fa-2x"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "blog"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet consectetur."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    "class": "btn upper"
  }, "View more")))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "book-top"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "book-bottom"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "about"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "book-container"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "",
    "class": "btn-close"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "cross"
  })), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "about me"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam id sequi, eveniet est inventore laborum eum blanditiis mollitia nostrum illo, maxime quidem non magnam porro, consequatur qui! Eos praesentium sapiente, illo porro quas beatae corporis possimus inventore nulla voluptatem impedit repudiandae itaque magni. Inventore exercitationem corporis eius impedit aut asperiores beatae eligendi sapiente dolor in. Consequuntur ullam iusto repudiandae, adipisci nulla obcaecati, omnis repellendus quasi quod tempore commodi nobis sit alias explicabo perferendis aliquam exercitationem maxime consequatur optio ad blanditiis in ab officiis. Repellendus ipsa labore velit debitis laboriosam nisi veritatis commodi, atque, natus facere voluptates ullam officia necessitatibus repellat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ipsa illum, maiores, perferendis sed corporis quo nulla mollitia itaque distinctio natus sit vero velit minima nesciunt molestiae adipisci qui inventore labore accusantium soluta unde eveniet deleniti? Animi rem a provident, repellendus aperiam eligendi aspernatur quaerat, repudiandae eveniet, ullam eaque quo debitis pariatur. Ipsa velit tempore at accusamus nisi eveniet, inventore neque quam dolorum! Expedita deserunt, iusto earum impedit laboriosam dolor eveniet voluptatem enim laborum, ipsam, distinctio ipsa vero illo quis repellendus ad. Mollitia nam repudiandae est inventore asperiores ipsam expedita praesentium, nisi numquam iure impedit alias dolor quod repellendus suscipit itaque, recusandae earum quaerat. Quaerat fugiat, nemo ipsa officia distinctio quas fugit dolorem sit impedit, quod facilis, obcaecati dignissimos odio! Tempore cum quis dolorem corrupti cumque, placeat consequatur exercitationem blanditiis quod explicabo! Totam, dolorem mollitia ducimus quas sapiente provident eum fuga tempore libero? Ex explicabo consequatur necessitatibus, qui nisi quia nemo nostrum ut dolores delectus at assumenda culpa excepturi. Ad vitae architecto, amet nihil natus molestiae praesentium eaque, odio provident voluptas adipisci fugit saepe laboriosam facilis, ea sunt! Omnis excepturi labore ex eligendi delectus quaerat dignissimos, assumenda voluptates hic animi voluptate laborum atque, ducimus unde pariatur quia voluptatibus ipsum vel?"))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "resume"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "book-container"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "",
    "class": "btn-close"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "cross"
  })), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "resume"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum quisquam perspiciatis minima repellendus. Suscipit accusantium corporis eos sequi earum. Obcaecati ipsum, consequuntur illo eum, libero reiciendis nihil harum officiis molestias nemo ipsam? Optio, ad excepturi. Quaerat, eum? Labore enim saepe praesentium corporis, totam dolorem nesciunt illo non incidunt similique suscipit eaque, aliquam vero laudantium reprehenderit dolore placeat repellendus consequuntur consequatur debitis nemo reiciendis deserunt? Optio minus atque quia nobis odit veniam, quasi delectus dolorem omnis vitae, vero sequi consequatur molestiae animi deleniti porro saepe aut rem, molestias nulla! Nam, nobis reiciendis. Commodi numquam vero est maiores reiciendis eum voluptate!"))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "portfolio"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "book-container"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "",
    "class": "btn-close"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "cross"
  })), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "portfolio"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aliquam dolorum sed vero, officia architecto? Rem sit laborum iste ipsa modi quisquam accusamus, quae fugit, reiciendis, exercitationem dolor recusandae dolorum voluptates eos labore provident dignissimos ipsam. Recusandae odio quae suscipit minima totam dolorum iure minus, repellat voluptates nesciunt, repudiandae voluptatum fuga nulla omnis iusto ab incidunt rerum error! Veniam eveniet architecto animi perferendis rem soluta ipsam nulla maxime quam deleniti labore omnis nisi, id quibusdam possimus ab quidem accusamus dolorem ad incidunt error eum enim tempora. Quod quam accusamus tempore error eos, soluta sit itaque iusto excepturi distinctio corporis modi."))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "blog"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "book-container"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "",
    "class": "btn-close"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "cross"
  })), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "blog"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe enim at in provident consequatur eveniet iste sed quidem ratione soluta quae ipsam officiis, et eum expedita voluptatem excepturi. Quod debitis fuga officiis numquam laboriosam doloribus necessitatibus distinctio sint blanditiis. Iusto harum accusamus deleniti magnam eligendi, accusantium, quaerat repellendus a sit molestiae odit laboriosam minima eius. Corporis alias dignissimos nisi veniam ratione ipsa quo itaque perferendis dolorum ab unde tempore harum in odio dolorem, autem doloribus, omnis quam quasi a provident hic mollitia, fugit tempora. Voluptas aspernatur error placeat, quisquam nesciunt consequuntur, labore exercitationem blanditiis expedita eum animi, repellat incidunt?"))));
};
const ContactForm = props => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    id: "contact-form"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "checkbox"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "far fa-check-circle fa-8x"
  })), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "contact-grid"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "map"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "form"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    action: ""
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    "class": "upper"
  }, "Drop me a line"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "input-group"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    "class": "upper",
    "for": "name"
  }, "Name"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "alert-1",
    "class": "invalid upper"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "arrow"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This field is requied."))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "input-group"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    "class": "upper",
    "for": "email"
  }, "Email"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "alert-1",
    "class": "invalid upper"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "arrow"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This field is requied.")), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "alert-2",
    "class": "invalid upper"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "arrow"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Please Enter a Valid Email Adress."))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "input-group"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    "class": "upper",
    "for": "message"
  }, "Message"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    name: "message",
    id: "message"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "alert-1",
    "class": "invalid upper"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "arrow"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This field is requied."))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: "button",
    "class": "upper",
    type: "submit"
  }, "Send")))), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "contact"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "icon-group"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "far fa-map fa-2x"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    "class": "upper"
  }, "Based in Berlin, Germany")), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "icon-group"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "fas fa-mobile-alt fa-2x"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    "class": "upper"
  }, "Tel: +49 1234 567 8910")), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "icon-group"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    "class": "far fa-envelope fa-2x"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    "class": "upper"
  }, "Theodor@gmail.com"))));
};
const Footer = props => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
    "class": "upper"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Copyright \xA9 2022 by Owner"));
};


/***/ }),

/***/ "./src/reactish.ts":
/*!*************************!*\
  !*** ./src/reactish.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Reactish: () => (/* binding */ Reactish)
/* harmony export */ });
const Reactish = (() => {
  let index = 0;
  let states = [];
  function useState(initVal) {
    const state = states[index] || initVal;
    const stateIndex = index;
    const setState = newVal => {
      states[stateIndex] = newVal;
      console.log(states);
    };
    index++;
    return [state, setState];
  }
  function render(component, selector) {
    const root = document.getElementById("root");
    const oldComponent = root.querySelector(selector);
    if (oldComponent) {
      oldComponent.remove();
    }
    root.appendChild(component);
    index = 0;
  }
  return {
    render,
    useState
  };
})();


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


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/mobile.css":
/*!****************************!*\
  !*** ./src/css/mobile.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _reactish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactish */ "./src/reactish.ts");
//babel pragma function
/** @jsx createElement */



_reactish__WEBPACK_IMPORTED_MODULE_2__.Reactish.render((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app__WEBPACK_IMPORTED_MODULE_1__.App, {
  name: "foo"
}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNrQixNQUFNLEVBQUVHLFdBQVcsQ0FBQyxDQUFDO0VBQ2xFLENBQUMsTUFBTTtJQUNISCxNQUFNLENBQUNsQixXQUFXLENBQUNpQixLQUFLLENBQUNLLFFBQVEsR0FBR0wsS0FBSyxHQUFHdEIsUUFBUSxDQUFDNEIsY0FBYyxDQUFDTixLQUFLLENBQUMsQ0FBQztFQUMvRTtBQUNKLENBQUM7QUFFRCxNQUFNcEQsY0FBYyxHQUFHQSxDQUFDRyxLQUFVLEVBQUUsR0FBR2tDLFFBQWUsS0FBSztFQUN2RCxPQUFPQSxRQUFRO0FBQ25CLENBQUM7QUFDRCxNQUFNc0IsZUFBZSxHQUFJQyxLQUFZLElBQUs7RUFDdEM7RUFDQXJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7QUN0Q0Q7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUN3QztBQUNaO0FBQ1U7QUFFdENQLHNEQUFlLENBQUNGLHFEQUFBLENBQUNHLHFDQUFHO0VBQUNlLElBQUksRUFBQztBQUFLLENBQUUsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvLi9zcmMvcmVhY3Rpc2gudHMiLCJ3ZWJwYWNrOi8vdGhlb2Rvci13ZWJzaXRlLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3RoZW9kb3Itd2Vic2l0ZS8uL3NyYy9jc3MvbWFpbi5jc3M/ZDI0OSIsIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvLi9zcmMvY3NzL21vYmlsZS5jc3M/M2Q1YSIsIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2Rvci13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZG9yLXdlYnNpdGUvLi9zcmMvbWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xuLyoqIEBqc3hGcmFnIGNyZWF0ZUZyYWdtZW50ICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVGcmFnbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBSZWFjdGlzaCB9IGZyb20gXCIuL3JlYWN0aXNoXCI7XG5cbmltcG9ydCBcIi4vY3NzL21haW4uY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9tb2JpbGUuY3NzXCI7XG5cbmNvbnN0IEFwcCA9IChwcm9wczogYW55KSA9PiB7XG5cbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0aXNoLnVzZVN0YXRlKDEpO1xuXG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICA8TWFpbi8+XG4gICAgICAgIDxDb250YWN0Rm9ybS8+XG4gICAgICAgIDxGb290ZXIvPlxuICAgIDwvZGl2PlxuXG4gICAgLy8gcmV0dXJuIDxkaXYgaWQ9XCJjb21wMVwiPlxuICAgIC8vICAgICA8aDE+SGVsbG8gd29ybGQhISE8L2gxPlxuICAgIC8vICAgICA8aDI+VGVzdDwvaDI+XG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIFsxLDIsM10ubWFwKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiA8cD57ZWxlbWVudH08L3A+XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIDxwPkNvdW50OjwvcD5cbiAgICAvLyAgICAgey8qIDxwPntjb3VudH08L3A+ICovfVxuICAgIC8vICAgICA8YnV0dG9uIG9uY2xpY2s9eygpPT57XG4gICAgLy8gICAgICAgICAvLyBzZXRDb3VudChjb3VudCArIDEpO1xuICAgIC8vICAgICAgICAgUmVhY3Rpc2gucmVuZGVyKDxBcHAgbmFtZT1cImZvb1wiIC8+LCBcIiNjb21wMVwiKTtcbiAgICAvLyAgICAgfX0+Q2xpY2s8L2J1dHRvbj5cbiAgICAvLyA8L2Rpdj5cblxuICAgIC8vIFJlYWN0aXNoLnJlbmRlcig8SGVhZGVyIG5hbWU9XCJmb28xXCIvPik7XG4gICAgLy8gUmVhY3Rpc2gucmVuZGVyKDxNYWluLz4pO1xuICAgIC8vIFJlYWN0aXNoLnJlbmRlcig8Q29udGFjdEZvcm0vPik7XG4gICAgLy8gUmVhY3Rpc2gucmVuZGVyKDxGb290ZXIvPik7XG59XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wczogYW55KSA9PiB7XG4gICAgcmV0dXJuIDxoZWFkZXIgPlxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDEgaWQ9XCJIZWFkaW5nXCI+VGhlb2RvcjwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+SSBhbSA8c3BhbiBjbGFzcz1cInR4dC10eXBlXCIgZGF0YS13YWl0PVwiMzAwMFwiIGRhdGEtd29yZHM9J1tcImEgY2F0LlwiLCBcImFuIGFkdmVudHVyZXIuXCIsIFwiYSBtZWF0IGxvdmVyLlwiXSc+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLXN0YXJ0XCI+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxufVxuXG5jb25zdCBNYWluID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICByZXR1cm4gIDxzZWN0aW9uIGlkPVwiaG9tZVwiPlxuICAgICAgICA8ZGl2IGlkPVwiaG9tZS1tYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZS1hXCIgY2xhc3M9XCJob21lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhdCBmYS0yeFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPmFib3V0IG1lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biB1cHBlclwiIGRpc2FibGVkPlZpZXcgbW9yZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWUtYlwiIGNsYXNzPVwiaG9tZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1pZC1jYXJkIGZhLTJ4XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8aDI+cmVzdW1lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gdXBwZXJcIj5WaWV3IG1vcmU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZS1jXCIgY2xhc3M9XCJob21lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJyaWVmY2FzZSBmYS0yeFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnBvcnRmb2xpbzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gdXBwZXJcIj5WaWV3IG1vcmU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lLWRcIiBjbGFzcz1cImhvbWUtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYm9vayBmYS0yeFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPmJsb2c8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gdXBwZXJcIj5WaWV3IG1vcmU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJib29rLXRvcFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiYm9vay1ib3R0b21cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImFib3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vay1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJidG4tY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNyb3NzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxoMT5hYm91dCBtZTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aXNxdWFtIGlkIHNlcXVpLCBldmVuaWV0IGVzdCBpbnZlbnRvcmUgbGFib3J1bSBldW0gYmxhbmRpdGlpcyBtb2xsaXRpYSBub3N0cnVtIGlsbG8sIG1heGltZSBxdWlkZW0gbm9uIG1hZ25hbSBwb3JybywgY29uc2VxdWF0dXIgcXVpISBFb3MgcHJhZXNlbnRpdW0gc2FwaWVudGUsIGlsbG8gcG9ycm8gcXVhcyBiZWF0YWUgY29ycG9yaXMgcG9zc2ltdXMgaW52ZW50b3JlIG51bGxhIHZvbHVwdGF0ZW0gaW1wZWRpdCByZXB1ZGlhbmRhZSBpdGFxdWUgbWFnbmkuIEludmVudG9yZSBleGVyY2l0YXRpb25lbSBjb3Jwb3JpcyBlaXVzIGltcGVkaXQgYXV0IGFzcGVyaW9yZXMgYmVhdGFlIGVsaWdlbmRpIHNhcGllbnRlIGRvbG9yIGluLiBDb25zZXF1dW50dXIgdWxsYW0gaXVzdG8gcmVwdWRpYW5kYWUsIGFkaXBpc2NpIG51bGxhIG9iY2FlY2F0aSwgb21uaXMgcmVwZWxsZW5kdXMgcXVhc2kgcXVvZCB0ZW1wb3JlIGNvbW1vZGkgbm9iaXMgc2l0IGFsaWFzIGV4cGxpY2FibyBwZXJmZXJlbmRpcyBhbGlxdWFtIGV4ZXJjaXRhdGlvbmVtIG1heGltZSBjb25zZXF1YXR1ciBvcHRpbyBhZCBibGFuZGl0aWlzIGluIGFiIG9mZmljaWlzLiBSZXBlbGxlbmR1cyBpcHNhIGxhYm9yZSB2ZWxpdCBkZWJpdGlzIGxhYm9yaW9zYW0gbmlzaSB2ZXJpdGF0aXMgY29tbW9kaSwgYXRxdWUsIG5hdHVzIGZhY2VyZSB2b2x1cHRhdGVzIHVsbGFtIG9mZmljaWEgbmVjZXNzaXRhdGlidXMgcmVwZWxsYXQ/XG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBWZXJpdGF0aXMgaXBzYSBpbGx1bSwgbWFpb3JlcywgcGVyZmVyZW5kaXMgc2VkIGNvcnBvcmlzIHF1byBudWxsYSBtb2xsaXRpYSBpdGFxdWUgZGlzdGluY3RpbyBuYXR1cyBzaXQgdmVybyB2ZWxpdCBtaW5pbWEgbmVzY2l1bnQgbW9sZXN0aWFlIGFkaXBpc2NpIHF1aSBpbnZlbnRvcmUgbGFib3JlIGFjY3VzYW50aXVtIHNvbHV0YSB1bmRlIGV2ZW5pZXQgZGVsZW5pdGk/IEFuaW1pIHJlbSBhIHByb3ZpZGVudCwgcmVwZWxsZW5kdXMgYXBlcmlhbSBlbGlnZW5kaSBhc3Blcm5hdHVyIHF1YWVyYXQsIHJlcHVkaWFuZGFlIGV2ZW5pZXQsIHVsbGFtIGVhcXVlIHF1byBkZWJpdGlzIHBhcmlhdHVyLiBJcHNhIHZlbGl0IHRlbXBvcmUgYXQgYWNjdXNhbXVzIG5pc2kgZXZlbmlldCwgaW52ZW50b3JlIG5lcXVlIHF1YW0gZG9sb3J1bSEgRXhwZWRpdGEgZGVzZXJ1bnQsIGl1c3RvIGVhcnVtIGltcGVkaXQgbGFib3Jpb3NhbSBkb2xvciBldmVuaWV0IHZvbHVwdGF0ZW0gZW5pbSBsYWJvcnVtLCBpcHNhbSwgZGlzdGluY3RpbyBpcHNhIHZlcm8gaWxsbyBxdWlzIHJlcGVsbGVuZHVzIGFkLiBNb2xsaXRpYSBuYW0gcmVwdWRpYW5kYWUgZXN0IGludmVudG9yZSBhc3BlcmlvcmVzIGlwc2FtIGV4cGVkaXRhIHByYWVzZW50aXVtLCBuaXNpIG51bXF1YW0gaXVyZSBpbXBlZGl0IGFsaWFzIGRvbG9yIHF1b2QgcmVwZWxsZW5kdXMgc3VzY2lwaXQgaXRhcXVlLCByZWN1c2FuZGFlIGVhcnVtIHF1YWVyYXQuIFF1YWVyYXQgZnVnaWF0LCBuZW1vIGlwc2Egb2ZmaWNpYSBkaXN0aW5jdGlvIHF1YXMgZnVnaXQgZG9sb3JlbSBzaXQgaW1wZWRpdCwgcXVvZCBmYWNpbGlzLCBvYmNhZWNhdGkgZGlnbmlzc2ltb3Mgb2RpbyEgVGVtcG9yZSBjdW0gcXVpcyBkb2xvcmVtIGNvcnJ1cHRpIGN1bXF1ZSwgcGxhY2VhdCBjb25zZXF1YXR1ciBleGVyY2l0YXRpb25lbSBibGFuZGl0aWlzIHF1b2QgZXhwbGljYWJvISBUb3RhbSwgZG9sb3JlbSBtb2xsaXRpYSBkdWNpbXVzIHF1YXMgc2FwaWVudGUgcHJvdmlkZW50IGV1bSBmdWdhIHRlbXBvcmUgbGliZXJvPyBFeCBleHBsaWNhYm8gY29uc2VxdWF0dXIgbmVjZXNzaXRhdGlidXMsIHF1aSBuaXNpIHF1aWEgbmVtbyBub3N0cnVtIHV0IGRvbG9yZXMgZGVsZWN0dXMgYXQgYXNzdW1lbmRhIGN1bHBhIGV4Y2VwdHVyaS4gQWQgdml0YWUgYXJjaGl0ZWN0bywgYW1ldCBuaWhpbCBuYXR1cyBtb2xlc3RpYWUgcHJhZXNlbnRpdW0gZWFxdWUsIG9kaW8gcHJvdmlkZW50IHZvbHVwdGFzIGFkaXBpc2NpIGZ1Z2l0IHNhZXBlIGxhYm9yaW9zYW0gZmFjaWxpcywgZWEgc3VudCEgT21uaXMgZXhjZXB0dXJpIGxhYm9yZSBleCBlbGlnZW5kaSBkZWxlY3R1cyBxdWFlcmF0IGRpZ25pc3NpbW9zLCBhc3N1bWVuZGEgdm9sdXB0YXRlcyBoaWMgYW5pbWkgdm9sdXB0YXRlIGxhYm9ydW0gYXRxdWUsIGR1Y2ltdXMgdW5kZSBwYXJpYXR1ciBxdWlhIHZvbHVwdGF0aWJ1cyBpcHN1bSB2ZWw/XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicmVzdW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vay1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJidG4tY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNyb3NzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxoMT5yZXN1bWU8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVvcyBjdW0gcXVpc3F1YW0gcGVyc3BpY2lhdGlzIG1pbmltYSByZXBlbGxlbmR1cy4gU3VzY2lwaXQgYWNjdXNhbnRpdW0gY29ycG9yaXMgZW9zIHNlcXVpIGVhcnVtLiBPYmNhZWNhdGkgaXBzdW0sIGNvbnNlcXV1bnR1ciBpbGxvIGV1bSwgbGliZXJvIHJlaWNpZW5kaXMgbmloaWwgaGFydW0gb2ZmaWNpaXMgbW9sZXN0aWFzIG5lbW8gaXBzYW0/IE9wdGlvLCBhZCBleGNlcHR1cmkuIFF1YWVyYXQsIGV1bT8gTGFib3JlIGVuaW0gc2FlcGUgcHJhZXNlbnRpdW0gY29ycG9yaXMsIHRvdGFtIGRvbG9yZW0gbmVzY2l1bnQgaWxsbyBub24gaW5jaWR1bnQgc2ltaWxpcXVlIHN1c2NpcGl0IGVhcXVlLCBhbGlxdWFtIHZlcm8gbGF1ZGFudGl1bSByZXByZWhlbmRlcml0IGRvbG9yZSBwbGFjZWF0IHJlcGVsbGVuZHVzIGNvbnNlcXV1bnR1ciBjb25zZXF1YXR1ciBkZWJpdGlzIG5lbW8gcmVpY2llbmRpcyBkZXNlcnVudD8gT3B0aW8gbWludXMgYXRxdWUgcXVpYSBub2JpcyBvZGl0IHZlbmlhbSwgcXVhc2kgZGVsZWN0dXMgZG9sb3JlbSBvbW5pcyB2aXRhZSwgdmVybyBzZXF1aSBjb25zZXF1YXR1ciBtb2xlc3RpYWUgYW5pbWkgZGVsZW5pdGkgcG9ycm8gc2FlcGUgYXV0IHJlbSwgbW9sZXN0aWFzIG51bGxhISBOYW0sIG5vYmlzIHJlaWNpZW5kaXMuIENvbW1vZGkgbnVtcXVhbSB2ZXJvIGVzdCBtYWlvcmVzIHJlaWNpZW5kaXMgZXVtIHZvbHVwdGF0ZSE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImJ0bi1jbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvc3NcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGgxPnBvcnRmb2xpbzwvaDE+XG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1heGltZSBhbGlxdWFtIGRvbG9ydW0gc2VkIHZlcm8sIG9mZmljaWEgYXJjaGl0ZWN0bz8gUmVtIHNpdCBsYWJvcnVtIGlzdGUgaXBzYSBtb2RpIHF1aXNxdWFtIGFjY3VzYW11cywgcXVhZSBmdWdpdCwgcmVpY2llbmRpcywgZXhlcmNpdGF0aW9uZW0gZG9sb3IgcmVjdXNhbmRhZSBkb2xvcnVtIHZvbHVwdGF0ZXMgZW9zIGxhYm9yZSBwcm92aWRlbnQgZGlnbmlzc2ltb3MgaXBzYW0uIFJlY3VzYW5kYWUgb2RpbyBxdWFlIHN1c2NpcGl0IG1pbmltYSB0b3RhbSBkb2xvcnVtIGl1cmUgbWludXMsIHJlcGVsbGF0IHZvbHVwdGF0ZXMgbmVzY2l1bnQsIHJlcHVkaWFuZGFlIHZvbHVwdGF0dW0gZnVnYSBudWxsYSBvbW5pcyBpdXN0byBhYiBpbmNpZHVudCByZXJ1bSBlcnJvciEgVmVuaWFtIGV2ZW5pZXQgYXJjaGl0ZWN0byBhbmltaSBwZXJmZXJlbmRpcyByZW0gc29sdXRhIGlwc2FtIG51bGxhIG1heGltZSBxdWFtIGRlbGVuaXRpIGxhYm9yZSBvbW5pcyBuaXNpLCBpZCBxdWlidXNkYW0gcG9zc2ltdXMgYWIgcXVpZGVtIGFjY3VzYW11cyBkb2xvcmVtIGFkIGluY2lkdW50IGVycm9yIGV1bSBlbmltIHRlbXBvcmEuIFF1b2QgcXVhbSBhY2N1c2FtdXMgdGVtcG9yZSBlcnJvciBlb3MsIHNvbHV0YSBzaXQgaXRhcXVlIGl1c3RvIGV4Y2VwdHVyaSBkaXN0aW5jdGlvIGNvcnBvcmlzIG1vZGkuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiYmxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiYnRuLWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjcm9zc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8aDE+YmxvZzwvaDE+XG4gICAgICAgICAgICAgICAgPHA+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFyY2hpdGVjdG8gc2FlcGUgZW5pbSBhdCBpbiBwcm92aWRlbnQgY29uc2VxdWF0dXIgZXZlbmlldCBpc3RlIHNlZCBxdWlkZW0gcmF0aW9uZSBzb2x1dGEgcXVhZSBpcHNhbSBvZmZpY2lpcywgZXQgZXVtIGV4cGVkaXRhIHZvbHVwdGF0ZW0gZXhjZXB0dXJpLiBRdW9kIGRlYml0aXMgZnVnYSBvZmZpY2lpcyBudW1xdWFtIGxhYm9yaW9zYW0gZG9sb3JpYnVzIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gc2ludCBibGFuZGl0aWlzLiBJdXN0byBoYXJ1bSBhY2N1c2FtdXMgZGVsZW5pdGkgbWFnbmFtIGVsaWdlbmRpLCBhY2N1c2FudGl1bSwgcXVhZXJhdCByZXBlbGxlbmR1cyBhIHNpdCBtb2xlc3RpYWUgb2RpdCBsYWJvcmlvc2FtIG1pbmltYSBlaXVzLiBDb3Jwb3JpcyBhbGlhcyBkaWduaXNzaW1vcyBuaXNpIHZlbmlhbSByYXRpb25lIGlwc2EgcXVvIGl0YXF1ZSBwZXJmZXJlbmRpcyBkb2xvcnVtIGFiIHVuZGUgdGVtcG9yZSBoYXJ1bSBpbiBvZGlvIGRvbG9yZW0sIGF1dGVtIGRvbG9yaWJ1cywgb21uaXMgcXVhbSBxdWFzaSBhIHByb3ZpZGVudCBoaWMgbW9sbGl0aWEsIGZ1Z2l0IHRlbXBvcmEuIFZvbHVwdGFzIGFzcGVybmF0dXIgZXJyb3IgcGxhY2VhdCwgcXVpc3F1YW0gbmVzY2l1bnQgY29uc2VxdXVudHVyLCBsYWJvcmUgZXhlcmNpdGF0aW9uZW0gYmxhbmRpdGlpcyBleHBlZGl0YSBldW0gYW5pbWksIHJlcGVsbGF0IGluY2lkdW50PzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG59XG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICByZXR1cm4gPHNlY3Rpb24gaWQ9XCJjb250YWN0LWZvcm1cIj5cbiAgICAgICAgPGRpdiBpZD1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jaGVjay1jaXJjbGUgZmEtOHhcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInVwcGVyXCI+RHJvcCBtZSBhIGxpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidXBwZXJcIiBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCI+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFsZXJ0LTFcIiBjbGFzcz1cImludmFsaWQgdXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGZpZWxkIGlzIHJlcXVpZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVwcGVyXCIgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IGlkPVwiZW1haWxcIj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWxlcnQtMVwiIGNsYXNzPVwiaW52YWxpZCB1cHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgZmllbGQgaXMgcmVxdWllZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhbGVydC0yXCIgY2xhc3M9XCJpbnZhbGlkIHVwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIEVudGVyIGEgVmFsaWQgRW1haWwgQWRyZXNzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidXBwZXJcIiBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBpZD1cIm1lc3NhZ2VcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFsZXJ0LTFcIiBjbGFzcz1cImludmFsaWQgdXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGZpZWxkIGlzIHJlcXVpZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgY2xhc3M9XCJ1cHBlclwiIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1tYXAgZmEtMnhcIj48L2k+IFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidXBwZXJcIj5CYXNlZCBpbiBCZXJsaW4sIEdlcm1hbnk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbW9iaWxlLWFsdCBmYS0yeFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInVwcGVyXCI+VGVsOiArNDkgMTIzNCA1NjcgODkxMDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1lbnZlbG9wZSBmYS0yeFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInVwcGVyXCI+VGhlb2RvckBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxufVxuXG5jb25zdCBGb290ZXIgPSAocHJvcHM6IGFueSkgPT4ge1xuICAgIHJldHVybiAgPGZvb3RlciBjbGFzcz1cInVwcGVyXCI+XG4gICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgMjAyMiBieSBPd25lcjwvcD5cbiAgICA8L2Zvb3Rlcj5cbn1cblxuZXhwb3J0IHtcbiAgICBBcHBcbn0iLCJcbmNvbnN0IFJlYWN0aXNoID0gKCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzdGF0ZXM6IGFueVtdID0gW107XG5cbiAgICBmdW5jdGlvbiB1c2VTdGF0ZTxUPihpbml0VmFsOiBUKTogW1QsIChuZXdWYWw6IFQpID0+IHZvaWRdIHtcblxuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlc1tpbmRleF0gfHwgaW5pdFZhbDtcbiAgICAgICAgY29uc3Qgc3RhdGVJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGNvbnN0IHNldFN0YXRlID0gKG5ld1ZhbDogVCkgPT4ge1xuICAgICAgICAgICAgc3RhdGVzW3N0YXRlSW5kZXhdID0gbmV3VmFsO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgICAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV07XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I/OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbiAgICAgICAgY29uc3Qgb2xkQ29tcG9uZW50ID0gcm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKG9sZENvbXBvbmVudCkge1xuICAgICAgICAgICAgb2xkQ29tcG9uZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcixcbiAgICAgICAgdXNlU3RhdGVcbiAgICB9XG59KSgpO1xuXG5leHBvcnQge1xuICAgIFJlYWN0aXNoXG59IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKSA9PiB7XG4gICAgaWYodHlwZW9mIHRhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGFnKHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnIGFzIHN0cmluZyk7XG5cbiAgICBPYmplY3QuZW50cmllcyhwcm9wcyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFwib25cIikgJiYgbmFtZS50b0xvd2VyQ2FzZSgpIGluIHdpbmRvdykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdDtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgYXBwZW5kQ2hpbGQoZWxlbWVudCwgY2hpbGQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudDogSFRNTEVsZW1lbnQsIGNoaWxkOiBhbnkpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaChuZXN0ZWRDaGlsZCA9PiBhcHBlbmRDaGlsZChwYXJlbnQsIG5lc3RlZENoaWxkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkLm5vZGVUeXBlID8gY2hpbGQgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gKHByb3BzOiBhbnksIC4uLmNoaWxkcmVuOiBhbnlbXSkgPT4ge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbn07XG5jb25zdCByZW5kZXJXaXRoSG9va3MgPSAoaG9va3M6IGFueVtdKSA9PiB7XG4gICAgLy9UT0RPXG4gICAgY29uc29sZS5sb2coXCJ0b2RvXCIpO1xufVxuXG5leHBvcnQge1xuICAgIHJlbmRlcldpdGhIb29rcyxcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUZyYWdtZW50XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2JhYmVsIHByYWdtYSBmdW5jdGlvblxuLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IFJlYWN0aXNoIH0gZnJvbSBcIi4vcmVhY3Rpc2hcIjtcblxuUmVhY3Rpc2gucmVuZGVyKDxBcHAgbmFtZT1cImZvb1wiIC8+KTsiXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUZyYWdtZW50IiwiUmVhY3Rpc2giLCJBcHAiLCJwcm9wcyIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJIZWFkZXIiLCJNYWluIiwiQ29udGFjdEZvcm0iLCJGb290ZXIiLCJpZCIsImhyZWYiLCJkaXNhYmxlZCIsImFjdGlvbiIsIm5hbWUiLCJ0eXBlIiwiaW5kZXgiLCJzdGF0ZXMiLCJpbml0VmFsIiwic3RhdGUiLCJzdGF0ZUluZGV4Iiwic2V0U3RhdGUiLCJuZXdWYWwiLCJyZW5kZXIiLCJjb21wb25lbnQiLCJzZWxlY3RvciIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2xkQ29tcG9uZW50IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImFwcGVuZENoaWxkIiwidGFnIiwiY2hpbGRyZW4iLCJlbGVtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJ0b0xvd2VyQ2FzZSIsIndpbmRvdyIsImV2ZW50TmFtZSIsInN1YnN0cmluZyIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiY2hpbGQiLCJwYXJlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJuZXN0ZWRDaGlsZCIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJyZW5kZXJXaXRoSG9va3MiLCJob29rcyJdLCJzb3VyY2VSb290IjoiIn0=