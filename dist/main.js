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
function updateCondition(weatherObject) {
  const icon = document.getElementById("weatherIcon");
  const condition = document.getElementById("condition");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");
  icon.src = `https:${weatherObject.condition.icon}`;
  condition.innerHTML = weatherObject.condition.text;
  wind.innerHTML = `Wind Speed: ${weatherObject.condition.wind} Km/H`;
  humidity.innerHTML = `Humidity: ${weatherObject.condition.humidity}%`;
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
  updateCondition(weatherObject);
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
      console.log(weatherData);
      return convertData(weatherData);
    } catch (error) {
      alert(error);
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
  try {
    weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather(locationInput.value);
    _modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"].loadDom(weatherData);
    locationInput.value = "";
    console.log(weatherData);
  } catch (error) {
    locationInput.value = "";
  }
});

unitCheckbox.addEventListener("change", () => {
  _modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"].updateTemp(weatherData);
});

window.onload = async () => {
  weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather("New York");
  _modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"].loadDom(weatherData);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0Esa0NBQWtDLDhCQUE4QjtBQUNoRSxvQ0FBb0MsaUNBQWlDO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdCQUFnQixJQUFJLGlCQUFpQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQsSUFBSTtBQUNKLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUscUJBQXFCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0dBQW9HLFNBQVM7QUFDN0c7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7O1VDMUN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNSOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBTztBQUMvQixJQUFJLG9EQUFHO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsb0RBQUc7QUFDTCxDQUFDOztBQUVEO0FBQ0Esc0JBQXNCLHdEQUFPO0FBQzdCLEVBQUUsb0RBQUc7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdXBkYXRlQ29uZGl0aW9uKHdlYXRoZXJPYmplY3QpIHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckljb25cIik7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9uXCIpO1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG4gIGljb24uc3JjID0gYGh0dHBzOiR7d2VhdGhlck9iamVjdC5jb25kaXRpb24uaWNvbn1gO1xuICBjb25kaXRpb24uaW5uZXJIVE1MID0gd2VhdGhlck9iamVjdC5jb25kaXRpb24udGV4dDtcbiAgd2luZC5pbm5lckhUTUwgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyT2JqZWN0LmNvbmRpdGlvbi53aW5kfSBLbS9IYDtcbiAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYEh1bWlkaXR5OiAke3dlYXRoZXJPYmplY3QuY29uZGl0aW9uLmh1bWlkaXR5fSVgO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbikge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvblwiKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhbFRpbWVcIik7XG5cbiAgY2l0eS5pbm5lckhUTUwgPSBsb2NhdGlvbi5jaXR5O1xuICByZWdpb24uaW5uZXJIVE1MID0gYCR7bG9jYXRpb24ucmVnaW9ufSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7XG4gIGxvY2FsVGltZS5pbm5lckhUTUwgPSBsb2NhdGlvbi5sb2NhbHRpbWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRlbXAod2VhdGhlck9iamVjdCkge1xuICBjb25zdCBkZWdyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcblxuICBpZiAoZGVncmVlLmNoZWNrZWQpIHtcbiAgICB0ZW1wLmlubmVySFRNTCA9IGAke3dlYXRoZXJPYmplY3QudGVtcGVyYXR1cmUudGVtcF9mfSDCsEZgO1xuICB9IGVsc2Uge1xuICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7d2VhdGhlck9iamVjdC50ZW1wZXJhdHVyZS50ZW1wX2N9IMKwQ2A7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZERvbSh3ZWF0aGVyT2JqZWN0KSB7XG4gIHVwZGF0ZUNvbmRpdGlvbih3ZWF0aGVyT2JqZWN0KTtcbiAgdXBkYXRlTG9jYXRpb24od2VhdGhlck9iamVjdC5sb2NhdGlvbik7XG4gIHVwZGF0ZVRlbXAod2VhdGhlck9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgbG9hZERvbSwgdXBkYXRlVGVtcCB9O1xuIiwiY29uc3QgV2VhdGhlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNvbnZlcnREYXRhKGRhdGEpIHtcbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgcmVnaW9uOiBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICBsb2NhbHRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgfSxcbiAgICAgIHRlbXBlcmF0dXJlOiB7XG4gICAgICAgIHRlbXBfYzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgdGVtcF9mOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICBmZWVsc2xpa2VfYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICBmZWVsc2xpa2VfZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgfSxcbiAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICB0ZXh0OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgIGljb246IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgICAgd2luZDogZGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB3ZWF0aGVySW5mbztcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCBhcGkgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05MGVlNDdjYWNkODI0ZTMzYmQ4MTY0MTE0MjMyOTA5JnE9JHtsb2NhdGlvbn1gO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2xvY2F0aW9ufSBub3QgZm91bmRgKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgcmV0dXJuIGNvbnZlcnREYXRhKHdlYXRoZXJEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZ2V0V2VhdGhlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyXCI7XG5pbXBvcnQgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5cbmxldCB3ZWF0aGVyRGF0YTtcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZvcm1cIik7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hJbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xuY29uc3QgdW5pdENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdyZWVcIik7XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbklucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gIHRyeSB7XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldFdlYXRoZXIobG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gICAgZG9tLmxvYWREb20od2VhdGhlckRhdGEpO1xuICAgIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2NhdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5cbnVuaXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZG9tLnVwZGF0ZVRlbXAod2VhdGhlckRhdGEpO1xufSk7XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXRXZWF0aGVyKFwiTmV3IFlvcmtcIik7XG4gIGRvbS5sb2FkRG9tKHdlYXRoZXJEYXRhKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=