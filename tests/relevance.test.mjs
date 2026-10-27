// Lexicon — clasarea euristică după relevanță în căutarea după text. Rulare: node tests/relevance.test.mjs
import {createRequire} from 'node:module';
import path from 'node:path'; import {fileURLToPath, pathToFileURL} from 'node:url';
const require = createRequire(process.env.PW_ROOT || '/opt/node-tools/package.json');
const {chromium} = require('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const URL_APP = pathToFileURL(path.join(here, '..', 'index.html')).href;
let pass = 0, fail = 0; const ok = (n, c, x) => { if (c) pass++; else { fail++; console.log('  FAIL', n, x === undefined ? '' : JSON.stringify(x).slice(0, 300)); } };
const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium'});
const ctx = await browser.newContext({acceptDownloads: true}); await ctx.route(/^https?:/, r => r.abort());
const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto(URL_APP); await p.waitForFunction(() => document.documentElement.dataset.ready);
const dict = {format: 'lexicon-dict', title: 'Rel', langs: 'ro', source: 'test', license: 'test', entries: [
  {h: 'alfa', def: 'zorzon'},
  {h: 'zorzon', def: 'zorzon: un lucru'},
  {h: 'beta', def: 'zorzon zorzon zorzon și încă alte cuvinte, ca definiția să fie mai lungă'},
  {h: 'gama', def: 'nimic aici'}]};
await p.click('#t-dicts').catch(() => {});
await p.setInputFiles('#file-in', [{name: 'rel.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(dict))}]);
await p.waitForSelector('#dlg-import[open]'); await p.waitForSelector('#imp-title');
await p.fill('#imp-title', 'Rel'); await p.fill('#imp-license', 'test'); await p.click('#imp-go');
await p.waitForSelector('#imp-msg .msg.ok, #imp-msg .msg.err'); await p.click('#imp-cancel');
await p.waitForSelector('#dlg-import:not([open])', {state: 'attached'});
const id = await p.evaluate(() => Lexicon.state().dicts.find(d => d.title === 'Rel').id);
const r = await p.evaluate(async id => { const a = await Lexicon.search('zorzon', {mode: 'text', dict: id}); const b = await Lexicon.search('zorzon', {mode: 'text', dict: id, limit: 2}); const c = await Lexicon.search('nimic', {mode: 'text', dict: id});
  return {a: a.rows.map(x => x.h), ta: a.truncated, b: b.rows.map(x => x.h), tb: b.truncated, c: c.rows.map(x => x.h), sc: a.rows.map(x => x.score)}; }, id);
ok('cuvântul-titlu urcă primul', r.a[0] === 'zorzon', r);
ok('mai multe apariții înaintea uneia singure', r.a.join() === 'zorzon,beta,alfa', r.a);
ok('scorurile sunt descrescătoare', r.sc.every((v, i) => i === 0 || r.sc[i - 1] >= v), r.sc);
ok('fără trunchiere sub limită', r.ta === false, r.ta);
ok('limita taie după sortare și marchează trunchierea', r.b.join() === 'zorzon,beta' && r.tb === true, r);
ok('un singur rezultat rămâne neschimbat', r.c.join() === 'gama', r.c);
ok('fără erori JS', errs.length === 0, errs);
await browser.close(); console.log(`\n${pass} reușite, ${fail} eșuate`); process.exit(fail ? 1 : 0);
