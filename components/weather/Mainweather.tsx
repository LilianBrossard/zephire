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
        <div className="flex flex-col justify-center items-center mt-16">
          <div>
            <h4 className="text-4xl text-slate-200 mt-4 lg:mt-32">
              En attente d'une localisation
            </h4>
          </div>
          <Loader />
        </div>
      )}
      {weather && (
        <div className="h-full w-full flex flex-row justify-center items-center ">
          <div className="w-1/3 h-full ">
            <Temp />
          </div>
          <div className="w-1/3 h-full">
            <Vent />
          </div>
          <div className="w-1/3 h-full">
            <Temperature />
          </div>
        </div>
      )}
    </div>
  );
}
