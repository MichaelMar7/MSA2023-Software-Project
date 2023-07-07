namespace Back_End.Models.CrModels
{
    public class PlayerLeagueStatistics
    {
        public LeagueSeasonResult currentSeason { get; set; }
        public LeagueSeasonResult previousSeason { get; set; }
        public LeagueSeasonResult bestSeason { get; set; }
    }
}
