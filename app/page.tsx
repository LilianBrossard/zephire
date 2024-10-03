"use client";
import Mainweather from "@/components/weather/Mainweather";
import { WeatherContext } from "@/context/Weather";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Recherche + call api
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
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=fr&appid=${openweatherkey}&units=metric`
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
    <main className="w-screen lg:h-[93%]">
      {/* <div>
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
          className="input mt-1 p-4 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 w-full transition duration-300 ease-in-out placeholder-gray-500 bg-gray-100"
        />
        <button onClick={handleSearch} className="">
          Rechercher
        </button>
        {isLoading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div> */}
      <div className="w-full h-min lg:h-[10%] flex justify-center py-2">
        <div className="w-64 sm:w-80 md:w-96">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Entrez la localisation"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="input mt-1 text-slate-200 p-4 border-2 border-slate-500 rounded-md focus:outline-none focus:bg-slate-800 w-full transition duration-300 ease-in-out placeholder-gray-400 bg-slate-900"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                onClick={handleSearch}
                className=" z-10 w-12 h-12 hover:scale-105 duration-700"
              >
                <Image
                  src={`./search.svg`}
                  alt="loupe"
                  width="32"
                  height="32"
                />
              </button>
            </div>
          </div>
          {isLoading && (
            <div className="flex flex-row justify-start w-96 h-min items-center">
              <p className="text-white pr-4">Chargement</p>
              <section className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </section>
            </div>
          )}
          {error && <span className="text-red-500 glitch">{error}</span>}
          {error && <span className="text-red-500 offset">{error}</span>}
          {error && <span className="text-red-500">{error}</span>}
        </div>
      </div>
      <div className="w-full h-full lg:h-[90%]">
        <WeatherContext.Provider value={weather}>
          <Mainweather />
        </WeatherContext.Provider>
      </div>
    </main>
  );
}
