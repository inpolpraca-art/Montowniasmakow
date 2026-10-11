<?php
/*
Template Name: Nowy design (catering)
*/
?>
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Catering | Montownia Smaków</title>
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
    <link rel="canonical" href="<?php echo home_url('/catering/'); ?>" />

    <!-- og: -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Montownia Smaków catering" />
    <meta
      property="og:title"
      content="Montownia Smaków – Restauracja w Warszawie"
    />
    <meta
      property="og:description"
      content="Kuchnia fusion, burgery, ramen, pasta, curry i wyjątkowa atmosfera przy Popularnej 71 w Warszawie."
    />
    <meta property="og:url" content="<?php echo home_url('/catering/'); ?>" />
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
    <?php get_header(); ?>

    <main>
      <section id="w-lokalu" class="bg-paper px-[8vw] py-30">
        <div class="flex mb-14 flex-col items-start justify-between gap-7 md:flex-row md:items-end">
          <div class="flex flex-col gap-y-4.5">
            <div class="text-[0.56rem] text-light-gold font-bold tracking-[.22em]" data-i18n="venue_label">01 / W LOKALU</div>
            <h1 class="font-serif text-[clamp(48px,6.4vw,88px)] font-medium leading-[.92]" data-i18n="venue_title_1">
              Dobre rzeczy zaczynają się przy stole.
            </h1>
          </div>
          <p class="max-w-120 leading-[1.7] text-[#777] md:pb-1" data-i18n="venue_desc">
            Tworzymy miejsce na codzienne przyjemności, rodzinne uroczystości i wyjątkowe spotkania. Dobra kuchnia i gościnność, które zostają w pamięci na długo.
        </p>
        </div>
        <div id="galleryGrid" class="grid grid-cols-2 auto-rows-36.5 gap-2.5 md:grid-cols-4 md:auto-rows-52.5">
              <button class="gallery-card group col-span-2 row-span-2 overflow-hidden border-0 bg-[#ddd] p-0" data-index="0">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/oferta-lokal.avif" alt="Montownia Smaków — oferta" data-i18n-alt="alt_interior" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="1">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-2.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="2">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-3.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="3">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-4.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="4">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-5.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group col-span-2 row-span-2 overflow-hidden border-0 bg-[#ddd] p-0" data-index="5">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-6.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="6">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-7.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="7">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-8.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="8">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-9.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
              <button class="gallery-card group overflow-hidden border-0 bg-[#ddd] p-0" data-index="9">
                <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/lokal-1.avif" alt="Montownia Smaków — danie" data-i18n-alt="alt_dish" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
              </button>
        </div>
      </section>

  <!-- 02 / CATERING -->
      <section id="catering" class="bg-blackfood px-[8vw] py-30 text-cream">
        <div class="flex mb-14 flex-col items-start justify-between gap-7 md:flex-row md:items-end">
          <div class="flex flex-col gap-y-4.5">
            <div class="text-[0.56rem] text-light-gold font-bold tracking-[.22em]" data-i18n="catering_label">02 / CATERING</div>
            <h2 class="font-serif text-[clamp(48px,6.4vw,88px)] font-medium leading-[.92]" data-i18n="catering_title_1">
              Smak, który przyjeżdża do Ciebie.
            </h2>
          </div>
          <p class="max-w-120 leading-[1.7] text-[#aaa] md:pb-1" data-i18n="catering_desc">
            Ty wybierasz miejsce i okazję, my dbamy o resztę. Przygotowujemy dopracowane menu na spotkania firmowe, rodzinne uroczystości i wyjątkowe wydarzenia - od pierwszego kęsa po ostatni toast.
          </p>
        </div>

        <div id="galleryGrid" class="grid grid-cols-2 auto-rows-36.5 gap-2.5 md:grid-cols-4 md:auto-rows-52.5">
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="10">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-1.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="11">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-2.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group col-span-2 row-span-2 overflow-hidden border-0 bg-[#222] p-0" data-index="12">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/oferta-catering.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="13">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-3.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="14">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-4.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="15">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-5.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="16">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-6.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group col-span-2 row-span-2 overflow-hidden border-0 bg-[#222] p-0" data-index="17">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-9.avif" alt="Montownia Smaków" data-i18n-alt="alt_interior" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="18">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-7.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
          <button class="gallery-card group overflow-hidden border-0 bg-[#222] p-0" data-index="19">
            <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/assets/catering/catering-8.avif" alt="Catering Montownia Smaków" data-i18n-alt="alt_catering" loading="lazy" decoding="async" class="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.045] group-hover:brightness-[.82]" />
          </button>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-[18px] md:grid-cols-3">
          <article class="border-t border-[#363632] pt-5">
            <span class="text-[0.56rem] tracking-[.18em] text-[#777]" data-i18n="for_whom_label">DLA KOGO</span>
            <p class="mt-3 text-sm text-[#aaa]" data-i18n="for_whom_text">Firmy, urodziny, komunie, imprezy rodzinne i wydarzenia specjalne.</p>
          </article>
          <article class="border-t border-[#363632] pt-5">
            <span class="text-[0.56rem] tracking-[.18em] text-[#777]" data-i18n="offer_label">OFERTA</span>
            <p class="mt-3 text-sm text-[#aaa]" data-i18n="offer_text">Dania, przekąski, zestawy oraz indywidualnie przygotowane menu.</p>
          </article>
          <article class="border-t border-[#363632] pt-5">
            <span class="text-[0.56rem] tracking-[.18em] text-[#777]" data-i18n="location_label">WARSZAWA</span>
            <p class="mt-3 text-sm text-[#aaa]" data-i18n="location_text">Catering przygotowywany przez Montownię Smaków.</p>
          </article>
        </div>
      </section>

  <!-- 03 / KONTAKT -->
      <section id="kontakt" class="grid grid-cols-1 bg-blackfood text-cream lg:grid-cols-2">
        <div class="px-[8vw] flex flex-col gap-y-6 pb-15.5 pt-22.5 lg:py-22.5">
          <div class="text-[0.56rem] text-light-gold font-bold tracking-[.22em]" data-i18n="contact_label">
            03 / KONTAKT
          </div>
          <h2 class="font-serif text-[clamp(40px,6vw,60px)] font-medium leading-[.94]" data-i18n="contact_title_1">
            Widzimy się na Popularnej.
          </h2>
          <p class="leading-[1.8] text-[#aaa]">
            <span data-i18n="address_street">Popularna 71</span><br /><span data-i18n="address_city">02-473 Warszawa</span>
          </p>
          <div class="flex flex-col gap-2">
            <a href="tel:+48883199177" class="text-sm hover:text-[#e6a064]">+48 883 199 177</a>
            <a href="mailto:biuro@montowniasmakow.pl" class="text-sm hover:text-[#e6a064]">biuro@montowniasmakow.pl</a>
          </div>
        </div>
        <div class="flex flex-col gap-y-7.5 px-[8vw] pb-19 lg:py-22.5">
          <div class="border-t border-[#363632] pt-5">
            <span class="text-[0.56rem] tracking-[.18em] text-[#999]" data-i18n="hours_label">GODZINY OTWARCIA</span>
            <p class="flex justify-between border-b border-[#333] py-3 text-[#aaa]">
              <b class="text-[9px] text-white" data-i18n="day_mon_fri">PN–PT</b>
              <em class="not-italic">10:00 — 21:00</em>
            </p>
            <p class="flex justify-between border-b border-[#333] py-3 text-[#aaa]">
              <b class="text-[9px] text-white" data-i18n="day_sat">SB</b>
              <em class="not-italic">11:00 — 21:00</em>
            </p>
            <p class="flex justify-between border-b border-[#333] py-3 text-[#aaa]">
              <b class="text-[9px] text-white" data-i18n="day_sun">ND</b>
              <em class="not-italic">12:00 — 21:00</em>
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
            ></iframe>
            <a
              href="https://maps.app.goo.gl/dJ8x2fMRj1nu7QVF7"
              target="_blank"
              rel="noopener"
              class="absolute bottom-3 right-3 border border-white/30 bg-black/70 px-3 py-2 text-[0.56rem] tracking-[.15em]"
              data-i18n="map_button"
            >OTWÓRZ MAPĘ ↗</a>
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
