"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Education() {
  const { t, data } = useLanguage();

  // Filter to only show exchange programs
  const exchangePrograms = data.education.filter((edu) => edu.isExchange);

  // Don't show section if no exchange programs
  if (exchangePrograms.length === 0) {
    return null;
  }

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--beige)] dark:bg-[var(--beige-dark)]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center text-[var(--foreground)]/90"
        >
          {t.education.title}
        </motion.h2>

        <div className="space-y-6">
          {exchangePrograms.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[var(--background)]/60 dark:bg-[var(--beige)]/40 p-6 rounded-2xl border border-[var(--accent)]/10 hover:border-[var(--accent)]/20 transition-all backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[var(--accent)]/10 dark:bg-[var(--accent)]/15 rounded-xl">
                  {edu.isExchange ? (
                    <Globe className="w-5 h-5 text-[var(--accent)]/70 dark:text-[var(--accent-light)]/70" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-[var(--accent)]/70 dark:text-[var(--accent-light)]/70" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-lg font-medium font-poppins text-[var(--foreground)]/90">
                      {edu.degree}
                    </h3>
                    {edu.isExchange && (
                      <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)]/80 rounded-full text-xs font-medium">
                        {t.education.exchange}
                      </span>
                    )}
                  </div>
                  <p className="text-base font-normal text-[var(--accent)]/80 mb-3">
                    {edu.institution}
                  </p>
                  <div className="space-y-1.5 text-sm text-[var(--foreground)]/60">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 opacity-60" />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 opacity-60" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

