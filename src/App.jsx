import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero-section/HeroSection";

function App() {
  return (
    <>
      <Header />
      <main className="px-6">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
