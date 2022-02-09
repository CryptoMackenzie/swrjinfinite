import React from "react";

import Fade from 'react-reveal/Fade';
import  tick from "../assets/signtick.png"

const Roadmap = () => {
//   var items = document.querySelectorAll(".timeline li");

//   function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function callbackFunc() {
//     for (var i = 0; i < items.length; i++) {
//       if (isElementInViewport(items[i])) {
//         if (!items[i].classList.contains("in-view")) {
//           items[i].classList.add("in-view");
//         }
//       } else if (items[i].classList.contains("in-view")) {
//         items[i].classList.remove("in-view");
//       }
//     }
//   }

//   window.addEventListener("load", callbackFunc);
//   window.addEventListener("scroll", callbackFunc);
  return (
    <>
      <h1 className='text-[#a64af7] tracking-[10px] text-[2rem] mt-5 lg:text-5xl text-center drop-shadow-2xl text-shadow-1 specialH2'>Release RoadMap</h1>
      <section class="timeline mt-20 relative overflow-x-hidden" id="roadmap">
        <ul>
          
          <li className="completed-task diamond">
            <div className="place-items-center place-content-center">
              <time>Phase 1: 2021</time>

              <Fade left><div className="text-white m-2 flex flex-row">Conceptualization <img src={tick} alt="check" className="w-[25px] md:w-[50px]"/></div></Fade>
              <Fade left><div className="text-white m-2">Team Building<img src={tick} alt="check" className="w-[25px] md:w-[50px]"/></div></Fade>
              <Fade left><div className="text-white m-2">Whitepaper v1<img src={tick} alt="check" className="w-[25px] md:w-[50px]"/></div></Fade>
              <Fade left><div className="text-white m-2">Pre-Seed Sale<img src={tick} alt="check" className="w-[25px] md:w-[50px]"/></div></Fade>
              <Fade left><div className="text-white m-2">Seed Sale<img src={tick} alt="check" className="w-[25px] md:w-[50px]"/></div></Fade>
              <Fade left><div className="text-white m-2">Investor Relatations<img src={tick} alt="check"className="w-[25px] md:w-[50px]"/></div></Fade>
              <Fade left><div className="text-white m-2">Website Launch v1<img src={tick} alt="check" className="w-[25px] md:w-[50px]"/></div></Fade>
              {/* <Fade left><div className="text-white m-2 ">Discovery <img src={tick} className="w-[25px] md:w-[50px]"/></div></Fade> */}
            </div>

          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 2: 2022 Q1</time>

              <Fade right><div className="text-white m-1">Initial Coin Marketing</div></Fade>
              <Fade left><div className="text-white m-2">Game Studio Partnerships<img src={tick} alt="check" className="w-[25px] md:w-[50px]"/></div></Fade>
              {/* <Fade right><div className="text-white m-1">Game Studio Partnershisp</div></Fade> */}
              <Fade right><div className="text-white m-1">Private Sale </div></Fade>
              <Fade right><div className="text-white  m-1">Website Launch v2</div></Fade>
              <Fade right><div className="text-white m-1">Code audit Completed</div></Fade>
              <Fade right><div className="text-white m-1">The Deviants NFT Drop</div></Fade>
              <Fade right><div className="text-white m-1">Presale</div></Fade>
              <Fade right><div className="text-white m-1">Coin Gecko & CoinMarketCap listing</div></Fade>
              <Fade right><div className="text-white m-1">Launch Pad Sale</div></Fade>
            </div>
          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 3: 2022 Q2</time>

              <Fade left><div className="text-white m-2">LP Locked & Ownership Renounced</div></Fade>
              <Fade left><div className="text-white m-2">Orion's Realm Land NFTs Drop</div></Fade>
              <Fade left><div className="text-white m-2">Gameplay Teaser</div></Fade>
              <Fade left><div className="text-white m-2">Listing on CEX</div></Fade>
              <Fade left><div className="text-white m-2">Listing on Swaps</div></Fade>
              <Fade left><div className="text-white m-2">Aditional Game Studio Partnerships</div></Fade>
              <Fade left><div className="text-white m-2">Dedicated wallet for charity</div></Fade>
              <Fade left><div className="text-white m-2">
                Debuit NFT Collaboration with top crypto influencers
              </div></Fade>
              <Fade left><div className="text-white m-2">First Minigame launch</div></Fade>
              <Fade left><div className="text-white m-2">Release Swaraj Bazinga</div></Fade>
              <Fade left><div className="text-white m-2">
                Metaverse - Unreal Engine Development
              </div></Fade>
            </div>
          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 4: 2022 Q3</time>

              <Fade right><div className="text-white m-2">NFT sentinel series auction drop</div></Fade>
              <Fade right><div className="text-white m-2">NFT marketplace Launch</div></Fade>
              <Fade right><div className="text-white m-2">More Minigames launches</div></Fade>
              <Fade right><div className="text-white m-2">
                Additional Game Studio Partnerships
              </div></Fade>
              <Fade right><div className="text-white m-2">DeFi features(Staking & Farming)</div></Fade>
              {/* <Fade right><div className="text-white m-2">Website Launch v1</div></Fade> */}
              {/* <Fade right><div className="text-white m-2">Discovery</div></Fade> */}
            </div>
          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 5: 2022 Q4</time>

              <Fade left><div className="text-white m-2">Alpha metaverse testing</div></Fade>
              <Fade left><div className="text-white m-2">New marketing contents</div></Fade>
              <Fade left><div className="text-white m-2">1st charity funds release</div></Fade>
              <Fade left><div className="text-white m-2">Branded merchandise</div></Fade>
            </div>
          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 6: 2023 Q1</time>

              <Fade right><div className="text-white m-2">Metaverse Beta version</div></Fade>
              <Fade right><div className="text-white m-2">
                Swaraj army reaching milestones & burn event
              </div></Fade>
              <Fade right><div className="text-white m-2">Building swaraj ecosystem</div></Fade>
              <Fade right><div className="text-white m-2">
                Voting rights to the people-$GTKN
              </div></Fade>
              <Fade right><div className="text-white m-2">
                implement 1% Burn Tax on transactions
              </div></Fade>
              <Fade right><div className="text-white m-2">Swaraj Go Green Movement</div></Fade>
            </div>
          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 7: 2023 Q2 </time>

              <Fade left><div className="text-white m-2">NFT upgrades/ accessories drop</div></Fade>
              <Fade left><div className="text-white m-2">Swaraj army reaching milestones</div></Fade>
              <Fade left><div className="text-white m-2">Listing on more exchanges</div></Fade>
              <Fade left><div className="text-white m-2">
                Raising funds for major exchange listings
              </div></Fade>
            </div>
          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 8: 2023 Q3 </time>

              <Fade right><div className="text-white m-2">
                AI training platform for Sentinel Series
              </div></Fade>
              <Fade right><div className="text-white m-2">SWARAJ Launchpad</div></Fade>
              <Fade right><div className="text-white m-2">2nd Charity Funds Release</div></Fade>
            </div>
          </li>
         <li>
            <div className="place-items-center place-content-center">
              <time>Phase 9: 2023 Q4 </time>

              <Fade left><div className="text-white m-2">Swaraj DEX</div></Fade>
              <Fade left><div className="text-white m-2">Swaraj wallet/app</div></Fade>
              <Fade left><div className="text-white m-2">
                New products and services included in app
              </div></Fade>
            </div>
          </li>
          <li>
            <div className="place-items-center place-content-center">
              <time>Phase 10: 2024 Q1 </time>

              <Fade right><div className="text-white m-2">
                Integration with payment services for eCommerce, etc.
              </div></Fade>
              <Fade right><div className="text-white m-2">Listing on more exchanges</div></Fade>
              <Fade right><div className="text-white m-2">
                Corporate endorsement and sponsorships
              </div></Fade>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Roadmap;
