import { Search, Sparkles, Code2, Rocket, TrendingUp } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      subtitle: "비즈니스 및 사용자 분석",
      description: "We dive deep into your business goals, target audience, and market landscape to create a solid foundation for success.",
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "border-emerald-500/30",
      emoji: "🔍",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "AI-Assisted Design",
      subtitle: "AI 기반 UX/UI 설계",
      description: "Leveraging AI tools and design expertise, we craft intuitive interfaces that delight users and drive conversions.",
      color: "from-yellow-500/20 to-orange-500/5",
      borderColor: "border-yellow-500/30",
      emoji: "✨",
    },
    {
      number: "03",
      icon: Code2,
      title: "Intelligent Development",
      subtitle: "최적화된 웹/앱 구현",
      description: "Our AI-enhanced development workflow ensures clean, scalable code with optimal performance and maintainability.",
      color: "from-orange-500/20 to-pink-500/5",
      borderColor: "border-orange-500/30",
      emoji: "⚡",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Optimize",
      subtitle: "배포 및 지속 개선",
      description: "We deploy your product with continuous monitoring and AI-driven optimization for sustained growth.",
      color: "from-emerald-500/20 to-cyan-500/5",
      borderColor: "border-cyan-500/30",
      emoji: "🚀",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Integrated Marketing",
      subtitle: "데이터 기반 마케팅 실행",
      description: "We amplify your product through strategic digital marketing, including YouTube content production, professional video editing, and social media management to drive sustained growth and engagement.",
      color: "from-yellow-500/20 to-emerald-500/5",
      borderColor: "border-yellow-500/30",
      emoji: "📈",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Multi-color tropical glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-yellow-500/10 rounded-full blur-[100px]" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 text-5xl">🌿</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">Process</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">AI-powered workflow</span> designed for efficiency and excellence
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`p-8 rounded-xl bg-gradient-to-br ${step.color} border-2 ${step.borderColor} hover:border-orange-500/50 transition-all hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:-translate-y-1`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Number, Icon & Emoji */}
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 flex-shrink-0">
                      <div className="text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-400 tracking-tighter">
                        {step.number}
                      </div>
                      <div className="flex gap-3 items-center md:flex-col md:items-start">
                        <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-500/20 to-orange-500/20 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400 group-hover:scale-110 transition-transform">
                          <step.icon size={32} />
                        </div>
                        <div className="text-3xl">{step.emoji}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-400 mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[76px] top-full h-8 w-0.5 bg-gradient-to-b from-orange-500/40 via-yellow-500/30 to-emerald-500/40" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              Ready to start your AI-powered project? 🌴
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-emerald-500 hover:from-yellow-600 hover:via-orange-600 hover:to-emerald-600 text-gray-900 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] font-medium"
            >
              Let's Begin 🚀
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}