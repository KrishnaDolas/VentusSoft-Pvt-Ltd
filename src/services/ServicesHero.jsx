import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    // SECTION WRAPPER: Handles vertical spacing (Dynamic padding)
    <section className="pt-28 pb-0 lg:pt-32 lg:pb-0">
      
      {/* 1. THE SAFETY WRAPPER 
          This 'layout-container' class (from your index.css) prevents the 
          "70% zoom" issue by locking the max-width and centering the page. 
      */}
      <div className="layout-container">
        
        {/* CONTENT ALIGNMENT: Forces everything to the Left */}
        <div className="flex flex-col items-start text-left max-w-5xl">
          
         
          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // Dynamic Text: Large on Desktop (6xl), smaller on mobile (5xl)
            className="text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            Services for <span className="text-cyan-400">modern teams.</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-slate-400 text-lg lg:text-xl leading-relaxed max-w-3xl"
          >
            From DevOps to cloud infrastructure, web and mobile development, content and
            automation — Auribus Tech delivers modern solutions for fast-growing brands.
          </motion.p>

          {/* 2. DYNAMIC GRID SYSTEM 
             - Mobile: grid-cols-1 (1 card per row)
             - Tablet: sm:grid-cols-2 (2 cards per row)
             - Laptop: lg:grid-cols-4 (4 cards per row)
          */}
          {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <MetricCard label="Projects delivered" value="50+" />
            <MetricCard label="Years experience" value="5+" />
            <MetricCard label="Uptime guarantee" value="99.9%" />
            <MetricCard label="Core services" value="6" />
          </div> */}

        </div>
      </div>
    </section>
  );
}

// 3. REUSABLE CARD COMPONENT

function MetricCard({ label, value }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-2 hover:bg-white/[0.05] transition-colors duration-300">
      <div className="text-3xl font-semibold text-white tracking-tight">
        {value}
      </div>
      <div className="text-sm font-medium text-slate-400">
        {label}
      </div>
    </div>
  );
}