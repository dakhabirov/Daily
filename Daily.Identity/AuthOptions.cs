using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Daily.WebApi.Account
{
    public class AuthOptions
    {
        /// <summary>
        /// Издатель токена.
        /// </summary>
        public const string ISSUER = "DailyAuthServer";

        /// <summary>
        /// Потребитель токена.
        /// </summary>
        public const string AUDIENCE = "DailyAuthClient";

        /// <summary>
        /// Ключ для шифрования токена.
        /// </summary>
        const string KEY = "mysupersecretkey!123";

        /// <summary>
        /// Время жизни токена.
        /// </summary>
        public const int LIFETIME = 1; // 1 минута

        /// <summary>
        /// Получить ключ шифрования токена.
        /// </summary>
        /// <returns>Ключ шифрования токена.</returns>
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
