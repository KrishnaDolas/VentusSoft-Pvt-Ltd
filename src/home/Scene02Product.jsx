import { motion } from "framer-motion";

export default function Scene02Product() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
    <motion.img
  src="/images/scene2-ui.jpg"
  alt="Auribus product interface"
  initial={{
    scale: 1,
    objectPosition: "48% 38%",
  }}
  animate={{
    scale: [1, 1, 1.12],                 // 👈 scale starts AFTER pause
    objectPosition: [
      "48% 38%",                          // UI focus
      "48% 38%",                          // HOLD
    ],
  }}
  transition={{
    duration: 6,
    times: [0,  1],                  // 👈 35% time fully static
    ease: "easeInOut",
  }}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transformOrigin: "center",
  }}
/>




<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2.2, duration: 2 }}
  style={{
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(
        ellipse at 48% 38%,
        rgba(255,255,255,0.06),
        rgba(0,0,0,0.85) 60%
      )
    `,
    pointerEvents: "none",
  }}
/>

{/* WARM AMBIENT UNDERTONE — VERY SUBTLE */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.22 }}
  transition={{ delay: 3.2, duration: 2.6 }}
  style={{
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 50% 70%, rgba(255,170,90,0.12), rgba(0,0,0,0) 60%)",
    mixBlendMode: "screen",
    pointerEvents: "none",
  }}
/>


      


      {/* SOFT VIGNETTE — GUIDES EYE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 2 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.75) 85%)",
          pointerEvents: "none",
        }}
      />

      {/* SUBTITLE — RIGHT SIDE, QUIET */}
     <motion.div
  initial={{ opacity: 0, x: 8 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 3.8, duration: 1 }}
  style={{
    position: "absolute",
    right: "8%",
    top: "50%",
    transform: "translateY(-50%)",
    textAlign: "right",
    fontSize: "15px",
    letterSpacing: "0.28em",
    color: "rgba(255,255,255,0.55)",
    textTransform: "uppercase",
    lineHeight: "1.9",
  }}
>
  Interfaces built<br />for real systems
</motion.div>
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.35 }}
  transition={{ delay: 0.6, duration: 1.8, ease: "easeInOut" }}
  style={{
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 50% 85%, rgba(255,170,90,0.22), rgba(0,0,0,0) 60%)",
    mixBlendMode: "screen",
    pointerEvents: "none",
  }}
/>
{/* UI ATTENTION SOFTEN — DOES NOT END SCENE */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.08 }}
  transition={{ delay: 4.0, duration: 1.2, ease: "easeInOut" }}
  style={{
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 48% 38%, rgba(0,0,0,0.0), rgba(0,0,0,0.6) 70%)",
    pointerEvents: "none",
  }}
/>





    </section>

  );
}

