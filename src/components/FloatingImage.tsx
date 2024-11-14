import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';


type SideBySideFlexProps = {
    title: string;
    paragraph: string;
    image: any;
  };

const FloatingImage: React.FC<SideBySideFlexProps> = ({title, image, paragraph}) => {
    const { isDarkTheme } = useColorMode();
    const color1 = isDarkTheme ? "goldenrod" : "#54460A";
    const color2 = isDarkTheme ? "#00A800" : "#005117";

    const background1 = isDarkTheme ? "#54460A" : "goldenrod";
    const background2 = isDarkTheme ? "#005117" : "#00A800";

    return (
        <div>
            <img style={{float: 'left', marginRight: '12px'}} src={image} /> 
            <h4 style={{color: '#00FF98'}}> {title}</h4> 
            <p>{paragraph}</p>
            <div style={{ clear: 'both' }}></div>
        </div>
    )
}

export default FloatingImage;