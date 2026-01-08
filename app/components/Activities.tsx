"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Activities() {
  const { t, data } = useLanguage();

  // Don't render if no activities
  if (!data.activities || data.activities.length === 0) {
    return null;
  }

  return (
    <section
      id="activities"
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
          {t.activities.title}
        </motion.h2>

        <div className="space-y-8">
          {data.activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[var(--background)] dark:bg-[var(--beige)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[var(--accent)]/20 rounded-lg">
                  <Users className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold font-poppins text-[var(--foreground)] mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-lg font-medium text-[var(--accent)] mb-3">
                    {activity.organization}
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-[var(--foreground)]/70">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {activity.startDate} - {activity.endDate}
                      </span>
                    </div>
                    {activity.location && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{activity.location}</span>
                      </div>
                    )}
                  </div>
                  <ul className="space-y-2 mt-4">
                    {activity.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-[var(--foreground)]/80 flex items-start space-x-2"
                      >
                        <span className="text-[var(--accent)] mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

