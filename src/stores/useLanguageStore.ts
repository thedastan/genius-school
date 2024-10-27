import { create } from "zustand";

interface LanguageStore {
  language:   "ru" | "ky";
  setLanguage: (language: "ru" | "ky") => void;
  t: ( ru: string, en: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "ky", 
  setLanguage: (language:   "ru" | "ky") => set({ language }),
  t: ( ru: string, en: string) => {
    const currentLanguage = get().language;
    if (currentLanguage === "ru") return ru;
    return en;
  },
}));