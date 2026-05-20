"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Turn Your Idea Into Reality",
      subtitle: "Join the world's fastest growing startup community",
      description: "Share, validate, and grow your startup ideas with thousands of innovators and mentors.",
      cta: "Explore Ideas",
      bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop",
    },
    {
      id: 2,
      title: "Innovation Starts Here",
      subtitle: "From Brainstorm to Breakthrough",
      description: "Connect with like-minded founders, get feedback, and find co-founders who believe in your vision.",
      cta: "Explore Ideas",
      bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop",
    },
    {
      id: 3,
      title: "Build the Future Today",
      subtitle: "Startup Ideas Worth Sharing",
      description: "Discover trending ideas, pitch your startup, and get the support you need to scale.",
      cta: "Explore Ideas",
      bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        speed={800}                    // Smooth transition
        fadeEffect={{
          crossFade: true              // ← এটা খুব জরুরি
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                  <p className="text-yellow-400 text-lg font-medium tracking-widest mb-4">
                    {slide.subtitle}
                  </p>
                  
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
                    {slide.description}
                  </p>
                  
                  <Link href="/ideas">
                  <button 
                    onClick={() => document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-gray-900 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-lg font-semibold px-10 py-4 rounded-full inline-flex items-center gap-3 group"
                  >
                    {slide.cta}
                    <span className="group-hover:translate-x-2 transition">→</span>
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination absolute bottom-12 left-1/2 -translate-x-1/2 z-20"></div>
    </div>
  );
};

export default HeroSection;