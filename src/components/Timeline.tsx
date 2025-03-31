import { env } from "process";
import React from "react";
import spellMap from '@site/src/components/IconLinks.json';

type TimelineProps = {
    spellNames: string[];
};

const Timeline: React.FC<TimelineProps> = ({ spellNames }) => {
    return (
        <div style={{ marginTop: 15, display: "flex", alignItems: "center", gap: 5 }}>
            {spellNames.map((spell) => {
                const spellIcon = spellMap[spell] || "inv_misc_questionmark";
                return (
                    <div
                        key={spell}
                        style={{
                            position: "relative",
                            width: "40px",
                            height: "40px",
                            borderRadius: "4px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={`https://wow.zamimg.com/images/wow/icons/large/${spellIcon}.jpg`}
                            alt={spell}
                            width={40}
                            height={40}
                            style={{ borderRadius: "4px", objectFit: "cover" }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
