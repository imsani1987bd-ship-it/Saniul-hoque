import React, { useState } from 'react';
import { CloudSun, Clock, Globe, Bookmark, Plus, Minus, ChevronDown, Check } from 'lucide-react';
import { HABIGANJ_PRAYER_TIMES, HABIGANJ_WEATHER } from '../data/mockNews';

interface TopUtilityBarProps {
  lang: 'bn' | 'en';
  setLang: (l: 'bn' | 'en') => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenEPaper: () => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({
  lang,
  setLang,
  fontSize,
  setFontSize,
  savedCount,
  onOpenSaved,
  onOpenEPaper,
}) => {
  const [showPrayerModal, setShowPrayerModal] = useState(false);
  const [showWeatherDetail, setShowWeatherDetail] = useState(false);

  const dateBn = 'মঙ্গলবার, ২৯ সেপ্টেম্বর ২০২৬ | ১৫ আশ্বিন ১৪৩৩ বঙ্গাব্দ | ১৬ রবিউল আউয়াল ১৪৪৮ হিজরি';
  const dateEn = 'Tuesday, 29 September 2026 | 15 Ashwin 1433 BS | 16 Rabiul Awwal 1448 AH';

  return (
    <div className="bg-stone-900 text-stone-200 text-xs border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: Date & Editions */}
        <div className="flex items-center gap-3 text-stone-300">
          <span className="font-medium tracking-wide">
            {lang === 'bn' ? dateBn : dateEn}
          </span>
          <span className="text-stone-600 hidden md:inline">|</span>
          <span className="hidden md:inline text-stone-400">
            {lang === 'bn' ? 'হবিগঞ্জ সংস্করণ' : 'Habiganj Edition'}
          </span>
        </div>

        {/* Right: Weather, Prayer Times, Text Size, Language, E-Paper, Bookmarks */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Weather preview */}
          <div className="relative">
            <button
              onClick={() => setShowWeatherDetail(!showWeatherDetail)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              title={lang === 'bn' ? 'হবিগঞ্জের আবহাওয়া' : 'Habiganj Weather'}
            >
              <CloudSun className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {lang === 'bn' ? `হবিগঞ্জ ${HABIGANJ_WEATHER.temp}°সে` : `Habiganj ${HABIGANJ_WEATHER.temp}°C`}
              </span>
            </button>

            {showWeatherDetail && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-stone-900 border border-stone-700 shadow-xl rounded-md p-3 z-50 text-stone-200">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-2 font-semibold">
                  <span>{lang === 'bn' ? 'হবিগঞ্জের আবহাওয়া' : 'Habiganj Weather'}</span>
                  <span className="text-amber-400">{HABIGANJ_WEATHER.temp}°C</span>
                </div>
                <div className="space-y-1 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>{lang === 'bn' ? 'অবস্থা:' : 'Condition:'}</span>
                    <span className="text-white">{lang === 'bn' ? HABIGANJ_WEATHER.conditionBn : HABIGANJ_WEATHER.conditionEn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'bn' ? 'আর্দ্রতা:' : 'Humidity:'}</span>
                    <span className="text-white">{HABIGANJ_WEATHER.humidity}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'bn' ? 'বাতাস:' : 'Wind:'}</span>
                    <span className="text-white">{HABIGANJ_WEATHER.windSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'bn' ? 'বায়ুমান:' : 'Air Quality:'}</span>
                    <span className="text-emerald-400">{HABIGANJ_WEATHER.airQuality}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <span className="text-stone-700">|</span>

          {/* Prayer Times Button */}
          <div className="relative">
            <button
              onClick={() => setShowPrayerModal(!showPrayerModal)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'bn' ? 'নামাজের সময়' : 'Prayer Times'}</span>
              <ChevronDown className="w-3 h-3 text-stone-400" />
            </button>

            {showPrayerModal && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-stone-900 border border-stone-700 shadow-xl rounded-md p-3 z-50 text-stone-200">
                <div className="font-semibold text-emerald-400 pb-2 mb-2 border-b border-stone-800 flex items-center justify-between">
                  <span>{lang === 'bn' ? 'হবিগঞ্জ জেলা নামাজের সময়' : 'Habiganj Prayer Times'}</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-0.5 border-b border-stone-800/60">
                    <span className="text-stone-400">{lang === 'bn' ? 'ফজর:' : 'Fajr:'}</span>
                    <span className="font-medium text-white">{HABIGANJ_PRAYER_TIMES.fajr}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-stone-800/60">
                    <span className="text-stone-400">{lang === 'bn' ? 'জোহর:' : 'Dhuhr:'}</span>
                    <span className="font-medium text-white">{HABIGANJ_PRAYER_TIMES.dhuhr}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-stone-800/60">
                    <span className="text-stone-400">{lang === 'bn' ? 'আসর:' : 'Asr:'}</span>
                    <span className="font-medium text-white">{HABIGANJ_PRAYER_TIMES.asr}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-stone-800/60">
                    <span className="text-stone-400">{lang === 'bn' ? 'মাগরিব:' : 'Maghrib:'}</span>
                    <span className="font-medium text-white">{HABIGANJ_PRAYER_TIMES.maghrib}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-stone-400">{lang === 'bn' ? 'এশা:' : 'Isha:'}</span>
                    <span className="font-medium text-white">{HABIGANJ_PRAYER_TIMES.isha}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <span className="text-stone-700">|</span>

          {/* E-Paper quick link */}
          <button
            onClick={onOpenEPaper}
            className="hover:text-amber-400 transition-colors font-medium cursor-pointer"
          >
            {lang === 'bn' ? 'ই-পেপার' : 'E-Paper'}
          </button>

          <span className="text-stone-700">|</span>

          {/* Font Resizing Controls */}
          <div className="flex items-center gap-1 text-stone-300">
            <span className="text-[11px] text-stone-500 mr-0.5">অক্ষর</span>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-1 rounded cursor-pointer ${fontSize === 'normal' ? 'bg-stone-700 text-white' : 'hover:text-white'}`}
              title="স্বাভাবিক ফন্ট"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-1 font-semibold rounded cursor-pointer ${fontSize === 'large' ? 'bg-stone-700 text-white' : 'hover:text-white'}`}
              title="বড় ফন্ট"
            >
              A+
            </button>
          </div>

          <span className="text-stone-700">|</span>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer font-medium"
          >
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>

          <span className="text-stone-700">|</span>

          {/* Bookmarked / Saved */}
          <button
            onClick={onOpenSaved}
            className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors cursor-pointer relative"
            title={lang === 'bn' ? 'সংরক্ষিত সংবাদ' : 'Saved News'}
          >
            <Bookmark className="w-3.5 h-3.5 text-red-500" />
            {savedCount > 0 && (
              <span className="bg-red-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
