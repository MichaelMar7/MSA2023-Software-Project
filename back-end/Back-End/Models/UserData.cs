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

        public string CocTag { get; set; }
        public string CrTag { get; set; }
        public string BsTag { get; set; }
    }
}
