import React, { useEffect, useState } from "react";
import adminService from "../../../services/adminService";
import FlatUpdateModal from "./FlatUpdateModal";

function FlatList({ selectedApartmentId, setFlatList, flatList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [flatId, setFlatId] = useState();
  const [flatTypesList, setFlatTypesList] = useState([]);

  useEffect(() => {
    if (selectedApartmentId !== undefined) {
      adminService.Apartments.getFlats(selectedApartmentId)
        .then((response) => setFlatList(response))
        .catch((error) => console.log(error));
    }
  }, [selectedApartmentId]);

  useEffect(() => {
    adminService.User.getUserList()
      .then((response) => setUserList(response))
      .catch((error) => console.log(error));
    adminService.FlatTypes.getFlatTypeList()
      .then((response) => {
        setFlatTypesList(response);
      })
      .catch((error) => console.log(error));
  }, []);

  let fullname;
  const findUserName = (flat) => {
    userList.map((user) => {
      if (user.id === flat.usersId) {
        fullname = user.fullName;
      }
    });
  };

  let flatTypeName;
  const findFlatTypeName = (flat) => {
    flatTypesList.map((flatType) => {
      if (flatType.id === flat.flatTypeId) {
        flatTypeName = flatType.name;
      }
    });
  };

  return (
    <>
      <ul className="list-group mt-5">
        <h3>Daire Listesi</h3>
        {flatList.map((flat, key) => {
          return (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={key}
            >
              <span>Daire No: {flat.flatNo}</span>
              <span style={{ width: "300px" }}>
                İkamet Eden: {findUserName(flat)}
                {flat.usersId === 0 ? "Boş" : fullname}
              </span>
              <span style={{ width: "300px" }}>
              Daire tipi: {findFlatTypeName(flat)}
                {flatTypeName}
              </span>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id={flat.id}
                  onClick={(e) => {
                    setFlatId(e.target.id);
                    setIsOpen(true);
                  }}
                >
                  Güncelle
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() =>
                    adminService.Flats.deleteFlat(flat.id)
                      .then((response) => {
                        adminService.Apartments.getFlats(selectedApartmentId)
                          .then((response) => setFlatList(response))
                          .catch((error) => console.log(error));
                      })
                      .catch((error) => console.log(error))
                  }
                >
                  Sil
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <FlatUpdateModal
          selectedApartmentId={selectedApartmentId}
          setIsOpen={setIsOpen}
          setUserList={setUserList}
          userList={userList}
          setFlatList={setFlatList}
          flatId={flatId}
        />
      )}
    </>
  );
}

export default FlatList;
