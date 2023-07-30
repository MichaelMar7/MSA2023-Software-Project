export interface CocPlayer {
    tag: string,
    name: string,
    expLevel: number,
    trophies: number,
    bestTrophies: number,
    wins: number,
    losses: number,
    battleCount: number,
    threeCrownWins: number,
    challengeCardsWon: number,
    challengeMaxWins: number,
    tournamentCardsWon: number,
    tournamentBattleCount: number,
    donations: number,
    donationsReceived: number,
    totalDonations: number,
    warDayWins: number,
    clanCardsCollected: number,
    role: string,
    clan: CrPlayerClan | undefined,
    arena: Arena | undefined,
    leagueStatistics: PlayerLeagueStatistics | undefined,
    cards: Array<CrPlayerItemLevel>,
    currentDeck: Array<CrPlayerItemLevel>,
    currentFavouriteCard: Item | undefined,
    starPoints: number,
    expPoints: number,
    totalExpPoints: number,
    currentPathOfLegendSeasonResult: PathOfLegendSeasonResult | undefined,
    lastPathOfLegendSeasonResult: PathOfLegendSeasonResult | undefined,
    bestPathOfLegendSeasonResult: PathOfLegendSeasonResult | undefined,
}

interface CrPlayerClan {
    name: string,
    tag: string,
    badgeId: number,
    badgeUrls: {
        [key: string]: Dict
    }
}

interface Arena {
    id: number,
    name: string,
    iconUrls: {
        [key: string]: Dict
    }
}

interface PlayerLeagueStatistics {
    currentSeason: LeagueSeasonResult,
    previousSeason: LeagueSeasonResult,
    bestSeason: LeagueSeasonResult,
}

interface LeagueSeasonResult {
    id: string,
    rank: number,
    trophies: number,
    bestTrophies: number,
}

interface CrPlayerItemLevel {
    name: string,
    id: number,
    level: number,
    starLevel: number,
    maxLevel: number,
    evolutionLevel: number,
    maxEvolutionLevel: number,
    count: number,
    used: boolean,
    iconUrls: {
        [key: string]: Dict
    }
}

interface Item {
    name: string,
    id: number,
    evolutionLevel: number,
    maxEvolutionLevel: number,
    iconUrls: {
        [key: string]: Dict
    }
}

interface PathOfLegendSeasonResult {
    leagueNumber: number,
    trophies: number,
    rank: number,
}

interface Dict {
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string,
}
