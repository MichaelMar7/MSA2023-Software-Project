import React, { useState, Dispatch, SetStateAction } from 'react';
import { User } from '../models/User';

import { useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery } from "../api/apiSlice"
import { PlayerTagList } from '../stories/PlayerTagList/PlayerTagList';

var testuser: User = {
    // d87e4067-d12d-479f-837b-65a06ef86282
    userId: "d87e4067-d12d-479f-837b-65a06ef86282",
    username: "test",
    password: "test"
};

export default function Profile ({user} : {user: User | undefined}) { 
    const { data : coctags } = useGetAllCocPlayersQuery(user?.userId);
    const { data : crtags } = useGetAllCrPlayersQuery(user?.userId);
    const { data : bstags } = useGetAllBsPlayersQuery(user?.userId);

    return (
    <div style={{display: "flex"}}>
        <PlayerTagList label="Clash of Clans Player Tags" colour="DarkOrange" type={0} playerTags={coctags} id={user?.userId} />
        <PlayerTagList label="Clash Royale Player Tags" colour="Blue" type={1} playerTags={crtags} id={user?.userId} />
        <PlayerTagList label="Brawl Stars Player Tags" type={2} playerTags={bstags} id={user?.userId} />
    </div>) 
}