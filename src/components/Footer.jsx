export default function Footer() {
  const links = [
    { label: "Main Site", url: "https://kingdommandateministry.com" },
    { label: "Bible Companion", url: "https://thebiblecompanion.online" },
    { label: "Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
    { label: "Fire", url: "https://fire.kingdommandateministry.com" },
    { label: "Pathway", url: "https://pathway.kingdommandateministry.com" },
    { label: "Declarations", url: "https://declarations.kingdommandateministry.com" },
    { label: "Healing Room", url: "https://healing.kingdommandateministry.com" },
    { label: "Purpose Finder", url: "https://purpose.kingdommandateministry.com" },
    { label: "Identity", url: "https://identity.kingdommandateministry.com" },
    { label: "Gift Finder", url: "https://gifts.kingdommandateministry.com" },
    { label: "Battle Plan", url: "https://battle.kingdommandateministry.com" },
    { label: "Grace Vault", url: "https://grace.kingdommandateministry.com" },
    { label: "Revival Fire", url: "https://revival.kingdommandateministry.com" },
    { label: "Family Altar", url: "https://family.kingdommandateministry.com" },
    { label: "Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com" },
    { label: "Freedom", url: "https://freedom.kingdommandateministry.com" },
    { label: "YouTube", url: "https://www.youtube.com/@KingdomMandateMinistry" },
    { label: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
    { label: "Partner / Sow", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  ];

  return (
    <footer className="relative z-10 py-8 px-4 text-center" style={{ background: "rgba(20,5,8,0.95)", borderTop: "1px solid rgba(212,175,55,0.4)" }}>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-5 max-w-5xl mx-auto">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body transition-colors hover:underline"
            style={{ color: "rgba(240,200,74,0.9)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
      <p className="text-xs font-body" style={{ color: "rgba(255,248,220,0.65)" }}>
        &copy; 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
      </p>
    </footer>
  );
}