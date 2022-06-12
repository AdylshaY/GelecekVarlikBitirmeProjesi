import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import adminService from "../../../services/adminService";

function AddApartment({ siteList, setApartmentList }) {
  const [apartmentName, setApartmentName] = useState("");
  const [flatCount, setFlatCount] = useState("1");
  const [selectedSiteId, setSelectedSiteId] = useState();

  useEffect(() => {
    if (siteList.length !== 0) {
      setSelectedSiteId(siteList[0].id);
    }
  }, [siteList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (apartmentName.length <= 1) {
      alert("Apartman adı 1 karakterden küçük olamaz.");
      return null;
    }
    try {
      adminService.Apartments.addNewApartment({
        name: apartmentName,
        flatCount: flatCount,
        siteId: selectedSiteId,
      }).then(() => {
        adminService.Apartments.getApartmentList()
          .then((response) => setApartmentList(response))
          .catch((error) => console.log(error));
        setApartmentName("");
        setFlatCount("1");
        setSelectedSiteId(siteList[0].id);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <span className="input-group-text" id="inputGroup-sizing-default">
        Apartman Adı
      </span>
      <input
        type="text"
        className="form-control"
        value={apartmentName}
        onChange={(e) => setApartmentName(e.target.value)}
      />
      <span className="input-group-text ms-4" id="inputGroup-sizing-default">
        Daire Sayısı
      </span>
      <input
        type="number"
        min={1}
        className="form-control me-4"
        value={flatCount}
        onChange={(e) => setFlatCount(e.target.value)}
      />
      <select
        className="me-4 p-2"
        onChange={(e) => {
          setSelectedSiteId(Number(e.target.value));
        }}
      >
        {siteList.map((site, key) => {
          return (
            <option key={key} className="p-2" value={site.id}>
              {site.name}
            </option>
          );
        })}
      </select>
      <Button name="Ekle" style={{ margin: 0 }} type="submit" />
    </form>
  );
}

export default AddApartment;
