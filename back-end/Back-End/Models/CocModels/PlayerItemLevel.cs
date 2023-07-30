namespace Back_End.Models.CocModels
{
    public class PlayerItemLevel
    {
        public int id { get; set; }
        public string name { get; set; }
        public int level { get; set; }
        public int maxLevel { get; set; }
        public string village { get; set; }
        public bool superTroopIsActive { get; set; }
    }
}
