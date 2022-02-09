import FeatureCards2 from "./FeatureCard2";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import img1 from "../assets/Sequencer/1.png"
import img2 from "../assets/Sequencer/2.png"
import img3 from "../assets/Sequencer/3.png"
import img4 from "../assets/Sequencer/4.png"
import img5 from "../assets/Sequencer/5.png"
import img6 from "../assets/Sequencer/6.png"



function Carousal(props) {
  const [level, setLevel] = useState(1);
  const incrementLevel = () => {
    if (level < 6) setLevel(level + 1);
    else setLevel(1)
  };
  const decrementLevel = () => {
    if (level > 1) setLevel(level - 1);
    else setLevel(6)
  };
  return (<>

    <div className="FeatureCard2Container pt-20 w-100vw h-[800px]  md:h-[900px] overflow-x-hidden relative">
      <h1 className='text-[#a64af7] tracking-[10px] text-[2rem] lg:text-5xl drop-shadow-2xl mb-[5%] pl-[6%]  text-shadow-1  specialH2 font-black pr-10'>Pushing Boundaries Of The Metaverse To Extremes</h1>
      <p className="text-center m-11 text-white text-lg font-bold">Our objective is to transfer power back to the people via establishing a decentralized ecosystem managed by and for the  people themselves.</p>
      <button className="left" onClick={() => decrementLevel()} ><AiOutlineArrowLeft fontSize={30} /></button>
      <button className="right" onClick={() => incrementLevel()}><AiOutlineArrowRight fontSize={30} /></button>
      <FeatureCards2
        level={level}
        icon={img1}
        title="Entertainment"
        text="Users can host events, social gatherings and network with fellow users bridging the real world and the virtual world."
      ></FeatureCards2>
      <FeatureCards2
        level={level + 1}
        icon={img2}
        title="Monetize"
        text="Metaverse also provides an extensive array of mediums for advertising and provides opportunities to generate and trade NFTs in the marketplace or hold the NFTs as long-term assets."
      ></FeatureCards2>
      <FeatureCards2
        level={level + 2}
        icon={img3}
        title="Develop"
        text="Users can develop games, make artworks, build their own cities, and dream houses with easy-to-use built-in tools. Furthermore, professionals can used the pro-toolkit to enhance their development."
      ></FeatureCards2>
      <FeatureCards2
        level={level + 3}
        icon={img4}
        title="Game Play"
        text="Users can play PvP& P2E games & host game tournaments created by users as well as the games created by the community developers."
      ></FeatureCards2>
      <FeatureCards2
        level={level + 4}
        icon={img5}
        title="Explore"
        text="Discover the vast Metaverse by taking the journey of your lifetime.Get lost in a variety of settings, including jungles, seas, and more as you wander across the world."
      ></FeatureCards2>
      <FeatureCards2
        level={level + 5}
        icon={img6}
        title="Personalization"
        text="Players can  be whoever they want to be and personalize their avatar and their lands by constructing whatever they envision."
      ></FeatureCards2>
    </div>

  </>
  );
}

export default Carousal;
