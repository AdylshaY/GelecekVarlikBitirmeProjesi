import React from "react";
import { useState, useEffect } from "react";
import userService from "../../../services/userService";

const UserFlatsList = ({ flats }) => {
  const [apartmentList, setApartmentList] = useState([]);
  const [flatTypesList, setFlatTypesList] = useState([]);

  useEffect(() => {
    userService.apartments
      .getApartmentList()
      .then((response) => setApartmentList(response))
      .catch((error) => console.log(error));

    userService.flatTypes
      .getFlatTypeList()
      .then((response) => setFlatTypesList(response))
      .catch((error) => console.log(error));
  }, []);
  
  let apartmantName;
  const findApartmentName = (flat) => {
    apartmentList.map((apartment) => {
      if (flat.apartmentsId === apartment.id) {
        apartmantName = apartment.name;
      }
    });
  };

  let flatTypeName;
  const findFlatTypeName = (flat) => {
    flatTypesList.map((flatType) => {
      if (flat.flatTypeId === flatType.id) {
        flatTypeName = flatType.name;
      }
    });
  };

  return (
    <>
      <ul className="list-group mt-5 ">
        {flats.map((flat, key) => {
          return (
            <li
              key={key}
              className="list-group-item d-flex align-items-center justify-content-between mx-5"
            >
              <p className="my-2 d-inline-flex" style={{width: "300px"}}>
                {findApartmentName(flat)}
                <strong>Apartman: </strong>
                <span className="ms-2">{apartmantName}</span>
              </p>
              <p className="my-2 d-inline-flex">
                <strong>Daire No:</strong>
                <span className="ms-2">{flat.flatNo}</span>
              </p>
              <p className="my-2 d-inline-flex">
                {findFlatTypeName(flat)}
                <strong>Daire Tipi:</strong>
                <span className="ms-2">{flatTypeName}</span>
              </p>
            </li>
          );
        })}
      </ul>
      {/* {isOpen && (
        <SiteUpdateModal
          siteList={siteList}
          siteId={siteId}
          setIsOpen={setIsOpen}
          setSiteList={setSiteList}
        />
      )} */}
    </>
  );
};

export default UserFlatsList;
