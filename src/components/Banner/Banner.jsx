// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
              <h2 className="font-semibold text-xl text-center">
                Good Service is our passion
              </h2>
              <h1 className="font-bold text-2xl text-center lg:text-7xl">
                Awesome apartment Villa
              </h1>
              <p className="text-center font-medium">
                No matter what the weather, no matter what the situation we are
                in, if we have the right perspective in life, life will always
                be beautiful!
              </p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">
                Special Offer
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-xl text-center">
                Luxury Living
              </h2>
              <h1 className="font-bold text-2xl text-center lg:text-7xl">
                Exquisite Penthouse Suite
              </h1>
              <p className="text-center font-medium">
                Indulge in the epitome of luxury with breathtaking views and
                impeccable amenities.
              </p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">
                Explore Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-xl text-center">
                Seaside Retreat
              </h2>
              <h1 className="font-bold text-2xl text-center lg:text-7xl">
                Oceanfront Paradise Villa
              </h1>
              <p className="text-center font-medium">
                Escape to a tranquil oasis where the sound of waves lulls you
                into serenity.
              </p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">
                Book Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-xl text-center">
                Urban Living
              </h2>
              <h1 className="font-bold text-2xl text-center lg:text-7xl">
                Chic City Loft
              </h1>
              <p className="text-center font-medium">
                Experience the vibrancy of city life in a stylish and modern
                loft apartment.
              </p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <h2 className="font-semibold text-xl text-center">
                Mountain Retreat
              </h2>
              <h1 className="font-bold text-2xl text-center lg:text-7xl">
                Cozy Cabin in the Woods
              </h1>
              <p className="text-center font-medium">
                Embrace the tranquility of nature in a rustic cabin nestled
                amidst towering pines.
              </p>
              <button className="bg-[#fca229] py-3 px-5 rounded-full hover:bg-success font-semibold">
                Book Your Stay
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
