export function AdvantagesSection() {
  const stats = [
    { id: 1, number: "5", label: "years", image: "/king.png" },
    { id: 2, number: "3", label: "types of groups" },
    { id: 3, number: "800", label: "released students" },
    { id: 4, number: "1-st", label: "class is for free" },
  ];
  return (
    <section className="text-gray">
      <h2 className="font-black text-4xl w-full mb-6">
        Advantages of studying at our school
      </h2>
      <div>
        <ul className="grid gap-6">
          <div className="relative grid gap-6">
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
                <span className="relative font-black text-9xl z-20">
                  {number}
                </span>
                <span className="relative font-bold text-[32px] z-20">
                  {label}
                </span>
              </li>
            ))}
          </div>

          {stats.slice(2).map(({ id, number, label }) => (
            <li
              key={id}
              className="w-full bg-box flex flex-col p-6 rounded-3xl"
            >
              <span className="font-black text-9xl">{number}</span>
              <span className="font-bold text-[32px]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
