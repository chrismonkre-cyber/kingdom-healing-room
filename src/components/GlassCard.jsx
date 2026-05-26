export default function GlassCard({ children, className = "", ...props }) {
  return (
    <div
      className={"rounded-xl p-5 md:p-6 " + className}
      style={{
        background: "rgba(60,15,25,0.82)",
        border: "1px solid rgba(212,175,55,0.35)",
        boxShadow: "0 4px 30px rgba(212,175,55,0.08), inset 0 1px 0 rgba(212,175,55,0.1)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}