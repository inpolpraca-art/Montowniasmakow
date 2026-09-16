import { initI18n } from "./i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];

  initI18n($$, $$(".lang-btn"));
});
