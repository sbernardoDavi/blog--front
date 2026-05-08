"use client";

import Carousel from "./Carousel/Carousel";
import "./Body.css";

export type video = {
  titulo: string;
  conteudo: string;
  url: string;
};

type Props = {
  videos: video[];
};

export default function Body({ videos }: Props) {
  return (
    <main>
      <div className="body-header">
        <h2 className="font-subtitle">DESMISTIFICANDO O DIREITO</h2>
      </div>
      <Carousel videos={videos} />
    </main>
  );
}
