import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/healing", label: "Healing" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50" style={{ background: "rgba(40,10,15,0.88)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(212,175,55,0.3)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-lg md:text-xl font-black" style={{ color: "#d4af37", textShadow: "0 0 12px rgba(212,175,55,0.5)" }}>
            Kingdom Healing Room
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-body transition-colors"
              style={{
                color: pathname === l.to ? "#d4af37" : "rgba(255,248,230,0.85)",
                textShadow: pathname === l.to ? "0 0 8px rgba(212,175,55,0.4)" : "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "#d4af37" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2" style={{ background: "rgba(40,10,15,0.95)" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-body"
              style={{ color: pathname === l.to ? "#d4af37" : "rgba(255,248,230,0.85)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}