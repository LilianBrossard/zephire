"use client";
import { useContext } from "react";
import { WeatherContext } from "@/context/Weather";
import Temp from "@/components/weather/Temp";
import Temperature from "@/components/weather/Temperature";
import Vent from "@/components/weather/Vent";
import Loader from "@/components/ui/Loader";

export default function Mainweather() {
  const weather = useContext(WeatherContext);
  return (
    <div className="h-full w-full">
      {weather == null && (
        <div className="flex flex-col justify-center items-center pt-16">
          <div>
            <h4 className="text-4xl text-slate-200 pt-4 lg:pt-32">
              En attente d'une localisation
            </h4>
          </div>
          <Loader />
        </div>
      )}
      {weather && (
        <div className="h-full w-full flex-row justify-center items-center hidden lg:flex">
          <div className="w-1/3 h-full hover:w-2/3 duration-700">
            <Temp />
          </div>
          <div className="w-1/3 h-full hover:w-2/3 duration-700">
            <Vent />
          </div>
          <div className="w-1/3 h-full hover:w-2/3 duration-700">
            <Temperature />
          </div>
        </div>
      )}
      {weather && (
        <div className="relative block lg:hidden">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
            <Temp />
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
            <Vent />
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
            <Temperature />
          </div>
        </div>
      )}
    </div>
  );
}
