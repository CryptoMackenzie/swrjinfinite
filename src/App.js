
import "./App.css";
import Carousal from "./components/Carousal";
import FeatureCards from "./components/FeatureCards";
import Home from "./components/Home";
import OurPartners from "./components/OurPartners";
import Roadmap from "./components/Roadmap";
import Sequncer from "./components/Sequncer";
import { useWindowWidth } from "@react-hook/window-size";

import Story from "./components/Story";

function App() {
  const screenWidth = useWindowWidth();
  return (
    <div>
      {/*
     <Story/>
     <Carousal/>
     <Roadmap/>*/}
      {/* <OurPartners/>  */}
      <Home/>
      <Story/>
      
      <Sequncer/>
      <Carousal/>
      
      <h1 className='text-[#a64af7] font-bold tracking-[10px] text-[2rem] mt-10 mb:mt-0 lg:text-5xl text-center drop-shadow-2xl text-shadow-1 m-1 specialH2'>Features Of Swaraj</h1>
      <p className="text-base text-center">(Swipe Left/Right on the Cards)</p>
      <div className="flex pokercard justify-center justify-items-center">
        <FeatureCards />
      </div>
      <Roadmap/>
      <OurPartners/>
      
      <div className="twinkling-wrapper w-[100vw] h-[100vh] overflow-x-hidden">
          <div className="twinkling md:w-[10000px]"></div>
      </div>

    </div>
  );
}

export default App;
