<?php
/*
Template Name: Nowy design (główna)
*/
?>
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Montownia Smaków – Restauracja w Warszawie | Popularna 71</title>
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/logo-black.png" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/assets/logo-black.png" />
    <meta
      name="description"
      content="Montownia Smaków – restauracja w Warszawie przy Popularnej 71. Kuchnia fusion, burgery, ramen, pasta, curry, żeberka, catering. Rezerwacje: +48 883 199 177."
    />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <link rel="canonical" href="https://montowniasmakow.pl/" />

    <!-- og: -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Montownia Smaków" />
    <meta
      property="og:title"
      content="Montownia Smaków – Restauracja w Warszawie"
    />
    <meta
      property="og:description"
      content="Kuchnia fusion, burgery, ramen, pasta, curry i wyjątkowa atmosfera przy Popularnej 71 w Warszawie."
    />
    <meta property="og:url" content="https://montowniasmakow.pl/" />
    <meta property="og:locale" content="pl_PL" />
    <meta
      property="og:image"
      content="<?php echo get_template_directory_uri(); ?>/assets/wnentrze-1.avif"
    />

    <!-- twitter: -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Montownia Smaków – Restauracja w Warszawie"
    />
    <meta
      name="twitter:description"
      content="Restauracja Montownia Smaków, Popularna 71, Warszawa."
    />
    <meta
      name="twitter:image"
      content="<?php echo get_template_directory_uri(); ?>/assets/wnentrze-1.avif"
    />

    <!-- links -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap"
      rel="stylesheet"
    />

    <!-- schema -->
    <script type="application/ld+json">
    <?php 
      $schema_file = get_template_directory() . '/schema.json';
      if (file_exists($schema_file)) {
          echo file_get_contents($schema_file);
      }
    ?>
    </script>
    <?php wp_head(); ?>
  </head>
  <body class="relative bg-paper font-sans text-[#151513] selection:bg-gold">
    <div
      id="pageLoader"
      aria-hidden="true"
      class="fixed inset-0 z-9999 grid place-items-center bg-black duration-200"
    >
      <span
        class="grid size-14.5 place-items-center rounded-full border border-white font-serif text-2xl font-medium text-white"
        >M</span
      >
    </div>

    <?php get_header(); ?>

    <main>
      <section
        id="start"
        class="relative overflow-hidden flex items-center text-white"
      >
        <img
          src="<?php echo get_template_directory_uri(); ?>/assets/wnentrze-1.avif"
          alt="Wnętrze"
          fetchpriority="high"
          loading="eager"
          class="absolute z-10 inset-0 w-full max-w-[100vw] h-full object-cover animate-hero-first"
        />

        <img
          src="<?php echo get_template_directory_uri(); ?>/assets/backg.webp"
          alt="Lunch"
          loading="lazy"
          class="absolute z-10 inset-0 w-full h-full max-w-[100vw] object-cover opacity-0 animate-hero-show"
          style="animation-delay: 6s"
        />

        <img
          src="<?php echo get_template_directory_uri(); ?>/assets/backg-2.webp"
          alt="Lunch"
          loading="lazy"
          class="absolute z-10 inset-0 w-full h-full max-w-[100vw] object-cover opacity-0 animate-hero-show"
          style="animation-delay: 12s"
        />
        <div
          class="absolute inset-0 bg-[linear-gradient(24deg,rgba(0,0,0,1)_0%,rgba(48,48,48,1)_83%)]"
        ></div>
        <div class="relative flex flex-col gap-y-5 z-10 pl-[8vw] py-40">
          <p
            class="text-[0.57rem] font-bold tracking-[.22em]"
            data-i18n="hero_eyebrow"
          >
            WARSZAWA • WŁOCHY
          </p>
          <h1
            class="text-[clamp(58px,8vw,118px)] font-medium leading-[.88]"
            data-i18n="hero_title"
          >
            SMAK,<br />KTÓRY ŁĄCZY NAS.
          </h1>
          <p
            class="max-w-137.5 leading-[1.7] text-[#ddd]"
            data-i18n="hero_text"
          >
            Kuchnia fusion, świeże składniki i wyjątkowa atmosfera przy
            Popularnej 71.
          </p>
          <div class="flex flex-wrap gap-2">
            <a
              href="<?php echo home_url('/menu/'); ?>"
              class="inline-flex items-center justify-between gap-6 bg-cream px-4.5 py-3.5 text-[0.57rem] font-bold tracking-[.13em] text-[#111] transition hover:-translate-y-0.5"
              ><span data-i18n="hero_menu">ZOBACZ MENU</span
              ><span class="text-[15px] font-normal">↓</span></a
            >
            <a
              href="https://www.facebook.com/montowniasmakowwlochy/?locale=pl_PL"
              target="_blank"
              rel="noopener"
              class="inline-flex min-h-11 items-center justify-between gap-5 border border-white/45 bg-transparent px-4.5 py-3.5 text-[9px] font-bold tracking-[.13em] text-white transition hover:bg-white hover:text-[#111]"
              ><span data-i18n="hero_today">ZOBACZ, CO OFERUJEMY DZISIAJ</span
              ><span class="text-[15px] font-normal">↗</span></a
            >
          </div>
        </div>
        <div
          class="absolute bottom-7 left-[5vw] right-[5vw] z-10 flex justify-between text-[0.5rem] tracking-[.18em]"
        >
          <span>POPULARNA 71</span
          ><span data-i18n="hero_scroll">PRZEWIŃ ↓</span>
        </div>
      </section>

      <section
        id="oferta"
        class="grid place-items-center bg-blackfood px-[8vw] py-30 text-center text-cream"
      >
        <div class="max-w-180 grid gap-y-5">
          <div
            class="text-[0.6rem] text-light-gold font-bold tracking-[.22em]"
            data-i18n="offer_label"
          >
            01 / OFERTA
          </div>
          <h2
            class="font-serif text-[clamp(48px,6.4vw,88px)] font-medium leading-[.92]"
            data-i18n="offer_title"
          >
            Spotkajmy się<br /><em class="font-normal">przy stole.</em>
          </h2>
          <p class="leading-[1.7] text-[#aaa]" data-i18n="offer_text">
            Dostawa, na wynos, rezerwacje, ogródek i catering.
          </p>
          <div
            class="mt-2.5 grid grid-cols-2 gap-2 *:border *:border-[#444] *:px-4 *:py-3 *:text-[0.56rem] *:tracking-[.15em] *:transition *:hover:bg-paper *:hover:text-[#111]"
          >
          <a href="tel:+48883199177" data-i18n="call">ZADZWOŃ</a>
          <a href="mailto:biuro@montowniasmakow.pl" data-i18n="reservation">NAPISZ</a>
            <a href="<?php echo home_url('/catering/'); ?>" class="col-span-2" data-i18n="catering"
              >CATERING</a
            >
          </div>
        </div>
      </section>

      <section id="o-nas" class="bg-paper px-[8vw] py-30">
        <div
          class="text-[0.56rem] text-light-gold font-bold tracking-[.22em]"
          data-i18n="about_label"
        >
          02 / O NAS
        </div>
        <div class="pt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[10vw]">
          <div class="grid grid-rows-[auto_1fr] gap-y-4">
            <p
              class="text-[0.56rem] font-bold tracking-[.22em]"
              data-i18n="about_eyebrow"
            >
              MONTOWNIA SMAKÓW
            </p>
            <h2
              class="text-light-gold font-serif text-[clamp(48px,6.4vw,88px)] font-medium leading-[.92]"
              data-i18n="about_title"
            >
              Więcej niż<br /><em class="font-normal">restauracja.</em>
            </h2>
          </div>
          <div
            class="max-w-142.5 flex flex-col gap-y-5 leading-[1.75] text-[#5e5a52]"
          >
            <p data-i18n="about_p1">
              Montownia Smaków to restauracja na <b>Popularnej 71</b> w Warszawskich Włochach, stworzona z miłości do dobrego jedzenia, swobodnej atmosfery i spotkań przy wspólnym stole.
            </p>
            <p data-i18n="about_p2">
              Inspirujemy się kuchniami z różnych stron świata, łącząc znane smaki z nowoczesnym spojrzeniem. W naszej kuchni znajdziesz zarówno klasyczne dania, jak i autorskie propozycje, które potrafią zaskoczyć.
            </p>
            <p data-i18n="about_p2">
              Stawiamy na dobry produkt, staranne przygotowanie I smak, który zostaje w pamięci.
            </p>
            <p data-i18n="about_p2">
              Bo restauracja to nie tylko to, co pojawia się na talerzu. To również atmosfera, ludzie i chwile, które tworzą się przy stole.
            </p>
            <a
              href="#galeria"
              class="inline-flex items-center w-fit gap-4.25 border-b border-[#aaa] pb-2 text-[0.56rem] font-bold tracking-[.15em]"
              data-i18n="about_gallery"
              >ZOBACZ GALERIĘ <span class="text-base">→</span></a
            >
          </div>
        </div>
        <figure
          class="mx-auto flex flex-col gap-y-5 mt-50 text-center font-serif text-[clamp(27px,4vw,52px)] font-medium leading-[1.12]"
        >
          <blockquote>
            <p data-i18n="quote_cite">
              „Nie ma bardziej szczerej miłości<br />
              <em>niż miłość do jedzenia…”</em>
            </p>
          </blockquote>
          <figcaption>
            <cite
              class="block font-sans text-[0.56rem] font-medium tracking-[.17em] text-[#777]"
              data-i18n="quote_author"
              >GEORGE BERNARD SHAW</cite
            >
          </figcaption>
        </figure>
      </section>

      <section id="video" class="bg-blackfood">
        <div class="relative h-[72vh] min-h-130 overflow-hidden bg-[#080808]">
          <video
            id="siteVideo"
            autoplay
            muted
            playsinline
            preload="metadata"
            poster="<?php echo get_template_directory_uri(); ?>/assets/video-poster.jpg"
            loop
            class="absolute inset-0 block h-full w-full object-cover"
            aria-label="Film Montownia Smaków"
          >
            <source src="<?php echo get_template_directory_uri(); ?>/assets/video.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje odtwarzania wideo.
          </video>
          <div
            class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.22),transparent_72%),linear-gradient(0deg,rgba(0,0,0,.42),transparent_60%)]"
          ></div>
          <div
            class="absolute flex flex-col gap-y-2.5 bottom-[10%] left-[6%] text-white"
          >
            <span
              class="text-[0.56rem] text-light-gold tracking-[.17em]"
              data-i18n="video_section_label"
              >03 / VIDEO</span
            >
            <h2
              class="font-serif text-[clamp(42px,6vw,78px)] font-medium leading-[.94]"
              data-i18n="video_title"
            >
              Smak zaczyna się<br /><em>w kuchni.</em>
            </h2>
          </div>
          <div
            class="absolute bottom-7 right-7 text-[0.56rem] tracking-[.17em] text-white"
            data-i18n="video_note"
          >
            MONTOWNIA SMAKÓW
          </div>
        </div>
      </section>

      <section id="opinie" class="bg-paper px-[8vw] py-30">
        <div
          class="flex mb-15 flex-col items-start justify-between gap-7 md:flex-row md:items-end"
        >
          <div class="flex flex-col gap-y-4.5">
            <div
              class="text-[0.56rem] text-light-gold font-bold tracking-[.22em]"
              data-i18n="reviews_label"
            >
              05 / RECENZJE
            </div>
            <h2
              class="font-serif text-[clamp(48px,6.4vw,88px)] font-medium leading-[.92]"
              data-i18n="reviews_title"
            >
              Goście <em>mówią.</em>
            </h2>
          </div>
          <div class="flex items-center gap-3.5">
            <strong class="font-serif text-6xl font-medium">4.6</strong
            ><span class="text-xs tracking-widest"
              >★★★★★<small
                class="mt-1 block font-sans text-[0.56rem] text-[#777]"
                data-i18n="google"
                >GOOGLE</small
              ></span
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4.5 md:grid-cols-3">
          <article class="flex flex-col bg-[#e7e1d7] p-7">
            <span class="font-serif text-6xl leading-[.6]">“</span>
            <p class="font-serif text-xl font-medium leading-[1.35]">
              Świetne miejsce z genialnym klimatem. Pyszne jedzenie i
              profesjonalna obsługa.
            </p>
          </article>
          <article class="flex flex-col bg-[#e7e1d7] p-7">
            <span class="font-serif text-6xl leading-[.6]">“</span>
            <p class="font-serif text-xl font-medium leading-[1.35]">
              Klimat, obsługa super. Duże porcje i bardzo ciekawe menu.
            </p>
          </article>
          <article class="flex flex-col bg-[#e7e1d7] p-7">
            <span class="font-serif text-6xl leading-[.6]">“</span>
            <p class="font-serif text-xl font-medium leading-[1.35]">
              Przytulny lokal, miła obsługa i jedzenie, do którego chce się
              wracać.
            </p>
          </article>
        </div>
        <a
          href="https://maps.app.goo.gl/dJ8x2fMRj1nu7QVF7"
          target="_blank"
          rel="noopener"
          class="mx-auto mt-12 block w-max border-b border-[#aaa] pb-2 text-[0.56rem] font-bold tracking-[.15em]"
          data-i18n="more_reviews"
          >ZOBACZ WIĘCEJ OPINII</a
        >
      </section>

      <section id="galeria" class="bg-[#e6e0d6] px-[8vw] py-30">
        <div
          class="flex mb-14 flex-col items-start justify-between gap-7 md:flex-row md:items-end"
        >
          <div class="flex flex-col gap-y-4.5">
            <div
              class="text-[0.56rem] text-light-gold font-bold tracking-[.22em]"
              data-i18n="gallery_label"
            >
              06 / GALERIA
            </div>
            <h2
              class="font-serif text-[clamp(48px,6.4vw,88px)] font-medium leading-[.92]"
              data-i18n="gallery_title"
            >
              Montownia<br /><em>w obiektywie.</em>
            </h2>
          </div>
          <span
            class="text-[0.56rem] tracking-[.16em] text-blackfood"
            data-i18n="photos"
            >10 ZDJĘĆ</span
          >
        </div>

        <div
          id="galleryGrid"
          class="grid grid-cols-2 auto-rows-36.5 gap-2.5 md:grid-cols-4 md:auto-rows-52.5"
        >
          <button
            class="gallery-card group col-span-2 row-span-2 overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="0"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/wnentrze-1.avif"
              alt="Montownia Smaków — wnętrze"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="1"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-7.avif"
              alt="Montownia Smaków — napój"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="2"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-1.jpg"
              alt="Montownia Smaków — danie"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="3"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/danie-01.jpeg"
              alt="Montownia Smaków — danie"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="4"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-8.jpeg"
              alt="Montownia Smaków — pizza"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group col-span-2 row-span-2 overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="5"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-5.avif"
              alt="Montownia Smaków — danie"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="6"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-2.jpg"
              alt="Montownia Smaków — obiad"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="7"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-3.jpg"
              alt="Montownia Smaków — żeberka"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="8"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-4.jpg"
              alt="Montownia Smaków — danie"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            /></button
          ><button
            class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0"
            data-index="9"
          >
            <img
              width="1200"
              height="800"
              src="<?php echo get_template_directory_uri(); ?>/assets/lunch-6.jpeg"
              alt="Montownia Smaków — danie"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]"
            />
          </button>
        </div>
      </section>

      <section
        id="kontakt"
        class="grid grid-cols-1 bg-blackfood text-cream lg:grid-cols-2"
      >
        <div class="px-[8vw] flex flex-col gap-y-6 pb-15.5 pt-22.5 lg:py-22.5">
          <div
            class="text-[0.56rem] text-light-gold font-bold tracking-[.22em]"
            data-i18n="contact_label"
          >
            07 / KONTAKT
          </div>
          <h2
            class="font-serif text-[clamp(40px,6vw,60px)] font-medium leading-[.94]"
            data-i18n="contact_title"
          >
            Widzimy się<br />na Popularnej.
          </h2>
          <p class="leading-[1.8] text-[#aaa]">
            Popularna 71<br />02-473 Warszawa
          </p>
          <div class="flex flex-col gap-2">
            <a href="tel:+48883199177" class="text-sm hover:text-[#e6a064]"
              >+48 883 199 177</a
            ><a
              href="mailto:biuro@montowniasmakow.pl"
              class="text-sm hover:text-[#e6a064]"
              >biuro@montowniasmakow.pl</a
            >
          </div>
        </div>
        <div class="flex flex-col gap-y-7.5 px-[8vw] pb-19 lg:py-22.5">
          <div class="border-t border-[#363632] pt-5">
            <span
              class="text-[0.56rem] tracking-[.18em] text-[#999]"
              data-i18n="hours"
              >GODZINY OTWARCIA</span
            >
            <p
              class="flex justify-between border-b border-[#333] py-3 text-[#aaa]"
            >
              <b class="text-[9px] text-white">PN–PT</b
              ><em class="not-italic">10:00 — 21:00</em>
            </p>
            <p
              class="flex justify-between border-b border-[#333] py-3 text-[#aaa]"
            >
              <b class="text-[9px] text-white">SB</b
              ><em class="not-italic">11:00 — 21:00</em>
            </p>
            <p
              class="flex justify-between border-b border-[#333] py-3 text-[#aaa]"
            >
              <b class="text-[9px] text-white">ND</b
              ><em class="not-italic">12:00 — 21:00</em>
            </p>
          </div>
          <div class="relative h-87.5 overflow-hidden border border-[#333]">
            <iframe
              width="800"
              height="450"
              title="Google Maps — Montownia Smaków"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.2730418528604!2d20.9314312761722!3d52.202085459718965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471935998daa6395%3A0x84a24a3b836c26da!2sMontownia%20Smak%C3%B3w!5e0!3m2!1sen!2spl!4v1789336110789!5m2!1sen!2spl"
              class="h-full w-full border-0 saturate-[.7]"
            ></iframe
            ><a
              href="https://maps.app.goo.gl/dJ8x2fMRj1nu7QVF7"
              target="_blank"
              rel="noopener"
              class="absolute bottom-3 right-3 border border-white/30 bg-black/70 px-3 py-2 text-[0.56rem] tracking-[.15em]"
              data-i18n="map"
              >OTWÓRZ MAPĘ ↗</a
            >
          </div>
        </div>
      </section>
    </main>

    <?php get_footer(); ?>

    <div
      id="galleryModal"
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-500 hidden items-center justify-center bg-black/95 p-6 opacity-0 transition-opacity"
    >
      <button
        id="galleryClose"
        class="absolute right-5 top-3 z-10 text-4xl text-white"
        aria-label="Close"
      >
        ×</button
      ><button
        id="galleryPrev"
        class="absolute left-0 z-10 p-3 text-3xl text-white"
        aria-label="Previous photo"
      >
        ←</button
      ><img
        id="galleryModalImage"
        width="1200"
        height="800"
        src=""
        alt="Montownia Smaków — zdjęcie"
        class="max-h-[78vh] max-w-[90vw] object-contain"
      /><button
        id="galleryNext"
        class="absolute right-0 z-10 p-3 text-3xl text-white"
        aria-label="Next photo"
      >
        →</button
      ><span
        id="galleryCounter"
        class="absolute bottom-5 text-[9px] tracking-[.15em] text-white"
        >01 / 10</span
      >
    </div>
    <?php wp_footer(); ?>
  </body>
</html>
