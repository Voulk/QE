---
title: "Damage"
image: https://i.imgur.com/b8hPvXi.png
description: Learn how to play Mistweaver in the War Within. Updated for 11.1.
---

import HeroTreeHeader from "../../src/components/HeroTreeHeader"
import FloatingImage from "../../src/components/FloatingImage"

### Passive Damage
<HeroTreeHeader heroTree="Master of Harmony" showImage={false}/> has a few default talent nodes that increase your damage passively:

- <WH>Manifestation</WH> – <WH>Chi Burst</WH> and <WH>Chi Wave</WH> deal 50% increased damage / healing
- <WH>Overwhelming Force</WH> – <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> deal additional damage in the form of a line in front of you

## Active Damage

### **Harmonic Gambit**

The shining force of the entire tree for dealing damage.

Talenting into <WH>Harmonic Gambit</WH> allows for <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> to also withdraw vitality to damage enemies.

<WH>Aspect of Harmony</WH> damage comes in two parts:

1. <WH>Aspect of Harmony DoT</WH> strength based on how much damage you apply to a target on initial application and after it has already been applied
2. <WH>Coalescence</WH> included in the <WH>Aspect of Harmony DoT</WH> increasing your damage to that target by 20%

40% of the damage you deal is converted into the total amount of the DoT on the targets you’ve dealt damage to but ONLY from <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH>

### Application
The <WH short="DoT">Aspect of Harmony DoT</WH> application follows similar application rules as the <WH short="HoT">Aspect of Harmony HoT</WH>. It can only be applied when you are dealing **DIRECT** damage to the target, meaning absorb shields will not allow you to apply the <WH short="DoT">Aspect of Harmony DoT</WH> on the target since you are dealing damage to the absorb shield, not the target.

## DoT management
Tracked by Spell ID: 450763 

<FloatingImage title="Tiger Palm, Blackout Kick, Rising Sun Kick" paragraph='I continually deal damage onto a target using <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> to add damage directly into the <WH short="DoT">Aspect of Harmony DoT</WH>.

Since I continued dealing damage into the <WH short="DoT">Aspect of Harmony DoT</WH>, my future damaging abilities will be buffed by 20% from <WH>Coalescence</WH> and 40% of that hit will continue to pile up into the targets of my damage and refresh the duration of the <WH short="DoT">Aspect of Harmony DoT</WH> until either my <WH short="Withdraw">Aspect of Harmony Withdraw</WH> window is over or I’ve used up all of my vitality.' image={require("../images/moh/Aspect-Healing-HoT.gif").default} />


<FloatingImage direction="rtl" title="Intensify" paragraph='I applied <WH>Aspect of Harmony DoT</WH> onto my target through one <WH>Tiger Palm</WH> and continued to “intensify” the <WH short="DoT">Aspect of Harmony DoT</WH> by <WH>Spinning Crane Kick</WH>. Even though that ability isn’t listed in the <WH>Harmonic Gambit</WH> tooltip, intensification from <WH>Coalescence</WH> can work off any damage. <blockquote>This happens naturally with your regular <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> rotation, as well. 
With current tuning, I would still avoid using <WH>Spinning Crane Kick</WH> rotationally.</blockquote>' image={require("../images/moh/Aspect-Healing-HoT.gif").default} />


<FloatingImage title="What NOT to do" paragraph='Pressing <WH>Thunder Focus Tea</WH> then using damaging abilities outside of <WH>Tiger Palm</WH>, <WH>Blackout Kick</WH>, and <WH>Rising Sun Kick</WH> when the original intent was to spend vitality on damage. 
As you can see, the <WH short="DoT">Aspect of Harmony DoT</WH> was never applied since <WH>Crackling Jade Lightning</WH> is not part of the <WH>Harmonic Gambit</WH> talent and 0 vitality was removed from your reservoir. <blockquote>This causes your vitality to go poof if not fully consumed!</blockquote>' image={require("../images/moh/Aspect-Healing-HoT.gif").default} />
