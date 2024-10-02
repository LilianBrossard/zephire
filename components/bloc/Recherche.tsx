"use client";
import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";
import Mainweather from "@/components/weather/Mainweather";

export default function Recherche() {
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [weather, setWeather] = useState<any | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    const geocodingkey = process.env.NEXT_PUBLIC_GEOCODING_API_KEY;
    const openweatherkey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          inputValue
        )}&apiKey=${geocodingkey}`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const { lat, lon } = data.features[0].properties;
        setLocation({ lat, lon });
        // https://openweathermap.org/current
        // Fetch weather data from OpenWeather
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&appid=${openweatherkey}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);
      } else {
        setError("No location found");
      }
    } catch (err) {
      setError("Error fetching location or weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter location"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="input"
      />
      <button onClick={handleSearch} className="text-white">
        Rechercher
      </button>
      {isLoading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <Mainweather weather={weather}></Mainweather>
    </div>
  );
}
