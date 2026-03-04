"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en";
import id from "@/locales/id";
import type { Translations } from "@/locales/en";

type Locale = "en" | "id";

interface LanguageContextType {
    locale: Locale;
    t: Translations;
    toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Locale, Translations> = { en, id };

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("en");

    useEffect(() => {
        const stored = localStorage.getItem("locale") as Locale | null;
        if (stored === "en" || stored === "id") {
            setLocale(stored);
        }
    }, []);

    const toggleLocale = () => {
        setLocale((prev) => {
            const next: Locale = prev === "en" ? "id" : "en";
            localStorage.setItem("locale", next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
}
