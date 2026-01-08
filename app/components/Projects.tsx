"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
  const { t, data } = useLanguage();

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]"
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
            {t.projects.title}
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.projects.map((project, index) => {
            const projectUrl = (project as any).live || ((project as any).link && !(project as any).link.startsWith("../") ? (project as any).link : (project as any).github) || "#";
            const githubUrl = (project as any).github || (project as any).link || "#";
            const role = (project as any).role || "";
            const impact = (project as any).impact || [];
            const technologies = typeof (project as any).technologies === 'string' 
              ? (project as any).technologies 
              : (Array.isArray(project.technologies) ? project.technologies.join(" · ") : "");
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-[var(--beige-dark)] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-[var(--gray-200)] dark:border-[var(--gray-800)] flex flex-col"
              >
                <div className="mb-6 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <Code className="w-8 h-8 text-[var(--accent)] dark:text-[var(--accent-light)]" />
                    {projectUrl !== "#" && (
                      <ExternalLink 
                        className="w-5 h-5 text-[var(--accent)] opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
                        onClick={() => projectUrl !== "#" && window.open(projectUrl, '_blank', 'noopener,noreferrer')}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-[var(--foreground)] mb-2">
                    {project.title}
                  </h3>
                  {role && (
                    <p className="text-sm text-[var(--accent)] font-medium mb-4">
                      {role}
                    </p>
                  )}
                  {impact && impact.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {impact.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm text-[var(--foreground)]/80 flex items-start space-x-2">
                          <span className="text-[var(--accent)] mt-1.5 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 pt-4 border-t border-[var(--beige-dark)] dark:border-[var(--beige)]">
                    <p className="text-xs text-[var(--foreground)]/60 font-mono">
                      {typeof technologies === 'string' ? technologies : (Array.isArray(technologies) ? technologies.join(" · ") : technologies)}
                    </p>
                  </div>
                </div>
                {githubUrl !== "#" && (
                  <div className="mt-auto pt-4 border-t border-[var(--beige-dark)] dark:border-[var(--beige)]">
                    <motion.a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white rounded-lg font-medium text-sm transition-colors group/link"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t.projects.viewGitHub}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

