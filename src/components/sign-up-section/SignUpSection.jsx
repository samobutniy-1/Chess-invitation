import { SectionTitle } from "../section-title/SectionTitle";

export function SignUpSection({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="text-gray md:flex md:flex-col md:items-center"
    >
      <SectionTitle className="text-center">
        sign up for your first class now!
      </SectionTitle>
      <form className="flex w-full md:max-w-130 flex-col gap-12 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-bold text-2xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Magnus Carlsen"
            autoComplete="name"
            className="font-bold text-xl bg-input/70 p-7 rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="tel" className="font-bold text-2xl">
            Number
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="+1 (000) 123-1234"
            autoComplete="tel"
            className="font-bold text-xl bg-input/70 p-7 rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bold text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="yourawesomemail@gmail.com"
            autoComplete="email"
            className="font-bold text-xl bg-input/70 p-7 rounded-2xl"
          />
        </div>
        <button
          type="submit"
          className="uppercase font-black text-3xl py-5 px-8 bg-input/70 border border-white rounded-2xl max-w-3xs self-center hover:text-black hover:border-black hover:bg-white/75 hover:cursor-pointer transition duration-300"
        >
          sign up
        </button>
      </form>
    </section>
  );
}
