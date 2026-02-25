import { motion } from "framer-motion";

export default function Scene04Scale() {
  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* BASE IMAGE — INFRA CONTEXT */}
     <motion.img
  src="/images/scene4-cloud.jpg"
  initial={{
    scale: 1.06,
    objectPosition: "45% 70%", // starts near cable zone
  }}
  animate={{
    scale: 1.12,
    objectPosition: "40% 20%", // settles into cloud
  }}
  transition={{
    duration: 6,
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

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 1.6 }}
  style={{
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 85%)",
    pointerEvents: "none",
  }}
/>



      {/* ENERGY CONTINUATION — SAME COLOR LANGUAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(255,160,80,0.22), rgba(0,0,0,0) 65%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* STRUCTURAL DARKNESS — KEEP FOCUS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.6 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 80%)",
          pointerEvents: "none",
        }}
      />

      {/* COPY — SCALE STATEMENT */}
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
        Built to scale beyond the screen
      </motion.div>
    </section>
  );
}
