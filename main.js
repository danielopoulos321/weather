/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addIcon(iconUrl) {
  const icon = document.getElementById("weatherIcon");
  icon.src = `https:${iconUrl}`;
}

function updateLocation(location) {
  const city = document.getElementById("city");
  const region = document.getElementById("region");
  const localTime = document.getElementById("localTime");

  city.innerHTML = location.city;
  region.innerHTML = `${location.region}, ${location.country}`;
  localTime.innerHTML = location.localtime;
}

function updateTemp(weatherObject) {
  const degree = document.getElementById("degree");
  const temp = document.getElementById("temp");

  if (degree.checked) {
    temp.innerHTML = `${weatherObject.temperature.temp_f} °F`;
  } else {
    temp.innerHTML = `${weatherObject.temperature.temp_c} °C`;
  }
}

function loadDom(weatherObject) {
  addIcon(weatherObject.condition.icon);
  updateLocation(weatherObject.location);
  updateTemp(weatherObject);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loadDom, updateTemp });


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Weather = (() => {
  function convertData(data) {
    const weatherInfo = {
      location: {
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localtime: data.location.localtime,
      },
      temperature: {
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
      },
      condition: {
        text: data.current.condition.text,
        icon: data.current.condition.icon,
        wind: data.current.wind_kph,
        humidity: data.current.humidity,
      },
    };
    return weatherInfo;
  }

  async function getWeather(location) {
    const api = `https://api.weatherapi.com/v1/current.json?key=90ee47cacd824e33bd8164114232909&q=${location}`;
    try {
      const response = await fetch(api, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${location} not found`);
      const weatherData = await response.json();
      return convertData(weatherData);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return { getWeather };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);


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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");



let weatherData;
const searchForm = document.getElementById("searchForm");
const locationInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const unitCheckbox = document.getElementById("degree");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (locationInput.value === "") return;
  weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather(locationInput.value);
  _modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"].loadDom(weatherData);
  locationInput.value = "";
  console.log(weatherData);
});

unitCheckbox.addEventListener("change", () => {
  _modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"].updateTemp(weatherData);
});

window.onload = async () => {
  weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather("New York"); // Call the function here
  _modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"].loadDom(weatherData);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixnQkFBZ0IsSUFBSSxpQkFBaUI7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFELElBQUk7QUFDSix3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxFQUFFLHFCQUFxQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9HQUFvRyxTQUFTO0FBQzdHO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUN6Q3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHNCQUFzQix3REFBTztBQUM3QixFQUFFLG9EQUFHO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLG9EQUFHO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBLHNCQUFzQix3REFBTyx5QkFBeUI7QUFDdEQsRUFBRSxvREFBRztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhZGRJY29uKGljb25VcmwpIHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckljb25cIik7XG4gIGljb24uc3JjID0gYGh0dHBzOiR7aWNvblVybH1gO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbikge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvblwiKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhbFRpbWVcIik7XG5cbiAgY2l0eS5pbm5lckhUTUwgPSBsb2NhdGlvbi5jaXR5O1xuICByZWdpb24uaW5uZXJIVE1MID0gYCR7bG9jYXRpb24ucmVnaW9ufSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7XG4gIGxvY2FsVGltZS5pbm5lckhUTUwgPSBsb2NhdGlvbi5sb2NhbHRpbWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRlbXAod2VhdGhlck9iamVjdCkge1xuICBjb25zdCBkZWdyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcblxuICBpZiAoZGVncmVlLmNoZWNrZWQpIHtcbiAgICB0ZW1wLmlubmVySFRNTCA9IGAke3dlYXRoZXJPYmplY3QudGVtcGVyYXR1cmUudGVtcF9mfSDCsEZgO1xuICB9IGVsc2Uge1xuICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7d2VhdGhlck9iamVjdC50ZW1wZXJhdHVyZS50ZW1wX2N9IMKwQ2A7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZERvbSh3ZWF0aGVyT2JqZWN0KSB7XG4gIGFkZEljb24od2VhdGhlck9iamVjdC5jb25kaXRpb24uaWNvbik7XG4gIHVwZGF0ZUxvY2F0aW9uKHdlYXRoZXJPYmplY3QubG9jYXRpb24pO1xuICB1cGRhdGVUZW1wKHdlYXRoZXJPYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGxvYWREb20sIHVwZGF0ZVRlbXAgfTtcbiIsImNvbnN0IFdlYXRoZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XG4gICAgY29uc3Qgd2VhdGhlckluZm8gPSB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBjaXR5OiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIHJlZ2lvbjogZGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgbG9jYWx0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgIH0sXG4gICAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgICB0ZW1wX2M6IGRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgICAgIHRlbXBfZjogZGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgICAgZmVlbHNsaWtlX2M6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgZmVlbHNsaWtlX2Y6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgIH0sXG4gICAgICBjb25kaXRpb246IHtcbiAgICAgICAgdGV4dDogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICBpY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgIHdpbmQ6IGRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gd2VhdGhlckluZm87XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgYXBpID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OTBlZTQ3Y2FjZDgyNGUzM2JkODE2NDExNDIzMjkwOSZxPSR7bG9jYXRpb259YDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGksIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtsb2NhdGlvbn0gbm90IGZvdW5kYCk7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBjb252ZXJ0RGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGdldFdlYXRoZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvd2VhdGhlclwiO1xuaW1wb3J0IGRvbSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuXG5sZXQgd2VhdGhlckRhdGE7XG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hGb3JtXCIpO1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ0blwiKTtcbmNvbnN0IHVuaXRDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVncmVlXCIpO1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBpZiAobG9jYXRpb25JbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xuICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXIuZ2V0V2VhdGhlcihsb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgZG9tLmxvYWREb20od2VhdGhlckRhdGEpO1xuICBsb2NhdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufSk7XG5cbnVuaXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZG9tLnVwZGF0ZVRlbXAod2VhdGhlckRhdGEpO1xufSk7XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXRXZWF0aGVyKFwiTmV3IFlvcmtcIik7IC8vIENhbGwgdGhlIGZ1bmN0aW9uIGhlcmVcbiAgZG9tLmxvYWREb20od2VhdGhlckRhdGEpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==