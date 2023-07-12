using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_End.Migrations
{
    /// <inheritdoc />
    public partial class multitagv4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BsPlayerTag_UserDatas_UserDataId",
                table: "BsPlayerTag");

            migrationBuilder.DropForeignKey(
                name: "FK_CocPlayerTag_UserDatas_UserDataId",
                table: "CocPlayerTag");

            migrationBuilder.DropForeignKey(
                name: "FK_CrPlayerTag_UserDatas_UserDataId",
                table: "CrPlayerTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CrPlayerTag",
                table: "CrPlayerTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CocPlayerTag",
                table: "CocPlayerTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BsPlayerTag",
                table: "BsPlayerTag");

            migrationBuilder.RenameTable(
                name: "CrPlayerTag",
                newName: "CrPlayerTags");

            migrationBuilder.RenameTable(
                name: "CocPlayerTag",
                newName: "CocPlayerTags");

            migrationBuilder.RenameTable(
                name: "BsPlayerTag",
                newName: "BsPlayerTags");

            migrationBuilder.RenameIndex(
                name: "IX_CrPlayerTag_UserDataId",
                table: "CrPlayerTags",
                newName: "IX_CrPlayerTags_UserDataId");

            migrationBuilder.RenameIndex(
                name: "IX_CocPlayerTag_UserDataId",
                table: "CocPlayerTags",
                newName: "IX_CocPlayerTags_UserDataId");

            migrationBuilder.RenameIndex(
                name: "IX_BsPlayerTag_UserDataId",
                table: "BsPlayerTags",
                newName: "IX_BsPlayerTags_UserDataId");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "CrPlayerTags",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "CocPlayerTags",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "BsPlayerTags",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CrPlayerTags",
                table: "CrPlayerTags",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CocPlayerTags",
                table: "CocPlayerTags",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BsPlayerTags",
                table: "BsPlayerTags",
                column: "Id");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropPrimaryKey(
                name: "PK_CrPlayerTags",
                table: "CrPlayerTags");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CocPlayerTags",
                table: "CocPlayerTags");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BsPlayerTags",
                table: "BsPlayerTags");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "CrPlayerTags");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "CocPlayerTags");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "BsPlayerTags");

            migrationBuilder.RenameTable(
                name: "CrPlayerTags",
                newName: "CrPlayerTag");

            migrationBuilder.RenameTable(
                name: "CocPlayerTags",
                newName: "CocPlayerTag");

            migrationBuilder.RenameTable(
                name: "BsPlayerTags",
                newName: "BsPlayerTag");

            migrationBuilder.RenameIndex(
                name: "IX_CrPlayerTags_UserDataId",
                table: "CrPlayerTag",
                newName: "IX_CrPlayerTag_UserDataId");

            migrationBuilder.RenameIndex(
                name: "IX_CocPlayerTags_UserDataId",
                table: "CocPlayerTag",
                newName: "IX_CocPlayerTag_UserDataId");

            migrationBuilder.RenameIndex(
                name: "IX_BsPlayerTags_UserDataId",
                table: "BsPlayerTag",
                newName: "IX_BsPlayerTag_UserDataId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CrPlayerTag",
                table: "CrPlayerTag",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CocPlayerTag",
                table: "CocPlayerTag",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BsPlayerTag",
                table: "BsPlayerTag",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BsPlayerTag_UserDatas_UserDataId",
                table: "BsPlayerTag",
                column: "UserDataId",
                principalTable: "UserDatas",
                principalColumn: "UserDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_CocPlayerTag_UserDatas_UserDataId",
                table: "CocPlayerTag",
                column: "UserDataId",
                principalTable: "UserDatas",
                principalColumn: "UserDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_CrPlayerTag_UserDatas_UserDataId",
                table: "CrPlayerTag",
                column: "UserDataId",
                principalTable: "UserDatas",
                principalColumn: "UserDataId");
        }
    }
}
