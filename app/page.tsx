import Navbar from "./components/Nav/Navbar";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Sobre from "./components/Sobre/Sobre";
import Body from "./components/Body/Body";
import Calendar from "./components/Calendar/Calendar";
import { time } from "console";

const events = [
  {
    date: "2026-05-05",
    title: "Evento 1",
    time: "10:00",
    description: "Descrição do Evento 1",
    location: "Local do Evento 1",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
  },
  {
    date: "2026-05-05",
    title: "Palestra sobre React",
    time: "12:00",
    description:
      "Palestra abordando os fundamentos do React, incluindo hooks, state management e melhores práticas para desenvolvimento de interfaces modernas.",
    location: "Auditório Principal",
  },
  {
    date: "2026-06-20",
    title: "Evento 2",
    time: "14:00",
    description: "Descrição do Evento 2",
    location: "Local do Evento 2",
  },
  {
    date: "2026-07-05",
    title: "Evento 3",
    time: "16:00",
    description: "Descrição do Evento 3",
    location: "Local do Evento 3",
  },
];

export default function Home() {
  return (
    <main className="main-content">
      <Navbar />
      <div className="container">
        <Logo />
        <Search />
        <Sobre />
        <Body />
        <Calendar events={events} />
      </div>
    </main>
  );
}
