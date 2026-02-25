import { motion } from "framer-motion";

const text = "AURIBUS TECH".split("");

export default function Scene01Vision({ active = true }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{
        height: "100vh",
        width: "100vw",
        background: "radial-gradient(circle at top, #121826, #05070c)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "absolute",
        inset: 0,
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* Brand */}
        <motion.div
          style={{
            display: "flex",
            gap: "0.18em", // tighter
            fontSize: "clamp(64px, 9vw, 128px)",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "#ffffff",
          }}
        >
          {text.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + i * 0.07,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Energy underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "52%", opacity: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeInOut" }}
          style={{
            height: "2px",
            margin: "22px auto 0",
            background:
              "linear-gradient(90deg, transparent, #4FA3FF, #E6C98A, transparent)",
            boxShadow: "0 0 18px rgba(79,163,255,0.35)",
            borderRadius: "2px",
          }}
        />
      </div>
    </motion.section>
  );
}
