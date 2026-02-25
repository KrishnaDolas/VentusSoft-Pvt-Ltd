import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    // GOLDEN RULE: py-16 lg:py-16
    <section className="py-16 lg:py-16 text-center">
      <div className="layout-container">
        
        {/* CENTERED CONTENT WRAPPER */}
        <div className="max-w-4xl mx-auto">
          
          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight"
          >
            Let’s build your success story
          </motion.h2>

          {/* SUBTEXT */}
          <p className="text-xl lg:text-2xl text-white/65 leading-relaxed max-w-2xl mx-auto mb-12">
            Whether it’s Cloud, DevOps, MERN, React Native, or WordPress —
            we deliver systems teams can trust and scale.
          </p>

          {/* BUTTON */}
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
              Contact Us
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
      </div>
    </section>
  );
}