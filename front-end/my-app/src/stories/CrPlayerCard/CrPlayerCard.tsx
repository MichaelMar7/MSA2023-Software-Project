import React from "react";
import { Card, CardActions, CardContent, CardHeader, IconButton, styled } from "@mui/material";

import "./CrPlayerCard.css"
import { CocPlayer, PlayerItemLevel } from "../../models/CocPlayer";

export interface CrPlayerCardProps {
    player: any,
}

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: "720px",
    margin: "6px",
    padding: "6px",
}));

function kingLevel(expLevel: number) {
    switch (expLevel) {
        case 1:
            return 1;
        case 2:
            return 2
        case 3:
        case 4:
            return 3;
        case 5:
        case 6:
            return 4;
        case 7:
        case 8:
        case 9:
            return 5;
        case 10:
        case 11:
        case 12:
        case 13:
            return 6;
        case 14:
        case 15:
        case 16:
        case 17:
            return 7;
        case 18:
        case 19:
        case 20:
        case 21:
            return 8;
        case 22:
        case 23:
        case 24:
        case 25:
            return 9;
        case 26:
        case 27:
        case 28:
        case 29:
            return 10;
        case 30:
        case 31:
        case 32:
        case 33:
            return 11;
        case 34:
        case 35:
        case 36:
        case 37:
            return 12;
        case 38:
        case 39:
        case 40:
        case 41:
            return 13;
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
            return 14;
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
            return 15;
        default:
            return 0;
    }
}

export const CrPlayerCard = ({player} : CrPlayerCardProps) => {
    //console.log(player)

    return ( <StyledCard>
        <CardHeader title={player.name} subheader={player.tag} />
        <CardContent>
            <StyledCard>
                <p> King Level: {player.expLevel}, &nbsp; &nbsp; Tower Level: {kingLevel(player.expLevel)} </p>
            </StyledCard>

            <br />
            <StyledCard>
                <CardHeader title="Current Deck" />
                <CardContent>
                    {player!.currentDeck.map((item: any) => <img src={item.iconUrls.medium} height="80px" style={{margin:"6px"}} /> )}
                </CardContent>
            </StyledCard>
            
            <br/>
            <StyledCard>
                <p> Trophies: {player.trophies}, &nbsp; &nbsp; Best Trophies: {player.bestTrophies}, &nbsp; &nbsp; {player.arena.name} </p>
                <p> Wins: {player.wins}, &nbsp; &nbsp; Three Crown Wins: {player.threeCrownWins} </p>
            </StyledCard>

            <br />
            {player.clan !== null ?
                <div className="cr-clan-grid-container" style={{width:600}}>
                    <div className="item item-header">{player.clan?.name}</div>
                    <div className="item item-subheader">{player.clan?.tag}</div>
                    <div className="item item-subheader">{player.role.toLowerCase()}</div>
                    <div className="cr-clan-item-image"></div>
                </div>
                :
                <div>
                    No clan
                </div>
            }

            <br/>
            <StyledCard>
            <CardHeader title="Path of Legends" />
                <CardContent style={{display:"flex",}}>
                    {player.currentPathOfLegendSeasonResult !== null ? 
                        <StyledCard className="legend-card" style={{width:"200px",}}> 
                            <p>Current Season: {player.currentPathOfLegendSeasonResult.leagueNumber}</p>
                            <p>Current Trophies: {player.currentPathOfLegendSeasonResult.trophies}</p>
                            <p>Current Rank: {player.currentPathOfLegendSeasonResult.rank}</p>
                        </StyledCard> : 
                        <div></div>
                    }
                    {player.lastPathOfLegendSeasonResult !== null ? 
                        <StyledCard className="legend-card" style={{width:"200px",}}> 
                            <p>Previous Season: {player.lastPathOfLegendSeasonResult.leagueNumber}</p>
                            <p>Previous Trophies: {player.lastPathOfLegendSeasonResult.trophies}</p>
                            <p>Previous Rank: {player.lastPathOfLegendSeasonResult.rank}</p>
                        </StyledCard> : 
                        <div></div>
                    }
                    {player.bestPathOfLegendSeasonResult !== null ? 
                        <StyledCard className="legend-card" style={{width:"200px",}}>
                            <p>Best Season: {player.bestPathOfLegendSeasonResult.leagueNumber}</p>
                            <p>Best Trophies: {player.bestPathOfLegendSeasonResult.trophies}</p>
                            <p>Best Rank: {player.bestPathOfLegendSeasonResult.rank}</p>
                        </StyledCard> : 
                        <div></div>
                    }
                </CardContent>
            </StyledCard>

            <br />
            <StyledCard>
                <CardHeader title="Cards" />
                <CardContent className="cr-card-grid-container">
                    {player!.cards.map((item: any) => <ItemCard item={item} name={item.name} level={item.level} maxlevel={item.maxLevel} starlevel={item.starLevel} iconUrls={item.iconUrls} />)}
                </CardContent>
            </StyledCard>

        </CardContent>
    </StyledCard> );
}

export const ItemCard = (item: any) => {
    var max = false;
    var cardLevel = item.level;
    if (item.level >= item.maxlevel + 1)
        max = true
    switch (item.maxlevel) {
        case 12:
            cardLevel = item.level + 2;
            break;
        case 9:
            cardLevel = item.level + 5;
            break;
        case 6:
            cardLevel = item.level + 8;
            break;
        case 4:
            cardLevel = item.level + 10;
            break;
    }
    return (
        <div>
        {max ?
            <div className="cr-grid-container-max">
                <div className="item">{item.name}</div>
                <div className="item">Level: {cardLevel}</div>
                <div className="item-image"><img src={item.iconUrls.medium} height="50px" /></div>
            </div>
            :
            <div className="cr-grid-container">
                <div className="item">{item.name}</div>
                <div className="item">Level: {cardLevel}</div>
                <div className="item-image"><img src={item.iconUrls.medium} height="50px" /></div>
            </div>
        }
        </div>
    )
}
