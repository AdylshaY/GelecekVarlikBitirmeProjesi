import apiService from "./apiService";

const userService = {};

userService.flats = {
  getUsersFlats: async (siteId) => {
    return apiService
      .get(`http://localhost:20472/api/Users/GetUsersFlats?id=${siteId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getBillsByFlatId: async (flatId) => {
    return apiService
      .get(`http://localhost:20472/api/Flats/GetBillsByFlatId?id=${flatId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

userService.apartments = {
  getApartmentById: async (apartmentId) => {
    return apiService
      .get(`http://localhost:20472/api/Apartments?id=${apartmentId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getApartmentList: async () => {
    return apiService
      .get("/api/Apartments/GetAll")
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getFlats: async (apartmentId) => {
    return apiService
      .get(`http://localhost:20472/api/Apartments/GetFlats?id=${apartmentId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

userService.sites = {
  getSiteList: async () => {
    return apiService
      .get("/api/Sites/GetAll")
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

userService.flatTypes = {
  getFlatTypeList: async () => {
    return apiService
      .get("http://localhost:20472/api/FlatType/GetAll")
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default userService;
