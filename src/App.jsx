import { useRef } from "react";

import { AdvantagesSection } from "./components/advantages-section/AdvantagesSection";
import { GroupsSection } from "./components/groups-section/GroupsSection";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero-section/HeroSection";
import { SignUpSection } from "./components/sign-up-section/SignUpSection";

function App() {
  const sectionRef = useRef(null);
  return (
    <>
      <Header sectionRef={sectionRef} />
      <main className="px-6">
        <HeroSection />
        <AdvantagesSection />
        <GroupsSection />
        <SignUpSection sectionRef={sectionRef} />
      </main>
    </>
  );
}

export default App;
