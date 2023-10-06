import weather from "./modules/weather";

const searchForm = document.getElementById("searchForm");
const locationInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (locationInput.value === "") return;
  const weatherData = await weather.getWeather(locationInput.value);
  locationInput.value = "";
  console.log(weatherData);
});

window.onload(weather.getWeather("New York"));
