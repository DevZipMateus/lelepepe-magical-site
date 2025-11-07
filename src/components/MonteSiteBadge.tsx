import { useEffect } from "react";

interface MonteSiteBadgeProps {
  fixed?: boolean;
}

const MonteSiteBadge = ({ fixed = false }: MonteSiteBadgeProps) => {
  useEffect(() => {
    // Load the MonteSite badge script
    const script = document.createElement("script");
    script.src = "https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  const style = fixed
    ? {
        position: "fixed" as const,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "auto" as const,
      }
    : {};

  return <div id="montesite-footer-badge" style={style}></div>;
};

export default MonteSiteBadge;
