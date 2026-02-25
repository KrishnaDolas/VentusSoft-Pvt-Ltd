import { motion } from "framer-motion";
// Importing real professional icons to replace emojis
import { FaGem, FaHandshake, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function Values() {
  const values = [
    {
      icon: <FaGem />,
      title: "Excellence",
      desc: "High-quality, reliable solutions built for production.",
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      desc: "Long-term, transparent relationships with our clients.",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      desc: "Modern engineering, DevOps, and scalable architectures.",
    },
    {
      icon: <FaShieldAlt />, // Better than a checkmark for "Integrity"
      title: "Integrity",
      desc: "Honest communication and accountable execution.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth",
      desc: "Continuous learning and capability building.",
    },
  ];

  return (
    // GOLDEN RULE PADDING: py-16 lg:py-24
    <section className="py-16 lg:py-24 relative">
      <div className="layout-container">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight"
          >
            Our core values
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-white/65 leading-relaxed"
          >
            The principles that guide how we build, communicate, and deliver.
          </motion.p>
        </div>

        {/* VALUES GRID 
           - Auto-fit grid handles the 5 items perfectly on all screens
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(99,102,241,0.4)" }}
              className="p-8 rounded-3xl border border-white/10 transition-all duration-300 group"
              style={{
                background: "linear-gradient(180deg, rgba(84, 205, 241, 0.05), rgba(250, 200, 73, 0.02))",
                backdropFilter: "blur(10px)"
              }}
            >
              {/* ICON WRAPPER */}
              <div className="text-3xl text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-medium text-white mb-3">
                {v.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-lg text-white/60 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}