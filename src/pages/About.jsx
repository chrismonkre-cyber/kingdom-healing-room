import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";
import { RESOURCES } from "../lib/healingData";

const gold = { color: "#d4af37", textShadow: "0 0 14px rgba(212,175,55,0.4), 0 2px 4px rgba(0,0,0,0.7)" };
const ivory = { color: "rgba(255,248,230,0.92)" };
const amber = { color: "rgba(218,165,32,0.85)" };

export default function About() {
  return (
    <PageBackground desktop={IMAGES.resources.desktop} mobile={IMAGES.resources.mobile}>
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <h1 className="font-heading font-black text-2xl md:text-4xl text-center mb-2" style={gold}>About</h1>
        <p className="text-center font-body text-sm mb-8" style={amber}>Kingdom Healing Room</p>

        <GlassCard className="mb-6">
          <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={ivory}>
            Kingdom Healing Room is a Kingdom Mandate Ministry resource created to help believers stand on Scripture, pray with faith, receive encouragement, and walk in the healing power of Jesus Christ.
          </p>
          <h3 className="font-heading font-bold text-base mb-2" style={gold}>Our Mission</h3>
          <p className="font-body text-sm leading-relaxed mb-4" style={ivory}>
            {"Kingdom Mandate Ministry exists to advance the Kingdom through The Holy Spirit, Healing & Power."}
          </p>
          <div className="p-3 rounded-lg" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <p className="font-body text-xs leading-relaxed" style={amber}>
              <strong>Important:</strong> This app provides Scripture, prayer, encouragement, and faith-based support. It is not medical advice and does not replace professional medical care.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="mb-6">
          <h3 className="font-heading font-bold text-base mb-3" style={gold}>Ministry Links</h3>
          <div className="space-y-2">
            {RESOURCES.map((r) => (
              <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="block font-body text-sm underline" style={amber}>
                {r.title}
              </a>
            ))}
            <a href="mailto:kingdommm.chris@gmail.com" className="block font-body text-sm underline" style={amber}>{"Contact: kingdommm.chris@gmail.com"}</a>
            <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="block font-body text-sm underline" style={amber}>{"Partner / Sow"}</a>
          </div>
        </GlassCard>
      </div>
    </PageBackground>
  );
}