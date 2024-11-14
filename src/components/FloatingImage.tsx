import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';


type SideBySideFlexProps = {
    title: string;
    paragraph: string;
    image: any;
  };

const FloatingImage: React.FC<SideBySideFlexProps> = ({title, image, paragraph}) => {
    const isDarkTheme = useColorMode().colorMode === 'dark';
    const color1 = isDarkTheme ? "goldenrod" : "#54460A";
    const color2 = isDarkTheme ? "#00A800" : "#005117";

    const background1 = isDarkTheme ? "#54460A" : "goldenrod";
    const background2 = isDarkTheme ? "#005117" : "#00A800";

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <img
          style={{ marginRight: '12px', marginBottom: '12px', maxWidth: '250px' }} // Ensure image resizes if necessary
          src={image}
          alt={title} // Add alt for accessibility
        />
        <div style={{ flex: '1', minWidth: '200px' }}> {/* Prevents text from shrinking too much */}
          <h4 style={{ color: '#00FF98' }}>{title}</h4>
          <p>{paragraph}</p>
        </div>
      </div>
    )
}

export default FloatingImage;