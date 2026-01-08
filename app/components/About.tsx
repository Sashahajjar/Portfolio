"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-center text-[var(--foreground)]">
            {t.about.title}
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)]/80">
              {t.about.paragraph.split('. ').filter(s => s.trim()).map((sentence, index, array) => {
                const fullSentence = sentence.trim() + (index < array.length - 1 ? '.' : '');
                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center px-4"
                    style={{ textWrap: 'pretty', wordBreak: 'normal' }}
                  >
                    {fullSentence}
                  </motion.p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

