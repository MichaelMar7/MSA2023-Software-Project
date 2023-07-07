using Newtonsoft.Json;
using Back_End.Models.BsModels;

namespace Back_End.Models
{
    public class BsPlayer
    {
        public string tag { get; set; }
        public string name { get; set; }
        public string nameColor { get; set; }
        public PlayerIcon icon { get; set; }
        public int trophies { get; set; }
        public int highestTrophies { get; set; }
        public int highestPowerPlayPoints { get; set; }
        public int expLevel { get; set; }
        public int expPoints { get; set; }
        public bool isQualifiedFromChampionshipChallenge { get; set; }
        [JsonProperty(PropertyName = "3vs3Victories")]
        public int versusVictories { get; set; }
        public int soloVictories { get; set; }
        public int duoVictories { get; set; }
        public int bestRoboRumbleTime { get; set; }
        public int bestTimeAsBigBrawler { get; set; }
        public PlayerClub club { get; set; }
        public List<BrawlerStat> brawlers { get; set; }
    }
}
