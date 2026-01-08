"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const typeColors = {
  apprenticeship: "bg-[var(--accent)]/20 text-[var(--accent)] dark:text-[var(--accent-light)]",
  internship: "bg-[var(--accent)]/20 text-[var(--accent)]",
  contract: "bg-[var(--beige-dark)] dark:bg-[var(--beige)] text-[var(--foreground)]",
};

export default function Experience() {
  const { t, data } = useLanguage();

  const typeLabels = {
    apprenticeship: t.experience.apprenticeship,
    internship: t.experience.internship,
    contract: t.experience.contract,
  };

  // Filter to show only Société des Grands Projets experience
  const sgpExperience = data.experiences.find((exp) => exp.id === "sgp");

  if (!sgpExperience) {
    return null;
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--beige)] dark:bg-[var(--beige-dark)]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center text-[var(--foreground)]"
        >
          {t.experience.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[var(--beige)] dark:bg-[var(--beige-dark)] p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-[var(--gray-200)] dark:border-[var(--gray-800)]">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-[var(--foreground)] mb-3">
                {sgpExperience.title}
              </h3>
              <p className="text-base md:text-lg text-[var(--foreground)]/70 mb-4">
                {sgpExperience.startDate} – {sgpExperience.endDate} · {sgpExperience.location}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              {sgpExperience.responsibilities.map((responsibility, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="text-base text-[var(--foreground)]/90 leading-relaxed"
                >
                  {responsibility}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

