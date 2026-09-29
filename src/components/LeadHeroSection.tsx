import React, { useState } from 'react';
import { Eye, Clock, Share2, Bookmark, Flame } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface LeadHeroSectionProps {
  leadArticle: NewsArticle;
  featuredArticles: NewsArticle[];
  latestArticles: NewsArticle[];
  mostReadArticles: NewsArticle[];
  lang: 'bn' | 'en';
  onSelectArticle: (article: NewsArticle) => void;
  onBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
}

export const LeadHeroSection: React.FC<LeadHeroSectionProps> = ({
  leadArticle,
  featuredArticles,
  latestArticles,
  mostReadArticles,
  lang,
  onSelectArticle,
  onBookmark,
  isBookmarked,
}) => {
  const [streamTab, setStreamTab] = useState<'latest' | 'popular'>('latest');

  const streamList = streamTab === 'latest' ? latestArticles : mostReadArticles;

  return (
    <section className="py-6 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 3-Tier Salience Layout: Left/Center Dominant Lead & Features (8 cols) + Right Live Stream Column (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Editorial Block (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* TIER 1: The Dominant Lead Story */}
            <article className="group cursor-pointer">
              <div
                onClick={() => onSelectArticle(leadArticle)}
                className="relative overflow-hidden rounded-lg bg-stone-100 aspect-16/9 mb-4"
              >
                <img
                  src={leadArticle.imageUrl}
                  alt={leadArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                {/* Gradient scrim for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                
                {/* Overlay Metadata & Kicker */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-2">
                    <span className="uppercase tracking-wider">
                      {lang === 'bn' ? 'প্রধান সংবাদ' : 'Lead Story'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{leadArticle.timeAgo}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadArticle.readTime}</span>
                  </div>

                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-snug group-hover:text-amber-100 transition-colors balance">
                    {lang === 'bn' ? leadArticle.title : leadArticle.titleEn}
                  </h1>

                  <p className="mt-2.5 text-stone-200 text-xs sm:text-sm line-clamp-2 leading-relaxed max-w-3xl">
                    {lang === 'bn' ? leadArticle.summary : leadArticle.summaryEn}
                  </p>
                </div>
              </div>

              {/* Lead metadata bar */}
              <div className="flex items-center justify-between text-xs text-stone-500 px-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-800">{leadArticle.reporter.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle.reporter.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 tabular-nums">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{leadArticle.views.toLocaleString()}</span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookmark(leadArticle.id);
                    }}
                    className={`hover:text-red-700 transition-colors p-1 cursor-pointer ${
                      isBookmarked(leadArticle.id) ? 'text-red-700' : 'text-stone-400'
                    }`}
                    title={isBookmarked(leadArticle.id) ? 'সংরক্ষিত' : 'পড়ুন পরে সংরক্ষণ করুন'}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>

            {/* TIER 2: Secondary Features Grid (3 structured cards) */}
            <div className="pt-4 border-t border-stone-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featuredArticles.slice(0, 3).map((article) => (
                  <article
                    key={article.id}
                    onClick={() => onSelectArticle(article)}
                    className="group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-4/3 rounded-md overflow-hidden bg-stone-100 mb-3">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Quiet unboxed metadata */}
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1.5">
                        <span className="font-semibold text-red-700 uppercase tracking-wide">
                          {article.upazila ? article.upazila.replace('-', ' ') : article.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{article.timeAgo}</span>
                      </div>

                      <h3 className="text-sm font-serif font-bold text-stone-900 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug">
                        {lang === 'bn' ? article.title : article.titleEn}
                      </h3>

                      <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {lang === 'bn' ? article.summary : article.summaryEn}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                      <span>{article.reporter.name}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookmark(article.id);
                        }}
                        className={`hover:text-red-700 transition-colors cursor-pointer ${
                          isBookmarked(article.id) ? 'text-red-700' : 'text-stone-400'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* TIER 3: Right Column - Live News Stream (Latest / Most Read) */}
          <div className="lg:col-span-4 bg-white rounded-lg border border-stone-200 p-4 sm:p-5 h-fit shadow-xs">
            {/* Stream Tab Controller */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStreamTab('latest')}
                  className={`text-sm font-bold pb-1 cursor-pointer transition-colors relative ${
                    streamTab === 'latest'
                      ? 'text-red-700'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <span>{lang === 'bn' ? 'সর্বশেষ সংবাদ' : 'Latest News'}</span>
                  {streamTab === 'latest' && (
                    <span className="absolute bottom-[-13px] left-0 w-full h-0.5 bg-red-700" />
                  )}
                </button>
                <span className="text-stone-300">/</span>
                <button
                  onClick={() => setStreamTab('popular')}
                  className={`text-sm font-bold pb-1 cursor-pointer transition-colors relative ${
                    streamTab === 'popular'
                      ? 'text-red-700'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <span>{lang === 'bn' ? 'সর্বাধিক পঠিত' : 'Most Read'}</span>
                  {streamTab === 'popular' && (
                    <span className="absolute bottom-[-13px] left-0 w-full h-0.5 bg-red-700" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span>{lang === 'bn' ? 'লাইভ আপডেট' : 'Live'}</span>
              </div>
            </div>

            {/* Stream List */}
            <div className="divide-y divide-stone-100 space-y-3.5 pt-1">
              {streamList.slice(0, 6).map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="pt-3 group cursor-pointer flex items-start gap-3.5"
                >
                  {/* Editorial human index */}
                  <span className="font-serif text-lg font-bold text-stone-300 group-hover:text-red-700 transition-colors w-5 shrink-0 tabular-nums">
                    {idx + 1}.
                  </span>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-stone-800 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug">
                      {lang === 'bn' ? item.title : item.titleEn}
                    </h4>
                    
                    {/* Quiet metadata */}
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-stone-400">
                      <span className="text-stone-500">{item.reporter.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{item.timeAgo}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick newsletter/alert box */}
            <div className="mt-6 pt-4 border-t border-stone-200 bg-stone-50 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-4 rounded-b-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 mb-1">
                <Flame className="w-4 h-4 text-red-600" />
                <span>{lang === 'bn' ? 'হবিগঞ্জের তাৎক্ষণিক খবর পান' : 'Get Habiganj News Alerts'}</span>
              </div>
              <p className="text-[11px] text-stone-500 mb-2.5">
                {lang === 'bn'
                  ? 'হবিগঞ্জ জেলা ও ৯ উপজেলার প্রতিটি গুরুত্বপূর্ণ ঘটনা আপনার স্ক্রিনে।'
                  : 'Important updates from all 9 upazilas delivered in real time.'}
              </p>
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  placeholder={lang === 'bn' ? 'আপনার ইমেইল বা মোবাইল...' : 'Your email or mobile...'}
                  className="flex-1 bg-white border border-stone-300 text-xs px-2.5 py-1.5 rounded focus:outline-none focus:border-red-700"
                />
                <button
                  onClick={() => alert(lang === 'bn' ? 'ধন্যবাদ! হবিগঞ্জ২৪ নোটিফিকেশনে যুক্ত হওয়ার জন্য।' : 'Subscribed to Habigonj24 news alerts!')}
                  className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-3 py-1.5 rounded cursor-pointer whitespace-nowrap transition-colors"
                >
                  {lang === 'bn' ? 'যুক্ত হোন' : 'Join'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
