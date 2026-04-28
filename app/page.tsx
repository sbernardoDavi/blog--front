import Navbar from "./components/Nav/Navbar";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Navbar />
        <Logo />
        <Search />
      </div>
    </main>
  );
}
