/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ }),

/***/ "./src/js/macros/countdown.js":
/*!************************************!*\
  !*** ./src/js/macros/countdown.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Countdown = function () {
  var init = function init() {
    var elDays = document.querySelector(".days");
    var elHours = document.querySelector(".hours");
    var elMinutes = document.querySelector(".minutes");
    var elSeconds = document.querySelector(".seconds");
    var timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    var totalSeconds = 0;
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 20);

    function init() {
      totalSeconds = Math.floor((futureDate - new Date()) / 1000);
      setTimeLeft();
      var interval = setInterval(function () {
        if (totalSeconds < 0) {
          clearInterval(interval);
        }

        countTime();
      }, 1000);
    }

    function countTime() {
      if (totalSeconds > 0) {
        --timeLeft.seconds;

        if (timeLeft.minutes >= 0 && timeLeft.seconds < 0) {
          timeLeft.seconds = 59;
          --timeLeft.minutes;

          if (timeLeft.hours >= 0 && timeLeft.minutes < 0) {
            timeLeft.minutes = 59;
            --timeLeft.hours;

            if (timeLeft.days >= 0 && timeLeft.hours < 0) {
              timeLeft.hours = 23;
              --timeLeft.days;
            }
          }
        }
      }

      --totalSeconds;
      printTime();
    }

    function printTime() {
      animateFlip(elDays, timeLeft.days);
      animateFlip(elHours, timeLeft.hours);
      animateFlip(elMinutes, timeLeft.minutes);
      animateFlip(elSeconds, timeLeft.seconds);
    }

    function animateFlip(element, value) {
      var valueInDom = element.querySelector(".bottom-back").innerText;
      var currentValue = value < 10 ? "0" + value : "" + value;
      if (valueInDom === currentValue) return;
      element.querySelector(".top-back span").innerText = currentValue;
      element.querySelector(".bottom-back span").innerText = currentValue;
      gsap.to(element.querySelector(".top"), 0.7, {
        rotationX: "-180deg",
        transformPerspective: 300,
        ease: Quart.easeOut,
        onComplete: function onComplete() {
          element.querySelector(".top").innerText = currentValue;
          element.querySelector(".bottom").innerText = currentValue;
          gsap.set(element.querySelector(".top"), {
            rotationX: 0
          });
        }
      });
      gsap.to(element.querySelector(".top-back"), 0.7, {
        rotationX: 0,
        transformPerspective: 300,
        ease: Quart.easeOut,
        clearProps: "all"
      });
    }

    function setTimeLeft() {
      timeLeft.days = Math.floor(totalSeconds / (60 * 60 * 24));
      timeLeft.hours = Math.floor(totalSeconds / (60 * 60) % 24);
      timeLeft.minutes = Math.floor(totalSeconds / 60 % 60);
      timeLeft.seconds = Math.floor(totalSeconds % 60);
    }

    init();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./src/js/macros/hamburger.js":
/*!************************************!*\
  !*** ./src/js/macros/hamburger.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Hamburger = function () {
  var initHamburger = function initHamburger() {
    if (!document.querySelector("[hamburger-js]")) return;
    var btn = document.querySelector("[hamburger-js]"),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]");
    /**
     * @description
     */

    btn.addEventListener("click", function (ev) {
      ev.currentTarget.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");
      hideScrollContainer.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
      });
    });
  };

  var init = function init() {
    initHamburger();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
/* harmony import */ var _macros_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macros/hamburger */ "./src/js/macros/hamburger.js");
/* harmony import */ var _macros_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macros/countdown */ "./src/js/macros/countdown.js");




var initHeaderFixed = function initHeaderFixed() {
  var countScroll = $(window).scrollTop(),
      headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("is-fixed");
  } else {
    headerElement.removeClass("is-fixed");
  }
}; // EVENT LISTENER - LOAD
// ========================================


window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  _macros_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  if ($('.landing__timer').length > 0) _macros_countdown__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  $('[popup-js]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  }); // $('a[href="#welcomeModal"][popup-js]').click();

  $('[popup-close-js]').on('click', function (ev) {
    $.magnificPopup.close();
  });
  initHeaderFixed();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {
  initHeaderFixed();
}, false);
}();
/******/ })()
;