"use client";
import { useContext, useState } from "react";
import { WeatherContext } from "@/context/Weather";
import Image from "next/image";

export default function Arrowwind() {
  const weather = useContext<any>(WeatherContext);
  const [direction] = useState<number>(Math.round(weather.wind.deg));

  return (
    <div>
      {weather && (
        <div>
          {direction >= 350 && (
            <div className="z-10 rotate-[0deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction < 10 && (
            <div className="z-10 rotate-[0deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 10 && direction < 30 && (
            <div className="z-10 rotate-[20deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 30 && direction < 50 && (
            <div className="z-10 rotate-[40deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 50 && direction < 70 && (
            <div className="z-10 rotate-[60deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 70 && direction < 90 && (
            <div className="z-10 rotate-[80deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 90 && direction < 110 && (
            <div className="z-10 rotate-[100deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 110 && direction < 130 && (
            <div className="z-10 rotate-[120deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 130 && direction < 150 && (
            <div className="z-10 rotate-[140deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 150 && direction < 170 && (
            <div className="z-10 rotate-[160deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 170 && direction < 190 && (
            <div className="z-10 rotate-[180deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 190 && direction < 210 && (
            <div className="z-10 rotate-[200deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 210 && direction < 230 && (
            <div className="z-10 rotate-[220deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 230 && direction < 250 && (
            <div className="z-10 rotate-[240deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 250 && direction < 270 && (
            <div className="z-10 rotate-[260deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 270 && direction < 290 && (
            <div className="z-10 rotate-[280deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 290 && direction < 310 && (
            <div className="z-10 rotate-[300deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 310 && direction < 330 && (
            <div className="z-10 rotate-[320deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
          {direction >= 330 && direction < 350 && (
            <div className="z-10 rotate-[340deg]">
              <Image
                src={`./arrow.svg`}
                title="Fleche"
                alt="direction du vent"
                width="500"
                height="500"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
