using AutoMapper;
using SiteManagementProject.ENTITY.Mapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.BLL
{
    internal class ObjectMapper
    {
        // Lazy kullanmamızın sebebi projede sadece ihtiyaç olduğunda kullanılacak olması.
        static readonly Lazy<IMapper> lazy = new Lazy<IMapper>(() =>
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MappingProfile>();
            });

            return config.CreateMapper();
        }
        );

        public static IMapper Mapper => lazy.Value;
    }
}
