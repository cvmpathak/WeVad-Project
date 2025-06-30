import React, { useState } from 'react';
import { InstagramPost, YouTubeVideo, DriveVideo, VideoPlayerProps } from '../types/types';
import { Play, ExternalLink, Instagram, Youtube, FolderOpen, Eye, Heart, MessageCircle, Calendar, Filter, Pause } from 'lucide-react';

type PortfolioItem = InstagramPost | YouTubeVideo | DriveVideo;

const Portfolio = () => {

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Instagram Posts Data
  const instagramPosts: InstagramPost[] = [
    {
      id: 101,
      type: 'instagram',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      is_video: true,
      caption: 'Brand identity design for TechStart - Creating memorable experiences through thoughtful design 🎨 #BrandDesign #CreativeAgency #TechStart',
      likes: 1247,
      comments: 89,
      shares: 23,
      saves: 156,
      date: '2024-03-15',
      location: 'New York, NY',
      hashtags: ['#BrandDesign', '#CreativeAgency', '#TechStart', '#LogoDesign', '#VisualIdentity'],
      engagement_rate: '8.2%',
      reach: '15,234',
      impressions: '18,567',
      duration: '0:45'
    },
    {
      id: 102,
      type: 'instagram',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      is_video: false,
      caption: 'Social media campaign results that speak for themselves 📈 300% engagement increase! Our data-driven approach delivers real results for our clients.',
      likes: 892,
      comments: 56,
      shares: 34,
      saves: 78,
      date: '2024-03-12',
      location: 'Manhattan, NY',
      hashtags: ['#SocialMediaMarketing', '#DigitalResults', '#ROI', '#MarketingStrategy'],
      engagement_rate: '9.1%',
      reach: '12,456',
      impressions: '16,234'
    },
    {
      id: 103,
      type: 'instagram',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4',
      is_video: true,
      caption: 'Behind the scenes of our latest photoshoot 📸 Creating stunning visuals that tell your brand story.',
      likes: 1156,
      comments: 73,
      shares: 41,
      saves: 189,
      date: '2024-03-10',
      location: 'Brooklyn, NY',
      hashtags: ['#BehindTheScenes', '#Photography', '#BrandStory', '#Creative'],
      engagement_rate: '7.8%',
      reach: '14,789',
      impressions: '17,234',
      duration: '1:12'
    }
  ];

  // YouTube Videos Data
  const youtubeVideos: YouTubeVideo[] = [
    {
      id: 201,
      type: 'youtube',
      thumbnail: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      title: 'Digital Marketing Strategy 2024: Complete Guide',
      description: 'Learn the latest digital marketing strategies that drive real results for businesses in 2024.',
      duration: '12:45',
      views: '25,400',
      likes: '1,234',
      comments: '89',
      subscribers_gained: '156',
      watch_time: '8.5 minutes',
      retention_rate: '67%',
      date: '2024-03-14',
      tags: ['Digital Marketing', 'Strategy', '2024 Trends', 'Business Growth']
    },
    {
      id: 202,
      type: 'youtube',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4',
      title: 'Brand Identity Design Process - From Concept to Launch',
      description: 'Take a behind-the-scenes look at our complete brand identity design process.',
      duration: '18:32',
      views: '18,700',
      likes: '987',
      comments: '67',
      subscribers_gained: '89',
      watch_time: '12.3 minutes',
      retention_rate: '72%',
      date: '2024-03-11',
      tags: ['Brand Design', 'Creative Process', 'Logo Design', 'Visual Identity']
    }
  ];

  // Google Drive Videos Data
  const driveVideos: DriveVideo[] = [
    {
      id: 301,
      type: 'drive',
      thumbnail: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_20mb.mp4',
      title: 'Client Project: Restaurant Rebrand Campaign',
      description: 'Complete rebrand campaign for FreshEats Restaurant Group including video production, social media strategy, and brand identity redesign.',
      duration: '3:24',
      client: 'FreshEats Restaurant Group',
      project_type: 'Complete Rebrand',
      industry: 'Food & Beverage',
      budget_range: '$25,000 - $50,000',
      timeline: '3 months',
      team_size: '6 specialists',
      results: {
        brand_awareness: '+180%',
        social_engagement: '+250%',
        website_traffic: '+320%',
        revenue_increase: '+45%'
      },
      services: ['Brand Identity', 'Video Production', 'Social Media', 'Web Design'],
      date: '2024-03-13',
      testimonial: "Wevad Media transformed our brand completely. The results exceeded our expectations!",
      client_rating: 5
    },
    {
      id: 302,
      type: 'drive',
      thumbnail: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_30mb.mp4',
      title: 'Product Launch Video - TechStart',
      description: 'High-impact product launch video that generated 2M+ views across platforms.',
      duration: '2:15',
      client: 'TechStart Solutions',
      project_type: 'Product Launch Campaign',
      industry: 'Technology',
      budget_range: '$15,000 - $25,000',
      timeline: '6 weeks',
      team_size: '4 specialists',
      results: {
        video_views: '2.1M+',
        lead_generation: '+400%',
        conversion_rate: '+85%',
        market_penetration: '+60%'
      },
      services: ['Video Production', 'Digital Marketing', 'Content Strategy'],
      date: '2024-03-07',
      testimonial: "The video campaign was a massive success. We couldn't be happier with the results!",
      client_rating: 5
    }
  ];

  const filters = ['All', 'Instagram', 'YouTube', 'Client Videos'];

  const getAllContent = () => {
    const allContent = [
      ...instagramPosts,
      ...youtubeVideos,
      ...driveVideos
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (activeFilter === 'All') return allContent;
    if (activeFilter === 'Instagram') return allContent.filter(item => item.type === 'instagram');
    if (activeFilter === 'YouTube') return allContent.filter(item => item.type === 'youtube');
    if (activeFilter === 'Client Videos') return allContent.filter(item => item.type === 'drive');
    console.log(allContent);
    
    return allContent;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'instagram': return <Instagram className="h-5 w-5" />;
      case 'youtube': return <Youtube className="h-5 w-5" />;
      case 'drive': return <FolderOpen className="h-5 w-5" />;
      default: return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'instagram': return 'from-pink-500 to-purple-600';
      case 'youtube': return 'from-red-500 to-red-600';
      case 'drive': return 'from-blue-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const toggleVideoPlay = (videoId:any) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  // Video Player Component for inline playing
  const VideoPlayer = ({ item, isPlaying, onToggle, className = "" }: VideoPlayerProps) => (
    <div className={`relative ${className}`}>
      {isPlaying ? (
        <video
          className="w-full h-full object-cover rounded-2xl"
          controls
          autoPlay
          onEnded={() => onToggle(null)}
        >
          <source src={item.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <img
            src={item.type === 'instagram' ? item.image : item.thumbnail}
            alt={item.type === 'instagram' ? 'Instagram post' : item.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-2xl">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle(item.id);
              }}
              className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-all duration-200 shadow-lg"
            >
              <Play className="h-8 w-8 text-gray-900 ml-1" />
            </button>
          </div>
          {item.duration && (
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm font-medium">
              {item.duration}
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Our Creative <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Explore our latest work across social media, video content, and client projects. 
              Click on any video to play it directly here in perfect 9:16 mobile format.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Instagram className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-gray-300">Daily creative content and behind-the-scenes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Youtube className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">YouTube</h3>
                <p className="text-gray-300">Educational content and tutorials</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <FolderOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Client Work</h3>
                <p className="text-gray-300">Exclusive client project showcases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-white border-b top-16 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Videos play inline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getAllContent().map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className="relative">
                  {/* 9:16 Aspect Ratio Container */}
                  <div className="aspect-[9/16] max-w-xs mx-auto">
                    <VideoPlayer
                      item={item}
                      isPlaying={playingVideo === item.id}
                      onToggle={toggleVideoPlay}
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Type Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${getTypeColor(item.type)} text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-medium`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type === 'drive' ? 'Client' : item.type}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Instagram Post Content */}
                  {item.type === 'instagram' && (
                    <>
                      <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{item.caption}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4 text-red-500" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4 text-blue-500" />
                            <span>{item.comments}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* YouTube Video Content */}
                  {item.type === 'youtube' && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Drive Video Content */}
                  {item.type === 'drive' && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                      <div className="text-sm text-blue-600 font-medium mb-4">Client: {item.client}</div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </>
                  )}

                  {/* Play/Pause Button */}
                  <button
                    onClick={() => toggleVideoPlay(item.id)}
                    className={`inline-flex items-center bg-gradient-to-r ${getTypeColor(item.type)} text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 group w-full justify-center`}
                  >
                    {playingVideo === item.id ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" />
                        <span>Pause Video</span>
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        <span>Play Video</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our creative content drives real engagement and delivers measurable results across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2.5M+", label: "Total Views", icon: <Eye className="h-6 w-6" /> },
              { number: "150K+", label: "Social Followers", icon: <Instagram className="h-6 w-6" /> },
              { number: "85%", label: "Engagement Rate", icon: <Heart className="h-6 w-6" /> },
              { number: "50+", label: "Client Projects", icon: <FolderOpen className="h-6 w-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-4">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's collaborate to create content that engages your audience and drives real results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group"
              >
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://instagram.com/wevadmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;