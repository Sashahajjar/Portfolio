"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { contactInfo } from "../utils/data";
import { useLanguage } from "../contexts/LanguageContext";

// Updated: LinkedIn URL and name corrections applied

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-center text-[var(--foreground)]"
        >
          {t.contact.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-[var(--beige-dark)] p-8 rounded-xl shadow-lg border border-[var(--gray-200)] dark:border-[var(--gray-800)]">
            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center space-x-3 text-lg text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center space-x-3 text-lg text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sacha-hajjar-026122230/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-lg text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>{contactInfo.linkedin}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

