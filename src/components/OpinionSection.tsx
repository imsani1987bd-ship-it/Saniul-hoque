import React from 'react';
import { Quote, Feather, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface OpinionSectionProps {
  articles: NewsArticle[];
  lang: 'bn' | 'en';
  onSelectArticle: (article: NewsArticle) => void;
}

export const OpinionSection: React.FC<OpinionSectionProps> = ({
  articles,
  lang,
  onSelectArticle,
}) => {
  const opinionArticles = articles.filter((a) => a.category === 'opinion');

  return (
    <section className="py-8 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-6">
          <div className="flex items-center gap-3">
            <Feather className="w-5 h-5 text-red-700" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              {lang === 'bn' ? 'মতামত, কলাম ও সম্পাদকীয়' : 'Opinion, Columns & Editorial'}
            </h2>
          </div>
          <span className="text-xs text-stone-500">
            {lang === 'bn' ? 'সুচিন্তিত বিশ্লেষণ ও নাগরিক ভাবনা' : 'Analysis & Citizen Perspectives'}
          </span>
        </div>

        {/* 3 Columns of Opinion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opinionArticles.concat(articles.slice(0, 2)).slice(0, 3).map((article, idx) => (
            <div
              key={article.id + idx}
              onClick={() => onSelectArticle(article)}
              className="bg-[#faf8f5] p-5 rounded-lg border border-stone-200 hover:border-red-300 transition-colors group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 text-stone-300 group-hover:text-red-700 transition-colors mb-3" />
                
                <h3 className="font-serif font-bold text-stone-900 group-hover:text-red-700 transition-colors text-base line-clamp-2 leading-snug mb-2">
                  {lang === 'bn' ? article.title : article.titleEn}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {lang === 'bn' ? article.summary : article.summaryEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-stone-800 block">
                    {article.reporter.name}
                  </span>
                  <span className="text-[10px] text-stone-500">
                    {article.reporter.role}
                  </span>
                </div>
                <span className="text-[11px] text-red-700 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  {lang === 'bn' ? 'পড়ুন' : 'Read'} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
