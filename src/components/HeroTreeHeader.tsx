import React from 'react';

type HeroTreeProps = {
  src: string;
  alt: string;
  size?: number; // Default size for the image
};

const heroTreeData = {
    'Conduit of the Celestials': {'colour': '', image: './heroTreeImages/Conduit-Of-The-Celestials.png'},
}


const HeroTreeHeader: React.FC<HeroTreeProps> = ({ src, alt, size = 20 }) => {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '5px' }}>
        <img
        src={src}
        alt={alt}
        style={{
            width: `${size}px`,
            height: `${size}px`,
            //verticalAlign: 'baseline', // Aligns image with the text baseline
            verticalAlign: 'bottom',
            margin: '0 2px',
        }}
        />
    <span style={{ lineHeight: '1' }}>{"Conduit of the Celestials"}</span></span>
  );
};

export default HeroTreeHeader;