import AddCreditCard from "./AddCreditCard";
import CreditCardList from "./CreditCardList";
import { useState, useEffect } from "react";
import creditCardService from "../../../services/creditCardService";

function UserCreditCardsManager() {
  const [creditCardList, setCreditCardList] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    creditCardService
      .getByEmail(
        `/api/creditcard/getcreditcardbyemail?email=${user.email}`,
        user
      )
      .then((response) => {
        setCreditCardList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">Kredi Kartlarım</h1>
      <AddCreditCard
        setCreditCardList={setCreditCardList}
        creditCardList={creditCardList}
      />
      <CreditCardList
        creditCardList={creditCardList}
        setCreditCardList={setCreditCardList}
        user={user}
      />
    </div>
  );
}

export default UserCreditCardsManager;
