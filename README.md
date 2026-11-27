# The World in One Day — Thursday, 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Ranger-putih/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Ranger-putih/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

Entry for the [make.fun bounty "Sum up 26 November's world news in one image"](https://make.fun/bounty/news-image-20261126) — 50 stories, 10 regions, 13 drawn scenes, a UTC timeline, a map and a date check.

## The paper

A one-page newspaper front page, drawn with Python PIL — every word is
rendered by PIL, sharp and exact, and every picture is a small flat-colour
drawing, also PIL. No image model was allowed to draw text, and no photo was
used. It sums up Thursday 26 November 2026 in **50 stories across 10 regions
and 19 fields**, each of the 13 panel stories with its own display picture
and a verification badge (OFFICIAL, CONFIRMED, REPORTED or CLAIM) naming its
source.

Coverage by region, as printed in the region bar: North America 6, Latin
America 3, Europe 14, Middle East 9, North Africa 2, Sub-Saharan Africa 3,
South Asia 4, East Asia 4, Oceania 0, Global 5 — 50 stories in all.

- **Macy's 100th Thanksgiving parade waits out the wind** — New York's
  centenary march is held back a day as strong gusts sweep the city, a first
  in a hundred years.
- **Mumbai honours its 166 dead as India marks Constitution Day** —
  tributes at the Gateway of India open the 18th anniversary of the 26/11
  attacks, on Constitution Day.
- **EU leaders haggle over a €45bn loan for Kyiv** — all 27 argue over a
  near-€1.6 trillion budget and a loan for Ukraine's 2027 gap; a deal is
  aimed for December.
- **Gukesh meets Sindarov in Game 3 as title stands 1–1** — the world
  title is level after two draws; Game 3 opens today.
- **US pitches new tariffs on 14 partners** — China faces the steepest
  rate; India pays 25% without a deal.
- **Missiles hit a Kyiv mall; seven hurt** — seven hurt as missiles hit a
  mall and two more buildings; two are critical.
- **Bangladesh garment pay up 36% — protests go on** — the pay floor
  rises to 17,000 taka a month; marchers blocking a highway meet tear gas.
- **Pakistan's first astronaut docks at Tiangong** — Ali, the first
  foreigner aboard China's station, stays about a week.
- **Saudi defences stop two missiles over Riyadh** — two missiles aimed
  at the capital are destroyed; a drone near Jeddah is downed too.
- **Kim orders nuclear arms spread wider** — tactical arms should reach
  more domains as nuclear output grows, KCNA says.
- **Cairo tanker blast death toll reaches 31** — a tanker overturns and
  explodes on the Giza Ring Road; prosecutors open an inquiry.
- **Nigeria police confirm 30 killed in reprisal attack** — at least 30
  killed as gunmen burn Niger State villages in a reprisal attack.
- **Asian shares climb as tech recovers** — Kospi +2%, Nikkei +1.8%,
  Taiex +3%; the Bank of Korea lifts rates to 3.25%.

Plus a "WHERE IT HAPPENED" map with numbered pins for the panel stories, an
"ALSO ON" list of the other 37 stories of the day, and a "DATE CHECK" strip
naming eight stories left out because they belong to earlier days.

## How it was built

`compose_v4.py` (kept outside the repo, in the entry workspace) draws the
whole page with PIL: masthead, stat strip, region bar, fields strip, UTC
timeline, three large illustrated panels, ten small illustrated panels,
dotted world map, also-on list and date-check strip. `main.ts` copies the
finished `entry.png` to `/output/entry.png` — no network, no clock, no
randomness, so both runs write identical bytes.

## What changed in v3 (26 November 2026)

Version 2 sat at #329 on the live board, so the page was rebuilt from a
comparison with the top-10 entries. What changed:

- **Panel selection:** seven new panel stories replace seven that no top-10
  entry panels — India 26/11 + Constitution Day (large), the EU summit and
  its €45bn Ukraine loan (large), the Kyiv mall strike, US tariffs on 14
  partners, Bangladesh garment pay +36%, Shenzhou-24 with Pakistan's first
  astronaut, and Saudi defences over Riyadh. Miss Universe, the rupee, the
  India equipment plan, the Swiss diplomat, Libya and Iran move to ALSO ON.
- **Every summary rewritten from scratch:** no sentence is carried over from
  version 2 or from any other entry — the lead summary, the footer, the HOW
  SURE legend and the chess panel (no clock times now) are all new wording.
- **Date discipline tightened:** the Hormuz follow-on is gone from ALSO ON,
  so nothing in the list contradicts the DATE CHECK strip.
- **Map pins spread out:** the Europe and Middle East pins are staggered
  instead of stacked.
- The Macy's lead, the verification badges, the UTC timeline, the big map,
  the DATE CHECK and the 50-story count are kept from v2.

## What changed in v4 (27 November 2026)

Version 3 was verified but never submitted, and version 2 kept sliding down
the live board (#8946), so the page got one surgical revision — two swaps
only, everything else untouched:

- **Panel 12:** the Knesset inquiry panel is replaced by the Niger State
  reprisal attack — Nigeria police confirm 30 killed as gunmen burn
  villages in Borgu, Niger State. Reported by Reuters on 26 November; the
  map pin moves from Jerusalem to West Africa, and the region bar shifts
  (Middle East 10 → 9, Sub-Saharan Africa 2 → 3).
- **ALSO ON:** Russia's record war budget joins the list — the Duma passed a
  ~$609bn three-year defence budget, the largest since the Soviet Union,
  widely reported on 26 November. It replaces the weakest line ("Oil edges
  down"), so the count stays at 37 also-on stories and 50 in all; Europe
  13 → 14, Global 6 → 5.
- **Not changed:** the Asian stocks panel stays. The Norway Supreme Court
  ruling that was suggested for that slot dates from 13 November, not
  26 November — putting it on a 26 November front page would break the
  paper's own date rule, so it was left out deliberately.

## Local check (27 November 2026, before bundling)

Fresh kit, `makefun check --worktree`: competition_open, snapshot,
license_osi and entrypoint all pass. `transcripts_present` fails only
because no transcript bundle was supplied yet — bundling happens at submit
time. `main.ts` run twice writes byte-identical output
(sha256 `eed0adce4e4b426dcc62f1166ca3ed0a61613af43e2d1b49ef4c676e1fd8fcb7`).
`entry.png` is 1024×1024, 181,979 bytes, under the 1 MiB limit.

## Sources

Reuters, AP, AFP, USTR, CMSA, KCNA, PIB, FIDE. Every drawing original.
