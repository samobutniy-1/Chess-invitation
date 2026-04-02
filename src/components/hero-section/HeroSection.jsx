import { SectionTitle } from "../section-title/SectionTitle";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop ? (
    <section className="text-gray flex justify-between items-center gap-6 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[250px] ml-16"
      >
        <img className="w-full" src="/knight.png" alt="Knight" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[60%]"
      >
        <SectionTitle>Make your first move</SectionTitle>
        <motion.p className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          Ready to make your first move? Join our chess club and challenge your
          mind, improve your strategy, and meet players who share your passion.
          Whether you're a beginner or already experienced, you'll find the
          perfect place to grow, compete, and enjoy the game. Step into the
          world of chess — think ahead, play smart, and win with confidence.
        </motion.p>
      </motion.div>
    </section>
  ) : (
    <section className="text-gray ">
      <div className=" flex justify-between items-center mb-6 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[120px]"
        >
          <img className="w-full" src="/knight.png" alt="Knight" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionTitle>Make your first move</SectionTitle>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl font-bold"
      >
        Ready to make your first move? Join our chess club and challenge your
        mind, improve your strategy, and meet players who share your passion.
        Whether you're a beginner or already experienced, you'll find the
        perfect place to grow, compete, and enjoy the game. Step into the world
        of chess — think ahead, play smart, and win with confidence.
      </motion.p>
    </section>
  );
}
