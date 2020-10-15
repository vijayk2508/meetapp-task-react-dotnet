using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Entity
{
    public class Auth
    {
        private string username = String.Empty;
        private string password = String.Empty;

        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
    }
}
