import { useState, useEffect } from "react";

export default function PageBackground({ desktop, mobile, children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const bg = isMobile ? mobile : desktop;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen w-full" style={{ background: "rgba(30,10,5,0.25)" }}>
        {children}
      </div>
    </div>
  );
}