import React from "react";
import { withPrefix } from "gatsby";
import { Image } from "theme-ui";

export default function VideoBanner({ src, srcAlternative, placeholder }) {
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
        objectPosition: "center",
        backgroundSize: "cover",
      }}
      src={withPrefix(src)}
    >
      <source src={withPrefix(src)} type="video/mp4" />
      <source src={withPrefix(srcAlternative)} type="video/webm" />
      Your device does not support playing 'video/mp4' or 'video/webm' videos
    </video>
  );
}
