namespace Back_End.Models.CrModels
{
    public class CrPlayerClan
    {
        public string tag { get; set; }
        public string name { get; set; }
        public int badgeId { get; set; }
        public Dictionary<string, string> badgeUrls { get; set; }
    }
}
