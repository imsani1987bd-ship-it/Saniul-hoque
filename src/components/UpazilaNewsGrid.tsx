import React from 'react';
import { Bookmark, Clock, Eye, MapPin } from 'lucide-react';
import { NewsArticle, UpazilaKey } from '../types/news';
import { UPAZILAS } from '../data/mockNews';

interface UpazilaNewsGridProps {
  articles: NewsArticle[];
  selectedUpazila: UpazilaKey;
  lang: 'bn' | 'en';
  onSelectArticle: (article: NewsArticle) => void;
  onBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

export const UpazilaNewsGrid: React.FC<UpazilaNewsGridProps> = ({
  articles,
  selectedUpazila,
  lang,
  onSelectArticle,
  onBookmark,
  isBookmarked,
}) => {
  const currentUpazila = UPAZILAS.find((u) => u.id === selectedUpazila);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-red-700" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              {selectedUpazila === 'all'
                ? lang === 'bn'
                  ? 'হবিগঞ্জ জেলা ও সমগ্র উপজেলা সংবাদ'
                  : 'Habiganj District & Regional Reports'
                : lang === 'bn'
                ? `${currentUpazila?.nameBn} সংবাদ`
                : `${currentUpazila?.nameEn} News`}
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-mono tabular-nums">
            {lang === 'bn' ? `${articles.length} টি সংবাদ` : `${articles.length} articles`}
          </span>
        </div>

        {articles.length === 0 ? (
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-10 text-center">
            <MapPin className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <p className="text-sm text-stone-600 font-medium">
              {lang === 'bn'
                ? 'এই বিভাগে বর্তমানে কোনো নতুন সংবাদ নেই। নতুন তথ্য পেতে নাগরিক সংবাদ পাঠান।'
                : 'No news found in this selection. Send a news tip to report an update.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const bookmarked = isBookmarked(article.id);
              return (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="bg-white rounded-lg border border-stone-200 overflow-hidden hover:border-stone-300 transition-all shadow-2xs hover:shadow-xs group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4 sm:p-5">
                      {/* Quiet unboxed metadata */}
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-2">
                        <span className="font-semibold text-red-700 uppercase tracking-wide">
                          {article.upazila ? article.upazila.replace('-', ' ') : article.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{article.timeAgo}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug">
                        {lang === 'bn' ? article.title : article.titleEn}
                      </h3>

                      {/* Summary */}
                      <p className="mt-2 text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {lang === 'bn' ? article.summary : article.summaryEn}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 sm:px-5 py-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="truncate max-w-[160px] font-medium text-stone-700">
                      {article.reporter.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[11px] tabular-nums text-stone-400">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{article.views.toLocaleString()}</span>
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookmark(article.id);
                        }}
                        className={`p-1 transition-colors cursor-pointer ${
                          bookmarked ? 'text-red-700' : 'text-stone-400 hover:text-red-700'
                        }`}
                        title={bookmarked ? 'সংরক্ষিত' : 'পড়ুন পরে'}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
