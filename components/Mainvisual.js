import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';


const Mainvisual = () => {

 
  return(
    <div className="mainvisual">
      <div className="wrapper">
        <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
          effect="fade"
          autoplay={{delay:800}}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          // scrollbar={{ draggable: true }}
          // pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image src="/images/mainvisual/mainvisual-1.png" alt="" width={256} height={256}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/mainvisual/mainvisual-2.png" alt="" width={256} height={256}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/mainvisual/mainvisual-3.png" alt="" width={256} height={256}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default Mainvisual;

