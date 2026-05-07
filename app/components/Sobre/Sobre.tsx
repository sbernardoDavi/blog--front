"use client";

import { useState, useEffect } from "react";
import { aboutUsContent } from "./about-us";
import "./Sobre.css";

export default function Sobre() {
  const [audioDescricao, setAudioDescricao] = useState(false);
  const [libras, setLibras] = useState(false);

  // Função para narrar o texto
  const narrateText = (text: string) => {
    if ("speechSynthesis" in window) {
      // Para qualquer narração em andamento
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "pt-BR"; // Define o idioma para português brasileiro
      utterance.rate = 0.8; // Velocidade um pouco mais lenta para melhor compreensão
      utterance.pitch = 1; // Tom de voz normal

      speechSynthesis.speak(utterance);
    }
  };

  // Efeito para narrar quando audioDescricao for ativado
  useEffect(() => {
    if (audioDescricao) {
      const fullText = `${aboutUsContent} `;
      narrateText(fullText);
    } else {
      // Para a narração quando desativado
      speechSynthesis.cancel();
    }
  }, [audioDescricao]);

  return (
    <section className="sobre-container" id="about">
      <div className="sobre-content">
        <h1 className="sobre-title">
          CONHEÇA A <span className="ladp-gradient">LADP</span>
        </h1>

        <div className="sobre-wrapper">
          <main className="sobre-main">
            <p>{aboutUsContent}</p>
          </main>
          <aside className="sobre-card">
            <div className="card-item">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={audioDescricao}
                  onChange={(e) => setAudioDescricao(e.target.checked)}
                  aria-label="Ativar audioDescrição"
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-label">Ativar AudioDescrição</span>
              </label>
            </div>

            <div className="card-item">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={libras}
                  onChange={(e) => setLibras(e.target.checked)}
                  aria-label="Ativar libras"
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-label">Ativar libras</span>
              </label>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
