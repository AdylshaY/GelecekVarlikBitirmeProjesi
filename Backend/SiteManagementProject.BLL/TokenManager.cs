using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SiteManagementProject.ENTITY.Dto;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.BLL
{
    public class TokenManager
    {
        IConfiguration configuration;

        public TokenManager(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public string CreateAccessToken(DtoLoginUser user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, user.Id.ToString()),
                new Claim("username", user.Username)
            };

            var claimsIdentity = new ClaimsIdentity(claims, "Token");

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Tokens:Key"]));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken
            (
                issuer: configuration["Tokens:Issuer"],
                audience: configuration["Tokens:Issuer"],
                expires: DateTime.Now.AddDays(1),
                notBefore: DateTime.Now,
                signingCredentials: cred,
                claims: claimsIdentity.Claims
            );

            // token olusturma sinifi ile ornek almak
            var tokenHandler = new { token = new JwtSecurityTokenHandler().WriteToken(token) };

            return tokenHandler.token;
        }
    }
}
