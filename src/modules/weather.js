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

export default Weather;
