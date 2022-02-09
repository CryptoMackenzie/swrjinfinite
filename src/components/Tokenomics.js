import React from 'react';
import logo from "../assets/icons/swaraj.png";
import { Link } from "react-router-dom";
import {BsInstagram, BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa";
import tok1 from  "../assets/tokenomics1.jpg"
import tok2 from  "../assets/tokenomics2.jpg"
import {AiFillRedditCircle} from "react-icons/ai"
import {AiFillMediumCircle} from "react-icons/ai"

const Tokenomics = () => {
  return <div>
  <div className="Prologue">
    
    <div>
      
      <Link to="/">
        <img className="w-[100px] m-12" src={logo} alt="Logo" />
      </Link>
      
    </div>
    <div className="w-[100%] mt-[-20vh] flex justify-end text-white font-mono">
    <Link to="tokenomics">
            <button className="mt-5 mr-7 ml-7 hidden md:block">
              {" "}
              Tokenomics{" "}
            </button>
            </Link>
            <button
              className="mt-5 mr-7 ml-7 hidden md:block"
              onClick={() => (window.location.href = "#roadmap")}
            >
              {" "}
              RoadMap{" "}
            </button>
            <button
              className="mt-5 mr-7 ml-7 hidden md:block"
              onClick={() => (window.location.href = "#contactUs")}
            >
              {" "}
              Contact Us{" "}
            </button>
          </div>
    <div className="mt-3 items-center flex flex-col justify-center">
        <div className="flex w-full items-center justify-center">

    <h1 className='text-white tracking-[10px] text-7xl drop-shadow-2xl mb-[10%] font-semibold text-shadow-1'>Tokenomics</h1>
        </div>
        <div className='w-full  flex flex-col justify-center items-center'>
          <img src={tok1} alt="tok2"  className='w-[50vw]'/>
          <img src={tok2} alt="tok1"  className='mt-[10vw]'/>
        </div>
    
    
  </div>
  <div className='w-full flex justify-center items-center bottom-0 mt-[10vw]'>
  <a className='m-9 hover:text-blue-600 ease-in-out duration-500 vrt' href="https://www.facebook.com/swarajcoin"><BsFacebook fontSize={28}/></a>
  <a className='m-9 hover:text-[#9c23e8] ease-in-out duration-500 vrt' href="https://www.instagram.com/swarajcoinofficial/"><BsInstagram fontSize={28}/></a>
  <a className='m-9  hover:text-[#178bcf] ease-in-out duration-500 vrt' href="https://t.me/swarajcoin"><FaTelegramPlane fontSize={28}/></a>
  <a className='m-9 hover:text-[#0272fa] ease-in-out duration-500 vrt' href="https://twitter.com/swarajcoin"><BsTwitter fontSize={28}/></a>
  <a className='m-9 hover:text-[#fc4e03] ease-in-out duration-500 vrt' href="https://www.reddit.com/r/SwarajCoin/"><AiFillRedditCircle fontSize={28}/></a>
  <a className='m-9 hover:text-[#e5ff00] ease-in-out duration-500 vrt' href="https://swarajcoin.medium.com/"><AiFillMediumCircle fontSize={28}/></a>
  {/* <a className='m-9 hover:text-[#32cf83] ease-in-out duration-500 vrt text-4xl w-[10px]' href="https://linktr.ee/swarajcoinofficial"><Icon icon="simple-icons:linktree" /></a> */}
</div>
<div id="contactUs"className='w-[full] text-2xl text-[#9c23e8] h-[10vh] flex items-center justify-between pb-[2%]'><span className='ml-[10%] font-bold text-3xl'>info@swarajcoin.com</span>   <span className='mr-[20%]'> SWARAJ COIN ©2022 All Rights Reserved</span></div>
</div>

</div>;
};

export default Tokenomics;

