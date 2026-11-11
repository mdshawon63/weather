import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="flex-1 rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/60"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 hover:bg-sky-100 disabled:opacity-60"
      >
        {loading ? "..." : "Search"}
      </button>
    </form>
  );
}
