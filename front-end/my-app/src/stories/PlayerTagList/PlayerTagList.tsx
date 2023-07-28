import React from "react";

import { PlayerTag } from "../../models/PlayerTag";
import { NewButton } from "../NewButton/NewButton";
import './PlayerTagList.css';

import { Link } from "react-router-dom";
import {useCocPlayerQuery} from "../../api/apiSlice";

export interface PlayerTagListProp {
    label?: string,
    colour?: string,
    playerTags?: Array<PlayerTag>,
    type?: number,
}

export const PlayerTagList = ({label, colour, playerTags = [], type = 0}: PlayerTagListProp) => {
    var url : string;
    switch (type) {
        case 0: {
            url = "http://localhost:3000/CocPlayer/";
            break;
        }
        case 1: {
            url = "http://localhost:3000/CrPlayer/";
            break;
        }
        case 2: {
            url = "http://localhost:3000/BsPlayer/";
            break;
        }
    }
    return (
        <div className="player-tag-list">
            <h3>{label}</h3>
            <ul className="list-items">
                {playerTags.map(t => (
                    <li><NewButton label={t.tag} size="large" primary backgroundColor={colour} width="180px" onClick={() => window.location.replace(url + encodeURIComponent(t.tag))} /></li>
                ))}
            </ul>
        </div>
    );
}

