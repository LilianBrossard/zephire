"use client";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";
import Loader from "../ui/Loader";

export default function Mainweather() {
  const weather = useContext(WeatherContext);
  return (
    <div className="w-56 h-56">
      {/* https://openweathermap.org/current */}
      {weather == null && <Loader />}
      {weather && (
        <div className="text-white">
          {weather.main && <p>Temperature: {weather.main.temp}°C</p>}
          {weather.main && (
            <p>wind_speed: {Math.round(weather.wind.speed * 3.6)}km/h</p>
          )}
          {weather.main && <p>wind_deg: {weather.wind.deg}°</p>}
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
