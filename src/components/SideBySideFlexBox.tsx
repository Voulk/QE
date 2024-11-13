import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';


type SideBySideFlexProps = {
    leftTitle: string;
    rightTitle: string;
    leftText: string;
    rightText: string;
  };

const SideBySideFlex: React.FC<SideBySideFlexProps> = ({leftTitle, rightTitle, leftText, rightText}) => {
    const { isDarkTheme } = useColorMode();
    const color1 = isDarkTheme ? "goldenrod" : "#54460A";
    const color2 = isDarkTheme ? "green" : "#005117";

    const background1 = isDarkTheme ? "#54460A" : "goldenrod";
    const background2 = isDarkTheme ? "#005117" : "green";

    return (
        <div style={{ display: 'flex', gap: '10px', width: '100%'  }}>
            <div style={{ flex: '1', borderRadius: '8px', border: '2px  solid', borderColor: color1, backgroundColor: background1, padding: '8px' }}>
                <h3>{leftTitle}</h3>
                <p>{leftText}</p>
            </div>
            <div style={{ flex: '1', borderRadius: '8px', border: '2px solid', borderColor: color2, backgroundColor: background2, padding: '8px' }}>
                <h3>{rightTitle}</h3>
                <p>{rightText}</p>
            </div>
        </div>
    )
}

export default SideBySideFlex;