import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Heart,
  Instagram,
  Youtube,
  FolderOpen,
  Eye,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const PortfolioSection = () => {

  const [playingVideo, setPlayingVideo] = React.useState(null);
   const portfolioPreview = [
    {
      id: 1,
      type: 'instagram',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      // Replace with your actual Google Drive share link
      drive_video_url: 'https://drive.google.com/file/d/1feBfd15iqyteqHsZN43DP32oH_ADMs6Y/view?usp=sharing',
      is_video: true,
      caption: 'Brand identity design for Plast India University 🎨',
      likes: 1247,
      platform: 'Instagram',
      duration: '1:00'
    },
    {
      id: 2,
      type: 'youtube',
      thumbnail: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      // Replace with your actual Google Drive share link
      drive_video_url: 'https://drive.google.com/file/d/1TfjHF_QTQHAo8gNDP-_vjB4VzJfjSbFY/view?usp=sharing',
      title: 'FitXHome India',
      views: '25.4K',
      duration: '1:00',
      platform: 'YouTube'
    },
    {
      id: 3,
      type: 'drive',
      thumbnail: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067',
      // Replace with your actual Google Drive share link
      drive_video_url: 'https://drive.google.com/file/d/1oLrkG1yNhaH63kPlIqTIl0cOPAMMY3Kj/view?usp=sharing',
      title: 'Krishna Cancer Aid Association',
      client: 'Krishna Cancer Aid Association',
      duration: '1:06',
      platform: 'Client Work'
    }
  ];

  const convertDriveLink = (driveUrl: any) => {
    if (!driveUrl) return '';

    // Extract file ID from various Google Drive URL formats
    let fileId = '';

    if (driveUrl.includes('/file/d/')) {
      fileId = driveUrl.split('/file/d/')[1].split('/')[0];
    } else if (driveUrl.includes('id=')) {
      fileId = driveUrl.split('id=')[1].split('&')[0];
    } else if (driveUrl.includes('/d/')) {
      fileId = driveUrl.split('/d/')[1].split('/')[0];
    }

    // Return direct video URL for embedding with autoplay
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : driveUrl;
  };


  const getPortfolioIcon = (type: string) => {
    switch (type) {
      case 'instagram': return <Instagram className="h-4 w-4" />;
      case 'youtube': return <Youtube className="h-4 w-4" />;
      case 'drive': return <FolderOpen className="h-4 w-4" />;
      default: return null;
    }
  };

  const getPortfolioColor = (type: string) => {
    switch (type) {
      case 'instagram': return 'from-pink-500 to-purple-600';
      case 'youtube': return 'from-red-500 to-red-600';
      case 'drive': return 'from-blue-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleVideoClick = (videoId: any) => {
    setPlayingVideo(videoId);
  };

  // Video Player Component for Home Page
  const VideoPlayer = ({ item, isPlaying, onPlay, className = "" }: any) => (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={() => onPlay(item.id)}
    >
      {isPlaying ? (
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <iframe
            src={convertDriveLink(item.drive_video_url)}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={item.type === 'instagram' ? 'Instagram video' : item.title}
          />
        </div>
      ) : (
        <>
          <img
            src={item.type === 'instagram' ? item.image : item.thumbnail}
            alt={item.type === 'instagram' ? 'Instagram post' : item.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl group-hover:bg-black/30 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-transform duration-200 shadow-lg">
              <Play className="h-8 w-8 text-gray-900 ml-1" />
            </div>
          </div>
          {item.duration && (
            <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
              {item.duration}
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest from Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a glimpse of our latest work across social media, video content, and client projects. All videos are hosted on Google Drive and play directly here with a single click.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioPreview.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className="relative">
                  {/* 9:16 Aspect Ratio Container */}
                  <div className="aspect-[9/16] max-w-xs mx-auto">
                    <VideoPlayer
                      item={item}
                      isPlaying={playingVideo === item.id}
                      onPlay={handleVideoClick}
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Platform Badge */}
                  <div className={`absolute top-3 left-3 bg-gradient-to-r ${getPortfolioColor(item.type)} text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-medium`}>
                    {getPortfolioIcon(item.type)}
                    <span>{item.platform}</span>
                  </div>
                </div>

                <div className="p-6">
                  {item.type === 'instagram' && (
                    <>
                      <p className="text-gray-700 mb-3">{item.caption}</p>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4 text-red-500" />
                          {/* <span>{item.likes.toLocaleString()}</span> */}
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4 text-blue-500" />
                          <span>89</span>
                        </div>
                      </div>
                    </>
                  )}

                  {item.type === 'youtube' && (
                    <>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Eye className="h-4 w-4" />
                        <span>{item.views} views</span>
                      </div>
                    </>
                  )}

                  {item.type === 'drive' && (
                    <>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">Client: {item.client}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group"
            >
              View Full Portfolio
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;