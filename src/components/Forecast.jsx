import { describeWeather } from "../utils/weatherCodes";

export default function Forecast({ daily }) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 font-semibold">7-day forecast</h3>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-7">
        {daily.time.map((date, i) => (
          <div key={date} className="rounded-xl bg-white/15 p-2 text-center text-sm">
            <p className="text-white/70">
              {new Date(date).toLocaleDateString("en", { weekday: "short" })}
            </p>
            <p className="text-2xl">{describeWeather(daily.weather_code[i]).icon}</p>
            <p className="font-semibold">{Math.round(daily.temperature_2m_max[i])}°</p>
            <p className="text-white/60">{Math.round(daily.temperature_2m_min[i])}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
