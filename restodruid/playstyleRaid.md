---
sidebar_position: 1
sidebar_class_name: green
---

import React from 'react'
import ReactPlayer from 'react-player'


# Raid



<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
  <ReactPlayer 
    url="https://i.imgur.com/9S0L0SW.mp4" 
    playing 
    controls 
    style={{ paddingRight: "12px" }} 
    width="500px"
    height="auto"
  />
<div style={{ flex: '1', minWidth: '200px' }}>
    ### Header Example
    Text example
</div>
</div>




So, we’ve learned a little bit about our spells, but perhaps more importantly we must learn when to cast what. This can sometimes be encounter specific so think of these as general strategies that can work well in a wide variety of situations.

&nbsp;
&nbsp;
&nbsp;

## Raid Healing Strategy
To raid heal as a Resto Druid you will learn to **anticipate damage**. This can be a very rewarding play style as you’ll find your numbers going steadily up as you learn how best to heal each boss. It can be easy as a new player to react to damage going out by casting <WH>Rejuvenation</WH>s on damaged players which is acceptable but not optimal. Make sure you read the ramps section further down the page after you’ve finished this brief summary. Most of your HPS will come from combining your buttons.
- Keep <WH>Efflorescence</WH> on a stack of at least three allies likely to take damage. You can often line up both the tank and melee group to guarantee full value. Aim for 100% uptime.
- Keep <WH>Lifebloom</WH> on yourself for <WH>Photosynthesis</WH> value. Aim for 100% uptime. Losing uptime here is a significant healing loss.
- Cast <WH>Wild Growth</WH> on cooldown if six or more allies have taken damage. You shouldn’t cast <WH>Wild Growth</WH> before the damage hits as the first few ticks of the HoT are the largest and shouldn’t be wasted. <WH>Wild Growth</WH> is very efficient, and should be cast as often as possible. Pair it with <WH>Swiftmend</WH> for <WH>Soul of the Forest</WH> value.
- Cast <WH>Rejuvenation</WH> on any allies that are about to take damage, or that have taken significant damage. You’ll get into the habit of chain-casting a bunch of Rejuvs before major raid damage goes out – with the <WH>Luxuriant Soil</WH> talent you can begin doing this quite far before raid damage hits. We’ll discuss this further below in the “ramps” section.
- Cast <WH>Grove Guardians</WH> throughout the fight. Your timing here isn’t too important and you’re fine to just send one or more whenever the raid is taking a decent amount of damage. Your key goals are to avoid overcapping your charges. <WH>Grove Guardians</WH> are not on the global cooldown which means you can and should cast them at the same time as another spell.
- Use <WH>Regrowth</WH> and <WH>Swiftmend</WH> to keep low HP people from dying. Prioritize targets with already existing HoTs for a larger emergency heal. If you are running <WH>Abundance</WH> you will cast <WH>Regrowth</WH> a lot after you hit <WH>Flourish</WH> or whenever you have a ton of <WH>Rejuvenation</WH>s out.

:::tip
Always remember: Your job is to keep people alive, and you should throw everything into making sure that’s the case. Saving people who made a mistake can greatly speed up your progression.
:::


### What to do with downtime
Especially early in fights, you’ll have many opportunities where there isn’t much damage going out. Keep <WH>Efflorescence</WH> down and cast <WH>Swiftmend</WH> -> <WH>Wild Growth</WH> whenever the raid is lightly injured. After that, you have a bit of a choice:
- If significant raid damage is coming up soon, start casting <WH>Rejuvenation</WH>.
- Cast <WH>Wrath</WH> as a filler. <WH>Moonfire</WH> & <WH>Sunfire</WH> aren’t great value for their mana cost. Most of your damage will come from Nature’s Vigil so your downtime DPS casts aren’t particularly important.


## How to Ramp

You might combine your abilities differently depending on the fight, but here are some examples to help get you started.

### The <WH>Convoke</WH> / <WH>Flourish</WH> Ramp
![Ramp Example](.\images\Druid-Ramp-Sequence.png)

*Note that Rejuv and <WH>Regrowth</WH> numbers here are variable and are likely to greatly exceed those displayed above.*

Resto druid is a ramp based healer which means we’ll be casting a ton of spells in a sequence when damage is coming up. We do this so when big damage hits we’re already prepared and have HoTs on the majority of the raid. It also lets us maximize the value of casts like <WH>Flourish</WH> and offers much higher Mastery value than individual HoTs would. Your typical ramp sequence will look something like this:

1. Begin casting <WH>Rejuvenation</WH> ~15 seconds before you’re expecting damage. Don’t worry about getting a precise number out since that’ll depend on how much haste you have. As many as you can is fine. You can either Rejuv targets twice for increased mastery value or spread them out for better coverage. If your <WH>Incarnation: Tree of Life</WH> is assigned here, then pop it before you start casting Rejuv so that you can benefit from the huge mana savings.
2. As damage is about to hit, cast <WH>Swiftmend</WH> -> <WH>Wild Growth</WH> -> <WH>Flourish</WH>.
3. Chain cast <WH>Regrowth</WH> after your <WH>Flourish</WH>. We have a lot of <WH>Rejuvenation</WH>s out so the <WH>Regrowth</WH> casts are cheaper and have a high crit rate.

To break it down a little bit, we’re putting out as many HoTs as we can in order to extend them. We’ll hit <WH>Swiftmend</WH> before <WH>Wild Growth</WH> in for <WH>Soul of the Forest</WH>, and so that a <WH>Wild Growth</WH> is included in <WH>Flourish</WH>.

**Further Ramp Improvements**

Cast <WH>Swiftmend</WH> twice in between <WH>Convoke</WH> the Spirit casts so that you have two stacks of <WH>Reforestation</WH> going into your ramp. This will require you to have slightly better preparation since you need to be on top of your <WH>Reforestation</WH> stacks. The reward though is a massive increase to your healing. You’ll also be able to use <WH>Incarnation: Tree of Life</WH> itself roughly every second <WH>Flourish</WH> ramp.

A ramp sequence is a good time to use <WH>Innervate</WH> too.

## Tank, Debuff & Single Target healing strategies

The value of single-target healing changes a lot from patch to patch. Right now it isn’t all too important but we’ll cover it just in case. There are a few notable encounters that deal challenging tank damage like Experiments and Sarkareth.

- Keep 2 <WH>Rejuvenation</WH> buffs up at all times.
- Generally don’t move your <WH>Lifebloom</WH> to them unless there is no raid damage going out. It’s more important to keep it on yourself for the improved tick rate.
- Respond to extra damage by first casting <WH>Cenarion Ward</WH> if taken. It’s very mana-efficient and applies another stack of our Mastery.
- Respond to bursts of damage by casting <WH>Regrowth</WH>, or <WH>Swiftmend</WH> if a 1.5-second cast is too slow.
- Use <WH>Regrowth</WH> if the damage is spiky. If it’s not, trust your HoTs to do their job. You shouldn’t expect to have the tank at 100% HP for an entire fight.
- *(Extra)* Use <WH>Ironbark</WH> if the incoming damage is too much to handle, or if you’re expecting incoming damage to be huge.