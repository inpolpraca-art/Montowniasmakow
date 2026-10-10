import { initI18n } from "./i18n.js";
import { initHeaderUI } from "./ui/header-ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];

  initI18n($$, $$(".lang-btn"));
  initHeaderUI($, $$);
});
