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
    <div className="min-h-screen bg-stone-50 pt-32 pb-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Area - Optimized for Mobile & Desktop */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 border-b border-stone-200 pb-6">
            <button 
              onClick={onBack}
              className="group flex items-center text-stone-600 hover:text-gold-700 transition-colors py-2 px-1 -mr-2"
            >
              <ArrowRight className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform text-gold-500" />
              <span className="font-bold text-lg">חזרה לדף הבית</span>
            </button>
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-4 md:mt-0">סיום הזמנה</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Order Summary */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 sticky top-32">
              <h2 className="font-bold text-lg mb-4 border-b border-stone-100 pb-2">סיכום הזמנה</h2>
              
              <div className="flex gap-4 mb-4">
                <img src="https://i.imgur.com/iXWRw9d.jpeg" className="w-20 h-20 rounded-lg object-cover border border-stone-100 shadow-sm" alt="סט סידור ותהילים" />
                <div>
                  <h3 className="font-bold text-stone-800 font-serif text-lg">סט תפילה מלכותי</h3>
                  <p className="text-sm text-stone-500">סידור + תהילים (כריכה רכה)</p>
                  <p className="text-gold-600 font-bold mt-1 text-lg">300 ₪</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4 mb-4">
                <div className="flex justify-between">
                  <span>סכום ביניים</span>
                  <span>300 ₪</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>משלוח עם שליח</span>
                  <span className="text-xs font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full border border-gold-100">תשלום במזומן לשליח</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-2xl text-stone-900 border-t border-stone-100 pt-4 font-serif">
                <span>סה"כ לתשלום</span>
                <span>300 ₪</span>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4" />
                <span>האתר מאובטח בתקן PCI</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-8">
              
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-gold-50 text-sm font-sans font-bold shadow-md">1</span>
                  פרטים אישיים
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">שם מלא</label>
                    <input required type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition bg-stone-50 focus:bg-white" placeholder="ישראל ישראלי" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">טלפון נייד</label>
                    <input required type="tel" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition bg-stone-50 focus:bg-white" placeholder="050-0000000" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-stone-700 mb-2">אימייל לקבלת חשבונית</label>
                    <input required type="email" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition bg-stone-50 focus:bg-white" placeholder="your@email.com" />
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-stone-100"></div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-gold-50 text-sm font-sans font-bold shadow-md">2</span>
                  כתובת למשלוח
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">עיר / ישוב</label>
                    <input required type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition bg-stone-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">רחוב ומספר בית</label>
                    <input required type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition bg-stone-50 focus:bg-white" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-stone-700 mb-2">הערות לשליח (קוד ללובי / קומה / דירה)</label>
                    <textarea rows={2} className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition bg-stone-50 focus:bg-white" />
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-stone-100"></div>

              {/* Payment Method - CASH ONLY */}
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-gold-50 text-sm font-sans font-bold shadow-md">3</span>
                  אמצעי תשלום
                </h3>
                
                <div className="bg-gold-50/50 p-2 rounded-xl border border-gold-100">
                    <label className="relative flex items-start gap-4 p-6 cursor-pointer rounded-lg border-2 border-gold-500 bg-white shadow-md transition-all hover:shadow-lg">
                        <input type="radio" name="payment" defaultChecked className="mt-1 w-5 h-5 text-gold-600 focus:ring-gold-500 border-gray-300 accent-gold-600" />
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-bold text-stone-900 text-xl font-serif">תשלום במזומן לשליח</span>
                                <div className="bg-gold-100 p-1.5 rounded-full">
                                   <Wallet className="w-5 h-5 text-gold-700" />
                                </div>
                            </div>
                            <p className="text-stone-600 text-base leading-relaxed">
                                התשלום המלא (300 ₪) יתבצע במזומן ישירות לשליח בעת קבלת החבילה בביתכם.
                                <br/>
                                <span className="text-sm font-bold text-gold-700 mt-1 inline-block">אין צורך בכרטיס אשראי באתר.</span>
                            </p>
                        </div>
                    </label>
                </div>
              </div>

              <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group w-full bg-stone-900 text-gold-50 py-5 rounded-lg font-serif font-bold text-xl shadow-xl hover:bg-gold-600 hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-3"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        מבצע הזמנה...
                      </>
                    ) : (
                      <>
                        <Banknote className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        אשר הזמנה - שלמו במזומן
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-stone-400 mt-4">
                      בלחיצה על "אשר הזמנה" אני מאשר/ת את תנאי השימוש ומדיניות הפרטיות
                  </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};