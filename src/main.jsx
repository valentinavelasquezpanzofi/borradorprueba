import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/VideoPlayer";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <VideoPlayer />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
