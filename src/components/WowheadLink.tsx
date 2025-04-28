import React from 'react';
import spellMap from '@site/src/components/SpellLinks.json';

type WowheadLinkProps = {
  spellName: string;
  short?: string;
};

export const checkExists = (spellName: string) => {
  return spellMap[spellName] !== undefined;
};

//const spellMap: Record<string, number> = JSON.parse(fs.readFileSync('SpellLinks.json', 'utf8'));

const WowheadLink = ({ spellName, short }: WowheadLinkProps) => {
  const spellId = spellMap[spellName];

  if (!spellId) {
    console.warn(`Spell "${spellName}" not found in spellMap.`);
    return <span>{spellName}</span>;
  }

  return (
    <a href={`https://www.wowhead.com/spell=${spellId}`} target="_blank" rel="noopener noreferrer">
      {short || spellName}
    </a>
  );
};

type WowheadShorthandProps = {
  children: string;
  short?: string; 
};

export const WH = ({ children, short }: WowheadShorthandProps) => {
  return <WowheadLink spellName={children} short={short} />;
};

export default WH;
