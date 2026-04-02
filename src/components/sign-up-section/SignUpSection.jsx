import { motion } from "motion/react";
import { SectionTitle } from "../section-title/SectionTitle";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function SignUpSection({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="text-gray md:flex md:flex-col md:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle className="text-center">
          sign up for your first class now!
        </SectionTitle>
      </motion.div>

      <motion.form
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex w-full md:max-w-130 flex-col gap-12 "
      >
        <motion.div variants={item} className="flex flex-col gap-1">
          <label htmlFor="name" className="font-bold text-2xl">
            Name
          </label>
          <input
            type="text"
            required
            minLength={2}
            id="name"
            placeholder="Magnus Carlsen"
            autoComplete="name"
            className="font-bold text-xl bg-input/70 p-7 rounded-2xl"
          />
        </motion.div>
        <motion.div variants={item} className="flex flex-col gap-1">
          <label htmlFor="tel" className="font-bold text-2xl">
            Number
          </label>
          <input
            type="tel"
            required
            pattern="^\+?[0-9\s()-]{7,15}$"
            id="tel"
            placeholder="+1 (000) 123-1234"
            autoComplete="tel"
            className="font-bold text-xl bg-input/70 p-7 rounded-2xl"
          />
        </motion.div>
        <motion.div variants={item} className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bold text-2xl">
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            placeholder="yourawesomemail@gmail.com"
            autoComplete="email"
            className="font-bold text-xl bg-input/70 p-7 rounded-2xl"
          />
        </motion.div>
        <motion.button
          variants={item}
          type="submit"
          className="uppercase font-black text-3xl py-5 px-8 bg-input/70 border border-white rounded-2xl max-w-3xs self-center hover:text-black hover:border-black hover:bg-white/75 hover:cursor-pointer transition duration-300"
        >
          sign up
        </motion.button>
      </motion.form>
    </section>
  );
}
