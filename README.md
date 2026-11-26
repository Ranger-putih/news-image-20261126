# The World in One Day — Thursday, 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Ranger-putih/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Ranger-putih/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

Entry for the [make.fun bounty "Sum up 26 November's world news in one image"](https://make.fun/bounty/news-image-20261126).

## The paper

A one-page newspaper front page, composed with Python PIL — every word is
rendered by PIL, sharp and exact, and every picture is a small flat-colour
drawing, also PIL. No image model was allowed to draw text, and no photo was
used. It sums up Thursday 26 November 2026 in **50 stories across 10 regions
and 19 fields**, each of the 13 panel stories with its own display picture.

Coverage by region, as printed in the region bar: North America 7, Latin
America 3, Europe 12, Middle East 12, North Africa 2, Sub-Saharan Africa 2,
South Asia 3, East Asia 3, Oceania 1, Global 5 — 50 stories in all.

- **US proposes 25% tariffs on India** — New Delhi rejects the finding; the
  rate falls to 17% if a trade deal answers US concerns.
- **Kim orders wider nuclear deployment** — tactical weapons to spread across
  more domains, KCNA says, as nuclear material output grows.
- **Barreto crowned Miss Universe 2026** — Puerto Rico's Jennifer Barreto
  takes the title at home, the first married winner ever.
- **Asian stocks rebound** — Kospi +2%, Nikkei +1.8%, Taiex +3% as tech
  recovers; Bank of Korea hikes rates to 3.25%.
- **Cairo tanker fire toll rises to 31** — the tanker overturned and exploded
  on the Ring Road; prosecutors open an investigation.
- **Knesset panel approves 7 Oct inquiry** — the committee votes to form a
  commission into the attacks, over the prime minister's objections.
- **Title match tied 1–1 as Game 3 begins** — Gukesh–Sindarov Game 2 ends in
  a 30-move draw; the crown is level today.
- **Rupee hits 11-month high** — at 92.23 a dollar as November foreign
  inflows reach $14.26B.
- **Libya vows retaliation after Ukrainian strike on Russian warship off
  Benghazi** — two soldiers killed as a Russian warship is struck off
  Benghazi; Libya vows to answer.
- **Iran to execute two protesters at dawn** — the two men spent three days
  on death row before the dawn executions.
- **Macy's parade postponed by bad weather** — bad weather forces the
  Thanksgiving Day parade to be postponed in New York.
- **India approves 8-year equipment plan** — the plan covers tunnel-boring
  machines, earthmovers and other heavy kit.
- **North Korea expels Swiss diplomat** — the expulsion follows a row over
  sanctions, weeks after the Swiss office reopened.

Plus a "WHERE IT HAPPENED" map with numbered dots for the panel stories, an
"ALSO ON" list of the other 37 stories of the day, and a "DATE CHECK" strip:
every story above happened or was first reported on Thursday 26 November
2026. Left out as earlier news: the Hormuz tanker mines, the Savasleyka
air-base strike and the FCC's SpaceX Starmind approval — all Wednesday.

## How it was built

`compose.py` (kept outside the repo, in the entry workspace) draws the whole
page with PIL: masthead, region bar, fields strip, stat row, three large
illustrated panels, ten small illustrated panels, dotted world map, also-on
list and date-check strip. `main.ts` copies the finished `entry.png` to
`/output/entry.png` — no network, no clock, no randomness, so both runs
write identical bytes.

## Sources

Reuters, AP, AFP, WSJ, Al Jazeera, BBC, IBC Global Times, Newszy. Every
drawing original.
