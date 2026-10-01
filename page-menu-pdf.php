<?php
/*
Template Name: Nowy design (Menu PDF)
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
    <style> 
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
      iframe {
        border: none;
        width: 100%;
        height: 100%;
      }
    </style>
    <?php wp_head(); ?>
  </head>
  <body>
    <iframe title="Menu" src="<?php echo get_template_directory_uri(); ?>/assets/pdf/main-menu.pdf"></iframe>
    <?php wp_footer(); ?>
  </body>
</html>