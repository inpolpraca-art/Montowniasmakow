export function initUI($, $$) {
  // Page Loader
  const sessionVisited = Boolean(sessionStorage.getItem("montownia-visited"));
  const loader = $("#pageLoader");

  if (!sessionVisited && loader) {
    sessionStorage.setItem("montownia-visited", "true");
    setTimeout(() => loader?.classList.add("opacity-20"), 1200);
    setTimeout(() => loader?.remove(), 1400);
  } else {
    loader?.remove();
  }

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
}
