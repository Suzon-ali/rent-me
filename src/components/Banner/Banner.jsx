// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bg from '../../assets/slider-one.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="mt-20">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
         
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-2xl">Good Service is our passion</h2>
              <h1 className="font-bold text-4xl text-center lg:text-7xl">Awesome apartment Villa</h1>
              <p className="text-center font-medium">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">Special Offer</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-2xl">Good Service is our passion</h2>
              <h1 className="font-bold text-4xl text-center lg:text-7xl">Awesome apartment Villa</h1>
              <p className="text-center font-medium">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">Special Offer</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-2xl">Good Service is our passion</h2>
              <h1 className="font-bold text-4xl text-center lg:text-7xl">Awesome apartment Villa</h1>
              <p className="text-center font-medium">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">Special Offer</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-2xl">Good Service is our passion</h2>
              <h1 className="font-bold text-4xl text-center lg:text-7xl">Awesome apartment Villa</h1>
              <p className="text-center font-medium">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">Special Offer</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-2xl">Good Service is our passion</h2>
              <h1 className="font-bold text-4xl text-center lg:text-7xl">Awesome apartment Villa</h1>
              <p className="text-center font-medium">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">Special Offer</button>
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </>
  );
}
