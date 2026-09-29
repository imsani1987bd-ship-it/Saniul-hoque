import React, { useState, useEffect, useMemo } from 'react';
import { TopUtilityBar } from './components/TopUtilityBar';
import { Navbar } from './components/Navbar';
import { BreakingTicker } from './components/BreakingTicker';
import { UpazilaFilterBar } from './components/UpazilaFilterBar';
import { LeadHeroSection } from './components/LeadHeroSection';
import { TeaAndHaorSpecial } from './components/TeaAndHaorSpecial';
import { UpazilaNewsGrid } from './components/UpazilaNewsGrid';
import { PhotoVideoSection } from './components/PhotoVideoSection';
import { OpinionSection } from './components/OpinionSection';
import { ArticleModal } from './components/ArticleModal';
import { SubmitNewsModal } from './components/SubmitNewsModal';
import { EPaperModal } from './components/EPaperModal';
import { SavedArticlesDrawer } from './components/SavedArticlesDrawer';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { INITIAL_NEWS, UPAZILAS } from './data/mockNews';
import { NewsArticle, CategoryKey, UpazilaKey, NewsComment } from './types/news';

export default function App() {
  // Localization & Preferences
  const [lang, setLang] = useState<'bn' | 'en'>(() => {
    return (localStorage.getItem('habigonj24_lang') as 'bn' | 'en') || 'bn';
  });

  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // News State
  const [articles, setArticles] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem('habigonj24_articles');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_NEWS;
      }
    }
    return INITIAL_NEWS;
  });

  // Navigation & Filtering
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [selectedUpazila, setSelectedUpazila] = useState<UpazilaKey>('all');

  // Modals & Drawers
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isSubmitTipOpen, setIsSubmitTipOpen] = useState(false);
  const [isEPaperOpen, setIsEPaperOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Bookmarks
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('habigonj24_bookmarks');
    return saved ? JSON.parse(saved) : ['art-01', 'art-02'];
  });

  // Citizen submission banner notification
  const [newNotice, setNewNotice] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('habigonj24_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('habigonj24_bookmarks', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem('habigonj24_articles', JSON.stringify(articles));
  }, [articles]);

  // Bookmark toggle
  const handleToggleBookmark = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => savedIds.includes(id);

  // Comments handler
  const handleAddComment = (articleId: string, comment: NewsComment) => {
    setArticles((prev) =>
      prev.map((art) => {
        if (art.id === articleId) {
          return {
            ...art,
            comments: [comment, ...art.comments],
          };
        }
        return art;
      })
    );

    if (selectedArticle && selectedArticle.id === articleId) {
      setSelectedArticle((prev) =>
        prev
          ? {
              ...prev,
              comments: [comment, ...prev.comments],
            }
          : null
      );
    }
  };

  // Article selection & increment views
  const handleSelectArticle = (article: NewsArticle) => {
    setArticles((prev) =>
      prev.map((a) => (a.id === article.id ? { ...a, views: a.views + 1 } : a))
    );
    setSelectedArticle({
      ...article,
      views: article.views + 1,
    });
  };

  // Publish citizen news tip
  const handlePublishCitizenTip = (newArticle: NewsArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
    setNewNotice(
      lang === 'bn'
        ? `নাগরিক সংবাদ "${newArticle.title}" প্রকাশিত হয়েছে!`
        : `Citizen report "${newArticle.title}" has been published!`
    );
    setTimeout(() => setNewNotice(null), 5000);
  };

  // Ticker click handler
  const handleSelectHeadline = (index: number) => {
    if (articles[index]) {
      handleSelectArticle(articles[index]);
    }
  };

  // Upazila news counts
  const newsCountByUpazila = useMemo(() => {
    const counts: Record<string, number> = {};
    articles.forEach((a) => {
      if (a.upazila) {
        counts[a.upazila] = (counts[a.upazila] || 0) + 1;
      }
    });
    return counts;
  }, [articles]);

  // Filtered news for the grid
  const filteredArticles = useMemo(() => {
    let list = articles;

    if (selectedUpazila !== 'all') {
      list = list.filter((a) => a.upazila === selectedUpazila);
    }

    if (activeCategory !== 'all') {
      list = list.filter((a) => a.category === activeCategory);
    }

    return list;
  }, [articles, selectedUpazila, activeCategory]);

  // Lead, Featured, Latest, and Most Read
  const leadArticle = useMemo(() => {
    return articles.find((a) => a.isLead) || articles[0];
  }, [articles]);

  const featuredArticles = useMemo(() => {
    return articles.filter((a) => a.id !== leadArticle?.id).slice(0, 3);
  }, [articles, leadArticle]);

  const latestArticles = useMemo(() => {
    return [...articles].sort((a, b) => b.id.localeCompare(a.id));
  }, [articles]);

  const mostReadArticles = useMemo(() => {
    return [...articles].sort((a, b) => b.views - a.views);
  }, [articles]);

  const savedArticlesList = useMemo(() => {
    return articles.filter((a) => savedIds.includes(a.id));
  }, [articles, savedIds]);

  const relatedArticles = useMemo(() => {
    if (!selectedArticle) return [];
    return articles.filter(
      (a) =>
        a.id !== selectedArticle.id &&
        (a.category === selectedArticle.category || a.upazila === selectedArticle.upazila)
    );
  }, [articles, selectedArticle]);

  return (
    <div className={`min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 ${fontSize === 'large' ? 'text-lg' : ''}`}>
      
      {/* 1. Top Utility Ribbon */}
      <TopUtilityBar
        lang={lang}
        setLang={setLang}
        fontSize={fontSize}
        setFontSize={setFontSize}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenEPaper={() => setIsEPaperOpen(true)}
      />

      {/* 2. Top Bar Contract Compliant Navigation */}
      <Navbar
        lang={lang}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          if (cat !== 'all') {
            setSelectedUpazila('all');
          }
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubmitTip={() => setIsSubmitTipOpen(true)}
      />

      {/* 3. Breaking News Ticker */}
      <BreakingTicker
        lang={lang}
        onSelectHeadline={handleSelectHeadline}
      />

      {/* Citizen News Notification Banner (if any recently posted) */}
      {newNotice && (
        <div className="bg-emerald-600 text-white text-xs py-2 px-4 text-center font-medium shadow-inner animate-in slide-in-from-top duration-200">
          {newNotice}
        </div>
      )}

      {/* 4. Upazila Filter Bar (Quick access to all 9 Upazilas of Habiganj) */}
      <UpazilaFilterBar
        lang={lang}
        selectedUpazila={selectedUpazila}
        onSelectUpazila={(up) => {
          setSelectedUpazila(up);
          if (up !== 'all') {
            setActiveCategory('all');
          }
        }}
        newsCountByUpazila={newsCountByUpazila}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* If user is on default "all" view, show the full broadsheet layout */}
        {activeCategory === 'all' && selectedUpazila === 'all' ? (
          <>
            {/* Lead & Featured 3-Tier Salience Section */}
            {leadArticle && (
              <LeadHeroSection
                leadArticle={leadArticle}
                featuredArticles={featuredArticles}
                latestArticles={latestArticles}
                mostReadArticles={mostReadArticles}
                lang={lang}
                onSelectArticle={handleSelectArticle}
                onBookmark={handleToggleBookmark}
                isBookmarked={isBookmarked}
              />
            )}

            {/* Tea & Haor Heartland Spotlight */}
            <TeaAndHaorSpecial
              articles={articles}
              lang={lang}
              onSelectArticle={handleSelectArticle}
            />

            {/* Comprehensive Upazila News Grid */}
            <UpazilaNewsGrid
              articles={articles}
              selectedUpazila={selectedUpazila}
              lang={lang}
              onSelectArticle={handleSelectArticle}
              onBookmark={handleToggleBookmark}
              isBookmarked={isBookmarked}
            />

            {/* Visual Photo & Video Showcase */}
            <PhotoVideoSection lang={lang} />

            {/* Opinion, Columnists & Editorial */}
            <OpinionSection
              articles={articles}
              lang={lang}
              onSelectArticle={handleSelectArticle}
            />
          </>
        ) : (
          /* Filtered View (by Upazila or Category) */
          <div className="py-4">
            <UpazilaNewsGrid
              articles={filteredArticles}
              selectedUpazila={selectedUpazila}
              lang={lang}
              onSelectArticle={handleSelectArticle}
              onBookmark={handleToggleBookmark}
              isBookmarked={isBookmarked}
            />
          </div>
        )}

      </main>

      {/* 5. Footer */}
      <Footer
        lang={lang}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedUpazila('all');
        }}
        onSelectUpazila={(up) => {
          setSelectedUpazila(up);
          setActiveCategory('all');
        }}
      />

      {/* Modals & Drawers */}
      {/* Article Full Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
        onBookmark={handleToggleBookmark}
        isBookmarked={selectedArticle ? isBookmarked(selectedArticle.id) : false}
        onAddComment={handleAddComment}
        onSelectArticle={handleSelectArticle}
        relatedArticles={relatedArticles}
      />

      {/* Citizen Journalism: Submit News Lead */}
      <SubmitNewsModal
        isOpen={isSubmitTipOpen}
        onClose={() => setIsSubmitTipOpen(false)}
        lang={lang}
        onPublishTip={handlePublishCitizenTip}
      />

      {/* E-Paper Modal */}
      <EPaperModal
        isOpen={isEPaperOpen}
        onClose={() => setIsEPaperOpen(false)}
        lang={lang}
      />

      {/* Saved Articles Drawer */}
      <SavedArticlesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticlesList}
        lang={lang}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={() => setSavedIds([])}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
        lang={lang}
        onSelectArticle={handleSelectArticle}
      />

    </div>
  );
}
