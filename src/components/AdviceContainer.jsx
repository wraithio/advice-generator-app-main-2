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

  //changes divider similar to breakpoints
  const updateDivider = () => {
    if (window.innerWidth <= 600) {
      divider.src = "/images/pattern-divider-mobile.svg";
    } else {
      divider.src = "/images/pattern-divider-desktop.svg";
    }
  };
  //live updating
  window.addEventListener("resize", () => {
    updateDivider();
  });
  return (
    <div className="min-h-screen flex justify-center place-items-center">
      <div className="relative lg:w-[50%] sm:w-[75%] w-[90%] bg-slate-700 flex flex-col gap-8 pt-16 transition-all duration-500 ease-in-out rounded-2xl shadow-2xl">
        <div className="flex gap-2 text-green-400 text-xl text-center tracking-[.5rem]">
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
          src="/images/pattern-divider-desktop.svg"
          alt="pattern divider"
          className="mx-8 sm:mx-14 mb-12"
          id="divider"
        />
        <div className="flex justify-center place-items-center bottom-0 h-0">
          <button
            onClick={storeEntry}
            className="bg-green-400 w-fit rounded-full p-8 neon-button"
          >
            <div className="flex justify-center place-items-center">
              <img
                src="/images/icon-dice.svg"
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
