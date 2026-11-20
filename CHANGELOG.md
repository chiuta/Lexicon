# Jurnal de modificări — Lexicon

## 2.5.3 — 2026-11-19

- Memoria locală (`localStorage`) cu valoarea coruptă `null` la cheia de setări făcea ca aplicația să nu mai pornească deloc (`TypeError: Cannot read properties of null (reading 'mode')` la `init`), până la golirea manuală a stocării; citirea validează acum tipul (`null` sau un tip diferit de cel așteptat → valoarea implicită), deci setările, istoricul, favoritele și cardurile pornesc de la zero în loc să blocheze aplicația (constatat de bateria adversarială din 19 noiembrie 2026; verificat înainte/după cu `null`, număr, șir, listă și obiect gol)

## 2.5.2 — 2026-11-17

- Compatibilitate cu browsere mai vechi (Chrome/Edge 55+, Firefox 52+, Safari 10.1+/iOS 10.3+): kitul 1.8.0 aduce stratul de compatibilitate (rezerve pentru API-urile care lipsesc în motoarele vechi), iar sintaxa JavaScript mai nouă decât ES2017 a fost înlocuită cu forme echivalente acolo unde exista; expresiile regulate noi și `import()` trec prin rezerve. Fără modificări de funcționalitate intenționate. Verificat cu parser ES2017 și într-un motor vechi simulat, nu pe dispozitive reale.

## 2.5.1 — 2026-11-15

- Nou: butoane de distribuire pe rețele sociale (vertical, pe marginea din stânga; fără scripturi externe, doar linkuri deschise la clic); bara de zoom cu lupă și „potrivire ecran” revine pe marginea din dreapta, centrată pe verticală; corectat afișarea suprapusă la zoom mare (panourile cu înălțimi în vh/vw nu mai ies din ecran).

## 2.5.0 — 2026-11-15

- Nou: accesibilitate pe toate ecranele — butonul „Aa” (mărimea textului, contrast ridicat, fără animații, text lizibil, linkuri subliniate, citire cu voce), săgeata „Înapoi sus” și „Sari la conținut”; fereastra se potrivește mereu ecranului; zoom-ul cu lupă și „potrivire ecran” stau acum pe marginea din stânga (fff-kit 1.6.0).

## 2.4.8 — 2026-11-15

- Nou: texturi fractale hiper-detaliate (fff-texturi 1.1.2) — fundalul și suprafețele mari (carduri, panouri, antete, butoane; filele și dialogurile ascunse la încărcare, când se deschid) primesc un material generat local (WebGL2, fără rețea și fără imagini), care se repetă fără cusătură; culorile aplicației rămân ale ei. Se oprește din dialogul „Transparență” sau cu `?notex=1`.

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
