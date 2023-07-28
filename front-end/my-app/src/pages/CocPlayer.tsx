import {useParams} from "react-router-dom";

import { useLoginQuery, useRegisterQuery, useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useAddCocPlayerTag2Query, useAddCrPlayerTag2Query, useAddBsPlayerTag2Query, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery } from "../api/apiSlice"

export default function CocPlayer () { 
    let { tag } = useParams();

    const { data : cocplayer } = useCocPlayerQuery(tag);
    //console.log(cocplayer);
    if (cocplayer === undefined) return (<div>Error</div>)
    return (
        <div>
            {tag} <br />
            {cocplayer.townHallLevel}
        </div>
    )
}