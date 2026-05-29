import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";

const gold = { color: "#f0c84a", textShadow: "0 0 14px rgba(212,175,55,0.5), 0 2px 4px rgba(0,0,0,0.7)" };
const ivory = { color: "rgba(255,248,220,0.93)" };
const amber = { color: "rgba(240,200,74,0.88)" };

const LINKS = [
  { label: "Main Ministry Site", url: "https://kingdommandateministry.com" },
  { label: "The Bible Companion", url: "https://thebiblecompanion.online" },
  { label: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { label: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com" },
  { label: "Kingdom Pathway", url: "https://pathway.kingdommandateministry.com" },
  { label: "Kingdom Declarations", url: "https://declarations.kingdommandateministry.com" },
  { label: "Kingdom Healing Room", url: "https://healing.kingdommandateministry.com" },
  { label: "Kingdom Purpose Finder", url: "https://purpose.kingdommandateministry.com" },
  { label: "Kingdom Identity", url: "https://identity.kingdommandateministry.com" },
  { label: "Kingdom Gift Finder", url: "https://gifts.kingdommandateministry.com" },
  { label: "Kingdom Battle Plan", url: "https://battle.kingdommandateministry.com" },
  { label: "Kingdom Grace Vault", url: "https://grace.kingdommandateministry.com" },
  { label: "Kingdom Revival Fire", url: "https://revival.kingdommandateministry.com" },
  { label: "Kingdom Family Altar", url: "https://family.kingdommandateministry.com" },
  { label: "Kingdom Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com" },
  { label: "Kingdom Freedom", url: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube Channel", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact: kingdommm.chris@gmail.com", url: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

const MISSION = "Kingdom Mandate Ministry exists to advance the Kingdom through The Holy Spirit, Healing and Power.";

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
          <p className="font-body text-sm leading-relaxed mb-4" style={ivory}>{MISSION}</p>
          <div className="p-3 rounded-lg" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <p className="font-body text-xs leading-relaxed" style={amber}>
              <strong>Important:</strong> This app provides Scripture, prayer, encouragement, and faith-based support. It is not medical advice and does not replace professional medical care.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="mb-6">
          <h3 className="font-heading font-bold text-base mb-3" style={gold}>Ministry Ecosystem</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {LINKS.map((r) => (
              <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" className="font-body text-sm underline hover:opacity-80 transition-opacity" style={amber}>
                {r.label}
              </a>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="text-center">
          <h3 className="font-heading font-bold text-base mb-2" style={gold}>Support the Ministry</h3>
          <p className="font-body text-sm mb-4" style={ivory}>Partner with Kingdom Mandate Ministry and help advance the Kingdom.</p>
          <a
            href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-heading text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #d4af37, #b8941f)", color: "#1a0a0e" }}
          >
            Partner / Sow
          </a>
        </GlassCard>
      </div>
    </PageBackground>
  );
}