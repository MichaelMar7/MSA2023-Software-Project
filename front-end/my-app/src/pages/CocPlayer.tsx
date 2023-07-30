import {useParams} from "react-router-dom";

import { useCocPlayerQuery } from "../api/apiSlice"

import { CocPlayerCard } from "../stories/CocPlayerCard/CocPlayerCard";

export default function CocPlayer () { 
    let { tag } = useParams();

    const { data : cocplayer } = useCocPlayerQuery(tag);
    if (cocplayer === undefined) return (<div>Error</div>)
    return (
        <CocPlayerCard player={cocplayer} />
    )
}