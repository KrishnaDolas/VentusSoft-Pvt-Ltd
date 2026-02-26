import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaChevronDown } from "react-icons/fa";

// Custom drop-shadow for the glow effect
const glowDropShadow = "drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]";

export default function ContactPage() {
  return (
    <section className="pt-32 pb-40 relative">
      <div className="layout-container">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight"
          >
            Let’s talk about your{" "}
            {/* GLOW ADDED HERE */}
            <span className={`text-sky-400 ${glowDropShadow}`}>
              roadmap.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            Contact Ventus Soft and share your details. We’ll get back to you within 1-2 business days to discuss how we can support your goals.
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-start">
          
          {/* LEFT — FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Full name" placeholder="Your name" />
              <Input label="Company" placeholder="Organization name" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Work email" placeholder="you@company.com" type="email" />
              <Input label="Phone (with country code)" placeholder="+91-XXXXXXXXXX" />
            </div>

            <Select
              label="What do you need help with?"
              options={[
                "Select a service",
                "DevOps & Cloud Infrastructure",
                "CI/CD & Release Automation",
                "Cloud Migration & Infrastructure as Code",
                "Kubernetes & Microservices",
                "Monitoring & Observability",
                "MERN Stack Web Applications",
                "Security & Compliance Automation",
                "React Native Mobile Apps",
                "REST APIs & Microservices Backend",
                "WordPress Websites & CMS",
                "SEO & Mobile First Web Design",
                "Digital Marketing & Growth",
                "Google Ads & Meta Ads",
                "Lead Generation & Funnels",
                "ERP & Business Automation",
                "Consultation / Not sure yet",
              ]}
            />

            <Textarea
              label="Briefly describe your current challenges"
              placeholder="Describe your needs..."
            />

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1.5 w-4 h-4 rounded border-white/20 bg-white/5 text-sky-500 focus:ring-sky-500/30" 
              />
              <span className="text-base text-white/60 group-hover:text-white/80 transition-colors leading-relaxed font-normal">
                I agree to be contacted by Auribus Tech. My details will be used only for this purpose.
              </span>
            </label>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-sky-500 text-white text-lg font-medium hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] active:scale-95"
              >
                Submit Request
              </button>
              <p className="mt-4 text-sm text-white/40 font-normal">
                Typical response time: 1–2 business days.
              </p>
            </div>
          </motion.form>

          {/* RIGHT — INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md sticky top-32"
          >
            <Block
              title="What to expect"
              items={[
                "A short intro call to understand your needs",
                "Discussion of goals and timeline",
                "Suggestions for the best starting point",
                "Optional next steps: PoC or project plan",
              ]}
            />

            <div className="h-px bg-white/10 my-8" />

            {/* Contact Links - PERFECTLY ALIGNED */}
            <div className="mb-8">
              <div className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
                Direct Contact
              </div>
              <div className="flex flex-col gap-5">
                <ContactLink 
                  href="mailto:support@ventussoft.com" 
                  icon={<FaEnvelope size={18} />} 
                  text="support@ventussoft.com" 
                />
                <ContactLink 
                  href="tel:+918149524655" 
                  icon={<FaPhoneAlt size={18} />} 
                  text="+91-8149524655" 
                />
                <ContactLink 
                  href="https://www.linkedin.com/in/auribus-tech-673657268/" 
                  icon={<FaLinkedin size={18} />} 
                  text="LinkedIn" 
                />
              </div>
            </div>

            <div className="h-px bg-white/10 my-8" />

            <Block
              title="Ideal for teams that are"
              items={[
                "Struggling with slow deployments",
                "Migrating to the cloud",
                "Scaling microservices",
                "Preparing for audits",
              ]}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-normal text-white/80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] transition-all font-normal"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-normal text-white/80">
        {label}
      </label>
      <div className="relative">
        <select className="w-full px-4 py-3.5 pr-10 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] appearance-none transition-all cursor-pointer font-normal">
          {options.map((o) => (
            <option key={o} value={o} className="bg-slate-900 text-white">
              {o}
            </option>
          ))}
        </select>
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
          <FaChevronDown size={12} />
        </div>
      </div>
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-normal text-white/80">
        {label}
      </label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] transition-all resize-y font-normal"
      />
    </div>
  );
}

function Block({ title, items }) {
  return (
    <div>
      <div className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
        {title}
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-white/70 font-normal leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLink({ href, icon, text }) {
  return (
    <a 
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 text-sky-400 hover:text-sky-300 transition-colors font-normal"
    >
      {/* Fixed-width container for perfect icon alignment */}
      <span className="w-6 flex justify-center opacity-80">{icon}</span>
      <span>{text}</span>
    </a>
  );
}