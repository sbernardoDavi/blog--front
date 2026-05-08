"use client";

import { useRealtime } from "@/lib/useRealtime";
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
  const items = useRealtime<video>({
    table: "videos",
    select: "titulo, conteudo, url",
    orderBy: { column: "created_at", ascending: false },
    initialData: videos,
  });

  return (
    <main>
      <div className="body-header">
        <h2 className="font-subtitle">DESMISTIFICANDO O DIREITO</h2>
      </div>
      <Carousel videos={items} />
    </main>
  );
}
