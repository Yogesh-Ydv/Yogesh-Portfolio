import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full px-6 py-4 fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse z-[-1]" />
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 z-[-1]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(6,182,212,0.1)_25px,rgba(6,182,212,0.1)_26px,transparent_27px,transparent_49px,rgba(6,182,212,0.1)_50px,rgba(6,182,212,0.1)_51px,transparent_52px),linear-gradient(rgba(6,182,212,0.1)_24px,transparent_25px,transparent_26px,rgba(6,182,212,0.1)_27px,rgba(6,182,212,0.1)_49px,transparent_50px,transparent_51px,rgba(6,182,212,0.1)_52px)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <NavLink to="/" className="group flex items-center gap-2">
          <div className="relative">
            <Zap className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent tracking-wide group-hover:from-cyan-300 group-hover:via-cyan-200 group-hover:to-blue-300 transition-all duration-300">
            Yogesh Yadav
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center bg-white/5 rounded-full px-6 py-2 border border-white/10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  isActive ? "text-cyan-400" : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Active Background */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30">
                      <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-sm" />
                    </div>
                  )}
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{link.name}</span>
                  {/* Bottom Line Animation */}
                  <div
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                      isActive
                        ? "w-6 -translate-x-1/2"
                        : "w-0 -translate-x-1/2 group-hover:w-6"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative p-2 text-white hover:text-cyan-400 transition-colors duration-300 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 mx-4 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl z-[-1]" />
          <div className="relative space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-400/20"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`
                }
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl z-[-1]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-xl z-[-1]" />
                    <span className="relative z-10 flex items-center gap-3">
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-400 shadow-lg shadow-cyan-400/50"
                            : "bg-white/30 group-hover:bg-cyan-400"
                        }`}
                      />
                      {link.name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
