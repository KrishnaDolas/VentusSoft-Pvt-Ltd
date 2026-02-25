import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="layout-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            
            

            {/* HEADLINE - MATCHING PREVIOUS PAGES (Medium weight, not Bold) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // CHANGED: text-5xl (was 6xl), font-medium (was bold)
              className="text-4xl lg:text-5xl font-medium text-white leading-[1.15] mb-8 tracking-tight"
            >
               Building modern web, mobile apps &{" "}
              {/* GRADIENT TEXT */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                delivering high-quality software solutions.
              </span>
            </motion.h1>

            {/* CHECKMARK LIST - Consistent Font Size */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-5"
            >
              <ListItem text="MERN, React Native & WordPress expertise" />
              {/* <ListItem text="50+ full-stack projects delivered" /> */}
              <ListItem text="End-to-end from design to DevOps & deployment" />
            </motion.ul>

          </div>

          {/* RIGHT IMAGE - SOFT GLOW + ALIVE HOVER */}
          <div className="relative h-[350px] lg:h-[450px] w-full group">
            
            {/* 1. THE ALIVE GLOW (Soft Spread, Expands on Hover) */}
            <div 
              className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-emerald-500 rounded-[24px] blur-2xl opacity-40 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105 group-hover:blur-3xl"
            />
            
            {/* 2. IMAGE CONTAINER (Floating) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              // Gentle floating animation
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: { duration: 6, ease: "easeInOut", repeat: Infinity },
              }}
              className="relative h-full w-full rounded-2xl overflow-hidden bg-[#0b0d12] z-10 border border-white/10"
            >
              <img
                src="../../public/abouthero.jpg"
                alt="Auribus Tech team"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Inner Gloss */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* 3. PILL INSIDE IMAGE */}
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-3 z-20 transition-transform duration-500 group-hover:translate-y-[-5px]">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                 <span className="text-xs font-bold text-white tracking-wide uppercase">
                   Ventus Soft • In action
                 </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for list items (Normal font weight)
function ListItem({ text }) {
  return (
    <li className="flex items-start gap-4 text-lg lg:text-xl text-white/75 leading-relaxed font-normal">
      {/* Icon Wrapper */}
      <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20 mt-1">
        <FaCheck />
      </span>
      {text}
    </li>
  );
}