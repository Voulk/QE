---
title: "Healing and Damage"
image: https://i.imgur.com/b8hPvXi.png
description: Learn how to play Mistweaver in the War Within. Updated for 11.1.
---

import HeroTreeHeader from "../../src/components/HeroTreeHeader"
import FloatingImage from "../../src/components/FloatingImage"

## Healing

<WH>Aspect of Harmony</WH>'s healing consists of two key components:

- <WH>Aspect of Harmony HoT</WH> – Its strength is determined by the healing dealt to a target both during its initial application and while it remains active.
- <WH>Coalescence</WH> – Increases your healing to affected targets by 20%, further amplifying the HoT's impact.

### Application 
30% of your healing is taken from vitality into the total amount of the <WH short="HoT">Aspect of Harmony HoT</WH> on the targets you’ve healed by direct sources.  

Direct sources include but are not limited to:  
- <WH>Renewing Mist</WH> HoT ticks  
- <WH>Enveloping Mist</WH> HoT Ticks  
- <WH>Vivify</WH>
- <WH>Refreshing Jade Wind</WH>
- <WH>Gust of Mists</WH> 
- <WH>Sheilun’s Gift</WH>  
- <WH>Revival</WH>

Assume everything works except <WH>Ancient Teachings</WH>.

### HoT management
###### Tracked by Spell ID: **450769**  

<FloatingImage title="Targeted Healing Application" paragraph='I dealt 705k healing with a <WH>Vivify</WH> while withdrawing vitality, an <WH>Aspect of Harmony HoT</WH> applied on the target at 40% strength, ticking for ~35k, totaling 282k healing done at the end of the <WH short="HoT">Aspect of Harmony HoT</WH>.

Since I continued healing into the <WH short="HoT">Aspect of Harmony HoT</WH>, my next <WH>Vivify</WH> was buffed by 20% from <WH>Coalescence</WH> and 40% of that hit will continue to pile up into the targets of my healing and refresh the duration of the <WH short="HoT">Aspect of Harmony HoT</WH> until either my <WH>Aspect of Harmony Withdraw</WH>al window is over or I’ve used up all of my vitality.' image={require("../images/moh/Aspect-Healing-Application.gif").default} />

<FloatingImage direction="rtl" title="HoT(s) already on the target" paragraph='My target already has HoT(s) rolling on them prior to <WH>Aspect of Harmony Withdraw</WH> beginning - as soon as <WH>Renewing Mist</WH> heals, <WH>Aspect of Harmony HoT</WH> will apply immediately onto the target without needing manual intervention.' image={require("../images/moh/Aspect-Healing-HoT.gif").default} />

<FloatingImage title="Purified Spirit" paragraph='<blockquote>This only occurs if <WH>Purified Spirit</WH> is talented.</blockquote> After <WH>Aspect of Harmony Withdraw</WH> ends, the  rest of your vitality will dump into the <WH>Purified Spirit</WH> HoT, separate from the <WH >Aspect of Harmony HoT</WH>. ' image={require("../images/moh/Aspect-PurifiedSpirit.gif").default} />

## Damage 

### Passive Damage
<HeroTreeHeader heroTree="Master of Harmony" showImage={false}/> has a few default talent nodes that increase your damage passively:

- <WH>Manifestation</WH> – <WH>Chi Burst</WH> and <WH>Chi Wave</WH> deal 50% increased damage / healing
- <WH>Overwhelming Force</WH> – <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> deal additional damage in the form of a line in front of you

### Active Damage

#### **Harmonic Gambit**

![<WH>Harmonic Gambit</WH>](..\images\moh\HarmonicGambit.png)

The shining force of the entire <HeroTreeHeader heroTree="Master of Harmony" showImage={false}/> tree for dealing damage.

Talenting into <WH>Harmonic Gambit</WH> allows for <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> to also withdraw vitality to damage enemies.

![<WH>Harmonic Gambit</WH>](..\images\moh\WCLDamage.png)

<WH>Aspect of Harmony</WH>'s damage consists of two key components:

- <WH>Aspect of Harmony DoT</WH> – Its strength is determined by the damage dealt to a target both during its initial application and while it remains active.
- <WH>Coalescence</WH> – Increases your damage to affected targets by 20%, further amplifying the DoT's impact.

### Application
40% of the damage you deal is converted into the total amount of the DoT on the targets you’ve dealt damage to but ONLY from <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH>.

### DoT management
###### Tracked by Spell ID: 450763 

<FloatingImage title="Tiger Palm, Blackout Kick, Rising Sun Kick" paragraph='I continuously strike my target with <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH>, directly contributing to the <WH short="DoT">Aspect of Harmony DoT</WH>’s damage. Since I keep attacking while the <WH short="DoT">Aspect of Harmony DoT</WH> is active, my future abilities benefit from the 20% <WH>Coalescence</WH> damage increase, and 40% of each hit continues stacking onto the target, refreshing the <WH short="DoT">Aspect of Harmony DoT</WH>’s duration. This cycle persists until either my <WH short="Withdraw">Aspect of Harmony Withdraw</WH> window ends or my Vitality is fully depleted.' image={require("../images/moh/Aspect-Damage.gif").default} />


<FloatingImage direction="rtl" title="Intensify" paragraph="I applied <WH>Aspect of Harmony DoT</WH> onto my target through one <WH>Tiger Palm</WH> and continued to “intensify” the <WH short='DoT'>Aspect of Harmony DoT</WH> by <WH>Spinning Crane Kick</WH>. Although that ability isn't mentioned in the <WH>Harmonic Gambit</WH> tooltip, <WH>Coalescence</WH> intensification applies to any damage dealt." image={require("../images/moh/Intensify-Damage.gif").default} />

> This happens naturally with your regular <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> rotation, as well. 
With current tuning, I would still avoid using <WH>Spinning Crane Kick</WH> rotationally. 


<FloatingImage title="What NOT to do" paragraph="Activating <WH>Thunder Focus Tea</WH> and then using damaging abilities outside of <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> when intending to spend Vitality on damage.
As shown, the <WH short='DoT'>Aspect of Harmony DoT</WH> never applied because <WH>Crackling Jade Lightning</WH> isn't part of <WH>Harmonic Gambit</WH>, resulting in zero Vitality being consumed from your reservoir." image={require("../images/moh/Intensify-Damage-Nope.gif").default} />

:::info[Reminder]
Any unused Vitality disappears if not fully consumed!
:::
