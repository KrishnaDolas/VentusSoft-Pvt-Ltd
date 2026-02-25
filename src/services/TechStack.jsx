import { motion } from "framer-motion";
// 1. STABLE IMPORTS (FontAwesome + VS Code + Simple Icons)
import { 
  FaNodeJs, FaPython, FaReact, FaAws, FaDocker, FaLinux, FaGithub 
} from "react-icons/fa";
import { 
  SiFastapi, SiNextdotjs, SiGo, SiKubernetes, SiTerraform,
  SiPostgresql, SiMongodb, SiRedis, SiSnowflake, SiElastic,
  SiGrafana, SiPrometheus, SiGithubactions
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc"; // <--- FIXED AZURE ICON

export default function TechStack() {
  const stacks = [
    {
      title: "Application",
      color: "#3b82f6", // Blue
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Go", icon: <SiGo /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      color: "#a855f7", // Purple
      items: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Azure", icon: <VscAzure /> }, // <--- FIXED
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
      ],
    },
    {
      title: "Data Layer",
      color: "#10b981", // Emerald
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Snowflake", icon: <SiSnowflake /> },
        { name: "Elastic", icon: <SiElastic /> },
      ],
    },
    {
      title: "Reliability",
      color: "#f59e0b", // Amber
      items: [
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "Prometheus", icon: <SiPrometheus /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Linux", icon: <FaLinux /> },
      ],
    },
  ];

  return (
    // THE GOLDEN RULE: py-16 (mobile) lg:py-16 (desktop)
    <section className="py-16 lg:py-16 relative overflow-hidden">
      
      <div className="layout-container">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight"
          >
            Our Technology Ecosystem.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-white/65 leading-relaxed"
          >
            We deploy battle-tested stacks tailored to your specific scale.
          </motion.p>
        </div>

        {/* STACK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stacks.map((group, i) => (
            <StackGroup key={i} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SUB-COMPONENTS ---------------- */

function StackGroup({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      {/* THE HALO GLOW */}
      <div
        className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-[0.03] blur-3xl -z-10"
        style={{ background: group.color }}
      />

      {/* TITLE WITH PULSING DOT */}
      <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
        <motion.span
          animate={{ boxShadow: [`0 0 0 0px ${group.color}40`, `0 0 0 6px ${group.color}00`] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: group.color }}
        />
        {group.title}
      </h3>

      {/* PILLS CONTAINER */}
      <div className="flex flex-wrap gap-3">
        {group.items.map((item, j) => (
          <TechPill key={j} item={item} color={group.color} delay={j} />
        ))}
      </div>
    </motion.div>
  );
}

function TechPill({ item, color, delay }) {
  return (
    <motion.div
      // THE ZERO GRAVITY FLOAT
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
      whileHover={{ 
        scale: 1.05, 
        borderColor: color, 
        backgroundColor: `rgba(255,255,255,0.08)`,
        y: 0 
      }}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm lg:text-base text-white/85 bg-white/[0.03] border border-white/[0.08] rounded-full cursor-default transition-colors duration-200"
    >
      {/* THE FIX: Added style={{ color: color }} 
         Now the icon will use the group's color (Blue, Purple, Emerald, etc.) 
      */}
      <span className="text-lg" style={{ color: color }}>
        {item.icon}
      </span>
      
      {item.name}
    </motion.div>
  );
}