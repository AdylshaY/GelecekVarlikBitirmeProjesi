import { useState, useEffect } from "react";
import Styled from "./BillUpdateModal.styled";
import adminService from "../../../services/adminService";

function BillUpdateModal({ setIsOpen, setBillList, selectedBill }) {
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
        })
        .catch((error) => console.log(error));
    }
  }, [selectedApartmentId]);

  useEffect(() => {
    adminService.Bills.getBillById(selectedBill)
      .then((response) => {
        setAmount(response.amount);
        setBillType(response.type);
        setDueDate(response.dueDate.slice(0, 10));
        setSelectedFlatId(response.flatsId);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      adminService.Bills.updateBill({
        id: Number(selectedBill),
        type: billType,
        flatsId: Number(selectedFlatId),
        amount: Number(amount),
        dueDate: dueDate,
        date: new Date().toISOString(),
        isPaid: false,
      }).then(() => {
        adminService.Bills.getBillList()
          .then((response) => setBillList(response))
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
            <h5 className="heading2">Fatura Bilgisi Güncelleme</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal2Content">
            <form className="input-group" onSubmit={handleSubmit}>
              <div className="input-group mb-3 d-flex">
                <div className="d-flex mb-3 w-100">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Blok
                  </span>
                  <select
                    className=" p-2"
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
                </div>
                <div className="d-flex mb-3 w-100">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Apartman
                  </span>
                  <select
                    className="p-2"
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
                </div>
                <div className="d-flex w-100">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Daire
                  </span>
                  <select
                    className="p-2"
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
              </div>
              <div className="input-group mb-3 d-flex">
                <div className="d-flex w-100 mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Fatura Türü
                  </span>
                  <input
                    type="text"
                    className="form-control ms-2"
                    onChange={(e) => setBillType(e.target.value)}
                    value={billType}
                  />
                </div>
                <div className="d-flex w-100 mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Fatura Tutarı
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="form-control ms-2"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                </div>
                <div className="d-flex w-100 mb-3">
                  <span
                    className="input-group-text "
                    id="inputGroup-sizing-default"
                  >
                    Son Ödeme Tarihi
                  </span>
                  <input
                    type="date"
                    className="form-control ms-2"
                    onChange={(e) => setDueDate(e.target.value)}
                    value={dueDate}
                  />
                </div>
                <div className="d-flex w-100">
                  <button type="submit" className="btn btn-primary w-100">
                    Güncelle
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default BillUpdateModal;
