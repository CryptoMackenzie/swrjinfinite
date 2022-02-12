import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import logo from "../assets/logo.png";
import { useWindowWidth } from "@react-hook/window-size";
import polygonLogo from "../assets/icons/polygon-badge.png";
import Typewriter from "typewriter-effect";
import vdo from "../assets/globe.mp4";
import freedompaper from "../assets/freedompaper.pdf"
import { Link } from "react-router-dom";

const Home = () => {
  const screenWidth = useWindowWidth();
  return (
    <>
      <div>


        {/* Header */}
        <nav className="px-10 pt-5 grid grid-cols-1 lg:grid-cols-4 ">
          <div className="flex justify-center lg:justify-start">
              <img src={logo} alt="logo" className="w-[100px]" />
          </div>

          <div className="text-right hidden lg:block col-span-3">
            <div>
              <Link to="tokenomics">
                <button className="mx-7 px-5">
                  Tokenomics
                </button>
              </Link>
              <button
                className="mx-7 px-5"
                onClick={() => (window.location.href = "#roadmap")}
              >
                RoadMap
              </button>
              <button
                className="mx-7 px-5"
                onClick={() => (window.location.href = "#contactUs")}
              >
                Contact Us
              </button>          
            </div>
          </div>
        </nav>


        {/* Introduction */}
        
        <div className="flex px-12">
          <div className="flex-[3]">
            <h1 className="mt-20 text-white text-6xl drop-shadow-2xl font-semibold text-shadow-1 h-[250px] md:h-[300px] lg:h-[200px] ">
              <Typewriter
                options={{
                  strings: [
                    "The New Standard For Freedom and Self-Governance",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <span className="mt-10 block text-1xl font-bold text-[#a64af7]">
              A truly community driven Metaverse project,
              <br /> built On The Concept Of <span className="text-white inline-block md-block">Self Governance.</span>
            </span>
            
            <p class="glitch">
              <span aria-hidden="true">Powered By</span>
              Powered By
              <span aria-hidden="true">Powered By</span>
            </p>

            <img src={polygonLogo} alt="Polygon" className="w-[160px] my-3" />

            <button className="mt-10 px-5">
              <a href={freedompaper} target="_blank">
                Freedom Paper v1.3
              </a>
            </button>
            
          </div>

          <div className="flex-[2] hidden md:block">
            <video
              src={vdo}
              type="video/mkv"
              loop
              controls={false}
              muted
              playsInline
              autoPlay
              className="w-full "
            />
          </div>
        </div>
      </div>

      <div className="flex pt-20 pb-10 mt-10   justify-center items-center">
        <iframe 
          width={`${Math.min(screenWidth, 1000)}`}
          height={`${0.5625*Math.min(screenWidth, 1000)}`}
          src="https://www.youtube-nocookie.com/embed/8Ihf45j48Jk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </>
  );
};

export default Home;