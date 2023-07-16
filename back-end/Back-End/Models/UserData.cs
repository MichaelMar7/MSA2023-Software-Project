using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Back_End.Models
{
    public class UserData
    {
        [Required]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string UserDataId { get; set; }
        [Required]
        public string UserId { get; set; }

        //public ICollection<CocPlayerTag> CocPlayerTags { get; set; } = new List<CocPlayerTag>();
        //public ICollection<CrPlayerTag> CrPlayerTags { get; set; } = new List<CrPlayerTag>();
        //public ICollection<BsPlayerTag> BsPlayerTags { get; set; } = new List<BsPlayerTag>();

        
        //public string? CocTag { get; set; }
        //public string? CrTag { get; set; }
        //public string? BsTag { get; set; }
        
    }
}
