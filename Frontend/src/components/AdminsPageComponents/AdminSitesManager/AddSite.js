import React, { useState } from "react";
import Button from "../../Button/Button";
import adminService from "../../../services/adminService";

function AddSite({ setSiteList }) {
  const [siteName, setSiteName] = useState("");
  const [apartmentCount, setApartmentCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (siteName.length <= 1) {
      alert("Blok adı 1 karakterden küçük olamaz.");
      return null;
    }
    try {
      adminService.Sites.addNewSite({
        name: siteName,
        apartmentCount: apartmentCount,
      }).then(() => {
        adminService.Sites.getSiteList()
          .then((response) => setSiteList(response))
          .catch((error) => console.log(error));
      });
      setSiteName("");
      setApartmentCount(1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <span className="input-group-text" id="inputGroup-sizing-default">
        Blok Adı
      </span>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setSiteName(e.target.value)}
        value={siteName}
      />
      <span className="input-group-text ms-5" id="inputGroup-sizing-default">
        Apartman Sayısı
      </span>
      <input
        type="number"
        min={1}
        className="form-control me-5"
        onChange={(e) => setApartmentCount(e.target.value)}
        value={apartmentCount}
      />
      <Button name="Ekle" style={{ margin: 0 }} type="submit" />
    </form>
  );
}

export default AddSite;
