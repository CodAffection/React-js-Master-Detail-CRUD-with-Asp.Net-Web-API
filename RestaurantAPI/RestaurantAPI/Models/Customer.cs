using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantAPI.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string CustomerName { get; set; }
    }
}
