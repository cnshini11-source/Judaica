import React, { useState } from 'react';
import { ShieldCheck, Truck, ArrowRight, Wallet, Banknote } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
  onSuccess: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBack, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <button 
          onClick={onBack}
          className="flex items-center text-stone-500 hover:text-stone-800 mb-8 transition-colors group"
        >
          <ArrowRight className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
          חזרה לדף המוצר
        </button>

        <h1 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center md:text-right">סיום הזמנה</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Order Summary */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 sticky top-24">
              <h2 className="font-bold text-lg mb-4 border-b border-stone-100 pb-2">סיכום הזמנה</h2>
              
              <div className="flex gap-4 mb-4">
                <img src="https://picsum.photos/100/100?random=1" className="w-20 h-20 rounded object-cover bg-stone-100" alt="Thumbnail" />
                <div>
                  <h3 className="font-bold text-stone-800">סט תפילה מלכותי</h3>
                  <p className="text-sm text-stone-500">סידור + תהילים</p>
                  <p className="text-gold-600 font-bold mt-1">300 ₪</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4 mb-4">
                <div className="flex justify-between">
                  <span>סכום ביניים</span>
                  <span>300 ₪</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>משלוח עם שליח</span>
                  <span className="text-xs font-bold text-gold-600">תשלום במזומן לשליח</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg text-stone-900 border-t border-stone-100 pt-4">
                <span>סה"כ לתשלום</span>
                <span>300 ₪</span>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-400">
                <ShieldCheck className="w-3 h-3" />
                <span>הזמנה מאובטחת</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-8">
              
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold-100 text-gold-700 text-xs font-sans font-bold">1</span>
                  פרטים אישיים
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">שם מלא</label>
                    <input required type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">טלפון נייד</label>
                    <input required type="tel" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-stone-700 mb-1">אימייל</label>
                    <input required type="email" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold-100 text-gold-700 text-xs font-sans font-bold">2</span>
                  כתובת למשלוח
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">עיר</label>
                    <input required type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">רחוב ומספר</label>
                    <input required type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-stone-700 mb-1">הערות לשליח (קוד ללובי / קומה)</label>
                    <textarea rows={2} className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition" />
                  </div>
                </div>
              </div>

              {/* Payment Method - CASH ONLY */}
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold-100 text-gold-700 text-xs font-sans font-bold">3</span>
                  אמצעי תשלום
                </h3>
                
                <div className="bg-stone-50 p-1 rounded-xl border border-stone-200">
                    <label className="relative flex items-start gap-4 p-6 cursor-pointer rounded-lg border-2 border-gold-500 bg-white shadow-sm transition-all">
                        <input type="radio" name="payment" defaultChecked className="mt-1 w-4 h-4 text-gold-600 focus:ring-gold-500 border-gray-300" />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-stone-900 text-lg">תשלום במזומן לשליח</span>
                                <Wallet className="w-5 h-5 text-gold-600" />
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                התשלום המלא (300 ₪ + דמי משלוח) יתבצע במזומן ישירות לשליח בעת קבלת החבילה.
                                <br/>
                                <span className="text-xs text-stone-500">* אנא הכינו סכום מדויק במידת האפשר.</span>
                            </p>
                        </div>
                    </label>
                </div>
              </div>

              <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-stone-900 text-gold-50 py-5 rounded-sm font-serif font-bold text-xl shadow-lg hover:bg-stone-800 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        מבצע הזמנה...
                      </>
                    ) : (
                      <>
                        <Banknote className="w-6 h-6" />
                        אשר הזמנה - תשלום במזומן
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-stone-400 mt-4">
                      בלחיצה על "אשר הזמנה" אני מאשר/ת את תנאי השימוש
                  </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};