using Daily.Database;
using Daily.Models;
using Daily.Repositories.Implementations;
using Daily.Repositories.Interfaces;
using Daily.WebApi.Account;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace Daily.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = Configuration.GetConnectionString("LocalDBConnection");
            services.AddDbContext<DailyDbContext>(options => options.UseSqlServer(connectionString));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    // указывает, будет ли использоваться SSL при отправке токена
                    options.RequireHttpsMetadata = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        // указывает, будет ли валидироваться издатель при валидации токена
                        ValidateIssuer = true,
                        // строка, представляющая издателя
                        ValidIssuer = AuthOptions.ISSUER,

                        // будет ли валидироваться потребитель токена
                        ValidateAudience = true,
                        // установка потребителя токена
                        ValidAudience = AuthOptions.AUDIENCE,

                        // будет ли валидироваться время существования
                        ValidateLifetime = true,

                        // будет ли валидироваться ключ безопасности
                        ValidateIssuerSigningKey = true,
                        // установка ключа безопасности
                        IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                    };
                });

            services.AddTransient<IBaseRepository<UserModel>, BaseRepository<UserModel>>();
            services.AddTransient<IBaseRepository<NoteModel>, BaseRepository<NoteModel>>();

            services.AddCors();

            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            DefaultFilesOptions defaultFilesOptions = new();
            defaultFilesOptions.DefaultFileNames.Add("html/home/index.html");   // страница по умолчанию
            app.UseDefaultFiles(defaultFilesOptions);
            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseRouting();

            // подключаем CORS
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
