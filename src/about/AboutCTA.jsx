import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function AboutCTA() {
  return (
    // GOLDEN RULE PADDING: py-16 lg:py-24
    <section className="py-16 lg:py-24 relative">
      <div className="layout-container">
        
        {/* MAIN GLASS CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 lg:p-16 rounded-3xl border border-white/10 text-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(56,189,248,0.08), rgba(255,255,255,0.02))",
            backdropFilter: "blur(10px)"
          }}
        >
          {/* Background Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-sky-500/10 blur-[80px] rounded-full -z-10" />

          {/* HEADING */}
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            Let’s build or transform your platform
          </h2>

          {/* SUBTEXT */}
          <p className="text-xl lg:text-2xl text-white/65 leading-relaxed max-w-3xl mx-auto mb-12">
            Whether you need a web app, mobile solution, WordPress site, or
            complete cloud infrastructure — let’s talk about your vision.
          </p>

          {/* ACTIONS (Flex on desktop, Stack on mobile) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            
            {/* EMAIL LINK */}
            <motion.a
              href="mailto:support@auribustech.com"
              whileHover={{ scale: 1.05, color: "#38bdf8" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-xl text-white/80 hover:text-sky-400 transition-colors"
            >
              <FaEnvelope />
              support@ventussoft.com
            </motion.a>

            {/* DIVIDER DOT (Hidden on mobile) */}
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />

            <Link
              to="/contact"
              className="
              group relative inline-flex items-center gap-3
              px-10 py-5
              rounded-xl
              text-lg font-semibold
              text-white
              transition-all duration-500
            
              bg-gradient-to-r
              from-[#E6C98A]
              via-[#00C6FF]
              to-[#0072FF]
            
              hover:scale-[1.04]
              active:scale-[0.98]
              "
              style={{
                boxShadow: "0 10px 40px rgba(0,198,255,0.25)"
              }}
            >
            
              {/* inner dark surface */}
              <span className="absolute inset-[1px] rounded-xl bg-[#050a14] z-0" />
            
              {/* text */}
              <span className="relative z-10">
                Schedule a call
              </span>
            
              {/* premium animated arrow */}
              <svg
                className="
                relative z-10
                w-5 h-5
                transition-transform duration-500
                group-hover:translate-x-1
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            
            </Link>
            

          </div>
        </motion.div>

      </div>
    </section>
  );
}