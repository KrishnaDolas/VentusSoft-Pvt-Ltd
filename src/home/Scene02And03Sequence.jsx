import { motion } from "framer-motion";

export default function Scene02And03Sequence() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* 🎥 CAMERA RIG: gentle, premium glide (1.0 -> 1.12) */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }} // <-- Reduced from 1.35 to 1.12 (Subtle)
        transition={{
          duration: 14, // <-- Slower duration for a "heavy", expensive feel
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          transformOrigin: "48% 38%", // Focal Point
        }}
      >
        {/* IMAGE 1: UI (Visible 0s - 4s) */}
        <motion.img
          src="/images/scene2-ui.jpg"
          alt="Auribus Interface"
          animate={{ opacity: 0 }}
          transition={{ delay: 4.0, duration: 0.1 }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

        {/* IMAGE 2: CABLE (Visible 4s - End) */}
        <motion.img
          src="/images/scene3-cable.jpg"
          alt="Auribus Connection"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.0, duration: 0.1 }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </motion.div>

      {/* 🌑 GLOBAL DIMMER: Ensures text pops against bright screen */}
      <div 
        style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.3)", // 30% darkness overlay
            zIndex: 10,
            pointerEvents: "none"
        }}
      />

      {/* ⚡ THE FLASH (At 4.0s) - Hides the swap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={[
          { opacity: 0 },
          { opacity: 1, duration: 0.1, delay: 3.9 }, 
          { opacity: 0, duration: 0.8, delay: 4.1 } 
        ]}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#FFFFFF",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* 📝 TEXT 1: INTERFACES (Visible 0.5s -> 3.8s) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={[
          { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } }, // Enter
          { opacity: 0, x: -10, transition: { duration: 0.3, delay: 3.8 } } // Exit
        ]}
        style={{
          position: "absolute",
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          textAlign: "right",
          color: "#FFFFFF",
          fontSize: "16px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          lineHeight: "1.6",
          zIndex: 100,
          fontWeight: "600",
          textShadow: "0px 2px 20px rgba(0,0,0,1)", // Strong shadow
        }}
      >
        Interfaces built<br />for real systems
      </motion.div>

      {/* 📝 TEXT 2: INFRASTRUCTURE (Visible 4.5s -> End) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.5, duration: 1 }}
        style={{
          position: "absolute",
          left: "10%",
          bottom: "15%",
          color: "#FFFFFF",
          fontSize: "16px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          zIndex: 100,
          fontWeight: "600",
          textShadow: "0px 2px 20px rgba(0,0,0,1)",
        }}
      >
        Infrastructure that doesn’t blink
      </motion.div>
    </motion.section>
  );
}