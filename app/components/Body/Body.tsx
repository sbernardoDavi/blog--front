"use client";

import Carousel from "../Carousel/Carousel";
import "./Body.css";

const videoData = [
  {
    id: "1",
    title: "Introdução ao Direito Público",
    description:
      "Entenda os fundamentos do direito público e sua importância para a sociedade.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Direitos Constitucionais",
    description:
      "Uma análise detalhada dos direitos e garantias fundamentais na constituição.",
    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
  {
    id: "3",
    title: "Processo Administrativo",
    description:
      "Conheça as etapas e princípios do processo administrativo no Brasil.",
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: "4",
    title: "Direito Tributário",
    description: "Explore os conceitos fundamentais do direito tributário.",
    embedUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
  },
];

export default function Body() {
  return (
    <main>
      <div className="body-header">
        <h2 className="font-subtitle">DESMISTIFICANDO O DIREITO</h2>
      </div>
      <Carousel videos={videoData} />
    </main>
  );
}
