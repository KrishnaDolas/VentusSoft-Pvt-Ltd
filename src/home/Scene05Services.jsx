import { motion } from "framer-motion";

export default function Scene05Services() {
  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* BASE IMAGE — SYSTEMS INSIDE THE CLOUD */}
      <motion.img
        src="/images/scene5-services.jpg"
        initial={{
          scale: 1.18,              // feels like we're inside cloud
          opacity: 1,
        }}
        animate={{
          scale: 1,              // settles, no aggressive zoom
          opacity: 1,
          objectPosition: "50% 65%",
        }}
        transition={{
          duration: 3.6,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",

        }}
      />

      {/* DEPTH DARKENING — PREVENTS BUSY LOOK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.6 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 85%)",
          pointerEvents: "none",
        }}
      />

      {/* ENERGY CONTINUITY — SAME LANGUAGE AS CLOUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(255,170,90,0.18), rgba(0,0,0,0) 65%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* COPY — SERVICES STATEMENT */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 1 }}
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
        Systems that scale with your business
      </motion.div>
    </section>
  );
}
