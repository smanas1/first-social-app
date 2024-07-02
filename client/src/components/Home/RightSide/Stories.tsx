import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, History } from "swiper/modules";
import { storiesData } from "../data";
const Stories = () => {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-medium mb-3">Stories</h3>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation={true}
        history={{
          key: "slide",
        }}
        modules={[Navigation, History]}
        className="mySwiper"
      >
        {storiesData.map((item, index) => (
          <SwiperSlide
            key={index}
            data-history="1"
            style={{
              background: `url(${item.bgPicture})`,
            }}
            className="h-60 bg-no-repeat  rounded-md"
          >
            <img
              className="h-12 w-12 border-2
               rounded-full object-cover mt-2 ms-2"
              src={item.picture}
              alt="story"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;
