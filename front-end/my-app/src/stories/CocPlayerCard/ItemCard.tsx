import { getImgUrl } from "./GetImgUrl";

export const ItemCard = (item: any) => {
    var imgurl = getImgUrl(item.name);
    var max = false;
    if ((item.level >= item.maxlevel && item.village === "home") || (item.level >= item.maxlevel && (item.name === "Battle Machine" || item.name === "Battle Copter")) || (item.level - (20-item.maxlevel) >= item.maxlevel && item.village === "builderBase" && (item.name !== "Battle Machine" && item.name !== "Battle Copter")) )
        max = true
    return (
        <div>
        {max ?
            <div className="grid-container-max">
                <div className="item">{item.name}</div>
                <div className="item">Level: {item.level} </div>
                <div className="item-image"><img src={imgurl} height="50px" /></div>
            </div>
            :
            <div className="grid-container">
                <div className="item">{item.name}</div>
                <div className="item">Level: {item.level} </div>
                <div className="item-image"><img src={imgurl} height="50px" /></div>
            </div>
        }
        </div>
    )
}