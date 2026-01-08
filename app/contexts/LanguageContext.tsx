"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, getTranslatedData } from "../utils/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  data: ReturnType<typeof getTranslatedData>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved language preference (only in browser)
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language | null;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
        setLanguageState(savedLanguage);
        if (typeof document !== "undefined") {
          document.documentElement.lang = savedLanguage;
        }
      } else {
        if (typeof document !== "undefined") {
          document.documentElement.lang = "en";
        }
      }
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  // Always provide the context, even when not mounted
  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    data: getTranslatedData(language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

