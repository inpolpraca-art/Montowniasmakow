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
      nav_start:"START", nav_about:"O NAS", nav_menu:"MENU", nav_lunch:"LUNCH 7 DNI", nav_reserve:"REZERWACJA", nav_recommend:"DZIŚ POLECAMY", nav_offer:"OFERTA", nav_reviews:"RECENZJE", nav_gallery:"GALERIA",
      hero_eyebrow:"WARSZAWA • WŁOCHY", hero_title:"Smak,<br><em>który łączy.</em>", hero_text:"Kuchnia fusion, świeże składniki i wyjątkowa atmosfera przy Popularnej 71.", hero_menu:"ZOBACZ MENU", hero_video:"VIDEO", hero_scroll:"PRZEWIŃ ↓",
      about_label:"01 / O NAS", about_eyebrow:"MONTOWNIA SMAKÓW", about_title:"Więcej niż<br><em>restauracja.</em>", about_p1:"Montownia Smaków to klimatyczne miejsce na warszawskiej Woli, gdzie nowoczesne wnętrze spotyka się z kuchnią pełną różnych smaków.", about_p2:"W karcie znajdziesz m.in. burgery, pasty, ramen, curry, żeberka, sałatki, desery i sezonowe propozycje.", about_gallery:"ZOBACZ GALERIĘ", quote_author:"GEORGE BERNARD SHAW",
      video_title:"Smak zaczyna się<br><em>w kuchni.</em>", video_note:"MONTOWNIA SMAKÓW · VIDEO",
      menu_label:"02 / MENU", menu_title:"Nasze <em>menu.</em>", menu_intro:"Przeglądaj kartę strona po stronie.", full_menu:"PEŁNE MENU ↗", menu_prev:"Poprzednia strona menu", menu_next:"Następna strona menu",
      lunch_label:"03 / LUNCH NA DZIŚ", lunch_title:"Lunch <em>na dziś.</em>", lunch_intro:"Oferta zmienia się automatycznie każdego dnia. Strona sama rozpoznaje dzisiejszy dzień.", lunch_meta:"zupa + drugie danie", lunch_hours:"LUNCH: 11:00–16:00", lunch_soup:"ZUPA", lunch_main:"DANIE GŁÓWNE", lunch_set:"ZESTAW LUNCHOWY", lunch_takeaway:"Na wynos: +2,50 zł za zestaw", lunch_note:"Aktualne danie dnia może się zmieniać. Sprawdź dzisiejszą ofertę telefonicznie lub na oficjalnych profilach Montownii Smaków.",
      rec_label:"04 / DZIŚ POLECAMY", rec_eyebrow:"CHEF'S CHOICE", rec_title:"Dziś<br><em>polecamy.</em>", rec_intro:"Strona automatycznie wybiera rekomendację na dzisiejszy dzień — bez ręcznego przełączania.", selected:"DZISIAJ POLECAMY",
      ribs:"PIECZONE ŻEBERKA W BBQ", ribs_desc:"Frytki i sałatka winegret.", carbonara:"CARBONARA", carbonara_desc:"Makaron, bekon, świeży tymianek, czosnek, cebula i sos śmietanowy.", ramen:"RAMEN", ramen_desc:"Wołowina / kurczak / tofu / krewetki, makaron udon i dodatki.", curry:"THAI CURRY", curry_desc:"Warzywa, mleko kokosowe, pasta curry i makaron udon.",
      offer_label:"04 / OFERTA", offer_title:"Spotkajmy się<br><em>przy stole.</em>", offer_text:"Dostawa, na wynos, rezerwacje, ogródek i catering.", reservation:"REZERWACJA", call:"ZADZWOŃ", catering:"CATERING",
      reviews_label:"05 / RECENZJE", reviews_title:"Goście <em>mówią.</em>", google:"GOOGLE", more_reviews:"ZOBACZ WIĘCEJ OPINII ↗",
      gallery_label:"06 / GALERIA", gallery_title:"Montownia<br><em>w obiektywie.</em>", photos:"12 ZDJĘĆ",
      contact_label:"07 / KONTAKT", contact_title:"Widzimy się<br><em>na Popularnej.</em>", hours:"GODZINY OTWARCIA", map:"OTWÓRZ MAPĘ ↗",
      shortcuts:"NA SKRÓTY", contact:"KONTAKT", follow:"ŚLEDŹ NAS", presentation:"STRONA PREZENTACYJNA",
      footer_desc:"Tworzymy, komponujemy, montujemy… smaki!", close:"Zamknij", prev_photo:"Poprzednie zdjęcie", next_photo:"Następne zdjęcie"
    },
    en: {
      nav_start:"HOME", nav_about:"ABOUT", nav_menu:"MENU", nav_lunch:"7-DAY LUNCH", nav_reserve:"RESERVATION", nav_recommend:"TODAY'S PICKS", nav_offer:"OFFER", nav_reviews:"REVIEWS", nav_gallery:"GALLERY",
      hero_eyebrow:"WARSAW • WŁOCHY", hero_title:"A taste<br><em>that brings us together.</em>", hero_text:"Fusion cuisine, fresh ingredients and a unique atmosphere at Popularna 71.", hero_menu:"VIEW MENU", hero_video:"VIDEO", hero_scroll:"SCROLL ↓",
      about_label:"01 / ABOUT", about_eyebrow:"MONTOWNIA SMAKÓW", about_title:"More than a<br><em>restaurant.</em>", about_p1:"Montownia Smaków is a welcoming place in Warsaw where a modern interior meets a kitchen full of different flavours.", about_p2:"The menu includes burgers, pasta, ramen, curry, ribs, salads, desserts and seasonal specials.", about_gallery:"VIEW GALLERY", quote_author:"GEORGE BERNARD SHAW",
      video_title:"Taste begins<br><em>in the kitchen.</em>", video_note:"MONTOWNIA SMAKÓW · VIDEO",
      menu_label:"02 / MENU", menu_title:"Our <em>menu.</em>", menu_intro:"Browse the menu page by page.", full_menu:"FULL MENU ↗", menu_prev:"Previous menu page", menu_next:"Next menu page",
      lunch_label:"03 / LUNCH FOR TODAY", lunch_title:"Lunch <em>for today.</em>", lunch_intro:"The offer changes automatically every day. The page detects today's day for you.", lunch_meta:"soup + main course", lunch_hours:"LUNCH: 11:00–16:00", lunch_soup:"SOUP", lunch_main:"MAIN COURSE", lunch_set:"LUNCH SET", lunch_takeaway:"Takeaway: +2.50 PLN per set", lunch_note:"The daily dish can change. Check today's offer by phone or on Montownia Smaków official profiles.",
      rec_label:"04 / TODAY'S PICKS", rec_eyebrow:"CHEF'S CHOICE", rec_title:"Today's<br><em>picks.</em>", rec_intro:"The page automatically selects a recommendation for today — no manual switching.", selected:"TODAY'S PICK",
      ribs:"BBQ BAKED RIBS", ribs_desc:"Fries and vinaigrette salad.", carbonara:"CARBONARA", carbonara_desc:"Pasta, bacon, fresh thyme, garlic, onion and cream sauce.", ramen:"RAMEN", ramen_desc:"Beef / chicken / tofu / prawns, udon noodles and toppings.", curry:"THAI CURRY", curry_desc:"Vegetables, coconut milk, curry paste and udon noodles.",
      offer_label:"04 / OFFER", offer_title:"Meet us<br><em>at the table.</em>", offer_text:"Delivery, takeaway, reservations, garden and catering.", reservation:"RESERVATION", call:"CALL US", catering:"CATERING",
      reviews_label:"05 / REVIEWS", reviews_title:"Guests <em>speak.</em>", google:"GOOGLE", more_reviews:"SEE MORE REVIEWS ↗",
      gallery_label:"06 / GALLERY", gallery_title:"Montownia<br><em>through the lens.</em>", photos:"12 PHOTOS",
      contact_label:"07 / CONTACT", contact_title:"See you<br><em>at Popularna.</em>", hours:"OPENING HOURS", map:"OPEN MAP ↗",
      shortcuts:"SHORTCUTS", contact:"CONTACT", follow:"FOLLOW US", presentation:"PRESENTATION WEBSITE",
      footer_desc:"We create, compose and assemble… flavours!", close:"Close", prev_photo:"Previous photo", next_photo:"Next photo"
    },
    uk: {
      nav_start:"ГОЛОВНА", nav_about:"ПРО НАС", nav_menu:"МЕНЮ", nav_lunch:"ЛАНЧ 7 ДНІВ", nav_reserve:"БРОНЮВАННЯ", nav_recommend:"СЬОГОДНІ РЕКОМЕНДУЄМО", nav_offer:"ПРОПОЗИЦІЯ", nav_reviews:"ВІДГУКИ", nav_gallery:"ГАЛЕРЕЯ",
      hero_eyebrow:"ВАРШАВА • ВЛОХИ", hero_title:"Смак,<br><em>що об'єднує.</em>", hero_text:"Ф'южн-кухня, свіжі інгредієнти та особлива атмосфера на Popularna 71.", hero_menu:"ПЕРЕГЛЯНУТИ МЕНЮ", hero_video:"ВІДЕО", hero_scroll:"ГОРТАЙТЕ ↓",
      about_label:"01 / ПРО НАС", about_eyebrow:"MONTOWNIA SMAKÓW", about_title:"Більше ніж<br><em>ресторан.</em>", about_p1:"Montownia Smaków — атмосферне місце у Варшаві, де сучасний інтер'єр поєднується з кухнею, сповненою різноманітних смаків.", about_p2:"У меню ви знайдете бургери, пасту, рамен, карі, реберця, салати, десерти та сезонні страви.", about_gallery:"ПЕРЕГЛЯНУТИ ГАЛЕРЕЮ", quote_author:"ДЖОРДЖ БЕРНАРД ШОУ",
      video_title:"Смак починається<br><em>на кухні.</em>", video_note:"MONTOWNIA SMAKÓW · ВІДЕО",
      menu_label:"02 / МЕНЮ", menu_title:"Наше <em>меню.</em>", menu_intro:"Переглядайте меню сторінка за сторінкою.", full_menu:"ПОВНЕ МЕНЮ ↗", menu_prev:"Попередня сторінка меню", menu_next:"Наступна сторінка меню",
      lunch_label:"03 / ЛАНЧ НА СЬОГОДНІ", lunch_title:"Ланч <em>на сьогодні.</em>", lunch_intro:"Пропозиція автоматично змінюється щодня. Сторінка сама визначає поточний день.", lunch_meta:"суп + друга страва", lunch_hours:"ЛАНЧ: 11:00–16:00", lunch_soup:"СУП", lunch_main:"ГОЛОВНА СТРАВА", lunch_set:"ЛАНЧ-КОМПЛЕКТ", lunch_takeaway:"З собою: +2,50 zł за комплект", lunch_note:"Страва дня може змінюватися. Перевірте актуальну пропозицію телефоном або в офіційних профілях Montownia Smaków.",
      rec_label:"04 / СЬОГОДНІ РЕКОМЕНДУЄМО", rec_eyebrow:"ВИБІР ШЕФА", rec_title:"Сьогодні<br><em>рекомендуємо.</em>", rec_intro:"Сторінка автоматично вибирає рекомендацію на сьогодні — без ручного перемикання.", selected:"РЕКОМЕНДУЄМО СЬОГОДНІ",
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
    applyDailyPick(lang);
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

  /* 05. LOCAL VIDEO — reliable local MP4 playback */
  const siteVideo = $("#siteVideo");
  if (siteVideo) {
    const videoStart = 27;
    const showVideo = () => siteVideo.closest(".video-section")?.classList.remove("video-unavailable");
    const startVideo = () => {
      try {
        showVideo();
        if (Number.isFinite(siteVideo.duration) && siteVideo.duration > videoStart + 1 && siteVideo.currentTime < 1) {
          siteVideo.currentTime = videoStart;
        }
        const promise = siteVideo.play();
        if (promise?.catch) promise.catch(() => {});
      } catch (_) {}
    };
    siteVideo.addEventListener("loadeddata", () => {
      showVideo();
      if (Number.isFinite(siteVideo.duration) && siteVideo.duration > videoStart + 1) siteVideo.currentTime = videoStart;
      startVideo();
    });
    siteVideo.addEventListener("canplay", startVideo, { once:true });
    siteVideo.addEventListener("error", () => {
      const section = siteVideo.closest(".video-section");
      if (section) section.classList.add("video-unavailable");
    }, true);
    siteVideo.addEventListener("ended", () => {
      if (siteVideo.loop) {
        try { siteVideo.currentTime = videoStart; } catch (_) {}
        startVideo();
      }
    });
    siteVideo.addEventListener("click", () => {
      if (siteVideo.paused) startVideo();
    });
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

  /* 07. TODAY'S RECOMMENDATION — AUTOMATIC BY WEEKDAY */
  const recommendTitle = $("#recommendTitle"), recommendDesc = $("#recommendDesc"), recommendPrice = $("#recommendPrice"), recommendPhoto = $("#recommendPhoto");
  const lunchDayLabel=$("#lunchDayLabel"), lunchDayNote=$("#lunchDayNote"), lunchSoup=$("#lunchSoup"), lunchSoupDesc=$("#lunchSoupDesc"), lunchDish=$("#lunchDish"), lunchDishDesc=$("#lunchDishDesc"), lunchPrice=$("#lunchPrice"), lunchPhoto=$("#lunchPhoto");

  const dailyPicks = [
    {plDay:"PONIEDZIAŁEK",enDay:"MONDAY",ukDay:"ПОНЕДІЛОК", note:"CODZIENNIE NOWA OFERTA", title:"PIECZONE ŻEBERKA W BBQ", desc:"Frytki i sałatka winegret.", price:"57 zł", photo:"https://zjedz.my/storage/images/gallery/th_41ef46fa843cd7f47e713f725d418e7f627cad56.jpeg", alt:"Montownia Smaków — żeberka BBQ"},
    {plDay:"WTOREK",enDay:"TUESDAY",ukDay:"ВІВТОРОК", note:"CODZIENNIE NOWA OFERTA", title:"CARBONARA", desc:"Makaron, bekon, świeży tymianek, czosnek, cebula i sos śmietanowy.", price:"42 zł", photo:"https://zjedz.my/storage/images/gallery/th_10da999251f2de9b29b3875cc1dd403c0331292d.jpeg", alt:"Montownia Smaków — pasta"},
    {plDay:"ŚRODA",enDay:"WEDNESDAY",ukDay:"СЕРЕДА", note:"CODZIENNIE NOWA OFERTA", title:"RAMEN", desc:"Wołowina / kurczak / tofu / krewetki, makaron udon i dodatki.", price:"42 zł", photo:"https://zjedz.my/storage/images/gallery/th_064db5f54a56ac9ada18afe1e45a033152c63aac.jpeg", alt:"Montownia Smaków — danie"},
    {plDay:"CZWARTEK",enDay:"THURSDAY",ukDay:"ЧЕТВЕР", note:"CODZIENNIE NOWA OFERTA", title:"THAI CURRY", desc:"Warzywa, mleko kokosowe, pasta curry i makaron udon.", price:"45 zł", photo:"https://zjedz.my/storage/images/gallery/th_4ae778828138ce8ad0fcd7a1b3c7049a1dff33b2.jpg", alt:"Montownia Smaków — curry"},
    {plDay:"PIĄTEK",enDay:"FRIDAY",ukDay:"П’ЯТНИЦЯ", note:"CODZIENNIE NOWA OFERTA", title:"PIECZONE ŻEBERKA W BBQ", desc:"Frytki i sałatka winegret.", price:"57 zł", photo:"https://zjedz.my/storage/images/gallery/th_fb7c354e4b0d980fe79de27dd5d00251995c426f.jpg", alt:"Montownia Smaków — danie"},
    {plDay:"SOBOTA",enDay:"SATURDAY",ukDay:"СУБОТА", note:"MENU À LA CARTE", title:"RAMEN", desc:"Wołowina / kurczak / tofu / krewetki, makaron udon i dodatki.", price:"42 zł", photo:"https://zjedz.my/storage/images/gallery/th_3521a886aae3429d210c6eca0515b2fc9f7197a8.jpeg", alt:"Montownia Smaków — ramen"},
    {plDay:"NIEDZIELA",enDay:"SUNDAY",ukDay:"НЕДІЛЯ", note:"MENU À LA CARTE", title:"THAI CURRY", desc:"Warzywa, mleko kokosowe, pasta curry i makaron udon.", price:"45 zł", photo:"https://zjedz.my/storage/images/gallery/th_e328f7101e3abdd10e6f01c955f67a3dcd327459.jpeg", alt:"Montownia Smaków — danie"}
  ];

  const applyDailyPick = (lang) => {
    const index = (new Date().getDay() + 6) % 7; // Monday=0 ... Sunday=6
    const item = dailyPicks[index];
    const day = lang === "en" ? item.enDay : lang === "uk" ? item.ukDay : item.plDay;
    if (lunchDayLabel) lunchDayLabel.textContent = day;
    if (lunchDayNote) lunchDayNote.textContent = item.note;
    if (lunchSoup) lunchSoup.textContent = lang === "en" ? "Daily soup" : lang === "uk" ? "Суп дня" : "Zupa dnia";
    if (lunchSoupDesc) lunchSoupDesc.textContent = lang === "en" ? "Today's current offer" : lang === "uk" ? "Актуальна пропозиція дня" : "Aktualna propozycja dnia";
    if (lunchDish) lunchDish.textContent = lang === "en" ? "Lunch offer" : lang === "uk" ? "Ланч-пропозиція" : "Oferta lunchowa";
    if (lunchDishDesc) lunchDishDesc.textContent = lang === "en" ? "The exact lunch changes daily" : lang === "uk" ? "Точна пропозиція змінюється щодня" : "Dokładna oferta lunchowa zmienia się codziennie";
    if (lunchPrice) lunchPrice.textContent = index < 5 ? "31 zł" : item.price;
    if (lunchPhoto) { lunchPhoto.src=item.photo; lunchPhoto.alt=item.alt; }
    if (recommendTitle) recommendTitle.textContent = item.title;
    if (recommendDesc) recommendDesc.textContent = item.desc;
    if (recommendPrice) recommendPrice.textContent = item.price;
    if (recommendPhoto) { recommendPhoto.src=item.photo; recommendPhoto.alt=item.alt; }
  };

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
  const initialLang = localStorage.getItem("montownia-language") || "pl";
  applyLanguage(initialLang);
  applyDailyPick(initialLang);
});
