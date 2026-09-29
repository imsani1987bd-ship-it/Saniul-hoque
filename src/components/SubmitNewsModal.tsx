import React, { useState } from 'react';
import { X, Send, Upload, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { UPAZILAS } from '../data/mockNews';
import { NewsArticle, UpazilaKey } from '../types/news';

interface SubmitNewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'bn' | 'en';
  onPublishTip: (article: NewsArticle) => void;
}

export const SubmitNewsModal: React.FC<SubmitNewsModalProps> = ({
  isOpen,
  onClose,
  lang,
  onPublishTip,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [upazila, setUpazila] = useState<UpazilaKey>('habiganj-sadar');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoName, setPhotoName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;

    // Create a new citizen-submitted news article
    const selectedUpazilaObj = UPAZILAS.find((u) => u.id === upazila);
    const locationName = selectedUpazilaObj ? selectedUpazilaObj.nameBn : 'হবিগঞ্জ';

    const newArticle: NewsArticle = {
      id: 'citizen-' + Date.now(),
      title: title.trim(),
      titleEn: title.trim(),
      slug: 'citizen-' + Date.now(),
      summary: details.slice(0, 150) + '...',
      summaryEn: details.slice(0, 150) + '...',
      content: [details],
      contentEn: [details],
      category: 'habiganj',
      upazila: upazila,
      imageUrl: '/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg',
      imageCaption: `${locationName} থেকে নাগরিক সাংবাদিকের প্রেরিত ছবি | ছবি: হবিগঞ্জ২৪`,
      reporter: {
        name: name.trim() || 'নাগরিক প্রতিবেদক',
        role: 'নাগরিক সাংবাদিক',
        location: locationName,
      },
      publishedAt: '২৯ সেপ্টেম্বর ২০২৬, এইমাত্র',
      timeAgo: 'মাত্র এইমাত্র',
      readTime: '২ মিনিট পাঠ',
      views: 12,
      reactions: { like: 1, heart: 1, clap: 0, sad: 0 },
      tags: [locationName, 'নাগরিক সাংবাদিকতা', 'সর্বশেষ'],
      comments: [],
    };

    onPublishTip(newArticle);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setName('');
      setPhone('');
      setTitle('');
      setDetails('');
      setHasPhoto(false);
      setPhotoName('');
    }, 2000);
  };

  const handlePhotoUploadSim = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setHasPhoto(true);
      setPhotoName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-stone-200">
        
        {/* Header */}
        <div className="bg-red-700 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Send className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif font-bold text-base">
                {lang === 'bn' ? 'হবিগঞ্জ২৪-এ সংবাদ পাঠান' : 'Submit News Tip to Habigonj24'}
              </h3>
              <p className="text-[11px] text-red-100">
                {lang === 'bn' ? 'আপনার এলাকার ঘটনা ও নাগরিক তথ্য জানান' : 'Report local updates and citizen stories'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-red-200 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-stone-900">
              {lang === 'bn' ? 'সংবাদটি সফলভাবে গৃহীত হয়েছে!' : 'News tip submitted successfully!'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
              {lang === 'bn'
                ? 'হবিগঞ্জ২৪ সম্পাদকীয় ডেস্ক আপনার তথ্যটি যাচাই করে পোর্টালে যুক্ত করেছে। নির্ভীক সাংবাদিকতায় অংশ নেওয়ার জন্য ধন্যবাদ।'
                : 'Habigonj24 editorial desk verified your lead and included it in the live feed. Thank you for contributing.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'bn' ? 'আপনার নাম' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'bn' ? 'যেমন: ফজলুর রহমান' : 'e.g. Fazlur Rahman'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 text-xs px-3 py-2 rounded focus:outline-none focus:border-red-700 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'bn' ? 'মোবাইল / হোয়াটসঅ্যাপ' : 'Mobile / WhatsApp'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={lang === 'bn' ? '০১৭১২-XXXXXX' : '01712-XXXXXX'}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 text-xs px-3 py-2 rounded focus:outline-none focus:border-red-700 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {lang === 'bn' ? 'উপজেলা নির্বাচন করুন' : 'Select Upazila'}
              </label>
              <select
                value={upazila}
                onChange={(e) => setUpazila(e.target.value as UpazilaKey)}
                className="w-full bg-stone-50 border border-stone-300 text-xs px-3 py-2 rounded focus:outline-none focus:border-red-700 focus:bg-white"
              >
                {UPAZILAS.map((u) => (
                  <option key={u.id} value={u.id}>
                    {lang === 'bn' ? u.nameBn : u.nameEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {lang === 'bn' ? 'সংবাদের শিরোনাম' : 'News Headline'}
              </label>
              <input
                type="text"
                required
                placeholder={lang === 'bn' ? 'ঘটনাটির প্রধান বিষয় এক লাইনে লিখুন...' : 'Key event in one line...'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 text-xs px-3 py-2 rounded focus:outline-none focus:border-red-700 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {lang === 'bn' ? 'বিস্তারিত বিবরণ' : 'Detailed Report'}
              </label>
              <textarea
                rows={4}
                required
                placeholder={lang === 'bn' ? 'স্থান, সময় এবং ঘটনার বিস্তারিত বর্ণনা লিখুন...' : 'Describe what, when, where...'}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 text-xs p-3 rounded focus:outline-none focus:border-red-700 focus:bg-white resize-none"
              />
            </div>

            {/* Photo upload simulator */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {lang === 'bn' ? 'ছবি যুক্ত করুন (যদি থাকে)' : 'Attach Photo (Optional)'}
              </label>
              <label className="border-2 border-dashed border-stone-300 hover:border-red-500 rounded-lg p-3 text-center block cursor-pointer bg-stone-50 hover:bg-stone-100 transition-colors">
                <Upload className="w-5 h-5 text-stone-400 mx-auto mb-1" />
                <span className="text-xs text-stone-600 block">
                  {hasPhoto ? photoName : (lang === 'bn' ? 'ছবি সিলেক্ট করতে ক্লিক করুন' : 'Click to select photo')}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUploadSim}
                  className="hidden"
                />
              </label>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'bn' ? 'তথ্য গোপন রাখা হবে' : 'Confidential'}</span>
              </div>
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold px-5 py-2.5 rounded shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'সংবাদ জমা দিন' : 'Submit Lead'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
