export const dynamic = "force-dynamic";

import Navbar from "./components/Nav/Navbar";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Sobre from "./components/Sobre/Sobre";
import Body from "./components/Body/Body";
import Calendar from "./components/Calendar/Calendar";
import Articles from "./components/Artigos/Artigos";
import { getArtigos, getEventos, getVideos } from "@/lib/data";

export default async function Home() {
  const [artigos, eventos, videos] = await Promise.all([
    getArtigos(),
    getEventos(),
    getVideos(),
  ]);

  return (
    <main className="main-content">
      <Navbar />
      <div className="container">
        <Logo />
        <Search />
        <Articles articles={artigos} />
        <Calendar events={eventos} />
        <Body videos={videos} />
        <Sobre />
      </div>
    </main>
  );
}
