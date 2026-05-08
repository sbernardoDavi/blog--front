"use client";

import { useState } from "react";
import "./Carousel.css";
import { video as VideoItem } from "../Body";

interface CarouselProps {
  videos: VideoItem[];
}

export default function Carousel({ videos }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(true);

  function toEmbedUrl(url: string) {
    try {
      const u = new URL(url);
      const id =
        u.searchParams.get("v") ??
        (u.hostname === "youtu.be" ? u.pathname.slice(1) : null);
      if (id) return `https://www.youtube.com/embed/${id}`;
    } catch {}
    return url;
  }

  function getVideoId(url: string) {
    try {
      const u = new URL(url);
      return u.searchParams.get("v") ??
        (u.hostname === "youtu.be" ? u.pathname.slice(1) : null);
    } catch {}
    return null;
  }

  function navigate(dir: "left" | "right") {
    if (phase !== "idle") return;
    setDirection(dir);
    setPhase("exit");

    setTimeout(() => {
      const nextIndex = dir === "right"
        ? currentIndex === videos.length - 1 ? 0 : currentIndex + 1
        : currentIndex === 0 ? videos.length - 1 : currentIndex - 1;

      setCurrentIndex(nextIndex);
      setVisibleIndex(nextIndex);
      setIframeLoaded(false);
      setPhase("enter");

      setTimeout(() => {
        setPhase("idle");
      }, 300);
    }, 300);
  }

  function goTo(index: number) {
    if (phase !== "idle" || index === currentIndex) return;
    const dir = index > currentIndex ? "right" : "left";
    setDirection(dir);
    setPhase("exit");

    setTimeout(() => {
      setCurrentIndex(index);
      setVisibleIndex(index);
      setIframeLoaded(false);
      setPhase("enter");

      setTimeout(() => {
        setPhase("idle");
      }, 300);
    }, 300);
  }

  const handlePrev = () => navigate("left");
  const handleNext = () => navigate("right");

  if (videos.length === 0) return null;

  const currentVideo = videos[visibleIndex];
  const videoId = getVideoId(currentVideo.url);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";

  let trackClass = "";
  if (phase === "exit") {
    trackClass = direction === "right" ? "carousel-track--exit-left" : "carousel-track--exit-right";
  } else if (phase === "enter") {
    trackClass = direction === "right" ? "carousel-track--enter-right" : "carousel-track--enter-left";
  }

  return (
    <div className="carousel-container">
      <div className={`carousel-main ${trackClass}`}>
        <div
          className="video-wrapper"
          style={{ backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined }}
        >
          <iframe
            key={visibleIndex}
            width="100%"
            height="100%"
            src={toEmbedUrl(currentVideo.url)}
            title={currentVideo.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIframeLoaded(true)}
            style={{ opacity: iframeLoaded ? 1 : 0, transition: "opacity 0.2s ease" }}
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
              onClick={() => goTo(index)}
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
