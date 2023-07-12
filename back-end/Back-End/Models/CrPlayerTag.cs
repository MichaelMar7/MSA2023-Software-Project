using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Back_End.Models
{
    public class CrPlayerTag
    {
        [Required]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        [Required]
        public string UserId { get; set; }
        [Required]
        public string Tag { get; set; }
    }
}
