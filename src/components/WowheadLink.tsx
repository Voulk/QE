import React from 'react';
import spellMap from '@site/src/components/SpellLinks.json';

type WowheadLinkProps = {
  spellName: string;
  short?: string; // Optional short name field
};

export const checkExists = (spellName: string) => {
  return spellMap[spellName] !== undefined;
};

//const spellMap: Record<string, number> = JSON.parse(fs.readFileSync('SpellLinks.json', 'utf8'));

const WowheadLink = ({ spellName, short }: WowheadLinkProps) => {
  const spellId = spellMap[spellName];

  if (!spellId) {
    console.warn(`Spell "${spellName}" not found in spellMap.`);
    return <span>{spellName}</span>; // Fallback to plain text if spell is not found
  }

  return (
    <a href={`https://www.wowhead.com/spell=${spellId}`} target="_blank" rel="noopener noreferrer">
      {short || spellName}{/* Use shortName if provided, otherwise fallback to spellName */}
    </a>
  );
};

type WowheadShorthandProps = {
  children: string;
  short?: string; // Optional short name field for shorthand component
};

export const WH = ({ children, short }: WowheadShorthandProps) => {
  return <WowheadLink spellName={children} short={short} />;
};

export default WH;
