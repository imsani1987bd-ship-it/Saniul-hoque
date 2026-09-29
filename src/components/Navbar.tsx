import React, { useState } from 'react';
import { Search, Send, Menu, X } from 'lucide-react';
import { CategoryKey } from '../types/news';

interface NavbarProps {
  lang: 'bn' | 'en';
  activeCategory: CategoryKey;
  onSelectCategory: (category: CategoryKey) => void;
  onOpenSearch: () => void;
  onOpenSubmitTip: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  activeCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenSubmitTip,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { key: CategoryKey; labelBn: string; labelEn: string }[] = [
    { key: 'all', labelBn: 'প্রচ্ছদ', labelEn: 'Home' },
    { key: 'habiganj', labelBn: 'হবিগঞ্জ জেলা', labelEn: 'Habiganj' },
    { key: 'tea-industry', labelBn: 'চা ও কৃষি', labelEn: 'Tea & Agro' },
    { key: 'economy', labelBn: 'অর্থনীতি', labelEn: 'Economy' },
    { key: 'diaspora', labelBn: 'প্রবাস', labelEn: 'Diaspora' },
    { key: 'opinion', labelBn: 'মতামত', labelEn: 'Opinion' },
  ];

  const handleNavClick = (key: CategoryKey) => {
    onSelectCategory(key);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Bar 3-Zone Contract: [Brand title] — [4-6 nav links] — [1-2 primary actions] */}
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('all')}
            className="text-left font-serif font-bold tracking-tight text-stone-900 group cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-red-700 tracking-tight">
              {lang === 'bn' ? 'হবিগঞ্জ' : 'Habigonj'}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-stone-900">
              24<span className="text-red-700">.com</span>
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-base font-medium text-stone-700">
            {navItems.map((item) => {
              const isActive = activeCategory === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative py-1 whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'text-red-700 font-bold'
                      : 'hover:text-red-700 text-stone-700'
                  }`}
                >
                  <span>{lang === 'bn' ? item.labelBn : item.labelEn}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
              title={lang === 'bn' ? 'অনুসন্ধান' : 'Search'}
              aria-label="Search articles"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenSubmitTip}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-md shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'সংবাদ পাঠান' : 'Send News Tip'}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  activeCategory === item.key
                    ? 'bg-red-50 text-red-700 font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {lang === 'bn' ? item.labelBn : item.labelEn}
              </button>
            ))}
            <div className="pt-2 border-t border-stone-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSubmitTip();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সংবাদ পাঠান (নাগরিক সাংবাদিকতা)' : 'Send Citizen News Lead'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
