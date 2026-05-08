import Navbar from "./components/Nav/Navbar";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Sobre from "./components/Sobre/Sobre";
import Body from "./components/Body/Body";
import Calendar from "./components/Calendar/Calendar";
import Articles from "./components/Artigos/Artigos";

const events = [
  {
    date: "2026-05-05",
    title: "Evento 1",
    time: "10:00",
    description: "Descrição do Evento 1",
    location: "Local do Evento 1",
    speaker: "Davi Bernardo",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
    speaker: "Brunna Horta",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
    speaker: "Pedro Oliveira",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
    speaker: "Carlos Mendes",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
    speaker: "lorem ipsun",
  },
  {
    date: "2026-06-20",
    title: "Evento 2",
    time: "14:00",
    description: "Descrição do Evento 2",
    location: "Local do Evento 2",
    speaker: "Fernanda Lima",
  },
  {
    date: "2026-07-05",
    title: "Evento 3",
    time: "16:00",
    description: "Descrição do Evento 3",
    location: "Local do Evento 3",
    speaker: "Roberto Antunes",
  },
];

const articles = [
  {
    tema: "Responsabilidade Civil na Inteligência Artificial",
    autor: "Carlos Mendes",
    resumo:
      "Este artigo explora os complexos desafios jurídicos na imputação de danos causados por sistemas autônomos. Analisa a insuficiência da responsabilidade subjetiva clássica e debate a aplicação da responsabilidade objetiva ou do risco criado para algoritmos de decisão, propondo critérios para a identificação do nexo causal em sistemas de 'caixa-preta'.",
    url: "https://exemplo.com/artigo-3",
  },
  {
    tema: "O Fenômeno da Judicialização da Saúde",
    autor: "Ana Paula Ramos",
    resumo:
      "Uma análise crítica sobre o crescente papel do Poder Judiciário na garantia do acesso a tratamentos e medicamentos de alto custo. O texto aborda o conflito entre o mínimo existencial e a reserva do possível, examinando como as decisões judiciais individuais impactam o orçamento público e a gestão das políticas universais do SUS.",
    url: "https://exemplo.com/artigo-4",
  },
  {
    tema: "Direito ao Esquecimento no Ordenamento Brasileiro",
    autor: "Lucas Ferreira",
    resumo:
      "Discussão profunda sobre o embate entre a liberdade de informação e o direito à privacidade. O artigo percorre a evolução jurisprudencial no STJ e a tese fixada pelo STF no Tema 786, avaliando em que medida o decurso do tempo permite a uma pessoa restringir a divulgação de fatos desabonadores ocorridos no passado.",
    url: "https://exemplo.com/artigo-5",
  },
  {
    tema: "Compliance e Combate à Corrupção nas Estatais",
    autor: "Fernanda Lima",
    resumo:
      "O trabalho investiga o impacto da Lei nº 13.303/2016 (Lei das Estatais) na modernização da gestão pública. Foca na obrigatoriedade da implementação de programas de integridade, gestão de riscos e códigos de conduta como mecanismos essenciais para mitigar o uso político das empresas públicas e garantir a transparência administrativa.",
    url: "https://exemplo.com/artigo-6",
  },
  {
    tema: "Reforma Tributária e o Pacto Federativo",
    autor: "Roberto Antunes",
    resumo:
      "Avaliação das principais propostas de simplificação do sistema tributário nacional, com foco na criação do IVA dual. O artigo discute as tensões federativas geradas pela centralização da arrecadação e os mecanismos de compensação previstos para manter a autonomia financeira de estados e municípios frente às mudanças na tributação do consumo.",
    url: "https://exemplo.com/artigo-7",
  },
  {
    tema: "Multiparentalidade e Efeitos Jurídicos",
    autor: "Juliana Costa",
    resumo:
      "Estudo sobre o reconhecimento jurídico simultâneo da filiação biológica e da socioafetiva. O artigo analisa as consequências práticas dessa configuração no Direito de Família e das Sucessões, incluindo o direito a alimentos, a herança e a inclusão de múltiplos nomes no registro civil, consolidando o princípio da afetividade.",
    url: "https://exemplo.com/artigo-8",
  },
  {
    tema: "A Crise do Sistema Prisional e o Estado de Coisas Inconstitucional",
    autor: "Marcos Oliveira",
    resumo:
      "Exame detalhado da ADPF 347, na qual o STF reconheceu o 'Estado de Coisas Inconstitucional' nas prisões brasileiras. O texto debate a falência estrutural do sistema carcerário, a violação sistemática de direitos fundamentais dos detentos e a necessidade de intervenção do Judiciário para coordenar reformas em políticas públicas de segurança.",
    url: "https://exemplo.com/artigo-9",
  },
  {
    tema: "Teletrabalho e a Desconexão no Direito do Trabalho",
    autor: "Patrícia Gomes",
    resumo:
      "Investiga as novas dinâmicas laborais impostas pela tecnologia, focando no direito do empregado de não ser contactado fora do expediente. O resumo aborda a saúde mental do trabalhador, os riscos da jornada intermitente e a necessidade de uma regulamentação que proteja o tempo livre diante da onipresença de ferramentas como WhatsApp e e-mail.",
    url: "https://exemplo.com/artigo-10",
  },
  {
    tema: "Economia Compartilhada e Regulação Jurídica",
    autor: "Bruno Henrique Rocha",
    resumo:
      "Análise jurídica sobre a natureza dos serviços prestados por plataformas digitais. O artigo discute a zona cinzenta entre a intermediação tecnológica e a prestação direta de serviços, avaliando a proteção do consumidor, a responsabilidade das plataformas por falhas no serviço e o impacto dessas novas formas de consumo no mercado tradicional.",
    url: "https://exemplo.com/artigo-11",
  },
];

export default function Home() {
  return (
    <main className="main-content">
      <Navbar />
      <div className="container">
        <Logo />
        <Search />
        <Articles articles={articles} />
        <Calendar events={events} />
        <Sobre />
        <Body />
      </div>
    </main>
  );
}
