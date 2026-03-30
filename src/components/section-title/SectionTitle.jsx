export function SectionTitle({ children, className }) {
  return (
    <h2 className={`font-black text-4xl  uppercase mb-6 ${className}`}>
      {children}
    </h2>
  );
}
