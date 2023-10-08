import weather from "./modules/weather";
import dom from "./modules/dom";

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
    weatherData = await weather.getWeather(locationInput.value);
    dom.loadDom(weatherData);
    locationInput.value = "";
    console.log(weatherData);
  } catch (error) {
    locationInput.value = "";
  }
});

unitCheckbox.addEventListener("change", () => {
  dom.updateTemp(weatherData);
});

window.onload = async () => {
  weatherData = await weather.getWeather("New York");
  dom.loadDom(weatherData);
};
