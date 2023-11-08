import React from 'react';
import { toast } from 'react-toastify';

const VideoDownloader = ({videoUrl, title}) => {
  
  const handleDownloadVideo = async () => {
    toast.success("Your video is downloading in the background!")
    try {
      const response = await fetch(videoUrl)
      const blob = await response.blob();
      
      // Create a temporary URL for the blob and trigger a download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${title}.mp4`; // Specify the downloaded file name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success("Your downloading completed!")
    } catch (error) {
      console.error('Error downloading the video:', error);
    }
  };

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <button onClick={handleDownloadVideo}>Download Video</button>
    </div>
  );
};

export default VideoDownloader;
