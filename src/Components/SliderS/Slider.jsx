import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import attraction from './SliderData'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default () => {
  return (
   <div className="mx-10 my-10">
     <Swiper
    
    pagination={{el:'.SliderPagination', clickable: true }}
    navigation={{nextEl:".pre", prevEl:".next", clickable:true}}
   
      modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={2}
      effect={'coverflow'}
      loop={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate:100,
        stretch:0,
        depth:100,
        modifier:2.5
      }}
    >
      {attraction.map((item, index) => (
  <SwiperSlide key={index}>
    <img src={item.imageUrl} alt={item.name} className='rounded-md'/>
  </SwiperSlide>
))}
<div className=" grid grid-cols-3  place-items-center">
  <div className=" next border p-2 rounded-md items-center  flex hover:bg-gray-100">
   <ion-icon name="chevron-back-outline"></ion-icon>
  </div>
  <div className="SliderPagination items-center flex justify-center
  "></div>
  <div className="pre border p-2 rounded-md items-center  flex  hover:bg-gray-100">
  <ion-icon name="chevron-forward-outline"></ion-icon>
  </div>
 
</div>
    </Swiper>
   </div>
  );
};

