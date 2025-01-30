import React from 'react';

type ItemLinkProps = {
  itemName: string;
};

const itemMap = {
    "Flask of Tempered Swiftness": 431972,
    "Algari Mana Oil": 224107,
    "Feast": 222732,
    
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