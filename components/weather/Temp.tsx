"use client";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";

export default function Temp() {
  const weather = useContext<any>(WeatherContext);
  return (
    <div className="w-56 h-56">
      {/* https://openweathermap.org/current */}
      {weather && (
        <div className="text-white">
          {weather.weather && weather.weather[0] && (
            <p>Weather: {weather.weather[0].main}</p>
          )}
          {weather.weather && weather.weather[0] && (
            <p>Weather: {weather.weather[0].description}</p>
          )}
        </div>
      )}
    </div>
  );
}
