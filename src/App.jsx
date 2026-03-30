import { AdvantagesSection } from "./components/advantages-section/AdvantagesSection";
import { GroupsSection } from "./components/groups-section/GroupsSection";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero-section/HeroSection";

function App() {
  return (
    <>
      <Header />
      <main className="px-6">
        <HeroSection />
        <AdvantagesSection />
        <GroupsSection />
      </main>
    </>
  );
}

export default App;
