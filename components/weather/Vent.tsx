"use client";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";
import Loader from "@/components/ui/Loader";

export default function Vent() {
  const weather = useContext(WeatherContext);
  return (
    <div className="w-56 h-56">
      {/* https://openweathermap.org/current */}{" "}
      {weather && (
        <div className="text-white">
          {weather.main && (
            <p>wind_speed: {Math.round(weather.wind.speed * 3.6)}km/h</p>
          )}
          {weather.main && <p>wind_deg: {weather.wind.deg}°</p>}
        </div>
      )}
    </div>
  );
}
