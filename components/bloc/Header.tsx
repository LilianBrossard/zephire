import React from "react";
import Image from "next/image";

export default function Recherche() {
  return (
    <div className="flex flex-row justify-between px-4 py-2 xl:px-16 z-10 w-screen styleback lg:h-[7%]">
      <a href="/">
        <button
          className="button hover:scale-105 duration-700 px-4"
          data-text="Zephire"
        >
          <span className="actual-text">&nbsp;ZEPHIRE&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;ZEPHIRE&nbsp;
          </span>
        </button>
      </a>
      <div className="flex-row justify-around items-center hidden lg:flex">
        <a
          href="https://portfolio-mu-five-87.vercel.app/"
          target="_blank"
          className="hover:scale-105 duration-700 px-4"
        >
          <Image
            src={`./portfolio.svg`}
            title="Mon portfolio"
            alt="mon portfolio"
            width="32"
            height="32"
          />
        </a>
        <a
          href="https://github.com/LilianBrossard/zephire"
          target="_blank"
          className="hover:scale-105 duration-700 px-4"
        >
          <Image
            src={`./git.svg`}
            title="Github de Zephire"
            alt="repo github"
            width="32"
            height="32"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lilian-brossard-1b6147294/"
          target="_blank"
          className="hover:scale-105 duration-700 px-4"
        >
          <Image
            src={`./linkedin.svg`}
            title="Mon linkedin"
            alt="mon linkedin"
            width="32"
            height="32"
          />
        </a>
        <a
          href="mailto:lilian.brossard@gmail.com"
          target="_blank"
          className="hover:scale-105 duration-700 px-4"
        >
          <Image
            src={`./mail.svg`}
            title="lilian.brossard@gmail.com"
            alt="mon mail"
            width="32"
            height="32"
          />
        </a>
      </div>
    </div>
  );
}
