import { Mail, Send } from "lucide-react";

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:joji.the.jungle@gmail.com?subject=Project Inquiry";
  };

  return (
    <div className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Multi-color Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-yellow-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">AI-Powered</span> Project
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Let's create something extraordinary together. 🌴 Reach out and let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-orange-500/10 to-yellow-500/20 border-2 border-transparent relative overflow-hidden">
            {/* Animated glow border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-emerald-500/30 blur-xl opacity-50" />
            
            <div className="relative space-y-8">
              {/* Email Section */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-orange-500/20 text-transparent mb-6">
                  <Mail size={40} className="text-emerald-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">Get In Touch</h2>
                <a
                  href="mailto:joji.the.jungle@gmail.com"
                  className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-yellow-400 hover:to-orange-400 transition-all inline-block mb-2"
                >
                  joji.the.jungle@gmail.com
                </a>
                <p className="text-gray-400 mb-8">
                  We typically respond within 24 hours ⚡
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={handleEmailClick}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-emerald-500 hover:from-yellow-600 hover:via-orange-600 hover:to-emerald-600 text-gray-900 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] font-medium"
                >
                  <Send size={20} />
                  <span className="text-lg">Send Project Inquiry</span>
                </button>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gradient-to-r from-emerald-500/20 via-orange-500/20 to-yellow-500/20">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-sm text-gray-300">Fast Response</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="text-sm text-gray-300">Free Consultation</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="text-sm text-gray-300">Custom Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all">
              <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400 mb-3">What to Include 📝</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mr-2">▸</span>
                  <span>Project goals and requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mr-2">▸</span>
                  <span>Timeline and budget estimates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mr-2">▸</span>
                  <span>Any reference materials or inspiration</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border-2 border-orange-500/20 hover:border-orange-500/40 transition-all">
              <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-3">Next Steps 🚀</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400 mr-2">▸</span>
                  <span>Initial consultation call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400 mr-2">▸</span>
                  <span>Detailed proposal and timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400 mr-2">▸</span>
                  <span>Project kickoff and discovery phase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}