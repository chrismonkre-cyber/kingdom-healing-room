import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";
import { RESOURCES } from "../lib/healingData";
import { ExternalLink } from "lucide-react";

const gold = { color: "#d4af37", textShadow: "0 0 14px rgba(212,175,55,0.4), 0 2px 4px rgba(0,0,0,0.7)" };
const ivory = { color: "rgba(255,248,230,0.92)" };
const amber = { color: "rgba(218,165,32,0.85)" };

export default function Resources() {
  return (
    <PageBackground desktop={IMAGES.resources.desktop} mobile={IMAGES.resources.mobile}>
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <h1 className="font-heading font-black text-2xl md:text-4xl text-center mb-2" style={gold}>Resources</h1>
        <p className="text-center font-body text-sm mb-8" style={amber}>Connect with the Kingdom Mandate Ministry ecosystem.</p>

        <div className="grid gap-3 md:grid-cols-2 mb-8">
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer">
              <GlassCard className="hover:scale-[1.02] transition-transform h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading font-bold text-sm md:text-base" style={gold}>{r.title}</h3>
                    <p className="font-body text-xs mt-1" style={ivory}>{r.desc}</p>
                  </div>
                  <ExternalLink size={14} style={{ color: "rgba(212,175,55,0.6)" }} />
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        <GlassCard className="text-center">
          <h3 className="font-heading font-bold text-base mb-2" style={gold}>Contact</h3>
          <a href="mailto:kingdommm.chris@gmail.com" className="font-body text-sm underline" style={amber}>kingdommm.chris@gmail.com</a>
          <div className="mt-4">
            <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg font-heading text-sm font-bold" style={{ background: "linear-gradient(135deg, #d4af37, #b8941f)", color: "#1a0a0e" }}>
              Partner / Sow
            </a>
          </div>
        </GlassCard>
      </div>
    </PageBackground>
  );
}