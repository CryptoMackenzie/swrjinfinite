import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/fs1.png"
import img2 from "../assets/fs2.png"
import img3 from "../assets/fs3.png"
import img4 from "../assets/fs4.png"
import img5 from "../assets/fs5.png"
import img6 from "../assets/fs6.png"
import img7 from "../assets/fs7.png"
import img8 from "../assets/fs8.png"
import img9 from "../assets/fs9.png"

import { useWindowWidth } from "@react-hook/window-size";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation } from "swiper";

const FeaturesSlider = () => {
  const screenWidth = useWindowWidth();
  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={screenWidth>=750?true:false}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
        modules={[Navigation,Pagination]}
        className="w-full h-[100vh] swiper_1 "
      >
        {/* <div className="swiper_in_container"> */}
        <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
         {/* <img classname='z-10' src={img8} />           */}
            <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Decentralized</h1>
            <p class="card-description">
                Multi-utility token based on the concept of freedom and self-governance. 
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          {/* <img classname='z-10' src={img3} />          */}
          <div class="Features_slider_card-data ">
            <h1 class=" ml-6 Feature_card-title">DAO and Metaverse Council</h1>
            <p class="card-description">
            The virtual Lands in the Orion Realm will be managed by a council consisting of sentinels, landowners, and the top holders of G-Tokens. Council members can work with landowners to organize regional events and competitions. 
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          {/* <img classname='z-10' src={img6} />           */}
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">AAA P2E & PvP gaming experience</h1>
            <p class="card-description">
            High end graphics which delivers an immersive player experience. Earn rewards while playing games and completing quests in the form of $RVV, $GTKN and NFTs.  
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          {/* <img classname='z-10' src={img2} />         */}
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Smart NFTs with AI Capabilities:</h1>
            <p class="card-description">
            A collection of 100 Smart NFTs called the Sentinels with AI trained NFT upgrades, launched on our dedicated platform.   
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          {/* <img classname='z-10' src={img5} />          */}
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">NFT Marketplace</h1>
            <p class="card-description">
              NFT drops of 5000 Orion's Realm blocks, 10,000 Deviants, 100 Sentinel series characters and finally upgrades and power-ups, which would be part of the Metaverse with its dedicated marketplace. It will also consist of NFTs created by partnered projects and other users. 
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          {/* <img classname='z-10' src={img1} />          */}
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Interoperability </h1>
            <p class="card-description">
            Compatibility between Astra Nova and other metaverse and NFT projects. 
            </p>
          </div></div> </SwiperSlide>

          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          {/* <img classname='z-10' src={img7} /> */}
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Staking Pools</h1>
            <p class="card-description">
            An extensive ecosystem, with a plethora of different staking pools for tokens and NFTs through which rewards are distributed in MATIC, Revive, and G-Token.
            </p>
          </div></div> </SwiperSlide>

          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          {/* <img classname='z-10' src={img9} />    */}
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Anti-Dump</h1>
            <p class="card-description">
            Redistribution and Anti-Dump mechanisms built into the smart contract. 
            </p>
          </div></div> </SwiperSlide>
          

        {/* </div> */}
      </Swiper>
    
        {/* <div class="Features_slider_card absolute">
          {" "}
          <img classname='z-10' src="https://drive.google.com/uc?export=view&id=1lRXnHVqM39L1M_1oRkhk7YJhXSAZAwWQ" />
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Title</h1>
            <p class="card-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi sit sint doloribus dicta odio expedita ducimus quo consequatur repellat.
            </p>
          </div>
        </div> */}
        
       
      </div>
 
  );
};

export default FeaturesSlider;
