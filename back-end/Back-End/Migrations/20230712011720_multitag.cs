using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_End.Migrations
{
    /// <inheritdoc />
    public partial class multitag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserDatas",
                columns: table => new
                {
                    UserDataId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDatas", x => x.UserDataId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "BsPlayerTag",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tag = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDataId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BsPlayerTag", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BsPlayerTag_UserDatas_UserDataId",
                        column: x => x.UserDataId,
                        principalTable: "UserDatas",
                        principalColumn: "UserDataId");
                });

            migrationBuilder.CreateTable(
                name: "CocPlayerTag",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tag = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDataId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CocPlayerTag", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CocPlayerTag_UserDatas_UserDataId",
                        column: x => x.UserDataId,
                        principalTable: "UserDatas",
                        principalColumn: "UserDataId");
                });

            migrationBuilder.CreateTable(
                name: "CrPlayerTag",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tag = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDataId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrPlayerTag", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrPlayerTag_UserDatas_UserDataId",
                        column: x => x.UserDataId,
                        principalTable: "UserDatas",
                        principalColumn: "UserDataId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_BsPlayerTag_UserDataId",
                table: "BsPlayerTag",
                column: "UserDataId");

            migrationBuilder.CreateIndex(
                name: "IX_CocPlayerTag_UserDataId",
                table: "CocPlayerTag",
                column: "UserDataId");

            migrationBuilder.CreateIndex(
                name: "IX_CrPlayerTag_UserDataId",
                table: "CrPlayerTag",
                column: "UserDataId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BsPlayerTag");

            migrationBuilder.DropTable(
                name: "CocPlayerTag");

            migrationBuilder.DropTable(
                name: "CrPlayerTag");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "UserDatas");
        }
    }
}
