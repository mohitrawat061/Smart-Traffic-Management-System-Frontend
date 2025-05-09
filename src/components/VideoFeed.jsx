import React from "react";

const VideoFeed = ({ camId }) => {
  const streamUrl = `http://localhost:8000/video_feed/${camId}`;

  return (
    <div className="video-feed">
      <h2>{camId} Live Stream</h2>
      <img
        src={streamUrl}
        alt={`Live stream for ${camId}`}
        style={{
          width: "100%",
          maxWidth: "720px",
          border: "2px solid #333",
          borderRadius: "8px",
          marginTop: "1rem",
        }}
      />
    </div>
  );
};

export default VideoFeed;
