import React, { useState } from 'react';
import { Camera, Play, X, ExternalLink } from 'lucide-react';

interface PhotoVideoSectionProps {
  lang: 'bn' | 'en';
}

interface PhotoStory {
  id: string;
  titleBn: string;
  titleEn: string;
  locationBn: string;
  locationEn: string;
  imageUrl: string;
  photographerBn: string;
  photographerEn: string;
}

interface VideoReport {
  id: string;
  titleBn: string;
  titleEn: string;
  duration: string;
  reporterBn: string;
  reporterEn: string;
  thumbnailUrl: string;
}

export const PhotoVideoSection: React.FC<PhotoVideoSectionProps> = ({ lang }) => {
  const [activePhoto, setActivePhoto] = useState<PhotoStory | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoReport | null>(null);

  const photos: PhotoStory[] = [
    {
      id: 'p1',
      titleBn: 'কুয়াশায় ঘেরা চুনারুঘাট চানপুর চা বাগানের সকাল',
      titleEn: 'Misty morning across Chanpur tea estate in Chunarughat',
      locationBn: 'চুনারুঘাট, হবিগঞ্জ',
      locationEn: 'Chunarughat, Habiganj',
      imageUrl: '/src/assets/images/habiganj_lead_tea_garden_1790690174056.jpg',
      photographerBn: 'জাহিদ হাসান / হবিগঞ্জ২৪',
      photographerEn: 'Zahid Hasan / Habigonj24',
    },
    {
      id: 'p2',
      titleBn: 'বানিয়াচংয়ের ঐতিহাসিক সাগরদিঘির বুকে রক্তিম সূর্যাস্ত',
      titleEn: 'Sunset over historic Sagor Dighi reservoir in Baniachong',
      locationBn: 'বানিয়াচং, হবিগঞ্জ',
      locationEn: 'Baniachong, Habiganj',
      imageUrl: '/src/assets/images/habiganj_baniachong_haor_1790690189870.jpg',
      photographerBn: 'সাইফুল ইসলাম / হবিগঞ্জ২৪',
      photographerEn: 'Saiful Islam / Habigonj24',
    },
    {
      id: 'p3',
      titleBn: 'খোয়াই নদীর বুকজুড়ে জেলেদের নৌকার ব্যস্ততা',
      titleEn: 'Fishermen casting nets on Khowai river at daybreak',
      locationBn: 'হবিগঞ্জ সদর',
      locationEn: 'Habiganj Sadar',
      imageUrl: '/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg',
      photographerBn: 'শাহেদ মাহমুদ / হবিগঞ্জ২৪',
      photographerEn: 'Shahed Mahmud / Habigonj24',
    },
    {
      id: 'p4',
      titleBn: 'বৃন্দাবন সরকারি কলেজের ঐতিহ্যবাহী সবুজ চত্বর',
      titleEn: 'Lush courtyards of heritage Brindaban Govt College',
      locationBn: 'হবিগঞ্জ শহর',
      locationEn: 'Habiganj Town',
      imageUrl: '/src/assets/images/habiganj_brindaban_college_1790690213214.jpg',
      photographerBn: 'তানভীর আহমেদ / হবিগঞ্জ২৪',
      photographerEn: 'Tanvir Ahmed / Habigonj24',
    },
  ];

  const videos: VideoReport[] = [
    {
      id: 'v1',
      titleBn: 'ভিডিও রিপোর্ট: চুনারুঘাটের চা শ্রমিক পরিবারের ভবিষ্যৎ নিয়ে বিশেষ প্রতিবেদন',
      titleEn: 'Video: Tea worker families voice aspirations in Chunarughat',
      duration: '৩:৪৫ মিনিট',
      reporterBn: 'শামীম আহমেদ',
      reporterEn: 'Shamim Ahmed',
      thumbnailUrl: '/src/assets/images/habiganj_lead_tea_garden_1790690174056.jpg',
    },
    {
      id: 'v2',
      titleBn: 'ভিডিও রিপোর্ট: খোয়াই নদী ড্রেজিং ও শহর রক্ষা বাঁধের বর্তমান অবস্থা',
      titleEn: 'Video: On-the-ground report of Khowai river embankment works',
      duration: '২:২০ মিনিট',
      reporterBn: 'শাহজাহান কবির',
      reporterEn: 'Shahjahan Kabir',
      thumbnailUrl: '/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg',
    },
  ];

  return (
    <section className="py-8 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-6">
          <div className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
              {lang === 'bn' ? 'ছবি ও ভিডিওতে হবিগঞ্জ' : 'Habiganj in Photos & Video'}
            </h2>
          </div>
          <span className="text-xs text-stone-400">
            {lang === 'bn' ? 'ফটোসাংবাদিকতা ও বিশেষ দৃশ্যপট' : 'Visual Journalism & Highlights'}
          </span>
        </div>

        {/* Grid: 4 Photos + 2 Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Photo Gallery (8 cols) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Camera className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ছবিতে আজকের হবিগঞ্জ' : 'Photo Stories'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {photos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className="group relative aspect-16/10 rounded-lg overflow-hidden bg-stone-800 cursor-pointer"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.titleBn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[11px] text-amber-300 font-medium mb-1">
                      {lang === 'bn' ? item.locationBn : item.locationEn}
                    </span>
                    <h3 className="text-sm font-medium text-white group-hover:text-amber-100 line-clamp-2">
                      {lang === 'bn' ? item.titleBn : item.titleEn}
                    </h3>
                    <span className="text-[10px] text-stone-400 mt-1">
                      {lang === 'bn' ? item.photographerBn : item.photographerEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Reports (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-red-400">
              <Play className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ভিডিও প্রতিবেদন' : 'Video Reports'}</span>
            </div>

            <div className="space-y-4">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className="group relative rounded-lg overflow-hidden bg-stone-800 border border-stone-800 cursor-pointer"
                >
                  <div className="relative aspect-16/9 overflow-hidden">
                    <img
                      src={vid.thumbnailUrl}
                      alt={vid.titleBn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-11 h-11 bg-red-700/90 group-hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-mono px-2 py-0.5 rounded text-white tabular-nums">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-3">
                    <h4 className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white line-clamp-2 leading-snug">
                      {lang === 'bn' ? vid.titleBn : vid.titleEn}
                    </h4>
                    <span className="text-[11px] text-stone-400 mt-1 block">
                      {lang === 'bn' ? `প্রতিবেদক: ${vid.reporterBn}` : `Reporter: ${vid.reporterEn}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Photo Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-stone-900 rounded-lg overflow-hidden border border-stone-700">
            <div className="flex items-center justify-between p-3 border-b border-stone-800">
              <span className="text-sm font-medium text-stone-300">
                {lang === 'bn' ? activePhoto.locationBn : activePhoto.locationEn}
              </span>
              <button
                onClick={() => setActivePhoto(null)}
                className="text-stone-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-16/9 bg-black">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.titleBn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-stone-900">
              <h3 className="text-base font-serif font-bold text-white">
                {lang === 'bn' ? activePhoto.titleBn : activePhoto.titleEn}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {lang === 'bn' ? activePhoto.photographerBn : activePhoto.photographerEn}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Player Simulator */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-stone-900 rounded-lg overflow-hidden border border-stone-700">
            <div className="flex items-center justify-between p-3 border-b border-stone-800">
              <span className="text-sm font-semibold text-red-500 flex items-center gap-1.5">
                <Play className="w-4 h-4 fill-current" />
                <span>হবিগঞ্জ২৪ ভিডিও নিউজ</span>
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-stone-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-16/9 bg-black flex items-center justify-center">
              <img
                src={activeVideo.thumbnailUrl}
                alt=""
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute text-center text-white px-4">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </div>
                <p className="text-base font-semibold">ভিডিও সম্প্রচারিত হচ্ছে...</p>
                <p className="text-xs text-stone-300 mt-1">
                  {lang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
                </p>
              </div>
            </div>
            <div className="p-4 bg-stone-900">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>{lang === 'bn' ? `প্রতিবেদক: ${activeVideo.reporterBn}` : `Reporter: ${activeVideo.reporterEn}`}</span>
                <span>{activeVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
