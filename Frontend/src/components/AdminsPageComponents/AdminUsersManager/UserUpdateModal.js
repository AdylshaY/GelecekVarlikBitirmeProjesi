import React, { useEffect, useState } from "react";
import adminService from "../../../services/adminService";
import Styled from "./UserUpdateModal.styled";

function UserUpdateModal({ setIsOpen, userId, setUserList }) {
  const [identityNo, setIdentityNo] = useState();
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [carPlate, setCarPlate] = useState();
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    adminService.User.getUserById(userId)
      .then((response) => {
        setIdentityNo(response.citizenId);
        setFullName(response.fullName);
        setEmail(response.email);
        setPhoneNumber(response.phoneNumber);
        setCarPlate(response.carPlate);
        setUsername(response.username);
        setPwd(response.password);
        setIsActive(response.isActive);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      adminService.User.updateUser({
        id: userId,
        citizenId: identityNo,
        fullname: fullname,
        email: email,
        phoneNumber: phoneNumber,
        carPlate: carPlate,
        password: pwd,
        isActive: isActive,
        username: username,
      }).then(() => {
        adminService.User.getUserList()
          .then((response) => setUserList(response))
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
            <h5 className="heading2">Kullanıcı Bilgisi Güncelleme</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal2Content">
            <form className=" my-1 d-flex flex-column" onSubmit={handleSubmit}>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Kimlik No
                </span>
                <input
                  type="text"
                  className="form-control ms-2"
                  value={identityNo}
                  onChange={(event) => {
                    setIdentityNo(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  İsim Soyisim
                </span>
                <input
                  type="text"
                  className="form-control ms-2"
                  value={fullname}
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Email
                </span>
                <input
                  type="email"
                  className="form-control ms-2"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Telefon No
                </span>
                <input
                  type="tel"
                  className="form-control ms-2"
                  pattern="[0-9]{4}[0-9]{3}[0-9]{2}[0-9]{2}"
                  placeholder="0530 111 22 33"
                  value={phoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Araç Plakası
                </span>
                <input
                  type="text"
                  className="form-control ms-2"
                  value={carPlate}
                  onChange={(event) => {
                    setCarPlate(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Kullanıcı Adı
                </span>
                <input
                  type="text"
                  className="form-control ms-2"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Şifre
                </span>
                <input
                  type="text"
                  className="form-control ms-2"
                  value={pwd}
                  onChange={(event) => {
                    setPwd(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex my-2">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Aktif mi
                </span>
                <select
                  className="ms-4 p-2"
                  value={isActive}
                  onChange={(event) =>
                    setIsActive(event.target.value === "true")
                  }
                >
                  <option className="p-2" value={true}>
                    Aktif
                  </option>
                  <option className="p-2" value={false}>
                    Aktif Değil
                  </option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Güncelle
              </button>
            </form>
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default UserUpdateModal;
