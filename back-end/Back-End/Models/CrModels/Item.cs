namespace Back_End.Models.CrModels
{
    public class Item
    {
        public string name { get; set; }
        public int id { get; set; }
        public int maxLevel { get; set; }
        public int maxEvolutionLevel { get; set; }
        public Dictionary<string, string> iconUrls { get; set; }
    }
}
