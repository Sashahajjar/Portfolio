"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function LookingFor() {
  const { t } = useLanguage();

  return (
    <section
      id="looking-for"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--beige)] dark:bg-[var(--beige-dark)]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center text-[var(--foreground)]"
        >
          {t.lookingFor.title}
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed text-[var(--foreground)]/80"
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-start space-x-3"
          >
            <span className="text-[var(--accent)] mt-1 font-bold">•</span>
            <span>{t.lookingFor.bullet1}</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-start space-x-3"
          >
            <span className="text-[var(--accent)] mt-1 font-bold">•</span>
            <span>{t.lookingFor.bullet2}</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-start space-x-3"
          >
            <span className="text-[var(--accent)] mt-1 font-bold">•</span>
            <span>{t.lookingFor.bullet3}</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-start space-x-3"
          >
            <span className="text-[var(--accent)] mt-1 font-bold">•</span>
            <span>{t.lookingFor.bullet4}</span>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

