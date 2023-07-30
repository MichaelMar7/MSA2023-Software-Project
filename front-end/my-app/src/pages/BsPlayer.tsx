import {useParams} from "react-router-dom";

import { useBsPlayerQuery } from "../api/apiSlice"

import { BsPlayerCard } from "../stories/BsPlayerCard/BsPlayerCard";

export default function BsPlayer () { 
    let { tag } = useParams();

    const { data : bsplayer } = useBsPlayerQuery(tag);
    //console.log(bsplayer);
    if (bsplayer === undefined) return (<div>Error</div>)

    return (<BsPlayerCard player={bsplayer} />)
}

