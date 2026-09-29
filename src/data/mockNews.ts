import { NewsArticle, UpazilaInfo, PrayerTimes, WeatherInfo } from '../types/news';

export const UPAZILAS: UpazilaInfo[] = [
  {
    id: 'habiganj-sadar',
    nameBn: 'হবিগঞ্জ সদর',
    nameEn: 'Habiganj Sadar',
    taglineBn: 'জেলা প্রশাসনিক প্রাণকেন্দ্র ও খোয়াই নদীর কোল',
    taglineEn: 'District administrative hub and Khowai riverbank',
    keySpots: ['বৃন্দাবন সরকারি কলেজ', 'খোয়াই নদীর পাড়', 'পুরাতন কোর্ট স্টেশন'],
  },
  {
    id: 'nabiganj',
    nameBn: 'নবীগঞ্জ',
    nameEn: 'Nabiganj',
    taglineBn: 'বিবিয়ানা গ্যাসফিল্ড ও লন্ডন প্রবাসীদের প্রধান জনপদ',
    taglineEn: 'Bibiyana Gas Field and major UK diaspora township',
    keySpots: ['বিবিয়ানা গ্যাসফিল্ড', 'দিনারপুর পাহাড়', 'কুশিয়ারা নদী'],
  },
  {
    id: 'madhabpur',
    nameBn: 'মাধবপুর',
    nameEn: 'Madhabpur',
    taglineBn: 'সিলেটের প্রবেশদ্বার ও দ্রুত বর্ধনশীল শিল্পাঞ্চল',
    taglineEn: 'Gateway to Sylhet and booming industrial corridor',
    keySpots: ['ঢাকা-সিলেট মহাসড়ক সংযোগ', 'সুরমা চা বাগান', 'শিল্পাঞ্চল পার্ক'],
  },
  {
    id: 'chunarughat',
    nameBn: 'চুনারুঘাট',
    nameEn: 'Chunarughat',
    taglineBn: 'সবুজ চা বাগান ও রেমা-কালেঙ্গা বন্যপ্রাণী অভয়ারণ্য',
    taglineEn: 'Lush tea estates and Rema-Kalenga Wildlife Sanctuary',
    keySpots: ['রেমা-কালেঙ্গা ফরেস্ট', 'চানপুর চা বাগান', 'সাতছড়ি জাতীয় উদ্যান'],
  },
  {
    id: 'bahubal',
    nameBn: 'বাহুবল',
    nameEn: 'Bahubal',
    taglineBn: 'পাহাড়ি চা উপত্যকা ও ইকো-রিসোর্টের স্বর্গরাজ্য',
    taglineEn: 'Scenic tea valleys and premium eco-resort haven',
    keySpots: ['গ্র্যান্ড সুলতান সংলগ্ন উপত্যকা', 'মুছাই বাজার', 'ফয়জাবাদ চা বাগান'],
  },
  {
    id: 'baniachong',
    nameBn: 'বানিয়াচং',
    nameEn: 'Baniachong',
    taglineBn: 'এশিয়ার বৃহত্তম গ্রাম ও ঐতিহাসিক সাগরদিঘির দেশ',
    taglineEn: "Asia's largest village and historic Sagor Dighi realm",
    keySpots: ['ঐতিহাসিক সাগরদিঘি', 'কমলারানীর দিঘি', 'হাওরাঞ্চল বেড়িবাঁধ'],
  },
  {
    id: 'ajmiriganj',
    nameBn: 'আজমিরীগঞ্জ',
    nameEn: 'Ajmiriganj',
    taglineBn: 'কালনী ও কুশিয়ারার মোহনায় ঐতিহ্যবাহী নদীবন্দর',
    taglineEn: 'Historic river port at Kalni-Kushiyara confluence',
    keySpots: ['কালনী ঘাট', 'হাওর বোরো বেসিন', 'আজমিরীগঞ্জ বাজার'],
  },
  {
    id: 'lakhai',
    nameBn: 'লাখাই',
    nameEn: 'Lakhai',
    taglineBn: 'মেঘনা ও ধলেশ্বরীর মোহনায় শান্ত হাওর জনপদ',
    taglineEn: 'Tranquil wetland frontier along the Meghna Basin',
    keySpots: ['মেঘনা নদী মোহনা', 'লাখাই বোরো মাঠ', 'মোররাঘাট'],
  },
  {
    id: 'shayestaganj',
    nameBn: 'শায়েস্তাগঞ্জ',
    nameEn: 'Shayestaganj',
    taglineBn: 'শতবর্ষী ঐতিহাসিক রেলওয়ে জংশন ও বাণিজ্যিক কেন্দ্র',
    taglineEn: 'Centenary historic railway junction and trading center',
    keySpots: ['শায়েস্তাগঞ্জ রেল জংশন', 'নতুন ব্রিজ চত্বর', 'খোয়াই ব্রিজ'],
  },
];

export const HABIGANJ_PRAYER_TIMES: PrayerTimes = {
  fajr: '৪:৩৩ ভোর',
  dhuhr: '১১:৫৮ দুপুর',
  asr: '৪:১৮ বিকেল',
  maghrib: '৫:৫২ সন্ধ্যা',
  isha: '৭:০৮ রাত',
  sehri: '৪:২৮ ভোর',
  iftar: '৫:৫৪ সন্ধ্যা',
};

