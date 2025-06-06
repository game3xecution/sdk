
# G3X SDK (minimal reference)

This package shows the basic shape of a G3X client:

* Connect to a G3X node (`nodeUrl`)
* Stream gameplay events with `syncGameState`
* Finalise a match with `finalizeMatch`

## Quick Start

```bash
npm install @g3x/sdk
```

```js
import { G3XClient } from "@g3x/sdk";

const g3x = new G3XClient({
  nodeUrl: "https://testnet-node.g3x.network",
  walletProvider: window.ethereum
});

await g3x.syncGameState({
  playerId: "0xPlayer",
  action:   "attack",
  target:   "enemy01",
  ts:       Date.now()
});

await g3x.finalizeMatch({
  matchId: "match-xyz",
  winner:  "0xPlayer",
  rewards: ["XP:200", "NFT"]
});
```
