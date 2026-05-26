import { useState, useEffect } from "react";
import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";
import { Trash2 } from "lucide-react";

const STORAGE_KEY = "kingdom-healing-journal";
const gold = { color: "#d4af37", textShadow: "0 0 14px rgba(212,175,55,0.4), 0 2px 4px rgba(0,0,0,0.7)" };
const amber = { color: "rgba(218,165,32,0.85)" };

const FIELDS = [
  { key: "prayingFor", label: "Today I am praying for..." },
  { key: "scripture", label: "Scripture I am standing on..." },
  { key: "healing", label: "What healing am I believing for?" },
  { key: "godSpeaking", label: "What is God speaking to my heart?" },
  { key: "prayer", label: "Today's prayer" },
  { key: "testimony", label: "Testimony / progress notes" },
];

const emptyForm = () => FIELDS.reduce((a, f) => ({ ...a, [f.key]: "" }), {});

export default function Journal() {
  const [form, setForm] = useState(emptyForm());
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const save = () => {
    if (Object.values(form).every((v) => !v.trim())) return;
    const updated = [{ ...form, id: Date.now(), date: new Date().toLocaleDateString() }, ...entries];
    setEntries(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setForm(emptyForm());
  };

  const remove = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const inputStyle = {
    background: "rgba(40,10,18,0.7)",
    border: "1px solid rgba(212,175,55,0.3)",
    color: "rgba(255,248,230,0.92)",
    borderRadius: "8px",
  };

  return (
    <PageBackground desktop={IMAGES.journal.desktop} mobile={IMAGES.journal.mobile}>
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <h1 className="font-heading font-black text-2xl md:text-4xl text-center mb-2" style={gold}>Prayer Journal</h1>
        <p className="text-center font-body text-sm mb-8" style={amber}>A private place to write your prayers and stand in faith.</p>

        <GlassCard className="mb-8">
          {FIELDS.map((f) => (
            <div key={f.key} className="mb-4">
              <label className="font-heading text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: "rgba(212,175,55,0.7)" }}>{f.label}</label>
              <textarea
                rows={3}
                className="w-full p-3 font-body text-sm resize-none focus:outline-none focus:ring-1"
                style={{ ...inputStyle, focusRingColor: "rgba(212,175,55,0.5)" }}
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                placeholder={f.label}
              />
            </div>
          ))}
          <button onClick={save} className="w-full py-3 rounded-lg font-heading text-sm font-bold" style={{ background: "linear-gradient(135deg, #d4af37, #b8941f)", color: "#1a0a0e" }}>
            Save Journal Entry
          </button>
        </GlassCard>

        {entries.length > 0 && (
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-lg" style={gold}>Saved Entries</h2>
            {entries.map((entry) => (
              <GlassCard key={entry.id}>
                <div className="flex justify-between items-start mb-3">
                  <span className="font-body text-xs" style={amber}>{entry.date}</span>
                  <button onClick={() => remove(entry.id)} style={{ color: "rgba(212,175,55,0.6)" }}><Trash2 size={16} /></button>
                </div>
                {FIELDS.map((f) => entry[f.key] && (
                  <div key={f.key} className="mb-2">
                    <p className="font-heading text-xs uppercase tracking-wider" style={{ color: "rgba(212,175,55,0.6)" }}>{f.label}</p>
                    <p className="font-body text-sm" style={{ color: "rgba(255,248,230,0.85)" }}>{entry[f.key]}</p>
                  </div>
                ))}
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </PageBackground>
  );
}