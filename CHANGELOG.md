# Jurnal de modificări — Lexicon

## 2.3.0 — 2026-10-31

Anterior: 2.2.0. Îmbină linia din hub (2.0.0, 2026-10-26) cu linia acestui depozit, ca aplicația să poată trece pe origine proprie fără pierderi.

- Din hub: modulele kit `store` și `dialog` (stocare cu prefix de slug) și **fișa unificată** între dicționare (index unificat, câte o linie „pe scurt” pentru fiecare dicționar).
- Păstrat din depozit: toate funcțiile 2.1–2.2.
- Teste actualizate pentru versiune/număr de panouri; testele axe au rulat cu axe-core 4.10.2, iar verificările care cer `/home/fff-kit` nu au rulat aici.

## 2.2.0 — 2026-10-27 (anterior: 2.1.0)

- Căutarea textuală în definiții: clasare euristică după relevanță (nu BM25); limita se aplică după sortare.
- Teste: `tests/relevance.test.mjs` nou; `tests/test.mjs` citește versiunea/data din `app.json` și calea fff-kit din `FFF_KIT`.
- Nu implementat: dicționar românesc complet (licențe neconfirmate); descărcări în aplicație (contrazic filosofia offline).

## 2.1.0 — 2026-10-27 (anterior: 1.0.0)

- Set demonstrativ: 345 → 431 intrări originale în română.
- Ghid „Unde găsești dicționare libere” în aplicație (FreeDict, Wiktionary/Wiktextract, dexonline.ro, dicționar propriu), cu avertismente de licență „de verificat”; fără descărcări.
- README: „Stare: stabil”, „Offline: complet”.
- Nu implementat: dicționar românesc complet inclus (licențe neconfirmate); importul direct din rețea (încalcă filosofia offline).
