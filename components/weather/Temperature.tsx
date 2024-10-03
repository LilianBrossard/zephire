"use client";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";
import Image from "next/image";

export default function Temperature() {
  const weather = useContext<any>(WeatherContext);
  return (
    <div className="w-full h-full bg-sky-700">
      {/* https://openweathermap.org/current */}
      {/* {weather.main && <p>Temperature: {weather.main.temp}°C</p>} */}

      {weather && (
        <div className="text-white flex flex-col justify-around items-center w-full h-full">
          {weather.main && (
            <h1 className="drop-shadow-xl text-slate-200 text-6xl text-center font-bold">
              {weather.main.temp}°C
            </h1>
          )}
          {weather.main.temp <= 5 && (
            <Image src={`./Cold.svg`} alt="Froid" width="600" height="600" />
          )}
          {weather.main.temp > 5 && weather.main.temp < 20 && (
            <Image
              src={`./Mid.svg`}
              alt="Temperature"
              width="600"
              height="600"
            />
          )}
          {weather.main.temp >= 20 && (
            <Image src={`./Hot.svg`} alt="Chaud" width="600" height="600" />
          )}
        </div>
      )}
    </div>
  );
}
