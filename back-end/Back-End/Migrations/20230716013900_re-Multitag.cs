using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_End.Migrations
{
    /// <inheritdoc />
    public partial class reMultitag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BsPlayerTags_UserDatas_UserDataId",
                table: "BsPlayerTags");

            migrationBuilder.DropForeignKey(
                name: "FK_CocPlayerTags_UserDatas_UserDataId",
                table: "CocPlayerTags");

            migrationBuilder.DropForeignKey(
                name: "FK_CrPlayerTags_UserDatas_UserDataId",
                table: "CrPlayerTags");

            migrationBuilder.DropIndex(
                name: "IX_CrPlayerTags_UserDataId",
                table: "CrPlayerTags");

            migrationBuilder.DropIndex(
                name: "IX_CocPlayerTags_UserDataId",
                table: "CocPlayerTags");

            migrationBuilder.DropIndex(
                name: "IX_BsPlayerTags_UserDataId",
                table: "BsPlayerTags");

            migrationBuilder.DropColumn(
                name: "UserDataId",
                table: "CrPlayerTags");

            migrationBuilder.DropColumn(
                name: "UserDataId",
                table: "CocPlayerTags");

            migrationBuilder.DropColumn(
                name: "UserDataId",
                table: "BsPlayerTags");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserDataId",
                table: "CrPlayerTags",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserDataId",
                table: "CocPlayerTags",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserDataId",
                table: "BsPlayerTags",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CrPlayerTags_UserDataId",
                table: "CrPlayerTags",
                column: "UserDataId");

            migrationBuilder.CreateIndex(
                name: "IX_CocPlayerTags_UserDataId",
                table: "CocPlayerTags",
                column: "UserDataId");

            migrationBuilder.CreateIndex(
                name: "IX_BsPlayerTags_UserDataId",
                table: "BsPlayerTags",
                column: "UserDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_BsPlayerTags_UserDatas_UserDataId",
                table: "BsPlayerTags",
                column: "UserDataId",
                principalTable: "UserDatas",
                principalColumn: "UserDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_CocPlayerTags_UserDatas_UserDataId",
                table: "CocPlayerTags",
                column: "UserDataId",
                principalTable: "UserDatas",
                principalColumn: "UserDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_CrPlayerTags_UserDatas_UserDataId",
                table: "CrPlayerTags",
                column: "UserDataId",
                principalTable: "UserDatas",
                principalColumn: "UserDataId");
        }
    }
}
