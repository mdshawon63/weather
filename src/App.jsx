import { useEffect } from "react";
import useWeather from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

export default function App() {
  const { place, weather, loading, error, search } = useWeather();

  useEffect(() => {
    search("Dhaka"); // default city on first load
  }, [search]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-700 p-4 text-white">
      <div className="w-full max-w-2xl rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur">
        <h1 className="mb-4 text-center text-xl font-bold">🌤️ Weather Appp</h1>
        <SearchBar onSearch={search} loading={loading} />

        {error && <p className="mt-4 rounded-xl bg-red-500/60 p-3 text-center">{error}</p>}

        {weather && place && (
          <div className="mt-6">
            <CurrentWeather place={place} current={weather.current} />
            <Forecast daily={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}
