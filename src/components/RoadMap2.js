import React from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowWidth } from "@react-hook/window-size";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import "../components/component Styles/Carousel2.css";

function RoadMap2() {
  const screenWidth = useWindowWidth();
  const [qValue, setQValue] = useState("q1");

  var btns = document.getElementsByClassName("btn_roadmap");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("btn_border");
      current[0].className = current[0].className.replace(" btn_border", "");
      this.className += " btn_border";
    });
  }

  return (
    <div className="flex  flex-col justify-center w-full items-center" id="roadmap">
      <div>
        <h1 className="text-[#ffffff] tracking-[10px] text-[2rem] mt-5 lg:text-5xl text-center drop-shadow-2xl text-shadow-1 m-10">
          Release RoadMap
        </h1>
        {screenWidth <= 750 ? (
          <p className="text-base text-center">
            (Swipe Left/Right on the Buttons)
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="w-[90%] h-full mb-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={screenWidth >= 750 ? true : false}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <button
              id="q1b"
              className="min-w-[50px] btn_roadmap btn_border "
              onClick={() => {
                setQValue("q1");
              }}
            >
              <span className="flex ">
                Q1 <span className="ml-2 ">2021</span>
              </span>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <button
              id="q2b"
              className="min-w-[50px] btn_roadmap"
              onClick={() => {
                setQValue("q2");
              }}
            >
              <span className="flex ">
                Q1 <span className="ml-2"> 2022</span>
              </span>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <button
              id="q3b"
              className="min-w-[50px] btn_roadmap"
              onClick={() => {
                setQValue("q3");
              }}
            >
              <span className="flex ">
                Q2 <span className="ml-2 "> 2022</span>
              </span>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <button
              id="q4b"
              className="min-w-[50px] max-w-[130px] btn_roadmap"
              onClick={() => {
                setQValue("q4");
              }}
            >
              <span className="flex ">
                Q3 <span className="ml-2 "> 2022</span>
              </span>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <button
              id="q4b"
              className="min-w-[50px] max-w-[130px] btn_roadmap"
              onClick={() => {
                setQValue("q5");
              }}
            >
              <span className="flex ">
                Q4 <span className="ml-2 "> 2022</span>
              </span>
            </button>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <button
              id="q4b"
              className="min-w-[50px] max-w-[130px] btn_roadmap"
              onClick={() => {
                setQValue("q6");
              }}
            >
              <span className="flex ">
                Q1 <span className="ml-2 "> 2023</span>
              </span>
            </button>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <button
              id="q4b"
              className="min-w-[50px] max-w-[130px] btn_roadmap"
              onClick={() => {
                setQValue("q7");
              }}
            >
              <span className="flex ">
                Q2 <span className="ml-2 "> 2023</span>
              </span>
            </button>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <button
              id="q4b"
              className="min-w-[50px] max-w-[130px] btn_roadmap"
              onClick={() => {
                setQValue("q8");
              }}
            >
              <span className="flex ">
                Q3 <span className="ml-2 "> 2023</span>
              </span>
            </button>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <button
              id="q4b"
              className="min-w-[50px] max-w-[130px] btn_roadmap"
              onClick={() => {
                setQValue("q9");
              }}
            >
              <span className="flex ">
                Q4 <span className="ml-2 "> 2023</span>
              </span>
            </button>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <button
              id="q4b"
              className="min-w-[50px] max-w-[130px] btn_roadmap"
              onClick={() => {
                setQValue("q10");
              }}
            >
              <span className="flex ">
                Q1 <span className="ml-2 "> 2024</span>
              </span>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="md:w-[75%] w-[90%] h-auto rdmapcard text-2xl">
        <ul>
          {qValue === "q1" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
                <div className="text-white m-1 tick_mark">
                  Conceptualization
                </div>
                <div className="text-white m-1 tick_mark">
                  Team Building
                </div>
                <div className="text-white m-1 tick_mark">Whitepaper V1 </div>
                <div className="text-white  m-1 tick_mark">
                  Pre-Seed Sale
                </div>
                <div className="text-white m-1 tick_mark">Seed Sale</div>
                <div className="text-white m-1 tick_mark">Presale</div>
                <div className="text-white m-1 tick_mark">
                    Investor Relatations
                </div>
                <div className="text-white m-1 tick_mark">Website Launch v1</div>
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
                <div className="text-white m-1 progress_bar">Initial Coin Marketing</div>
                <div className="text-white m-2 tick_mark">Game Studio Partnerships</div>
                <div className="text-white m-1 progress_bar">Private Sale </div>
                <div className="text-white  m-1 progress_bar">Website Launch v2</div>
                <div className="text-white m-1 progress_bar">The Deviants NFT Drop</div>
                <div className="text-white m-1 progress_bar">Presale</div>
                <div className="text-white m-1 progress_bar">
                  Coin Gecko & CoinMarketCap listing
                </div>
                <div className="text-white m-1 progress_bar">Launch Pad Sale</div>
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
              <div className="text-white m-1 progress_bar">LP Locked & Ownership Renounced</div>
              <div className="text-white m-2 progress_bar">Orion's Realm Land NFTs Drop</div>
              <div className="text-white m-1 progress_bar">Gameplay Teaser</div>
              <div className="text-white  m-1 progress_bar">Listing on CEX</div>
              <div className="text-white m-1 progress_bar">Listing on Swaps</div>
              <div className="text-white m-1 progress_bar">Additional Game Studio Partnerships</div>
              <div className="text-white m-1 progress_bar">Dedicated wallet for charity</div>
              <div className="text-white m-1 progress_bar">Debut NFT Collaboration with top crypto influencers</div>
              <div className="text-white m-1 progress_bar">First Minigame launch</div>
              <div className="text-white m-1 progress_bar">Release Astra Nova Bazinga</div>
              <div className="text-white m-1 progress_bar">Metaverse - Development</div>
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
                <div className="text-white m-1 progress_bar">NFT sentinel series auction drop</div>
                <div className="text-white m-2 progress_bar">NFT marketplace Launch</div>
                <div className="text-white m-1 progress_bar">More Minigames launches</div>
                <div className="text-white  m-1 progress_bar">Additional Game Studio Partnerships</div>
                <div className="text-white m-1 progress_bar">DeFi features(Staking & Farming)</div>
              </div>
            </li>
          ) : (
            ""
          )}
          {qValue === "q5" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
              <div className="text-white m-1 progress_bar">Alpha metaverse testing</div>
              <div className="text-white m-2 progress_bar">New marketing contents</div>
              <div className="text-white m-1 progress_bar">1st charity funds release</div>
              <div className="text-white  m-1 progress_bar">Branded merchandise</div>
              </div>
            </li>
          ) : (
            ""
          )}
          {qValue === "q6" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
              <div className="text-white m-1 progress_bar">Metaverse Beta version</div>
              <div className="text-white m-2 progress_bar">Astra Nova army reaching milestones & burn event</div>
              <div className="text-white m-1 progress_bar">Voting rights to the people-$GTKN</div>
              <div className="text-white  m-1 progress_bar">implement 1% Burn Tax on transactions</div>
              <div className="text-white m-1 progress_bar">Astra Nova Go Green Movement</div>
              </div>
            </li>
          ) : (
            ""
          )}

          {qValue === "q7" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
              <div className="text-white m-1 progress_bar">NFT upgrades/accessories drop</div>
              <div className="text-white m-2 progress_bar">Astra Nova army reaching milestones & burn event</div>
              <div className="text-white m-1 progress_bar">Listing on more exchanges</div>
              <div className="text-white  m-1 progress_bar">Raising funds for major exchange listings</div>
              </div>
            </li>
          ) : (
            ""
          )}
          {qValue === "q8" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
              <div className="text-white m-1 progress_bar">AI training platform for Sentinel Series</div>
              <div className="text-white m-2 progress_bar">Astra Nova Launchpad</div>
              <div className="text-white m-1 progress_bar">2nd Charity Funds Release</div>
              </div>
            </li>
          ) : (
            ""
          )}

          {qValue === "q9" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
              <div className="text-white m-1 progress_bar">Astra Nova DEX</div>
              <div className="text-white m-2 progress_bar">Astra Nova wallet/app</div>
              <div className="text-white m-1 progress_bar">New products and services included in app</div>
              </div>
            </li>
          ) : (
            ""
          )}

          {qValue === "q10" ? (
            <li
              id="q1"
              className="roadmap_items m-2 flex justify-start md:ml-10 items-center"
            >
              <div className="place-items-center place-content-center">
              <div className="text-white m-1 progress_bar">Integration with payment services for eCommerce, etc.</div>
              <div className="text-white m-2 progress_bar">Listing on more exchanges</div>
              <div className="text-white m-1 progress_bar">Corporate endorsement and sponsorships</div>
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
