import React from 'react';
import Userstory from './Userstory';
import storiesData from '../../FackApis/StoriesData';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper-bundle.css';  // Import Swiper styles
 import SwiperCore from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './stories.css';
// SwiperCore.use([Navigation, Pagination]);

export default function Stories() {
  return (
    <div className="stories">
      <Userstory />
      <Swiper 
     // modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{ width: '80%' }} 
      slidesPerView={6} 
      spaceBetween={10} 
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
            storiesData.map(story => (
          <SwiperSlide> {/* Move the key to SwiperSlide */}
            <div className="story" key={story.id}>
              <div className="user">
                <img src={story.storyProfile} alt="" />
              </div>
              <img src={story.story} alt="" />
              <h5>{story.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}