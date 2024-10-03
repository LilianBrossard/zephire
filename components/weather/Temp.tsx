"use client";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";
import Image from "next/image";

export default function Temp() {
  const weather = useContext<any>(WeatherContext);
  return (
    <div className="w-full h-full bg-sky-700">
      {/* https://openweathermap.org/current */}
      {/* {weather.weather && weather.weather[0] && (
        <p>Weather: {weather.weather[0].main}</p>
        )} */}
      {/* {weather.weather && weather.weather[0] && (
          <p>Weather: {weather.weather[0].description}</p>
          )} */}
      {weather && (
        <div className="text-white flex flex-col justify-around items-center w-full h-full">
          {weather.weather && weather.weather[0] && (
            <h1 className="drop-shadow-xl text-slate-200 text-6xl text-center font-bold">
              {weather.weather[0].description}
            </h1>
          )}
          {weather.weather[0].main == "Rain" && (
            <Image src={`./Rain.svg`} alt="pliue" width="600" height="600" />
          )}
          {weather.weather[0].main == "Clouds" && (
            <Image src={`./Clouds.svg`} alt="nuages" width="600" height="600" />
          )}
          {weather.weather[0].main == "Clear" && (
            <Image src={`./Clear.svg`} alt="soleil" width="600" height="600" />
          )}
          {weather.weather[0].main == "Snow" && (
            <Image src={`./Snow.svg`} alt="neige" width="600" height="600" />
          )}
          {weather.weather[0].main == "Drizzle" && (
            <Image src={`./Drizzle.svg`} alt="neige" width="600" height="600" />
          )}
        </div>
      )}
    </div>
  );
}
