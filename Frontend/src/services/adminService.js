import apiService from "./apiService";

const adminService = {};

adminService.Sites = {
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
  getApartments: async (id) => {
    return apiService
      .get(`http://localhost:20472/api/Sites/GetApartments?id=${id}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  addNewSite: async (site) => {
    return apiService
      .post("http://localhost:20472/api/Sites/Add", site)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getSiteById: async (siteId) => {
    return apiService
      .get(`http://localhost:20472/api/Sites?id=${siteId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateSite: async (site) => {
    return apiService
      .put("http://localhost:20472/api/Sites/update", site)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteSite: async (siteId) => {
    return apiService
      .delete(`http://localhost:20472/api/Sites/Delete?id=${siteId}`)
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

adminService.Apartments = {
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
  addNewApartment: async (apartment) => {
    return apiService
      .post("http://localhost:20472/api/Apartments/Add", apartment)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
  updateApartment: async (apartments) => {
    return apiService
      .put("http://localhost:20472/api/Apartments/update", apartments)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteApartment: async (apartmentId) => {
    return apiService
      .delete(`http://localhost:20472/api/Apartments/Delete?id=${apartmentId}`)
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

adminService.User = {
  addNewUser: async (user) => {
    return apiService
      .post("http://localhost:20472/api/Users/Add", user)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getUserList: async () => {
    return apiService
      .get("/api/Users/GetAll")
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getUserById: async (userId) => {
    return apiService
      .get(`http://localhost:20472/api/Users?id=${userId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteUser: async (userId) => {
    return apiService
      .delete(`http://localhost:20472/api/Users/Delete?id=${userId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateUser: async (user) => {
    return apiService
      .put("http://localhost:20472/api/Users/update", user)
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

adminService.Flats = {
  addNewFlat: async (flat) => {
    return apiService
      .post("http://localhost:20472/api/Flats/Add", flat)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteFlat: async (flatId) => {
    return apiService
      .delete(`http://localhost:20472/api/Flats/Delete?id=${flatId}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateFlat: async (flat) => {
    return apiService
      .put("http://localhost:20472/api/Flats/update", flat)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getFlatById: async (flatId) => {
    return apiService
      .get(`http://localhost:20472/api/Flats?id=${flatId}`)
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

adminService.FlatTypes = {
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

adminService.Bills = {
  getBillList: async () => {
    return apiService
      .get("/api/Bills/GetAll")
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getBillById: async (id) => {
    return apiService
      .get(`http://localhost:20472/api/Bills?id=${id}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  addNewBill: async (bill) => {
    return apiService
      .post("http://localhost:20472/api/Bills/Add", bill)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateBill: async (bill) => {
    return apiService
      .put("http://localhost:20472/api/Bills/update", bill)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteBill: async (id) => {
    return apiService
      .delete(`http://localhost:20472/api/Bills/Delete?id=${id}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          return response;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
}

export default adminService;
