import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  Eye, 
  Bookmark, 
  Share2, 
  Printer, 
  Volume2, 
  VolumeX, 
  ThumbsUp, 
  Heart, 
  Award, 
  Frown, 
  MessageSquare, 
  Send, 
  Check, 
  ArrowLeft 
} from 'lucide-react';
import { NewsArticle, NewsComment } from '../types/news';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  lang: 'bn' | 'en';
  onBookmark: (id: string) => void;
  isBookmarked: boolean;
  onAddComment: (articleId: string, comment: NewsComment) => void;
  onSelectArticle: (article: NewsArticle) => void;
  relatedArticles: NewsArticle[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  lang,
  onBookmark,
  isBookmarked,
  onAddComment,
  onSelectArticle,
  relatedArticles,
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copied, setCopied] = useState(false);
  const [reactions, setReactions] = useState({ like: 0, heart: 0, clap: 0, sad: 0 });
  const [hasReacted, setHasReacted] = useState<Record<string, boolean>>({});

  // Comment form state
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentLocation, setCommentLocation] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  useEffect(() => {
    if (article) {
      setReactions(article.reactions);
      setAudioPlaying(false);
      setReadingProgress(0);
      setCommentSubmitted(false);
    }
  }, [article]);

  // Audio simulator timer
  useEffect(() => {
    let timer: any;
    if (audioPlaying) {
      timer = setTimeout(() => {
        // Just let it play with animated equalizer
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [audioPlaying]);

  if (!article) return null;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setReadingProgress(Math.min(100, Math.max(0, progress)));
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReaction = (type: 'like' | 'heart' | 'clap' | 'sad') => {
    if (hasReacted[type]) return;
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
    setHasReacted((prev) => ({ ...prev, [type]: true }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: NewsComment = {
      id: 'c-' + Date.now(),
      author: commentAuthor.trim() || (lang === 'bn' ? 'বেনামী পাঠক' : 'Anonymous Reader'),
      location: commentLocation.trim() || (lang === 'bn' ? 'হবিগঞ্জ' : 'Habiganj'),
      time: lang === 'bn' ? 'মাত্র এইমাত্র' : 'Just now',
      text: commentText.trim(),
    };

    onAddComment(article.id, newComment);
    setCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  const fontSizeClasses = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    xlarge: 'text-xl leading-loose',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/75 backdrop-blur-xs flex justify-center p-0 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        onScroll={handleScroll}
        className="relative bg-white w-full max-w-4xl min-h-screen sm:min-h-0 sm:rounded-xl shadow-2xl overflow-y-auto max-h-screen flex flex-col"
      >
        {/* Sticky Reading Progress Bar */}
        <div className="sticky top-0 left-0 right-0 z-20 h-1 bg-stone-200">
          <div
            className="h-full bg-red-700 transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Modal Sticky Header Bar */}
        <div className="sticky top-1 z-10 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'ফিরে যান' : 'Back to News'}</span>
          </button>

          {/* Quick controls: Audio, Font size, Bookmark, Print, Close */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Audio Reader Toggle */}
            <button
              onClick={() => setAudioPlaying(!audioPlaying)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                audioPlaying ? 'bg-amber-100 text-amber-900' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
              title={lang === 'bn' ? 'সংবাদটি শুনুন (অডিও রিডার)' : 'Listen to News (Audio Reader)'}
            >
              {audioPlaying ? <VolumeX className="w-3.5 h-3.5 text-amber-700" /> : <Volume2 className="w-3.5 h-3.5 text-stone-600" />}
              <span className="hidden sm:inline">
                {audioPlaying ? (lang === 'bn' ? 'অডিও থামান' : 'Stop Audio') : (lang === 'bn' ? 'শুনুন' : 'Listen')}
              </span>
            </button>

            {/* Font Zoom */}
            <div className="hidden sm:flex items-center gap-1 text-xs border-l border-r border-stone-200 px-2 text-stone-600">
              <button
                onClick={() => setTextSize('normal')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${textSize === 'normal' ? 'bg-stone-800 text-white font-bold' : 'hover:text-black'}`}
              >
                A
              </button>
              <button
                onClick={() => setTextSize('large')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${textSize === 'large' ? 'bg-stone-800 text-white font-bold' : 'hover:text-black'}`}
              >
                A+
              </button>
              <button
                onClick={() => setTextSize('xlarge')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${textSize === 'xlarge' ? 'bg-stone-800 text-white font-bold' : 'hover:text-black'}`}
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onBookmark(article.id)}
              className={`p-1.5 rounded hover:bg-stone-100 transition-colors cursor-pointer ${
                isBookmarked ? 'text-red-700' : 'text-stone-500'
              }`}
              title={isBookmarked ? 'সংরক্ষিত' : 'সংরক্ষণ করুন'}
            >
              <Bookmark className="w-4 h-4" />
            </button>

            {/* Share / Copy link */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer relative"
              title="লিংক কপি করুন"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Print */}
            <button
              onClick={() => window.print()}
              className="hidden sm:block p-1.5 rounded hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              title="প্রিন্ট করুন"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Player Bar (Simulated Text-To-Speech) */}
        {audioPlaying && (
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-2.5 flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-0.5 h-4">
                <span className="w-1 bg-amber-600 animate-pulse h-3" />
                <span className="w-1 bg-amber-600 animate-pulse h-4 delay-75" />
                <span className="w-1 bg-amber-600 animate-pulse h-2 delay-150" />
                <span className="w-1 bg-amber-600 animate-pulse h-3.5 delay-100" />
              </div>
              <span className="font-medium">
                {lang === 'bn'
                  ? 'হবিগঞ্জ২৪ অডিও ডেস্ক থেকে সংবাদটি পাঠ করা হচ্ছে...'
                  : 'Playing news report narration...'}
              </span>
            </div>
            <button
              onClick={() => setAudioPlaying(false)}
              className="text-amber-800 hover:text-amber-950 font-semibold cursor-pointer underline text-[11px]"
            >
              {lang === 'bn' ? 'বন্ধ করুন' : 'Dismiss'}
            </button>
          </div>
        )}

        {/* Article Body Content */}
        <div className="p-6 sm:p-10 max-w-3xl mx-auto w-full">
          
          {/* Category & Tagline Kicker */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-3">
            <span>{article.upazila ? article.upazila.replace('-', ' ') : article.category}</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="text-stone-500 font-normal">{article.readTime}</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight mb-4">
            {lang === 'bn' ? article.title : article.titleEn}
          </h1>

          {/* Reporter & Publication Metadata */}
          <div className="py-3 border-y border-stone-200 my-4 flex flex-wrap items-center justify-between gap-y-2 text-xs text-stone-600">
            <div>
              <span className="font-bold text-stone-900">{article.reporter.name}</span>
              <span className="text-stone-400 mx-1.5">|</span>
              <span>{article.reporter.role}, {article.reporter.location}</span>
            </div>
            <div className="flex items-center gap-3 text-stone-500">
              <span className="tabular-nums">{article.publishedAt}</span>
              <span className="flex items-center gap-1 tabular-nums">
                <Eye className="w-3.5 h-3.5" />
                <span>{article.views.toLocaleString()}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-6">
            <div className="aspect-16/10 rounded-lg overflow-hidden bg-stone-100">
              <img
                src={article.imageUrl}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-stone-500 italic text-center">
              {article.imageCaption}
            </p>
          </div>

          {/* Article Summary Lead */}
          <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-red-700 my-6 font-medium text-stone-800 text-sm sm:text-base leading-relaxed">
            {lang === 'bn' ? article.summary : article.summaryEn}
          </div>

          {/* Article Paragraphs */}
          <div className={`space-y-4 text-stone-800 font-serif ${fontSizeClasses[textSize]}`}>
            {(lang === 'bn' ? article.content : article.contentEn).map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-stone-500">
              {lang === 'bn' ? 'সম্পর্কিত বিষয়:' : 'Tags:'}
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-stone-700 bg-stone-100 px-2.5 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Reader Reactions Module */}
          <div className="mt-8 p-5 bg-[#faf8f5] rounded-xl border border-stone-200">
            <h4 className="text-sm font-bold text-stone-900 mb-3 text-center">
              {lang === 'bn' ? 'সংবাদটিতে আপনার অনুভূতি জানান' : 'How does this news make you feel?'}
            </h4>
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              <button
                onClick={() => handleReaction('like')}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-transform active:scale-90 cursor-pointer ${
                  hasReacted['like'] ? 'text-blue-600 font-bold' : 'text-stone-600 hover:text-blue-600'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-lg">
                  👍
                </div>
                <span className="text-xs">{lang === 'bn' ? 'ভালো' : 'Like'}</span>
                <span className="text-[11px] font-mono tabular-nums text-stone-500">{reactions.like}</span>
              </button>

              <button
                onClick={() => handleReaction('heart')}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-transform active:scale-90 cursor-pointer ${
                  hasReacted['heart'] ? 'text-red-600 font-bold' : 'text-stone-600 hover:text-red-600'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-lg">
                  ❤️
                </div>
                <span className="text-xs">{lang === 'bn' ? 'ভালোবাসা' : 'Love'}</span>
                <span className="text-[11px] font-mono tabular-nums text-stone-500">{reactions.heart}</span>
              </button>

              <button
                onClick={() => handleReaction('clap')}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-transform active:scale-90 cursor-pointer ${
                  hasReacted['clap'] ? 'text-amber-600 font-bold' : 'text-stone-600 hover:text-amber-600'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-lg">
                  👏
                </div>
                <span className="text-xs">{lang === 'bn' ? 'সাধুবাদ' : 'Clap'}</span>
                <span className="text-[11px] font-mono tabular-nums text-stone-500">{reactions.clap}</span>
              </button>

              <button
                onClick={() => handleReaction('sad')}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-transform active:scale-90 cursor-pointer ${
                  hasReacted['sad'] ? 'text-stone-700 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-lg">
                  😢
                </div>
                <span className="text-xs">{lang === 'bn' ? 'ব্যথিত' : 'Sad'}</span>
                <span className="text-[11px] font-mono tabular-nums text-stone-500">{reactions.sad}</span>
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-10 border-t border-stone-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-red-700" />
                <span>{lang === 'bn' ? 'পাঠকের মন্তব্য' : 'Reader Comments'}</span>
                <span className="text-xs font-mono tabular-nums text-stone-500 font-normal">
                  ({article.comments.length})
                </span>
              </h3>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-stone-50 p-4 sm:p-5 rounded-lg border border-stone-200 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder={lang === 'bn' ? 'আপনার নাম' : 'Your Name'}
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  className="bg-white border border-stone-300 text-xs px-3 py-2 rounded focus:outline-none focus:border-red-700"
                />
                <input
                  type="text"
                  placeholder={lang === 'bn' ? 'আপনার উপজেলা / এলাকা (যেমন: চুনারুঘাট)' : 'Location (e.g. Nabiganj)'}
                  value={commentLocation}
                  onChange={(e) => setCommentLocation(e.target.value)}
                  className="bg-white border border-stone-300 text-xs px-3 py-2 rounded focus:outline-none focus:border-red-700"
                />
              </div>
              <textarea
                rows={3}
                placeholder={lang === 'bn' ? 'আপনার সুচিন্তিত মতামত লিখুন...' : 'Write your comment...'}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
                className="w-full bg-white border border-stone-300 text-xs p-3 rounded focus:outline-none focus:border-red-700 resize-none mb-3"
              />
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  {lang === 'bn' ? 'শালীন ও গঠনমূলক মন্তব্য কাম্য।' : 'Constructive comments encouraged.'}
                </span>
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-4 py-2 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'মন্তব্য প্রকাশ করুন' : 'Post Comment'}</span>
                </button>
              </div>

              {commentSubmitted && (
                <div className="mt-2 text-xs text-emerald-700 font-medium">
                  {lang === 'bn' ? 'আপনার মন্তব্য সফলভাবে যুক্ত হয়েছে।' : 'Your comment has been posted successfully.'}
                </div>
              )}
            </form>

            {/* Comments List */}
            {article.comments.length === 0 ? (
              <p className="text-xs text-stone-500 italic py-2">
                {lang === 'bn' ? 'এখনো কোনো মন্তব্য নেই। প্রথম মন্তব্যটি করুন।' : 'No comments yet. Be the first to share your thoughts.'}
              </p>
            ) : (
              <div className="space-y-4">
                {article.comments.map((comment) => (
                  <div key={comment.id} className="p-3.5 bg-white rounded-lg border border-stone-200">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                        <span>{comment.author}</span>
                        {comment.location && (
                          <span className="text-stone-400 font-normal">({comment.location})</span>
                        )}
                      </div>
                      <span className="text-[10px] text-stone-400 tabular-nums">{comment.time}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Articles Section */}
          <div className="mt-12 border-t border-stone-200 pt-8">
            <h3 className="text-base font-serif font-bold text-stone-900 mb-4">
              {lang === 'bn' ? 'আরও পড়ুন' : 'Related Stories'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="flex gap-3 p-3 rounded-lg border border-stone-200 hover:border-red-300 transition-colors group cursor-pointer"
                >
                  <div className="w-24 h-18 rounded overflow-hidden bg-stone-100 shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-red-700 uppercase">
                      {item.upazila ? item.upazila.replace('-', ' ') : item.category}
                    </span>
                    <h4 className="text-xs font-serif font-bold text-stone-800 group-hover:text-red-700 line-clamp-2 leading-snug">
                      {lang === 'bn' ? item.title : item.titleEn}
                    </h4>
                    <span className="text-[10px] text-stone-400 mt-1 block">{item.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
