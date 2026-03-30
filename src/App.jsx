import { AdvantagesSection } from "./components/advantages-section/AdvantagesSection";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero-section/HeroSection";

function App() {
  return (
    <>
      <Header />
      <main className="px-6">
        <HeroSection />
        <AdvantagesSection />
      </main>
    </>
  );
}

export default App;
