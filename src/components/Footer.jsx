export default function Footer() {
  const links = [
    { label: "Main Site", url: "https://kingdommandateministry.com" },
    { label: "Bible Companion", url: "https://thebiblecompanion.online" },
    { label: "Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
    { label: "Fire Companion", url: "https://fire.kingdommandateministry.com" },
    { label: "Pathway", url: "https://pathway.kingdommandateministry.com" },
    { label: "Declarations", url: "https://declarations.kingdommandateministry.com" },
    { label: "YouTube", url: "https://www.youtube.com/@KingdomMandateMinistry" },
    { label: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
    { label: "Partner / Sow", url: "https://kingdommandateministry.com" },
  ];

  return (
    <footer className="relative z-10 py-8 px-4 text-center" style={{ background: "rgba(30,8,12,0.92)", borderTop: "1px solid rgba(212,175,55,0.25)" }}>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 max-w-4xl mx-auto">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body transition-colors"
            style={{ color: "rgba(212,175,55,0.8)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
      <p className="text-xs font-body" style={{ color: "rgba(255,248,230,0.5)" }}>
        © 2026 Kingdom Mandate Ministry | Built by the Glory of GOD, for the Grace of GOD
      </p>
    </footer>
  );
}