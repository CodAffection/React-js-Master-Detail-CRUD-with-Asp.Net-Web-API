using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantAPI.Models
{
    public class OrderMaster
    {
        [Key]
        public long OrderMasterId { get; set; }

        [Column(TypeName = "nvarchar(75)")]
        public string OrderNumber { get; set; }

        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string PMethod { get; set; }

        public decimal GTotal { get; set; }

        public List<OrderDetail> OrderDetails { get; set; }

        [NotMapped]
        public string DeletedOrderItemIds { get; set; }

    }
}
