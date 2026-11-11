import { describeWeather } from "../utils/weatherCodes";

export default function CurrentWeather({ place, current }) {
  const { label, icon } = describeWeather(current.weather_code);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">
        {place.name}, {place.country}
      </h2>
      <div className="my-2 text-7xl">{icon}</div>
      <p className="text-6xl font-bold">{Math.round(current.temperature_2m)}°C</p>
      <p className="mt-1 text-lg text-white/80">{label}</p>

      <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
        <Stat title="Feels like" value={`${Math.round(current.apparent_temperature)}°C`} />
        <Stat title="Humidity" value={`${current.relative_humidity_2m}%`} />
        <Stat title="Wind" value={`${current.wind_speed_10m} km/h`} />
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-xl bg-white/15 p-3">
      <p className="text-white/70">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
