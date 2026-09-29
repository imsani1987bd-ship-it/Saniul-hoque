export type CategoryKey = 
  | 'all'
  | 'habiganj'
  | 'upazila'
  | 'national'
  | 'politics'
  | 'tea-industry'
  | 'economy'
  | 'diaspora'
  | 'sports'
  | 'entertainment'
  | 'opinion';

export type UpazilaKey = 
  | 'all'
  | 'habiganj-sadar'
  | 'nabiganj'
  | 'madhabpur'
  | 'chunarughat'
  | 'bahubal'
  | 'baniachong'
  | 'ajmiriganj'
  | 'lakhai'
  | 'shayestaganj';

export interface UpazilaInfo {
  id: UpazilaKey;
  nameBn: string;
  nameEn: string;
  taglineBn: string;
  taglineEn: string;
  keySpots: string[];
}

export interface NewsComment {
  id: string;
  author: string;
  location?: string;
  time: string;
  text: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  summary: string;
  summaryEn: string;
  content: string[];
  contentEn: string[];
  category: CategoryKey;
  upazila?: UpazilaKey;
  imageUrl: string;
  imageCaption: string;
  reporter: {
    name: string;
    role: string;
    location: string;
  };
  publishedAt: string;
  timeAgo: string;
  readTime: string;
  isBreaking?: boolean;
  isLead?: boolean;
  isFeatured?: boolean;
  views: number;
  reactions: {
    like: number;
    heart: number;
    clap: number;
    sad: number;
  };
  tags: string[];
  comments: NewsComment[];
}

export interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  sehri?: string;
  iftar?: string;
}

export interface WeatherInfo {
  temp: number;
  conditionBn: string;
  conditionEn: string;
  humidity: number;
  airQuality: string;
  windSpeed: string;
}

export interface CitizenTip {
  id: string;
  name: string;
  phone: string;
  upazila: string;
  title: string;
  description: string;
  timestamp: string;
  status: 'pending' | 'verified' | 'published';
}
