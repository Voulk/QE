import React from 'react';

type ItemLinkProps = {
  itemName: string;
};

const itemMap = {
    // Consumables
    "Flask of Tempered Swiftness": 431972,
    "Algari Mana Oil": 224107,
    "Feast": 222732,
    "Algari Mana Potion": 212241,
    "Tempered Potion": 212265,
    "Crystallized Augment Rune": 224572,
    "Dreambound Augment Rune": 211495,

    // Enchants
    "Fiery Resolve": 223778,
    "Radiant Power": 223781,
    "Chant of Leeching Fangs": 223737,
    "Crystalline Radiance": 223692,
    "Chant of Armored Leech": 223719,
    "Sunset Spellthread": 222893,
    "Defender's March": 223656,
    "Radiant Haste": 223674,

    "Elusive Blasphemite": 213746,
    "Culminating Blasphemite": 213743,
    "Masterful Emerald": 213482, // Haste > Mastery
    "Quick Onyx": 213494, // Mastery > Haste
    "Quick Sapphire": 213470, // Versatility > Haste

    "Spark of Omens": 211296,
    "Binding of Binding": 215133,
    "Darkmoon Sigil: Ascension": 226024,
    "Darkmoon Sigil: Symbiosis": 226030,
    "Duskthread Lining": 222873,
    "Writhing Armor Banding": 219506,

    // Cyrce's Circlet
    "Cyrce's Circlet": 228411,
    "Stormbringer's Runed Citrine": 228638,
    "Fathomdweller's Runed Citrine": 228639,
    "Legendary Skipper's Citrine": 228646,
    "Mariner's Hallowed Citrine": 228644,
    "Old Salt's Bardic Citrine": 228643,
}

export const checkExists = (itemName: string) => {
  return itemMap[itemName] !== undefined;
};

//const spellMap: Record<string, number> = JSON.parse(fs.readFileSync('SpellLinks.json', 'utf8'));

const ItemLink = ({ itemName }: ItemLinkProps) => {
  const itemId = itemMap[itemName];

  if (!itemId) {
    console.warn(`item "${itemName}" not found in spellMap.`);
    return <span>{itemName}</span>; // Fallback to plain text if spell is not found
  }

  return (
    <a href={`https://www.wowhead.com/item=${itemId}`} target="_blank" rel="noopener noreferrer">
      {itemName}
    </a>
  );
};

type WowheadShorthandProps = {
    children: string;
  };
  
export const ITEM = ({ children }: WowheadShorthandProps) => {
  return <ItemLink itemName={children} />;
};

export default ITEM;