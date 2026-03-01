export function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Tropical glow */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-1/4 w-[350px] h-[350px] bg-yellow-500/15 rounded-full blur-[100px]" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center sm:text-left">
            <span className="text-6xl sm:text-7xl inline-block mb-6">🌴</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">Jungle Production</span>
            </h1>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 via-orange-500/5 to-transparent border-2 border-emerald-500/20 hover:border-orange-500/30 transition-all hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Jungle Production is an <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">AI-powered digital studio</span> specializing in modern web and app experiences.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-500/10 via-emerald-500/5 to-transparent border-2 border-yellow-500/20 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                By combining UX strategy, branding, development, and advanced AI tools, we create products that are <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">fast, scalable, and visually compelling</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="mb-3 text-2xl">🎯</div>
                <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400 mb-3">Our Approach</h3>
                <p className="text-gray-300">
                  We leverage cutting-edge AI technology to streamline workflows and deliver exceptional results faster than traditional methods.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/40 transition-all group">
                <div className="mb-3 text-2xl">🚀</div>
                <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with intelligent digital solutions that drive growth and create memorable user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}