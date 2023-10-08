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

export default { loadDom, updateTemp };
