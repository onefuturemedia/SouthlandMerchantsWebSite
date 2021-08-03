import React from "react";
import { withPrefix } from "gatsby";
import video from "assets/videos/video.mp4";

export default function VideoBanner() {
  return (
    <video
      autoPlay
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
  );
}
