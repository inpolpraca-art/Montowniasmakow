import { homeTranslations } from "./translations/home.js";
import { menuTranslations } from "./translations/menu.js";
import { privacyTranslations } from "./translations/privacy.js";

const translations = {
  pl: {
    ...homeTranslations.pl,
    ...menuTranslations.pl,
    ...privacyTranslations.pl,
  },
  en: {
    ...homeTranslations.en,
    ...menuTranslations.en,
    ...privacyTranslations.en,
  },
  uk: {
    ...homeTranslations.uk,
    ...menuTranslations.uk,
    ...privacyTranslations.uk,
  },
};
export function initI18n($$, langButtons) {
  function applyLanguage(lang) {
    const t = translations[lang] || translations.pl;
    document.documentElement.lang = lang === "uk" ? "uk" : lang;
    document.body.dataset.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (t[k] !== undefined) el.innerHTML = t[k];
    });

    langButtons.forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("bg-white", active);
      b.classList.toggle("text-[#111]", active);
      b.classList.toggle("bg-transparent", !active);
      b.classList.toggle("text-white/60", !active);
      b.setAttribute("aria-current", active ? "true" : "false");
    });

    localStorage.setItem("montownia-language", lang);
  }

  langButtons.forEach((b) =>
    b.addEventListener("click", () => applyLanguage(b.dataset.lang)),
  );
  applyLanguage(localStorage.getItem("montownia-language") || "pl");
}
