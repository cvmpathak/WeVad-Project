// src/types/portfolio.ts
export interface InstagramPost {
  id: number;
  type: 'instagram';
  image: string;
  video_url: string;
  is_video: boolean;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  date: string;
  location: string;
  hashtags: string[];
  engagement_rate: string;
  reach: string;
  impressions: string;
  duration?: string;
}

export interface YouTubeVideo {
  id: number;
  type: 'youtube';
  thumbnail: string;
  video_url: string;
  title: string;
  description: string;
  duration: string;
  views: string;
  likes: string;
  comments: string;
  subscribers_gained: string;
  watch_time: string;
  retention_rate: string;
  date: string;
  tags: string[];
}

export interface DriveVideo {
  id: number;
  type: 'drive';
  thumbnail: string;
  video_url: string;
  title: string;
  description: string;
  duration: string;
  client: string;
  project_type: string;
  industry: string;
  budget_range: string;
  timeline: string;
  team_size: string;
  results: {
    [key: string]: string;
  };
  services: string[];
  date: string;
  testimonial: string;
  client_rating: number;
}

export type PortfolioItem = InstagramPost | YouTubeVideo | DriveVideo;

export interface VideoPlayerProps {
  item: PortfolioItem;
  isPlaying: boolean;
  onToggle: (id: number | null) => void;
  className?: string;
}