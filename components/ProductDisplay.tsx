import React from 'react';
import { Plus } from 'lucide-react';

export const ProductDisplay: React.FC = () => {
  return (
    <section className="py-24 bg-[#EBE9E1] relative overflow-hidden">
      
      {/* Decorative Background Texture */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #78716c 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="relative inline-block mb-6">
              <span className="absolute -inset-1 border border-gold-400/30 transform rotate-2"></span>
              <span className="absolute -inset-1 border border-stone-900/10 transform -rotate-2"></span>
              <span className="relative block px-6 py-2 bg-[#EBE9E1] text-gold-700 tracking-[0.3em] text-sm font-bold uppercase z-10">
                קולקציית הפרימיום
              </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-serif text-stone-900 mb-4 tracking-tight">
            פאר היצירה <span className="italic font-light text-stone-500">היהודית</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>

        {/* The Equation: Image + Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-20">
            
            {/* Item 1: Siddur (Right Side) */}
            <div className="relative group w-full max-w-sm aspect-[3/4] transform hover:-translate-y-2 transition-transform duration-500">
                {/* Gold Glow Halo - Stronger & Always Visible */}
                <div className="absolute -inset-2 bg-gold-500/60 blur-2xl rounded-lg -z-10 opacity-100 transition-all duration-500"></div>
                
                {/* Image - No Border */}
                <img 
                    src="https://i.imgur.com/cPO80Wd.jpeg" 
                    alt="סידור תפילה מהודר" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl relative z-0"
                />
                <div className="absolute bottom-6 inset-x-0 text-center z-10">
                     <span className="bg-white/90 backdrop-blur px-6 py-2 font-serif text-xl font-bold text-stone-900 shadow-lg border border-gold-200">
                         סידור תפילה
                     </span>
                </div>
            </div>

            {/* Plus Sign */}
            <div className="relative flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center border border-gold-300 shadow-lg">
                    <Plus className="w-8 h-8 text-gold-600" strokeWidth={3} />
                </div>
            </div>

            {/* Item 2: Tehillim (Left Side) */}
            <div className="relative group w-full max-w-sm aspect-[3/4] transform hover:-translate-y-2 transition-transform duration-500">
                {/* Gold Glow Halo - Stronger & Always Visible */}
                <div className="absolute -inset-2 bg-gold-500/60 blur-2xl rounded-lg -z-10 opacity-100 transition-all duration-500"></div>

                {/* Image - No Border */}
                <img 
                    src="https://i.imgur.com/wOejemG.jpeg" 
                    alt="ספר תהילים מהודר" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl relative z-0"
                />
                <div className="absolute bottom-6 inset-x-0 text-center z-10">
                     <span className="bg-white/90 backdrop-blur px-6 py-2 font-serif text-xl font-bold text-stone-900 shadow-lg border border-gold-200">
                         ספר תהילים
                     </span>
                </div>
            </div>
        </div>

        {/* Text Below - Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-stone-300 pt-16">
            
            <div className="text-center px-4">
               <h3 className="text-2xl font-serif text-stone-900 mb-4">קריאה נעימה</h3>
               <p className="text-stone-600 font-light leading-relaxed">
                  אותיות גדולות וברורות על נייר בגוון שמנת, המקלות על העיניים ומאפשרות כוונה מלאה בתפילה.
               </p>
            </div>

            <div className="text-center px-4 border-r-0 md:border-r border-stone-300">
               <h3 className="text-2xl font-serif text-stone-900 mb-4">כריכה רכה ומהודרת</h3>
               <p className="text-stone-600 font-light leading-relaxed">
                  כריכה גמישה ונעימה למגע במראה עור יוקרתי, המשלבת נוחות שימוש עם עיצוב נקי ואלגנטי.
               </p>
            </div>

            <div className="text-center px-4 border-r-0 md:border-r border-stone-300">
               <h3 className="text-2xl font-serif text-stone-900 mb-4">מתנה מושלמת</h3>
               <p className="text-stone-600 font-light leading-relaxed">
                  שילוב מנצח של סידור ותהילים בסט אחד. מתנה מלאת משמעות לכל בית, חג או אירוע משמח.
               </p>
            </div>

        </div>

      </div>
    </section>
  );
};