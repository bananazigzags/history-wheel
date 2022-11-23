import { Dates, Event, Header } from "@/components/index";
import "./App.css";
import { events } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  return (
    <div className="App">
      <div className="line vertical left"></div>
      <div className="line vertical right"></div>
      <div className="line vertical vertical-center"></div>
      <Header text="Исторические даты" />
      <Dates from="2015" to="2022" />
      <div className="events">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {events.map((event, index) => (
            <SwiperSlide>
              <Event year={event.year} text={event.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
