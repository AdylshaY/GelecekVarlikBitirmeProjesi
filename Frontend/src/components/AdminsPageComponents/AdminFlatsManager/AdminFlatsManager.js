import React, { useEffect, useState } from "react";
import adminService from "../../../services/adminService";
import AddFlat from "./AddFlat";
import FlatList from "./FlatList";

function AdminFlatsManager() {
  const [apartmentList, setApartmentList] = useState([]);
  const [selectedApartmentId, setSelectedApartmentId] = useState();
  const [flatList, setFlatList] = useState([]);

  useEffect(() => {
    adminService.Apartments.getApartmentList()
      .then((response) => {
        setApartmentList(response);
        setSelectedApartmentId(response[0].id);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">Daire Yönetimi</h1>
      <div className="d-flex justify-content-center mt-4">
        <select
          className="ms-4 p-2"
          onChange={(e) => {
            setSelectedApartmentId(Number(e.target.value));
          }}
          value={selectedApartmentId}
        >
          {apartmentList.map((apartment, key) => {
            return (
              <option key={key} className="p-2" value={apartment.id}>
                {apartment.name}
              </option>
            );
          })}
        </select>
      </div>
      <AddFlat
        selectedApartmentId={selectedApartmentId}
        setFlatList={setFlatList}
      />
      <FlatList
        selectedApartmentId={selectedApartmentId}
        flatList={flatList}
        setFlatList={setFlatList}
      />
    </div>
  );
}

export default AdminFlatsManager;
