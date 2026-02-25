// src/components/Section.jsx

import { layout } from "../styles/layout";

export default function Section({ children, tight = false }) {
  return (
    <section style={tight ? layout.sectionTight : layout.section}>
      <div style={layout.container}>{children}</div>
    </section>
  );
}
