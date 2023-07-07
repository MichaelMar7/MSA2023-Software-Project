using Back_End.Models.CrModels;

namespace Back_End.Models
{
    public class CrPlayer
    {
        public string tag { get; set; }
        public string name { get; set; }
        public int expLevel { get; set; }
        public int trophies { get; set; }
        public int bestTrophies { get; set; }
        public int wins { get; set; }
        public int losses { get; set; }
        public int battleCount { get; set; }
        public int threeCrownWins { get; set; }
        public int challengeCardsWon { get; set; }
        public int challengeMaxWins { get; set; }
        public int tournamentCardsWon { get; set; }
        public int tournamentBattleCount { get; set; }
        public int donations { get; set; }
        public int donationsReceived { get; set; }
        public int totalDonations { get; set; }
        public int warDayWins { get; set; }
        public int clanCardsCollected { get; set; }
        public string role { get; set; }
        public CrPlayerClan clan { get; set; }
        public Arena arena { get; set; }
        public PlayerLeagueStatistics leagueStatistics { get; set; }
        public List<CrPlayerItemLevel> cards { get; set; }
        public List<CrPlayerItemLevel> currentDeck { get; set; }
        public Item currentFavouriteCard { get; set; }
        public int starPoints { get; set; }
        public int expPoints { get; set; }
        public int totalExpPoints { get; set; }
        public PathOfLegendSeasonResult currentPathOfLegendSeasonResult { get; set; }
        public PathOfLegendSeasonResult lastPathOfLegendSeasonResult { get; set; }
        public PathOfLegendSeasonResult bestPathOfLegendSeasonResult { get; set; }
    }
}
