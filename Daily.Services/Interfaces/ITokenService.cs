namespace Daily.Services.Interfaces
{
    public interface ITokenService
    {
        public string BuildToken(string username, string password);
    }
}
