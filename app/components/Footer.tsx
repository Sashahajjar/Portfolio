"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, Github } from "lucide-react";
import { contactInfo } from "../utils/data";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--beige)] dark:bg-[var(--beige-dark)] border-t border-[var(--beige-dark)] dark:border-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold font-poppins mb-4 text-[var(--foreground)]">
              {t.footer.contact}
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center space-x-2 text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-[var(--foreground)]">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold font-poppins mb-4 text-[var(--foreground)]">
              {t.footer.social}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sasha-hajjar-026122230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--beige-dark)] dark:bg-[var(--beige)] hover:bg-[var(--accent)]/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Sashahajjar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--beige-dark)] dark:bg-[var(--beige)] hover:bg-[var(--accent)]/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold font-poppins mb-4 text-[var(--foreground)]">
              {t.footer.navigation}
            </h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {t.footer.about}
              </a>
              <a
                href="#projects"
                className="block text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {t.footer.projects}
              </a>
              <a
                href="#contact"
                className="block text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {t.footer.contactLink}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-[var(--beige-dark)] dark:border-[var(--beige)] text-center text-sm text-[var(--foreground)]/70"
        >
          <p>© {currentYear} Sacha Hajjar. {t.footer.rights}</p>
        </motion.div>
      </div>
    </footer>
  );
}

