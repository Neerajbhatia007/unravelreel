import React, { useRef, useState, useEffect } from "react";


import "./Video.css";

export default function Video({ video_url }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <div className="video-cards">
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={video_url}
        loop
      />
    </div>
  );
}
