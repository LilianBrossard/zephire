"use client";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";
import Loader from "@/components/ui/Loader";

export default function Temperature() {
  const weather = useContext(WeatherContext);
  return (
    <div className="w-56 h-56">
      {/* https://openweathermap.org/current */}
      {weather && (
        <div className="text-white">
          {weather.main && <p>Temperature: {weather.main.temp}°C</p>}
        </div>
      )}
    </div>
  );
}
