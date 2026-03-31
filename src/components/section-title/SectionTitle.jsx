export function SectionTitle({ children, className }) {
  return (
    <h2
      className={`font-black text-[clamp(40px,5vw,48px)] text-center uppercase mb-6 md:text-left ${className}`}
    >
      {children}
    </h2>
  );
}
