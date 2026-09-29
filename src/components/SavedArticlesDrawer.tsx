import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface SavedArticlesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: NewsArticle[];
  lang: 'bn' | 'en';
  onSelectArticle: (article: NewsArticle) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const SavedArticlesDrawer: React.FC<SavedArticlesDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  lang,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-red-700" />
            <h3 className="font-serif font-bold text-base text-stone-900">
              {lang === 'bn' ? 'সংরক্ষিত সংবাদ তালিকা' : 'Saved Reading List'}
            </h3>
            <span className="text-xs font-mono text-stone-500 tabular-nums">
              ({savedArticles.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-stone-100">
          {savedArticles.length === 0 ? (
            <div className="text-center py-16 text-stone-400">
              <Bookmark className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium text-stone-600">
                {lang === 'bn' ? 'কোনো সংবাদ সংরক্ষিত নেই' : 'No saved articles yet'}
              </p>
              <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
                {lang === 'bn'
                  ? 'সংবাদের বুকমার্ক আইকনে ক্লিক করে পরবর্তীতে পড়ার জন্য সংরক্ষণ করুন।'
                  : 'Click the bookmark icon on any article card to save it for later reading.'}
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.id}
                className="py-3.5 flex items-start gap-3 group"
              >
                <div
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="w-18 h-14 rounded overflow-hidden bg-stone-100 shrink-0 cursor-pointer"
                >
                  <img
                    src={article.imageUrl}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="text-xs sm:text-sm font-medium text-stone-800 hover:text-red-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {lang === 'bn' ? article.title : article.titleEn}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-stone-400 mt-1">
                    <span>{article.timeAgo}</span>
                    <button
                      onClick={() => onRemoveBookmark(article.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                      title={lang === 'bn' ? 'মুছে ফেলুন' : 'Remove'}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs">
            <button
              onClick={onClearAll}
              className="text-stone-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'সব মুছুন' : 'Clear All'}
            </button>
            <button
              onClick={onClose}
              className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
