using Microsoft.EntityFrameworkCore.Migrations;

namespace Daily.Database.Migrations
{
    public partial class DeletedPropertyNoteName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Notes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Notes",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true);
        }
    }
}
