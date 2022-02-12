import React from 'react';

import swrjVdo from "../assets/Sequencer/swrj.webm";
import swrjVdo2 from "../assets/Sequencer/gtkn.webm";
import swrjVdoMp4 from "../assets/Sequencer/swrj.mp4";
import swrjVdo2Mp4 from "../assets/Sequencer/gtkn.mp4";

const Sequncer = () => {
  return <>
      <div className="relative flex justify-center pl-16 mb:pl-24">
        <video
          loop
          controls={false}
          muted
          playsInline
          autoPlay
          className="w-[80%] object-cover "
        >
          <source src={swrjVdo} type="video/webm"></source>
          <source src={swrjVdoMp4} type="video/mp4"></source>
        </video>
      </div>
      <div className="relative justify-center flex pl-8">
        <video
          loop
          playsInline
          controls={false}
          muted
          autoPlay
          className="w-[60%] object-cover "
        >
          <source src={swrjVdo2} type="video/webm"></source>
          <source src={swrjVdo2Mp4} type="video/mp4"></source>
        </video>
      </div>
  </>;
};

export default Sequncer;
