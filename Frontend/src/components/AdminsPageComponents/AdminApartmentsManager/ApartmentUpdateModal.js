import React, { useEffect, useState } from "react";
import Styled from "./ApartmentUpdateModal.styled";
import adminService from "../../../services/adminService";

function ApartmentUpdateModal({
  setIsOpen,
  siteList,
  apartmentId,
  setApartmentList,
}) {
  const [apartmentName, setApartmentName] = useState("");
  const [flatCount, setFlatCount] = useState("1");
  const [selectedSiteId, setSelectedSiteId] = useState();

  useEffect(() => {
    adminService.Apartments.getApartmentById(apartmentId).then((response) => {
      setSelectedSiteId(response.siteId);
      setApartmentName(response.name);
      setFlatCount(response.flatCount.trim());
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (apartmentName.length <= 1) {
      alert("Apartman adı 1 karakterden küçük olamaz.");
      return null;
    }
    try {
      adminService.Apartments.updateApartment({
        id: Number(apartmentId),
        name: apartmentName,
        flatCount: flatCount,
        siteId: Number(selectedSiteId),
      }).then(() => {
        adminService.Apartments.getApartmentList()
          .then((response) => setApartmentList(response))
          .catch((error) => console.log(error));
        setIsOpen(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styled>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal2">
          <div className="modal2Header">
            <h5 className="heading2">Apartman Bilgisi Güncelleme</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal2Content">
            <form className=" my-4 d-flex flex-column" onSubmit={handleSubmit}>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Apartman Adı
                </span>
                <input
                  type="text"
                  className="form-control ms-2"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setApartmentName(e.target.value)}
                  value={apartmentName}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Daire Sayısı
                </span>
                <input
                  type="number"
                  className="form-control ms-2"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setFlatCount(e.target.value)}
                  value={flatCount}
                />
                <select
                  className="ms-4 p-2"
                  onChange={(e) => {
                    setSelectedSiteId(Number(e.target.value));
                  }}
                  value={selectedSiteId}
                >
                  {siteList.map((site, key) => {
                    return (
                      <option key={key} className="p-2" value={site.id}>
                        {site.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Güncelle
              </button>
            </form>
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default ApartmentUpdateModal;
