import { motion } from "framer-motion";
// Adding icons to make the text blocks visually distinct
import { FaLayerGroup, FaMicrochip, FaCheckCircle, FaChalkboardTeacher } from "react-icons/fa";

export default function WhyAuribus() {
  return (
    // GOLDEN RULE PADDING: py-16 lg:py-24
    <section className="py-16 lg:py-24 relative">
      <div className="layout-container">
        
        {/* MAIN GRID 
           - Mobile: Stacked (1 col)
           - Desktop: Split (1.5fr Content, 1fr Panel)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-start">
          
          {/* LEFT SIDE - CONTENT */}
          <div>
            {/* HEADER */}
            <div className="mb-12 lg:mb-16 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight"
              >
                Why Us?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl lg:text-2xl text-white/65 leading-relaxed"
              >
                We work as a long-term technical partner — helping teams build,
                operate, and evolve systems that remain reliable as they scale.
              </motion.p>
            </div>

            {/* CAPABILITIES GRID 
               - Mobile: 1 col
               - Tablet+: 2 cols
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              <Capability 
                icon={<FaLayerGroup />}
                title="Full-stack capability"
                desc="From frontend UI to backend APIs and cloud deployment — one trusted partner with clear ownership."
              />
              <Capability 
                icon={<FaMicrochip />}
                title="Modern technology stack"
                desc="MERN, React Native, WordPress, Kubernetes, and DevOps automation — chosen for scale, not trends."
              />
              <Capability 
                icon={<FaCheckCircle />}
                title="Proven delivery"
                desc="5+ years of hands-on experience and 50+ shipped products across startups and enterprises."
              />
              <Capability 
                icon={<FaChalkboardTeacher />}
                title="Knowledge transfer"
                desc="We document, explain, and enable your teams so you fully own and evolve the platform long-term."
              />
            </div>
          </div>

          {/* RIGHT SIDE — PROOF PANEL 
             - Styled as a Glass Card
          */}
         <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md sticky top-32"
>
  <div className="flex flex-col items-center">
    <div className="text-xs tracking-[0.2em] uppercase text-white/40 mb-8 text-center">
      Proven in production
    </div>

    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8">
  <ProofLine right="Operational uptime with monitored deployments" />
  <ProofLine right="End-to-end delivery from apps to infrastructure" />
  <ProofLine right="No vendor lock-in, teams stay independent" />
</div>

    </div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function Capability({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-4">
      {/* ICON */}
      <div className="text-3xl text-sky-400">
        {icon}
      </div>
      
      {/* TEXT */}
      <div>
        <h4 className="text-xl font-medium text-white mb-3">
          {title}
        </h4>
        <p className="text-lg text-white/60 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ProofLine({ right }) {
  return (
    <div className="w-full text-center text-base lg:text-lg text-white/70 leading-snug">
      {right}
    </div>
  );
}

