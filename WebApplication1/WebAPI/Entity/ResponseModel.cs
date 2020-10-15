using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Entity
{
    public class ResponseModel
    {
        public string Message { get; set; }
        public string status { get; set; }
        public object Data { get; set; }
    }
}
