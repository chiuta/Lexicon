# Jurnal de modificări — Lexicon

## 2.4.3 — 2026-11-08
Doar documentare: README (8 limbi) precizează statutul fișierelor din `exemple/` (intrări-exemplu scrise de mână; model.json declară domeniu public; se aplică și MIT din rădăcină).

## 2.4.0 — 2026-11-02 (reîmprospătare kit)

- Nou (kit): **Sincronizare între dispozitive** (`FFF.sync`) — în dialogul «Transparență» (clic pe versiune → Copie de siguranță): conectezi două dispozitive direct (WebRTC, cod/QR, fără server și fără cont) și își schimbă datele aplicației; cea mai recentă valoare câștigă, secretele (chei API, parole) nu se trimit, ștergerile nu se propagă. Aplicarea trece prin importul kitului (confirmare, chei permise, rollback).
- Nou (kit): **Istoric local — «mașina timpului»** (`FFF.history`) — instantanee automate ale datelor (IndexedDB, fără secrete), diferență față de starea curentă și restaurare reversibilă; «Șterge datele aplicației» șterge și istoricul.
- Module adăugate: `qr`, `p2p`, `sync`, `history` (+~140 KB). Versiunea aplicației nu se schimbă.

## 2.4.0 — 2026-11-01

- Corectat: adaptorul «Trimite la…» nu mai aruncă eroare când kitul FFF lipsește (gardian pe fiecare bloc; găsit de testul «fără kit» din CI).

Nou: «Trimite la…» (fff-kit, modulul FFF.bridge) — după orice export de fișier (GPX, ICS, CSV, Markdown) apare butonul «Trimite la…» către aplicațiile compatibile, iar importul de fișiere al aplicației primește plicuri .fff.json trimise de ele, cu confirmare înainte de import. Fără rețea, fără telemetrie.

## 2.3.0 — 2026-10-31

Anterior: 2.2.0. Îmbină linia din hub (2.0.0, 2026-10-26) cu linia acestui depozit, ca aplicația să poată trece pe origine proprie fără pierderi.

- Ținte tactile: casetele de bifare măsurau 13–18 px; acum 24 px (WCAG 2.5.8). Măsurat pe 360×740: 0 ținte sub 24 px, 0 texte sub 12 px.
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
