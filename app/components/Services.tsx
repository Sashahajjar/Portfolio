"use client";

import { motion } from "framer-motion";
import { Code, Database, Brain, Briefcase } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t.services.webDevelopment.title,
      description: t.services.webDevelopment.description,
      color: "from-stone-600 to-stone-700",
    },
    {
      icon: Database,
      title: t.services.dataAnalytics.title,
      description: t.services.dataAnalytics.description,
      color: "from-stone-700 to-stone-800",
    },
    {
      icon: Brain,
      title: t.services.aiSolutions.title,
      description: t.services.aiSolutions.description,
      color: "from-stone-500 to-stone-600",
    },
    {
      icon: Briefcase,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      color: "from-stone-600 to-stone-800",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--background)] to-[var(--beige)] dark:from-[var(--background)] dark:to-[var(--beige-dark)]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-[var(--foreground)]">
            {t.services.title}
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white dark:bg-[var(--beige-dark)] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-[var(--gray-200)] dark:border-[var(--gray-800)] group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

