import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  onBuyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      
      {/* Background Image with Elegant Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: "url('https://i.imgur.com/Gym2KLK.jpeg')" }}
        ></div>
        {/* Softer overlays for better text integration without a box */}
        <div className="absolute inset-0 bg-[#F0EFEC]/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0EFEC] via-[#F0EFEC]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0EFEC]/50 via-[#F0EFEC]/20 to-[#F0EFEC]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent"></div>
      </div>

      {/* Main Content - No Box, just floating elements */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
        
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6 mt-8">
           <div className="h-[1px] w-8 bg-gold-400"></div>
           <span className="text-gold-800 text-xs md:text-base font-serif tracking-[0.25em] uppercase font-extrabold drop-shadow-sm">
              הנמכר ביותר למתנות ואירועים
           </span>
           <div className="h-[1px] w-8 bg-gold-400"></div>
        </div>

        {/* Main Titles */}
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-stone-900 leading-[1.1] mb-2 drop-shadow-md tracking-tight">
          סט תפילה מלכותי
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif text-stone-600 italic font-medium mb-6 mt-4 md:mt-0 md:mb-8">
          סידור ותהילים
        </h2>

        {/* Description - Updated for Soft Cover with emphasis */}
        <div className="max-w-2xl mx-auto space-y-3 mb-10">
          <p className="text-xl md:text-3xl text-stone-900 font-serif font-medium leading-relaxed drop-shadow-sm">
            חיבור מושלם בין <span className="font-bold text-stone-900">עיצוב יוקרתי</span> לתוכן מקודש.
          </p>
          <p className="text-lg md:text-xl text-stone-800 font-normal leading-relaxed">
            מהדורה מוגבלת ב<span className="font-bold text-stone-900">כריכה רכה</span> וגמישה ב<span className="font-bold">מגע קטיפתי</span> עם <span className="font-bold text-gold-700">הטבעות זהב</span>.
          </p>
        </div>

        {/* Pricing Display - Elegant & Large */}
        <div className="flex flex-col items-center gap-1 mb-10 relative">
           {/* Subtle background glow for price */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold-200/40 blur-3xl rounded-full -z-10"></div>
           
           <span className="text-gold-800 font-serif text-lg tracking-widest font-bold">מחיר מיוחד לזמן מוגבל</span>
           <div className="flex items-baseline gap-6">
              <span className="text-2xl md:text-3xl text-stone-400 line-through decoration-gold-400/60 decoration-1 font-serif font-light">380 ₪</span>
              <span className="text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-500 via-gold-600 to-gold-800 drop-shadow-sm">300 ₪</span>
           </div>
        </div>

        {/* CTA Button - Minimalist Solid */}
        <button
          onClick={onBuyClick}
          className="group relative px-8 py-3 md:px-10 md:py-4 bg-stone-900 text-gold-50 text-base md:text-lg font-serif tracking-widest hover:bg-gold-600 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden font-bold"
        >
          <span className="relative z-10 flex items-center gap-3">
             לרכישה והזמנה מהירה
          </span>
          {/* Shine effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        </button>

        {/* Bottom Decorative Line */}
        <div className="h-16 w-[1px] bg-gradient-to-b from-stone-300 to-transparent mt-12 opacity-50"></div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <ChevronDown className="w-8 h-8" strokeWidth={1} />
      </div>
    </section>
  );
};