import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/Sequencer/1.png"
import img2 from "../assets/Sequencer/2.png"
import img3 from "../assets/Sequencer/3.png"
import img4 from "../assets/Sequencer/4.png"
import img5 from "../assets/Sequencer/5.png"
import img6 from "../assets/Sequencer/6.png"
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
        <div className="swiper_in_container">
        <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          <img classname='z-10' src={img1} />
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Title</h1>
            <p class="card-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi sit sint doloribus dicta odio expedita ducimus quo consequatur repellat.
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          <img classname='z-10' src={img2} />
          <div class="Features_slider_card-data ">
            <h1 class=" ml-6 Feature_card-title">Title</h1>
            <p class="card-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi sit sint doloribus dicta odio expedita ducimus quo consequatur repellat.
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          <img classname='z-10' src={img3} />
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Title</h1>
            <p class="card-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi sit sint doloribus dicta odio expedita ducimus quo consequatur repellat.
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          <img classname='z-10'src={img4} />
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Title</h1>
            <p class="card-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi sit sint doloribus dicta odio expedita ducimus quo consequatur repellat.
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          <img classname='z-10' src={img5} />
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Entertainment</h1>
            <p class="card-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi sit sint doloribus dicta odio expedita ducimus quo consequatur repellat.
            </p>
          </div></div> </SwiperSlide>
          <SwiperSlide> <div class=" Features_slider_card absolute">
          {" "}
          <img classname='z-10' src={img6} />
          <div class="Features_slider_card-data ">
            <h1 class="Feature_card-title">Title</h1>
            <p class="card-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi sit sint doloribus dicta odio expedita ducimus quo consequatur repellat.
            </p>
          </div></div> </SwiperSlide>
          

        </div>
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
