export function initMenuUI($, $$) {
  const lockBody = (locked) =>
    document.body.classList.toggle("overflow-hidden", locked);

  const themeUrl = window.themeUrl || '';
  const menuImages = [
    {
      src: `${themeUrl}/assets/menu/menu-01.avif`,
      alt: "Menu Montownia Smaków — wina i piwo",
      title: "Wina & piwo",
    },
    {
      src: `${themeUrl}/assets/menu/menu-02.avif`,
      alt: "Menu Montownia Smaków — koktajle",
      title: "Drink menu",
    },
    {
      src: `${themeUrl}/assets/menu/menu-03.avif`,
      alt: "Menu Montownia Smaków — dania główne",
      title: "Dania główne",
    },
    {
      src: `${themeUrl}/assets/menu/menu-04.avif`,
      alt: "Menu Montownia Smaków — burgery, pizza i napoje",
      title: "Pizza, burgery & napoje",
    },
  ];

  const viewer = $("#viewer");
  const stage = $("#viewerStage");
  const wrap = $("#imageWrap");
  const image = $("#viewerImage");
  const zoomReset = $("#zoomReset");
  const viewerTitle = $("#viewerTitle");

  if (!viewer || !stage || !image || !wrap) return;

  let index = 0;
  let scale = 1;
  let baseScale = 1;
  let x = 0;
  let y = 0;
  let dragging = false;
  let isPinching = false; 
  let isMoved = false;
  let activePointerId = null;
  let lastX = 0;
  let lastY = 0;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;

  const MAX_ZOOM = 4;
  const MIN_ZOOM = 0.25;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function renderTransform() {
    wrap.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scale})`;
    if (zoomReset) {
      zoomReset.textContent = `${Math.round((scale / baseScale) * 100)}%`;
    }
  }

  function stageCenter() {
    const rect = stage.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2 + 41,
    };
  }

  function fitImage() {
    const rect = stage.getBoundingClientRect();
    const naturalWidth = image.naturalWidth || 1;
    const naturalHeight = image.naturalHeight || 1;
    const availableWidth = Math.max(320, rect.width - 120);
    const availableHeight = Math.max(260, rect.height - 130);

    baseScale = Math.min(
      availableWidth / naturalWidth,
      availableHeight / naturalHeight,
    );
    baseScale = clamp(baseScale, MIN_ZOOM, 1);
    scale = baseScale;
    x = 0;
    y = 0;
    renderTransform();
  }

  function zoomTo(
    nextScale,
    clientX = window.innerWidth / 2,
    clientY = window.innerHeight / 2,
  ) {
    const oldScale = scale || baseScale || 1;
    const next = clamp(nextScale, MIN_ZOOM, MAX_ZOOM);
    if (next === oldScale) return;

    const center = stageCenter();
    const pointX = clientX - center.x;
    const pointY = clientY - center.y;
    const ratio = next / oldScale;

    x = pointX - (pointX - x) * ratio;
    y = pointY - (pointY - y) * ratio;
    scale = next;
    renderTransform();
  }

  function resetView() {
    scale = baseScale;
    x = 0;
    y = 0;
    renderTransform();
  }

  function loadImage(nextIndex) {
    index = (nextIndex + menuImages.length) % menuImages.length;
    const item = menuImages[index];
    if (viewerTitle) viewerTitle.textContent = item.title;
    image.alt = item.alt;

    image.onload = () => fitImage();
    image.src = item.src;
    if (image.complete) fitImage();
  }

  function openViewer(nextIndex) {
    loadImage(nextIndex);
    viewer.classList.remove("hidden");
    requestAnimationFrame(() => viewer.classList.remove("opacity-0"));
    viewer.setAttribute("aria-hidden", "false");
    lockBody(true);
  }

  function closeViewer() {
    viewer.classList.add("opacity-0");
    viewer.setAttribute("aria-hidden", "true");
    setTimeout(() => viewer.classList.add("hidden"), 280);
    lockBody(false);
    dragging = false;
    isPinching = false;
    activePointerId = null;
  }

  function changePage(delta) {
    loadImage(index + delta);
  }

  function pointerDistance(a, b) {
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  function pointerCenter(a, b) {
    return { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
  }

  $$("[data-menu-index]").forEach((button) => {
    button.addEventListener("click", () =>
      openViewer(Number(button.dataset.menuIndex)),
    );
  });

  $("#viewerClose")?.addEventListener("click", closeViewer);
  $("#viewerBack")?.addEventListener("click", closeViewer);
  $("#prevMenu")?.addEventListener("click", () => changePage(-1));
  $("#nextMenu")?.addEventListener("click", () => changePage(1));
  $("#zoomIn")?.addEventListener("click", () => zoomTo(scale * 1.25));
  $("#zoomOut")?.addEventListener("click", () => zoomTo(scale / 1.25));
  $("#zoomReset")?.addEventListener("click", resetView);

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
    if (isPinching) return; 

    dragging = true;
    isMoved = false;
    activePointerId = event.pointerId;
    lastX = event.clientX;
    lastY = event.clientY;
    stage.setPointerCapture?.(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    if (!dragging || isPinching || activePointerId !== event.pointerId) return;

    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;

    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      isMoved = true;
    }

    x += deltaX;
    y += deltaY;
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
      if (event.touches.length === 2) {
        isPinching = true;
        dragging = false; 
        pinchStartDistance = pointerDistance(
          event.touches[0],
          event.touches[1],
        );
        pinchStartScale = scale;
      }
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

      zoomTo(nextScale, center.x, center.y);
    },
    { passive: false },
  );

  stage.addEventListener("touchend", () => {
    pinchStartDistance = 0;
    isPinching = false;
  });

  window.addEventListener("resize", () => {
    if (viewer.classList.contains("hidden")) return;
    const previousBase = baseScale;
    fitImage();
    if (previousBase > 0 && scale !== previousBase) renderTransform();
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
}
