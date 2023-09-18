import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import hiTranslation from "./locales/hi/translation.json";
import jaTranslation from "./locales/ja/translation.json";
import zhTranslation from "./locales/zh/translation.json";
import arTranslation from "./locales/ar/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        hi: { translation: hiTranslation },
        ja: { translation: jaTranslation }, // Japanese
        zh: { translation: zhTranslation }, // Chinese
        ar: { translation: arTranslation }, // Arabic
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if a translation is missing
    interpolation: {
        escapeValue: false, // React already escapes the strings
    },
});

export default i18n;
