const weatherIcon = document.getElementById("weather-icon");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

const button = document.getElementById("get-weather-btn");
const selectElement = document.querySelector(".input-fields select");

const getWeather = async (city) => {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!res.ok) throw new Error("City not found");
    return await res.json();
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const displayWeather = (data) => {
  weatherIcon.src = data?.weather?.[0]?.icon || "";
  weatherIcon.alt = data?.weather?.[0]?.description || "N/A";

  mainTemp.textContent = `Temp: ${data.main.temp ?? "N/A"} °C`;
  feelsLike.textContent = `Feels like: ${data.main.feels_like ?? "N/A"} °C`;
  humidity.textContent = `Humidity: ${data.main.humidity ?? "N/A"}%`;
  wind.textContent = `Wind: ${data.wind.speed ?? "N/A"} m/s`;
  windGust.textContent = `Wind Gust: ${data.wind.gust ?? "N/A"} m/s`;
  weatherMain.textContent = `Main: ${data.weather[0].main ?? "N/A"}`;
  locationEl.textContent = `Location: ${data.name ?? "N/A"}`;
};

const showWeather = async (city) => {
  if (!city) return;

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  displayWeather(data);
};

button.addEventListener("click", () => showWeather(selectElement.value));
