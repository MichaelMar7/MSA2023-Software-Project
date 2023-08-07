import React, { useState } from 'react';

import {useParams, useNavigate} from "react-router-dom";

import { useBsPlayerQuery, useGetAllBsPlayersQuery, useAddBsPlayerTagMutation } from "../api/apiSlice"

import { User } from '../models/User';
import { PlayerTag } from "../models/PlayerTag";
import { NewButton } from "../stories/NewButton/NewButton";
import { BsPlayerCard } from "../stories/BsPlayerCard/BsPlayerCard";
import { SearchBar } from "../stories/SearchBar/SearchBar";
import { PlayerTagToken } from '../models/PlayerTagToken';

export default function BsPlayer ({user} : {user: User | undefined}) { 
    let { tag } = useParams();
    const [token, setToken] = useState("");
    const [addAttempt, setAddAttempt] = useState(false);

    const { data : bsplayer, isLoading } = useBsPlayerQuery(tag);
    const { data : bstags } = useGetAllBsPlayersQuery(user?.userId);
    const [addBsPlayerTag] = useAddBsPlayerTagMutation();

    let navigate = useNavigate();
    var userId : string = user?.userId!
    var tag2: string = tag!

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    function handleSubmit() {
        var playerTag: PlayerTagToken = {userId, tag: tag2, token}
        //console.log({userId, tag, token})
        addBsPlayerTag(playerTag);
        //window.location.reload();
    };

    //console.log(bsplayer);
    if (bsplayer === undefined) return (<div>{isLoading ? <p>Loading</p> : <p>No player is found.</p>}</div>)
    return (
        <div>
            <span style={{display:"flex",}}>
                <NewButton label="<<< Search" size="xsmall" onClick={() => navigate("/search")} />
                { user ?
                    <div>
                        {(bstags as Array<PlayerTag>).filter((t:any) => t.tag == tag).length === 0 ? 
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
                <BsPlayerCard player={bsplayer} />
        </div>
    )
}

