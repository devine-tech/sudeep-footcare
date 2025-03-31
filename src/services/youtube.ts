export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    default: YouTubeThumbnail;
    medium: YouTubeThumbnail;
    high: YouTubeThumbnail;
  };
}

// This is a mock implementation that returns hardcoded videos
// In a production environment, you would use the YouTube API with proper credentials
export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  // For development and demonstration purposes, return mock data
  // These videos are publicly available from Dr. Prayas Kumar's channel
  return [
    {
      id: "_PudBO2TjQI?si=0zMMyJZPORJn4R4e",
      title: "Understanding Diabetic Foot Complications",
      description: "Dr. Prayas Kumar explains the common complications that can arise with diabetic foot conditions and how to recognize early warning signs.",
      publishedAt: "2024-02-15T10:00:00Z",
      thumbnails: {
        default: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 480,
          height: 360
        }
      }
    },
    {
      id: "_PudBO2TjQI?si=0zMMyJZPORJn4R4e",
      title: "Understanding Diabetic Foot Complications",
      description: "Dr. Prayas Kumar explains the common complications that can arise with diabetic foot conditions and how to recognize early warning signs.",
      publishedAt: "2024-02-15T10:00:00Z",
      thumbnails: {
        default: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 480,
          height: 360
        }
      }
    },
    {
      id: "_PudBO2TjQI?si=0zMMyJZPORJn4R4e",
      title: "Understanding Diabetic Foot Complications",
      description: "Dr. Prayas Kumar explains the common complications that can arise with diabetic foot conditions and how to recognize early warning signs.",
      publishedAt: "2024-02-15T10:00:00Z",
      thumbnails: {
        default: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://images.pexels.com/photos/30798686/pexels-photo-30798686/free-photo-of-close-up-of-foot-surgery-in-operating-room.jpeg",
          width: 480,
          height: 360
        }
      }
    },
   
  ];

  // When you have YouTube API credentials, you would use this code instead:
  /*
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  
  if (!apiKey || !channelId) {
    console.error('YouTube API key or channel ID not found');
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    
    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnails: {
        default: item.snippet.thumbnails.default,
        medium: item.snippet.thumbnails.medium,
        high: item.snippet.thumbnails.high
      }
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
  */
}
