import { SectionTitle } from "../section-title/SectionTitle";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop ? (
    <section className="text-gray flex justify-between items-center gap-6">
      <div className="w-full max-w-[250px] ml-10">
        <img className="w-full" src="/knight.png" alt="Knight" />
      </div>
      <div className="max-w-[60%]">
        <SectionTitle>Make your first move</SectionTitle>
        <p className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          Ready to make your first move? Join our chess club and challenge your
          mind, improve your strategy, and meet players who share your passion.
          Whether you're a beginner or already experienced, you'll find the
          perfect place to grow, compete, and enjoy the game. Step into the
          world of chess — think ahead, play smart, and win with confidence.
        </p>
      </div>
    </section>
  ) : (
    <section className="text-gray ">
      <div className="flex justify-between items-center mb-6 gap-6">
        <img src="/knight.png" alt="Knight" />
        <SectionTitle>Make your first move</SectionTitle>
      </div>
      <p className="text-2xl font-bold">
        Ready to make your first move? Join our chess club and challenge your
        mind, improve your strategy, and meet players who share your passion.
        Whether you're a beginner or already experienced, you'll find the
        perfect place to grow, compete, and enjoy the game. Step into the world
        of chess — think ahead, play smart, and win with confidence.
      </p>
    </section>
  );
}
