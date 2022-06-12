import { useState, useEffect } from "react";
import adminService from "../../../services/adminService";
import BillUpdateModal from "./BillUpdateModal";

function BillList({ billList, setBillList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState();

  return (
    <>
      <ul className="list-group">
        <h3>Fatura Listesi</h3>
        {billList.map((bill, key) => {
          return (
            <li
              key={key}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="ms-2">
                <p className="m-0 d-inline-flex">Fatura Türü: {bill.type}</p>
                <p className="ms-5 mb-0 d-inline-flex">
                  Fatura Tutarı: {bill.amount} TL
                </p>
                <p className="ms-5 mb-0 d-inline-flex">
                  Son Ödeme Tarihi: {bill.dueDate.slice(0, 10)}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id={bill.id}
                  onClick={(event) => {
                    setSelectedBill(event.target.id);
                    setIsOpen(true);
                  }}
                >
                  Güncelle
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  id={bill.id}
                  onClick={(event) =>
                    adminService.Bills.deleteBill(event.target.id)
                      .then(() => {
                        adminService.Bills.getBillList()
                          .then((response) => setBillList(response))
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
        <BillUpdateModal
          setIsOpen={setIsOpen}
          selectedBill={selectedBill}
          setBillList={setBillList}
        />
      )}
    </>
  );
}

export default BillList;
