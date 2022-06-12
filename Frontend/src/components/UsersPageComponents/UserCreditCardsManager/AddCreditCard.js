import Button from "../../Button/Button";
import { useState } from "react";
import creditCardService from "../../../services/creditCardService";

const AddCreditCard = ({ setCreditCardList, creditCardList }) => {
  const [cardNo, setCardNo] = useState();
  const [fullname, setFullname] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [cvv, setCvv] = useState();
  const [balance, setBalance] = useState();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    creditCardService
      .post("/api/creditcard", {
        creditCardNumber: cardNo,
        fullname: fullname,
        email: user.email,
        expirationDate: expirationDate,
        cvvNumber: cvv,
        balance: balance,
      })
      .then(() => {
        setCardNo("");
        setFullname("");
        setExpirationDate("");
        setCvv("");
        setBalance("");
        creditCardService
          .getByEmail(
            `/api/creditcard/getcreditcardbyemail?email=${user.email}`,
            user
          )
          .then((response) => {
            setCreditCardList(response.data);
          })
          .catch((error) => console.log(error));
      });
  };

  return (
    <form
      className="input-group my-4 d-flex justify-content-center"
      onSubmit={handleSubmit}
    >
      <div className="d-flex my-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Kart Numarası
        </span>
        <input
          required
          type="number"
          className="form-control"
          value={cardNo}
          onChange={(event) => setCardNo(event.target.value)}
        />
        <span className="input-group-text ms-5" id="inputGroup-sizing-default">
          Kart Sahibi
        </span>
        <input
          required
          type="text"
          className="form-control me-5"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
      </div>
      <div className="d-flex my-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Son Kullanma Tarihi
        </span>
        <input
          required
          type="month"
          className="form-control"
          value={expirationDate}
          onChange={(event) => setExpirationDate(event.target.value)}
        />
        <span className="input-group-text ms-5" id="inputGroup-sizing-default">
          CVV
        </span>
        <input
          required
          type="number"
          className="form-control me-5"
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
        />
        <span className="input-group-text" id="inputGroup-sizing-default">
          Bakiye
        </span>
        <input
          required
          type="number"
          className="form-control"
          value={balance}
          onChange={(event) => setBalance(Number(event.target.value))}
        />
      </div>
      <div className="d-flex my-3 mx-5">
        <Button name="Ekle" style={{ margin: 0 }} type="submit" />
      </div>
    </form>
  );
};

export default AddCreditCard;
