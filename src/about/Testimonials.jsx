import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Built a complete e-commerce platform with MERN. Fast delivery, great architecture.",
      author: "E-Commerce Founder",
      role: "SaaS Client"
    },
    {
      quote: "Our mobile app went live in weeks with React Native expertise.",
      author: "Mobile Startup CEO",
      role: "App Partner"
    },
    {
      quote: "DevOps transformation reduced deployment times by 75%.",
      author: "Enterprise CTO",
      role: "FinTech Corp"
    },
  ];

  const cardGradient = "linear-gradient(180deg, rgba(45, 170, 208, 0.08), rgba(208, 189, 24, 0.03))";

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="layout-container">
        
        {/* HEADER */}
        {/* CHANGED: max-w-5xl (wider) to fit text on one line */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // CHANGED: Added 'lg:whitespace-nowrap' to FORCE one line on desktop
            className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight lg:whitespace-nowrap"
          >
            Trusted by product teams & enterprises
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-white/65 leading-relaxed max-w-3xl mx-auto"
          >
            Teams partner with us for reliable delivery, clear communication,
            and production-ready engineering.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 pt-12 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col justify-between min-h-[240px]"
              style={{ background: cardGradient }}
            >
              {/* QUOTE ICON */}
              <div 
                className="absolute -top-5 left-8 w-10 h-10 rounded-full flex items-center justify-center text-white border border-white/25 shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, rgba(39, 83, 138, 0.9), rgba(188, 191, 34, 0.6))" 
                }}
              >
                <FaQuoteLeft size={14} />
              </div>

              {/* QUOTE TEXT */}
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                "{t.quote}"
              </p>

              {/* SIGNATURE */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="text-base text-white font-medium">
                  {t.author}
                </div>
                <div className="text-sm text-white/50 uppercase tracking-wider mt-1">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}