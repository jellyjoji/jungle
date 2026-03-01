import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0d]/95 backdrop-blur-md border-b border-gradient-to-r from-emerald-500/20 via-orange-500/20 to-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Text */}
            <Link to="/" className="flex items-center group">
              <div>
                <span className="block text-base font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">
                  JUNGLE
                </span>
                <span className="block text-xs tracking-widest text-gray-400">
                  PRODUCTION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm transition-all ${
                    isActive(item.href)
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400 bg-gradient-to-br from-emerald-500/20 to-orange-500/20"
                      : "text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-emerald-400 hover:bg-emerald-500/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-emerald-500/20 bg-[#0a0f0d]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base transition-colors ${
                    isActive(item.href)
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative bg-[#050806] border-t border-gradient-to-r from-emerald-500/20 via-orange-500/20 to-yellow-500/20 overflow-hidden">
        {/* Tropical accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div>
                <span className="block text-xs tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400">
                  JUNGLE PRODUCTION
                </span>
                <span className="block text-xs text-gray-400 mt-0.5">
                  © 2026 AI-Powered Digital Studio
                </span>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">⚡</span> AI-Driven
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-400">🌿</span> Innovative
              </span>
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">🚀</span> Fast
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}