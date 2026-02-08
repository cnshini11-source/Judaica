import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onBuyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: "url('https://i.imgur.com/Gym2KLK.jpeg')" }}
        ></div>
        {/* Elegant Overlays */}
        <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0EFEC] via-[#F0EFEC]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0EFEC]/30 via-transparent to-[#F0EFEC]"></div>
      </div>

      {/* Main Content Container - Smaller Card Size (max-w-xl, p-8) */}
      <div className="relative z-10 max-w-xl mx-auto p-6 md:p-10 border border-gold-400/30 bg-white/20 backdrop-blur-md shadow-2xl animate-fade-in-up">
        
        {/* Decorative Corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-600"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-600"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-600"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-600"></div>

        <div className="space-y-6">
          
          {/* Top Badge */}
          <div className="inline-block border-b-2 border-gold-300 pb-1 mb-2">
            <span className="text-stone-900 text-sm md:text-base font-serif tracking-widest uppercase font-bold drop-shadow-sm">
              הנמכר ביותר למתנות ואירועים
            </span>
          </div>

          {/* Title Section */}
          <div>
            <h1 className="text-4xl md:text-7xl font-serif text-stone-900 leading-none mb-2 drop-shadow-md">
              סט תפילה מלכותי
            </h1>
            <h2 className="text-2xl md:text-4xl font-serif text-gold-800 italic font-light drop-shadow-sm">
              סידור ותהילים
            </h2>
          </div>

          {/* Description */}
          <div className="py-4 max-w-lg mx-auto">
            <p className="text-lg text-stone-900 font-sans font-medium leading-relaxed drop-shadow-sm">
              חיבור מושלם בין עיצוב יוקרתי לתוכן מקודש.
              <br />
              <span className="font-bold">מהדורה מוגבלת בכריכה קשה עם הטבעות זהב.</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-stone-600/50 mx-auto"></div>

          {/* Pricing */}
          <div className="flex flex-col items-center gap-2">
             <span className="text-stone-800 font-serif text-sm tracking-wide font-medium">מחיר מיוחד לזמן מוגבל</span>
             <div className="flex items-baseline gap-4">
                <span className="text-xl text-stone-600 line-through decoration-gold-600 decoration-1 font-serif font-light">450 ₪</span>
                <span className="text-4xl md:text-5xl font-serif font-bold text-stone-900 drop-shadow-sm">300 ₪</span>
             </div>
          </div>

          {/* CTA Button - Smaller & Transparent */}
          <div className="pt-4">
            <button
              onClick={onBuyClick}
              className="group relative px-6 py-2 bg-transparent border border-stone-900 text-stone-900 text-base font-serif tracking-wide hover:bg-stone-900 hover:text-gold-50 hover:border-transparent transition-all duration-300"
            >
              <span className="relative z-10 font-bold">לרכישה והזמנה מהירה</span>
            </button>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-500 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <ChevronDown className="w-10 h-10" strokeWidth={1} />
      </div>
    </section>
  );
};