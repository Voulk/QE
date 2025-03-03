

# Updating your UI

## Addons
You can succeed as a healer with a wide range of different user interfaces. These addons are most important:
- Proper raid frames (Grid2, Vuhdo, ElvUI, Cell)
- Weak Auras
- Boss Addon (Bigwigs preferred but DBM is acceptable)

### Grid2
![Grid2 Profile](.\images\QE-Grid2-Druid.png)

**Why you want it:**
- Shows very visibly which HoTs are on what targets, and how long they have left. Very little visual fluff.
- It’s easy on your CPU and uses hardly any memory.
- Very straightforward to customize.
- Can be combined with macros or Clique for mouse-over casting (recommended).

**Import String:**


---

## Weak Auras
WeakAuras is a crazy powerful addon that can perform almost any task. I'd advise trying to keep your Weak Auras usage reasonable. There are essential raid and dungeon packs you'll have to use to be competitive but avoid adding 50+ since it can harm your FPS.

### Druid Cursor Combo
![Cursor Combo](.\images\cursor-combo.png)

**Why you want it:** A key to healing efficiently as a Druid is to have an Efflorescence down 100% of the time on most fights, especially if you take the Spring Blossoms talent. High lifebloom uptime is also essential due to the Photosynthesis talent. This Weak Aura will make it very obvious when you need to recast them by binding them to your cursor.

**Combo Package:** https://wago.io/cursorcombo

### Abundance Tracker
![Abundance Tracker](.\images\abundance-tracker.png)

**Why you want it:** Regrowth becomes a key cast when your rejuvenation count is high. This tracker both gives you in-combat feedback as to how well you’re ramping as well and you can act on the information to swap in Regrowth casts when the number is high.

### Innervate
![Innervate Tracker](.\images\innervate.jpg)

**Why you want it:** You need to be chain casting spells while Innervate is up to maximize its value (even if nobody is missing health). This WeakAura will give you a visual display and countdown to make sure you’re doing that.
**Import String:** https://wago.io/innervate

## Useful Macros
| Purpose | Macro |
| --- | --- |
| Self Cast Innervate | /cast [@player] Innervate |
| Mouseover Casts. Replace Rejuvenation with whatever spell name you'd like | /cast [@mouseover,help] Rejuvenation; Rejuvenation |
| Travel Cat: This attempts to put you into Travel Form, but will pick Cat Form instead if you're inside. | #showtooltip <br /> /cast [indoors] Cat Form; Travel Form(Shapeshift)

While Mouseover healing is essential, I'd recommend using an addon like Clique or Clicked instead of macros since it's much faster. 