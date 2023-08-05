import React from "react";

import { PlayerTag } from "../../models/PlayerTag";
import { NewButton } from "../NewButton/NewButton";
import './PlayerTagList.css';

import { Link } from "react-router-dom";
import {useRemoveCocPlayerTagMutation, useRemoveCrPlayerTagMutation, useRemoveBsPlayerTagMutation} from "../../api/apiSlice";

export interface PlayerTagListProp {
    label?: string,
    colour?: string,
    playerTags?: Array<PlayerTag>,
    type?: number,
    id?: string,
}

export const PlayerTagList = ({label, colour, playerTags = [], type = 0, id}: PlayerTagListProp) => {
    const [removeCocPlayer] = useRemoveCocPlayerTagMutation();
    const [removeCrPlayer] = useRemoveCrPlayerTagMutation();
    const [removeBsPlayer] = useRemoveBsPlayerTagMutation();

    function test() {
        if (window.confirm("confirm?")) {
            console.log("yes!");
        }
    }

    function rCocPlayer(tag: PlayerTag) {
        if (window.confirm(`Remove player tag?${tag.tag}`)) {
            removeCocPlayer(tag);
            window.location.reload()
        }
    }

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
                    <li>
                        <span style={{display:"flex",}}>
                            <NewButton label={t.tag} size="large" primary backgroundColor={colour} width="180px" onClick={() => window.location.replace(url + encodeURIComponent(t.tag))} />
                            <NewButton label="X" size="xsmall" backgroundColor="red" onClick={() => rCocPlayer(t)} />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

