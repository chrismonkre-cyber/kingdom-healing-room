import { useState } from "react";
import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";
import { HEALING_CATEGORIES } from "../lib/healingData";
import { ChevronDown, ChevronUp } from "lucide-react";

const gold = { color: "#d4af37", textShadow: "0 0 14px rgba(212,175,55,0.4), 0 2px 4px rgba(0,0,0,0.7)" };
const ivory = { color: "rgba(255,248,230,0.92)" };
const amber = { color: "rgba(218,165,32,0.85)" };

export default function Healing() {
  const [open, setOpen] = useState(null);

  return (
    <PageBackground desktop={IMAGES.healing.desktop} mobile={IMAGES.healing.mobile}>
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <h1 className="font-heading font-black text-2xl md:text-4xl text-center mb-2" style={gold}>Healing Categories</h1>
        <p className="text-center font-body text-sm mb-8" style={amber}>Choose a healing focus and stand on the Word of God.</p>

        <div className="space-y-3">
          {HEALING_CATEGORIES.map((cat, i) => (
            <GlassCard key={cat.title} className="cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex justify-between items-center">
                <h3 className="font-heading font-bold text-base md:text-lg" style={gold}>{cat.title}</h3>
                {open === i ? <ChevronUp size={18} style={{ color: "#d4af37" }} /> : <ChevronDown size={18} style={{ color: "#d4af37" }} />}
              </div>

              {open === i && (
                <div className="mt-4 space-y-4">
                  <p className="font-body text-xs" style={amber}>{cat.scripture} — "{cat.verse}"</p>
                  <p className="font-body text-sm leading-relaxed" style={ivory}>{cat.encouragement}</p>

                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(212,175,55,0.7)" }}>Healing Declarations</p>
                    <ul className="space-y-2">
                      {cat.declarations.map((d, j) => (
                        <li key={j} className="font-body text-sm leading-relaxed pl-3" style={{ ...ivory, borderLeft: "2px solid rgba(212,175,55,0.4)" }}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(212,175,55,0.7)" }}>Prayer</p>
                    <p className="font-body text-sm leading-relaxed" style={ivory}>{cat.prayer}</p>
                  </div>

                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(212,175,55,0.7)" }}>Action Step</p>
                    <p className="font-body text-sm leading-relaxed" style={ivory}>{cat.action}</p>
                  </div>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </PageBackground>
  );
}