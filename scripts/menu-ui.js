export function initMenuUI($, $$) {
  const lockBody = (locked) =>
    document.body.classList.toggle("overflow-hidden", locked);

  // Статический список страниц меню (без переключения языков)
  const pages = [
    {
      pdf: "../assets/pdf/menu-pl.pdf",
      page: 1,
      thumb: "../assets/menu/pl-1.webp",
      title: "Menu · strona 1",
      alt: "Montownia Smaków — menu, strona 1",
    },
    {
      pdf: "../assets/pdf/menu-pl.pdf",
      page: 2,
      thumb: "../assets/menu/pl-2.webp",
      title: "Menu · strona 2",
      alt: "Montownia Smaków — menu, strona 2",
    },
    {
      pdf: "../assets/pdf/drink-menu.pdf",
      page: 1,
      thumb: "../assets/menu/drink-1.webp",
      title: "Drink menu · strona 1",
      alt: "Montownia Smaków — drink menu, strona 1",
    },
    {
      pdf: "../assets/pdf/drink-menu.pdf",
      page: 2,
      thumb: "../assets/menu/drink-2.webp",
      title: "Drink menu · strona 2",
      alt: "Montownia Smaków — drink menu, strona 2",
    },
  ];

  const menuGrid = $("#menuGrid");
  const viewer = $("#viewer");
  const stage = $("#viewerStage");
  const wrap = $("#imageWrap");
  const canvas = $("#viewerCanvas");
  const fallbackImage = $("#fallbackImage");
  const zoomReset = $("#zoomReset");
  const viewerTitle = $("#viewerTitle");

  let index = 0;
  let pdfDoc = null;
  let pdfPage = null;
  let renderTask = null;
  let scale = 1;
  let baseScale = 1;
  let x = 0;
  let y = 0;
  let dragging = false;
  let isMoved = false;
  let activePointerId = null;
  let lastX = 0;
  let lastY = 0;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;
  let pinchStartCenter = null;
  let renderToken = 0;
  let renderTimeout = null;

  const MAX_ZOOM = 8;
  const MIN_ZOOM = 0.35;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function renderTransform() {
    wrap.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scale})`;
    zoomReset.textContent = `${Math.round((scale / baseScale) * 100)}%`;
  }

  function stageCenter() {
    const rect = stage.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2 + 41,
    };
  }

  function fitImage() {
    if (!pdfPage) return;
    const rect = stage.getBoundingClientRect();
    const viewport = pdfPage.getViewport({ scale: 1 });
    const availableWidth = Math.max(280, rect.width - 150);
    const availableHeight = Math.max(240, rect.height - 145);

    baseScale = Math.min(
      availableWidth / viewport.width,
      availableHeight / viewport.height,
    );
    baseScale = clamp(baseScale, MIN_ZOOM, 1.5);
    scale = baseScale;
    x = 0;
    y = 0;

    wrap.style.width = `${viewport.width}px`;
    wrap.style.height = `${viewport.height}px`;

    renderTransform();
    renderPdf();
  }

  function debouncedRenderPdf() {
    clearTimeout(renderTimeout);
    renderTimeout = setTimeout(() => {
      renderPdf();
    }, 150);
  }

  function zoomTo(
    nextScale,
    clientX = window.innerWidth / 2,
    clientY = window.innerHeight / 2,
  ) {
    const oldScale = scale || baseScale || 1;
    const next = clamp(nextScale, MIN_ZOOM, MAX_ZOOM);
    if (Math.abs(next - oldScale) < 0.0001) return;

    const center = stageCenter();
    const pointX = clientX - center.x;
    const pointY = clientY - center.y;
    const ratio = next / oldScale;

    x = pointX - (pointX - x) * ratio;
    y = pointY - (pointY - y) * ratio;
    scale = next;

    renderTransform();
    debouncedRenderPdf();
  }

  function resetView() {
    scale = baseScale;
    x = 0;
    y = 0;
    renderTransform();
    renderPdf();
  }

  async function renderPdf() {
    if (!pdfPage) return;
    const token = ++renderToken;
    if (renderTask) {
      try {
        renderTask.cancel();
      } catch (_) {}
    }

    fallbackImage.classList.add("hidden");
    canvas.classList.remove("hidden");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const viewportAtOne = pdfPage.getViewport({ scale: 1 });

    let renderScale = Math.max(1, scale * dpr);
    const maxPixels = 28_000_000;
    const requested =
      viewportAtOne.width * viewportAtOne.height * renderScale * renderScale;
    if (requested > maxPixels) {
      renderScale *= Math.sqrt(maxPixels / requested);
    }

    const renderViewport = pdfPage.getViewport({ scale: renderScale });
    const cssWidth = viewportAtOne.width;
    const cssHeight = viewportAtOne.height;

    canvas.width = Math.ceil(renderViewport.width);
    canvas.height = Math.ceil(renderViewport.height);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    const ctx = canvas.getContext("2d", { alpha: false });
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    renderTask = pdfPage.render({
      canvasContext: ctx,
      viewport: renderViewport,
    });
    try {
      await renderTask.promise;
    } catch (error) {
      if (error?.name !== "RenderingCancelledException") {
        canvas.classList.add("hidden");
        fallbackImage.src = pages[index].thumb;
        fallbackImage.alt = pages[index].alt;
        fallbackImage.classList.remove("hidden");
      }
    } finally {
      if (token === renderToken) renderTask = null;
    }
  }

  async function loadPdfPage(nextIndex) {
    index = (nextIndex + pages.length) % pages.length;
    const item = pages[index];
    viewerTitle.textContent = item.title;

    if (!item.pdf) {
      pdfDoc = null;
      pdfPage = null;
      if (renderTask) {
        try {
          renderTask.cancel();
        } catch (_) {}
      }
      canvas.classList.add("hidden");
      fallbackImage.src = item.thumb;
      fallbackImage.alt = item.alt;
      fallbackImage.classList.remove("hidden");
      const rect = stage.getBoundingClientRect();
      const img = new Image();
      img.onload = () => {
        const availableWidth = Math.max(280, rect.width - 150);
        const availableHeight = Math.max(240, rect.height - 145);
        baseScale = clamp(
          Math.min(
            availableWidth / img.naturalWidth,
            availableHeight / img.naturalHeight,
          ),
          MIN_ZOOM,
          1.5,
        );
        scale = baseScale;
        x = 0;
        y = 0;
        wrap.style.width = `${img.naturalWidth}px`;
        wrap.style.height = `${img.naturalHeight}px`;
        renderTransform();
      };
      img.src = item.thumb;
      return;
    }

    fallbackImage.classList.add("hidden");
    canvas.classList.remove("hidden");
    try {
      if (!pdfDoc || pdfDoc._url !== item.pdf) {
        pdfDoc = await pdfjsLib.getDocument(item.pdf).promise;
        pdfDoc._url = item.pdf;
      }
      pdfPage = await pdfDoc.getPage(item.page);
      fitImage();
    } catch (error) {
      pdfPage = null;
      canvas.classList.add("hidden");
      fallbackImage.src = item.thumb;
      fallbackImage.alt = item.alt;
      fallbackImage.classList.remove("hidden");
      baseScale = 1;
      scale = 1;
      x = 0;
      y = 0;
      renderTransform();
    }
  }

  function openViewer(nextIndex) {
    viewer.classList.remove("hidden");
    viewer.setAttribute("aria-hidden", "false");
    lockBody(true);
    requestAnimationFrame(() => viewer.classList.remove("opacity-0"));
    loadPdfPage(nextIndex);
  }

  function closeViewer() {
    viewer.classList.add("opacity-0");
    viewer.setAttribute("aria-hidden", "true");
    setTimeout(() => viewer.classList.add("hidden"), 280);
    lockBody(false);
    dragging = false;
    activePointerId = null;
  }

  function changePage(delta) {
    loadPdfPage(index + delta);
  }

  function pointerDistance(a, b) {
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  function pointerCenter(a, b) {
    return { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
  }

  function renderCards() {
    const totalPages = String(pages.length).padStart(2, "0");

    menuGrid.innerHTML = pages
      .map(
        (item, i) => `
    <button data-menu-index="${i}" class="menu-card group block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white">
      <div class="relative overflow-hidden bg-[#151515]">
        <img src="${item.thumb}" alt="${item.alt}" class="w-full h-auto object-contain transition duration-700 ease-out group-hover:scale-[1.012]" loading="${i < 2 ? "eager" : "lazy"}">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
        <div class="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 lg:p-8">
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">${String(i + 1).padStart(2, "0")} / ${totalPages}</p>
            <h2 class="mt-2 font-serif text-3xl italic lg:text-4xl">${item.title}</h2>
          </div>
          <span class="grid h-12 w-12 place-items-center border border-white/35 bg-black/20 text-xl transition duration-300 group-hover:bg-white group-hover:text-black">↗</span>
        </div>
      </div>
    </button>
  `,
      )
      .join("");

    const cardButtons = $$(".menu-card", menuGrid);
    cardButtons.forEach((button) => {
      button.addEventListener("click", () =>
        openViewer(Number(button.dataset.menuIndex)),
      );
    });
  }

  $("#viewerClose").addEventListener("click", closeViewer);
  $("#viewerBack").addEventListener("click", closeViewer);
  $("#prevMenu").addEventListener("click", () => changePage(-1));
  $("#nextMenu").addEventListener("click", () => changePage(1));
  $("#zoomIn").addEventListener("click", () => zoomTo(scale * 1.25));
  $("#zoomOut").addEventListener("click", () => zoomTo(scale / 1.25));
  $("#zoomReset").addEventListener("click", resetView);

  stage.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const factor = event.deltaY < 0 ? 1.18 : 1 / 1.18;
      zoomTo(scale * factor, event.clientX, event.clientY);
    },
    { passive: false },
  );

  stage.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    isMoved = false;
    activePointerId = event.pointerId;
    lastX = event.clientX;
    lastY = event.clientY;
    stage.setPointerCapture?.(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    if (!dragging || activePointerId !== event.pointerId) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
      isMoved = true;
    }
    x += dx;
    y += dy;
    lastX = event.clientX;
    lastY = event.clientY;
    renderTransform();
  });

  const stopPointer = () => {
    dragging = false;
    activePointerId = null;
  };
  stage.addEventListener("pointerup", stopPointer);
  stage.addEventListener("pointercancel", stopPointer);
  stage.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 2) return;
      pinchStartDistance = pointerDistance(event.touches[0], event.touches[1]);
      pinchStartScale = scale;
      pinchStartCenter = pointerCenter(event.touches[0], event.touches[1]);
    },
    { passive: true },
  );

  stage.addEventListener(
    "touchmove",
    (event) => {
      if (event.touches.length !== 2 || !pinchStartDistance) return;
      event.preventDefault();
      const distance = pointerDistance(event.touches[0], event.touches[1]);
      const center = pointerCenter(event.touches[0], event.touches[1]);
      const nextScale = pinchStartScale * (distance / pinchStartDistance);
      zoomTo(
        nextScale,
        pinchStartCenter?.x ?? center.x,
        pinchStartCenter?.y ?? center.y,
      );
    },
    { passive: false },
  );

  stage.addEventListener("touchend", () => {
    pinchStartDistance = 0;
    pinchStartCenter = null;
  });

  window.addEventListener("resize", () => {
    if (viewer.classList.contains("hidden") || !pdfPage) return;
    const relativeZoom = scale / Math.max(baseScale, 0.001);
    fitImage();
    scale = clamp(baseScale * relativeZoom, MIN_ZOOM, MAX_ZOOM);
    renderTransform();
    renderPdf();
  });

  document.addEventListener("keydown", (event) => {
    if (viewer.classList.contains("hidden")) return;
    if (event.key === "Escape") closeViewer();
    if (event.key === "ArrowLeft") changePage(-1);
    if (event.key === "ArrowRight") changePage(1);
    if (event.key === "+" || event.key === "=") zoomTo(scale * 1.25);
    if (event.key === "-") zoomTo(scale / 1.25);
    if (event.key === "0") resetView();
  });

  stage.addEventListener("click", (event) => {
    if (event.target === stage && !isMoved) {
      closeViewer();
    }
  });

  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }

  renderCards();
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
