import React from 'react';
import { ArrowRight, Scale, FileText, Accessibility } from 'lucide-react';

interface LegalPageProps {
  type: 'REGULATIONS' | 'TERMS' | 'ACCESSIBILITY';
  onBack: () => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({ type, onBack }) => {
  
  const renderContent = () => {
    switch (type) {
      case 'REGULATIONS':
        return (
          <>
            <div className="flex items-center gap-3 mb-6 text-gold-600">
                <FileText className="w-8 h-8" />
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">תקנון האתר ומדיניות רכישה</h1>
            </div>
            
            <div className="space-y-8 text-stone-700 leading-relaxed text-lg font-light">
              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">1. כללי</h2>
                <p>
                  ברוכים הבאים לאתר "נְשָׁמָה" (להלן: "האתר"). האתר משמש כחנות וירטואלית למכירת מוצרי יודאיקה וספרי קודש.
                  הרכישה באתר כפופה לתנאים המפורטים בתקנון זה. אנא קראו את התקנון בקפידה, שכן עצם השימוש באתר וביצוע הזמנה מהווים הסכמה לתנאים אלו.
                  האמור בתקנון זה בלשון זכר נעשה מטעמי נוחות בלבד והוראותיו מתייחסות לנשים ולגברים כאחד.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">2. רכישה והזמנות</h2>
                <p>
                  האתר מאפשר רכישת סט סידור ותהילים מהודר בצורה נוחה ומאובטחת.
                  על מנת לבצע הזמנה, יש להזין פרטים מלאים ומדויקים בטופס ההזמנה.
                  מסירת פרטים כוזבים הינה עבירה פלילית והעושה כן צפוי להליכים משפטיים.
                  אישור ההזמנה הסופי יישלח ללקוח לאחר בדיקת המלאי ואישור פרטי המשלוח.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">3. מדיניות משלוחים ואספקה</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>המוצרים ישלחו לכתובת שנמסרה על ידי הלקוח בעת ההזמנה באמצעות שליח עד הבית.</li>
                    <li>זמן האספקה המשוער הינו עד 7 ימי עסקים מיום אישור ההזמנה, לא כולל ימי שישי, שבת וערבי חג.</li>
                    <li>האתר אינו אחראי לעיכובים באספקה הנובעים מסיבות שאינן בשליטתו, כגון שביתות, כוח עליון או תקלות בחברת השליחויות.</li>
                    <li>עלות המשלוח כלולה במחיר או מתווספת אליו, בהתאם למבצעים המפורסמים באתר מעת לעת.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">4. ביטול עסקה והחזרות</h2>
                <p>
                  ביטול עסקה ייעשה בהתאם להוראות חוק הגנת הצרכן, התשמ"א-1981.
                  לקוח רשאי לבטל את העסקה תוך 14 ימים מיום קבלת המוצר, ובתנאי שהמוצר לא נפגם ולא נעשה בו שימוש.
                  החזרת המוצר תתבצע באריזתו המקורית.
                  במקרה של ביטול שלא עקב פגם, דמי המשלוח להחזרת המוצר יחולו על הלקוח.
                  זיכוי כספי יבוצע לאחר קבלת המוצר ובדיקתו במחסני החברה.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">5. אחריות ושירות</h2>
                <p>
                  אנו ב"נְשָׁמָה" עושים את מירב המאמצים לספק מוצרים באיכות הגבוהה ביותר.
                  במידה והתקבל מוצר פגום, יש ליצור עמנו קשר מיידית (עד 48 שעות מקבלת המשלוח) לצורך החלפתו.
                  האחריות אינה מכסה נזק שנגרם כתוצאה משימוש לא סביר, רטיבות או בלאי טבעי.
                </p>
              </section>
            </div>
          </>
        );
      
      case 'TERMS':
        return (
          <>
             <div className="flex items-center gap-3 mb-6 text-gold-600">
                <Scale className="w-8 h-8" />
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">תנאי שימוש ומידע משפטי</h1>
            </div>

             <div className="space-y-8 text-stone-700 leading-relaxed text-lg font-light">
              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">1. קניין רוחני</h2>
                <p>
                  כל זכויות הקניין הרוחני באתר זה, לרבות זכויות היוצרים, הדגמים, השיטות והסודות המסחריים, הינם רכושה הבלעדי של "נְשָׁמָה" בלבד.
                  אין להעתיק, לשכפל, להפיץ, למכור, לשווק או לתרגם מידע כלשהו מן האתר, לרבות סימני מסחר, תמונות וטקסטים, ללא קבלת רשות מפורשת בכתב ומראש.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">2. הגבלת אחריות</h2>
                <p>
                  האתר בכללותו, כולל כל המידע המופיע בו, מוצע לציבור כמות שהוא (As Is).
                  הנהלת האתר לא תישא באחריות לכל נזק ישיר או עקיף, כספי או אחר, שייגרם למשתמש כתוצאה משימוש או הסתמכות על המידע המופיע באתר.
                  התמונות באתר מיועדות להמחשה בלבד וייתכנו הבדלים קלים בין התמונות לבין המוצרים בפועל.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">3. קישורים חיצוניים</h2>
                <p>
                  האתר עשוי להכיל קישורים לאתרי אינטרנט אחרים. אין לנהלת האתר שליטה על אתרים אלו ואין היא נושאת באחריות לתוכן המופיע בהם.
                  עצם הימצאות הקישור באתר אינה מלמדת על הסכמה לתוכן האתר המקושר או על קיומה של כל קשר עם מפעיליו.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">4. שינויים בתנאי השימוש</h2>
                <p>
                   הנהלת האתר שומרת לעצמה את הזכות לעדכן את תנאי השימוש מעת לעת, לפי שיקול דעתה הבלעדי וללא צורך במתן הודעה מוקדמת.
                   תוקפו של כל שינוי יחל מרגע פרסומו באתר.
                </p>
              </section>
            </div>
          </>
        );

      case 'ACCESSIBILITY':
        return (
          <>
            <div className="flex items-center gap-3 mb-6 text-gold-600">
                <Accessibility className="w-8 h-8" />
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">הצהרת נגישות</h1>
            </div>

            <div className="space-y-8 text-stone-700 leading-relaxed text-lg font-light">
              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">מחויבות לנגישות</h2>
                <p>
                  אנו ב"נְשָׁמָה" רואים חשיבות עליונה במתן שירות שוויוני ונגיש לכלל הגולשים, ובפרט לאנשים עם מוגבלויות.
                  אנו משקיעים משאבים רבים על מנת להפוך את האתר לנגיש ונוח לשימוש, בהתאם להוראות חוק שוויון זכויות לאנשים עם מוגבלות ותקנות הנגישות.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">רמת הנגישות באתר</h2>
                <p>
                  אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013.
                  ההתאמות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG 2.1 הבינלאומי.
                </p>
                <p className="mt-2">
                  האתר מספק תמיכה בדפוס השימוש המקובל להפעלה עם מקלדת בעזרת מקשי ה-Tab, Enter ו-Esc ליציאה מתפריטים וחלונות.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">אמצעי נגישות באתר</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>שימוש בצבעים בעלי ניגודיות גבוהה לשיפור הקריאות.</li>
                    <li>אפשרות להגדלת הטקסט באמצעות סרגל הנגישות המובנה באתר.</li>
                    <li>תגיות אלטרנטיביות (Alt Text) לתמונות ולמדיה גראפית.</li>
                    <li>מבנה קוד סמנטי וברור המותאם לקוראי מסך.</li>
                    <li>האתר מותאם לצפייה בכל סוגי המכשירים והדפדפנים הנפוצים.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-3">דרכי פניה בנושא נגישות</h2>
                <p>
                  למרות מאמצנו להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים שטרם הונגשו במלואם.
                  אם נתקלתם בבעיית נגישות, נשמח אם תעדכנו אותנו כדי שנוכל לטפל בה בהקדם.
                </p>
                <p className="mt-2 font-bold">פרטי רכז הנגישות:</p>
                <p>דוא"ל: support@neshama-judaica.co.il</p>
                <p>טלפון: 054-687-5924</p>
              </section>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EFEC] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-500 hover:text-stone-800 mb-8 transition-colors group font-medium"
        >
          <ArrowRight className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
          חזרה לדף הבית
        </button>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-200 rounded-sm">
           {renderContent()}
        </div>
      </div>
    </div>
  );
};
