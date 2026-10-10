import { initI18n } from "./i18n.js";
import { initUI } from "./ui/ui.js";
import { initHeaderUI } from "./ui/header-ui.js";
import { initModalImg } from "./shared/modal-img.js";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];

  initUI($, $$);
  initI18n($$, $$(".lang-btn"));
  initHeaderUI($, $$)
  initModalImg($, $$);
});
