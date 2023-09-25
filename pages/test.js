import React from 'react';

class VideoDownloader extends React.Component {
  constructor() {
    super();
    this.state = {
      videoUrl: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ videoUrl: event.target.value });
  };

  handleDownload = () => {
    const { videoUrl } = this.state;

    // Make an HTTP request to the video URL
    fetch(videoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        // Create a URL for the blob and trigger a download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'downloaded-video.mp4'; // You can specify the file name here
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading video:', error);
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter video URL"
          value={this.state.videoUrl}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleDownload}>Download Video</button>
      </div>
    );
  }
}

export default VideoDownloader;
