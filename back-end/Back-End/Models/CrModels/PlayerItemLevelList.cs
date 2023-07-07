namespace Back_End.Models.CrModels
{
    public class CrPlayerItemLevel
    {
        public string name { get; set; }
        public int id { get; set; }
        public int level { get; set; }
        public int starLevel { get; set; }
        public int maxLevel { get; set; }
        public int evolutionLevel { get; set; }
        public int maxEvolutionLevel { get; set; }
        public int count { get; set; }
        public bool used { get; set; }
        public Dictionary<string, string> iconUrls { get; set; }
    }
}
