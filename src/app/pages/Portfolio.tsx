import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "Modern Corporate Website",
      category: "Web Development",
      description: "AI-powered corporate platform with advanced analytics and CMS integration",
      image: "https://images.unsplash.com/photo-1764601842171-3d6fba7c3830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMjA5Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "AI Integration", "CMS"],
      gradient: "from-emerald-500/20 to-teal-500/10",
    },
    {
      title: "Mobile Banking App",
      category: "App Design",
      description: "Intuitive mobile banking experience with AI-driven personalization",
      image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyMjEyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "UX Design", "Fintech"],
      gradient: "from-orange-500/20 to-yellow-500/10",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Smart shopping experience with AI recommendations and seamless checkout",
      image: "https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9kZXJufGVufDF8fHx8MTc3MjE4NDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["E-commerce", "AI", "Optimization"],
      gradient: "from-yellow-500/20 to-emerald-500/10",
    },
    {
      title: "Analytics Dashboard",
      category: "Digital Solution",
      description: "Real-time data visualization with AI-powered insights and predictions",
      image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjE4NTUxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Dashboard", "Analytics", "Real-time"],
      gradient: "from-emerald-500/20 to-cyan-500/10",
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description: "Minimalist portfolio showcasing creative work with smooth animations",
      image: "https://images.unsplash.com/photo-1729575846609-da7ba4369bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzIyNDYyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Design", "Portfolio", "Animation"],
      gradient: "from-orange-500/20 to-pink-500/10",
    },
    {
      title: "Tech Startup Landing",
      category: "Web Development",
      description: "High-conversion landing page with AI-optimized user flow",
      image: "https://images.unsplash.com/photo-1648134859175-78b41b4db186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGxhbmRpbmclMjBwYWdlfGVufDF8fHx8MTc3MjI0Njc0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Landing Page", "Conversion", "SaaS"],
      gradient: "from-yellow-500/20 to-orange-500/10",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Tropical glows */}
      <div className="absolute top-40 right-1/4 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-40 left-1/3 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px]" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 text-5xl">🎨</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">AI-powered</span> digital creations and innovative solutions 🌿
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} border-2 border-emerald-500/20 hover:border-orange-500/40 transition-all hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:-translate-y-2`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">{project.category}</span>
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-emerald-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-emerald-500/10 to-orange-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <button className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 transition-all text-sm">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}