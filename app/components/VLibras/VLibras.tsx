"use client";

import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    // Cria o container do widget
    const container = document.createElement("div");
    container.setAttribute("vw", "");
    container.classList.add("enabled");
    container.innerHTML = `
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    `;
    document.body.appendChild(container);

    // Carrega o script do VLibras
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      // @ts-expect-error VLibras is loaded from external script
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(container);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
