<?php $hash_prefix = (is_front_page() || is_home()) ? '' : home_url('/'); ?>

<footer
      class="grid grid-cols-1 lg:justify-items-center gap-9 bg-[#0b0b0a] px-[8vw] pb-5 pt-8.75 text-white md:grid-cols-2 lg:grid-cols-4"
    >
      <div class="flex flex-col gap-y-3 lg:col-span-1">
        <strong class="font-serif text-2xl font-medium"
          >MONTOWNIA SMAKÓW</strong
        >
        <p class="text-[0.625rem] text-[#999]" data-i18n="footer_desc">
          Tworzymy, komponujemy, montujemy… smaki!
        </p>
      </div>
      <div class="grid grid-cols-[auto_1fr] gap-2">
        <span
          class="mb-2 col-span-2 text-[0.56rem] tracking-[.18em] text-[#777]"
          data-i18n="shortcuts"
          >NA SKRÓTY</span
        ><a href="<?php echo $hash_prefix; ?>#oferta" data-i18n="nav_offer" class="text-[0.56rem]"
          >OFERTA</a
        ><a href="<?php echo $hash_prefix; ?>#o-nas" data-i18n="nav_about" class="text-[0.56rem]">O NAS</a
        ><a href="<?php echo $hash_prefix; ?>#video" data-i18n="nav_video" class="text-[0.56rem]">VIDEO</a
        ><a href="<?php echo home_url('/menu/'); ?>" data-i18n="nav_menu" class="text-[0.56rem]">MENU</a
        ><a href="<?php echo $hash_prefix; ?>#opinie" data-i18n="nav_reviews" class="text-[0.56rem]"
          >RECENZJE</a
        ><a href="<?php echo $hash_prefix; ?>#galeria" data-i18n="nav_gallery" class="text-[0.56rem]"
          >GALERIA</a
        >
      </div>
      <div class="flex flex-col gap-2">
        <span
          class="mb-2 text-[0.56rem] tracking-[.18em] text-[#777]"
          data-i18n="contact"
          >KONTAKT</span
        ><a href="tel:+48883199177" class="text-[0.56rem]">+48 883 199 177</a
        ><a href="mailto:biuro@montowniasmakow.pl" class="text-[0.56rem]"
          >biuro@montowniasmakow.pl</a
        ><small class="text-[9px] text-[#999]">Popularna 71, Warszawa</small>
      </div>
      <div class="flex flex-col gap-2">
        <span
          class="mb-2 text-[0.56rem] tracking-[.18em] text-[#777]"
          data-i18n="follow"
          >ŚLEDŹ NAS</span
        ><a
          href="https://www.instagram.com/montownia_smakow/"
          target="_blank"
          rel="noopener"
          class="text-[0.56rem]"
          >INSTAGRAM ↗</a
        ><a
          href="https://www.facebook.com/montowniasmakowwlochy/?locale=pl_PL"
          target="_blank"
          rel="noopener"
          class="text-[0.56rem]"
          >FACEBOOK ↗</a
        >
      </div>
      <div
        class="flex flex-col justify-between gap-2 border-t border-[#222] pt-4 text-[7px] tracking-[.12em] w-full text-[#777] md:col-span-2 lg:col-span-4 lg:flex-row"
      >
        <span>© <?php echo date('Y'); ?> MONTOWNIA SMAKÓW</span
        ><a href="<?php echo home_url('/polityka-prywatnosci/'); ?>" class="text-[0.625rem] underline" data-i18n="privacy">Polityka prywatności</a>
      </div>
    </footer>
