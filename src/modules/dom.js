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

export default { loadDom };
