import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";
import { ExternalLink, Smartphone } from "lucide-react";

const gold = { color: "#f5d060", textShadow: "0 0 18px rgba(212,175,55,0.7), 0 2px 4px rgba(0,0,0,0.9)" };
const ivory = { color: "rgba(255,252,235,0.97)" };
const amber = { color: "rgba(245,208,96,0.95)" };

const ECOSYSTEM = [
  { title: "Main Ministry Site", desc: "Kingdom Mandate Ministry home base.", url: "https://kingdommandateministry.com" },
  { title: "The Bible Companion", desc: "Guided Scripture study and devotionals.", url: "https://thebiblecompanion.online" },
  { title: "Kingdom Prayer Wall", desc: "Intercede and post prayer requests.", url: "https://prayer.kingdommandateministry.com" },
  { title: "Kingdom Fire Companion", desc: "Holy Spirit fire and revival devotionals.", url: "https://fire.kingdommandateministry.com" },
  { title: "Kingdom Pathway", desc: "Discover your God-given path.", url: "https://pathway.kingdommandateministry.com" },
  { title: "Kingdom Declarations", desc: "Daily faith-filled Kingdom declarations.", url: "https://declarations.kingdommandateministry.com" },
  { title: "Kingdom Healing Room", desc: "Healing Scripture, prayer, and declarations.", url: "https://healing.kingdommandateministry.com" },
  { title: "Kingdom Purpose Finder", desc: "Find your divine purpose.", url: "https://purpose.kingdommandateministry.com" },
  { title: "Kingdom Identity", desc: "Know who you are in Christ.", url: "https://identity.kingdommandateministry.com" },
  { title: "Kingdom Gift Finder", desc: "Discover your spiritual gifts.", url: "https://gifts.kingdommandateministry.com" },
  { title: "Kingdom Battle Plan", desc: "Spiritual warfare strategy and prayer.", url: "https://battle.kingdommandateministry.com" },
  { title: "Kingdom Grace Vault", desc: "Immerse yourself in God's grace.", url: "https://grace.kingdommandateministry.com" },
  { title: "Kingdom Revival Fire", desc: "Ignite revival in your life and community.", url: "https://revival.kingdommandateministry.com" },
  { title: "Kingdom Family Altar", desc: "Build a family of faith and prayer.", url: "https://family.kingdommandateministry.com" },
  { title: "Kingdom Marketplace Mandate", desc: "Kingdom principles for business and work.", url: "https://marketplace.kingdommandateministry.com" },
  { title: "Kingdom Freedom", desc: "Walk in deliverance and freedom in Christ.", url: "https://freedom.kingdommandateministry.com" },
  { title: "YouTube Channel", desc: "Messages, teachings, and Kingdom content.", url: "https://www.youtube.com/@KingdomMandateMinistry" },
];

const STEPS = [
  "Open this app in your browser.",
  'Tap your browser menu (three dots or share icon).',
  'Choose "Add to Home Screen" or "Install App."',
  "Open it anytime like a normal app — no app store needed.",
];

export default function Resources() {
  const scrollToInstall = () => {
    document.getElementById("install-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageBackground desktop={IMAGES.resources.desktop} mobile={IMAGES.resources.mobile}>
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <h1 className="font-heading font-black text-2xl md:text-4xl text-center mb-2" style={gold}>Resources</h1>
        <p className="text-center font-body text-sm mb-3" style={amber}>Connect with the full Kingdom Mandate Ministry ecosystem.</p>

        {/* Quick install shortcut */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToInstall}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-heading text-xs font-bold"
            style={{ background: "rgba(60,15,25,0.85)", color: "#f5d060", border: "1px solid rgba(212,175,55,0.5)" }}
          >
            <Smartphone size={14} />
            Install This App
          </button>
        </div>

        {/* Ecosystem grid */}
        <div className="grid gap-3 md:grid-cols-2 mb-8">
          {ECOSYSTEM.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer">
              <GlassCard className="hover:scale-[1.02] transition-transform h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading font-bold text-sm md:text-base" style={gold}>{r.title}</h3>
                    <p className="font-body text-xs mt-1" style={ivory}>{r.desc}</p>
                  </div>
                  <ExternalLink size={14} style={{ color: "rgba(245,208,96,0.65)", flexShrink: 0, marginTop: 2 }} />
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Contact & Partner */}
        <GlassCard className="text-center mb-6">
          <h3 className="font-heading font-bold text-base mb-2" style={gold}>Contact</h3>
          <a href="mailto:kingdommm.chris@gmail.com" className="font-body text-sm underline" style={amber}>kingdommm.chris@gmail.com</a>
          <div className="mt-4">
            <a
              href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-heading text-sm font-bold"
              style={{ background: "linear-gradient(135deg, #d4af37, #b8941f)", color: "#1a0a0e" }}
            >
              Partner / Sow
            </a>
          </div>
        </GlassCard>

        {/* Install This App */}
        <GlassCard id="install-section">
          <div className="flex items-center gap-2 mb-3">
            <Smartphone size={20} style={{ color: "#f5d060" }} />
            <h3 className="font-heading font-bold text-base md:text-lg" style={gold}>Install This Free Kingdom App</h3>
          </div>
          <p className="font-body text-sm mb-5" style={ivory}>
            You can install Kingdom Healing Room on your phone, tablet, or computer without using an app store.
          </p>
          <ol className="space-y-3 mb-2">
            {STEPS.map((step, i) => (
              <li key={i} className="font-body text-sm flex gap-3 items-start" style={ivory}>
                <span
                  className="font-heading font-black text-sm rounded-full flex items-center justify-center shrink-0"
                  style={{ color: "#1a0a0e", background: "linear-gradient(135deg, #d4af37, #b8941f)", width: 24, height: 24 }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </GlassCard>
      </div>
    </PageBackground>
  );
}