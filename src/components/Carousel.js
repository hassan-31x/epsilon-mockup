import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {

    const [full, setfull] = useState(false)

    const fullView = () => {
        setfull(true)
    }

  return (
    <div className='h-full w-screen flex flex-col justify-center items-end'>
                <Swiper
                slidesPerView={full ? 1 : 3}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                id='remove'
                className={`mySwiper ${full ? 'relative top-0 w-full h-full flex items-center mt-[150px]' : 'h-[60%] w-full flex items-end'}`}>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 1</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 2</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 3</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 4</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 5</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 6</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 7</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} >Slide 8</SwiperSlide>
                <SwiperSlide className={`${full ? 'bg-white text-black h-full text-center text-7xl text-bold' : 'card h-[100%] w-[20rem] bg-white my-10 border rounded-3xl'}`} onClick={fullView} > Slide 9 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quaerat necessitatibus, earum voluptatum adipisci assumenda praesentium expedita. Nobis fugiat recusandae molestiae minus commodi blanditiis odit quos reiciendis officiis deleniti? A ab stiae nihil illo quae.</SwiperSlide>
            </Swiper>

    </div>
  )
}

export default Carousel
