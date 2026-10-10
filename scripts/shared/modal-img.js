export function initModalImg($, $$) {
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