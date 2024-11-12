import React from 'react';

type WowheadLinkProps = {
  spellName: string;
};

const spellMap: Record<string, number> = {
  'Wild Growth': 48438,
  Rejuvenation: 774,
  Regrowth: 8936,
  Efflorescence: 145205,
  Lifebloom: 33763,
  // Add more spells here as needed
};

const WowheadLink = ({ spellName }: WowheadLinkProps) => {
  const spellId = spellMap[spellName];

  if (!spellId) {
    console.warn(`Spell "${spellName}" not found in spellMap.`);
    return <span>{spellName}</span>; // Fallback to plain text if spell is not found
  }

  return (
    <a href={`https://www.wowhead.com/spell=${spellId}`} target="_blank" rel="noopener noreferrer">
      {spellName}
    </a>
  );
};

type WowheadShorthandProps = {
    children: string;
  };
  
export const WH = ({ children }: WowheadShorthandProps) => {
return <WowheadLink spellName={children} />;
};

export default WH;