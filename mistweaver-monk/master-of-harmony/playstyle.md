---
title: "Playstyle"
image: https://i.imgur.com/b8hPvXi.png
description: Learn how to play Mistweaver in the War Within. Updated for 11.1.
---

import HeroTreeHeader from "../../src/components/HeroTreeHeader"
import Timeline from "../../src/components/Timeline"

# Playstyle Shifts

The goals for both types of content differ in execution, yet share similarities that allow for smooth transitions between them. The key takeaway is using <WH>Thunder Focus Tea</WH> strategically to enhance the rest of your base kit.

## Raid

Your primary goal in raid is to spread <WH>Aspect of Harmony HoT</WH>s to as many players as possible within the 10-second Vitality <WH short="withdraw">Aspect of Harmony Withdraw</WH> window before focusing on actual healing. This ensures your future healing is significantly amplified through <WH>Coalescence</WH>.

### Spreading Aspect of Harmony

To accomplish this, we utilize two key abilities outside of our standard rotation:

- <WH>Chi Burst</WH> – An uncapped AoE heal that can pass through all 20 players in a raid group.
- <WH>Refreshing Jade Wind</WH> – Automatically triggers after pressing <WH>Thunder Focus Tea</WH> when talented into it.

<WH>Chi Burst</WH> serves as the primary <WH>Aspect of Harmony HoT</WH> applicator, while <WH>Refreshing Jade Wind</WH> helps intensify and sustain its spread.

:::caution[CAUTION]
Do not delay your healing while withdrawing Vitality. Continue using abilities like <WH>Renewing Mist</WH>, <WH>Rising Sun Kick</WH> / <WH>Rushing Wind Kick</WH>, <WH>Enveloping Mist</WH>, and <WH>Vivify</WH> as needed.
:::

### Managing Vitality 

Once your Vitality is fully or nearly depleted, the goal to have the entire raid benefiting from the 20% healing increase should have been reached.

At this point, you can continue normal healing with <WH>Vivify</WH> and/or planned cooldowns like <WH>Revival</WH> or <WH>Invoke Yu'lon, the Jade Serpent</WH>, further enhancing their effectiveness.

If any Vitality remains unused, <WH>Purified Spirit</WH> will activate, distributing the leftover amount evenly across the raid as a HoT.

### Video Explanation
For a detailed breakdown of raid healing with <HeroTreeHeader heroTree="Master of Harmony" showImage={false}/>, I highly recommend watching [Sweggles' video](https://www.youtube.com/watch?v=nw21Br5v8x8) before attempting it yourself.

## Mythic+

Your approach in Mythic+ differs from raid content. Here, <HeroTreeHeader heroTree="Master of Harmony" showImage={false}/> serves as a hybrid tool for both healing and damage—or exclusively for one, depending on the situation.

Both aspects of <HeroTreeHeader heroTree="Master of Harmony" showImage={false}/>—healing and damage—are empowered by <WH>Coalescence</WH>, which increases the healing or damage taken by your targets by 20%. Maximizing this effect is key to optimizing your throughput.

### Healing with <WH>Aspect of Harmony</WH>

When using <WH>Aspect of Harmony</WH> for healing, the focus is on applying the <WH short="HoT">Aspect of Harmony HoT</WH> rather than relying solely on its raw strength. Most damage mechanics occur roughly every 30 seconds, and by stacking Mistweaver healing modifiers like <WH>Chi Harmony</WH> and <WH>Enveloping Mist</WH> alongside <WH>Coalescence</WH>, you can generate massive healing for nearly every mechanic.

#### Why This Works

<WH>Aspect of Harmony</WH> HoT benefits from <WH>Coalescence</WH>, meaning spells like <WH>Sheilun’s Gift</WH> and <WH>Revival</WH> (as well as all other healing abilities) receive a significant boost, further increasing overall healing output.

### Shifting to Damage

When <WH>Aspect of Harmony</WH> isn't needed for healing, you can instead funnel it into damage:

- <WH>Aspect of Harmony DoT</WH> – Converts stored Vitality into a DoT that can deal up to your maximum HP over 8 seconds.
- <WH>Coalescence</WH> – Buffs damaging abilities like <WH>Rising Sun Kick</WH> and <WH>Crackling Jade Lightning</WH>, further amplifying your damage output.

Most of the time, you’ll be balancing both healing and damage simultaneously, unless a situation demands full commitment to one or the other.


## Timeline of Events
These rotations are not all encapsulating - some are better than others, some are just examples of what you can do to make use of <WH>Aspect of Harmony</WH>.
### Pure Healing
> Assume <WH>Thunder Focus Tea</WH> is pressed as damage to your party occurs.

<!-- i hate this implementation of the timeline but i wanted to get it done quick
probably want a masterofharmony/timelines/timeline.json as a parameter into timeline
i do really like wowhead's implementation of the timeline tho -->
<Timeline spellsIndex="0" />
<Timeline spellsIndex="1" />
<Timeline spellsIndex="2" />

### Pure Damage <font size="1">(kinda)</font>
> <WH>Aspect of Harmony</WH> can still apply the <WH short="HoT">Aspect of Harmony HoT</WH> onto injured party members from existing HoTs, <WH>Gust of Mists</WH> from <WH>Crane Style</WH>, <WH>Rapid Diffusion</WH> creating new <WH>Renewing Mist</WH>s, <WH>Coalescence</WH>'s intensify and more!
<Timeline spellsIndex="3" />
<Timeline spellsIndex="4" />
<Timeline spellsIndex="5" />


### Both
> Assume <WH>Thunder Focus Tea</WH> is pressed as damage to your party occurs.
<Timeline spellsIndex="6" />
<Timeline spellsIndex="7" />
<Timeline spellsIndex="8" />
