import React, { useState, Dispatch, SetStateAction } from 'react';
import { User } from '../models/User';

import { useLoginQuery, useRegisterQuery, useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useAddCocPlayerTag2Query, useAddCrPlayerTag2Query, useAddBsPlayerTag2Query, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery } from "../api/apiSlice"
import { PlayerTagList } from '../stories/PlayerTagList/PlayerTagList';

export default function Profile ({user} : {user: User | undefined}) { 
    const { data : coctags } = useGetAllCocPlayersQuery(user?.userId);
    const { data : crtags } = useGetAllCrPlayersQuery(user?.userId);
    const { data : bstags } = useGetAllBsPlayersQuery(user?.userId);

    return (
    <div style={{display: "flex"}}>
        <PlayerTagList label="Clash of Clans Player Tags" colour="DarkOrange" type={0} playerTags={coctags}/>
        <PlayerTagList label="Clash Royale Player Tags" colour="Blue" type={1} playerTags={crtags}/>
        <PlayerTagList label="Brawl Stars Player Tags" type={2} playerTags={bstags}/>
    </div>) 
}