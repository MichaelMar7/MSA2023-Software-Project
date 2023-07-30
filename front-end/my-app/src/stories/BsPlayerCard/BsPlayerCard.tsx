import React from "react";
import { Card, CardActions, CardContent, CardHeader, IconButton, styled } from "@mui/material";

import { useGetBsBrawlerInfoQuery } from "../../api/apiSlice";

import "./BsPlayerCard.css"

export interface BsPlayerCardProps {
    player: any,
}

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: "720px",
    margin: "6px",
    padding: "6px",
}));

export const BsPlayerCard = ({player} : BsPlayerCardProps) => {
    console.log(player)
    

    return ( <StyledCard>
        <CardHeader title={player.name} subheader={player.tag} />
        <CardContent>
            <StyledCard>
                <p> Experience: {player.expLevel} </p>
                <p> Trophies: {player.trophies}, &nbsp; &nbsp; Best Trophies: {player.highestTrophies}, &nbsp; &nbsp; Best Trophies: {player.highestPowerPlayPoints} </p>
                <p> 3v3 Wins: {player.versusVictories}, &nbsp; &nbsp; Solo Wins: {player.soloVictories}, &nbsp; &nbsp; Duo Wins: {player.duoVictories} </p>
                <p> Best Robo Rumble Time: {player.bestRoboRumbleTime}, &nbsp; &nbsp; Best Big Brawler Time: {player.bestTimeAsBigBrawler} </p>
            </StyledCard>
            <br />
            {player.club.tag !== null ?
                <StyledCard>
                    <CardHeader title={player.club.name} subheader={player.club.tag} />
                </StyledCard>
                :
                <StyledCard>
                    No Club :(
                </StyledCard>
            }
            
            <br />
            <StyledCard>
                <CardHeader title="Brawlers" />
                <CardContent >
                    <StyledCard className="bs-card-grid-container">
                        {player!.brawlers.map((item: any) => <ItemCard 
                            item={item} 
                            name={item.name} 
                            id={item.id} 
                            power={item.power} 
                            rank={item.rank} 
                            trophies={item.trophies} 
                            highestTrophies={item.highestTrophies}
                            starPowers={item.starPowers} 
                            gadgets={item.gadgets} 
                            gears={item.gears} 
                        />)}
                     </StyledCard>
                </CardContent>
            </StyledCard>

        </CardContent>
    </StyledCard> );
}

export const ItemCard = (item: any) => {
    const {data: brawlerInfo} = useGetBsBrawlerInfoQuery(item.id);

    var max = false;
    if (item.level >= 11)
        max = true
    var brawlername = getBrawlername(item.name)

    let starPowersArray = item.starPowers.map((sp:any) => sp.id);
    console.log(brawlerInfo)
    
    return (
        <div>
        {max ?
            <div className="bs-grid-container-max">
                {/*<div className="item"><b>{brawlerInfo.name}</b></div>*/}
                <div className="item"><b>{brawlername}</b></div>
                <div className="item">Rank: {item.rank}</div>
                <div className="item">Power Level: {item.power}</div>
                <div className="item">Trophies: {item.trophies}</div>
                <div className="item">Best: {item.highestTrophies}</div>
                {/*<div className="item-image"><img src={brawlerInfo.imageUrl} height="50px" /></div>*/}
            </div>
            :
            <div className="bs-grid-container">
                {/*<div className="item"><b>{brawlerInfo.name}</b></div>*/}
                <div className="item"><b>{brawlername}</b></div>
                <div className="item"><img src={getBrawlerImage(brawlername)} height="50px" /></div>
                <div className="item">Rank: {item.rank}</div>
                <div className="item">Power Level: {item.power}</div>
                <div className="item">Trophies: {item.trophies}</div>
                <div className="item">Best: {item.highestTrophies}</div>
                <div className="item">Star Powers: {item.starPowers.length}</div>
                <div className="item">Gadgets: {item.gadgets.length}</div>
                <div className="item">Gears: {item.gears.length}</div>
                {/*<div className="item-image"><img src={brawlerInfo.imageUrl} height="50px" /></div>*/}
            </div>
        }
        </div>
    )
}

function getBrawlername(name: any) {
    // special cases
    switch (name) {
        case "EL PRIMO":
            return "El Primo";
        case "8-BIT":
            return "8-Bit";
        case "MR. P":
            return "Mr. P";
    }
    return name[0] + name.substr(1).toLowerCase();
}

function getBrawlerImage(name: any) {
    // special cases
    switch (name) {
        case "El Primo":
            name = "El-Primo";
            break;
        case "Mr. P":
            name = "Mr-P";
            break;
    }
    return "https://cdn.brawlify.com/brawler/" + name + ".png";
}


/*
item={item} 
name={item.name} 
power={item.power} 
rank={item.rank} 
trophies={item.trophies} 
highestTrophies={item.highestTrophies}
starPowers={item.starPowers} 
gadgets={item.gadgets} 
gears={item.gears} 
*/

// El Primo => El-Primo
// 8-Bit => 8-Bit
// Mr. P => Mr-P

// https://cdn.brawlify.com/brawler/<brawler>.png
