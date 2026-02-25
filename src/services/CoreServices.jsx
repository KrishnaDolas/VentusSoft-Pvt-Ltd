import { useState } from "react";

export default function CoreServices() {
  const services = [
    {
      title: "DevOps & Cloud Infrastructure",
      summary: "Automate deployments, scale with Kubernetes, and secure your platforms.",
      points: [
        "CI/CD pipelines & release automation",
        "Kubernetes & container orchestration",
        "Infrastructure as Code (Terraform)",
        "Monitoring, security & compliance",
      ],
      outcome: "",
      icon: "⚙️",
    },
    {
      title: "MERN Stack & React Native",
      summary: "Build high-performance web and mobile applications end-to-end.",
      points: [
        "Full-stack MERN applications",
        "REST APIs & microservices",
        "React Native apps (iOS & Android)",
        "Scalable SaaS dashboards",
      ],
      outcome: "",
      icon: "💻",
    },
    {
      title: "WordPress & Static Sites",
      summary: "Fast, secure, and SEO-ready websites for marketing and commerce.",
      points: [
        "Custom WordPress themes",
        "WooCommerce integrations",
        "Performance optimization & CDN",
        "SEO & mobile-first design",
      ],
      outcome: "",
      icon: "🌐",
    },
    {
      title: "AI Video & Content Creation",
      summary: "Generate studio-quality videos and marketing content with AI.",
      points: [
        "AI video & explainer generation",
        "Brand storytelling & ads",
        "Short-form social content",
        "Voiceovers & avatars",
      ],
      outcome: "50% faster content • 70% lower costs",
      icon: "🎬",
    },
    {
      title: "Digital Marketing & Growth",
      summary: "Scale brands with paid ads, SEO, and influencer marketing.",
      points: [
        "Google & Meta Ads campaigns",
        "SEO & content marketing",
        "Influencer partnerships",
        "Lead generation funnels",
      ],
      outcome: "3–5× ROI • 40% lower lead cost",
      icon: "📊",
    },
    {
      title: "ERP & Business Automation",
      summary: "Automate multi-department operations under one dashboard.",
      points: [
        "HRMS & payroll systems",
        "CRM & sales automation",
        "Inventory & finance workflows",
        "Real-time dashboards & reports",
      ],
      outcome: "100+ hours saved/month",
      icon: "📦",
    },
  ];

  return (
    // THE GOLDEN RULE: py-16 (mobile) lg:py-16 (desktop)
    // This matches HowWeWork.js exactly now.
    <section className="py-16 lg:py-16">
      
      <div className="layout-container">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Core Services
          </h2>
          <p className="text-xl text-white/65 leading-relaxed">
            Designed to scale with your team and infrastructure.
          </p>
        </div>

        {/* 3-COLUMN GRID (As requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Copy these gradients to the top of your component or inside the function
const cardGradient = "linear-gradient(180deg, rgba(49, 180, 174, 0.08), rgba(167, 132, 27, 0.03))";

function ServiceCard({ service }) {
  return (
    <div 
      className="group relative p-6 rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-sky-300/30 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.25),0_10px_30px_rgba(0,0,0,0.4)]"
      // HERE IS THE CHANGE: Applying the Gold/Blue gradient
      style={{ background: cardGradient }}
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
        <span className="text-2xl">{service.icon}</span>
        {service.title}
      </h3>

      {/* Summary */}
      <p className="text-base text-white/60 leading-relaxed mb-6">
        {service.summary}
      </p>

      {/* Points */}
      <ul className="space-y-2 mb-8 pl-4 list-disc text-white/75 text-sm">
        {service.points.map((p, i) => (
          <li key={i} className="pl-1 marker:text-white/30">{p}</li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="text-sm font-medium text-sky-300">
        {service.outcome}
      </div>
    </div>
  );
}