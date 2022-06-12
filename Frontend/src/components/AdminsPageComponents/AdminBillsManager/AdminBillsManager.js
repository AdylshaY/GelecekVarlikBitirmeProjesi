import { useState, useEffect } from "react";
import BillList from "./BillList";
import AddBill from "./AddBill";
import adminService from "../../../services/adminService";

function AdminBillsManager() {
  const [billList, setBillList] = useState([]);

  useEffect(() => {
    adminService.Bills.getBillList()
      .then((response) => setBillList(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">Fatura Yönetimi</h1>
      <AddBill setBillList={setBillList} />
      <BillList billList={billList} setBillList={setBillList} />
    </div>
  );
}

export default AdminBillsManager;
