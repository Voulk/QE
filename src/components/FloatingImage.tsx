import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { checkExists, WH } from './WowheadLink'; 


type SideBySideFlexProps = {
    title: string;
    paragraph: string;
    image: any;
    direction?: string;
  };

const FloatingImage: React.FC<SideBySideFlexProps> = ({title, image, paragraph, direction}) => {
    const isDarkTheme = useColorMode().colorMode === 'dark';
    const color1 = isDarkTheme ? "goldenrod" : "#54460A";
    const color2 = isDarkTheme ? "#00A800" : "#005117";

    const background1 = isDarkTheme ? "#54460A" : "goldenrod";
    const background2 = isDarkTheme ? "#005117" : "#00A800";

    const isRTL = direction === 'rtl';

    /*const renderParagraph = (text: string) => {
        const parts = text.split(/(\s+)/); // Split by spaces but keep spaces
        return parts.map((part, index) => {
          if (checkExists((part.replace(/[.,!?]/g, '')))) { // Remove punctuation for matching
            return <WH key={index}>{part}</WH>;
          }
          return part; // Return plain text otherwise
        });
      };*/


    const renderParagraph = (text: string) => {
        return text.split(/(<WH[^>]*>.*?<\/WH>|<blockquote>.*?<\/blockquote>)/gs).map((part, index) => {
            console.log(part)
            if (part.startsWith("<WH") && part.endsWith("</WH>")) {
                const content = part.slice(part.indexOf('>') + 1, part.lastIndexOf('<'));
                const shortNameMatch = part.match(/short="([^"]+)"/);
                return shortNameMatch ? <WH key={index} short={shortNameMatch[1]}>{content}</WH> : <WH key={index}>{content}</WH>;
            }
            if (part.startsWith("<blockquote>")) {
              const innerContent = part.slice(12, -13);
              return <blockquote key={index}>{renderParagraph(innerContent)}</blockquote>;
            }
            return part;
        });
    };


    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {isRTL ? (
              <>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                      <h4 style={{ color: '#00FF98' }}>{title}</h4>
                      <p>{renderParagraph(paragraph)}</p>
                  </div>
                  <img
                      style={{ marginLeft: '12px', marginBottom: '12px', maxWidth: '250px' }}
                      src={image}
                      alt={title}
                  />
              </>
          ) : (
              <>
                  <img
                      style={{ marginRight: '12px', marginBottom: '12px', maxWidth: '250px' }}
                      src={image}
                      alt={title}
                  />
                  <div style={{ flex: '1', minWidth: '200px' }}>
                      <h4 style={{ color: '#00FF98' }}>{title}</h4>
                      <p>{renderParagraph(paragraph)}</p>
                  </div>
              </>
          )}
      </div>
  );
}

export default FloatingImage;