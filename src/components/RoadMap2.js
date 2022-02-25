import React from "react";
import { useState } from "react";

function RoadMap2() {
  const [qValue, setQValue] = useState("q1");
  

  var btns = document.getElementsByClassName("btn_roadmap");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn_border");
    current[0].className = current[0].className.replace(" btn_border", "");
    this.className += " btn_border";
  });
}

  return (
    <div className="flex  flex-col justify-center w-full items-center m-10">
      <div>
        <h1 className="text-[#a64af7] tracking-[10px] text-[2rem] mt-5 lg:text-5xl text-center drop-shadow-2xl text-shadow-1 specialH2 m-10">
          Release RoadMap
        </h1>
      </div>

      <div className="flex md:w-[50%] w-[90%] justify-between m-10 btnContainer">
        <button
          id="q1b"
          className="min-w-[50px] btn_roadmap btn_border "
          onClick={() => {
            setQValue("q1");
          }}
        >
          <span className="flex md:flex-row flex-col">
            Q1 <span className="md:ml-2 ml-0">2021</span>
          </span>
        </button>
        <button
          id="q2b"
          className="min-w-[50px] btn_roadmap"
          onClick={() => {
            setQValue("q2");
          }}
        >
          <span className="flex md:flex-row flex-col">
            Q1 <span className="md:ml-2 ml-0"> 2021</span>
          </span>
        </button>
        <button
          id="q3b"
          className="min-w-[50px] btn_roadmap"
          onClick={() => {
            setQValue("q3");
          }}
        >
          <span className="flex md:flex-row flex-col">
            Q1 <span className="md:ml-2 ml-0"> 2021</span>
          </span>
        </button>
        <button
          id="q4b"
          className="min-w-[50px] max-w-[130px] btn_roadmap"
          onClick={() => {
            setQValue("q4");
          }}
        >
          <span className="flex md:flex-row flex-col">
            Q1 <span className="md:ml-2 ml-0"> 2021</span>
          </span>
        </button>
      </div>
      <div className="w-[75%] h-auto rdmapcard text-2xl">
        <ul>
          {qValue === "q1" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
                <div className="text-white m-1 progress_bar">
                  Initial Coin Marketing
                </div>
                <div className="text-white m-1 tick_mark">
                  Game Studio Partnerships
                </div>
                <div className="text-white m-1 progress_bar">Private Sale </div>
                <div className="text-white  m-1 tick_mark">
                  Website Launch v2
                </div>
                <div className="text-white m-1">The Deviants NFT Drop</div>
                <div className="text-white m-1">Presale</div>
                <div className="text-white m-1">
                  Coin Gecko & CoinMarketCap listing
                </div>
                <div className="text-white m-1">Launch Pad Sale</div>
                <div className="text-white m-1">Initial Coin Marketing</div>
                <div className="text-white m-2">Game Studio Partnerships</div>
                <div className="text-white m-1">Private Sale </div>
                <div className="text-white  m-1">Website Launch v2</div>
                <div className="text-white m-1">The Deviants NFT Drop</div>
                <div className="text-white m-1">Presale</div>
                <div className="text-white m-1">
                  Coin Gecko & CoinMarketCap listing
                </div>
                <div className="text-white m-1">Launch Pad Sale</div>
              </div>
            </li>
          ) : (
            ""
          )}

          {qValue === "q2" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
                <div className="text-white m-1">Initial Coin Marketing</div>

                <div className="text-white m-1">Initial Coin Marketing</div>
                <div className="text-white m-2">Game Studio Partnerships</div>
                <div className="text-white m-1">Private Sale </div>
                <div className="text-white  m-1">Website Launch v2</div>
                <div className="text-white m-1">The Deviants NFT Drop</div>
                <div className="text-white m-1">Presale</div>
                <div className="text-white m-1">
                  Coin Gecko & CoinMarketCap listing
                </div>
                <div className="text-white m-1">Launch Pad Sale</div>
              </div>
            </li>
          ) : (
            ""
          )}

          {qValue === "q3" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
                <div className="text-white m-1">Initial Coin Marketing</div>
                <div className="text-white m-2">Game Studio Partnerships</div>
                <div className="text-white m-1">Private Sale </div>
                <div className="text-white  m-1">Website Launch v2</div>
                <div className="text-white m-1">The Deviants NFT Drop</div>
                <div className="text-white m-1">Presale</div>
                <div className="text-white m-1">
                  Coin Gecko & CoinMarketCap listing
                </div>
                <div className="text-white m-1">Launch Pad Sale</div>
                <div className="text-white m-1">Initial Coin Marketing</div>

                <div className="text-white m-1">The Deviants NFT Drop</div>
                <div className="text-white m-1">Presale</div>
                <div className="text-white m-1">
                  Coin Gecko & CoinMarketCap listing
                </div>
                <div className="text-white m-1">Launch Pad Sale</div>
              </div>
            </li>
          ) : (
            ""
          )}

          {qValue === "q4" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
                <div className="text-white m-1">Initial Coin Marketing</div>
                <div className="text-white m-2">Game Studio Partnerships</div>
                <div className="text-white m-1">Private Sale </div>
                <div className="text-white  m-1">Website Launch v2</div>

                <div className="text-white m-1">The Deviants NFT Drop</div>
                <div className="text-white m-1">Presale</div>
                <div className="text-white m-1">
                  Coin Gecko & CoinMarketCap listing
                </div>
                <div className="text-white m-1">Launch Pad Sale</div>
              </div>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}

export default RoadMap2;
