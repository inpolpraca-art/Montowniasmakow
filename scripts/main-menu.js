import { initMenuUI } from "./menu-ui.js";
import { initI18n } from "./i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];

  initMenuUI($, $$);
  initI18n($$, $$(".lang-btn"));
});
