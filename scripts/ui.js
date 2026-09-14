export function initUI($, $$) {
  // Page Loader & Year
  const loader = $("#pageLoader");
  setTimeout(() => loader?.classList.add("opacity-20"), 1200);
  setTimeout(() => loader?.remove(), 1400);

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Header Scroll Effect
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

  // Mobile Menu
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

  // Smooth Scroll
  $$('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }),
  );

  // Video Autoplay
  const video = $("#siteVideo");
  if (video) {
    const start = 27;
    const startVideo = () => {
      try {
        if (
          Number.isFinite(video.duration) &&
          video.duration > start + 1 &&
          video.currentTime < 1
        )
          video.currentTime = start;
        video.play()?.catch(() => {});
      } catch {}
    };
    video.addEventListener("loadeddata", startVideo);
    video.addEventListener("canplay", startVideo, { once: true });
    video.addEventListener("ended", () => {
      try {
        video.currentTime = start;
        startVideo();
      } catch {}
    });
    video.addEventListener("click", () => video.paused && startVideo());
  }

  // Interactive Menu Viewer
  const pages = [
    {
      src: "https://montowniasmakow.pl/wp-content/uploads/2025/07/0001-1024x746.png",
      alt: "Menu Montownia Smaków — strona 1",
    },
    {
      src: "https://montowniasmakow.pl/wp-content/uploads/2025/07/0002-1024x746.png",
      alt: "Menu Montownia Smaków — strona 2",
    },
    {
      src: "https://montowniasmakow.pl/wp-content/uploads/2024/12/drink-menu-2.pdf-967x1024.png",
      alt: "Menu napojów Montownia Smaków",
    },
    {
      src: "https://montowniasmakow.pl/wp-content/uploads/2024/12/drink-menu-2.pdf1_-967x1024.png",
      alt: "Menu win i piwa Montownia Smaków",
    },
  ];
  let mi = 0;
  const img = $("#menuPage"),
    counter = $("#menuCounter"),
    dots = $("#menuDots");

  pages.forEach((_, i) => {
    const d = document.createElement("button");
    d.type = "button";
    d.dataset.index = i;
    d.className =
      "menu-dot h-11 w-11 rounded-full border border-[#777] bg-transparent";
    d.addEventListener("click", () => showMenu(i));
    dots?.appendChild(d);
  });

  function showMenu(i) {
    mi = (i + pages.length) % pages.length;
    if (img) {
      img.src = pages[mi].src;
      img.alt = pages[mi].alt;
    }
    if (counter) counter.textContent = `0${mi + 1} / 04`;
    $$(".menu-dot").forEach((d, n) => {
      d.classList.toggle("bg-white", n === mi);
      d.classList.toggle("bg-transparent", n !== mi);
    });
  }

  $("#menuPrev")?.addEventListener("click", () => showMenu(mi - 1));
  $("#menuNext")?.addEventListener("click", () => showMenu(mi + 1));
  showMenu(0);

  // Gallery Modal
  const sources = $$("#galleryGrid img").map((i) => i.src);
  const modal = $("#galleryModal"),
    modalImg = $("#galleryModalImage"),
    gc = $("#galleryCounter");
  let gi = 0;

  function showGallery(i) {
    gi = (i + sources.length) % sources.length;
    if (modalImg) modalImg.src = sources[gi];
    if (gc)
      gc.textContent = `${String(gi + 1).padStart(2, "0")} / ${String(sources.length).padStart(2, "0")}`;
  }

  function openGallery(i = 0) {
    showGallery(i);
    modal.classList.remove("hidden", "pointer-events-none", "opacity-0");
    modal.classList.add("flex", "pointer-events-auto", "opacity-100");
    document.body.classList.add("overflow-hidden");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeGallery() {
    modal.classList.add("hidden", "pointer-events-none", "opacity-0");
    modal.classList.remove("flex", "pointer-events-auto", "opacity-100");
    document.body.classList.remove("overflow-hidden");
    modal.setAttribute("aria-hidden", "true");
  }

  $$(".gallery-card").forEach((c) =>
    c.addEventListener("click", () => openGallery(Number(c.dataset.index))),
  );
  $("#galleryPrev")?.addEventListener("click", () => showGallery(gi - 1));
  $("#galleryNext")?.addEventListener("click", () => showGallery(gi + 1));
  $("#galleryClose")?.addEventListener("click", closeGallery);
  modal?.addEventListener("click", (e) => e.target === modal && closeGallery());

  document.addEventListener("keydown", (e) => {
    if (modal?.classList.contains("hidden")) return;
    if (e.key === "Escape") closeGallery();
    if (e.key === "ArrowRight") showGallery(gi + 1);
    if (e.key === "ArrowLeft") showGallery(gi - 1);
  });
}
