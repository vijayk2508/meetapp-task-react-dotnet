using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Entity
{
    public class Program
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ProgramImage> image { get; set; }
    }
    public class ProgramImage
    {
        public int Id { get; set; }
        public string Url { get; set; }
    }
}
