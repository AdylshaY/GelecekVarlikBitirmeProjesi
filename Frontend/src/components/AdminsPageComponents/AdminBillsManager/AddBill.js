import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import adminService from "../../../services/adminService";

function AddBill({ setBillList }) {
  const [siteList, setSiteList] = useState([]);
  const [selectedSiteId, setSelectedSiteId] = useState();
  const [apartmentList, setApartmentList] = useState([]);
  const [selectedApartmentId, setSelectedApartmentId] = useState();
  const [flatList, setFlatList] = useState([]);
  const [selectedFlatId, setSelectedFlatId] = useState();
  const [billType, setBillType] = useState();
  const [dueDate, setDueDate] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    adminService.Sites.getSiteList()
      .then((response) => {
        setSiteList(response);
        setSelectedSiteId(response[0].id);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (selectedSiteId !== undefined) {
      adminService.Sites.getApartments(selectedSiteId)
        .then((response) => {
          setApartmentList(response);
          setSelectedApartmentId(response[0].id);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedSiteId]);

  useEffect(() => {
    if (selectedApartmentId !== undefined) {
      adminService.Apartments.getFlats(selectedApartmentId)
        .then((response) => {
          setFlatList(response);
          setSelectedFlatId(response[0].id);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedApartmentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      adminService.Bills.addNewBill({
        type: billType,
        flatsId: selectedFlatId,
        amount: amount,
        dueDate: dueDate,
        isPaid: false,
      }).then(() => {
        adminService.Bills.getBillList()
          .then((response) => setBillList(response))
          .catch((error) => console.log(error));
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <div className="input-group mb-3 d-flex justify-content-center">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Blok
        </span>
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
        <span className="input-group-text ms-4" id="inputGroup-sizing-default">
          Apartman
        </span>
        <select
          className="me-4 p-2"
          onChange={(e) => {
            setSelectedApartmentId(Number(e.target.value));
          }}
        >
          {apartmentList.map((apartment, key) => {
            return (
              <option key={key} className="p-2" value={apartment.id}>
                {apartment.name}
              </option>
            );
          })}
        </select>
        <span className="input-group-text ms-4" id="inputGroup-sizing-default">
          Daire
        </span>
        <select
          className="me-4 p-2"
          onChange={(e) => {
            setSelectedFlatId(Number(e.target.value));
          }}
        >
          {flatList.map((flat, key) => {
            return (
              <option key={key} className="p-2" value={flat.id}>
                {flat.flatNo}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-group mb-3 d-flex-justify-content-center">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Fatura Türü
        </span>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setBillType(e.target.value)}
          value={billType}
        />
        <span className="input-group-text ms-5" id="inputGroup-sizing-default">
          Fatura Tutarı
        </span>
        <input
          type="number"
          min={0}
          className="form-control"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <span className="input-group-text ms-5" id="inputGroup-sizing-default">
          Son Ödeme Tarihi
        </span>
        <input
          type="date"
          className="form-control me-5"
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
        />
        <Button name="Ekle" style={{ margin: 0 }} type="submit" />
      </div>
    </form>
  );
}

export default AddBill;
