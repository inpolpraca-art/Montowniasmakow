export function initUI($, $$) {
  // Page Loader
  const loader = $("#pageLoader");
  setTimeout(() => loader?.classList.add("opacity-20"), 1200);
  setTimeout(() => loader?.remove(), 1400);

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

  function waveHeroTitle() {
    const title = document.querySelector('[data-i18n="hero_title"]');

    if (!title || title.dataset.waveReady === "true") return;

    title.dataset.waveReady = "true";

    const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const textNodes = [];
    let node;

    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }

    let letterIndex = 0;

    textNodes.forEach((textNode) => {
      const text = textNode.textContent;
      const fragment = document.createDocumentFragment();

      [...text].forEach((char) => {
        if (char === " ") {
          fragment.appendChild(document.createTextNode(" "));
          return;
        }

        const span = document.createElement("span");

        span.textContent = char;

        span.className = "inline-block";

        span.animate(
          [
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(-18px)",
            },
            {
              transform: "translateY(0)",
            },
          ],
          {
            duration: 1300,
            delay: letterIndex * 100,
            easing: "ease-in-out",
            fill: "both",
          },
        );

        letterIndex++;

        fragment.appendChild(span);
      });

      textNode.parentNode.replaceChild(fragment, textNode);
    });
  }

  window.addEventListener("load", () => {
    setTimeout(waveHeroTitle, 300);
  });
}
