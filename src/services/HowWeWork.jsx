import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ... (Keep your STEPS array exactly as it is) ...
const STEPS = [
  {
    title: "Discovery & Strategy",
    short: "Understanding goals, users, and constraints.",
    details: [
      "Business goals, timelines, and success criteria",
      "User flows, existing systems, and technical constraints",
      "Risk assessment and feasibility validation",
      "Clear definition of scope and next steps",
    ],
  },
  {
    title: "Planning & Architecture",
    short: "Defining stack, roadmap, and system design.",
    details: [
      "Technology selection based on scale and cost",
      "High-level system architecture & data flows",
      "Milestone-driven delivery roadmap",
      "Cloud-native and production-ready decisions",
    ],
  },
  {
    title: "Build & Launch",
    short: "Development, testing, and deployment.",
    details: [
      "Iterative development with regular checkpoints",
      "Testing, performance, and security validation",
      "CI/CD pipelines and production deployment",
      "Monitoring setup from day one",
    ],
  },
  {
    title: "Optimize & Support",
    short: "Monitoring, improvements, and ownership.",
    details: [
      "Performance tuning and reliability improvements",
      "Ongoing support or managed services",
      "Documentation and knowledge transfer",
      "Long-term partnership beyond launch",
    ],
  },
];

export default function HowWeWork() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    // FIX 1: Removed 'border-t' (The line is gone)
    // FIX 2: Applied consistent padding (py-16 for mobile, py-16 for desktop)
    <section className="py-16 lg:py-16">
      <div className="layout-container">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            Our Delivery Roadmap
          </h2>
          <p className="text-xl lg:text-2xl text-white/65 leading-relaxed">
            We partner with teams from strategy to scale — combining deep
            technical execution with long-term ownership.
          </p>
        </div>

        {/* STEPS LIST */}
        <div className="flex flex-col gap-8">
          {STEPS.map((step, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="pb-8 border-b border-white/10 last:border-0"
              >
                {/* CLICKABLE HEADER */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full text-left cursor-pointer grid grid-cols-[32px_1fr_auto] lg:grid-cols-[48px_1fr_auto] gap-4 lg:gap-8 items-start lg:items-center group"
                >
                  {/* STEP NUMBER */}
                  <div className="text-lg lg:text-2xl font-medium text-sky-300 pt-1 lg:pt-0">
                    0{index + 1}
                  </div>

                  {/* TITLE & SHORT DESC */}
                  <div>
                    <div className="text-xl lg:text-2xl font-medium text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {step.title}
                    </div>
                    <div className="text-base lg:text-lg text-white/60 leading-relaxed">
                      {step.short}
                    </div>
                  </div>

                  {/* TOGGLE ICON */}
                  <div className={`text-2xl lg:text-3xl transition-colors duration-200 ${isOpen ? "text-sky-300" : "text-white/40"}`}>
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 pl-0 lg:pl-20 space-y-3 list-disc list-inside text-base lg:text-lg text-white/75 leading-relaxed">
                        {step.details.map((point, i) => (
                          <li key={i} className="marker:text-sky-300/50">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}