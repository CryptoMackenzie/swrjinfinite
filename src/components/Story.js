import React from 'react';
import orion from "../assets/Orions_realm.png"
import glitch from "../assets/glitch.mp4"
import { useState } from 'react';
import deviant from "../assets/Sequencer/deviant.webm"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"
import img7 from "../assets/7.png"
import img8 from "../assets/8.png"
import img9 from "../assets/9.png"
import { Link } from 'react-router-dom';



const Story = () => {
  const [see, setSee] = useState(false);

  return (
    <>
      <div className='items-center mt-[5%] flex flex-col  justify-center'>

        <h1 className="text-[#a64af7] tracking-[10px] text-[2rem] lg:text-5xl drop-shadow-2xl mb-[5%] pl-[6%]  text-shadow-1  specialH2 font-black pr-10">
          Story So Far...
        </h1>


        <div className='md:w-[60%] ml-2 w-full flex text-white'>


          <div className='p-[5%] md:ml-0 ml-7 mr-7 md:mr-0 text-xl text-white text-base font-bold lg:text-xl border-solid border-[#a64af7] rounded-2xl border-2'>
            <p>Some years ago, amid our own ongoing problems, a crisis of unforeseen magnitude arrived in our world. Driven away from their home by their own magical calamity, the Elves and their peoples invaded our world instead. They seized control of a landmass and refused all the feeble attempts at diplomacy, defending to the death their new home. They were determined to control this "new world" the way they did theirs. We retaliated, of course, trying to regain the land that they stole from us. As powerful as I am, I felt I could not sit back and do nothing.</p>
            <br />
            {see ? <p id='see-content '>Tried to reason with both sides. Even used threats. I warned them of my premonitions. Nothing worked. Politicians and leaders on both sides were determined to use this conflict for their own agendas. War could not be prevented. A vivid dream came to me many times now, and I am convinced the threat is real. There is something worse coming, much worse. If we do not stop this pointless fighting, if we do not unite and learn to live in peace, not a single one of us will survive this threat. Humans, Elves, Trolls, Fairies, we will all be wiped out.</p> : ""}
            {see ? <span className="cursor-pointer text-[#a64af7] " onClick={() => setSee(false)}>See less</span> : <span className="cursor-pointer text-[#a64af7]" onClick={() => setSee(true)}>See More..</span>}</div>

        </div>
        <Link to="/prologue" className='mt-10'><button className='px-10'>Read Prologue</button></Link>
      </div>
      <div className="my-5 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 py-10">
        <div className='place-self-center'>
          <h1 className='text-[#a64af7] tracking-[10px] text-[2rem] lg:text-5xl drop-shadow-2xl w-[300px] text-shadow-1  specialH2 font-black' >Meet the Deviants</h1>
        </div>
        <div className='place-items-center place-content-center row-span-2 grid grid-cols-2 h-auto h-[340px] md:h-[400px] overflow-hidden'>
          <div className=''>
            <video
              src={deviant}
              type="video/mp4"
              loop
              playsInline
              controls={false}
              muted
              autoPlay
              className="h-full object-cover"
            />
          </div>
          <div className='flex'>
            <marquee direction="up">
              <div className=' md:ml-6  lg:ml-6 ml-0 bg-white flex items-center  justify-center mt-10 rounded-3xl'><img clasName="" src={img1} alt="" srcset="" className=' rounded-3xl' /></div>
              <div className=' md:ml-6 ml-2 bg-white flex items-center   justify-center mt-10 rounded-3xl '><img src={img3} alt="" srcset="" className=' rounded-3xl' /></div>
              <div className=' md:ml-6 ml-2bg-white flex items-center   justify-center mt-10 rounded-3xl'><img src={img6} alt="" srcset="" className='rounded-3xl' /></div>
              <div className=' md:ml-6 ml-2bg-white flex items-center   justify-center mt-10 rounded-3xl'><img src={img8} alt="" srcset="" className='rounded-3xl' /></div>
            </marquee>
            <marquee direction="down">
              <div className='   flex items-center md:ml-[30px] ml-2 justify-center mt-10 rounded-3xl'><img src={img7} alt="" srcset="" className=' rounded-3xl' /></div>
              <div className='   flex items-center md:ml-[30px] ml-2   justify-center mt-10 rounded-3xl'><img src={img2} alt="" srcset="" className=' rounded-3xl' /></div>
              <div className='   flex items-center md:ml-[30px] ml-2  justify-center mt-10 rounded-3xl'><img src={img5} alt="" srcset="" className=' rounded-3xl' /></div>
              <div className=' md:ml-6 ml-2bg-white flex items-center   justify-center mt-10 rounded-3xl'><img src={img9} alt="" srcset="" className='rounded-3xl' /></div>
            </marquee>
          </div>  
        </div>
        <div className='px-10 pt-10 pl-[5%] pr-[5%]'>
          <p className='text-white text-base font-bold lg:text-xl pl-[5%] pr-[5%]'>
            Our mission is simple: <span className='text-[#a64af7] textShadow font-bold inline-block md-block'>Take over the PvP and P2E gaming experience in the metaverse space.
            </span>
            <br />
            <br />
            Our Deviants are cute, but vicious.<br /> These adorable  10,000 animated character NFTs would be the avatars in the metaverse with certain perks which can be customized and upgraded.
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 ">
        <div className="md:col-start-2">
          <h1 className='text-[#a64af7] tracking-[10px] text-[2rem] lg:text-5xl drop-shadow-2xl pt-[5%] pl-[6%] text-shadow-1  specialH2 font-black pr-10' >Orion's Realm Series</h1>
        </div>
        <div className="mt-10 row-span-2 place-self-center">
          <img src={orion} alt="" className=' boxs' />
        </div>
        <div className='md:col-start-2 mt-[5%] pl-[5%] pr-[5%]'>
          <p className='text-white text-base font-bold lg:text-xl pl-[5%] pr-[5%]'>
            5 large regions of land divided into 5000 Virtual Land NFTs consisting of
            cities, forests, farmlands etc.<br /><br /> They will be used to advertise,
            develop multilevel games, construct structures, hold events and
            social gatherings and engage in commercial ventures such as arcades, metaverse sports events and competitions.
          </p>
        </div>
      </div>
      <div className="my-10 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className='text-[#a64af7] tracking-[10px] text-[2rem] lg:text-5xl drop-shadow-2xl pt-[5%] pl-[6%]  text-shadow-1  specialH2 font-black pr-10' >Sentinel Series</h1>
        </div>
        <div className='md:w-[90%] md:h-[90%] h-[300px] w-[300px] boxs1 place-self-center mt-10 md:row-span-2'>
          <video src={glitch}
            type="video/mp4"
            loop
            controls={false}
            muted
            playsInline
            autoPlay
            className="md:w-full md:h-full h-[300px] w-[300px] md:m-1 lg:m-1 object-cover">
          </video>
        </div>
        <div className='pl-[5%] pr-[5%]'>
          <p className='text-white text-base font-bold lg:text-xl'>
            Limited edition of 100 Smart NFTs With AI capablities.<br /><br /> Possessing these Sentinels grants extrordinary privileges, transforming them into the "Councilor" of particular areas of the virtual territory in the Metaverse <br /><br />
            These Smart NFTs will have the capacity to execute specific acts outside of the Metaverse, like reading  messages in a human-like voice and acting on your behalf as well as functioning as chatbots, among other AI integrated functions.
          </p>
        </div>
      </div>
    </>)
};

export default Story;
