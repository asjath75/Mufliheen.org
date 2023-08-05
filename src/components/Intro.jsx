import React from "react";
import "./Intro.css";
import Button1 from "./Button1";
import { Books } from "./Books";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Intro() {
  return (
    <div>
      <div>
        <img
          className="bg"
          src={require("../imges/actm-cover-01.jpg")}
          alt="background"
        />
      </div>
      <div className="about-container">
        <h1>About Thareekathul Mufliheen</h1>
        <p>
          All Ceylon Thareekathul Mufliheen, a Sufi order, was founded 35 years
          ago by the spiritual leader Sheihul Mufliheen M.S.M. Abdullah(Rah),
          popularly known as “Pailvaan” meaning (Wrestler) in English. He lived
          in Maruthamunai, a coastal town in the Eastern Province of Sri Lanka.
          All Ceylon Thareekathul Mufliheen was registered as a Cultural Society
          on 1st June, 1989 in the District Secretariat, Batticaloa, the capital
          city of the Eastern Province, hold legal status to observe the
          Religion on which the spiritual leader and his followers have reposed
          their faith. Members of this society follow Islam and hold the belief
          in “Tawheed” (Omnipresence of God or Oneness of the Being). The Head
          Office is located in Kattankudy with Branches in other parts of the
          country. There are over 15,000 members in Sri Lanka and world over,
          reposed their faith on the doctrine enunciated by this spiritual
          leader.
        </p>
        <p>
          “Thareeka” is an Arabic word, meaning “a Path”. This spiritual path
          leads one to attain eternal peace, tranquility and union with God. The
          word “Thareekathul Mufliheen” is also an Arabic word meaning, “The
          path of the fearless victorious”. The vision of Thareeka is to expound
          the true meaning of “Kalimathuth Thayibah” (Fragrant sacred word) “LA
          ILAHA ILLALLAH”, the basic principle in Islam, meaning “There is
          nothing (Creation) but Allah (God)”. This word Allah (God) denotes a
          great power, unbound by time and space, infinite and beyond human
          imagination. The creation is only the manifestation of this eternal
          truth, not separate from it. This truth has been clearly established
          beyond doubts by the spiritual leader based on Holy Quran and Hadith
          (Prophetic traditions) in his numerous publications and 181 spiritual
          songs, written and composed by him.
        </p>
        <Button1 />
      </div>
      <div className="heading-container">
        <div className="heading">
          <h2>Download And Read Our Books Here</h2>
          <h3>Available In English,Shinhala And Tamil</h3>
        </div>
      </div>

      <div className="silde-container">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
          {Books.map((book, i) => (
            <SwiperSlide>
              <img src={book.image} />
              <p>{book.name}</p>
              <button>Download</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="book-btn">
      <button >See More</button>
      </div>
    </div>
  );
}

export default Intro;
