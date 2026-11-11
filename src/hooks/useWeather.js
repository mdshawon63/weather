import { useState, useCallback } from "react";
import { getCoordinates, getWeather } from "../services/weatherApi";

export default function useWeather() {
  const [place, setPlace] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = useCallback(async (city) => {
    setLoading(true);
    setError("");
    try {
      const location = await getCoordinates(city);
      const data = await getWeather(location);
      setPlace(location);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  return { place, weather, loading, error, search };
}
