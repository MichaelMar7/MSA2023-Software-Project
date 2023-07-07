using System.Runtime.Serialization;

namespace Back_End.Models.BsModels
{
    [DataContract(Name = "Accessory")]
    public class GadgetStat
    {
        public int id { get; set; }
        public string name { get; set; }
    }
}