export const HABIGANJ_WEATHER: WeatherInfo = {
  temp: 29,
  conditionBn: 'হালকা মেঘ ও বাতাস',
  conditionEn: 'Partly Cloudy & Breeze',
  humidity: 78,
  airQuality: 'ভালো (AQI ৪২)',
  windSpeed: '১১ কিমি/ঘণ্টা',
};

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'art-01',
    title: 'চুনারুঘাট ও বাহুবলের চা বাগানে রেকর্ড উৎপাদন: চা শ্রমিকদের মজুরি ও আবাসন উন্নয়নে নতুন প্রকল্পের সূচনা',
    titleEn: 'Record tea harvest in Chunarughat and Bahubal estates: New housing and welfare initiative launched',
    slug: 'chunarughat-bahubal-tea-harvest-record-welfare-2026',
    category: 'tea-industry',
    upazila: 'chunarughat',
    summary: 'চলতি মৌসুমে অনুকূল আবহাওয়া ও সময়োপযোগী সেচ ব্যবস্থাপনায় হবিগঞ্জের চুনারুঘাট ও বাহুবল উপত্যকার ২৪টি চা বাগানে সর্বোচ্চ রেকর্ড পরিমাণ চা পাতা উৎপাদন হয়েছে। একই সাথে শ্রমিকদের মানসম্মত আবাসন ও সন্তানদের শিক্ষার জন্য বিশেষ তহবিল ঘোষণা করেছে জেলা প্রশাসন।',
    summaryEn: 'Favorable seasonal climate and improved irrigation resulted in record green leaf production across 24 tea gardens in Habiganj, alongside district welfare allocations.',
    content: [
      'হবিগঞ্জের চুনারুঘাট, বাহুবল ও মাধবপুর অঞ্চলের বিস্তীর্ণ সবুজ উপত্যকায় চলতি মৌসুমে চায়ের বাম্পার উৎপাদন হয়েছে। বাংলাদেশ চা বোর্ডের আঞ্চলিক তথ্য অনুযায়ী, গত বছরের তুলনায় চলতি অর্থবছরে উৎপাদনের হার প্রায় ১২.৪ শতাংশ বৃদ্ধি পেয়েছে।',
      'চুনারুঘাটের চানপুর ও লালচান্দ চা বাগানের ব্যবস্থাপকদের সাথে কথা বলে জানা যায়, বর্ষার সুষম বৃষ্টিপাত এবং সঠিক সময়ে আধুনিক প্রুনিং ও জৈব সার প্রয়োগের কারণে কুঁড়ির মান ও গন্ধ আন্তর্জাতিক মানের হয়েছে। ইতিমধ্যে চট্টগ্রাম নিলাম কেন্দ্রে হবিগঞ্জের তৈরি ‘অর্থোডক্স ব্ল্যাক টি’ সর্বোচ্চ মূল্যে বিক্রির রেকর্ড গড়েছে।',
      'উৎপাদন বৃদ্ধির পাশাপাশি চা শ্রমিকদের দীর্ঘদিনের মৌলিক দাবিসমূহ বাস্তবায়নে গতকাল জেলা প্রশাসকের সম্মেলন কক্ষে চা বাগান মালিক সমিতি ও চা শ্রমিক ইউনিয়নের সমন্বিত ত্রিপক্ষীয় বৈঠক অনুষ্ঠিত হয়। বৈঠকে শ্রমিক পল্লীর প্রতিটি পরিবারের জন্য নিরাপদ সুপেয় পানির গভীর নলকূপ এবং প্রাথমিক বিদ্যালয় সংস্কারের সিদ্ধান্ত গৃহীত হয়।',
      'চা শ্রমিক পঞ্চায়েত সভাপতি বলেন, ‘আমাদের হাড়ভাঙা পরিশ্রমে দেশের চা শিল্প সমৃদ্ধ হচ্ছে। আমরা চাই আমাদের সন্তানেরা যেন আধুনিক শিক্ষা ও স্বাস্থ্যসেবা থেকে বঞ্চিত না হয়। জেলা প্রশাসনের নতুন উদ্যোগ আমাদের আশা জাগিয়েছে।’'
    ],
    contentEn: [
      'The lush rolling valleys across Chunarughat, Bahubal, and Madhabpur in Habiganj witnessed a bumper tea production this season. Regional data indicates a 12.4% increase in yields.',
      'Favorable climatic conditions and precise ecological management yielded export-grade leaf quality, fetching premium auction prices in Chittagong.',
      'A tripartite administrative agreement held at the District Collectorate confirmed immediate investments in clean drinking water tube wells and school renovations across tea worker lines.'
    ],
    imageUrl: '/src/assets/images/habiganj_lead_tea_garden_1790690174056.jpg',
    imageCaption: 'চুনারুঘাটের একটি চা বাগানে ভোরবেলা চা পাতা উত্তোলনে ব্যস্ত নারী শ্রমিকেরা | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'আনিসুর রহমান শামীম',
      role: 'বিশেষ প্রতিনিধি (কৃষি ও চা শিল্প)',
      location: 'চুনারুঘাট, হবিগঞ্জ',
    },
    publishedAt: '২৯ সেপ্টেম্বর ২০২৬, সকাল ০৮:৩০',
    timeAgo: '২৫ মিনিট আগে',
    readTime: '৪ মিনিট পাঠ',
    isLead: true,
    isBreaking: true,
    views: 4890,
    reactions: {
      like: 420,
      heart: 312,
      clap: 185,
      sad: 4,
    },
    tags: ['হবিগঞ্জ চা শিল্প', 'চুনারুঘাট', 'চা শ্রমিক অধিকার', 'রেকর্ড উৎপাদন', 'কৃষি সংবাদ'],
    comments: [
      {
        id: 'c-1',
        author: 'সুশীল তাঁতি',
        location: 'চানপুর বাগান',
        time: '১৫ মিনিট আগে',
        text: 'আমাদের সন্তানদের প্রাথমিক স্কুল সংস্কারের সিদ্ধান্ত সত্যিই প্রশংসনীয়। আশা করি দ্রুত বাস্তবায়ন হবে।',
      },
      {
        id: 'c-2',
        author: 'ব্যারিস্টার মাহবুবুল আলম',
        location: 'লন্ডন, যুক্তরাজ্য',
        time: '৮ মিনিট আগে',
        text: 'সিলেটের ঐতিহ্যবাহী চায়ের সুবাস সারা বিশ্বে পরিচিত। শ্রমিক ভাই-বোনদের মর্যাদা নিশ্চিত হোক।',
      }
    ],
  },
  {
    id: 'art-02',
    title: 'বিশ্বের বৃহত্তম গ্রাম বানিয়াচংয়ের ঐতিহাসিক ‘সাগরদিঘি’ ঘিরে আন্তর্জাতিক ইকোট্যুরিজম মহাপরিকল্পনা গ্রহণ',
    titleEn: "Masterplan initiated to transform historic Sagor Dighi in Baniachong into an ecotourism landmark",
    slug: 'baniachong-sagor-dighi-ecotourism-masterplan',
    category: 'habiganj',
    upazila: 'baniachong',
    summary: 'ঐতিহাসিক রাজা পদ্মনাভের খনন করা ৬৬ একর আয়তনের বিশালাকার সাগরদিঘির জলধারা ও প্রাকৃতিক সৌন্দর্য রক্ষায় পরিবেশবান্ধব ওয়াকওয়ে, দেশীয় বৃক্ষরোপণ ও সৌরচালিত নৌকা চালুর উদ্যোগ নিয়েছে পর্যটন মন্ত্রণালয়।',
    summaryEn: 'The historic 66-acre Sagor Dighi in Baniachong is being revitalized with eco-walkways, indigenous trees, and solar boat navigation.',
    content: [
      'এশিয়ার সর্ববৃহৎ গ্রাম হিসেবে পরিচিত হবিগঞ্জের বানিয়াচংয়ের অন্যতম প্রধান অহংকার ঐতিহাসিক সাগরদিঘি (কমলারানীর দিঘি)। ৬৬ একর আয়তনের এই সুবিশাল জলাশয়টি শুধু স্থানীয়দের পানির উৎস নয়, এটি মধ্যযুগের স্থাপত্য ও জনহিতৈষী কর্মকাণ্ডের এক অনন্য নিদর্শন।',
      'গতকাল বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয় এবং প্রত্নতত্ত্ব অধিদপ্তরের একটি যৌথ প্রতিনিধি দল সাগরদিঘি এলাকা পরিদর্শন করে। প্রতিনিধি দল জানায়, জলাশয়ের মূল পানির গুণমান অক্ষুণ্ণ রেখে পাড় বাঁধাই ও আধুনিক পর্যটন সুযোগ-সুবিধা তৈরি করা হবে।',
      'প্রকল্পের আওতায় দিঘির চারপাশে ৩ কিলোমিটার দীর্ঘ সবুজ ওয়াকওয়ে, ঐতিহ্যবাহী মাটির শৈলীযুক্ত বিশ্রামাগার এবং রাতে দেখার জন্য দৃষ্টিনন্দন সৌর আলোকসজ্জা থাকবে। কোনো প্রকার ডিজেল চালিত যন্ত্র ব্যবহার ছাড়াই পর্যটকদের জন্য পরিবেশবান্ধব বৈঠা ও সৌর নৌকা চালু করা হবে।',
      'স্থানীয় বীর মুক্তিযোদ্ধা বলেন, ‘বানিয়াচংয়ের হাজার বছরের লোকসংস্কৃতি ও দিঘির রূপ দেখতে দেশ-বিদেশ থেকে পর্যটকেরা আসেন। এই মহাপরিকল্পনা বাস্তবায়িত হলে এলাকার অর্থনৈতিক চিত্র বদলে যাবে।’'
    ],
    contentEn: [
      "Baniachong, celebrated as the world's largest village, is preparing to receive sustainable tourism infrastructure around its crown jewel: the 66-acre historic Sagor Dighi.",
      'A joint archeological delegation confirmed non-invasive waterfront restoration, including a 3km pedestrian greenbelt and solar-powered boat leisure.'
    ],
    imageUrl: '/src/assets/images/habiganj_baniachong_haor_1790690189870.jpg',
    imageCaption: 'গোধূলিবেলায় বানিয়াচংয়ের ঐতিহাসিক সাগরদিঘির শান্ত জলের রূপ | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'ফারুক আহমেদ চৌধুরী',
      role: 'হাওর ও ঐতিহ্য বিষয়ক প্রতিবেদক',
      location: 'বানিয়াচং, হবিগঞ্জ',
    },
    publishedAt: '২৯ সেপ্টেম্বর ২০২৬, সকাল ০৭:১৫',
    timeAgo: '১ ঘণ্টা আগে',
    readTime: '৩ মিনিট পাঠ',
    isFeatured: true,
    views: 3410,
    reactions: {
      like: 298,
      heart: 384,
      clap: 120,
      sad: 1,
    },
    tags: ['বানিয়াচং', 'সাগরদিঘি', 'ঐতিহাসিক নিদর্শন', 'পর্যটন', 'হবিগঞ্জ ঐতিহ্য'],
    comments: [
      {
        id: 'c-3',
        author: 'ডা. সাইফুর রহমান',
        location: 'হবিগঞ্জ সদর',
        time: '৩৫ মিনিট আগে',
        text: 'সাগরদিঘির প্রাকৃতিক পরিবেশ ও পরিযায়ী পাখিদের যাতে কোনো বিঘ্ন না ঘটে, সেদিকে কঠোর নজরদারি রাখা দরকার।',
      }
    ],
  },
  {
    id: 'art-03',
    title: 'খোয়াই নদীর স্থায়ী শহররক্ষা বাঁধ নির্মাণে ১২০০ কোটি টাকার মেগা প্রকল্প অনুমোদন: স্থায়ী মুক্তি পাবে শহরবাসী',
    titleEn: 'Tk 1,200 crore mega project approved for Khowai river flood protection embankment in Habiganj town',
    slug: 'khowai-river-embankment-mega-project-approved-habiganj',
    category: 'habiganj',
    upazila: 'habiganj-sadar',
    summary: 'ভারতের ত্রিপুরা থেকে নেমে আসা খরস্রোতা খোয়াই নদীর আকস্মিক বন্যা ও ভাঙন থেকে হবিগঞ্জ শহর এবং পার্শ্ববর্তী এলাকা রক্ষায় কংক্রিট শিট পাইল ও আধুনিক সøুইচ গেট সম্বলিত স্থায়ী প্রতিরক্ষা প্রকল্পের ছাড়পত্র মিলেছে।',
    summaryEn: 'Executive clearance given for comprehensive concrete sheet-piling and high-capacity sluice gateways across the volatile Khowai riverbank.',
    content: [
      'হবিগঞ্জ জেলাবাসীর দীর্ঘদিনের প্রাণের দাবি ‘খোয়াই নদীর স্থায়ী শহররক্ষা বাঁধ’ বাস্তবায়নে জাতীয় অর্থনৈতিক নির্বাহী কমিটির (একনেক) সভায় এক ঐতিহাসিক অনুমোদন দেওয়া হয়েছে। ১২০০ কোটি টাকা ব্যয়ে এই প্রকল্পে খোয়াই নদীর শহরের ভেতরের অংশের উভয় তীরে আন্তর্জাতিক মানের রিভেটমেন্ট ও গার্ডওয়াল তৈরি করা হবে।',
      'হবিগঞ্জ পানি উন্নয়ন বোর্ডের নির্বাহী প্রকৌশলী জানান, প্রতি বছর বর্ষা মৌসুমে ভারতের পাহাড়ি ঢলে খোয়াই নদীর পানি বিপৎসীমার রেকর্ড উচ্চতায় প্রবাহিত হয়। শহরের প্রাণকেন্দ্র মাছুলিয়া, গরুর বাজার ও রামপুর এলাকায় ভাঙন ঠেকাতে দিনরাত বালুর বস্তা ফেলতে হতো।',
      'নতুন প্রকল্পে স্থায়ী ড্রেজিংয়ের মাধ্যমে নদীর নাব্যতা ফিরিয়ে আনা হবে এবং শহরের বর্জ্য যাতে সরাসরি নদীতে না পড়ে সেজন্য বিশেষ ওয়াটার ট্রিটমেন্ট বাফার জোন স্থাপন করা হবে।',
      'হবিগঞ্জ পৌরসভার নাগরিক কমিটির সভাপতি মন্তব্য করেন, ‘এই বাঁধ বাস্তবায়ন হলে ৫০ বছরের আতঙ্ক ঘুচবে। এটি হবিগঞ্জের ইতিহাসের অন্যতম বড় উন্নয়ন মাইলফলক।’'
    ],
    contentEn: [
      'The executive committee has greenlit the long-awaited Khowai River Urban Flood Wall project, addressing decades of flash-flood vulnerabilities during monsoon downpours.',
      'The engineering layout features reinforced riverbed dredging, concrete armoring, and urban runoff treatment zones.'
    ],
    imageUrl: '/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg',
    imageCaption: 'হবিগঞ্জ শহরের বুক চিরে বয়ে চলা খোয়াই নদী ও সংলগ্ন ব্রিজ | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'মো. শাহজাহান কবির',
      role: 'স্টাফ রিপোর্টার',
      location: 'হবিগঞ্জ সদর',
    },
    publishedAt: '২৯ সেপ্টেম্বর ২০২৬, ভোর ০৬:৩০',
    timeAgo: '২ ঘণ্টা আগে',
    readTime: '৪ মিনিট পাঠ',
    isFeatured: true,
    views: 5210,
    reactions: {
      like: 610,
      heart: 480,
      clap: 290,
      sad: 2,
    },
    tags: ['খোয়াই নদী', 'শহররক্ষা বাঁধ', 'হবিগঞ্জ সদর', 'বন্যা প্রতিরোধ', 'মেগা প্রকল্প'],
    comments: [],
  },
  {
    id: 'art-04',
    title: 'বৃন্দাবন সরকারি কলেজের ৯৫তম বর্ষপূর্তিতে নতুন আধুনিক মাল্টিমিডিয়া একাডেমিক ভবন ও ডিজিটাল লাইব্রেরির উদ্বোধন',
    titleEn: 'Brindaban Govt College inaugurates digital research library and auditorium on 95th anniversary',
    slug: 'brindaban-govt-college-95th-anniversary-digital-library',
    category: 'habiganj',
    upazila: 'habiganj-sadar',
    summary: 'বৃহত্তর সিলেটের অন্যতম প্রাচীন ও ঐতিহ্যবাহী বিদ্যাপীঠ বৃন্দাবন সরকারি কলেজে শিক্ষার্থীদের উচ্চতর গবেষণা, ই-লাইব্রেরি এবং কোডিং ল্যাব সংবলিত ৫ তলা বিশিষ্ট নতুন ভবনের যাত্রা শুরু হয়েছে।',
    summaryEn: 'One of Greater Sylhets oldest academies unveils a 5-story tech hub and research library for its 20,000+ students.',
    content: [
      '১৯৩১ সালে প্রতিষ্ঠিত হবিগঞ্জের ঐতিহ্যবাহী উচ্চশিক্ষা প্রতিষ্ঠান ‘বৃন্দাবন সরকারি কলেজ’ তার গৌরবময় ৯৫তম প্রতিষ্ঠাবার্ষিকী উদযাপন করছে। এ উপলক্ষে আজ সকালে কলেজ ক্যাম্পাসে নবনির্মিত আধুনিক ‘বঙ্গবন্ধু ও মুক্তিযুদ্ধ কর্নার’ সমৃদ্ধ ই-লাইব্রেরি ও অডিটোরিয়ামের শুভ উদ্বোধন করা হয়।',
      'উদ্বোধনী অনুষ্ঠানে কলেজের অধ্যক্ষ মহোদয় বলেন, ‘বৃন্দাবন কলেজ বহু রাজনীতিবিদ, বুদ্ধিজীবী ও গবেষক তৈরি করেছে। নতুন এই ডিজিটাল লাইব্রেরিতে দেশি-বিদেশি ৫০ হাজারের বেশি জার্নাল ও গবেষণা গ্রন্থ অনলাইনে পড়তে পারবে শিক্ষার্থীরা।’',
      'ক্যাম্পাসে উপস্থিত বর্তমান ও প্রাক্তন শিক্ষার্থীদের মধ্যে ছিল উৎসবের আমেজ। বিজ্ঞান বিভাগের শিক্ষার্থীরা কৃত্রিম বুদ্ধিমত্তা ও আঞ্চলিক কৃষি সমস্যা সমাধান নিয়ে বিশেষ প্রকল্প প্রদর্শন করেন।'
    ],
    contentEn: [
      'Founded in 1931, the historic Brindaban Govt College marked its milestone year with a fully networked digital library and STEM computing center.'
    ],
    imageUrl: '/src/assets/images/habiganj_brindaban_college_1790690213214.jpg',
    imageCaption: 'বৃন্দাবন সরকারি কলেজের সবুজ চত্বরে নতুন একাডেমিক ভবনের প্রাঙ্গণ | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'রওশন আরা বেগম',
      role: 'শিক্ষা ও ক্যাম্পাস প্রতিনিধি',
      location: 'হবিগঞ্জ',
    },
    publishedAt: '২৯ সেপ্টেম্বর ২০২৬, সকাল ০৯:০০',
    timeAgo: '১০ মিনিট আগে',
    readTime: '৩ মিনিট পাঠ',
    isFeatured: true,
    views: 1820,
    reactions: {
      like: 215,
      heart: 180,
      clap: 95,
      sad: 0,
    },
    tags: ['বৃন্দাবন কলেজ', 'হবিগঞ্জ শিক্ষা', 'ডিজিটাল লাইব্রেরি', 'ক্যাম্পাস নিউজ'],
    comments: [],
  },
  {
    id: 'art-05',
    title: 'ঢাকা-সিলেট ৬ লেন এক্সপ্রেসওয়ের মাধবপুর অংশে দ্রুত কাজ এগিয়ে চলছে: খুলছে নতুন শিল্পাঞ্চল সম্ভাবনার দ্বার',
    titleEn: 'Dhaka-Sylhet 6-lane highway work surges in Madhabpur corridor, accelerating regional industrial growth',
    slug: 'dhaka-sylhet-highway-madhabpur-industrial-growth',
    category: 'economy',
    upazila: 'madhabpur',
    summary: 'ঢাকা-সিলেট জাতীয় মহাসড়ককে ৬ লেনে রূপান্তর প্রকল্পের মাধবপুর অংশে ফ্লাইওভার ও আন্ডারপাস নির্মাণের কাজ ইতিমধ্যে ৭০ শতাংশ সম্পন্ন হয়েছে। এর ফলে রাজধানী ঢাকার সাথে ভ্রমণের সময় কমে আসবে অর্ধেকে।',
    summaryEn: 'Over 70% of overpasses and underpass civil works in the Madhabpur section are finished, promising slashed transit times to Dhaka.',
    content: [
      'দেশের অর্থনীতির অন্যতম গুরুত্বপূর্ণ ধমনি ঢাকা-সিলেট মহাসড়কের মাধবপুর অংশে চলছে বিশাল কর্মযজ্ঞ। মাধবপুরের নোয়াপাড়া ও জগদীশপুর এলাকায় প্রতিষ্ঠিত সিরামিক, টেক্সটাইল এবং খাদ্য প্রক্রিয়াজাতকরণ কারখানাগুলোর পণ্য পরিবহনে এই এক্সপ্রেসওয়ে যুগান্তকারী ভূমিকা রাখবে।',
      'প্রকল্প পরিচালক জানান, আন্তর্জাতিক মানের ড্রেনেজ ব্যবস্থা এবং ধীরগতির স্থানীয় যানবাহনের জন্য পৃথক সার্ভিস লেন রাখা হয়েছে, যা সড়ক দুর্ঘটনার হার প্রায় শূন্যের কোঠায় নামিয়ে আনবে।'
    ],
    contentEn: [
      'Infrastructure teams in Madhabpur report substantial progression on dedicated highway service lanes, benefiting local ceramic and manufacturing clusters.'
    ],
    imageUrl: '/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg',
    imageCaption: 'মাধবপুরে মহাসড়ক সংযোগ সড়কের নির্মাণ কাজ পরিদর্শন | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'কামাল উদ্দিন',
      role: 'অর্থনীতি বিষয়ক প্রতিবেদক',
      location: 'মাধবপুর, হবিগঞ্জ',
    },
    publishedAt: '২৯ সেপ্টেম্বর ২০২৬, ভোর ০৫:৪৫',
    timeAgo: '৩ ঘণ্টা আগে',
    readTime: '২ মিনিট পাঠ',
    views: 2980,
    reactions: {
      like: 340,
      heart: 190,
      clap: 120,
      sad: 5,
    },
    tags: ['মাধবপুর', 'ঢাকা-সিলেট এক্সপ্রেসওয়ে', 'যোগাযোগ', 'শিল্পায়ন'],
    comments: [],
  },
  {
    id: 'art-06',
    title: 'নবীগঞ্জের দিনারপুর পাহাড়ি এলাকায় মাল্টার বাণিজ্যিক চাষে বিপ্লব: উদ্বুদ্ধ হচ্ছেন তরুণ উদ্যোক্তারা',
    titleEn: 'Sweet orange and malta cultivation boom across Dinarpur hills in Nabiganj',
    slug: 'nabiganj-dinarpur-hills-malta-citrus-farming',
    category: 'economy',
    upazila: 'nabiganj',
    summary: 'এক সময় অনাবাদি পড়ে থাকা নবীগঞ্জের দিনারপুর পাহাড়ি টিলাগুলোতে উন্নত জাতের বারি মাল্টা-১ ও কমলার ফলন নজর কাড়ছে। লন্ডন প্রবাসীদের সহায়তায় গড়ে উঠেছে শতাধিক আধুনিক ফলজ বাগান।',
    summaryEn: 'Youth entrepreneurs in Nabiganj are transforming hillside terrain into profitable commercial orchards with diaspora investment.',
    content: [
      'হবিগঞ্জের নবীগঞ্জ উপজেলার দিনারপুর পরগণার পাহাড়ি লাল মাটির টিলা এখন মিষ্টি মাল্টা ও লেবু জাতীয় ফলে ছেয়ে গেছে। উপজেলা কৃষি সম্প্রসারণ অধিদপ্তরের সহযোগিতায় আধুনিক ড্রিপ ইরিগেশন পদ্ধতিতে চাষাবাদ করায় ফলন হয়েছে আশাতীত।',
      'যুক্তরাজ্য প্রবাসী এক তরুণ উদ্যোক্তা বলেন, ‘বিদেশে বসে কেবল বাড়ি-গাড়ি না করে এলাকার মাটিকে কাজে লাগাতে চেয়েছিলাম। এখন আমার বাগানে ৩০ জন স্থানীয় যুবকের কর্মসংস্থান হয়েছে।’'
    ],
    contentEn: [
      'Young agro-entrepreneurs backed by expatriates in the UK have successfully turned Dinarpur hills into thriving citrus orchards.'
    ],
    imageUrl: '/src/assets/images/habiganj_lead_tea_garden_1790690174056.jpg',
    imageCaption: 'দিনারপুর পাহাড়ের টিলায় পাকা মাল্টা ফলন | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'সেলিম চৌধুরী',
      role: 'উপজেলা প্রতিনিধি',
      location: 'নবীগঞ্জ, হবিগঞ্জ',
    },
    publishedAt: '২৮ সেপ্টেম্বর ২০২৬, রাত ০৯:৩০',
    timeAgo: '১০ ঘণ্টা আগে',
    readTime: '৩ মিনিট পাঠ',
    views: 3100,
    reactions: {
      like: 410,
      heart: 270,
      clap: 160,
      sad: 0,
    },
    tags: ['নবীগঞ্জ', 'দিনারপুর', 'মাল্টা চাষ', 'প্রবাসী উদ্যোক্তা'],
    comments: [],
  },
  {
    id: 'art-07',
    title: 'শায়েস্তাগঞ্জ শতবর্ষী রেলওয়ে জংশনের আধুনিকায়ন কাজ শুরু: যুক্ত হচ্ছে স্বয়ংক্রিয় সিগন্যালিং ও ডাবল ট্র্যাক',
    titleEn: 'Historic Shayestaganj railway junction modernization begins with automated interlocking signaling',
    slug: 'shayestaganj-railway-junction-modernization-double-track',
    category: 'habiganj',
    upazila: 'shayestaganj',
    summary: 'ব্রিটিশ আমলে ১৯০৩ সালে প্রতিষ্ঠিত আসাম-বেঙ্গল রেলওয়ের ঐতিহ্যবাহী শায়েস্তাগঞ্জ জংশন স্টেশনকে নতুন রূপ দেওয়া হচ্ছে। বাড়ানো হচ্ছে প্ল্যাটফর্মের দৈর্ঘ্য এবং আধুনিক যাত্রী বিশ্রামাগার।',
    summaryEn: 'Renovation kicks off for the 1903 Shayestaganj station to accommodate express trains and modern commuter facilities.',
    content: [
      'হবিগঞ্জের যোগাযোগ ব্যবস্থার কেন্দ্রবিন্দু শায়েস্তাগঞ্জ রেল জংশন। ঢাকা, চট্টগ্রাম, সিলেট রুটের হাজার হাজার যাত্রী প্রতিদিন এই স্টেশন দিয়ে যাতায়াত করেন। নতুন প্রকল্পের অধীনে যাত্রীদের জন্য লিফট, এসকেলেটর এবং ডিজিটাল টিকিট কাউন্টার স্থাপন করা হচ্ছে।'
    ],
    contentEn: [
      'Station platforms are being lengthened and modernized with digital passenger displays and accessibility ramps.'
    ],
    imageUrl: '/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg',
    imageCaption: 'শায়েস্তাগঞ্জ রেলওয়ে স্টেশনে যাত্রীদের আগমন | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'আহসান হাবিব',
      role: 'রেলওয়ে ও যোগাযোগ প্রতিনিধি',
      location: 'শায়েস্তাগঞ্জ, হবিগঞ্জ',
    },
    publishedAt: '২৮ সেপ্টেম্বর ২০২৬, সন্ধ্যা ০৭:০০',
    timeAgo: '১৩ ঘণ্টা আগে',
    readTime: '২ মিনিট পাঠ',
    views: 2650,
    reactions: {
      like: 290,
      heart: 180,
      clap: 110,
      sad: 1,
    },
    tags: ['শায়েস্তাগঞ্জ', 'বাংলাদেশ রেলওয়ে', 'জংশন আধুনিকায়ন'],
    comments: [],
  },
  {
    id: 'art-08',
    title: 'আজমিরীগঞ্জ ও লাখাইয়ের হাওরাঞ্চলে বোরো মৌসুমের প্রস্তুতি শুরু: কৃষকদের মুখে সোনালি স্বপ্নের হাসি',
    titleEn: 'Haor farmers in Ajmiriganj and Lakhai commence seedbed prep for upcoming Boro season',
    slug: 'ajmiriganj-lakhai-haor-boro-seedbed-preparation',
    category: 'habiganj',
    upazila: 'ajmiriganj',
    summary: 'বর্ষার পানি কমতে শুরু করায় হবিগঞ্জের কালনী ও কুশিয়ারাতীরবর্তী বিস্তীর্ণ হাওরে বীজতলা তৈরির তোড়জোড় শুরু করেছেন কৃষকরা। এবার বন্যা সহনশীল উচ্চফলনশীল ধানের বীজ সরবরাহের উদ্যোগ নেওয়া হয়েছে।',
    summaryEn: 'Wetland farmers across Ajmiriganj and Lakhai prepare fertile sediment seedbeds with subsidized flood-tolerant seeds.',
    content: [
      'হবিগঞ্জের শস্যভাণ্ডারখ্যাত হাওরাঞ্চল আজমিরীগঞ্জ, বানিয়াচং ও লাখাইয়ে পানি নেমে যাওয়ার সাথে সাথে মাঠে নেমে পড়েছেন চাষিরা। কৃষি বিভাগ জানায়, আগাম বন্যার ঝুঁকি এড়াতে স্বল্পমেয়াদি ও ব্রি-২৮/২৯ বিকল্প জাতের ধান রোপণে কৃষকদের প্রশিক্ষণ দেওয়া হচ্ছে।'
    ],
    contentEn: [
      'Agricultural officers are guiding haor farming communities on shorter-cycle paddy variants to outpace early flash floods.'
    ],
    imageUrl: '/src/assets/images/habiganj_baniachong_haor_1790690189870.jpg',
    imageCaption: 'আজমিরীগঞ্জের হাওরে ভোরে কৃষকদের নৌকায় বীজতলা তৈরির প্রস্তুতি | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'জালাল উদ্দিন মজুমদার',
      role: 'হাওর প্রতিনিধি',
      location: 'আজমিরীগঞ্জ, হবিগঞ্জ',
    },
    publishedAt: '২৮ সেপ্টেম্বর ২০২৬, বিকেল ০৫:৩০',
    timeAgo: '১৫ ঘণ্টা আগে',
    readTime: '৩ মিনিট পাঠ',
    views: 1950,
    reactions: {
      like: 220,
      heart: 260,
      clap: 90,
      sad: 0,
    },
    tags: ['আজমিরীগঞ্জ', 'লাখাই', 'হাওর কৃষি', 'বোরো ধান'],
    comments: [],
  },
  {
    id: 'art-09',
    title: 'যুক্তরাজ্য ও ইউরোপে হবিগঞ্জের প্রবাসীদের রেমিট্যান্স প্রেরণে নতুন রেকর্ড: জেলায় অর্থনৈতিক স্থিতিশীলতা',
    titleEn: 'UK and European expatriates from Habiganj post historic monthly remittance figures',
    slug: 'uk-europe-habiganj-diaspora-remittance-record',
    category: 'diaspora',
    summary: 'চলতি মাসে বৈধ ব্যাংকিং চ্যানেলে হবিগঞ্জ জেলার জন্য প্রেরিত প্রবাসী আয়ে ২৫ শতাংশ প্রবৃদ্ধি অর্জিত হয়েছে। ব্যাংকিং প্রণোদনা ও দ্রুত বিতরণ সেবার কারণে প্রবাসীরা সরকারি মাধ্যমে টাকা পাঠাতে আগ্রহী হচ্ছেন।',
    summaryEn: 'Incentivized bank remittance channels see a 25% surge from the significant Habiganj community living across London, Birmingham, and Europe.',
    content: [
      'সিলেট বিভাগের অন্যান্য জেলার মতো হবিগঞ্জের নবীগঞ্জ, বাহুবল ও মাধবপুরের বিপুল সংখ্যক বাসিন্দা যুক্তরাজ্য, মধ্যপ্রাচ্য ও ইউরোপের বিভিন্ন দেশে বাস করেন। জেলা প্রশাসকের আয়োজনে গতকাল প্রবাসী পরিবারদের সেবা দিতে ‘ওয়ান স্টপ প্রবাসী সহায়তা ডেস্ক’ চালু করা হয়।'
    ],
    contentEn: [
      'Remittances remain the financial bedrock of the district, prompting local banks and administration to expedite foreign remittance processing.'
    ],
    imageUrl: '/src/assets/images/habiganj_brindaban_college_1790690213214.jpg',
    imageCaption: 'হবিগঞ্জ শহরের প্রধান ব্যাংক পল্লীতে প্রবাসী পরিবারের লেনদেন | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'এম কে চৌধুরী',
      role: 'প্রবাসী সংবাদ ডেস্ক',
      location: 'সিলেট-হবিগঞ্জ ডেস্ক',
    },
    publishedAt: '২৮ সেপ্টেম্বর ২০২৬, দুপুর ০২:১৫',
    timeAgo: '১৮ ঘণ্টা আগে',
    readTime: '২ মিনিট পাঠ',
    views: 3820,
    reactions: {
      like: 512,
      heart: 320,
      clap: 210,
      sad: 0,
    },
    tags: ['প্রবাসী সংবাদ', 'রেমিট্যান্স', 'যুক্তরাজ্য প্রবাসী', 'হবিগঞ্জ অর্থনীতি'],
    comments: [],
  },
  {
    id: 'art-10',
    title: 'হবিগঞ্জ জেলা স্টেডিয়ামে শুরু হলো জেলা প্রশাসক গোল্ডকাপ ফুটবল টুর্নামেন্ট: দর্শক উদ্দীপনা তুঙ্গে',
    titleEn: 'Deputy Commissioner Gold Cup Football Tournament kicks off at Habiganj District Stadium',
    slug: 'habiganj-dc-gold-cup-football-tournament-kicks-off',
    category: 'sports',
    upazila: 'habiganj-sadar',
    summary: 'হবিগঞ্জের ৯টি উপজেলার সেরা দলগুলোকে নিয়ে শুরু হয়েছে জমজমাট ফুটবল উৎসব। উদ্বোধনী ম্যাচে নবীগঞ্জ উপজেলা দল ২-১ গোলে মাধবপুর উপজেলা দলকে পরাজিত করেছে।',
    summaryEn: 'Thousands pack the stands as 9 upazilas face off in the premier district sporting event.',
    content: [
      'হবিগঞ্জ জেলা ক্রীড়া সংস্থার আয়োজনে জেলা স্টেডিয়ামে ফুটবলপ্রেমী দর্শকের উপচে পড়া ভিড় লক্ষ্য করা গেছে। উদ্বোধনী অনুষ্ঠানে প্রধান অতিথি হিসেবে জাতীয় ক্রীড়া তারকা ও বিশিষ্ট ব্যক্তিবর্গ উপস্থিত ছিলেন।'
    ],
    contentEn: [
      'Vibrant sportsmanship resonated across the stands as local youth showed exceptional talent in the district championship.'
    ],
    imageUrl: '/src/assets/images/habiganj_lead_tea_garden_1790690174056.jpg',
    imageCaption: 'জেলা স্টেডিয়ামে ফুটবল টুর্নামেন্টের উত্তেজনাপূর্ণ মুহূর্ত | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'তানভীর আহমেদ',
      role: 'ক্রীড়া প্রতিবেদক',
      location: 'হবিগঞ্জ সদর',
    },
    publishedAt: '২৮ সেপ্টেম্বর ২০২৬, সকাল ১১:০০',
    timeAgo: '২২ ঘণ্টা আগে',
    readTime: '২ মিনিট পাঠ',
    views: 2450,
    reactions: {
      like: 340,
      heart: 180,
      clap: 220,
      sad: 2,
    },
    tags: ['হবিগঞ্জ খেলাধুলা', 'ফুটবল টুর্নামেন্ট', 'জেলা স্টেডিয়াম'],
    comments: [],
  },
  {
    id: 'art-11',
    title: 'শাহ আবদুল করিম ও রাধারমণের ভাবধারায় খোয়াই নদীর তীরে দুই দিনব্যাপী আঞ্চলিক লোকসংগীত উৎসব',
    titleEn: 'Two-day regional Baul & Folk Music Festival celebrated along Khowai riverfront',
    slug: 'baul-folk-festival-khowai-riverfront-habiganj',
    category: 'entertainment',
    upazila: 'habiganj-sadar',
    summary: 'ভাটি অঞ্চলের মরমি সাধক শাহ আবদুল করিম, হাসন রাজা ও রাধারমণ দত্তের অমর সৃষ্টি নিয়ে সুরের মূর্ছনায় মাতল হবিগঞ্জের লোকপ্রেমী মানুষ। দূর-দূরান্ত থেকে অংশ নিয়েছেন বাউল শিল্পীরা।',
    summaryEn: 'Celebrated folk bards gathered on the banks of Khowai to perform traditional Dhamail and mystic Baul melodies.',
    content: [
      'হবিগঞ্জের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যের প্রধান চালিকাশক্তি ভাটির লোকসংগীত। বাউল গবেষকগণ বলেন, হবিগঞ্জ ও সুনামগঞ্জের হাওর জনপদ শতাব্দী ধরে সাম্প্রদায়িক সম্প্রীতি ও মরমি সংগীতের মেলবন্ধন তৈরি করেছে।'
    ],
    contentEn: [
      'Hundreds of cultural enthusiasts attended nightly musical sessions featuring dotara, dhol, and traditional acoustic rhythm.'
    ],
    imageUrl: '/src/assets/images/habiganj_baniachong_haor_1790690189870.jpg',
    imageCaption: 'খোয়াই নদীর তীরে মুক্তমঞ্চে বাউল গানের আসর | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'সৌরভ দাশগুপ্ত',
      role: 'সংস্কৃতি ও সাহিত্য প্রতিনিধি',
      location: 'হবিগঞ্জ',
    },
    publishedAt: '২৭ সেপ্টেম্বর ২০২৬, রাত ১০:০০',
    timeAgo: '১ দিন আগে',
    readTime: '৩ মিনিট পাঠ',
    views: 2900,
    reactions: {
      like: 480,
      heart: 520,
      clap: 310,
      sad: 0,
    },
    tags: ['লোকসংগীত', 'বাউল গান', 'হবিগঞ্জ সংস্কৃতি', 'ধামাইল গান'],
    comments: [],
  },
  {
    id: 'art-12',
    title: 'সম্পাদকীয়: খোয়াই নদী খনন ও হবিগঞ্জ শহর রক্ষার দীর্ঘমেয়াদি পরিকল্পনা জরুরি',
    titleEn: 'Editorial: Sustainable dredging and long-term vision needed for Khowai river conservation',
    slug: 'editorial-khowai-river-dredging-long-term-conservation',
    category: 'opinion',
    summary: 'কেবল বালুর বস্তা আর মৌসুমী বরাদ্দ নয়, আন্তর্জাতিক নদী হিসেবে খোয়াইয়ের পলি অপসারণ ও উজানের পানির যৌথ প্রবাহ ব্যবস্থাপনায় স্থায়ী নীতি নির্ধারণ করতে হবে।',
    summaryEn: 'Comprehensive transboundary river diplomacy and scheduled desiltation are vital to protecting public life and farmlands.',
    content: [
      'খোয়াই নদী হবিগঞ্জের প্রাণপ্রবাহ হলেও বর্ষাকালে তা আতঙ্কের রূপ নেয়। নদীগর্ভে ক্রমাগত পলি জমে তলদেশ উঁচু হয়ে যাওয়ায় সামান্য পাহাড়ি ঢলেই শহর প্লাবিত হওয়ার উপক্রম হয়।',
      'প্রস্তাবিত মেগা প্রকল্পের যথাযথ বাস্তবায়ন, স্বচ্ছতা এবং পরিবেশ অধিদপ্তরের কঠোর তদারকি নিশ্চিত করতে হবে। কোনোভাবেই যাতে প্রভাবশালীদের নদী দখল ও অপরিকল্পিত বালি উত্তোলনের সুযোগ না দেওয়া হয়।'
    ],
    contentEn: [
      'Transparent execution and zero tolerance for illegal riverbed extraction must guide the new conservation investments.'
    ],
    imageUrl: '/src/assets/images/habiganj_khowai_river_bridge_1790690202768.jpg',
    imageCaption: 'খোয়াই নদীর বুক জুড়ে পলি জমে চর সৃষ্টি হওয়ার দৃশ্য | ছবি: হবিগঞ্জ২৪',
    reporter: {
      name: 'আহমেদ জামান চৌধুরী',
      role: 'প্রধান সম্পাদক',
      location: 'হবিগঞ্জ২৪ সম্পাদকীয় বোর্ড',
    },
    publishedAt: '২৭ সেপ্টেম্বর ২০২৬, সকাল ০৮:০০',
    timeAgo: '১ দিন আগে',
    readTime: '৪ মিনিট পাঠ',
    views: 4120,
    reactions: {
      like: 630,
      heart: 310,
      clap: 290,
      sad: 1,
    },
    tags: ['সম্পাদকীয়', 'মতামত', 'খোয়াই নদী', 'নাগরিক ভাবনা'],
    comments: [],
  },
];

