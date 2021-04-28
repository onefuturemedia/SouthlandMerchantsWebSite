import React from "react";
import { withPrefix } from "gatsby";
import { Image } from "theme-ui";

export default function VideoBanner({ src, placeholder }) {
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
      src={withPrefix(src)}
      preload="auto"
    >
      <source src={withPrefix(src)} type="video/webm" />
      Your device does not support playing 'video/webm' videos
    </video>
  );
}
