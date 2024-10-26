import { create } from "zustand";

interface LanguageStore {
  language:   "ru" | "en";
  setLanguage: (language: "ru" | "en") => void;
  t: ( ru: string, en: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "en", 
  setLanguage: (language:   "ru" | "en") => set({ language }),
  t: ( ru: string, en: string) => {
    const currentLanguage = get().language;
    if (currentLanguage === "ru") return ru;
    return en;
  },
}));