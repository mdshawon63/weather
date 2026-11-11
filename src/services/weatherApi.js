const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getCoordinates(city) {
  const res = await fetch(`${GEO_URL}?name=${encodeURIComponent(city)}&count=1`);
  if (!res.ok) throw new Error("Could not search for the city");
  const data = await res.json();
  if (!data.results?.length) throw new Error("City not found");
  const { name, country, latitude, longitude } = data.results[0];
  return { name, country, latitude, longitude };
}

export async function getWeather({ latitude, longitude }) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    timezone: "auto",
  });
  const res = await fetch(`${WEATHER_URL}?${params}`);
  if (!res.ok) throw new Error("Could not load weather data");
  return res.json();
}
