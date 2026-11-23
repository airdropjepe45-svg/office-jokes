# Office Jokes — "Per My Last Email"

[![make.fun](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/airdropjepe45-svg/office-jokes/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/airdropjepe45-svg/office-jokes/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

One single-line joke about office life, written for the
[Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
bounty on make.fun.

## The joke

> I wrote 'per my last email' so confidently that I forgot there never was a first email.

## How it works

`main.ts` writes the joke to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR`
when set), after checking the gate: 1–199 characters, a single line, and not
only whitespace. It exits non-zero with a clear error if any check fails.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (it runs the TypeScript directly).
