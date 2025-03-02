'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getYouTubeVideos, YouTubeVideo } from '@/services/youtube';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string>('');

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        const fetchedVideos = await getYouTubeVideos();
        setVideos(fetchedVideos);
        setError(null);
      } catch (err) {
        setError('Failed to load videos. Please try again later.');
        console.error('Error loading videos:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  // Format the published date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Truncate description to a specific length
  const truncateDescription = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const openVideoModal = (videoId: string, title: string) => {
    setSelectedVideo(videoId);
    setSelectedVideoTitle(title);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Educational Videos</span>
          <h2 className={styles.title}>Learn from Dr. Prayas Kumar</h2>
          <p className={styles.subtitle}>
            Watch our educational videos on diabetic foot care, treatments, and prevention strategies
          </p>
          <div className={styles.divider}></div>
        </div>

        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading videos...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorContainer}>
            <p className={styles.errorMessage}>{error}</p>
          </div>
        )}

        {!loading && !error && videos.length === 0 && (
          <div className={styles.emptyContainer}>
            <p>No videos available at the moment. Please check back later.</p>
          </div>
        )}

        {!loading && !error && videos.length > 0 && (
          <div className={styles.videoGrid}>
            {videos.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.thumbnailContainer}>
                  <button 
                    onClick={() => openVideoModal(video.id, video.title)}
                    className={styles.videoLink}
                    aria-label={`Play video: ${video.title}`}
                  >
                    <Image
                      src={video.thumbnails.medium.url}
                      alt={video.title}
                      width={video.thumbnails.medium.width}
                      height={video.thumbnails.medium.height}
                      className={styles.thumbnail}
                    />
                    <div className={styles.playButton}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>
                    <button 
                      onClick={() => openVideoModal(video.id, video.title)}
                      className={styles.videoTitleButton}
                    >
                      {video.title}
                    </button>
                  </h3>
                  <p className={styles.videoDate}>
                    <small>Published on {formatDate(video.publishedAt)}</small>
                  </p>
                  <p className={styles.videoDescription}>
                    {truncateDescription(video.description)}
                  </p>
                  <button 
                    onClick={() => openVideoModal(video.id, video.title)}
                    className={styles.watchButton}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.ctaContainer}>
          <Link 
            href="https://www.youtube.com/@DrAshutoshShah"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Our YouTube Channel
          </Link>
        </div>
      </div>

      {selectedVideo && (
        <YouTubePlayer 
          videoId={selectedVideo} 
          title={selectedVideoTitle}
          onClose={closeVideoModal} 
        />
      )}
    </section>
  );
};

export default VideoSection;
