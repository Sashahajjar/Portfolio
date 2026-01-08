"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Skills() {
  const { t, data } = useLanguage();

  const techStack = data.techStack;

  const categories = [
    { label: t.skills.languages, techs: techStack.languages },
    { label: t.skills.frontend, techs: techStack.frontend },
    { label: t.skills.backend, techs: techStack.backend },
    { label: t.skills.database, techs: techStack.database },
    { label: t.skills.aiMl, techs: techStack.aiMl },
    { label: t.skills.tools, techs: techStack.tools },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--beige)] dark:bg-[var(--beige-dark)]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-center text-[var(--foreground)]"
        >
          {t.skills.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-[var(--beige-dark)] p-8 rounded-xl shadow-lg border border-[var(--gray-200)] dark:border-[var(--gray-800)]"
        >
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <motion.li
                key={category.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start space-x-3 text-base"
              >
                <span className="text-[var(--accent)] font-semibold min-w-[100px]">
                  {category.label}:
                </span>
                <span className="text-[var(--foreground)]/80">
                  {category.techs}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
