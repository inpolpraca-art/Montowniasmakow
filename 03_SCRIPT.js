/* 01. BOOT */
document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  const loader = $("#pageLoader");
  setTimeout(() => loader?.remove(), 1400);

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* 02. LANGUAGE */
  const translations = {
    pl: {
      nav_start:"START", nav_about:"O NAS", nav_menu:"MENU", nav_recommend:"DZIŚ POLECAMY", nav_offer:"OFERTA", nav_reviews:"RECENZJE", nav_gallery:"GALERIA",
      hero_eyebrow:"WARSZAWA • WŁOCHY", hero_title:"Smak,<br><em>który łączy.</em>", hero_text:"Kuchnia fusion, świeże składniki i wyjątkowa atmosfera przy Popularnej 71.", hero_menu:"ZOBACZ MENU", hero_video:"VIDEO", hero_scroll:"PRZEWIŃ ↓",
      about_label:"01 / O NAS", about_eyebrow:"MONTOWNIA SMAKÓW", about_title:"Więcej niż<br><em>restauracja.</em>", about_p1:"Montownia Smaków to klimatyczne miejsce na warszawskiej Woli, gdzie nowoczesne wnętrze spotyka się z kuchnią pełną różnych smaków.", about_p2:"W karcie znajdziesz m.in. burgery, pasty, ramen, curry, żeberka, sałatki, desery i sezonowe propozycje.", about_gallery:"ZOBACZ GALERIĘ", quote_author:"GEORGE BERNARD SHAW",
      video_title:"Smak zaczyna się<br><em>w kuchni.</em>", video_note:"MONTOWNIA SMAKÓW · VIDEO",
      menu_label:"02 / MENU", menu_title:"Nasze <em>menu.</em>", menu_intro:"Przeglądaj kartę strona po stronie.", full_menu:"PEŁNE MENU ↗", menu_prev:"Poprzednia strona menu", menu_next:"Następna strona menu",
      rec_label:"03 / DZIŚ POLECAMY", rec_eyebrow:"CHEF'S CHOICE", rec_title:"Dziś<br><em>polecamy.</em>", rec_intro:"Kilka pozycji, od których warto zacząć wizytę w Montowni Smaków.", selected:"WYBRANO",
      ribs:"PIECZONE ŻEBERKA W BBQ", ribs_desc:"Frytki i sałatka winegret.", carbonara:"CARBONARA", carbonara_desc:"Makaron, bekon, świeży tymianek, czosnek, cebula i sos śmietanowy.", ramen:"RAMEN", ramen_desc:"Wołowina / kurczak / tofu / krewetki, makaron udon i dodatki.", curry:"THAI CURRY", curry_desc:"Warzywa, mleko kokosowe, pasta curry i makaron udon.",
      offer_label:"04 / OFERTA", offer_title:"Spotkajmy się<br><em>przy stole.</em>", offer_text:"Dostawa, na wynos, rezerwacje, ogródek i catering.", reservation:"REZERWACJA", call:"ZADZWOŃ", catering:"CATERING",
      reviews_label:"05 / RECENZJE", reviews_title:"Goście <em>mówią.</em>", google:"GOOGLE", more_reviews:"ZOBACZ WIĘCEJ OPINII ↗",
      gallery_label:"06 / GALERIA", gallery_title:"Montownia<br><em>w obiektywie.</em>", photos:"12 ZDJĘĆ",
      contact_label:"07 / KONTAKT", contact_title:"Widzimy się<br><em>na Popularnej.</em>", hours:"GODZINY OTWARCIA", map:"OTWÓRZ MAPĘ ↗",
      shortcuts:"NA SKRÓTY", contact:"KONTAKT", follow:"ŚLEDŹ NAS", presentation:"STRONA PREZENTACYJNA",
      footer_desc:"Tworzymy, komponujemy, montujemy… smaki!", close:"Zamknij", prev_photo:"Poprzednie zdjęcie", next_photo:"Następne zdjęcie"
    },
    en: {
      nav_start:"HOME", nav_about:"ABOUT", nav_menu:"MENU", nav_recommend:"TODAY'S PICKS", nav_offer:"OFFER", nav_reviews:"REVIEWS", nav_gallery:"GALLERY",
      hero_eyebrow:"WARSAW • WŁOCHY", hero_title:"A taste<br><em>that brings us together.</em>", hero_text:"Fusion cuisine, fresh ingredients and a unique atmosphere at Popularna 71.", hero_menu:"VIEW MENU", hero_video:"VIDEO", hero_scroll:"SCROLL ↓",
      about_label:"01 / ABOUT", about_eyebrow:"MONTOWNIA SMAKÓW", about_title:"More than a<br><em>restaurant.</em>", about_p1:"Montownia Smaków is a welcoming place in Warsaw where a modern interior meets a kitchen full of different flavours.", about_p2:"The menu includes burgers, pasta, ramen, curry, ribs, salads, desserts and seasonal specials.", about_gallery:"VIEW GALLERY", quote_author:"GEORGE BERNARD SHAW",
      video_title:"Taste begins<br><em>in the kitchen.</em>", video_note:"MONTOWNIA SMAKÓW · VIDEO",
      menu_label:"02 / MENU", menu_title:"Our <em>menu.</em>", menu_intro:"Browse the menu page by page.", full_menu:"FULL MENU ↗", menu_prev:"Previous menu page", menu_next:"Next menu page",
      rec_label:"03 / TODAY'S PICKS", rec_eyebrow:"CHEF'S CHOICE", rec_title:"Today's<br><em>picks.</em>", rec_intro:"A few dishes worth trying when you visit Montownia Smaków.", selected:"SELECTED",
      ribs:"BBQ BAKED RIBS", ribs_desc:"Fries and vinaigrette salad.", carbonara:"CARBONARA", carbonara_desc:"Pasta, bacon, fresh thyme, garlic, onion and cream sauce.", ramen:"RAMEN", ramen_desc:"Beef / chicken / tofu / prawns, udon noodles and toppings.", curry:"THAI CURRY", curry_desc:"Vegetables, coconut milk, curry paste and udon noodles.",
      offer_label:"04 / OFFER", offer_title:"Meet us<br><em>at the table.</em>", offer_text:"Delivery, takeaway, reservations, garden and catering.", reservation:"RESERVATION", call:"CALL US", catering:"CATERING",
      reviews_label:"05 / REVIEWS", reviews_title:"Guests <em>speak.</em>", google:"GOOGLE", more_reviews:"SEE MORE REVIEWS ↗",
      gallery_label:"06 / GALLERY", gallery_title:"Montownia<br><em>through the lens.</em>", photos:"12 PHOTOS",
      contact_label:"07 / CONTACT", contact_title:"See you<br><em>at Popularna.</em>", hours:"OPENING HOURS", map:"OPEN MAP ↗",
      shortcuts:"SHORTCUTS", contact:"CONTACT", follow:"FOLLOW US", presentation:"PRESENTATION WEBSITE",
      footer_desc:"We create, compose and assemble… flavours!", close:"Close", prev_photo:"Previous photo", next_photo:"Next photo"
    },
    uk: {
      nav_start:"ГОЛОВНА", nav_about:"ПРО НАС", nav_menu:"МЕНЮ", nav_recommend:"СЬОГОДНІ РЕКОМЕНДУЄМО", nav_offer:"ПРОПОЗИЦІЯ", nav_reviews:"ВІДГУКИ", nav_gallery:"ГАЛЕРЕЯ",
      hero_eyebrow:"ВАРШАВА • ВЛОХИ", hero_title:"Смак,<br><em>що об'єднує.</em>", hero_text:"Ф'южн-кухня, свіжі інгредієнти та особлива атмосфера на Popularna 71.", hero_menu:"ПЕРЕГЛЯНУТИ МЕНЮ", hero_video:"ВІДЕО", hero_scroll:"ГОРТАЙТЕ ↓",
      about_label:"01 / ПРО НАС", about_eyebrow:"MONTOWNIA SMAKÓW", about_title:"Більше ніж<br><em>ресторан.</em>", about_p1:"Montownia Smaków — атмосферне місце у Варшаві, де сучасний інтер'єр поєднується з кухнею, сповненою різноманітних смаків.", about_p2:"У меню ви знайдете бургери, пасту, рамен, карі, реберця, салати, десерти та сезонні страви.", about_gallery:"ПЕРЕГЛЯНУТИ ГАЛЕРЕЮ", quote_author:"ДЖОРДЖ БЕРНАРД ШОУ",
      video_title:"Смак починається<br><em>на кухні.</em>", video_note:"MONTOWNIA SMAKÓW · ВІДЕО",
      menu_label:"02 / МЕНЮ", menu_title:"Наше <em>меню.</em>", menu_intro:"Переглядайте меню сторінка за сторінкою.", full_menu:"ПОВНЕ МЕНЮ ↗", menu_prev:"Попередня сторінка меню", menu_next:"Наступна сторінка меню",
      rec_label:"03 / СЬОГОДНІ РЕКОМЕНДУЄМО", rec_eyebrow:"ВИБІР ШЕФА", rec_title:"Сьогодні<br><em>рекомендуємо.</em>", rec_intro:"Кілька страв, з яких варто почати знайомство з Montownia Smaków.", selected:"ОБРАНО",
      ribs:"ЗАПЕЧЕНІ РЕБЕРЦЯ BBQ", ribs_desc:"Картопля фрі та салат з вінегретом.", carbonara:"КАРБОНАРА", carbonara_desc:"Паста, бекон, свіжий чебрець, часник, цибуля та вершковий соус.", ramen:"РАМЕН", ramen_desc:"Яловичина / курка / тофу / креветки, локшина удон та додатки.", curry:"ТАЙСЬКЕ КАРІ", curry_desc:"Овочі, кокосове молоко, паста карі та локшина удон.",
      offer_label:"04 / ПРОПОЗИЦІЯ", offer_title:"Зустріньмося<br><em>за столом.</em>", offer_text:"Доставка, їжа з собою, бронювання, тераса та кейтеринг.", reservation:"БРОНЮВАННЯ", call:"ЗАТЕЛЕФОНУВАТИ", catering:"КЕЙТЕРИНГ",
      reviews_label:"05 / ВІДГУКИ", reviews_title:"Гості <em>кажуть.</em>", google:"GOOGLE", more_reviews:"БІЛЬШЕ ВІДГУКІВ ↗",
      gallery_label:"06 / ГАЛЕРЕЯ", gallery_title:"Montownia<br><em>в об'єктиві.</em>", photos:"12 ФОТО",
      contact_label:"07 / КОНТАКТ", contact_title:"Зустрінемось<br><em>на Popularna.</em>", hours:"ГОДИНИ РОБОТИ", map:"ВІДКРИТИ МАПУ ↗",
      shortcuts:"ШВИДКІ ПОСИЛАННЯ", contact:"КОНТАКТ", follow:"СЛІДКУЙТЕ ЗА НАМИ", presentation:"ПРЕЗЕНТАЦІЙНИЙ САЙТ",
      footer_desc:"Створюємо, поєднуємо, монтуємо… смаки!", close:"Закрити", prev_photo:"Попереднє фото", next_photo:"Наступне фото"
    }
  };

  const langButtons = $$(".lang-btn");
  const setText = (key, value) => {
    $$(`[data-i18n="${key}"]`).forEach(el => el.innerHTML = value ?? key);
  };
  const applyLanguage = (lang) => {
    const t = translations[lang] || translations.pl;
    document.documentElement.lang = lang === "uk" ? "uk" : lang;
    document.body.dataset.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
    localStorage.setItem("montownia-language", lang);
    updateRecommendations(lang);
  };
  langButtons.forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));

  const header = $("#siteHeader");
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 25);
  }, { passive:true });

  /* 03. MOBILE NAV */
  const mobile = $("#mobileMenu");
  const nav = $("#mainNav");
  mobile?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    mobile.setAttribute("aria-expanded", String(open));
    mobile.classList.toggle("is-open", open);
  });
  $$("#mainNav a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    mobile?.classList.remove("is-open");
    mobile?.setAttribute("aria-expanded", "false");
  }));

  /* 04. SMOOTH ANCHORS */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior:"smooth", block:"start" });
    });
  });

  /* 05. LOCAL VIDEO */
  const siteVideo = $("#siteVideo");
  if (siteVideo) {
    const videoStart = 27;
    const startVideo = () => {
      try {
        if (siteVideo.currentTime < videoStart) siteVideo.currentTime = videoStart;
        const promise = siteVideo.play();
        if (promise?.catch) promise.catch(() => {});
      } catch (_) {}
    };
    siteVideo.addEventListener("loadedmetadata", () => {
      if (siteVideo.duration > videoStart) siteVideo.currentTime = videoStart;
      startVideo();
    });
    siteVideo.addEventListener("ended", () => {
      if (siteVideo.duration > videoStart) {
        siteVideo.currentTime = videoStart;
        startVideo();
      }
    });
    siteVideo.addEventListener("click", () => { if (siteVideo.paused) startVideo(); });
  }

  /* 06. MENU */
  const menuPages = [
    {src:"https://montowniasmakow.pl/wp-content/uploads/2025/07/0001-1024x746.png", alt:"Menu Montownia Smaków — strona 1"},
    {src:"https://montowniasmakow.pl/wp-content/uploads/2025/07/0002-1024x746.png", alt:"Menu Montownia Smaków — strona 2"},
    {src:"https://montowniasmakow.pl/wp-content/uploads/2024/12/drink-menu-2.pdf-967x1024.png", alt:"Menu napojów Montownia Smaków"},
    {src:"https://montowniasmakow.pl/wp-content/uploads/2024/12/drink-menu-2.pdf1_-967x1024.png", alt:"Menu win i piwa Montownia Smaków"}
  ];
  let menuIndex = 0;
  const menuImg = $("#menuPage"), menuCounter = $("#menuCounter"), dots = $("#menuDots");
  menuPages.forEach((page, i) => {
    const dot = document.createElement("button");
    dot.className = "menu-dot" + (i === 0 ? " active" : ""); dot.type = "button";
    dot.setAttribute("aria-label", `Go to menu page ${i+1}`); dot.addEventListener("click", () => showMenu(i));
    dots?.appendChild(dot);
  });
  function showMenu(index){
    menuIndex = (index + menuPages.length) % menuPages.length;
    if (menuImg){ menuImg.src = menuPages[menuIndex].src; menuImg.alt = menuPages[menuIndex].alt; }
    if (menuCounter) menuCounter.textContent = `0${menuIndex+1} / 04`;
    $$(".menu-dot").forEach((d,i) => d.classList.toggle("active", i === menuIndex));
  }
  $("#menuPrev")?.addEventListener("click", () => showMenu(menuIndex - 1));
  $("#menuNext")?.addEventListener("click", () => showMenu(menuIndex + 1));

  /* 07. RECOMMENDATION */
  const recommendItems = $$(".recommend-item");
  const recommendTitle = $("#recommendTitle"), recommendDesc = $("#recommendDesc"), recommendPrice = $("#recommendPrice");
  const recommendationData = {
    pl:["ribs","Frytki i sałatka winegret.","57 zł"],
    en:["ribs","Fries and vinaigrette salad.","57 PLN"],
    uk:["ribs","Картопля фрі та салат з вінегретом.","57 zł"]
  };
  const updateRecommendations = (lang) => {
    const t = translations[lang] || translations.pl;
    const defs = [
      [t.ribs,t.ribs_desc,"57 zł"],[t.carbonara,t.carbonara_desc,"42 zł"],[t.ramen,t.ramen_desc,"42 zł"],[t.curry,t.curry_desc,"45 zł"]
    ];
    recommendItems.forEach((item,i) => { item.dataset.title=defs[i][0]; item.dataset.desc=defs[i][1]; item.dataset.price=defs[i][2]; item.querySelector("strong").textContent=defs[i][0]; item.querySelector("b").textContent=defs[i][2]; });
    const active = recommendItems.find(x=>x.classList.contains("active")) || recommendItems[0];
    if (active) { recommendTitle.textContent=active.dataset.title; recommendDesc.textContent=active.dataset.desc; recommendPrice.textContent=active.dataset.price; }
  };
  recommendItems.forEach(item => item.addEventListener("click", () => {
    recommendItems.forEach(x => x.classList.remove("active")); item.classList.add("active");
    recommendTitle.textContent=item.dataset.title; recommendDesc.textContent=item.dataset.desc; recommendPrice.textContent=item.dataset.price;
  }));

  /* 08. GALLERY */
  const gallerySources = $$("#galleryGrid img").map(img => img.src);
  let galleryIndex = 0;
  const modal = $("#galleryModal"), modalImg = $("#galleryModalImage"), counter = $("#galleryCounter");
  function showGallery(index){
    galleryIndex = (index + gallerySources.length) % gallerySources.length;
    if (modalImg) modalImg.src = gallerySources[galleryIndex];
    if (counter) counter.textContent = `${String(galleryIndex+1).padStart(2,"0")} / ${String(gallerySources.length).padStart(2,"0")}`;
  }
  function openGallery(index=0){ showGallery(index); modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.classList.add("modal-open"); }
  function closeGallery(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.classList.remove("modal-open"); }
  $$(".gallery-card").forEach(card => card.addEventListener("click", () => openGallery(Number(card.dataset.index))));
  $("#galleryPrev")?.addEventListener("click", () => showGallery(galleryIndex - 1));
  $("#galleryNext")?.addEventListener("click", () => showGallery(galleryIndex + 1));
  $("#galleryClose")?.addEventListener("click", closeGallery);
  modal?.addEventListener("click", e => { if (e.target === modal) closeGallery(); });
  document.addEventListener("keydown", e => {
    if (!modal?.classList.contains("open")) return;
    if (e.key === "Escape") closeGallery();
    if (e.key === "ArrowRight") showGallery(galleryIndex + 1);
    if (e.key === "ArrowLeft") showGallery(galleryIndex - 1);
  });

  /* 09. INITIAL LANGUAGE */
  applyLanguage(localStorage.getItem("montownia-language") || "pl");
});
