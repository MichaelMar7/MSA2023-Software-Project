using Back_End.Models.CocModels;

namespace Back_End.Models
{
    public class CocPlayer
    {
        public string tag { get; set; }
        public string name { get; set; }
        public int townHallLevel { get; set; }
        public int townHallWeaponLevel { get; set; }
        public int expLevel { get; set; }
        public int trophies { get; set; }
        public int bestTrophies { get; set; }
        public int warStars { get; set; }
        public int attackWins { get; set; }
        public int defenseWins { get; set; }
        public int builderHallLevel { get; set; }
        public int builderBaseTrophies { get; set; }
        public int bestBuilderBaseTrophies { get; set; }
        public int versusBattleWins { get; set; }
        public string role { get; set; }
        public PlayerClan clan { get; set; }
        public League league { get; set; }
        public BuilderBaseLeague builderBaseLeague { get; set; }
        public PlayerLegendStatistics legendStatistics { get; set; }
        public List<PlayerItemLevel> troops { get; set; }
        public List<PlayerItemLevel> heros { get; set; }
        public List<PlayerItemLevel> spells { get; set; }
    }
}
