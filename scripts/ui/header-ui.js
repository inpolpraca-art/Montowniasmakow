export function initHeaderUI($, $$) {
  const header = $("#siteHeader");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 25) {
        header.classList.add("backdrop-blur-xl", "shadow-2xl");
      } else {
        header.classList.remove("backdrop-blur-xl", "shadow-2xl");
      }
    },
    { passive: true },
  );

  const mobile = $("#mobileMenu"),
    nav = $("#mainNav");

  function toggleMobileMenu(open) {
    nav.dataset.open = String(open);
    nav.classList.toggle("hidden", !open);
    nav.classList.toggle("flex", open);
    nav.classList.toggle("w-[calc(100vw-36px)]", open);
    nav.classList.toggle("flex-col", open);
    nav.classList.toggle("items-start", open);
    nav.classList.toggle("gap-0", open);
    nav.classList.toggle("bg-blackfood/95", open);
    nav.classList.toggle("p-6", open);
    nav.classList.toggle("shadow-2xl", open);
    mobile.setAttribute("aria-expanded", String(open));
  }
  mobile?.classList.remove("hidden");
  mobile?.addEventListener("click", () => {
    const open = nav.dataset.open !== "true";
    toggleMobileMenu(open);
  });
  window.addEventListener("keydown", (event) => {
    const open = nav.dataset.open === "true";
    if (event.code === "Escape" && open) {
      toggleMobileMenu(!open);
    }
  });
  window.addEventListener("click", (event) => {
    const open = nav.dataset.open === "true";
    if (!open) return;
    const targetElement = event.target;
    const isClickInsideNav = nav.contains(targetElement);
    const isClickOnButton = mobile.contains(targetElement);

    if (!isClickInsideNav && !isClickOnButton) {
      toggleMobileMenu(false);
    }
  });

  $$("#mainNav a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.dataset.open = "false";
      if (innerWidth < 1024) nav.classList.add("hidden");
    }),
  );
}
