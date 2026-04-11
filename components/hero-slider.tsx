'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Premium Engine Oils',
    description: 'Advanced lubrication technology for maximum engine performance and protection',
    image: 'url("/im1.png")',
  },
  {
    id: 2,
    title: 'Industrial Excellence',
    description: 'Trusted by manufacturers worldwide for superior quality and reliability',
    image: 'url("/im2.png")',
  },
  {
    id: 3,
    title: 'Hydraulic Solutions',
    description: 'Precision-engineered hydraulic fluids for demanding applications',
    image: 'url("/im3.png")',
  },
  {
    id: 4,
    title: 'Grease Products',
    description: 'Heavy-duty lubrication for machinery and equipment maintenance',
    image: 'url("/im4.png")',
  },
  {
    id: 5,
    title: 'Specialty Lubricants',
    description: 'Custom formulations for specialized industrial applications',
    image: 'url("/im5.png")',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: slide.image, backgroundSize: 'cover', backgroundPosition: 'center' }}
      data-section="hero"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center text-white">
        <div className="space-y-6">
          <h1 
            key={`title-${currentSlide}`}
            className="text-5xl md:text-7xl font-bold text-balance leading-tight"
            style={{
              animationName: 'slideInUp',
              animationDuration: '0.8s',
              animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              animationFillMode: 'both',
            }}
          >
            {slide.title}
          </h1>
          <p 
            key={`desc-${currentSlide}`}
            className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto"
            style={{
              animationName: 'slideInUp',
              animationDuration: '0.8s',
              animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              animationDelay: '0.1s',
              animationFillMode: 'both',
            }}
          >
            {slide.description}
          </p>
          <div 
            key={`button-${currentSlide}`}
            style={{
              animationName: 'slideInUp',
              animationDuration: '0.8s',
              animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              animationDelay: '0.2s',
              animationFillMode: 'both',
            }}
          >
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded transition-all duration-300 inline-block hover:shadow-lg hover:shadow-amber-600/50 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Bottom Arrows */}
      <button
        onClick={prevSlide}
        className="absolute bottom-8 left-8 z-20 group"
        aria-label="Previous slide"
      >
        <div className="relative w-14 h-14">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-600 group-hover:border-amber-400 transition-colors duration-300" />
          {/* Inner circle background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-600/5 group-hover:from-amber-600/40 group-hover:to-amber-600/15 transition-colors duration-300" />
          {/* Arrow icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronLeft size={24} className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-8 right-8 z-20 group"
        aria-label="Next slide"
      >
        <div className="relative w-14 h-14">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-600 group-hover:border-amber-400 transition-colors duration-300" />
          {/* Inner circle background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-600/5 group-hover:from-amber-600/40 group-hover:to-amber-600/15 transition-colors duration-300" />
          {/* Arrow icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronRight size={24} className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300 group-hover:-translate-x-0.5" />
          </div>
        </div>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-amber-600 w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
