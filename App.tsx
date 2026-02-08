import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProductDisplay } from './components/ProductDisplay';
import { Checkout } from './components/Checkout';
import { FloatingWidgets } from './components/FloatingWidgets';
import { AppView } from './types';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuyClick = () => {
    setView(AppView.CHECKOUT);
    window.scrollTo(0, 0);
  };

  const handleBackToStore = () => {
    setView(AppView.LANDING);
    window.scrollTo(0, 0);
  };

  const handleSuccess = () => {
    setView(AppView.SUCCESS);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F0EFEC] font-sans text-stone-900 rtl selection:bg-gold-300 selection:text-stone-900">
      
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-[#E6E4DD]/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
          
          {/* Logo (Centered) - Stacked (Sun above Text), Bold & Embedded - Adjusted Size */}
          <button 
            onClick={handleBackToStore}
            className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group active:scale-95 ${
              isScrolled 
                ? 'scale-75 origin-top' 
                : 'scale-100'
            }`}
          >
             {/* Half Sun Graphic */}
             <div className="relative w-20 h-10 overflow-hidden mb-1 transition-transform duration-500 group-hover:scale-110 drop-shadow-md">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-gold-600 via-gold-500 to-transparent rounded-full opacity-100 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(201,159,67,0.7)]"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gold-700"></div>
                {/* Rays */}
                <svg className="absolute top-0 left-0 w-full h-full text-gold-700 drop-shadow-sm" viewBox="0 0 64 32">
                  <path d="M32 20 L32 2" stroke="currentColor" strokeWidth="2" opacity="1" />
                  <path d="M32 20 L44 4" stroke="currentColor" strokeWidth="2" opacity="0.9" />
                  <path d="M32 20 L20 4" stroke="currentColor" strokeWidth="2" opacity="0.9" />
                  <path d="M32 20 L54 10" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                  <path d="M32 20 L10 10" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                </svg>
             </div>
             {/* Text */}
             <h1 className="text-5xl font-serif font-bold tracking-[0.2em] text-stone-900 leading-none group-hover:text-gold-800 transition-colors drop-shadow-[0_2px_0px_rgba(255,255,255,0.7)] shadow-black">נשמה</h1>
          </button>
          
        </div>
      </header>

      {/* Main Content */}
      <main>
        {view === AppView.LANDING && (
          <>
            <Hero onBuyClick={handleBuyClick} />
            
            {/* Mission / About Section */}
            <section className="py-24 bg-white relative">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif font-bold text-stone-800 mb-8 tracking-wide">ברוכים הבאים ל-נְשָׁמָה</h2>
                
                <div className="w-16 h-[2px] bg-gold-400 mx-auto mb-10"></div>
                
                <div className="space-y-8 text-xl text-stone-600 font-light leading-relaxed font-serif">
                  <p>
                    המותג שלנו נולד מתוך שליחות אחת עמוקה: להזכיר לכל אחד מאיתנו כי בתוכו פועמת <span className="text-gold-700 font-medium">נשמה אלוקית</span>, חלק א-לוה ממעל, המשתוקקת לחיבור עם בוראה.
                  </p>
                  
                  <p>
                    ב<span className="font-bold text-gold-700">נְשָׁמָה</span>, אנו יוצרים יודאיקה יוקרתית מתוך אמונה שחפצי המצווה המלווים את חיינו ראויים <span className="text-gold-700 font-medium">להדר הגבוה ביותר</span>. היופי המוקפד והאיכות ללא פשרות הם הדרך שלנו לכבד את הקדושה, לעורר את הכוונה שבלב ולייצר רגעים של התקרבות נקייה להקדוש ברוך הוא.
                  </p>
                  
                  <p>
                    הצבנו לעצמנו מטרה: להגיע לכל בית בישראל, לקרב כל יהודי ויהודייה אל האור שבמסורת, ולהפוך את רגעי התפילה והקודש לחוויה עוטפת, יוקרתית ומרגשת.
                  </p>

                  <p className="text-2xl font-bold text-stone-800 pt-4">
                    נְשָׁמָה. כי לכל נשמה מגיע <span className="text-gold-600">לזרוח</span>.
                  </p>
                </div>
              </div>
            </section>

            <ProductDisplay />
          </>
        )}

        {view === AppView.CHECKOUT && (
          <Checkout onBack={handleBackToStore} onSuccess={handleSuccess} />
        )}

        {view === AppView.SUCCESS && (
          <div className="min-h-screen flex items-center justify-center px-4 bg-[#F0EFEC]">
            <div className="text-center bg-white p-16 shadow-2xl max-w-lg border border-stone-200">
              <div className="w-20 h-20 bg-stone-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold-200">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">תודה על הזמנתך</h2>
              <p className="text-stone-600 text-xl mb-10 font-light leading-relaxed">
                ההזמנה נקלטה בהצלחה במערכת. <br />
                אנו נערכים למשלוח הסט המהודר אליך.
                <br/>
                <span className="text-sm font-bold mt-2 block">התשלום יתבצע במזומן לשליח.</span>
              </p>
              <button 
                onClick={handleBackToStore}
                className="text-stone-900 border-b border-stone-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-all uppercase tracking-widest text-sm"
              >
                חזרה לאתר
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#E6E4DD] py-12 border-t border-stone-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Footer Logo Graphic */}
          <div className="relative w-16 h-8 overflow-hidden mb-1 opacity-70">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-t from-gold-600 via-gold-400 to-transparent rounded-full opacity-80"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gold-600/50"></div>
            <svg className="absolute top-0 left-0 w-full h-full text-gold-600" viewBox="0 0 64 32">
              <path d="M32 20 L32 4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <path d="M32 20 L42 6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              <path d="M32 20 L22 6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              <path d="M32 20 L50 12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <path d="M32 20 L14 12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
          
          <div className="font-serif text-2xl font-bold text-stone-800 mb-4 tracking-widest">נשמה</div>
          <p className="text-stone-600 text-sm mb-8">יודאיקה בסטנדרט אחר</p>
          <div className="flex justify-center gap-6 text-sm text-stone-500 font-light">
            <a href="#" className="hover:text-stone-900 transition-colors">תקנון</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-stone-900 transition-colors">פרטיות</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-stone-900 transition-colors">נגישות</a>
          </div>
          <p className="text-stone-400 text-xs mt-8">© 2024 כל הזכויות שמורות</p>
        </div>
      </footer>

      <FloatingWidgets />
    </div>
  );
}