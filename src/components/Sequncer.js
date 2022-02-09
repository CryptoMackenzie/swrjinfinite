import React from 'react';

import swrjVdo from "../assets/Sequencer/swrj.webm";
import swrjVdo2 from "../assets/Sequencer/gtkn.webm";

const Sequncer = () => {
  return <>
      <div className="relative flex justify-center pl-16 mb:pl-24">
        <video
          src={swrjVdo}
          type="video/mkv"
          loop
          controls={false}
          muted
          playsInline
          autoPlay
          className="w-[80%] object-cover "
        />
      </div>
      <div className="relative justify-center flex pl-10">
        <video
          src={swrjVdo2}
          type="video/mkv"
          loop
          playsInline
          controls={false}
          muted
          autoPlay
          className="w-[60%] object-cover "
        />
      </div>
  </>;
};

export default Sequncer;
