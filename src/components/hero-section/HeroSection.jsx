import { SectionTitle } from "../section-title/SectionTitle";

export function HeroSection() {
  return (
    <section className="text-gray">
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
