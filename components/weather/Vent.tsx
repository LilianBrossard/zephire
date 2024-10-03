"use client";
import { useContext, useState } from "react";
import Arrowwind from "@/components/weather/Arrowwind";
import { WeatherContext } from "@/context/Weather";
import Image from "next/image";

export default function Vent() {
  const weather = useContext<any>(WeatherContext);

  return (
    <div className="w-full h-full bg-blue-800">
      {/* https://openweathermap.org/current */}
      {/* <p>{direction}</p>
      <p> {Math.round(weather.wind.speed * 3.6)}Km/H</p>
      <p>wind_deg: {weather.wind.deg}°</p> */}
      {weather && (
        <div className="flex flex-col justify-around items-center w-full h-full">
          <h1 className="drop-shadow-xl text-slate-200 text-6xl text-center font-bold">
            {Math.round(weather.wind.speed * 3.6)}Km/H
          </h1>
          <div className="flex justify-center items-center relative w-full h-full ">
            <div className="absolute w-full h-full"></div>
            <div className="absolute">
              <Image
                src={`./rose.svg`}
                title="rose des vents svg"
                alt="rose des vents"
                width="600"
                height="600"
              />
            </div>
            <Arrowwind />
          </div>
        </div>
      )}
    </div>
  );
}
