import React, { useState } from "react";
import Button from "../../Button/Button";
import adminService from "../../../services/adminService";

function AddUser({ setUserList }) {
  const [identityNo, setIdentityNo] = useState();
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [carPlate, setCarPlate] = useState();
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [isActive, setIsActive] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      adminService.User.addNewUser({
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
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Kimlik No
        </span>
        <input
          type="text"
          className="form-control"
          value={identityNo}
          onChange={(event) => {
            setIdentityNo(event.target.value);
          }}
        />
        <span className="input-group-text ms-5" id="inputGroup-sizing-default">
          İsim Soyisim
        </span>
        <input
          type="text"
          className="form-control"
          value={fullname}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Email
        </span>
        <input
          type="email"
          className="form-control me-5"
          placeholder="example@mail.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <span className="input-group-text" id="inputGroup-sizing-default">
          Telefon No
        </span>
        <input
          type="tel"
          className="form-control me-5"
          pattern="[0-9]{4}[0-9]{3}[0-9]{2}[0-9]{2}"
          placeholder="0530 111 22 33"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <span className="input-group-text" id="inputGroup-sizing-default">
          Araç Plakası
        </span>
        <input
          type="text"
          className="form-control"
          value={carPlate}
          onChange={(event) => {
            setCarPlate(event.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Kullanıcı Adı
        </span>
        <input
          type="text"
          className="form-control me-5"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <span className="input-group-text" id="inputGroup-sizing-default">
          Şifre
        </span>
        <input
          type="text"
          className="form-control me-5"
          value={pwd}
          onChange={(event) => {
            setPwd(event.target.value);
          }}
        />
        <select
          className="me-4 p-2"
          onChange={(event) => setIsActive(event.target.value === "true")}
        >
          <option className="p-2" value={true}>
            Aktif
          </option>
          <option className="p-2" value={false}>
            Aktif Değil
          </option>
        </select>
        <Button name="Ekle" style={{ margin: 0 }} type="submit" />
      </div>
    </form>
  );
}

export default AddUser;
