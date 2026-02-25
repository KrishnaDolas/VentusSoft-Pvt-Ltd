export default function Industries() {
  const industries = [
    {
      icon: "🛒",
      title: "E-commerce",
      desc: "B2C stores, multi-vendor marketplaces, and subscription platforms.",
      points: "Payments · Catalog · Inventory",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Patient-facing apps, portals, and secure internal tooling.",
      points: "Appointments · Reports · HIPAA",
    },
    {
      icon: "🏫",
      title: "EdTech",
      desc: "Learning platforms and mobile-first education tools.",
      points: "Courses · Live Classes · LTI",
    },
    {
      icon: "🏦",
      title: "FinTech",
      desc: "Subscription products and workflow-heavy dashboards.",
      points: "Billing · Reporting · RBAC",
    },
    {
      icon: "🏭",
      title: "Logistics",
      desc: "Operational dashboards and fleet tracking systems.",
      points: "Automation · Inventory · IoT",
    },
    {
      icon: "📣",
      title: "Creators",
      desc: "Marketing sites and high-performance campaign platforms.",
      points: "SEO · Analytics · CMS",
    },
  ];

  // ONLY the Card Gradient remains.
  const cardGradient = "linear-gradient(180deg, rgba(49, 180, 174, 0.08), rgba(167, 132, 27, 0.03))";

  return (
    <section className="py-16 lg:py-16">
      <div className="layout-container">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-xl lg:text-2xl text-white/65 leading-relaxed">
            We partner with digital-first startups and growing enterprises to
            build reliable, scalable products.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col p-8 rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-sky-300/30 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.25),0_10px_30px_rgba(0,0,0,0.4)]"
              // Keep the Gold/Blue gradient on the CARD only
              style={{ background: cardGradient }}
            >
              {/* ICON FIX: Removed the background, width, and height. 
                 Now it is just a large text emoji floating freely. 
              */}
              <div className="text-3xl mb-6 transition-transform group-hover:scale-110 duration-300">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-medium text-white mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-base text-white/60 leading-relaxed mb-8 flex-1">
                {item.desc}
              </p>

              {/* POINTS */}
              <div className="pt-5 mt-auto border-t border-white/[0.08] text-sm font-mono text-white/40 tracking-wide uppercase">
                {item.points}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}