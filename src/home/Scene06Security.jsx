import { motion } from "framer-motion";

export default function Scene06Security() {
  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* BASE IMAGE — SECURITY CORE */}
      <motion.img
        src="/images/scene6-security.jpg"
        initial={{
          scale: 1,      // very close to Scene05 end
          opacity: 1,
        }}
        animate={{
          scale: 1.06,      // slight tightening = protection
          opacity: 1,
        }}
        transition={{
          duration: 3.2,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* SECURITY FIELD — GEOMETRIC SHIELD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.6 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(120,220,255,0.18), rgba(0,0,0,0) 55%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* OUTER CONTAINMENT — DARK FALL-OFF */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.8 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 35%, rgba(0,0,0,0.9) 85%)",
          pointerEvents: "none",
        }}
      />

      {/* COPY — SECURITY MESSAGE */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
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
        Secure at every layer
      </motion.div>
      {/* CTA — FINAL HOLD, NO SCENE CHANGE */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3.2, duration: 1.2, ease: "easeOut" }}
  style={{
    position: "absolute",
    left: "50%",
    bottom: "12%",
    transform: "translateX(-50%)",
    textAlign: "center",
    zIndex: 10,
  }}
>
  <div
    style={{
      fontSize: "11px",
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "rgba(180,220,255,0.6)",
      marginBottom: "14px",
    }}
  >
    Ready to build with confidence
  </div>

  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    style={{
      background: "transparent",
      border: "1px solid rgba(180,220,255,0.45)",
      color: "rgba(220,240,255,0.9)",
      padding: "14px 26px",
      borderRadius: "999px",
      fontSize: "12px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      cursor: "pointer",
      backdropFilter: "blur(6px)",
    }}
  >
    Talk to our experts →
  </motion.button>
</motion.div>

    </section>
  );
}
