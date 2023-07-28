import {useParams} from "react-router-dom";

import { useLoginQuery, useRegisterQuery, useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useAddCocPlayerTag2Query, useAddCrPlayerTag2Query, useAddBsPlayerTag2Query, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery } from "../api/apiSlice"

export default function CrPlayer () { 
    let { tag } = useParams();

    const { data : crplayer } = useCrPlayerQuery(tag);
    //console.log(crplayer);
    if (crplayer === undefined) return (<div>Error</div>)
    
    return (<div>{tag}</div>)
}