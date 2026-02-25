import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Scene01Vision from "./Scene01Vision";

export default function HeroNarrative() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 4000),
      setTimeout(() => setPhase(2), 9000),
      setTimeout(() => setPhase(3), 15000),
      setTimeout(() => setPhase(4), 22000),
      setTimeout(() => setPhase(5), 29000),
      setTimeout(() => setPhase(6), 35000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const bgStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* ===== BACKGROUND LAYERS (NO CAMERA ZOOM) ===== */}

      <motion.img
        src="/images/scene2-ui.jpg"
        animate={{ opacity: phase >= 1 && phase < 2.2 ? 1 : 0 }}
        transition={{ duration: 1.6 }}
        style={bgStyle}
      />

      <motion.img
        src="/images/scene3-cable.jpg"
        animate={{ opacity: phase >= 2 && phase < 3.2 ? 1 : 0 }}
        transition={{ duration: 1.6 }}
        style={bgStyle}
      />

      <motion.img
        src="/images/scene4-cloud.jpg"
        animate={{ opacity: phase >= 3 && phase < 4.3 ? 1 : 0 }}
        transition={{ duration: 1.8 }}
        style={bgStyle}
      />

      <motion.img
        src="/images/scene5-services.jpg"
        animate={{ opacity: phase >= 4 && phase < 5.3 ? 1 : 0 }}
        transition={{ duration: 1.8 }}
        style={bgStyle}
      />

      <motion.img
        src="/images/scene6-security.jpg"
        animate={{ opacity: phase >= 5 ? 1 : 0 }}
        transition={{ duration: 2 }}
        style={bgStyle}
      />

      {/* ===== INTRO OVERLAY ===== */}
      <Scene01Vision active={phase === 0} />

      {/* ===== COPY (SERVICES) ===== */}
      <motion.div
        animate={{
          opacity: phase >= 4 && phase < 5 ? 1 : 0,
          y: phase >= 4 && phase < 5 ? 0 : 12,
        }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          left: "8%",
          bottom: "12%",
          fontSize: "13px",
          letterSpacing: "0.26em",
          color: "rgba(255,255,255,0.55)",
          textTransform: "uppercase",
          zIndex: 5,
        }}
      >
        Systems that scale with your business
      </motion.div>

      {/* ===== CTA ===== */}
      <motion.div
        animate={{
          opacity: phase >= 6 ? 1 : 0,
          y: phase >= 6 ? 0 : 16,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 6,
        }}
      >
        <button
          style={{
            padding: "14px 30px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.35)",
            background: "transparent",
            color: "#fff",
            fontSize: "11px",
            letterSpacing: "0.22em",
            cursor: "pointer",
          }}
        >
          TALK TO OUR EXPERTS →
        </button>
      </motion.div>
    </section>
  );
}
