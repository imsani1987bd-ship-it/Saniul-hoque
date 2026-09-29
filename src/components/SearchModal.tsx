import React, { useState, useMemo } from 'react';
import { Search, X, Tag, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: NewsArticle[];
  lang: 'bn' | 'en';
  onSelectArticle: (article: NewsArticle) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  lang,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');

  const popularTags = [
    'হবিগঞ্জ চা শিল্প',
    'খোয়াই নদী',
    'বানিয়াচং',
    'সাগরদিঘি',
    'চুনারুঘাট',
    'মাধবপুর',
    'রেমিট্যান্স',
    'নবীগঞ্জ',
  ];

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.titleEn.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.reporter.name.toLowerCase().includes(q) ||
        a.reporter.location.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query, articles]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/75 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-700 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'bn' ? 'হবিগঞ্জের সংবাদ বা বিষয় অনুসন্ধান করুন...' : 'Search Habiganj news or topics...'}
            className="flex-1 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
            >
              মুছুন
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tags or Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {!query.trim() ? (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                <Tag className="w-3.5 h-3.5 text-red-700" />
                <span>{lang === 'bn' ? 'জনপ্রিয় অনুসন্ধান বিষয়সমূহ' : 'Popular Search Tags'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-stone-500 text-sm">
              {lang === 'bn'
                ? `"${query}" সংক্রান্ত কোনো সংবাদ পাওয়া যায়নি। ভিন্ন শব্দ দিয়ে চেষ্টা করুন।`
                : `No articles matching "${query}". Try another term.`}
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-xs text-stone-400 block mb-2 font-mono tabular-nums">
                {lang === 'bn' ? `${searchResults.length} টি সংবাদ পাওয়া গেছে` : `${searchResults.length} articles found`}
              </span>
              {searchResults.map((article) => (
                <div
                  key={article.id}
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="p-3 rounded-lg border border-stone-200 hover:border-red-300 hover:bg-stone-50 transition-all cursor-pointer flex gap-3 group"
                >
                  <div className="w-20 h-14 rounded overflow-hidden bg-stone-100 shrink-0">
                    <img
                      src={article.imageUrl}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-800 group-hover:text-red-700 line-clamp-2 leading-snug">
                      {lang === 'bn' ? article.title : article.titleEn}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-stone-400 mt-1">
                      <span>{article.reporter.location}</span>
                      <span>·</span>
                      <span>{article.timeAgo}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
