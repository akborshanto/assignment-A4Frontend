import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


const banners = [
  {
    image: "https://images.unsplash.com/photo-1561642769-1bca263542e0?q=80&w=2940&auto=format&fit=crop",
    title: "Premium E-Bikes",
    description: "Discover our new collection of electric bikes"
  },
  {
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2940&auto=format&fit=crop",
    title: "Road Bikes",
    description: "Professional gear for serious cyclists"
  },
  {
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=2940&auto=format&fit=crop",
    title: "Mountain Bikes",
    description: "Conquer any terrain with confidence"
  }
];

const Banner = () => {
  return (
    <div className="pt-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[600px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center glass p-10 rounded-lg">
                  <h2 className="text-4xl font-bold text-white mb-6">{banner.title}</h2>
               {/*    <p className="text-xl text-white">{banner.description}</p> */}
                  <Link  to={'/all-Bicycle'} className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              
                  View All

                  </Link>
                
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
