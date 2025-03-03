import { env } from "process";
import React from "react";

// ugly implementation do not use lol
// maybe can push wowhead tooltip data into the image instead? use spelllinks.json for it
// also the href of the wowhead link puts the icon before the img lol

type Spell = {
    name: string;
    icon: string;
};

const renewing_mist = {
    name: "Renewing Mist",
    id: 115151,
    icon: "ability_monk_renewingmists"
}

const thunder_focus_tea = {
    name: "Thunder Focus Tea",
    id: 116680,
    icon: "ability_monk_thunderfocustea"
}

const enveloping_mist = {
    name: "Enveloping Mist",
    id: 124682,
    icon: "spell_monk_envelopingmist"
}

const vivify = {
    name: "Vivify",
    id: 116670,
    icon: "ability_monk_vivify"
}

const sheiluns_gift = {
    name: "Sheilun's Gift",
    id: 399491,
    icon: "inv_staff_2h_artifactshaohao_d_01"
}

const revival = {
    name: "Revival",
    id: 115310,
    icon: "spell_monk_revival"
}

const rising_sun_kick = {
    name: "Rising Sun Kick",
    id: 107428,
    icon: "ability_monk_risingsunkick"
}

const tiger_palm = {
    name: "Tiger Palm",
    id: 100780,
    icon:  "ability_monk_tigerpalm"
}

const blackout_kick = {
    name: "Blackout Kick",
    id: 100784,
    icon:  "ability_monk_roundhousekick"
}

const crackling_jade_lightning = {
    name: "Crackling Jade Lightning",
    id: 117952,
    icon: "ability_monk_cracklingjadelightning"
}

const chiji = {
    name: "Invoke Chi-Ji, the Red Crane",
    id: 325197,
    icon: "inv_pet_cranegod"
}


const spellSets: Spell[][] = [
  [renewing_mist, renewing_mist, thunder_focus_tea, enveloping_mist, vivify, vivify, vivify],
  [thunder_focus_tea, sheiluns_gift],
  [enveloping_mist, enveloping_mist, enveloping_mist, thunder_focus_tea, revival],
  [thunder_focus_tea, rising_sun_kick, tiger_palm, rising_sun_kick, tiger_palm, blackout_kick],
  [thunder_focus_tea, rising_sun_kick, tiger_palm, rising_sun_kick, tiger_palm, blackout_kick, crackling_jade_lightning],
  [thunder_focus_tea, rising_sun_kick, crackling_jade_lightning, rising_sun_kick],
  [tiger_palm, tiger_palm, chiji, thunder_focus_tea, enveloping_mist, blackout_kick, enveloping_mist, rising_sun_kick, blackout_kick, enveloping_mist],
  [renewing_mist, renewing_mist, thunder_focus_tea, rising_sun_kick, vivify, rising_sun_kick, vivify],
  [enveloping_mist, enveloping_mist, enveloping_mist, thunder_focus_tea, rising_sun_kick, sheiluns_gift, rising_sun_kick, tiger_palm, tiger_palm, blackout_kick]
];

type TimelineProps = {
    spellsIndex: number;
};

const Timeline: React.FC<TimelineProps> = ({ spellsIndex }) => {
    const spells = spellSets[spellsIndex] || [];

    return (
        <div style={{ marginTop: 15, display: 'flex', alignItems: 'center', gap: 5 }}>
            {spells.map((spell) => (
                <a href={`https://www.wowhead.com/spell=${spell.id}`}>
                    <div
                        style={{
                            position: 'relative',
                            width: '40px',
                            height: '40px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={`https://wow.zamimg.com/images/wow/icons/large/${spell.icon}.jpg`}
                            alt={spell.name}
                            width={40}
                            height={40}
                            style={{
                                borderRadius: '4px',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Timeline;
