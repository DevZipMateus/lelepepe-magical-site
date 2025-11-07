import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 143px)");

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 80; // 80px
      const badgeHeight = 63; // 63px
      const totalHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(`${totalHeight}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 w-full pt-20" style={{ height: iframeHeight }}>
        <iframe
          src="https://lelepepe.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Vitrine Lelê Pepê"
        />
      </main>
    </div>
  );
};

export default Vitrine;
