import React from 'react';
import { motion } from 'framer-motion';

// --- 1. DATA CONFIGURATION ---
const SERVICES = [
  {
    icon: "⚙️",
    title: "DevOps & Cloud Infrastructure",
    desc: "Automate deployments, scale with Kubernetes, secure your platforms.",
    list: ["CI/CD pipelines (Azure, GitHub, Jenkins)", "Kubernetes (AKS/EKS)", "Infrastructure as Code (Terraform)", "Security & Compliance"],
    outcome: "60–80% faster deployments"
  },
  {
    icon: "💻",
    title: "MERN Stack & React Native",
    desc: "Build modern web and mobile apps with JavaScript end-to-end.",
    list: ["Full-stack MERN apps", "REST APIs & Microservices", "iOS & Android Apps", "Real-time Dashboards"],
    outcome: "40+ web apps delivered"
  },
  {
    icon: "🌐",
    title: "WordPress & Static Sites",
    desc: "Fast, secure websites for corporate, marketing and e-commerce.",
    list: ["Custom Themes", "WooCommerce", "SEO & Performance", "Security Hardening"],
    outcome: "50+ Sites • Mobile Optimized"
  },
  {
    icon: "🎬",
    title: "AI Video & Content Creation",
    desc: "Generate studio-quality videos and marketing content with AI.",
    list: ["AI Video Gen (Runway/Veo)", "Brand Storytelling", "Social Shorts", "AI Voiceovers"],
    outcome: "50% faster production"
  },
  {
    icon: "📊",
    title: "Digital Marketing & Growth",
    desc: "Scale brands with paid ads, organic SEO and influencer marketing.",
    list: ["Google & Meta Ads", "SEO Strategy", "Influencer Partnerships", "Lead Gen Funnels"],
    outcome: "3–5x ROI on Ad Spend"
  },
  {
    icon: "📦",
    title: "ERP & Business Automation",
    desc: "Automate multi-department operations under one dashboard.",
    list: ["HRMS & Payroll", "CRM Systems", "Inventory Management", "Power BI Dashboards"],
    outcome: "100+ hours/month saved"
  }
];

const PROCESS = [
  { step: "01", title: "Discovery", icon: "🔍" },
  { step: "02", title: "Planning", icon: "📘" },
  { step: "03", title: "Development", icon: "⚙️" },
  { step: "04", title: "Deployment", icon: "🚀" }
];

const INDUSTRIES = [
  { icon: "🛒", title: "E-commerce", desc: "B2C stores & Marketplaces" },
  { icon: "🏥", title: "Healthcare", desc: "Patient apps & Internal tools" },
  { icon: "🏫", title: "EdTech", desc: "LMS & Assessment platforms" },
  { icon: "🏦", title: "FinTech", desc: "Dashboards & Secure flows" },
  { icon: "🏭", title: "Manufacturing", desc: "Tracking & IoT Dashboards" },
  { icon: "📣", title: "Agencies", desc: "High-performance marketing sites" }
];

const TECH_CATEGORIES = [
  { title: "Backend", stack: "Node.js, Python, Java, PHP" },
  { title: "Frontend", stack: "React, Next.js, React Native" },
  { title: "Cloud", stack: "AWS, Azure, GCP, Docker, K8s" },
  { title: "Data", stack: "MongoDB, PostgreSQL, Redis" }
];

const TESTIMONIALS = [
  { quote: "Our MERN-based platform was launched on time with a clean, scalable architecture.", author: "Product Founder · SaaS" },
  { quote: "The React Native app experience feels polished and truly production-ready.", author: "Head of Engineering · Mobility" },
  { quote: "Our WordPress site, SEO and campaigns now work together as a single growth engine.", author: "Marketing Lead · D2C Brand" }
];

