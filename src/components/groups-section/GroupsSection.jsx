import { SectionTitle } from "../section-title/SectionTitle";
import { motion } from "motion/react";

export function GroupsSection() {
  return (
    <section className="text-gray">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle>3 types of groups</SectionTitle>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-bold text-[clamp(24px,5vw,40px)] mb-24"
      >
        Beginner, intermediate and advanced — each group is carefully tailored
        to the student's current level. Whether you're just learning how the
        pieces move or preparing for tournaments, you'll always be challenged
        just enough to keep growing.
      </motion.p>
    </section>
  );
}
