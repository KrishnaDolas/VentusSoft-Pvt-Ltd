// src/styles/layout.js

export const layout = {
  container: {
    width: "100%",
    maxWidth: "80rem", // 1280px
    margin: "0 auto",
    padding: "0 clamp(1rem, 4vw, 2rem)",
  },

  section: {
    padding: "clamp(4rem, 10vw, 8rem) 0",
  },

  sectionTight: {
    padding: "clamp(3rem, 8vw, 6rem) 0",
  },

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "clamp(2rem, 6vw, 5rem)",
    alignItems: "center",
  },

  gridThree: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "clamp(1.5rem, 4vw, 3rem)",
  },
};
