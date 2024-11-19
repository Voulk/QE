import React from 'react';

type HeroTreeProps = {
    heroTree: string; // Name of the hero tree
    showImage? : boolean; // Whether to show the image or just show highlighted text.
    size?: number; // Default size for the image
};

const heroTreeData = {
    'Conduit of the Celestials': {'colour': {dark: "#00CBFF", light: "#00CBFF"}, image: require("./heroTreeImages/conduit-of-the-celestials.png").default},
    'Master of Harmony': {'colour': {dark: "#15FF00", light: "#00CBFF"}, image: require("./heroTreeImages/master-of-harmony.png").default},
    'Wildstalker': {'colour': {dark: "#FF6A00", light: "#00CBFF"}, image: require("./heroTreeImages/wildstalker.png").default},
    'Keeper of the Grove': {'colour': {dark: "#15FF00", light: "#00CBFF"}, image: require("./heroTreeImages/keeper-of-the-grove.png").default},
    'Chronowarden': {'colour': {dark: "#15FF00", light: "#00CBFF"}, image: require("./heroTreeImages/chronowarden.png").default},
    'Flameshaper': {'colour': {dark: "#15FF00", light: "#00CBFF"}, image: require("./heroTreeImages/flameshaper.png").default},
}


const HeroTreeHeader: React.FC<HeroTreeProps> = ({ heroTree, showImage = true, size = 20 }) => {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '5px' }}>
        {showImage ? <img
        src={heroTreeData[heroTree].image}
        alt={heroTree}
        style={{
            width: `${size}px`,
            height: `${size}px`,
            //verticalAlign: 'baseline', // Aligns image with the text baseline
            verticalAlign: 'bottom',
            margin: '0 2px',
        }}
        /> : null}
    <span style={{ lineHeight: '1', color: heroTreeData[heroTree].colour.dark }}>{heroTree}</span></span>
  );
};

export default HeroTreeHeader;