export const BREAKING_TICKERS = [
  'চুনারুঘাট ও বাহুবলের ২৪টি চা বাগানে চলতি মৌসুমে রেকর্ড উৎপাদন, শ্রমিকদের কল্যাণে বিশেষ উন্নয়ন তহবিল ঘোষণা',
  'খোয়াই নদীর স্থায়ী শহররক্ষা বাঁধ নির্মাণে একনেকে ১২০০ কোটি টাকার মেগা প্রকল্প অনুমোদন',
  'বিশ্বের বৃহত্তম গ্রাম বানিয়াচংয়ের ঐতিহাসিক সাগরদিঘি ঘিরে আন্তর্জাতিক ইকোট্যুরিজম মহাপরিকল্পনা গ্রহণ',
  'ঢাকা-সিলেট ৬ লেন মহাসড়কের মাধবপুর অংশে দ্রুত কাজ চলছে, চালু হচ্ছে আধুনিক আন্ডারপাস',
  'নবীগঞ্জের দিনারপুর পাহাড়ে লন্ডন প্রবাসীদের অর্থায়নে আধুনিক মাল্টা ও ফলজ বাগান বিপ্লব',
  'শায়েস্তাগঞ্জ শতবর্ষী রেলওয়ে জংশনে স্বয়ংক্রিয় সিগন্যালিং সিস্টেম ও আধুনিক যাত্রীসুবিধা সংযোজন শুরু',
];

export const BREAKING_TICKERS_EN = [
  'Record harvest in 24 tea estates across Chunarughat and Bahubal; welfare package unveiled',
  'Tk 1,200 crore mega plan cleared for permanent flood barrier along Khowai river in Habiganj town',
  'Historic 66-acre Sagor Dighi in Baniachong to be conserved under ecotourism masterplan',
  'Six-lane Dhaka-Sylhet expressway in Madhabpur corridor advances toward completion',
  'Expatriate agro-investments spur citrus orchards across Dinarpur hills in Nabiganj',
  'Century-old Shayestaganj railway hub begins major digital signaling upgrade',
];
