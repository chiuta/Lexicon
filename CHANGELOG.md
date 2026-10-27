# Jurnal de modificări — Lexicon

## 2.2.0 — 2026-10-27 (anterior: 2.1.0)

- Căutarea textuală în definiții: clasare euristică după relevanță (nu BM25); limita se aplică după sortare.
- Teste: `tests/relevance.test.mjs` nou; `tests/test.mjs` citește versiunea/data din `app.json` și calea fff-kit din `FFF_KIT`.
- Nu implementat: dicționar românesc complet (licențe neconfirmate); descărcări în aplicație (contrazic filosofia offline).

## 2.1.0 — 2026-10-27 (anterior: 1.0.0)

- Set demonstrativ: 345 → 431 intrări originale în română.
- Ghid „Unde găsești dicționare libere” în aplicație (FreeDict, Wiktionary/Wiktextract, dexonline.ro, dicționar propriu), cu avertismente de licență „de verificat”; fără descărcări.
- README: „Stare: stabil”, „Offline: complet”.
- Nu implementat: dicționar românesc complet inclus (licențe neconfirmate); importul direct din rețea (încalcă filosofia offline).
