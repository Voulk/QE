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
If a target has an <WH>Aspect of Harmony HoT</WH> or <WH>Aspect of Harmony DoT</WH> on them, they will receive 20% increased healing or damage respectively from [any](#quirk) sources by you.

We leverage this a LOT in the <HeroTreeHeader heroTree="Master of Harmony" showImage={false}/> tree to stack our healing and damage modifiers to amplify both our healing and damage when needed.

#### Quirk
The 20% healing and damage amp affects all of our abilities however due to how damage amplifiers interact with damage to heal conversions, <WH>Ancient Teachings</WH> healing is not affected by damage amps **placed on other targets.** If the damage amp were instead applied to our character, <WH>Ancient Teachings</WH> would have increased healing from the damage conversion. In another vein, the healing amp on friendly targets affects <WH>Ancient Teachings</WH> healing, much like all our other healing amps: <WH>Chi Harmony</WH>, <WH>Enveloping Mist</WH>, <WH>Enveloping Breath</WH>, and <WH>Mending Proliferation</WH>.
> You can see a full list of which spells and abilities are affected by their respective amps on the <WH short="HoT">Aspect of Harmony HoT</WH> or <WH short="DoT">Aspect of Harmony DoT</WH> Wowhead Spell Details Effect #2 `Apply Aura: Mod All Healing/Damage Done % By Caster`.

### Spread
It effectively works by the <WH>Aspect of Harmony HoT</WH> ticks healing the target that it's on and having a chance to spread to a nearby ally. This spread takes vitality out of your pool to spread the <WH short="HoT">Aspect of Harmony HoT</WH> nearby. 

The same can be said about the <WH>Aspect of Harmony DoT</WH>, where the <WH short="DoT">Aspect of Harmony HoT</WH>s ticks have a chance to spread to a nearby enemy.

#### Quirk
Spread is a relatively ignored mechanic in dungeons, since the combination of intensify and adding to the strength of either of the <WH short="HoT">Aspect of Harmony HoT</WH>/<WH short="DoT">Aspect of Harmony DoT</WH> happens incredibly quickly during <WH>Aspect of Harmony Withdraw</WH>. However, raid allows for us to exponentially increase the rate of spread via the large number of available targets that can receive the <WH short="HoT">Aspect of Harmony HoT</WH>.

### Intensify
Directly healing or dealing damage into targets affected by <WH>Aspect of Harmony</WH> has a chance to “intensify” the strength of the over time effect **without refreshing the duration**. This can occur through any healing or damaging ability on affected targets.

Intensify is a silly word for (approximately) doubling the value of your <WH>Aspect of Harmony</WH>. 

<FloatingImage direction="ltr" title="Intensify" paragraph='In the example to the left, I dealt damage to the target applying an <WH>Aspect of Harmony HoT</WH> with a 5.9k tick. My <WH>Spinning Crane Kick</WH> is being used to intensify the <WH short="DoT">Aspect of Harmony DoT</WH>, doubling each time intensify procs. 5.9k » 11k » 23k » 47k » 95k » 191k » 382k » 764k » 1.5m' image={require("../images/moh/Intensify-Damage-Slow.gif").default} />

#### Quirks
##### My DoT... but also kinda yours.
Other players can intensify your <WH short="DoT">Aspect of Harmony DoT</WH> for you by simply attacking a mob that is affected by your <WH short="DoT">Aspect of Harmony DoT</WH>, withdrawing from your vitality pool. This effect is mostly noticeable in raids, where 20 players are often attacking the same mob. While this still occurs in dungeons, the rate is significantly lowered due to fewer players hitting <WH short="DoT">Aspect of Harmony DoT</WH>-affected targets.

> This chance is still super low and I would continue to deal damage from the spells inside of <WH>Harmonic Gambit</WH> to ensure I use my _entire_ vitality pool.

This can lead to unfortuante situations when attempting to use <WH>Aspect of Harmony</WH> for healing but have pressed <WH>Thunder Focus Tea</WH> too early—before applying HoTs to your party so that <WH>Aspect of Harmony HoT</WH> can apply, but after applying a <WH>Aspect of Harmony DoT</WH>. In this case, your group may intensify the <WH short="DoT">Aspect of Harmony DoT</WH> instead, resulting in no healing from that use of <WH>Thunder Focus Tea</WH> if vitality is completely withdrawn.

##### Potential Throughput Loss
Since the duration of the effect is never extended through intensify, you’re effectively “losing” potential healing or damage by reducing the uptime of the <WH short="HoT">Aspect of Harmony HoT</WH>/<WH short="DoT">Aspect of Harmony DoT</WH>, which shortens the window to benefit from the 20% amp attached to <WH>Coalescence</WH>.

### Coalescence Sidenotes
If you have 0 vitality remaining, neither spread nor intensification can occur, as both require vitality to proc.

At the moment, the exact percent chance for spread or intensification to occur is still unknown.

