"use client";

import { useState, useEffect } from "react";
import { useRealtime } from "@/lib/useRealtime";
import "./Artigos.css";

export type article = {
  tema: string;
  autor: string;
  resumo: string;
  pdf_url: string;
};

type Props = {
  articles: article[];
};

const VISIBLE = 3;

export default function Articles({ articles }: Props) {
  const items = useRealtime<article>({
    table: "artigos",
    select: "tema, autor, resumo, pdf_url",
    orderBy: { column: "created_at", ascending: false },
    initialData: articles,
  });

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const total = items.length;

  function navigate(dir: "left" | "right") {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      const step = isMobile ? 1 : VISIBLE;
      setIndex((i) =>
        dir === "right" ? (i + step) % total : (i - step + total) % total,
      );
      setAnimating(false);
    }, 300);
  }

  const prev = () => navigate("left");
  const next = () => navigate("right");

  const visible = Array.from(
    { length: isMobile ? 1 : Math.min(VISIBLE, total) },
    (_, j) => items[(index + j) % total],
  );

  const step = isMobile ? 1 : VISIBLE;
  const pageCount = Math.ceil(total / step);
  const currentPage = Math.floor(index / step);

  if (total === 0) return null;

  return (
    <section className="articles-section" id="articles">
      <h2 className="articles-title">Artigos Acadêmicos</h2>

      <div className="articles-carousel">
        {!isMobile && (
          <button className="articles-btn" onClick={prev} aria-label="Anterior">
            ←
          </button>
        )}

        <div
          className={`articles-track articles-track--${animating ? (direction === "right" ? "exit-left" : "exit-right") : direction === "right" ? "enter-right" : "enter-left"}`}
        >
          {visible.map((article, i) => (
            <div key={i} className="article-card">
              <div className="article-card-top">
                <h3 className="article-tema">{article.tema}</h3>
                <span className="article-autor">Autor(a): {article.autor}</span>
              </div>
              <p className="article-resumo">{article.resumo}</p>
              <a
                href={article.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-btn"
              >
                Ler artigo completo
              </a>
            </div>
          ))}
        </div>

        {!isMobile && (
          <button className="articles-btn" onClick={next} aria-label="Próximo">
            →
          </button>
        )}
      </div>

      {isMobile && (
        <div className="articles-controls-mobile">
          <button className="articles-btn" onClick={prev} aria-label="Anterior">
            ←
          </button>
          <div className="articles-indicators">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                className={`articles-dot ${i === currentPage ? "articles-dot--active" : ""}`}
                onClick={() => setIndex(i * step)}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
          <button className="articles-btn" onClick={next} aria-label="Próximo">
            →
          </button>
        </div>
      )}

      {!isMobile && (
        <div className="articles-indicators">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              className={`articles-dot ${i === currentPage ? "articles-dot--active" : ""}`}
              onClick={() => setIndex(i * step)}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
