import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Scene02ProductInfra() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 3500); // UI → Infra
    const t2 = setTimeout(() => setPhase(3), 7000); // Infra → Cloud
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* BASE LAPTOP — NEVER REMOVED */}
      <motion.img
        src="/images/scene2-ui.jpg"
        alt="Auribus UI"
        animate={{
          scale: phase === 3 ? 1.06 : 1,
          opacity: phase >= 2 ? 0.95 : 1,
        }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      {/* INFRA CABLE GLOW (PHASE 2) */}
      {phase >= 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(
                ellipse at 32% 68%,
                rgba(255,170,80,0.45) 0%,
                rgba(255,170,80,0.18) 20%,
                rgba(0,0,0,0.85) 55%
              )
            `,
            pointerEvents: "none",
          }}
        />
      )}

      {/* ENERGY PULSE (SUBTLE, NOT FLASHY) */}
      {phase === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(255,180,90,0) 35%, rgba(255,180,90,0.22) 50%, rgba(255,180,90,0) 65%)",
            filter: "blur(14px)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* CLOUD — EMERGES, DOES NOT REPLACE */}
      {phase === 3 && (
        <motion.img
          src="/images/scene4-cloud.jpg"
          alt="Auribus Cloud"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{
            position: "absolute",
            right: "-8%",
            top: "0%",
            width: "65%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
          }}
        />
      )}

      {/* TEXT — ANCHORED, QUIET */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          left: "8%",
          bottom: "10%",
          fontSize: "13px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        Infrastructure that doesn’t blink
      </motion.div>
    </section>
  );
}
