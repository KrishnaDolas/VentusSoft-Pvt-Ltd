import { motion } from "framer-motion";

export default function Proof() {
  return (
    <section style={{ padding: "96px 0 80px" }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* TOP STATEMENT */}
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 500,
              color: "#fff",
              marginBottom: 12,
            }}
          >
            Proof of capability
          </h2>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            We don’t just ship code — we build and operate systems teams can
            trust in production.
          </p>
        </div>

        {/* CAPABILITY STRIP */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 56,
            fontSize: "0.85rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <span>Full-stack delivery</span>
          <span>Modern engineering</span>
          <span>Proven at scale</span>
          <span>Knowledge transfer</span>
        </div>

        {/* PROOF ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* NUMBERS */}
          <div>
            <div
              style={{
                display: "flex",
                gap: 48,
                flexWrap: "wrap",
                marginBottom: 24,
              }}
            >
              <Stat value="40+" label="MERN systems live" />
              <Stat value="30+" label="React Native apps" />
              <Stat value="99.9%" label="Platform uptime" />
            </div>

            <p
              style={{
                maxWidth: 520,
                fontSize: "1.05rem",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Built for performance, security, and long-term ownership — not
              short-term delivery.
            </p>
          </div>

          {/* TESTIMONIALS (EMBEDDED, NOT CARDS) */}
          <div style={{ display: "grid", gap: 28 }}>
            <Testimonial
              text="Our MERN platform launched on time with a clean, scalable architecture."
              author="Product Founder · SaaS"
            />
            <Testimonial
              text="DevOps transformation reduced deployment times by 75% across teams."
              author="Enterprise CTO"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Subcomponents --- */

function Stat({ value, label }) {
  return (
    <div>
      <div
        style={{
          fontSize: "clamp(28px, 3vw, 36px)",
          fontWeight: 500,
          color: "#fff",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Testimonial({ text, author }) {
  return (
    <div>
      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.75)",
          marginBottom: 6,
        }}
      >
        “{text}”
      </p>
      <div
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        {author}
      </div>
    </div>
  );
}
