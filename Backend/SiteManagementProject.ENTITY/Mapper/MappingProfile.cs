using AutoMapper;
using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Model ve DTO'ların birbirine dönüştürülmesini sağlıyoruz.
            CreateMap<Admin, DtoAdmin>().ReverseMap();
            CreateMap<Apartment, DtoApartment>().ReverseMap();
            CreateMap<Bill, DtoBill>().ReverseMap();
            CreateMap<Flat, DtoFlat>().ReverseMap();
            CreateMap<Flat, DtoFlats>().ReverseMap();
            CreateMap<FlatType, DtoFlatType>().ReverseMap();
            CreateMap<User, DtoUser>().ReverseMap();
            CreateMap<Site, DtoSite>().ReverseMap();
            CreateMap<Admin, DtoLoginUser>().ReverseMap();
            CreateMap<Admin, DtoLogin>().ReverseMap();
            CreateMap<User, DtoLoginUser>().ReverseMap();
            CreateMap<User, DtoLogin>().ReverseMap();
        }

    }
}
