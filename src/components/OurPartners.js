import React from 'react';
import infivr from "../assets/icons/infi.jpeg"
import polygon from "../assets/icons/polygon.jpeg"
import whitebud from "../assets/icons/whitebud.png"
import coin from '../assets/News/cointelegraph.png'
import crypto from '../assets/News/Cryptonews.png'
import newsBtc from '../assets/News/newsbtc-logo.jpg'
import YFinance from '../assets/News/Yahoo-Finance.png'
import Ynews from '../assets/News/yahoo-news-logo.png'
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { AiFillRedditCircle } from "react-icons/ai"
import { AiFillMediumCircle } from "react-icons/ai"
//import { Icon } from '@iconify/react';

import { BsFacebook } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"


const OurPartners = () => {
  return (<>

    <div className='w-full pt-24 justify-center items-center md:m-auto px-10'    >
      <h1 className='text-[#a64af7] tracking-[10px] text-[2rem] lg:text-5xl text-center drop-shadow-2xl text-shadow-1  specialH2'>Our Partners</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 flex place-items-center place-content-center justify-center gap-x-10 py-10'>
        <div className='w-[300px] sm:w-[200px] shadow-2xl hover:shadow-[#a64af7] duration-1000 mt-[5%] sm:ml-[10%] bg-white flex items-center justify-center'>
          <a href="https://www.infivr.com/" target="_blank">
            <img src={infivr} className='w-[250px]' alt="InfiVR"/>
          </a>
        </div>
        <div className='w-[300px] sm:w-[200px] shadow-2xl ease-in-out duration-1000 mt-[5%] hover:shadow-[#a64af7] bg-white flex items-center justify-center'>
          <a href="https://polygon.technology/" target="_blank">
            <img src={polygon} alt="Polygon Matic" className='w-[250px]' />
          </a>
        </div>
        <div className='w-[300px] sm:w-[200px] shadow-2xl ease-in-out duration-1000 mt-[5%] hover:shadow-[#a64af7] sm:mr-[10%] bg-white flex items-center justify-center'>
          <a href="https://www.whitebudstudios.com/" target="_blank">
            <img src={whitebud} alt="Whitebud Studios" className='w-[250px]' />
          </a>
        </div>
      </div>
    </div>
    <div className='px-10 pt-20'>

      <h1 className='text-[#a64af7] tracking-[10px] text-[2rem] lg:text-5xl text-center drop-shadow-2xl text-shadow-1  specialH2'>Featured On</h1>

      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 place-items-center place-content-center pt-10'>
        <div>
          <a className=' ease-in-out  duration-500' href="https://cointelegraph.com/press-releases/swaraj-to-launch-their-metaverse-multi-utility-token-shortly">
            <div className='w-[150px] md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white flex items-center justify-center rounded-2xl'>
              <img src={coin} alt="cointelegraph" className='md:w-[90px] w-[60px]' />
            </div>
          </a>
        </div>
        <div>
          <a className=' ease-in-out duration-500 ' href="https://finance.yahoo.com/news/swaraj-set-launch-metaverse-gaming-142500745.html">
            <div className='w-[150px] md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white flex items-center justify-center rounded-2xl'>
              <img src={YFinance} alt="cointelegraph" className='md:w-[90px] w-[60px]' />
            </div>
          </a>
        </div>
        <div>
          <a className=' ease-in-out duration-500 ' href="https://cryptonews.com/news/swaraj-set-launch-its-metaverse-gaming-ecosystem.htm">
            <div className='w-[150px] md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white flex items-center justify-center rounded-2xl'>
              <img src={crypto} alt="cointelegraph" className='md:w-[90px] w-[60px]' />
            </div>
          </a>
        </div>
        <div>
          <a className=' ease-in-out duration-500 ' href="https://www.newsbtc.com/press-releases/swaraj-announces-the-launch-of-a-new-metaverse-gaming-project-and-its-token/">
            <div className='w-[150px] md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white flex items-center justify-center rounded-2xl'>
              <img src={newsBtc} alt="cointelegraph" className='md:w-[90px] w-[60px]' />
            </div>
          </a>
        </div>
        <div>
          <a className=' ease-in-out duration-500' href="https://news.yahoo.com/swaraj-set-launch-metaverse-gaming-142500745.html">
            <div className='w-[150px] md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white flex items-center justify-center rounded-2xl'>
              <img src={Ynews} alt="cointelegraph" className='md:w-[90px] w-[60px]' />
            </div>
          </a>
        </div>
      </div>



    </div>

    <div className='w-full flex flex-wrap justify-center items-center bottom-0'>
      <a className='m-9 hover:text-blue-600 ease-in-out duration-500 vrt' href="https://www.facebook.com/swarajcoin"><BsFacebook fontSize={28} /></a>
      <a className='m-9 hover:text-[#9c23e8] ease-in-out duration-500 vrt' href="https://www.instagram.com/swarajcoinofficial/"><BsInstagram fontSize={28} /></a>
      <a className='m-9  hover:text-[#178bcf] ease-in-out duration-500 vrt' href="https://t.me/swarajcoin"><FaTelegramPlane fontSize={28} /></a>
      <a className='m-9 hover:text-[#0272fa] ease-in-out duration-500 vrt' href="https://twitter.com/swarajcoin"><BsTwitter fontSize={28} /></a>
      <a className='m-9 hover:text-[#fc4e03] ease-in-out duration-500 vrt' href="https://www.reddit.com/r/SwarajCoin/"><AiFillRedditCircle fontSize={28} /></a>
      <a className='m-9 hover:text-[#e5ff00] ease-in-out duration-500 vrt' href="https://swarajcoin.medium.com/"><AiFillMediumCircle fontSize={28} /></a>
      {/* <a className='m-9 hover:text-[#32cf83] ease-in-out duration-500 vrt text-4xl w-[10px]' href="https://linktr.ee/swarajcoinofficial"><Icon icon="simple-icons:linktree" /></a> */}
    </div>
    <div id="contactUs" className='w-[full] text-xs text-[#9c23e8] text-center'>
      <span className='block font-bold'>info@swarajcoin.com</span>
      <span className='block mt-1'> SWARAJ COIN ©2022 All Rights Reserved</span>
    </div>



  </>
  );
};

export default OurPartners;
