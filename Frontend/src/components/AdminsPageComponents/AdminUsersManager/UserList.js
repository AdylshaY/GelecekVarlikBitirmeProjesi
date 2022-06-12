import React, { useState } from "react";
import adminService from "../../../services/adminService";
import UserUpdateModal from "./UserUpdateModal";

function UserList({ userList, setUserList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState();

  return (
    <>
      <ul className="list-group mt-5">
        <h3>Kullanıcı Listesi</h3>
        {userList.map((user, key) => {
          return (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={key}
            >
              <span style={{ width: "200px" }}>İsim: {user.fullName}</span>
              <span style={{ width: "250px" }}>
                Telefon No: {user.phoneNumber}
              </span>
              <span style={{ width: "250px" }}>Şifre: {user.password}</span>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id={user.id}
                  onClick={(event) => {
                    setUserId(event.target.id);
                    setIsOpen(true);
                  }}
                >
                  Güncelle
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  id={user.id}
                  onClick={(event) => {
                    adminService.User.deleteUser(event.target.id)
                      .then(() => {
                        adminService.User.getUserList()
                          .then((response) => {
                            setUserList(response);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      })
                      .catch((error) => console.log(error));
                  }}
                >
                  Sil
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {isOpen && <UserUpdateModal setIsOpen={setIsOpen} userId={userId} setUserList={setUserList}/>}
    </>
  );
}

export default UserList;
