import React from 'react';
import spellMap from '@site/src/components/SpellLinks.json';

type WowheadLinkProps = {
  spellName: string;
};

export const checkExists = (spellName: string) => {
  return spellMap[spellName] !== undefined;
};

//const spellMap: Record<string, number> = JSON.parse(fs.readFileSync('SpellLinks.json', 'utf8'));

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