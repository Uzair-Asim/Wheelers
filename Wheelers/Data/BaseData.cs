using System;

namespace Wheelers.Data
{
    public class BaseData
    {
        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool? IsDelete { get; set; }
    }
}