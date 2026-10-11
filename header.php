<?php $hash_prefix = (is_front_page() || is_home()) ? '' : home_url('/'); ?>

<header
      id="siteHeader"
      class="flex sticky gap-x-4 top-0 z-100 text-white bg-neutral-900 py-2.5 items-center justify-between px-[8vw]"
    >
      <a
        href="<?php echo home_url('/'); ?>"
        aria-label="Montownia Smaków — start"
        class="font-black tracking-wider relative grid grid-cols-[auto_1fr] gap-x-1"
      >
        <img
          src="<?php echo get_template_directory_uri(); ?>/assets/logo-black.png"
          loading="eager"
          fetchpriority="high"
          alt="logo"
          width="64"
          height="64"
          class="rounded-full max-w-12 overflow-hidden border-full max-h-12 md:max-w-16 md:max-h-16"
        />
        <div class="flex text-[0.56rem] font-bold tracking-[.2em] pt-1.5 flex-col gap-y-1">
          <span>MONTOWNIA</span>
          <span>SMAKÓW</span>
        </div>
      </a>
      <div class="flex gap-x-2.5">
        <div
          class="flex items-center gap-1 rounded-full border *:cursor-pointer border-white/20 bg-black/20 p-1 *:min-h-7 *:min-w-5 *:rounded-full *:border-0 *:px-2 py-1.5 text-[0.5rem] font-bold tracking-[.12em]"
          aria-label="Language"
        >
          <button class="lang-btn text-[#111]" data-lang="pl" type="button">
            PL
          </button>
          <button
            class="lang-btn text-white/60 bg-transparent"
            data-lang="en"
            type="button"
          >
            EN
          </button>
          <button
            class="lang-btn text-white/60 bg-transparent"
            data-lang="uk"
            type="button"
          >
            UA
          </button>
        </div>
        <button
          id="mobileMenu"
          class="rounded-md border-0 bg-transparent p-2.5 lg:hidden"
          aria-label="Otwórz menu"
          aria-expanded="false"
          type="button"
        >
          <span
            class="mb-1.5 block h-px w-6 bg-white transition-transform"
          ></span
          ><span class="block h-px w-6 bg-white transition-transform"></span>
        </button>
      </div>
      <nav
        id="mainNav"
        class="absolute *:whitespace-nowrap top-full hidden left-0 lg:static lg:flex lg:z-auto justify-end w-full lg:max-w-160 text-[0.688rem] font-bold tracking-[.12em] *:inline-block *:hover:text-white/60 *:p-2 *:duration-200 items-center"
      >
        <a href="<?php echo home_url('/catering/'); ?>" data-i18n="nav_offer">OFERTA</a>
        <a href="<?php echo $hash_prefix; ?>#o-nas" data-i18n="nav_about">O NAS</a>
        <a href="<?php echo $hash_prefix; ?>#video" data-i18n="nav_video">VIDEO</a>
        <a href="<?php echo home_url('/menu/'); ?>" data-i18n="nav_menu">MENU</a>
        <a href="<?php echo $hash_prefix; ?>#opinie" data-i18n="nav_reviews">RECENZJE</a>
        <a href="<?php echo $hash_prefix; ?>#galeria" data-i18n="nav_gallery">GALERIA</a>
        <a href="tel:+48883199177" data-i18n="nav_reserve" class="border"
          >REZERWACJA</a
        >
      </nav>
    </header>