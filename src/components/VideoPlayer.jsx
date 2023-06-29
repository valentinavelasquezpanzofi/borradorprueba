import React from "react";
import "../App.css";
import YouTube from "react-youtube";

export default function VideoPlayer() {
  const videoId = "jfKfPfyJRdk"; // Reemplaza con el ID del video de YouTube que deseas embeber

  return (
    <div className="video-container">
      <YouTube videoId={videoId} />
    </div>
  );
}
