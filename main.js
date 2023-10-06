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

function loadDom(weatherObject) {
  addIcon(weatherObject.condition.icon);
  updateLocation(weatherObject.location);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loadDom });


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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");


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
      return _dom__WEBPACK_IMPORTED_MODULE_0__["default"].loadDom(convertData(weatherData));
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


const searchForm = document.getElementById("searchForm");
const locationInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (locationInput.value === "") return;
  const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather(locationInput.value);
  locationInput.value = "";
  console.log(weatherData);
});

window.onload(_modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather("New York"));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixnQkFBZ0IsSUFBSSxpQkFBaUI7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxFQUFFLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCSDs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0dBQW9HLFNBQVM7QUFDN0c7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBLGFBQWEsNENBQUc7QUFDaEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLE9BQU8sRUFBQzs7Ozs7OztVQzNDdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ053Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQU87QUFDbkM7QUFDQTtBQUNBLENBQUM7O0FBRUQsY0FBYyx3REFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkSWNvbihpY29uVXJsKSB7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJJY29uXCIpO1xuICBpY29uLnNyYyA9IGBodHRwczoke2ljb25Vcmx9YDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbiAgY29uc3QgcmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpb25cIik7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYWxUaW1lXCIpO1xuXG4gIGNpdHkuaW5uZXJIVE1MID0gbG9jYXRpb24uY2l0eTtcbiAgcmVnaW9uLmlubmVySFRNTCA9IGAke2xvY2F0aW9uLnJlZ2lvbn0sICR7bG9jYXRpb24uY291bnRyeX1gO1xuICBsb2NhbFRpbWUuaW5uZXJIVE1MID0gbG9jYXRpb24ubG9jYWx0aW1lO1xufVxuXG5mdW5jdGlvbiBsb2FkRG9tKHdlYXRoZXJPYmplY3QpIHtcbiAgYWRkSWNvbih3ZWF0aGVyT2JqZWN0LmNvbmRpdGlvbi5pY29uKTtcbiAgdXBkYXRlTG9jYXRpb24od2VhdGhlck9iamVjdC5sb2NhdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgbG9hZERvbSB9O1xuIiwiaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgV2VhdGhlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNvbnZlcnREYXRhKGRhdGEpIHtcbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgcmVnaW9uOiBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICBsb2NhbHRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgfSxcbiAgICAgIHRlbXBlcmF0dXJlOiB7XG4gICAgICAgIHRlbXBfYzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgdGVtcF9mOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICBmZWVsc2xpa2VfYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICBmZWVsc2xpa2VfZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgfSxcbiAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICB0ZXh0OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgIGljb246IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgICAgd2luZDogZGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB3ZWF0aGVySW5mbztcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCBhcGkgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05MGVlNDdjYWNkODI0ZTMzYmQ4MTY0MTE0MjMyOTA5JnE9JHtsb2NhdGlvbn1gO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2xvY2F0aW9ufSBub3QgZm91bmRgKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRvbS5sb2FkRG9tKGNvbnZlcnREYXRhKHdlYXRoZXJEYXRhKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGdldFdlYXRoZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvd2VhdGhlclwiO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hGb3JtXCIpO1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ0blwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldFdlYXRoZXIobG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG59KTtcblxud2luZG93Lm9ubG9hZCh3ZWF0aGVyLmdldFdlYXRoZXIoXCJOZXcgWW9ya1wiKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=