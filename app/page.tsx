import Navbar from "./components/Nav/Navbar";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Sobre from "./components/Sobre/Sobre";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="main-content">
      <Navbar />
      <div className="container">
        <Logo />
        <Search />
        <Sobre />
      </div>
    </main>
  );
}
