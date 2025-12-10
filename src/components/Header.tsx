import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "About", id: "about", number: "01" },
    { name: "Experience", id: "experience", number: "02" },
    { name: "Work", id: "projects", number: "03" },
    { name: "Contact", id: "contact", number: "04" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-emerald-400/10"
            : "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div
            className={`text-2xl font-mono font-bold transition-colors duration-300 ${
              isDark ? "text-emerald-400" : "text-slate-800"
            }`}
          >
            shub95-arch
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-sm group transition-colors duration-200 ${
                  isDark
                    ? "text-slate-300 hover:text-emerald-400"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span
                  className={`mr-1 ${
                    isDark ? "text-emerald-400" : "text-slate-800"
                  }`}
                >
                  {item.number}.
                </span>
                <span className="group-hover:underline">{item.name}</span>
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1H3UX31Itj1juNkkRrtUtQPWJDO8O_BRv/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 px-4 py-2 border rounded font-mono text-sm transition-all duration-200 ${
                isDark
                  ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
                  : "border-slate-600 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-200 ${
              isDark
                ? "text-emerald-400 hover:text-emerald-300"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden backdrop-blur-md rounded-lg mt-2 p-6 ${
              isDark ? "bg-slate-900/95" : "bg-white/95"
            }`}
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-sm text-left transition-colors duration-200 ${
                    isDark
                      ? "text-slate-300 hover:text-emerald-400"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`mr-2 ${
                      isDark ? "text-emerald-400" : "text-slate-800"
                    }`}
                  >
                    {item.number}.
                  </span>
                  {item.name}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1H3UX31Itj1juNkkRrtUtQPWJDO8O_BRv/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 border rounded font-mono text-sm text-center transition-all duration-200 ${
                  isDark
                    ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
                    : "border-slate-600 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
