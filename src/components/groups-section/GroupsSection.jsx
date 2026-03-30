import { SectionTitle } from "../section-title/SectionTitle";

export function GroupsSection() {
  return (
    <section className="text-gray ">
      <SectionTitle className="max-w-[65%]"> 3 types of groups</SectionTitle>

      <p className="font-bold text-2xl mb-24">
        Beginner, intermediate and advanced — each group is carefully tailored
        to the student's current level. Whether you're just learning how the
        pieces move or preparing for tournaments, you'll always be challenged
        just enough to keep growing.
      </p>
    </section>
  );
}
