import { motion } from "framer-motion";

export default function Scene03Infra() {
  return (
    <motion.section
      initial={{
        x: "-10%",   // enters from LEFT (cable side)
        y: "6%",     // slightly DOWN (port position)
        opacity: 0,
      }}
      animate={{
        x: "0%",
        y: "0%",
        opacity: 1,
      }}
      transition={{
        duration: 1.4,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* BASE IMAGE — SAME CAMERA AS SCENE 2 END */}
      <motion.img
        src="/images/scene3-cable.jpg"
        alt="Auribus infrastructure connection"
        initial={{
          scale: 1.12,
          objectPosition: "48% 38%", // SAME as Scene 2 UI focus
        }}
        animate={{
          scale: 1.14,
          objectPosition: "48% 38%",
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      {/* CABLE CORE — IGNITES AFTER SLIDE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "55.4%",
          top: "67.8%",
          width: "18px",
          height: "18px",
          background:
            "radial-gradient(circle, rgba(255,190,120,1) 0%, rgba(255,150,80,0.8) 45%, rgba(0,0,0,0) 70%)",
          filter: "blur(1px)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* HOT CORE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "55.4%",
          top: "67.8%",
          width: "22px",
          height: "22px",
          background:
            "radial-gradient(circle, rgba(255,190,120,1), rgba(255,140,60,0.9) 55%, rgba(0,0,0,0) 72%)",
          filter: "blur(1px)",
          mixBlendMode: "screen",
        }}
      />

      {/* HEAT BLOOM */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1.0, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "65%",
          width: "260px",
          height: "160px",
          background:
            "radial-gradient(ellipse, rgba(255,160,80,0.22), rgba(0,0,0,0) 70%)",
          filter: "blur(32px)",
          mixBlendMode: "screen",
        }}
      />

      {/* LOCAL ENERGY HALO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "64%",
          width: "320px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(255,160,80,0.28), rgba(0,0,0,0) 70%)",
          filter: "blur(36px)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* ENERGY SPILL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1.0, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "52%",
          top: "69%",
          width: "150px",
          height: "70px",
          background:
            "radial-gradient(ellipse at left, rgba(255,170,90,0.4), rgba(0,0,0,0) 70%)",
          filter: "blur(16px)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* DARKNESS CONTROL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.4 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 56% 66%, rgba(0,0,0,0) 18%, rgba(0,0,0,0.85) 60%)",
          pointerEvents: "none",
        }}
      />

      {/* MICRO COPY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        style={{
          position: "absolute",
          left: "8%",
          bottom: "12%",
          fontSize: "13px",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        Infrastructure that doesn’t blink
      </motion.div>
    </motion.section>
  );
}
