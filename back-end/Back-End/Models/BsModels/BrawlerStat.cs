namespace Back_End.Models.BsModels
{
    public class BrawlerStat
    {
        public int id {  get; set; }
        public string name { get; set; }
        public int power { get; set; }
        public int rank { get; set; }
        public int trophies { get; set; }
        public int highestTrophies { get; set; }
        public List<StarPower> starPowers { get; set; }
        public List<Accessory> gadgets { get; set; }
        public List<GearStat> gears { get; set; }
    }
}
