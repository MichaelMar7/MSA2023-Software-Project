import React, { useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";

import { useCocPlayerQuery, useGetAllCocPlayersQuery, useAddCocPlayerTagMutation, useRemoveCocPlayerTagMutation } from "../api/apiSlice"

import { User } from '../models/User';
import { NewButton } from "../stories/NewButton/NewButton";
import { CocPlayerCard } from "../stories/CocPlayerCard/CocPlayerCard";
import { SearchBar } from "../stories/SearchBar/SearchBar";
import { PlayerTag } from "../models/PlayerTag";
import { PlayerTagToken } from '../models/PlayerTagToken';

export default function CocPlayer ({user} : {user: User | undefined}) { 
    let { tag } = useParams();
    const [token, setToken] = useState("");
    const [addAttempt, setAddAttempt] = useState(false);

    const { data : cocplayer, isLoading } = useCocPlayerQuery(tag);
    const { data : coctags } = useGetAllCocPlayersQuery(user?.userId);
    const [addCocPlayerTag] = useAddCocPlayerTagMutation();

    let navigate = useNavigate();

    var userId : string = user?.userId!
    var tag2: string = tag!

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    function handleSubmit() {
        var playerTag: PlayerTagToken = {userId, tag: tag2, token}
        //console.log({userId, tag, token})
        addCocPlayerTag(playerTag);
        setAddAttempt(true);
        window.location.reload();
    };

        /*
    function rCocPlayer(tag: any) {
        var playerTag: PlayerTag = (coctags as Array<PlayerTag>).find((t:any) => t.tag == tag);
        //console.log(playerTag);
        if (window.confirm(`Remove player tag?${tag}`)) {
            removeCocPlayer(playerTag);
            window.location.reload()
        }
    }
    */

    
    if (cocplayer === undefined) return (<div>{isLoading ? <p>Loading</p> : <p>No player is found.</p>}</div>)
    return (
        <div>
            <span style={{display:"flex",}}>
                <NewButton label="<<< Search" size="xsmall" onClick={() => navigate("/search")} />
                { user ?
                    <div>
                        {(coctags as Array<PlayerTag>).filter((t:any) => t.tag == tag).length === 0 ? 
                            <div className="search-container">
                                <NewButton label="Add Player" size={"xsmall"} onClick={() => handleSubmit()} primary />
                                {addAttempt ? <p>Add tag failed. Wrong or expired API Token</p> : <p></p>}
                            </div>
                            : <div>
                                <NewButton label="<<< Profile" size="xsmall" backgroundColor="green" onClick={() => navigate("/profile")}/>
                                {addAttempt ? <p>Success!</p> : <p></p>}
                            </div>
                        }
                    </div>
                    :
                    <div></div>
                }
            </span>
            
            <CocPlayerCard player={cocplayer} />
        </div>
        
    )
}