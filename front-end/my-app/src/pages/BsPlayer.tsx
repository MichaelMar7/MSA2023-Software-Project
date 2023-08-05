import React, { useState } from 'react';

import {useParams, useNavigate} from "react-router-dom";

import { useBsPlayerQuery, useGetAllBsPlayersQuery, useAddBsPlayerTag2Mutation } from "../api/apiSlice"

import { User } from '../models/User';
import { PlayerTag } from "../models/PlayerTag";
import { NewButton } from "../stories/NewButton/NewButton";
import { BsPlayerCard } from "../stories/BsPlayerCard/BsPlayerCard";
import { SearchBar } from "../stories/SearchBar/SearchBar";
import { PlayerTagToken } from '../models/PlayerTagToken';

export default function BsPlayer ({user} : {user: User | undefined}) { 
    let { tag } = useParams();
    const [token, setToken] = useState("");

    const { data : bsplayer } = useBsPlayerQuery(tag);
    const { data : crctags } = useGetAllBsPlayersQuery(user?.userId);
    const [addBsPlayerTag2] = useAddBsPlayerTag2Mutation();

    let navigate = useNavigate();
    var userId : string = user?.userId!
    var tag2: string = tag!

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    function handleSubmit() {
        var playerTag: PlayerTagToken = {userId, tag: tag2, token}
        //console.log({userId, tag, token})
        console.log(addBsPlayerTag2(playerTag));
        window.location.reload();
    };

    //console.log(bsplayer);
    if (bsplayer === undefined) return (<div>Error</div>)

    return (
        <div>
            <span style={{display:"flex",}}>
                    <NewButton label="<<< Search" size="xsmall" onClick={() => navigate("/search")} />
                    {(crctags as Array<PlayerTag>).filter((t:any) => t.tag == tag).length === 0 ? 
                    <div className="search-container">
                        <form>
                            <input type="text" placeholder={"Enter Cr Player Token"} name="token" id="token" onChange={handleChange} value={token} />
                            <NewButton label="Search" size={"xsmall"} onClick={() => handleSubmit()} primary />
                        </form>
                    </div>
                    : <NewButton label="<<< Profile" size="xsmall" backgroundColor="green" onClick={() => navigate("/profile")} /> }
                    
                </span>
                <BsPlayerCard player={bsplayer} />
        </div>
    )
}

