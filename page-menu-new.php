<?php
/*
Template Name: Nowy design (Menu)
*/
?>
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Menu | Montownia Smaków</title>
    <meta
      name="description"
      content="Menu Montownia Smaków — zobacz kartę dań i napojów w wysokiej jakości. Otwórz pełny podgląd i wygodnie powiększ każdą stronę menu."
    />
    <meta name="theme-color" content="#0b0b0b" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="<?php echo home_url('/menu/'); ?>" />

    <!-- og: -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Menu | Montownia Smaków" />
    <meta property="og:site_name" content="Menu | Montownia Smaków" />
    <meta
      property="og:description"
      content="Zobacz menu Montownia Smaków w wysokiej jakości."
    />
    <meta property="og:url" content="<?php echo home_url('/menu/'); ?>" />
    <meta property="og:locale" content="pl_PL" />
    <meta
      property="og:image"
      content="<?php echo get_template_directory_uri(); ?>/assets/menu/pl-1.webp"
    />

    <!-- twitter: -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Montownia Smaków – Menu"
    />
    <meta
      name="twitter:description"
      content="Restauracja Montownia Smaków, Popularna 71, Warszawa."
    />
    <meta
      name="twitter:image"
      content="<?php echo get_template_directory_uri(); ?>/assets/menu/pl-1.webp"
    />

    <!-- favicon -->
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/logo-black.png" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/assets/logo-black.png" />
    <?php wp_head(); ?>
  </head>
  <body
    class="min-h-screen bg-[#0b0b0b] text-[#f5f1e9] antialiased selection:bg-[#f5f1e9] selection:text-[#0b0b0b]"
  >
    <?php get_header(); ?>

    <main>
      <section
        class="mx-auto max-w-342.5 px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32"
      >
        <div class="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <p
              class="mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-white/45"
              data-i18n="section_number"
            >
              04 / Menu
            </p>
            <h1
              class="font-serif text-[clamp(4rem,9vw,8.5rem)] leading-[.82] tracking-[-0.055em]"
            >
              <span data-i18n="hero_title_1">Nasze </span
              ><span class="italic" data-i18n="hero_title_italic">menu.</span>
            </h1>
          </div>
          <div class="max-w-md lg:pb-2">
            <p
              class="text-base leading-7 text-white/55 sm:text-lg"
              data-i18n="hero_description"
            >
              Nowa karta w jakości z pliku PDF. Kliknij stronę, aby otworzyć ją
              na pełnym ekranie i powiększyć bez utraty czytelności.
            </p>
          </div>
        </div>

        <div
          class="mt-16 flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span
            class="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40"
            data-i18n="menu_category_food"
            >Karta dań</span
          >
        </div>
      </section>

      <section
        class="mx-auto max-w-342.5 px-6 pb-28 lg:px-10"
        aria-label="Strony menu"
      >
        <div id="menuGrid" class="grid gap-5 md:grid-cols-2"></div>
      </section>

      <section class="border-y border-black/10 bg-[#eeeae2] text-[#111111]">
        <div class="mx-auto max-w-342.5 px-6 py-20 lg:px-10 lg:py-28">
          <div class="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p
                class="text-[10px] font-bold uppercase tracking-[0.32em] text-black/45"
                data-i18n="cta_location"
              >
                Montownia Smaków · Warszawa
              </p>
              <h2
                class="mt-5 max-w-3xl font-serif text-5xl leading-[.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
              >
                <span data-i18n="cta_title_1">Masz ochotę?</span><br /><span
                  class="italic"
                  data-i18n="cta_title_italic"
                  >Widzimy się przy stole.</span
                >
              </h2>
            </div>
            <div class="flex flex-wrap gap-3">
              <a
                href="tel:+48883199177"
                class="border border-black/25 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
                data-i18n="cta_call"
                >Zadzwoń</a
              >
              <a
                href="<?php echo home_url('/'); ?>#kontakt"
                class="border border-black/25 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
                data-i18n="cta_contact"
                >Kontakt</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>

    <?php get_footer(); ?>

    <div
      id="viewer"
      class="fixed inset-0 z-100 hidden bg-[#eeeae2] text-[#111111] opacity-0 transition-opacity duration-300"
      aria-hidden="true"
    >
      <div
        class="absolute inset-x-0 top-0 z-30 flex h-20.5 items-center justify-between border-b border-black/10 bg-[#eeeae2]/95 px-5 backdrop-blur-xl lg:px-8"
      >
        <div class="flex items-center gap-5">
          <button
            id="viewerBack"
            class="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/65 transition hover:text-black"
            aria-label="Wróć do menu"
            data-i18n-attr="aria-label:aria_back_to_menu"
          >
            <span
              class="text-xl transition-transform group-hover:-translate-x-1"
              >←</span
            >
            <span data-i18n="viewer_back">Menu</span>
          </button>
          <span class="hidden h-5 w-px bg-black/10 sm:block"></span>
          <span
            id="viewerTitle"
            class="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 sm:block"
            data-i18n="viewer_title"
            >Menu</span
          >
        </div>

        <div class="flex items-center gap-2">
          <button
            id="zoomOut"
            class="grid h-10 w-10 place-items-center border border-black/15 text-xl text-black/75 transition hover:bg-black hover:text-white"
            aria-label="Pomniejsz"
            data-i18n-attr="aria-label:aria_zoom_out"
          >
            −
          </button>
          <button
            id="zoomReset"
            class="h-10 min-w-17 border border-black/15 px-3 text-[10px] font-bold tracking-[0.12em] text-black/55 transition hover:bg-black hover:text-white"
            aria-label="Resetuj powiększenie"
            data-i18n-attr="aria-label:aria_zoom_reset"
          >
            100%
          </button>
          <button
            id="zoomIn"
            class="grid h-10 w-10 place-items-center border border-black/15 text-xl text-black/75 transition hover:bg-black hover:text-white"
            aria-label="Powiększ"
            data-i18n-attr="aria-label:aria_zoom_in"
          >
            +
          </button>
          <button
            id="viewerClose"
            class="ml-2 grid h-10 w-10 place-items-center bg-[#111111] text-xl font-light text-white transition hover:scale-105"
            aria-label="Zamknij"
            data-i18n-attr="aria-label:aria_close"
          >
            ×
          </button>
        </div>
      </div>

      <div
        id="viewerStage"
        class="absolute inset-0 overflow-hidden touch-none select-none bg-[#eeeae2] pt-20.5"
      >
        <div
          id="imageWrap"
          class="absolute left-1/2 top-[calc(50%+41px)] origin-center rounded-sm shadow-[0_18px_70px_rgba(0,0,0,0.16)] will-change-transform"
        >
          <canvas
            id="viewerCanvas"
            class="block max-w-none select-none"
          ></canvas>
          <img
            id="fallbackImage"
            src=""
            alt=""
            class="hidden max-w-none select-none"
            draggable="false"
          />
        </div>
      </div>

      <button
        id="prevMenu"
        class="absolute left-4 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center border border-black/15 bg-[#eeeae2]/90 text-3xl font-light text-black/75 transition hover:bg-black hover:text-white lg:left-8"
        aria-label="Poprzednia strona"
        data-i18n-attr="aria-label:aria_prev_page"
      >
        ‹
      </button>
      <button
        id="nextMenu"
        class="absolute right-4 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center border border-black/15 bg-[#eeeae2]/90 text-3xl font-light text-black/75 transition hover:bg-black hover:text-white lg:right-8"
        aria-label="Następna strona"
        data-i18n-attr="aria-label:aria_next_page"
      >
        ›
      </button>

      <div
        class="pointer-events-none absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 border border-black/10 bg-[#eeeae2]/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black/40 backdrop-blur sm:block"
        data-i18n="viewer_controls_hint"
      >
        Kółko = zoom · przeciągnij = przesuwanie · ← → = strony · Esc = zamknij
      </div>
    </div>

    <?php wp_footer(); ?>
  </body>
</html>
