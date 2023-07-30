export interface CocPlayer {
    tag: string,
    name: string,
    townHallLevel: number,
    townHallWeaponLevel: number,
    expLevel: number,
    trophies: number,
    bestTrophies: number,
    warStars: number,
    attackWins: number,
    defenseWins: number,
    builderHallLevel: number,
    builderBaseTrophies: number,
    bestBuilderBaseTrophies: number,
    versusBattleWins: number,
    role: string,
    clan: PlayerClan | undefined,
    league: League | undefined,
    builderBaseLeague: BuilderBaseLeague,
    legendStatistics: PlayerLegendStatistics,
    troops: Array<PlayerItemLevel>,
    heros: Array<PlayerItemLevel>,
    spells: Array<PlayerItemLevel>,
}

interface PlayerClan {
    id: number,
    name: string,
    tag: string,
    //badgeUrls: Map<string, string>
    badgeUrls: {
        [key: string]: Dict
    }
}

interface League {
    id: number,
    name: string,
    iconUrls: {
        [key: string]: Dict
    }
}

interface BuilderBaseLeague {
    id: number,
    name: string,
}

interface PlayerLegendStatistics {
    legendTrophies: number,
    previousBuilderBaseSeason: LegendLeagueTournamentSeasonResult,
    bestBuilderBaseSeason: LegendLeagueTournamentSeasonResult,
    previousSeason: LegendLeagueTournamentSeasonResult,
    currentSeason: LegendLeagueTournamentSeasonResult,
    bestSeason: LegendLeagueTournamentSeasonResult,
}

interface LegendLeagueTournamentSeasonResult {
    id: string,
    rank: number,
    trophies: number,
}

export interface PlayerItemLevel {
    name: string,
    level: number,
    maxlevel: number,
    village: string,
    superTroopIsActive: boolean,
}

interface Dict {
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string,
}


