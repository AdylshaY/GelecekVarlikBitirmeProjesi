import { useEffect, useState } from "react";
import userService from "../../../services/userService";

function UserBillsManager() {
  const [billList, setBillList] = useState([]);
  const [usersFlatList, setUsersFlatList] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    userService.flats
      .getUsersFlats(user.id)
      .then((response) => {
        setUsersFlatList(response);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (usersFlatList.length !== 0) {
      getBills();
    }
  }, [usersFlatList]);

  const getBills = async () => {
    usersFlatList.map((flat) => {
      userService.flats
        .getBillsByFlatId(flat.id)
        .then((response) => {
          setBillList((billList) => [...billList, ...response]);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="mt-5">
      <h1 className="text-center">Faturalarım</h1>
      <ul className="list-group mt-5 ">
        {billList.map((bill, key) => {
          return (
            <li
              key={key}
              className="list-group-item d-flex justify-content-between mx-5"
            >
              <p className="my-2 d-inline-flex" style={{width: "250px"}}>
                <strong>Fatura Türü: </strong>
                <span className="ms-2">{bill.type}</span>
              </p>
              <p className="my-2 d-inline-flex">
                <strong>Fatura Tutari:</strong>
                <span className="ms-2">{bill.amount} TL</span>
              </p>
              <p className="my-2 d-inline-flex">
                <strong>Son Ödeme Tarihi:</strong>
                <span className="ms-2">{bill.dueDate.slice(0,10)}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserBillsManager;
