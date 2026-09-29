import React from 'react';
import { Mail, Phone, MapPin, Globe, Shield, ArrowUp } from 'lucide-react';
import { UPAZILAS } from '../data/mockNews';
import { CategoryKey, UpazilaKey } from '../types/news';

interface FooterProps {
  lang: 'bn' | 'en';
  onSelectCategory: (cat: CategoryKey) => void;
  onSelectUpazila: (up: UpazilaKey) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onSelectCategory,
  onSelectUpazila,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t-4 border-red-700">
      {/* Top Banner in Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b border-stone-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Editorial Column */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-2xl tracking-tight text-white">
              <span className="text-red-600">হবিগঞ্জ</span>24<span className="text-red-600">.com</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {lang === 'bn'
                ? 'হবিগঞ্জ জেলা ও বৃহত্তর সিলেটের গণমানুষের কণ্ঠস্বর। নির্ভীক তথ্যপ্রবাহ, হাওর ও চা শিল্পের সার্বক্ষণিক সংবাদ।'
                : 'The voice of the people in Habiganj district and Greater Sylhet. Unbiased 24/7 news reporting.'}
            </p>
            <div className="text-xs text-stone-400 space-y-1 pt-2 border-t border-stone-800">
              <p><strong className="text-stone-200">সম্পাদক ও প্রকাশক:</strong> আহমেদ জামান চৌধুরী</p>
              <p><strong className="text-stone-200">নির্বাহী সম্পাদক:</strong> মো. রফিকুল হাসান</p>
              <p><strong className="text-stone-200">বার্তা সম্পাদক:</strong> কাজী মাহবুবুল করিম</p>
            </div>
          </div>

          {/* Upazilas Quick Rail */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
              {lang === 'bn' ? 'উপজেলা সংবাদ ডেস্ক' : 'Upazila Desks'}
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-400">
              {UPAZILAS.map((up) => (
                <button
                  key={up.id}
                  onClick={() => {
                    onSelectUpazila(up.id);
                    scrollToTop();
                  }}
                  className="text-left hover:text-white transition-colors cursor-pointer py-0.5 truncate"
                >
                  {lang === 'bn' ? up.nameBn : up.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
              {lang === 'bn' ? 'প্রধান বিভাগসমূহ' : 'Key Categories'}
            </h4>
            <div className="space-y-1.5 text-xs text-stone-400">
              <button
                onClick={() => { onSelectCategory('all'); scrollToTop(); }}
                className="block hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'প্রচ্ছদ ও ব্রেকিং' : 'Home & Breaking'}
              </button>
              <button
                onClick={() => { onSelectCategory('tea-industry'); scrollToTop(); }}
                className="block hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'চা শিল্প ও কৃষি সংবাদ' : 'Tea Industry & Agro'}
              </button>
              <button
                onClick={() => { onSelectCategory('economy'); scrollToTop(); }}
                className="block hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'অর্থনীতি ও ব্যবসা' : 'Economy & Business'}
              </button>
              <button
                onClick={() => { onSelectCategory('diaspora'); scrollToTop(); }}
                className="block hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'যুক্তরাজ্য ও প্রবাস কথা' : 'UK & Diaspora'}
              </button>
              <button
                onClick={() => { onSelectCategory('opinion'); scrollToTop(); }}
                className="block hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'সম্পাদকীয় ও কলাম' : 'Editorial & Opinion'}
              </button>
            </div>
          </div>

          {/* Contact & Office Address */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
              {lang === 'bn' ? 'যোগাযোগ ও সম্পাদকীয় কার্যালয়' : 'Editorial Office & Contact'}
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>
                  {lang === 'bn'
                    ? 'হবিগঞ্জ প্রেসক্লাব ভবন (৩য় তলা), কোর্ট স্টেশন রোড, হবিগঞ্জ-৩৩০০'
                    : 'Habiganj Press Club Building, Court Station Road, Habiganj-3300'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                <span>+৮৮০২৯৯-৬৬৬xxxx</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <span>news@habigonj24.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-stone-500 shrink-0" />
                <span>www.habigonj24.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-y-2">
        <p>
          © ২০২৬ হবিগঞ্জ২৪.কম | সর্বস্বত্ব সংরক্ষিত। অনুমতি ছাড়া এই ওয়েবসাইটের কোনো লেখা বা ছবি ব্যবহার বেআইনি।
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-stone-400"
        >
          <span>{lang === 'bn' ? 'শীর্ষে ফিরে যান' : 'Back to Top'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
