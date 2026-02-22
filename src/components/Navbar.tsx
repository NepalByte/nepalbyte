import { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-border shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img 
            src="/nepalbyte-logo.png" 
            alt="NepalByte" 
            className={`rounded-full object-cover ring-2 transition-all duration-300 ${
              isScrolled ? "h-9 w-9 ring-primary/20" : "h-11 w-11 ring-white shadow-lg"
            }`} 
          />
          <span className={`font-heading font-black tracking-tighter transition-all duration-300 ${
            isScrolled ? "text-xl" : "text-2xl"
          }`}>
            Nepal<span className="text-primary">Byte</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NepalByte"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
              isScrolled 
                ? "bg-slate-950 text-white hover:bg-primary shadow-lg shadow-primary/10" 
                : "bg-white text-slate-950 hover:shadow-xl border border-border"
            }`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
