import React, { useState } from "react";
import { useEffect } from "react";

const AdviceContainer = () => {
  const GetAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    // console.log(data.slip);
    return data.slip;
  };

  const [entry, setEntry] = useState({});

  const storeEntry = async () => {
    setEntry(await GetAdvice());
  };
  useEffect(() => {
    storeEntry();
  }, []);

  const mediaQuery = window.matchMedia("(max-width: 600px)");

  const updateDivider = () => {
    if (window.innerWidth <= 600) {
      divider.src = "public/images/pattern-divider-mobile.svg";
    } else {
      divider.src = "public/images/pattern-divider-desktop.svg";
    }
  };
  window.addEventListener("resize", () => {
    updateDivider();
  });
  return (
    <div className="min-h-screen flex justify-center place-items-center">
      <div className="lg:w-[50%] sm:w-[75%] w-[90%] bg-slate-700 flex flex-col gap-8 pt-16 rounded-2xl shadow-2xl">
        <div className="flex gap-2 text-green-400 text-2xl text-center tracking-[.5rem]">
          <div className=" flex justify-end w-[55%]">
            <h5>ADVICE</h5>
          </div>
          <div className="flex justify-start w-[50%]">
            <h5>#{entry.id}</h5>
          </div>
        </div>
        <div className="min-h-36 flex place-items-center justify-center mx-12">
          <h3 className="text-center text-blue-100 sm:text-5xl text-4xl">"{entry.advice}"</h3>
        </div>
        <img
          src="public/images/pattern-divider-desktop.svg"
          alt="pattern divider"
          className="mx-20 my-4"
          id="divider"
        />
        <div className="flex justify-center">
          <button
            onClick={storeEntry}
            className="bg-green-400 w-fit rounded-full p-8 xl:mb-[-5%] sm:mb-[-7%] mb-[-10%] neon-button"
          >
            <div className="flex justify-center place-items-center">
              <img
                src="public/images/icon-dice.svg"
                alt="dice icon"
                className="w-8"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdviceContainer;
