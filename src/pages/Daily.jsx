import { useState } from "react";
import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";
import { DAILY_ENTRIES } from "../lib/healingData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const gold = { color: "#d4af37", textShadow: "0 0 14px rgba(212,175,55,0.4), 0 2px 4px rgba(0,0,0,0.7)" };
const ivory = { color: "rgba(255,248,230,0.92)" };
const amber = { color: "rgba(218,165,32,0.85)" };

export default function Daily() {
  const dayIndex = new Date().getDay() % DAILY_ENTRIES.length;
  const [index, setIndex] = useState(dayIndex);
  const entry = DAILY_ENTRIES[index];

  const prev = () => setIndex((i) => (i - 1 + DAILY_ENTRIES.length) % DAILY_ENTRIES.length);
  const next = () => setIndex((i) => (i + 1) % DAILY_ENTRIES.length);

  return (
    <PageBackground desktop={IMAGES.daily.desktop} mobile={IMAGES.daily.mobile}>
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <h1 className="font-heading font-black text-2xl md:text-4xl text-center mb-2" style={gold}>Daily Healing Word</h1>
        <p className="text-center font-body text-sm mb-8" style={amber}>Day {index + 1} of {DAILY_ENTRIES.length}</p>

        <GlassCard className="mb-6">
          <h2 className="font-heading font-black text-xl md:text-2xl mb-1" style={gold}>{entry.title}</h2>
          <p className="font-body text-xs mb-4" style={amber}>{entry.scripture} — "{entry.verse}"</p>

          <Section label="Encouragement" text={entry.encouragement} />
          <Section label="Healing Prayer" text={entry.prayer} />
          <Section label="Declaration" text={entry.declaration} />
          <Section label="Action Step" text={entry.action} />
          <Section label="Reflection" text={entry.reflection} />
        </GlassCard>

        <div className="flex justify-center items-center gap-4">
          <button onClick={prev} className="p-2 rounded-full" style={{ background: "rgba(60,15,25,0.8)", border: "1px solid rgba(212,175,55,0.4)", color: "#d4af37" }}>
            <ChevronLeft size={20} />
          </button>
          <span className="font-body text-xs" style={amber}>{entry.title}</span>
          <button onClick={next} className="p-2 rounded-full" style={{ background: "rgba(60,15,25,0.8)", border: "1px solid rgba(212,175,55,0.4)", color: "#d4af37" }}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </PageBackground>
  );
}

function Section({ label, text }) {
  return (
    <div className="mb-4">
      <p className="font-heading text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(212,175,55,0.7)" }}>{label}</p>
      <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,248,230,0.9)" }}>{text}</p>
    </div>
  );
}