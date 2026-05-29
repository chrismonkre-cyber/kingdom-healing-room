import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/6a15e69ec699dec43ddd5423/de815717a_newlogo.png";

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
    <nav className="sticky top-0 z-50" style={{ background: "rgba(30,8,12,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(212,175,55,0.4)" }}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="Kingdom Mandate Ministry"
            className="rounded-full object-cover"
            style={{ width: 38, height: 38, border: "1.5px solid rgba(212,175,55,0.6)", boxShadow: "0 0 8px rgba(212,175,55,0.35)" }}
          />
          <span className="font-heading text-base md:text-lg font-black" style={{ color: "#f0c84a", textShadow: "0 0 14px rgba(212,175,55,0.6)" }}>
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
                color: pathname === l.to ? "#f0c84a" : "rgba(255,248,220,0.92)",
                textShadow: pathname === l.to ? "0 0 10px rgba(212,175,55,0.5)" : "none",
                fontWeight: pathname === l.to ? 700 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "#f0c84a" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2" style={{ background: "rgba(20,5,8,0.97)" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-body"
              style={{ color: pathname === l.to ? "#f0c84a" : "rgba(255,248,220,0.92)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}