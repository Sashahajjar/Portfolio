"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowDown, Download } from "lucide-react";
import { contactInfo } from "../utils/data";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t, language: lang } = useLanguage();

  // Personal images array
  const personalImages = [
    "/photo7.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
  ];

  const scrollToContact = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-[var(--beige)] to-[var(--accent)]/10 dark:from-[var(--background)] dark:via-[var(--beige-dark)] dark:to-[var(--accent)]/10"
      aria-label="Section d'accueil"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Picture with Horizontal Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 relative"
          >
            {/* Horizontal Container */}
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              {/* Images on the left */}
              {personalImages.slice(0, Math.ceil(personalImages.length / 2)).map((image, index) => {
                const isPhoto7 = image === "/photo7.jpg";
                return (
                <motion.div
                  key={`left-${index}`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: -50
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 150,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 2.5,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xl border-4 border-[var(--background)] dark:border-[var(--beige-dark)] cursor-pointer group"
                >
                  <Image
                    src={image}
                    alt={`Sacha Hajjar ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    style={isPhoto7 ? { objectPosition: 'center center' } : undefined}
                    sizes="(max-width: 768px) 80px, 112px"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
                );
              })}

              {/* Profile Picture in Center */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-[var(--accent)]/20 dark:ring-[var(--accent)]/30 z-10 mx-2 md:mx-4">
              <Image
                src="/profile.jpg"
                alt="Sacha Hajjar"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                priority
                sizes="(max-width: 768px) 192px, 256px"
              />
              </div>

              {/* Images on the right */}
              {personalImages.slice(Math.ceil(personalImages.length / 2)).map((image, index) => {
                const isPhoto7 = image === "/photo7.jpg";
                const isLast = index === personalImages.slice(Math.ceil(personalImages.length / 2)).length - 1;
                const isPhoto6 = image === "/photo6.jpg";
                
                let objectPosition = undefined;
                if (isPhoto7) {
                  objectPosition = 'center center';
                } else if (isPhoto6 && isLast) {
                  objectPosition = 'right center';
                }
                
                return (
                <motion.div
                  key={`right-${index}`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: 50
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (Math.ceil(personalImages.length / 2) + index) * 0.1,
                    type: "spring",
                    stiffness: 150,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 2.5,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xl border-4 border-[var(--background)] dark:border-[var(--beige-dark)] cursor-pointer group"
                >
                  <Image
                    src={image}
                    alt={`Sacha Hajjar ${Math.ceil(personalImages.length / 2) + index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    style={objectPosition ? { objectPosition } : undefined}
                    sizes="(max-width: 768px) 80px, 112px"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-poppins mb-4 text-[var(--foreground)]"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl font-semibold mb-4 text-[var(--accent)] dark:text-[var(--accent-light)]"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg mb-12 text-[var(--foreground)]/90 max-w-3xl mx-auto font-medium"
          >
            {t.hero.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center items-center gap-4 flex-wrap"
        >
          <motion.a
            href="/HAJJAR-Sacha-CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white dark:bg-[var(--beige-dark)] text-[var(--accent)] border-2 border-[var(--accent)] rounded-lg font-semibold flex items-center space-x-2 shadow-xl hover:shadow-2xl transition-all text-lg"
          >
            <Download className="w-5 h-5" />
            <span>{t.hero.downloadCV}</span>
          </motion.a>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white rounded-lg font-semibold flex items-center space-x-2 shadow-xl hover:shadow-2xl transition-all text-lg"
          >
            <Mail className="w-5 h-5" />
            <span>{t.hero.contactMe}</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => {
              if (typeof window !== "undefined" && typeof document !== "undefined") {
                const element = document.querySelector("#about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-[var(--accent)]/20 hover:bg-[var(--accent)]/30 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-[var(--accent)]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

