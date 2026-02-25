import { motion } from "framer-motion";
import { FaLayerGroup, FaHandshake, FaRocket, FaChalkboardTeacher, FaCogs } from "react-icons/fa";

export default function WhyAuribus() {
  const points = [
    {
      icon: <FaCogs />,
      lead: "End-to-end ownership",
      rest: "From DevOps and cloud infrastructure to applications and automation.",
    },
    {
      icon: <FaLayerGroup />,
      lead: "Modern, production-ready stack",
      rest: "Kubernetes, MERN, AI-enabled workflows, and cloud-native systems.",
    },
    {
      icon: <FaChalkboardTeacher />,
      lead: "Knowledge transfer",
      rest: "We enable internal teams instead of creating vendor dependency.",
    },
    {
      icon: <FaHandshake />,
      lead: "Flexible engagement",
      rest: "From consulting to fully managed services.",
    },
  ];

  return (
    // GOLDEN RULE: py-16 lg:py-16
    <section className="py-16 lg:py-16">
      <div className="layout-container">
        
        {/* RESPONSIVE LAYOUT: Stack on mobile, Split on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start lg:items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
              Why Ventus Soft?
            </h2>

            <p className="text-xl lg:text-2xl text-white/65 mb-12 leading-relaxed max-w-xl">
              Teams choose us for clarity, reliability, and long-term technical ownership.
            </p>

            {/* POINTS GRID (Now with Icons!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {points.map((p, i) => (
                <div key={i} className="flex flex-col gap-3 items-start">
                  
                  {/* ICON: Adds the visual punch you wanted */}
                  <div className="text-3xl text-sky-400 opacity-90">
                    {p.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <div className="text-xl font-medium text-white mb-1">
                      {p.lead}
                    </div>
                    <div className="text-base lg:text-lg text-white/60 leading-relaxed">
                      {p.rest}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CTA CARD (Restored exactly as requested) */}
          <div className="rounded-3xl p-8 lg:p-10 border border-sky-500/25 bg-sky-500/[0.04] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="text-sm font-bold tracking-[0.15em] text-sky-400 uppercase mb-6 opacity-80">
              Ready to get started?
            </div>

            <p className="text-xl text-white mb-8 leading-relaxed">
              Share your requirements — we’ll design the right solution for your scale.
            </p>

            <div className="flex flex-col gap-4 text-lg text-white/90">
              {/* CLICKABLE LINKS */}
              <a 
                href="mailto:support@auribustech.com" 
                className="flex items-center gap-3 hover:text-sky-300 transition-colors"
              >
                <span className="text-2xl">📧</span> 
                support@ventussoft.com
              </a>
              
              <a 
                href="tel:+918149524655" 
                className="flex items-center gap-3 hover:text-sky-300 transition-colors"
              >
                <span className="text-2xl">📱</span> 
                +91-8149524655
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}