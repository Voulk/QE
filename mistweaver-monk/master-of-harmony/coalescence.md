---
title: "Coalescence"
image: https://i.imgur.com/b8hPvXi.png
description: Learn how to play Mistweaver in the War Within. Updated for 11.1.
---

import ReactPlayer from 'react-player'
import HeroTreeHeader from "../../src/components/HeroTreeHeader"
import FloatingImage from "../../src/components/FloatingImage"

## "The Crux of Aspect of Harmony"

![<WH>Coalescence</WH>](..\images\moh\Coalescence.png)

### Increased damage and healing
If a target has an <WH>Aspect of Harmony HoT</WH> or <WH>Aspect of Harmony DoT</WH> on them, they will receive 20% increased healing or damage respectively from any sources by you.

We leverage this a LOT in the <HeroTreeHeader heroTree="Master of Harmony" showImage={false}/> tree to stack our healing and damage modifiers to amplify both our healing and damage when needed.

### Spread
It effectively works by the <WH>Aspect of Harmony HoT</WH> ticks healing the target that it's on and having a chance to spread to a nearby ally. This spread takes vitality out of your pool to spread the <WH short="HoT">Aspect of Harmony HoT</WH> nearby. 

The same can be said about the <WH>Aspect of Harmony DoT</WH>, where the <WH short="DoT">Aspect of Harmony HoT</WH>s ticks have a chance to spread to a nearby enemy.

### Intensify
Directly healing or dealing damage into targets affected by <WH>Aspect of Harmony</WH> has a chance to “intensify” the strength of the over time effect without refreshing the duration. This can occur through any healing or damaging ability on affected targets.

Intensify is a silly word for (approximately) doubling the value of your <WH>Aspect of Harmony</WH>. 

<FloatingImage direction="ltr" title="Intensify" paragraph='In the example to the left, I dealt damage to the target applying an <WH>Aspect of Harmony HoT</WH> with a 5.9k tick. My <WH>Spinning Crane Kick</WH> is being used to intensify the <WH short="DoT">Aspect of Harmony DoT</WH>, doubling each time intensify procs. 5.9k » 11k » 23k » 47k » 95k » 191k » 382k » 764k » 1.5m' image={require("../images/moh/Intensify-Damage-Slow.gif").default} />

:::note[NOTE]
If you have 0 vitality left, spread and intensification cannot occur as it requires vitality to pull from.

At the current moment, we do not know the percent chance of  spread or intensification happening.
:::

