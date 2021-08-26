import React, { useEffect } from "react";
import { withPrefix } from "gatsby";
import video from "assets/videos/video.mp4";

export default function VideoBanner() {

  // function to remove loading animation when video plays
  useEffect(() => {
    let placeholder = document.querySelector('.loader')
    let video = document.querySelector('.video')
    video.addEventListener('play', function () {
      placeholder.style.display = 'none'
    })
  })



  return (
    <div>
      <video
        autoPlay
        preload="metadata"
        className="video"
        playsInline
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          objectPosition: "center",
        }}
        src={withPrefix(video)}
        crossOrigin="anonymous"
      >
        <source src={withPrefix(video)} type="video/mp4" />
        Your device does not support playing 'video/mp4' videos
      </video>
      <div className="loader" style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 10,
        objectPosition: "center",
        background:"#3c435e"

      }}><div className="loader-icon" style={{
        position: "absolute",
        top: "50%",
        right: "50%",
        objectFit: "cover",
        zIndex: 1,
        objectPosition: "center",
        border: "16px solid #f3f3f3", /* Light grey */
        borderTop: "16px solid #3c435e", /* Blue */
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        animation: "spin 2s linear infinite",

      }}></div></div>
      <style>
        {`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      `}
      </style>

    </div>
  );
}