// --- 2. COMPONENT ---
const ServicesSection = () => {

  // --- STYLES ---
  const styles = {
    page: {
      background: 'radial-gradient(circle at top center, #0f172a 0%, #000000 100%)',
      minHeight: '100vh',
      paddingTop: '120px',
      paddingBottom: '4rem',
      color: 'white',
      fontFamily: '"Inter", sans-serif',
      overflowX: 'hidden' // Prevent scroll on animation
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    section: { marginBottom: '8rem' },
    
    // TYPOGRAPHY
    heading: { fontFamily: '"Outfit", sans-serif', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.1' },
    subHeading: { fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#94a3b8', maxWidth: '700px', lineHeight: '1.6' },
    sectionTitle: { fontFamily: '"Outfit", sans-serif', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', borderLeft: '4px solid #4FA3FF', paddingLeft: '1rem' },

    // STATS
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      margin: '4rem 0',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '20px',
      padding: '2rem',
      border: '1px solid rgba(255,255,255,0.05)'
    },
    statNum: { fontSize: '2.5rem', fontWeight: '800', color: '#4FA3FF', fontFamily: '"Outfit", sans-serif' },
    statLabel: { color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' },

    // BENTO GRID (Services)
    bentoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    card: {
      background: 'rgba(15, 23, 42, 0.4)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '24px',
      padding: '2.5rem',
      transition: 'all 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      borderColor: 'rgba(79, 163, 255, 0.3)',
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
    },

    // PROCESS FLOW
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '2rem',
      textAlign: 'center'
    },
    processStep: {
      background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
      padding: '2rem',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.05)'
    },

    // TECH STACK
    techGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem'
    },
    techCard: {
      background: '#0a0f1c',
      padding: '1.5rem',
      borderRadius: '12px',
      borderTop: '2px solid #4FA3FF'
    },

    // INDUSTRIES
    indGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem'
    },
    indCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: 'rgba(255,255,255,0.02)',
      padding: '1.5rem',
      borderRadius: '12px'
    },

    // TESTIMONIALS
    testGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    testCard: {
      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(0,0,0,0))',
      padding: '2rem',
      borderRadius: '20px',
      border: '1px solid rgba(79, 163, 255, 0.1)'
    },

    // CTA
    ctaBox: {
      background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
      padding: '4rem 2rem',
      borderRadius: '24px',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden'
    },
    ctaButton: {
      display: 'inline-block',
      marginTop: '2rem',
      padding: '1rem 3rem',
      background: '#4FA3FF',
      color: '#fff',
      fontWeight: '700',
      borderRadius: '50px',
      textDecoration: 'none',
      boxShadow: '0 10px 30px rgba(79, 163, 255, 0.3)'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* 1. HERO HEADER */}
        <section style={styles.section}>
          <motion.h1 
            style={styles.heading}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            Services for <span style={{ color: '#4FA3FF' }}>Modern Teams.</span>
          </motion.h1>
          <motion.p style={styles.subHeading} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            From DevOps to cloud infrastructure, web/mobile development, content, and automation—Auribus Tech delivers modern solutions for fast-growing brands.
          </motion.p>
          
          {/* STATS STRIP */}
          <div style={styles.statsContainer}>
            <div>
              <div style={styles.statNum}>50+</div>
              <div style={styles.statLabel}>Projects Delivered</div>
            </div>
            <div>
              <div style={styles.statNum}>5+</div>
              <div style={styles.statLabel}>Years Experience</div>
            </div>
            <div>
              <div style={styles.statNum}>99.9%</div>
              <div style={styles.statLabel}>Uptime Guarantee</div>
            </div>
            <div>
              <div style={styles.statNum}>6</div>
              <div style={styles.statLabel}>Core Services</div>
            </div>
          </div>
        </section>

        {/* 2. CORE SERVICES (BENTO GRID) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Core Expertise</h2>
          <div style={styles.bentoGrid}>
            {SERVICES.map((s, i) => (
              <motion.div key={i} style={styles.card} whileHover={{ y: -5, borderColor: 'rgba(79, 163, 255, 0.5)' }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{s.icon}</div>
                <h3 style={{fontFamily:'"Outfit", sans-serif', fontSize:'1.5rem', fontWeight:'700', marginBottom:'0.5rem'}}>{s.title}</h3>
                <p style={{color:'#94a3b8', marginBottom:'1.5rem', lineHeight:'1.5'}}>{s.desc}</p>
                <ul style={{listStyle:'none', padding:0, color:'#cbd5e1', fontSize:'0.9rem', marginBottom:'1.5rem'}}>
                  {s.list.map((item, idx) => (
                    <li key={idx} style={{marginBottom:'6px', display:'flex', gap:'8px'}}>
                      <span style={{color:'#4FA3FF'}}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <div style={{paddingTop:'1rem', borderTop:'1px solid rgba(255,255,255,0.1)', color:'#4FA3FF', fontSize:'0.9rem', fontWeight:'600'}}>
                  Outcome: {s.outcome}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. TECH STACK (Categorized) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tech Stack & Tools</h2>
          <div style={styles.techGrid}>
            {TECH_CATEGORIES.map((cat, i) => (
              <div key={i} style={styles.techCard}>
                <h4 style={{color:'#4FA3FF', fontSize:'1.1rem', fontWeight:'700', marginBottom:'0.5rem'}}>{cat.title}</h4>
                <p style={{color:'#cbd5e1', lineHeight:'1.5'}}>{cat.stack}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'2rem', padding:'1rem', background:'rgba(255,255,255,0.02)', borderRadius:'8px', textAlign:'center', color:'#64748b', fontSize:'0.9rem'}}>
            Also expert in: Jenkins, Docker, Terraform, Prometheus, Grafana, WordPress, WooCommerce
          </div>
        </section>

        {/* 4. PROCESS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Process</h2>
          <div style={styles.processGrid}>
            {PROCESS.map((p, i) => (
              <div key={i} style={styles.processStep}>
                <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>{p.icon}</div>
                <div style={{color:'#4FA3FF', fontWeight:'700', fontSize:'0.9rem', marginBottom:'0.5rem'}}>STEP {p.step}</div>
                <h3 style={{fontSize:'1.2rem', fontWeight:'600'}}>{p.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 5. INDUSTRIES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Industries We Serve</h2>
          <div style={styles.indGrid}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} style={styles.indCard}>
                <span style={{fontSize:'2rem'}}>{ind.icon}</span>
                <div>
                  <h4 style={{fontWeight:'700', fontSize:'1.1rem'}}>{ind.title}</h4>
                  <p style={{color:'#94a3b8', fontSize:'0.9rem'}}>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What Clients Say</h2>
          <div style={styles.testGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={styles.testCard}>
                <div style={{fontSize:'2rem', color:'#4FA3FF', marginBottom:'1rem'}}>“</div>
                <p style={{fontSize:'1.1rem', lineHeight:'1.6', marginBottom:'1.5rem', fontStyle:'italic'}}>
                  {t.quote}
                </p>
                <div style={{fontSize:'0.9rem', color:'#94a3b8', fontWeight:'600'}}>— {t.author}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section style={styles.ctaBox}>
          <div style={{position:'absolute', top:'-50%', left:'-20%', width:'500px', height:'500px', background:'#4FA3FF', filter:'blur(200px)', opacity:0.1, pointerEvents:'none'}}></div>
          <h2 style={{fontFamily:'"Outfit", sans-serif', fontSize:'2.5rem', fontWeight:'700', marginBottom:'1rem'}}>Let’s Build Your Success Story 🚀</h2>
          <p style={{color:'#cbd5e1', fontSize:'1.1rem', maxWidth:'600px', margin:'0 auto'}}>
            Whether it's Cloud, DevOps, MERN, or WordPress — we deliver results.
          </p>
          <a href="/contact" style={styles.ctaButton}>Contact Us Today</a>
        </section>

      </div>
    </div>
  );
};

export default ServicesSection;