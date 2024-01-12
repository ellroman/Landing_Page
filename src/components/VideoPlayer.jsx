import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-container">
      {/* Replace 'YOUR_VIDEO_URL' with your video embed code or URL */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/G_A6O494_Ws"
        title="Video"
        frameborder="2"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;