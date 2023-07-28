import {useParams} from "react-router-dom";

import { useLoginQuery, useRegisterQuery, useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useAddCocPlayerTag2Query, useAddCrPlayerTag2Query, useAddBsPlayerTag2Query, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery } from "../api/apiSlice"

export default function BsPlayer () { 
    let { tag } = useParams();

    const { data : bsplayer } = useBsPlayerQuery(tag);
    //console.log(bsplayer);
    if (bsplayer === undefined) return (<div>Error</div>)

    return (<div>{tag}</div>)
}