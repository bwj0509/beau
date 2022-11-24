import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide  } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";


const SwiperImgWrapper = styled.div`
    width: 100%;
    height: 1000px;
`


function SwiperImg() {
  return (
    <SwiperImgWrapper>
         <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        className="mySwiper"
      >
        <SwiperSlide>
            <div style={{width:'50%', height:'100%', background:'red'}}>왼쪽</div>
            <div style={{width:'50%', height:'100%', background:'blue'}}>오른쪽</div>
        </SwiperSlide>
        <SwiperSlide>
            <div style={{width:'50%', height:'100%', background:'blue'}}>왼쪽</div>
            <div style={{width:'50%', height:'100%', background:'red'}}>오른쪽</div>
        </SwiperSlide>
      </Swiper>
    </SwiperImgWrapper>
  );
}

export default SwiperImg;