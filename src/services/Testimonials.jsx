import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Our MERN-based platform launched on time with a clean, scalable architecture. The team helped us make the right technical decisions early.",
      author: "Product Founder",
      company: "SaaS Platform",
    },
    {
      text: "The React Native app feels polished and truly production-ready. Performance and reliability were clearly priorities.",
      author: "Head of Engineering",
      company: "Mobility Startup",
    },
    {
      text: "Our WordPress site, SEO, and campaigns now work together as one system. It finally feels like a real growth engine.",
      author: "Marketing Lead",
      company: "D2C Brand",
    },
  ];

  const cardGradient = "linear-gradient(180deg, rgba(45, 170, 208, 0.08), rgba(208, 189, 24, 0.03))";

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="layout-container">
        
        {/* HEADER */}
        {/* Changed max-w-3xl to max-w-full to allow the text to fit on one line */}
        <div className="text-center mb-16 max-w-full mx-auto">
          
          {/* LABEL: Made BOLDER, Brighter, and added more spacing (mb-6) */}
          <span className="text-sm  tracking-[0.15em] text-white/80 uppercase block mb-6">
            What clients say
          </span>

          {/* HEADLINE: Added lg:whitespace-nowrap to force ONE LINE on desktop */}
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight lg:whitespace-nowrap">
            Real feedback from shipped products
          </h2>
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
              className="relative p-8 pt-10 rounded-3xl border border-white/10 backdrop-blur-md"
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

              {/* TEXT */}
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* SIGNATURE */}
              <div className="text-base text-white/60">
                <strong className="text-white font-medium block mb-0.5">
                  {t.author}
                </strong>
                {t.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}