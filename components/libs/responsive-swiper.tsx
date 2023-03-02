import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { CommonType } from '../../types/common';

export default function ResponsiveSwiper(props: CommonType) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
      >
        {props.children}
      </Swiper>
    </>
  );
}
