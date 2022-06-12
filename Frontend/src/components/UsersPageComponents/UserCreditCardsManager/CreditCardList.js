import React, { useEffect, useState } from "react";
import creditCardService from "../../../services/creditCardService";

const CreditCardList = ({ creditCardList, setCreditCardList, user }) => {
  return (
    <div className="mt-3">
      <hr />
      <ul className="list-group mt-5 ">
        {creditCardList.map((card, key) => {
          return (
            <li
              key={key}
              className="list-group-item d-flex justify-content-between mx-5"
            >
              <p className="my-2 d-inline-flex" style={{ width: "250px" }}>
                <strong>Kart No: </strong>
                <span className="ms-2">{card.creditCardNumber}</span>
              </p>
              <p className="my-2 d-inline-flex">
                <strong>Kart Sahibi:</strong>
                <span className="ms-2">{card.fullname}</span>
              </p>
              <p className="my-2 d-inline-flex">
                <strong>Son Kullanma Tarihi:</strong>
                <span className="ms-2">{card.expirationDate}</span>
              </p>
              <p className="my-2 d-inline-flex">
                <strong>Bakiye:</strong>
                <span className="ms-2">{card.balance} TL</span>
              </p>
              <button
                className="btn btn-danger"
                id={card.id}
                onClick={(event) => {
                  creditCardService
                    .delete(`/api/creditCard/${event.target.id}`)
                    .then(() =>
                      creditCardService
                        .getByEmail(
                          `/api/creditcard/getcreditcardbyemail?email=${user.email}`,
                          user
                        )
                        .then((response) => {
                          setCreditCardList(response.data);
                        })
                        .catch((error) => console.log(error))
                    );
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreditCardList;
