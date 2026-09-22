"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: "/images/Sedan_driving_on_illuminated_bridge_2K_202609071535.jpeg",
    alt: "Sedan driving on illuminated bridge",
    title: "Uncompromising Performance",
    subtitle: "Navigate the northern terrains in our bulletproof certified 4x4 SUVs.",
  },
  {
    id: 2,
    image: "/images/Decorated_luxury_wedding_cars_pa…_2K_202609071534.jpeg",
    alt: "Decorated luxury wedding cars",
    title: "Premium Wedding Fleets",
    subtitle: "Make your special day unforgettable with our luxury convoys.",
  },
  {
    id: 3,
    image: "/images/Luxury_SUV_in_studio_2K_202609071534.jpeg",
    alt: "Luxury SUV in studio",
    title: "Pakistan's Premier Fleet",
    subtitle: "From city hatchbacks to armored escorts, meticulously maintained.",
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev >= totalSlides ? 1 : prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide(prev => prev >= totalSlides ? 1 : prev + 1);
  const prevSlide = () => setCurrentSlide(prev => prev <= 1 ? totalSlides : prev - 1);

  return (
    <div className="w-full pt-14 md:pt-6 pb-4 px-4 md:px-8 flex justify-center">
      <section className="relative w-full max-w-[1280px] overflow-hidden rounded-[2rem] bg-primary-container min-h-[75svh] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col justify-center shadow-2xl" id="hero-slider">
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 transform ease-out ${
              currentSlide === slide.id 
                ? 'opacity-100 scale-105' 
                : 'opacity-0 scale-100 pointer-events-none'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover object-center w-full h-full"
              priority={slide.id === 1}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-primary-container/75 w-full h-full"></div>
          </div>
        ))}

        {/* Side Navigation Arrows */}
        <button 
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 backdrop-blur-md flex items-center justify-center transition-all text-on-secondary" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px]">west</span>
        </button>
        <button 
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 backdrop-blur-md flex items-center justify-center transition-all text-on-secondary" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px]">east</span>
        </button>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-16 md:py-24 flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-space-xs mb-space-md">
            <span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-on-secondary font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-on-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
              100% Insured Fleet
            </span>
            <span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-on-secondary font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>price_check</span>
              Zero Hidden Charges
            </span>
            <span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-on-secondary font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-[#25D366]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
              Instant WhatsApp Confirmation
            </span>
          </div>

          <h1 className="font-display-lg md:font-display-xl text-display-lg md:text-display-xl text-on-secondary max-w-4xl tracking-tight leading-tight mb-space-sm drop-shadow-sm">
            Premium & Reliable Car Rentals <span className="text-secondary-fixed">for Every Journey</span>
          </h1>
          
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-surface-container-high max-w-2xl mx-auto leading-relaxed mb-space-xl px-4 md:px-0">
            From economical city drives to luxury 4x4 adventures across Pakistan. Verified models, transparent tariffs, and 24/7 priority roadside dispatch.
          </p>
          <button 
            className="px-space-2xl py-4 rounded-full bg-primary hover:bg-primary/90 text-on-primary font-label-lg text-label-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => {
              document.getElementById('fleet-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Browse Fleet
          </button>
        </div>
      </section>
    </div>
  );
};
