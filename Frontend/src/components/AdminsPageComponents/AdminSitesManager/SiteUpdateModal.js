import React, { useEffect, useState } from "react";
import Styled from "./SiteUpdateModal.styled";
import adminService from "../../../services/adminService";

function SiteUpdateModal({ siteId, setIsOpen, setSiteList }) {
  const [siteName, setSiteName] = useState("");
  const [apartmentCount, setApartmentCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (siteName.length <= 1) {
      alert("Blok adı 1 karakterden küçük olamaz.");
      return null;
    }
    try {
      adminService.Sites.updateSite({
        id: Number(siteId),
        name: siteName,
        apartmentCount: apartmentCount,
      }).then(() => {
        adminService.Sites.getSiteList()
          .then((response) => setSiteList(response))
          .catch((error) => console.log(error));
        setIsOpen(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    adminService.Sites.getSiteById(siteId).then((response) => {
      setSiteName(response.name);
      setApartmentCount(response.apartmentCount);
    });
  }, []);

  return (
    <Styled>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal2">
          <div className="modal2Header">
            <h5 className="heading2">Site Bilgisi Güncelleme</h5>
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
                  Blok Adı
                </span>
                <input
                  type="text"
                  className="form-control ms-2"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setSiteName(e.target.value)}
                  value={siteName}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Apartman Sayısı
                </span>
                <input
                  type="number"
                  className="form-control ms-2"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setApartmentCount(e.target.value)}
                  value={apartmentCount}
                />
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

export default SiteUpdateModal;
