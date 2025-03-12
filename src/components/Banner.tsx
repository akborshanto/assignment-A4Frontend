import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const banners = [
  {
    image: "https://images.unsplash.com/photo-1561642769-1bca263542e0?q=80&w=2940&auto=format&fit=crop",
    title: "Premium E-Bikes",
    description: "Experience the future of cycling with our cutting-edge electric bikes",
    accent: "from-blue-600/80 to-purple-600/80"
  },
  {
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2940&auto=format&fit=crop",
    title: "Road Bikes",
    description: "Professional gear engineered for peak performance",
    accent: "from-purple-600/80 to-pink-600/80"
  },
  {
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=2940&auto=format&fit=crop",
    title: "Mountain Bikes",
    description: "Dominate any terrain with confidence and control",
    accent: "from-emerald-600/80 to-blue-600/80"
  }
];

export const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !opacity-100'
        }}
        effect="fade"
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        className="h-[85vh] relative"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full group">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="backdrop-blur-xl bg-white/10 p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                      {banner.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-8">
                      {banner.description}
                    </p>
                    <Link 
                      to="/all-Bicycle"
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${banner.accent} text-white rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5`}
                    >
                      Explore Collection
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#667eea]/80 to-transparent pointer-events-none" />
    </div>
  );
};
