/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1730082460730-573793ec7c8f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "كباب سوداني",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
    alt: "مشويات سودانية",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=2070",
    alt: "أطباق شرقية",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh)]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">مطعم حوش ادريس</h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            نقدم لكم أشهى وألذ المأكولات السودانية الأصيلة في المملكة العربية السعودية
          </p>
        </div>
      </motion.div>
    </section>
  );
}