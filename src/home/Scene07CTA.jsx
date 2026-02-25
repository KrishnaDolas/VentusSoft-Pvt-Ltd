import { motion } from "framer-motion";

export default function Scene07CTA() {
  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none", // allow click only on button
      }}
    >
      {/* SOFT FOCUS — pulls attention to center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.85) 80%)",
          pointerEvents: "none",
        }}
      />

      {/* CTA BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18%",
          transform: "translateX(-50%)",
          textAlign: "center",
          pointerEvents: "auto",
        }}
      >
        {/* HEADLINE */}
        <div
          style={{
            fontSize: "14px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "18px",
          }}
        >
          Ready to build with confidence
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 28px rgba(120,220,255,0.35)",
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "transparent",
            border: "1px solid rgba(120,220,255,0.55)",
            color: "#eaf7ff",
            padding: "14px 38px",
            fontSize: "14px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "999px",
            backdropFilter: "blur(6px)",
          }}
          onClick={() => {
            // hook later: open form / scroll / route
            console.log("CTA clicked");
          }}
        >
          Talk to Our Experts →
        </motion.button>
      </motion.div>
    </section>
  );
}
