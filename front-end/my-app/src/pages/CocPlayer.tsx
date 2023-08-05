import React, { useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";

import { useCocPlayerQuery, useGetAllCocPlayersQuery, useAddCocPlayerTag2Mutation, useRemoveCocPlayerTagMutation } from "../api/apiSlice"

import { User } from '../models/User';
import { NewButton } from "../stories/NewButton/NewButton";
import { CocPlayerCard } from "../stories/CocPlayerCard/CocPlayerCard";
import { SearchBar } from "../stories/SearchBar/SearchBar";
import { PlayerTag } from "../models/PlayerTag";
import { PlayerTagToken } from '../models/PlayerTagToken';

export default function CocPlayer ({user} : {user: User | undefined}) { 
    let { tag } = useParams();
    const [token, setToken] = useState("");

    const { data : cocplayer } = useCocPlayerQuery(tag);
    const { data : coctags } = useGetAllCocPlayersQuery(user?.userId);
    const [removeCocPlayer] = useRemoveCocPlayerTagMutation();
    const [addCocPlayerTag2] = useAddCocPlayerTag2Mutation();

    let navigate = useNavigate();

    var userId : string = user?.userId!
    var tag2: string = tag!

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    function handleSubmit() {
        var playerTag: PlayerTagToken = {userId, tag: tag2, token}
        //console.log({userId, tag, token})
        console.log(addCocPlayerTag2(playerTag));
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

    
    if (cocplayer === undefined) return (<div>Error</div>)
    return (
        <div>
            <span style={{display:"flex",}}>
                <NewButton label="<<< Search" size="xsmall" onClick={() => navigate("/search")} />
                {(coctags as Array<PlayerTag>).filter((t:any) => t.tag == tag).length === 0 ? 
                <div className="search-container">
                    <form>
                        <input type="text" placeholder={"Enter CoC Player Token"} name="token" id="token" onChange={handleChange} value={token} />
                        <NewButton label="Search" size={"xsmall"} onClick={() => handleSubmit()} primary />
                    </form>
                </div>
                : <NewButton label="<<< Profile" size="xsmall" backgroundColor="green" onClick={() => navigate("/profile")}/> }
                
            </span>
            
            <CocPlayerCard player={cocplayer} />
        </div>
        
    )
}