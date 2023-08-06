import React from "react";
import { Card, CardContent, CardHeader, styled } from "@mui/material";

import "./CocPlayerCard.css"
import { CocPlayer, PlayerItemLevel } from "../../models/CocPlayer";
import { ItemCard } from "./ItemCard";
import { BigItemCard } from "./BigItemCard";

export interface CocPlayerCardProps {
    player: any,
}

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: "720px",
    margin: "6px",
    padding: "6px",
}));

export const CocPlayerCard = ({player} : CocPlayerCardProps) => {
    //console.log(player)
    function thImage() {
        const BASE_URL_pre = "https://coc.guide/static/imgs/other/town-hall-";
        const BASE_URL_suf = ".png";
        return (BASE_URL_pre.concat(player.townHallLevel.toString()).concat(BASE_URL_suf));
    }

    function thImageWeapon() {
        const BASE_URL_pre = "https://coc.guide/static/imgs/weapon/townhall";
        const BASE_URL_suf = ".png";
        return (BASE_URL_pre.concat(player.townHallLevel.toString()).concat("-").concat(player.townHallWeaponLevel.toString()).concat(BASE_URL_suf));
    }

    function bhImage() {
        const BASE_URL_pre = "https://coc.guide/static/imgs/other/town-hall2-";
        const BASE_URL_suf = ".png";
        return (BASE_URL_pre.concat(player.builderHallLevel.toString()).concat(BASE_URL_suf));
    }

    return ( <StyledCard>
        <CardHeader title={player.name} subheader={player.tag} />
        <CardContent>
            <StyledCard>
                <p> Experience: {player.expLevel} </p>
                {player.townHallLevel >= 12 ? 
                    <div>
                        <p><b> Town Hall Level: {player.townHallLevel} </b> &nbsp; &nbsp; Weapon Level: {player.townHallWeaponLevel} </p>
                        <img src={thImageWeapon()} alt={player.townHallLevel.toString()} width="150" />
                    </div>
                    : 
                    <div>
                        <p><b> Town Hall: {player.townHallLevel} </b></p>
                        <img src={thImage()} alt={player.townHallLevel.toString()} width="150" />
                    </div>
                    
                } 
                <br/>
                <p> Trophies: {player.trophies}, &nbsp; &nbsp; Best Trophies: {player.bestTrophies} </p>
                <p> Attack Wins: {player.attackWins}, &nbsp; &nbsp; Defence Wins: {player.defenseWins} </p>
                <p> War Stars: {player.warStars} </p>
            </StyledCard>

            <br />
            {player.league !== null ?
                <div className="clan-grid-container" style={{width:600}}>
                    <div className="item item-header">League</div>
                    <div className="item item-subheader">{player.league?.name}</div>
                    <div className="clan-item-image"><img src={player.league?.iconUrls.small} /></div>
                </div>
                /*<StyledCard>
                    <CardHeader title="League" subheader={player.league?.name} />
                    <CardContent><img src={player.league?.iconUrls.small} /></CardContent>
                </StyledCard>*/
                :
                <div className="clan-grid-container" style={{width:600}}>
                    No League
                </div>
            }

            <br />
            {player.clan !== null ?
                <div className="clan-grid-container" style={{width:600}}>
                    <div className="item item-header">{player.clan?.name}</div>
                    <div className="item item-subheader">{player.clan?.tag}</div>
                    <div className="item item-subheader">{player.role.toLowerCase()}</div>
                    <div className="clan-item-image"><img src={player.clan?.badgeUrls.small} /></div>
                </div>
                /*
                <StyledCard>
                    <CardHeader title={player.clan?.name} subheader={player.clan?.tag} />
                    <CardContent><img src={player.clan?.badgeUrls.small} /></CardContent>
                </StyledCard>*/
                :
                <div className="clan-grid-container" style={{width:600}}>
                    No clan
                </div>
            }

            <br />
            {player.legendStatistics !== null ?
                <StyledCard>
                    <CardHeader title="Legend League Stats" subheader={"Legend Trophies: " + player.legendStatistics?.legendTrophies} />
                    <CardContent style={{display:"flex",}}>
                        {player.legendStatistics.currentSeason !== null ? 
                            <StyledCard className="legend-card" style={{width:"200px",backgroundColor:"legend-card-bgc",}}> 
                                <p>Current Season: {player.legendStatistics.currentSeason.id}</p>
                                <p>Current Trophies: {player.legendStatistics.currentSeason.trophies}</p>
                                <p>Current Rank: {player.legendStatistics.currentSeason.rank}</p>
                            </StyledCard> : 
                            <div></div>
                        }
                        {player.legendStatistics.previousSeason !== null ? 
                            <StyledCard className="legend-card" style={{width:"200px",backgroundColor:"legend-card-bgc",}}> 
                                <p>Previous Season: {player.legendStatistics.previousSeason.id}</p>
                                <p>Previous Trophies: {player.legendStatistics.previousSeason.trophies}</p>
                                <p>Previous Rank: {player.legendStatistics.previousSeason.rank}</p>
                            </StyledCard> : 
                            <div></div>
                        }
                        {player.legendStatistics.bestSeason !== null ? 
                            <StyledCard className="legend-card" style={{width:"200px",backgroundColor:"legend-card-bgc",}}>
                                <p>Best Season: {player.legendStatistics.bestSeason.id}</p>
                                <p>Best Trophies: {player.legendStatistics.bestSeason.trophies}</p>
                                <p>Best Rank: {player.legendStatistics.bestSeason.rank}</p>
                            </StyledCard> : 
                            <div></div>
                        }
                    </CardContent>
                </StyledCard>
                :
                <div>
                    No Legend League Stats
                </div>
            }

            <br />
            <StyledCard>
                <CardHeader title="Troops" />
                <CardContent className="card-grid-container">
                    {player!.troops.map((item: any) => <ItemCard item={item} name={item.name} level={item.level} maxlevel={item.maxLevel} village={item.village}  />)}
                </CardContent>
            </StyledCard>

            <br />
            <StyledCard>
                <CardHeader title="Spells" />
                <CardContent className="card-grid-container">
                    {player!.spells.map((item: any) => <ItemCard item={item} name={item.name} level={item.level} maxlevel={item.maxLevel} village={item.village} />)}
                </CardContent>
            </StyledCard>

            <br />
            <StyledCard>
                <CardHeader title="Heroes" />
                <CardContent className="card-grid-container">
                    {player!.heroes.map((item: any) => <ItemCard item={item} name={item.name} level={item.level} maxlevel={item.maxLevel} village={item.village}  />)}
                </CardContent>
            </StyledCard>

            <br/>
            <StyledCard>
                <p><b> Builder Hall: {player.builderHallLevel} </b></p> 
                <img src={bhImage()} alt={player.builderHallLevel.toString()} width="140" />
                <p> Builder Base Trophies: {player.builderBaseTrophies}, &nbsp; &nbsp; Best Builder Base Trophies: {player.bestBuilderBaseTrophies} </p>
                <p> Builder Base Leage: {player.builderBaseLeague.name} </p>
                <p> Builder Base Batle Wins: {player.versusBattleWins} </p>

                <br />
            {player.legendStatistics !== null ?
                <StyledCard>
                    <CardHeader title="Builder Base League Stats" />
                    <CardContent style={{display:"flex",}}>
                        {player.legendStatistics.bestBuilderBaseSeason !== null ? 
                            <StyledCard className="legend-card" style={{width:"200px",backgroundColor:"legend-card-bgc",}}> 
                                <p>Previous Season: {player.legendStatistics.bestBuilderBaseSeason.id}</p>
                                <p>Previous Trophies: {player.legendStatistics.bestBuilderBaseSeason.trophies}</p>
                                <p>Previous Rank: {player.legendStatistics.bestBuilderBaseSeason.rank}</p>
                            </StyledCard> : 
                            <div></div>
                        }
                        {player.legendStatistics.previousBuilderBaseSeason !== null ? 
                            <StyledCard className="legend-card" style={{width:"200px",backgroundColor:"legend-card-bgc",}}>
                                <p>Best Season: {player.legendStatistics.previousBuilderBaseSeason.id}</p>
                                <p>Best Trophies: {player.legendStatistics.previousBuilderBaseSeason.trophies}</p>
                                <p>Best Rank: {player.legendStatistics.previousBuilderBaseSeason.rank}</p>
                            </StyledCard> : 
                            <div></div>
                        }
                    </CardContent>
                </StyledCard>
                :
                <div>
                    No Builder Base League Stats
                </div>
            }
            </StyledCard>

        </CardContent>
    </StyledCard> );
}
