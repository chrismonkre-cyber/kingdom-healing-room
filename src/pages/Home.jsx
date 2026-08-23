import { Link } from "react-router-dom";
const LOGO_URL = "https://media.base44.com/images/public/6a15e69ec699dec43ddd5423/de815717a_newlogo.png";
import PageBackground from "../components/PageBackground";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../lib/images";

const goldStyle = { color: "#f5d060", textShadow: "0 0 28px rgba(212,175,55,0.85), 0 0 10px rgba(212,175,55,0.5), 0 3px 6px rgba(0,0,0,0.95)" };
const ivoryStyle = { color: "rgba(255,252,235,0.97)" };

const SECTIONS = [
  { title: "Healing Begins with the Word", text: "God's Word is alive and powerful. When you speak Scripture over your life, healing begins. The Word is the foundation of every miracle." },
  { title: "Jesus Is Our Healer", text: "Jesus healed every sickness and every disease among the people. He is the same yesterday, today, and forever. His healing power is available to you right now." },
  { title: "Stand in Faith", text: "Faith is the substance of things hoped for. When you stand on God's Word and refuse to let go, heaven responds. Stand firm — your healing is coming." },
  { title: "Speak Life", text: "Death and life are in the power of the tongue. Speak healing, speak wholeness, speak the promises of God over your body, your mind, and your family." },
  { title: "Rest in His Presence", text: "Come to Jesus, all who are weary. In His presence there is fullness of joy, restoration, and supernatural peace. Rest — and let Him heal you." },
];

export default function Home() {
  return (
    <PageBackground
  desktop={IMAGES.home.desktop}
  mobile={IMAGES.home.mobile}
  overlay="rgba(20,5,8,0.40)"
>
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <img
              src={LOGO_URL}
              alt="Kingdom Mandate Ministry"
              className="rounded-full object-cover"
              style={{ width: 96, height: 96, border: "2px solid rgba(212,175,55,0.7)", boxShadow: "0 0 24px rgba(212,175,55,0.4)" }}
            />
          </div>
          <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-4" style={goldStyle}>
            Kingdom Healing Room
          </h1>
          <p className="font-heading text-base md:text-xl mb-6" style={{ ...goldStyle, fontSize: undefined }}>
            Receive the Word. Stand in Faith. Walk in Healing.
          </p>
          <GlassCard className="max-w-2xl mx-auto mb-8">
            <p className="font-body text-sm md:text-base leading-relaxed" style={ivoryStyle}>
              A Spirit-filled healing companion created to help you stand on the Word of God, pray with faith, speak healing declarations, and receive encouragement for body, soul, and spirit.
            </p>
          </GlassCard>

          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/daily" className="inline-block px-6 py-3 rounded-lg font-heading text-sm font-bold transition-all" style={{ background: "linear-gradient(135deg, #d4af37, #b8941f)", color: "#1a0a0e", boxShadow: "0 0 20px rgba(212,175,55,0.3)" }}>
              Start Today's Healing Word
            </Link>
            <Link to="/healing" className="inline-block px-6 py-3 rounded-lg font-heading text-sm font-bold transition-all" style={{ background: "rgba(60,15,25,0.8)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.5)" }}>
              Choose a Healing Focus
            </Link>
            <Link to="/journal" className="inline-block px-6 py-3 rounded-lg font-heading text-sm font-bold transition-all" style={{ background: "rgba(60,15,25,0.8)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.5)" }}>
              Prayer Journal
            </Link>
            <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg font-heading text-sm font-bold transition-all" style={{ background: "rgba(60,15,25,0.8)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.5)" }}>
              Partner / Sow
            </a>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {SECTIONS.map((s) => (
            <GlassCard key={s.title}>
              <h3 className="font-heading font-black text-lg md:text-xl mb-2" style={goldStyle}>{s.title}</h3>
              <p className="font-body text-sm md:text-base leading-relaxed" style={ivoryStyle}>{s.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageBackground>
  );
}
