"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Détecter la section active
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [language]);

  const scrollToSection = (href: string) => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--beige)]/95 dark:bg-[var(--beige-dark)]/95 backdrop-blur-md shadow-lg border-b border-[var(--accent)]/30"
          : "bg-[var(--beige)]/90 dark:bg-[var(--beige-dark)]/90 backdrop-blur-sm shadow-md border-b border-[var(--accent)]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.button
            onClick={() => scrollToSection("#hero")}
            className="text-2xl md:text-3xl font-bold font-poppins text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Home"
          >
            SH
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors relative group py-2 ${
                    isActive
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--foreground)]/80 hover:text-[var(--accent)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent)] transition-all duration-300 rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="p-2 rounded-lg bg-[var(--beige-dark)] dark:bg-[var(--beige)] hover:bg-[var(--accent)]/20 transition-colors"
              aria-label="Toggle language"
              title={language === "en" ? "Switch to French" : "Passer en anglais"}
            >
              <Languages className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="p-2 rounded-lg bg-[var(--beige-dark)] dark:bg-[var(--beige)] hover:bg-[var(--accent)]/20 transition-colors"
              aria-label="Toggle language"
              title={language === "en" ? "Switch to French" : "Passer en anglais"}
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[var(--foreground)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--beige)] dark:bg-[var(--beige-dark)] border-t border-[var(--beige-dark)] dark:border-[var(--beige)]"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent)]/20 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

