import React from 'react';
import { MapPin } from 'lucide-react';
import { UPAZILAS } from '../data/mockNews';
import { UpazilaKey } from '../types/news';

interface UpazilaFilterBarProps {
  lang: 'bn' | 'en';
  selectedUpazila: UpazilaKey;
  onSelectUpazila: (upazila: UpazilaKey) => void;
  newsCountByUpazila: Record<string, number>;
}

export const UpazilaFilterBar: React.FC<UpazilaFilterBarProps> = ({
  lang,
  selectedUpazila,
  onSelectUpazila,
  newsCountByUpazila,
}) => {
  const currentUpazilaInfo = UPAZILAS.find((u) => u.id === selectedUpazila);

  return (
    <div className="bg-stone-100/90 border-b border-stone-200 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {/* Label indicator */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 uppercase tracking-wider shrink-0 pr-2 border-r border-stone-300">
            <MapPin className="w-3.5 h-3.5 text-red-700" />
            <span>{lang === 'bn' ? 'উপজেলা সংবাদ:' : 'Upazilas:'}</span>
          </div>

          {/* All Upazilas option */}
          <button
            onClick={() => onSelectUpazila('all')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
              selectedUpazila === 'all'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            {lang === 'bn' ? 'সব উপজেলা' : 'All Upazilas'}
          </button>

          {/* 9 Upazilas */}
          {UPAZILAS.map((upazila) => {
            const count = newsCountByUpazila[upazila.id] || 0;
            const isSelected = selectedUpazila === upazila.id;
            return (
              <button
                key={upazila.id}
                onClick={() => onSelectUpazila(upazila.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                <span>{lang === 'bn' ? upazila.nameBn : upazila.nameEn}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] font-mono tabular-nums ${
                      isSelected ? 'text-red-100' : 'text-stone-500'
                    }`}
                  >
                    ({count})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Upazila context bar */}
        {currentUpazilaInfo && (
          <div className="mt-2 pt-2 border-t border-stone-200/80 flex flex-wrap items-center justify-between text-xs text-stone-600 gap-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900">
                {lang === 'bn' ? currentUpazilaInfo.nameBn : currentUpazilaInfo.nameEn}:
              </span>
              <span>
                {lang === 'bn' ? currentUpazilaInfo.taglineBn : currentUpazilaInfo.taglineEn}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
              <span>{lang === 'bn' ? 'উল্লেখযোগ্য স্থান:' : 'Key Locations:'}</span>
              <span className="text-stone-700 font-medium">
                {currentUpazilaInfo.keySpots.join(' · ')}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
