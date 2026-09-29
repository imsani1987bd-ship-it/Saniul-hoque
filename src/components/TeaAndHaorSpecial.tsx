import React from 'react';
import { Leaf, Waves, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface TeaAndHaorSpecialProps {
  articles: NewsArticle[];
  lang: 'bn' | 'en';
  onSelectArticle: (article: NewsArticle) => void;
}

export const TeaAndHaorSpecial: React.FC<TeaAndHaorSpecialProps> = ({
  articles,
  lang,
  onSelectArticle,
}) => {
  // Tea articles (Chunarughat, Bahubal) and Haor articles (Baniachong, Ajmiriganj, Lakhai)
  const teaArticles = articles.filter(
    (a) => a.category === 'tea-industry' || a.upazila === 'chunarughat' || a.upazila === 'bahubal'
  );
  const haorArticles = articles.filter(
    (a) => a.upazila === 'baniachong' || a.upazila === 'ajmiriganj' || a.upazila === 'lakhai'
  );

  return (
    <section className="py-8 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-emerald-700" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              {lang === 'bn' ? 'হাওর ও চা বাগান স্পেশাল' : 'Haor & Tea Estate Special'}
            </h2>
          </div>
          <span className="text-xs text-stone-500 hidden sm:inline">
            {lang === 'bn' ? 'হবিগঞ্জের প্রকৃতি, ঐতিহ্য ও জনজীবন' : 'Habiganj Nature, Heritage & Livelihood'}
          </span>
        </div>

        {/* 2-Column Split: Left Tea Gardens, Right Haor Wetlands */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Box 1: Tea Garden Heritage */}
          <div className="bg-white rounded-lg p-5 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm mb-3">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'bn' ? 'চা উপত্যকা ও পাহাড়ি জনপদ' : 'Tea Valleys & Hill Estates'}</span>
              </div>

              {teaArticles.slice(0, 1).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="group cursor-pointer mb-4"
                >
                  <div className="aspect-16/9 rounded-md overflow-hidden bg-stone-100 mb-3">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-stone-900 group-hover:text-emerald-800 transition-colors text-base line-clamp-2 leading-snug">
                    {lang === 'bn' ? item.title : item.titleEn}
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {lang === 'bn' ? item.summary : item.summaryEn}
                  </p>
                  <div className="mt-2 text-[11px] text-stone-400 flex items-center gap-2">
                    <span>{item.reporter.location}</span>
                    <span>·</span>
                    <span>{item.timeAgo}</span>
                  </div>
                </div>
              ))}

              {/* Secondary links */}
              <div className="space-y-2 border-t border-stone-100 pt-3">
                {teaArticles.slice(1, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectArticle(item)}
                    className="group cursor-pointer py-1 flex items-start justify-between gap-2"
                  >
                    <h4 className="text-xs text-stone-700 font-medium group-hover:text-emerald-800 transition-colors line-clamp-1">
                      {lang === 'bn' ? item.title : item.titleEn}
                    </h4>
                    <span className="text-[10px] text-stone-400 shrink-0">{item.timeAgo}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100">
              <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide">
                {lang === 'bn' ? 'চুনারুঘাট · বাহুবল · মাধবপুর সুরমা উপত্যকা' : 'Chunarughat · Bahubal · Surma Valley'}
              </span>
            </div>
          </div>

          {/* Box 2: Haor & Wetland Heartland */}
          <div className="bg-white rounded-lg p-5 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sky-800 font-semibold text-sm mb-3">
                <Waves className="w-4 h-4 text-sky-600" />
                <span>{lang === 'bn' ? 'হাওরাঞ্চল, নদী ও বোরো শস্য' : 'Haor Wetlands & Rivers'}</span>
              </div>

              {haorArticles.slice(0, 1).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="group cursor-pointer mb-4"
                >
                  <div className="aspect-16/9 rounded-md overflow-hidden bg-stone-100 mb-3">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-stone-900 group-hover:text-sky-800 transition-colors text-base line-clamp-2 leading-snug">
                    {lang === 'bn' ? item.title : item.titleEn}
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {lang === 'bn' ? item.summary : item.summaryEn}
                  </p>
                  <div className="mt-2 text-[11px] text-stone-400 flex items-center gap-2">
                    <span>{item.reporter.location}</span>
                    <span>·</span>
                    <span>{item.timeAgo}</span>
                  </div>
                </div>
              ))}

              {/* Secondary links */}
              <div className="space-y-2 border-t border-stone-100 pt-3">
                {haorArticles.slice(1, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectArticle(item)}
                    className="group cursor-pointer py-1 flex items-start justify-between gap-2"
                  >
                    <h4 className="text-xs text-stone-700 font-medium group-hover:text-sky-800 transition-colors line-clamp-1">
                      {lang === 'bn' ? item.title : item.titleEn}
                    </h4>
                    <span className="text-[10px] text-stone-400 shrink-0">{item.timeAgo}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100">
              <span className="text-[11px] font-semibold text-sky-800 uppercase tracking-wide">
                {lang === 'bn' ? 'বানিয়াচং · আজমিরীগঞ্জ · কালনী ও কুশিয়ারা অববাহিকা' : 'Baniachong · Ajmiriganj · Kalni Basin'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
