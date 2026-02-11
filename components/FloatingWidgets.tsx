import React, { useState } from 'react';
import { Eye, X, ZoomIn, Sun, Type, Link, Monitor, RefreshCw } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [isAccessMenuOpen, setIsAccessMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const toggleAccessMenu = () => setIsAccessMenuOpen(!isAccessMenuOpen);

  const handleContrastToggle = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('contrast-125');
    if (grayscale) {
        setGrayscale(false);
        document.body.classList.remove('grayscale');
    }
  };

  const handleGrayscaleToggle = () => {
    setGrayscale(!grayscale);
    document.body.classList.toggle('grayscale');
    if (highContrast) {
        setHighContrast(false);
        document.body.classList.remove('contrast-125');
    }
  };

  const handleZoom = () => {
    const newSize = fontSize === 100 ? 110 : (fontSize === 110 ? 120 : 100);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const handleHighlightLinks = () => {
    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
        (el as HTMLElement).style.textDecoration = (el as HTMLElement).style.textDecoration === 'underline' ? '' : 'underline';
        (el as HTMLElement).style.fontWeight = (el as HTMLElement).style.fontWeight === 'bold' ? '' : 'bold';
    });
  };

  const handleReset = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
    setHighContrast(false);
    document.body.classList.remove('contrast-125');
    setGrayscale(false);
    document.body.classList.remove('grayscale');
    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
        (el as HTMLElement).style.textDecoration = '';
        (el as HTMLElement).style.fontWeight = '';
    });
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Right (Original Icon) */}
      <a
        href="https://wa.me/972546875924?text=שלום, אשמח לקבל פרטים נוספים על סט הסידור והתהילים."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 hover:shadow-green-900/20 group"
        aria-label="Contact on WhatsApp"
      >
        {/* Original WhatsApp SVG Icon */}
        <svg viewBox="0 0 24 24" width="32" height="32" className="fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1 bg-white text-stone-800 text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          דברו איתנו בוואטסאפ
        </span>
      </a>

      {/* Accessibility Menu - Left Side */}
      <div className="fixed top-1/3 left-0 z-50">
        {!isAccessMenuOpen ? (
          <button
            onClick={toggleAccessMenu}
            className="bg-stone-800 text-gold-50 p-3 rounded-r-lg shadow-lg hover:bg-stone-900 transition-colors border-l-0 border border-stone-700"
            aria-label="Accessibility Menu"
          >
            <Eye className="w-6 h-6" />
          </button>
        ) : (
          <div className="bg-white rounded-r-lg shadow-2xl border border-stone-200 w-72 p-5 animate-fade-in-right">
            <div className="flex justify-between items-center mb-5 border-b pb-3">
              <h3 className="font-bold text-lg text-stone-800">כלי נגישות</h3>
              <button onClick={toggleAccessMenu} className="text-stone-400 hover:text-red-500 bg-stone-100 p-1 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={handleZoom}
                className="w-full flex items-center gap-4 p-3 hover:bg-stone-50 rounded-lg text-right transition border border-transparent hover:border-stone-200"
              >
                <div className="bg-gold-50 p-2 rounded text-gold-700"><ZoomIn className="w-5 h-5" /></div>
                <span className="text-sm font-medium">הגדלת טקסט (X{fontSize === 100 ? '1' : (fontSize === 110 ? '2' : '3')})</span>
              </button>
              
              <button 
                onClick={handleContrastToggle}
                className={`w-full flex items-center gap-4 p-3 rounded-lg text-right transition border ${highContrast ? 'bg-stone-900 text-white border-stone-900' : 'hover:bg-stone-50 border-transparent hover:border-stone-200'}`}
              >
                <div className={`${highContrast ? 'bg-white/20 text-white' : 'bg-gold-50 text-gold-700'} p-2 rounded`}><Sun className="w-5 h-5" /></div>
                <span className="text-sm font-medium">ניגודיות חדה</span>
              </button>

              <button 
                onClick={handleGrayscaleToggle}
                className={`w-full flex items-center gap-4 p-3 rounded-lg text-right transition border ${grayscale ? 'bg-stone-200 border-stone-300' : 'hover:bg-stone-50 border-transparent hover:border-stone-200'}`}
              >
                <div className="bg-gold-50 p-2 rounded text-gold-700"><Monitor className="w-5 h-5" /></div>
                <span className="text-sm font-medium">גווני אפור</span>
              </button>

              <button 
                onClick={handleHighlightLinks}
                className="w-full flex items-center gap-4 p-3 hover:bg-stone-50 rounded-lg text-right transition border border-transparent hover:border-stone-200"
              >
                 <div className="bg-gold-50 p-2 rounded text-gold-700"><Link className="w-5 h-5" /></div>
                <span className="text-sm font-medium">הדגשת קישורים</span>
              </button>
              
              <button className="w-full flex items-center gap-4 p-3 hover:bg-stone-50 rounded-lg text-right transition border border-transparent hover:border-stone-200">
                <div className="bg-gold-50 p-2 rounded text-gold-700"><Type className="w-5 h-5" /></div>
                <span className="text-sm font-medium">גופן קריא</span>
              </button>

              <button 
                onClick={handleReset}
                className="w-full flex items-center gap-4 p-3 bg-red-50 hover:bg-red-100 rounded-lg text-right transition mt-4 text-red-600"
              >
                <div className="bg-white p-2 rounded"><RefreshCw className="w-5 h-5" /></div>
                <span className="text-sm font-medium">איפוס הגדרות</span>
              </button>
            </div>

            <div className="mt-4 text-xs text-center text-stone-400">
              תפריט נגישות מותאם
            </div>
          </div>
        )}
      </div>
    </>
  );
};