namespace Back_End.Models.CocModels
{
    public class PlayerLegendStatistics
    {
        public int legendTrophies { get; set; }
        public LegendLeagueTournamentSeasonResult previousBuilderBaseSeason { get; set; }
        public LegendLeagueTournamentSeasonResult bestBuilderBaseSeason { get; set; }
        public LegendLeagueTournamentSeasonResult previousSeason { get; set; }
        public LegendLeagueTournamentSeasonResult currentSeason { get; set; }
        public LegendLeagueTournamentSeasonResult bestSeason { get; set; }
    }
}
