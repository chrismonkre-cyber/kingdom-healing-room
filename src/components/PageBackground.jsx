import { useState, useEffect } from "react";

export default function PageBackground({ desktop, mobile, children, overlay = "rgba(20,5,8,0.18)" }) {
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
     <div className="min-h-screen w-full" style={{ background: overlay }}>
        {children}
      </div>
    </div>
  );
}
