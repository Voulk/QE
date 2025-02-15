---
slug: deck-of-cards
title: The Heart of the Cards - WoWs new RNG system
image: https://questionablyepic.com/wp-content/uploads/2024/08/Raid-Trinkets.png
authors: [voulk]
tags: []
---

![Deck of Cards RNG](.\DoC-RNG-1.png)

An in-depth look into a type of unconventional RNG used sometimes in WoW.


<!-- truncate -->


In Legion Blizzard introduced a new system of RNG into the game, featuring it on several legendary items and a trinket. It was accompanied by a brief explanation in a Reddit developer AMA. It's designed to smooth out your luck, making chance-based items much more consistent at the cost of the huge streaks you can achieve with pure chance. Think of it as 'Good luck protection' and 'Bad luck protection' rolled up into one. Post-Legion, this type of RNG is used less but still pops up from time to time in spells like <WH>Convoke the Spirits</WH>.




## How it works

They branded the new system "Deck of Cards", and you'll see why in a second. Let's take an example, Chameleon Song, the new Resto Druid legendary. The tooltip reads "Wild Growth has a 15% chance to grant you Tree of Life for 12 seconds". You might assume that each Wild Growth cast has an independent 15% chance to proc the effect when cast and this is actually how similar items have worked in the past. In the new system however the proc chance is based off a deck of cards where we have X cards in total of which Y are procs. The number of cards / procs in the deck vary from item to item. Every time you cast the listed spell, you'll draw a card. An example will hopefully clarify:
![Example Deck](.\Deck-10.png)

*This would be a 10 card deck with 2 procs.*




Picture a similar deck with 20 cards. 17 of them have an "X" on them and the remaining 3 have a "Proc". Every time we cast Wild Growth we'll draw a card from the top of the deck. If the card has an "X" on it then our helm didn't proc. However, if we drew a "Proc" then we were successful and we'll spend the next 12 seconds in Tree Form. As we work through the deck our odds of pulling a "Proc" or an "X" on our next cast gets higher or lower based on what we've already drawn. If we pull 10 "X" cards in a row, our odds of getting a proc on the next cast is now 3/10 (double the tooltip). Similarly, if we open the fight by drawing three "Proc" cards then we are guaranteed to get 0 procs for the next 17 casts! Using this system we will always get 3 procs within every 20 casts of Wild Growth. You can think of it as a 'controlled randomness'. Once you've emptied the deck (i.e. you've cast 20 spells) you'll shuffle and start over again.

![Helm Example](.\BestRNG.png)

*Voulks attempt to use the new helm. Smoothed out RNG indeed.*




**The following legendary items use the new system:**
- Chameleons Song (Resto Druid - 3 procs - 20 card deck)
- Chaos Theory (Havoc Demon Hunter - 2 procs - 20 card deck)
- Doorway to Nowhere (Mistweaver Monk - 4 procs - 20 card deck)
- Fire in the Deep (Resto Shaman - 3 procs - 20 card deck)
- Inner Hallation (Disc Priest - 7 procs - 20 card deck)
- The Alabaster Lady (Holy Priest - 3 procs - 20 card deck)
- The Topless Tower (Holy Paladin - 2 procs - 20 card deck)

If you get a proc while you have the buff active it will add to the duration up to a maximum of the duration of the spell itself. So, for Disc Priests you can get a maximum of 20s on your Power Infusion buff. For some reason Chameleon Song is an exception, and you can surpass the 30s duration on Tree of Life.

The Deck system is also used by Tomb of Sargeras trinket, Sea Star of the Depthmother (10 card deck) and the number of procs in the deck vary by spec:

- Disc Priest: 6 procs
- Mistweaver Monk, Resto Druid: 5 procs
- Holy Priest, Holy Paladin, Resto Shaman: 4 procs


## Resetting the deck

The deck resets (shuffles) at the start of raid combat and when you run out of cards in the deck. That's it. No other resets.

The list of things that did not trigger a shuffle at the original time of writing include:
- Relogging.
- Re-equipping the item.
- Starting a dungeon.
- Entering combat in a non-raid environment.
- Death (both in-game and presumably real life).


## You got a weak aura for that?

Yesss. The below weak auras will track the number of cards left in the deck, as well as the number of 'procs' you have remaining.

![WA Trackers](.\Item-Trackers.png)

Use this one for all legendaries: https://wago.io/HkSWyLRrb

Use this one for Sea Star of the Depthmother: https://wago.io/SkVZBBAHW


## But how does it change my odds?

Let's look a little deeper into the effect the new system might have on our raid performance. You can consider this section supplementary.

We'll open with the expected number of procs for each system over 20 casts, which should be identical.
- "Pure Chance" is a binomial distribution and our expected number of procs is  20 * 0.15 = 3 with a variance of 2.6.
- "Deck of Cards" follows a hypergeometric distribution and our expected number of procs is 20 * (3 / 20) = 3 with a variance of 0.

This should hopefully make some intuitive sense. If I cast Prayer of Mending 1000 times, I should expect exactly 150 procs using Deck of Cards and an average of 150 procs using Pure Chance. So the system isn't giving us any more or any less overall procs and this is true regardless of the number of cards you draw during the fight.




The real difference between the two systems is the variance as seen above which is what defines the proc predictability. Check out the graphs below which compare the deck method (the blue bars) to chance (the red line) over a series of casts. The graphs are based off a 20 card deck with 3 procs but you'll see similar results with any of the new legendaries.

![Deck vs Chance](.\Deck-vs-Chance-distribution.png)

We can see the low variance of the Deck system in action. 15 casts into the fight I'm almost assured 2-3 procs with Deck whereas random chance would grant me between 0 and 6 (technically 0 and 15 but let's be reasonable).




## To cap it off

I think this is a really cool way of introducing some 'controlled chance' into our gearing options and I'd like to see more in future, especially on healer items where low variance is desirable. This could be a great accompaniment to the rppm system used by most trinkets. Hopefully blizzard will experiment with smaller deck sizes since it can be quite demoralizing to run through your proc cards in your first 10 or so casts and know that you've got nothing coming for the next few minutes.
