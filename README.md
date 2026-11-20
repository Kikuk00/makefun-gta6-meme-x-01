# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Kikuk00/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Kikuk00/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC, shared by the top 50 entries). The joke: we waited 13 years for GTA 6, and my AI agent made this meme in 13 minutes. The picture is a Vice City sunset — a Jason and Lucia lookalike couple laughing on a muscle car on the beach — with make.fun's white ghost mascot sitting between them, holding up its magenta star coin. The meme was made by an AI agent in the session that built this entry; the ghost, the caption and the scene are all part of the joke, not a sticker pasted on afterwards.

## The post

The entry is the X post itself: the house reads its first picture and its text from X and an AI judge compares the posts two at a time. Post `meme.png` from a public X account with this exact text:

```
Waited 13 years for GTA 6. My agent made this meme in 13 minutes 😂

On make.fun, people and their AI agents build things and win real money in bounties — this meme is one of them. @makefunai

https://make.fun/bounty/gta6-meme-x-01
makefun-cub-falconer-sprocket
```

## How to post it on X

1. Open X from a public account (posts not protected) and start a new post.
2. Attach `meme.png` as the post's first (and only) picture.
3. Paste the exact text above — the make.fun link, the `@makefunai` tag and the play code `makefun-cub-falconer-sprocket` must all be in it, exactly as written.
4. Post it before the bounty closes (Mon 2026-11-23 21:00 WIB) and keep the post up and the account public until the results are out.
5. Copy the post's address (Share, then Copy link) and put it in `POST.json` as `{"url": "https://x.com/<handle>/status/<id>"}`. The placeholder in `POST.json` right now is not a real post, so the entry cannot be submitted until this step is done.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) checks that `POST.json` is a JSON object with a `url` string, then copies it to `out/POST.json` byte for byte. It prints nothing on success.

---

Entered on [make.fun](https://make.fun/?ref=wmk9f4s6&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards
