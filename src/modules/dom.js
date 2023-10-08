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

export default { loadDom, updateTemp };
