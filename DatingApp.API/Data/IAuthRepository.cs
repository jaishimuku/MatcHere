using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    // This Interface Implemets 3 things (Repository Pattern)
    // 1) Registering user
    // 2) Login Registered User
    // 3) Checks existing user i.e. username already exists
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string password);


    }
}