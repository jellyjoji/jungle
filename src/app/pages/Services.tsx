import { Globe, Smartphone, Video } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "AI-Powered Web Development",
      description: "Modern web solutions built with advanced AI workflows for optimal performance and scalability.",
      features: [
        "Corporate websites",
        "Landing pages",
        "E-commerce",
        "Performance optimization",
      ],
      gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      iconBg: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      emoji: "🌐",
    },
    {
      icon: Smartphone,
      title: "App UX/UI Design",
      description: "Beautiful, intuitive mobile experiences designed with user-centric AI-assisted methodologies.",
      features: [
        "Mobile app design",
        "Interactive prototypes",
        "Design systems",
        "AI-assisted UX optimization",
      ],
      gradient: "from-orange-500/15 via-yellow-500/10 to-transparent",
      iconBg: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-400",
      emoji: "📱",
    },
    {
      icon: Video,
      title: "Integrated Digital Marketing",
      description: "Data-driven digital marketing solutions combining high-quality video production, YouTube growth strategy, and social media management.",
      features: [
        "Video editing (Adobe Premiere Pro)",
        "YouTube content creation",
        "Social media marketing",
        "Content strategy",
      ],
      gradient: "from-yellow-500/15 via-emerald-500/10 to-transparent",
      iconBg: "from-yellow-500/20 to-emerald-500/20",
      iconColor: "text-yellow-400",
      emoji: "🎬",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Multi-color glows */}
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px]" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 text-5xl">🛠️</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">AI</span> to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-xl bg-gradient-to-br ${service.gradient} border-2 border-emerald-500/20 hover:border-orange-500/40 transition-all hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:-translate-y-2`}
              >
                {/* Emoji badge */}
                <div className="absolute -top-4 -right-4 text-3xl bg-[#0a0f0d] rounded-full p-2 border-2 border-emerald-500/30 group-hover:scale-110 transition-transform">
                  {service.emoji}
                </div>

                {/* Icon */}
                <div className={`mb-6 inline-flex p-4 rounded-lg bg-gradient-to-br ${service.iconBg} ${service.iconColor} group-hover:scale-110 transition-transform`}>
                  <service.icon size={40} />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mr-2">▸</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              Interested in working together? 🤝
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-emerald-500 hover:from-yellow-600 hover:via-orange-600 hover:to-emerald-600 text-gray-900 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] font-medium"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}