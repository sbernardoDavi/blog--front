"use client";

import { useState } from "react";
import "./Carousel.css";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
}

interface CarouselProps {
  videos: VideoItem[];
}

export default function Carousel({ videos }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  if (videos.length === 0) return null;

  const currentVideo = videos[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-main">
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="100%"
            // src={currentVideo.embedUrl}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-info">
          <h3>{currentVideo.title}</h3>
          <p>{currentVideo.description}</p>
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-btn carousel-btn-prev">
          ←
        </button>
        <div className="carousel-indicators">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={handleNext} className="carousel-btn carousel-btn-next">
          →
        </button>
      </div>
    </div>
  );
}
