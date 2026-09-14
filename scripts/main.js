import { initI18n } from "./i18n.js";
import { initUI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  initUI($, $$);
  initI18n($$, $$(".lang-btn"));
});
