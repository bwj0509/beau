import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import main1 from '../../img/main1.jpg';
import main2 from '../../img/main2.jpg';
import main3 from '../../img/main3.jpg';
import main4 from '../../img/main4.jpg';

const SwiperImgWrapper = styled.div`
    width: 100%;
    height: 1000px;
`
const Left = styled.div`
  width: 50%;
  height: 100%;
  background: url(${props => props.img});
  background-size: cover;
  font-size: 8vw;
  display:flex;
  justify-content: flex-end;
  align-items: center;
`
const Right = styled.div`
  width: 50%;
  height: 100%;
  font-size: 7vw;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: #f4f4f4;
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
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Left img={main1}>
            <div style={{ color: 'white', marginRight: '30px' }}>BLACK</div>
          </Left>
          <Right>
            <div style={{ color: 'rgb(118 6 5)', marginLeft: '30px', position: 'absolute' }}>RED</div>
            <div style={{ width: '40%', height: '60%', margin: 'auto', background: `url(${main2})`, backgroundSize: 'cover', borderRadius: '30px 5px' }}></div>
          </Right>
        </SwiperSlide>
        <SwiperSlide>
          <Left img={main3}>
            <div style={{ color: 'white', marginRight: '30px' }}>SUN</div>
          </Left>
          <Right>
            <div style={{ color: 'rgb(118 6 5)', marginLeft: '30px', position: 'absolute' }}>EYE</div>
            <div style={{ width: '70%', height: '50%', margin: 'auto', background: `url(${main4})`, backgroundSize: 'cover' }}></div>
          </Right>
        </SwiperSlide>
      </Swiper>
    </SwiperImgWrapper>
  );
}

export default SwiperImg;