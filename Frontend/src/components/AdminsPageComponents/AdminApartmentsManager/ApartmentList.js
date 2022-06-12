import React, { useState } from "react";
import adminService from "../../../services/adminService";
import ApartmentUpdateModal from "./ApartmentUpdateModal";

function ApartmentList({ apartmentList, setApartmentList, siteList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [apartmentId, setApartmentId] = useState();

  let siteName;

  const findSiteName = (apartment) => {
    siteList.map((site) => {
      if (site.id === apartment.siteId) {
        siteName = site.name;
      }
    });
  };

  return (
    <>
      <ul className="list-group">
        <h3>Apartman Listesi</h3>
        {apartmentList.map((apartment, key) => {
          return (
            <li
              key={key}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="ms-2">
                <p className="m-0 d-inline-flex" style={{ width: "200px" }}>
                  {apartment.name}
                </p>
                <p
                  className="ms-5 mb-0 d-inline-flex"
                  style={{ width: "200px" }}
                >
                  Kayıtlı daire sayısı: {apartment.flatCount}
                </p>
                <p className="ms-5 mb-0 d-inline-flex">
                  Kayıtlı olduğu blok: {findSiteName(apartment)} {siteName}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id={apartment.id}
                  onClick={(e) => {
                    setApartmentId(e.target.id);
                    setIsOpen(true);
                  }}
                >
                  Güncelle
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  id={apartment.id}
                  onClick={(e) => {
                    adminService.Apartments.deleteApartment(e.target.id)
                      .then(() => {
                        adminService.Apartments.getApartmentList()
                          .then((response) => {
                            setApartmentList(response);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Sil
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <ApartmentUpdateModal
          apartmentList={apartmentList}
          apartmentId={apartmentId}
          setIsOpen={setIsOpen}
          setApartmentList={setApartmentList}
          siteList={siteList}
        />
      )}
    </>
  );
}

export default ApartmentList;
