// src/styles/theme.js

export const theme = {
  colors: {
    bg: "#050a14",
    surface: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",

    textPrimary: "#ffffff",
    textSecondary: "rgba(255,255,255,0.65)",
    textMuted: "rgba(255,255,255,0.45)",

    blue: "#00C6FF",
    blueDeep: "#0072FF",
    gold: "#E6C98A",
  },

  gradients: {
    blue:
      "linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)",

    subtleGlow:
      "radial-gradient(600px 300px at 50% 0%, rgba(0,198,255,0.12), transparent 60%)",
  },

  glow: {
    soft: "0 0 40px rgba(0,198,255,0.35)",
    button: "0 8px 30px rgba(0,114,255,0.45)",
  },

  radius: {
    sm: 10,
    md: 18,
    lg: 28,
    pill: 999,
  },
};
