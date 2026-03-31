import { SectionTitle } from "../section-title/SectionTitle";

export function AdvantagesSection() {
  const stats = [
    { id: 1, number: "5", label: "years" },
    { id: 2, number: "3", label: "types of groups" },
    { id: 3, number: "800", label: "released students" },
    { id: 4, number: "1-st", label: "class is for free" },
  ];

  return (
    <section className="text-gray">
      <SectionTitle>Advantages of studying at our school</SectionTitle>
      <ul className="grid gap-6 md:grid-cols-2 md:grid-rows-2">
        <div className="relative grid gap-6 md:row-span-2 grid-rows-2">
          <img
            src="/king.png"
            className="absolute right-5 top-0 h-full object-cover pointer-events-none z-10 brightness-10"
            alt=""
          />
          {stats.slice(0, 2).map(({ id, number, label }) => (
            <li
              key={id}
              className="relative w-full bg-box flex flex-col p-6 rounded-3xl"
            >
              <div className="flex flex-col justify-between gap-2 grow">
                <span className="relative font-black text-9xl z-20">
                  {number}
                </span>
                <span className="relative font-bold text-[clamp(24px,5vw,42px)] z-20">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </div>

        {stats.slice(2).map(({ id, number, label }) => (
          <li key={id} className="w-full bg-box flex flex-col p-6 rounded-3xl">
            <div className="flex flex-col justify-between gap-2 grow">
              <span className="font-black text-9xl">{number}</span>
              <span className="font-bold text-[clamp(24px,5vw,42px)]">
                {label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
