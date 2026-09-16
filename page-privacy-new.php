<?php
/*
Template Name: Nowy design (polityka prywatności)
*/
?>
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Polityka prywatności | Montownia Smaków — Warszawa</title>
    <meta
      name="description"
      content="Polityka prywatności Montownia Smaków w Warszawie. Informacje o przetwarzaniu danych osobowych, cookies, prawach użytkowników i kontakcie z administratorem."
    />
    <meta name="robots" content="index,follow" />
    <link
      rel="canonical"
      href="<?php echo home_url('/polityka-prywatnosci/'); ?>"
    />

    <!-- og: -->
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pl_PL" />
    <meta
      property="og:title"
      content="Polityka prywatności | Montownia Smaków"
    />
    <meta property="og:site_name" content="Polityka prywatności | Montownia Smaków" />
    <meta
      property="og:description"
      content="Informacje o prywatności i przetwarzaniu danych osobowych w Montownia Smaków."
    />
    <meta
      property="og:url"
      content="<?php echo home_url('/polityka-prywatnosci/'); ?>"
    />
    <meta
      property="og:image"
      content="<?php echo get_template_directory_uri(); ?>/assets/menu/pl-1.webp"
    />

    <!-- twitter: -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Montownia Smaków – polityka prywatności"
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
    <meta name="theme-color" content="#151515" />

    <?php wp_head(); ?>
  </head>

  <body
    class="bg-cream text-ink antialiased selection:bg-ink selection:text-gold"
  >
    <?php get_header(); ?>

    <main>
      <section
        class="bg-[#151515] px-6 pb-28 pt-20 text-white lg:px-10 lg:pb-36 lg:pt-28"
      >
        <div class="mx-auto max-w-340">
          <p
            class="mb-10 text-[10px] font-bold uppercase tracking-[0.32em] text-white/60"
          >
            08 / <span data-i18n="label">POLITYKA PRYWATNOŚCI</span>
          </p>
          <div class="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1
              class="max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-[6rem]"
            >
              <span data-i18n="hero1">Twoja prywatność.</span><br />
              <em class="font-serif font-normal" data-i18n="hero2"
                >Nasz obowiązek.</em
              >
            </h1>
            <p
              class="max-w-md pb-2 text-base leading-7 text-white/65 lg:text-lg"
              data-i18n="intro"
            >
              Jasne informacje o tym, jakie dane możemy przetwarzać, dlaczego to
              robimy i jakie prawa Ci przysługują.
            </p>
          </div>
        </div>
      </section>

      <section class="px-6 py-20 lg:px-10 lg:py-28">
        <div
          class="mx-auto grid max-w-340 gap-16 lg:grid-cols-[280px_1fr]"
        >
          <aside class="lg:sticky lg:top-32 lg:h-fit">
            <p
              class="text-[10px] font-bold uppercase tracking-[0.3em] text-muted"
            >
              MONTOWNIA SMAKÓW
            </p>
            <p
              class="mt-5 max-w-55 font-serif text-2xl leading-tight"
              data-i18n="side"
            >
              Informacje o prywatności i ochronie danych.
            </p>
            <p class="mt-8 text-xs leading-5 text-muted">
              Ostatnia aktualizacja: 15.09.2026
            </p>
          </aside>

          <div class="max-w-4xl space-y-20">
            <article id="administrator" class="scroll-mt-32">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                01 / <span data-i18n="s1t">ADMINISTRATOR</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s1h"
              >
                Kto odpowiada za Twoje dane?
              </h2>
              <div
                class="mt-8 grid gap-8 text-base leading-7 text-[#5f5b55] sm:grid-cols-2"
              >
                <div>
                  <p data-i18n="s1p">
                    Administratorem danych osobowych przetwarzanych w związku z
                    korzystaniem ze strony i kontaktem z restauracją jest
                    podmiot prowadzący Montownia Smaków.
                  </p>
                </div>
                <div class="border-l border-black/15 pl-6">
                  <p>Montownia Smaków</p>
                  <p>ul. Popularna 71<br />02-473 Warszawa, Polska</p>
                  <p class="mt-4">
                    <a
                      class="underline underline-offset-4 hover:no-underline"
                      href="tel:+48883199177"
                      >+48 883 199 177</a
                    ><br />
                    <a
                      class="underline underline-offset-4 hover:no-underline"
                      href="mailto:biuro@montowniasmakow.pl"
                      >biuro@montowniasmakow.pl</a
                    >
                  </p>
                </div>
              </div>
              <div
                class="mt-8 rounded-sm border border-black/10 bg-warm p-6 text-sm leading-6 text-[#5f5b55]"
              >
                <strong class="text-ink" data-i18n="legalNoteTitle"
                  >Ważne przed publikacją:</strong
                >
                <span data-i18n="legalNote"
                  >w miejsce nazwy marki należy wpisać pełną nazwę prawną
                  administratora (np. nazwę firmy lub przedsiębiorcy z
                  dokumentów rejestrowych). Pozostałe dane kontaktowe powinny
                  odpowiadać rzeczywistemu administratorowi.</span
                >
              </div>
            </article>

            <article id="data" class="scroll-mt-32">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                02 / <span data-i18n="s2t">DANE OSOBOWE</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s2h"
              >
                Jakie dane możemy przetwarzać?
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s2p"
              >
                W zależności od sposobu kontaktu możemy przetwarzać dane
                przekazane przez Ciebie, w szczególności:
              </p>
              <ul class="mt-6 grid gap-3 sm:grid-cols-2">
                <li class="border-t border-black/10 pt-4">
                  01 — <span data-i18n="d1">imię i nazwisko</span>
                </li>
                <li class="border-t border-black/10 pt-4">
                  02 — <span data-i18n="d2">numer telefonu</span>
                </li>
                <li class="border-t border-black/10 pt-4">
                  03 — <span data-i18n="d3">adres e-mail</span>
                </li>
                <li class="border-t border-black/10 pt-4">
                  04 —
                  <span data-i18n="d4">informacje dotyczące rezerwacji</span>
                </li>
                <li class="border-t border-black/10 pt-4">
                  05 — <span data-i18n="d5">treść przekazanej wiadomości</span>
                </li>
                <li class="border-t border-black/10 pt-4">
                  06 —
                  <span data-i18n="d6"
                    >dane techniczne, jeśli są rejestrowane przez wykorzystywane
                    usługi</span
                  >
                </li>
              </ul>
            </article>

            <article id="purpose">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                03 / <span data-i18n="s3t">CEL</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s3h"
              >
                Po co przetwarzamy dane?
              </h2>
              <ul class="mt-8 space-y-4 text-base leading-7 text-[#5f5b55]">
                <li>
                  —
                  <span data-i18n="p1"
                    >obsługa wiadomości, zapytań i rezerwacji;</span
                  >
                </li>
                <li>
                  —
                  <span data-i18n="p2"
                    >kontakt z klientem i realizacja usług;</span
                  >
                </li>
                <li>
                  —
                  <span data-i18n="p3"
                    >wypełnienie obowiązków wynikających z prawa;</span
                  >
                </li>
                <li>
                  —
                  <span data-i18n="p4"
                    >ochrona przed roszczeniami i zapewnienie
                    bezpieczeństwa;</span
                  >
                </li>
                <li>
                  —
                  <span data-i18n="p5"
                    >zapewnienie prawidłowego działania strony i
                    wykorzystywanych usług technicznych.</span
                  >
                </li>
              </ul>
            </article>

            <article id="legal">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                04 / <span data-i18n="s4t">PODSTAWA PRAWNA</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s4h"
              >
                Dlaczego możemy to robić?
              </h2>
              <div class="mt-8 space-y-4">
                <div class="border-t border-black/10 pt-5">
                  <strong>Art. 6 ust. 1 lit. b RODO</strong>
                  <p class="mt-2 text-[#5f5b55]" data-i18n="l1">
                    wykonanie umowy lub podjęcie działań na żądanie osoby przed
                    jej zawarciem.
                  </p>
                </div>
                <div class="border-t border-black/10 pt-5">
                  <strong>Art. 6 ust. 1 lit. c RODO</strong>
                  <p class="mt-2 text-[#5f5b55]" data-i18n="l2">
                    wypełnienie obowiązku prawnego ciążącego na administratorze.
                  </p>
                </div>
                <div class="border-t border-black/10 pt-5">
                  <strong>Art. 6 ust. 1 lit. f RODO</strong>
                  <p class="mt-2 text-[#5f5b55]" data-i18n="l3">
                    prawnie uzasadniony interes administratora, np.
                    bezpieczeństwo lub obrona przed roszczeniami.
                  </p>
                </div>
                <div class="border-t border-black/10 pt-5">
                  <strong>Art. 6 ust. 1 lit. a RODO</strong>
                  <p class="mt-2 text-[#5f5b55]" data-i18n="l4">
                    zgoda — jeżeli konkretne przetwarzanie rzeczywiście opiera
                    się na zgodzie.
                  </p>
                </div>
              </div>
            </article>

            <article id="cookies">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                05 / <span data-i18n="s5t">COOKIES</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s5h"
              >
                Małe pliki, jasne zasady.
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s5p"
              >
                Strona może korzystać z plików cookies i podobnych technologii.
                Cookies mogą być potrzebne do prawidłowego działania strony,
                zapamiętywania ustawień, bezpieczeństwa lub — jeśli takie
                narzędzia są wdrożone — statystyk.
              </p>
              <p
                class="mt-5 text-base leading-7 text-[#5f5b55]"
                data-i18n="s5p2"
              >
                Ustawienia cookies możesz zmienić w swojej przeglądarce. Jeżeli
                w przyszłości zostaną dodane nieobowiązkowe narzędzia
                analityczne lub marketingowe, ich sposób działania powinien
                zostać odpowiednio opisany i — gdy wymagają tego przepisy —
                poprzedzony zgodą użytkownika.
              </p>
            </article>

            <article id="external">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                06 / <span data-i18n="s6t">USŁUGI ZEWNĘTRZNE</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s6h"
              >
                Mapy, media i zewnętrzne serwisy.
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s6p"
              >
                Na stronie znajdują się odnośniki i elementy związane z usługami
                zewnętrznymi, w tym Google Maps oraz profile społecznościowe. Po
                przejściu do zewnętrznego serwisu zastosowanie mają zasady
                prywatności jego operatora. Zakres ewentualnego przetwarzania
                zależy od rzeczywistej konfiguracji danego elementu.
              </p>
            </article>

            <article id="recipients">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                07 / <span data-i18n="s7t">ODBIORCY</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s7h"
              >
                Komu dane mogą być udostępniane?
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s7p"
              >
                Dane mogą być udostępniane podmiotom wspierającym administratora
                w prowadzeniu działalności, np. dostawcom hostingu, poczty
                elektronicznej, usług technicznych lub systemów rezerwacji —
                wyłącznie w zakresie potrzebnym do realizacji określonego celu.
                Dane nie są sprzedawane osobom trzecim.
              </p>
            </article>

            <article id="retention">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                08 / <span data-i18n="s8t">PRZECHOWYWANIE</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s8h"
              >
                Jak długo?
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s8p"
              >
                Dane przechowujemy przez okres niezbędny do realizacji celu, dla
                którego zostały zebrane, a następnie przez czas wymagany
                przepisami prawa lub potrzebny do ustalenia, dochodzenia albo
                obrony roszczeń. Okres zależy od rodzaju danych i celu ich
                przetwarzania.
              </p>
            </article>

            <article id="rights">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                09 / <span data-i18n="s9t">TWOJE PRAWA</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s9h"
              >
                Masz kontrolę nad swoimi danymi.
              </h2>
              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                <div class="bg-warm p-5">
                  01 — <span data-i18n="r1">dostęp do danych</span>
                </div>
                <div class="bg-warm p-5">
                  02 — <span data-i18n="r2">sprostowanie danych</span>
                </div>
                <div class="bg-warm p-5">
                  03 —
                  <span data-i18n="r3"
                    >usunięcie danych, gdy jest prawnie możliwe</span
                  >
                </div>
                <div class="bg-warm p-5">
                  04 — <span data-i18n="r4">ograniczenie przetwarzania</span>
                </div>
                <div class="bg-warm p-5">
                  05 —
                  <span data-i18n="r5"
                    >przenoszenie danych, w przypadkach przewidzianych przez
                    RODO</span
                  >
                </div>
                <div class="bg-warm p-5">
                  06 —
                  <span data-i18n="r6"
                    >sprzeciw wobec określonego przetwarzania</span
                  >
                </div>
                <div class="bg-warm p-5">
                  07 —
                  <span data-i18n="r7"
                    >cofnięcie zgody, gdy podstawą jest zgoda</span
                  >
                </div>
              </div>
              <p
                class="mt-8 text-base leading-7 text-[#5f5b55]"
                data-i18n="rightsNote"
              >
                Aby skorzystać z praw, skontaktuj się z administratorem pod
                adresem biuro@montowniasmakow.pl. Możesz również złożyć skargę
                do Prezesa Urzędu Ochrony Danych Osobowych.
              </p>
            </article>

            <article id="automated">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                10 / <span data-i18n="s10t">PROFILOWANIE</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s10h"
              >
                Zautomatyzowane decyzje.
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s10p"
              >
                Co do zasady nie podejmujemy wobec użytkowników decyzji
                wyłącznie w sposób zautomatyzowany, który wywoływałby wobec nich
                skutki prawne lub podobnie istotnie na nich wpływał.
              </p>
            </article>

            <article id="security">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                11 / <span data-i18n="s11t">BEZPIECZEŃSTWO</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s11h"
              >
                Chronimy dane rozsądnie.
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s11p"
              >
                Stosujemy odpowiednie środki techniczne i organizacyjne mające
                na celu ochronę danych przed utratą, nieuprawnionym dostępem,
                zmianą lub ujawnieniem.
              </p>
            </article>

            <article id="changes">
              <p class="mb-5 text-[10px] font-bold uppercase tracking-[0.3em]">
                12 / <span data-i18n="s12t">AKTUALIZACJE</span>
              </p>
              <h2
                class="font-serif text-4xl tracking-tight sm:text-5xl"
                data-i18n="s12h"
              >
                Polityka może się zmienić.
              </h2>
              <p
                class="mt-7 text-base leading-7 text-[#5f5b55]"
                data-i18n="s12p"
              >
                Polityka prywatności może być aktualizowana w przypadku zmian
                strony, wykorzystywanych usług lub przepisów prawa. Aktualna
                wersja jest publikowana na tej stronie.
              </p>
              <p
                class="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
              >
                15.09.2026
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <?php get_footer(); ?>

    <?php wp_footer(); ?>
  </body>
</html>
