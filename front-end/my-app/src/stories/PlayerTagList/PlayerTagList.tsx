import React from "react";

import { PlayerTag } from "../../models/PlayerTag";
import { NewButton } from "../NewButton/NewButton";
import './PlayerTagList.css';

export interface PlayerTagListProp {
    label?: string,
    colour?: string,
    playerTags?: Array<PlayerTag>
}

export const PlayerTagList = ({label, playerTags = []}: PlayerTagListProp) => {
    return (
        <div className="player-tag-list">
            <h3>{label}</h3>
            <ul className="list-items">
                {playerTags.map(t => (
                    <li><NewButton label={t.Tag} size="large" primary width="180px" /></li>
                ))}
            </ul>
        </div>
    );
}

