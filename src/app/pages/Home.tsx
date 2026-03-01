import { Link } from "react-router";
import { Sparkles, Code, Zap } from "lucide-react";
import logoImage from "../../assets/logo.png";

export function Home() {
  const values = [
    {
      icon: Sparkles,
      title: "AI-Driven Process",
      description: "최신 AI 워크플로우 기반 제작",
      gradient: "from-yellow-500/20 to-orange-500/5",
      iconColor: "text-yellow-400",
    },
    {
      icon: Code,
      title: "Design + Development",
      description: "전략부터 구현까지 통합",
      gradient: "from-emerald-500/20 to-teal-500/5",
      iconColor: "text-emerald-400",
    },
    {
      icon: Zap,
      title: "Built for Speed & Scale",
      description: "빠르고 확장 가능한 구조",
      gradient: "from-orange-500/20 to-yellow-500/5",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Multi-color glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] bg-yellow-500/15 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="mb-8 inline-block">
            <img
              src={logoImage}
              alt="Jungle Production"
              className="h-32 w-32 sm:h-40 sm:w-40 rounded-full animate-pulse shadow-[0_0_60px_rgba(251,146,60,0.4)]"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">
              Digital Jungle
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              AI-Powered Web & App Studio
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We design and develop intelligent digital products using advanced AI
            workflows.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Tropical creativity meets cutting-edge technology.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-emerald-500 hover:from-yellow-600 hover:via-orange-600 hover:to-emerald-600 text-gray-900 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] relative overflow-hidden"
            >
              <span className="relative z-10 font-medium">View Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border-2 border-transparent bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-emerald-500/20 hover:from-yellow-500/30 hover:via-orange-500/30 hover:to-emerald-500/30 text-gray-100 rounded-lg transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">Start a Project 🌿</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-xl bg-gradient-to-br ${value.gradient} border border-emerald-500/20 hover:border-orange-500/40 transition-all hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:-translate-y-2`}
              >
                <div
                  className={`mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-emerald-500/20 to-orange-500/20 ${value.iconColor} group-hover:scale-110 transition-transform`}
                >
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-orange-500/10 to-yellow-500/20 border-2 border-transparent bg-clip-padding relative overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/40 via-orange-500/40 to-emerald-500/40 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl mb-6">
                Ready to Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">
                  Amazing?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's create a digital experience that stands out in the jungle.
                🌴
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-emerald-500 hover:from-yellow-600 hover:via-orange-600 hover:to-emerald-600 text-gray-900 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] font-medium"
              >
                Get Started 🚀
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
