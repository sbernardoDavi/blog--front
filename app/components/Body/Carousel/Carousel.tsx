"use client";

import { useState } from "react";
import "./Carousel.css";
import { video as VideoItem } from "../Body";

interface CarouselProps {
  videos: VideoItem[];
}

export default function Carousel({ videos }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function toEmbedUrl(url: string) {
    try {
      const u = new URL(url);
      // https://www.youtube.com/watch?v=ID
      const id =
        u.searchParams.get("v") ??
        // https://youtu.be/ID
        (u.hostname === "youtu.be" ? u.pathname.slice(1) : null);
      if (id) return `https://www.youtube.com/embed/${id}`;
    } catch {}
    return url; // já é embed ou outro formato
  }

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
            src={toEmbedUrl(currentVideo.url)}
            title={currentVideo.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-info">
          <h3>{currentVideo.titulo}</h3>
          <p>{currentVideo.conteudo}</p>
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
