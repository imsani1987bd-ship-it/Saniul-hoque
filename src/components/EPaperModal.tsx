import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

interface EPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'bn' | 'en';
}

export const EPaperModal: React.FC<EPaperModalProps> = ({ isOpen, onClose, lang }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  if (!isOpen) return null;

  const pageNames = [
    { num: 1, titleBn: 'প্রথম পাতা (প্রধান সংবাদ)', titleEn: 'Front Page (Main Headlines)' },
    { num: 2, titleBn: 'হবিগঞ্জ ও সিলেট বিভাগীয় পাতা', titleEn: 'Habiganj & Regional Page' },
    { num: 3, titleBn: 'অর্থনীতি, ব্যবসা ও প্রবাস', titleEn: 'Economy, Business & Diaspora' },
    { num: 4, titleBn: 'খেলাধুলা ও বিনোদন', titleEn: 'Sports & Entertainment' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-stone-900 rounded-xl shadow-2xl max-w-4xl w-full h-[90vh] flex flex-col overflow-hidden border border-stone-800 text-stone-100">
        
        {/* Header */}
        <div className="bg-stone-950 px-4 sm:px-6 py-3 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-red-600 font-serif font-black text-xl">হবিগঞ্জ২৪</span>
            <span className="text-xs text-stone-400">
              {lang === 'bn' ? 'আজকের মুদ্রিত ই-পেপার সংস্করণ' : "Today's Printed E-Paper Edition"}
            </span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1 text-xs text-stone-300 hover:text-white bg-stone-800 px-2.5 py-1.5 rounded cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ডাউনলোড' : 'Download PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Switcher Bar */}
        <div className="bg-stone-850 px-4 py-2 border-b border-stone-800 flex items-center justify-between text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-1 rounded hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-semibold text-amber-300">
              {lang === 'bn' ? `পৃষ্ঠা ${currentPage} / ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
            </span>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="p-1 rounded hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <span className="font-medium text-stone-300">
            {lang === 'bn' ? pageNames[currentPage - 1].titleBn : pageNames[currentPage - 1].titleEn}
          </span>
        </div>

        {/* E-Paper Broadsheet Canvas */}
        <div className="flex-1 bg-stone-950 p-4 sm:p-6 overflow-auto flex justify-center items-start">
          <div className="bg-[#fcfaf6] text-stone-900 w-full max-w-2xl p-6 sm:p-8 shadow-2xl rounded border border-stone-300 min-h-[700px] flex flex-col justify-between">
            
            {/* Broadsheet Masthead */}
            <div>
              <div className="border-b-2 border-stone-900 pb-3 mb-4 text-center">
                <div className="flex items-center justify-between text-[11px] text-stone-600 border-b border-stone-300 pb-1 mb-2 font-mono">
                  <span>বর্ষ ১২ | সংখ্যা ২৩৪</span>
                  <span>হবিগঞ্জ, মঙ্গলবার ২৯ সেপ্টেম্বর ২০২৬</span>
                  <span>মূল্য: ৳ ৫.০০</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-red-800">
                  হবিগঞ্জ২৪
                </h1>
                <p className="text-[11px] text-stone-700 tracking-wider font-semibold mt-1">
                  সত্য ও সাহসের সার্বক্ষণিক সঙ্গী | নির্ভীক আঞ্চলিক ও জাতীয় দৈনিক
                </p>
              </div>

              {/* Page 1 Mock Layout */}
              {currentPage === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-300 pb-4">
                    <span className="text-[10px] font-bold uppercase text-red-700">প্রধান সংবাদ</span>
                    <h2 className="text-xl font-serif font-bold text-stone-900 leading-snug mt-1">
                      চুনারুঘাট ও বাহুবলের ২৪টি চা বাগানে রেকর্ড উৎপাদন: চা শ্রমিকদের আবাসন ও শিক্ষা উন্নয়নে বিশেষ প্রকল্প
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      <p className="text-xs text-stone-700 leading-relaxed text-justify">
                        চলতি মৌসুমে অনুকূল আবহাওয়া ও সময়োপযোগী সেচ ব্যবস্থাপনায় হবিগঞ্জের চুনারুঘাট ও বাহুবল উপত্যকার ২৪টি চা বাগানে রেকর্ড পরিমাণ চা পাতা উৎপাদন হয়েছে। চট্টগ্রাম নিলাম কেন্দ্রে হবিগঞ্জের তৈরি ‘অর্থোডক্স ব্ল্যাক টি’ সর্বোচ্চ মূল্যে বিক্রির রেকর্ড গড়েছে।
                      </p>
                      <div className="aspect-16/10 bg-stone-200 rounded overflow-hidden">
                        <img
                          src="/src/assets/images/habiganj_lead_tea_garden_1790690174056.jpg"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="border-r border-stone-300 pr-4">
                      <h3 className="text-xs font-serif font-bold text-stone-900 mb-1">
                        খোয়াই নদীর স্থায়ী শহররক্ষা বাঁধ নির্মাণে ১২০০ কোটি টাকার প্রকল্প অনুমোদন
                      </h3>
                      <p className="text-[11px] text-stone-600 line-clamp-3 leading-relaxed">
                        ভারতের ত্রিপুরা থেকে নেমে আসা খরস্রোতা খোয়াই নদীর স্থায়ী বাঁধ নির্মাণে একনেকে ঐতিহাসিক অনুমোদন মিলেছে।
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-serif font-bold text-stone-900 mb-1">
                        বিশ্বের বৃহত্তম গ্রাম বানিয়াচংয়ের সাগরদিঘি ঘিরে পর্যটন মহাপরিকল্পনা
                      </h3>
                      <p className="text-[11px] text-stone-600 line-clamp-3 leading-relaxed">
                        ঐতিহাসিক ৬৬ একর আয়তনের সাগরদিঘি সংরক্ষণ ও পরিবেশবান্ধব পর্যটন অবকাঠামো গড়ে তোলার উদ্যোগ।
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Page 2 Mock Layout */}
              {currentPage === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-300 pb-3">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase">উপজেলা সংবাদ পরিক্রমা</span>
                    <h2 className="text-lg font-serif font-bold text-stone-900 mt-1">
                      নবীগঞ্জের দিনারপুরে মাল্টার বাণিজ্যিক বিপ্লব ও মাধবপুরে ৬ লেন মহাসড়কের দ্রুত অগ্রগতি
                    </h2>
                  </div>
                  <div className="aspect-16/9 bg-stone-200 rounded overflow-hidden">
                    <img
                      src="/src/assets/images/habiganj_baniachong_haor_1790690189870.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed text-justify">
                    শায়েস্তাগঞ্জ শতবর্ষী রেল জংশন আধুনিকায়ন, আজমিরীগঞ্জ ও লাখাইয়ের বিস্তীর্ণ হাওরাঞ্চলে বোরো ধানের বীজতলা প্রস্তুতের চিত্র নিয়ে বিস্তারিত আঞ্চলিক খবর।
                  </p>
                </div>
              )}

              {/* Page 3 Mock Layout */}
              {currentPage === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-300 pb-3">
                    <span className="text-[10px] font-bold text-sky-800 uppercase">অর্থনীতি ও প্রবাস পরিক্রমা</span>
                    <h2 className="text-lg font-serif font-bold text-stone-900 mt-1">
                      যুক্তরাজ্য ও ইউরোপের প্রবাসীদের পাঠানো রেমিট্যান্সে হবিগঞ্জের অবস্থান শীর্ষে
                    </h2>
                  </div>
                  <div className="aspect-16/9 bg-stone-200 rounded overflow-hidden">
                    <img
                      src="/src/assets/images/habiganj_brindaban_college_1790690213214.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed text-justify">
                    হবিগঞ্জ সদর, নবীগঞ্জ ও বাহুবলের প্রবাসীদের পাঠানো রেমিট্যান্স স্থানীয় অর্থনীতিতে এনে দিয়েছে নতুন গতি। ব্যাংকিং সুবিধা সহজ করায় বৈধ পথে লেনদেন বাড়ছে।
                  </p>
                </div>
              )}

              {/* Page 4 Mock Layout */}
              {currentPage === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-300 pb-3">
                    <span className="text-[10px] font-bold text-red-800 uppercase">খেলাধুলা ও সংস্কৃতি</span>
                    <h2 className="text-lg font-serif font-bold text-stone-900 mt-1">
                      হবিগঞ্জ জেলা স্টেডিয়ামে জেলা প্রশাসক গোল্ডকাপে নবীগঞ্জ দলের শুভ সূচনা
                    </h2>
                  </div>
                  <div className="aspect-16/9 bg-stone-200 rounded overflow-hidden">
                    <img
                      src="/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed text-justify">
                    খোয়াই নদীর তীরে বাউল শাহ আবদুল করিম ও রাধারমণ স্মরণোৎসবে শ্রোতাদের ঢল। ভাটি অঞ্চলের সাংস্কৃতিক ঐতিহ্য রক্ষায় তরুণ প্রজন্মের অংশগ্রহণ।
                  </p>
                </div>
              )}

            </div>

            {/* Broadsheet Footer */}
            <div className="border-t border-stone-300 pt-2 mt-6 flex items-center justify-between text-[10px] text-stone-500 font-mono">
              <span>সম্পাদক: আহমেদ জামান চৌধুরী</span>
              <span>হবিগঞ্জ প্রেসক্লাব ভবন, কোর্ট স্টেশন রোড</span>
              <span>www.habigonj24.com</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
