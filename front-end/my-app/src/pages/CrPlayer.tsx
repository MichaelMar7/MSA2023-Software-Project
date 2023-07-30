import {useParams} from "react-router-dom";

import { useCrPlayerQuery } from "../api/apiSlice"

import { CrPlayerCard } from "../stories/CrPlayerCard/CrPlayerCard";

export default function CrPlayer () { 
    let { tag } = useParams();

    const { data : crplayer } = useCrPlayerQuery(tag);
    //console.log(crplayer);
    if (crplayer === undefined) return (<div>Error</div>)
    return (
        <CrPlayerCard player={crplayer} />
    )
}