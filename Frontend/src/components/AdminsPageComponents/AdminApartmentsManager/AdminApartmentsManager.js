import React, { useState, useEffect } from "react";
import AddApartment from "./AddApartment";
import ApartmentList from "./ApartmentList";
import adminService from "../../../services/adminService";

function AdminApartmentsManager() {
  const [apartmentList, setApartmentList] = useState([]);
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    adminService.Apartments.getApartmentList()
      .then((response) => setApartmentList(response))
      .catch((error) => console.log(error));
    adminService.Sites.getSiteList()
      .then((response) => setSiteList(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">Apartman Yönetimi</h1>
      <AddApartment
        setApartmentList={setApartmentList}
        siteList={siteList}
      />
      <ApartmentList
        apartmentList={apartmentList}
        setApartmentList={setApartmentList}
        siteList={siteList}
      />
    </div>
  );
}

export default AdminApartmentsManager;
